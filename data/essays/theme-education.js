/*
 * theme-education.js — Section B content: Education & Society theme.
 *
 * Buckets written:
 *   argumentBanks  — argbank-education-society
 *   prompts        — prompt-630 .. prompt-632 (3 illustrative prompts; the three
 *                    official prompts live once as prompt-602/604/605)
 *   modelEssays    — essay-7030, essay-7031 (model/strong), essay-7032 (weak)
 *
 * All content is source:"illustrative". English only.
 * Load AFTER loader.js (window.LNAT_DATA must already exist).
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-education.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  // Defensive: initialise any bucket that might be missing (guard pattern).
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))        { DATA.prompts        = []; }
  if (!Array.isArray(DATA.modelEssays))    { DATA.modelEssays    = []; }

  /* ---------------------------------------------------------------------- *
   * ARGUMENT BANK — Education & Society
   * Covers: tuition fees / who pays for HE, teacher disciplinary sanctions,
   * public funding of the arts, widening access/participation, purpose of
   * education (civic, economic, intrinsic).
   * ---------------------------------------------------------------------- */
  DATA.argumentBanks.push({
    id: "argbank-education-society",
    theme: "education-society",
    positions: [
      // Tuition fees / who pays
      "Higher education confers significant private benefit (higher lifetime earnings, career choice), so graduates, not taxpayers, should bear most of its cost through income-contingent loans repaid only above an earnings threshold.",
      "Public subsidy of universities benefits the whole of society through research, civic participation, and a more productive workforce, justifying general taxation as the primary funding source.",
      "Income-contingent graduate contributions are a workable middle path: they preserve access by deferring payment, while ensuring the public purse is not indefinitely subsidising those who go on to high earnings.",

      // Teacher disciplinary sanctions
      "Teachers need a credible toolkit of sanctions — detention, exclusion, confiscation of disruptive items — to maintain the safe, ordered environment in which learning is possible; without it, the rights of the well-behaved majority are harmed.",
      "Punitive sanctions alone do not address the underlying causes of disruptive behaviour; pastoral support, restorative approaches, and early identification of need are more effective at producing lasting improvement.",
      "A clear, proportionate sanctions framework, known to pupils and parents in advance, is itself a form of fairness: it applies the same rules to all and reduces arbitrary teacher discretion.",

      // Public funding of the arts
      "Arts that cannot survive commercially may still be culturally essential — preserving minority-language theatre, experimental music, or regional heritage — and only public funding ensures their survival.",
      "Public arts funding implicitly imposes majority taste (or government preference) on culture; the market allows diverse audiences to sustain the art forms they actually value.",
      "A vibrant cultural sector generates economic returns through tourism, the creative industries, and urban regeneration that often exceed the subsidy paid, making arts funding a sound public investment rather than charity.",

      // Widening access / participation
      "Universities selecting almost exclusively from students at well-resourced private schools perpetuate class stratification rather than rewarding genuine ability; contextual admissions and outreach investment are justified corrections.",
      "Admissions that lower formal grade requirements for disadvantaged applicants risk setting students up to fail on courses for which they are underprepared; better to improve school quality so all students can meet the same bar.",

      // Purpose of education
      "The primary purpose of education is to develop critical, independent thinkers capable of democratic participation — a goal that resists reduction to employability metrics.",
      "Preparing students for the labour market is a legitimate and pressing goal of state-funded education: skills mismatches waste human potential and burden the welfare state.",
      "Education has an irreducibly intrinsic value: exposure to literature, history, and philosophy enriches individual lives regardless of economic payoff and cannot be replaced by vocational training alone."
    ],
    counterPositions: [
      // Against graduate-pays
      "Treating higher education as a private commodity discourages students from lower-income backgrounds even when repayment is deferred: debt aversion, not rational calculation, shapes decisions at age 17.",
      "The 'private benefit' argument ignores that degrees in nursing, teaching, and social work deliver overwhelmingly public benefit for comparatively modest salaries; loading these graduates with debt undermines public services.",
      "Free tuition in comparable countries (Germany, Norway, Scotland) has not produced fiscal collapse, suggesting that alternative revenue models — wealth taxes, employer levies — can fund universal access.",

      // Against wide sanctions
      "The power to exclude pupils from school disproportionately affects children with special educational needs or from disadvantaged backgrounds, hardening inequalities under the guise of discipline.",
      "Removing a child from class — however disruptive — imposes an educational penalty that compounds any existing disadvantage; the harm to the excluded child must count in the balance.",

      // Against arts subsidy
      "Subsidising specific art forms through public money crowds out grassroots and community arts that lack the political connections to secure grants; the result is an arts establishment, not a flourishing culture.",
      "If audiences genuinely valued publicly funded opera or contemporary dance, they would pay for it; subsidy sustains institutions that have lost touch with the public they claim to serve.",

      // Against contextual admissions
      "Contextual grade offers, if not publicly understood, can be seen as unfair by standard-entry students who met a higher bar, undermining institutional trust and social cohesion.",
      "The real problem is pre-16 educational inequality; widening participation at university-entry stage addresses the symptom rather than the cause.",

      // Against purely economic purpose
      "An education system calibrated purely to economic output produces compliant workers rather than citizens capable of questioning power — a risk to democratic health.",
      "Core skills literacy and numeracy are legitimate instrumental goals of schooling; insisting every subject must have intrinsic philosophical value can become a disguise for curriculum conservatism."
    ],
    examples: [
      "England introduced £9,000 p.a. tuition fees in 2012 (raised to £9,250); applications from disadvantaged students initially fell, then recovered — contested evidence for the debt-aversion claim.",
      "Scotland maintains free tuition for Scottish-domiciled students, funded partly by a lower per-head spending in other areas of Scottish HE; participation gaps by social background persist.",
      "Germany abolished national tuition fees in 2014 after states reintroduced them following a 2005 ruling; the political unpopularity of fees rather than fiscal necessity drove abolition.",
      "England's Pupil Referral Units (PRUs) handle excluded pupils; evidence links exclusion to later contact with the criminal justice system, supporting critics of exclusion-heavy discipline.",
      "Arts Council England distributes approximately £700 million annually; the sector contributes an estimated £10.8 billion to UK GDP, a ratio frequently cited in subsidy debates.",
      "The official LNAT sample prompt 'Make the best case you can for public funding of the arts' is drawn directly from this debate — one of the 9 real sample prompts (lnat.ac.uk).",
      "The official LNAT sample prompt '\"It is right that students should contribute to the cost of their degrees.\" Do you agree?' is one of the 9 real sample prompts (lnat.ac.uk).",
      "The official LNAT sample prompt 'What disciplinary sanctions should teachers be allowed to use?' is one of the 9 real sample prompts (lnat.ac.uk).",
      "Oxford and Cambridge have introduced contextual offers and access programmes (e.g., Oxford's UNIQ) yet remain among the least socially diverse universities in the UK.",
      "Finland's comprehensive school system, with no academic selection before age 16, consistently produces high PISA scores and low between-school variance — cited in debates on grammar schools."
    ],
    facts: [
      "England's maximum tuition fee in 2025/26 is £9,250 p.a.; the government has announced a rise to £9,535 from 2025/26 for new students.",
      "The UK student loan interest rate and repayment threshold have changed multiple times since 2012; Plan 5 loans (post-2023 English entrants) are written off after 40 years.",
      "UCAS data show the 18-year-old entry rate to higher education in England in 2023 was approximately 37% overall and below 20% for the most disadvantaged quintile.",
      "Ofsted's framework assesses schools partly on 'personal development', which includes the taught curriculum and extracurricular provision — relevant to arts-in-school debates.",
      "The Department for Education publishes annual exclusion statistics; in 2022/23, approximately 9,400 permanent exclusions were issued in English state schools.",
      "UNESCO's 2021 Recommendation on Open Educational Resources endorses open-access learning materials — relevant to access and equity arguments.",
      "The Robbins Report (1963) established the principle that higher education places should be available to all qualified and able to benefit — the foundation of UK mass HE.",
      "In the Bologna Process (1999), 29 European countries agreed to harmonise degree structures; the UK participated until Brexit created uncertainty about mutual recognition."
    ]
  });

  /* ---------------------------------------------------------------------- *
   * PROMPTS — 3 illustrative prompts, theme: education-society
   * IDs prompt-630 .. prompt-632 (officials live once as prompt-602/604/605)
   * ---------------------------------------------------------------------- */
  DATA.prompts.push(
    {
      id: "prompt-630",
      theme: "education-society",
      text:
        "Should universities be required to reserve a fixed proportion of their " +
        "places for students from disadvantaged backgrounds?",
      source: "illustrative"
    },
    {
      id: "prompt-631",
      theme: "education-society",
      text:
        "Is the primary purpose of a state education system to prepare young people " +
        "for the labour market?",
      source: "illustrative"
    },
    {
      id: "prompt-632",
      theme: "education-society",
      text:
        "Should selective grammar schools be abolished?",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * MODEL ESSAYS — 2 strong (essay-7030, essay-7031), 1 weak (essay-7032)
   * ---------------------------------------------------------------------- */

  /* --- STRONG MODEL 1: prompt-604 (student tuition fees; official) ------- */
  DATA.modelEssays.push({
    id: "essay-7030",
    promptId: "prompt-604",
    quality: "model",
    body:
      "Students should contribute to the cost of their degrees, but only through a " +
      "system that delays payment until they can genuinely afford it. A flat " +
      "assertion that contributors are right, without specifying the form of " +
      "contribution, misses the question that actually matters: who pays, when, and " +
      "on what terms.\n\n" +

      "The case for graduate contribution rests on a straightforward observation " +
      "about private benefit. A degree confers, on average, substantially higher " +
      "lifetime earnings and a wider range of career choices than the alternatives " +
      "available at eighteen. Asking taxpayers who did not attend university — many " +
      "on lower incomes — to subsidise this benefit in full is a transfer from the " +
      "less to the more prosperous. Scotland maintains free tuition for Scottish-domiciled " +
      "students and yet participation gaps by social background persist, suggesting " +
      "that removing fees alone does not resolve access inequality. The objection to " +
      "full public subsidy is not ideological but distributional: unlimited free " +
      "tuition is a regressive policy dressed in progressive language.\n\n" +

      "The critical condition, however, is that contribution must not deter access. " +
      "Evidence from England's 2012 fee rise to £9,000 per year suggests that debt " +
      "aversion, not rational repayment calculation, can suppress applications from " +
      "students whose parents have no experience of higher education. This is not " +
      "irrational: a first-generation applicant facing an unfamiliar loan system has " +
      "fewer social resources for assessing risk than a peer from a graduate household, " +
      "and the perceived weight of a large nominal debt can outweigh the reality of " +
      "income-contingent repayment even when the financial terms are favourable. " +
      "An income-contingent loan — repaid only above an earnings threshold and " +
      "eventually written off — addresses this by making the real cost visible only " +
      "when the graduate has the means to meet it. Properly designed, it functions " +
      "more like a graduate tax than a commercial debt, and should be communicated " +
      "clearly as such to prospective students at the point of application.\n\n" +

      "Two refinements follow. First, courses delivering high public benefit at modest " +
      "graduate salaries — nursing, social work, early-years teaching — deserve " +
      "heavier public subsidy, since loading those graduates with full debt undermines " +
      "the workforce that public services depend on. The UK recognised this partially " +
      "through the NHS bursary scheme, whose abolition in 2017 contributed to a fall " +
      "in nursing applications. The case for graduate contribution is strongest where " +
      "the private earnings premium is largest, and weakest where graduates enter " +
      "low-paid public-service roles. Second, scheme design matters enormously: " +
      "England's interest rates and repayment thresholds changed repeatedly after " +
      "2012, each revision altering the real burden on graduates who had made " +
      "decisions under earlier projections. A politically stable, transparent " +
      "mechanism — one that students can rely on when deciding at seventeen — is " +
      "itself a precondition of genuinely informed consent at the point of application.\n\n" +

      "Graduate contribution, properly structured, is therefore not only defensible " +
      "but fairer than full public subsidy. The proposition in the prompt is right — " +
      "but only if contribution means a well-designed, genuinely income-contingent " +
      "mechanism, not a commercial up-front fee that reproduces the very inequality " +
      "it pretends to escape.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The opening sentence commits immediately to a qualified yes with a precise condition (income-contingent, not up-front), avoiding fence-sitting while acknowledging the need to interrogate the question's terms."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraph 2 deploys the distributional argument — that free tuition is regressive — which is the strongest intellectual case for graduate contribution and distinguishes this essay from a generic 'fairness' claim. The Scotland example grounds this concretely."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 raises the access/debt-aversion objection squarely, cites the 2012 English evidence, and rebuts it by specifying an income-contingent mechanism that dissolves the tension rather than ignoring it. The first-generation applicant detail sharpens why the aversion is rational, not merely emotional."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Concrete references: England's 2012 fee rise to £9,000, Scotland's persistence of participation gaps despite free tuition, nursing/social work salary levels, post-2012 loan-term volatility — all calibrated to the specific debate rather than generic 'many countries' appeals."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "The essay moves from premise (private benefit / distributional case) → condition (access / debt aversion) → two refinements (high-public-benefit courses; scheme stability) → conclusion that mirrors and advances the opening thesis. Each paragraph has a single, identifiable function."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The conclusion does not introduce new material but sharpens the opening commitment with the 'reproduces the inequality it pretends to escape' formulation, which is both economical and precise."
      },
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "Pitfall AVOIDED: the essay reaches a definite conclusion ('is therefore not only defensible but fairer') and never retreats to 'it depends on the situation'."
      }
    ]
  });

  /* --- STRONG MODEL 2: prompt-631 (purpose of education) ----------------- */
  DATA.modelEssays.push({
    id: "essay-7031",
    promptId: "prompt-631",
    quality: "model",
    body:
      "The primary purpose of a state education system is not to prepare young people " +
      "for the labour market, though doing so is among its legitimate and important " +
      "goals. Reducing education to workforce preparation mistakes an instrument for " +
      "the whole of what schooling is for.\n\n" +

      "The labour-market case has genuine force and should not be dismissed. Skills " +
      "mismatches — graduates unable to find employment that uses their qualifications, " +
      "or employers unable to fill technically demanding roles — waste human potential " +
      "and impose real costs through unemployment and underemployment. A system that " +
      "ignores these outcomes is irresponsible. When Finland overhauled its curriculum " +
      "in 2016 to include phenomenon-based collaborative projects alongside core " +
      "literacy and numeracy, it did not abandon employability; it sought to produce " +
      "adaptable workers as well as educated citizens. Finland's consistently high PISA " +
      "scores suggest these goals are complementary rather than competing. The best " +
      "version of the labour-market argument is not that school should become " +
      "vocational training, but that it should equip students to contribute to an " +
      "economy that will change significantly during their working lives.\n\n" +

      "The limits of the economic framing become clear when it is pushed to its " +
      "logical conclusion. A system calibrated purely to workforce optimisation would " +
      "have no principled objection to removing history, philosophy, or the arts " +
      "wherever they fail a cost-benefit test. Yet these subjects develop the capacity " +
      "to evaluate evidence, recognise propaganda, and participate meaningfully in " +
      "public life. A democracy depends on citizens capable of those things, and no " +
      "market signal prices the civic value of a historically literate electorate or " +
      "the long-run benefit of a population that can read a government's argument " +
      "critically rather than accept it. John Dewey's insight — that education is " +
      "'not a preparation for life but life itself' — points to something the economic " +
      "model cannot capture: the intrinsic value of an educated mind, independent of " +
      "its market price. Removing that dimension does not make the system more " +
      "efficient; it makes it incapable of producing the kind of citizens a self- " +
      "governing society requires.\n\n" +

      "The distributional argument reinforces this. Where schools function principally " +
      "as vocational sorting mechanisms, children from disadvantaged backgrounds tend " +
      "to be tracked early toward lower-skill pathways, reproducing class hierarchies " +
      "rather than disrupting them. England's grammar school debate illustrates the " +
      "risk: academic selection at eleven correlates strongly with socioeconomic " +
      "background, so a system designed to identify talent in practice often " +
      "identifies advantage. This is not merely a social justice concern: it " +
      "represents a waste of talent that an economically focused system should, by " +
      "its own logic, object to. An education aimed at full personal development — " +
      "critical thinking, self-knowledge, cultural literacy — is also, paradoxically, " +
      "the most socially mobile one, because it refuses to pre-sort students by the " +
      "expectations attached to their background.\n\n" +

      "The primary purpose of state education is therefore the formation of capable, " +
      "reflective, democratically equipped persons. Preparing them for work is a " +
      "consequence that follows naturally from doing that job well — not a separate " +
      "goal that competes with it, still less one that should displace it.",

    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The first sentence commits to 'no' with precision: labour-market preparation is legitimate but not primary. The second sentence states the argument's core claim. No ambiguity."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 2 grants the labour-market case 'genuine force' and provides the Finland example before engaging with it; it also distinguishes the best version of the case (adaptability) from a straw-man version (pure vocationalism), demonstrating genuine engagement rather than dismissal."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Two distinct positive arguments are made: the democratic-capacity argument (paragraph 3, including the point that civic value has no market price) and the distributional/social-mobility argument (paragraph 4, which also shows the economic frame contradicts itself). Each adds independent weight."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Finland's 2016 curriculum reform and Dewey's formulation are concrete intellectual anchors. Both are relevant and accurate, neither used merely as decoration. The Dewey quotation is used to make a philosophically specific point, not as an authority-appeal."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The final paragraph turns the conclusion into a positive reformulation — 'preparation for work is a consequence that follows naturally' — which resolves the tension rather than just denying the prompt."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "Five-paragraph shape: thesis → steelman of opposing view (Finland, best-case economic argument) → argument 1 (democratic capacity, market-price gap) → argument 2 (distributional / social mobility) → conclusion that reconnects to both. Signposting is implicit but consistent."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Pitfall AVOIDED: the essay disagrees with the economic framing analytically — 'mistakes an instrument for the whole' — without attacking the question or treating it as obviously wrong."
      }
    ]
  });

  /* --- WEAK ESSAY: prompt-630 (reserved places for disadvantaged students) */
  DATA.modelEssays.push({
    id: "essay-7032",
    promptId: "prompt-630",
    quality: "weak",
    body:
      "This is a very important question that many people disagree about. Some " +
      "people think universities should have quotas for disadvantaged students, while " +
      "others do not. Both sides have a point, and it is hard to say who is right " +
      "without knowing more about the specific situation.\n\n" +
      "On one hand, it is true that disadvantaged students face many challenges " +
      "that other students do not face. This is obviously unfair and something " +
      "should be done about it. Reserved places could help with this problem " +
      "because it would give more people a chance to go to university. Many " +
      "countries do similar things and they seem to work more or less.\n\n" +
      "On the other hand, some people argue that reserved places are unfair to " +
      "students who worked hard and got the grades. This is also a valid point " +
      "because it would not be fair if someone with lower grades got in over " +
      "someone with higher grades. It is a difficult balance to strike.\n\n" +
      "Also, it is worth considering whether this would actually solve the real " +
      "problem, which is that disadvantaged students often do not get the same " +
      "quality of education at school level. If that was fixed, maybe there would " +
      "not be such a big gap by the time students apply to university. But then " +
      "again, that would take a long time, so maybe reserved places are needed in " +
      "the meantime. Or maybe not — it is genuinely unclear.\n\n" +
      "In conclusion, there are arguments on both sides and this is a complex " +
      "issue. Universities should try to be as fair as possible to everyone, which " +
      "is what they probably already want to do. The most important thing is that " +
      "everyone gets a good education, which is something most people would agree " +
      "with.",
    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The essay never commits to a position. The opening disclaims certainty ('hard to say'), the body presents 'on one hand / on the other hand' without resolution, and the conclusion explicitly refuses to decide. This is textbook fence-sitting."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Paragraph 4 enacts mid-essay indecision live: 'maybe reserved places are needed... Or maybe not — it is genuinely unclear.' The author flags uncertainty rather than reasoning through it."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Every claim is vague: 'many countries do similar things and they seem to work more or less'; 'something should be done'; 'as fair as possible to everyone'. No specific country, policy, or mechanism is named."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Paragraph 2 says 'something should be done' and reserved places 'could help', implying tentative support; paragraph 3 grants equal weight to the opposing view with no resolution — the two paragraphs contradict each other's implied stance."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Contrast: no thesis sentence exists anywhere in the essay. The conclusion ('universities should try to be as fair as possible') is a platitude, not a position on the question asked."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Contrast: a model essay would raise the strongest objection (undermining meritocracy / setting students up to fail on underprepared entry) and then rebut it. Here the objection is raised and simply set alongside the other view as equally valid, which is no rebuttal at all."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
