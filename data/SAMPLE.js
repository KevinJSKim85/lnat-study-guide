/*
 * SAMPLE.js — gold-template fixture for the LNAT study-site engine.
 *
 * This is NOT real exam content. It seeds a small, fully-worked example of every
 * content shape defined in data/SCHEMA.md so that (a) the engine can be proven
 * end-to-end over file://, and (b) authoring agents have a concrete template.
 *
 * Delivery model: this file assigns into the buckets that loader.js created on
 * window.LNAT_DATA. It must load AFTER loader.js. All content is English-only.
 * Every authored item is source:"illustrative" except official-cited prompts.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    // loader.js must run first. Fail loudly rather than silently creating buckets.
    (root.console || { error: function () {} }).error(
      "[LNAT] SAMPLE.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * PASSAGES — 3 passages across 3 distinct genres.
   * ---------------------------------------------------------------------- */
  DATA.passages.push(
    {
      id: "psg-philosophy-001",
      genre: "philosophy",
      title: "The Paradox of Tolerance",
      body:
        "A society that prizes tolerance above all other values faces an awkward " +
        "question: must it tolerate those who would dismantle tolerance itself? " +
        "Some thinkers insist that consistency demands an unlimited tolerance, on " +
        "the grounds that any exception hands the censor a precedent. Yet this " +
        "position quietly assumes that the intolerant will play by rules they have " +
        "already rejected. If a movement openly intends to abolish free debate the " +
        "moment it gains power, then extending it the full protection of free debate " +
        "is not neutrality but surrender. The wiser course treats tolerance not as a " +
        "blanket immunity but as a reciprocal arrangement: it is owed to those who, " +
        "however much we dislike their views, accept that disputes are settled by " +
        "argument rather than by force. On this reading, refusing to tolerate the " +
        "violently intolerant is not a betrayal of the principle but its defence.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-001",
      genre: "science",
      title: "Replication and the Standing of Evidence",
      body:
        "When a striking experimental result is announced, the public often treats " +
        "it as settled fact. Working scientists are more cautious. A single study, " +
        "however carefully run, establishes only that an effect appeared once, under " +
        "particular conditions, in the hands of a particular team. It is repetition " +
        "by independent groups that converts a curiosity into knowledge. This is why " +
        "the recent difficulty in reproducing many published findings has caused such " +
        "concern: if results cannot be reproduced, the original claims were never as " +
        "secure as their confident wording suggested. Critics sometimes read the " +
        "so-called replication crisis as evidence that science is broken. That " +
        "inference is too quick. The very fact that the problem was detected, and by " +
        "scientists themselves, shows the self-correcting machinery working as " +
        "intended, if belatedly. A discipline that never failed to replicate would be " +
        "one that had stopped testing its own boldest claims.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-001",
      genre: "politics",
      title: "Compulsory Voting and the Meaning of a Mandate",
      body:
        "Advocates of compulsory voting argue that a government chosen by the whole " +
        "electorate carries a stronger mandate than one chosen by the half that " +
        "happened to turn out. The reasoning is intuitively appealing, but it rests " +
        "on a slide between two senses of legitimacy. Forcing citizens to the polls " +
        "raises the number of votes cast; it does not, by itself, raise the quality " +
        "of the choice those votes express. A reluctant voter, herded to the booth " +
        "under threat of a fine, may mark a box at random or spoil the ballot in " +
        "protest. The resulting figures look more representative while telling us " +
        "less about genuine consent. None of this shows that compulsion is wrong; a " +
        "case can still be made that the civic habit it instils is worth the cost. " +
        "But the simple argument from turnout to mandate cannot do the work its " +
        "supporters ask of it.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * QUESTIONS — 10 four-option MCQs across several sub-types, each with a
   * full 4-entry per-option rationale and a worked solution.
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    // --- psg-philosophy-001 -------------------------------------------------
    {
      id: "q-main-001",
      passageId: "psg-philosophy-001",
      type: "main",
      stem: "Which of the following best expresses the main point of the passage?",
      options: [
        "Tolerance is the highest political value and admits of no exceptions.",
        "Tolerance is best understood as reciprocal, and so need not be extended to those who reject argument for force.",
        "Intolerant movements are usually too weak to threaten free debate.",
        "Societies should abandon tolerance because it is internally contradictory."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the 'unlimited tolerance' view the author explicitly criticises as surrender, not the point being made.",
        "Correct: the passage concludes that tolerance is a reciprocal arrangement owed to those who accept argument over force, so refusing the violently intolerant defends the principle.",
        "Wrong: the strength or weakness of intolerant movements is never discussed; this is outside the passage.",
        "Wrong: the author defends a reshaped tolerance, not its abandonment; the contradiction is dissolved, not used to reject tolerance."
      ],
      workedSolution:
        "The first sentences raise the puzzle, the middle rejects 'unlimited tolerance' as surrender, and the final sentences redefine tolerance as reciprocal and conclude that refusing the violently intolerant is its defence. The main point is that reframed conclusion, which is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-001",
      passageId: "psg-philosophy-001",
      type: "assume",
      stem: "The argument against unlimited tolerance depends on which unstated assumption?",
      options: [
        "All political movements eventually seek power.",
        "A principle that cannot be applied consistently must be discarded.",
        "Protecting a movement's freedoms can materially help it achieve its aims.",
        "Tolerance and free debate mean the same thing."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the argument concerns only movements that intend to abolish debate, not all movements, so this is broader than what is required.",
        "Wrong: the author rejects the consistency-demands-discarding move; this is closer to the view being criticised.",
        "Correct: the claim that full protection amounts to 'surrender' only follows if granting freedoms actually helps the intolerant succeed; that link is assumed, not stated.",
        "Wrong: the passage treats them as related but distinct; equating them is not a premise the argument needs."
      ],
      workedSolution:
        "An assumption is a required missing premise. The author says protecting the intolerant is 'surrender'. That conclusion only holds if the protection genuinely advances the intolerant movement's aims. Remove that link and the surrender claim collapses, so option C is the assumption.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-001",
      passageId: "psg-philosophy-001",
      type: "standpoint",
      stem: "What is the author's attitude toward the 'unlimited tolerance' position?",
      options: [
        "Sympathetic but ultimately undecided.",
        "Critical: it is treated as mistaken because it ignores reciprocity.",
        "Neutral: it is reported without evaluation.",
        "Hostile to the point of dismissing tolerance altogether."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author reaches a firm conclusion, so 'undecided' misreads the close of the passage.",
        "Correct: the author calls unlimited tolerance 'surrender' and argues it 'quietly assumes' the intolerant will follow rules they reject, a clearly critical evaluation.",
        "Wrong: the position is evaluated, not merely reported; 'neutral' ignores the loaded language.",
        "Wrong: the author criticises one version of tolerance while defending a reciprocal version, so does not dismiss tolerance altogether."
      ],
      workedSolution:
        "Distinguish views described from views held. The author describes unlimited tolerance, then judges it ('surrender', 'quietly assumes'). The judgement is negative but targeted, matching option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-001",
      passageId: "psg-philosophy-001",
      type: "vocab",
      stem: "As used in the passage, 'reciprocal' most nearly means:",
      options: [
        "Given in equal exchange between parties who accept the same terms.",
        "Granted unconditionally to everyone alike.",
        "Decided by a neutral third party.",
        "Temporary and easily withdrawn."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage defines the reciprocal arrangement as tolerance 'owed to those who ... accept that disputes are settled by argument', i.e. a mutual exchange on shared terms.",
        "Wrong: unconditional granting is the 'unlimited tolerance' view the author rejects, the opposite of the contextual sense.",
        "Wrong: no neutral arbiter is mentioned; this imports an idea absent from the text.",
        "Wrong: nothing in the passage ties 'reciprocal' to being temporary or withdrawable."
      ],
      workedSolution:
        "Read the word in its sentence: tolerance is a 'reciprocal arrangement ... owed to those who ... accept that disputes are settled by argument'. That is mutual, conditional-on-shared-terms exchange, which is option A. The common dictionary gloss is not the trap here; context pins the mutual-exchange sense.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-science-001 ----------------------------------------------------
    {
      id: "q-inference-001",
      passageId: "psg-science-001",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Most published scientific findings are fraudulent.",
        "A result that independent teams cannot reproduce should be held less securely than its original wording implied.",
        "Replication is unnecessary once a study is carefully run.",
        "Science has been shown to be fundamentally broken."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage discusses failure to reproduce, never fraud; this overreaches well beyond the evidence.",
        "Correct: the author says unreproduced claims 'were never as secure as their confident wording suggested', which directly supports holding them less securely.",
        "Wrong: the passage insists repetition is precisely what converts a curiosity into knowledge, the opposite of this option.",
        "Wrong: the author explicitly calls the 'science is broken' inference 'too quick', so the passage rejects it."
      ],
      workedSolution:
        "An inference must be supported by the text but not merely plausible. The passage states unreproduced results were never as secure as claimed and rejects the 'broken' reading. Option B restates the supported point; the others are unsupported or contradicted.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-001",
      passageId: "psg-science-001",
      type: "factinf",
      stem: "Which statement in the passage is presented as a fact rather than as the author's inference?",
      options: [
        "The self-correcting machinery of science is working as intended.",
        "Many published findings have recently proved difficult to reproduce.",
        "A discipline that never failed to replicate would have stopped testing bold claims.",
        "Reading the replication crisis as proof that science is broken is too quick."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the author's interpretation of what the crisis shows, an inference, not a reported fact.",
        "Correct: the recent difficulty in reproducing many findings is stated as a matter of record that the rest of the argument then interprets.",
        "Wrong: this is a hypothetical claim the author advances to make a point, not a reported fact.",
        "Wrong: this is the author's evaluative judgement about an inference, not itself a fact."
      ],
      workedSolution:
        "Separate reported facts from steps the author takes beyond them. The difficulty reproducing findings is the factual premise; the 'self-correcting machinery' and 'too quick' lines are the author's inferences built on it. So option B is the fact.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-001",
      passageId: "psg-science-001",
      type: "detail",
      stem: "According to the passage, what converts a single curious result into knowledge?",
      options: [
        "Confident wording in the original announcement.",
        "Repetition by independent groups.",
        "Public acceptance of the result as settled fact.",
        "The care taken by the original research team."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: confident wording is criticised as making claims seem more secure than they are, not as a source of knowledge.",
        "Correct: the passage states directly that 'repetition by independent groups ... converts a curiosity into knowledge'.",
        "Wrong: public acceptance is contrasted with the caution of working scientists, not offered as what creates knowledge.",
        "Wrong: the passage says a single careful study still establishes only a one-off effect, so care alone is insufficient."
      ],
      workedSolution:
        "This is explicit comprehension: locate the stated claim. The sentence 'It is repetition by independent groups that converts a curiosity into knowledge' is the direct answer, option B. The other options are paraphrase traps drawn from nearby sentences.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-politics-001 ---------------------------------------------------
    {
      id: "q-structure-001",
      passageId: "psg-politics-001",
      type: "structure",
      stem: "What is the function of the sentence beginning 'None of this shows that compulsion is wrong'?",
      options: [
        "It introduces the author's main thesis for the first time.",
        "It concedes that the author's critique does not settle the wider question, narrowing the claim being made.",
        "It offers a concrete example of a reluctant voter.",
        "It contradicts the author's earlier reasoning."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the thesis (turnout does not equal mandate) is developed earlier; this sentence does not introduce it.",
        "Correct: the sentence concedes a limit, that the critique leaves open whether compulsion is justified on other grounds, thereby narrowing the argument to the turnout-mandate link.",
        "Wrong: the reluctant-voter example appears earlier; this sentence is a concession, not an illustration.",
        "Wrong: it qualifies rather than contradicts the argument; the author immediately reaffirms the narrower point."
      ],
      workedSolution:
        "Identify the sentence's role in the argument map. After attacking the turnout-to-mandate slide, the author concedes the critique does not prove compulsion wrong, then restates the narrower claim. That is a scope-limiting concession, option B.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-001",
      passageId: "psg-politics-001",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Higher turnout figures can coexist with weaker evidence of genuine consent.",
        "Compulsory voting has been adopted by most democracies.",
        "Spoiled ballots are never counted in official results.",
        "Reluctant voters always vote at random."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying the figures 'look more representative while telling us less about genuine consent', the author implies turnout can rise while the signal of real consent falls.",
        "Wrong: the passage makes no claim about how widely compulsory voting has been adopted.",
        "Wrong: nothing is said about whether spoiled ballots are counted; this is outside the text.",
        "Wrong: the author says a reluctant voter 'may' vote at random, a possibility, not the 'always' this option asserts."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that figures look more representative while telling us less about consent. The unstated but supported step is that turnout and genuine-consent evidence can move in opposite directions, option A. Option D over-reads 'may' into 'always'.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-001",
      passageId: "psg-politics-001",
      type: "tone",
      stem: "The phrase 'herded to the booth under threat of a fine' chiefly conveys a tone that is:",
      options: [
        "Neutral and merely descriptive.",
        "Mildly critical, stressing the coercion behind compulsory voting.",
        "Enthusiastically supportive of compulsion.",
        "Bewildered and uncertain."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'herded ... under threat' is loaded language, not neutral description.",
        "Correct: 'herded' and 'threat of a fine' carry a critical edge that foregrounds the coercive side of compulsion, consistent with the author's sceptical treatment of the turnout argument.",
        "Wrong: the diction is sceptical, the opposite of enthusiastic support.",
        "Wrong: the author writes with a clear, controlled argument, not bewilderment."
      ],
      workedSolution:
        "Tone is read from word choice. 'Herded' likens voters to driven animals and 'threat of a fine' stresses coercion; both tilt critical while staying measured. That is mild criticism, option B.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * ESSAY PROMPTS — 1 official-cited (research §6) + 2 illustrative (labeled).
   * ---------------------------------------------------------------------- */
  DATA.prompts.push(
    {
      id: "prompt-001",
      theme: "law-justice",
      text: "How should judges be appointed?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-002",
      theme: "civil-liberties",
      text:
        "“A right to privacy is incompatible with a culture of constant " +
        "self-publication online.” Discuss.",
      source: "illustrative"
    },
    {
      id: "prompt-003",
      theme: "ethics",
      text:
        "Is it ever justifiable to break a law you believe to be deeply unjust?",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAYS — 1 strong (annotated, cross-linked) + 1 weak (Five-I flaw).
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push(
    {
      id: "essay-001",
      promptId: "prompt-001",
      quality: "model",
      body:
        "Judges should be appointed by an independent commission on merit, with " +
        "political involvement kept to a minimum. Two considerations drive this " +
        "conclusion: the need for judicial independence, and the need for public " +
        "confidence that the law is applied without fear or favour.\n\n" +
        "The first argument is institutional. A judiciary that owes its appointments " +
        "to elected politicians is vulnerable to the suspicion, and sometimes the " +
        "reality, that its rulings repay political favours. An independent appointing " +
        "body, drawn from senior lawyers, lay members and retired judges, breaks that " +
        "chain of obligation. The candidate is chosen for the quality of legal mind, " +
        "not for loyalty to a party that may later appear before the court.\n\n" +
        "The second argument is democratic legitimacy of a subtler kind. Citizens " +
        "accept adverse judgments more readily when they believe the bench is " +
        "impartial. Merit-based, transparent appointment, with published criteria and " +
        "reasons, makes that impartiality visible. The legitimacy of a court rests not " +
        "on a popular vote but on the perception that anyone, however powerful, may " +
        "lose before it.\n\n" +
        "Against this, some urge electing judges, arguing that judicial power is real " +
        "power and ought to answer to the people. The objection has force, but it " +
        "misidentifies the kind of accountability courts need. Elected judges face an " +
        "incentive to rule with one eye on re-election, which is precisely the " +
        "pressure independence is meant to remove. Accountability is better secured " +
        "through reasoned, published judgments open to appeal than through the ballot " +
        "box.\n\n" +
        "The right model is therefore appointment on merit by an independent " +
        "commission, insulated from party politics but bound to give public reasons. " +
        "It secures both the independence the rule of law requires and the confidence " +
        "on which judicial authority ultimately depends.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note:
            "Thesis is committed and stated in sentence 1: an independent merit-based commission, minimal politics. No fence-sitting."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note:
            "Sentence 2 of the intro signposts the two arguments to come, so the reader has a map before the body begins."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note:
            "Paragraphs 2 and 3 each develop one clearly distinct reason (independence; visible impartiality) rather than restating the same point."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note:
            "Paragraph 4 states the strongest opposing view (elect judges) fairly, then rebuts it by distinguishing the kind of accountability courts need."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note:
            "Concrete institutional detail (senior lawyers, lay members, retired judges; published criteria and reasons) grounds the claims instead of asserting them."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note:
            "The conclusion ties back to both arguments in two sentences without introducing new material or padding."
        },
        {
          rubricDim: null,
          fiveI: "Irresolute",
          note:
            "Pitfall AVOIDED: the essay never hedges between models; it commits and defends one, the opposite of the Irresolute flaw."
        }
      ]
    },
    {
      id: "essay-002",
      promptId: "prompt-001",
      quality: "weak",
      body:
        "There are many ways judges could be appointed, and each has good and bad " +
        "points. Some people think politicians should choose them, while other people " +
        "think there should be a commission, and still others think they should be " +
        "elected. All of these views are understandable in their own way.\n\n" +
        "On the one hand, letting politicians choose judges means the judges are " +
        "connected to the government, which could be good or bad depending on how you " +
        "look at it. On the other hand, a commission might be more independent, " +
        "although it is hard to say for certain. Elections are also interesting " +
        "because they involve the people, which is usually a positive thing in a " +
        "democracy, more or less.\n\n" +
        "It is also important to remember that judges are very important and the law " +
        "is very important, so obviously we should be careful. Many countries do it " +
        "differently and they all seem to manage somehow, so perhaps there is no " +
        "single right answer to this difficult and complicated question.\n\n" +
        "In conclusion, there are strong arguments on every side, and the best system " +
        "probably depends on the situation. Whichever method is chosen, what really " +
        "matters is that the judges are good at their jobs, which everyone can surely " +
        "agree on.",
      annotations: [
        {
          rubricDim: null,
          fiveI: "Irresolute",
          note:
            "The essay never commits to a position; it lists views and calls them all understandable. This is the textbook Irresolute (fence-sitting) flaw."
        },
        {
          rubricDim: null,
          fiveI: "Indecisive",
          note:
            "Phrases like 'could be good or bad' and 'more or less' show mid-essay indecision, refusing to weigh the options."
        },
        {
          rubricDim: null,
          fiveI: "Imprecise",
          note:
            "Vague qualifiers ('somehow', 'interesting', 'usually a positive thing') replace concrete reasons or examples."
        },
        {
          rubricDim: "thesis",
          fiveI: null,
          note:
            "Contrast with the model: there is no thesis sentence; the conclusion ('depends on the situation') restates the indecision rather than resolving it."
        }
      ]
    }
  );

  /* ---------------------------------------------------------------------- *
   * ARGUMENT BANK — one sample theme bank.
   * ---------------------------------------------------------------------- */
  DATA.argumentBanks.push({
    id: "argbank-law-justice",
    theme: "law-justice",
    positions: [
      "Judicial independence is the precondition of the rule of law.",
      "Merit-based appointment best protects impartiality and public confidence."
    ],
    counterPositions: [
      "Judicial power is real power and should be democratically accountable.",
      "Appointing commissions can entrench an unrepresentative legal elite."
    ],
    examples: [
      "Independent judicial appointments commissions used in several common-law systems.",
      "Jurisdictions with elected judges where campaign funding raises impartiality concerns."
    ],
    facts: [
      "Accountability for judges can run through reasoned, published, appealable judgments rather than elections."
    ]
  });

  /* ---------------------------------------------------------------------- *
   * LESSON — one sample sub-type lesson.
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-assume-sample",
    title: "Identifying Assumptions (4a)",
    cluster: "Assumptions & Logical Gaps",
    explanation:
      "An assumption is an unstated premise the argument needs in order to work. " +
      "It is not the conclusion the reader draws (that is an inference); it is the " +
      "hidden step without which the stated conclusion would not follow.",
    recognitionCues: [
      "The stem asks what the argument 'assumes', 'takes for granted', or 'relies on'.",
      "A gap exists between the stated evidence and the stated conclusion."
    ],
    workedExample:
      "If an author concludes that protecting an intolerant movement is 'surrender', " +
      "the hidden premise is that the protection actually helps that movement succeed. " +
      "Negate it (the protection does not help them) and the conclusion collapses, " +
      "which confirms it is the assumption.",
    commonTraps: [
      "Choosing a statement already made explicitly in the passage.",
      "Choosing a broader claim than the argument actually requires."
    ],
    strategyBox:
      "Use the negation test: if denying the option destroys the argument, it is the " +
      "assumption. Eliminate options that are already stated, contradicted, or " +
      "unnecessary to the conclusion."
  });

  /* ---------------------------------------------------------------------- *
   * MOCK — worked cross-reference example. Flagged sample:true so the engine
   * and validator treat it as a reduced sample (10 Q, not 42). It references
   * ONLY passage/question/prompt IDs that exist above, proving how IDs wire
   * across buckets.
   * ---------------------------------------------------------------------- */
  DATA.mocks.push({
    id: "mock-00",
    title: "Sample Mock (reduced — 10 questions)",
    sample: true,
    sectionA: {
      passageIds: ["psg-philosophy-001", "psg-science-001", "psg-politics-001"],
      questionIds: [
        "q-main-001",
        "q-assume-001",
        "q-standpoint-001",
        "q-vocab-001",
        "q-inference-001",
        "q-factinf-001",
        "q-detail-001",
        "q-structure-001",
        "q-implied-001",
        "q-tone-001"
      ]
    },
    sectionB: {
      promptIds: ["prompt-001", "prompt-002", "prompt-003"]
    }
  });
})(typeof window !== "undefined" ? window : this);
