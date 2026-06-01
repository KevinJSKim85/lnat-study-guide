/*
 * lessons-c.js — supplementary Section A / Section B lessons for the LNAT study site.
 *
 * Adds two lessons that the original lessons-a.js / lessons-b.js did not cover:
 *   lesson-flaw         — "Spotting Argument Flaws" (cluster: Argument Flaws).
 *                         The canonical informal-fallacy catalogue, framed for how
 *                         flaws surface inside structure (1c) and assumption (4a/4b)
 *                         questions.
 *   lesson-prompttypes  — "Reading the Essay Prompt" (cluster: Section B Technique).
 *                         How the five Section-B prompt formats change the approach,
 *                         with a tailored opening-paragraph template + stance sentence
 *                         for each.
 *
 * Delivery model: pushes into window.LNAT_DATA.lessons (created by loader.js).
 * Must load AFTER loader.js. English only. Lessons carry no source field
 * (SCHEMA §3.6). Object shape matches lessons-a/-b exactly:
 *   id, title, cluster, explanation, recognitionCues[], workedExample,
 *   commonTraps[], strategyBox.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] lessons-c.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  if (!Array.isArray(DATA.lessons)) { DATA.lessons = []; }

  DATA.lessons.push(

    /* ------------------------------------------------------------------ */
    /* lesson-flaw — Spotting Argument Flaws                              */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-flaw",
      title: "Spotting Argument Flaws",
      cluster: "Argument Flaws",
      explanation:
        "<p>An <strong>argument flaw</strong> is a defect in reasoning: the conclusion " +
        "does not follow from the premises, even when each premise looks plausible on " +
        "its own. The LNAT rarely labels a flaw for you. Instead it hides one inside a " +
        "passage and then asks a <em>structure</em> question (\"What is the main weakness " +
        "of the argument?\", \"The reasoning is most vulnerable to which criticism?\") or " +
        "an <em>assumption</em> question (\"Which assumption does the argument depend on?\"). " +
        "Naming the flaw is the fastest route to the answer, because most flaws have a " +
        "matching repair — the missing premise the author needs — and that repair is " +
        "usually the assumption the question is testing.</p>" +
        "<p>This lesson catalogues the nine flaws that recur most often in LNAT passages. " +
        "For each you get: what it is, how it tends to appear in a passage, a one-line " +
        "worked example, and the tell that lets you spot it under time pressure. You do " +
        "not need to memorise the Latin names — you need to recognise the <em>shape</em> " +
        "of each bad inference.</p>" +

        "<h3>1. Correlation vs causation (and <em>post hoc</em>)</h3>" +
        "<p><strong>What it is:</strong> treating two things that occur together, or one " +
        "after the other, as proof that the first <em>causes</em> the second. <em>Post hoc " +
        "ergo propter hoc</em> (\"after this, therefore because of this\") is the time-order " +
        "version. The argument ignores three live possibilities: reverse causation (B causes " +
        "A), a common third cause (C drives both), or coincidence.</p>" +
        "<p><strong>How it appears:</strong> a statistic is paired with a confident causal " +
        "verb — \"areas that introduced CCTV saw crime fall, so CCTV cuts crime\"; \"students " +
        "who eat breakfast score higher, so breakfast raises attainment.\"</p>" +
        "<p><strong>Spot it:</strong> the data establish only that two things move together; " +
        "the conclusion asserts that one <em>produces</em> the other. Ask: could the arrow run " +
        "the other way, or could something else explain both?</p>" +

        "<h3>2. False dichotomy (false dilemma)</h3>" +
        "<p><strong>What it is:</strong> presenting two options as the only ones available, " +
        "then eliminating one to force the other, when further options or a middle ground " +
        "exist.</p>" +
        "<p><strong>How it appears:</strong> \"Either we cut public spending or the economy " +
        "collapses\"; \"You either support the surveillance programme or you are soft on " +
        "terrorism.\"</p>" +
        "<p><strong>Spot it:</strong> look for \"either…or\", \"the only choice\", \"there is " +
        "no alternative\". Then ask whether a third position has been quietly written out.</p>" +

        "<h3>3. Hasty generalisation</h3>" +
        "<p><strong>What it is:</strong> drawing a broad conclusion from a sample that is too " +
        "small, unrepresentative, or self-selected to support it.</p>" +
        "<p><strong>How it appears:</strong> an anecdote or a single case is treated as a " +
        "rule — \"My grandfather smoked and lived to ninety, so the health warnings are " +
        "overblown\"; \"Two start-ups in this sector failed, so the sector is doomed.\"</p>" +
        "<p><strong>Spot it:</strong> the conclusion uses sweeping words (\"all\", \"always\", " +
        "\"never\", \"people\") while the evidence is one or two instances. Mismatch between " +
        "the breadth of the claim and the thinness of the support is the tell.</p>" +

        "<h3>4. Circular reasoning (begging the question)</h3>" +
        "<p><strong>What it is:</strong> the conclusion is smuggled into the premises, so the " +
        "argument assumes the very thing it claims to prove.</p>" +
        "<p><strong>How it appears:</strong> often disguised by rewording — \"The policy is " +
        "the right one because it is the correct approach\"; \"He is trustworthy because he " +
        "would never lie.\"</p>" +
        "<p><strong>Spot it:</strong> strip the rephrasing. If the reason and the conclusion " +
        "say the same thing in different words, no independent support has been offered.</p>" +

        "<h3>5. Straw man</h3>" +
        "<p><strong>What it is:</strong> misrepresenting an opponent's position as a weaker or " +
        "more extreme version, refuting that, and claiming victory over the real position.</p>" +
        "<p><strong>How it appears:</strong> \"Critics of the scheme want no security checks " +
        "at all\" (when they want proportionate ones); the rebuttal then targets the cartoon, " +
        "not the actual view.</p>" +
        "<p><strong>Spot it:</strong> compare the position as the author <em>describes</em> it " +
        "with the position a reasonable opponent would actually hold. If the described version " +
        "is conveniently feeble, suspect a straw man.</p>" +

        "<h3>6. Slippery slope</h3>" +
        "<p><strong>What it is:</strong> claiming that one modest step must lead, through a " +
        "chain of steps, to an extreme outcome, without justifying each link in the chain.</p>" +
        "<p><strong>How it appears:</strong> \"If we allow assisted dying for the terminally " +
        "ill, soon the elderly will be pressured to die to save money\"; \"Relax this rule and " +
        "the whole system unravels.\"</p>" +
        "<p><strong>Spot it:</strong> the argument leaps from a first step to a feared endpoint " +
        "while assuming the intermediate steps are inevitable. Ask whether each link is actually " +
        "supported or merely asserted.</p>" +

        "<h3>7. Equivocation</h3>" +
        "<p><strong>What it is:</strong> a key word shifts meaning between premises, so the " +
        "argument only seems valid because the same word is doing two different jobs.</p>" +
        "<p><strong>How it appears:</strong> \"A feather is light; what is light cannot be " +
        "dark; therefore a feather cannot be dark\" — \"light\" slides from <em>weight</em> to " +
        "<em>colour</em>. In real passages the slippery word is usually abstract: \"freedom\", " +
        "\"natural\", \"equal\", \"right\".</p>" +
        "<p><strong>Spot it:</strong> if a central term reappears, check it carries the same " +
        "meaning each time. A quiet change of sense is the flaw.</p>" +

        "<h3>8. Scope error</h3>" +
        "<p><strong>What it is:</strong> the conclusion is wider, narrower, or otherwise " +
        "different in scope from what the premises actually license — for example sliding from " +
        "\"some\" to \"all\", from \"may\" to \"will\", or from \"on average\" to \"in every " +
        "case\".</p>" +
        "<p><strong>How it appears:</strong> evidence about a part is used to license a claim " +
        "about the whole — \"The drug helped most patients in the trial, so it will help this " +
        "patient\"; \"Some regulation is harmful, therefore regulation is harmful.\"</p>" +
        "<p><strong>Spot it:</strong> watch the quantifiers and modal verbs. A conclusion that " +
        "quietly strengthens \"some\" into \"all\", or \"can\" into \"must\", has over-reached " +
        "its evidence.</p>" +

        "<h3>9. False analogy</h3>" +
        "<p><strong>What it is:</strong> reasoning that because two things are alike in some " +
        "respects they must be alike in the respect under discussion, when the relevant " +
        "differences defeat the comparison.</p>" +
        "<p><strong>How it appears:</strong> \"Running a country is like running a business, so " +
        "the state should be run for profit\"; \"Banning books is like banning ideas.\"</p>" +
        "<p><strong>Spot it:</strong> identify the feature the conclusion turns on, then ask " +
        "whether the two cases really share <em>that</em> feature — not merely some other, " +
        "irrelevant similarity.</p>" +

        "<h3>Why this sits inside structure and assumption questions</h3>" +
        "<p>LNAT writers seldom ask \"name the fallacy\". They ask which criticism the argument " +
        "is <em>most vulnerable</em> to (a structure question) or which assumption it " +
        "<em>relies on</em> (an assumption question). A flaw and its assumption are two sides of " +
        "one coin: a correlation-causation flaw <em>assumes</em> no third cause; a slippery-slope " +
        "flaw <em>assumes</em> each link follows; a false dichotomy <em>assumes</em> no third " +
        "option. Name the flaw and the required assumption — and therefore the answer — usually " +
        "falls out at once.</p>",
      recognitionCues: [
        "Structure-question stems: \"The argument is most vulnerable to the criticism that…\", \"Which of the following identifies a weakness in the reasoning?\", \"The author's reasoning is flawed because…\".",
        "Assumption-question stems that pair with a flaw: \"The argument assumes that…\", \"The conclusion depends on the assumption that…\".",
        "A confident causal verb (\"causes\", \"leads to\", \"produces\") attached to evidence that only shows two things occur together — correlation vs causation.",
        "\"Either…or\", \"the only option\", \"there is no alternative\" — candidate false dichotomy.",
        "A sweeping conclusion (\"all\", \"always\", \"never\", \"everyone\") resting on one or two examples — candidate hasty generalisation.",
        "A reason that merely restates the conclusion in new words — candidate circular reasoning.",
        "An opponent's view described in a conveniently weak or extreme form — candidate straw man.",
        "A leap from a small first step to a catastrophic endpoint — candidate slippery slope.",
        "A key abstract term (\"freedom\", \"natural\", \"right\") that appears to change meaning between sentences — candidate equivocation.",
        "Quantifier or modal drift (\"some\"→\"all\", \"may\"→\"will\", \"on average\"→\"in every case\") — candidate scope error.",
        "A comparison (\"is just like\", \"is no different from\") doing the argumentative heavy lifting — candidate false analogy."
      ],
      workedExample:
        "<h3>Passage extract</h3>" +
        "<blockquote>" +
        "<p>Since the city installed speed cameras on the ring road, the number of recorded " +
        "accidents on that stretch has fallen by a third. The cameras are plainly working, and " +
        "the council should now install them on every major road in the region. The only people " +
        "who object are those who enjoy driving dangerously; a responsible motorist has nothing " +
        "to fear from a camera that simply records the speed at which a car is travelling.</p>" +
        "</blockquote>" +
        "<h3>Sample question</h3>" +
        "<p>The argument is most vulnerable to the criticism that it …</p>" +
        "<ol type='A'>" +
        "<li>relies on a sample of one road to justify a region-wide policy.</li>" +
        "<li>assumes the fall in accidents was caused by the cameras rather than by some other " +
        "change.</li>" +
        "<li>treats anyone who objects to the cameras as a dangerous driver.</li>" +
        "<li>fails to define what counts as a 'major road'.</li>" +
        "</ol>" +
        "<h3>Reasoning to the answer</h3>" +
        "<p>This short passage actually contains <em>three</em> flaws, and the skill is choosing " +
        "the one the question rewards. The phrase \"most vulnerable\" asks for the criticism that " +
        "does the most damage to the <em>central</em> inference.</p>" +
        "<ul>" +
        "<li>The central claim is that the cameras <em>caused</em> the fall in accidents (\"the " +
        "cameras are plainly working\"). That is a <strong>correlation-vs-causation</strong> flaw: " +
        "the accident drop might owe to roadworks, a new speed limit, milder weather, or general " +
        "traffic decline. This is the load-bearing weakness — so <strong>B is correct</strong>.</li>" +
        "<li>Option A names a real <strong>hasty-generalisation / scope</strong> problem (one road " +
        "→ every road), but it attacks the <em>extension</em> of the policy, not the core claim " +
        "that the cameras worked. It is a genuine flaw, just not the primary one the stem targets.</li>" +
        "<li>Option C names the <strong>false-dichotomy / straw-man</strong> move in the last " +
        "sentence (objectors = dangerous drivers). Again real, but peripheral to the causal claim.</li>" +
        "<li>Option D is a distraction: a missing definition is not what undermines the reasoning.</li>" +
        "</ul>" +
        "<p>Notice how naming the flaw converts directly into the answer. \"The cameras caused the " +
        "fall\" depends on the assumption \"nothing else explains the fall\"; option B is simply " +
        "that assumption stated as a vulnerability. When a structure question offers several true " +
        "criticisms, pick the one aimed at the <em>main conclusion</em>, not at a side remark.</p>",
      commonTraps: [
        "<strong>Picking a real but secondary flaw.</strong> Passages often contain two or three flaws; a \"most vulnerable\" stem rewards the one attacking the <em>central</em> inference, not a peripheral aside.",
        "<strong>Confusing the flaw with its repair.</strong> The assumption (the missing premise) and the flaw (the gap it leaves) describe the same defect from opposite directions — match the wording of the stem to the wording of the option.",
        "<strong>Treating a strong correlation as causation because it 'feels' causal.</strong> Plausibility is not support; the data still only show co-occurrence.",
        "<strong>Reading a cautious claim as the flaw it resembles.</strong> \"X may contribute to Y\" is not a causation flaw; the flaw appears only when the conclusion <em>asserts</em> the cause.",
        "<strong>Mistaking a valid analogy for a false one.</strong> An analogy is only flawed if the cases differ in the specific respect the conclusion turns on — a mere surface difference does not defeat it.",
        "<strong>Inventing a flaw the passage does not commit.</strong> If every link in a chain <em>is</em> argued, it is not a slippery slope; do not penalise an author for reasoning you simply find unwelcome."
      ],
      strategyBox:
        "<p><strong>Strategy — flaw-hunting in four moves:</strong></p>" +
        "<ol>" +
        "<li><strong>Find the conclusion first.</strong> Underline the sentence the author most " +
        "wants you to accept. Every flaw is a flaw <em>relative to that conclusion</em>.</li>" +
        "<li><strong>Test the link, not the facts.</strong> Assume the premises are true, then " +
        "ask: does the conclusion really follow? A flaw lives in the gap between true-looking " +
        "premises and an over-reaching conclusion.</li>" +
        "<li><strong>Run the nine-flaw checklist.</strong> Causation? Dichotomy? Hasty " +
        "generalisation? Circularity? Straw man? Slippery slope? Equivocation? Scope? Analogy? " +
        "One usually fits.</li>" +
        "<li><strong>Match flaw to stem.</strong> For a <em>weakness</em> question, state the gap; " +
        "for an <em>assumption</em> question, state the premise that would close it. Then pick the " +
        "option whose words mirror yours.</li>" +
        "</ol>" +
        "<p><strong>Time check:</strong> if two options both name true flaws, ask which one, if " +
        "<em>true</em>, would most damage the main conclusion — and choose that. Do not get drawn " +
        "into defending a side remark.</p>"
    },

    /* ------------------------------------------------------------------ */
    /* lesson-prompttypes — Reading the Essay Prompt                      */
    /* ------------------------------------------------------------------ */
    {
      id: "lesson-prompttypes",
      title: "Reading the Essay Prompt",
      cluster: "Section B Technique",
      explanation:
        "<p>Section B gives you three prompts and forty minutes to answer one. Most candidates " +
        "lose marks not because they lack ideas but because they answer the prompt they " +
        "<em>expected</em> rather than the one in front of them. Different prompt formats demand " +
        "different jobs. A \"Discuss\" prompt that you treat like a \"Do you agree?\" prompt will " +
        "read as fence-sitting; a \"What is X?\" prompt answered as a yes/no debate will read as " +
        "missing the question. The single most useful skill in the first two minutes is to " +
        "<strong>classify the prompt's format</strong>, because the format tells you what shape " +
        "your answer must take.</p>" +
        "<p>The nine official sample prompts, and almost every illustrative prompt you will meet, " +
        "fall into five formats. Each format below comes with the job it sets you, a tailored " +
        "opening-paragraph template, and a model stance sentence. The stance sentence is the one " +
        "line that fixes your position; write it first, then build the introduction around it.</p>" +

        "<h3>Format 1 — \"Do you agree that X?\" (and \"X.\" Do you agree?)</h3>" +
        "<p><strong>The job:</strong> take a side. The examiner has handed you a proposition and " +
        "asked for a verdict. A committed, <em>qualified</em> yes or no is what scores — qualified " +
        "meaning you may agree with conditions or limits, but you must come down on one side.</p>" +
        "<p><strong>Opening template:</strong> (1) restate the proposition in your own words to " +
        "show you have parsed it; (2) note the key term or condition that will decide it; (3) " +
        "deliver your stance sentence; (4) signal your two main reasons.</p>" +
        "<p><strong>Model stance sentence:</strong> \"On balance the claim is correct, but only " +
        "where [condition] holds; where it does not, the opposite follows.\" The qualification " +
        "shows judgement; the \"on balance the claim is correct\" still commits.</p>" +
        "<p><strong>Official examples:</strong> \"'It is right that students should contribute to " +
        "the cost of their degrees.' Do you agree?\"</p>" +

        "<h3>Format 2 — \"Discuss X\" / \"… Discuss.\"</h3>" +
        "<p><strong>The job:</strong> two-sided treatment that still reaches a verdict. \"Discuss\" " +
        "invites you to weigh competing considerations, but the common error is to weigh them and " +
        "then stop. You must conclude. Think of it as a structured argument that gives the other " +
        "side a fair hearing before deciding against it.</p>" +
        "<p><strong>Opening template:</strong> (1) frame the tension the statement creates; (2) " +
        "acknowledge that there is a serious case on each side; (3) state which side you will " +
        "defend and why the tension resolves in its favour; (4) preview the strongest opposing " +
        "consideration you intend to answer.</p>" +
        "<p><strong>Model stance sentence:</strong> \"The competing claims are real, but [value " +
        "or argument] outweighs [the opposing value], and I will argue that the statement should " +
        "be rejected / accepted.\"</p>" +
        "<p><strong>Official examples:</strong> \"'We must be prepared to sacrifice traditional " +
        "liberties to defeat terrorism.' Discuss.\"</p>" +

        "<h3>Format 3 — \"Make the best case you can for X\"</h3>" +
        "<p><strong>The job:</strong> act as advocate. You are asked to build the strongest " +
        "possible argument <em>for</em> a position — even one you personally reject. This is an " +
        "advocate's brief, not a balanced essay. You may acknowledge the strongest objection in " +
        "order to defuse it, but your essay's centre of gravity stays firmly on the case for X. " +
        "Do not secretly argue against the position; that misreads the instruction.</p>" +
        "<p><strong>Opening template:</strong> (1) state the position you have been asked to " +
        "defend; (2) note briefly that reasonable people doubt it (so the reader knows you are " +
        "not naive); (3) commit to making the case anyway; (4) preview the two or three strongest " +
        "supporting arguments.</p>" +
        "<p><strong>Model stance sentence:</strong> \"The strongest case for [X] rests on [reason " +
        "1] and [reason 2], and even the most serious objection — [objection] — can be answered.\"</p>" +
        "<p><strong>Official examples:</strong> \"Make the best case you can for public funding " +
        "of the arts.\"</p>" +

        "<h3>Format 4 — \"What is X and why does it matter?\"</h3>" +
        "<p><strong>The job:</strong> define, then evaluate significance. This format has two " +
        "linked tasks. First, pin down a careful, defensible definition of a contested term — the " +
        "definition itself is doing argumentative work, because how you define X shapes whether it " +
        "matters. Second, argue for <em>why</em> (or whether) it matters, taking a position rather " +
        "than listing reasons neutrally.</p>" +
        "<p><strong>Opening template:</strong> (1) flag that the term is contested and that the " +
        "definition is part of the argument; (2) offer your working definition in one clean " +
        "sentence; (3) state your claim about its significance; (4) preview the grounds for that " +
        "claim.</p>" +
        "<p><strong>Model stance sentence:</strong> \"Understood as [your definition], X matters " +
        "because [central reason] — though its importance is often overstated / understated for " +
        "[reason].\"</p>" +
        "<p><strong>Official examples:</strong> \"What is 'political correctness' and why does it " +
        "matter?\"</p>" +

        "<h3>Format 5 — \"Should X?\" (and \"Should X? If so, how?\")</h3>" +
        "<p><strong>The job:</strong> reach a normative verdict by making your value premises " +
        "explicit. A \"should\" question is about what <em>ought</em> to be done, so it cannot be " +
        "settled by facts alone — you must state the value (liberty, fairness, welfare, autonomy) " +
        "on which your answer rests. When the prompt adds \"If so, how?\", a yes obliges you to " +
        "sketch the mechanism; the \"how\" is part of the question, not optional.</p>" +
        "<p><strong>Opening template:</strong> (1) identify the decision the prompt demands; (2) " +
        "name the value premise that will drive your answer; (3) state your verdict (yes / no / " +
        "yes-with-conditions); (4) if \"how?\" is asked, promise the mechanism.</p>" +
        "<p><strong>Model stance sentence:</strong> \"Because [value premise] should take " +
        "priority here, the law should / should not require X — and if it does, it should do so " +
        "by [brief mechanism].\"</p>" +
        "<p><strong>Official examples:</strong> \"Should the law require people to vote in general " +
        "elections?\"; \"Should private cars be rationed? If so, how?\"; \"What disciplinary " +
        "sanctions should teachers be allowed to use?\" (a \"should\" question in disguise).</p>" +

        "<h3>The two-minute classification habit</h3>" +
        "<p>Before you choose your prompt, label each of the three on offer with its format. The " +
        "label tells you the job and therefore the opening you will write. It also helps you choose " +
        "wisely: pick the prompt where you can already write the stance sentence in your head. If " +
        "no stance sentence comes to you, that prompt is a trap, however much you know about the " +
        "topic.</p>",
      recognitionCues: [
        "\"Do you agree (that)…?\" or a quoted claim followed by \"Do you agree?\" — Format 1, deliver a committed qualified verdict.",
        "\"Discuss\" or a quoted claim followed by \"Discuss.\" — Format 2, two-sided but you must still conclude.",
        "\"Make the (best) case for…\" — Format 3, advocate's brief; argue FOR the position even if you disagree.",
        "\"What is X (and) why does it matter?\" or \"What is X?\" — Format 4, define the contested term first, then argue its significance.",
        "\"Should…?\" / \"Ought…?\" / \"… be allowed/required/permitted?\" — Format 5, normative verdict built on an explicit value premise.",
        "\"If so, how?\" appended to a \"Should\" prompt — a yes answer must include a concrete mechanism.",
        "A prompt naming a contested abstract noun (\"political correctness\", \"freedom of speech\") in quotation marks — expect to define it before evaluating."
      ],
      workedExample:
        "<h3>One topic, three prompt formats</h3>" +
        "<p>To see how format dictates approach, take a single subject — student tuition fees — " +
        "and watch how the opening changes as the wording changes.</p>" +

        "<h3>(a) \"'Students should contribute to the cost of their degrees.' Do you agree?\" — Format 1</h3>" +
        "<p><em>Stance sentence:</em> \"Students should contribute, but only through " +
        "income-contingent repayment that protects those who never earn enough to benefit.\"</p>" +
        "<blockquote><p>The claim that students should pay towards their degrees is right in " +
        "principle but stands or falls on <em>how</em> they pay. A graduate who earns a premium " +
        "from a degree can fairly be asked to contribute; a graduate who does not should not be " +
        "pursued for it. I will argue that contribution is justified, provided it is " +
        "income-contingent — and that this condition answers the fairness objection that " +
        "otherwise sinks the policy.</p></blockquote>" +
        "<p>Notice the verdict arrives in sentence two and the qualification is built in, not " +
        "tacked on. That is a committed qualified yes.</p>" +

        "<h3>(b) \"Make the best case for free university tuition.\" — Format 3</h3>" +
        "<p><em>Stance sentence:</em> \"The strongest case for free tuition is that higher " +
        "education is a public good whose benefits spill far beyond the individual graduate.\"</p>" +
        "<blockquote><p>Many object that free tuition subsidises the future rich at the expense " +
        "of the present poor. The objection has force, but the strongest case for free tuition " +
        "answers it. Education is not only a private investment; an educated population raises " +
        "productivity, deepens civic life, and lowers long-run public costs. I will make that " +
        "case on two grounds — the public-good argument and the access argument — and show that " +
        "even the fairness objection can be met.</p></blockquote>" +
        "<p>Here the writer <em>disagrees in private life</em> perhaps — it does not matter. The " +
        "instruction is to advocate, and the essay's weight sits on the case <em>for</em>.</p>" +

        "<h3>(c) \"Should higher education be free at the point of use? If so, how?\" — Format 5</h3>" +
        "<p><em>Stance sentence:</em> \"Because access to opportunity should not depend on a " +
        "family's ability to pay, tuition should be free at the point of use, funded by a " +
        "progressive graduate levy.\"</p>" +
        "<blockquote><p>Whether higher education should be free at the point of use turns on a " +
        "value question: how far should the cost of opportunity fall on the individual rather " +
        "than the community? I take the view that opportunity should not be gated by family " +
        "wealth, and so tuition should be free at the point of use. Because the prompt also asks " +
        "<em>how</em>, I will defend a specific mechanism — a progressive graduate levy — that " +
        "preserves free access while recovering cost from those who gain most.</p></blockquote>" +
        "<p>The value premise is named explicitly, and the \"how?\" is promised because the prompt " +
        "demanded it. Skip the mechanism here and you have answered only half the question.</p>" +

        "<h3>What the contrast teaches</h3>" +
        "<p>Same topic, same body of knowledge — three different openings, because three different " +
        "jobs. The candidate who classifies the format first writes the right essay; the candidate " +
        "who writes a generic 'tuition fees' essay answers a prompt that was never set.</p>",
      commonTraps: [
        "<strong>Answering \"Discuss\" by surveying and stopping.</strong> A balanced survey with no verdict reads as the Irresolute flaw; \"Discuss\" still demands a conclusion.",
        "<strong>Arguing against the position in a \"Make the best case\" prompt.</strong> The instruction is to advocate; covertly attacking X misreads the question and forfeits the task that was set.",
        "<strong>Turning \"What is X and why does it matter?\" into a yes/no debate.</strong> This format needs a definition and a significance claim, not a for-and-against on a proposition that was never stated.",
        "<strong>Answering \"Should X? If so, how?\" without the how.</strong> The mechanism is part of the question; a verdict alone is incomplete.",
        "<strong>Burying the stance sentence in the conclusion.</strong> In every format the position belongs in paragraph 1; a thesis that only surfaces at the end leaves the body looking aimless.",
        "<strong>Choosing the prompt you know most about rather than the one you can take a position on.</strong> Knowledge without a committed thesis produces a padded, Irresolute essay."
      ],
      strategyBox:
        "<p><strong>Strategy — classify, then commit:</strong></p>" +
        "<ol>" +
        "<li><strong>Label all three prompts (≈1 min).</strong> Tag each as Format 1–5. The label " +
        "names the job before you invest in a choice.</li>" +
        "<li><strong>Draft the stance sentence in your head.</strong> Whichever prompt lets you " +
        "complete \"My position is ___ because ___\" most cleanly is the one to pick — even over a " +
        "more familiar topic.</li>" +
        "<li><strong>Match the opening to the format.</strong> Use the template for that format so " +
        "your introduction does the format's specific job (verdict / two-sided-then-decide / " +
        "advocate / define-then-evaluate / value-premise-then-verdict).</li>" +
        "<li><strong>Honour every clause of the prompt.</strong> If it says \"If so, how?\", " +
        "promise the mechanism; if it quotes a contested term, define it. Unanswered clauses are " +
        "the easiest marks to lose.</li>" +
        "</ol>" +
        "<p><strong>Rule of thumb:</strong> the prompt's verb is your instruction. \"Agree\" = " +
        "take a side; \"Discuss\" = weigh then decide; \"Make the case\" = advocate; \"What is\" = " +
        "define then evaluate; \"Should\" = state a value and rule on it.</p>"
    }

  );

})(typeof window !== "undefined" ? window : this);
