/*
 * app.js — page bootstrap and view wiring for the full LNAT study site.
 *
 * Wires the eight user-facing areas (Home, Learn, Practice, Mocks, Essays,
 * Schedule, Reference, Progress) to the existing engine modules and the
 * production data on window.LNAT_DATA. No fetch, no CDN, works over file://.
 *
 * Load order on the page: loader.js -> data scripts (data/manifest.js order) ->
 * engine modules (engine, timer, mock, progress, nav) -> this file. Runs after
 * DOMContentLoaded. Reads window.LNAT_DATA only.
 *
 * This file renders chrome and content; it never re-implements engine logic:
 *   - questions render via LNATEngine.renderQuestion (self-mark + rationale)
 *   - mocks resolve/score via LNATMock; timers via LNATTimer; progress via
 *     LNATProgress.
 */
(function (root) {
  "use strict";

  /* ---- Readable labels for the 11 Section A sub-type tokens -------------- */
  var TYPE_LABELS = {
    main: "Main Idea / Purpose (1a)",
    standpoint: "Author's Standpoint (1b)",
    structure: "Logical Structure (1c)",
    detail: "Explicit Detail (2a)",
    implied: "Stated vs Implied (2b)",
    inference: "Inference (3a)",
    factinf: "Fact vs Inference (3b)",
    assume: "Assumptions (4a)",
    opinion: "Opinion vs Assumption (4b)",
    vocab: "Meaning-in-Context (5a)",
    tone: "Tone (5b)"
  };
  // Stable display order for the 11 types.
  var TYPE_ORDER = ["main", "standpoint", "structure", "detail", "implied",
    "inference", "factinf", "assume", "opinion", "vocab", "tone"];

  var THEME_LABELS = {
    "law-justice": "Law & Justice",
    "civil-liberties": "Civil Liberties",
    "education-society": "Education & Society",
    "ethics": "Ethics & Morality",
    "politics-governance": "Politics & Governance",
    "media-tech-environment": "Media, Tech & Environment"
  };
  var THEME_ORDER = ["law-justice", "civil-liberties", "education-society",
    "ethics", "politics-governance", "media-tech-environment"];

  var progressStore = null;
  var navCtl = null;
  // Index drill items (9xx range) once so several views can reuse them.
  var drillIndex = null; // { questions:[], passagesById:{} }

  function byId(id) { return document.getElementById(id); }
  var E = root.LNATEngine && root.LNATEngine._el ? root.LNATEngine._el : basicEl;

  function basicEl(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function clear(node) { if (node) node.innerHTML = ""; }

  /* ====================================================================== *
   * Bootstrap                                                              *
   * ====================================================================== */
  function start() {
    var DATA = root.LNAT_DATA;

    // S1 / AC-Q6: assert the data manifest. A missing bucket logs a visible
    // console.error here; on a complete dataset this is silent.
    if (!DATA || typeof DATA.assertBuckets !== "function") {
      (root.console || {}).error("[LNAT] window.LNAT_DATA missing — loader.js did not run.");
      return;
    }
    DATA.assertBuckets();

    buildDrillIndex();

    // Nav (hash-routed). Render content lazily on first navigation per view so
    // initial paint is cheap; Home is rendered immediately below.
    navCtl = root.LNATNav.injectNav("#site-header", onNavigate);

    // Init progress (async due to IndexedDB detection), then wire interactive bits.
    root.LNATProgress.init(function (store) {
      progressStore = store;
      reflectStorageStatus(store);

      // Static / always-available renders.
      renderHome();
      renderLearn();
      renderEssaysStatic();
      renderSchedule();
      renderReference();
      wirePracticeControls();
      wireMocks();
      wireEssayPractice();
      wireProgressControls();
      wireSubtabs();

      // Activate the view named in the URL hash (default Home). No forced focus
      // on first paint so we don't yank the viewport on load.
      navCtl.activate(root.LNATNav.viewFromHash(), { updateHash: false, focus: false });
    });
  }

  // Per-view lazy refresh (Progress must recompute every time it is shown).
  function onNavigate(viewId) {
    if (viewId === "progress") renderProgress();
  }

  function reflectStorageStatus(store) {
    var el = byId("storage-status");
    if (!el) return;
    el.textContent =
      "Storage backend: " + store.backendKind +
      (store.isReloadConfirmed
        ? " (progress persists across reloads)."
        : " (reload-persistence unconfirmed — use Export to be safe).");
  }

  // Build the drill (9xx) item index: drills use the 9xx number range so mock
  // items (1xx–5xx) stay unseen in Practice.
  function buildDrillIndex() {
    var DATA = root.LNAT_DATA;
    var passagesById = {};
    (DATA.passages || []).forEach(function (p) { passagesById[p.id] = p; });
    function isDrill(id) {
      // numeric suffix >= 900 marks drill content (see data/questions/*).
      var m = /-(\d+)$/.exec(id || "");
      return m && parseInt(m[1], 10) >= 900;
    }
    var questions = (DATA.questions || []).filter(function (q) { return isDrill(q.id); });
    drillIndex = { questions: questions, passagesById: passagesById };
  }

  /* ====================================================================== *
   * HOME / ORIENTATION                                                     *
   * ====================================================================== */
  function renderHome() {
    var DATA = root.LNAT_DATA;
    var o = DATA.orientation || {};

    var ov = byId("home-overview");
    if (ov) { clear(ov); ov.appendChild(E("p", { text: o.overview || "" })); }

    // Format
    var fmt = byId("home-format");
    if (fmt && o.format) {
      clear(fmt);
      var a = o.format.sectionA || {}, b = o.format.sectionB || {}, t = o.format.total || {};
      var ul = E("ul", { class: "facts-list" }, [
        E("li", {}, [E("strong", { text: "Section A: " }),
          document.createTextNode((a.questions || 42) + " MCQs over " + (a.passages || 12) +
            " passages in " + (a.timeMinutes || 95) + " minutes; " + (a.optionsPerQuestion || 4) +
            " options each; " + (a.negativeMarking === false ? "no negative marking." : "negative marking applies."))]),
        E("li", {}, [E("strong", { text: "Section B: " }),
          document.createTextNode("1 essay chosen from " + (b.promptsOffered || 3) + " prompts in " +
            (b.timeMinutes || 40) + " minutes; " + (b.recommendedWords || "500–600") + " words.")]),
        E("li", {}, [E("strong", { text: "Total: " }),
          document.createTextNode((t.durationFormatted || "2 hours 15 minutes") + " — " + (t.sectionsTiming || "separately timed") + ".")])
      ]);
      fmt.appendChild(ul);
      if (a.notes) fmt.appendChild(E("p", { class: "muted small", text: a.notes }));
    }

    // Scoring + bands
    var sc = byId("home-scoring");
    if (sc && o.scoring) {
      clear(sc);
      sc.appendChild(E("p", { text: o.scoring.method || "" }));
      var means = o.scoring.nationalMeans || {};
      var meanBits = [];
      Object.keys(means).forEach(function (k) {
        if (k !== "longRunSummary") meanBits.push(k + ": " + means[k]);
      });
      if (meanBits.length) sc.appendChild(E("p", { class: "muted small", text: "National means — " + meanBits.join(" · ") + "." }));
      var table = E("table", { class: "bands-table" });
      table.appendChild(E("caption", { text: "Competitive bands (Section A, out of 42)" }));
      var thead = E("thead", {}, [E("tr", {}, [
        E("th", { scope: "col", text: "Band" }),
        E("th", { scope: "col", text: "Score" }),
        E("th", { scope: "col", text: "Context" })
      ])]);
      table.appendChild(thead);
      var tbody = E("tbody");
      (o.scoring.competitiveBands || []).forEach(function (band) {
        tbody.appendChild(E("tr", {}, [
          E("td", {}, [E("strong", { text: band.label })]),
          E("td", { text: band.range }),
          E("td", { class: "small", text: band.context })
        ]));
      });
      table.appendChild(tbody);
      sc.appendChild(table);
      if (o.scoring.bandNote) sc.appendChild(E("p", { class: "muted small", text: o.scoring.bandNote }));
    }

    // Timeline
    var tl = byId("home-timeline");
    if (tl && o.timeline2026) {
      clear(tl);
      var dl = E("dl", { class: "timeline" });
      (o.timeline2026.milestones || []).forEach(function (m) {
        dl.appendChild(E("dt", { text: m.date }));
        dl.appendChild(E("dd", { text: m.event }));
      });
      tl.appendChild(dl);
      if (o.timeline2026.studentNote) tl.appendChild(E("p", { class: "honesty-note", text: o.timeline2026.studentNote }));
    }

    // Universities
    var un = byId("home-universities");
    if (un && o.universities) {
      clear(un);
      var grid = E("div", { class: "uni-grid" });
      (o.universities.list || []).forEach(function (u) {
        grid.appendChild(E("div", { class: "uni-card" }, [
          E("h4", { text: u.name }),
          E("p", { class: "uni-mean", text: "Accepted MCQ mean: " + (u.acceptedMeanMCQ || "n/a") }),
          E("p", { class: "small muted", text: u.usage })
        ]));
      });
      un.appendChild(grid);
    }

    var note = byId("home-source-note");
    if (note) note.textContent = o._sourceNote || "";

    // Diagnostic: one illustrative drill question.
    var host = byId("home-diagnostic");
    if (host && drillIndex) {
      var q = drillIndex.questions[0];
      var passage = q ? drillIndex.passagesById[q.passageId] : null;
      if (!q) { host.textContent = "No diagnostic question available."; }
      else {
        root.LNATEngine.renderQuestion(host, q, {
          passage: passage,
          index: 1,
          onSubmit: function (correct, chosenIndex, question) {
            if (progressStore) progressStore.recordAttempt(question, chosenIndex);
            var rec = byId("diagnostic-recommendation");
            if (rec) {
              rec.hidden = false;
              rec.textContent = correct
                ? "Nice start. Recommended next step: drill a mix of types in Practice, then sit a timed mock."
                : "Good first attempt. Recommended next step: begin with the Learn lessons for this question type, then return to Practice drills.";
            }
          }
        });
      }
    }
  }

  /* ====================================================================== *
   * LEARN — Section A lessons (14, grouped by cluster)                     *
   * ====================================================================== */
  // Cluster display order (everything else falls under "Other").
  var CLUSTER_ORDER = [
    "Foundation Skills",
    "Argument Analysis",
    "Information Retrieval",
    "Inference & Implication",
    "Assumptions & Logical Gaps",
    "Argument Flaws",
    "Language, Style & Vocabulary",
    "Exam Technique",
    "Section B Technique"
  ];

  // Flat lesson id order, in the same cluster-grouped sequence the index renders.
  // Drives the Previous / Next controls so they follow the visible order.
  var lessonOrder = [];

  function renderLearn() {
    var DATA = root.LNAT_DATA;
    var lessons = DATA.lessons || [];
    var indexHost = byId("lesson-index");
    var detailHost = byId("lesson-detail");
    if (!indexHost || !detailHost) return;

    // Group by cluster.
    var byCluster = {};
    lessons.forEach(function (l) {
      var c = l.cluster || "Other";
      if (!byCluster[c]) byCluster[c] = [];
      byCluster[c].push(l);
    });
    var clusters = CLUSTER_ORDER.filter(function (c) { return byCluster[c]; });
    Object.keys(byCluster).forEach(function (c) {
      if (clusters.indexOf(c) === -1) clusters.push(c);
    });

    clear(indexHost);
    lessonOrder = [];
    clusters.forEach(function (c) {
      indexHost.appendChild(E("h3", { class: "cluster-heading", text: c }));
      var ul = E("ul", { class: "lesson-links" });
      byCluster[c].forEach(function (l) {
        lessonOrder.push(l.id);
        var btn = E("button", {
          type: "button",
          class: "lesson-link",
          "data-lesson-id": l.id,
          text: l.title
        });
        btn.addEventListener("click", function () { openLesson(l.id); });
        var li = E("li", {}, [btn]);
        ul.appendChild(li);
      });
      indexHost.appendChild(ul);
    });

    // Reflect which lessons have already been opened.
    refreshLessonReadState();

    // Open the first lesson by default.
    if (lessonOrder[0]) openLesson(lessonOrder[0], { focus: false });
  }

  // Mark index links for lessons the student has already opened (from
  // progressStore.lessonsViewed) with a "read" class + a check, so she sees at a
  // glance what is done. Re-run whenever a lesson is opened.
  function refreshLessonReadState() {
    if (!progressStore) return;
    var viewed = (progressStore.getState().lessonsViewed) || {};
    var links = document.querySelectorAll(".lesson-link");
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("data-lesson-id");
      var isRead = !!viewed[id];
      links[i].classList.toggle("is-read", isRead);
      // Title attr conveys state for pointer users; the ::after check is decorative.
      if (isRead) links[i].setAttribute("title", "Read");
      else links[i].removeAttribute("title");
    }
  }

  function openLesson(lessonId, opts) {
    opts = opts || {};
    var DATA = root.LNAT_DATA;
    var lesson = (DATA.lessons || []).filter(function (l) { return l.id === lessonId; })[0];
    var detailHost = byId("lesson-detail");
    if (!lesson || !detailHost) return;

    // active state in the index
    var links = document.querySelectorAll(".lesson-link");
    for (var i = 0; i < links.length; i++) {
      var on = links[i].getAttribute("data-lesson-id") === lessonId;
      if (on) links[i].setAttribute("aria-current", "true");
      else links[i].removeAttribute("aria-current");
    }

    clear(detailHost);
    var article = E("article", { class: "lesson-article" });
    article.appendChild(E("p", { class: "lesson-cluster-tag", text: lesson.cluster || "" }));
    article.appendChild(E("h3", { class: "lesson-title", text: lesson.title }));

    // explanation (HTML)
    article.appendChild(sectionBlock("What it is", htmlBlock(lesson.explanation)));

    // recognition cues (array)
    article.appendChild(sectionBlock("How to recognise it", listBlock(lesson.recognitionCues)));

    // worked example (HTML)
    article.appendChild(sectionBlock("Worked example", htmlBlock(lesson.workedExample)));

    // common traps (array)
    article.appendChild(sectionBlock("Common traps", listBlock(lesson.commonTraps, true)));

    // strategy (HTML)
    article.appendChild(sectionBlock("Strategy", htmlBlock(lesson.strategyBox)));

    // Previous / Next controls: move through lessonOrder. The ends are disabled
    // at the first / last lesson.
    article.appendChild(buildLessonNav(lessonId));

    detailHost.appendChild(article);

    if (progressStore) {
      progressStore.recordLessonView(lessonId);
      // The just-opened lesson is now "read" — refresh the index marks.
      refreshLessonReadState();
    }

    if (opts.focus !== false) {
      try { detailHost.querySelector(".lesson-title").setAttribute("tabindex", "-1"); detailHost.querySelector(".lesson-title").focus(); } catch (e) { /* ignore */ }
    }

    // On narrow screens the index sits above the detail; after opening a lesson,
    // bring the lesson content into view so she isn't left staring at the index.
    if (opts.scrollIntoView !== false && root.matchMedia && root.matchMedia("(max-width: 760px)").matches) {
      try { detailHost.scrollIntoView({ block: "start", behavior: "smooth" }); }
      catch (e) { if (detailHost.scrollIntoView) detailHost.scrollIntoView(); }
    }
  }

  // Build the "← Previous / Next →" footer for an open lesson.
  function buildLessonNav(lessonId) {
    var nav = E("div", { class: "lesson-nav", "aria-label": "Lesson navigation" });
    var pos = lessonOrder.indexOf(lessonId);
    var prevId = pos > 0 ? lessonOrder[pos - 1] : null;
    var nextId = (pos >= 0 && pos < lessonOrder.length - 1) ? lessonOrder[pos + 1] : null;

    var prevBtn = E("button", { type: "button", class: "btn lesson-prev", text: "← Previous" });
    if (!prevId) prevBtn.disabled = true;
    else prevBtn.addEventListener("click", function () { openLesson(prevId); });

    var posLabel = E("span", { class: "lesson-nav-pos muted small",
      text: (pos + 1) + " of " + lessonOrder.length });

    var nextBtn = E("button", { type: "button", class: "btn lesson-next", text: "Next →" });
    if (!nextId) nextBtn.disabled = true;
    else nextBtn.addEventListener("click", function () { openLesson(nextId); });

    nav.appendChild(prevBtn);
    nav.appendChild(posLabel);
    nav.appendChild(nextBtn);
    return nav;
  }

  function sectionBlock(heading, bodyNode) {
    var sec = E("section", { class: "lesson-section" });
    sec.appendChild(E("h4", { text: heading }));
    sec.appendChild(bodyNode);
    return sec;
  }
  function htmlBlock(html) {
    return E("div", { class: "rich", html: html || "" });
  }
  function listBlock(items, withMarkup) {
    var ul = E("ul", { class: "cue-list" });
    (items || []).forEach(function (it) {
      ul.appendChild(E("li", withMarkup ? { html: it } : { text: it }));
    });
    return ul;
  }

  /* ====================================================================== *
   * PRACTICE — drills (filter by type + difficulty)                        *
   * ====================================================================== */
  // Drill session bookkeeping for the "Question N of M" indicator + Next links.
  var drillSession = null; // { total, submitted, blocks:[] }

  function wirePracticeControls() {
    var form = byId("practice-filters");
    var typeSel = byId("filter-type");
    if (!form || !typeSel) return;

    // populate type options in canonical order
    TYPE_ORDER.forEach(function (t) {
      typeSel.appendChild(E("option", { value: t, text: TYPE_LABELS[t] }));
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      runDrill();
    });

    // "New drill" button reopens the (collapsed) filter form for another run.
    var newBtn = byId("practice-new");
    if (newBtn) newBtn.addEventListener("click", function () {
      showDrillFilters();
      try { typeSel.focus(); } catch (e2) { /* ignore */ }
    });
  }

  // Collapse the filter form once a drill is running; reveal the "New drill"
  // button so the student can start over without the form taking up space.
  function hideDrillFilters() {
    var form = byId("practice-filters");
    var newBtn = byId("practice-new");
    if (form) form.hidden = true;
    if (newBtn) newBtn.hidden = false;
  }
  function showDrillFilters() {
    var form = byId("practice-filters");
    var newBtn = byId("practice-new");
    if (form) form.hidden = false;
    if (newBtn) newBtn.hidden = true;
    var host = byId("practice-questions");
    if (host) clear(host);
    var prog = byId("practice-progress");
    if (prog) { prog.textContent = ""; prog.hidden = true; }
    var statusEl = byId("practice-status");
    if (statusEl) statusEl.textContent = "";
    drillSession = null;
  }

  // Update the running "Question N of M answered" indicator.
  function updateDrillProgress() {
    var prog = byId("practice-progress");
    if (!prog || !drillSession) return;
    prog.hidden = false;
    prog.textContent = "Question " + Math.min(drillSession.submitted + 1, drillSession.total) +
      " of " + drillSession.total +
      " · " + drillSession.submitted + " answered";
  }

  function runDrill() {
    if (!drillIndex) return;
    var type = byId("filter-type").value;
    var diff = byId("filter-difficulty").value;
    var count = parseInt(byId("filter-count").value, 10);
    var statusEl = byId("practice-status");
    var host = byId("practice-questions");
    clear(host);

    var pool = drillIndex.questions.filter(function (q) {
      return (type === "all" || q.type === type) && (diff === "all" || q.difficulty === diff);
    });

    if (!pool.length) {
      statusEl.textContent = "No drill questions match that filter. Try a different difficulty or select \"All difficulties\" — not all question types have questions at every difficulty level.";
      var prog0 = byId("practice-progress");
      if (prog0) { prog0.textContent = ""; prog0.hidden = true; }
      return;
    }

    // shuffle a copy, then slice
    var shuffled = pool.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
    }
    var picked = (count > 0) ? shuffled.slice(0, count) : shuffled;

    statusEl.textContent = "Showing " + picked.length + " of " + pool.length +
      " matching drill question" + (pool.length === 1 ? "" : "s") +
      (type === "all" ? "" : " · " + TYPE_LABELS[type]) +
      (diff === "all" ? "" : " · " + diff) + ".";

    // Collapse the filter form for an uncluttered run; expose "New drill".
    hideDrillFilters();

    drillSession = { total: picked.length, submitted: 0, blocks: [] };
    updateDrillProgress();

    // Render PER-QUESTION: the passage panel repeats above each question
    // (drills shuffle across passages, so grouping would defeat the shuffle).
    // Per-question self-marking + rationale reveal are unchanged.
    picked.forEach(function (q, idx) {
      var block = E("div", { class: "qb-item" });
      host.appendChild(block);
      root.LNATEngine.renderQuestion(block, q, {
        passage: drillIndex.passagesById[q.passageId],
        index: idx + 1,
        onSubmit: function (correct, chosenIndex, question) {
          if (progressStore) progressStore.recordAttempt(question, chosenIndex);
          if (drillSession) {
            drillSession.submitted += 1;
            updateDrillProgress();
          }
        }
      });
      if (drillSession) drillSession.blocks[idx] = block;
      addDrillNextAffordance(block, idx + 1);
    });
  }

  // After a question is submitted, reveal a "Next question" affordance that
  // scrolls to the following question (or the New-drill button on the last one).
  function addDrillNextAffordance(block, idx) {
    var isLast = drillSession && idx >= drillSession.total;
    var nextLink = E("button", {
      type: "button",
      class: "btn drill-next",
      hidden: "hidden",
      text: isLast ? "Finish — back to filters" : "Next question ▾"
    });
    block.appendChild(nextLink);
    nextLink.addEventListener("click", function () {
      if (drillSession && idx >= drillSession.total) {
        var newBtn = byId("practice-new");
        if (newBtn) {
          try { newBtn.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) { newBtn.scrollIntoView(); }
          try { newBtn.focus(); } catch (e2) { /* ignore */ }
        }
        return;
      }
      var target = drillSession && drillSession.blocks[idx]; // idx is 1-based -> blocks[idx] is the next question
      if (target) {
        try { target.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) { target.scrollIntoView(); }
        var firstInput = target.querySelector(".option-input");
        if (firstInput) { try { firstInput.focus({ preventScroll: true }); } catch (e3) { /* ignore */ } }
      }
    });
    // Reveal the Next affordance only after this question is submitted. The
    // engine marks the question submitted synchronously on this same click.
    var submitBtn = block.querySelector(".submit-answer");
    if (submitBtn) {
      submitBtn.addEventListener("click", function () { nextLink.hidden = false; });
    }
  }

  /* ====================================================================== *
   * MOCKS — list 7, run timed (Section A then Section B), score report     *
   * ====================================================================== */
  var mockState = null; // active run state

  function wireMocks() {
    renderMockList();
  }

  // Most recent Section A attempt for a given mock id, or null.
  function lastAttemptFor(mockId) {
    if (!progressStore) return null;
    var scores = (progressStore.getState().mockScores || []);
    var latest = null;
    scores.forEach(function (s) {
      if (s.mockId === mockId && (!latest || s.ts > latest.ts)) latest = s;
    });
    return latest;
  }

  function renderMockList() {
    var DATA = root.LNAT_DATA;
    var host = byId("mock-list");
    if (!host) return;
    clear(host);
    var mocks = DATA.mocks || [];
    if (!mocks.length) { host.textContent = "No mocks loaded."; return; }

    mocks.forEach(function (mock) {
      var resolved = root.LNATMock.resolveMock(mock);
      var qCount = resolved ? resolved.questions.length : 0;
      var cardMain = E("div", { class: "mock-card-main" }, [
        E("h3", { text: mock.title || mock.id }),
        E("p", { class: "muted small", text: "Section A: " + qCount + " questions, 95 min · Section B: " +
          (resolved ? resolved.prompts.length : 3) + " prompts, 40 min" })
      ]);

      // Last-attempt badge from saved progress (mockScores), e.g.
      // "Last attempt: 28/42 — Competitive".
      var last = lastAttemptFor(mock.id);
      if (last) {
        cardMain.appendChild(E("p", { class: "mock-last-attempt" }, [
          E("span", { class: "mock-last-label", text: "Last attempt: " }),
          E("strong", { text: last.scoreA + "/" + last.total }),
          document.createTextNode(" — " + last.band)
        ]));
      }

      var card = E("div", { class: "mock-card" }, [cardMain]);
      var btn = E("button", { type: "button", class: "btn btn-primary", text: last ? "Retake mock" : "Start mock" });
      btn.addEventListener("click", function () { startMock(mock); });
      card.appendChild(btn);
      host.appendChild(card);
    });
  }

  function startMock(mock) {
    var resolved = root.LNATMock.resolveMock(mock);
    if (!resolved) return;

    // reset any prior run
    if (mockState && mockState.timer) mockState.timer.reset();
    mockState = {
      mock: mock,
      resolved: resolved,
      answers: {},
      phase: "A",
      finishedA: false,
      timer: null,
      controllers: [],   // one per question, in display order
      paletteBtns: []     // palette buttons, parallel to controllers
    };

    byId("mock-list").hidden = true;
    var runner = byId("mock-runner");
    runner.hidden = false;
    byId("mock-runner-title").textContent = mock.title || mock.id;
    byId("mock-essay").hidden = true;
    clear(byId("mock-essay"));
    clear(byId("mock-report"));
    var paletteHost = byId("mock-palette");
    if (paletteHost) { clear(paletteHost); paletteHost.hidden = false; }

    var quit = byId("mock-quit");
    quit.onclick = quitMock;

    startSectionA();
    // scroll runner into view + focus the title for context
    var title = byId("mock-runner-title");
    if (title) { title.setAttribute("tabindex", "-1"); try { title.focus(); } catch (e) {} }
  }

  function startSectionA() {
    var phaseLabel = byId("mock-phase-label");
    phaseLabel.textContent = "Section A — 42 questions, 95 minutes, no negative marking. Submit each question to lock it; then end the section.";
    var timerDisplay = byId("mock-timer");
    var qHost = byId("mock-questions");
    qHost.hidden = false;
    clear(qHost);

    mockState.timer = root.LNATTimer.create({
      seconds: 95 * 60,
      allowPause: false,
      onTick: function (rem, str) { timerDisplay.textContent = "Section A: " + str; },
      onExpire: function () { finishSectionA(); }
    });
    mockState.timer.start();

    // Build a passage lookup, then render the questions GROUPED by passage so
    // each passage's reading text appears ONCE with its 3–4 questions beneath
    // it (previously the full passage re-rendered for every question). Question
    // numbering/order, self-marking, answer recording and scoring are unchanged.
    var mockPassagesById = {};
    (mockState.resolved.passages || []).forEach(function (p) { mockPassagesById[p.id] = p; });

    mockState.controllers = [];
    mockState.paletteBtns = [];

    root.LNATEngine.renderPassageGroups(qHost, mockState.resolved.questions, {
      passagesById: mockPassagesById,
      startIndex: 1,
      onSubmit: function (correct, chosenIndex, question) {
        mockState.answers[question.id] = chosenIndex;
        if (progressStore) progressStore.recordAttempt(question, chosenIndex);
        markPaletteAnswered(question.id);
      },
      onQuestionRender: function (block, q, idx, ctl) {
        block.id = "mock-q-" + idx;          // scroll target for the palette
        block.setAttribute("data-q-index", idx);
        mockState.controllers[idx - 1] = { ctl: ctl, question: q, block: block };
      }
    });

    // Numbered palette (1..N) under the runner bar; click jumps to a question.
    buildMockPalette();

    var endBtn = E("button", {
      type: "button", class: "btn btn-primary section-end-btn", id: "mock-end-a",
      text: "End Section A & see score"
    });
    endBtn.addEventListener("click", finishSectionA);
    qHost.appendChild(endBtn);
  }

  // Build the compact numbered question palette for mock Section A. Each cell is
  // a button that scrolls to its question; answered cells get an "answered" tag.
  function buildMockPalette() {
    var host = byId("mock-palette");
    if (!host) return;
    clear(host);
    host.hidden = false;
    var grid = E("div", { class: "palette-grid", role: "list", "aria-label": "Question navigator" });
    mockState.controllers.forEach(function (entry, i) {
      var n = i + 1;
      var btn = E("button", {
        type: "button",
        class: "palette-cell",
        role: "listitem",
        "aria-label": "Go to question " + n + " (unanswered)",
        text: String(n)
      });
      btn.addEventListener("click", function () {
        var target = byId("mock-q-" + n);
        if (target) {
          try { target.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) { target.scrollIntoView(); }
          var firstInput = target.querySelector(".option-input");
          if (firstInput) { try { firstInput.focus({ preventScroll: true }); } catch (e2) { /* ignore */ } }
        }
      });
      mockState.paletteBtns[i] = btn;
      grid.appendChild(btn);
    });
    host.appendChild(grid);
  }

  // Flip a palette cell to the "answered" state when its question is submitted.
  function markPaletteAnswered(questionId) {
    if (!mockState || !mockState.controllers) return;
    for (var i = 0; i < mockState.controllers.length; i++) {
      var entry = mockState.controllers[i];
      if (entry && entry.question && entry.question.id === questionId) {
        var btn = mockState.paletteBtns[i];
        if (btn) {
          btn.classList.add("is-answered");
          btn.setAttribute("aria-label", "Go to question " + (i + 1) + " (answered)");
        }
        return;
      }
    }
  }

  function finishSectionA() {
    if (!mockState || mockState.finishedA) return;
    mockState.finishedA = true;
    if (mockState.timer) mockState.timer.reset();

    var result = root.LNATMock.scoreSectionA(mockState.resolved.questions, mockState.answers);
    if (progressStore) progressStore.recordMockScore(mockState.mock.id, result.score, result.total, result.band.label);

    // Disable further answering visually; keep questions visible for review.
    var qHost = byId("mock-questions");
    var endBtn = byId("mock-end-a");
    if (endBtn) endBtn.disabled = true;

    var reportHost = byId("mock-report");
    clear(reportHost);

    // A "Begin Section B" button at the TOP of the report so it's reachable
    // without scrolling past the per-type breakdown.
    var toBTop = E("button", { type: "button", class: "btn btn-primary section-b-btn", text: "Begin Section B (essay)" });
    toBTop.addEventListener("click", startSectionB);
    reportHost.appendChild(toBTop);

    reportHost.appendChild(root.LNATMock.buildScoreReport(result, { typeLabels: TYPE_LABELS }));

    var reviewNote = E("p", { class: "muted", text: "Section A is locked. Scroll up to review every question with its rationale and worked solution — use the question navigator to jump. When ready, begin Section B." });
    reportHost.appendChild(reviewNote);

    var toB = E("button", { type: "button", class: "btn btn-primary section-b-btn", text: "Begin Section B (essay)" });
    toB.addEventListener("click", startSectionB);
    reportHost.appendChild(toB);

    byId("mock-timer").textContent = "Section A complete";

    // Bring the score report into view — it otherwise sits below all 42
    // questions. Focus its heading so keyboard / screen-reader users land here.
    var reportHeading = reportHost.querySelector("h2");
    if (reportHeading) {
      if (!reportHeading.hasAttribute("tabindex")) reportHeading.setAttribute("tabindex", "-1");
    }
    try { reportHost.scrollIntoView({ block: "start", behavior: "smooth" }); }
    catch (e) { if (reportHost.scrollIntoView) reportHost.scrollIntoView(); }
    if (reportHeading) { try { reportHeading.focus({ preventScroll: true }); } catch (e2) { /* ignore */ } }
  }

  function startSectionB() {
    mockState.phase = "B";
    var phaseLabel = byId("mock-phase-label");
    phaseLabel.textContent = "Section B — choose ONE prompt and write 500–600 words in 40 minutes.";
    var timerDisplay = byId("mock-timer");
    var essayHost = byId("mock-essay");
    essayHost.hidden = false;
    clear(essayHost);

    // hide Section A questions + navigator to focus the writer
    byId("mock-questions").hidden = true;
    var paletteHost = byId("mock-palette");
    if (paletteHost) paletteHost.hidden = true;

    var prompts = mockState.resolved.prompts;
    essayHost.appendChild(buildEssayWriter(prompts, {
      sectionLabel: "Section B",
      onTick: function (str) { timerDisplay.textContent = "Section B: " + str; },
      onTimerExpire: function () { timerDisplay.textContent = "Section B time up"; }
    }));

    essayHost.scrollIntoView ? essayHost.scrollIntoView({ block: "start" }) : null;
  }

  function quitMock() {
    if (mockState && mockState.timer) mockState.timer.reset();
    mockState = null;
    byId("mock-runner").hidden = true;
    byId("mock-list").hidden = false;
    clear(byId("mock-questions"));
    clear(byId("mock-report"));
    clear(byId("mock-essay"));
    var paletteHost = byId("mock-palette");
    if (paletteHost) { clear(paletteHost); paletteHost.hidden = true; }
    byId("mock-timer").textContent = "";
    // Refresh the list so a just-finished attempt shows its last-attempt badge.
    renderMockList();
  }

  /* ====================================================================== *
   * ESSAYS — Section B (guide, banks, prompts, models, practice)           *
   * ====================================================================== */
  function renderEssaysStatic() {
    renderEssayGuide();
    renderEssayBanks();
    renderEssayPrompts();
    renderEssayModels();
  }

  function renderEssayGuide() {
    var DATA = root.LNAT_DATA;
    var host = byId("essay-guide");
    if (!host) return;
    clear(host);
    (DATA.essayGuide || []).forEach(function (g) {
      var details = E("details", { class: "guide-doc" });
      // Open the fundamentals doc by default; keep the checklist collapsed.
      if (g.id === "essay-fundamentals") details.open = true;
      var summary = E("summary", {}, [E("strong", { text: g.title })]);
      details.appendChild(summary);
      details.appendChild(E("div", { class: "rich", html: g.body }));
      host.appendChild(details);
    });
  }

  function renderEssayBanks() {
    var DATA = root.LNAT_DATA;
    var sel = byId("bank-theme");
    var host = byId("essay-banks");
    if (!sel || !host) return;
    var banks = DATA.argumentBanks || [];

    // populate theme select from available banks, canonical order
    clear(sel);
    var themesPresent = THEME_ORDER.filter(function (t) {
      return banks.some(function (b) { return b.theme === t; });
    });
    themesPresent.forEach(function (t) {
      sel.appendChild(E("option", { value: t, text: THEME_LABELS[t] || t }));
    });

    function show(theme) {
      clear(host);
      var bank = banks.filter(function (b) { return b.theme === theme; })[0];
      if (!bank) { host.textContent = "No argument bank for that theme."; return; }
      host.appendChild(bankColumn("Positions", bank.positions));
      host.appendChild(bankColumn("Counter-positions", bank.counterPositions));
      host.appendChild(bankColumn("Examples", bank.examples));
      host.appendChild(bankColumn("Facts (traceable)", bank.facts));
    }
    sel.onchange = function () { show(sel.value); };
    if (themesPresent.length) show(themesPresent[0]);
  }

  function bankColumn(title, items) {
    var card = E("div", { class: "panel-card bank-block" });
    card.appendChild(E("h3", { text: title }));
    var ul = E("ul", { class: "bank-list" });
    (items || []).forEach(function (it) { ul.appendChild(E("li", { text: it })); });
    card.appendChild(ul);
    return card;
  }

  function renderEssayPrompts() {
    var DATA = root.LNAT_DATA;
    var themeSel = byId("prompt-theme");
    var sourceSel = byId("prompt-source");
    var host = byId("essay-prompts");
    var countEl = byId("prompt-count");
    if (!themeSel || !host) return;
    var prompts = DATA.prompts || [];

    // populate theme options (canonical order, only those present)
    var themesPresent = THEME_ORDER.filter(function (t) {
      return prompts.some(function (p) { return p.theme === t; });
    });
    themesPresent.forEach(function (t) {
      themeSel.appendChild(E("option", { value: t, text: THEME_LABELS[t] || t }));
    });

    function render() {
      var theme = themeSel.value;
      var source = sourceSel.value;
      clear(host);
      var list = prompts.filter(function (p) {
        return (theme === "all" || p.theme === theme) && (source === "all" || p.source === source);
      });
      // official-cited first, then by theme order
      list.sort(function (a, b) {
        if (a.source !== b.source) return a.source === "official-cited" ? -1 : 1;
        return THEME_ORDER.indexOf(a.theme) - THEME_ORDER.indexOf(b.theme);
      });
      if (countEl) countEl.textContent = list.length + " prompt" + (list.length === 1 ? "" : "s") + " shown.";
      if (!list.length) { host.textContent = "No prompts match that filter."; return; }
      var ul = E("ul", { class: "prompt-list" });
      list.forEach(function (p) {
        var official = p.source === "official-cited";
        var li = E("li", { class: "prompt-item" });
        li.appendChild(E("span", { class: "badge " + (official ? "badge-official" : "badge-illustrative"),
          text: official ? "Official (cited)" : "Illustrative" }));
        li.appendChild(E("span", { class: "prompt-theme-tag", text: THEME_LABELS[p.theme] || p.theme }));
        li.appendChild(E("p", { class: "prompt-text", text: p.text }));
        if (official && p.citation) {
          li.appendChild(E("p", { class: "small muted", text: "Source: " + p.citation }));
        }
        ul.appendChild(li);
      });
      host.appendChild(ul);
    }
    themeSel.onchange = render;
    sourceSel.onchange = render;
    render();
  }

  function renderEssayModels() {
    var DATA = root.LNAT_DATA;
    var sel = byId("model-quality");
    var host = byId("essay-models");
    if (!sel || !host) return;
    var essays = DATA.modelEssays || [];
    var promptsById = {};
    (DATA.prompts || []).forEach(function (p) { promptsById[p.id] = p; });

    function render() {
      var want = sel.value;
      clear(host);
      var list = essays.filter(function (e) { return want === "all" || e.quality === want; });
      // models first, then weak
      list.sort(function (a, b) {
        if (a.quality !== b.quality) return a.quality === "model" ? -1 : 1;
        return 0;
      });
      list.forEach(function (essay) {
        host.appendChild(buildModelEssayCard(essay, promptsById[essay.promptId]));
      });
    }
    sel.onchange = render;
    render();
  }

  function buildModelEssayCard(essay, prompt) {
    var isModel = essay.quality === "model";
    var card = E("article", { class: "essay-card " + (isModel ? "essay-model" : "essay-weak") });
    var header = E("div", { class: "essay-card-head" }, [
      E("span", { class: "badge " + (isModel ? "badge-model" : "badge-weak"),
        text: isModel ? "Model essay" : "Weak essay" })
    ]);
    if (prompt) header.appendChild(E("span", { class: "prompt-theme-tag", text: THEME_LABELS[prompt.theme] || prompt.theme }));
    card.appendChild(header);
    if (prompt) card.appendChild(E("p", { class: "essay-prompt", text: "Prompt: " + prompt.text }));

    var cols = E("div", { class: "essay-cols" });
    // essay body (paragraphs split on \n\n)
    var bodyCol = E("div", { class: "essay-body" });
    String(essay.body || "").split(/\n\n+/).forEach(function (para) {
      bodyCol.appendChild(E("p", { text: para }));
    });
    cols.appendChild(bodyCol);

    // annotations
    var annCol = E("aside", { class: "essay-annotations", "aria-label": "Annotations" });
    annCol.appendChild(E("h4", { text: "Annotations" }));
    (essay.annotations || []).forEach(function (a) {
      var label = a.rubricDim
        ? "Rubric · " + a.rubricDim
        : (a.fiveI ? "Five-I · " + a.fiveI : "Note");
      var item = E("div", { class: "annotation " + (a.rubricDim ? "ann-rubric" : "ann-fivei") }, [
        E("span", { class: "annotation-label", text: label }),
        E("p", { class: "annotation-note", text: a.note })
      ]);
      annCol.appendChild(item);
    });
    cols.appendChild(annCol);

    card.appendChild(cols);
    return card;
  }

  /* ---- Essay practice mode: pick prompt -> 40-min timer -> textarea ----- */
  function wireEssayPractice() {
    var host = byId("essay-practice");
    if (!host) return;
    clear(host);
    var DATA = root.LNAT_DATA;
    // onWriteAnother re-renders a fresh writer (prompt chooser + timer + box) and
    // returns the student to the top of the practice area to start again.
    host.appendChild(buildEssayWriter(DATA.prompts || [], {
      sectionLabel: "Practice",
      standalone: true,
      onWriteAnother: function () {
        wireEssayPractice();
        try { host.scrollIntoView({ block: "start", behavior: "smooth" }); }
        catch (e) { if (host.scrollIntoView) host.scrollIntoView(); }
      }
    }));
  }

  /*
   * buildEssayWriter — shared Section B editor used by Mocks (Section B) and the
   * Essays practice tab. Renders a prompt chooser, a 40-minute timer, a textarea
   * with a live word count, and (on finish/expiry) the self-marking checklist
   * with the honesty note.
   *
   * @param {Array} prompts  prompt objects to choose from
   * @param {Object} opts
   *   @param {String} opts.sectionLabel   "Section B" | "Practice"
   *   @param {Boolean} opts.standalone    true on the Essays tab (own timer UI)
   *   @param {Function} opts.onTick       optional (formatted) — drives an external timer display
   *   @param {Function} opts.onTimerExpire optional callback when time runs out
   * @returns {HTMLElement}
   */
  function buildEssayWriter(prompts, opts) {
    opts = opts || {};
    var DATA = root.LNAT_DATA;
    var wrap = E("div", { class: "essay-writer" });

    // 1. prompt chooser
    var chooser = E("div", { class: "panel-card" });
    chooser.appendChild(E("h3", { text: "Choose one prompt" }));
    var promptId = prompts.length ? prompts[0].id : null;

    if (opts.standalone) {
      // full filter for the practice tab
      var filterRow = E("div", { class: "filter-bar" });
      var themeField = E("div", { class: "field" });
      themeField.appendChild(E("label", { "for": "practice-prompt-theme", text: "Theme" }));
      var themeSel = E("select", { id: "practice-prompt-theme" });
      themeSel.appendChild(E("option", { value: "all", text: "All themes" }));
      THEME_ORDER.forEach(function (t) {
        if ((DATA.prompts || []).some(function (p) { return p.theme === t; })) {
          themeSel.appendChild(E("option", { value: t, text: THEME_LABELS[t] || t }));
        }
      });
      themeField.appendChild(themeSel);
      filterRow.appendChild(themeField);
      chooser.appendChild(filterRow);
    }

    var promptSelectField = E("div", { class: "field field-grow" });
    promptSelectField.appendChild(E("label", { "for": "essay-prompt-select", text: "Prompt" }));
    var promptSel = E("select", { id: "essay-prompt-select", class: "prompt-select" });
    promptSelectField.appendChild(promptSel);
    chooser.appendChild(promptSelectField);

    var promptEcho = E("p", { class: "prompt-text chosen-prompt" });
    chooser.appendChild(promptEcho);

    function fillPromptOptions(filterTheme) {
      clear(promptSel);
      var list = prompts.filter(function (p) { return !filterTheme || filterTheme === "all" || p.theme === filterTheme; });
      list.forEach(function (p) {
        var tag = (p.source === "official-cited" ? "[Official] " : "");
        promptSel.appendChild(E("option", { value: p.id, text: tag + p.text }));
      });
      promptId = list.length ? list[0].id : null;
      echoPrompt();
    }
    function echoPrompt() {
      var p = prompts.filter(function (x) { return x.id === promptSel.value; })[0]
        || prompts.filter(function (x) { return x.id === promptId; })[0];
      if (p) {
        promptId = p.id;
        promptEcho.textContent = p.text + (p.source === "official-cited" ? "  (official prompt — cited)" : "  (illustrative)");
      } else {
        promptEcho.textContent = "";
      }
    }
    promptSel.addEventListener("change", echoPrompt);
    if (opts.standalone) {
      var ts = chooser.querySelector("#practice-prompt-theme");
      if (ts) ts.addEventListener("change", function () { fillPromptOptions(ts.value); });
    }
    fillPromptOptions("all");

    wrap.appendChild(chooser);

    // 2. timer + editor card
    var editorCard = E("div", { class: "panel-card" });
    var controls = E("div", { class: "controls-row" });
    var startBtn = E("button", { type: "button", class: "btn btn-primary", text: "Start 40-minute timer" });
    var localTimerDisplay = E("span", { class: "timer-display" });
    var finishBtn = E("button", { type: "button", class: "btn", text: "Finish & self-mark", disabled: "disabled" });
    controls.appendChild(startBtn);
    if (opts.standalone) controls.appendChild(localTimerDisplay);
    controls.appendChild(finishBtn);
    editorCard.appendChild(controls);

    var ta = E("textarea", {
      class: "essay-textarea",
      rows: "16",
      "aria-label": "Your essay",
      placeholder: "Write your essay here. The timer does not stop you typing when it reaches zero; it simply prompts you to finish and self-mark."
    });
    editorCard.appendChild(ta);
    var wc = E("p", { class: "muted word-count", "aria-live": "polite", text: "0 words" });
    editorCard.appendChild(wc);
    wrap.appendChild(editorCard);

    // 3. checklist mount (hidden until finish)
    var checklistMount = E("div", { class: "checklist-mount" });
    wrap.appendChild(checklistMount);

    function countWords() {
      var t = ta.value.trim();
      var n = t ? t.split(/\s+/).length : 0;
      wc.textContent = n + " word" + (n === 1 ? "" : "s") +
        (n >= 500 && n <= 600 ? " · in the 500–600 target" : (n > 750 ? " · over 750 (too long)" : (n > 0 && n < 500 ? " · below 500 (develop further)" : "")));
      return n;
    }
    ta.addEventListener("input", countWords);

    var timer = root.LNATTimer.create({
      seconds: 40 * 60,
      allowPause: false,
      onTick: function (rem, str) {
        localTimerDisplay.textContent = "Essay: " + str;
        if (typeof opts.onTick === "function") opts.onTick(str);
      },
      onExpire: function () {
        if (typeof opts.onTimerExpire === "function") opts.onTimerExpire();
        finish();
      }
    });

    startBtn.addEventListener("click", function () {
      startBtn.disabled = true;
      finishBtn.disabled = false;
      timer.start();
      ta.focus();
    });

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      timer.reset();
      finishBtn.disabled = true;
      var n = countWords();
      clear(checklistMount);
      // Pass the reset callback only when one was supplied (the standalone
      // practice tab). Mock Section B is one-shot, so it gets no reset button.
      checklistMount.appendChild(buildChecklistView(n, opts.onWriteAnother));
      checklistMount.scrollIntoView ? checklistMount.scrollIntoView({ block: "start" }) : null;
    }
    finishBtn.addEventListener("click", finish);

    countWords();
    return wrap;
  }

  // Render the self-marking checklist (the essayGuide 'essay-checklist' doc),
  // prefixed with the live word count for item 16, and carrying the honesty note.
  // When onWriteAnother is supplied, a "Write another essay" button is appended
  // that resets the practice (pick prompt -> timer -> write).
  function buildChecklistView(wordCount, onWriteAnother) {
    var DATA = root.LNAT_DATA;
    var checklist = (DATA.essayGuide || []).filter(function (g) { return g.id === "essay-checklist"; })[0];
    var card = E("div", { class: "panel-card checklist-card" });
    card.appendChild(E("h3", { text: "Self-marking checklist" }));
    card.appendChild(E("p", { class: "honesty-note",
      text: "Your essay is " + wordCount + " words" +
        (wordCount >= 500 && wordCount <= 600 ? " — within the 500–600 target." :
          (wordCount > 600 ? " — above the 500–600 target." : " — below the 500–600 target.")) +
        " Work through every item honestly; a 'No' is a specific action point." }));
    if (checklist) {
      card.appendChild(E("div", { class: "rich", html: checklist.body }));
    } else {
      card.appendChild(E("p", { class: "muted", text: "Checklist content unavailable." }));
    }
    if (typeof onWriteAnother === "function") {
      var againRow = E("div", { class: "controls-row" });
      var againBtn = E("button", { type: "button", class: "btn btn-primary", text: "Write another essay" });
      againBtn.addEventListener("click", onWriteAnother);
      againRow.appendChild(againBtn);
      card.appendChild(againRow);
    }
    return card;
  }

  /* ====================================================================== *
   * SCHEDULE — 10-week plan                                                *
   * ====================================================================== */
  function renderSchedule() {
    var DATA = root.LNAT_DATA;
    var host = byId("schedule-weeks");
    if (!host) return;
    clear(host);
    (DATA.schedule || []).forEach(function (wk) {
      var details = E("details", { class: "week-block" });
      var summary = E("summary", {}, [
        E("span", { class: "week-num", text: "Week " + wk.week }),
        E("span", { class: "week-theme", text: wk.theme || "" })
      ]);
      details.appendChild(summary);

      if (wk.goals && wk.goals.length) {
        var goalsBox = E("div", { class: "week-goals" });
        goalsBox.appendChild(E("h4", { text: "Goals" }));
        var gul = E("ul", {});
        wk.goals.forEach(function (g) { gul.appendChild(E("li", { text: g })); });
        goalsBox.appendChild(gul);
        details.appendChild(goalsBox);
      }

      (wk.days || []).forEach(function (d) {
        var day = E("div", { class: "day-block" });
        var dh = E("div", { class: "day-head" }, [
          E("span", { class: "day-label", text: d.label || ("Day " + d.day) }),
          E("span", { class: "day-mins muted small", text: (d.estimatedMinutes || 0) + " min" })
        ]);
        day.appendChild(dh);
        var tul = E("ul", { class: "task-list" });
        (d.tasks || []).forEach(function (t) { tul.appendChild(E("li", { text: t })); });
        day.appendChild(tul);
        details.appendChild(day);
      });

      host.appendChild(details);
    });
  }

  /* ====================================================================== *
   * REFERENCE — glossary (searchable), reading, FAQ                        *
   * ====================================================================== */
  function renderReference() {
    renderGlossary();
    renderFlashcards();
    renderReading();
    renderFaq();
  }

  function renderGlossary() {
    var DATA = root.LNAT_DATA;
    var list = byId("glossary-list");
    var search = byId("glossary-search");
    var countEl = byId("glossary-count");
    if (!list) return;
    var entries = (DATA.glossary || []).slice().sort(function (a, b) {
      return a.term.toLowerCase() < b.term.toLowerCase() ? -1 : 1;
    });

    function render(q) {
      q = (q || "").trim().toLowerCase();
      clear(list);
      var shown = 0;
      entries.forEach(function (e) {
        if (q && e.term.toLowerCase().indexOf(q) === -1 && e.definition.toLowerCase().indexOf(q) === -1) return;
        shown += 1;
        list.appendChild(E("dt", { text: e.term }));
        list.appendChild(E("dd", { text: e.definition }));
      });
      if (countEl) countEl.textContent = shown + " of " + entries.length + " term" + (entries.length === 1 ? "" : "s") + (q ? " matching \"" + q + "\"" : "") + ".";
      if (!shown) list.appendChild(E("dd", { class: "muted", text: "No terms match that search." }));
    }
    if (search) search.addEventListener("input", function () { render(search.value); });
    render("");
  }

  function renderReading() {
    var DATA = root.LNAT_DATA;
    var host = byId("reading-content");
    if (!host) return;
    var r = DATA.reading || {};
    clear(host);
    if (r.rationale) host.appendChild(E("p", { text: r.rationale }));

    var srcCard = E("div", { class: "panel-card" });
    srcCard.appendChild(E("h3", { text: "Recommended sources" }));
    var ul = E("ul", { class: "source-list" });
    (r.officialSources || []).forEach(function (s) {
      var li = E("li", {}, [
        E("strong", { text: s.name }),
        E("span", { class: "small muted", text: "  —  " + s.url })
      ]);
      li.appendChild(E("p", { class: "small", text: s.focus }));
      ul.appendChild(li);
    });
    srcCard.appendChild(ul);
    host.appendChild(srcCard);

    if (r.activeReadingMethod) {
      var m = r.activeReadingMethod;
      var mCard = E("div", { class: "panel-card" });
      mCard.appendChild(E("h3", { text: m.title || "Active reading method" }));
      if (m.description) mCard.appendChild(E("p", { text: m.description }));
      var ol = E("ol", { class: "method-steps" });
      (m.steps || []).forEach(function (st) {
        var li = E("li", {}, [
          E("strong", { text: st.question }),
          E("p", { class: "small", text: st.guidance })
        ]);
        ol.appendChild(li);
      });
      mCard.appendChild(ol);
      if (m.timedVariant) mCard.appendChild(E("p", { class: "honesty-note small", text: m.timedVariant }));
      host.appendChild(mCard);
    }
  }

  function renderFaq() {
    var DATA = root.LNAT_DATA;
    var host = byId("faq-list");
    if (!host) return;
    clear(host);
    (DATA.faq || []).forEach(function (f) {
      var details = E("details", { class: "faq-item" });
      details.appendChild(E("summary", {}, [E("strong", { text: f.question })]));
      details.appendChild(E("p", { text: f.answer }));
      host.appendChild(details);
    });
  }

  /* ====================================================================== *
   * REFERENCE — vocabulary flashcards (uses the glossary)                  *
   * ====================================================================== *
   * Flow: show a term -> flip to reveal the definition -> mark "Got it" or
   * "Review again". Cards marked review are re-queued so they come back. A
   * session counter shows position / total. Shuffle reshuffles the deck.
   * State is in-memory; the "known" set optionally persists to localStorage.
   * Keyboard: Space flips; Enter / ArrowRight advance (Enter marks "Got it"
   * once flipped); ArrowLeft goes back. All offline, no dependencies.            */
  var FLASH_KNOWN_KEY = "lnat.flashKnown.v1";

  // Load the persisted "known" term set (term strings). Guarded because storage
  // may be unavailable over file:// — a failure just means nothing is remembered.
  function loadKnownTerms() {
    try {
      var raw = root.localStorage && root.localStorage.getItem(FLASH_KNOWN_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      var set = {};
      if (Array.isArray(arr)) arr.forEach(function (t) { set[t] = true; });
      return set;
    } catch (e) { return {}; }
  }
  function saveKnownTerms(set) {
    try {
      if (root.localStorage) root.localStorage.setItem(FLASH_KNOWN_KEY, JSON.stringify(Object.keys(set)));
    } catch (e) { /* ignore — persistence is best-effort */ }
  }

  function renderFlashcards() {
    var DATA = root.LNAT_DATA;
    var host = byId("flashcards");
    if (!host) return;
    clear(host);

    var entries = (DATA.glossary || []).slice();
    if (!entries.length) {
      host.appendChild(E("p", { class: "muted", text: "No glossary terms available for flashcards." }));
      return;
    }

    var known = loadKnownTerms();

    // Session state. `queue` holds indices into `entries` still to be seen this
    // session; `seen` counts how many cards have been judged for the counter.
    var queue = [];
    var current = -1;
    var flipped = false;
    var seen = 0;
    var reviewCount = 0;

    function shuffleArray(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
      }
      return a;
    }
    function buildQueue(shuffle) {
      queue = entries.map(function (_, i) { return i; });
      if (shuffle) shuffleArray(queue);
      current = -1;
      seen = 0;
      reviewCount = 0;
      nextCard();
    }

    // Build the DOM once; render() repaints the card face + counter.
    var counter = E("p", { class: "flashcard-counter muted", "aria-live": "polite" });

    var card = E("button", {
      type: "button",
      class: "flashcard",
      "aria-label": "Flashcard — click or press Space to flip"
    });
    var faceTag = E("span", { class: "flashcard-face-tag" });
    var faceText = E("span", { class: "flashcard-text" });
    card.appendChild(faceTag);
    card.appendChild(faceText);
    card.addEventListener("click", flip);

    // Judgement controls (shown once the card is flipped).
    var judgeRow = E("div", { class: "controls-row flashcard-judge", hidden: "hidden" });
    var gotItBtn = E("button", { type: "button", class: "btn btn-primary", text: "Got it" });
    var reviewBtn = E("button", { type: "button", class: "btn", text: "Review again" });
    gotItBtn.addEventListener("click", function () { judge(true); });
    reviewBtn.addEventListener("click", function () { judge(false); });
    judgeRow.appendChild(gotItBtn);
    judgeRow.appendChild(reviewBtn);

    // Session controls (always available).
    var controls = E("div", { class: "controls-row" });
    var flipBtn = E("button", { type: "button", class: "btn", text: "Flip (Space)" });
    var shuffleBtn = E("button", { type: "button", class: "btn", text: "Shuffle" });
    var restartBtn = E("button", { type: "button", class: "btn", text: "Restart session" });
    var resetKnownBtn = E("button", { type: "button", class: "btn", text: "Reset known" });
    flipBtn.addEventListener("click", flip);
    shuffleBtn.addEventListener("click", function () { buildQueue(true); });
    restartBtn.addEventListener("click", function () { buildQueue(false); });
    resetKnownBtn.addEventListener("click", function () {
      known = {};
      saveKnownTerms(known);
      render();
    });
    controls.appendChild(flipBtn);
    controls.appendChild(shuffleBtn);
    controls.appendChild(restartBtn);
    controls.appendChild(resetKnownBtn);

    var doneMsg = E("p", { class: "honesty-note flashcard-done", hidden: "hidden" });

    host.appendChild(counter);
    host.appendChild(card);
    host.appendChild(judgeRow);
    host.appendChild(controls);
    host.appendChild(doneMsg);

    function nextCard() {
      if (!queue.length) { current = -1; flipped = false; render(); return; }
      current = queue.shift();
      flipped = false;
      render();
    }
    function prevCard() {
      // Re-show the current card un-flipped (simple "back" = restart this card's
      // front face). Full history isn't needed for a study aid.
      flipped = false;
      render();
    }
    function flip() {
      if (current < 0) return;
      flipped = !flipped;
      render();
    }
    function judge(gotIt) {
      if (current < 0 || !flipped) return;
      var entry = entries[current];
      if (gotIt) {
        known[entry.term] = true;
        saveKnownTerms(known);
      } else {
        // Re-queue this card so it comes back later this session.
        queue.push(current);
        reviewCount += 1;
      }
      seen += 1;
      nextCard();
    }

    function render() {
      var total = entries.length;
      var knownCount = Object.keys(known).length;
      if (current < 0) {
        // Deck exhausted for this session.
        counter.textContent = seen + " / " + total + " reviewed · " + knownCount + " marked known";
        card.hidden = true;
        judgeRow.hidden = true;
        doneMsg.hidden = false;
        doneMsg.textContent = "Session complete — you reviewed " + seen + " card" +
          (seen === 1 ? "" : "s") + ". Shuffle or restart to go again.";
        return;
      }
      card.hidden = false;
      doneMsg.hidden = true;
      var entry = entries[current];
      // Counter: position within the session is (seen + 1); total cards is `total`.
      counter.textContent = "Card " + Math.min(seen + 1, total) + " / " + total +
        (reviewCount ? " · " + reviewCount + " queued for review" : "") +
        " · " + knownCount + " known";
      card.classList.toggle("is-flipped", flipped);
      if (flipped) {
        faceTag.textContent = "Definition";
        faceText.textContent = entry.definition;
        judgeRow.hidden = false;
      } else {
        faceTag.textContent = "Term" + (known[entry.term] ? " · known" : "");
        faceText.textContent = entry.term;
        judgeRow.hidden = true;
      }
    }

    // Keyboard handling, scoped to when the flashcards panel is visible. Space
    // flips; ArrowRight/Enter advance (Enter marks "Got it" once flipped);
    // ArrowLeft resets the current card's front face.
    function panelVisible() {
      var panel = document.querySelector('[data-ref-panel="flashcards"]');
      return panel && !panel.hidden;
    }
    if (!renderFlashcards._keyBound) {
      document.addEventListener("keydown", function (ev) {
        if (!panelVisible()) return;
        // Don't hijack typing in form fields.
        var tag = (ev.target && ev.target.tagName) ? ev.target.tagName.toLowerCase() : "";
        if (tag === "input" || tag === "textarea" || tag === "select") return;
        var fc = renderFlashcards._active;
        if (!fc) return;
        if (ev.key === " " || ev.key === "Spacebar") { ev.preventDefault(); fc.flip(); }
        else if (ev.key === "Enter") {
          ev.preventDefault();
          if (fc.isFlipped()) fc.judge(true); else fc.flip();
        }
        else if (ev.key === "ArrowRight") { ev.preventDefault(); if (fc.isFlipped()) fc.judge(true); else fc.next(); }
        else if (ev.key === "ArrowLeft") { ev.preventDefault(); fc.prev(); }
        else if (ev.key.toLowerCase() === "g" && fc.isFlipped()) { ev.preventDefault(); fc.judge(true); }
        else if (ev.key.toLowerCase() === "r" && fc.isFlipped()) { ev.preventDefault(); fc.judge(false); }
      });
      renderFlashcards._keyBound = true;
    }
    // Expose the active session's controls for the (single) keydown listener.
    renderFlashcards._active = {
      flip: flip,
      next: nextCard,
      prev: prevCard,
      judge: judge,
      isFlipped: function () { return flipped; }
    };

    buildQueue(false);
  }

  /* ====================================================================== *
   * PROGRESS — dashboard (recomputed each time the view is shown)          *
   * ====================================================================== */
  function renderProgress() {
    if (!progressStore) return;
    var st = progressStore.getState();
    var DATA = root.LNAT_DATA;

    // Overall
    var overall = byId("progress-overall");
    if (overall) {
      clear(overall);
      var attemptIds = Object.keys(st.attempts || {});
      var correct = 0;
      attemptIds.forEach(function (k) { if (st.attempts[k].correct) correct += 1; });
      var acc = attemptIds.length ? Math.round((correct / attemptIds.length) * 100) : 0;
      overall.appendChild(E("ul", { class: "facts-list" }, [
        E("li", {}, [E("strong", { text: String(attemptIds.length) }), document.createTextNode(" questions attempted")]),
        E("li", {}, [E("strong", { text: String(correct) }), document.createTextNode(" correct (" + acc + "% accuracy)")]),
        E("li", {}, [E("strong", { text: String((st.mockScores || []).length) }), document.createTextNode(" mock" + ((st.mockScores || []).length === 1 ? "" : "s") + " completed")])
      ]));
      if (!attemptIds.length) overall.appendChild(E("p", { class: "muted", text: "No attempts yet — try a drill in Practice." }));
    }

    // Mocks over time
    var mocksEl = byId("progress-mocks");
    if (mocksEl) {
      clear(mocksEl);
      var scores = (st.mockScores || []).slice();
      if (!scores.length) {
        mocksEl.appendChild(E("p", { class: "muted", text: "No mocks taken yet." }));
      } else {
        // Map mock id -> readable title ("Mock Paper 1") so the table shows the
        // title rather than the raw id ("mock-01").
        var mockTitleById = {};
        (DATA.mocks || []).forEach(function (m) { mockTitleById[m.id] = m.title || m.id; });
        var table = E("table", { class: "bands-table" });
        table.appendChild(E("thead", {}, [E("tr", {}, [
          E("th", { scope: "col", text: "Mock" }),
          E("th", { scope: "col", text: "Score" }),
          E("th", { scope: "col", text: "Band" }),
          E("th", { scope: "col", text: "When" })
        ])]));
        var tb = E("tbody");
        scores.forEach(function (s) {
          tb.appendChild(E("tr", {}, [
            E("td", { text: mockTitleById[s.mockId] || s.mockId }),
            E("td", { text: s.scoreA + " / " + s.total }),
            E("td", { text: s.band }),
            E("td", { class: "small muted", text: new Date(s.ts).toLocaleDateString() })
          ]));
        });
        table.appendChild(tb);
        mocksEl.appendChild(table);
      }
    }

    // Accuracy by type. The table is sorted weakest-first and any type below the
    // FOCUS_THRESHOLD (with enough attempts to be meaningful) is flagged "Focus
    // here" — both as a row tag and as a callout naming the 1–2 weakest types.
    var byTypeEl = byId("progress-bytype");
    if (byTypeEl) {
      clear(byTypeEl);
      var stats = st.typeStats || {};
      var FOCUS_THRESHOLD = 65;   // accuracy % at or below which a type is a focus area
      var FOCUS_MIN_SEEN = 4;     // need this many attempts before flagging (avoids noise)
      var typesWithData = TYPE_ORDER.filter(function (t) { return stats[t] && stats[t].seen; });
      if (!typesWithData.length) {
        byTypeEl.appendChild(E("p", { class: "muted", text: "No per-type data yet. Drills and mock questions both feed this." }));
      } else {
        // Compute accuracy per type, then sort ascending (weakest first).
        var rowsData = typesWithData.map(function (t) {
          var s = stats[t];
          var pct = Math.round((s.correct / s.seen) * 100);
          return { type: t, seen: s.seen, correct: s.correct, pct: pct,
            isFocus: s.seen >= FOCUS_MIN_SEEN && pct <= FOCUS_THRESHOLD };
        });
        rowsData.sort(function (a, b) { return a.pct - b.pct; });

        // "Focus here" callout: name the 1–2 weakest flagged types.
        var focusList = rowsData.filter(function (r) { return r.isFocus; }).slice(0, 2);
        if (focusList.length) {
          var names = focusList.map(function (r) {
            return (TYPE_LABELS[r.type] || r.type) + " (" + r.pct + "%)";
          });
          var joined = names.length === 2 ? names[0] + " and " + names[1] : names[0];
          byTypeEl.appendChild(E("p", { class: "honesty-note focus-callout" }, [
            E("strong", { text: "Focus here: " }),
            document.createTextNode(joined + ". These are below " + FOCUS_THRESHOLD +
              "% — review the matching lesson in Learn, then drill that type in Practice.")
          ]));
        }

        var t2 = E("table", { class: "bands-table" });
        t2.appendChild(E("thead", {}, [E("tr", {}, [
          E("th", { scope: "col", text: "Type" }),
          E("th", { scope: "col", text: "Correct / seen" }),
          E("th", { scope: "col", text: "Accuracy" })
        ])]));
        var tb2 = E("tbody");
        rowsData.forEach(function (r) {
          var typeCell = E("td", {}, [document.createTextNode(TYPE_LABELS[r.type] || r.type)]);
          if (r.isFocus) typeCell.appendChild(E("span", { class: "focus-tag", text: "Focus here" }));
          var row = E("tr", r.isFocus ? { class: "focus-row" } : {}, [
            typeCell,
            E("td", { text: r.correct + " / " + r.seen }),
            E("td", {}, [accuracyBar(r.pct)])
          ]);
          tb2.appendChild(row);
        });
        t2.appendChild(tb2);
        byTypeEl.appendChild(t2);
      }
    }

    // Lessons viewed
    var lessonsEl = byId("progress-lessons");
    if (lessonsEl) {
      clear(lessonsEl);
      var viewed = st.lessonsViewed || {};
      var total = (DATA.lessons || []).length;
      var viewedCount = Object.keys(viewed).length;
      lessonsEl.appendChild(E("p", {}, [
        E("strong", { text: viewedCount + " of " + total }),
        document.createTextNode(" lessons opened.")
      ]));
      if (viewedCount) {
        var ul = E("ul", { class: "cue-list" });
        (DATA.lessons || []).forEach(function (l) {
          if (viewed[l.id]) ul.appendChild(E("li", { text: l.title }));
        });
        lessonsEl.appendChild(ul);
      } else {
        lessonsEl.appendChild(E("p", { class: "muted", text: "Open a lesson in Learn to track it here." }));
      }
    }
  }

  function accuracyBar(pct) {
    var wrap = E("span", { class: "acc-bar", title: pct + "%" });
    var fill = E("span", { class: "acc-fill" });
    fill.style.width = Math.max(2, pct) + "%";
    // band the colour by performance, but always keep the % label (not colour-only)
    wrap.appendChild(fill);
    wrap.appendChild(E("span", { class: "acc-label", text: pct + "%" }));
    return wrap;
  }

  /* ---- Progress controls: export / import / reset ----------------------- */
  function wireProgressControls() {
    var exportBtn = byId("export-progress");
    var importInput = byId("import-progress");
    var resetBtn = byId("reset-progress");

    if (exportBtn) exportBtn.addEventListener("click", function () {
      if (progressStore) progressStore.downloadExport("lnat-progress.json");
    });
    if (importInput) importInput.addEventListener("change", function (e) {
      var file = e.target.files && e.target.files[0];
      if (!file || !progressStore) return;
      var reader = new FileReader();
      reader.onload = function () {
        var ok = progressStore.importJSON(String(reader.result));
        var msg = byId("import-status");
        if (msg) msg.textContent = ok ? "Progress imported." : "Import failed — file was not valid progress JSON.";
        renderProgress();
      };
      reader.readAsText(file);
    });
    if (resetBtn) resetBtn.addEventListener("click", function () {
      if (progressStore) progressStore.reset();
      renderProgress();
    });
  }

  /* ====================================================================== *
   * Sub-tabs (Essays + Reference)                                          *
   * ====================================================================== */
  function wireSubtabs() {
    setupSubtabGroup("data-essay-tab", "data-essay-panel");
    setupSubtabGroup("data-ref-tab", "data-ref-panel");
  }

  function setupSubtabGroup(tabAttr, panelAttr) {
    var tabs = document.querySelectorAll("[" + tabAttr + "]");
    if (!tabs.length) return;
    function activate(key) {
      for (var i = 0; i < tabs.length; i++) {
        var on = tabs[i].getAttribute(tabAttr) === key;
        tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      }
      var panels = document.querySelectorAll("[" + panelAttr + "]");
      for (var j = 0; j < panels.length; j++) {
        panels[j].hidden = panels[j].getAttribute(panelAttr) !== key;
      }
    }
    for (var k = 0; k < tabs.length; k++) {
      (function (tab) {
        tab.addEventListener("click", function () { activate(tab.getAttribute(tabAttr)); });
      })(tabs[k]);
    }
  }

  /* ====================================================================== */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})(typeof window !== "undefined" ? window : this);
