#!/usr/bin/env node
/*
 * tools/validate.js — offline content validator for the LNAT study site.
 *
 * Runs under Node (`node tools/validate.js`) with NO dependencies. It loads the
 * engine loader and the data files into a minimal window shim, then validates
 * every object against data/SCHEMA.md.
 *
 * Checks (all must pass with 0 errors):
 *   1. Required fields per object shape.
 *   2. Exactly 4 options + exactly 4 per-option rationales; answerIndex in 0..3.
 *   3. Namespaced-ID format for every object.
 *   4. Global ID uniqueness across all buckets.
 *   5. Referential integrity (passageId / questionId / promptId resolve).
 *   6. Per-mock count = exactly 42 with a valid 3-or-4-per-passage split.
 *      A mock flagged sample:true skips the 42 check gracefully.
 *   7. Labeling / source rules (illustrative content; official-cited citations).
 *
 * Usage:
 *   node tools/validate.js                 # validates data/SAMPLE.js
 *   node tools/validate.js <file1> [file2] # validates the given data files
 *
 * Exit code 0 = pass, 1 = failures found (so it can gate a CI-equivalent run).
 */
"use strict";

var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.resolve(__dirname, "..");

/* --- ID patterns (mirror data/SCHEMA.md §2) ---------------------------- */
var GENRES = ["literature", "politics", "science", "history", "philosophy", "currentaffairs"];
var TYPES = ["main", "standpoint", "structure", "detail", "implied", "inference", "factinf", "assume", "opinion", "vocab", "tone"];
var THEMES = ["law-justice", "civil-liberties", "education-society", "ethics", "politics-governance", "media-tech-environment"];
var RUBRIC_DIMS = ["thesis", "argument", "counterargument", "structure", "examples", "economy", "clarity"];
var FIVE_I = ["Irresolute", "Indecisive", "Imprecise", "Inconsistent", "Indignant"];

var ID_PATTERNS = {
  passage: new RegExp("^psg-(" + GENRES.join("|") + ")-\\d{3,}$"),
  question: new RegExp("^q-(" + TYPES.join("|") + ")-\\d{3,}$"),
  prompt: /^prompt-\d{3,}$/,
  mock: /^mock-\d{2,}$/,
  lesson: /^lesson-[a-z0-9-]+$/,
  modelEssay: /^essay-\d{3,}$/,        // essay-NNN (flat numbering; theme ranges essay-70XX are valid)
  argumentBank: new RegExp("^argbank-(" + THEMES.join("|") + ")$"),
  // essayGuide documents are not model essays: they carry slug-style ids
  // (essay-fundamentals, essay-checklist). Recognised so they pass uniqueness
  // without being rejected by the strict essay-NNN pattern.
  essayGuide: /^essay-[a-z0-9-]+$/
};

/* --- error collection -------------------------------------------------- */
var errors = [];
function err(id, msg) {
  errors.push((id ? "[" + id + "] " : "") + msg);
}
function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}
function isArrayOfNonEmptyStrings(v) {
  return Array.isArray(v) && v.length > 0 && v.every(isNonEmptyString);
}

/* --- load loader.js + data files into a sandbox ------------------------ */
function loadData(dataFiles) {
  var consoleErrors = [];
  var sandbox = {
    window: {},
    console: {
      error: function () {
        consoleErrors.push(Array.prototype.join.call(arguments, " "));
      },
      warn: function () {},
      log: function () {}
    }
  };
  sandbox.window.console = sandbox.console;
  sandbox.self = sandbox.window;
  var context = vm.createContext(sandbox);

  var loaderPath = path.join(ROOT, "assets/js/engine/loader.js");
  if (!fs.existsSync(loaderPath)) {
    err(null, "loader.js not found at " + loaderPath);
    return null;
  }
  vm.runInContext(fs.readFileSync(loaderPath, "utf8"), context, { filename: loaderPath });

  dataFiles.forEach(function (f) {
    var p = path.isAbsolute(f) ? f : path.join(ROOT, f);
    if (!fs.existsSync(p)) {
      err(null, "data file not found: " + p);
      return;
    }
    vm.runInContext(fs.readFileSync(p, "utf8"), context, { filename: p });
  });

  return { data: sandbox.window.LNAT_DATA, consoleErrors: consoleErrors };
}

