/*
 * lessons-b.js — Section A instructional lessons for the LNAT study site.
 *
 * Covers: lesson-assume, lesson-opinion, lesson-vocab, lesson-tone,
 *         lesson-pacing, lesson-strategy.
 *
 * Delivery model: assigns into window.LNAT_DATA.lessons, which loader.js
 * creates before this script runs. English only. Source: illustrative.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] lessons-b.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * LESSON 1 — Identifying Assumptions (4a)
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-assume",
    title: "Identifying Assumptions (4a)",
    cluster: "Assumptions & Logical Gaps",
    explanation:
      "<p>An <strong>assumption</strong> is an unstated premise the argument <em>needs</em> " +
      "in order to reach its conclusion. It is the hidden step that bridges the evidence " +
      "the author provides to the claim they make. Without it, the conclusion would not " +
      "logically follow.</p>" +
      "<p>Key distinction: an assumption is not the same as an inference. An " +
      "<em>inference</em> is a conclusion the reader draws <em>from</em> the text. An " +
      "<em>assumption</em> is a premise the author relies on <em>before</em> the " +
      "conclusion is reached — it is something the author takes for granted but never " +
      "writes down.</p>",
    recognitionCues: [
      "Stem asks what the argument 'assumes', 'takes for granted', 'presupposes', or 'relies on'.",
      "Stem asks which option is 'necessary for the conclusion to hold'.",
      "You can spot a logical gap: the evidence jumps to the conclusion without explaining how.",
      "Look for a step the author skips — something that must be true for the argument to work."
    ],
    workedExample:
      "<h4>Worked Example 1</h4>" +
      "<p><strong>Passage extract:</strong> \"Schools that introduce daily physical activity " +
      "sessions report higher academic attainment. We should therefore make such sessions " +
      "compulsory in all schools.\"</p>" +
      "<p><strong>Question:</strong> Which of the following is an assumption the author " +
      "relies on?</p>" +
      "<ul>" +
      "<li>A. Physical activity improves cardiovascular health.</li>" +
      "<li>B. The attainment gains observed at some schools would transfer to all schools.</li>" +
      "<li>C. Academic attainment is the most important goal of education.</li>" +
      "<li>D. Schools already have facilities for physical activity.</li>" +
      "</ul>" +
      "<p><strong>Answer: B.</strong> The author moves from 'some schools report gains' to " +
      "'all schools should adopt this'. That jump only works if the gains would transfer — " +
      "a premise left unstated. Apply the <em>negation test</em>: if the gains would " +
      "<em>not</em> transfer to all schools, the argument collapses. That confirms B is the " +
      "assumption. A is true but irrelevant to the argument. C is broader than the argument " +
      "requires. D is a practical detail, not a logical premise.</p>" +
      "<h4>Worked Example 2</h4>" +
      "<p><strong>Passage extract:</strong> \"Crime rates fell sharply in the year after " +
      "the new sentencing guidelines were introduced. The guidelines are therefore working.\"</p>" +
      "<p><strong>Question:</strong> Which of the following is an assumption the argument " +
      "depends on?</p>" +
      "<ul>" +
      "<li>A. Judges have welcomed the new guidelines.</li>" +
      "<li>B. Crime rates are the only measure of whether sentencing policy succeeds.</li>" +
      "<li>C. The fall in crime was caused by the guidelines rather than by some other factor.</li>" +
      "<li>D. Sentencing guidelines have been introduced in other countries.</li>" +
      "</ul>" +
      "<p><strong>Answer: C.</strong> The author infers that the guidelines caused the drop. " +
      "That conclusion only holds if the guidelines actually caused it — not some coincidental " +
      "factor. Negating C ('the guidelines did not cause the fall') destroys the argument " +
      "entirely. B is too extreme — the argument does not require that crime rates are the " +
      "<em>only</em> measure. A and D are outside the argument's logic.</p>",
    commonTraps: [
      "Choosing a statement already made explicitly in the passage — assumptions are unstated by definition.",
      "Choosing an option that is broader or stronger than the argument actually requires.",
      "Confusing an assumption with an inference: the assumption is what the author silently accepts; the inference is what the reader concludes.",
      "Picking an option that is generally plausible but is not needed for this particular argument.",
      "Choosing a detail that would make the argument stronger but that the argument does not depend on."
    ],
    strategyBox:
      "<p><strong>Step 1 — Find the gap.</strong> Identify the conclusion and the " +
      "stated evidence. Ask: what unstated step connects them?</p>" +
      "<p><strong>Step 2 — Eliminate first.</strong> Cross out options that are " +
      "(a) already stated in the passage, (b) contradicted by the passage, or " +
      "(c) irrelevant to the specific conclusion being drawn.</p>" +
      "<p><strong>Step 3 — Negation test.</strong> For each remaining option, ask: " +
      "if this were false, would the argument fall apart? If yes, it is the assumption. " +
      "If the argument survives without it, it is not required.</p>" +
      "<p><strong>Step 4 — Stay within the argument's scope.</strong> The correct " +
      "assumption is the smallest premise the argument needs — not a broader claim that " +
      "would also support it.</p>"
  });

  /* ---------------------------------------------------------------------- *
   * LESSON 2 — Opinion vs Assumption (4b)
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-opinion",
    title: "Opinion vs Assumption (4b)",
    cluster: "Assumptions & Logical Gaps",
    explanation:
      "<p>This question type tests whether you can distinguish between two related " +
      "but different things:</p>" +
      "<ul>" +
      "<li><strong>Opinion:</strong> a view the author <em>explicitly states</em> or " +
      "clearly expresses. It is on the surface of the text. You can point to the sentence " +
      "where the author says it.</li>" +
      "<li><strong>Assumption:</strong> a premise the author <em>takes for granted</em> " +
      "without stating. It is beneath the surface — the hidden foundation the argument " +
      "rests on without the author acknowledging it.</li>" +
      "</ul>" +
      "<p>A common stem variant asks you to identify which option is an assumption rather " +
      "than an opinion, or vice versa. The key test: can you find the exact words in the " +
      "passage? If yes, it is an opinion (stated). If no, but the argument needs it, it " +
      "is an assumption (unstated).</p>",
    recognitionCues: [
      "Stem uses the phrase 'opinion' and 'assumption' in contrast: 'which is an assumption rather than an opinion?'",
      "Stem asks you to identify what the author 'expresses' vs what the author 'takes for granted'.",
      "Stem asks which option is 'stated' vs which is 'implicit' or 'presupposed'.",
      "The passage contains clearly signalled views (e.g., 'I believe', 'it is clear that', 'we should') — these are opinions."
    ],
    workedExample:
      "<h4>Worked Example</h4>" +
      "<p><strong>Passage extract:</strong> \"Social media is clearly bad for teenagers' " +
      "mental health. Platforms prioritise engagement over wellbeing, and that is " +
      "unacceptable. The government must act to regulate them.\"</p>" +
      "<p><strong>Question:</strong> Which of the following is an assumption the author " +
      "makes, rather than an opinion the author expresses?</p>" +
      "<ul>" +
      "<li>A. Social media is harmful to teenagers' mental health.</li>" +
      "<li>B. Prioritising engagement over wellbeing is unacceptable.</li>" +
      "<li>C. Government regulation would be effective at improving the situation.</li>" +
      "<li>D. Platforms are currently prioritising engagement over wellbeing.</li>" +
      "</ul>" +
      "<p><strong>Answer: C.</strong></p>" +
      "<ul>" +
      "<li>A is an <em>opinion</em> — stated explicitly in sentence 1 ('clearly bad').</li>" +
      "<li>B is an <em>opinion</em> — stated explicitly ('that is unacceptable').</li>" +
      "<li>D is a <em>stated fact-claim</em> — stated explicitly in sentence 2.</li>" +
      "<li>C is an <em>assumption</em> — the author says 'the government must act', but " +
      "never states that regulation would actually work. The call to action only makes " +
      "sense if regulation is assumed to be effective — an unstated premise.</li>" +
      "</ul>",
    commonTraps: [
      "Picking an opinion (something clearly stated) and calling it an assumption — check whether you can find the words in the passage.",
      "Confusing an assumption with an inference: an inference is what you conclude from the text; an assumption is what the author silently relies on.",
      "Choosing a very broad claim that seems unstated but is not actually needed by the argument.",
      "Missing the assumption because it seems too obvious — the most necessary premises are often the ones we overlook."
    ],
    strategyBox:
      "<p><strong>The two-question test:</strong></p>" +
      "<ol>" +
      "<li>Can I find this claim written (or clearly paraphrased) in the passage? " +
      "→ If yes, it is an <strong>opinion</strong> or stated fact.</li>" +
      "<li>Does the argument need this claim to be true, even though it is never written? " +
      "→ If yes, it is an <strong>assumption</strong>.</li>" +
      "</ol>" +
      "<p>Work through all four options using this test. The assumption will be the one " +
      "that passes test 2 but fails test 1. Remember that a well-written opinion passage " +
      "may contain several stated opinions — do not confuse 'not repeated often' with " +
      "'unstated'.</p>"
  });

  /* ---------------------------------------------------------------------- *
   * LESSON 3 — Meaning-in-Context / Vocabulary (5a)
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-vocab",
    title: "Meaning-in-Context / Vocabulary (5a)",
    cluster: "Language, Style & Vocabulary",
    explanation:
      "<p>This question type asks what a specific word or phrase <em>means as used in " +
      "the passage</em> — not what it means in a dictionary. The LNAT uses this type to " +
      "test whether you read carefully and draw meaning from context rather than relying " +
      "on a word's most familiar sense.</p>" +
      "<p>The trap is almost always a common or familiar meaning of the word that fits " +
      "everyday usage but does not fit what the author is doing in this particular " +
      "sentence. Contextual meaning can be narrower, broader, or simply different from " +
      "the standard definition.</p>",
    recognitionCues: [
      "Stem uses phrases like 'as used in the passage', 'in this context', 'most nearly means', or 'the author uses the word X to mean'.",
      "A single word or short phrase is quoted and placed in quotation marks.",
      "The word has more than one common meaning, or is used in a technical or unusual sense in the passage.",
      "One answer option uses the word's most common everyday meaning — this is usually the trap."
    ],
    workedExample:
      "<h4>Worked Example 1</h4>" +
      "<p><strong>Passage extract:</strong> \"The committee's report was a <em>frank</em> " +
      "assessment of the agency's failures, sparing neither the leadership nor the " +
      "culture that had allowed the problems to develop.\"</p>" +
      "<p><strong>Question:</strong> As used in the passage, 'frank' most nearly means:</p>" +
      "<ul>" +
      "<li>A. Written by someone called Frank.</li>" +
      "<li>B. Openly honest and direct, especially about uncomfortable truths.</li>" +
      "<li>C. Official and legally binding.</li>" +
      "<li>D. Brief and easy to understand.</li>" +
      "</ul>" +
      "<p><strong>Answer: B.</strong> The surrounding context — 'sparing neither the " +
      "leadership nor the culture' — shows that 'frank' here means unflinchingly honest. " +
      "A is a homophone trap. C and D import meanings not supported by the text.</p>" +
      "<h4>Worked Example 2</h4>" +
      "<p><strong>Passage extract:</strong> \"By the end of the decade, the movement had " +
      "become <em>calcified</em>: its founders still occupied every major position, its " +
      "founding texts still treated as beyond question.\"</p>" +
      "<p><strong>Question:</strong> As used in the passage, 'calcified' most nearly means:</p>" +
      "<ul>" +
      "<li>A. Grown larger and more powerful.</li>" +
      "<li>B. Become rigid and resistant to change.</li>" +
      "<li>C. Suffered a sudden collapse.</li>" +
      "<li>D. Achieved widespread popular support.</li>" +
      "</ul>" +
      "<p><strong>Answer: B.</strong> 'Calcified' literally refers to hardening (as bone " +
      "does). The context — founders unmoved, founding texts unchallenged — confirms the " +
      "figurative sense: rigid, unchanging, closed to new ideas. The other options " +
      "contradict the image of stagnation the passage builds.</p>",
    commonTraps: [
      "Choosing the most familiar dictionary meaning of the word without checking it against the context.",
      "Choosing an option that uses the literal meaning when the passage is using a figurative one (or vice versa).",
      "Choosing an option that is too broad — a contextual meaning is usually more specific than the general definition.",
      "Being fooled by a word that sounds like another word (homophone or near-homophone trap).",
      "Ignoring the surrounding sentences — context clues are nearly always in the same or adjacent sentence."
    ],
    strategyBox:
      "<p><strong>Step 1 — Cover the options first.</strong> Re-read the sentence " +
      "containing the word and the one before and after it. Try to paraphrase what the " +
      "word means in your own words before looking at the options.</p>" +
      "<p><strong>Step 2 — Substitute and test.</strong> Replace the quoted word with each " +
      "answer option in turn. Which substitution preserves the meaning of the sentence most " +
      "naturally?</p>" +
      "<p><strong>Step 3 — Watch for the dictionary-meaning trap.</strong> If one option " +
      "is the word's most familiar everyday sense, treat it with suspicion — it is often " +
      "there to catch readers who do not check the context.</p>" +
      "<p><strong>Step 4 — Use elimination.</strong> Knock out options that are contradicted " +
      "by the surrounding sentences. The correct answer must be compatible with everything " +
      "the passage says in that section.</p>"
  });

  /* ---------------------------------------------------------------------- *
   * LESSON 4 — Tone / Attitude via Language (5b)
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-tone",
    title: "Tone / Attitude via Language (5b)",
    cluster: "Language, Style & Vocabulary",
    explanation:
      "<p>Tone questions ask you to identify how the author (or a character/source " +
      "quoted in the passage) feels about a subject, based on the language they use. " +
      "Unlike standpoint questions (which focus on what the author argues), tone questions " +
      "focus on <em>how</em> the argument is expressed — the emotional register, attitude, " +
      "and degree of certainty conveyed by word choice.</p>" +
      "<p>Common tones tested on the LNAT: critical, sceptical, cautious/hedged, " +
      "ironic/satirical, admiring, neutral/objective, indignant, pessimistic, " +
      "optimistic, measured/balanced.</p>" +
      "<p>Evidence for tone always comes from specific word choices — adjectives, " +
      "adverbs, verbs, and loaded phrases. Never pick a tone label that you cannot " +
      "support by pointing to actual words in the passage.</p>",
    recognitionCues: [
      "Stem asks about the 'tone', 'attitude', 'mood', or 'register' of a passage or quoted phrase.",
      "Stem quotes a specific phrase and asks what it 'chiefly conveys' or 'suggests about the author's attitude'.",
      "Answer options are tone adjectives: 'critical', 'ironic', 'cautious', 'admiring', 'sceptical', etc.",
      "Look for loaded language: strong verbs, evaluative adjectives, qualifiers, rhetorical questions, and hedging words."
    ],
    workedExample:
      "<h4>Worked Example 1 — Irony</h4>" +
      "<p><strong>Passage extract:</strong> \"The minister's announcement that the project " +
      "was 'on track and on budget' came just days before the official report revealed " +
      "costs had doubled and the opening had been delayed by three years. One can only " +
      "admire the optimism.\"</p>" +
      "<p><strong>Question:</strong> The phrase 'one can only admire the optimism' " +
      "conveys a tone that is chiefly:</p>" +
      "<ul>" +
      "<li>A. Genuinely complimentary.</li>" +
      "<li>B. Ironic and critical.</li>" +
      "<li>C. Puzzled and uncertain.</li>" +
      "<li>D. Sorrowful and sympathetic.</li>" +
      "</ul>" +
      "<p><strong>Answer: B.</strong> 'One can only admire' appears to praise, but the " +
      "context — costs doubled, three-year delay — makes the praise clearly sarcastic. " +
      "Irony uses the surface of a compliment to deliver a criticism. A takes the surface " +
      "reading at face value. C and D are not supported by the confident, sharp phrasing.</p>" +
      "<h4>Worked Example 2 — Hedged/Cautious</h4>" +
      "<p><strong>Passage extract:</strong> \"These early results are suggestive rather " +
      "than conclusive. It would be premature to draw firm policy recommendations from " +
      "a sample of this size, though the direction of the findings may be worth " +
      "monitoring.\"</p>" +
      "<p><strong>Question:</strong> The author's tone in this extract is best described as:</p>" +
      "<ul>" +
      "<li>A. Dismissive of the findings.</li>" +
      "<li>B. Enthusiastic and confident.</li>" +
      "<li>C. Cautious and appropriately qualified.</li>" +
      "<li>D. Indignant at the limitations of the study.</li>" +
      "</ul>" +
      "<p><strong>Answer: C.</strong> 'Suggestive rather than conclusive', 'premature', " +
      "and 'may be worth monitoring' are all hedging expressions that carefully limit the " +
      "claim. The author does not dismiss or celebrate — they qualify. A misreads " +
      "qualification as dismissal. B ignores the hedges. D reads anger into a calm, " +
      "measured passage.</p>",
    commonTraps: [
      "Reading the tone of the subject matter rather than the author's tone — a passage about something depressing is not necessarily written in a depressed tone.",
      "Taking surface language at face value and missing irony — always check whether the context reverses the apparent meaning.",
      "Choosing a tone that is too extreme ('furious', 'delighted') when the passage is measured and qualified.",
      "Confusing the tone of a quoted source with the author's own tone.",
      "Ignoring hedging words (may, might, perhaps, arguably) that signal a cautious rather than a confident tone."
    ],
    strategyBox:
      "<p><strong>Step 1 — Collect the evidence words.</strong> Underline or note the " +
      "specific adjectives, verbs, and adverbs that carry feeling or evaluation in the " +
      "relevant section.</p>" +
      "<p><strong>Step 2 — Check for irony.</strong> If the language sounds positive but " +
      "the context is negative (or vice versa), the author is probably being ironic.</p>" +
      "<p><strong>Step 3 — Gauge intensity.</strong> Is the tone strong (outraged, " +
      "enthusiastic) or moderate (mildly critical, cautiously optimistic)? Passages on " +
      "the LNAT tend toward measured rather than extreme tones.</p>" +
      "<p><strong>Step 4 — Eliminate by evidence.</strong> For each option, ask: can I " +
      "point to at least one phrase in the passage that supports this tone label? If you " +
      "cannot, eliminate the option.</p>"
  });

  /* ---------------------------------------------------------------------- *
   * LESSON 5 — Pacing Strategy
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-pacing",
    title: "Pacing Strategy for Section A",
    cluster: "Exam Technique",
    explanation:
      "<p>Section A gives you <strong>95 minutes</strong> to answer <strong>42 questions</strong> " +
      "across <strong>12 passages</strong>. That is roughly <strong>8 minutes per " +
      "passage</strong> and <strong>2 minutes per question</strong>. Without a deliberate " +
      "pacing strategy, it is easy to spend 12 minutes on an early passage and arrive at " +
      "the last two with almost no time left.</p>" +
      "<p>The single most important pacing rule: <strong>there is no negative marking</strong>. " +
      "Every unanswered question costs you a mark. Every guessed answer costs you nothing " +
      "extra. You must always enter an answer, even if you are uncertain.</p>",
    recognitionCues: [
      "This is a strategy lesson — there is no question stem to recognise. Apply this routine at the start of every timed practice session."
    ],
    workedExample:
      "<h4>The 8-Minute Passage Routine</h4>" +
      "<p><strong>Minutes 0–1.5: Skim the passage for argument and structure.</strong><br>" +
      "Read the first and last paragraph fully. Skim the middle for topic sentences only. " +
      "Ask yourself: What is the author's main claim? How is the argument structured? " +
      "Do not read word-for-word at this stage.</p>" +
      "<p><strong>Minutes 1.5–2: Read the question stems (not the options yet).</strong><br>" +
      "Knowing what the questions ask before you re-read helps you read actively. " +
      "For a vocab question, you know which paragraph to focus on. For a structure " +
      "question, you know to track the argument map.</p>" +
      "<p><strong>Minutes 2–6: Answer each question.</strong><br>" +
      "Allow roughly 1.5–2 minutes per question. For each:" +
      "<ol>" +
      "<li>Re-read the relevant section of the passage (10–20 seconds).</li>" +
      "<li>Eliminate the two obviously wrong options.</li>" +
      "<li>Discriminate between the final two.</li>" +
      "<li>Commit and move on.</li>" +
      "</ol></p>" +
      "<p><strong>Minutes 6–8: Review flagged questions only.</strong><br>" +
      "If you marked any question as uncertain during step 3, return to it now. " +
      "Do not re-read questions you have already answered confidently.</p>" +
      "<h4>The Mark-and-Move Rule</h4>" +
      "<p>If a question is taking more than 2.5 minutes, mark your best current guess, " +
      "flag it, and move on. Return at the end of the passage's time block. Never stall " +
      "on one question while the rest of the passage runs out of time.</p>" +
      "<h4>Whole-Paper Checkpoints</h4>" +
      "<table style='width:100%;border-collapse:collapse'>" +
      "<tr><th style='text-align:left;padding:4px 8px'>Checkpoint</th><th style='text-align:left;padding:4px 8px'>Target time remaining</th></tr>" +
      "<tr><td style='padding:4px 8px'>After passage 4 (Q 1–14 approx.)</td><td style='padding:4px 8px'>~63 min left</td></tr>" +
      "<tr><td style='padding:4px 8px'>After passage 8 (Q 1–28 approx.)</td><td style='padding:4px 8px'>~31 min left</td></tr>" +
      "<tr><td style='padding:4px 8px'>After passage 11 (Q 1–38 approx.)</td><td style='padding:4px 8px'>~8 min left</td></tr>" +
      "<tr><td style='padding:4px 8px'>Final 5 minutes</td><td style='padding:4px 8px'>Resolve all flagged Qs; fill every blank</td></tr>" +
      "</table>",
    commonTraps: [
      "Reading the full passage word-for-word before looking at the questions — this wastes the first 2–3 minutes of your budget.",
      "Spending more than 3 minutes on a single question — mark a best guess, flag it, and return later.",
      "Leaving questions blank because you are not sure — there is no penalty for guessing; a blank is a guaranteed zero.",
      "Re-reading the whole passage for every question — most questions point to a specific paragraph; locate it, then answer.",
      "Not checking the clock at the passage-4 and passage-8 checkpoints — small overruns compound into a disaster by passage 12."
    ],
    strategyBox:
      "<p><strong>The core rule: 8 minutes per passage, 2 minutes per question, guess everything.</strong></p>" +
      "<p><strong>Your passage routine:</strong> Skim (1.5 min) → Read stems (0.5 min) → " +
      "Answer + eliminate (4 min) → Review flagged (2 min).</p>" +
      "<p><strong>Clock checkpoints:</strong> Check remaining time after passages 4, 8, and 11. " +
      "Adjust pace immediately if you are behind — do not wait until the last passage.</p>" +
      "<p><strong>Always guess.</strong> In the final 2 minutes, fill every unanswered " +
      "question with any option. A guess has a 25% chance of a mark; a blank has 0%.</p>"
  });

  /* ---------------------------------------------------------------------- *
   * LESSON 6 — Overall Section A Strategy
   * ---------------------------------------------------------------------- */
  DATA.lessons.push({
    id: "lesson-strategy",
    title: "Overall Section A Approach",
    cluster: "Exam Technique",
    explanation:
      "<p>Section A is not a reading-speed test. It is a <strong>precision-reasoning " +
      "test</strong>. Most marks are lost not because students run out of time, but because " +
      "they pick options that are plausible in the real world yet unsupported by the " +
      "passage — the single most common mistake identified across LNAT preparation guides.</p>" +
      "<p>The golden rule: <strong>every correct answer must be justified by evidence " +
      "within the passage</strong>. Outside knowledge, personal opinion, and general " +
      "plausibility are traps, not shortcuts.</p>",
    recognitionCues: [
      "This is a strategy lesson — apply it as your default approach to every Section A passage."
    ],
    workedExample:
      "<h4>The Three-Phase Approach to Every Passage</h4>" +
      "<p><strong>Phase 1 — Skim for argument and structure (60–90 seconds)</strong></p>" +
      "<ul>" +
      "<li>Read the first and last paragraph in full.</li>" +
      "<li>Skim the middle for topic sentences and discourse markers " +
      "('however', 'therefore', 'yet', 'on the other hand').</li>" +
      "<li>Identify: What is the main claim? What is the main evidence? " +
      "Is there a counterargument?</li>" +
      "<li>Do not try to memorise details at this stage.</li>" +
      "</ul>" +
      "<p><strong>Phase 2 — Read the stem before re-reading the passage</strong></p>" +
      "<ul>" +
      "<li>For each question, read the stem <em>carefully</em> before looking at the options.</li>" +
      "<li>Classify the question type: Is it asking for the main idea, an assumption, a " +
      "word meaning, a tone, an inference? The question type tells you what to look for.</li>" +
      "<li>Return to the relevant section of the passage — not the whole thing.</li>" +
      "<li>Form a provisional answer in your head before reading the options.</li>" +
      "</ul>" +
      "<p><strong>Phase 3 — Eliminate clearly wrong, then discriminate the final two</strong></p>" +
      "<ul>" +
      "<li><strong>Round 1 — Clear eliminations:</strong> knock out options that " +
      "contradict the passage, use extreme language not justified by the text, or introduce " +
      "ideas entirely absent from the passage.</li>" +
      "<li><strong>Round 2 — Discriminate:</strong> compare the remaining options directly. " +
      "Which is better supported by the passage? Which is more precisely worded? " +
      "The wrong option is often almost-right but goes slightly too far, adds a detail " +
      "not in the text, or uses the right words in the wrong sense.</li>" +
      "</ul>" +
      "<h4>The Outside-Knowledge Trap (the Most Common Mistake)</h4>" +
      "<p>LNAT passages are self-contained. An option may be true in the world — " +
      "something you know from school, current affairs, or common sense — but if the " +
      "passage does not support it, it is wrong. If you catch yourself thinking " +
      "'well, everyone knows that...', stop. Go back to the text.</p>" +
      "<h4>Handling 'Almost Right' Options</h4>" +
      "<p>The hardest questions set two options that are both related to the passage. " +
      "The wrong one will differ in one of these ways:</p>" +
      "<ul>" +
      "<li><strong>Scope creep:</strong> makes a broader claim than the passage supports.</li>" +
      "<li><strong>Verb shift:</strong> the passage says 'suggests' but the option says 'proves'.</li>" +
      "<li><strong>Wrong part:</strong> the content is from the passage but it answers a " +
      "different question than the stem asks.</li>" +
      "<li><strong>Missing qualifier:</strong> the passage hedges ('may', 'some') but the " +
      "option drops the qualifier and makes an absolute claim.</li>" +
      "</ul>",
    commonTraps: [
      "Using outside knowledge — the most frequent error on Section A. Stick to what the passage says.",
      "Choosing a plausible-but-unsupported inference — 'it makes sense in the world' is not the same as 'the passage supports it'.",
      "Misreading the stem: confusing 'implies' with 'states', or 'assumption' with 'conclusion'.",
      "Pattern-matching: recognising a word from the passage in an option and assuming the option must be right — check the full context.",
      "Abandoning your first eliminations under time pressure — if you carefully crossed something out, trust that reasoning.",
      "Doing only untimed practice — always train with a clock running to build the real exam reflex."
    ],
    strategyBox:
      "<p><strong>The five habits of a high-scoring Section A reader:</strong></p>" +
      "<ol>" +
      "<li><strong>Skim first.</strong> Build an argument map in your head before you answer anything.</li>" +
      "<li><strong>Read the stem before the options.</strong> Know what you are looking for before you are tempted by the choices.</li>" +
      "<li><strong>Eliminate in two rounds.</strong> Clear contradictions first, then discriminate the survivors.</li>" +
      "<li><strong>Stay within the passage.</strong> Every answer you choose must be traceable to specific words or sentences in the text.</li>" +
      "<li><strong>Keep moving.</strong> Mark a best guess, flag the question, and move on if you stall. Return only if time allows.</li>" +
      "</ol>" +
      "<p><strong>Before every practice session, ask:</strong> Am I staying within the passage? " +
      "Am I reading stems carefully? Am I managing time? These are the three levers that move your score.</p>"
  });

})(typeof window !== "undefined" ? window : this);
