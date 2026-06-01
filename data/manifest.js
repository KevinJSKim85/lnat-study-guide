/*
 * manifest.js — canonical PRODUCTION data load order for the LNAT study site.
 *
 * Single source of truth for which data files ship to production and in what
 * order they must load. SAMPLE.js is a dev/gold-template fixture and is
 * DELIBERATELY EXCLUDED here: it duplicates real ids (lesson-assume, mock-01,
 * essay-001/002, prompt-001..003) and production content must not depend on it.
 *
 * Ordering contract (dependency order; engine buckets first):
 *   0. assets/js/engine/loader.js runs BEFORE this manifest's files and creates
 *      every bucket on window.LNAT_DATA. (Listed here for completeness; the page
 *      and the validator load it first.)
 *   1. Passage/question producers (drills, mocks) load before anything that could
 *      reference passages/questions. Each mock file is self-contained (it authors
 *      its own passages, questions and prompts), so the seven mocks are mutually
 *      independent; drills are independent too.
 *   2. Section B: fundamentals.js loads BEFORE the six theme files, because it
 *      defines the nine canonical official prompts (prompt-601..609) that several
 *      theme model-essays now reference by promptId after official-prompt
 *      de-duplication. Loading a theme file first would dangle those promptIds.
 *   3. Auxiliary singletons (lessons, schedule, reference) are independent and
 *      load last.
 *
 * Usage:
 *   - Browser: index.html includes these files as <script> tags in THIS ORDER,
 *     after loader.js and before the engine modules.
 *   - Node/validator: `node tools/validate.js` defaults to LNAT_PRODUCTION_FILES
 *     (see tools/validate.js), validating exactly this set together.
 *
 * Keep this list and the <script> block in index.html in sync.
 */
(function (root) {
  "use strict";

  // Paths are relative to the site root (where index.html lives).
  var PRODUCTION_DATA_FILES = [
    // --- Section A: passage + question producers (engine buckets first) ---
    "data/questions/drill-a.js",
    "data/questions/drill-b.js",
    "data/questions/drill-c.js",
    "data/questions/drill-d.js",
    "data/questions/drill-e.js",
    "data/mocks/mock-01.js",
    "data/mocks/mock-02.js",
    "data/mocks/mock-03.js",
    "data/mocks/mock-04.js",
    "data/mocks/mock-05.js",
    "data/mocks/mock-06.js",
    "data/mocks/mock-07.js",

    // --- Section B: fundamentals FIRST (canonical prompt-601..609), then themes ---
    "data/essays/fundamentals.js",
    "data/essays/theme-lawjustice.js",
    "data/essays/theme-civillib.js",
    "data/essays/theme-education.js",
    "data/essays/theme-ethics.js",
    "data/essays/theme-politics.js",
    "data/essays/theme-mediatech.js",
    // supplements.js is self-contained: it authors its own prompts (prompt-680..694)
    // before the model essays that reference them, so it can load after the themes.
    "data/essays/supplements.js",

    // --- Auxiliary singletons (independent) ---
    "data/lessons/lessons-a.js",
    "data/lessons/lessons-b.js",
    "data/lessons/lessons-c.js",
    "data/schedule.js",
    "data/reference.js"
  ];

  // Expose for any tooling/bundler. Node (validator) reads module.exports;
  // the browser gets window.LNAT_PRODUCTION_FILES.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = PRODUCTION_DATA_FILES;
  }
  if (root) {
    root.LNAT_PRODUCTION_FILES = PRODUCTION_DATA_FILES;
  }
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
