# LNAT Study Site — Data Schema Contract

> **Status:** Frozen at end of Phase 0. Every content lane builds against this contract.
> All content is delivered as JavaScript assignment files (NOT fetched JSON) so the
> site works over `file://` with no server and no CDN. Each data file pushes into
> buckets on the global `window.LNAT_DATA` object, which `loader.js` initialises
> **before** any data script runs.

---

## 1. Delivery model

- `assets/js/engine/loader.js` runs first and creates `window.LNAT_DATA` with all
  expected buckets as empty arrays/objects.
- Each data file (e.g. `data/passages/literature.js`) appends to a bucket, e.g.
  `window.LNAT_DATA.passages.push({ ... })`.
- `loader.js` holds an **expected-bucket manifest**. After data scripts load, a
  consumer calls `LNAT_DATA.assertBuckets()`; a missing/undefined bucket raises a
  visible `console.error` (catches silently-missing data — plan S1 / AC-Q6).

### Buckets on `window.LNAT_DATA`

| Bucket | Type | Holds |
|---|---|---|
| `passages` | array | passage objects |
| `questions` | array | question (MCQ) objects |
| `lessons` | array | lesson modules |
| `prompts` | array | essay prompt objects |
| `modelEssays` | array | model + weak essay objects |
| `argumentBanks` | array | per-theme argument banks |
| `mocks` | array | mock-exam objects |
| `schedule` | array | study-schedule entries |
| `reference` | object | glossary / reading list / FAQ / bands |

---

## 2. Namespaced ID convention (MANDATORY — plan §0.2 / ADR-4)

IDs are globally unique across **all** buckets and follow fixed patterns. The
validator rejects any non-conforming ID and any global collision.

| Object | ID pattern | Example | Notes |
|---|---|---|---|
| Passage | `psg-<genre>-NNN` | `psg-philosophy-001` | `<genre>` ∈ genre list below; `NNN` = 3+ digits |
| Question | `q-<type>-NNN` | `q-assume-001` | `<type>` ∈ the 11 sub-types below |
| Essay prompt | `prompt-NNN` | `prompt-001` | flat numbering |
| Mock | `mock-0X` | `mock-01` | two-digit, zero-padded |
| Lesson | `lesson-<slug>` | `lesson-assume` | slug is free-form kebab-case |
| Model essay | `essay-NNN` | `essay-001` | flat numbering (strong + weak) |
| Argument bank | `argbank-<theme>` | `argbank-ethics` | `<theme>` ∈ theme list below |

**Genres** (passage `<genre>` and AC-V4 genre coverage):
`literature`, `politics`, `science`, `history`, `philosophy`, `currentaffairs`.

**Question sub-types** (the 11; `q-<type>-NNN`). Mapping to research §5 clusters:

| `type` token | Research sub-type | Cluster |
|---|---|---|
| `main` | 1a Main Idea / Primary Purpose | Argument Analysis |
| `standpoint` | 1b Author's Standpoint / Attitude | Argument Analysis |
| `structure` | 1c Logical Structure / Argument Map | Argument Analysis |
| `detail` | 2a Explicit Comprehension / Stated Fact | Information Retrieval |
| `implied` | 2b Stated vs Implied | Information Retrieval |
| `inference` | 3a Inference / Implication | Inference & Implication |
| `factinf` | 3b Fact vs Inference | Inference & Implication |
| `assume` | 4a Identifying Assumptions | Assumptions & Logical Gaps |
| `opinion` | 4b Opinion vs Assumption | Assumptions & Logical Gaps |
| `vocab` | 5a Meaning-in-Context / Vocabulary | Language, Style & Vocabulary |
| `tone` | 5b Tone / Attitude via language | Language, Style & Vocabulary |

**Essay themes** (argument-bank `<theme>` and AC-V5/V6 coverage):
`law-justice`, `civil-liberties`, `education-society`, `ethics`,
`politics-governance`, `media-tech-environment`.

---

## 3. Object shapes

### 3.1 Passage

```js
{
  id: "psg-philosophy-001",   // psg-<genre>-NNN
  genre: "philosophy",         // one of the 6 genres
  title: "On the Limits of Tolerance",
  body: "Full passage text. Plain prose, English only. ...",
  reserved: false,             // bool — true = diagnostic-only, used in no mock/drill
  source: "illustrative"       // always "illustrative" (passages are never official)
}
```

Required fields: `id`, `genre`, `title`, `body`, `reserved`, `source`.

### 3.2 Question (Section A MCQ)

```js
{
  id: "q-assume-001",          // q-<type>-NNN
  passageId: "psg-philosophy-001", // must resolve to an existing passage
  type: "assume",              // one of the 11 sub-type tokens
  stem: "Which of the following is an assumption the author relies on?",
  options: [                   // EXACTLY 4 strings (A-D); 5-option legacy NOT used
    "Option A text",
    "Option B text",
    "Option C text",
    "Option D text"
  ],
  answerIndex: 2,              // integer 0-3; index into options of the single key
  perOptionRationale: [        // EXACTLY 4 strings, parallel to options
    "Why A is wrong ...",
    "Why B is wrong ...",
    "Why C is correct ...",   // the entry at answerIndex explains why it is right
    "Why D is wrong ..."
  ],
  workedSolution: "Step-by-step path to the answer, citing passage evidence.",
  difficulty: "medium",        // "easy" | "medium" | "hard"
  source: "illustrative"       // always "illustrative"
}
```

