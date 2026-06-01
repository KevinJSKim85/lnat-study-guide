/*
 * supplements.js — supplementary Section B content for the LNAT study site.
 *
 * Buckets written (all initialised defensively before any push):
 *   window.LNAT_DATA.essayGuide  — essay-rubric, essay-countdown
 *   window.LNAT_DATA.prompts     — prompt-680 .. prompt-694 (15 illustrative prompts,
 *                                  FRESH topics not in the existing prompt bank)
 *   window.LNAT_DATA.modelEssays — essay-7070 .. essay-7075 (6 model-quality essays,
 *                                  500-600 words each, annotations mapped to rubric
 *                                  dimensions; each tagged with the prompt FORMAT it
 *                                  demonstrates)
 *
 * Prompt-format coverage across the six model essays (see lesson-prompttypes):
 *   essay-7070 -> prompt-680  Format 1  "Do you agree…?"           (committed qualified verdict)
 *   essay-7071 -> prompt-684  Format 2  "Discuss"                  (two-sided, then decide)
 *   essay-7072 -> prompt-686  Format 3  "Make the best case for…"  (advocate's brief)
 *   essay-7073 -> prompt-690  Format 4  "What is X / why matter?"  (define then evaluate)
 *   essay-7074 -> prompt-692  Format 5  "Should…?"                 (value-premise verdict)
 *   essay-7075 -> prompt-693  Format 5  "Should…? If so, how?"     (verdict + mechanism)
 *
 * All content English only, original. Lessons/essays carry no source field; prompts
 * are source:"illustrative" (SCHEMA §3.3). Model essays use quality:"model".
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] supplements.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  // Defensive bucket init (essayGuide is a non-manifest core-schema bucket;
  // prompts/modelEssays are manifest buckets but we guard anyway for load-order safety).
  if (!Array.isArray(DATA.essayGuide))  { DATA.essayGuide = []; }
  if (!Array.isArray(DATA.prompts))     { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays)) { DATA.modelEssays = []; }

  /* ====================================================================== *
   * 1. ESSAY GUIDE — id: essay-rubric                                       *
   *    An Oxford-style 7-criterion self-marking rubric, applied to the      *
   *    student's OWN essay BEFORE she reads any model answer.               *
   * ====================================================================== */
  DATA.essayGuide.push({
    id: "essay-rubric",
    title: "The 7-Criterion Self-Marking Rubric (Mark Your Own Essay First)",
    body:
      "<h2>How to use this rubric</h2>" +
      "<p>This rubric is built from the criteria Oxford and other LNAT-using law " +
      "faculties describe when they explain how they read the Section B essay. There is " +
      "no official points formula — the essay is sent verbatim and each university judges " +
      "it on its own terms — so treat the scores below as a <em>diagnostic</em>, not a " +
      "grade. The discipline that matters is the sequence:</p>" +
      "<ol>" +
      "<li>Write a full essay under timed conditions (40 minutes).</li>" +
      "<li><strong>Mark it against all seven criteria yourself, before you read any model " +
      "answer.</strong> Self-marking first forces you to judge your own reasoning rather " +
      "than measure how closely you imitated someone else's.</li>" +
      "<li>Only then open a model essay, and compare criterion by criterion.</li>" +
      "</ol>" +
      "<p>Score each criterion 1–5 using the band descriptors. Add the seven scores for a " +
      "total out of 35. The number is less important than the pattern: a criterion scoring " +
      "1–2 is a precise action point for your next attempt.</p>" +

      "<h2>The seven criteria</h2>" +

      "<h3>1. Attention to the question</h3>" +
      "<p>Did you answer the prompt that was set — in its exact wording — rather than a " +
      "neighbouring question you found easier?</p>" +
      "<ul>" +
      "<li><strong>5:</strong> Every clause of the prompt is addressed; the essay could " +
      "answer no other question.</li>" +
      "<li><strong>3:</strong> The main thrust is answered, but a clause (e.g. an \"if so, " +
      "how?\") is underdone.</li>" +
      "<li><strong>1:</strong> The essay drifts to a related topic, or answers a question " +
      "the prompt did not ask.</li>" +
      "</ul>" +

      "<h3>2. Critical judgement</h3>" +
      "<p>Is there genuine evaluation — weighing reasons, not just reporting views? Does the " +
      "essay take a defended position?</p>" +
      "<ul>" +
      "<li><strong>5:</strong> Reasons are weighed against each other; the position is " +
      "committed and earned.</li>" +
      "<li><strong>3:</strong> A position is taken but support is thin or one-sided.</li>" +
      "<li><strong>1:</strong> Views are listed without evaluation; no position emerges " +
      "(the Irresolute flaw).</li>" +
      "</ul>" +

      "<h3>3. Clear distinctions</h3>" +
      "<p>Are key terms defined and important distinctions drawn (e.g. legality vs " +
      "morality, equality of outcome vs opportunity)? Vague terms left undefined cost marks " +
      "here.</p>" +
      "<ul>" +
      "<li><strong>5:</strong> Contested terms are defined and the right distinctions do " +
      "real work in the argument.</li>" +
      "<li><strong>3:</strong> Some terms are defined; an important distinction is missed " +
      "or blurred.</li>" +
      "<li><strong>1:</strong> Central terms are used loosely and shift meaning " +
      "(the Imprecise flaw, or equivocation).</li>" +
      "</ul>" +

      "<h3>4. Clarity and coherence</h3>" +
      "<p>Can the reader follow the argument at first pass? Do paragraphs connect, and does " +
      "each sentence read cleanly?</p>" +
      "<ul>" +
      "<li><strong>5:</strong> The thread is effortless to follow; signposting is light but " +
      "present.</li>" +
      "<li><strong>3:</strong> Mostly clear, with one or two paragraphs that need " +
      "re-reading.</li>" +
      "<li><strong>1:</strong> The reader loses the thread; sentences are tangled or " +
      "disconnected.</li>" +
      "</ul>" +

      "<h3>5. Relevance</h3>" +
      "<p>Does every paragraph bear on the thesis? Is there material included because it is " +
      "known rather than because it is needed?</p>" +
      "<ul>" +
      "<li><strong>5:</strong> Nothing is off-topic; each example is chosen for its " +
      "argumentative work.</li>" +
      "<li><strong>3:</strong> Largely relevant, with one digression or a decorative " +
      "example.</li>" +
      "<li><strong>1:</strong> Substantial material does not connect to the question.</li>" +
      "</ul>" +

      "<h3>6. Sustained, focused treatment</h3>" +
      "<p>Does the essay develop a small number of points in depth, or does it skate across " +
      "many? Depth beats breadth in 600 words.</p>" +
      "<ul>" +
      "<li><strong>5:</strong> Two or three points are developed thoroughly, each taken to " +
      "its consequence.</li>" +
      "<li><strong>3:</strong> Points are made but not pressed; the treatment stays on the " +
      "surface.</li>" +
      "<li><strong>1:</strong> A list of undeveloped assertions; no point is pursued.</li>" +
      "</ul>" +

      "<h3>7. Engagement with counter-arguments</h3>" +
      "<p>Is the strongest opposing view stated fairly and then answered — not ignored, and " +
      "not knocked down as a straw man?</p>" +
      "<ul>" +
      "<li><strong>5:</strong> The best counterargument is stated in its own strongest form " +
      "and genuinely rebutted.</li>" +
      "<li><strong>3:</strong> A counterargument is acknowledged but rebutted weakly or in " +
      "passing.</li>" +
      "<li><strong>1:</strong> No counterargument, or only a straw-man version is " +
      "attacked.</li>" +
      "</ul>" +

      "<h2>Reading your score</h2>" +
      "<table>" +
      "<thead><tr><th>Total / 35</th><th>What it means</th><th>Next move</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>30–35</td><td>A strong essay across the board.</td><td>Work on depth and an " +
      "original angle; compare against a model for the last 10%.</td></tr>" +
      "<tr><td>23–29</td><td>Solid, with one or two weak criteria.</td><td>Take the " +
      "lowest-scoring criterion and rewrite the essay targeting only that.</td></tr>" +
      "<tr><td>15–22</td><td>The argument or its structure is not yet holding.</td><td>Re-read " +
      "the Section B fundamentals and the Five-I guide before the next attempt.</td></tr>" +
      "<tr><td>Below 15</td><td>The essay is not yet answering the question.</td><td>Restart on " +
      "a fresh prompt; classify its format first (see Reading the Essay Prompt).</td></tr>" +
      "</tbody></table>" +
      "<p><strong>Why mark yourself first:</strong> the examiner does not have a model answer " +
      "beside your script, and neither will you in the exam. Training your own judgement — " +
      "scoring your reasoning cold, then checking it against a model — builds the skill the " +
      "test actually rewards. A model read too early teaches imitation; a model read after " +
      "self-marking teaches calibration.</p>"
  });

  /* ====================================================================== *
   * 2. ESSAY GUIDE — id: essay-countdown                                    *
   *    The 40-Minute Section B Countdown protocol.                          *
   * ====================================================================== */
  DATA.essayGuide.push({
    id: "essay-countdown",
    title: "The 40-Minute Section B Countdown",
    body:
      "<h2>A minute-by-minute protocol</h2>" +
      "<p>Forty minutes is tight. The candidates who run out of time are almost never the " +
      "ones who plan — they are the ones who start writing immediately and discover at " +
      "minute 30 that they have no conclusion and no counterargument. This countdown turns " +
      "the forty minutes into four fixed phases. Practise it until the transitions are " +
      "automatic; in the exam you should be moving to the next phase by reflex, not by " +
      "decision.</p>" +

      "<h3>Minutes 1–2 — Classify the prompt</h3>" +
      "<p>Read all three prompts once. Label each with its format (see <em>Reading the " +
      "Essay Prompt</em>): Do-you-agree, Discuss, Make-the-case, What-is-and-why, or Should. " +
      "The label tells you the <em>job</em>. Then choose the prompt for which you can already " +
      "complete the sentence \"My position is ___ because ___\". Do not pick on familiarity " +
      "alone; pick on whether a committed thesis is within reach.</p>" +

      "<h3>Minutes 3–7 — Plan thesis, points, counter</h3>" +
      "<p>Five minutes of planning saves ten of floundering. On screen, sketch:</p>" +
      "<ul>" +
      "<li><strong>Thesis</strong> — one sentence stating your position, shaped to the " +
      "prompt's format.</li>" +
      "<li><strong>Point 1 and Point 2</strong> — your two strongest, <em>distinct</em> " +
      "reasons, each with the concrete example that will anchor it.</li>" +
      "<li><strong>Counterargument</strong> — the single strongest objection, plus the gist " +
      "of your rebuttal.</li>" +
      "<li><strong>Conclusion hook</strong> — the fresh phrasing you will restate the thesis " +
      "in.</li>" +
      "</ul>" +
      "<p>If you cannot name a counterargument in this window, you have probably picked the " +
      "wrong prompt — and there is still just time to switch.</p>" +

      "<h3>Minutes 8–35 — Draft the five-part essay</h3>" +
      "<p>Twenty-seven minutes to write roughly 500–600 words. Follow the five-part shape: " +
      "introduction + thesis → argument paragraph 1 → argument paragraph 2 → counterargument " +
      "+ rebuttal → conclusion. Write continuously; do <em>not</em> edit as you go, and do " +
      "not polish sentence one while sentence four is still in your head. Keep a rough word " +
      "budget — about 90 words for the introduction, 150 for each argument paragraph, 120 " +
      "for the counter-and-rebuttal, 60 for the conclusion. Glance at the word count once " +
      "near minute 30; if you are past 560, start steering into the conclusion.</p>" +

      "<h3>Minutes 36–40 — Proofread for the Five I's</h3>" +
      "<p>One disciplined editing pass, hunting specifically for the five fatal flaws:</p>" +
      "<ul>" +
      "<li><strong>Irresolute</strong> — is there a clear thesis in paragraph 1? If it " +
      "hedges, sharpen it.</li>" +
      "<li><strong>Indecisive</strong> — does your position drift mid-essay? Make sure the " +
      "rebuttal returns you to your opening side.</li>" +
      "<li><strong>Imprecise</strong> — delete vague qualifiers (\"somehow\", \"in a way\", " +
      "\"interesting\") and replace them with specifics.</li>" +
      "<li><strong>Inconsistent</strong> — does any claim contradict an earlier one? " +
      "Reconcile or cut.</li>" +
      "<li><strong>Indignant</strong> — have you attacked the question instead of answering " +
      "it? Restore a measured tone.</li>" +
      "</ul>" +
      "<p>Do not attempt a full rewrite in these four minutes; you will only create new " +
      "errors you have no time to catch. Fix flaws, fix obvious slips, and stop.</p>" +

      "<h2>The countdown at a glance</h2>" +
      "<table>" +
      "<thead><tr><th>Minutes</th><th>Phase</th><th>Output</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>1–2</td><td>Classify</td><td>Three prompts labelled by format; one chosen.</td></tr>" +
      "<tr><td>3–7</td><td>Plan</td><td>Thesis + 2 points + 1 counterargument + conclusion hook.</td></tr>" +
      "<tr><td>8–35</td><td>Draft</td><td>A 500–600-word five-part essay, written straight through.</td></tr>" +
      "<tr><td>36–40</td><td>Proofread</td><td>One Five-I pass; flaws fixed, no rewrite.</td></tr>" +
      "</tbody></table>" +
      "<p><strong>The discipline that wins:</strong> the phases are non-negotiable. If the " +
      "plan is not done at minute 7, start writing anyway — a thin plan beats a perfect plan " +
      "and no essay. The single most common cause of a poor Section B mark is not weak ideas; " +
      "it is an unfinished essay.</p>"
  });

  /* ====================================================================== *
   * 3. FIFTEEN ILLUSTRATIVE PROMPTS — prompt-680 .. prompt-694              *
   *    FRESH topics (not duplicating the existing illustrative bank).       *
   *    source:"illustrative" — must be labelled as such in the UI.          *
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-680",
      theme: "media-tech-environment",
      text:
        "“Social media platforms should be legally liable for the harm caused by " +
        "content they recommend.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-681",
      theme: "civil-liberties",
      text:
        "“The right to be forgotten online does more harm than good.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-682",
      theme: "ethics",
      text:
        "“We owe nothing to people who will not be born for another two hundred " +
        "years.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-683",
      theme: "education-society",
      text:
        "“Examinations measure little of real value.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-684",
      theme: "media-tech-environment",
      text:
        "“The pursuit of economic growth is incompatible with protecting the " +
        "environment.” Discuss.",
      source: "illustrative"
    },
    {
      id: "prompt-685",
      theme: "politics-governance",
      text:
        "“A government should never negotiate with those who use violence to " +
        "achieve political ends.” Discuss.",
      source: "illustrative"
    },
    {
      id: "prompt-686",
      theme: "media-tech-environment",
      text:
        "Make the best case you can for a four-day working week.",
      source: "illustrative"
    },
    {
      id: "prompt-687",
      theme: "ethics",
      text:
        "Make the best case you can for keeping animals in zoos.",
      source: "illustrative"
    },
    {
      id: "prompt-688",
      theme: "education-society",
      text:
        "Make the best case you can for teaching philosophy in every secondary " +
        "school.",
      source: "illustrative"
    },
    {
      id: "prompt-689",
      theme: "civil-liberties",
      text:
        "Make the best case you can for compulsory national service.",
      source: "illustrative"
    },
    {
      id: "prompt-690",
      theme: "politics-governance",
      text:
        "What is the rule of law, and why does it matter?",
      source: "illustrative"
    },
    {
      id: "prompt-691",
      theme: "media-tech-environment",
      text:
        "What is privacy, and why does it matter in an age of constant data " +
        "collection?",
      source: "illustrative"
    },
    {
      id: "prompt-692",
      theme: "ethics",
      text:
        "Should there be any limits on what consenting adults may agree to do to " +
        "one another?",
      source: "illustrative"
    },
    {
      id: "prompt-693",
      theme: "media-tech-environment",
      text:
        "Should there be an upper limit on personal wealth? If so, how should it " +
        "be set?",
      source: "illustrative"
    },
    {
      id: "prompt-694",
      theme: "law-justice",
      text:
        "Should juries be abolished for complex fraud trials?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * 4. SIX MODEL ESSAYS — essay-7070 .. essay-7075                          *
   *    quality:"model", 500-600 words each, committed thesis + 5-part       *
   *    structure + concrete examples + engaged counterargument.            *
   *    Each demonstrates one prompt FORMAT (annotated below).              *
   * ====================================================================== */
  DATA.modelEssays.push(

    /* --- essay-7070 -> prompt-680  Format 1: "Do you agree?" ------------- */
    {
      id: "essay-7070",
      promptId: "prompt-680",
      quality: "model",
      body:
        "Platforms should be liable for the harm caused by content they actively " +
        "recommend, though not for everything their users merely post. The distinction is " +
        "the whole argument: a company that builds an algorithm to maximise engagement, and " +
        "profits when that algorithm pushes a vulnerable user toward harmful material, has " +
        "made an editorial choice and should answer for it. A company that merely hosts what " +
        "users upload has not. This is a committed yes, but a qualified one.\n\n" +
        "The first reason is that recommendation is an act, not a passive conduit. When a " +
        "platform ranks one video above a thousand others and places it in front of a " +
        "teenager, it is doing something a newspaper editor would recognise: selecting and " +
        "promoting. We already hold editors liable for what they choose to publish. The " +
        "internal research disclosed by a Facebook whistleblower in 2021, suggesting the " +
        "company knew its engagement-ranking amplified content harmful to teenage girls, is " +
        "exactly the kind of choice that liability is designed to deter. If the recommendation " +
        "is the firm's own product, the firm should own its consequences.\n\n" +
        "The second reason is incentives. A platform that bears no cost for the harms it " +
        "amplifies has every reason to optimise purely for attention, because attention is " +
        "what it sells. Attach a cost to amplifying demonstrably harmful content and the " +
        "calculation changes: safety stops being charity and becomes a line on the balance " +
        "sheet. Liability is simply the mechanism that makes a company internalise a cost it " +
        "currently externalises onto its users. We use it for defective cars and contaminated " +
        "food for precisely this reason. Nor is the standard impossible to meet: a platform " +
        "that can target an advertisement to a single user with uncanny precision plainly has " +
        "the technical means to judge what its own systems are pushing, and liability for " +
        "recommended harm asks only that it use those means responsibly rather than profitably.\n\n" +
        "The strongest objection is that broad liability would be catastrophic for free " +
        "expression. If platforms can be sued for what their algorithms surface, they will " +
        "over-remove anything remotely risky, and lawful, valuable speech will vanish in the " +
        "stampede to avoid litigation. This is a serious worry and it explains my " +
        "qualification. But it tells against <em>indiscriminate</em> liability for all user " +
        "content, not against the narrower liability I defend. Holding a platform responsible " +
        "for what it <em>chooses to recommend</em> leaves untouched the speech it merely " +
        "hosts; a user remains free to post, and others free to seek that post out. The " +
        "chilling effect bites only on the amplification the platform itself elected to " +
        "perform — which is the very thing we want it to perform more carefully.\n\n" +
        "So the proposition is right, with one boundary clearly drawn. Liability should " +
        "follow the recommendation, because recommendation is a deliberate act that the " +
        "platform profits from and controls. It should not extend to passive hosting, where " +
        "the free-expression cost would be real and the platform's responsibility thin. Draw " +
        "the line at the algorithm, and liability becomes not a threat to open debate but the " +
        "ordinary principle that those who profit from a choice should bear its foreseeable " +
        "harms.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "Sentence 1 delivers a committed but qualified verdict — the signature of a good Format-1 'Do you agree?' answer: it commits ('should be liable for the harm caused by content they actively recommend') while flagging the limit ('not for everything their users merely post')."
        },
        {
          rubricDim: "clarity",
          fiveI: null,
          note: "The recommend-vs-host distinction is named in the introduction and then carries the whole essay, so the reader always knows which claim is being defended — clear distinctions doing real work."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note: "Two distinct reasons are developed in depth: recommendation-as-editorial-act, then the incentives/internalised-cost argument. Neither is a restatement of the other."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Concrete anchors (the 2021 whistleblower disclosure; the analogy to defective cars and contaminated food) ground the abstract claims rather than leaving them as assertion."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The free-expression objection is stated in its strongest form and then rebutted precisely — by showing it targets indiscriminate liability, not the narrow recommendation-only liability defended. The rebuttal also explains the essay's qualification rather than abandoning the thesis."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The conclusion restates the position in fresh words ('draw the line at the algorithm'), recaps both grounds, and introduces no new material."
        }
      ]
    },

    /* --- essay-7071 -> prompt-684  Format 2: "Discuss" ------------------- */
    {
      id: "essay-7071",
      promptId: "prompt-684",
      quality: "model",
      body:
        "The claim that economic growth and environmental protection are incompatible " +
        "contains a real tension, but it is overstated. Growth measured crudely — as more " +
        "physical throughput of energy and materials — does collide with planetary limits. " +
        "Growth understood as rising value generated per unit of resource need not. The " +
        "honest verdict is that the two are in tension under our current model, but not " +
        "inherently opposed, and I will argue that the incompatibility is a feature of how we " +
        "grow rather than of growth as such.\n\n" +
        "The case for incompatibility is strong and deserves a fair hearing. For two " +
        "centuries, rising output has tracked rising emissions and resource extraction almost " +
        "in lockstep; global carbon emissions have climbed with global GDP through every " +
        "decade of industrialisation. Every additional tonne of steel, every extra flight, " +
        "every new data centre consumes energy that has overwhelmingly come from fossil " +
        "fuels. On this view, an economy committed to perpetual expansion is an economy " +
        "committed to perpetual pressure on a finite biosphere, and talk of 'green growth' is " +
        "wishful.\n\n" +
        "Yet the lockstep can be broken, and in places already has. Several advanced " +
        "economies — the United Kingdom and Sweden among them — have recorded absolute " +
        "decoupling over the past two decades: GDP rising while territorial emissions fall, " +
        "driven by a shift from coal to renewables, gains in energy efficiency, and a move " +
        "toward services. The plummeting cost of solar and wind generation, now cheaper than " +
        "new fossil capacity in most of the world, means that future growth can draw on energy " +
        "that does not warm the planet. Growth in insulation, public transport, or " +
        "reforestation is growth that protects the environment rather than degrading it. The " +
        "category 'economic growth' simply does not pick out a single environmental sign; a " +
        "pound of national income earned from retrofitting homes or building wind turbines is " +
        "counted by the same statistic as a pound earned from burning coal, yet the two pull " +
        "the environment in opposite directions. To treat them as one thing is to lose the " +
        "distinction on which the whole question turns.\n\n" +
        "The strongest objection to my position is that decoupling so far is partial, too " +
        "slow, and flattered by rich countries offshoring their dirtiest production to poorer " +
        "ones — so that consumption-based emissions tell a grimmer story than territorial " +
        "ones. This is the most serious point against optimism, and I concede its force: the " +
        "decoupling achieved is nowhere near the pace the climate requires. But 'too slow' is " +
        "an argument about <em>rate</em>, not about <em>possibility</em>. It shows that " +
        "current policy is inadequate, not that the goal is incoherent. If even partial " +
        "decoupling is real, then the relationship is contingent on choices — carbon pricing, " +
        "investment, regulation — and contingent relationships can be changed.\n\n" +
        "Weighing the two sides, the incompatibility thesis identifies a genuine danger but " +
        "draws the wrong conclusion from it. Growth as we have practised it has been " +
        "environmentally ruinous; growth as we could practise it need not be. The tension is " +
        "real and urgent, but it is a problem to be engineered out through the kind of growth " +
        "we choose, not a law of nature to be surrendered to. I therefore reject the claim as " +
        "stated, while taking seriously the warning beneath it.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "A Format-2 'Discuss' prompt is two-sided but must still conclude. The introduction frames the tension AND commits ('overstated… not inherently opposed'), so the essay is not left fence-sitting."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The opposing case (two centuries of emissions tracking GDP) is given a full, sympathetic paragraph of its own before being answered — genuine engagement, not a straw man."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note: "The decoupling argument is pressed with a clear distinction — between growth as physical throughput and growth as value per unit of resource — which does the real analytical work of resolving the tension."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Specific, accurate anchors: UK/Sweden absolute decoupling, the falling cost of solar and wind below new fossil capacity. These are chosen for their argumentative bite, not decoration."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The offshoring / consumption-emissions rebuttal is the strongest objection and is conceded honestly, then defused by distinguishing rate from possibility — a precise rebuttal that does not collapse the thesis."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The conclusion delivers the verdict cleanly ('I therefore reject the claim as stated, while taking seriously the warning beneath it') without smuggling in new arguments."
        }
      ]
    },

    /* --- essay-7072 -> prompt-686  Format 3: "Make the best case for…" --- */
    {
      id: "essay-7072",
      promptId: "prompt-686",
      quality: "model",
      body:
        "The strongest case for a four-day working week is that it would raise " +
        "productivity, improve public health, and distribute the gains of automation more " +
        "fairly — and that the obvious objection, lost output, rests on a measure of work " +
        "that the evidence increasingly undermines. This essay makes that case. Reasonable " +
        "people doubt the policy, and I will not pretend the doubts are baseless; but the " +
        "task is to show how strong the argument for the change can be made, and it can be " +
        "made strong.\n\n" +
        "The first and most counter-intuitive pillar is productivity. The reflex assumption " +
        "is that four days must produce less than five. Yet the largest trial to date — a " +
        "2022 UK pilot involving 61 companies, coordinated by the group 4 Day Week Global — " +
        "found that the overwhelming majority maintained or increased output, and almost all " +
        "chose to keep the shorter week afterwards. The mechanism is not magic: a hard time " +
        "constraint forces firms to cut low-value meetings and busywork, and rested workers " +
        "concentrate better. Hours are a poor proxy for value produced, and once that proxy " +
        "is relaxed, much of the supposed cost evaporates.\n\n" +
        "The second pillar is health and its public cost. Overwork is not a private " +
        "indulgence to be managed by the individual; it is a population-level driver of " +
        "stress, burnout, and the lost workdays and healthcare spending that follow. A " +
        "standard four-day week returns a full day for rest, care, and exercise, and trial " +
        "participants reported sharp falls in burnout and improvements in sleep and " +
        "well-being. A healthier workforce is cheaper to employ and to treat, so the gain is " +
        "not only humane but fiscal.\n\n" +
        "The third pillar is fairness in the face of automation. As software and machines " +
        "absorb more tasks, the productivity gains have flowed largely to capital while hours " +
        "have barely moved. A four-day week is one concrete way to convert technological " +
        "progress into leisure shared by workers rather than profit captured by owners alone " +
        "— the same logic that, a century ago, turned industrial gains into the two-day " +
        "weekend we now take for granted.\n\n" +
        "The most serious objection is that these results come from self-selected firms in " +
        "knowledge-based sectors and will not transfer to hospitals, factories, or shops, " +
        "where output is tied tightly to hours and a missing day must be covered by hiring. " +
        "The objection has real weight, and an honest advocate must meet it rather than wish " +
        "it away. But it limits the policy; it does not defeat the case. Where tasks are " +
        "hours-bound, the four-day week can be delivered through staggered rotas and modest " +
        "additional hiring — itself a benefit in tight labour markets — funded partly by the " +
        "lower absenteeism and turnover the health gains produce. The case does not require " +
        "the policy to be costless everywhere; it requires the benefits to outweigh the costs " +
        "across the economy, and the early evidence suggests they can.\n\n" +
        "Taken together, the productivity, health, and fairness arguments make a four-day " +
        "week not a utopian indulgence but a serious proposal whose strongest objection bounds " +
        "its reach without breaking its logic. That is the best case, and it is a good one.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "Format 3 demands an advocate's brief. The opening commits squarely to the case FOR the four-day week and explicitly accepts the advocacy role ('This essay makes that case'), without secretly arguing against it."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note: "Three clearly labelled pillars (productivity, health, fairness) give the brief an ordered, easy-to-follow architecture — the right shape for a 'make the best case' prompt."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Anchored in the 2022 UK 4 Day Week Global pilot (61 companies, output maintained, retention) and the historical analogy to the two-day weekend — specific and apt rather than generic."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "Even an advocate's brief is stronger for meeting the best objection: the non-transferability-to-hours-bound-sectors point is stated fairly and answered (rotas, hiring, offset by lower absenteeism), bounding the policy without abandoning the case."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note: "The hours-are-a-poor-proxy-for-value move is the analytical core and is reused to defuse the objection, giving the essay a single coherent line of reasoning rather than three disconnected claims."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The conclusion recaps the three pillars in one sentence and stays on the advocacy task ('That is the best case, and it is a good one') without drifting into a balanced verdict the prompt did not ask for."
        }
      ]
    },

    /* --- essay-7073 -> prompt-690  Format 4: "What is X / why matter?" --- */
    {
      id: "essay-7073",
      promptId: "prompt-690",
      quality: "model",
      body:
        "The rule of law is the principle that everyone, including those who govern, is " +
        "bound by laws that are public, stable, applied prospectively, and enforced by " +
        "independent courts. So understood, it matters above all because it is the difference " +
        "between being ruled by predictable rules and being ruled by the unpredictable will " +
        "of whoever holds power. The definition is contested, and which definition we adopt " +
        "shapes the answer; so I begin there.\n\n" +
        "It helps to distinguish a thin conception from a thicker one. On the thin, formal " +
        "conception, the rule of law requires only that law have certain procedural " +
        "qualities: it must be promulgated, intelligible, not retroactive, and applied " +
        "consistently by courts to rulers and ruled alike. On the thicker conception, the " +
        "rule of law also requires that the law's content respect certain rights. I adopt the " +
        "thin conception, for a reason that matters to the rest of the argument: the formal " +
        "version is the one nearly everyone can agree on, and it already does enormous work. " +
        "A wicked law consistently applied is still better than arbitrary power, because at " +
        "least the citizen knows where she stands. Loading the concept with a full theory of " +
        "justice makes it stronger in the abstract but weaker as a shared standard.\n\n" +
        "Why, then, does it matter? First, because it constrains power. The same rules bind " +
        "the official and the citizen, so authority cannot be exercised on whim. The UK " +
        "Supreme Court's 2019 ruling that the prorogation of Parliament was unlawful shows the " +
        "principle in action: even the executive's prerogative was held to legal limits by an " +
        "independent court. Second, because it makes life planable. When rules are public and " +
        "stable, people can contract, invest, and order their affairs knowing the state will " +
        "not change the terms retrospectively. Economists consistently link secure, " +
        "predictable legal institutions to investment and growth precisely because " +
        "predictability lowers the risk of every transaction.\n\n" +
        "The significance is sharpest when the principle is absent. Where courts answer to " +
        "the ruling party, where laws are applied to enemies and suspended for friends, " +
        "citizens cannot trust that today's lawful act will not be punished tomorrow. The " +
        "erosion of judicial independence in Hungary after 2010 — through changes to court " +
        "appointments and retirement ages — is widely cited as a case in which the formal " +
        "structures of law survived while the rule of law itself drained away.\n\n" +
        "One might object that this overstates its importance: an unjust legal system, " +
        "however orderly, hardly deserves celebration, so the thin rule of law cannot be the " +
        "deep value it is made out to be. The objection is fair, and it marks the limit of my " +
        "claim. The rule of law is not the whole of justice and does not pretend to be; a " +
        "society can be law-governed and still unjust. But it is the precondition of the rest. " +
        "Without it, rights exist only at the pleasure of the powerful, and any further good " +
        "we might want from a legal system has no secure foundation. That is why it matters: " +
        "not because it guarantees a good state, but because nothing else good about a state " +
        "is safe without it.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "Format 4 has two linked tasks: define, then evaluate significance. The opening does both — a crisp one-sentence definition followed by a committed claim about why it matters — rather than treating the prompt as a yes/no debate."
        },
        {
          rubricDim: "clarity",
          fiveI: null,
          note: "The thin-vs-thick conception distinction is drawn explicitly and the essay commits to the thin reading, showing that the definition itself is argumentative work — exactly what this format rewards."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note: "Clean two-part architecture mirrors the prompt: a definition section, then a 'why it matters' section organised around two grounds (constraining power; making life planable)."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Significance is anchored concretely: the 2019 prorogation judgment for power-constraint, and post-2010 Hungary for what absence looks like — apt, specific, and not merely decorative."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The 'an orderly but unjust system hardly deserves celebration' objection is engaged and used to fix the precise scope of the claim (precondition of justice, not its whole), strengthening rather than weakening the thesis."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The final sentence crystallises the significance claim ('nothing else good about a state is safe without it') without introducing new evidence."
        }
      ]
    },

    /* --- essay-7074 -> prompt-692  Format 5: "Should…?" ------------------ */
    {
      id: "essay-7074",
      promptId: "prompt-692",
      quality: "model",
      body:
        "Yes — there should be limits on what consenting adults may agree to do to one " +
        "another, because consent, though weighty, is not the only value at stake, and the " +
        "state has a legitimate interest in preventing serious, irreversible harm even when " +
        "it is invited. My answer rests on an explicit value premise: individual autonomy is " +
        "a very strong reason to let people act as they choose, but it is not an absolute " +
        "trump that silences every competing consideration. Naming that premise is essential, " +
        "because a 'should' question of this kind cannot be settled by facts alone.\n\n" +
        "The presumption must nonetheless favour liberty. On the harm principle most clearly " +
        "stated by John Stuart Mill, the only purpose for which power can rightfully be " +
        "exercised over a competent adult against his will is to prevent harm to others; his " +
        "own good is not a sufficient warrant. Consent ordinarily removes the harm, because a " +
        "harm freely chosen is the chooser's own affair. So the burden lies on anyone who " +
        "would restrict consensual conduct, and most such conduct — however unusual — should " +
        "be left entirely alone. I am defending limits at the edges, not a general licence to " +
        "interfere. The history of laws policing private morality — criminalising " +
        "homosexuality, for instance — is a long catalogue of state overreach, and it should " +
        "make us deeply reluctant to intervene wherever the only person affected is the " +
        "consenting adult himself.\n\n" +
        "Those edges, however, are real, and they fall where consent becomes doubtful or the " +
        "harm becomes grave and irreversible. Consider serious bodily harm. English law in R " +
        "v Brown (1993) held that consent is no defence to the infliction of actual bodily " +
        "harm, and while the case is contested, the underlying worry is sound: where injury " +
        "is severe and lasting, the state's interest in protecting life and limb, and in " +
        "refusing to let serious violence be privately licensed, can outweigh the autonomy " +
        "interest. The same reasoning explains why the law does not enforce a contract of " +
        "slavery even if freely signed: an agreement to extinguish one's future freedom " +
        "destroys the very autonomy that made the agreement worth respecting.\n\n" +
        "The strongest objection is that this is paternalism in disguise: who is the state to " +
        "overrule a competent adult's considered choice about her own body and life? If " +
        "autonomy means anything, it means the right to make choices others find foolish or " +
        "repugnant. I take this seriously, and it is why my limits are narrow. But the " +
        "objection overlooks two things. First, consent is not always as free as it appears; " +
        "pressure, dependence, and inequality can hollow it out, and the law sensibly treats " +
        "some consents as unreliable. Second, even genuine consent does not dissolve every " +
        "public interest: society's refusal to enforce certain agreements protects not only " +
        "the individual but the principle that human beings are not mere instruments to be " +
        "disposed of, even by themselves.\n\n" +
        "So the verdict follows from the premise. Because autonomy is a strong but not " +
        "unlimited value, the law should permit the vast range of consensual conduct and " +
        "intervene only where harm is severe and irreversible or where consent cannot be " +
        "trusted. Limits there must be — few, reluctant, and carefully bounded, but real.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "A Format-5 'Should…?' question demands a normative verdict resting on an explicit value premise. Sentence 1 gives the verdict ('Yes — there should be limits') and immediately names the premise (autonomy is strong but not an absolute trump)."
        },
        {
          rubricDim: "clarity",
          fiveI: null,
          note: "The value premise is stated openly and acknowledged as load-bearing ('cannot be settled by facts alone'), which is precisely the move a 'should' prompt rewards."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note: "The argument is balanced and committed at once: it establishes a strong liberty presumption (Mill's harm principle) and then locates the narrow boundary where it yields, rather than asserting limits flatly."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Concrete legal anchors — R v Brown (1993) and the unenforceability of a slavery contract — give the abstract boundary real content."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The paternalism objection is stated in its strongest form and answered on two precise grounds (consent can be unfree; public interest survives genuine consent), which also explains why the limits are kept narrow."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The conclusion derives the verdict from the stated premise in two tight sentences ('few, reluctant, and carefully bounded, but real') with no new material."
        }
      ]
    },

    /* --- essay-7075 -> prompt-693  Format 5: "Should…? If so, how?" ------ */
    {
      id: "essay-7075",
      promptId: "prompt-693",
      quality: "model",
      body:
        "There should be no fixed legal cap on personal wealth, but the better target the " +
        "cap is meant to serve — limiting the political and social power that extreme wealth " +
        "confers — should be pursued directly, through progressive taxation of wealth and " +
        "inheritance. My answer therefore says 'not a hard ceiling', and, because the prompt " +
        "also asks <em>how</em>, sets out the mechanism I would use instead. The value premise " +
        "is this: what a just society must constrain is not the mere existence of large " +
        "fortunes but the unequal power and entrenched advantage they produce.\n\n" +
        "Start with why a hard cap is the wrong instrument. A legal maximum — say, a billion " +
        "pounds, above which wealth is confiscated — would be crude and easily evaded. " +
        "Fortunes of that size are held largely in shares whose value moves daily; a founder " +
        "whose company succeeds could breach the cap on paper without selling anything, and " +
        "the wealthy would simply relocate assets, citizenship, or themselves, as history with " +
        "blunt wealth controls suggests. Worse, a hard cap punishes the creation of value " +
        "itself, removing the incentive to build the enterprises that, taxed properly, fund " +
        "public goods. The instrument misfires because it aims at the wrong object: the number, " +
        "not the power.\n\n" +
        "Yet the impulse behind the cap is sound, which is why doing nothing is also wrong. " +
        "Extreme concentrations of wealth translate into concentrations of political voice — " +
        "through donations, media ownership, and lobbying — and into dynastic advantage that " +
        "fixes a child's prospects at birth. A society in which a handful of families can " +
        "shape elections and pass undiminished fortunes down the generations is not one of " +
        "equal citizenship in any meaningful sense. The legitimate worry is about power and " +
        "fairness, and it deserves a real response.\n\n" +
        "So here is the how. First, an annual progressive wealth tax on net assets above a " +
        "high threshold — the kind modelled by economists such as Emmanuel Saez and Gabriel " +
        "Zucman — set at a modest rate that trims the largest fortunes over time without " +
        "confiscating them. Second, a substantial reform of inheritance taxation to break the " +
        "dynastic transfer of advantage, taxing large bequests progressively while protecting " +
        "ordinary family estates. Third, transparency and enforcement: public beneficial-" +
        "ownership registers and coordinated international rules to make the offshore evasion " +
        "that defeats blunt measures far harder. Together these address the power that wealth " +
        "buys while leaving its creation intact.\n\n" +
        "The strongest objection is that this is timid — that only a hard ceiling truly ends " +
        "the obscenity of billion-pound fortunes while millions want, and that taxation merely " +
        "nibbles. I feel the moral force of this, but it mistakes the symbol for the substance. " +
        "A cap would produce capital flight and evasion and might raise less than a " +
        "well-enforced wealth-and-inheritance regime that actually funds redistribution. The " +
        "point is not to make a statement against large numbers but to dissolve the unequal " +
        "power those numbers represent — and graduated, enforceable taxation does that more " +
        "effectively than a line in the law no one can police.\n\n" +
        "So: no hard upper limit, but a serious, progressive, well-enforced tax on great " +
        "wealth and its inheritance. That answers both halves of the question — whether, and " +
        "how.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note: "When a 'Should…?' prompt adds 'If so, how?', the mechanism is part of the question. The opening commits to a verdict ('no fixed legal cap') AND promises the alternative mechanism, with the value premise named (constrain power, not the existence of fortunes)."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note: "The essay reframes the question from 'the number' to 'the power' and uses that single move to reject the cap, justify intervention, and select the tools — a coherent line rather than scattered points."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note: "The 'how' is delivered as a concrete three-part mechanism (annual wealth tax, inheritance reform, transparency/enforcement), satisfying the second clause of the prompt that a verdict alone would leave unanswered."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note: "Grounded in real proposals (the Saez–Zucman progressive wealth-tax model) and concrete instruments (beneficial-ownership registers), not vague gestures at 'taxing the rich'."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note: "The 'this is too timid; only a hard cap is just' objection is stated at full moral strength and rebutted on the merits (capital flight, evasion, lower yield than enforced taxation), keeping the verdict intact."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note: "The closing two sentences answer both halves of the prompt explicitly ('whether, and how') and add nothing new — tight and complete."
        }
      ]
    }

  );

})(typeof window !== "undefined" ? window : this);