/* --- per-object validators --------------------------------------------- */
function checkPassage(p) {
  if (!p || typeof p !== "object") return err(null, "passage is not an object");
  if (!ID_PATTERNS.passage.test(p.id)) err(p.id, "passage id does not match psg-<genre>-NNN");
  if (GENRES.indexOf(p.genre) === -1) err(p.id, "passage genre invalid: " + p.genre);
  if (!isNonEmptyString(p.title)) err(p.id, "passage missing title");
  if (!isNonEmptyString(p.body)) err(p.id, "passage missing body");
  if (typeof p.reserved !== "boolean") err(p.id, "passage.reserved must be boolean");
  if (p.source !== "illustrative") err(p.id, "passage.source must be 'illustrative'");
}

function checkQuestion(q, passageIds) {
  if (!q || typeof q !== "object") return err(null, "question is not an object");
  if (!ID_PATTERNS.question.test(q.id)) err(q.id, "question id does not match q-<type>-NNN");
  if (TYPES.indexOf(q.type) === -1) err(q.id, "question type invalid: " + q.type);
  if (!isNonEmptyString(q.stem)) err(q.id, "question missing stem");
  if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(isNonEmptyString)) {
    err(q.id, "question must have exactly 4 non-empty options");
  }
  if (!Array.isArray(q.perOptionRationale) || q.perOptionRationale.length !== 4 || !q.perOptionRationale.every(isNonEmptyString)) {
    err(q.id, "question must have exactly 4 non-empty perOptionRationale entries");
  }
  if (typeof q.answerIndex !== "number" || q.answerIndex < 0 || q.answerIndex > 3 || q.answerIndex % 1 !== 0) {
    err(q.id, "answerIndex must be an integer 0..3");
  }
  if (!isNonEmptyString(q.workedSolution)) err(q.id, "question missing workedSolution");
  if (["easy", "medium", "hard"].indexOf(q.difficulty) === -1) err(q.id, "difficulty invalid: " + q.difficulty);
  if (q.source !== "illustrative") err(q.id, "question.source must be 'illustrative'");
  // referential integrity
  if (passageIds.indexOf(q.passageId) === -1) err(q.id, "passageId does not resolve: " + q.passageId);
}

function checkPrompt(p) {
  if (!p || typeof p !== "object") return err(null, "prompt is not an object");
  if (!ID_PATTERNS.prompt.test(p.id)) err(p.id, "prompt id does not match prompt-NNN");
  if (THEMES.indexOf(p.theme) === -1) err(p.id, "prompt theme invalid: " + p.theme);
  if (!isNonEmptyString(p.text)) err(p.id, "prompt missing text");
  if (["official-cited", "illustrative"].indexOf(p.source) === -1) err(p.id, "prompt.source must be 'official-cited' or 'illustrative'");
  if (p.source === "official-cited" && !isNonEmptyString(p.citation)) err(p.id, "official-cited prompt missing citation");
}

function checkModelEssay(e, promptIds) {
  if (!e || typeof e !== "object") return err(null, "model essay is not an object");
  if (!ID_PATTERNS.modelEssay.test(e.id)) err(e.id, "model essay id does not match essay-NNN");
  if (promptIds.indexOf(e.promptId) === -1) err(e.id, "promptId does not resolve: " + e.promptId);
  if (!isNonEmptyString(e.body)) err(e.id, "model essay missing body");
  if (["model", "weak"].indexOf(e.quality) === -1) err(e.id, "quality must be 'model' or 'weak'");
  if (!Array.isArray(e.annotations) || e.annotations.length < 1) {
    err(e.id, "model essay needs >= 1 annotation");
  } else {
    e.annotations.forEach(function (a, i) {
      var tag = e.id + " annotation[" + i + "]";
      if (!isNonEmptyString(a.note)) err(tag, "annotation missing note");
      var hasDim = isNonEmptyString(a.rubricDim);
      var hasFive = isNonEmptyString(a.fiveI);
      if (hasDim === hasFive) err(tag, "annotation must set exactly one of rubricDim / fiveI");
      if (hasDim && RUBRIC_DIMS.indexOf(a.rubricDim) === -1) err(tag, "rubricDim invalid: " + a.rubricDim);
      if (hasFive && FIVE_I.indexOf(a.fiveI) === -1) err(tag, "fiveI invalid: " + a.fiveI);
    });
  }
}

