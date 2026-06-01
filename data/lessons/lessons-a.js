/*
 * lessons-a.js — Section A instructional lessons for the LNAT study site.
 *
 * Covers all 7 Section A question-type lessons plus 1 active-reading lesson:
 *   lesson-main, lesson-standpoint, lesson-structure, lesson-detail,
 *   lesson-implied, lesson-inference, lesson-factinf, lesson-reading
 *
 * Delivery model: pushes into window.LNAT_DATA.lessons (created by loader.js).
 * Must load AFTER loader.js. English only. Source: "illustrative" not applicable
 * to lessons (no source field required by SCHEMA §3.6).
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] lessons-a.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  DATA.lessons.push(

    /* ------------------------------------------------------------------ */
    /* lesson-main — Main Idea / Primary Purpose (1a)                      */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-main",
      title: "Main Idea / Primary Purpose (1a)",
      cluster: "Argument Analysis",
      explanation:
        "<p>A <strong>Main Idea</strong> question asks you to identify the central " +
        "claim or purpose of the whole passage — not just one part of it. The author " +
        "has a reason for writing: to argue a position, to correct a misconception, " +
        "to weigh two sides and reach a verdict. That overarching reason is what " +
        "these questions test.</p>" +
        "<p>The correct answer must be broad enough to cover the passage as a whole, " +
        "yet specific enough to reflect what this passage actually says, not a generic " +
        "paraphrase of the topic area.</p>",
      recognitionCues: [
        "\"Which of the following best expresses the main point / central argument / primary purpose of the passage?\"",
        "\"The author's main contention is …\"",
        "\"The passage is primarily concerned with …\"",
        "\"Which best summarises the author's overall argument?\"",
        "Questions that ask about the passage as a whole, not a single sentence or paragraph."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>Advocates of compulsory voting argue that a government chosen by the whole " +
        "electorate carries a stronger mandate than one chosen by the half that happened " +
        "to turn out. The reasoning is intuitively appealing, but it rests on a slide " +
        "between two senses of legitimacy. Forcing citizens to the polls raises the number " +
        "of votes cast; it does not, by itself, raise the quality of the choice those votes " +
        "express. A reluctant voter, herded to the booth under threat of a fine, may mark a " +
        "box at random. The resulting figures look more representative while telling us less " +
        "about genuine consent. A case can still be made that the civic habit compulsion instils " +
        "is worth the cost. But the simple argument from turnout to mandate cannot do the work " +
        "its supporters ask of it.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>Which of the following best expresses the main point of the passage?</p>" +
        "<ol type='A'>" +
        "<li>Compulsory voting should be introduced to improve election mandates.</li>" +
        "<li>High voter turnout is the most important measure of democratic legitimacy.</li>" +
        "<li>The argument that compulsory voting strengthens mandates is flawed because it " +
        "equates turnout with genuine consent.</li>" +
        "<li>Reluctant voters always spoil their ballots, making compulsory voting pointless.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: C.</strong> The passage concedes the intuitive appeal of the " +
        "pro-compulsion argument (so it is not simply dismissing it), then identifies a " +
        "specific flaw: more votes cast does not mean better-quality consent. That critique " +
        "is the main point. Option A is the view being argued <em>against</em>. Option B " +
        "is a premise of the view being critiqued, not the author's conclusion. Option D " +
        "overstates a detail — the passage says a reluctant voter <em>may</em> mark at " +
        "random, not always.</p>",
      commonTraps: [
        "<strong>True detail trap:</strong> an answer that is accurate but covers only one paragraph or example — right for a detail question, too narrow for a main-idea question.",
        "<strong>Topic-only answer:</strong> an answer that names the subject (e.g. \"compulsory voting\") without capturing the author's position on it.",
        "<strong>Opposite trap:</strong> selecting the view the author is arguing against rather than the view the author is defending.",
        "<strong>Overstated conclusion:</strong> an answer that goes further than the author does — watch for absolutes like \"always\", \"never\", \"all\".",
        "<strong>Too broad:</strong> an answer true of many passages on the same topic, not specific to this one's argument."
      ],
      strategyBox:
        "<p><strong>Strategy — three-step sweep:</strong></p>" +
        "<ol>" +
        "<li><strong>Find the thesis sentence.</strong> It is usually in the first or last " +
        "paragraph, often signalled by words like \"however\", \"but\", \"yet\", \"the point " +
        "is\", \"this shows that\".</li>" +
        "<li><strong>Check the scope.</strong> The correct answer must fit the whole passage, " +
        "not just one section. If an option is true but only describes part of the argument, " +
        "eliminate it.</li>" +
        "<li><strong>Match the author's stance.</strong> The author argues for something — make " +
        "sure the answer reflects their conclusion, not a premise, not the opposing view, and " +
        "not an exaggeration of it.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-standpoint — Author's Standpoint / Attitude (1b)             */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-standpoint",
      title: "Author's Standpoint / Attitude (1b)",
      cluster: "Argument Analysis",
      explanation:
        "<p>A <strong>Standpoint / Attitude</strong> question asks: where does the author " +
        "actually stand? This is different from asking what views are discussed. LNAT " +
        "passages often describe multiple positions — the author's own view may be stated " +
        "carefully, implied through word choice, or revealed only in the final sentences.</p>" +
        "<p>The key skill is separating <em>views the author describes</em> from " +
        "<em>views the author holds</em>.</p>",
      recognitionCues: [
        "\"What is the author's attitude toward …?\"",
        "\"The author regards X as …\"",
        "\"Which of the following best describes the author's view of …?\"",
        "\"The author's tone toward the policy described can best be described as …\"",
        "\"Which of the following does the author appear to endorse?\"",
        "Any question asking about the author's opinion, perspective, or commitment."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>Critics sometimes read the replication crisis as evidence that science is " +
        "broken. That inference is too quick. The very fact that the problem was detected, " +
        "and by scientists themselves, shows the self-correcting machinery working as " +
        "intended, if belatedly. A discipline that never failed to replicate would be one " +
        "that had stopped testing its own boldest claims.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>What is the author's attitude toward the view that the replication crisis " +
        "shows science is broken?</p>" +
        "<ol type='A'>" +
        "<li>Sympathetic — the author believes it raises a genuine problem that needs solving.</li>" +
        "<li>Neutral — the author presents both sides without taking a position.</li>" +
        "<li>Critical — the author argues this reading is too hasty and misunderstands how science works.</li>" +
        "<li>Dismissive — the author treats the concern as entirely without foundation.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: C.</strong> The author directly states \"that inference is too " +
        "quick\" — a clear evaluative judgment. They then explain why: the self-correcting " +
        "mechanism is working. This is not dismissive (D) because the author acknowledges the " +
        "problem exists; it is not neutral (B) because a clear verdict is offered; it is not " +
        "sympathetic (A) because the author rejects the conclusion. Critical but reasoned = C.</p>",
      commonTraps: [
        "<strong>Views described vs views held:</strong> the author may spend most of the passage explaining a position they then reject in the final sentence — always read to the end.",
        "<strong>Partial agreement:</strong> the author may agree with part of a claim but not its conclusion; an answer that equates partial agreement with full endorsement is a trap.",
        "<strong>Tone mismatch:</strong> \"dismissive\" and \"critical\" look similar but differ in degree; always calibrate against the actual language used.",
        "<strong>Absence of evidence:</strong> if the author never evaluates something, \"neutral\" is correct — don't infer a stance the text doesn't support.",
        "<strong>Hedge words:</strong> \"may\", \"can\", \"some argue\" signal reported views, not the author's own."
      ],
      strategyBox:
        "<p><strong>Strategy — look for the evaluative pivot:</strong></p>" +
        "<ol>" +
        "<li>Scan for evaluative language: \"correct\", \"wrong\", \"too quick\", \"flawed\", " +
        "\"the wiser course\", \"misses the point\", \"rightly\". These reveal the author's hand.</li>" +
        "<li>Note the structure: does the passage present one view, then pivot with \"however\" " +
        "or \"but\"? The author's view usually comes after that pivot.</li>" +
        "<li>Distinguish loaded from neutral vocabulary. Neutral reporting uses \"argues\", " +
        "\"claims\", \"suggests\". Evaluation uses \"correctly\", \"mistakenly\", \"overlooks\".</li>" +
        "<li>Match your reading to the answer options — pick the one whose label (sympathetic, " +
        "critical, etc.) and explanation both fit.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-structure — Logical Structure / Argument Map (1c)            */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-structure",
      title: "Logical Structure / Argument Map (1c)",
      cluster: "Argument Analysis",
      explanation:
        "<p><strong>Logical Structure</strong> questions ask about the architecture of the " +
        "argument: how the parts fit together. You may be asked what role a particular " +
        "sentence or example plays, what the relationship is between two claims, or how the " +
        "argument as a whole is organised.</p>" +
        "<p>Think of the passage as a map: premises lead to intermediate conclusions which " +
        "lead to the main conclusion. Some elements function as counterarguments the author " +
        "then rebuts; others are examples supporting a claim; others are concessions.</p>",
      recognitionCues: [
        "\"The function of the sentence/paragraph beginning '…' is to …\"",
        "\"Which of the following best describes the logical structure of the passage?\"",
        "\"The example of X is used to …\"",
        "\"The author mentions Y in order to …\"",
        "\"Which of the following accurately describes the relationship between the first and second paragraphs?\"",
        "Any question about why a particular element is included or what role it plays."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>A society that prizes tolerance above all other values faces an awkward question: " +
        "must it tolerate those who would dismantle tolerance itself? Some thinkers insist that " +
        "consistency demands unlimited tolerance. Yet this position quietly assumes that the " +
        "intolerant will play by rules they have already rejected. The wiser course treats " +
        "tolerance as a reciprocal arrangement: it is owed to those who accept that disputes " +
        "are settled by argument rather than by force.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>The sentence beginning \"Yet this position quietly assumes…\" functions " +
        "primarily to:</p>" +
        "<ol type='A'>" +
        "<li>State the author's own preferred definition of tolerance.</li>" +
        "<li>Identify a hidden premise on which the opposing view depends, in order to challenge it.</li>" +
        "<li>Concede that unlimited tolerance is a reasonable position in most circumstances.</li>" +
        "<li>Provide an example of a movement that rejects the rules of debate.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: B.</strong> The sentence does not state the author's own view " +
        "(that comes later), does not concede anything, and does not give an example. It " +
        "exposes a hidden premise — the assumption that intolerant movements will follow " +
        "rules — as a way of undermining the unlimited-tolerance argument. That is a " +
        "structural move: identify a flaw in the opposing premise.</p>",
      commonTraps: [
        "<strong>Conflating example with conclusion:</strong> an example illustrates a point but is not the point itself — don't select an answer that treats an illustration as the main claim.",
        "<strong>Concession vs rebuttal:</strong> the author may introduce an objection only to immediately refute it; \"concedes\" is wrong if the author then argues against it.",
        "<strong>Order confusion:</strong> in a problem-solution structure, a sentence describing the problem is not making the author's positive claim.",
        "<strong>Scope error:</strong> \"to introduce the topic\" is often too vague — look for a more precise structural role.",
        "<strong>Reading the wrong sentence:</strong> locate the exact sentence the question identifies before judging its role."
      ],
      strategyBox:
        "<p><strong>Strategy — label each sentence before answering:</strong></p>" +
        "<ol>" +
        "<li>Assign a quick label to each sentence or paragraph: P (premise), C " +
        "(conclusion), EG (example), OBJ (objection), REB (rebuttal), CON (concession).</li>" +
        "<li>Identify the target sentence and read its label.</li>" +
        "<li>Match the label to the answer options. An OBJ + REB pattern means the " +
        "sentence introduces a view the author will then reject — not a concession, " +
        "not the main claim.</li>" +
        "<li>Eliminate answers that describe the wrong structural role, even if the " +
        "content sounds plausible.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-detail — Explicit Detail / Stated Fact (2a)                  */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-detail",
      title: "Explicit Comprehension / Stated Fact (2a)",
      cluster: "Information Retrieval",
      explanation:
        "<p>A <strong>Stated Fact</strong> question asks you to locate information that is " +
        "directly expressed in the passage. No inference is required — if you find the " +
        "relevant sentence, the answer follows directly from what it says.</p>" +
        "<p>The challenge is not reasoning but precision: the correct answer paraphrases the " +
        "passage accurately, while wrong answers subtly distort, exaggerate, or reverse what " +
        "was said.</p>",
      recognitionCues: [
        "\"According to the passage …\"",
        "\"The author states that …\"",
        "\"The passage explicitly mentions …\"",
        "\"Which of the following is stated in the passage?\"",
        "\"The author gives X as an example of …\"",
        "Any question asking what the passage says, not what it implies."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>A single study, however carefully run, establishes only that an effect appeared " +
        "once, under particular conditions, in the hands of a particular team. It is repetition " +
        "by independent groups that converts a curiosity into knowledge.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>According to the passage, what is needed to convert a scientific result " +
        "from a curiosity into knowledge?</p>" +
        "<ol type='A'>" +
        "<li>A study with a very large sample size run by the original team.</li>" +
        "<li>Independent replication of the result by other research groups.</li>" +
        "<li>Publication in a peer-reviewed journal with a high impact factor.</li>" +
        "<li>Agreement among a majority of scientists in the relevant field.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: B.</strong> The passage states this directly: \"It is repetition " +
        "by independent groups that converts a curiosity into knowledge.\" Option A introduces " +
        "a condition (large sample, original team) not mentioned. Options C and D introduce " +
        "plausible real-world ideas that are never stated in the passage — classic outside-knowledge " +
        "traps.</p>",
      commonTraps: [
        "<strong>Paraphrase traps:</strong> a wrong answer uses different words that shift the meaning — compare carefully against the exact passage text.",
        "<strong>Outside knowledge:</strong> real-world facts you happen to know may not be stated in the passage; only what the passage says counts.",
        "<strong>Partial truth:</strong> an answer that is almost right but adds or drops a condition stated in the passage.",
        "<strong>Reversed claim:</strong> an answer that negates what the passage says (e.g. passage says \"this does not raise quality\"; trap says \"this does raise quality\").",
        "<strong>Wrong subject:</strong> the passage makes a claim about X; the wrong answer attributes it to Y."
      ],
      strategyBox:
        "<p><strong>Strategy — locate then verify:</strong></p>" +
        "<ol>" +
        "<li>Read the stem and identify the key noun or concept (e.g. \"what converts a " +
        "curiosity into knowledge?\").</li>" +
        "<li>Skim the passage for that concept — use the structure you mapped when reading " +
        "to find the right paragraph quickly.</li>" +
        "<li>Read the relevant sentence slowly. Hold its exact wording in mind.</li>" +
        "<li>For each option, ask: does the passage actually say this? An option that is " +
        "plausible but not stated is wrong.</li>" +
        "<li>Do not use outside knowledge — the answer lives in the text.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-implied — Stated vs Implied (2b)                             */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-implied",
      title: "Stated vs Implied (2b)",
      cluster: "Information Retrieval",
      explanation:
        "<p>A <strong>Stated vs Implied</strong> question asks you to distinguish between " +
        "what the author explicitly says and what is only suggested. This sounds simple but " +
        "requires careful attention to the boundary between reading and inferring.</p>" +
        "<p>\"Stated\" means the claim appears in the text, perhaps in paraphrase. " +
        "\"Implied\" means the reader can draw the idea from what is said, but the text " +
        "never makes it explicit. Wrong answers on these questions often blur that line — " +
        "either treating an implication as a direct statement, or treating a stated claim " +
        "as merely implied.</p>",
      recognitionCues: [
        "\"Which of the following is stated (not merely implied) in the passage?\"",
        "\"Which of the following is implied but NOT directly stated?\"",
        "\"The author explicitly says …\" vs \"The author suggests …\"",
        "\"Which of the following can be inferred from the passage rather than read directly from it?\"",
        "Questions that use contrasting language: stated/implied, explicit/suggested, says/suggests."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>Forcing citizens to the polls raises the number of votes cast; it does not, by " +
        "itself, raise the quality of the choice those votes express. A reluctant voter, " +
        "herded to the booth under threat of a fine, may mark a box at random or spoil the " +
        "ballot in protest.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>Which of the following is <em>implied</em> by the passage but NOT explicitly stated?</p>" +
        "<ol type='A'>" +
        "<li>Compulsory voting increases the total number of votes cast.</li>" +
        "<li>Some reluctant voters may spoil their ballots.</li>" +
        "<li>A government elected under compulsory voting may not have a stronger democratic mandate than one elected voluntarily.</li>" +
        "<li>Fines can be used to enforce compulsory voting.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: C.</strong> Options A, B, and D are all explicitly stated in " +
        "the passage in near-identical terms. Option C is not written anywhere — it is the " +
        "logical consequence that follows from the stated claims (more votes, lower quality " +
        "consent → mandate not stronger), but the passage never spells out that conclusion " +
        "in those words. It is implied, not stated.</p>",
      commonTraps: [
        "<strong>Treating restatements as merely implied:</strong> if the passage says it, even in different words, it is stated — not implied.",
        "<strong>Treating inferences as stated:</strong> a conclusion you reach from the passage is implied, even if it feels obvious.",
        "<strong>Missing the question word:</strong> some questions ask for what IS stated; others for what is NOT stated; others for what IS implied. Misreading the stem sends you to the wrong category.",
        "<strong>Plausible-in-world trap:</strong> something true in the real world but not drawn from this passage is neither stated nor properly implied — it is simply irrelevant."
      ],
      strategyBox:
        "<p><strong>Strategy — use a two-step test:</strong></p>" +
        "<ol>" +
        "<li>For each option, search the passage for its exact claim or a paraphrase of it. " +
        "If you find it — stated. If you cannot find it but it logically follows from what " +
        "is said — implied. If it comes from outside the passage — neither.</li>" +
        "<li>Read the question stem very carefully: \"stated\", \"implied\", \"explicitly\", " +
        "\"NOT stated\". The task changes based on these words.</li>" +
        "<li>If the question asks for the implied option, eliminate every option that can be " +
        "matched to actual passage text.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-inference — Inference / Implication (3a)                     */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-inference",
      title: "Inference / Implication (3a)",
      cluster: "Inference & Implication",
      explanation:
        "<p>An <strong>Inference</strong> question asks you to draw a conclusion the passage " +
        "supports but does not state explicitly. The correct inference must follow necessarily " +
        "— or with very high probability — from what the text says. It is not enough that an " +
        "answer is plausible or consistent with the passage; it must be supported by the " +
        "passage.</p>" +
        "<p>Think of it as: if everything the passage says is true, which answer must also " +
        "be true (or very likely true)?</p>",
      recognitionCues: [
        "\"Which of the following can be inferred from the passage?\"",
        "\"The passage most strongly implies that …\"",
        "\"It can be concluded from the passage that …\"",
        "\"Which of the following is best supported by the passage?\"",
        "\"Based on the passage, which of the following is most likely true?\"",
        "Questions pointing beyond the explicit text to what follows from it."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>The very fact that the replication problem was detected, and by scientists " +
        "themselves, shows the self-correcting machinery working as intended, if belatedly. " +
        "A discipline that never failed to replicate would be one that had stopped testing " +
        "its own boldest claims.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>Which of the following can most reliably be inferred from the passage?</p>" +
        "<ol type='A'>" +
        "<li>Most scientific findings published before the replication crisis are now known to be false.</li>" +
        "<li>The author believes science journalism exaggerated the significance of the replication problem.</li>" +
        "<li>A science in which all results replicated perfectly would not be one engaged in genuinely ambitious research.</li>" +
        "<li>Replication problems are unique to the social sciences.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: C.</strong> The passage states: \"A discipline that never failed " +
        "to replicate would be one that had stopped testing its own boldest claims.\" This " +
        "directly implies that perfect replication = no bold claims = no ambitious research. " +
        "Option A goes far beyond the text (\"most findings\" and \"false\" are unsupported). " +
        "Option B introduces science journalism, which is never mentioned. Option D specifies " +
        "social sciences — the passage makes no such distinction.</p>",
      commonTraps: [
        "<strong>Plausible but unsupported:</strong> the most dangerous trap — an answer that sounds reasonable in the real world but cannot be grounded in the passage text.",
        "<strong>Degree inflation:</strong> the passage supports a mild claim (\"may\", \"can\") but the answer states it absolutely (\"always\", \"will\").",
        "<strong>Outside knowledge:</strong> information you know to be true in the world but that is not drawn from this particular passage.",
        "<strong>Too literal:</strong> selecting something that is explicitly stated rather than inferred — these questions specifically ask you to go one step beyond the text.",
        "<strong>Scope creep:</strong> a correct inference stays close to the passage's actual claims; an incorrect one jumps to a broader domain not discussed."
      ],
      strategyBox:
        "<p><strong>Strategy — the \"must be true\" test:</strong></p>" +
        "<ol>" +
        "<li>For each option, ask: if I accept everything the passage says, does this " +
        "option have to be true — or at least very probably true?</li>" +
        "<li>Eliminate anything that is merely <em>possible</em> or <em>consistent with</em> " +
        "the passage. The bar is support, not mere compatibility.</li>" +
        "<li>Eliminate anything that requires facts from outside the passage.</li>" +
        "<li>The survivor should be traceable to specific passage sentences as a logical " +
        "consequence.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-factinf — Fact vs Inference (3b)                             */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-factinf",
      title: "Fact vs Inference (3b)",
      cluster: "Inference & Implication",
      explanation:
        "<p>A <strong>Fact vs Inference</strong> question asks you to classify claims: is " +
        "a given statement presented in the passage as an observable/verifiable fact, or is " +
        "it a logical step — a conclusion drawn from other claims?</p>" +
        "<p>In LNAT passages, authors mix factual claims (things that are or were the case) " +
        "with inferential claims (things the author concludes must follow). Recognising which " +
        "is which prevents you from treating an author's conclusion as established evidence, " +
        "or treating evidence as if it were already a proven conclusion.</p>",
      recognitionCues: [
        "\"Which of the following is presented as a fact rather than an inference?\"",
        "\"Which of the following is an inference rather than a stated fact?\"",
        "\"The claim that X is … a fact / an inference / an assumption\"",
        "Questions that ask you to classify the logical status of specific statements.",
        "\"Which of the following represents the author's reasoning rather than evidence?\""
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>Many published findings have proven difficult for other teams to reproduce. " +
        "If results cannot be reproduced, the original claims were never as secure as their " +
        "confident wording suggested. Critics sometimes read this as evidence that science is " +
        "broken — an inference that is too quick.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>Which of the following is an <em>inference</em> rather than a presented fact?</p>" +
        "<ol type='A'>" +
        "<li>Many published findings have proven difficult to reproduce.</li>" +
        "<li>Critics have read the replication problem as evidence that science is broken.</li>" +
        "<li>If results cannot be reproduced, the original claims were not as secure as stated.</li>" +
        "<li>The author uses the term \"replication crisis\" in the passage.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p><strong>Answer: C.</strong> Options A, B, and D can be verified by reading the " +
        "passage — they describe states of affairs directly reported. Option C is an " +
        "inferential step: it is a conditional conclusion (\"if… then…\") drawn by the author " +
        "from the difficulty-of-reproduction fact. It is reasoning, not a reported event.</p>",
      commonTraps: [
        "<strong>Treating confident claims as facts:</strong> something asserted firmly can still be an inference; confidence of tone does not make a claim factual.",
        "<strong>Treating statistical claims as inferences:</strong> reported data or observable events are facts even if they are surprising.",
        "<strong>Conditional statements:</strong> \"if P then Q\" is usually inferential — watch for conditional structures as inference markers.",
        "<strong>Author's conclusions as facts:</strong> the author's own conclusion is an inference built from their premises, not a free-standing fact.",
        "<strong>Mixing logical and epistemic status:</strong> \"fact\" in these questions means presented-as-reported-state-of-affairs, not \"definitely true in the world\"."
      ],
      strategyBox:
        "<p><strong>Strategy — ask two diagnostic questions:</strong></p>" +
        "<ol>" +
        "<li><strong>Could you check it independently?</strong> Facts describe events or " +
        "states that could (in principle) be verified. Inferences are logical steps from " +
        "other claims.</li>" +
        "<li><strong>Is it conditional or causal?</strong> Claims using \"if\", \"therefore\", " +
        "\"this shows that\", \"it follows that\" are inferential. Claims describing what " +
        "happened or what someone said are factual.</li>" +
        "<li>Apply both tests to each option and select the one that fits the category the " +
        "question asks for.</li>" +
        "</ol>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-reading — Active Reading (how to read argumentative passages) */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-reading",
      title: "Active Reading for LNAT Section A",
      cluster: "Foundation Skills",
      explanation:
        "<p>Every LNAT Section A passage is an argument. The author has a position, " +
        "provides reasons, anticipates objections, and reaches a conclusion. Reading " +
        "passively — absorbing words in order — leaves you without a map when the " +
        "questions arrive. <strong>Active reading</strong> means building that map " +
        "as you go.</p>" +
        "<p>In the exam you have roughly 60–90 seconds to skim a passage before tackling " +
        "3–4 questions. This lesson trains the habit so it becomes automatic.</p>" +
        "<h3>The five things to locate in every passage</h3>" +
        "<ol>" +
        "<li><strong>Thesis</strong> — the author's main claim. Usually in the first or " +
        "last paragraph. Ask: what does the author want me to believe?</li>" +
        "<li><strong>Premises</strong> — the reasons given in support of the thesis. " +
        "Ask: why does the author think this?</li>" +
        "<li><strong>Hidden assumptions</strong> — unstated claims the argument requires " +
        "to work. Ask: what must be true for this reasoning to hold?</li>" +
        "<li><strong>Support / evidence</strong> — examples, data, or cases offered as " +
        "evidence. Ask: what is this example supposed to prove?</li>" +
        "<li><strong>Strongest counterargument</strong> — the best objection to the " +
        "author's view, whether raised by the author or implied. Ask: what would a " +
        "thoughtful critic say?</li>" +
        "</ol>",
      recognitionCues: [
        "Apply active reading to EVERY passage — it is not a question type but the prerequisite for answering all question types accurately.",
        "Signal words for the thesis: \"the point is\", \"therefore\", \"it follows that\", \"in short\", \"the wiser course\", \"ultimately\".",
        "Signal words for premises: \"because\", \"since\", \"given that\", \"as\", \"the reason is\".",
        "Signal words for objections: \"some argue\", \"critics claim\", \"one might object\", \"it is sometimes said\".",
        "Signal words for the author's rebuttal: \"yet\", \"however\", \"but\", \"nevertheless\", \"this ignores\".",
        "Signal words for hidden assumptions: none — they are hidden. Look for gaps between a premise and its conclusion."
      ],
      workedExample:
        "<h3>Worked passage analysis — step by step</h3>" +
        "<blockquote>" +
        "<p>A society that prizes tolerance above all other values faces an awkward " +
        "question: must it tolerate those who would dismantle tolerance itself? Some " +
        "thinkers insist that consistency demands unlimited tolerance. Yet this position " +
        "quietly assumes that the intolerant will play by rules they have already rejected. " +
        "The wiser course treats tolerance as a reciprocal arrangement: it is owed to " +
        "those who accept that disputes are settled by argument rather than by force. On " +
        "this reading, refusing to tolerate the violently intolerant is not a betrayal of " +
        "the principle but its defence.</p>" +
        "</blockquote>" +
        "<h3>Active-reading map for this passage</h3>" +
        "<ul>" +
        "<li><strong>Thesis:</strong> Refusing to tolerate the violently intolerant is " +
        "a defence — not a betrayal — of the principle of tolerance. (Final sentence.)</li>" +
        "<li><strong>Premise 1:</strong> Unlimited tolerance assumes intolerant actors " +
        "will follow the rules of debate — an assumption they have already rejected.</li>" +
        "<li><strong>Premise 2:</strong> Tolerance is best understood as a reciprocal " +
        "arrangement, not a blanket immunity.</li>" +
        "<li><strong>Hidden assumption:</strong> Extending freedoms to a movement that " +
        "rejects those freedoms actually assists that movement — otherwise the \"surrender\" " +
        "charge does not follow.</li>" +
        "<li><strong>Support:</strong> The reductio that a movement openly intending to " +
        "abolish debate cannot benefit from the protection of debate without undermining it.</li>" +
        "<li><strong>Strongest counterargument (raised and rebutted):</strong> Consistency " +
        "demands unlimited tolerance — raised in sentence 2, rebutted in sentence 3 " +
        "(\"quietly assumes\").</li>" +
        "</ul>" +
        "<h3>Daily newspaper practice</h3>" +
        "<p>The official LNAT preparation guide recommends reading quality opinion and " +
        "analysis journalism daily. Recommended sources include: <em>The Economist</em>, " +
        "<em>Financial Times</em>, <em>The Guardian</em>, <em>The Independent</em>, " +
        "<em>The Irish Times</em>, <em>The New York Times</em>, <em>The Scotsman</em>, " +
        "<em>The Times</em>, <em>The Washington Post</em>.</p>" +
        "<p>For each article you read, practise the five-point map above: find the thesis, " +
        "the premises, any hidden assumptions, the evidence, and the strongest objection. " +
        "10–15 minutes of this daily builds the habit that makes exam passages feel " +
        "manageable under time pressure.</p>",
      commonTraps: [
        "<strong>Reading for content, not structure:</strong> you do not need to know whether a claim is true — you need to know what role it plays in the argument.",
        "<strong>Getting lost in detail:</strong> on a first skim, resist the pull of interesting examples. Anchor to the thesis first, then note where examples appear so you can return to them.",
        "<strong>Forgetting the counterargument:</strong> LNAT passages almost always raise at least one objection. If you haven't found it, you may have misread a rebuttal as the author's own view.",
        "<strong>Skipping the last sentence:</strong> authors frequently place their thesis or main verdict at the end. Never skim the final sentence.",
        "<strong>Bringing in outside knowledge:</strong> the passage is a self-contained world. What you know about the topic is irrelevant; what the passage says is everything."
      ],
      strategyBox:
        "<p><strong>Strategy — the 90-second skim protocol:</strong></p>" +
        "<ol>" +
        "<li><strong>Read the first and last sentences of the passage</strong> in full. " +
        "These almost always anchor the thesis.</li>" +
        "<li><strong>Skim the first sentence of each body paragraph.</strong> These " +
        "usually state the paragraph's main point.</li>" +
        "<li><strong>Flag pivot words</strong> (yet, however, but, nevertheless) — they " +
        "mark where the author shifts or rebuts.</li>" +
        "<li><strong>Read the questions</strong> before going back for detail. The questions " +
        "tell you exactly which parts of the passage matter most.</li>" +
        "<li><strong>Read to answer, not to understand everything.</strong> You have " +
        "~2 minutes per question; use it efficiently.</li>" +
        "</ol>" +
        "<p><strong>Daily habit:</strong> pick one opinion piece from the recommended " +
        "newspaper list. Complete the five-point map in writing. Over 8 weeks this adds up " +
        "to 50+ mapped arguments — the single most effective preparation for Section A.</p>"
    }

  ); // end DATA.lessons.push

}(typeof window !== "undefined" ? window : global));
