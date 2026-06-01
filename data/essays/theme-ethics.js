/*
 * theme-ethics.js — Section B content for the "Ethics & Morality" theme.
 *
 * Buckets written:
 *   argumentBanks  → argbank-ethics
 *   prompts        → prompt-640 .. prompt-644 (5 illustrative; the official
 *                    "species die out" prompt lives once as prompt-603)
 *   modelEssays    → essay-7040 (model), essay-7041 (model), essay-7042 (weak)
 *
 * IDs are globally unique; they do not collide with SAMPLE.js (essay-001/002,
 * prompt-001..003) or any mock file (prompt-1xx/2xx/3xx/4xx/5xx).
 * Source: all prompts are "illustrative" except where a model essay answers a
 * canonical official prompt (prompt-60X in fundamentals.js).
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-ethics.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }
  // Defensive bucket init: guard against a loader version that omits a bucket.
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))       { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays))   { DATA.modelEssays = []; }

  /* ---------------------------------------------------------------------- *
   * ARGUMENT BANK — argbank-ethics
   *
   * Briefing covers: animal rights/research, species extinction,
   * individual vs community / fairness vs justice, lying/honesty,
   * medical ethics, moral responsibility.
   * Framework anchors: consequentialism vs deontology noted throughout.
   * ---------------------------------------------------------------------- */
  DATA.argumentBanks.push({
    id: "argbank-ethics",
    theme: "ethics",

    positions: [
      // Animal rights & research
      "Animals capable of suffering have morally relevant interests; causing them pain for human benefit requires strong justification even when legally permitted (utilitarian baseline: Singer).",
      "Medical research on animals has produced vaccines, surgical techniques, and treatments for conditions from diabetes to HIV; an absolute ban would impose severe costs on human welfare.",
      "The 3Rs framework (Replace, Reduce, Refine) shows that animal research need not be all-or-nothing; regulation can reduce harm while preserving scientific progress.",

      // Species extinction
      "Each species lost permanently forecloses future knowledge, ecological services, and potential medicines; extinction is irreversible in a way ordinary resource depletion is not.",
      "Biodiversity has intrinsic value independent of human use: the argument from instrumental value alone systematically underweights nature's moral standing.",

      // Individual vs community / fairness vs justice
      "Fairness (equal treatment under the same rules) and justice (outcomes that correct prior disadvantage) can diverge; a fair procedure may produce unjust results when starting conditions are unequal.",
      "Individual rights set a floor that community welfare cannot breach; Kantian deontology treats persons as ends, never merely as means, even if overriding them would maximise aggregate welfare.",
      "Strict individual rights can entrench privilege; a community has a legitimate interest in outcomes, not merely procedures, when background inequalities are severe.",

      // Lying / honesty
      "Kant's categorical imperative condemns lying categorically: if universalised, the practice of lying destroys the trust that makes communication possible.",
      "Consequentialists permit or even require lying when the outcome is sufficiently better — the classic 'murderer at the door' case — treating honesty as instrumentally, not intrinsically, valuable.",
      "A middle position: there is a strong prima-facie duty of honesty that can be overridden by competing duties (preventing grave harm), but the override must be justified case by case.",

      // Medical ethics
      "Patient autonomy — the right to make informed decisions about one's own body — is a foundational principle of contemporary medical ethics (Beauchamp & Childress).",
      "Beneficence and non-maleficence can conflict with autonomy when a patient refuses life-saving treatment; the question is which principle takes precedence and who decides.",
      "Resource scarcity forces triage decisions that purely autonomy-based ethics cannot resolve; some utilitarian element (maximising life-years or QALYs) enters unavoidably into real-world medical allocation.",

      // Moral responsibility
      "Moral responsibility requires both the capacity to act otherwise and sufficient knowledge of what one is doing; diminished capacity (mental illness, compulsion, ignorance) reduces or removes culpability.",
      "Structural injustice distributes moral responsibility beyond individual agents to institutions and bystanders who benefit from unjust arrangements (Young's social connection model).",
      "Holding individuals responsible despite imperfect conditions is practically necessary: abandoning individual responsibility risks eroding the social norms that make cooperation possible."
    ],

    counterPositions: [
      // Against strong animal rights
      "Moral consideration traditionally tracks cognitive complexity; beings without self-concept or future-directed desires may have weaker claims than persons, making some degree of hierarchy defensible.",
      "If animal suffering is decisive, consistent application should also prohibit the far greater suffering animals inflict on each other in nature — a conclusion most proponents do not accept.",

      // Against extinction concern as absolute
      "Not all species loss is anthropogenic tragedy; extinction has occurred throughout evolutionary history and has been the engine of diversification. Treating all extinction as equivalent may conflate natural process with preventable harm.",
      "Allocating scarce conservation resources is itself an ethical act: protecting every species may divert funds from urgent human welfare needs in ways that are hard to justify.",

      // Against strict deontological individual rights
      "Pure deontology produces counter-intuitive results: refusing to lie even to a murderer to protect an innocent life prioritises rule-compliance over lives, which seems to get priorities wrong.",
      "No right is unlimited in practice: even free speech, property, and bodily autonomy are curtailed by law in ways most people accept. The debate is about where to draw lines, not whether to draw them.",

      // Against unconditional honesty
      "Social life depends on a variety of speech acts — tact, fiction, roleplay, white lies — that are not straightforwardly dishonest; treating all non-literal speech as morally equivalent to deception over-moralises ordinary communication.",

      // Against full patient autonomy
      "Autonomy presupposes adequate information and freedom from coercion; in conditions of pain, fear, or dependence, genuinely autonomous consent may be impossible, giving clinicians a legitimate paternalist role.",

      // Against strong individual moral responsibility
      "Retributive approaches to responsibility focus on blame and punishment in ways that may not reduce harm; a forward-looking, rehabilitative model can achieve better outcomes without the metaphysical baggage of desert."
    ],

    examples: [
      // Animal research
      "Development of the polio vaccine required primate studies; development of monoclonal antibody therapies has progressively reduced animal use through in-vitro alternatives — illustrating the 3Rs in practice.",
      "The thalidomide disaster (1950s-60s) was not caught by animal testing because the teratogenic effect was species-specific, showing the epistemic limits of animal models.",

      // Species extinction
      "The rosy periwinkle (Madagascar) yielded vinblastine and vincristine, chemotherapy drugs for leukaemia; its habitat was already being destroyed when scientists found it.",
      "The passenger pigeon — once the most numerous bird in North America — was driven to extinction by 1914 through hunting and habitat loss; no functional replacement exists.",

      // Individual vs community
      "Rawls's difference principle: social inequalities are just only if they benefit the least advantaged — a community-oriented constraint compatible with individual rights.",
      "Compulsory vaccination: individual refusal imposes risk on immunocompromised people unable to vaccinate, making a purely individualist analysis insufficient.",

      // Lying / honesty
      "Kant's own example of the murderer at the door: lying to save an innocent life violates the categorical imperative; most contemporary ethicists find this result unacceptable.",
      "Wartime deception (e.g. Operation Bodyguard, 1944) is widely regarded as justified, suggesting consequentialist overrides of honesty are available in extreme cases.",

      // Medical ethics
      "Jehovah's Witness cases: courts in England regularly uphold adult refusals of blood transfusions as autonomous decisions, even when death results.",
      "Liverpool Care Pathway controversy (UK, 2012-13): end-of-life sedation raised questions about the boundary between palliation and euthanasia, and who should decide.",
      "The triage decisions made during COVID-19 ICU surges required age/comorbidity scoring, bringing utilitarian allocation into mainstream clinical practice.",

      // Moral responsibility
      "The Milgram obedience experiments: ordinary people administered apparent electric shocks under instruction, raising questions about how much individual responsibility shifts under authority.",
      "Corporate manslaughter law extends responsibility to organisations, recognising that diffuse decision-making can produce fatal outcomes for which no single individual is fully responsible."
    ],

    facts: [
      "The UK Animals (Scientific Procedures) Act 1986 requires cost-benefit assessment for every licensed animal experiment; approximately 2.8 million procedures were carried out on animals in Great Britain in 2022 (Home Office statistics).",
      "The IUCN Red List (2023) classifies approximately 44,000 of the 157,000 assessed species as threatened with extinction.",
      "The four principles of biomedical ethics (autonomy, beneficence, non-maleficence, justice) were formalised by Beauchamp and Childress in Principles of Biomedical Ethics (1979), now in its 8th edition.",
      "In England and Wales, the Mental Capacity Act 2005 codifies a presumption of capacity: an adult is assumed able to make their own medical decisions unless demonstrated otherwise.",
      "Peter Singer's Animal Liberation (1975) introduced 'speciesism' into mainstream philosophical debate; his utilitarian argument extends moral consideration to any being capable of suffering.",
      "Immanuel Kant's Groundwork of the Metaphysics of Morals (1785) formulates the categorical imperative: act only according to maxims you could will to be universal laws.",
      "The UN Convention on Biological Diversity (1992) commits signatories to conserving biodiversity and using biological resources sustainably; 196 parties have ratified it.",
      // Framework anchors for deployment in essays
      "Consequentialism evaluates actions solely by outcomes (aggregate welfare, net happiness); deontology evaluates actions by whether they conform to duties/rules regardless of outcome. Both frameworks are regularly deployed in LNAT ethics prompts.",
      "Virtue ethics (Aristotle) asks what a person of good character would do, rather than calculating outcomes or applying rules — a third framework useful for medical ethics and honesty questions."
    ]
  });

  /* ---------------------------------------------------------------------- *
   * ESSAY PROMPTS — 5 illustrative ethics prompts (prompt-640 .. prompt-644)
   * The official "species die out" prompt lives once as prompt-603.
   * ---------------------------------------------------------------------- */
  DATA.prompts.push(
    {
      id: "prompt-640",
      theme: "ethics",
      text: "Should patients always have the final say over their own medical treatment?",
      source: "illustrative"
    },
    {
      id: "prompt-641",
      theme: "ethics",
      text: "Is it ever morally permissible to lie?",
      source: "illustrative"
    },
    {
      id: "prompt-642",
      theme: "ethics",
      text: "Do we have stronger moral obligations to people close to us than to strangers?",
      source: "illustrative"
    },
    {
      id: "prompt-643",
      theme: "ethics",
      text: "Should animals be used in medical research?",
      source: "illustrative"
    },
    {
      id: "prompt-644",
      theme: "ethics",
      text: "Can individuals ever be held morally responsible for the consequences of collective action?",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAY 1 — essay-7040 (strong, quality:'model')
   * Prompt: prompt-603 "Does it matter if some animal and plant species die out?"
   * (canonical official prompt). ~550 words. Committed position: YES it matters,
   * on both instrumental and intrinsic grounds, but the argument must be calibrated.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7040",
    promptId: "prompt-603",
    quality: "model",
    body:
      "Species extinction matters, and matters deeply — but not primarily for the reason " +
      "most often given. The standard defence of biodiversity leans on instrumental value: " +
      "lost species may harbour undiscovered medicines, regulate ecosystems we depend on, " +
      "or hold genetic secrets science cannot yet decode. These arguments are real. The " +
      "rosy periwinkle — a Madagascan plant whose alkaloids became front-line leukaemia " +
      "drugs — is their most-cited example, and it deserves its prominence. Yet purely " +
      "instrumental reasoning carries a structural weakness: it implies that a species " +
      "whose removal produces no measurable human cost simply does not matter. Applied " +
      "consistently, this logic would permit the extinction of any creature that science " +
      "has not yet found useful. That conclusion is very difficult to defend, and most " +
      "people who accept the instrumental premise would reject it if they followed it " +
      "through to its end.\n\n" +
      "A stronger case rests on intrinsic value. A species is an evolved lineage, " +
      "millions of years in the making, capable of a range of experience or ecological " +
      "role that nothing else occupies in quite the same way. To extinguish it " +
      "permanently — not merely to diminish its numbers but to remove it from existence " +
      "forever — is a qualitatively different act from harvesting a renewable resource. " +
      "Irreversibility is the morally significant feature. We can replant a forest; we " +
      "cannot reconstitute the passenger pigeon, which went from perhaps three billion " +
      "individuals to zero between the early nineteenth century and 1914, driven to " +
      "extinction by commercial hunting. A world that treats the permanent destruction " +
      "of unique forms of life as a matter of indifference to be weighed only against " +
      "short-term economic gain has adopted a narrow conception of what counts as a " +
      "loss — one that most people would not apply to the destruction of irreplaceable " +
      "cultural artefacts, and that is hard to justify applying to irreplaceable " +
      "biological lineages.\n\n" +
      "The most serious objection is ecological: extinction has always occurred. The " +
      "fossil record shows five mass extinctions before humans existed, and evolution " +
      "depends on species turnover. If natural extinction is not a moral catastrophe, " +
      "why should human-caused extinction be one? The answer lies in rate and agency. " +
      "Current extinction rates are estimated at one hundred to one thousand times the " +
      "natural background rate, driven almost entirely by habitat destruction, " +
      "overexploitation, and climate change. The relevant moral comparison is not between " +
      "human-caused and geological extinction, which are categorically different " +
      "phenomena, but between human choices that accelerate destruction and human choices " +
      "that do not. We are not passive witnesses to a natural process; we are its " +
      "principal cause, and that makes us responsible for its effects in a way that no " +
      "asteroid or ice age was.\n\n" +
      "A further objection is practical: conservation competes with urgent human needs. " +
      "Diverting substantial resources from poverty alleviation or public health to " +
      "protect obscure beetles seems hard to justify to people who face immediate " +
      "deprivation. This tension is genuine, and any honest account of conservation " +
      "ethics must acknowledge it. But the objection shows only that conservation must " +
      "be prioritised rather than pursued without limit — not that extinction is morally " +
      "indifferent. The question is not whether species matter but how much, and against " +
      "what competing claims, which is a question of priority rather than of principle.\n\n" +
      "Extinction matters, then, for three reasons that compound each other: it is " +
      "permanent in a way most harms are not; the intrinsic value of evolved lineages " +
      "is real and not reducible to human use; and the current crisis is driven by " +
      "choices within our power to change. Acknowledging that other claims also matter " +
      "is not the same as saying extinction does not.",
    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The opening sentence commits a clear position ('matters, and matters deeply') while immediately flagging a refinement ('but not for the reason most often given') — no fence-sitting, with an original angle."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraphs 1 and 2 develop two distinct arguments: instrumental value (real but structurally weak) then intrinsic value (the stronger claim). The essay doesn't merely assert; it explains why the instrumental argument alone is insufficient."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Two counterarguments are engaged: (1) natural extinction has always occurred — rebutted by distinguishing rate and agency; (2) conservation competes with human need — conceded as genuine but shown not to be decisive."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Concrete examples anchor both sides: rosy periwinkle (instrumental value), passenger pigeon (irreversibility). These are specific and accurate, not generic."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The conclusion recaps in three tight clauses, each mapping to a paragraph's argument. No new content is introduced; no padding."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The pivot at 'irreversibility is the morally significant feature' signals to the reader exactly where the central claim lives — good signposting within the body."
      }
    ]
  });

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAY 2 — essay-7041 (strong, quality:'model')
   * Prompt: prompt-641 "Is it ever morally permissible to lie?"
   * ~540 words. Committed position: YES — lying is prima facie wrong but can
   * be morally required when it prevents serious harm.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7041",
    promptId: "prompt-641",
    quality: "model",
    body:
      "Lying is morally permissible, and sometimes morally required, when telling the " +
      "truth would cause serious harm that the lie can prevent. This conclusion cuts " +
      "against Kant's famous categorical prohibition but, I will argue, the Kantian " +
      "position rests on a misapplication of its own premises — one that reveals a " +
      "deeper problem with any ethics that treats a single rule as absolutely binding " +
      "regardless of consequences.\n\n" +
      "Start with what is not in dispute. Lying is presumptively wrong because it " +
      "manipulates the listener's beliefs without consent, treats them as a means " +
      "rather than an end, and, if universalised, destroys the trust that makes " +
      "communication valuable at all. These are genuine moral costs that a permissive " +
      "account of lying must reckon with honestly. The social practice of truth-telling " +
      "is enormously valuable, and most lies — told for personal convenience, to avoid " +
      "embarrassment, or to gain advantage — corrode it without sufficient justification. " +
      "The question is whether those costs are always decisive, in every possible " +
      "circumstance, or whether competing moral duties can sometimes outweigh them.\n\n" +
      "Kant himself said yes, they are always decisive. Even to a would-be murderer " +
      "asking where your friend is hiding, you must tell the truth. This is not a " +
      "caricature; Kant stated it explicitly in 'On a Supposed Right to Lie from " +
      "Philanthropy' (1797). The difficulty is that this verdict requires weighing " +
      "the duty of honesty against the duty not to be complicit in murder — and Kant " +
      "simply asserts that honesty always wins. He offers no argument for that priority " +
      "ranking; he assumes it and derives the conclusion from it. Once we recognise " +
      "that multiple genuine duties can conflict, the question becomes which should " +
      "prevail in particular circumstances, and that answer cannot be read off the " +
      "categorical imperative alone without begging the question at issue.\n\n" +
      "A better account treats honesty as a strong prima-facie duty — one that holds " +
      "in the vast majority of cases and cannot be set aside for convenience, " +
      "self-interest, or the mere avoidance of awkward truths — but that can be " +
      "overridden by a competing duty of sufficient weight. Lying to the murderer at " +
      "the door, or lying to shield a persecuted person from those who would harm them, " +
      "satisfies two conditions that constrain the permission tightly: the harm " +
      "prevented is severe and not otherwise avoidable, and the deception is directed " +
      "at the person creating the threat rather than an innocent third party. Operation " +
      "Bodyguard, the 1944 Allied deception campaign that concealed the Normandy " +
      "landing site, is a large-scale historical case where virtually all moral " +
      "traditions — including most religious ones — have found the deception justified. " +
      "What these cases share is that truthfulness would make the speaker an instrument " +
      "of unjust harm.\n\n" +
      "The consequentialist might object that this analysis still concedes too much to " +
      "deontology: if outcomes determine everything, we should lie whenever the calculus " +
      "favours it, with no threshold of severity required. But this proves too much. " +
      "A world in which lying is permissible whenever the liar judges it net beneficial " +
      "is one in which the social practice of truth-telling collapses, because " +
      "self-interested judgements of benefit are systematically unreliable. The " +
      "prima-facie duty is itself partly justified by its aggregate consequences; " +
      "the rule must be nearly absolute precisely because the exceptions invite " +
      "rationalisation.\n\n" +
      "Lying is not a moral indulgence to be rationalised after the fact. It is a " +
      "serious wrong that carries a heavy burden of justification. When that burden " +
      "is genuinely met — when truth-telling would make the speaker complicit in " +
      "serious harm to an innocent person — lying is not merely excusable. " +
      "It is the right thing to do.",
    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Thesis is committed and two-part in sentence 1: lying is permissible AND sometimes required. 'This conclusion cuts against Kant' signals that the essay knows its controversial ground."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "The argument builds in stages: (1) grant the moral costs of lying; (2) show Kant assumes rather than argues his priority ranking; (3) offer a prima-facie duty model with constraining conditions; (4) rebut pure consequentialism. Each step is distinct."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "The Kantian position is engaged directly and fairly (even citing the 1797 text) before being rebutted on internal grounds — showing the author understands the strongest version of the opposing view."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Two distinct examples: the 'murderer at the door' (Kant, 1797) tests the deontological absolute to destruction; Operation Bodyguard (1944) provides a large-scale historical case showing cross-traditional consensus that the deception was justified."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "Para 2 concedes moral costs; para 3 attacks the deontological absolute; para 4 builds the positive account; para 5 pre-empts pure consequentialism; conclusion re-states the position. The five-part arc is clear throughout."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Pitfall AVOIDED: the essay sets out conditions that constrain its own permission (targeted at the threat-creator, harm severe and not otherwise avoidable) and holds to them, avoiding self-contradiction."
      }
    ]
  });

  /* ---------------------------------------------------------------------- *
   * WEAK ESSAY — essay-7042 (quality:'weak')
   * Prompt: prompt-643 "Should animals be used in medical research?"
   * Five I's failures: Irresolute, Indecisive, Imprecise, Inconsistent, Indignant.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7042",
    promptId: "prompt-643",
    quality: "weak",
    body:
      "The question of whether animals should be used in medical research is a very " +
      "difficult and controversial one. There are many different views on both sides " +
      "and it is hard to say who is right. Some people feel very strongly that it is " +
      "completely wrong, while other people think it is totally necessary. Both of " +
      "these views make sense in their own way.\n\n" +
      "On one hand, animals obviously have feelings and can suffer, which is bad. " +
      "Nobody wants animals to suffer unnecessarily. On the other hand, medical " +
      "research has saved many lives, and some of this research needed animals. So " +
      "it could be argued that it is necessary, up to a point, although it depends " +
      "on what kind of research we are talking about and how much suffering is " +
      "involved, which is hard to measure.\n\n" +
      "It is frankly outrageous that in the twenty-first century we are still " +
      "debating this. Surely by now scientists should have found other ways to do " +
      "their research without hurting innocent animals who cannot consent or speak " +
      "for themselves. The fact that this is still happening shows a serious failure " +
      "of society's values and a shocking lack of moral progress.\n\n" +
      "At the same time, we cannot ignore the fact that many medicines exist because " +
      "of animal research. So maybe it is acceptable in some cases but not others, " +
      "or perhaps it should be reduced as much as possible while still allowing it " +
      "when truly necessary. It is very difficult to draw the line, and reasonable " +
      "people can disagree.\n\n" +
      "In conclusion, this is a deeply complex ethical issue with no easy answers. " +
      "Both sides have valid points. What is most important is that we treat animals " +
      "humanely and that scientists try their best to minimise suffering wherever " +
      "possible, while also continuing to make medical progress for the benefit of " +
      "humanity. Hopefully in the future technology will solve this problem for us.",
    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The essay refuses to commit to any position across five paragraphs. 'Both of these views make sense in their own way' (para 1) and 'Both sides have valid points' (conclusion) are textbook fence-sitting. No thesis is ever stated."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Mid-essay hedges accumulate: 'up to a point', 'it depends', 'maybe it is acceptable in some cases but not others', 'perhaps it should be reduced'. Each qualification cancels the one before it; the essay never commits even provisionally."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Vague language throughout: 'many lives', 'some of this research', 'how much suffering is involved', 'moral progress', 'as much as possible'. No concrete examples, statistics, or named frameworks appear. 'Obviously' and 'surely' substitute assertion for argument."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Paragraph 3 ('frankly outrageous', 'shocking lack of moral progress') attacks the situation emotionally instead of engaging with it argumentatively. This is the Indignant flaw: expressing outrage at the topic rather than reasoning about it."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Para 3 implies animal research is always wrong ('outrageous'); para 4 concedes it may be acceptable in some cases. These positions directly contradict each other and the essay makes no attempt to reconcile them."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Contrast with the model essays: there is no thesis sentence at any point. The conclusion ('no easy answers') restates the opening indecision rather than resolving it. The final sentence ('Hopefully technology will solve this') abandons the essay's task entirely."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "There is no counterargument structure: both 'sides' are listed in every paragraph but neither is engaged seriously or rebutted. Listing is not the same as reasoning."
      }
    ]
  });

})(typeof window !== "undefined" ? window : this);
