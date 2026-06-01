/*
 * mock.js — mock-exam mode: sequential questions, timer, end-of-test score report.
 *
 * Plan §4 Phase 1.3 / AC-E4:
 *   - Section A scored /42, ONE mark per correct answer, NO negative marking.
 *   - Band label uses NON-OVERLAPPING half-open bands, evaluated TOP-DOWN so every
 *     integer score maps to exactly one band and boundaries are deterministic:
 *         score >= 29           -> "Oxbridge tier"
 *         26 <= score <= 28     -> "Top-tier"
 *         23 <= score <= 25     -> "Average"
 *         score <= 22           -> "Risk zone"
 *   - Section B is shown with a self-assessment rubric (not auto-graded).
 *
 * No dependencies; works over file://. Exposes window.LNATMock.
 * The pure functions (bandForScore, scoreSectionA) are unit-testable.
 */
(function (root) {
  "use strict";

  // Bands ordered top-down. First match wins -> deterministic boundaries.
  var BANDS = [
    { label: "Oxbridge tier", min: 29, max: Infinity, note: "Oxford/Cambridge competitive range (offer-holder means ~30)." },
    { label: "Competitive", min: 26, max: 28, note: "UCL / KCL / LSE / Durham competitive range." },
    { label: "Developing", min: 23, max: 25, note: "Around and above the national mean." },
    { label: "Risk zone", min: -Infinity, max: 22, note: "At or below the national mean; aim higher." }
  ];

  /**
   * bandForScore — map a Section A score (0..42) to exactly one band.
   * Evaluates top-down and returns the first band whose [min,max] contains score.
   */
  function bandForScore(score) {
    for (var i = 0; i < BANDS.length; i++) {
      if (score >= BANDS[i].min && score <= BANDS[i].max) return BANDS[i];
    }
    // Unreachable given the band set, but stay defensive.
    return BANDS[BANDS.length - 1];
  }

  /**
   * scoreSectionA — count correct answers (no negative marking) and break down
   * performance by sub-type.
   * @param {Array} questions  the mock's questions (objects with type/answerIndex)
   * @param {Object} answers   map questionId -> chosenIndex (missing = unanswered)
   * @returns {Object} { score, total, byType: { type: {seen, correct} }, band }
   */
  function scoreSectionA(questions, answers) {
    var score = 0;
    var byType = {};
    questions.forEach(function (q) {
      if (!byType[q.type]) byType[q.type] = { seen: 0, correct: 0 };
      byType[q.type].seen += 1;
      var chosen = answers[q.id];
      // No negative marking: only correct answers add; blanks/wrong score 0.
      if (typeof chosen === "number" && chosen === q.answerIndex) {
        score += 1;
        byType[q.type].correct += 1;
      }
    });
    return {
      score: score,
      total: questions.length,
      byType: byType,
      band: bandForScore(score)
    };
  }

  /**
   * resolveMock — expand a mock's id references into passage/question/prompt
   * objects using window.LNAT_DATA. Returns null if data is missing.
   */
  function resolveMock(mock) {
    var DATA = root.LNAT_DATA;
    if (!DATA) return null;
    var qById = {};
    (DATA.questions || []).forEach(function (q) { qById[q.id] = q; });
    var pById = {};
    (DATA.passages || []).forEach(function (p) { pById[p.id] = p; });
    var promptById = {};
    (DATA.prompts || []).forEach(function (p) { promptById[p.id] = p; });

    var questions = (mock.sectionA.questionIds || [])
      .map(function (id) { return qById[id]; })
      .filter(Boolean);
    var passages = (mock.sectionA.passageIds || [])
      .map(function (id) { return pById[id]; })
      .filter(Boolean);
    var prompts = (mock.sectionB.promptIds || [])
      .map(function (id) { return promptById[id]; })
      .filter(Boolean);

    return { mock: mock, questions: questions, passages: passages, prompts: prompts };
  }

  /**
   * buildScoreReport — produce a DOM node summarising a completed mock's Section A.
   * @param {Object} result  output of scoreSectionA
   * @param {Object} [opts]  { typeLabels: { type: "Readable name" } }
   */
  function buildScoreReport(result, opts) {
    opts = opts || {};
    var labels = opts.typeLabels || {};
    var E = root.LNATEngine && root.LNATEngine._el ? root.LNATEngine._el : basicEl;

    var wrap = E("section", { class: "score-report", "aria-label": "Mock score report" }, [
      E("h2", { text: "Mock score report" }),
      E("p", { class: "score-headline", text: "Section A: " + result.score + " / " + result.total + " correct (no negative marking)." }),
      E("p", { class: "score-band", text: "Band: " + result.band.label }),
      E("p", { class: "score-band-note", text: result.band.note })
    ]);

    var h = E("h3", { text: "Per-type breakdown" });
    wrap.appendChild(h);
    var list = E("ul", { class: "type-breakdown" });
    Object.keys(result.byType).forEach(function (t) {
      var b = result.byType[t];
      var name = labels[t] || t;
      list.appendChild(E("li", { text: name + ": " + b.correct + " / " + b.seen }));
    });
    wrap.appendChild(list);
    return wrap;
  }

  // Minimal element helper if engine.js is not present (e.g. isolated tests).
  function basicEl(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  root.LNATMock = {
    bandForScore: bandForScore,
    scoreSectionA: scoreSectionA,
    resolveMock: resolveMock,
    buildScoreReport: buildScoreReport,
    BANDS: BANDS
  };
})(typeof window !== "undefined" ? window : this);
