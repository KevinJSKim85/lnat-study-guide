# LNAT Study Site

A complete, self-contained study site for the **LNAT 2026/27 cycle**. It opens
directly in a browser over `file://` — **no server, no internet, no CDN**.

**What's included (as of June 2026):**

- **387 practice questions** across four drill sets (Section A MCQ)
- **5 full mock exams** (42 questions each, timed 95 min)
- **Lessons** covering all 11 question sub-types, reading strategy, and pacing
- **Section B essay preparation** — themed essay prompts, model essays, weak-essay analysis, briefings, and a checklist
- **Intensive study schedule** and exam-day reference sheet
- Single-file offline bundle: `lnat-study.html` (everything in one file)

> **Exam dates, fees, and registration deadlines change each cycle.**
> Always re-verify the current cycle details at [lnat.ac.uk](https://lnat.ac.uk)
> before applying. Information here reflects publicly available data as of June 2026.

---

## How to open (offline)

Double-click `index.html`, or open it in a browser via
`file:///…/lnat-study/index.html`. Everything loads from local files; there are
no network requests.

For the best experience use **Chrome, Edge, or Firefox** (see storage note below).

---

## How progress is stored

Progress (your attempts, per-type stats, and mock scores) is saved through a
**storage-abstraction layer** that picks the best available mechanism, in order:

1. **`localStorage`** — preferred. Feature-detected with a write → read →
   reload-probe so a browser that silently drops or refuses writes is not trusted.
2. **IndexedDB** — used if `localStorage` is unavailable.
3. **In-memory** — last resort. Progress lasts only for the current page; it is
   lost on reload.

**Export / Import is a first-class, always-available feature.** Use
**Export progress** to download your progress as a JSON file, and **Import
progress** to restore it. This is the guaranteed way to move or back up progress.

> **Safari / WebKit note:** Safari over `file://` may not persist `localStorage`.
> When persistence cannot be confirmed, the site shows a non-blocking banner —
> *"Progress won't survive reload in this browser — use Export."* For automatic
> saving across reloads, **open in Chrome, Edge, or Firefox**, or use
> Export/Import in Safari.

The progress storage key is namespaced and versioned: `lnat.progress.v1`.

---

## Answer keys are readable from source (not a security boundary)

Before you submit a question, the correct answer is **not** placed in the page's
rendered DOM or accessibility tree — it is injected only when you submit, so you
get an honest self-test. However, a determined user can still read answer keys
from the page source or the data files in `data/`. This is acceptable for a
single self-learner and is **not** intended as a security boundary.

---

## Official vs illustrative content (labeling policy)

- **Essay prompts:** the nine official LNAT sample prompts are real and are
  **cited** (`source: "official-cited"` with a `citation` link). Every other
  prompt is original and labeled **illustrative** (`source: "illustrative"`).
- **Passages and questions:** all passages and MCQs are **original / illustrative**
  (`source: "illustrative"`) — calibrated to official difficulty and style, never
  copied from official material. The UI labels passages accordingly.

This labeling is enforced by the validator (see below).

---

## Project layout

```
lnat-study/
├── index.html                 # home / orientation + in-page section views (Phase 1 shell)
├── README.md                  # this file
├── assets/
│   ├── css/styles.css         # single offline stylesheet incl. @media print
│   └── js/
│       ├── engine/
│       │   ├── loader.js      # initialises window.LNAT_DATA + expected-bucket manifest (S1)
│       │   ├── engine.js      # render question, self-mark, reveal rationale (key injected on submit)
│       │   ├── timer.js       # 95/40 separately-timed countdowns + auto-submit-on-zero
│       │   ├── mock.js        # mock mode + score /42 + non-overlapping band labels
│       │   ├── progress.js    # storage abstraction: localStorage→IndexedDB→in-memory + Export/Import
│       │   └── nav.js         # shared nav / in-page view switcher
│       └── app.js             # page bootstrap wiring (uses SAMPLE data)
├── data/
│   ├── SCHEMA.md              # FROZEN data contract (namespaced IDs, object shapes, validator coverage)
│   ├── SAMPLE.js              # gold-template fixture: 3 passages, 10 MCQs, 3 prompts, 2 essays, 1 mock
│   ├── passages/  questions/  lessons/  essays/  mocks/   # (filled by later content phases)
├── lessons/  mocks/           # (page shells for later phases)
└── tools/
    └── validate.js            # offline content validator (run via Node)
```

---

## Validating content

The validator runs under Node with no dependencies:

```bash
node tools/validate.js                  # validates data/SAMPLE.js
node tools/validate.js data/SAMPLE.js data/questions/foo.js   # validate specific files
```

It checks: required fields, exactly-4 options + 4 rationales, `answerIndex`
range, namespaced-ID format, **global ID uniqueness across buckets**,
**referential integrity** (every `passageId` / `questionId` / `promptId`
resolves), **per-mock count = 42** with a valid 3-or-4-per-passage split (a mock
flagged `sample: true` skips the 42 check gracefully), and the source/labeling
rules. Exit code `0` = pass, `1` = failures.

---

## Data delivery model (why data is `.js`, not `.json`)

To work reliably over `file://` (where `fetch` of local JSON is blocked in some
browsers), content is delivered as JavaScript assignment files that push into
buckets on `window.LNAT_DATA`. `loader.js` initialises those buckets **before**
any data script runs and asserts (via `LNAT_DATA.assertBuckets()`) that every
expected bucket is present, logging a visible `console.error` if one is missing.
