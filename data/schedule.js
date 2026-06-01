/*
 * schedule.js — 10-week intensive LNAT study schedule.
 *
 * Target: early-September 2026 test date (~2–3 months from June 2026 start).
 * Oxford/Cambridge note: if targeting Oxbridge, sit by 15 October 2026 — shift
 * all weeks one week later to begin July 2026 and peak in mid-September.
 *
 * Structure: array of week objects pushed into window.LNAT_DATA.schedule.
 * Each week has: week (number), theme (string), goals (string[]), days (array).
 * Each day has: day (number 1–7), label (string), estimatedMinutes (number),
 *               tasks (string[]).
 *
 * Content references use IDs and names that exist in this site's data files:
 *   Lessons: lesson-main, lesson-standpoint, lesson-structure, lesson-detail,
 *            lesson-implied, lesson-inference, lesson-factinf, lesson-assume,
 *            lesson-opinion, lesson-vocab, lesson-tone, lesson-reading,
 *            lesson-pacing, lesson-strategy
 *   Drills:  by question type tag (assume, inference, main, etc.)
 *   Mocks:   mock-01 through mock-05
 *   Essay themes: law-justice, civil-liberties, education-society, ethics,
 *                 politics-governance, media-tech-environment
 *   Essay prompts: prompt bank on site; model essays essay-001 onwards
 *
 * Delivery model: assigns into window.LNAT_DATA.schedule (created by loader.js).
 * Must load AFTER loader.js. English only.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] schedule.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  // Defensive init: respect whatever loader.js set; fall back to empty array.
  DATA.schedule = DATA.schedule || [];

  DATA.schedule.push(

    /* ====================================================================== *
     * WEEK 1 — Orientation & Section A Foundations I
     * Arc: understand the test, read all Cluster 1 lessons, first easy drills,
     * begin daily active reading habit.
     * Daily effort: ~2.0–2.5 h
     * ====================================================================== */
    {
      week: 1,
      theme: "Orientation & Section A Foundations I",
      goals: [
        "Understand LNAT format: 42 MCQs / 95 min Section A + 40-min essay Section B.",
        "Read Lessons: lesson-main, lesson-standpoint, lesson-structure (Cluster 1 — Argument Analysis).",
        "Complete first timed easy drills for main, standpoint, structure types.",
        "Establish daily active-reading habit (quality opinion/comment pieces — 20 min/day).",
        "Record baseline comfort level per question type in the progress tracker."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Test orientation + Lesson: Main Idea",
          estimatedMinutes: 120,
          tasks: [
            "Read the LNAT format overview on the site (structure, timing, scoring bands).",
            "Read research brief §1 (structure) and §2 (scoring bands) — understand 42 Q / 95 min / no penalty.",
            "Study Lesson: lesson-main (Main Idea / Primary Purpose 1a) — full read including recognition cues, worked example, common traps, strategy box.",
            "Do 10 untimed main-type drills from the drill bank; check all answers and read every rationale.",
            "Active reading: read one opinion article (newspaper editorial or comment piece); write 2 sentences: (a) the main argument, (b) the strongest counterargument.",
            "Log question-type comfort: main — out of 10."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Lesson: Author's Standpoint + timed drill",
          estimatedMinutes: 130,
          tasks: [
            "Study Lesson: lesson-standpoint (Author's Standpoint / Attitude 1b) — full read.",
            "Do 10 timed standpoint drills: allow ~2 min per question (set a timer). Record score.",
            "Review every miss: identify which trap you fell into (described-vs-held, neutral misread, etc.).",
            "Active reading (20 min): extract the author's attitude — is it critical, sympathetic, cautious, neutral? Locate 2 phrases that reveal it.",
            "Write a 3-sentence reflection: what makes standpoint questions hard for you?"
          ]
        },
        {
          day: 3,
          label: "Wednesday — Lesson: Logical Structure + drill",
          estimatedMinutes: 130,
          tasks: [
            "Study Lesson: lesson-structure (Logical Structure / Argument Map 1c) — full read.",
            "Do 10 timed structure drills (~2 min each). Record score.",
            "For every question, sketch a 3-box argument map: Premise → Gap → Conclusion, before checking answer.",
            "Active reading: map the structure of today's article — label premises, the main conclusion, and any concessions.",
            "Review lesson-main and lesson-standpoint strategy boxes (5 min consolidation)."
          ]
        },
        {
          day: 4,
          label: "Thursday — Cluster 1 mixed drill + passage work",
          estimatedMinutes: 140,
          tasks: [
            "Mixed timed drill: 15 questions drawn from main + standpoint + structure types (~2 min each). Total ~30 min timed.",
            "Score and review: for each miss, note whether the error was (a) misreading the question type, (b) wrong argument mapping, or (c) distractor trap.",
            "Read one full illustrative passage on the site — read once for main idea, once for author attitude, once for structure. Answer all linked questions.",
            "Active reading (20 min): summarise today's article in one sentence — force yourself to commit to the author's single main point.",
            "Update progress tracker with Cluster 1 scores."
          ]
        },
        {
          day: 5,
          label: "Friday — Lesson: Active Reading + pacing intro",
          estimatedMinutes: 120,
          tasks: [
            "Study Lesson: lesson-reading (Active Reading for LNAT) — full read.",
            "Study Lesson: lesson-pacing (Pacing & Time Management) — full read. Internalise: ~8 min per passage, ~2 min per question, skim 60–90 s for argument + structure.",
            "Practice one passage from the drill bank under timed conditions: 8 min for passage + questions. Do not exceed the time limit.",
            "Review pacing performance: did you finish? Which step (skim / read stem / eliminate / answer) took longest?",
            "Active reading: apply the lesson-reading technique — mark the thesis, two key premises, and the counterargument in today's article."
          ]
        },
        {
          day: 6,
          label: "Saturday — Consolidation + catch-up",
          estimatedMinutes: 120,
          tasks: [
            "Redo 5–10 questions you got wrong during the week, untimed. Focus on understanding the correct rationale.",
            "Re-read the strategy boxes for lesson-main, lesson-standpoint, lesson-structure, lesson-pacing.",
            "Do 10 easy-difficulty drills (mixed Cluster 1) timed. Target: 8/10 or better.",
            "Active reading: 20 min. This week's habit: read and annotate every day — today counts.",
            "Write a brief weekly self-assessment: which type feels weakest? What trap recurred? (5 min, private notes)."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day (light only)",
          estimatedMinutes: 30,
          tasks: [
            "Light only: read one short comment piece (newspaper), 15 min. Extract main argument in one sentence.",
            "No drills, no timed work. Rest is part of the schedule.",
            "Optional: flip through the scoring bands table — anchor the target score (aim for 29+ for competitive universities)."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 2 — Section A Foundations II + Essay Fundamentals
     * Arc: Clusters 2–3 lessons, essay structure intro, first essay plan (untimed).
     * Daily effort: ~2.0–2.5 h
     * ====================================================================== */
    {
      week: 2,
      theme: "Section A Foundations II + Essay Fundamentals",
      goals: [
        "Read Lessons: lesson-detail, lesson-implied (Cluster 2 — Information Retrieval).",
        "Read Lessons: lesson-inference, lesson-factinf (Cluster 3 — Inference & Implication).",
        "Study Section B essay fundamentals (lesson-strategy on the site + essay basics in reference).",
        "Read one model essay (essay-001) and one weak essay (essay-002) with annotations.",
        "Complete first essay plan (untimed) on an official prompt.",
        "Run 15 easy/medium drills per day across Clusters 1–3."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Lesson: Explicit Comprehension + Stated vs Implied",
          estimatedMinutes: 130,
          tasks: [
            "Study Lesson: lesson-detail (Explicit Comprehension / Stated Fact 2a) — full read. Key trap: paraphrase traps that reword the passage without changing meaning.",
            "Study Lesson: lesson-implied (Stated vs Implied 2b) — full read. Practice distinguishing 'explicitly says' from 'suggests but does not state'.",
            "Do 12 timed drills: 6 detail + 6 implied type (~2 min each). Record score.",
            "Active reading: for today's article, list 3 things explicitly stated and 2 things only implied. Test yourself: can you quote exact text for the stated claims?"
          ]
        },
        {
          day: 2,
          label: "Tuesday — Lesson: Inference + Fact vs Inference",
          estimatedMinutes: 135,
          tasks: [
            "Study Lesson: lesson-inference (Inference / Implication 3a) — full read. Key trap: plausible-in-the-world but not text-supported.",
            "Study Lesson: lesson-factinf (Fact vs Inference 3b) — full read. Drill the distinction: what is presented as a given vs what the author concludes.",
            "Do 12 timed drills: 6 inference + 6 factinf (~2 min each). Record score.",
            "Review all misses: did you use outside knowledge? Did you choose 'plausible' over 'text-supported'?",
            "Active reading: identify 2 inferences the author draws. Are they well-supported by the article's evidence?"
          ]
        },
        {
          day: 3,
          label: "Wednesday — Clusters 1–3 mixed timed session",
          estimatedMinutes: 140,
          tasks: [
            "Timed mixed drill: 20 questions across Clusters 1–3 (main, standpoint, structure, detail, implied, inference, factinf). Set timer: 40 min total. Simulate real pacing.",
            "Score and review: calculate a raw score out of 20. Review every miss with rationale.",
            "Identify your two weakest types from the review. Schedule extra drill on those types tomorrow.",
            "Active reading (20 min): apply all cluster skills — identify main idea, author stance, one fact, one inference."
          ]
        },
        {
          day: 4,
          label: "Thursday — Essay Fundamentals: model + weak essay study",
          estimatedMinutes: 140,
          tasks: [
            "Read Section B format overview: 3 prompts, choose 1; 40 min; 500–600 words ideal.",
            "Read essay-001 (model essay — 'How should judges be appointed?') in full, then read every annotation carefully. Note: committed thesis, two distinct argument paras, counterargument + rebuttal, economy in conclusion.",
            "Read essay-002 (weak essay, same prompt) in full with annotations. Identify each Five I flaw: Irresolute (fence-sitting), Indecisive, Imprecise.",
            "Read the Five I pitfalls section in the reference data. Memorise the five terms.",
            "Write a 5-sentence contrast: what does the model do that the weak essay does not? Be specific.",
            "Active reading (15 min): light read only today."
          ]
        },
        {
          day: 5,
          label: "Friday — First essay plan (prompt-001, untimed)",
          estimatedMinutes: 130,
          tasks: [
            "Open prompt-001: 'How should judges be appointed?' — same prompt as the model essay, so you can compare.",
            "Spend 10 min planning: (a) choose your position, (b) list 2 supporting arguments with one concrete example each, (c) identify the strongest counter and your rebuttal, (d) draft a one-sentence conclusion that ties back to both arguments.",
            "Write the essay untimed. Aim for 500–600 words. Do not look at essay-001 while writing.",
            "Compare your plan and essay against essay-001. Where did you fence-sit? Where did your examples go vague? Note 3 things to fix.",
            "Active reading (15 min): track the author's thesis and rebuttal of a counterargument."
          ]
        },
        {
          day: 6,
          label: "Saturday — Targeted drill on weakest Cluster 1–3 types",
          estimatedMinutes: 130,
          tasks: [
            "Pull your two weakest types from Wednesday's review. Do 15 drills on those types, timed.",
            "After each batch of 5, pause and re-read the lesson's strategy box before continuing.",
            "Do 5 easy-difficulty drills across all 7 types covered so far. Target: maintain 80%+ on easy.",
            "Active reading (20 min): apply today's focus types — e.g., if weak on factinf, identify every factual vs inferential claim in the article."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light: read one short article, extract main argument, one inference, one assumption (preview for next week). No formal drill.",
            "Review your Week 2 essay plan notes. One quiet read of the five rubric dimensions: thesis, argument, counterargument, structure, examples, economy, clarity."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 3 — Clusters 4–5 Type Mastery + Theme Briefing I
     * Arc: assumptions + language/style lessons, begin theme briefings, first
     * timed single-passage sessions, 1 practice essay with self-grade.
     * Daily effort: ~2.0–2.5 h
     * ====================================================================== */
    {
      week: 3,
      theme: "Clusters 4–5 Type Mastery + Essay Theme Briefing I",
      goals: [
        "Read Lessons: lesson-assume, lesson-opinion (Cluster 4 — Assumptions & Logical Gaps).",
        "Read Lessons: lesson-vocab, lesson-tone (Cluster 5 — Language, Style & Vocabulary).",
        "Study the lesson-strategy lesson fully (Section A exam strategy).",
        "Study 2 essay theme briefings: law-justice + civil-liberties.",
        "Complete 1 timed single-passage session per day (8 min for passage + questions).",
        "Write 1 practice essay with self-grade against rubric (thesis, argument, counterargument, examples, economy, clarity)."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Lesson: Identifying Assumptions",
          estimatedMinutes: 135,
          tasks: [
            "Study Lesson: lesson-assume (Identifying Assumptions 4a) — full read. Master the negation test: if denying an option destroys the argument, it is the assumption.",
            "Do 15 timed assume-type drills (~2 min each). Apply negation test on each.",
            "Review misses: did you pick an explicitly stated premise? Did you pick a conclusion rather than a premise?",
            "Active reading: find one assumption in today's article. Apply negation: does the article's argument collapse without it?",
            "Timed passage session: 1 full passage + its linked questions from the drill bank, 8-min timer."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Lesson: Opinion vs Assumption",
          estimatedMinutes: 135,
          tasks: [
            "Study Lesson: lesson-opinion (Opinion vs Assumption 4b) — full read. Key: expressed opinion is stated; assumption is unstated. 'I believe X' = opinion; the hidden premise that makes the argument work = assumption.",
            "Do 12 timed opinion drills. After each, articulate in one line: why is this an opinion and not an assumption (or vice versa)?",
            "Mixed Cluster 4 drill: 10 mixed assume + opinion, timed. Record score.",
            "Timed passage session (8 min). Note which question types appear in this passage.",
            "Active reading: identify one opinion the author states explicitly versus one thing the argument assumes."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Lessons: Vocabulary + Tone",
          estimatedMinutes: 130,
          tasks: [
            "Study Lesson: lesson-vocab (Meaning-in-Context 5a) — full read. Trap: common dictionary meaning ≠ contextual meaning. Always read the full sentence, not just the word.",
            "Study Lesson: lesson-tone (Tone / Attitude via language 5b) — full read. Look for loaded words, hedges, irony markers.",
            "Do 10 timed vocab + 10 timed tone drills (~2 min each).",
            "Timed passage session (8 min). Focus on vocab and tone questions in this passage.",
            "Active reading: pick 3 words or phrases that carry tone. What attitude do they signal — ironic, critical, cautious, approving?"
          ]
        },
        {
          day: 4,
          label: "Thursday — lesson-strategy + full Cluster 4–5 mixed drill",
          estimatedMinutes: 140,
          tasks: [
            "Study Lesson: lesson-strategy (Section A Exam Strategy) — full read. Lock in: skim 60–90 s, read stem before passage, eliminate then discriminate, mark-and-move, always guess.",
            "Mixed Cluster 4–5 timed drill: 20 questions (assume, opinion, vocab, tone), 40 min. Simulate real conditions — no pausing.",
            "Review every miss with rationale. Calculate running accuracy by type.",
            "Timed passage session (8 min). After, reflect: did you follow lesson-strategy protocol?"
          ]
        },
        {
          day: 5,
          label: "Friday — Essay Theme Briefing: law-justice + civil-liberties",
          estimatedMinutes: 140,
          tasks: [
            "Read theme briefing: law-justice (argbank-law-justice) — positions, counter-positions, examples, facts. Take notes on 3 positions and 2 examples you could use in an essay.",
            "Read theme briefing: civil-liberties — same note-taking approach.",
            "Study 1 model essay (essay-001) annotation pass: read only the annotations, not the body. What rubric dimensions does it hit?",
            "Write a timed practice essay: choose a prompt from the law-justice or civil-liberties theme bank. 40 min total: 8 min plan + 28 min write + 4 min edit.",
            "Self-grade your essay against rubric dimensions. Score 1–3 on: thesis, argument, counterargument, examples, economy, clarity. Note the lowest dimension."
          ]
        },
        {
          day: 6,
          label: "Saturday — All-type drill + second timed passage",
          estimatedMinutes: 135,
          tasks: [
            "All-type mixed drill: 25 questions across all 11 types, timed (50 min). This is the closest to real Section A density you've done yet.",
            "Review misses by cluster. Which cluster has the highest miss rate? That is your Week 4 focus.",
            "Second timed passage session (8 min). Compare your skim-read-eliminate timing to last week.",
            "Active reading: 20 min. Try a philosophy or science article — LNAT frequently uses analytical non-political genres."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light: read one short article, no drills.",
            "Review your weakest cluster. Re-read just the strategy box for that cluster's lesson. Plan your Week 4 drill emphasis."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 4 — Type Mastery Consolidation + Theme Briefings II
     * Arc: targeted remedial drills on weak types, 2 theme briefings, timed
     * multi-passage blocks, second practice essay.
     * Daily effort: ~2.0–2.5 h
     * ====================================================================== */
    {
      week: 4,
      theme: "Type Mastery Consolidation + Essay Theme Briefings II",
      goals: [
        "Target weakest 2–3 question types with focused hard-difficulty drills.",
        "Study 2 more essay theme briefings: education-society + ethics.",
        "Build stamina with 2-passage timed blocks (16 min for 2 passages).",
        "Write 1 practice essay on an ethics or education-society prompt.",
        "Track type-by-type accuracy across all 11 types in the progress tracker."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Remedial: weakest type deep dive",
          estimatedMinutes: 140,
          tasks: [
            "Identify your single weakest type from Week 3 review. Re-read its lesson in full.",
            "Do 20 drills on that type: 10 easy, then 10 medium. Time each batch (20 min per batch).",
            "After each batch, re-read the lesson's common traps section before starting the next batch.",
            "One timed passage session (8 min) using a passage likely to contain your weak type.",
            "Active reading (20 min): look for 3 examples of your weak question type in the article."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Remedial: second-weakest type + mixed drill",
          estimatedMinutes: 135,
          tasks: [
            "Deep dive on second-weakest type: re-read lesson, do 15 targeted drills (mix easy + medium).",
            "Mixed drill: 15 questions from your two weakest types, timed (30 min). Target improvement over last week's score.",
            "Two-passage block: 2 timed passages back to back, 16 min total. No break between passages.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Essay Theme Briefing: education-society + ethics",
          estimatedMinutes: 140,
          tasks: [
            "Read theme briefing: education-society — note 3 positions, 2 counter-positions, 2 concrete examples.",
            "Read theme briefing: ethics — note 3 positions, 2 counter-positions, 2 examples. Pay attention to 'Five I' avoidance on ethics prompts (common to over-moralize = Indignant flaw).",
            "Study the weak essay's annotations again (essay-002). Today's focus: Imprecise and Inconsistent flaws.",
            "Draft a 10-minute essay plan for an ethics prompt from the prompt bank. Do not write the essay yet.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 4,
          label: "Thursday — Timed multi-passage block + hard drills",
          estimatedMinutes: 140,
          tasks: [
            "Two-passage timed block (16 min). This time, apply lesson-strategy protocol explicitly: skim → read stem → eliminate → answer. Do not re-read the whole passage for every question.",
            "Hard-difficulty drill session: 15 hard questions across all 11 types. Time: 30 min.",
            "Score and review: hard questions — what makes them hard? Note the precise trap in each miss.",
            "Active reading (20 min): choose a philosophy or history genre article — LNAT uses these heavily."
          ]
        },
        {
          day: 5,
          label: "Friday — Practice Essay: ethics or education-society (timed)",
          estimatedMinutes: 140,
          tasks: [
            "Select an ethics or education-society prompt from the prompt bank.",
            "40-minute timed essay: 8 min plan (commit to thesis + 2 args + 1 counter + conclusion note) → 28 min write → 4 min edit.",
            "After writing: self-grade on all 7 rubric dimensions (1–3 scale). Note lowest dimension.",
            "Compare against the model essay rubric: is your thesis committed from sentence 1? Did you fairly state and rebut the counterargument?",
            "Identify 1 Five I flaw present in your essay. Plan how to fix it next time."
          ]
        },
        {
          day: 6,
          label: "Saturday — All-type timed drill (hard focus) + 3-passage block",
          estimatedMinutes: 145,
          tasks: [
            "All-11-type mixed drill: 22 questions, 60% hard difficulty. Time: 44 min. Simulate real conditions.",
            "Three-passage timed block: 3 passages back to back, 24 min total. Track time per passage. Did any passage eat too much time?",
            "Score both sessions. Update type-by-type accuracy log in the progress tracker.",
            "Reflect: which genre of passage (philosophy, science, politics, history) is hardest for you? Flag for Week 5."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light: 20 min reading, no drills.",
            "Preview Week 5 plan: next week features the first 3-passage timed blocks and theme briefings for the remaining 2 themes. Mentally commit to the schedule."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 5 — Full Type Coverage + Theme Briefings III + Stamina Building
     * Arc: complete all theme briefings, extend timed blocks to 4 passages,
     * 2 practice essays this week, begin score-tracking.
     * Daily effort: ~2.5 h
     * ====================================================================== */
    {
      week: 5,
      theme: "Full Type Coverage + Theme Briefings III + Stamina Building",
      goals: [
        "Complete all 6 essay theme briefings: politics-governance + media-tech-environment.",
        "Extend timed passage blocks to 4 passages (32 min) — approaching half a real Section A.",
        "Complete 2 timed practice essays this week; self-grade both; compare to model essays.",
        "Achieve target accuracy: 75%+ across all 11 question types on medium drills.",
        "Begin recording projected Section A score (extrapolate from timed accuracy)."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Theme Briefings: politics-governance + media-tech-environment",
          estimatedMinutes: 140,
          tasks: [
            "Read theme briefing: politics-governance — note 3 positions, 2 counter-positions, 2 examples.",
            "Read theme briefing: media-tech-environment — same note approach.",
            "You now have all 6 theme briefing notes. Do a 10-min cross-theme review: can you identify a position and a counter for each theme from memory?",
            "Mixed all-type drill: 15 questions (medium difficulty), timed 30 min.",
            "Active reading (20 min): choose a politics or governance article."
          ]
        },
        {
          day: 2,
          label: "Tuesday — 4-passage timed block + hard drills",
          estimatedMinutes: 150,
          tasks: [
            "Four-passage timed block: 4 passages back to back, 32 min. No pausing.",
            "After the block: check your time split. Did you drift over 8 min on any passage? Identify which passage and why.",
            "Hard-difficulty mixed drill: 15 questions, timed 30 min.",
            "Review misses from both sessions. Update accuracy log.",
            "Active reading (20 min): science or history genre article."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Practice Essay 1 (timed, politics-governance)",
          estimatedMinutes: 140,
          tasks: [
            "Select a politics-governance prompt from the prompt bank.",
            "Full 40-min timed essay: 8 plan + 28 write + 4 edit.",
            "Self-grade: 7 rubric dimensions, 1–3 scale. Calculate total.",
            "Check for Five I flaws. Is your position committed from the first sentence?",
            "Active reading (20 min). No extra drills today — let the essay work stand alone."
          ]
        },
        {
          day: 4,
          label: "Thursday — Stamina: 6-passage timed block",
          estimatedMinutes: 150,
          tasks: [
            "Six-passage timed block: 6 passages, 48 min total (~half of Section A). This is the longest timed run so far.",
            "Track: (a) time per passage, (b) any passages you rushed or over-ran, (c) total score.",
            "After the block: review all misses. What happened in the final 2 passages — did fatigue affect accuracy?",
            "15-question easy drill (all types) — immediate re-calibration after the stamina block.",
            "Active reading (15 min, light)."
          ]
        },
        {
          day: 5,
          label: "Friday — Practice Essay 2 (timed, media-tech-environment)",
          estimatedMinutes: 140,
          tasks: [
            "Select a media-tech-environment prompt from the prompt bank.",
            "Full 40-min timed essay: 8 plan + 28 write + 4 edit.",
            "Self-grade on rubric. Compare your 7-dimension profile across Essay 1 (Wednesday) and Essay 2 (today). Has any dimension improved?",
            "Read a model essay for the same or similar theme — identify 2 techniques you did not use but could adopt.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 6,
          label: "Saturday — All-type hard drill + 4-passage block",
          estimatedMinutes: 150,
          tasks: [
            "Hard-difficulty all-type drill: 25 questions, timed 50 min.",
            "4-passage timed block (32 min). Compare pacing to Tuesday — any improvement?",
            "Calculate week's projected score: take your average timed accuracy % and apply it to 42 questions. Write the number down. Target: 27+ by end of Week 5.",
            "Active reading (20 min): choose an unfamiliar genre (e.g., literary criticism or philosophy)."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light reading only. Review your 5-week progress: type accuracy chart, essay self-grades, projected score.",
            "Prepare mentally for Week 6: first full mock exam. Confirm you have time booked for a 2h15 uninterrupted sitting."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 6 — FIRST FULL MOCK + Review Cycle
     * Arc: MILESTONE — first full mock paper (mock-01) under real conditions,
     * deep review, gap analysis, 2 practice essays.
     * Daily effort: ~2.5–3.0 h
     * ====================================================================== */
    {
      week: 6,
      theme: "First Full Mock + Deep Review",
      goals: [
        "MILESTONE: Sit mock-01 under real timed conditions (95 min Section A + 40 min Section B).",
        "Complete a full mock review: score Section A, map misses by type, identify top 3 weaknesses.",
        "Run targeted drill on the 3 weakest types revealed by mock-01.",
        "Write 2 timed practice essays this week.",
        "Record first official score in the progress tracker: target 25+ at this stage."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Full mock: mock-01 (real conditions)",
          estimatedMinutes: 180,
          tasks: [
            "Sit mock-01 under fully timed, uninterrupted conditions. Section A: 95 min. Section B: 40 min. No breaks between sections.",
            "Use exam conditions: quiet room, no phone, no notes during the test.",
            "After finishing: before reviewing answers, write 3 lines on how the timing felt and which passages were hardest.",
            "Mark Section A: record your raw score (x/42). Record which questions you guessed on.",
            "Do NOT review answers today. Let the score sit overnight."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Mock-01 deep review",
          estimatedMinutes: 150,
          tasks: [
            "Review every Section A miss: read the passage, re-read the question, read the correct rationale fully.",
            "Categorise each miss: (a) which type, (b) which cluster, (c) which specific trap (e.g., outside knowledge, paraphrase, plausible-but-unsupported).",
            "Identify top 3 weakest types from this mock. Write them down.",
            "Review your Section B essay from mock-01: self-grade on 7 rubric dimensions. What was the worst dimension?",
            "Active reading (20 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Targeted remedial drills (top 3 weak types from mock)",
          estimatedMinutes: 150,
          tasks: [
            "Drill type 1 (weakest): 20 drills, mixed easy/medium/hard, timed. After each block of 10, re-read that lesson's strategy box.",
            "Drill type 2: 15 drills timed. Review all misses.",
            "Drill type 3: 15 drills timed. Review all misses.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 4,
          label: "Thursday — Consolidation + Practice Essay 1",
          estimatedMinutes: 150,
          tasks: [
            "Mixed timed drill: 20 questions across all 11 types (hard difficulty). 40 min. Apply lesson-strategy protocol.",
            "4-passage timed block (32 min). Focus on types you drilled yesterday.",
            "Timed practice essay (40 min): choose a theme you haven't written on yet. Self-grade.",
            "Active reading (15 min)."
          ]
        },
        {
          day: 5,
          label: "Friday — Practice Essay 2 + model essay comparison",
          estimatedMinutes: 140,
          tasks: [
            "Timed practice essay (40 min): choose a prompt from the theme you found hardest in Week 5.",
            "After writing: compare your essay to the closest model essay in the site's model essay bank. Identify 3 specific differences (not vague — e.g., 'my counterargument paragraph had no rebuttal sentence').",
            "Write your 3 improvements as a checklist to carry into the next essay.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 6,
          label: "Saturday — Full timed passage run (8 passages, 64 min)",
          estimatedMinutes: 160,
          tasks: [
            "Eight-passage timed block: 8 passages, 64 min total (~two-thirds of Section A).",
            "Strict pacing: 8 min per passage. Mark and move on any question that takes more than 2.5 min.",
            "Score and review. Calculate projected score across 42 questions from this session.",
            "Update progress tracker: Week 6 projected score.",
            "Active reading (15 min, light)."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light reading only. Reflect on mock-01 score and the week's improvement. Plan Week 7 focus areas.",
            "Confirm your test date booking — by this point you should have registered at Pearson VUE."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 7 — Mock Cycle II + Essay Ramp
     * Arc: mock-02 under timed conditions, review, targeted drills, 2 essays.
     * Daily effort: ~2.5–3.0 h
     * ====================================================================== */
    {
      week: 7,
      theme: "Mock Cycle II + Essay Ramp",
      goals: [
        "Sit mock-02 under timed conditions.",
        "Compare mock-02 score to mock-01. Target: improvement of 2–3 points.",
        "Drill weaknesses revealed by mock-02; aim for 80%+ on those types by end of week.",
        "Write 2 timed essays; compare self-grades across all 4 essays so far — track improvement.",
        "Target Section A score: 27+ by end of Week 7."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Full mock: mock-02 (real conditions)",
          estimatedMinutes: 175,
          tasks: [
            "Sit mock-02 under fully timed, uninterrupted conditions. 95 min Section A + 40 min Section B.",
            "Record raw Section A score immediately after. Note which passages were time sinks.",
            "Write 3 lines on stamina: did focus hold through all 95 min? Which quarter of the paper was weakest?",
            "Do not review answers today."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Mock-02 deep review + comparison to mock-01",
          estimatedMinutes: 150,
          tasks: [
            "Review every mock-02 Section A miss: type, cluster, trap category.",
            "Compare to mock-01 misses: which types have improved? Which types still weak?",
            "Review mock-02 Section B essay: self-grade on 7 rubric dimensions. Compare to mock-01 essay self-grade. Has any dimension improved?",
            "Set Week 7 drill priority: top 2 types still weak after 2 mocks.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Targeted drills + 5-passage timed block",
          estimatedMinutes: 150,
          tasks: [
            "Targeted drills on top 2 weak types: 20 drills each, mixed difficulty. Re-read lesson strategy box between batches.",
            "5-passage timed block (40 min). Apply lesson-strategy full protocol.",
            "Score the passage block. Did the remedial drills help today?",
            "Active reading (20 min): choose a genre that appeared in mock-02."
          ]
        },
        {
          day: 4,
          label: "Thursday — Practice Essay 1 (timed) + rubric drill",
          estimatedMinutes: 150,
          tasks: [
            "Timed essay (40 min): choose a prompt from a theme not used in the last 2 weeks.",
            "After writing: self-grade all 7 rubric dimensions. Plot your dimension score chart across all 5 essays to date.",
            "Rubric drill: take your lowest rubric dimension. Find the annotation in essay-001 that addresses that dimension. Rewrite one paragraph of your today's essay to fix the weak dimension.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 5,
          label: "Friday — Practice Essay 2 (timed) + model essay technique study",
          estimatedMinutes: 145,
          tasks: [
            "Timed essay (40 min): choose a law-justice or civil-liberties prompt — these are highest-frequency LNAT themes.",
            "After writing: compare to a model essay. Pull out 2 structural techniques you can adopt (e.g., how the model signals its rebuttal, how it opens the counterargument paragraph).",
            "Mixed hard-difficulty drill: 15 questions, 30 min.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 6,
          label: "Saturday — Full 10-passage timed block",
          estimatedMinutes: 165,
          tasks: [
            "Ten-passage timed block: 10 passages, 80 min. This is very close to the full 95-min Section A density (12 passages).",
            "Strict 8-min-per-passage rule. Mark and move. Always guess — no blanks.",
            "Score and project: apply accuracy to 42 questions. Record projected score.",
            "Identify the passage number where accuracy dipped. Was it fatigue or a difficult passage genre?",
            "Active reading (15 min, light)."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light reading only.",
            "Review mock-01 and mock-02 score trajectory. Are you on pace to hit 29+ by the end of Week 9?"
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 8 — Mock Cycle III + Peak Intensity
     * Arc: mock-03, review, peak hard-drill session, 2 essays, 12-passage full run.
     * Daily effort: ~2.5–3.0 h
     * ====================================================================== */
    {
      week: 8,
      theme: "Mock Cycle III + Peak Intensity",
      goals: [
        "Sit mock-03 under timed conditions.",
        "Target mock-03 score: 29+ (Oxbridge/top-tier competitive range).",
        "Complete peak hard-drill session: 30 questions, all hard, 60 min.",
        "Write 2 timed essays; both should now score 2+ on all 7 rubric dimensions.",
        "Complete first 12-passage full-length timed run (96 min — simulating Section A in full)."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Full mock: mock-03 (real conditions)",
          estimatedMinutes: 175,
          tasks: [
            "Sit mock-03: 95 min Section A + 40 min Section B. Full exam conditions.",
            "Record raw Section A score. Note any time-management issues.",
            "If you finish Section A early: use remaining time to review flagged questions, not to re-read passages you already answered.",
            "Do not review answers today."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Mock-03 deep review + 3-mock trend analysis",
          estimatedMinutes: 155,
          tasks: [
            "Full review of mock-03 Section A misses: type + cluster + trap.",
            "3-mock trend: plot scores for mock-01, mock-02, mock-03. Is the trend upward? Which types are still consistently missed?",
            "Review mock-03 Section B essay. Compare self-grade to mock-01 and mock-02. Track the lowest rubric dimension across all 3.",
            "Set Week 8 remaining priorities: drill the 1–2 types still showing misses across 3 mocks.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Peak hard-drill session + 6-passage block",
          estimatedMinutes: 155,
          tasks: [
            "Peak hard-drill: 30 hard questions, all 11 types, 60 min. No pausing. This is the hardest drill session of the programme.",
            "Score and review all misses. Record the total score out of 30.",
            "6-passage timed block (48 min). Maintain consistent pacing.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 4,
          label: "Thursday — Practice Essay 1 (timed) + essay technique refinement",
          estimatedMinutes: 150,
          tasks: [
            "Timed essay (40 min): choose the theme with your lowest rubric score from the 3-essay trend.",
            "After writing: focus self-grade on your 2 weakest dimensions only. Write a specific fix-sentence for each.",
            "Mixed hard drill: 15 questions, 30 min.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 5,
          label: "Friday — Practice Essay 2 (timed) + full model essay read",
          estimatedMinutes: 145,
          tasks: [
            "Timed essay (40 min): choose a prompt from any unused theme. Focus on the opening — commit your thesis by sentence 1.",
            "Read a model essay from a different theme in full. Study the counterargument paragraph specifically: how does it introduce the opposing view fairly and then rebut it precisely?",
            "Apply what you saw: rewrite your essay's counterargument paragraph using the model's technique.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 6,
          label: "Saturday — Full 12-passage timed run (Section A simulation)",
          estimatedMinutes: 175,
          tasks: [
            "Twelve-passage timed run: 12 passages, 96 min. This is a full Section A simulation using drill passages (not a mock exam — mock-04 and mock-05 are reserved).",
            "Strict 8-min-per-passage rule. Mark and move. Always guess.",
            "After: calculate Section A score projection (apply accuracy % to 42). Record as Week 8 projected peak score.",
            "Rest of the day: no more drills. This is your heaviest day of the programme.",
            "Active reading (15 min, light)."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Light reading only. No drills or essays.",
            "Check test date: at this point (approximately early August 2026) you should have a confirmed test date in early September. If not, book immediately — Pearson VUE slots fill up."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 9 — Final Mocks + Score Lock
     * Arc: mock-04, mock-05, pinpoint final weaknesses, 1 essay, begin taper.
     * Daily effort: ~2.0–2.5 h (easing back from peak)
     * ====================================================================== */
    {
      week: 9,
      theme: "Final Mocks + Score Lock",
      goals: [
        "Sit mock-04 under timed conditions; target 29+ or within 1 point of personal best.",
        "Sit mock-05 under timed conditions; this is the last full mock before the real test.",
        "Review both mocks; identify any remaining persistent error patterns.",
        "Write 1 final timed essay; review against rubric and note your standing across all 7 dimensions.",
        "Begin taper: reduce volume but maintain sharpness."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Full mock: mock-04 (real conditions)",
          estimatedMinutes: 170,
          tasks: [
            "Sit mock-04: 95 min Section A + 40 min Section B. Exam conditions.",
            "Record score. Note emotional state during the mock — did confidence hold?",
            "Do not review answers today. Take the evening off completely."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Mock-04 review + targeted drill",
          estimatedMinutes: 140,
          tasks: [
            "Review all mock-04 Section A misses. Are these the same types as in mock-01, or new types?",
            "If a type recurs across 4 mocks: that type needs one final targeted 20-drill session today. Do it now.",
            "Review mock-04 Section B essay. Is it better than mock-03? Which rubric dimension dropped?",
            "Light mixed drill: 10 medium-difficulty questions, untimed or loosely timed (2.5 min each).",
            "Active reading (20 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Full mock: mock-05 (real conditions)",
          estimatedMinutes: 170,
          tasks: [
            "Sit mock-05: 95 min Section A + 40 min Section B. This is your final full mock.",
            "Before starting: use the 2-min pre-test ritual: read all 3 Section B prompts first, mentally choose one, then turn to Section A.",
            "Record score. This is your best prediction of test-day performance.",
            "Do not review answers today. Take the evening off."
          ]
        },
        {
          day: 4,
          label: "Thursday — Mock-05 review + 5-mock trend final analysis",
          estimatedMinutes: 145,
          tasks: [
            "Review all mock-05 misses. Type + cluster + trap.",
            "Five-mock trend chart: plot scores mock-01 through mock-05. Is the arc upward? What is the highest score achieved?",
            "If highest score is below 27: identify the top 2 types dragging the score and run one final 20-drill remedial session.",
            "Final essay review: re-read your self-grade chart across all 7+ essays. What is your most consistently weak rubric dimension? Write 2 sentences on how you will address it in the real essay.",
            "Active reading (20 min)."
          ]
        },
        {
          day: 5,
          label: "Friday — Final timed practice essay",
          estimatedMinutes: 140,
          tasks: [
            "One final timed essay (40 min): choose the prompt type that challenges you most.",
            "Self-grade on all 7 rubric dimensions. This is your benchmark going into the real test.",
            "Final essay checklist: (a) thesis committed by sentence 1? (b) two distinct arguments? (c) counterargument stated fairly and then rebutted? (d) no Five I flaws? (e) within 600 words?",
            "Active reading (20 min, light)."
          ]
        },
        {
          day: 6,
          label: "Saturday — Light taper session",
          estimatedMinutes: 90,
          tasks: [
            "Light mixed drill: 15 medium-difficulty questions, loosely timed. No hard questions today.",
            "Re-read the lesson-strategy strategy box one final time. Lock in the protocol: skim → stem → eliminate → answer → mark-and-move → always guess.",
            "Active reading (20 min).",
            "No essay today. No full passage block. Volume is intentionally lower."
          ]
        },
        {
          day: 7,
          label: "Sunday — Rest day",
          estimatedMinutes: 30,
          tasks: [
            "Rest completely. No drills, no essays.",
            "Read one enjoyable article (not timed, not analysed). Remind yourself that active reading has already built the skill.",
            "Prepare logistics for Week 10: confirm test date, travel plan, ID to bring, Pearson VUE centre address and arrival time."
          ]
        }
      ]
    },

    /* ====================================================================== *
     * WEEK 10 — Test-Week Taper + Logistics
     * Arc: final light review, confidence maintenance, logistics, real test.
     * Daily effort: ~0.5–1.0 h (taper only — no new material, no mocks)
     * Note: assumes test day falls in the second half of this week
     * (approximately early September 2026). If targeting Oxford/Cambridge
     * (LNAT deadline 15 October 2026), shift the entire 10-week schedule one
     * week later so Week 10 falls in mid-October.
     * ====================================================================== */
    {
      week: 10,
      theme: "Test-Week Taper + Logistics",
      goals: [
        "Maintain sharpness without adding fatigue — no new material, no full mocks.",
        "Light review: strategy boxes only (not full lessons).",
        "Confirm all logistics: Pearson VUE centre, government photo ID, arrival time.",
        "Arrive at the test rested, with the 5 protocols memorised and confident.",
        "Oxford/Cambridge note: if targeting Oxbridge, sit by 15 October 2026. Shift this week to the week before your chosen October date."
      ],
      days: [
        {
          day: 1,
          label: "Monday — Light review: Section A strategy",
          estimatedMinutes: 60,
          tasks: [
            "Re-read the lesson-strategy and lesson-pacing strategy boxes only (not the full lessons).",
            "Do 10 medium-difficulty mixed drills, loosely timed. No review pressure — just stay sharp.",
            "Active reading (15 min). No analysis required — just read."
          ]
        },
        {
          day: 2,
          label: "Tuesday — Light review: Section B protocol",
          estimatedMinutes: 60,
          tasks: [
            "Re-read the Section B timing plan: 2 min prompt read → 8 min plan → 28 min write → 4 min edit. Do not change the plan.",
            "Re-read your personal 5-item essay checklist from Friday of Week 9.",
            "Read one of the official sample prompts from the site's prompt bank. Spend 5 min mentally sketching a plan — do not write the essay.",
            "Active reading (15 min)."
          ]
        },
        {
          day: 3,
          label: "Wednesday — Final light drill + logistics check",
          estimatedMinutes: 60,
          tasks: [
            "10 easy-difficulty mixed drills, no timer. Confidence maintenance only.",
            "Logistics check: confirm centre address, journey time, and arrival plan (aim to arrive 30 min early).",
            "Confirm you have a valid government-issued photo ID (passport or national ID — driving licence accepted at many VUE centres but verify).",
            "Active reading (15 min). Rest early tonight."
          ]
        },
        {
          day: 4,
          label: "Thursday — Day before: rest and mental preparation",
          estimatedMinutes: 30,
          tasks: [
            "No drills. No essays. No timed practice.",
            "One quiet read of the scoring-bands table — remind yourself of your target score and why you trained for it.",
            "Prepare your ID and any permitted items (confirm with Pearson VUE: no notes, no phones, no smart watches permitted in the test room).",
            "Sleep well. The training is done."
          ]
        },
        {
          day: 5,
          label: "Friday — TEST DAY",
          estimatedMinutes: 180,
          tasks: [
            "Arrive at Pearson VUE centre at least 30 minutes before your scheduled start.",
            "Section A (95 min): skim each passage for argument + structure (60–90 s) → read stem → eliminate → answer → mark difficult questions and return → always guess, no blanks.",
            "Between sections: take the permitted break. Do not review answers to Section A — it is over and cannot be changed.",
            "Section B (40 min): read all 3 prompts (2 min) → choose the one with the clearest position you can take → plan (8 min: thesis + 2 args + 1 counter + conclusion note) → write (28 min) → edit (4 min).",
            "Commit your thesis by sentence 1. Rebut the counterargument. Stay within 600 words. No Five I flaws.",
            "After the test: you will receive your score within 24 hours."
          ]
        },
        {
          day: 6,
          label: "Saturday — Post-test rest",
          estimatedMinutes: 0,
          tasks: [
            "Rest completely. No review of the test.",
            "If you feel the test went poorly, do not attempt to re-sit — only one sitting per admissions cycle is allowed. Your score stands."
          ]
        },
        {
          day: 7,
          label: "Sunday — Score review and next steps",
          estimatedMinutes: 30,
          tasks: [
            "Check your score (released within 24h of sitting). Compare to the competitive bands: ≥29 Oxbridge tier; 26–28 Competitive (UCL/KCL/LSE/Durham range); 23–25 Developing; ≤22 Risk zone.",
            "Both your score and your Section B essay text will be sent to your chosen universities automatically.",
            "If targeting Oxford/Cambridge and your score warrants it: ensure your UCAS application is on track for the 15 October 2026 deadline.",
            "Well done on completing the intensive 10-week programme."
          ]
        }
      ]
    }

  );

})(typeof window !== "undefined" ? window : this);