function checkArgumentBank(b) {
  if (!b || typeof b !== "object") return err(null, "argument bank is not an object");
  if (!ID_PATTERNS.argumentBank.test(b.id)) err(b.id, "argument bank id does not match argbank-<theme>");
  if (THEMES.indexOf(b.theme) === -1) err(b.id, "argument bank theme invalid: " + b.theme);
  ["positions", "counterPositions", "examples", "facts"].forEach(function (k) {
    if (!isArrayOfNonEmptyStrings(b[k])) err(b.id, "argument bank." + k + " must be a non-empty string array");
  });
}

function checkLesson(l) {
  if (!l || typeof l !== "object") return err(null, "lesson is not an object");
  if (!ID_PATTERNS.lesson.test(l.id)) err(l.id, "lesson id does not match lesson-<slug>");
  if (!isNonEmptyString(l.title)) err(l.id, "lesson missing title");
  if (!isNonEmptyString(l.explanation)) err(l.id, "lesson missing explanation");
  if (!isArrayOfNonEmptyStrings(l.recognitionCues)) err(l.id, "lesson.recognitionCues must be a non-empty string array");
  if (!isNonEmptyString(l.workedExample)) err(l.id, "lesson missing workedExample");
  if (!isArrayOfNonEmptyStrings(l.commonTraps)) err(l.id, "lesson.commonTraps must be a non-empty string array");
  if (!isNonEmptyString(l.strategyBox)) err(l.id, "lesson missing strategyBox");
}

/* --- non-core production buckets (recognised so they are not silently ignored) */
function checkEssayGuide(g) {
  if (!g || typeof g !== "object") return err(null, "essayGuide entry is not an object");
  if (!ID_PATTERNS.essayGuide.test(g.id)) err(g.id, "essayGuide id does not match essay-<slug>");
  if (!isNonEmptyString(g.title)) err(g.id, "essayGuide missing title");
  if (!isNonEmptyString(g.body)) err(g.id, "essayGuide missing body");
}

function checkGlossaryEntry(e, i) {
  var tag = "glossary[" + i + "]";
  if (!e || typeof e !== "object") return err(tag, "glossary entry is not an object");
  if (!isNonEmptyString(e.term)) err(tag, "glossary entry missing term");
  if (!isNonEmptyString(e.definition)) err(e.term || tag, "glossary entry missing definition");
}

function checkFaqEntry(e, i) {
  var tag = "faq[" + i + "]";
  if (!e || typeof e !== "object") return err(tag, "faq entry is not an object");
  if (!isNonEmptyString(e.question)) err(tag, "faq entry missing question");
  if (!isNonEmptyString(e.answer)) err(tag, "faq entry missing answer");
}

function checkMock(m, passageIds, questionIds, promptIds, questionsById) {
  if (!m || typeof m !== "object") return err(null, "mock is not an object");
  if (!ID_PATTERNS.mock.test(m.id)) err(m.id, "mock id does not match mock-0X");
  if (!isNonEmptyString(m.title)) err(m.id, "mock missing title");
  if (!m.sectionA || !Array.isArray(m.sectionA.passageIds) || !Array.isArray(m.sectionA.questionIds)) {
    return err(m.id, "mock.sectionA needs passageIds[] and questionIds[]");
  }
  if (!m.sectionB || !Array.isArray(m.sectionB.promptIds) || m.sectionB.promptIds.length !== 3) {
    err(m.id, "mock.sectionB.promptIds must list exactly 3 prompts");
  }
  // referential integrity of every referenced id
  m.sectionA.passageIds.forEach(function (pid) {
    if (passageIds.indexOf(pid) === -1) err(m.id, "sectionA.passageIds entry does not resolve: " + pid);
  });
  m.sectionA.questionIds.forEach(function (qid) {
    if (questionIds.indexOf(qid) === -1) err(m.id, "sectionA.questionIds entry does not resolve: " + qid);
  });
  (m.sectionB.promptIds || []).forEach(function (pid) {
    if (promptIds.indexOf(pid) === -1) err(m.id, "sectionB.promptIds entry does not resolve: " + pid);
  });

  // per-mock count + split. sample mocks skip the exact-42 check gracefully.
  var counts = {};
  m.sectionA.questionIds.forEach(function (qid) {
    var q = questionsById[qid];
    if (q) {
      // every mock question's passage must be in the mock's passage set
      if (m.sectionA.passageIds.indexOf(q.passageId) === -1) {
        err(m.id, "question " + qid + " references passage " + q.passageId + " not in mock passage set");
      }
      counts[q.passageId] = (counts[q.passageId] || 0) + 1;
    }
  });

  if (m.sample === true) {
    console.log("  note: " + m.id + " is sample:true -> exact-42 split check skipped gracefully");
    return;
  }
  if (m.sectionA.questionIds.length !== 42) {
    err(m.id, "full mock must have exactly 42 questions (got " + m.sectionA.questionIds.length + ")");
  }
  Object.keys(counts).forEach(function (pid) {
    if (counts[pid] !== 3 && counts[pid] !== 4) {
      err(m.id, "passage " + pid + " carries " + counts[pid] + " questions (must be 3 or 4)");
    }
  });
}

