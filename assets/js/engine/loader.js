/*
 * loader.js — initialises window.LNAT_DATA BEFORE any data script runs.
 *
 * Plan §4 Phase 1.3 / ADR-4 / S1:
 *   - Creates every expected bucket so data files can safely .push(...).
 *   - Holds an expected-bucket manifest.
 *   - Exposes LNAT_DATA.assertBuckets(): raises a VISIBLE console.error if any
 *     manifest bucket is missing/undefined, so silently-missing data is caught
 *     (feeds the AC-Q6 console-cleanliness gate).
 *
 * No fetch, no imports, no CDN. Works over file:// and under a Node sandbox
 * (used by tools/validate.js). This script MUST be the first LNAT script on a page.
 */
(function (root) {
  "use strict";

  // Expected buckets. Array buckets start as []; object buckets as {}.
  // The manifest covers EVERY production bucket a data file writes to, so a
  // silently-missing data <script> is caught by assertBuckets() (plan S1/AC-Q6).
  var ARRAY_BUCKETS = [
    "passages",
    "questions",
    "prompts",
    "modelEssays",
    "argumentBanks",
    "lessons",
    "mocks",
    "essayGuide",   // fundamentals.js: Section B guide + self-marking checklist
    "schedule",
    "glossary",     // reference.js: vocabulary / reasoning terms
    "faq"           // reference.js: common student questions
  ];
  // Object buckets. `reference` is the canonical SCHEMA §1 container; reference.js
  // also exposes orientation/reading as standalone objects for the engine.
  var OBJECT_BUCKETS = ["reference", "orientation", "reading"];

  // If a previous script already created LNAT_DATA, reuse it (idempotent).
  var DATA = root.LNAT_DATA || {};

  ARRAY_BUCKETS.forEach(function (b) {
    if (!Array.isArray(DATA[b])) DATA[b] = [];
  });
  OBJECT_BUCKETS.forEach(function (b) {
    if (!DATA[b] || typeof DATA[b] !== "object") DATA[b] = {};
  });

  // Manifest of every bucket the engine expects to exist after data load.
  DATA.__manifest = ARRAY_BUCKETS.concat(OBJECT_BUCKETS);

  /**
   * assertBuckets — verify every manifest bucket is present and of the right
   * shape. Returns true when clean; on any problem logs a single visible
   * console.error listing the missing buckets and returns false.
   */
  DATA.assertBuckets = function assertBuckets() {
    var missing = [];
    ARRAY_BUCKETS.forEach(function (b) {
      if (!Array.isArray(DATA[b])) missing.push(b + " (expected array)");
    });
    OBJECT_BUCKETS.forEach(function (b) {
      if (!DATA[b] || typeof DATA[b] !== "object" || Array.isArray(DATA[b])) {
        missing.push(b + " (expected object)");
      }
    });
    if (missing.length) {
      (root.console || { error: function () {} }).error(
        "[LNAT] Data manifest assertion FAILED — missing/invalid bucket(s): " +
          missing.join(", ") +
          ". A data <script> may have failed to load."
      );
      return false;
    }
    return true;
  };

  root.LNAT_DATA = DATA;
})(typeof window !== "undefined" ? window : this);