Required fields: `id`, `passageId`, `type`, `stem`, `options`, `answerIndex`,
`perOptionRationale`, `workedSolution`, `difficulty`, `source`.
Invariants: `options.length === 4`; `perOptionRationale.length === 4`;
`0 <= answerIndex <= 3`; exactly one key (`answerIndex`).

### 3.3 Essay prompt

```js
{
  id: "prompt-001",            // prompt-NNN
  theme: "law-justice",        // one of the 6 themes
  text: "How should judges be appointed?",
  source: "official-cited"     // "official-cited" (one of the 9 real prompts, with citation)
                               // | "illustrative" (original — must be labeled in UI)
  // when source === "official-cited":
  citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
}
```

Required fields: `id`, `theme`, `text`, `source`.
If `source === "official-cited"`, `citation` is required.

### 3.4 Model essay (strong or weak)

```js
{
  id: "essay-001",             // essay-NNN
  promptId: "prompt-001",      // must resolve to an existing prompt
  body: "Full essay text, 500-600 words for strong models.",
  annotations: [               // >= 1 annotation; each cross-links a named criterion
    {
      rubricDim: "thesis",     // a rubric dimension  -- OR --
      fiveI: null,             // a "Five I" pitfall (exactly one of the two is set)
      note: "The thesis is stated explicitly in sentence 1."
    },
    { rubricDim: null, fiveI: "Irresolute", note: "..." }
  ],
  quality: "model"             // "model" (strong) | "weak"
}
```

Required fields: `id`, `promptId`, `body`, `annotations`, `quality`.
Each annotation: `note` required; exactly one of `rubricDim` / `fiveI` non-null.
Rubric dimensions (M3/AC-V6): `thesis`, `argument`, `counterargument`,
`structure`, `examples`, `economy`, `clarity`.
"Five I" pitfalls (research §6): `Irresolute`, `Indecisive`, `Imprecise`,
`Inconsistent`, `Indignant`.

### 3.5 Argument bank (per theme)

```js
{
  id: "argbank-ethics",        // argbank-<theme>
  theme: "ethics",             // one of the 6 themes
  positions: ["..."],          // key positions
  counterPositions: ["..."],   // counter-positions
  examples: ["..."],           // concrete examples
  facts: ["..."]               // relevant facts (calibrated, traceable)
}
```

Required fields: `id`, `theme`, `positions`, `counterPositions`, `examples`, `facts`.

### 3.6 Lesson

```js
{
  id: "lesson-assume",         // lesson-<slug>
  title: "Identifying Assumptions (4a)",
  cluster: "Assumptions & Logical Gaps", // free-form grouping
  explanation: "...",          // what the type is
  recognitionCues: ["..."],    // how to spot it
  workedExample: "...",        // >= 1 worked example
  commonTraps: ["..."],        // typical wrong-answer patterns
  strategyBox: "..."           // a strategy summary
}
```

Required fields: `id`, `title`, `explanation`, `recognitionCues`,
`workedExample`, `commonTraps`, `strategyBox`.

### 3.7 Mock exam

```js
{
  id: "mock-01",               // mock-0X
  title: "Mock Paper 1",
  sectionA: {
    passageIds: ["psg-...","..."],   // the passages used (each must resolve)
    questionIds: ["q-...","..."]     // EXACTLY 42 in a full mock; each must resolve
                                     // and reference a passage in passageIds.
                                     // Split: each passage carries 3 or 4 questions,
                                     // summing to 42 (e.g. six 3-Q + six 4-Q passages).
  },
  sectionB: {
    promptIds: ["prompt-...","prompt-...","prompt-..."] // 3 prompts (choose 1)
  },
  sample: false                // OPTIONAL. true = a reduced sample mock; the
                               // exact-42 check is skipped gracefully (plan tools note).
}
```

Required fields: `id`, `title`, `sectionA` (`passageIds`, `questionIds`),
`sectionB` (`promptIds`).
Full-mock invariant: `questionIds.length === 42` with a valid 3-or-4-per-passage
split. If `sample === true`, the 42 check is skipped (other checks still run).

### 3.8 Progress (runtime, written by `progress.js`)

Not authored content; documented so the storage layer and Export/Import are
contract-stable. Namespace key: `lnat.progress.v1`.

```js
{
  version: "lnat.progress.v1",
  attempts: {                  // questionId -> attempt record
    "q-assume-001": { chosenIndex: 1, correct: false, ts: 1730000000000 }
  },
  typeStats: {                 // type -> { seen, correct }
    "assume": { seen: 3, correct: 2 }
  },
  mockScores: [                // one entry per completed mock
    { mockId: "mock-01", scoreA: 31, total: 42, band: "Oxbridge tier", ts: 1730000000000 }
  ]
}
```

---

## 4. Validator coverage (`tools/validate.js`)

The validator (runnable via `node tools/validate.js`) enforces, with 0 errors to pass:

1. **Required fields** present on every object per shape above.
2. **Exactly 4 options** and **exactly 4 per-option rationales** on every question;
   `answerIndex` in range `0..3`.
3. **Namespaced-ID format** for every object (per §2 patterns).
4. **Global ID uniqueness** across all buckets after concatenation.
5. **Referential integrity:** every `passageId`, `questionId`, `promptId`
   reference resolves to an existing object.
6. **Per-mock count = exactly 42** with a valid 3-or-4-per-passage split. A mock
   flagged `sample: true` skips the 42 check gracefully (other checks still apply).
7. **Labeling / source:** passages and questions are `source: "illustrative"`;
   `official-cited` prompts carry a `citation`.

Mock/drill passage disjointness and full content-volume floors are enforced by the
later QA lane (plan §8.2) and are out of scope for this Phase-0/1 SAMPLE validator.
