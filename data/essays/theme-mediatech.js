/*
 * theme-mediatech.js — Section B content for the theme "Media, Technology & Environment".
 *
 * Delivers into window.LNAT_DATA (loader.js must run first). Defensive init guards
 * catch any bucket that somehow arrived undefined. English only. All prompts are
 * source:"illustrative" (not official-cited). Essay IDs follow essay-NNN schema.
 *
 * Buckets written: argumentBanks, prompts, modelEssays.
 * IDs:
 *   argumentBanks : argbank-media-tech-environment
 *   prompts       : prompt-660 .. prompt-665
 *   modelEssays   : essay-7060 (model), essay-7061 (model), essay-7062 (weak)
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] theme-mediatech.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* Defensive bucket init — in case loader schema evolves or file loads stand-alone. */
  if (!Array.isArray(DATA.argumentBanks)) { DATA.argumentBanks = []; }
  if (!Array.isArray(DATA.prompts))       { DATA.prompts = []; }
  if (!Array.isArray(DATA.modelEssays))   { DATA.modelEssays = []; }

  /* ======================================================================== *
   * 1. ARGUMENT BANK — argbank-media-tech-environment
   *    Coverage: social media regulation, free speech online, AI & automation,
   *    privacy/data, climate change responsibility, political correctness / media bias.
   * ======================================================================== */
  DATA.argumentBanks.push({
    id: "argbank-media-tech-environment",
    theme: "media-tech-environment",

    positions: [
      /* Social media regulation */
      "Platforms that algorithmically amplify harmful content bear editorial responsibility and should be regulated as publishers, not passive conduits.",
      "Social media companies have both the technical capacity and the financial incentive to moderate harmful speech; voluntary action has repeatedly proved inadequate, justifying statutory obligations.",
      "Regulatory frameworks (e.g. UK Online Safety Act 2023, EU Digital Services Act 2022) impose risk-based duties of care proportionate to platform size, a preferable model to blanket liability.",

      /* Free speech online */
      "A public square controlled by a handful of private corporations is not genuinely free; antitrust and interoperability rules can restore meaningful speech diversity without direct content regulation.",
      "The right to free expression does not oblige any private company to host any speaker; deplatforming is a legitimate exercise of editorial discretion, not censorship.",

      /* AI and automation */
      "Automation displaces routine jobs but historically creates more roles than it destroys; the policy response should focus on retraining and portable benefits, not halting deployment.",
      "Generative AI risks concentrating economic and epistemic power in the hands of a few developers; ex-ante licensing requirements and safety evaluations are justified before wide deployment.",
      "AI systems trained on biased data propagate and scale those biases; mandatory algorithmic audits and redress mechanisms are proportionate responses.",

      /* Privacy and data */
      "Individuals generate the data that trains AI and fuels personalised advertising; data-dividend schemes or collective bargaining rights would correct an unjust distribution of value.",
      "Mass surveillance by both state and commercial actors chills political dissent and associational freedom; strong data minimisation and purpose-limitation rules are essential civil liberties protections.",

      /* Climate and media */
      "News organisations that accept advertising from fossil-fuel companies face structural conflicts of interest that distort climate coverage; disclosure requirements address information asymmetry.",
      "Social media platforms have a duty to label scientific consensus on climate change accurately and demote systematic disinformation, just as they do for electoral misinformation.",

      /* Political correctness / media bias */
      "Accusations of 'political correctness' often function to stigmatise legitimate demands for inclusive language; newsrooms that resist such demands risk further eroding trust among under-represented audiences.",
      "Perceived ideological homogeneity in mainstream media drives audiences to unmoderated alternatives; editorial diversity and public-service obligations better address this than deregulation."
    ],

    counterPositions: [
      /* Social media regulation */
      "State regulation of online speech is structurally difficult: governments are among the most likely abusers of content moderation power, and every regulatory framework risks capture.",
      "The liability model chills small platforms and entrenches incumbents who can afford compliance costs; a more proportionate approach targets specific harms with specific remedies.",

      /* Free speech online */
      "Algorithmic deamplification and deplatforming, when decisions are opaque and unchallengeable, create de-facto speech suppression without due process; transparency and appeals are non-negotiable.",
      "Free expression values require platforms to tolerate a wide range of views even when offensive; restricting to 'safe' speech homogenises public discourse.",

      /* AI and automation */
      "Mandatory pre-deployment licensing would freeze AI development at a moment of rapid progress and export the competitive advantage to jurisdictions with lighter touch; iterative post-deployment review is preferable.",
      "Concerns about AI job displacement are often overstated; most credible projections show net employment growth, though sectoral disruption is real and demands targeted support.",

      /* Privacy and data */
      "Data minimisation requirements can prevent beneficial uses of data (medical research, fraud detection, personalised education); a blanket privacy-first approach may impose net social costs.",
      "Commercial data collection is largely consensual and funds free-at-point-of-access services that consumers demonstrably value; privacy maximalism ignores revealed preferences.",

      /* Climate and media */
      "Requiring platforms to label or demote climate content places enormous epistemic authority in a handful of private companies and creates a precedent for broader official speech hierarchies.",
      "Media organisations face genuine commercial pressures; singling out fossil-fuel advertising while ignoring other ethically contested industries is arbitrary.",

      /* Political correctness / media bias */
      "Political correctness, narrowly understood, is an accusation label, not a coherent regulatory concept; attempts to mandate linguistic norms risk state interference in cultural life.",
      "Media-bias claims are empirically contested; selection of comparable benchmarks is disputed, and regulatory 'balance' requirements have historically entrenched incumbent narratives."
    ],

    examples: [
      "EU Digital Services Act (2022): large platforms must conduct systemic risk assessments for algorithmic harms and allow independent audits — a risk-based rather than content-based regulatory model.",
      "UK Online Safety Act (2023): imposes a statutory duty of care on platforms, with Ofcom as regulator; controversial 'legal but harmful' provisions were later removed following free speech concerns.",
      "Twitter/X deplatforming of Donald Trump (January 2021): illustrated the scale of private editorial power and sparked debate about whether dominant platforms warrant different rules than smaller ones.",
      "EU AI Act (2024): tiered risk classification for AI systems — high-risk applications (recruitment, credit scoring, biometric ID) face mandatory conformity assessments; generative AI must disclose AI-generated content.",
      "Cambridge Analytica / Facebook (2018): demonstrated how micro-targeted political advertising using harvested personal data can distort democratic processes, driving GDPR enforcement and data-rights debate.",
      "GDPR (EU, 2018): right of access, erasure, and data portability — strongest data-rights framework globally; widely praised for principle but criticised for inconsistent enforcement across member states.",
      "Reuters Institute Digital News Report 2023: found that trust in news is lowest in markets with high perceived political polarisation of media, challenging the claim that more regulation of bias improves trust.",
      "GPT-4 and labour-market research (Goldman Sachs, 2023): estimated ~25% of current US work tasks could be automated; historical precedent (Industrial Revolution, computerisation) suggests net job creation but protracted sectoral disruption.",
      "Guardian / Independent decision to reject fossil-fuel advertising (2020): reputational benefit cited as outweighing revenue loss; demonstrates voluntary market mechanism can align financial and editorial incentives.",
      "BBC editorial guidelines on false balance: the BBC explicitly states it does not offer 'balance' between scientific consensus and fringe views on climate or vaccines — a model of principled editorial independence under public-service mandate."
    ],

    facts: [
      "The EU Digital Services Act (2022) applies to platforms with over 45 million monthly users in the EU; very large platforms (VLPs) must publish transparency reports on content moderation and algorithmic systems.",
      "GDPR (Regulation 2016/679) grants EU residents rights of access, rectification, erasure, restriction, portability, and objection; maximum fines are the higher of €20 million or 4% of global annual turnover.",
      "A 2023 Pew Research Center study found 64% of Americans believe social media have a mostly negative effect on the way things are going in the country.",
      "The International Energy Agency (IEA) reported in 2023 that global CO₂ emissions from energy combustion reached a record 36.8 gigatonnes — context for debates about which actors bear responsibility for climate mitigation.",
      "The Reuters Institute Digital News Report 2024 found trust in news averaged 40% across 47 markets, down from 42% in 2023, with perceived partisan bias cited as a leading cause.",
      "Goldman Sachs (2023) estimated generative AI could automate approximately 300 million full-time equivalent jobs globally, while also creating new categories of work — net effect contested.",
      "The World Economic Forum Future of Jobs Report (2023) projected that 69 million new jobs will be created and 83 million displaced by technology transition by 2027 — net displacement of 14 million.",
      "Section 230 of the US Communications Decency Act (1996) grants broad immunity to online platforms for third-party content; it is the most debated single provision in US internet law.",
      "The UK Advertising Standards Authority upheld 1,513 complaints about misleading environmental (greenwashing) claims in 2022 — illustrating the scale of commercial environment-related misinformation.",
      "Reporters Without Borders World Press Freedom Index 2024 ranked the UK 20th (up from 26th in 2023) and the US 55th, indicating significant variation in press independence among democracies."
    ]
  });

  /* ======================================================================== *
   * 2. ILLUSTRATIVE PROMPTS — prompt-660 .. prompt-665
   *    theme: "media-tech-environment"
   * ======================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-660",
      theme: "media-tech-environment",
      text: "Should social media companies be legally responsible for the content their users post?",
      source: "illustrative"
    },
    {
      id: "prompt-661",
      theme: "media-tech-environment",
      text: "\"Artificial intelligence will destroy more jobs than it creates.\" Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-662",
      theme: "media-tech-environment",
      text: "Does the individual have a meaningful right to privacy in the digital age?",
      source: "illustrative"
    },
    {
      id: "prompt-663",
      theme: "media-tech-environment",
      text: "Should individuals, rather than corporations or governments, bear primary responsibility for addressing climate change?",
      source: "illustrative"
    },
    {
      id: "prompt-664",
      theme: "media-tech-environment",
      text: "Is \"political correctness\" a threat to free expression, or a necessary evolution of public discourse?",
      source: "illustrative"
    },
    {
      id: "prompt-665",
      theme: "media-tech-environment",
      text: "Should news organisations be required by law to ensure balanced reporting?",
      source: "illustrative"
    }
  );

  /* ======================================================================== *
   * 3. MODEL ESSAYS (strong) — essay-101, essay-102
   * ======================================================================== */
  DATA.modelEssays.push(

    /* ------------------------------------------------------------------ *
     * essay-7060  — strong model
     * prompt: prompt-660 (social media legal responsibility)
     * ------------------------------------------------------------------ */
    {
      id: "essay-7060",
      promptId: "prompt-660",
      quality: "model",
      body:
        "Social media companies should be legally responsible for the content they host, " +
        "but the form that responsibility takes matters as much as the principle itself. " +
        "A blunt regime of direct liability for every user post would destroy open " +
        "platforms and chill legitimate speech; a targeted duty of care, enforced against " +
        "demonstrably harmful systemic design failures, is both proportionate and " +
        "necessary.\n\n" +
        "The case for responsibility begins with architecture. Platforms do not passively " +
        "transmit messages, as a postal service does; they rank, amplify, and recommend " +
        "content through proprietary algorithms designed to maximise engagement. When those " +
        "algorithms demonstrably amplify vaccine disinformation or incitement to violence " +
        "— because outrage and fear drive more clicks than accurate but dull corrections " +
        "— the platform has made an editorial choice, however automated the mechanism. " +
        "The claim to neutral conduit status, preserved by Section 230 of the US " +
        "Communications Decency Act since 1996, was premised on an internet of passive " +
        "message boards that no longer exists. Passive immunity for active algorithmic " +
        "amplification is logically inconsistent, and the inconsistency matters because " +
        "it is the amplification, not the original posting, that produces harm at scale.\n\n" +
        "The EU Digital Services Act (2022) illustrates the better model. Very large " +
        "platforms — those with over 45 million monthly users in the EU — must conduct " +
        "systemic risk assessments, submit to independent audits, and publish transparency " +
        "reports on their algorithmic systems. They are not held liable for every " +
        "individual post, but they are required to demonstrate that their systems do not " +
        "amplify the most serious harms at scale. This is proportionate: it targets the " +
        "mechanism through which platforms exert influence rather than treating them as " +
        "insurers against all user misbehaviour, which would be both unworkable and " +
        "counterproductive.\n\n" +
        "Against this, critics argue that even risk-based regulation favours incumbents " +
        "who can absorb compliance costs, entrenching the very platforms we should be " +
        "breaking up. The objection is real and should be taken seriously: Meta and " +
        "Alphabet can hire entire compliance departments; a new entrant cannot. But this " +
        "is an argument for coupling responsibility with interoperability and portability " +
        "requirements — so that compliant competitors can actually attract users away from " +
        "non-compliant incumbents — not for abandoning the duty of care altogether. The " +
        "alternative, unrestricted algorithmic amplification with no accountability, is, " +
        "as the Frances Haugen whistleblowing disclosures of 2021 demonstrated with " +
        "internal Facebook research, a documented public health and democratic risk that " +
        "the companies had identified and chosen to deprioritise.\n\n" +
        "Two further points reinforce this conclusion. First, the UK Online Safety " +
        "Act (2023), despite its contested 'legal but harmful' provisions that were " +
        "eventually removed, established that the duty of care principle itself is " +
        "politically viable in a common-law jurisdiction — the objections were to " +
        "scope, not to the principle. Second, voluntary self-regulation has " +
        "consistently failed: every major platform has adopted and then quietly " +
        "retreated from its own content moderation commitments when they conflicted " +
        "with engagement metrics. The market incentive structure does not produce " +
        "responsible curation without legal compulsion.\n\n" +
        "Legal responsibility for social media companies is therefore justified when " +
        "it focuses on systemic design choices rather than individual posts. Platforms " +
        "that profit from engineering human attention should be required to answer for " +
        "the harms that engineering foreseeably produces.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note:
            "The thesis is stated in two sentences at the end of the opening paragraph: yes to responsibility, " +
            "but targeted at systemic design failures rather than individual posts. Committed and qualified — not fence-sitting."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note:
            "Paragraph 2 draws a principled distinction between passive conduit and active algorithmic amplifier, " +
            "then uses that distinction to undermine the Section 230 'neutral conduit' defence. The argument is analytic, not merely assertive."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note:
            "EU Digital Services Act (2022), Section 230, and the Frances Haugen disclosures are cited as concrete evidence rather than vague references to 'experts' or 'studies'."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note:
            "Paragraph 4 states the incumbency/compliance-cost objection fairly and at its strongest, then rebuts it by showing it supports a design fix (interoperability) rather than the conclusion that duty-of-care should be dropped."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note:
            "The essay follows thesis → principled argument → concrete model → counter + rebuttal → conclusion reinforcing the thesis. The map is clear throughout."
        },
        {
          rubricDim: "economy",
          fiveI: null,
          note:
            "Each paragraph does exactly one job. The conclusion is two sentences that tie the principle ('profit from engineering attention') to the duty — no new material, no padding."
        }
      ]
    },

    /* ------------------------------------------------------------------ *
     * essay-7061  — strong model
     * prompt: prompt-663 (individual vs corporate/government climate responsibility)
     * ------------------------------------------------------------------ */
    {
      id: "essay-7061",
      promptId: "prompt-663",
      quality: "model",
      body:
        "Individuals cannot bear primary responsibility for addressing climate change. " +
        "The physical scale of the problem, the structural causes embedded in energy " +
        "infrastructure and supply chains, and the documented campaign to shift blame " +
        "onto consumers all point to the same conclusion: corporations and governments " +
        "must lead, with individual action playing a necessary but secondary role.\n\n" +
        "The arithmetic settles the first point. The International Energy Agency recorded " +
        "36.8 gigatonnes of energy-related CO₂ emissions in 2023 — a record high. " +
        "Meaningful reductions at that scale require systemic changes to electricity " +
        "grids, building standards, industrial processes, and transport networks that " +
        "no aggregation of individual lifestyle choices can accomplish on the required " +
        "timeline. A person who goes vegan, stops flying, and switches to an electric " +
        "vehicle eliminates perhaps a few tonnes of annual emissions. A single " +
        "unabated coal-fired power station emits several million. When the marginal " +
        "impact of individual virtue is measured against the structural sources of " +
        "emissions, the conclusion is clear: individual action is necessary but " +
        "categorically insufficient as a primary strategy. Asking individuals to " +
        "carry responsibility that can only be discharged through policy is not " +
        "an ethical position; it is a category error.\n\n" +
        "The second argument concerns the deliberate construction of the individual " +
        "responsibility framing. BP popularised the personal carbon footprint " +
        "calculator in a 2004 advertising campaign — a marketing strategy, not a " +
        "scientific tool, designed to transfer the language of accountability from " +
        "the fossil-fuel sector to its customers. Presenting structural problems as " +
        "individual lifestyle choices is not merely inaccurate; it is politically " +
        "functional, deflecting regulatory pressure onto consumers and fragmenting " +
        "collective demands for systemic change into a million private gestures that " +
        "leave industrial infrastructure untouched. Recognising this manufactured " +
        "framing does not exonerate individuals from acting where they can, but it " +
        "does clarify where primary accountability must lie.\n\n" +
        "A stronger version of the opposing view concedes the structural argument " +
        "but insists that democratic governments are only as ambitious as their " +
        "electorates allow. Individual political action — through voting, advocacy, " +
        "and public pressure — is the lever that moves institutional change, and on " +
        "this view individuals bear primary responsibility because they are the " +
        "ultimate authors of policy. This is partly true: electoral pressure has " +
        "driven climate legislation in multiple jurisdictions. But the argument " +
        "conflates political participation with private consumption choices, which " +
        "are the specific domain the proposition addresses. More fundamentally, " +
        "demanding that individuals bear primary responsibility for climate change " +
        "because they elect governments proves too much: it would make individuals " +
        "primarily responsible for every policy failure of their governments, which " +
        "is not how modern democratic accountability is understood to distribute " +
        "moral responsibility.\n\n" +
        "Governments and corporations bear primary responsibility because they " +
        "control the energy systems, planning rules, subsidy structures, and capital " +
        "allocation decisions on which all individual choices ultimately depend. " +
        "Individual action matters at the margin, as a cultural signal, and as a " +
        "form of political pressure — but margin and signal are not the same as " +
        "primary responsibility. The category error of treating them as equivalent " +
        "has cost a decade of effective climate policy, which is itself a reason " +
        "to insist on getting the attribution of responsibility right.",
      annotations: [
        {
          rubricDim: "thesis",
          fiveI: null,
          note:
            "The opening sentence takes a clear, direct position against the proposition. The second sentence " +
            "gives three reasons in compressed form, acting as a roadmap. No hedging."
        },
        {
          rubricDim: "argument",
          fiveI: null,
          note:
            "Two distinct arguments are developed: (1) the arithmetic of scale, which shows individual action is quantitatively insufficient; " +
            "(2) the agency argument, which shows the 'individual responsibility' framing was manufactured as a political strategy."
        },
        {
          rubricDim: "examples",
          fiveI: null,
          note:
            "The IEA 36.8-gigatonne figure gives the scale argument empirical grounding. " +
            "BP's 2004 carbon footprint calculator is a historically verifiable example that makes the agency argument concrete."
        },
        {
          rubricDim: "counterargument",
          fiveI: null,
          note:
            "Paragraph 4 presents the strongest version of the opposing view — that individuals drive government ambition through democratic participation — " +
            "before distinguishing political action from consumption choices, and showing the argument proves too much."
        },
        {
          rubricDim: "clarity",
          fiveI: null,
          note:
            "The sentence 'individual virtue is necessary but categorically insufficient' crystallises the argument's logic concisely and memorably. " +
            "Terminology (IEA, carbon footprint) is used precisely and explained implicitly by context."
        },
        {
          rubricDim: "structure",
          fiveI: null,
          note:
            "Five paragraphs: thesis with roadmap → scale argument → agency/political argument → counterargument + rebuttal → reinforced conclusion. " +
            "The structure is tightly controlled and matches the recommended LNAT five-part form."
        }
      ]
    }
  );

  /* ======================================================================== *
   * 4. WEAK ESSAY — essay-7062
   * prompt: prompt-661 (AI will destroy more jobs than it creates)
   * Five I's failures: Irresolute, Indecisive, Imprecise, Inconsistent, Indignant
   * ======================================================================== */
  DATA.modelEssays.push({
    id: "essay-7062",
    promptId: "prompt-661",
    quality: "weak",
    body:
      "The question of whether artificial intelligence will destroy more jobs than it " +
      "creates is one that many people are talking about today. There are lots of " +
      "different opinions on this topic and it is hard to say for certain either way. " +
      "Some experts think AI is very dangerous for employment, while others are more " +
      "optimistic, and both sides make some fair points.\n\n" +
      "On the one hand, it is obvious that AI can do a lot of things that humans used " +
      "to do. For example, in factories and offices, computers are replacing people all " +
      "the time. This is clearly bad for workers in those industries. However, it could " +
      "also be argued that new jobs will appear, just as happened with the industrial " +
      "revolution, which is an interesting historical comparison that shows things might " +
      "not be so simple after all.\n\n" +
      "On the other hand, some people say AI will actually create more jobs. This is " +
      "because technology always seems to create new kinds of work. But then again, " +
      "this time might be different because AI is more powerful than previous " +
      "technologies, although it is also true that people said this about previous " +
      "technologies too and they were sometimes wrong. So it is really difficult to know.\n\n" +
      "Frankly, it is a bit unreasonable for people to expect a student sitting an " +
      "exam to know the answer to a question that economists and AI researchers cannot " +
      "agree on. The question itself seems designed to trick the candidate into making " +
      "a claim they cannot possibly prove, which is rather unfair. Nevertheless, both " +
      "sides have merit and any reasonable person can see that.\n\n" +
      "In conclusion, AI will probably have some negative effects on jobs and some " +
      "positive effects, and the overall outcome will depend on a lot of factors " +
      "including government policy, the speed of technological change, and whether " +
      "workers can be retrained. The most important thing is that we think carefully " +
      "about this issue going forward.",
    annotations: [
      {
        rubricDim: null,
        fiveI: "Irresolute",
        note:
          "The essay never takes a position on whether AI will destroy more jobs than it creates. " +
          "The opening paragraph explicitly refuses to decide ('it is hard to say for certain either way'), " +
          "and the conclusion restates that both effects will occur, which answers a different question. " +
          "Fence-sitting is the textbook Irresolute flaw."
      },
      {
        rubricDim: null,
        fiveI: "Indecisive",
        note:
          "Paragraph 3 oscillates mid-argument: 'AI will create more jobs' → 'this time might be different' → " +
          "'people said this before and were wrong' → 'so it is really difficult to know.' Each sentence " +
          "retreats from the one before, demonstrating mid-essay indecision rather than a developed argument."
      },
      {
        rubricDim: null,
        fiveI: "Imprecise",
        note:
          "Phrases like 'lots of different opinions', 'all the time', 'more powerful than previous technologies', " +
          "and 'a lot of factors' are vague filler. No statistics, named studies, specific sectors, or dated events " +
          "appear. 'The industrial revolution' is invoked without any claim about what it actually shows. " +
          "This is the Imprecise flaw: ornate or hedged language masking an absence of substance."
      },
      {
        rubricDim: null,
        fiveI: "Inconsistent",
        note:
          "Paragraph 2 says displacement by AI is 'clearly bad for workers', then says 'new jobs will appear' as a " +
          "counter. Paragraph 3 says AI 'will actually create more jobs' then says 'this time might be different' implying " +
          "it might not. The essay argues both ways on the same point in successive paragraphs, violating internal consistency."
      },
      {
        rubricDim: null,
        fiveI: "Indignant",
        note:
          "Paragraph 4 attacks the question itself rather than answering it: 'it is a bit unreasonable', " +
          "'the question seems designed to trick the candidate', 'which is rather unfair.' " +
          "This is the Indignant flaw exactly — redirecting energy toward objecting to the prompt instead of engaging with it."
      },
      {
        rubricDim: "thesis",
        fiveI: null,
        note:
          "Contrast with model essays: there is no thesis sentence anywhere in the essay. " +
          "The conclusion — 'AI will probably have some negative effects and some positive effects' — " +
          "is the opposite of a committed position; it answers a question no one asked."
      },
      {
        rubricDim: "counterargument",
        fiveI: null,
        note:
          "There is no genuine counterargument because there is no argument to counter. " +
          "The essay lists views attributed to unnamed 'people' or 'experts' without " +
          "committing to any of them or rebutting any of them substantively."
      }
    ]
  });

})(typeof window !== "undefined" ? window : this);
