/*
 * theme-lawjustice.js — Section B content for the "Law & Justice" theme.
 *
 * Pushes into the buckets that loader.js created on window.LNAT_DATA.
 * Must load AFTER loader.js. All content is English-only, source:"illustrative".
 *
 * Adds:
 *   argumentBanks  — argbank-law-justice  (study briefing)
 *   prompts        — prompt-610 .. prompt-614  (5 illustrative prompts; the
 *                    official "mandatory voting" prompt lives once as prompt-607)
 *   modelEssays    — essay-7010, essay-7011  (model quality, 500-600 words each)
 *                    essay-7012             (weak quality, Five I's annotated)
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-lawjustice.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  // Defensive init for any bucket that may not yet exist.
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))       { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays))   { DATA.modelEssays = []; }

  /* ---------------------------------------------------------------------- *
   * ARGUMENT BANK — "Law & Justice" study briefing.
   *
   * Purpose: give the student enough content knowledge to write confidently
   * on any Law & Justice prompt — judicial appointments, sentencing & punishment,
   * capital punishment, mandatory voting, rule of law.
   * ---------------------------------------------------------------------- */
  DATA.argumentBanks.push({
    id: "argbank-law-justice",
    theme: "law-justice",

    positions: [
      // --- Judicial appointments ---
      "Judges should be appointed by an independent merit-based commission to insulate the judiciary from political patronage and preserve public confidence in impartiality.",
      "Transparent, criteria-led appointments with published reasons make judicial authority visible and acceptable to those who lose before the court.",
      "Judicial accountability is best secured through reasoned, published, and appealable judgments, not through democratic elections.",

      // --- Sentencing & punishment ---
      "Retributive punishment is justified: a wrongdoer deserves to suffer in proportion to the harm caused, regardless of deterrent effect.",
      "Rehabilitative sentencing reduces reoffending more effectively than purely punitive sentences; the long-term public-safety case favours it.",
      "Mandatory minimum sentences produce sentencing consistency and remove the risk of judicial bias or undue leniency.",
      "Restorative justice — where offender, victim, and community agree on reparation — addresses harm more directly than incarceration and has strong recidivism-reduction evidence in youth justice contexts.",

      // --- Capital punishment ---
      "Capital punishment is the only permanently incapacitative sentence, and when guilt is certain it is proportionate to the most extreme offences.",
      "The irreversibility of execution makes it categorically different from other punishments; the risk of executing an innocent person can never be reduced to zero, so the state should not exercise this power.",
      "Empirical evidence that capital punishment deters homicide is weak and contested; states that abolished it have not seen systematic increases in murder rates.",

      // --- Mandatory voting ---
      "Compulsory voting raises turnout and yields a parliament that more fully represents the preferences of the whole electorate, strengthening democratic legitimacy.",
      "Voting is better understood as a civic duty than a purely individual right; mandatory participation reflects that duty, much as jury service and tax payment do.",

      // --- Rule of law ---
      "Rule-of-law theory requires that legal rules be prospective, stable, clear, and applied equally — not that every law be just, but that the legal system itself operate predictably.",
      "An independent judiciary is the structural guarantee of the rule of law: without it, legal rules are only as secure as the political interests of those in power.",
      "Civil disobedience can be consistent with the rule of law if it is public, non-violent, and accepts the legal consequences; it challenges the content of a law without rejecting legality as such."
    ],

    counterPositions: [
      // --- Judicial appointments ---
      "Judicial power is real, policy-shaping power; keeping it entirely beyond democratic accountability raises legitimacy questions that merit-based appointment commissions alone cannot resolve.",
      "Appointing commissions risk entrenching an unrepresentative legal elite if their membership is not itself diverse and publicly accountable.",
      "Elected judges in some US states have delivered locally responsive justice; democratic selection is not inherently incompatible with legal quality.",

      // --- Sentencing & punishment ---
      "Mandatory minimum sentences remove judicial discretion and routinely produce results — such as imprisoning low-level drug couriers for decades — that most people regard as disproportionate.",
      "Purely rehabilitative approaches may under-serve the victim's legitimate interest in proportionate punishment and the public's interest in denunciation of serious crime.",
      "Prison conditions in many jurisdictions are so poor that incarceration causes net harm to rehabilitation prospects; reform of conditions is a precondition of effective rehabilitative sentencing.",

      // --- Capital punishment ---
      "International human-rights norms treat capital punishment as incompatible with the right to life and human dignity; the trend among liberal democracies has been consistent abolition.",
      "The death penalty in practice is applied disproportionately on racial and socioeconomic lines, even in jurisdictions that impose strict procedural safeguards.",
      "Life imprisonment without parole achieves permanent incapacitation without the irreversible and potentially erroneous finality of execution.",

      // --- Mandatory voting ---
      "Compelling attendance at the ballot box does not compel an informed or sincere choice; it inflates the numerical appearance of consent while the quality of the mandate remains unclear.",
      "Freedom of expression includes the freedom not to express a view; a right to abstain from voting is part of political liberty, not a derogation from it.",
      "Low turnout may reflect satisfaction with the status quo or principled rejection of all candidates, not merely apathy; coercive remedies misdiagnose the problem.",

      // --- Rule of law ---
      "The rule of law is a formal ideal that can be satisfied by a wicked legal system; justice requires attending to the substantive content of law, not only its procedural regularity.",
      "Emergency powers and anti-terrorism legislation consistently strain the rule-of-law principle by trading legal certainty and individual rights for executive flexibility."
    ],

    examples: [
      // Judicial appointments
      "The UK's Judicial Appointments Commission (est. 2006) selects judges on merit through open competition, with the Lord Chancellor retaining a limited power of veto — a compromise between independence and political oversight.",
      "In the United States, federal judges including Supreme Court Justices are nominated by the President and confirmed by the Senate, making judicial appointments explicitly political and subject to partisan controversy (e.g. the Merrick Garland vacancy in 2016, the rapid confirmation of Amy Coney Barrett in 2020).",
      "Several US states (Kansas, Wisconsin) elect their Supreme Court justices; critics cite campaign-finance links to litigants as evidence of structural impartiality risks.",

      // Sentencing and punishment
      "The US federal mandatory minimum regime for drug offences, introduced in the 1980s, has been credited with driving mass incarceration; the First Step Act (2018) partially reduced these minimums, allowing earlier release for thousands.",
      "Norway's prison system, oriented towards rehabilitation and normalcy (short sentences, open conditions, vocational training), achieves a recidivism rate of around 20%, compared with around 40-60% in many punitive-first systems (depending on how recidivism is measured).",
      "Restorative justice programmes in New Zealand youth courts, introduced by the Children, Young Persons, and Their Families Act 1989, became an international model: family-group conferencing diverts most young offenders from conventional prosecution.",

      // Capital punishment
      "As of 2024 more than 110 countries have abolished the death penalty in law or practice; the United States remains the only G7 nation to retain it, applied unevenly across states.",
      "Since 1973 more than 190 death-row prisoners in the United States have been exonerated, illustrating the irreversible error risk the abolition argument centres on.",
      "Singapore retains mandatory capital punishment for certain drug trafficking quantities; proponents point to very low drug-use rates, though causal attribution is contested.",

      // Mandatory voting
      "Australia has required voting since 1924; turnout consistently exceeds 90% and fines for non-compliance are modest (around AUD 20). Research finds no systematic evidence that compulsion distorts electoral outcomes relative to high-turnout voluntary systems.",
      "Belgium, Luxembourg, and several Latin American democracies also have compulsory voting laws with varying enforcement; in Belgium, sanctions are rarely applied in practice.",

      // Rule of law
      "The UK Supreme Court's judgment in Miller (No 2) (2019), ruling the prorogation of Parliament unlawful, is a striking example of an independent court enforcing constitutional limits on executive power.",
      "Hungary's gradual erosion of judicial independence after 2010 — through court-packing, mandatory retirement age changes, and a new administrative court system — is widely cited by rule-of-law indices (e.g. V-Dem, Freedom House) as a case study in how independence can be dismantled within formal legal structures.",
      "Rosa Parks's 1955 refusal to give up her bus seat — an act of civil disobedience accepted as legally impermissible at the time — illustrates the argument that openly accepting punishment while resisting an unjust law is consistent with, rather than subversive of, rule-of-law values."
    ],

    facts: [
      "The LNAT prompt 'How should judges be appointed?' is one of the nine official sample prompts (lnat.ac.uk/how-to-prepare/sample-essays/); expect this topic to recur.",
      "The LNAT prompt 'Should the law require people to vote in general elections?' is also an official sample prompt; mandatory voting is a high-probability Law & Justice topic.",
      "Amnesty International reports that in 2023 at least 1,153 executions were carried out worldwide (excluding China, where figures are classified), the highest recorded total since 2015.",
      "The UN's Nelson Mandela Rules (2015) set international minimum standards for the treatment of prisoners and are the most authoritative reference for prison-condition arguments.",
      "The UK Sentencing Guidelines Council publishes definitive guidelines that judges must follow or explain departures from, illustrating how consistency and discretion can be balanced without full mandatory minimums.",
      "In R v Brown (1993) the House of Lords held that consent is no defence to ABH or GBH in English law, illustrating the tension between personal autonomy and the state's interest in maintaining public order through criminal law.",
      "The rule of law is articulated in the UN Declaration on the Rule of Law (2012) and the World Justice Project's Rule of Law Index, which measures eight factors including constraints on government power, absence of corruption, and open government."
    ]
  });

  /* ---------------------------------------------------------------------- *
   * ESSAY PROMPTS — 6 illustrative Law & Justice prompts.
   * ---------------------------------------------------------------------- */
  DATA.prompts.push(
    {
      id: "prompt-610",
      theme: "law-justice",
      text: "Should judges who apply the law as written be criticised when that produces an outcome most people regard as unjust?",
      source: "illustrative"
    },
    {
      id: "prompt-611",
      theme: "law-justice",
      text: "\"Prison does not work.\" Is this a fair verdict on custodial sentencing?",
      source: "illustrative"
    },
    {
      id: "prompt-612",
      theme: "law-justice",
      text: "The case for capital punishment rests entirely on deterrence. Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-613",
      theme: "law-justice",
      text: "Is the rule of law compatible with emergency executive powers?",
      source: "illustrative"
    },
    {
      id: "prompt-614",
      theme: "law-justice",
      text: "\"Mandatory minimum sentences are an affront to judicial independence.\" Discuss.",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAY 1 (strong) — answers prompt-612.
   * Thesis: the case for capital punishment does NOT rest entirely on
   * deterrence; the retributive and incapacitative arguments are independent
   * and the deterrence empirical case is weak anyway.
   * 500-600 words.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7010",
    promptId: "prompt-612",
    quality: "model",
    body:
      "The claim that capital punishment depends entirely on deterrence is doubly mistaken: " +
      "it misreads the strongest arguments for the practice, and it rests the case on the " +
      "weakest empirical ground. Proponents of capital punishment have never relied on " +
      "deterrence alone, and the debate is better served by engaging their best arguments " +
      "directly.\n\n" +

      "The retributive argument is independent of deterrence entirely. On this view, " +
      "a person who deliberately ends another's life forfeits, proportionately, their own. " +
      "The claim is not that executing murderers will reduce murder rates; it is that " +
      "justice demands a response commensurate with the gravity of the offence. Whether or " +
      "not a single future crime is prevented, retributivists hold that the sentence is what " +
      "the offender deserves — that the state fails a moral duty if it responds to " +
      "deliberate killing with anything less. One may reject this position, as I do, but " +
      "it cannot be refuted by citing deterrence statistics, because deterrence was never " +
      "its premise.\n\n" +

      "A second argument, permanent incapacitation, is similarly deterrence-independent. " +
      "Life imprisonment cannot guarantee that a prisoner will never kill again, whether " +
      "within the prison or after release on parole or humanitarian grounds. Execution " +
      "removes that risk with certainty. The force of this argument turns on how large the " +
      "residual risk of re-offending actually is, and whether life without parole achieves " +
      "equivalent incapacitation without the irreversible finality. On those empirical " +
      "questions the abolition case has strong answers. But the incapacitation argument " +
      "itself makes no deterrence claim, and dismissing deterrence leaves it wholly " +
      "untouched.\n\n" +

      "It is true that deterrence features prominently in popular defences of capital " +
      "punishment, and the empirical evidence consistently fails to support it. Cross-national " +
      "comparisons show no pattern of lower homicide rates in retentionist states. Studies " +
      "in the United States, where executions and abolitions can be tracked across " +
      "neighbouring jurisdictions over decades, have found no reliable deterrent effect. " +
      "The strongest academic attempts to detect one — including Ehrlich's 1975 regression, " +
      "which claimed each execution prevented eight murders — have since been discredited " +
      "on methodological grounds. If the entire case rested on deterrence it would already " +
      "have collapsed, yet the debate continues precisely because the retributive and " +
      "incapacitative arguments remain in play.\n\n" +

      "The decisive objection to capital punishment is not that deterrence fails but that " +
      "the sentence is irreversible. Since 1973 more than 190 death-row prisoners in the " +
      "United States have been exonerated, many through DNA evidence unavailable at trial. " +
      "No procedural safeguard reduces the probability of executing an innocent person to " +
      "zero, and no remedy exists once the sentence is carried out. This objection targets " +
      "all three arguments simultaneously: retribution of the innocent is not justice, " +
      "incapacitation of the innocent is not safety, and deterring others through the " +
      "execution of an innocent person is a moral cost no utilitarian calculus can " +
      "absorb without serious distortion.\n\n" +

      "The prompt's claim, then, is wrong as a description of the debate and wrong as a " +
      "strategy for ending it. Capital punishment deserves rejection, but on the ground of " +
      "irreversible error rather than failed deterrence. Engaging only the weakest argument " +
      "leaves the strongest untouched.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The thesis is committed and two-part from sentence one: deterrence is not the only argument, and it is also the weakest. The essay has a clear direction before the first body paragraph."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "The structure follows signposted logic: intro thesis → retributive argument (independent of deterrence) → incapacitative argument (independent) → deterrence evidence → decisive objection → conclusion that reaffirms the thesis. Each paragraph does one job."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraphs 2 and 3 each isolate a distinct pro-capital-punishment argument and explain precisely why it does not rely on deterrence, demonstrating conceptual precision rather than assertion."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 concedes strength to the incapacitation argument ('the abolition case has strong answers. But the incapacitation argument itself makes no deterrence claim') — it acknowledges the argument honestly before explaining why it is still unrefuted by deterrence failure, which is stronger than dismissal."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Ehrlich's 1975 regression (claiming eight murders prevented per execution, subsequently discredited), 190+ US exonerations since 1973 including DNA reversals, and cross-national comparisons: each is specific and traceable rather than a vague appeal to 'studies show'."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The conclusion is two sentences that re-close the thesis without introducing new arguments. No padding or summary repetition of body points."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The phrase 'deterrence was never its premise' encapsulates the retributive point precisely; the essay consistently earns its qualifications rather than hedging."
      }
    ]
  });

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAY 2 (strong) — answers prompt-613.
   * Thesis: emergency executive powers are compatible with the rule of law
   * only if they are temporally limited, judicially reviewable, and
   * proportionate — three conditions that are frequently violated in practice.
   * 500-600 words.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7011",
    promptId: "prompt-613",
    quality: "model",
    body:
      "Emergency executive powers and the rule of law are not inherently incompatible, " +
      "but compatibility is conditional on three requirements: the powers must be " +
      "time-limited, subject to meaningful judicial review, and proportionate to the " +
      "emergency invoked. Assessed against those conditions, many real-world emergency " +
      "regimes fall short, which is why the tension is real even if the conflict is not " +
      "logically necessary.\n\n" +

      "The rule of law demands, at minimum, that legal rules be clear, prospective, stable, " +
      "and applied without arbitrary discrimination. Emergency powers test every one of these " +
      "requirements. Broad executive discretion — the power to detain without trial, restrict " +
      "assembly, or suspend normal administrative safeguards — is by design unpredictable in " +
      "application. If that unpredictability goes unchecked, the rule of law is eroded not by " +
      "the emergency itself but by the absence of any mechanism to scrutinise the government's " +
      "response. The concern is structural: where executive action is unreviewable, the " +
      "distinction between the rule of law and the rule of whoever happens to hold power " +
      "collapses.\n\n" +

      "The case for compatibility rests on the argument that well-designed emergency frameworks " +
      "retain the essential features of legality. The UK's Civil Contingencies Act 2004 allows " +
      "temporary regulations in the event of a serious emergency, but requires Parliamentary " +
      "approval within seven days and provides for sunset clauses. Judicial review of executive " +
      "action remains available throughout. On this model, extraordinary powers exist within a " +
      "legal structure that continues to constrain and review their exercise. The rule of law " +
      "is not suspended; its content shifts temporarily under rules that were themselves " +
      "established in advance, through democratic deliberation, before any particular " +
      "emergency arose.\n\n" +

      "The objection to this optimistic account is partly empirical: emergency frameworks " +
      "rarely remain within their stated limits. Post-2001 anti-terrorism legislation in the " +
      "United Kingdom and the United States expanded detention powers, surveillance authorities, " +
      "and executive discretion in ways that courts found, in some cases years later, to be " +
      "incompatible with fundamental rights. The House of Lords' decision in A v Secretary " +
      "of State for the Home Department (2004) — finding that indefinite detention of foreign " +
      "nationals under the Anti-Terrorism, Crime and Security Act 2001 was incompatible with " +
      "the European Convention on Human Rights — illustrates how emergency powers can exceed " +
      "rule-of-law limits even in a constitutional democracy with an active judiciary. The " +
      "review came, but only three years after the power was first enacted.\n\n" +

      "The deeper point is that emergency powers test whether the rule of law is a robust " +
      "institutional reality or a fair-weather principle. A legal system that produces strong " +
      "oversight only in normal conditions has not truly internalised the constraint. " +
      "Compatibility requires not merely that emergency power has a statutory basis, but that " +
      "independent courts can and do check its exercise in real time, not only in retrospect.\n\n" +

      "Emergency executive powers are therefore compatible with the rule of law in principle " +
      "but frequently incompatible in practice. The conditions for compatibility — " +
      "temporal limits, judicial review, proportionality — are not demanding in theory but " +
      "are routinely compromised when the political pressure of a genuine emergency is brought " +
      "to bear. Closing that gap requires institutional design that anticipates executive " +
      "overreach rather than relying on governments to self-limit.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The intro commits to a conditional compatibility thesis and names the three conditions (time-limited, judicial review, proportionate) upfront. The reader knows exactly where the essay is going."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "Six-paragraph structure maps cleanly: intro/thesis → what rule of law demands and the structural risk → the optimistic compatibility case (Civil Contingencies Act) → empirical objection with case law → the fair-weather-principle synthesis → conclusion. No paragraph drifts from its function."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraph 2 establishes what the rule of law requires before testing emergency powers against it — a logical sequence that grounds the rest of the argument. The 'rule of whoever happens to hold power' formulation sharpens the structural concern beyond a generic assertion."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 genuinely steelmans the compatibility case using the Civil Contingencies Act 2004 and sunset clauses before paragraph 4 rebuts it with A v Secretary of State — the rebuttal is targeted, specific, and notes the three-year delay before judicial correction."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Civil Contingencies Act 2004 and A v Secretary of State for the Home Department (2004) are concrete, legally precise, and directly relevant to the points they illustrate. The three-year timeline detail adds evidential weight to the empirical objection."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The distinction between 'not inherently incompatible' and 'frequently incompatible in practice' is drawn precisely in paragraph 1 and closed in the final paragraph, giving the essay analytical coherence. The phrase 'fair-weather principle' in paragraph 5 captures the synthesis efficiently."
      }
    ]
  });

  /* ---------------------------------------------------------------------- *
   * WEAK ESSAY — answers prompt-607 (mandatory voting; canonical official prompt).
   * Deliberately shows all Five I's failures.
   * ---------------------------------------------------------------------- */
  DATA.modelEssays.push({
    id: "essay-7012",
    promptId: "prompt-607",
    quality: "weak",
    body:
      "This is a really difficult question and there are strong arguments on both sides. " +
      "Voting is obviously very important and something that a lot of people feel strongly " +
      "about, so it would be wrong to dismiss the question lightly. Whether or not people " +
      "should be forced to vote is a complex issue that depends on many factors.\n\n" +

      "On the one hand, some people think that voting is a duty and that everyone should " +
      "take part in the democratic process. This view has a lot of merit because democracy " +
      "is important and the more people who vote the better it probably is for everyone. " +
      "Countries like Australia do this and it seems to work okay, although not everyone " +
      "agrees with it there either.\n\n" +

      "On the other hand, you could argue that forcing people to vote takes away their " +
      "freedom, which is also very important. People should be able to choose whether or not " +
      "to take part in elections and making them do something against their will seems " +
      "unfair. But then again maybe it is not that unfair because we have lots of other " +
      "laws that make people do things like pay tax.\n\n" +

      "This question is actually quite offensive when you think about it because it implies " +
      "that people who don't vote are bad citizens, which is very judgmental. Not voting " +
      "can be a perfectly valid political statement and it is wrong of the question to " +
      "assume otherwise. Abstention is a democratic act too.\n\n" +

      "In conclusion, mandatory voting is something that could be either good or bad " +
      "depending on your point of view and what you value most. Some societies might " +
      "benefit from it and others might not. I personally think it is a matter of " +
      "individual conscience and that in the end people should be allowed to make up " +
      "their own minds.",

    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The entire essay refuses to commit. 'Strong arguments on both sides', 'could be either good or bad depending on your point of view', 'I personally think it is a matter of individual conscience' — none of these is a thesis. The reader finishes the essay not knowing what the writer actually thinks. This is the textbook Irresolute (fence-sitting) flaw."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Paragraph 3 makes a reasonable liberty point then immediately capitulates: 'But then again maybe it is not that unfair'. The essay changes direction mid-paragraph without resolution. This is the Indecisive flaw: mid-essay wavering that undermines whatever position seemed to be forming."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Vague qualifiers pervade the essay: 'probably', 'okay', 'quite', 'very', 'seems to work'. These replace concrete reasoning or evidence. The Australia reference ('it seems to work okay') is especially weak — a precise version would cite Australia's 90%+ turnout and the evidence on mandate quality. Imprecision makes the essay feel thin even where the underlying point is defensible."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Paragraph 4 attacks the question rather than answering it: 'This question is actually quite offensive when you think about it because it implies that people who don't vote are bad citizens.' This is the Indignant flaw. The question is neutral — it asks whether the law should require voting, not whether abstainers are bad people. Attacking the question wastes words and signals that the writer cannot engage analytically."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "The essay argues in paragraph 3 that freedom of choice is 'very important' but then acknowledges that many laws already compel behaviour (tax), which should resolve the liberty objection — yet the conclusion still treats it as unresolved. The writer uses an argument that defeats their own worry and then ignores the implication. This is the Inconsistent flaw: the essay contradicts its own reasoning without acknowledging or resolving the tension."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Contrast with the model essays: there is no thesis sentence in this essay. The intro signals multiple 'strong arguments on both sides' and the conclusion restates that open-endedness. The essay structurally cannot reach a conclusion because it never decided what it was arguing."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Australia is the only example used, and it is handled with 'seems to work okay, although not everyone agrees'. A model essay would give the specific fact (90%+ turnout, introduced 1924, fine c. AUD 20) and engage with what 'working' means for the mandate-quality argument."
      }
    ]
  });

})(typeof window !== "undefined" ? window : this);
