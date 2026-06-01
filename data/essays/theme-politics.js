/*
 * theme-politics.js — Section B content: Politics & Governance theme.
 *
 * Buckets written:
 *   argumentBanks  → argbank-politics-governance (id: brief-politics per task)
 *   prompts        → prompt-650 .. prompt-653  (4 illustrative prompts; the two
 *                    official prompts live once as prompt-607/608)
 *   modelEssays    → essay-7050 (model, prompt-650), essay-7051 (model, prompt-651),
 *                    essay-7052 (weak, prompt-652 — devolution)
 *                    NOTE: essay-7052 was re-pointed from prompt-607 to prompt-652
 *                    to avoid duplicating the law-justice weak essay (essay-7012).
 *
 * Delivery model: assigns into window.LNAT_DATA (created by loader.js).
 * Defensive bucket init guards against load-order issues over file://.
 * All content is illustrative; English only.
 */
(function (root) {
  "use strict";

  /* --- guard: loader.js must run first ----------------------------------- */
  if (!root.LNAT_DATA) {
    root.LNAT_DATA = {};
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-politics.js: window.LNAT_DATA missing — loader.js should run first."
    );
  }
  var DATA = root.LNAT_DATA;

  /* --- defensive bucket init (in case loader omitted any) ---------------- */
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))       { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays))   { DATA.modelEssays = []; }

  /* ====================================================================== *
   * 1. ARGUMENT BANK — Politics & Governance                                *
   *    id: argbank-politics-governance  (validator: argbank-<theme>)        *
   *    Internal label for the UI / study cards: "brief-politics"            *
   * ====================================================================== */
  DATA.argumentBanks.push({
    id: "argbank-politics-governance",
    theme: "politics-governance",

    positions: [
      /* Mandatory voting */
      "Compulsory voting raises turnout and forces governments to address the whole electorate rather than just reliable voters, producing more representative policy.",
      "Voting is a civic duty analogous to jury service or tax-paying; the state may legitimately require it without violating freedom.",
      /* Democracy vs technocracy */
      "Electoral democracy, despite its imperfections, embeds accountability: rulers can be removed peacefully, constraining abuse of power in a way unelected experts cannot.",
      "On complex technical questions — pandemic response, monetary policy, climate targets — expert panels produce better-calibrated decisions than popular votes, because the relevant knowledge is specialised.",
      /* Referendums / direct democracy */
      "Referendums strengthen democratic legitimacy by giving citizens a direct voice on constitutional questions that elected representatives have a conflict of interest in deciding.",
      "On narrow, well-defined questions (electoral reform, independence) a well-designed referendum with a clear question and a supermajority threshold can resolve disputes that parliamentary majorities cannot settle.",
      /* Public transport / car policy */
      "Restricting private car use through rationing, congestion charges, or bans is justified when the externalities — pollution, congestion, carbon — are borne by non-drivers and future generations who cannot consent.",
      "Investment in mass public transport is a better lever than car restriction: it expands choice for those without access to a car before penalising those who currently depend on one.",
      /* Devolution / centralisation */
      "Devolving power to regional or local governments improves policy fit: decisions are made by those most familiar with local conditions and most accountable to local populations.",
      "Certain functions — defence, monetary policy, environmental standards, rights protection — require national or supra-national uniformity; fragmentation produces races to the bottom or free-rider problems.",
      /* Role of the state */
      "The state is justified in intervening when markets systematically fail to provide public goods, correct externalities, or protect the interests of those with no market power.",
      "An expansive state risks entrenching bureaucratic interests, crowding out civil society, and concentrating power in ways that are difficult to reverse democratically."
    ],

    counterPositions: [
      /* Against mandatory voting */
      "Forced participation can produce low-information or random ballots, increasing vote counts without increasing the quality of expressed preferences.",
      "Compelling citizens to vote is a coercive intrusion on negative liberty; freedom of expression includes the freedom to abstain as a political act.",
      "Low turnout may reflect reasonable satisfaction rather than alienation; compelling voters does not address the underlying causes of disengagement.",
      /* Against technocracy */
      "Technocratic bodies are unaccountable when wrong; they can embed the values of a credentialed elite and systematically ignore distributional concerns that elections surface.",
      "Expertise about means does not confer authority about ends; what we should aim for is a political question that democratic debate must resolve.",
      /* Against referendums */
      "Binary referendum questions oversimplify complex decisions, polarise debate, and can be won by whoever frames the question or controls the information environment.",
      "Referendums are susceptible to manipulation by well-funded campaigns, foreign interference, and the emotional rhetoric of populist movements.",
      /* Against car restriction */
      "Rural and suburban populations depend on cars in ways urban planners often discount; restriction without adequate alternatives penalises those with fewest options.",
      /* Against devolution */
      "Devolution can produce a postcode lottery in public services and allow regional majorities to oppress local minorities who have no higher authority to appeal to.",
      /* Against state intervention */
      "State interventions regularly produce unintended consequences; regulatory capture and bureaucratic inertia can make outcomes worse than the market failure being corrected."
    ],

    examples: [
      /* Mandatory voting */
      "Australia has had compulsory voting since 1924; turnout consistently exceeds 90 per cent and the fine is modest (around AUD 20); the system enjoys broad public acceptance.",
      "Belgium's compulsory voting has coexisted with a complex multi-party system; critics argue it has not resolved deep political fragmentation.",
      /* Democracy vs technocracy */
      "The European Central Bank and the Bank of England set interest rates through independent expert committees, insulated from electoral cycles, on the rationale that monetary credibility requires it.",
      "Sweden's expert-led COVID-19 response — led by state epidemiologist Anders Tegnell — diverged from most European governments; its outcomes were contested, illustrating that expert consensus can be wrong.",
      "Singapore's technocratic governance model has delivered sustained economic growth but with constrained political competition — evidence cited both by advocates and critics of the trade-off.",
      /* Referendums */
      "The 2016 UK Brexit referendum: 52–48 per cent result on a question experts judged under-specified; produced a decade of constitutional dispute and illustrated the polarising potential of binary votes.",
      "New Zealand's 2020 cannabis legalisation and euthanasia referendums: both held alongside a general election with deliberate public information campaigns — a procedurally careful example.",
      "Switzerland holds multiple referendums per year through its initiative and referendum system; it is frequently cited as evidence that direct democracy can be institutionalised without instability.",
      /* Car policy */
      "London's Congestion Charge (2003) and Ultra Low Emission Zone (expanded 2023): congestion and emissions fell in the charging zone; distributional concerns led to exemptions and supplements for low-income drivers.",
      "Oslo has set targets to ban fossil-fuel car sales; by contrast, France provides purchase subsidies for electric vehicles rather than outright bans — two contrasting regulatory approaches.",
      /* Devolution */
      "Scottish devolution (1999): the Scottish Parliament has diverged from Westminster on tuition fees, prescription charges, and social care, demonstrating policy experimentation in action.",
      "US federalism allows states to act as 'laboratories of democracy' but also enabled differential rights protections — illustrated by the variation in abortion access after Dobbs v. Jackson (2022).",
      /* Role of the state */
      "The post-war welfare state in the UK — NHS, universal secondary education, social housing — expanded state provision dramatically and is still broadly popular, despite ongoing debates about sustainability.",
      "New Zealand's Wellbeing Budget (from 2019) embeds non-GDP measures (mental health, child poverty, environmental) into fiscal planning — a recent example of redefining what the state is for."
    ],

    facts: [
      "Approximately 24 countries operate some form of compulsory voting as of 2024, including Australia, Belgium, Brazil, and Luxembourg (source: IDEA, International Institute for Democracy and Electoral Assistance).",
      "Australia's 2022 federal election turnout was 89.8 per cent under compulsion; UK 2024 general election turnout was approximately 60 per cent under voluntary voting.",
      "Switzerland holds an average of four national referendums per year; since 1848 it has held over 600 federal popular votes (source: Swiss Federal Chancellery).",
      "The 2016 UK Brexit referendum registered 72.2 per cent turnout — the highest in a UK-wide vote since the 1992 general election.",
      "London's Congestion Charge zone traffic volumes fell by approximately 30 per cent in its first year (2003) before gradually rebounding over subsequent years (Transport for London data).",
      "The Scottish Parliament has been devolved since 1999; Scotland abolished university tuition fees for Scottish-domiciled students in 2001, diverging from the rest of the UK.",
      "The UN Human Development Index ranks Scandinavian states (with large public sectors) consistently in the global top ten for human development alongside Singapore (with a more constrained democratic model), illustrating that multiple state models can produce high development outcomes.",
      "The Bank of England was made operationally independent in 1997; the key argument for independence was that elected governments face an incentive to set rates too low before elections — a time-inconsistency problem identified in academic economics."
    ]
  });

  /* ====================================================================== *
   * 2. ESSAY PROMPTS — prompt-650 .. prompt-653                             *
   *    theme: politics-governance  source: illustrative                     *
   *    (officials live once as prompt-607/608 in fundamentals.js)           *
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-650",
      theme: "politics-governance",
      text: "Would a government of experts produce better decisions than a government of elected politicians?",
      source: "illustrative"
    },
    {
      id: "prompt-651",
      theme: "politics-governance",
      text: "Should major constitutional changes — such as leaving a political union — be decided by referendum rather than by parliament?",
      source: "illustrative"
    },
    {
      id: "prompt-652",
      theme: "politics-governance",
      text: "Is there a principled case for devolving power to regional governments, or does it simply fragment effective governance?",
      source: "illustrative"
    },
    {
      id: "prompt-653",
      theme: "politics-governance",
      text: "How much should governments restrict individual behaviour for the sake of the common good?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * 3. MODEL ESSAYS                                                          *
   * ====================================================================== */

  /* ------------------------------------------------------------------ *
   * essay-7050 — MODEL (strong)                                          *
   * Prompt: prompt-650 (experts vs elected politicians)                  *
   * ------------------------------------------------------------------ */
  DATA.modelEssays.push({
    id: "essay-7050",
    promptId: "prompt-650",
    quality: "model",
    body:
      "Governments of experts would produce better-calibrated answers to technical questions " +
      "but worse answers to political ones — and most decisions that matter are ultimately " +
      "political ones. That distinction, rather than a blanket preference for either model, " +
      "should govern how we distribute authority between elected politicians and unelected " +
      "specialists.\n\n" +
      "The case for technocracy is strongest where the relevant knowledge is genuinely " +
      "specialised and the question is primarily about means rather than ends. Central banks " +
      "are the clearest example. The Bank of England was made operationally independent in " +
      "1997 precisely because elected governments face a well-documented incentive to cut " +
      "interest rates before elections regardless of the consequences for inflation — a " +
      "time-inconsistency problem identified in academic economics long before independence " +
      "became policy. Handing the decision to an expert monetary policy committee, accountable " +
      "through published minutes and parliamentary scrutiny rather than the ballot box, " +
      "improved the credibility of anti-inflation commitment in ways that mattered concretely " +
      "for borrowing costs and economic stability. Similar logic applies to regulatory agencies " +
      "handling drug approval, aircraft certification, or nuclear safety, where technical " +
      "competence genuinely cannot be substituted by democratic enthusiasm and where getting " +
      "the answer wrong has immediate and irreversible consequences.\n\n" +
      "Yet the limits of this argument are equally clear. Expertise about means does not " +
      "confer authority about ends. Whether we should prioritise growth over equality, " +
      "security over liberty, or present welfare over future environmental costs are not " +
      "questions that empirical specialists are better placed to answer than citizens. " +
      "These are value trade-offs, and in a liberal democracy the authority to make value " +
      "trade-offs on behalf of a population derives from that population's consent — which " +
      "elections, imperfectly, provide. Sweden's divergent COVID-19 strategy, led by the " +
      "state epidemiologist Anders Tegnell rather than politicians, illustrates the risk: " +
      "experts can be confidently and consequentially wrong, and when they are, democratic " +
      "accountability — the ability to remove decision-makers — is the main corrective " +
      "mechanism available. An expert who gets it wrong cannot be voted out; a government " +
      "that defers to experts who get it wrong can be.\n\n" +
      "There is also a structural objection that goes deeper than individual error. " +
      "Technocratic bodies are insulated from electoral pressure, which is their virtue " +
      "when it prevents short-termism, but they are therefore also insulated from challenge " +
      "when they embed the values of the credentialed class — which tends to be urban, " +
      "university-educated, and economically comfortable. The distributional politics that " +
      "elected governments must address — who bears the costs of a policy, which communities " +
      "are sacrificed to aggregate efficiency — are systematically harder to raise inside an " +
      "expert body than inside a parliament where the displaced workers' representative " +
      "can speak directly.\n\n" +
      "The sensible answer is not to choose between democracy and expertise but to assign " +
      "them properly. Experts should define and constrain the means by which democratic " +
      "decisions are implemented; elected politicians, accountable to voters, should set " +
      "the ends. A government run entirely by experts would be more competent in its " +
      "technical operations and less legitimate in its political choices — a trade-off " +
      "that democracies have rightly refused to make wholesale, and should continue to refuse.",
    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The thesis is precise and committed from sentence 1: experts do better on technical means, elected politicians on value-laden ends — a third-way position that avoids fence-sitting by being specific about the distribution."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "Paragraph 2 makes the strongest case for technocracy with the Bank of England example before dismantling it — this steelmanning structure demonstrates analytical honesty and strengthens the eventual rebuttal."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 directly engages the strongest objection to the essay's own position (experts on ends), and the Swedish COVID example provides a concrete case where technocratic confidence went wrong."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Three distinct examples are used: Bank of England independence (1997), Sweden's COVID response, and the structural class-bias objection — each does different argumentative work rather than repeating the same point."
      },
      {
        rubricDim: "clarity",
        fiveI: null,
        note:
          "The means/ends distinction is introduced in paragraph 1 and consistently applied throughout; the conclusion uses it to deliver a crisp resolution rather than retreating to vagueness."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The structural objection paragraph (paragraph 4) is kept to four sentences; it adds a distinct dimension (distributional invisibility) without repeating arguments already made."
      }
    ]
  });

  /* ------------------------------------------------------------------ *
   * essay-7051 — MODEL (strong)                                          *
   * Prompt: prompt-651 (referendums for constitutional change)           *
   * ------------------------------------------------------------------ */
  DATA.modelEssays.push({
    id: "essay-7051",
    promptId: "prompt-651",
    quality: "model",
    body:
      "Major constitutional changes should be decided by parliament as the default, " +
      "with referendums reserved for questions where parliamentary decision-making " +
      "has an unavoidable conflict of interest. That conditional rule is more " +
      "principled than either always or never using direct democracy for " +
      "constitutional matters — and it explains why some referendums are defensible " +
      "while others are democratic failures.\n\n" +
      "The core case for referendums rests on consent and conflict of interest. " +
      "A constitutional change alters the rules under which all future decisions " +
      "are made; it is therefore different in kind from ordinary legislation, which " +
      "a parliament can reverse if it proves mistaken. When a parliament votes to " +
      "change the electoral system that produced its own majority, or to leave a " +
      "political union that shapes its own authority and funding, its members have " +
      "an institutional stake in the outcome that is difficult to separate from the " +
      "public interest. In such cases, asking citizens directly has genuine " +
      "democratic logic: it removes the decision from the hands of those most likely " +
      "to be, consciously or not, self-serving. Switzerland provides the most " +
      "sustained evidence that this can work: it has held over 600 federal popular " +
      "votes since 1848, averaging four per year, and remains one of the most " +
      "politically stable and high-trust democracies in the world. Direct democracy " +
      "at scale is not inherently destabilising.\n\n" +
      "Yet the 2016 UK Brexit referendum illustrates the serious risks when " +
      "referendums are used without adequate design constraints. A 52-48 result " +
      "on a question widely judged to have been under-specified — 'Leave' implied " +
      "many different post-membership arrangements, none of which commanded " +
      "majority support individually — produced a decade of constitutional dispute " +
      "rather than the resolution its proponents promised. Two structural problems " +
      "compounded each other. Binary questions collapse genuinely complex decisions " +
      "into a false choice, concentrating all the passion of multiple distinct " +
      "grievances onto a single yes or no. At the same time, referendum campaigns " +
      "are more vulnerable than parliamentary debate to misinformation, emotional " +
      "appeals, and foreign interference, because parliamentary procedure — committee " +
      "scrutiny, expert witnesses, the requirement to respond to specific amendments " +
      "— provides friction that slows and tests claims in ways a six-week campaign " +
      "does not.\n\n" +
      "These failures are partly remediable by design, and this matters because " +
      "the Brexit case should not be used to discredit well-designed referendums. " +
      "New Zealand's 2020 referendums on cannabis legalisation and assisted dying, " +
      "held alongside a general election with deliberate public information campaigns " +
      "and clearly specified questions, show that a procedurally careful direct vote " +
      "can run far better than Brexit suggests. A supermajority threshold — 60 per " +
      "cent rather than a bare majority — would additionally prevent a narrow " +
      "majority from imposing irreversible constitutional change on a near-equal " +
      "minority. Requiring the question to be certified as unambiguous by an " +
      "independent body before the campaign begins would address the under-specification " +
      "problem that made Brexit's mandate so contested.\n\n" +
      "The right framework is therefore conditional rather than absolute. Parliament " +
      "decides most constitutional matters; a referendum is required when parliament " +
      "has an institutional conflict of interest, but only when the question is " +
      "clearly specified, a supermajority threshold is set, and an independent " +
      "information process accompanies the vote. That combination takes the strongest " +
      "objection to each model seriously without abandoning either one.",
    annotations: [
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "The thesis is specific and defensible: referendums for conflict-of-interest constitutional questions, parliament as default. It avoids both blanket endorsement and blanket rejection of referendums, which would be easier but less intellectually honest."
      },
      {
        rubricDim: "structure",
        fiveI: null,
        note:
          "The essay follows a clear map: thesis → case for referendums (Switzerland) → case against (Brexit, two structural problems) → response that reforms fix the problems → conditional conclusion. Each paragraph has a single job."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Paragraph 3 presents the strongest case against the essay's own favourable view of referendums, using Brexit with two distinct structural sub-arguments (binary question, campaign vulnerability) rather than a vague dismissal."
      },
      {
        rubricDim: "examples",
        fiveI: null,
        note:
          "Switzerland, Brexit, and New Zealand are each chosen to do different argumentative work: Switzerland shows institutional feasibility, Brexit shows design failures, New Zealand shows those failures are remediable."
      },
      {
        rubricDim: "argument",
        fiveI: null,
        note:
          "The conflict-of-interest criterion is a non-obvious analytical move that lifts the essay above generic pro/con; it distinguishes when referendums are principled rather than merely popular."
      },
      {
        rubricDim: "economy",
        fiveI: null,
        note:
          "The conclusion reformulates the conditional rule in one compact sentence that incorporates all three design conditions, then closes in the following sentence — no padding or repetition."
      }
    ]
  });

  /* ------------------------------------------------------------------ *
   * essay-7052 — WEAK                                                    *
   * Prompt: prompt-652 (devolution vs effective governance)              *
   * Five I's failures: Irresolute, Indecisive, Imprecise,               *
   *                    Inconsistent, Indignant                           *
   * ------------------------------------------------------------------ */
  DATA.modelEssays.push({
    id: "essay-7052",
    promptId: "prompt-652",
    quality: "weak",
    body:
      "Devolution is a very complicated issue that different countries have handled " +
      "in different ways. Some people think giving power to regional governments is " +
      "a good idea, while others believe it makes things harder to manage. It is " +
      "difficult to say which view is correct without looking at all the evidence, " +
      "and in this essay I will try to consider both sides fairly.\n\n" +
      "On one hand, regional governments might understand local needs better than " +
      "a central government far away. Scotland, for example, has its own parliament " +
      "and has made some different decisions, which some people say is a good thing. " +
      "On the other hand, having too many different governments could make things " +
      "confusing and inefficient, which is also a valid concern depending on the " +
      "situation and what we think governance is actually for.\n\n" +
      "However, it is also true that centralised governments can sometimes ignore " +
      "regional differences, which is unfair to people in those areas. But then " +
      "again, if every region does things differently, it could be hard to have " +
      "a consistent national policy on things like healthcare or education, which " +
      "are very important. So there are positives and negatives on both sides, and " +
      "reasonable people can disagree about which matters more.\n\n" +
      "Frankly, it is quite unreasonable to expect a simple answer to this question " +
      "given that political scientists and governments around the world have not " +
      "managed to agree on the best system after centuries of trying. The question " +
      "almost seems to assume there is a principled answer when really it just " +
      "depends on the country, its history, its size, and many other factors that " +
      "vary enormously from place to place.\n\n" +
      "In conclusion, devolution can be either good or bad for governance depending " +
      "on how it is done and the context in which it happens. A balance between " +
      "regional autonomy and central coordination is probably the best approach, " +
      "although exactly where that balance should lie is something each country " +
      "will need to work out for itself based on its own particular circumstances " +
      "and the views of its people.",
    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The essay never commits to a position on whether devolution is principled or merely fragmenting. The opening promises to 'consider both sides fairly' and the conclusion endorses an unspecified 'balance' — fence-sitting across all five paragraphs. Compare a model essay: the thesis would state a clear, defensible view in sentence one."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Hedges accumulate throughout without resolution: 'might understand local needs better', 'depending on the situation', 'can be either good or bad', 'probably the best approach', 'each country will need to work out for itself'. Each qualification neutralises the point just made rather than refining it."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Vague gestures substitute for argument: 'different decisions' (what decisions?), 'things like healthcare or education' (no specific policy named), 'many other factors that vary enormously'. Scotland's parliament is mentioned but no actual divergence — such as the abolition of tuition fees for Scottish students — is specified or used to make any claim."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Paragraph 4 attacks the question rather than answering it: 'it is quite unreasonable to expect a simple answer', 'the question almost seems to assume there is a principled answer'. This is Indignant deflection — redirecting energy toward objecting to the task instead of engaging with it. A model essay would treat the difficulty of the question as a reason to argue more carefully, not as grounds to refuse."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Paragraph 2 implies regional governments are better placed to serve local needs, which is a reason for devolution. Paragraph 3 then implies centralised policy consistency is what matters — a reason against devolution. The essay argues both sides of the same point in successive paragraphs without noticing the contradiction or attempting to resolve it."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "There is no thesis sentence at any point. The conclusion — 'devolution can be either good or bad' — restates the opening indecision verbatim. The essay ends where it began having moved nowhere, which is the opposite of what an LNAT essay must do."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "Because no position is ever taken, there is no genuine counterargument — only alternating assertions attributed to unnamed 'people'. A strong essay commits to a view and then engages the best objection to it; this essay lists concerns without committing to or rebutting any of them."
      }
    ]
  });

})(typeof window !== "undefined" ? window : this);
