/*
 * mock-07.js — full LNAT Section A mock exam (Mock Paper 7).
 *
 * Original, illustrative content authored against data/SCHEMA.md. It is fully
 * self-contained: every question, prompt and the mock object reference ONLY the
 * IDs defined in this file (range 701-742 / prompt-170X). All MCQs use exactly 4
 * options and are answerable from the passage ALONE, with no outside knowledge
 * required.
 *
 * Delivery model: this file assigns into the buckets that loader.js created on
 * window.LNAT_DATA, and MUST load AFTER loader.js. English-only. Every authored
 * item is source:"illustrative".
 *
 * Composition:
 *   - 12 passages (250-380 words), 2 per genre across the 6 genres, argumentative.
 *   - 42 four-option questions across all 11 sub-types; six 4-Q passages and six
 *     3-Q passages (24 + 18 = 42).
 *   - 3 illustrative essay prompts.
 *   - The mock-07 object wiring all 12 passages, 42 questions and 3 prompts.
 *
 * Topics (all distinct from mocks 01-06 and from the banned-topic list):
 *   literature    : the philosophy of humour; the ethics of true-crime media
 *   politics      : the minimum wage; opt-out (presumed-consent) organ donation
 *   science       : the ethics of AI-generated art; AI in hiring decisions
 *   history       : sport and national identity; cultural appropriation
 *   philosophy    : the value of failure; the ethics of nudging (choice architecture)
 *   currentaffairs: space-colonisation ethics; degrowth vs economic growth
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-07.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }
  // Defensive bucket guards: if loader.js shipped a partial manifest, create the
  // buckets this file appends to rather than throwing on a missing array.
  if (!Array.isArray(DATA.passages)) DATA.passages = [];
  if (!Array.isArray(DATA.questions)) DATA.questions = [];
  if (!Array.isArray(DATA.prompts)) DATA.prompts = [];
  if (!Array.isArray(DATA.mocks)) DATA.mocks = [];

  /* ====================================================================== *
   * PASSAGES — 12 across 6 genres (2 each), ids 701-712.
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-literature-701",
      genre: "literature",
      title: "What We Are Doing When We Laugh",
      body:
        "Of the many attempts to explain why we laugh, three have lasted. The " +
        "oldest holds that laughter is a small cruelty, a sudden glory at " +
        "feeling superior to the person who slips on the ice. The second treats " +
        "a joke as a safety valve, releasing nervous energy that has built up " +
        "around a forbidden subject. The third, and to my mind the most " +
        "promising, says that we laugh at incongruity: at the moment when an " +
        "expectation is set up and then briskly betrayed, when the bishop turns " +
        "out to be the burglar. Each theory captures something, yet each, taken " +
        "alone, leaves too much out. The superiority theory cannot explain why " +
        "we laugh hardest at ourselves, where no rival is bested; the relief " +
        "theory says nothing about why a particular twist is funny rather than " +
        "merely surprising. Incongruity fares better, but it too is incomplete, " +
        "for plenty of mismatches produce not laughter but confusion or alarm. " +
        "What the theories miss is that humour is not a single mechanism but a " +
        "social act performed for an audience, real or imagined. A joke is an " +
        "offer, and laughter is its acceptance; both depend on a shared sense of " +
        "what is fitting that the joke can then upset. This is why humour " +
        "travels so badly between eras and languages, and why the same remark " +
        "can delight one room and offend the next. To ask what laughter is, in " +
        "the abstract, is therefore to ask the wrong question. The better " +
        "question is what a given joke asks of the people who hear it, and " +
        "whether they are willing, in that moment, to play along. A theory that " +
        "looks only at the mechanism inside one skull will always miss the " +
        "agreement between several.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-702",
      genre: "literature",
      title: "The Reader at the Crime Scene",
      body:
        "True-crime stories now fill our screens and headphones, and their " +
        "defenders make a reasonable case. The genre, they say, satisfies a " +
        "natural curiosity about why people do terrible things, can expose a " +
        "wrongful conviction, and sometimes prods a cold case back into life. " +
        "All of this is true, and none of it disposes of the unease the genre " +
        "should provoke. The difficulty is not that true crime is morbid; " +
        "tragedy has always drawn an audience, and there is no shame in wanting " +
        "to understand the worst of human conduct. The difficulty is that the " +
        "raw material is somebody else's catastrophe, and the people at its " +
        "centre rarely consented to become entertainment. A grieving family " +
        "discovers that the murder of their daughter has been edited for pace, " +
        "scored with ominous music, and paused on a cliffhanger to sell the next " +
        "episode. The victim becomes a plot device; the investigation becomes a " +
        "puzzle for the audience to solve from the sofa; and the line between " +
        "informing the public and exploiting a death grows faint. A maker who " +
        "cared chiefly about justice would tell the story very differently from " +
        "one who cared chiefly about an audience, and the shape of most popular " +
        "true crime betrays which master it serves. The honest position is not " +
        "to ban the genre, which can do real good, but to admit that it sits on " +
        "a moral knife-edge and is forever tempted to step off it. A story drawn " +
        "from a real person's suffering owes that person something, and the " +
        "genre's besetting sin is to forget the debt the moment a thrilling " +
        "narrative is in view.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-703",
      genre: "politics",
      title: "What a Wage Floor Really Does",
      body:
        "The argument against a minimum wage has an appealing simplicity. Price " +
        "anything above its market value, the reasoning runs, and buyers take " +
        "less of it; set the price of labour above what an hour of work is " +
        "worth, and employers will buy fewer hours, throwing the least " +
        "productive workers out of jobs. On a blackboard the logic is " +
        "impeccable. The trouble is that the labour market is not a blackboard. " +
        "It assumes that employers have no power to set wages, when in many " +
        "towns a handful of large firms dominate the local market for work and " +
        "can hold pay below what a competitive market would yield. Where that is " +
        "so, a modest wage floor does not price workers out; it claws back pay " +
        "that market power had suppressed, and employment need not fall at all. " +
        "This is not a licence to set the floor as high as one likes. Push it " +
        "far above what firms can bear and the textbook effect reappears, with " +
        "real jobs lost. The genuine question is therefore empirical, not " +
        "ideological: at a given level, in a given labour market, does the wage " +
        "floor mostly transfer income to low-paid workers, or does it mostly " +
        "destroy their jobs? Decades of careful study suggest that moderate " +
        "minimum wages have done far more of the former than opponents predicted " +
        "and far less of the latter. To treat the blackboard argument as the " +
        "last word is to mistake a model for the world. The model is not wrong " +
        "so much as partial, and a policy built on the partial half of a truth " +
        "can do real harm to the very people it overlooks.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-704",
      genre: "politics",
      title: "The Default and the Donor",
      body:
        "Thousands die each year waiting for an organ that never comes, while " +
        "usable organs are buried with people who would have been glad to give " +
        "them. To close this gap, several countries have switched from a system " +
        "in which one must opt in to donation to one in which consent is " +
        "presumed unless a person opts out. Supporters point out that surveys " +
        "find most people willing to donate, yet far fewer ever register; an " +
        "opt-out default, they argue, simply aligns the law with what people " +
        "already want, and lets inertia save lives instead of costing them. The " +
        "objection most often raised is that presumed consent is no consent at " +
        "all, since a silent person may be ignorant rather than willing, and the " +
        "state should not help itself to a body merely because its owner failed " +
        "to fill in a form. The worry deserves respect, but it proves less than " +
        "it claims. Every system has a default, and the opt-in arrangement is " +
        "not neutral: it too lets inertia decide, only in the direction of " +
        "burying organs that might have saved a life. If we accept that the " +
        "silent under opt-in are treated as refusing, we cannot object in " +
        "principle to treating the silent under opt-out as willing; both read a " +
        "wish into silence. What matters is which default better fits what " +
        "people actually want and does the least harm when it guesses wrong, and " +
        "on that test, with an easy and respected right to opt out, presumed " +
        "consent has the stronger claim. The deepest mistake is to imagine there " +
        "is some option without a default at all, waiting to be chosen by those " +
        "too fastidious to choose either.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-705",
      genre: "science",
      title: "The Painter Who Was Never There",
      body:
        "When a program trained on millions of images returns a striking picture " +
        "in seconds, two questions are too easily run together: whether the " +
        "image is any good, and whether making it was wrong. The first is a " +
        "matter of taste, and taste will sort itself out; the second deserves " +
        "more care than the loudest voices give it. The standard complaint is " +
        "that such systems are built by digesting the work of living artists who " +
        "never agreed to feed the machine, and whose recognisable styles the " +
        "machine can then imitate at no cost. This is a real grievance, but it " +
        "is worth being precise about what the grievance is. It cannot simply be " +
        "that the system learned from existing art, for every human artist does " +
        "the same, studying predecessors until their lessons become second " +
        "nature. Learning from a tradition is not theft. What is different here " +
        "is scale and consent: a person who learns from a thousand paintings " +
        "spends a life doing so and adds a sensibility of their own, whereas the " +
        "system absorbs the labour of millions without permission and returns it " +
        "stripped of the maker. The wrong, if there is one, lies not in the " +
        "learning but in the taking, in treating a body of human work as a free " +
        "quarry and the people who made it as raw supply. To object to that is " +
        "not to be a sentimentalist who thinks machines may never create. It is " +
        "to insist that the question of how a tool was built cannot be waved " +
        "away by pointing at how impressive its products are, and that a " +
        "dazzling result is not a receipt for the materials that went into it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-706",
      genre: "science",
      title: "The Algorithm Reads Your Application",
      body:
        "Employers flooded with applications have begun handing the first sift to " +
        "software, which scores candidates and discards most before a human sees " +
        "a name. The appeal is obvious: a tireless system can read ten thousand " +
        "applications in the time a recruiter reads ten, and it promises to " +
        "judge each one by the same yardstick, free of the moods and prejudices " +
        "that afflict human readers. That promise is the heart of the problem. " +
        "A hiring algorithm learns by studying the firm's past decisions about " +
        "who was hired and who succeeded, and it treats that history as the " +
        "definition of a good candidate. But the history is the record of human " +
        "choices, prejudices and all, and a system trained to reproduce it will " +
        "reproduce its biases too, now dressed in the authority of mathematics. " +
        "If a company has long overlooked applicants from certain schools or " +
        "neighbourhoods, the model learns that those candidates are weaker and " +
        "rejects them more confidently than any biased manager ever could, while " +
        "appearing perfectly neutral. The danger is not that the machine is " +
        "wilfully unfair but that it launders old unfairness into something that " +
        "looks objective and is therefore harder to challenge. A rejected " +
        "applicant can argue with a person; arguing with a score that no one in " +
        "the building can fully explain is another matter. The lesson is not " +
        "that such tools must never be used, but that calling a decision " +
        "objective because a computer made it is a confidence trick we play on " +
        "ourselves, and that a bias we cannot see is more dangerous than one we " +
        "can.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-707",
      genre: "history",
      title: "The Eleven Who Stand for the Nation",
      body:
        "It is often said that a national team is merely a game, and that those " +
        "who weep when it wins or loses have mistaken sport for something it is " +
        "not. The history of the matter suggests the opposite. From the moment " +
        "nations began to field teams against one another, governments grasped " +
        "that a contest watched by millions could do work that speeches could " +
        "not, binding strangers into a single 'we' for the length of a match. " +
        "The team becomes a portable emblem of the country, and the crowd, " +
        "singing the same anthem, briefly feels the nation as a living thing " +
        "rather than an abstraction on a map. This is why victories have been " +
        "claimed by regimes eager to borrow their glow, and why a defeat can " +
        "feel, absurdly but genuinely, like a wound to the nation itself. Yet " +
        "the same force that unites can divide. The 'we' the team creates is " +
        "defined against a 'them' across the touchline, and the passions that " +
        "fill a stadium have spilled, more than once, into hostility between " +
        "peoples. The identity sport manufactures is also strikingly selective: " +
        "it can fold immigrants and minorities into the nation when they wear " +
        "its colours and win, and just as quickly cast them out when they lose, " +
        "so that the same player is a national hero one week and a scapegoat the " +
        "next. To understand sport as a trivial pastime is therefore to miss its " +
        "real history, in which the playing field has served as one of the most " +
        "effective instruments ever found for telling a population who counts as " +
        "one of us, and on whose terms.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-708",
      genre: "history",
      title: "Borrowing Across the Line",
      body:
        "The charge of cultural appropriation is frequently met with a brisk " +
        "dismissal: all cultures borrow, the borrowing has always gone on, and " +
        "to police it is to freeze living traditions into museum exhibits. There " +
        "is something to this, and a history of culture confirms it; styles of " +
        "music, dress and cooking have crossed boundaries for as long as people " +
        "have met, and the results are often glorious. But the brisk dismissal " +
        "moves too fast, because it treats every act of borrowing as the same " +
        "act, when history shows they are not. What turns an ordinary exchange " +
        "into something that stings is rarely the borrowing itself; it is the " +
        "imbalance of power and credit that can attend it. When a dominant group " +
        "takes a practice from a group it has marginalised, strips it of its " +
        "meaning, sells it for profit, and gives nothing back to the people who " +
        "created it, the transaction is not a happy mingling of equals but an " +
        "old pattern of extraction wearing new clothes. The sacred design " +
        "becomes a fashion print; the ritual becomes a costume; and the " +
        "originators, who were mocked for the very practice now in vogue, see " +
        "others praised and paid for it. To notice this is not to forbid all " +
        "cultural exchange, which would be both impossible and joyless. It is to " +
        "insist that borrowing is not one thing but many, and that the " +
        "difference between homage and pillage turns on who holds the power, who " +
        "gets the credit, and whether the people from whom a thing is taken are " +
        "treated as partners or as a quarry. The history of borrowing is not a " +
        "single innocent story, and pretending it is conveniently serves those " +
        "who have always done the taking.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-709",
      genre: "philosophy",
      title: "In Praise of Falling Short",
      body:
        "We speak of failure as something to be avoided at all costs, and in the " +
        "next breath we tell the young that they learn most from it. The two " +
        "sayings cannot both be taken at face value, and the tension is worth " +
        "untangling, for it hides a real truth behind a lazy slogan. The slogan " +
        "is that failure is good for us. Plainly it is not always so: some " +
        "failures crush, and a person broken by repeated defeat learns nothing " +
        "but despair. What is true is narrower and more interesting. An attempt " +
        "that falls short, when it is survivable and understood, supplies " +
        "information that success cannot. When we succeed, we rarely know which " +
        "of the things we did was responsible, and so success teaches us to " +
        "repeat ourselves without understanding. A failure, by contrast, marks " +
        "the exact edge of our competence; it shows us where our model of the " +
        "world was wrong, and that information is precisely what we need to do " +
        "better. This is why a run of easy successes can be more dangerous than " +
        "an occasional defeat: it breeds a confidence unchecked by any contact " +
        "with our limits. None of this makes failure desirable in itself, and " +
        "the person who courts it for its own sake has misunderstood the point " +
        "as badly as the person who avoids it at any cost. The value lies not in " +
        "the falling but in what an honest look at the fall can teach, and that " +
        "value is only collected by those willing to examine the wreck instead " +
        "of looking away. A failure unexamined is merely a loss; it is the " +
        "examination, not the failure, that does the teaching.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-710",
      genre: "philosophy",
      title: "The Architecture of Choice",
      body:
        "There is a way of guiding people's decisions that neither commands nor " +
        "forbids but quietly arranges the setting in which they choose. Put the " +
        "fruit at eye level and the chocolate out of reach, make the healthier " +
        "pension the one a worker joins by doing nothing, and behaviour shifts " +
        "without a single freedom being removed. Its champions call this " +
        "approach a gentle paternalism: gentle, because anyone may still reach " +
        "for the chocolate or leave the pension, and paternalist only in nudging " +
        "the choice toward what the chooser would, on reflection, prefer. The " +
        "case for it begins from a fact that is hard to deny: there is no such " +
        "thing as a neutral presentation. The fruit and the chocolate must be " +
        "placed somewhere; some option must be the default. Since the setting " +
        "will influence the choice whether or not anyone intends it to, the " +
        "argument runs, we may as well arrange it to help people rather than " +
        "harm them. The objection is that this hands a quiet power to whoever " +
        "designs the setting, and a nudge meant for our benefit can as easily be " +
        "turned to the designer's. The objection is serious and is best met not " +
        "by denying the power but by disciplining it: a defensible nudge is one " +
        "that could be conducted in the open, that the nudged person would " +
        "endorse on learning of it, and that leaves the costly exit genuinely " +
        "cheap. A nudge that survives those tests respects the chooser; one that " +
        "fails them is manipulation wearing the mask of help, and the difference " +
        "between the two is not the existence of influence but whether it can " +
        "bear the light.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-711",
      genre: "currentaffairs",
      title: "Before We Pack for Mars",
      body:
        "The dream of settling other worlds is sold to us as humanity's grandest " +
        "adventure and, more soberly, as an insurance policy: spread the species " +
        "across two planets and no single catastrophe can finish it. The " +
        "insurance argument has a seductive logic, but it leans on a comparison " +
        "that does not hold. Whatever ruin we might visit on the Earth, by war " +
        "or warming or plague, the Earth would remain after it vastly more " +
        "habitable than Mars is now: it would still have a breathable past, " +
        "liquid water, and a magnetic field that does not let the air boil off " +
        "into space. A wrecked Earth is a kinder home than a pristine Mars. To " +
        "treat a distant colony as a lifeboat is therefore to misjudge the sea, " +
        "and worse, it risks licensing a fatal carelessness here: why labour to " +
        "protect a planet one half-believes is replaceable? There is a further " +
        "unease the brochure omits. The first settlers would live wholly at the " +
        "mercy of whoever controlled their air, water and power, in conditions " +
        "where a sealed habitat leaves no room for dissent and a single broken " +
        "valve can kill. A society founded in such total dependence is unlikely " +
        "to cradle the freedoms its champions take for granted. None of this is " +
        "an argument against going; curiosity is a noble motive and exploration " +
        "has its own worth. It is an argument against the particular story we " +
        "tell ourselves, in which abandoning a damaged Earth is a sensible plan " +
        "rather than a confession of failure. We should go to learn, if we go, " +
        "and not in the belief that we are buying a second chance we have not " +
        "earned.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-712",
      genre: "currentaffairs",
      title: "Must the Economy Always Grow",
      body:
        "For as long as anyone can remember, the health of a nation has been read " +
        "off a single dial: is the economy growing? The advocates of degrowth " +
        "ask us to question the dial itself. Endless growth, they argue, is " +
        "impossible on a finite planet, and the pursuit of it drives the very " +
        "destruction of climate and habitat that now threatens us; a humane " +
        "future, they conclude, will be one in which rich economies deliberately " +
        "produce and consume less. The diagnosis lands a real blow. It is true " +
        "that growth has too often been pursued as an end in itself, and true " +
        "that a measure like national output counts a forest more when it is cut " +
        "down than when it stands. But the prescription is harder than its " +
        "champions allow. Growth, for all its faults, has been the engine that " +
        "lifted billions out of poverty, and a rich country that chose to shrink " +
        "would still have to decide how the shrinking was shared, lest the " +
        "burden fall, as it usually does, on those with least to spare. Nor is " +
        "all growth alike: an economy can grow by burning more coal, but it can " +
        "also grow by building wind farms, writing software, or curing disease, " +
        "activities that need not wreck the planet at all. The honest middle " +
        "ground is not to worship growth nor to abolish it, but to stop " +
        "treating its raw quantity as the measure of success and start asking " +
        "what is growing and at whose expense. The fault may lie less in growth " +
        "as such than in a dial too crude to tell us what we actually want to " +
        "know.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — 42 four-option MCQs, ids 701-742. Each is answerable from
   * its passage alone, with one defensible key and three distractors that
   * are each wrong for a distinct, stated reason. Answer naming is by content
   * (no letters/ordinals).
   * ====================================================================== */
  DATA.questions.push(
    /* --- psg-literature-701 (4 questions) --- */
    {
      id: "q-main-701",
      passageId: "psg-literature-701",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "The incongruity theory fully and correctly explains why people laugh.",
        "Because humour is a social act performed for an audience, explaining laughter by a single inner mechanism misses the agreement humour depends on.",
        "Laughter is best explained as a feeling of superiority over other people.",
        "Jokes are funniest when they are most surprising."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says incongruity 'fares better' but 'is incomplete', so he denies it fully explains laughter.",
        "Correct: the passage argues each single-mechanism theory 'leaves too much out' and that humour is 'a social act performed for an audience', so a theory 'inside one skull' will 'miss the agreement between several'.",
        "Wrong: the superiority theory is presented as one partial account the author criticises, not his conclusion; he notes we laugh hardest at ourselves.",
        "Wrong: the author distinguishes funny from 'merely surprising', so equating the two misstates his view."
      ],
      workedSolution:
        "Find the claim the whole passage serves. After weighing three theories " +
        "and finding each partial, the author argues humour is a social act and " +
        "that mechanism-only accounts miss the shared agreement a joke needs. The " +
        "answer states that thesis; the others endorse one rejected theory or " +
        "conflate funny with surprising.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-702",
      passageId: "psg-literature-701",
      type: "structure",
      stem:
        "What is the function of the observation that the superiority theory " +
        "'cannot explain why we laugh hardest at ourselves'?",
      options: [
        "It offers fresh support for the superiority theory.",
        "It states the passage's overall conclusion about humour.",
        "It gives a counterexample that exposes a limit of one of the three theories.",
        "It defines the term 'incongruity' for the reader."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the remark undercuts the superiority theory rather than supporting it, by naming a case it cannot handle.",
        "Wrong: the overall conclusion is that humour is a social act; this sentence is one step toward it, not the conclusion.",
        "Correct: laughing at oneself, 'where no rival is bested', is offered as a case the superiority theory fails to explain, demonstrating its incompleteness.",
        "Wrong: the sentence is about the superiority theory, not a definition of incongruity, which is treated separately."
      ],
      workedSolution:
        "Locate the sentence's job. The author tests the superiority theory " +
        "against self-directed laughter, a case it cannot account for, to show it " +
        "is partial. That is a counterexample exposing a limit, not support, the " +
        "conclusion, or a definition.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-703",
      passageId: "psg-literature-701",
      type: "vocab",
      stem:
        "As used in the sentence about a joke being 'an offer, and laughter is " +
        "its acceptance', 'offer' most nearly means:",
      options: [
        "A proposal extended to others that they may take up or decline.",
        "A reduced price advertised to attract buyers.",
        "A formal bid to purchase property.",
        "A sacrifice presented at a religious altar."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: pairing 'offer' with 'acceptance' and the idea of an audience choosing to 'play along' shows 'offer' means a proposal others may take up or decline.",
        "Wrong: the commercial sense of a discount does not fit; no buying or pricing is in view in the joke-and-laughter pairing.",
        "Wrong: a property bid is a different commercial sense the passage does not invoke; the context is social, not legal.",
        "Wrong: the religious-sacrifice sense is unrelated; the passage is about a joke proposed to listeners."
      ],
      workedSolution:
        "Read the word in context. A joke as 'an offer' that laughter 'accepts', " +
        "with the audience deciding whether to 'play along', fixes 'offer' as a " +
        "proposal others may take up or decline. The discount, property-bid, and " +
        "altar senses do not fit.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-tone-704",
      passageId: "psg-literature-701",
      type: "tone",
      stem:
        "How would you best describe the author's attitude toward the three " +
        "traditional theories of laughter?",
      options: [
        "Wholly dismissive, regarding them as worthless.",
        "Reverent, treating them as beyond criticism.",
        "Indifferent, expressing no view of their merits.",
        "Appreciative but critical, crediting each with a partial insight while finding all of them incomplete."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says 'each theory captures something', so he does not treat them as worthless.",
        "Wrong: he criticises each in turn, which is incompatible with treating them as beyond criticism.",
        "Wrong: he plainly evaluates them, even ranking incongruity as 'most promising', so 'indifferent' is wrong.",
        "Correct: he grants that 'each theory captures something' yet argues each 'taken alone, leaves too much out', an appreciative-but-critical stance."
      ],
      workedSolution:
        "Tone follows the balance of praise and criticism. The author credits " +
        "every theory with an insight but faults each as partial. That is " +
        "appreciative but critical, not dismissive, reverent, or indifferent.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-literature-702 (3 questions) --- */
    {
      id: "q-standpoint-705",
      passageId: "psg-literature-702",
      type: "standpoint",
      stem: "What is the author's overall position on true-crime media?",
      options: [
        "It should be banned because it is always exploitative.",
        "It is harmless entertainment that critics wrongly attack.",
        "It can do real good, but it sits on a moral knife-edge and too often forgets what it owes the real people involved.",
        "Its only legitimate purpose is to overturn wrongful convictions."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says 'the honest position is not to ban the genre, which can do real good', directly rejecting a ban.",
        "Wrong: he insists the genre 'should provoke' unease and sits on 'a moral knife-edge', so 'harmless' misreads him.",
        "Correct: he grants the genre 'can do real good' yet says it 'sits on a moral knife-edge' and forgets 'the debt' it owes the real people when 'a thrilling narrative is in view'.",
        "Wrong: exposing wrongful convictions is one benefit he lists, not the genre's 'only' legitimate purpose."
      ],
      workedSolution:
        "Identify the held position. The author concedes genuine benefits but " +
        "presses the ethical danger that real victims become entertainment. The " +
        "answer captures this balance; the others ban it, call it harmless, or " +
        "reduce its value to one function.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-706",
      passageId: "psg-literature-702",
      type: "detail",
      stem:
        "According to the passage, what does the author identify as the central " +
        "difficulty with true crime?",
      options: [
        "That it is too morbid for a respectable audience.",
        "That it is usually inaccurate about the facts of a case.",
        "That it is more expensive to produce than other genres.",
        "That its raw material is a real person's catastrophe, and those at its centre rarely consented to become entertainment."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly says 'the difficulty is not that true crime is morbid', so morbidity is not the central problem.",
        "Wrong: factual inaccuracy is never named as the difficulty; the concern is consent and exploitation, not error.",
        "Wrong: cost of production is not discussed; the passage is about an ethical, not a financial, difficulty.",
        "Correct: the passage states 'the difficulty is that the raw material is somebody else's catastrophe, and the people at its centre rarely consented to become entertainment'."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated difficulty. The author " +
        "expressly sets aside morbidity and names the use of a real person's " +
        "catastrophe without consent. The other options substitute concerns " +
        "(morbidity, accuracy, cost) the passage rejects or never raises.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-707",
      passageId: "psg-literature-702",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Audiences should feel no curiosity about serious crime.",
        "True-crime stories are incapable of serving the public interest.",
        "A grieving family's consent makes any treatment of a case acceptable.",
        "How a true-crime story is told can reveal whether its maker is more concerned with justice or with holding an audience."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls the wish to understand the worst conduct natural and 'no shame', so he does not say audiences should feel no curiosity.",
        "Wrong: the author allows the genre 'can do real good' and can expose wrongful convictions, so it is not incapable of serving the public.",
        "Wrong: the passage never says consent makes any treatment acceptable; it raises consent as a problem, not a blanket licence.",
        "Correct: the passage says a maker who 'cared chiefly about justice would tell the story very differently' from one chasing an audience, and that 'the shape of most popular true crime betrays which master it serves'."
      ],
      workedSolution:
        "An inference must follow from the text. The author contrasts a " +
        "justice-driven and an audience-driven telling and says the story's shape " +
        "reveals which it serves. The answer draws that supported point; the " +
        "others contradict his concessions about the genre's value and curiosity.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-politics-703 (4 questions) --- */
    {
      id: "q-main-708",
      passageId: "psg-politics-703",
      type: "main",
      stem: "Which of the following best captures the central argument of the passage?",
      options: [
        "A minimum wage always destroys jobs and should be abolished.",
        "The minimum wage should be set as high as possible to help workers.",
        "Because employers often have power to suppress pay, whether a wage floor helps or harms low-paid workers is an empirical question the blackboard argument cannot settle by itself.",
        "Economic models are useless and should be ignored when making policy."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author argues a modest floor 'need not' cut employment where firms have wage-setting power, so he denies it 'always' destroys jobs.",
        "Wrong: he warns that pushing the floor 'far above what firms can bear' loses real jobs, so he rejects setting it as high as possible.",
        "Correct: the passage says employer power can suppress pay, that the floor's effect is 'empirical, not ideological', and that the blackboard model is 'partial', so its effect must be studied at each level.",
        "Wrong: the author calls the model 'not wrong so much as partial', so he does not say models are useless."
      ],
      workedSolution:
        "Identify the defended conclusion. The author accepts the textbook logic " +
        "as partial, notes employer wage-setting power, and concludes the floor's " +
        "effect is an empirical matter of degree. The answer states this; the " +
        "others take an absolute position the author explicitly rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-709",
      passageId: "psg-politics-703",
      type: "structure",
      stem:
        "What is the function of the sentence 'The trouble is that the labour " +
        "market is not a blackboard'?",
      options: [
        "It concedes that the standard argument against the minimum wage is correct.",
        "It marks the turn from stating the standard argument to challenging its assumptions.",
        "It states the passage's final conclusion.",
        "It introduces a worked numerical example."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the sentence begins the author's challenge to the standard argument, not a concession that it is correct.",
        "Correct: having laid out the blackboard logic as 'impeccable', the author uses this sentence to pivot, then attacks the assumption that employers cannot set wages.",
        "Wrong: the final conclusion is that the model is partial and policy must be empirical; this mid-passage sentence opens the critique rather than closing it.",
        "Wrong: no numbers or worked example follow; the next sentences make a conceptual point about employer power."
      ],
      workedSolution:
        "Trace the sentence's job. After granting the blackboard logic, the author " +
        "turns with 'the labour market is not a blackboard' to begin dismantling " +
        "its assumption. That is a pivot into critique, not a concession, the " +
        "conclusion, or an example.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-710",
      passageId: "psg-politics-703",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "The blackboard argument contains no truth whatsoever.",
        "Employers in every town compete fiercely for workers.",
        "No careful study of the minimum wage has ever been conducted.",
        "A minimum wage set at the same level could help workers in one labour market and harm them in another."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: he calls the model 'not wrong so much as partial', so it contains some truth; 'no truth whatsoever' contradicts him.",
        "Wrong: the author says 'in many towns a handful of large firms dominate' the labour market, the opposite of universal fierce competition.",
        "Wrong: he cites 'decades of careful study', so he cannot be implying none has been done.",
        "Correct: by making the effect depend on 'a given level, in a given labour market' and on whether firms hold wage-setting power, the author implies the same floor could help in one market and harm in another, without saying so directly."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit claim is that the floor's effect depends " +
        "on the level and the local market. The unstated but supported step is " +
        "that one and the same floor could help in one market and harm in " +
        "another. The other options contradict the passage on competition, study, " +
        "or the model's partial truth.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-711",
      passageId: "psg-politics-703",
      type: "assume",
      stem:
        "The claim that a modest wage floor 'need not' reduce employment relies " +
        "on which unstated assumption?",
      options: [
        "Workers never move between towns in search of better pay.",
        "All employers are charitable toward their workers.",
        "In the markets in question, employers currently pay less than a fully competitive market would, so a modest floor can raise pay without exceeding what the work is worth.",
        "The government can set wages more accurately than any market."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the argument does not depend on workers being immobile; it turns on employer wage-setting power, not on whether workers relocate.",
        "Wrong: employer charity is not assumed; indeed the author says firms 'hold pay below' competitive levels, the opposite of charity.",
        "Correct: the conclusion that a floor 'claws back pay that market power had suppressed' without cutting jobs only follows if pay is currently held below the competitive level, leaving room to raise it without overshooting; that gap is assumed.",
        "Wrong: the author does not assume government sets wages better than markets; he says the right level is an empirical question, not a matter of superior official judgement."
      ],
      workedSolution:
        "An assumption is the required missing premise. The 'need not cut jobs' " +
        "claim depends on there being suppressed pay to recover, i.e. current pay " +
        "below the competitive level. Negate that and a higher floor must overshoot. " +
        "The other options are unneeded or contradicted.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-politics-704 (3 questions) --- */
    {
      id: "q-standpoint-712",
      passageId: "psg-politics-704",
      type: "standpoint",
      stem:
        "What is the author's view of presumed-consent (opt-out) organ donation?",
      options: [
        "It is indistinguishable from theft and should be rejected.",
        "It is no better and no worse than opt-in, so the choice does not matter.",
        "It removes all need for individual choice about donation.",
        "It has the stronger claim, because every system has a default and opt-out better fits what most people want while leaving an easy right to refuse."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author treats the 'no consent at all' objection as proving 'less than it claims', so he does not equate opt-out with theft.",
        "Wrong: he argues opt-out 'has the stronger claim', so he does not call the two equivalent.",
        "Wrong: he stresses 'an easy and respected right to opt out', so individual choice remains; it is not removed.",
        "Correct: the author argues 'every system has a default', that opt-in is not neutral either, and that opt-out 'has the stronger claim' given an easy right to opt out."
      ],
      workedSolution:
        "Find the held position. The author rebuts the no-consent objection by " +
        "noting every system has a default and concludes opt-out is the stronger " +
        "option when exit is easy. The answer states this; the others equate it " +
        "with theft, call the systems equivalent, or deny any remaining choice.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-713",
      passageId: "psg-politics-704",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's inference " +
        "rather than a plain statement of fact?",
      options: [
        "Some countries have switched from an opt-in to an opt-out donation system.",
        "Thousands die each year waiting for an organ.",
        "Surveys find most people willing to donate, while far fewer register.",
        "Because opt-in also reads a wish into silence, one cannot object in principle to opt-out doing the same."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that some countries have switched systems is reported as a factual development, not the author's reasoned step.",
        "Wrong: that thousands die waiting is stated as a fact about the situation, not a conclusion the author reasons to.",
        "Wrong: the survey-versus-registration gap is presented as a factual finding, not the author's inference.",
        "Correct: the claim that one 'cannot object in principle' to opt-out, since opt-in also treats silence as a wish, is a logical inference the author draws, not a reported fact."
      ],
      workedSolution:
        "Separate reported facts from the author's reasoned step. The switching of " +
        "systems, the survey gap, and the deaths are factual; the parity argument " +
        "that opt-out cannot be objected to in principle once opt-in is accepted is " +
        "the inference, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-714",
      passageId: "psg-politics-704",
      type: "tone",
      stem:
        "The closing remark about those 'too fastidious to choose either' " +
        "default conveys a tone that is:",
      options: [
        "Gently mocking of the idea that one can avoid having any default at all.",
        "Warmly admiring of the cautious people described.",
        "Anxious and uncertain about the author's own argument.",
        "Coldly neutral, taking no attitude toward the position."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: calling the search for a default-free option a 'mistake' and its seekers 'too fastidious to choose' lightly ridicules the idea that one can escape having a default, a gently mocking note.",
        "Wrong: 'too fastidious' is faintly critical, not admiring; the author is needling the position, not praising it.",
        "Wrong: the author states his conclusion firmly; there is no anxiety or uncertainty in the line.",
        "Wrong: the loaded phrasing ('deepest mistake', 'too fastidious') carries a clear attitude, so it is not coldly neutral."
      ],
      workedSolution:
        "Tone follows diction. 'The deepest mistake' and 'too fastidious to choose " +
        "either' gently deride the notion of a default-free option. That is gentle " +
        "mockery, not admiration, anxiety, or neutrality.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-science-705 (4 questions) --- */
    {
      id: "q-main-715",
      passageId: "psg-science-705",
      type: "main",
      stem: "Which statement best expresses the main point of the passage?",
      options: [
        "AI image generators should be banned because machines can never create.",
        "Whether an AI-generated image is any good is the most important question to settle.",
        "The real objection to AI image generators is not that they learn from existing art but that they take human work without consent and strip it of its maker.",
        "Learning from a tradition is a form of theft whether done by humans or machines."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says objecting is 'not to be a sentimentalist who thinks machines may never create', so he does not call for a ban on that ground.",
        "Wrong: the author sets the quality question aside as 'a matter of taste' and focuses on whether making the image was wrong.",
        "Correct: the passage locates the wrong 'not in the learning but in the taking', in treating human work as 'a free quarry' and returning it 'stripped of the maker'.",
        "Wrong: he says 'learning from a tradition is not theft', so this contradicts the passage."
      ],
      workedSolution:
        "Identify the defended conclusion. The author separates quality from " +
        "ethics, grants that learning from art is legitimate, and pins the wrong " +
        "on non-consensual taking at scale. The answer states this; the others " +
        "ban the tools, misplace the key question, or deny that learning is " +
        "innocent.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-716",
      passageId: "psg-science-705",
      type: "detail",
      stem:
        "According to the passage, what distinguishes the machine's learning " +
        "from a human artist's learning?",
      options: [
        "The machine studies far fewer works than a human artist does.",
        "The machine always produces better images than a human can.",
        "The machine is incapable of imitating any recognisable style.",
        "Scale and consent: the machine absorbs the labour of millions without permission and returns it stripped of the maker."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says the system digests 'millions of images', far more than the human who 'learns from a thousand paintings', the reverse of this option.",
        "Wrong: the author treats image quality as a separate matter of taste, not as what distinguishes the two kinds of learning.",
        "Wrong: the passage says the machine 'can then imitate' recognisable styles, so it is not incapable of doing so.",
        "Correct: the passage states 'what is different here is scale and consent', the system absorbing 'the labour of millions without permission' and returning it 'stripped of the maker'."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated difference. The author names " +
        "'scale and consent' as the distinction and contrasts the lifelong human " +
        "learner with the system that takes from millions without permission. The " +
        "other options invert the scale point or raise quality and imitation the " +
        "passage handles differently.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-717",
      passageId: "psg-science-705",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "The impressiveness of an AI image cannot by itself answer the ethical question of how the system was built.",
        "Any artist who studies predecessors is guilty of the same wrong as the machine.",
        "If an AI image is beautiful, the way it was produced must have been acceptable.",
        "Machines will never be able to produce images worth looking at."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage closes that 'how a tool was built cannot be waved away by pointing at how impressive its products are' and 'a dazzling result is not a receipt' for its materials.",
        "Wrong: the author says human learning 'is not theft', so the human student is not guilty of the machine's wrong.",
        "Wrong: this is exactly the inference the author rejects; beauty is 'not a receipt' for how the work was made.",
        "Wrong: he allows that machines may create and treats quality as a separate matter, so he does not deny machines can make worthwhile images."
      ],
      workedSolution:
        "An inference must follow from the text. The author's pivotal move is that " +
        "a product's brilliance cannot settle the ethics of its making. The answer " +
        "draws that supported point; the others equate human and machine learning " +
        "or use beauty to excuse the method, both of which the passage denies.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-718",
      passageId: "psg-science-705",
      type: "vocab",
      stem:
        "As used in the phrase 'treating a body of human work as a free quarry', " +
        "'quarry' most nearly means:",
      options: [
        "An animal that is being hunted.",
        "A source from which a resource is extracted at will.",
        "A formal complaint or objection.",
        "A small enclosed courtyard."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the hunted-animal sense of 'quarry' does not fit; nothing is being chased, and the next phrase, 'raw supply', points to extraction.",
        "Correct: paired with 'free' and 'raw supply', 'quarry' means a source from which material is dug out at will, here the body of human work treated as extractable resource.",
        "Wrong: 'quarry' is not used to mean a complaint here; the context is exploitation of a resource, not a grievance lodged.",
        "Wrong: the architectural sense of a courtyard is irrelevant to a passage about mining human work for material."
      ],
      workedSolution:
        "Read the word in context: a 'free quarry' supplying 'raw' material. So " +
        "'quarry' means a source from which a resource is extracted at will. The " +
        "hunted-animal, complaint, and courtyard senses do not fit the extraction " +
        "image.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-science-706 (3 questions) --- */
    {
      id: "q-standpoint-719",
      passageId: "psg-science-706",
      type: "standpoint",
      stem: "What is the author's position on hiring algorithms?",
      options: [
        "They are reliably objective and should replace human recruiters entirely.",
        "They must never be used under any circumstances.",
        "Their promise of objectivity is the danger: trained on biased history, they can launder old prejudice into something that looks neutral and is harder to challenge.",
        "They are harmless because a computer cannot hold a prejudice."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls the appearance of objectivity 'a confidence trick', so he does not endorse replacing humans with reliably objective machines.",
        "Wrong: he says 'the lesson is not that such tools must never be used', so a total ban misreads him.",
        "Correct: the passage argues the promise of neutrality 'is the heart of the problem' because the model 'reproduce[s] its biases' from past decisions and 'launders old unfairness' into something that looks objective.",
        "Wrong: the author's whole point is that the system inherits human bias from its training data, so 'harmless' contradicts him."
      ],
      workedSolution:
        "Find the held position. The author warns that the very claim of " +
        "objectivity hides inherited bias that is hard to contest. The answer " +
        "states this; the others endorse full replacement, demand a total ban, or " +
        "call the tools harmless, all of which he rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-720",
      passageId: "psg-science-706",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "A biased decision can be harder to contest when it is made by an unexplained algorithm than when it is made by a person.",
        "Human recruiters are entirely free of prejudice.",
        "Hiring algorithms make no errors of any kind.",
        "Applicants from every school are treated identically by such systems."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying a rejected applicant 'can argue with a person' but arguing 'with a score that no one in the building can fully explain is another matter', the author implies algorithmic bias is harder to contest than human bias.",
        "Wrong: the author refers to 'the moods and prejudices that afflict human readers', so he does not imply recruiters are free of prejudice.",
        "Wrong: nothing suggests the systems are error-free; the passage is about errors of inherited bias, so this contradicts it.",
        "Wrong: the author gives the example of candidates from certain schools being rejected 'more confidently', the opposite of identical treatment."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit contrast is that one can argue with a " +
        "person but not with an unexplained score. The supported but unstated step " +
        "is that algorithmic bias is harder to challenge than human bias. The " +
        "other options contradict the passage on human prejudice, error, or equal " +
        "treatment.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-721",
      passageId: "psg-science-706",
      type: "vocab",
      stem:
        "As used in the phrase 'it launders old unfairness into something that " +
        "looks objective', 'launders' most nearly means:",
      options: [
        "Washes fabric to remove physical stains.",
        "Makes something tainted appear clean and legitimate.",
        "Lends money at a high rate of interest.",
        "Sorts items into separate categories."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the literal washing-of-fabric sense does not fit a passage about disguising bias as neutrality.",
        "Correct: in context the system takes 'old unfairness' and makes it 'look objective', so 'launders' means making something tainted appear clean and legitimate.",
        "Wrong: 'launders' is not used in any money-lending sense here; the context is disguising bias, not finance.",
        "Wrong: sorting into categories is unrelated; the word describes cleansing the appearance of bias, not classification."
      ],
      workedSolution:
        "Read the word in context: 'old unfairness' is turned into something that " +
        "'looks objective'. So 'launders' means making the tainted appear clean " +
        "and legitimate. The fabric-washing, money, and sorting senses miss this.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* --- psg-history-707 (4 questions) --- */
    {
      id: "q-detail-722",
      passageId: "psg-history-707",
      type: "detail",
      stem:
        "According to the passage, why did governments grasp that national teams " +
        "could do work that speeches could not?",
      options: [
        "Because international matches always reduce hostility between peoples.",
        "Because sport is cheaper to organise than political campaigns.",
        "Because athletes are more trusted than politicians.",
        "Because a contest watched by millions could bind strangers into a single 'we' for the length of a match."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says the same force 'can divide' and has spilled into 'hostility between peoples', so matches do not always reduce hostility.",
        "Wrong: relative cost is never mentioned; the stated reason is the unifying spectacle, not economy.",
        "Wrong: the trustworthiness of athletes versus politicians is not discussed in the passage.",
        "Correct: the passage states that governments saw 'a contest watched by millions could do work that speeches could not, binding strangers into a single \"we\" for the length of a match'."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated reason. The passage credits the " +
        "team's power to bind millions into a single 'we'. The other options " +
        "introduce cost, trust, or a claim about reducing hostility that the " +
        "passage does not make or actually contradicts.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-723",
      passageId: "psg-history-707",
      type: "assume",
      stem:
        "The claim that to call sport 'a trivial pastime' is 'to miss its real " +
        "history' relies on which unstated assumption?",
      options: [
        "Every government has deliberately used sport for political ends.",
        "Sport is more important than any other human activity.",
        "Spectators always understand the political uses being made of their enthusiasm.",
        "Whether something is trivial depends partly on the political and social work it has actually done, not only on its being a game."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the argument needs only that sport has often served such ends, not that 'every' government has deliberately done so.",
        "Wrong: the author ranks sport against speeches as an instrument of unity, but never assumes it outranks all other activities.",
        "Wrong: spectator awareness is not required; the political work can be done whether or not the crowd understands it.",
        "Correct: concluding that 'trivial' misdescribes sport assumes triviality is judged by the social and political effects a thing produces, not merely by its being a game; otherwise its being 'just a game' could stand."
      ],
      workedSolution:
        "An assumption is the needed missing premise. To deny sport is trivial " +
        "because of its political history, one must assume triviality turns on " +
        "real-world effects, not just on being a game. Negate that and the " +
        "'just a game' reply survives. The other options are too strong or " +
        "irrelevant.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-724",
      passageId: "psg-history-707",
      type: "tone",
      stem:
        "The remark that a defeat can feel, 'absurdly but genuinely, like a " +
        "wound to the nation itself' conveys a tone that is:",
      options: [
        "Scornful of anyone who cares about a national team.",
        "Wholly detached, reporting the feeling without acknowledging its force.",
        "Understanding but clear-eyed, granting the feeling is real while noting it is out of proportion.",
        "Triumphant about the nation's sporting success."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: 'genuinely' takes the feeling seriously rather than scorning those who feel it.",
        "Wrong: 'absurdly but genuinely' explicitly acknowledges the feeling's force, so the tone is not wholly detached.",
        "Correct: 'absurdly but genuinely' both grants the emotion is real and marks it as disproportionate, an understanding yet clear-eyed note.",
        "Wrong: the sentence concerns a defeat felt as a wound, not triumph, so a triumphant tone misreads it."
      ],
      workedSolution:
        "Tone follows diction. 'Absurdly but genuinely' simultaneously honours the " +
        "feeling and flags its excess. That is an understanding but clear-eyed " +
        "tone, not scorn, detachment, or triumph.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-725",
      passageId: "psg-history-707",
      type: "opinion",
      stem:
        "Which of the following is best understood as the author's evaluative " +
        "claim rather than a neutral description of how sport functions?",
      options: [
        "To understand sport as a trivial pastime is to miss its real history.",
        "National teams play one another in contests watched by millions.",
        "The 'we' a team creates is defined against a 'them' across the touchline.",
        "Some players are celebrated when they win and blamed when they lose."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the judgement that treating sport as trivial 'is to miss its real history' is the author's evaluative verdict, advanced to support his thesis, not a neutral description.",
        "Wrong: that national teams play one another before millions is a plain factual description, not an evaluation.",
        "Wrong: that the team's 'we' is set against a 'them' describes how the identity works, a descriptive claim rather than a value judgement.",
        "Wrong: that players are praised or blamed by result reports an observed pattern, not the author's asserted evaluation."
      ],
      workedSolution:
        "Separate evaluation from description. The claim that calling sport trivial " +
        "misses its history is a value-laden verdict; the others describe what " +
        "teams do, how the 'we/them' works, or an observed pattern. So the " +
        "'trivial pastime' judgement is the opinion.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-history-708 (3 questions) --- */
    {
      id: "q-factinf-726",
      passageId: "psg-history-708",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's inference " +
        "rather than a plain statement of fact?",
      options: [
        "Styles of music, dress and cooking have crossed boundaries for as long as people have met.",
        "The difference between homage and pillage turns on who holds the power and who gets the credit.",
        "Some borrowed practices are sold for profit.",
        "A practice can be taken from one group by another."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that cultural styles have always crossed boundaries is offered as a historical fact, not the author's reasoned step.",
        "Correct: the claim that the 'difference between homage and pillage turns on who holds the power, who gets the credit' is the author's evaluative inference, the conclusion his analysis builds to.",
        "Wrong: that some borrowed practices are sold for profit states an observable fact, not the author's inference.",
        "Wrong: that one group can take a practice from another is a plain description of what happens, not a conclusion reasoned to."
      ],
      workedSolution:
        "Separate reported facts from the author's reasoned step. The long history " +
        "of exchange, the selling for profit, and the act of taking are factual; " +
        "the verdict that power and credit distinguish homage from pillage is the " +
        "inference, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-727",
      passageId: "psg-history-708",
      type: "structure",
      stem:
        "What is the role of the sentence 'There is something to this, and a " +
        "history of culture confirms it'?",
      options: [
        "It states the author's final position on appropriation.",
        "It dismisses the opposing view as entirely worthless.",
        "It concedes a point to the view the author will then qualify.",
        "It introduces a specific historical case study."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author's final position is that borrowing 'is not one thing but many'; this early sentence grants ground before that, so it is not the conclusion.",
        "Wrong: the sentence credits the opposing view rather than dismissing it as worthless; the qualification comes only afterward.",
        "Correct: by allowing 'there is something to this' about the brisk dismissal, the author concedes a point, which the next sentence ('But the brisk dismissal moves too fast') then qualifies.",
        "Wrong: no particular historical case is introduced here; the sentence makes a general concession, not a case study."
      ],
      workedSolution:
        "Trace the sentence's job. The author grants that cultures have always " +
        "borrowed before turning to qualify that view with 'But the brisk " +
        "dismissal moves too fast'. That is a concession set up for qualification, " +
        "not the conclusion, a dismissal, or a case study.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-728",
      passageId: "psg-history-708",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Whether borrowing is wrong depends only on whether money changes hands.",
        "All cultural borrowing should be prohibited to protect originating groups.",
        "Cultural exchange has never produced anything of value.",
        "Two outwardly similar acts of cultural borrowing can differ morally depending on the power and credit involved."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: profit is one factor among several (power, credit, meaning), not the sole criterion; 'only' overstates the passage.",
        "Wrong: the author says forbidding all exchange 'would be both impossible and joyless', so he does not call for prohibition.",
        "Wrong: he calls the results of boundary-crossing 'often glorious', so exchange is not valueless.",
        "Correct: the passage insists borrowing 'is not one thing but many' and that the difference 'turns on who holds the power, who gets the credit', so similar acts can differ morally."
      ],
      workedSolution:
        "An inference must follow from the text. The author's central move is that " +
        "borrowing is many different acts distinguished by power and credit. The " +
        "answer draws that supported point; the others call for prohibition, deny " +
        "exchange any value, or reduce the test to money alone.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-philosophy-709 (4 questions) --- */
    {
      id: "q-standpoint-729",
      passageId: "psg-philosophy-709",
      type: "standpoint",
      stem: "What is the author's considered view about the value of failure?",
      options: [
        "Failure is valuable not in itself but for the understanding an honest examination of it can yield.",
        "Failure is always good for us and should be welcomed.",
        "Failure has no value of any kind and is simply to be avoided.",
        "Success teaches more reliably than failure ever could."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says 'the value lies not in the falling but in what an honest look at the fall can teach', and that 'it is the examination, not the failure, that does the teaching'.",
        "Wrong: he denies failure is 'always good', noting 'some failures crush' and teach 'nothing but despair'.",
        "Wrong: he argues a survivable, understood failure 'supplies information that success cannot', so it is not valueless.",
        "Wrong: he says success 'teaches us to repeat ourselves without understanding', so he does not hold success the more reliable teacher."
      ],
      workedSolution:
        "Find the considered position. The author rejects both the slogan that " +
        "failure is always good and the view that it is worthless, locating value " +
        "in the examination of a survivable failure. The answer states this; the " +
        "others overclaim, dismiss, or invert his comparison with success.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-730",
      passageId: "psg-philosophy-709",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Two people can experience the same failure and gain very different value from it depending on whether they examine it.",
        "Anyone who has ever failed is guaranteed to improve.",
        "Success never carries any risk at all.",
        "A person should deliberately seek out failure to learn faster."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying value 'is only collected by those willing to examine the wreck' and that 'a failure unexamined is merely a loss', the author implies the same failure yields different value depending on whether it is examined.",
        "Wrong: the author says some failures teach 'nothing but despair', so failure does not guarantee improvement.",
        "Wrong: he warns a run of easy successes can be 'more dangerous than an occasional defeat', so success carries risk; this contradicts him.",
        "Wrong: he says the person who 'courts it for its own sake has misunderstood the point', so deliberately seeking failure is rejected."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit claims are that value comes only from " +
        "examining a failure and that an unexamined failure is 'merely a loss'. " +
        "The supported but unstated step is that the same failure yields different " +
        "value depending on examination. The other options contradict the " +
        "passage's qualifications.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-731",
      passageId: "psg-philosophy-709",
      type: "assume",
      stem:
        "The claim that 'a run of easy successes can be more dangerous than an " +
        "occasional defeat' relies on which unstated assumption?",
      options: [
        "Most people fail more often than they succeed.",
        "Unchecked confidence about one's competence can itself lead to harm.",
        "Defeat is always more pleasant than success.",
        "Easy successes are impossible to achieve."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the relative frequency of success and failure is irrelevant; the claim concerns the effect of unbroken success, not how often it occurs.",
        "Correct: calling easy success 'more dangerous' assumes that the 'confidence unchecked by any contact with our limits' it breeds can lead to harm; without that link, unbroken success would carry no danger.",
        "Wrong: the argument does not assume defeat is more pleasant; it is about information and confidence, not enjoyment.",
        "Wrong: the claim presupposes easy successes do happen and breed confidence, so assuming they are impossible would contradict it."
      ],
      workedSolution:
        "An assumption is the needed premise. To rank easy success as 'more " +
        "dangerous', one must assume the unchecked confidence it produces can " +
        "cause harm. Negate that and there is no danger to weigh. The other " +
        "options are irrelevant or contradict the claim.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-732",
      passageId: "psg-philosophy-709",
      type: "vocab",
      stem:
        "As used in the phrase 'those willing to examine the wreck instead of " +
        "looking away', 'wreck' most nearly means:",
      options: [
        "A ship that has sunk at sea.",
        "The failed attempt itself, looked at honestly.",
        "A person in poor physical health.",
        "A violent collision between vehicles."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the literal sunken-ship sense does not fit; the passage is about examining a failure, not maritime salvage.",
        "Correct: in context the 'wreck' is the failure one must examine 'instead of looking away', so it stands for the failed attempt itself, viewed honestly.",
        "Wrong: 'wreck' here is not a person in poor health; it names the failure to be examined, an event rather than a body.",
        "Wrong: a vehicle crash is too literal; the word is used figuratively for the failure under examination."
      ],
      workedSolution:
        "Read the word in context: one must 'examine the wreck instead of looking " +
        "away'. So 'wreck' figuratively names the failed attempt to be studied. " +
        "The sunken-ship, ill-person, and car-crash senses are too literal.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* --- psg-philosophy-710 (3 questions) --- */
    {
      id: "q-main-733",
      passageId: "psg-philosophy-710",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Any attempt to influence people's choices is manipulation and should be forbidden.",
        "Because there is no neutral presentation, the issue is not whether to influence choice but whether a nudge can bear scrutiny: open, endorsable, and easy to refuse.",
        "Nudges are always benign because no freedom is ever removed.",
        "The placement of products in shops should be decided at random."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author defends a 'defensible nudge', so he does not hold all influence is manipulation to be forbidden.",
        "Correct: the passage says 'there is no such thing as a neutral presentation' and that the real difference 'is not the existence of influence but whether it can bear the light', met by openness, endorsement, and a cheap exit.",
        "Wrong: he warns a nudge 'can as easily be turned to the designer's' benefit, so nudges are not always benign.",
        "Wrong: random placement is never proposed; the author argues for disciplined, defensible arrangement, not chance."
      ],
      workedSolution:
        "Identify the defended conclusion. Since no presentation is neutral, the " +
        "author reframes the question as whether a nudge can bear scrutiny, giving " +
        "three tests. The answer states this; the others forbid all influence, " +
        "call nudges always benign, or invent a random-placement view.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-734",
      passageId: "psg-philosophy-710",
      type: "structure",
      stem:
        "What is the function of the three tests the author offers, that a nudge " +
        "'could be conducted in the open', would be endorsed by the nudged " +
        "person, and leaves 'the costly exit genuinely cheap'?",
      options: [
        "They concede that the objection to nudging cannot be answered.",
        "They supply criteria for meeting the objection by distinguishing a defensible nudge from manipulation.",
        "They restate the objection in stronger form.",
        "They give an example of a harmful nudge."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the tests are offered precisely to meet the objection, not to concede it cannot be answered.",
        "Correct: the author meets the objection 'by disciplining' the power, and the three tests are the criteria that separate a nudge that 'respects the chooser' from 'manipulation wearing the mask of help'.",
        "Wrong: the tests answer the objection rather than restating it; the objection was that nudging hands power to the designer.",
        "Wrong: the tests are general criteria, not a single example of a harmful nudge."
      ],
      workedSolution:
        "Trace the role of the three tests. After granting the objection that " +
        "nudging confers power, the author offers openness, endorsement, and a " +
        "cheap exit as criteria distinguishing a defensible nudge from " +
        "manipulation. That is meeting the objection with criteria, not conceding " +
        "it, restating it, or giving an example.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-735",
      passageId: "psg-philosophy-710",
      type: "opinion",
      stem:
        "Which of the following is best understood as the author's evaluative " +
        "judgement rather than a neutral description of nudging?",
      options: [
        "A nudge that fails the three tests is manipulation wearing the mask of help.",
        "Some pension schemes are arranged so that a worker joins by doing nothing.",
        "Products can be placed at different heights on a shelf.",
        "A default is the option that takes effect when a person does nothing."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: calling a failing nudge 'manipulation wearing the mask of help' is the author's loaded evaluative verdict, not a neutral description of how nudging works.",
        "Wrong: that some pensions enrol a worker by default neutrally describes a mechanism, not an evaluation.",
        "Wrong: that products can sit at different heights is a plain factual description used as an example.",
        "Wrong: defining a default as what happens when one does nothing is a neutral definition, not a value judgement."
      ],
      workedSolution:
        "Separate evaluation from description. 'Manipulation wearing the mask of " +
        "help' is a value-laden charge; the others describe defaults, shelf " +
        "placement, or definitions. So the 'mask of help' verdict is the opinion.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-711 (4 questions) --- */
    {
      id: "q-main-736",
      passageId: "psg-currentaffairs-711",
      type: "main",
      stem: "Which statement best expresses the central argument of the passage?",
      options: [
        "Humanity should abandon the Earth and settle Mars as quickly as possible.",
        "Space exploration has no value and should be stopped.",
        "The 'lifeboat' case for colonising other worlds fails, because even a ruined Earth would be more habitable than Mars and the lifeboat story invites carelessness here.",
        "Mars will soon be more comfortable to live on than Earth."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author warns against treating a colony as a replacement for Earth, so he does not urge abandoning Earth as fast as possible.",
        "Wrong: he says 'curiosity is a noble motive and exploration has its own worth', so he does not call exploration valueless.",
        "Correct: the passage argues 'a wrecked Earth is a kinder home than a pristine Mars', that the lifeboat comparison 'does not hold', and that it 'risks licensing a fatal carelessness' on Earth.",
        "Wrong: the author stresses Mars lacks breathable air, liquid water and a protective field, so he denies Mars will soon be more comfortable than Earth."
      ],
      workedSolution:
        "Identify the defended conclusion. The author attacks the insurance " +
        "argument, holding a wrecked Earth still beats Mars and that the lifeboat " +
        "story breeds carelessness, while allowing exploration for curiosity. The " +
        "answer states this; the others urge abandoning Earth, dismiss " +
        "exploration, or overrate Mars.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-737",
      passageId: "psg-currentaffairs-711",
      type: "detail",
      stem:
        "According to the passage, why would a wrecked Earth still be 'a kinder " +
        "home than a pristine Mars'?",
      options: [
        "Because even after ruin the Earth would still have a breathable past, liquid water, and a magnetic field that keeps its air from boiling off.",
        "Because Mars is too far away for any rocket to reach.",
        "Because the Earth's population would have fallen to a manageable size.",
        "Because Mars has already been found to be inhabited."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says a ruined Earth 'would still have a breathable past, liquid water, and a magnetic field that does not let the air boil off into space'.",
        "Wrong: distance and rocketry are not the stated reason; the contrast is about habitability, not reachability.",
        "Wrong: a reduced population is never given as the reason; the point is the Earth's physical conditions.",
        "Wrong: the passage treats Mars as uninhabited ('a pristine Mars'), so this contradicts it."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated reason. The author lists the " +
        "Earth's retained advantages, breathable past, water, magnetic field, even " +
        "after ruin. The other options substitute distance, population, or an " +
        "inhabited Mars the passage does not assert.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-738",
      passageId: "psg-currentaffairs-711",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Believing we have a replacement planet could weaken our resolve to protect the Earth.",
        "A Mars colony would be the freest society humanity has ever built.",
        "No one should ever travel to another planet for any reason.",
        "Protecting the Earth is pointless once space travel becomes possible."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage warns that treating a colony as a lifeboat 'risks licensing a fatal carelessness here' and asks 'why labour to protect a planet one half-believes is replaceable?', supporting that the belief weakens our resolve.",
        "Wrong: the author says total dependence on whoever controls air and power is 'unlikely to cradle the freedoms' its champions assume, the opposite of this option.",
        "Wrong: he expressly allows going 'to learn' out of curiosity, so he does not forbid all travel to other planets.",
        "Wrong: the whole passage argues for protecting the Earth, so it does not support calling that protection pointless."
      ],
      workedSolution:
        "An inference must follow from the text. The author's key worry is that " +
        "believing in a replacement planet breeds carelessness about Earth. The " +
        "answer draws that supported point; the others contradict his claims about " +
        "colony freedom, exploration, and the value of protecting Earth.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-739",
      passageId: "psg-currentaffairs-711",
      type: "tone",
      stem:
        "The description of abandoning a damaged Earth as 'a confession of " +
        "failure' rather than 'a sensible plan' conveys a tone that is:",
      options: [
        "Lightly amused by the idea of space settlement.",
        "Soberly critical of the story that a colony is a sensible escape.",
        "Enthusiastically supportive of leaving the Earth behind.",
        "Entirely neutral, with no judgement of the plan."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'confession of failure' is a weighty phrase, not a light or amused one.",
        "Correct: setting 'a confession of failure' against 'a sensible plan' delivers a serious criticism of the escape narrative, a sober, critical tone consistent with the passage's warnings.",
        "Wrong: the line criticises the escape story, so it is not enthusiastically supportive of leaving Earth.",
        "Wrong: the loaded contrast carries a clear judgement, so the tone is not neutral."
      ],
      workedSolution:
        "Tone follows diction. Calling the escape plan 'a confession of failure' " +
        "rather than 'a sensible plan' lands a grave criticism. That is a soberly " +
        "critical tone, not amusement, enthusiasm, or neutrality.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-712 (3 questions) --- */
    {
      id: "q-standpoint-740",
      passageId: "psg-currentaffairs-712",
      type: "standpoint",
      stem: "What is the author's overall position in the debate over degrowth?",
      options: [
        "Endless growth is plainly sustainable and degrowth is simply mistaken.",
        "Rich economies should deliberately shrink as the degrowth advocates urge.",
        "Neither worshipping nor abolishing growth: the measure of raw output is too crude, so we should ask what is growing and at whose expense.",
        "National output is a perfect measure of a society's success."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author grants the degrowth 'diagnosis lands a real blow', so he does not call it simply mistaken.",
        "Wrong: he says 'the prescription is harder than its champions allow' and worries about who bears the burden, so he does not endorse deliberate shrinking.",
        "Correct: the author's 'honest middle ground is not to worship growth nor to abolish it' but to stop treating raw quantity as success and ask 'what is growing and at whose expense'.",
        "Wrong: he criticises output for counting a forest 'more when it is cut down than when it stands', so he denies it is a perfect measure."
      ],
      workedSolution:
        "Find the held position. The author accepts the degrowth critique of crude " +
        "output but rejects deliberate shrinking, landing on a middle ground that " +
        "asks what kind of growth and for whom. The answer states this; the others " +
        "dismiss degrowth, endorse shrinking, or defend output as perfect.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-741",
      passageId: "psg-currentaffairs-712",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "A standing forest and a felled forest are valued identically by every measure.",
        "All economic growth depends on burning more coal.",
        "Lifting people out of poverty has nothing to do with economic growth.",
        "Two economies that grow by the same amount can differ greatly in their effect on the planet."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: he says output counts a forest 'more when it is cut down', so measures do differ; this option contradicts him.",
        "Wrong: the author lists clean ways to grow, so he denies that all growth depends on coal.",
        "Wrong: he says growth 'lifted billions out of poverty', so it is not unrelated to reducing poverty.",
        "Correct: by noting an economy 'can grow by burning more coal' or instead 'by building wind farms, writing software, or curing disease', the author implies equal growth can differ sharply in its planetary effect, without stating it outright."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit claim is that growth can come from coal or " +
        "from clean activities. The supported but unstated step is that equal " +
        "growth can have very different planetary effects. The other options " +
        "contradict the passage on coal, poverty, or how a forest is counted.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-742",
      passageId: "psg-currentaffairs-712",
      type: "opinion",
      stem:
        "Which of the following is best understood as the author's evaluative " +
        "judgement rather than a neutral statement of fact?",
      options: [
        "The fault may lie less in growth as such than in a dial too crude to tell us what we want to know.",
        "Economic output can be measured for a national economy.",
        "Some economies grow by building wind farms or writing software.",
        "Degrowth advocates propose that rich economies produce and consume less."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the verdict that the fault lies in 'a dial too crude to tell us what we actually want to know' is the author's evaluative conclusion, not a neutral fact.",
        "Wrong: that national output can be measured states a plain fact about economic statistics, not an evaluation.",
        "Wrong: that some economies grow through wind farms or software describes how growth can occur, a factual claim.",
        "Wrong: that degrowth advocates propose producing less reports their position, not the author's own judgement."
      ],
      workedSolution:
        "Separate evaluation from description. The claim that the dial is 'too " +
        "crude' is the author's value-laden verdict; the others state that output " +
        "is measurable, describe clean growth, or report the advocates' position. " +
        "So the 'too crude' judgement is the opinion.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * ESSAY PROMPTS — 3 illustrative, theme-tagged, ids prompt-1701..1703.
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-1701",
      theme: "politics-governance",
      text:
        "“A minimum wage helps the low-paid more than it harms them.” Do you " +
        "agree?",
      source: "illustrative"
    },
    {
      id: "prompt-1702",
      theme: "ethics",
      text:
        "Is it ethical to train artificial-intelligence systems on the work of " +
        "artists who never gave their consent?",
      source: "illustrative"
    },
    {
      id: "prompt-1703",
      theme: "media-tech-environment",
      text:
        "Should the success of a country be measured by the growth of its " +
        "economy?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * MOCK — mock-07. Full paper: 12 passages, 42 questions (six 4-Q + six
   * 3-Q passages), 3 prompts. sample:false, so the exact-42 split is checked.
   * ====================================================================== */
  DATA.mocks.push({
    id: "mock-07",
    title: "Mock Paper 7",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-literature-701",
        "psg-literature-702",
        "psg-politics-703",
        "psg-politics-704",
        "psg-science-705",
        "psg-science-706",
        "psg-history-707",
        "psg-history-708",
        "psg-philosophy-709",
        "psg-philosophy-710",
        "psg-currentaffairs-711",
        "psg-currentaffairs-712"
      ],
      questionIds: [
        "q-main-701",
        "q-structure-702",
        "q-vocab-703",
        "q-tone-704",
        "q-standpoint-705",
        "q-detail-706",
        "q-inference-707",
        "q-main-708",
        "q-structure-709",
        "q-implied-710",
        "q-assume-711",
        "q-standpoint-712",
        "q-factinf-713",
        "q-tone-714",
        "q-main-715",
        "q-detail-716",
        "q-inference-717",
        "q-vocab-718",
        "q-standpoint-719",
        "q-implied-720",
        "q-vocab-721",
        "q-detail-722",
        "q-assume-723",
        "q-tone-724",
        "q-opinion-725",
        "q-factinf-726",
        "q-structure-727",
        "q-inference-728",
        "q-standpoint-729",
        "q-implied-730",
        "q-assume-731",
        "q-vocab-732",
        "q-main-733",
        "q-structure-734",
        "q-opinion-735",
        "q-main-736",
        "q-detail-737",
        "q-inference-738",
        "q-tone-739",
        "q-standpoint-740",
        "q-implied-741",
        "q-opinion-742"
      ]
    },
    sectionB: {
      promptIds: ["prompt-1701", "prompt-1702", "prompt-1703"]
    }
  });
})(typeof window !== "undefined" ? window : this);
