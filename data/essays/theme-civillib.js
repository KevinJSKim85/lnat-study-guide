/*
 * theme-civillib.js — Section B content for the "Civil Liberties & Rights" theme.
 *
 * Delivers into window.LNAT_DATA (requires loader.js first):
 *   argumentBanks  → argbank-civil-liberties
 *   prompts        → prompt-620 … prompt-624 (5 illustrative; the official
 *                    "sacrifice liberties" prompt lives once as prompt-606)
 *   modelEssays    → essay-7020 (model), essay-7021 (model), essay-7022 (weak)
 *
 * All content is illustrative. English only. Conforms to data/SCHEMA.md.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-civillib.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  // Defensive: ensure expected buckets exist even if loader version is older.
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))        { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays))    { DATA.modelEssays = []; }

  /* ---------------------------------------------------------------------- *
   * ARGUMENT BANK — Civil Liberties & Rights
   *
   * Covers: liberty vs security (terrorism), privacy vs public interest /
   * surveillance, free speech vs hate speech, right to be forgotten,
   * protest rights.
   * ---------------------------------------------------------------------- */
  DATA.argumentBanks.push({
    id: "argbank-civil-liberties",
    theme: "civil-liberties",

    positions: [
      /* Liberty vs security */
      "Permanent or sweeping security powers erode the rule of law: once granted, emergency powers are rarely repealed, creating a ratchet that permanently narrows civil space (UK Terrorism Act 2000 powers, US PATRIOT Act Section 215 metadata collection).",
      "Civil liberties are not privileges but preconditions of legitimate government; restricting them to fight terrorism risks handing terrorists a secondary victory — the reshaping of open societies in their own authoritarian image.",
      "Proportionality is the proper test: targeted, time-limited, judicially supervised surveillance is defensible; mass, suspicionless collection is not, because the harm to innocent citizens outweighs marginal security gains.",

      /* Privacy vs public interest / surveillance */
      "A right to privacy protects not merely embarrassing secrets but the cognitive freedom to think, dissent, and organise without chilling effect; surveillance reduces all three even when no data is ever used against anyone.",
      "Transparency and accountability — not blanket secrecy — are the legitimate aims of freedom-of-information culture; privacy norms protect individuals, not institutions, and the two should not be conflated.",
      "Data minimisation and purpose limitation (as in GDPR Articles 5–6) are workable middle paths: collect only what is needed, use it only for the stated purpose, and delete it thereafter.",

      /* Free speech vs hate speech */
      "Classic liberal free-speech arguments (Mill's marketplace of ideas; Brandeis's 'more speech' remedy) rest on the premise that bad ideas are best defeated in open debate, not suppressed; suppression drives them underground and grants them the glamour of persecution.",
      "The harm principle itself licenses restriction: speech that directly incites violence, dehumanises a group, or produces a hostile environment causes demonstrable harm that restrictions can mitigate — as the UK's Public Order Act 1986 and Germany's Volksverhetzung law recognise.",
      "Context determines the harm of speech: the same statement that is robust political debate in a university seminar may constitute targeted harassment on a social-media platform directed at a private individual.",

      /* Right to be forgotten */
      "The right to be forgotten (CJEU ruling in Google Spain v AEPD, 2014; GDPR Article 17) recognises that digital permanence distorts the social function of memory: individuals change, but search results do not.",
      "Public figures and those who have committed serious offences have a diminished claim to erasure compared with private individuals whose minor past errors would otherwise define them indefinitely online.",

      /* Protest rights */
      "The right to protest in public space is intrinsically valuable to democracy: it is the mechanism by which groups excluded from formal political power make themselves heard (suffragettes, civil-rights movement, anti-apartheid movement).",
      "Conditions on protest — time, place, manner restrictions — are legitimate and proportionate only when viewpoint-neutral and when alternative adequate means of communication remain genuinely available."
    ],

    counterPositions: [
      /* Liberty vs security */
      "Security is itself a civil liberty: the freedom to walk safely through a city, board an aircraft without fear, or attend a public event is meaningless if terrorism renders those spaces dangerous; some curtailment of abstract liberty to protect concrete safety is a rational trade.",
      "Sunset clauses and parliamentary oversight can prevent the ratchet effect; the argument that powers are never repealed is empirical, not logical, and in several jurisdictions broad post-9/11 powers have since been narrowed or struck down.",

      /* Privacy vs public interest */
      "Aggregated anonymised data can deliver enormous public goods — pandemic modelling, traffic management, fraud detection — that individualised consent-based collection cannot; an absolutist privacy position would foreclose these benefits.",
      "The chilling-effect argument proves too much: individuals routinely share intimate details on social media voluntarily; the claimed deterrent effect of government surveillance on ordinary behaviour is empirically contested.",

      /* Free speech vs hate speech */
      "Permitting hate speech does not produce a genuine marketplace of ideas when the targets are silenced by fear, harassment, or exclusion; a speech regime that formally protects all voices but practically excludes vulnerable minorities is not truly liberal.",
      "The 'slippery slope to censorship' argument is weakened by jurisdictions (Germany, Canada, Sweden) that have maintained both robust hate-speech laws and functioning liberal democracies for decades; suppression of incitement is not suppression of dissent.",

      /* Right to be forgotten */
      "Press freedom and historical accuracy both suffer when individuals can scrub accurate, lawfully published information from search indices; the practical beneficiaries are often powerful people seeking to suppress legitimate accountability journalism.",
      "Placing erasure decisions on private companies (Google, Meta) creates an unsupervised private censorship layer that is neither democratically accountable nor judicially reviewed in most cases.",

      /* Protest rights */
      "Preventing disruption to emergency services, road traffic, and uninvolved third parties is a legitimate state interest that justifies reasonable restrictions on protest methods, even if not on protest content (Highways Act 1980 injunctions; UK Police, Crime, Sentencing and Courts Act 2022 noise provisions)."
    ],

    examples: [
      /* Liberty vs security */
      "Post-9/11: US PATRIOT Act Section 215 authorised bulk telephone metadata collection; ruled unlawful by the Second Circuit in 2015 (ACLU v Clapper) — a concrete example of courts reining in disproportionate surveillance.",
      "UK: Terrorism Act 2000 stop-and-search powers (Section 44) were held incompatible with ECHR Article 8 by the European Court of Human Rights in Gillan and Quinton v UK (2010) — illustrating liberty-security tension resolved in favour of rights.",
      "France 2015: State of emergency powers introduced after the Paris attacks were repeatedly extended before being incorporated into permanent law in 2017 — evidence for the ratchet-effect argument.",

      /* Privacy */
      "Edward Snowden revelations (2013): disclosed GCHQ/NSA mass-metadata collection programmes; triggered the USA FREEDOM Act 2015 and GDPR negotiations — showing how disclosure reshapes surveillance law.",
      "GDPR (EU, 2018): introduced the right to erasure (Article 17), data minimisation, and purpose limitation; provides a concrete legislative middle path between privacy absolutism and unrestricted collection.",

      /* Free speech / hate speech */
      "Brandenburg v Ohio (US Supreme Court, 1969): incitement standard — only speech directed to inciting imminent lawless action and likely to produce it may be restricted; a narrow, concrete test contrasting with broader European approaches.",
      "Germany's Volksverhetzung (Section 130 StGB): prohibits incitement to hatred against a segment of the population; Germany combines this with strong democratic institutions, weakening the slippery-slope objection.",
      "Twitter / X content moderation: private platform decisions to deplatform political figures (Trump ban, 2021) illustrate that free-speech debates now involve corporate power as much as state action.",

      /* Right to be forgotten */
      "Google Spain v AEPD (CJEU, 2014): Spanish businessman succeeded in removing a decade-old newspaper notice about debt recovery proceedings from Google results; the ruling recognised privacy interests can override accurate public information.",
      "UK journalists' objections (2023): investigations found politicians and convicted criminals using GDPR erasure requests to pressure news organisations into removing legitimately published articles.",

      /* Protest */
      "Suffragette movement (UK, 1903–1918): sustained civil disobedience including property destruction alongside peaceful marching; the movement illustrates that purely symbolic protest sometimes proves insufficient and disruption is historically effective.",
      "Black Lives Matter protests (2020): global demonstrations following George Floyd's killing led to measurable policy changes in several jurisdictions — demonstrating protest's democratic function.",
      "UK Police, Crime, Sentencing and Courts Act 2022: introduced noise and 'serious disruption' thresholds for protest; critics argued these criminalise effective protest; the Act became a major civil-liberties controversy."
    ],

    facts: [
      "ECHR Article 8 (right to respect for private and family life), Article 10 (freedom of expression), and Article 11 (freedom of assembly and association) are the three Convention rights most directly engaged by civil-liberties debates.",
      "GDPR Article 17 (right to erasure) is qualified, not absolute: it does not apply where processing is necessary for exercising the right of freedom of expression and information, or for archiving in the public interest.",
      "The European Court of Human Rights proportionality test requires: (1) interference is prescribed by law; (2) pursues a legitimate aim; (3) is necessary in a democratic society — a three-stage framework applicable across all civil-liberties debates.",
      "UK Human Rights Act 1998 incorporates ECHR rights into domestic law; courts must interpret legislation compatibly with Convention rights and may issue declarations of incompatibility.",
      "The Brandenburg incitement standard (US) is significantly narrower than the UK Public Order Act 1986 standard, illustrating how common-law democracies have reached different free-speech balances.",
      "Ofcom's Online Safety Act 2023 (UK) introduced duties on platforms to remove illegal content (including hate speech) proactively — a significant shift from the notice-and-takedown model.",
      "'Chilling effect' is a recognised legal doctrine: US Supreme Court has held that vague or overbroad laws violate the First Amendment partly because uncertainty about their scope deters protected speech (NAACP v Button, 1963)."
    ]
  });

  /* ---------------------------------------------------------------------- *
   * ESSAY PROMPTS — 6 illustrative prompts, theme: civil-liberties
   * IDs: prompt-620 … prompt-625
   * ---------------------------------------------------------------------- */
  DATA.prompts.push(
    {
      id: "prompt-620",
      theme: "civil-liberties",
      text: "Should individuals have the legal right to demand that search engines remove accurate information about them?",
      source: "illustrative"
    },
    {
      id: "prompt-621",
      theme: "civil-liberties",
      text: "Is hate speech a legitimate exception to the principle of free expression?",
      source: "illustrative"
    },
    {
      id: "prompt-622",
      theme: "civil-liberties",
      text: "Mass surveillance by governments is never compatible with a free society. Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-623",
      theme: "civil-liberties",
      text: "Should the right to protest be restricted when it causes significant disruption to the public?",
      source: "illustrative"
    },
    {
      id: "prompt-624",
      theme: "civil-liberties",
      text: "Privacy and transparency are irreconcilably in conflict. Discuss.",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAYS
   * ---------------------------------------------------------------------- */

  /* --- MODEL 1 (essay-7020): strong — prompt-606 "sacrifice liberties" --- */
  DATA.modelEssays.push({
    id: "essay-7020",
    promptId: "prompt-606",
    quality: "model",
    body:
      "The claim that defeating terrorism requires sacrificing traditional liberties " +
      "contains two hidden assumptions: that the sacrifice is genuinely necessary, and " +
      "that it will actually succeed. Both are contestable. My argument is that " +
      "proportionate, supervised restrictions on liberty can be justified in genuine " +
      "emergencies, but the sweeping version of the claim — that traditional liberties " +
      "must be surrendered as a class — is both empirically unsupported and " +
      "self-defeating.\n\n" +

      "The strongest case for accepting curtailment begins with the observation that " +
      "security is itself a liberty. The freedom to travel, assemble, and work without " +
      "fear of violence is not separable from civil liberty in general; it is part of " +
      "what civil liberty means in practice. Where a specific, credible threat justifies " +
      "targeted surveillance of identified suspects, the proportionality calculus may " +
      "tip toward restriction — particularly if the measure is time-limited, judicially " +
      "authorised, and subject to parliamentary review. The ECHR framework captures this " +
      "precisely: interference with rights is lawful only if prescribed by law, directed " +
      "at a legitimate aim, and necessary in a democratic society. On this model, " +
      "security and liberty are not opposites but overlapping goods, each requiring the " +
      "other to be meaningful.\n\n" +

      "The prompt's language, however, reaches far beyond this limited case. 'We must " +
      "be prepared' implies open-ended readiness; 'sacrifice' implies permanent loss; " +
      "'traditional liberties' implicates the whole architecture of rights, not a " +
      "specific power. History gives reason for caution. Post-9/11, Section 215 of the " +
      "US PATRIOT Act authorised bulk telephone metadata collection on hundreds of " +
      "millions of ordinary citizens — far beyond any targeted threat — before the " +
      "Second Circuit ruled it unlawful in ACLU v Clapper (2015). In France, " +
      "state-of-emergency powers introduced after the 2015 Paris attacks were quietly " +
      "absorbed into permanent statute in 2017, confirming the ratchet dynamic critics " +
      "had warned of from the outset. These episodes suggest that broad grants of " +
      "security power tend to expand, not contract, once enacted.\n\n" +

      "There is also a logical problem with the sweeping version of the claim. Open " +
      "elections, independent courts, and a free press are themselves counterterrorism " +
      "assets: they delegitimise terrorist narratives, create legitimate channels for " +
      "political grievance, and preserve the popular consent on which effective " +
      "intelligence cooperation depends. Dismantling those institutions in the name " +
      "of security removes the very features that distinguish the state being defended " +
      "from the authoritarianism terrorists often invoke to justify their violence. " +
      "A state that responds to an attack on its freedoms by abolishing those " +
      "freedoms has handed its adversary a victory no bomb could achieve. " +
      "The sweeping version of the claim thus defeats itself at the point it succeeds.\n\n" +

      "The answer, therefore, is not that liberty must yield to security in the " +
      "abstract, but that specific, targeted, judicially reviewed measures are " +
      "permissible when the threat is concrete and the restriction proportionate. " +
      "Getting that calibration right is demanding but not impossible: the ECHR " +
      "proportionality framework, applied by independent courts, provides exactly " +
      "the mechanism for it. We should reject the blanket claim not because " +
      "national security is unimportant — it is fundamental — but because the " +
      "evidence suggests that sacrificing traditional liberties wholesale is as " +
      "likely to weaken the state as to protect it.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The thesis is committed in the final two sentences of paragraph 1: proportionate targeted restriction is defensible; the blanket version of the claim is not. The essay never hedges between these two positions."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraphs 2 and 4 each develop a distinct argument — the security-as-liberty case (with the ECHR three-stage test), then the logical self-defeat argument — rather than restating the same point twice."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 2 presents the strongest version of the opposing case (security is a liberty; ECHR proportionality framework) and grants it limited validity before paragraph 3 narrows the claim using historical evidence."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Three concrete instances are deployed: ACLU v Clapper (2015) on bulk metadata, France's 2015–2017 emergency-to-permanent-statute ratchet, and the ECHR three-stage proportionality test — each doing specific argumentative work rather than decorating the prose."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "Five-paragraph structure follows the recommended LNAT pattern: intro with thesis → concession + qualified agreement (security-as-liberty) → evidence against the strong claim → logical rebuttal → conclusion that restates and sharpens the thesis."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The opening move — unpacking the two hidden assumptions in the prompt — is original and immediately productive, setting up both sides without padding. The closing line ('as likely to weaken the state as to protect it') closes the argument without adding new material."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Pitfall AVOIDED: the essay engages the prompt analytically rather than rejecting it as obviously wrong. It grants the strongest counter-case before rebutting the sweeping version."
      }
    ]
  });

  /* --- MODEL 2 (essay-7021): strong — prompt-621 "hate speech exception" - */
  DATA.modelEssays.push({
    id: "essay-7021",
    promptId: "prompt-621",
    quality: "model",
    body:
      "Hate speech laws are often caricatured as simple censorship, but the real " +
      "question is narrower: does speech that dehumanises a group on grounds of race, " +
      "religion, or sexual orientation fall within the protection that free-expression " +
      "norms are designed to give? My answer is yes — hate speech is a legitimate " +
      "exception — but the exception must be tightly defined if it is not to swallow " +
      "the principle it qualifies.\n\n" +

      "The case for exception rests on the harm principle, not on offence alone. Mill's " +
      "defence of free expression presupposed a marketplace of ideas in which all " +
      "voices could participate on equal terms. Speech that systematically degrades a " +
      "group's standing — treating members as subhuman or as legitimate objects of " +
      "violence — forecloses that participation before any counter-argument is possible. " +
      "The targets are silenced not by law but by the speech itself, through fear, " +
      "social exclusion, and internalised stigma. Invoking Mill in defence of " +
      "dehumanising speech misreads him: he defended the right to persuade, not the " +
      "right to expel others from the conversation. An argument for unrestricted " +
      "expression that ignores this silencing effect protects the form of liberal " +
      "speech norms while undermining their substance.\n\n" +

      "The slippery-slope objection — that any hate-speech restriction slides into " +
      "political censorship — is weakened by comparative evidence. Germany has " +
      "maintained Volksverhetzung (incitement to hatred, Section 130 StGB) for " +
      "decades alongside a functioning democracy, a vigorous press, and robust " +
      "political debate. Canada's Section 319 of the Criminal Code has coexisted with " +
      "wide political pluralism. Sweden and the Netherlands enforce similar provisions " +
      "without any systematic suppression of political dissent. If the slope were as " +
      "slippery as critics claim, these democracies should by now have slid into " +
      "authoritarianism. They have not, which suggests that the gradient depends on " +
      "how a restriction is written and enforced — on institutional design, not on the " +
      "mere existence of a boundary. The slope is real if the definition is vague; " +
      "it is manageable when the definition is tight.\n\n" +

      "The genuine risk lies in definition, not in principle. A restriction limited to " +
      "speech that (a) is directed at a group defined by a protected characteristic, " +
      "(b) uses language that dehumanises or calls for violence, and (c) is likely to " +
      "produce a hostile environment is defensible. Restrictions that extend to causing " +
      "offence, discomfort, or robust political disagreement are not. The American " +
      "Brandenburg standard — requiring incitement of imminent lawless action likely to " +
      "produce it — is arguably too narrow, leaving a wide space in which systematic " +
      "dehumanisation escapes legal sanction entirely. The UK Public Order Act 1986 " +
      "framework, with its requirement of intent or likelihood of stirring racial or " +
      "religious hatred, offers a more workable middle ground while remaining far short " +
      "of policing mere controversy.\n\n" +

      "Hate speech is therefore a legitimate exception to free-expression norms — not " +
      "because the state has the right to police opinion, but because speech that " +
      "systematically excludes people from public discourse undermines the very " +
      "conditions for the free exchange of ideas that free-expression protections " +
      "exist to preserve. The exception is justified precisely because it serves " +
      "the principle, not because it overrides it.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The thesis is clear and qualified in the final two sentences of paragraph 1: yes, a legitimate exception, but only if tightly defined. The qualification is itself a substantive claim, not fence-sitting."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraph 2 grounds the exception in the harm principle and the silencing effect — a philosophically specific argument that engages Mill's own premises and shows how dehumanising speech contradicts them, rather than merely asserting 'hate speech is bad'."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 addresses the strongest objection (slippery slope to censorship) and refutes it empirically with Germany and Canada, then adds the nuance that slope gradient depends on institutional design — rather than dismissing the concern as obviously wrong."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Four legal frameworks are cited with sufficient precision: Volksverhetzung/Section 130 StGB, Canadian Section 319, Brandenburg (US), and UK Public Order Act 1986. Each is used to make a specific comparative point about where the line is drawn."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The three-limbed definition in paragraph 4 (directed at a group / dehumanises or calls for violence / likely to produce hostile environment) gives the essay's position operational content and prevents it from drifting into vagueness."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The conclusion reframes the entire argument in a single sentence — restrictions protect free expression by preserving its conditions — which is a more economical and original ending than simply restating the thesis."
      }
    ]
  });

  /* --- WEAK ESSAY (essay-7022): demonstrates Five I's — prompt-623 ------- */
  DATA.modelEssays.push({
    id: "essay-7022",
    promptId: "prompt-623",
    quality: "weak",
    body:
      "Protest is a very important part of democracy, and everyone should be allowed " +
      "to protest. However, there are also times when protest can cause problems for " +
      "people trying to go about their daily lives, so it is a difficult and " +
      "complicated issue with many sides.\n\n" +
      "On one hand, restricting protest is bad because it stops people from expressing " +
      "their views, which is a fundamental human right. On the other hand, if protests " +
      "block roads or make lots of noise, ordinary people can be really affected, which " +
      "is also not fair. Both of these things are true and both of them matter, so it " +
      "is hard to say which one is more important.\n\n" +
      "Some people think that the government should always allow protests no matter " +
      "what, even if they cause disruption. Other people think that protests should be " +
      "controlled a lot more strictly. There are good points on each side and you could " +
      "argue either way depending on what you think is most important. It sort of " +
      "depends on your values, really.\n\n" +
      "Personally, I feel very strongly that people's rights matter enormously, and it " +
      "is outrageous that governments try to use disruption as an excuse to shut down " +
      "legitimate protest. This is just a way of silencing people they disagree with, " +
      "which is completely unacceptable in a democracy. The whole point of protest is " +
      "that it is supposed to be disruptive sometimes — that is literally the point — " +
      "so saying it should be restricted when it causes disruption is just " +
      "a contradiction and basically nonsense.\n\n" +
      "In conclusion, this is a very complex question and reasonable people can " +
      "disagree. The right to protest is very important but so is public order and it " +
      "is probably best if the law tries to balance these things as much as possible in " +
      "a sensible way.",
    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The essay never takes a position. Paragraphs 1–3 alternate 'on one hand / on the other hand' without resolving the tension, and the conclusion restates the indecision ('reasonable people can disagree'). This is textbook fence-sitting."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Phrases such as 'it sort of depends on your values, really' and 'probably best if the law tries to balance these things as much as possible in a sensible way' avoid committing to any criterion for when restriction is justified, leaving the argument directionless mid-essay."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Vague language throughout: 'very important', 'lots of noise', 'really affected', 'sensible way'. No specific law, case, or threshold is cited, so every claim floats without evidential grounding."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Paragraph 4 suddenly adopts a strong position ('outrageous', 'completely unacceptable', 'basically nonsense') that contradicts the even-handed both-sides posture of paragraphs 1–3 and is itself abandoned in the conclusion. The essay argues for three incompatible stances."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Paragraph 4 attacks the opposing position rhetorically ('just a contradiction and basically nonsense', 'completely unacceptable') rather than engaging its strongest form. This replaces argument with emotion."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Contrast with the model essays: there is no thesis sentence. The opening merely asserts the topic is 'difficult and complicated with many sides', which describes the problem rather than taking a position on it."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "No genuine counterargument is engaged and rebutted. Both sides are mentioned only to be left unresolved; neither is steelmanned or genuinely addressed."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