/* --- global uniqueness ------------------------------------------------- */
function checkGlobalUniqueness(data) {
  var seen = {};
  // Every id-bearing bucket participates in global uniqueness. essayGuide ids
  // (essay-fundamentals / essay-checklist) must not collide with modelEssay
  // essay-NNN ids. glossary/faq entries carry no id and are skipped by the guard.
  var buckets = ["passages", "questions", "prompts", "modelEssays", "argumentBanks", "lessons", "mocks", "essayGuide"];
  buckets.forEach(function (b) {
    (data[b] || []).forEach(function (o) {
      if (!o || typeof o.id === "undefined") return;
      if (seen[o.id]) {
        err(o.id, "duplicate id (also in bucket '" + seen[o.id] + "'); ids must be globally unique");
      } else {
        seen[o.id] = b;
      }
    });
  });
}

/* --- main -------------------------------------------------------------- */
function main() {
  var args = process.argv.slice(2);
  // Default to the canonical PRODUCTION manifest (SAMPLE.js excluded). Explicit
  // file args still override, e.g. `node tools/validate.js data/SAMPLE.js`.
  var productionFiles = require(path.join(ROOT, "data/manifest.js"));
  var dataFiles = args.length ? args : productionFiles;

  console.log("LNAT content validator");
  console.log("======================");
  console.log("Loading: " + dataFiles.join(", "));

  var loaded = loadData(dataFiles);
  if (!loaded || !loaded.data) {
    err(null, "window.LNAT_DATA was not initialised (loader.js failure?)");
    return report(0);
  }
  var data = loaded.data;

  // The loader's own manifest assertion should be silent on a complete dataset.
  if (loaded.consoleErrors.length) {
    loaded.consoleErrors.forEach(function (m) { err(null, "loader console.error: " + m); });
  }

  var passageIds = (data.passages || []).map(function (p) { return p.id; });
  var questionIds = (data.questions || []).map(function (q) { return q.id; });
  var promptIds = (data.prompts || []).map(function (p) { return p.id; });
  var questionsById = {};
  (data.questions || []).forEach(function (q) { questionsById[q.id] = q; });

  (data.passages || []).forEach(checkPassage);
  (data.questions || []).forEach(function (q) { checkQuestion(q, passageIds); });
  (data.prompts || []).forEach(checkPrompt);
  (data.modelEssays || []).forEach(function (e) { checkModelEssay(e, promptIds); });
  (data.argumentBanks || []).forEach(checkArgumentBank);
  (data.lessons || []).forEach(checkLesson);
  (data.mocks || []).forEach(function (m) {
    checkMock(m, passageIds, questionIds, promptIds, questionsById);
  });
  // Recognise the non-core production buckets (shape-checked, not ignored).
  (data.essayGuide || []).forEach(checkEssayGuide);
  (data.glossary || []).forEach(checkGlossaryEntry);
  (data.faq || []).forEach(checkFaqEntry);
  checkGlobalUniqueness(data);

  var counts = {
    passages: (data.passages || []).length,
    questions: (data.questions || []).length,
    prompts: (data.prompts || []).length,
    modelEssays: (data.modelEssays || []).length,
    argumentBanks: (data.argumentBanks || []).length,
    lessons: (data.lessons || []).length,
    mocks: (data.mocks || []).length,
    essayGuide: (data.essayGuide || []).length,
    schedule: (data.schedule || []).length,
    glossary: (data.glossary || []).length,
    faq: (data.faq || []).length
  };
  report(0, counts);
}

function report(_n, counts) {
  console.log("");
  if (counts) {
    console.log("Bucket counts:");
    Object.keys(counts).forEach(function (k) {
      console.log("  " + k + ": " + counts[k]);
    });
    console.log("");
  }
  if (errors.length === 0) {
    console.log("RESULT: PASS — 0 errors.");
    process.exit(0);
  } else {
    console.log("RESULT: FAIL — " + errors.length + " error(s):");
    errors.forEach(function (e) { console.log("  - " + e); });
    process.exit(1);
  }
}

main();
