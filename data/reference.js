/*
 * reference.js — LNAT study-site reference data.
 *
 * Populates the `reference` sub-bucket on window.LNAT_DATA with four sections:
 *   orientation  — what the LNAT is, format, scoring, timeline, universities
 *   glossary     — ≥60 vocabulary and reasoning terms
 *   reading      — official recommended sources and how to read them
 *   faq          — common student questions with grounded answers
 *
 * Sources: lnat.ac.uk (as of June 2026). All dates, fees, and band figures
 * MUST be re-verified at lnat.ac.uk before the student registers.
 *
 * Delivery model: loads AFTER loader.js. Pushes into window.LNAT_DATA.reference.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] reference.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* Defensive bucket initialisation — safe whether loader.js pre-created these or not. */
  DATA.orientation = DATA.orientation || {};
  DATA.glossary    = DATA.glossary    || [];
  DATA.reading     = DATA.reading     || {};
  DATA.faq         = DATA.faq         || [];

  /* Also expose under the canonical `reference` bucket for SCHEMA §1 alignment. */
  DATA.reference = DATA.reference || {};

  /* ======================================================================== *
   * 1. ORIENTATION                                                            *
   * ======================================================================== */
  DATA.orientation = {

    _sourceNote:
      "All facts per lnat.ac.uk, as of June 2026. " +
      "Dates, fees, and score bands must be re-verified at lnat.ac.uk before registering.",

    overview:
      "The LNAT (Law National Admissions Test) is a standardised admissions test " +
      "required by nine UK universities for entry to undergraduate law programmes. " +
      "It does not test legal knowledge — it assesses verbal reasoning, critical " +
      "thinking, and written argument. The test is delivered at Pearson VUE secure " +
      "test centres (approximately 150 in the UK; 500+ worldwide); there is no " +
      "online or remote-proctoring option. Candidates sit once per admissions cycle.",

    format: {
      sectionA: {
        name: "Section A — Multiple Choice",
        passages: 12,
        questions: 42,
        optionsPerQuestion: 4,
        timeMinutes: 95,
        negativeMarking: false,
        notes:
          "12 argumentative/analytical passages, each followed by 3 or 4 questions " +
          "(varying). All questions have exactly 4 answer options. There is no " +
          "negative marking — always attempt every question. The legacy online " +
          "simulator on lnat.ac.uk still shows 5-option questions (historical format); " +
          "the actual current test uses 4 options."
      },
      sectionB: {
        name: "Section B — Essay",
        promptsOffered: 3,
        promptsChosen: 1,
        timeMinutes: 40,
        recommendedWords: "500–600",
        absoluteMaxWords: 750,
        scoring:
          "Not centrally scored. The essay text is sent verbatim to the universities " +
          "chosen by the candidate. Each university assesses it on its own criteria."
      },
      total: {
        durationMinutes: 135,
        durationFormatted: "2 hours 15 minutes",
        sectionsTiming: "separately timed — the 95-minute Section A clock stops before Section B begins",
        delivery: "Computer-based at a Pearson VUE secure centre. No paper option."
      }
    },

    scoring: {
      sectionARange: "0–42",
      method:
        "One mark per correct answer; no negative marking. Section A score (0–42) " +
        "is the official 'LNAT score'. Section B essay is not included in this score.",
      essayHandling:
        "Both the Section A score and the full essay text are released to the " +
        "candidate's chosen universities within 24 hours of sitting. Universities " +
        "assess the essay independently; no central essay score exists.",
      nationalMeans: {
        "2023/24": 23.0,
        "2024/25": 21.0,
        "2025/26": 21.8,
        longRunSummary: "Long-run national mean approximately 22–24 out of 42."
      },
      competitiveBands: [
        {
          label: "Risk zone",
          range: "≤22",
          context:
            "At or near the national mean. Likely to disadvantage applications to all " +
            "LNAT universities; prioritise score improvement."
        },
        {
          label: "Developing",
          range: "23–25",
          context:
            "Around the national mean. Competitive for Glasgow and SOAS; marginal " +
            "for Bristol, Durham, LSE."
        },
        {
          label: "Competitive",
          range: "26–28",
          context:
            "Above average. Competitive for Bristol (~25), Durham (~26), LSE (~26.4), " +
            "UCL (~27.4). Aim higher for KCL (~29.9) and Oxbridge."
        },
        {
          label: "Oxbridge tier",
          range: "≥29",
          context:
            "Oxford offer-holder mean ~30.96; Cambridge ~30.1 (2023/24 data). " +
            "Scores in this range are expected for serious Oxbridge applicants; " +
            "the essay carries additional weight at both institutions."
        }
      ],
      bandNote:
        "Score bands are anchored to 2023/24 and 2024/25 published data. " +
        "Means shift year to year. No single formula converts a score to an offer — " +
        "weighting of MCQ versus essay is per-university and not publicly disclosed. " +
        "Re-verify against current lnat.ac.uk statistics before registering."
    },

    timeline2026: {
      _note:
        "2026/27 admissions cycle deadlines, per lnat.ac.uk. Re-verify before registering.",
      milestones: [
        {
          date: "1 August 2026",
          event: "Registration opens (LNAT and UCAS)"
        },
        {
          date: "1 September 2026",
          event: "LNAT testing begins"
        },
        {
          date: "15 October 2026",
          event: "Oxford and Cambridge — must register, book, and sit by this date"
        },
        {
          date: "31 December 2026",
          event: "KCL, LSE, UCL — must sit by this date"
        },
        {
          date: "13 January 2027",
          event: "Oxford Foundation Year in Law — deadline"
        },
        {
          date: "14 January 2027",
          event:
            "UCAS submission deadline (most applicants, 18:00 UK time). " +
            "Also the deadline for Bristol and Durham."
        },
        {
          date: "20 January 2027",
          event: "All other LNAT universities (exc. Bristol/Durham) — register and book deadline"
        },
        {
          date: "25 January 2027",
          event: "All other LNAT universities — must sit by this date"
        },
        {
          date: "25 July 2027 / 31 July 2027",
          event: "Late/international booking deadline / late sitting deadline"
        }
      ],
      studentNote:
        "For a student aiming at Oxford/Cambridge with a September 2026 start, the " +
        "hard ceiling is 15 October 2026. Target an early September sitting to leave " +
        "time for the UCAS personal statement after seeing the score."
    },

    universities: {
      _sourceNote: "Per lnat.ac.uk/what-is-lnat/do-i-need-to-sit-the-test/, as of June 2026.",
      list: [
        {
          name: "University of Bristol",
          usage:
            "Uses a weighted formula: GCSE 20% + A-level 40% + LNAT 40% " +
            "(within LNAT: MCQ 60% / essay 40%). Both sections matter.",
          acceptedMeanMCQ: "~25"
        },
        {
          name: "University of Cambridge",
          usage:
            "Both sections assessed; essay reportedly marked by tutors. " +
            "Very high MCQ expected for shortlist consideration.",
          acceptedMeanMCQ: "~30.1"
        },
        {
          name: "Durham University",
          usage:
            "Uses LNAT to distinguish borderline candidates; both sections considered.",
          acceptedMeanMCQ: "~26"
        },
        {
          name: "University of Glasgow",
          usage:
            "Essay supplements personal statement. Lower threshold than Oxbridge; " +
            "MCQ around 23 mean for accepted candidates.",
          acceptedMeanMCQ: "~23"
        },
        {
          name: "King's College London (KCL)",
          usage:
            "Section A (MCQ) used for most standard applicants; essay not formally " +
            "scored centrally. One of the highest MCQ thresholds among LNAT universities.",
          acceptedMeanMCQ: "~29.9"
        },
        {
          name: "London School of Economics (LSE)",
          usage:
            "Section A for most applicants; essay considered only for non-standard " +
            "qualifications. MCQ weighted heavily in shortlisting.",
          acceptedMeanMCQ: "~26.4"
        },
        {
          name: "University of Oxford",
          usage:
            "Both sections weighted heavily. High MCQ required for interview shortlist; " +
            "essay quality can be determinative for borderline MCQ scores.",
          acceptedMeanMCQ: "~30.96"
        },
        {
          name: "SOAS University of London",
          usage:
            "Essay assessed where MCQ < 24; a strong MCQ can lower the entry " +
            "requirement. Lower average threshold than most LNAT universities.",
          acceptedMeanMCQ: "~21–23 (threshold-dependent)"
        },
        {
          name: "University College London (UCL)",
          usage:
            "Places high emphasis on the essay, which is the only exam-condition " +
            "writing sample in the UCL application. MCQ also considered.",
          acceptedMeanMCQ: "~27.4"
        }
      ]
    },

    testDayLogistics: {
      centres:
        "Pearson VUE secure test centres only. Approximately 150 centres in the UK; " +
        "500+ worldwide. Find a centre at home.pearsonvue.com/lnat.",
      fees: {
        ukAndEU: "£75",
        outsideEU: "£120",
        bursary:
          "Full fee waiver for eligible UK/EU state-benefit recipients. Must apply " +
          "before booking. See lnat.ac.uk for the bursary application process.",
        _note: "Fees are 2025/26 published rates. 2026/27 rates not yet separately published as of June 2026. Re-verify at lnat.ac.uk before registering."
      },
      id: "Government-issued photo ID only (e.g. passport, national identity card). " +
          "Full list of accepted documents on lnat.ac.uk.",
      rules: [
        "One sitting per admissions cycle. Duplicate bookings are voided.",
        "Results are non-transferable to the next admissions cycle.",
        "Free rescheduling permitted if done ≥48 hours before the booked slot.",
        "Access arrangements (e.g. extra time) must be applied for in advance by " +
          "telephone before booking. See lnat.ac.uk/faqs/ for the process."
      ]
    }
  };

  /* Mirror into DATA.reference for SCHEMA §1 bucket consumers. */
  DATA.reference.orientation = DATA.orientation;


  /* ======================================================================== *
   * 2. GLOSSARY — ≥60 entries                                                *
   * Three categories interleaved:                                            *
   *   (A) LNAT reasoning/logic terms                                         *
   *   (B) Advanced contextual vocabulary likely in LNAT passages             *
   *   (C) Rhetorical/register/tone vocabulary                                *
   * ======================================================================== */
  var glossaryEntries = [

    /* --- (A) Reasoning & Logic terms --- */
    {
      term: "Argument",
      definition:
        "A set of statements in which one or more premises are offered as reasons " +
        "to accept a conclusion. Not the same as a disagreement — in logic, any " +
        "structured attempt to justify a claim is an argument."
    },
    {
      term: "Premise",
      definition:
        "A stated reason or piece of evidence offered in support of a conclusion. " +
        "Every argument has at least one explicit or implicit premise."
    },
    {
      term: "Conclusion",
      definition:
        "The claim an argument is trying to establish. Indicated by signal words " +
        "such as 'therefore', 'hence', 'so', 'it follows that', 'thus'."
    },
    {
      term: "Assumption",
      definition:
        "An unstated premise that the argument requires in order to reach its " +
        "conclusion. Use the negation test: if denying the assumption destroys " +
        "the argument, it is a necessary assumption."
    },
    {
      term: "Inference",
      definition:
        "A conclusion drawn by the reader from what the text states or implies — " +
        "a logical step beyond the explicit content. Distinct from an assumption " +
        "(which is what the author takes for granted)."
    },
    {
      term: "Deduction",
      definition:
        "Reasoning in which the conclusion follows necessarily from the premises; " +
        "if the premises are true, the conclusion cannot be false. Contrast with induction."
    },
    {
      term: "Induction",
      definition:
        "Reasoning that moves from specific observations to a general conclusion. " +
        "The conclusion is probable, not guaranteed, even if all premises are true."
    },
    {
      term: "Fallacy",
      definition:
        "An error in reasoning that renders an argument invalid or unsound. " +
        "Common examples: ad hominem (attacking the person), straw man (misrepresenting " +
        "the opposing view), false dichotomy (presenting only two options when more exist)."
    },
    {
      term: "Ad hominem",
      definition:
        "A fallacy that attacks the person making an argument rather than the argument " +
        "itself. Irrelevant to the truth of the claim being made."
    },
    {
      term: "Straw man",
      definition:
        "A fallacy in which one misrepresents an opponent's position (usually " +
        "weakening it) in order to refute it more easily."
    },
    {
      term: "False dichotomy",
      definition:
        "A fallacy that presents exactly two options as exhaustive when other " +
        "possibilities exist. Also called 'false dilemma' or 'either/or fallacy'."
    },
    {
      term: "Hasty generalisation",
      definition:
        "Drawing a broad conclusion from too small or unrepresentative a sample " +
        "of cases."
    },
    {
      term: "Circular reasoning",
      definition:
        "An argument in which the conclusion is used (perhaps in disguised form) " +
        "as one of the premises. Also called 'begging the question'."
    },
    {
      term: "Non sequitur",
      definition:
        "A conclusion that does not logically follow from its premises. Literally " +
        "'it does not follow'."
    },
    {
      term: "Slippery slope",
      definition:
        "The fallacious claim that one event will inevitably lead to a chain of " +
        "negative consequences, without evidence for the causal chain."
    },
    {
      term: "Counter-argument",
      definition:
        "An argument that opposes or challenges the main position. Strong essays " +
        "and strong passages acknowledge and respond to the strongest counter-argument."
    },
    {
      term: "Rebuttal",
      definition:
        "A response that identifies the flaw in, or limits the scope of, a " +
        "counter-argument. A rebuttal should engage with the counter-argument directly."
    },
    {
      term: "Concession",
      definition:
        "Acknowledging a valid element of the opposing view before restating " +
        "one's own position. A concession need not undermine the main argument."
    },
    {
      term: "Scope (of a claim)",
      definition:
        "The range of cases or situations to which a claim applies. Noting whether " +
        "a claim is universal ('all'), qualified ('most', 'generally'), or narrow " +
        "('in this case') is critical for LNAT questions."
    },
    {
      term: "Validity",
      definition:
        "A property of the argument's structure: an argument is valid if the " +
        "conclusion must be true whenever all premises are true. Validity is " +
        "distinct from soundness (which also requires true premises)."
    },
    {
      term: "Soundness",
      definition:
        "An argument is sound if it is both valid (correct structure) and has " +
        "all true premises. Soundness guarantees a true conclusion."
    },
    {
      term: "Implication",
      definition:
        "What a statement logically entails or suggests; the content that follows " +
        "necessarily or strongly from what is said, even if not stated explicitly."
    },
    {
      term: "Main idea / primary purpose",
      definition:
        "The central claim the passage is making and the reason it was written. " +
        "Distinguish from supporting details, which illustrate but are not the point."
    },
    {
      term: "Author's standpoint",
      definition:
        "The position or attitude the author holds toward the subject — not " +
        "necessarily the same as views the author reports or describes in the passage."
    },
    {
      term: "Logical structure",
      definition:
        "The skeleton of an argument: which claims are premises, which is the " +
        "conclusion, and how examples, concessions, or analogies support the flow."
    },

    /* --- (B) Advanced contextual vocabulary --- */
    {
      term: "Cogent",
      definition:
        "Clear, logical, and convincing; said of an argument or explanation whose " +
        "reasoning is both valid and persuasive."
    },
    {
      term: "Specious",
      definition:
        "Superficially plausible but actually flawed. A specious argument appears " +
        "sound but conceals a logical error."
    },
    {
      term: "Tendentious",
      definition:
        "Written with a strong, often hidden, bias toward a particular point of " +
        "view; promoting a cause rather than offering balanced analysis."
    },
    {
      term: "Equivocal",
      definition:
        "Open to more than one interpretation; deliberately ambiguous. An equivocal " +
        "statement can be used to mislead without stating a falsehood."
    },
    {
      term: "Unequivocal",
      definition:
        "Leaving no doubt; expressed in a way that permits only one interpretation. " +
        "The opposite of equivocal."
    },
    {
      term: "Contingent",
      definition:
        "Dependent on circumstances; not necessarily true in all cases. A contingent " +
        "claim could be otherwise — contrast with a necessary truth."
    },
    {
      term: "Putative",
      definition:
        "Commonly regarded or reputed as such, even if not definitively established. " +
        "Often signals that the author is sceptical of the label."
    },
    {
      term: "Ostensible",
      definition:
        "Appearing to be true or real on the surface, but possibly concealing " +
        "a different reality. Similar to 'putative' but stresses outward appearance."
    },
    {
      term: "Intractable",
      definition:
        "Difficult or impossible to manage or resolve. Used of problems that resist " +
        "straightforward solutions."
    },
    {
      term: "Inimical",
      definition:
        "Harmful or adverse; unfriendly or hostile. Often used of conditions that " +
        "undermine a principle or institution."
    },
    {
      term: "Reciprocal",
      definition:
        "Mutual; given or felt by each party toward the other. A reciprocal " +
        "arrangement implies obligations on both sides."
    },
    {
      term: "Incontrovertible",
      definition:
        "Not able to be denied or disputed; indisputable. Claims described this " +
        "way should be tested — authors sometimes overstate certainty."
    },
    {
      term: "Salient",
      definition:
        "Most noticeable or important; standing out. A salient point is one the " +
        "reader should not overlook."
    },
    {
      term: "Caveat",
      definition:
        "A warning or qualification attached to a claim, noting conditions under " +
        "which it may not hold."
    },
    {
      term: "Caveat emptor",
      definition:
        "Latin: 'let the buyer beware'. Signals that the risk of a transaction " +
        "or claim rests with the receiver, not the provider."
    },
    {
      term: "Precedent",
      definition:
        "An earlier decision or action used as a guide or justification for " +
        "subsequent cases. Central to legal reasoning; frequently appears in LNAT passages."
    },
    {
      term: "Jurisprudence",
      definition:
        "The theory and philosophy of law; the academic study of legal systems " +
        "and their foundations."
    },
    {
      term: "Prerogative",
      definition:
        "A right or privilege belonging exclusively to a particular person, " +
        "institution, or class."
    },
    {
      term: "Hegemony",
      definition:
        "Leadership or dominance of one country, group, or idea over others, " +
        "often without direct force — typically maintained through culture, " +
        "economics, or ideology."
    },
    {
      term: "Efficacy",
      definition:
        "The ability to produce a desired or intended result. Distinct from " +
        "'efficiency', which concerns doing something with minimal waste."
    },
    {
      term: "Expedient",
      definition:
        "Convenient and practical, though sometimes at the expense of principle. " +
        "An expedient decision is the pragmatically useful one."
    },
    {
      term: "Inimitable",
      definition:
        "So distinctive as to be impossible to copy or imitate; unique."
    },
    {
      term: "Paradigm",
      definition:
        "A typical example or pattern of something; in philosophy of science, " +
        "the set of dominant assumptions and methods in a field at a given time."
    },
    {
      term: "Paradox",
      definition:
        "A seemingly contradictory statement that may nonetheless be true; or a " +
        "situation that appears logically impossible yet occurs."
    },
    {
      term: "Axiom",
      definition:
        "A statement taken as self-evidently true and used as a starting point " +
        "for further reasoning. In mathematics, axioms are assumed without proof."
    },
    {
      term: "Tenet",
      definition:
        "A principle or belief held by a person, organisation, or school of " +
        "thought; a core doctrinal position."
    },
    {
      term: "Pragmatic",
      definition:
        "Dealing with things sensibly and practically, based on results rather " +
        "than theory or ideology."
    },
    {
      term: "Mandate",
      definition:
        "Official authority or permission to carry out a policy or course of " +
        "action; also, the period during which a government or official holds power."
    },
    {
      term: "Disenfranchise",
      definition:
        "To deprive someone of the right to vote or of a right or privilege they " +
        "previously held."
    },
    {
      term: "Partisan",
      definition:
        "Strongly committed to a particular party, cause, or person; biased in " +
        "favour of one side in a controversy."
    },
    {
      term: "Entrenched",
      definition:
        "Firmly established and difficult to change; describes attitudes, " +
        "practices, or groups that resist reform."
    },
    {
      term: "Exacerbate",
      definition:
        "To make a problem, bad situation, or negative feeling worse. Often " +
        "confused with 'exasperate' (to irritate intensely)."
    },
    {
      term: "Ameliorate",
      definition:
        "To make something bad or unsatisfactory better; to improve. The " +
        "opposite of exacerbate."
    },
    {
      term: "Culpability",
      definition:
        "Responsibility for a fault or wrong; blameworthiness. Relevant to " +
        "passages on criminal law, ethics, and accountability."
    },
    {
      term: "Proportionality",
      definition:
        "The quality of being appropriate and in balance relative to the " +
        "situation. In law, a principle requiring that penalties or state " +
        "interference match the severity of the issue."
    },
    {
      term: "Coercion",
      definition:
        "The practice of persuading or forcing someone to do something by using " +
        "threats or force. Distinct from mere pressure or persuasion."
    },
    {
      term: "Autonomy",
      definition:
        "The right or capacity of individuals or groups to govern themselves or " +
        "make their own decisions without external control."
    },
    {
      term: "Paternalism",
      definition:
        "Restricting the freedom or choices of individuals for their own good, " +
        "as a parent might do with a child. A recurring tension in liberal philosophy."
    },
    {
      term: "Subjectivity",
      definition:
        "The quality of being based on or influenced by personal feelings, " +
        "tastes, or opinions rather than external facts."
    },
    {
      term: "Objectivity",
      definition:
        "The quality of being uninfluenced by personal feelings or opinions in " +
        "judging facts; impartiality."
    },
    {
      term: "Nuance",
      definition:
        "A subtle difference in meaning, expression, or tone that matters for " +
        "precise understanding. LNAT passages often reward attention to nuance."
    },

    /* --- (C) Rhetorical / register / tone vocabulary --- */
    {
      term: "Rhetoric",
      definition:
        "The art of effective and persuasive speaking or writing. In LNAT " +
        "contexts, 'rhetoric' often signals techniques used to persuade beyond " +
        "strict logical argument."
    },
    {
      term: "Hyperbole",
      definition:
        "Deliberate exaggeration for emphasis or effect, not meant to be taken " +
        "literally. Signals that the author's tone is heightened."
    },
    {
      term: "Irony",
      definition:
        "Using language that means the opposite of what is literally stated, or " +
        "a situation that is the reverse of what is expected."
    },
    {
      term: "Sarcasm",
      definition:
        "A sharp, cutting form of irony directed at a person or idea to mock " +
        "or ridicule them. Sarcasm is a subset of irony, with a critical edge."
    },
    {
      term: "Polemic",
      definition:
        "A strong, forceful, often aggressive written or spoken attack on an " +
        "opposing idea or institution."
    },
    {
      term: "Dispassionate",
      definition:
        "Not influenced by strong emotion; rational and impartial. Describes a " +
        "restrained, analytical tone."
    },
    {
      term: "Sceptical",
      definition:
        "Inclined to question or doubt accepted opinions, claims, or findings. " +
        "A sceptical author signals reservations without necessarily rejecting."
    },
    {
      term: "Conciliatory",
      definition:
        "Intended to placate or reconcile; tending to reduce conflict. A " +
        "conciliatory tone acknowledges opposing views generously."
    },
    {
      term: "Equanimity",
      definition:
        "Mental calmness and composure, especially in difficult situations; " +
        "a tone of balanced, unruffled perspective."
    },
    {
      term: "Pejorative",
      definition:
        "Expressing contempt or disapproval; a word or phrase with a belittling " +
        "or disparaging connotation."
    },
    {
      term: "Euphemism",
      definition:
        "A mild or indirect word or expression substituted for one considered " +
        "blunt, harsh, or offensive. Used to soften tone."
    },
    {
      term: "Register",
      definition:
        "The level of formality or style of language used in a particular " +
        "context (formal, informal, technical, colloquial). LNAT passages are " +
        "uniformly in formal or academic register."
    }
  ];

  /* ======================================================================== *
   * 2b. GLOSSARY EXPANSION — ~85 additional entries                          *
   * Covers: advanced/contextual vocab, argument-flaw/logic terms,            *
   * and tone/register words not already in the core list above.              *
   * ======================================================================== */
  var glossaryExpansion = [

    /* --- Argument-flaw / logic terms --- */
    {
      term: "Post hoc ergo propter hoc",
      definition:
        "Latin: 'after this, therefore because of this'. A fallacy assuming that " +
        "because B follows A, A caused B. Temporal sequence is not causation."
    },
    {
      term: "Correlation vs causation",
      definition:
        "Two variables may co-vary (correlate) without either causing the other; " +
        "a third factor may explain both. The fallacy confuses statistical association " +
        "with a causal mechanism."
    },
    {
      term: "False analogy",
      definition:
        "Drawing a conclusion by comparing two things that are not sufficiently " +
        "similar in the relevant respects. The argument fails because the analogy breaks down."
    },
    {
      term: "Red herring",
      definition:
        "Introducing an irrelevant point or piece of information to distract from " +
        "the issue under discussion. The red herring is logically unconnected to the conclusion."
    },
    {
      term: "Equivocation",
      definition:
        "Using a key word with two different meanings in the same argument, so that " +
        "the conclusion appears to follow but only because of the shift in meaning."
    },
    {
      term: "Begging the question",
      definition:
        "Assuming the conclusion in the premises — another name for circular reasoning. " +
        "Often misused colloquially to mean 'raises the question'; in logic it means " +
        "the argument is viciously circular."
    },
    {
      term: "Necessary condition",
      definition:
        "A condition that must be present for the conclusion to hold; its absence " +
        "guarantees the conclusion is false. If X is necessary for Y: no X → no Y. " +
        "Distinct from a sufficient condition."
    },
    {
      term: "Sufficient condition",
      definition:
        "A condition whose presence alone guarantees the conclusion. If X is sufficient " +
        "for Y: X → Y. X need not be the only way Y can occur."
    },
    {
      term: "Appeal to authority",
      definition:
        "Citing an expert or authority figure as proof of a claim, without examining " +
        "the strength of the underlying evidence. Legitimate when the authority is " +
        "relevant and qualified; fallacious when irrelevant or used to avoid argument."
    },
    {
      term: "Appeal to popularity",
      definition:
        "Arguing that something is true or correct because many people believe it. " +
        "Also called argumentum ad populum. Widespread belief does not establish truth."
    },
    {
      term: "Tu quoque",
      definition:
        "A fallacy ('you also') that deflects criticism by pointing out the critic's " +
        "own inconsistency. The critic's behaviour is irrelevant to whether the " +
        "original argument is sound."
    },
    {
      term: "Suppressed evidence",
      definition:
        "Omitting relevant information that would weaken or contradict the conclusion. " +
        "A fallacy of incomplete evidence, even if all stated facts are true."
    },
    {
      term: "Burden of proof",
      definition:
        "The obligation on a party making a claim to provide evidence for it. In " +
        "logic, whoever makes the positive claim bears the burden; absence of evidence " +
        "is not evidence of absence."
    },
    {
      term: "False equivalence",
      definition:
        "Treating two things as comparable in relevance or importance when they are " +
        "significantly different. Often used in media by presenting fringe and " +
        "mainstream positions as equally valid."
    },
    {
      term: "Modus ponens",
      definition:
        "A valid argument form: if P then Q; P; therefore Q. The fundamental " +
        "deductive inference rule — affirming the antecedent."
    },
    {
      term: "Modus tollens",
      definition:
        "A valid argument form: if P then Q; not Q; therefore not P. Denying the " +
        "consequent. Logically equivalent to modus ponens."
    },
    {
      term: "Reductio ad absurdum",
      definition:
        "Refuting an argument by showing that accepting its premises leads to an " +
        "absurd or contradictory conclusion. A legitimate and powerful logical technique."
    },
    {
      term: "Dichotomy",
      definition:
        "A division into two mutually exclusive and jointly exhaustive categories. " +
        "A genuine dichotomy (e.g. true/false) is not a fallacy; a false dichotomy " +
        "artificially limits options."
    },

    /* --- Advanced/contextual vocabulary --- */
    {
      term: "Tacit",
      definition:
        "Understood or implied without being stated explicitly. A tacit assumption " +
        "is one the author relies on but never articulates."
    },
    {
      term: "Ubiquitous",
      definition:
        "Present, appearing, or found everywhere. Often used to describe phenomena " +
        "or technologies so widespread they are taken for granted."
    },
    {
      term: "Pernicious",
      definition:
        "Having a harmful, often subtle, and far-reaching effect. Stronger than " +
        "'damaging' — implies insidious, hard-to-detect harm."
    },
    {
      term: "Capricious",
      definition:
        "Given to sudden, unpredictable changes of mood or behaviour; governed by " +
        "whim rather than reason or principle."
    },
    {
      term: "Dogmatic",
      definition:
        "Inclined to lay down principles as incontrovertibly true, without openness " +
        "to evidence or argument. A dogmatic position is held by assertion, not reasoning."
    },
    {
      term: "Empirical",
      definition:
        "Based on observation or experience rather than theory or logic alone. " +
        "An empirical claim is one that can in principle be tested or observed."
    },
    {
      term: "Normative",
      definition:
        "Relating to or establishing a standard or norm; concerned with how things " +
        "ought to be, rather than how they are. Contrast with descriptive."
    },
    {
      term: "Descriptive",
      definition:
        "Describing how things actually are, without implying how they should be. " +
        "Contrast with normative."
    },
    {
      term: "Reductive",
      definition:
        "Tending to present a complex problem or issue in oversimplified terms; " +
        "diminishing complexity by reducing it to a single factor."
    },
    {
      term: "Salutary",
      definition:
        "Producing a good or beneficial effect, often as a result of something " +
        "unpleasant. A salutary lesson is an instructive one learned from hardship."
    },
    {
      term: "Tenuous",
      definition:
        "Thin, weak, or lacking substance; said of a connection or argument that " +
        "barely holds together. Tenuous reasoning is logically fragile."
    },
    {
      term: "Vacuous",
      definition:
        "Having no meaning or substance; empty of thought or genuine content. " +
        "A vacuous statement conveys nothing informative."
    },
    {
      term: "Spurious",
      definition:
        "False or fake, though appearing genuine; not what it claims to be. A " +
        "spurious argument resembles a legitimate one but is fundamentally flawed."
    },
    {
      term: "Contentious",
      definition:
        "Causing or likely to cause disagreement; controversial. A contentious " +
        "claim is one that reasonable people dispute."
    },
    {
      term: "Unsubstantiated",
      definition:
        "Not supported by evidence; claimed without proof. An unsubstantiated " +
        "assertion rests only on the author's say-so."
    },
    {
      term: "Pervasive",
      definition:
        "Spreading widely throughout something; present at every level. " +
        "Pervasive problems are difficult to isolate because they affect everything."
    },
    {
      term: "Dichotomous",
      definition:
        "Divided into two sharply contrasting groups or categories. A dichotomous " +
        "framing presents an issue as having only two sides."
    },
    {
      term: "Categorical",
      definition:
        "Unqualified and without exceptions; absolute. A categorical claim applies " +
        "universally, without the qualification of 'most' or 'in some cases'."
    },
    {
      term: "Inherent",
      definition:
        "Existing as a permanent, essential, or characteristic attribute. If a flaw " +
        "is inherent, it cannot be removed without changing the thing itself."
    },
    {
      term: "Extrinsic",
      definition:
        "Coming from outside; not an essential or inherent part of something. " +
        "Extrinsic factors are external causes rather than internal features."
    },
    {
      term: "Intrinsic",
      definition:
        "Belonging naturally; essential. Intrinsic value is worth that something " +
        "has in and of itself, not because of its consequences."
    },
    {
      term: "Nominal",
      definition:
        "Existing in name only; not real or substantial. Also used technically to " +
        "mean 'of or relating to a name or names', or describing very small amounts."
    },
    {
      term: "Substantive",
      definition:
        "Having real substance; meaningful and significant in its own right. A " +
        "substantive objection addresses the core of the argument, not its periphery."
    },
    {
      term: "Inalienable",
      definition:
        "Unable to be taken away or transferred. Inalienable rights are rights so " +
        "fundamental they cannot be relinquished voluntarily or removed by authority."
    },
    {
      term: "Sovereignty",
      definition:
        "Supreme power or authority, especially that of a state to govern itself " +
        "without external interference. Central to arguments about law, governance, " +
        "and international relations."
    },
    {
      term: "Accountability",
      definition:
        "The obligation to accept responsibility and justify one's actions to an " +
        "authority or the public. A key principle in governance and legal argument."
    },
    {
      term: "Discretion",
      definition:
        "The freedom to decide what should be done in a particular situation; the " +
        "quality of being discreet. Judicial discretion is the latitude judges have " +
        "to interpret and apply the law."
    },
    {
      term: "Deterrence",
      definition:
        "The use of punishment or the threat of consequences to discourage a course " +
        "of action. A standard justification for criminal penalties."
    },
    {
      term: "Consensus",
      definition:
        "General agreement among a group of people. Scientific consensus refers to " +
        "the collective judgement of most experts in a field."
    },
    {
      term: "Dissent",
      definition:
        "The holding or expression of opinions at variance with those commonly or " +
        "officially held. In law, a dissenting opinion is a judge's disagreement with " +
        "the majority ruling."
    },
    {
      term: "Rectify",
      definition:
        "To put right; to correct an error or injustice. Passages on legal or " +
        "social reform often argue for or against measures to rectify past wrongs."
    },
    {
      term: "Sanction",
      definition:
        "Both a penalty for disobeying a law and the official permission or " +
        "approval for an action. The dual meaning is a frequent source of equivocation."
    },
    {
      term: "Moratorium",
      definition:
        "A temporary suspension of an activity or law; a period of delay authorised " +
        "by a legal process or agreement."
    },
    {
      term: "Acquiescence",
      definition:
        "Reluctant acceptance of or compliance with something without protest. " +
        "Acquiescence differs from genuine consent, as it involves no active agreement."
    },
    {
      term: "Plurality",
      definition:
        "A large number of something; or, in voting contexts, having more votes than " +
        "any other candidate but not necessarily a majority (more than 50%)."
    },
    {
      term: "Pretext",
      definition:
        "A reason given to justify an action that is not the real reason. Identifying " +
        "a pretext is a key critical-reading skill: look for stated vs actual motives."
    },
    {
      term: "Indeterminate",
      definition:
        "Not settled, known, or established; unable to be resolved precisely. An " +
        "indeterminate outcome is one whose result cannot be conclusively predicted."
    },
    {
      term: "Extrapolate",
      definition:
        "To extend a known trend or data set beyond its established range, making " +
        "an estimate of something unknown. Extrapolation is inductive and may be wrong."
    },
    {
      term: "Interpolate",
      definition:
        "To insert something into a text or sequence; or to estimate a value between " +
        "two known points. Distinct from extrapolation (which goes beyond the range)."
    },
    {
      term: "Mitigate",
      definition:
        "To make less severe, serious, or painful; to lessen the impact of. In law, " +
        "mitigating factors reduce the culpability or sentence of an offender."
    },
    {
      term: "Aggravate",
      definition:
        "To make worse or more serious. Aggravating factors in law are circumstances " +
        "that increase the severity of a crime or the appropriate penalty."
    },
    {
      term: "Egalitarian",
      definition:
        "Believing in or based on the principle that all people are equal and deserve " +
        "equal rights and opportunities."
    },
    {
      term: "Utilitarian",
      definition:
        "Based on the doctrine that the morally correct action is the one that " +
        "produces the greatest good for the greatest number of people."
    },
    {
      term: "Deontological",
      definition:
        "Relating to the view that the morality of an action is determined by whether " +
        "it follows a set of rules or duties, regardless of consequences."
    },
    {
      term: "Pragmatism",
      definition:
        "A philosophical approach that evaluates theories or beliefs by their " +
        "practical consequences and real-world effectiveness rather than abstract merit."
    },
    {
      term: "Ambiguous",
      definition:
        "Open to more than one interpretation; unclear in meaning. An ambiguous " +
        "claim can be read in multiple ways, which may be deliberate or accidental."
    },
    {
      term: "Unambiguous",
      definition:
        "Having only one possible meaning or interpretation; perfectly clear. The " +
        "opposite of ambiguous."
    },
    {
      term: "Corollary",
      definition:
        "A direct and natural consequence or result of something; a proposition that " +
        "follows with little proof from a proved one. If X is true, Y is a corollary."
    },
    {
      term: "Conjecture",
      definition:
        "An opinion or conclusion formed on the basis of incomplete information; " +
        "a well-reasoned guess. Distinguished from a demonstrated claim."
    },
    {
      term: "Precedent-setting",
      definition:
        "Establishing a precedent for future cases or decisions. A precedent-setting " +
        "ruling changes how similar cases are decided going forward."
    },
    {
      term: "Adjudicate",
      definition:
        "To make a formal judgement or decision about a disputed matter. The role of " +
        "a judge or arbitrator in resolving legal or factual disputes."
    },
    {
      term: "Caveat (legal)",
      definition:
        "In legal contexts, a formal notice to a court or official body requiring " +
        "suspension of proceedings until a party is heard. Broader usage: any warning."
    },
    {
      term: "Inference to the best explanation",
      definition:
        "Choosing the hypothesis that would, if true, best explain the available " +
        "evidence. Also called abduction or abductive reasoning."
    },

    /* --- Tone / register vocabulary --- */
    {
      term: "Sardonic",
      definition:
        "Grimly mocking or cynical; expressing disdain through grim humour. More " +
        "bitter and contemptuous than ironic, and less playful than sarcastic."
    },
    {
      term: "Wry",
      definition:
        "Using dry, often understated humour to express a slightly ironic or cynical " +
        "point. A wry comment acknowledges the absurdity of a situation without anger."
    },
    {
      term: "Indignant",
      definition:
        "Feeling or showing anger or annoyance at what is perceived as unfair treatment " +
        "or injustice. In essay marking, an indignant tone (one of the 'Five I's') " +
        "means attacking the question rather than answering it."
    },
    {
      term: "Measured",
      definition:
        "Carefully considered and controlled; neither extreme nor hasty. A measured " +
        "tone conveys balanced judgement and avoids overstatement."
    },
    {
      term: "Polemical",
      definition:
        "Of, relating to, or involving polemics; strongly attacking or defending a " +
        "point of view. A polemical piece sacrifices balance for force of argument."
    },
    {
      term: "Sanguine",
      definition:
        "Optimistic, especially in a difficult situation. A sanguine author expects " +
        "things to turn out well, sometimes to the point of underweighting problems."
    },
    {
      term: "Derisive",
      definition:
        "Expressing contempt or ridicule; mocking. A derisive tone treats the " +
        "opposing view as too foolish to deserve serious engagement."
    },
    {
      term: "Acerbic",
      definition:
        "Sharp and forthright; typically used of comments that are harshly critical " +
        "and somewhat bitter in tone."
    },
    {
      term: "Trenchant",
      definition:
        "Vigorous and incisive in analysis; penetrating to the point of being " +
        "cutting. A trenchant critique gets directly to the weakness of a position."
    },
    {
      term: "Judicious",
      definition:
        "Having, showing, or done with good judgement; sensible and careful. A " +
        "judicious choice is one informed by sound reasoning rather than impulse."
    },
    {
      term: "Candid",
      definition:
        "Truthful and straightforward; frank even if the truth is unwelcome. A " +
        "candid assessment does not soften conclusions for the sake of politeness."
    },
    {
      term: "Didactic",
      definition:
        "Intended to teach, particularly in moral or philosophical matters. A " +
        "didactic passage has an instructional purpose beyond mere entertainment."
    },
    {
      term: "Hortatory",
      definition:
        "Tending or aiming to exhort; urging or calling for action. A hortatory " +
        "passage tries to persuade the reader to do something."
    },
    {
      term: "Deferential",
      definition:
        "Showing respectful submission to another's judgement or authority. A " +
        "deferential author is cautious about challenging established views."
    },
    {
      term: "Temperate",
      definition:
        "Showing moderation or self-restraint; not extreme or passionate in " +
        "expression. A temperate argument avoids inflammatory language."
    },
    {
      term: "Terse",
      definition:
        "Sparing of words; brief and pointed. A terse style communicates efficiently " +
        "but may risk omitting necessary qualification."
    },
    {
      term: "Circumspect",
      definition:
        "Wary and unwilling to take risks; carefully considering all circumstances. " +
        "A circumspect argument anticipates objections and hedges accordingly."
    },
    {
      term: "Strident",
      definition:
        "Presenting a point of view in an excessively forceful or aggressive manner. " +
        "A strident argument may be persuasive in tone but overstates its certainty."
    }
  ];

  /* Push all glossary entries */
  for (var g = 0; g < glossaryEntries.length; g++) {
    DATA.glossary.push(glossaryEntries[g]);
  }
  for (var ge = 0; ge < glossaryExpansion.length; ge++) {
    DATA.glossary.push(glossaryExpansion[ge]);
  }
  DATA.reference.glossary = DATA.glossary;


  /* ======================================================================== *
   * 3. READING — Official recommended sources + active-reading guidance       *
   * ======================================================================== */
  DATA.reading = {
    _sourceNote:
      "Recommended publication list per lnat.ac.uk/how-to-prepare/, as of June 2026.",

    rationale:
      "LNAT passages are drawn from serious English-language opinion and analysis — " +
      "the same register as quality newspaper comment and long-form journalism. " +
      "Reading these sources daily trains the skills the test rewards: extracting a " +
      "thesis, identifying its supporting evidence, locating hidden assumptions, and " +
      "articulating the strongest counter-argument.",

    officialSources: [
      {
        name: "The Economist",
        url: "https://www.economist.com",
        focus:
          "Leader articles and analysis. Dense, opinionated, one clear thesis per " +
          "piece. Excellent for argument-extraction practice.",
        lnatReadingNote:
          "Thesis: stated in the opening sentence of the leader — find it immediately. " +
          "Assumptions: the Economist routinely assumes free-market premises; make these explicit. " +
          "Support: distinguishes 'here is the evidence' paragraphs from 'here is our view' paragraphs. " +
          "Strongest counter-argument: usually buried in a middle paragraph as a 'critics say' clause — " +
          "isolate it and ask whether the rebuttal actually defeats it."
      },
      {
        name: "Financial Times",
        url: "https://www.ft.com",
        focus:
          "Comment and analysis sections. Economic reasoning and policy argument; " +
          "good for assumption-identification.",
        lnatReadingNote:
          "Thesis: often emerges after a paragraph of scene-setting — skip the anecdote and " +
          "find the evaluative claim. " +
          "Assumptions: look for unstated economic premises (e.g. growth is always desirable). " +
          "Support: FT pieces mix quantitative data with qualitative argument; separate them and " +
          "check which type the conclusion actually rests on. " +
          "Strongest counter-argument: think about who benefits from the opposite policy."
      },
      {
        name: "The Guardian",
        url: "https://www.theguardian.com",
        focus:
          "Opinion and long-form features. Broad range of social and political " +
          "topics; useful for identifying author standpoint and tone.",
        lnatReadingNote:
          "Thesis: Guardian opinion columns often signal the thesis in the headline and first sentence. " +
          "Assumptions: the author's values (equality, rights) are frequently unstated premises. " +
          "Support: note whether supporting paragraphs cite facts, analogies, or appeals to authority — " +
          "LNAT questions often ask which type is being used. " +
          "Strongest counter-argument: practise steelmanning the position the Guardian is arguing against."
      },
      {
        name: "The Independent",
        url: "https://www.independent.co.uk",
        focus:
          "Comment pieces. Mix of liberal and centrist opinion; practice " +
          "distinguishing reported views from the author's own position.",
        lnatReadingNote:
          "Thesis: Independent comment pieces often blend news and opinion — actively distinguish " +
          "what the author thinks from what the author reports others thinking. " +
          "Assumptions: look for implicit claims about what policy can achieve. " +
          "Support: track which sentences are evidence and which are the author's inferences from evidence. " +
          "Strongest counter-argument: identify the political or social viewpoint that would most " +
          "forcefully object to the author's conclusion."
      },
      {
        name: "Irish Times",
        url: "https://www.irishtimes.com",
        focus:
          "Opinion and analysis. Irish and European perspectives; useful for " +
          "passages on governance and civil liberties.",
        lnatReadingNote:
          "Thesis: often concerns governance, constitutional law, or civil society — apply the " +
          "'one sentence summary' test immediately after reading. " +
          "Assumptions: pieces on EU or state power often assume certain rights as foundational; " +
          "make these explicit. " +
          "Support: separate legislative or case-based evidence from normative commentary. " +
          "Strongest counter-argument: argue from the opposing national-interest or sovereignty angle."
      },
      {
        name: "New York Times",
        url: "https://www.nytimes.com",
        focus:
          "Opinion and Sunday Review. High-quality argumentative writing; " +
          "practise reading counter-argument structures.",
        lnatReadingNote:
          "Thesis: NYT opinion writers are trained for clarity — the thesis is usually explicit " +
          "by paragraph two. " +
          "Assumptions: American cultural and political assumptions may need unpacking for a UK-context exam. " +
          "Support: Sunday Review pieces often use personal narrative as evidence; evaluate how strongly " +
          "a single case supports the general claim. " +
          "Strongest counter-argument: the NYT regularly publishes opposing columns — read both sides " +
          "of the same debate as counter-argument practice."
      },
      {
        name: "The Scotsman",
        url: "https://www.scotsman.com",
        focus:
          "Political and social commentary; Scottish and UK politics.",
        lnatReadingNote:
          "Thesis: identify whether the piece is arguing a policy position or a constitutional one — " +
          "these require different types of support. " +
          "Assumptions: often assumes readers share a view on Scottish devolution or UK governance. " +
          "Support: look for how the author uses precedent or historical analogy to support present claims. " +
          "Strongest counter-argument: think about how a Unionist or a Nationalist would each rebut the piece."
      },
      {
        name: "The Times",
        url: "https://www.thetimes.co.uk",
        focus:
          "Comment and feature writing across law, politics, culture, and science.",
        lnatReadingNote:
          "Thesis: Times comment pieces are crisp; look for the thesis in the first or final paragraph. " +
          "Assumptions: centre-right premises are often unstated — make them explicit. " +
          "Support: The Times frequently uses expert testimony; ask whether the expert's credentials " +
          "are relevant to the specific claim. " +
          "Strongest counter-argument: imagine the response from the opposing political tradition."
      },
      {
        name: "Washington Post",
        url: "https://www.washingtonpost.com",
        focus:
          "Investigations and opinion. Strong on political reasoning and " +
          "institutional argument.",
        lnatReadingNote:
          "Thesis: Washington Post opinion columns often make institutional-level claims (about " +
          "democracy, courts, or executive power) — pin down the exact claim being made. " +
          "Assumptions: look for assumptions about how institutions ought to behave. " +
          "Support: investigative journalism blends fact-finding with editorial conclusion; separate them. " +
          "Strongest counter-argument: consider the constitutional or procedural objection to the " +
          "author's recommended course of action."
      }
    ],

    activeReadingMethod: {
      title: "Four-question active-reading protocol",
      description:
        "After reading any opinion article or editorial, work through these four " +
        "questions before moving on. Do this every day on at least one piece.",
      steps: [
        {
          step: 1,
          question: "What is the thesis?",
          guidance:
            "State the author's main claim in one sentence. If you cannot, reread " +
            "the first and last paragraphs. The thesis should be a committed " +
            "position, not a topic description."
        },
        {
          step: 2,
          question: "What assumptions does the argument rely on?",
          guidance:
            "List 2–3 unstated premises the argument needs. Apply the negation test: " +
            "if you deny the premise and the argument collapses, it is a genuine " +
            "assumption. Be precise — distinguish required from merely plausible premises."
        },
        {
          step: 3,
          question: "What evidence and reasoning support the thesis?",
          guidance:
            "Identify which parts are factual evidence, which are inferences drawn " +
            "from that evidence, and which are rhetorical moves (analogy, authority, " +
            "emotional appeal). Note the difference clearly."
        },
        {
          step: 4,
          question: "What is the strongest counter-argument, and how might the author respond?",
          guidance:
            "Formulate the best objection to the author's thesis — not the easiest " +
            "one. Then articulate how the author could rebut it. This trains the " +
            "essay counter-argument paragraph."
        }
      ],
      timedVariant:
        "For timed simulation: give yourself 8 minutes per article " +
        "(skim 90 seconds, read 4 minutes, answer all four questions 2.5 minutes). " +
        "This mirrors the Section A pace of ~8 minutes per passage."
    }
  };
  DATA.reference.reading = DATA.reading;


  /* ======================================================================== *
   * 4. FAQ — 10 grounded questions and answers                               *
   * ======================================================================== */
  var faqEntries = [
    {
      question: "How is the LNAT scored?",
      answer:
        "Section A is marked by computer: one mark per correct answer, 0 for wrong " +
        "or blank, no negative marking. The total (0–42) is your official LNAT score. " +
        "Section B (essay) is not given a central score — the full essay text is " +
        "released verbatim to the universities you listed, alongside your Section A " +
        "score, within 24 hours of sitting. Each university assesses the essay using " +
        "its own criteria and weighting. Per lnat.ac.uk, as of June 2026."
    },
    {
      question: "Can I retake the LNAT?",
      answer:
        "No — you may sit the LNAT only once per admissions cycle. If you book " +
        "multiple slots, duplicates are voided by the system. Your score from one cycle " +
        "cannot be carried forward to the next. Plan and prepare before booking. " +
        "Per lnat.ac.uk/faqs/, as of June 2026."
    },
    {
      question: "What is a 'good' LNAT score?",
      answer:
        "It depends on which universities you are applying to. The national mean " +
        "has ranged from 21.0 to 23.0 in recent cycles (2023/24: 23.0; 2024/25: 21.0; " +
        "2025/26: 21.8). As a guide: 22 or below is the Risk zone; 23–25 is the " +
        "Developing band (competitive for Glasgow and SOAS, marginal for Bristol/Durham/LSE); " +
        "26–28 is the Competitive band (UCL/KCL/LSE/Durham range); 29 and above is the " +
        "Oxbridge tier (Oxford offer-holder mean ~30.96; Cambridge ~30.1 in 2023/24). " +
        "These are indicative only — bands shift annually. " +
        "Re-verify current means at lnat.ac.uk before registering."
    },
    {
      question: "Does the LNAT test legal knowledge?",
      answer:
        "No. The LNAT explicitly does not test knowledge of law, current affairs, or " +
        "any academic subject. Section A tests verbal reasoning and critical thinking " +
        "using self-contained passages — everything you need to answer each question " +
        "is in the passage itself. Section B tests your ability to construct a " +
        "structured written argument on a general topic. No legal preparation is " +
        "necessary or helpful for this purpose. Per lnat.ac.uk/what-is-lnat/."
    },
    {
      question: "How should I prepare if I only have a few months?",
      answer:
        "Prioritise three things: (1) Daily active reading of quality opinion " +
        "journalism (The Economist, The Guardian, FT — the official recommended list) " +
        "using the four-question protocol: extract thesis, assumptions, evidence, " +
        "strongest counter-argument. (2) Timed Section A practice — do the two official " +
        "2010 practice papers (free at lnat.ac.uk) under test conditions (95 minutes, " +
        "4-option questions), then review every wrong answer against the mark scheme. " +
        "(3) Timed essay practice — write to the 40-minute clock, targeting 500–600 " +
        "words, committing to one position from the outset. Review against the 'Five " +
        "I's' checklist: avoid being Irresolute, Indecisive, Imprecise, Inconsistent, " +
        "or Indignant. Quality of practice matters more than volume."
    },
    {
      question: "How do universities use the LNAT essay?",
      answer:
        "Each university decides independently. UCL places particularly high weight " +
        "on the essay as it is the only exam-condition writing sample in the UCL " +
        "application. Cambridge tutors reportedly mark the essay out of 10. Oxford " +
        "weighs both sections heavily; the essay can be determinative for borderline " +
        "MCQ scores. KCL and LSE formally score the Section A MCQ for most applicants " +
        "and consider the essay only secondarily or for non-standard qualifications. " +
        "Bristol uses a published formula (MCQ 60% / essay 40% within the LNAT " +
        "component, which is itself 40% of the total formula). " +
        "Per lnat.ac.uk and university-specific guidance, as of June 2026."
    },
    {
      question: "Where can I sit the LNAT outside the UK?",
      answer:
        "The LNAT is delivered at Pearson VUE test centres worldwide — approximately " +
        "500+ centres outside the UK. The fee for sitting outside EU countries is £120 " +
        "(versus £75 within the UK/EU). Find a centre and book through the LNAT " +
        "registration portal at lnat.ac.uk. " +
        "Fees are 2025/26 rates; re-verify at lnat.ac.uk before registering."
    },
    {
      question: "What if I need access arrangements (extra time, etc.)?",
      answer:
        "Access arrangements must be applied for before you book your test. The " +
        "process requires contacting the LNAT Consortium by telephone in advance — " +
        "you cannot apply for extra time when booking online. See lnat.ac.uk/faqs/ " +
        "for the current process and documentation required. Apply early, as the " +
        "process takes time and you need arrangements confirmed before booking the slot."
    },
    {
      question: "What happens if I miss or need to reschedule my test?",
      answer:
        "Free rescheduling is available if you cancel or reschedule at least 48 hours " +
        "before your booked test time. Cancellations with less than 48 hours' notice " +
        "forfeit the fee. Remember that you can only sit once per cycle, so plan your " +
        "date carefully — especially if you are applying to Oxford or Cambridge, which " +
        "require sitting by 15 October 2026. Per lnat.ac.uk, as of June 2026."
    },
    {
      question: "What do 'four options' mean in practice — I've seen five-option questions online?",
      answer:
        "The current LNAT uses exactly 4 answer options (A–D) in Section A. The " +
        "official online simulator on lnat.ac.uk still shows legacy 5-option questions " +
        "from an older format — this is a known discrepancy noted by lnat.ac.uk itself. " +
        "All practice content on this site uses 4 options. When using third-party " +
        "materials, be aware they may not reflect current test conditions; calibrate " +
        "against the two official 2010 PDF practice papers available free at lnat.ac.uk."
    },
    {
      question: "IMPORTANT — official lnat.ac.uk online simulator: 5 options vs 4 options",
      answer:
        "WARNING: The official online practice simulator at lnat.ac.uk displays questions " +
        "with 5 answer options (A–E). This reflects the old exam format and does NOT match " +
        "the current test. The real exam — and every question on this site — uses exactly " +
        "4 answer options (A–D). " +
        "Use the official simulator only to familiarise yourself with the on-screen interface " +
        "(navigation, flagging, on-screen timer). Do not use it to calibrate your performance: " +
        "five-option questions are structurally easier to eliminate down and produce inflated " +
        "scores relative to the real four-option format. " +
        "For accurate score benchmarking, use the two official 2010 PDF practice papers " +
        "(available free at lnat.ac.uk) which correctly reflect the current structure, " +
        "or use the four-option mocks on this site. " +
        "Per lnat.ac.uk simulator page note, as of June 2026."
    }
  ];

  for (var f = 0; f < faqEntries.length; f++) {
    DATA.faq.push(faqEntries[f]);
  }
  DATA.reference.faq = DATA.faq;

})(typeof window !== "undefined" ? window : this);
