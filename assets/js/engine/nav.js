/*
 * nav.js — shared navigation / chrome injector and hash-routed view switcher.
 *
 * Plan §4 Phase 1.3 / AC-E6 (extended for the full 8-area integration phase):
 *   - Injects a persistent, keyboard-operable nav into a host element.
 *   - Navigation switches between in-page <section data-view-panel="..."> panels.
 *     Each view maps to a URL hash (e.g. #learn) so views are deep-linkable and
 *     the browser Back/Forward buttons work — all client-side, no fetch, no
 *     routing library, works over file://.
 *   - Accessible: <nav> landmark, aria-current on the active link, focusable
 *     controls, visible focus handled in CSS. On view change, focus moves to the
 *     panel heading so keyboard/screen-reader users follow the context switch.
 *
 * No dependencies; works over file://. Exposes window.LNATNav.
 */
(function (root) {
  "use strict";

  // The 8 user-facing areas. id === the data-view-panel attribute AND the URL
  // hash (minus '#'). Order is the nav order.
  var VIEWS = [
    { id: "home", label: "Home" },
    { id: "learn", label: "Learn" },
    { id: "practice", label: "Practice" },
    { id: "mocks", label: "Mocks" },
    { id: "essays", label: "Essays" },
    { id: "schedule", label: "Schedule" },
    { id: "reference", label: "Reference" },
    { id: "progress", label: "Progress" }
  ];

  function viewExists(id) {
    for (var i = 0; i < VIEWS.length; i++) {
      if (VIEWS[i].id === id) return true;
    }
    return false;
  }

  // Read the current view from the URL hash; fall back to the first view.
  function viewFromHash() {
    var raw = (root.location && root.location.hash ? root.location.hash : "").replace(/^#/, "");
    return viewExists(raw) ? raw : VIEWS[0].id;
  }

  function injectNav(hostSelector, onNavigate) {
    var host = typeof hostSelector === "string"
      ? document.querySelector(hostSelector)
      : hostSelector;
    if (!host) return null;

    var nav = document.createElement("nav");
    nav.className = "site-nav";
    nav.setAttribute("aria-label", "Primary");

    var ul = document.createElement("ul");
    ul.className = "nav-list";

    VIEWS.forEach(function (v) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "nav-link";
      a.href = "#" + v.id;
      a.textContent = v.label;
      a.setAttribute("data-view", v.id);
      // Let the native hashchange drive activation so Back/Forward also work;
      // we only stop the page from jumping the scroll position abruptly.
      a.addEventListener("click", function () {
        // default anchor behaviour updates the hash -> hashchange -> activate().
        // No preventDefault: this keeps deep-linking and history honest.
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
    host.appendChild(nav);

    function activate(viewId, opts) {
      opts = opts || {};
      if (!viewExists(viewId)) viewId = VIEWS[0].id;

      // toggle nav active state
      var links = nav.querySelectorAll(".nav-link");
      for (var i = 0; i < links.length; i++) {
        var isActive = links[i].getAttribute("data-view") === viewId;
        if (isActive) links[i].setAttribute("aria-current", "page");
        else links[i].removeAttribute("aria-current");
      }
      // toggle view panels
      var panels = document.querySelectorAll("[data-view-panel]");
      var active = null;
      for (var j = 0; j < panels.length; j++) {
        var match = panels[j].getAttribute("data-view-panel") === viewId;
        panels[j].hidden = !match;
        if (match) active = panels[j];
      }
      // keep the hash in sync (without piling history entries when programmatic)
      if (root.location && opts.updateHash !== false) {
        try { root.location.hash = viewId; } catch (e) { /* file:// */ }
      }
      // On a genuine nav change, return to the top so the new view starts at its
      // heading rather than wherever the previous view was scrolled. Skipped on
      // the initial programmatic paint (focus:false) to avoid yanking the load.
      if (opts.focus !== false && root.scrollTo) {
        try { root.scrollTo(0, 0); } catch (e) { /* ignore */ }
      }
      // Move focus to the panel heading so the context switch is announced and
      // keyboard users land in the new view (not stranded in the nav).
      if (active && opts.focus !== false) {
        var h = active.querySelector("h2");
        if (h) {
          if (!h.hasAttribute("tabindex")) h.setAttribute("tabindex", "-1");
          try { h.focus({ preventScroll: false }); } catch (e) { h.focus(); }
        }
      }
      if (typeof onNavigate === "function") onNavigate(viewId);
    }

    // Drive view changes off the URL hash (covers nav clicks, Back/Forward, and
    // direct deep links pasted into the address bar).
    if (root.addEventListener) {
      root.addEventListener("hashchange", function () {
        activate(viewFromHash(), { updateHash: false });
      });
    }

    return { activate: activate, views: VIEWS, viewFromHash: viewFromHash };
  }

  root.LNATNav = { injectNav: injectNav, VIEWS: VIEWS, viewFromHash: viewFromHash };
})(typeof window !== "undefined" ? window : this);
