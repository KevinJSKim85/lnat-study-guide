/*
 * progress.js — storage-abstraction layer for progress tracking.
 *
 * Plan §1.5 / ADR-2 / AC-E5 / AC-E7:
 *   1. On init, feature-detect localStorage via a write -> read -> reload-probe.
 *   2. On failure, fall back to (a) IndexedDB, then (b) in-memory.
 *   3. ALWAYS provide first-class Export-to-JSON / Import controls.
 *   4. If no persistent storage over file://, show a NON-BLOCKING banner:
 *      "Progress won't survive reload in this browser — use Export."
 *
 * Namespace key: lnat.progress.v1 (versioned for safe migration — RK7).
 * No dependencies; works over file://. Exposes window.LNATProgress.
 *
 * Note on the "reload-probe": a single page load cannot directly observe whether
 * a value will survive a *future* reload. We approximate honestly:
 *   - A write->read round-trip rules out engines that throw or silently drop
 *     writes (e.g. some WebKit file:// configurations).
 *   - A persisted PROBE key, written on the very first init and re-checked on
 *     every later init, positively confirms cross-reload survival once observed.
 *   - Until survival is positively observed, persistence is reported as
 *     "unconfirmed" and the banner is shown, so we never *silently* lose data.
 */
(function (root) {
  "use strict";

  var NS = "lnat.progress.v1";
  var PROBE_KEY = "lnat.probe.v1";

  function emptyState() {
    return { version: NS, attempts: {}, typeStats: {}, mockScores: [], lessonsViewed: {} };
  }

  /* ------------------------------------------------------------------ *
   * localStorage backend with a write->read round-trip + reload probe.
   * ------------------------------------------------------------------ */
  function tryLocalStorage() {
    var ls;
    try {
      ls = root.localStorage;
      if (!ls) return null;
      var t = "__lnat_test__" + Math.random();
      ls.setItem(t, "1");
      if (ls.getItem(t) !== "1") return null; // silent-drop engine
      ls.removeItem(t);
    } catch (e) {
      return null; // throwing engine (e.g. WebKit file:// with storage disabled)
    }

    // Reload probe: did a value from a previous session survive?
    var reloadConfirmed = false;
    try {
      if (ls.getItem(PROBE_KEY)) {
        reloadConfirmed = true; // a prior session's probe is still here
      } else {
        ls.setItem(PROBE_KEY, String(Date.now())); // seed for next reload
      }
    } catch (e) { /* ignore */ }

    return {
      kind: "localStorage",
      persistent: true,
      reloadConfirmed: reloadConfirmed,
      read: function () {
        try {
          var raw = ls.getItem(NS);
          return raw ? JSON.parse(raw) : null;
        } catch (e) { return null; }
      },
      write: function (state) {
        try { ls.setItem(NS, JSON.stringify(state)); return true; }
        catch (e) { return false; }
      },
      clear: function () {
        try { ls.removeItem(NS); return true; } catch (e) { return false; }
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * IndexedDB backend — async under the hood, exposed via a cached snapshot
   * kept in sync so the rest of the engine can stay synchronous. We treat it
   * as persistent; the in-page cache is the working copy and is flushed on write.
   * ------------------------------------------------------------------ */
  function tryIndexedDB(onReady) {
    var idb = root.indexedDB;
    if (!idb) { onReady(null); return; }
    var db;
    var open;
    try { open = idb.open("lnat-progress", 1); }
    catch (e) { onReady(null); return; }

    open.onupgradeneeded = function () {
      try { open.result.createObjectStore("kv"); } catch (e) { /* ignore */ }
    };
    open.onerror = function () { onReady(null); };
    open.onsuccess = function () {
      db = open.result;
      // load existing snapshot
      var snapshot = null;
      try {
        var tx = db.transaction("kv", "readonly");
        var req = tx.objectStore("kv").get(NS);
        req.onsuccess = function () {
          snapshot = req.result || null;
          finish();
        };
        req.onerror = function () { finish(); };
      } catch (e) { finish(); }

      function finish() {
        onReady({
          kind: "indexedDB",
          persistent: true,
          reloadConfirmed: true, // IndexedDB persists across reloads where available
          _cache: snapshot,
          read: function () { return this._cache ? JSON.parse(JSON.stringify(this._cache)) : null; },
          write: function (state) {
            this._cache = JSON.parse(JSON.stringify(state));
            try {
              var tx2 = db.transaction("kv", "readwrite");
              tx2.objectStore("kv").put(state, NS);
              return true;
            } catch (e) { return false; }
          },
          clear: function () {
            this._cache = null;
            try {
              var tx3 = db.transaction("kv", "readwrite");
              tx3.objectStore("kv").delete(NS);
              return true;
            } catch (e) { return false; }
          }
        });
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * In-memory backend — last resort. Never persists; banner is mandatory.
   * ------------------------------------------------------------------ */
  function memoryBackend() {
    var store = null;
    return {
      kind: "memory",
      persistent: false,
      reloadConfirmed: false,
      read: function () { return store ? JSON.parse(JSON.stringify(store)) : null; },
      write: function (state) { store = JSON.parse(JSON.stringify(state)); return true; },
      clear: function () { store = null; return true; }
    };
  }

  /* ------------------------------------------------------------------ *
   * Public store object.
   * ------------------------------------------------------------------ */
  function makeStore(backend) {
    var state = backend.read() || emptyState();
    if (state.version !== NS) state = emptyState(); // simple migration guard

    function persist() { backend.write(state); }

    var api = {
      backendKind: backend.kind,
      isPersistent: !!backend.persistent,
      // True only once cross-reload survival is positively observed.
      isReloadConfirmed: !!backend.reloadConfirmed,

      getState: function () { return JSON.parse(JSON.stringify(state)); },

      recordAttempt: function (question, chosenIndex) {
        var correct = chosenIndex === question.answerIndex;
        state.attempts[question.id] = { chosenIndex: chosenIndex, correct: correct, ts: Date.now() };
        var t = question.type;
        if (!state.typeStats[t]) state.typeStats[t] = { seen: 0, correct: 0 };
        state.typeStats[t].seen += 1;
        if (correct) state.typeStats[t].correct += 1;
        persist();
        return correct;
      },

      recordMockScore: function (mockId, scoreA, total, band) {
        state.mockScores.push({ mockId: mockId, scoreA: scoreA, total: total, band: band, ts: Date.now() });
        persist();
      },

      // Record that a lesson was opened (for the Progress "lessons viewed" panel).
      recordLessonView: function (lessonId) {
        if (!state.lessonsViewed) state.lessonsViewed = {};
        state.lessonsViewed[lessonId] = Date.now();
        persist();
      },

      reset: function () {
        state = emptyState();
        backend.clear();
        persist();
      },

      // Export -> downloadable JSON via data URI (no server). AC-E7.
      exportJSON: function () {
        return JSON.stringify(state, null, 2);
      },
      downloadExport: function (filename) {
        var json = this.exportJSON();
        var uri = "data:application/json;charset=utf-8," + encodeURIComponent(json);
        var a = document.createElement("a");
        a.setAttribute("href", uri);
        a.setAttribute("download", filename || "lnat-progress.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },

      // Import -> parse + restore. Returns true on success. AC-E7.
      importJSON: function (jsonText) {
        try {
          var parsed = JSON.parse(jsonText);
          if (!parsed || typeof parsed !== "object") return false;
          state = {
            version: NS,
            attempts: parsed.attempts || {},
            typeStats: parsed.typeStats || {},
            mockScores: parsed.mockScores || [],
            lessonsViewed: parsed.lessonsViewed || {}
          };
          persist();
          return true;
        } catch (e) { return false; }
      }
    };
    return api;
  }

  /* ------------------------------------------------------------------ *
   * Non-blocking banner when persistence is not confirmed over file://.
   * ------------------------------------------------------------------ */
  var BANNER_DISMISS_KEY = "lnat.bannerDismissed.v1";

  // Read/write the banner-dismissed flag. Wrapped in try/catch because the banner
  // appears precisely when storage may be unreliable; a failure just means the
  // banner shows again, which is safe.
  function bannerDismissed() {
    try { return root.localStorage && root.localStorage.getItem(BANNER_DISMISS_KEY) === "1"; }
    catch (e) { return false; }
  }
  function rememberBannerDismissed() {
    try { if (root.localStorage) root.localStorage.setItem(BANNER_DISMISS_KEY, "1"); }
    catch (e) { /* ignore — banner will simply reappear next load */ }
  }

  function showBannerIfNeeded(store) {
    // Show when the active backend cannot confirm cross-reload survival.
    if (store.isReloadConfirmed) return false;
    if (typeof document === "undefined") return false;
    // Respect a prior dismissal so the banner doesn't nag on every reload.
    if (bannerDismissed()) return false;
    if (document.getElementById("lnat-storage-banner")) return true;

    var banner = document.createElement("div");
    banner.id = "lnat-storage-banner";
    banner.className = "storage-banner";
    banner.setAttribute("role", "status");
    banner.textContent = store.isPersistent
      ? "Your progress is saved locally. If it doesn’t survive a reload in this browser, use Export to keep a copy."
      : "Progress won’t survive reload in this browser — use Export. (For automatic saving, open in Chrome, Edge, or Firefox.)";

    var close = document.createElement("button");
    close.type = "button";
    close.className = "storage-banner-close";
    close.setAttribute("aria-label", "Dismiss this notice");
    close.textContent = "Dismiss";
    close.addEventListener("click", function () {
      rememberBannerDismissed();
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    });
    banner.appendChild(close);

    if (document.body) document.body.insertBefore(banner, document.body.firstChild);
    return true;
  }

  /* ------------------------------------------------------------------ *
   * init — pick the best backend, build the store, surface the banner.
   * Async because IndexedDB detection is async; resolves via callback.
   * ------------------------------------------------------------------ */
  function init(callback) {
    var ls = tryLocalStorage();
    if (ls) {
      var store = makeStore(ls);
      showBannerIfNeeded(store);
      callback(store);
      return;
    }
    // localStorage unavailable -> try IndexedDB.
    tryIndexedDB(function (idb) {
      var backend = idb || memoryBackend();
      var s = makeStore(backend);
      showBannerIfNeeded(s);
      callback(s);
    });
  }

  root.LNATProgress = {
    init: init,
    NS: NS,
    // exposed for tests
    _tryLocalStorage: tryLocalStorage,
    _memoryBackend: memoryBackend,
    _makeStore: makeStore,
    _showBannerIfNeeded: showBannerIfNeeded,
    _emptyState: emptyState
  };
})(typeof window !== "undefined" ? window : this);
