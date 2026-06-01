/*
 * mock-06.js — full LNAT Section A mock exam (Mock Paper 6).
 *
 * Original, illustrative content authored against data/SCHEMA.md. It is fully
 * self-contained: every question, prompt and the mock object reference ONLY the
 * IDs defined in this file (range 601-642). All MCQs use exactly 4 options and
 * are answerable from the passage ALONE, with no outside knowledge required.
 *
 * Delivery model: this file assigns into the buckets that loader.js created on
 * window.LNAT_DATA, and MUST load AFTER loader.js. English-only. Every authored
 * item is source:"illustrative".
 *
 * Composition:
 *   - 12 passages (250-380 words), 2 per genre across the 6 genres, argumentative.
 *   - 42 four-option questions across all 11 sub-types; six 4-Q passages and six
 *     3-Q passages (24 + 18 = 42).
 *   - 3 illustrative essay prompts (prompt-1601..1603).
 *   - The mock-06 object wiring all 12 passages, 42 questions and 3 prompts.
 *
 * Topics (all distinct from mocks 01-05 and from the banned-topic list):
 *   literature   : nostalgia as a cultural force; dialect vs standard English
 *   politics     : rent control; the case against GDP as a measure of progress
 *   science      : the right to repair; neurodiversity
 *   history      : surveillance capitalism; nuclear disarmament
 *   philosophy   : drug decriminalisation; the ethics of zoos
 *   currentaffairs: the four-day working week; no-platforming / academic free speech
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-06.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }
  // Defensive bucket guards: if loader.js is present but a bucket is somehow
  // missing, create it so this file never throws on push.
  if (!Array.isArray(DATA.passages)) DATA.passages = [];
  if (!Array.isArray(DATA.questions)) DATA.questions = [];
  if (!Array.isArray(DATA.prompts)) DATA.prompts = [];
  if (!Array.isArray(DATA.mocks)) DATA.mocks = [];

  /* ====================================================================== *
   * PASSAGES — 12 across 6 genres (2 each), ids 601-612.
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-literature-601",
      genre: "literature",
      title: "The Comfort of Looking Back",
      body:
        "Nostalgia has a poor reputation among serious critics, who treat it as " +
        "a failure of nerve, a refusal to face the present by retreating into a " +
        "gilded past that never existed. There is something in the charge. The " +
        "past we long for is edited; we remember the warmth of a childhood " +
        "summer and forget the boredom and the scraped knees, and a politics " +
        "built on returning to such a past is building on a fiction. Yet to " +
        "dismiss nostalgia entirely is to misunderstand what it does. The " +
        "feeling is not really a claim that the past was better; it is a way of " +
        "holding on to what we value when the present threatens to sweep it " +
        "away. A community that sings the songs of its grandparents is not " +
        "deceived about the hardships those grandparents endured. It is " +
        "insisting that something worth keeping was carried in those songs, and " +
        "that a present too busy to remember them is the poorer for it. The " +
        "critic who sees only escapism misses this preserving work. Nostalgia " +
        "becomes dangerous only when it hardens into a programme, when longing " +
        "for a vanished world turns into a demand to rebuild it and to punish " +
        "those blamed for its loss. The cure for that danger is not to abolish " +
        "the feeling, which cannot be done, but to read it correctly: as " +
        "evidence of what a people fears losing, not as a manual for where it " +
        "should return. A society that listens to its nostalgia learns what it " +
        "treasures; a society that obeys it walks backward off a cliff. The " +
        "difference lies entirely in whether we treat the longing as a question " +
        "about our values or as an instruction about our destination.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-602",
      genre: "literature",
      title: "The Accent of Authority",
      body:
        "We are taught early that there is a correct way to speak, and that the " +
        "regional voices we hear at home are departures from it, to be tidied " +
        "away before we enter the wider world. This is one of the quietest " +
        "prejudices a language carries. The form we call standard English is " +
        "not, as the name suggests, the most logical or expressive variety; it " +
        "is simply the dialect that happened to be spoken by those who held " +
        "power when the printing press and the schoolroom fixed it in place. A " +
        "dialect dismissed as lazy or broken usually obeys rules every bit as " +
        "intricate as those of the prestige form, rules its speakers follow " +
        "without thinking, exactly as the standard speaker does. What marks one " +
        "variety as proper and another as a fault is not grammar but the social " +
        "standing of the people who use it. None of this means the standard form " +
        "should be abandoned, for a shared variety lets strangers from distant " +
        "regions understand one another, and that is a real convenience worth " +
        "preserving. The error is to mistake that convenience for superiority, " +
        "and to treat the child who arrives at school speaking a regional " +
        "dialect as someone who must be corrected rather than someone who " +
        "already commands a complete and rule-governed tongue. To teach the " +
        "standard as a useful second register is sensible; to teach it as the " +
        "only legitimate form, and the home voice as an embarrassment, is to " +
        "tell that child that the speech of her family is a defect. The mistake " +
        "is not in valuing a common language but in confusing the accident of " +
        "which dialect won prestige with a verdict on which dialect is good.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-603",
      genre: "politics",
      title: "The Ceiling That Lowers the Roof",
      body:
        "When rents rise faster than wages, the call to cap them is natural and " +
        "humane, and a tenant facing eviction is right to want relief. But the " +
        "popularity of rent control should not be mistaken for evidence that it " +
        "works, and a measure that helps the tenant who already has a flat may " +
        "harm the larger number who are still looking for one. The trouble lies " +
        "in what a price ceiling does to supply. A landlord who can no longer " +
        "charge what a flat would fetch has less reason to offer it for rent at " +
        "all, and less reason still to build or maintain it; capital that would " +
        "have flowed into housing flows elsewhere. Over time the stock of " +
        "rentable homes shrinks, or decays, and the queue for each vacancy " +
        "lengthens. The tenant lucky enough to hold a controlled flat is " +
        "protected, but she tends to stay put even when her circumstances " +
        "change, because to move is to lose the protection, and so the very " +
        "homes most in demand turn over least. The result is a market that " +
        "rewards incumbency and punishes the newcomer, the young and the mobile, " +
        "the people controls are meant to help. None of this denies that " +
        "unaffordable rent is a genuine hardship, nor that something must be " +
        "done. It denies only that capping the price is the something. The honest " +
        "remedy for scarcity is to build, to let supply rise until rents fall of " +
        "their own accord, rather than to command a low price for a good that " +
        "then quietly grows scarcer. A control that shields today's tenant while " +
        "shrinking tomorrow's supply does not solve the housing problem; it " +
        "freezes it in place and hands the bill to whoever arrives next.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-604",
      genre: "politics",
      title: "The Number That Forgets",
      body:
        "For most of a century we have measured a nation's success by its gross " +
        "domestic product, the total value of everything it produces and sells. " +
        "The figure is convenient and comparable, and that convenience has given " +
        "it an authority it does not deserve. Growth in this number is treated " +
        "as progress, almost by definition, yet the number is curiously blind " +
        "to much of what makes a country worth living in. It counts a forest " +
        "only when it is felled and sold as timber, never while it stands and " +
        "cleans the air; it records the cost of treating an illness but not the " +
        "value of the health that needed no treatment. A traffic jam, by burning " +
        "fuel, raises the figure; an hour spent caring unpaid for an ageing " +
        "parent does not register at all. The measure was designed to capture " +
        "marketed activity, and within that purpose it works; the error is to " +
        "have let a gauge of market output stand in for the whole of national " +
        "wellbeing. A country can post handsome growth while its rivers foul, " +
        "its citizens grow anxious and its common goods decay, and the figure " +
        "will report only success. This does not mean the measure should be " +
        "thrown away, for the size of an economy is worth knowing. It means that " +
        "to govern by that number alone is to steer by an instrument that cannot " +
        "see the rocks. A nation that judges itself solely by what it sells will " +
        "reliably neglect everything it does not sell, and discover too late " +
        "that the things left out of the account were the things that mattered " +
        "most.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-605",
      genre: "science",
      title: "The Sealed Machine",
      body:
        "A generation ago a broken appliance was something you opened, " +
        "diagnosed and mended, often with tools already in the drawer. Today the " +
        "same impulse meets a smooth plastic shell with no visible screws, a " +
        "battery glued rather than clipped in place, and a manufacturer who will " +
        "neither sell the part nor share the diagram. The device is designed to " +
        "resist repair, and when it fails the owner is steered toward buying " +
        "another. Defenders of this arrangement plead safety and quality, " +
        "arguing that untrained hands inside a device court danger and that only " +
        "the maker can guarantee a proper fix. There is a sliver of truth here, " +
        "but it does not survive scrutiny. The same companies happily sold " +
        "repairable goods for decades without an epidemic of injuries, and an " +
        "independent technician is not obviously less careful than a distant " +
        "factory. The likelier motive is plain: a product that cannot be mended " +
        "must be replaced, and replacement is where the profit lies. The cost is " +
        "borne by the owner, who pays again for what a small part would have " +
        "restored, and by the environment, which receives the mountain of " +
        "discarded devices that a culture of repair would have spared. A right " +
        "to repair, requiring makers to supply parts, tools and information, " +
        "would not force anyone to mend their own goods; it would merely return " +
        "the choice to the person who owns the thing. To withhold that choice in " +
        "the name of safety, while the real beneficiary is the seller of the " +
        "replacement, is to dress a commercial interest in the costume of the " +
        "public good.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-606",
      genre: "science",
      title: "Wired Differently",
      body:
        "We have long described conditions such as autism and dyslexia as " +
        "disorders, deviations from a normal brain that medicine should aim to " +
        "correct. The idea of neurodiversity challenges that framing, proposing " +
        "that such variations are better understood as natural differences in " +
        "how minds work, no more inherently defective than left-handedness. The " +
        "claim is easy to caricature and easy to overstate, and both errors " +
        "should be avoided. To say a different brain is not a broken one is not " +
        "to deny that some of these differences bring real difficulty; a person " +
        "who cannot bear ordinary noise, or who reads only with great effort, " +
        "faces obstacles that good intentions do not dissolve. But much of the " +
        "difficulty turns out to lie not in the mind itself but in a world built " +
        "to suit one kind of mind and indifferent to the rest. An office that " +
        "assumes everyone thrives amid noise and interruption disables the " +
        "worker who needs quiet, much as a building with only stairs disables " +
        "the person in a wheelchair; the limitation is as much in the " +
        "environment as in the body. Seen this way, the right response to many " +
        "neurological differences is not only treatment aimed at the individual " +
        "but adjustment of the surroundings that turn a difference into a " +
        "disadvantage. None of this romanticises hardship or pretends every " +
        "trait is a hidden gift. It asks only that we stop assuming a single " +
        "standard brain against which all others are measured and found wanting, " +
        "and notice how often what we call a disorder is in part a mismatch " +
        "between an unusual mind and a world that never considered it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-607",
      genre: "history",
      title: "When Watching Became a Business",
      body:
        "Surveillance is old, but its purpose has changed in a way the long " +
        "history of spying can obscure. For most of the past the powerful " +
        "watched their subjects in order to control them: to collect taxes, to " +
        "find dissenters, to enforce a law or a faith. The watching was an arm " +
        "of authority, and its aim was obedience. What is new in our own time is " +
        "that the most intensive watching is done not chiefly to govern but to " +
        "sell. Companies record where we go, what we read and what we pause over, " +
        "not to discipline us but to predict and nudge what we will buy, and " +
        "they trade these predictions in a market that the watched never see. " +
        "The shift matters, because the old defences no longer fit. Against the " +
        "watching state a citizen could appeal to rights, to courts, to the vote; " +
        "the surveillance was at least visible as power and could be resisted as " +
        "power. The newer kind hides inside a free and convenient service, " +
        "presents itself as mere personalisation, and asks for consent in terms " +
        "no one reads. Its subjects are not coerced but courted, and a watching " +
        "we welcome is far harder to limit than one we fear. To understand this " +
        "we must drop the comforting assumption that surveillance is always the " +
        "state's tool against the citizen. The dominant form today is commerce's " +
        "tool for shaping the consumer, and a society still guarding against the " +
        "old danger, the official with the file, may leave the newer one, the " +
        "company with the profile, almost entirely unwatched.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-608",
      genre: "history",
      title: "The Peace of the Terrified",
      body:
        "The argument that nuclear weapons should be abolished seems almost too " +
        "obvious to need stating: weapons that could end civilisation are surely " +
        "the first that a sane world would renounce. Yet the case meets a reply " +
        "that has shaped policy for seventy years and cannot be waved aside. The " +
        "great powers did not fight one another directly after 1945, the " +
        "argument runs, precisely because the cost of doing so had become " +
        "annihilation; the very horror of the weapons kept their owners cautious, " +
        "and a fragile peace was bought by mutual terror. There is force in this. " +
        "A statesman who knows that a war he starts may consume his own capital " +
        "thinks twice in a way that the leaders of 1914, expecting a short and " +
        "survivable conflict, did not. But the argument carries a hidden gamble " +
        "that its confidence conceals. Deterrence works only so long as every " +
        "actor is rational, well informed and in control of his weapons, and " +
        "history offers no guarantee that this condition will always hold. A " +
        "false alarm, a reckless leader, a single accident, and the peace that " +
        "terror bought is paid back with interest no one can afford. To say that " +
        "the weapons have kept the peace so far is therefore true but " +
        "incomplete; it describes a wager that has not yet been lost, and treats " +
        "an unbroken run of luck as if it were a law of nature. The deterrence " +
        "argument is not foolish, but those who lean on it should admit what they " +
        "are really claiming: not that catastrophe cannot happen, only that it " +
        "has not happened yet.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-609",
      genre: "philosophy",
      title: "The Harm in Punishing the Harmless",
      body:
        "We criminalise the use of certain drugs on the ground that they harm " +
        "those who take them, and the harm is real enough; addiction wrecks " +
        "lives. But the reasoning hides an assumption worth dragging into the " +
        "light, namely that the proper response to a person harming himself is " +
        "to add the further harm of punishment. A consistent principle that the " +
        "state may forbid whatever damages the user would reach far beyond drugs, " +
        "to dangerous sports, to unhealthy diets, to a hundred private follies " +
        "we would never dream of jailing people for; that we single out drugs " +
        "suggests the principle is not really the one we are applying. The deeper " +
        "difficulty is that prohibition tends to multiply the very harm it " +
        "invokes. Driven underground, a drug becomes more dangerous, of unknown " +
        "strength and purity; the user who needs help fears the law more than " +
        "the substance; and a vast illegal trade grows rich on the prohibition " +
        "itself. Decriminalisation is not the claim that drugs are safe, which " +
        "would be absurd, nor an encouragement to use them. It is the claim that " +
        "treating a health problem as a crime makes both the health and the crime " +
        "worse, and that a person who harms only himself has not obviously " +
        "wronged anyone in the way that the criminal law exists to address. To " +
        "punish him is to answer a misfortune with a penalty, and to call the " +
        "combination justice. The question is not whether drugs do harm, for they " +
        "plainly do, but whether the law's response reduces that harm or simply " +
        "adds to it a second harm of its own, inflicted on the very people it " +
        "claims to protect.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-610",
      genre: "philosophy",
      title: "The Bars We Build for Their Sake",
      body:
        "The modern zoo defends itself with two claims that sound noble and sit " +
        "awkwardly together. The first is that zoos conserve endangered species, " +
        "breeding animals that might otherwise vanish and one day returning them " +
        "to the wild. The second is that zoos educate, teaching a public that " +
        "would never see a tiger to care about its fate. Both claims contain " +
        "truth, and both deserve a harder look than they usually receive. " +
        "Conservation is real, but it describes a small fraction of the animals " +
        "actually kept; most are common species held because visitors wish to " +
        "see them, not because they are at risk, and few captive-bred animals of " +
        "any kind are ever released. The education claim is shakier still, for " +
        "what a child learns from an animal pacing a concrete enclosure may be " +
        "less a lesson in respect than a quiet tuition in the idea that other " +
        "creatures exist for our viewing. Against these benefits stands a cost " +
        "that the defences tend to pass over: the animal itself, deprived of the " +
        "range and the life its nature fits it for, so that we may be educated or " +
        "entertained. To justify that cost, the benefit must be both real and " +
        "unattainable by gentler means, and for most of what zoos do it is " +
        "neither. The genuinely endangered might warrant a carefully limited " +
        "captivity aimed at release; the rest are confined for us, not for them. " +
        "A practice that confines a feeling creature for its own protection may " +
        "sometimes be defensible, but one that confines it chiefly for our " +
        "curiosity has mistaken the animal's interests for our own, and called " +
        "the substitution care.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-611",
      genre: "currentaffairs",
      title: "Less Time, More Done",
      body:
        "The five-day week feels like a law of nature, but it is merely a habit " +
        "inherited from an industrial age, and habits can be questioned. The " +
        "proposal of a four-day week, with no cut in pay, provokes an immediate " +
        "objection: surely a fifth less work means a fifth less output, and a " +
        "firm that produced less while paying the same would soon fail. The " +
        "objection assumes that output rises in step with hours, and that " +
        "assumption is exactly what the evidence of overwork calls into doubt. A " +
        "tired worker in the eighth hour, or the fifth day, is not producing at " +
        "the rate of the first; much of that time is consumed by fatigue, by " +
        "distraction, and by the meetings that expand to fill the space " +
        "available. Trials of the shorter week repeatedly find that output holds " +
        "steady, because the lost hours were among the least productive, and the " +
        "remaining ones are worked with sharper attention and less waste. This " +
        "does not prove the four-day week suits every job; a hospital ward or a " +
        "running production line cannot simply compress its hours, and for such " +
        "work the case is far weaker. But for the large and growing share of jobs " +
        "measured by what is accomplished rather than by hours logged at a desk, " +
        "the long week may be costing more than it yields, in burnout, in " +
        "turnover and in the dull error of the exhausted. The five-day week was " +
        "not handed down on tablets of stone; it was an arrangement that suited " +
        "the factory, and to assume it must suit the very different work most " +
        "people now do is to confuse what is familiar with what is necessary.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-612",
      genre: "currentaffairs",
      title: "Who Gets to Speak on Campus",
      body:
        "When students demand that a controversial speaker be disinvited from " +
        "their university, each side reaches for a principle and accuses the " +
        "other of betraying it. The protesters say a campus need not lend its " +
        "platform to views that wound or degrade its members; the speaker's " +
        "defenders reply that a university exists precisely to air uncomfortable " +
        "ideas, and that to silence one is to betray the institution's reason for " +
        "being. Both have hold of something true, and the dispute is harder than " +
        "either admits. A university is not a public square obliged to host " +
        "anyone who wishes to speak; it chooses whom to invite, and to decline an " +
        "invitation is not in itself censorship. Yet the choice cannot be made on " +
        "the ground that an idea is merely offensive or unpopular, for almost " +
        "every important idea was once both, and a university that admitted only " +
        "the inoffensive would teach its students that disagreement is a kind of " +
        "harm. The defensible line falls not between comfortable and " +
        "uncomfortable speech, which would surrender the whole enterprise, but " +
        "between argument, however provocative, and the incitement or abuse that " +
        "is no longer argument at all. To bar a thinker because his conclusions " +
        "are detested is to abandon the university's work; to decline a speaker " +
        "who traffics not in reasons but in intimidation is to protect it. The " +
        "task is to tell the two apart honestly, rather than to let the word " +
        "harm stretch until it covers any argument a listener would rather not " +
        "hear, or to let the word freedom shrink until it protects only the views " +
        "that were never in danger.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — 42 four-option MCQs, ids 601-642. Each is answerable from
   * its passage alone, with one defensible key and three distractors that
   * are each wrong for a distinct, stated reason. workedSolution names the
   * answer BY ITS CONTENT (never a letter or ordinal).
   * ====================================================================== */
  DATA.questions.push(
    /* --- psg-literature-601 (4 questions) --- */
    {
      id: "q-main-601",
      passageId: "psg-literature-601",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Nostalgia is best understood as evidence of what a people values, and is dangerous only when treated as an instruction to rebuild the past.",
        "Nostalgia is always an escapist failure of nerve and should be resisted wherever it appears.",
        "The past that people feel nostalgic about was genuinely better than the present.",
        "A community that sings old songs is deceived about the hardships of the past."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage argues nostalgia should be read as 'a question about our values' rather than 'an instruction about our destination', and is dangerous only when it 'hardens into a programme'.",
        "Wrong: this is the critics' view the author partly grants but ultimately rejects, saying it 'misses' nostalgia's preserving work.",
        "Wrong: the author denies this, stating the feeling 'is not really a claim that the past was better' and that the remembered past is 'edited'.",
        "Wrong: the passage says the opposite, that such a community 'is not deceived about the hardships those grandparents endured'."
      ],
      workedSolution:
        "Find the claim the whole passage serves. The author concedes nostalgia " +
        "edits the past, but argues its real work is to preserve what a people " +
        "values, becoming dangerous only as a programme for return. The reading " +
        "that nostalgia signals values and turns dangerous only as an instruction " +
        "to rebuild captures this; the escapism, past-was-better and self-deceived " +
        "options state views the passage rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-602",
      passageId: "psg-literature-601",
      type: "structure",
      stem:
        "What is the function of the sentence 'There is something in the charge'?",
      options: [
        "It states the passage's final conclusion.",
        "It introduces a concrete historical example.",
        "It concedes part of the critics' case before the author qualifies and answers it.",
        "It dismisses the critics' view as entirely worthless."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the conclusion comes later, distinguishing listening to nostalgia from obeying it; this early sentence is a concession, not the verdict.",
        "Wrong: no specific historical case is given here; the sentence grants a point, it does not illustrate one.",
        "Correct: the author has just reported the critics' charge of escapism and here admits 'there is something' in it (the past is edited), before turning with 'Yet' to qualify and rebut it.",
        "Wrong: far from calling the charge worthless, the sentence accepts that it contains truth, which is why the author then qualifies rather than rejects it outright."
      ],
      workedSolution:
        "Locate the sentence in the argument map. Right after stating the critics' " +
        "accusation of escapism, the author writes that there is something in it, " +
        "granting the edited-past point, then pivots with 'Yet' to his own view. " +
        "That makes it a partial concession that sets up the rebuttal, not a " +
        "conclusion, an example, or a flat dismissal.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-603",
      passageId: "psg-literature-601",
      type: "vocab",
      stem:
        "As used in the phrase 'a gilded past that never existed', 'gilded' most " +
        "nearly means:",
      options: [
        "Made genuinely of gold and therefore valuable.",
        "Given an attractive surface that hides a plainer reality.",
        "Carefully recorded and preserved in documents.",
        "Ancient and belonging to the distant past."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the literal 'made of gold' sense does not fit a past that 'never existed'; the point is appearance, not real value.",
        "Correct: the phrase describes a past prettified in memory that 'never existed', so 'gilded' means given an attractive surface over a plainer or absent reality, matching the later point that memory is 'edited'.",
        "Wrong: 'gilded' here is about flattering appearance, not documentation; nothing concerns records.",
        "Wrong: 'gilded' refers to a golden sheen, not to age; the passage stresses the past is idealised, not merely old."
      ],
      workedSolution:
        "Read the word in its sentence: a 'gilded past that never existed'. The " +
        "past is dressed up in memory rather than truly golden, so 'gilded' means " +
        "given an attractive surface over a plainer reality. The literal-gold, " +
        "documented and merely-old readings miss that contrast.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-604",
      passageId: "psg-literature-601",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "The same nostalgic feeling can be either harmless or harmful depending on how a society responds to it.",
        "Nostalgia should be eliminated from public life wherever possible.",
        "Any politics that appeals to the past is certain to succeed.",
        "Communities that value old songs cannot also face the present."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage holds that listening to nostalgia teaches a people what it treasures while obeying it 'walks backward off a cliff', so the very same feeling can help or harm by response, with 'the difference lies entirely in' how it is treated.",
        "Wrong: the author says the feeling 'cannot be' abolished and warns against trying, so eliminating it is not supported.",
        "Wrong: the passage warns a politics of return is 'building on a fiction', the reverse of certain success.",
        "Wrong: the author presents singing old songs as compatible with facing the present, not as a barrier to it."
      ],
      workedSolution:
        "An inference must follow from the text. The author contrasts a society " +
        "that listens to its nostalgia with one that obeys it, locating the whole " +
        "difference in the response. The supported conclusion is that the same " +
        "feeling can be harmless or harmful by how it is handled; the other " +
        "options contradict the can't-be-abolished, building-on-fiction or " +
        "compatibility points.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-literature-602 (3 questions) --- */
    {
      id: "q-standpoint-605",
      passageId: "psg-literature-602",
      type: "standpoint",
      stem:
        "What is the author's attitude toward the form known as standard English?",
      options: [
        "It is the most logical and expressive variety and is rightly treated as superior.",
        "It should be abandoned because it is merely the speech of the powerful.",
        "It is useful as a shared variety but owes its prestige to social power, not to any inherent superiority.",
        "It is indistinguishable from regional dialects in every respect."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author denies the standard is 'the most logical or expressive variety', calling it simply the dialect of those who held power.",
        "Wrong: the author explicitly says the standard 'should' not 'be abandoned', since a shared variety is 'a real convenience worth preserving'.",
        "Correct: the author grants the standard's value as a shared form 'worth preserving' while insisting its status reflects 'the social standing of the people who use it', not superiority.",
        "Wrong: the author notes the standard differs in prestige and social standing, so it is not indistinguishable from other dialects in every respect."
      ],
      workedSolution:
        "Separate the view described from the view held. The author keeps the " +
        "standard for its convenience yet traces its prestige to the power of its " +
        "speakers rather than to merit. That balanced position, useful but not " +
        "superior, is the attitude; the superior, abandon and indistinguishable " +
        "options each take it too far in one direction.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-606",
      passageId: "psg-literature-602",
      type: "detail",
      stem:
        "According to the passage, why is the variety called standard English " +
        "treated as correct?",
      options: [
        "Because it follows grammatical rules that regional dialects lack.",
        "Because it was spoken by those who held power when print and schooling fixed it in place.",
        "Because it is easier for children to learn than regional dialects.",
        "Because linguists have proved it to be the most expressive variety."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says a dismissed dialect 'usually obeys rules every bit as intricate' as the standard, so grammar is not what sets the standard apart.",
        "Correct: the passage states the standard 'is simply the dialect that happened to be spoken by those who held power when the printing press and the schoolroom fixed it in place'.",
        "Wrong: ease of learning for children is never given as the reason; the text attributes the standard's status to social power.",
        "Wrong: the passage explicitly denies the standard is the most logical or expressive variety, so no such proof is offered."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated cause. The passage attributes " +
        "the standard's authority to its having been the speech of the powerful " +
        "when print and the schoolroom fixed it. The grammar, ease-of-learning " +
        "and most-expressive options are each contradicted by the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-607",
      passageId: "psg-literature-602",
      type: "assume",
      stem:
        "The argument that a dismissed dialect is not inferior relies on which " +
        "unstated assumption?",
      options: [
        "All languages will eventually merge into a single form.",
        "Children should never be taught the standard form at all.",
        "Obeying intricate, rule-governed structure is what makes a variety a legitimate language, rather than the social standing of its speakers.",
        "Regional dialects are spoken by more people than the standard form."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the argument does not need languages to merge; it concerns whether a dialect is legitimate now, not future convergence.",
        "Wrong: the author actually recommends teaching the standard as a 'useful second register', so this is contradicted, not assumed.",
        "Correct: the claim that a dialect dismissed as 'broken' is in fact legitimate only follows if rule-governed intricacy, not the speakers' prestige, is what makes a variety a real language; that standard of legitimacy is assumed throughout.",
        "Wrong: relative numbers of speakers are never invoked; the argument turns on rules and prestige, not population."
      ],
      workedSolution:
        "An assumption is a required missing premise. To move from 'this dialect " +
        "obeys intricate rules' to 'this dialect is not inferior', the author must " +
        "assume that rule-governed structure, rather than the social standing of " +
        "speakers, is the mark of a legitimate language. Negate that and the " +
        "argument fails. The other options are contradicted or irrelevant.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-politics-603 (4 questions) --- */
    {
      id: "q-main-608",
      passageId: "psg-politics-603",
      type: "main",
      stem: "Which of the following best captures the central argument of the passage?",
      options: [
        "Unaffordable rent is not a genuine hardship and requires no response.",
        "Rent control should be extended to cover every rental property.",
        "Landlords are morally obliged to charge whatever the market will bear.",
        "Capping rents protects today's tenant but shrinks tomorrow's supply, so building, not price control, is the honest remedy for scarcity."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly affirms that 'unaffordable rent is a genuine hardship' and that 'something must be done', so this misstates his view.",
        "Wrong: the passage argues against rent control's effects, so extending it everywhere is the opposite of the conclusion.",
        "Wrong: the author makes no claim about landlords' moral obligations on pricing; the argument is about the effects of controls on supply.",
        "Correct: the passage argues a price ceiling shields the incumbent tenant while shrinking and decaying supply, and that 'the honest remedy for scarcity is to build' until rents fall on their own."
      ],
      workedSolution:
        "Identify the defended conclusion. The author grants the hardship is real, " +
        "argues that capping rents reduces and degrades supply while rewarding " +
        "incumbents, and concludes that building is the honest remedy. The reading " +
        "that control protects today's tenant but shrinks supply, so building is " +
        "the answer, states that thesis; the rest deny the hardship, invert the " +
        "argument or add an unrelated moral claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-609",
      passageId: "psg-politics-603",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Rent control can confer a benefit on one tenant while imposing a cost on others seeking housing.",
        "Every landlord subject to controls immediately abandons the rental market.",
        "Building new housing is impossible once rent controls exist.",
        "The tenant in a controlled flat is the person controls most harm."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying controls help 'the tenant who already has a flat' but 'may harm the larger number who are still looking', the author implies the same policy benefits some while costing others, without stating it as a single proposition.",
        "Wrong: the author says a controlled landlord has 'less reason' to rent or build, a matter of degree, not that 'every' landlord 'immediately' quits.",
        "Wrong: the passage urges building as the remedy, so it cannot imply building becomes impossible under controls.",
        "Wrong: the passage says the controlled tenant 'is protected', so she is a beneficiary, not the person most harmed."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines contrast the protected sitting " +
        "tenant with the harmed seekers. The supported but unstated step is that " +
        "one policy can benefit some while costing others. The other options " +
        "overstate ('every', 'immediately'), contradict the build-remedy, or " +
        "invert who is protected.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-610",
      passageId: "psg-politics-603",
      type: "factinf",
      stem:
        "Which of the following is best understood as an inference the author " +
        "draws rather than a fact he simply reports?",
      options: [
        "A landlord who cannot charge the market rate has less reason to offer a flat for rent.",
        "A tenant in a controlled flat tends to stay put even when her circumstances change.",
        "Rent control produces a market that rewards incumbency and punishes the newcomer.",
        "Some tenants face eviction when rents rise faster than wages."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is presented as a direct behavioural premise about incentives, a building block of the argument rather than its inferred conclusion.",
        "Wrong: this too is offered as an observed tendency feeding the argument, not the larger conclusion the author derives from it.",
        "Correct: the verdict that controls create a market 'that rewards incumbency and punishes the newcomer' is the conclusion the author infers from the supply and lock-in premises, not a fact reported on its own.",
        "Wrong: that some tenants face eviction is reported as background fact about the situation, not an inference."
      ],
      workedSolution:
        "Separate reported facts from the author's inferred step. The reduced " +
        "incentive to rent, the tendency to stay put and the eviction risk are " +
        "premises and background; the claim that the system rewards incumbents " +
        "and punishes newcomers is the conclusion drawn from them, so that is the " +
        "inference.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-611",
      passageId: "psg-politics-603",
      type: "tone",
      stem:
        "The closing image that a control 'freezes [the housing problem] in place " +
        "and hands the bill to whoever arrives next' conveys a tone that is:",
      options: [
        "Warmly approving of rent control's long-term effects.",
        "Uncertain whether rent control has any effect at all.",
        "Light-heartedly amused by the housing market.",
        "Pointedly critical, stressing that the policy defers a cost onto future newcomers."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the image is a criticism of controls, the opposite of approval of their effects.",
        "Wrong: the author is decisive that controls shrink supply, not uncertain whether they have any effect.",
        "Wrong: the phrasing is critical, not amused; the tone is serious about a real cost.",
        "Correct: 'freezes... in place' and 'hands the bill to whoever arrives next' sharply fault the policy for passing its cost to future newcomers, a pointed criticism consistent with the whole argument."
      ],
      workedSolution:
        "Tone follows diction. 'Freezes in place' and 'hands the bill to whoever " +
        "arrives next' deliver a clear charge that the policy defers its cost onto " +
        "future newcomers. That is pointed criticism, not approval, amusement or " +
        "uncertainty.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-politics-604 (3 questions) --- */
    {
      id: "q-standpoint-612",
      passageId: "psg-politics-604",
      type: "standpoint",
      stem:
        "What is the author's overall view of gross domestic product as a measure?",
      options: [
        "It should be abolished because the size of an economy is not worth knowing.",
        "It is a flawless measure of a nation's wellbeing.",
        "It is worth knowing as a gauge of market output but must not be treated as a measure of overall national wellbeing.",
        "It already captures unpaid care and environmental value accurately."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says GDP should not be 'thrown away' because 'the size of an economy is worth knowing', so abolition misstates his view.",
        "Wrong: the passage details what the figure is 'blind to', so the author plainly does not think it flawless.",
        "Correct: the author holds GDP 'works' within its purpose of capturing 'marketed activity' but that letting it 'stand in for the whole of national wellbeing' is the error.",
        "Wrong: the passage says GDP ignores unpaid care and the standing forest, so it does not capture them accurately."
      ],
      workedSolution:
        "Find the held position. The author keeps GDP as a legitimate gauge of " +
        "market output but rejects its use as a proxy for total wellbeing. That " +
        "qualified view is the attitude; the abolish, flawless and already-captures " +
        "options each distort it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-613",
      passageId: "psg-politics-604",
      type: "detail",
      stem:
        "According to the passage, how does GDP treat a standing forest?",
      options: [
        "It counts the forest's value for cleaning the air while it stands.",
        "It counts the forest only when it is felled and sold as timber.",
        "It records the forest as a cost to the economy.",
        "It values the forest more highly than felled timber."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says GDP counts the forest 'never while it stands and cleans the air', the reverse of this.",
        "Correct: the passage states GDP 'counts a forest only when it is felled and sold as timber'.",
        "Wrong: GDP does not record the standing forest at all in the passage, neither as cost nor as value; it simply omits it until felled.",
        "Wrong: the passage gives no comparison ranking the standing forest above timber; it says the standing forest is not counted."
      ],
      workedSolution:
        "Explicit comprehension. The relevant line says GDP counts a forest only " +
        "once it is felled and sold as timber, ignoring it while it stands. The " +
        "answer reproduces that; the other options invert it, add a cost the text " +
        "does not state, or invent a ranking.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-614",
      passageId: "psg-politics-604",
      type: "assume",
      stem:
        "The argument that governing by GDP alone leads a nation to neglect what " +
        "matters relies on which unstated assumption?",
      options: [
        "GDP is impossible to calculate accurately.",
        "Much of what makes a country worth living in lies outside marketed activity that GDP measures.",
        "Every nation that grows its economy becomes unhappy.",
        "Market output has no value whatsoever."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the argument does not need GDP to be incalculable; it grants the figure is 'convenient and comparable', so accuracy of calculation is not the issue.",
        "Correct: the claim that steering by GDP causes neglect only follows if important goods (clean air, unpaid care, common goods) fall outside the marketed activity GDP captures; that gap between market output and wellbeing is the assumed premise.",
        "Wrong: the author does not assume growth always brings unhappiness; he says a country 'can' grow while things decay, a possibility, not a law.",
        "Wrong: the author treats market output as worth knowing, so he does not assume it is valueless."
      ],
      workedSolution:
        "An assumption is the missing premise the conclusion needs. To conclude " +
        "that GDP-only government neglects what matters, the author must assume " +
        "that much of what matters lies outside the marketed activity GDP " +
        "measures. Negate that and the neglect cannot follow. The other options " +
        "are contradicted or unneeded.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-science-605 (4 questions) --- */
    {
      id: "q-main-615",
      passageId: "psg-science-605",
      type: "main",
      stem: "Which statement best expresses the main point of the passage?",
      options: [
        "Modern appliances are sealed and hard to repair purely for reasons of consumer safety.",
        "Everyone should be required to repair their own broken appliances.",
        "Independent technicians are more dangerous than the original manufacturers.",
        "Designing goods to resist repair mainly serves the seller of replacements, so a right to repair would justly return the choice to the owner."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author treats the safety plea as having only 'a sliver of truth' that 'does not survive scrutiny', so safety is not the real driver.",
        "Wrong: the passage says a right to repair 'would not force anyone to mend their own goods', so compulsory self-repair misstates it.",
        "Wrong: the author says an independent technician 'is not obviously less careful' than a distant factory, rejecting this claim.",
        "Correct: the author argues replacement 'is where the profit lies', that the safety defence is a pretext, and that a right to repair 'would merely return the choice to the person who owns the thing'."
      ],
      workedSolution:
        "Identify the defended conclusion. The author dismisses the safety defence, " +
        "locates the motive in replacement profit, and endorses a right to repair " +
        "that restores the owner's choice. The reading that anti-repair design " +
        "serves the seller and a right to repair returns choice to the owner " +
        "states this; the others endorse the safety pretext, mandate self-repair " +
        "or accept the technician-danger claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-616",
      passageId: "psg-science-605",
      type: "detail",
      stem:
        "According to the passage, what would a right to repair require makers to " +
        "do?",
      options: [
        "Repair every broken device free of charge for the owner.",
        "Stop selling replacement devices altogether.",
        "Train every owner to carry out their own repairs.",
        "Supply parts, tools and information so repair becomes possible."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage describes supplying parts and information, not performing free repairs for owners.",
        "Wrong: nothing in the passage requires makers to stop selling replacements; it requires them to enable repair.",
        "Wrong: the author says such a right 'would not force anyone to mend their own goods', so mandatory owner-training is the opposite of the claim.",
        "Correct: the passage defines a right to repair as 'requiring makers to supply parts, tools and information'."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated requirement. The passage says a " +
        "right to repair would require makers to supply parts, tools and " +
        "information. The free-repair, stop-selling and mandatory-training options " +
        "are each contradicted or absent.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-617",
      passageId: "psg-science-605",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "The safety justification for sealed designs is offered to disguise a commercial motive.",
        "No appliance can ever be repaired safely by anyone.",
        "Manufacturers have no financial interest in whether devices are repairable.",
        "Repairable goods always cause more injuries than sealed ones."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says the safety plea fails scrutiny and that the practice dresses 'a commercial interest in the costume of the public good', supporting that safety disguises the profit motive.",
        "Wrong: the author notes companies 'happily sold repairable goods for decades without an epidemic of injuries', so safe repair is plainly possible.",
        "Wrong: the passage stresses that 'replacement is where the profit lies', so makers do have a financial interest in repairability.",
        "Wrong: the decades of repairable goods 'without an epidemic of injuries' contradict the claim that repairable goods always injure more."
      ],
      workedSolution:
        "An inference must follow from the text. The author's pivotal move is that " +
        "the safety argument cloaks a profit motive in the language of the public " +
        "good. The supported conclusion is that safety disguises commerce; the " +
        "others contradict the no-epidemic point, the profit motive or the safe " +
        "repair record.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-618",
      passageId: "psg-science-605",
      type: "tone",
      stem:
        "The closing remark about dressing 'a commercial interest in the costume " +
        "of the public good' conveys a tone that is:",
      options: [
        "Neutral and purely descriptive about manufacturing.",
        "Admiring of the manufacturers' cleverness.",
        "Pointedly critical, accusing the makers of disguising self-interest as concern for the public.",
        "Anxious and fearful about the dangers of repair."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the phrase delivers an accusation, not a neutral description; it judges the makers' stated motive.",
        "Wrong: the author exposes rather than admires the manoeuvre; there is no praise in 'costume of the public good'.",
        "Correct: casting the safety defence as a 'costume' over 'a commercial interest' sharply accuses the makers of disguising self-interest as public concern, a pointed criticism that matches the argument.",
        "Wrong: the tone targets the sellers' motive; it is not fearful about repair, which the author treats as safe."
      ],
      workedSolution:
        "Tone follows diction. Calling the safety defence a 'costume' worn over a " +
        "'commercial interest' lands a clear charge of disguised self-interest. " +
        "That is pointed criticism, not neutrality, admiration or anxiety about " +
        "repair.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-science-606 (3 questions) --- */
    {
      id: "q-standpoint-619",
      passageId: "psg-science-606",
      type: "standpoint",
      stem:
        "What is the author's position on understanding conditions such as autism " +
        "and dyslexia?",
      options: [
        "They are disorders that medicine should aim wholly to correct in the individual.",
        "They never bring any genuine difficulty to those who have them.",
        "They are partly natural differences, and much of the disadvantage lies in a world built for one kind of mind rather than in the mind itself.",
        "Every neurological trait is a hidden gift to be celebrated."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author challenges the framing of these conditions purely as disorders to be corrected, treating them as differences whose disadvantage is partly environmental.",
        "Wrong: the author concedes 'some of these differences bring real difficulty', so denying any difficulty misstates his view.",
        "Correct: the author argues such variations are 'natural differences' and that 'much of the difficulty' lies in 'a world built to suit one kind of mind', so disadvantage is partly environmental.",
        "Wrong: the author says he does not 'pretend every trait is a hidden gift', rejecting this overstatement."
      ],
      workedSolution:
        "Separate the view described from the view held. The author treats these " +
        "conditions as natural differences while admitting real difficulty, then " +
        "locates much of the disadvantage in an ill-fitting environment. That " +
        "balanced position is the attitude; the wholly-correct, no-difficulty and " +
        "every-trait-a-gift options each push it to an extreme he rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-620",
      passageId: "psg-science-606",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Changing an environment can reduce a disadvantage without changing the individual at all.",
        "All offices should be required by law to be silent.",
        "People with neurological differences cannot be helped by any treatment.",
        "A building with stairs is just as accessible as one with a ramp."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by comparing the noisy office to a stairs-only building and saying 'the limitation is as much in the environment as in the body', the author implies that altering the surroundings can lessen the disadvantage without altering the person.",
        "Wrong: the author calls for 'adjustment of the surroundings', not a legal silence mandate; that overstates a general point into a specific law.",
        "Wrong: the author endorses 'treatment aimed at the individual' alongside environmental change, so he does not imply treatment cannot help.",
        "Wrong: the stairs example illustrates a barrier, implying a stairs-only building is less accessible, the opposite of this option."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines say the limitation lies 'as much in " +
        "the environment as in the body' and use the stairs analogy. The supported " +
        "but unstated step is that changing the environment can reduce disadvantage " +
        "without changing the individual. The other options overstate, contradict " +
        "the pro-treatment line, or invert the analogy.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-621",
      passageId: "psg-science-606",
      type: "vocab",
      stem:
        "As used in the phrase 'a mismatch between an unusual mind and a world " +
        "that never considered it', 'mismatch' most nearly means:",
      options: [
        "A contest or competition between two rivals.",
        "A poor fit between two things that were not made for each other.",
        "A clerical error in a written record.",
        "A deliberate insult aimed at an individual."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'mismatch' here is not a contest; the passage describes a failure to fit, not a rivalry.",
        "Correct: the phrase pairs an 'unusual mind' with 'a world that never considered it', so 'mismatch' means a poor fit between two things not designed for each other, echoing the office and stairs examples.",
        "Wrong: no clerical or record-keeping sense is in play; the word concerns fit between mind and world.",
        "Wrong: 'mismatch' names a lack of fit, not an insult; nothing suggests a deliberate slight."
      ],
      workedSolution:
        "Read the word in context: a 'mismatch' between an unusual mind and a world " +
        "that never considered it. The sense is a poor fit between two things not " +
        "made for each other, as with the noisy office. The contest, clerical-error " +
        "and insult readings do not fit.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* --- psg-history-607 (4 questions) --- */
    {
      id: "q-main-622",
      passageId: "psg-history-607",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Surveillance has not changed at all since earlier centuries.",
        "The dominant form of surveillance today serves commerce rather than the state, so defences aimed at the watching state no longer fit.",
        "Government surveillance is the only kind that threatens citizens today.",
        "Commercial data collection is harmless because people consent to it."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author stresses that surveillance's 'purpose has changed', so the no-change claim is the reverse of his thesis.",
        "Correct: the passage argues 'the most intensive watching' is now done 'to sell', not to govern, and that 'the old defences no longer fit' this commercial form.",
        "Wrong: the author's whole point is that commercial watching, 'the company with the profile', is the under-guarded danger, so the state is not the only threat.",
        "Wrong: the author notes consent is asked 'in terms no one reads' and that welcomed watching is 'far harder to limit', so he does not treat it as harmless."
      ],
      workedSolution:
        "Find the claim the whole passage serves. The author contrasts old " +
        "state surveillance aimed at control with today's commercial watching " +
        "aimed at selling, and argues the old defences no longer fit. The reading " +
        "that surveillance now serves commerce and outdated defences miss it " +
        "captures the thesis; the others deny change, ignore the commercial threat " +
        "or call consent-based watching harmless.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-623",
      passageId: "psg-history-607",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's inference rather " +
        "than a neutral description of how surveillance operates?",
      options: [
        "Companies record where we go, what we read and what we pause over.",
        "For most of the past the powerful watched their subjects to control them.",
        "Surveillance predates the modern company by many centuries.",
        "A watching we welcome is far harder to limit than one we fear."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this neutrally reports what companies do, an expository description rather than the author's evaluative step.",
        "Wrong: this describes the historical purpose of state watching, a factual claim within the passage, not the inference.",
        "Wrong: that surveillance is old is reported as background fact, not an inferred conclusion.",
        "Correct: the judgement that 'a watching we welcome is far harder to limit than one we fear' is the author's inference about why the new surveillance evades resistance, drawn from his contrast, not a neutral description."
      ],
      workedSolution:
        "Separate neutral description from the author's added judgement. The data " +
        "collection, the historical purpose and the age of surveillance are " +
        "descriptive; the claim that welcomed watching is harder to limit than " +
        "feared watching is the conclusion the author infers, so that is the " +
        "answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-624",
      passageId: "psg-history-607",
      type: "vocab",
      stem:
        "As used in the phrase 'the surveillance was at least visible as power and " +
        "could be resisted as power', 'power' most nearly means:",
      options: [
        "Electrical energy supplied to a device.",
        "Physical strength of the body.",
        "The exercise of authority and control over others.",
        "A mathematical exponent or operation."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the electrical sense is irrelevant; the passage concerns watching by states and companies, not energy.",
        "Wrong: bodily strength does not fit; the contrast is between visible authority and hidden commercial influence.",
        "Correct: the passage opposes the 'watching state' that could be resisted through 'rights, to courts, to the vote' to hidden commerce, so 'power' means the exercise of authority and control over others.",
        "Wrong: the mathematical sense of 'power' has no bearing on a passage about surveillance and authority."
      ],
      workedSolution:
        "Read the word in context: surveillance 'visible as power' that could be " +
        "'resisted as power' through courts and the vote. 'Power' therefore means " +
        "the exercise of authority and control. The electrical, bodily-strength " +
        "and mathematical senses do not fit.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-625",
      passageId: "psg-history-607",
      type: "assume",
      stem:
        "The claim that the old defences against surveillance 'no longer fit' the " +
        "commercial form relies on which unstated assumption?",
      options: [
        "Commercial surveillance collects more data than states ever did.",
        "States have entirely abandoned the watching of their citizens.",
        "People would stop using online services if they were better informed.",
        "Defences such as rights, courts and the vote work mainly against watching that is visible and exercised as state power."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the argument does not depend on commercial watching collecting more data; it turns on the kind of watching, not its volume.",
        "Wrong: the author does not assume states have stopped watching; he says the dominant form has shifted, not that the state form vanished.",
        "Wrong: whether better-informed people would quit services is never required by the argument; the point is that consent is uninformed, not what would follow from information.",
        "Correct: the conclusion that the old defences misfit the commercial form only follows if those defences (rights, courts, the vote) are suited to visible watching exercised as state power, which commerce's hidden watching is not; that link is assumed."
      ],
      workedSolution:
        "An assumption is the required missing premise. For the old defences to " +
        "'no longer fit' commerce, the author must assume those defences work " +
        "chiefly against visible, state-exercised watching, so they fail against " +
        "hidden commercial watching. Negate that and the misfit claim collapses. " +
        "The other options are unneeded or contradicted.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-history-608 (3 questions) --- */
    {
      id: "q-standpoint-626",
      passageId: "psg-history-608",
      type: "standpoint",
      stem:
        "What is the author's attitude toward the deterrence argument for keeping " +
        "nuclear weapons?",
      options: [
        "He rejects it as foolish and without any force.",
        "He accepts it as a proven law that guarantees peace.",
        "He ignores it in favour of a purely moral case for abolition.",
        "He grants it has real force but insists it rests on a gamble that an unbroken run of luck will continue."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says the deterrence argument 'is not foolish' and that 'there is force in this', so he does not reject it as forceless.",
        "Wrong: the author warns deterrence 'treats an unbroken run of luck as if it were a law of nature', so he denies it is a proven law.",
        "Wrong: the author engages the deterrence argument directly rather than ignoring it; he does not rest on a purely moral case.",
        "Correct: the author concedes the argument's 'force' yet exposes its 'hidden gamble', that deterrence holds only while every actor stays rational and in control, and treats past success as luck not law."
      ],
      workedSolution:
        "Find the held position. The author credits deterrence with genuine force " +
        "but argues it conceals a gamble on continued luck and rational control. " +
        "That qualified, critical-but-fair view is the attitude; the foolish, " +
        "proven-law and ignores-it options each misrepresent it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-627",
      passageId: "psg-history-608",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "That deterrence has prevented war so far does not guarantee it will continue to do so.",
        "Nuclear weapons can never fail to keep the peace.",
        "The leaders of 1914 had nuclear weapons and were deterred by them.",
        "A purely moral argument has already settled the question of abolition."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying the record 'describes a wager that has not yet been lost' and rests on conditions history 'offers no guarantee' will hold, the passage supports that past success does not guarantee future success.",
        "Wrong: the author warns a 'false alarm' or 'accident' could break the peace, so 'can never fail' contradicts the text.",
        "Wrong: the 1914 leaders are contrasted with the nuclear age precisely because they expected a 'survivable conflict'; they had no such weapons.",
        "Wrong: the author treats the question as unsettled, weighing deterrence against its gamble, so no moral argument has 'already settled' it."
      ],
      workedSolution:
        "An inference must follow from the text. The author casts deterrence's " +
        "record as a wager not yet lost, dependent on conditions that may fail. " +
        "The supported conclusion is that past success does not guarantee future " +
        "success; the others contradict the accident risk, the 1914 contrast or " +
        "the unsettled state of the question.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-628",
      passageId: "psg-history-608",
      type: "opinion",
      stem:
        "Which of the following is an evaluative opinion the author asserts rather " +
        "than a neutral report of the deterrence position?",
      options: [
        "A statesman who risks his own capital may think twice before war.",
        "The great powers did not fight one another directly after 1945.",
        "Deterrence is said to work because the cost of war became annihilation.",
        "Those who lean on deterrence should admit they claim only that catastrophe has not happened yet."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that a statesman risking his capital may think twice describes the logic of deterrence, a reported consideration, not an asserted opinion.",
        "Wrong: that the great powers avoided direct war after 1945 is a historical fact reported in the passage, not the author's evaluation.",
        "Wrong: this neutrally restates the deterrence position's reasoning, part of the author's exposition rather than his own verdict.",
        "Correct: the demand that deterrence's defenders 'should admit' they claim only that catastrophe 'has not happened yet' is the author's evaluative judgement, advanced to press his case, not a neutral report."
      ],
      workedSolution:
        "Separate opinion from neutral report. The post-1945 peace, the " +
        "annihilation reasoning and the cautious statesman are descriptions of the " +
        "deterrence case; the charge that its defenders should admit they claim " +
        "only 'not yet' is the author's evaluative verdict, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-philosophy-609 (4 questions) --- */
    {
      id: "q-main-629",
      passageId: "psg-philosophy-609",
      type: "main",
      stem: "Which statement best expresses the central argument of the passage?",
      options: [
        "Drugs are harmless, so their use should not concern anyone.",
        "The state may forbid anything at all that harms the user, including dangerous sports and unhealthy diets.",
        "Because punishing self-harm is questionable and prohibition multiplies the very harm it invokes, treating drug use as a crime tends to worsen both the health problem and the harm.",
        "Addiction is not a genuine problem and needs no response."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says decriminalisation 'is not the claim that drugs are safe, which would be absurd', so he does not call drugs harmless.",
        "Wrong: the author raises the sports-and-diet reach to show the harm-to-user principle proves too much, not to endorse forbidding everything.",
        "Correct: the passage argues that adding punishment to self-harm is a hidden and inconsistent assumption and that prohibition 'multiplies the very harm it invokes', so criminalising use makes 'both the health and the crime worse'.",
        "Wrong: the author concedes addiction 'wrecks lives' and is real, so he does not deny the problem."
      ],
      workedSolution:
        "Identify the defended conclusion. The author questions punishing self-harm, " +
        "shows the principle would reach far beyond drugs, and argues prohibition " +
        "multiplies harm. The reading that criminalising use worsens both health " +
        "and crime states this; the others deny drugs harm, endorse forbidding " +
        "everything, or deny addiction is real.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-630",
      passageId: "psg-philosophy-609",
      type: "structure",
      stem:
        "What is the function of the observation that a consistent harm-to-user " +
        "principle 'would reach far beyond drugs, to dangerous sports, to " +
        "unhealthy diets'?",
      options: [
        "It offers the author's main conclusion about drug policy.",
        "It shows the stated justification proves too much, since we would not jail people for those other activities.",
        "It concedes that dangerous sports should also be criminalised.",
        "It introduces an unrelated topic to change the subject."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the main conclusion concerns whether the law's response reduces or adds harm; this sentence is a step in the reasoning, not the conclusion.",
        "Correct: by noting the principle would also catch sports and diets 'we would never dream of jailing people for', the author shows the stated justification proves too much and so cannot be the real principle.",
        "Wrong: the author's point is that we would not criminalise those activities, not that we should; he uses them to expose inconsistency.",
        "Wrong: sports and diets are not an unrelated digression; they test the consistency of the harm-to-user rationale, which is the topic."
      ],
      workedSolution:
        "Trace the sentence's job. The author extends the harm-to-user principle to " +
        "sports and diets to show it would license jailings we reject, exposing " +
        "the rationale as proving too much. That is a reductio step, not the " +
        "conclusion, a concession or a digression.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-631",
      passageId: "psg-philosophy-609",
      type: "detail",
      stem:
        "According to the passage, what happens to a drug when it is driven " +
        "underground by prohibition?",
      options: [
        "It becomes cheaper and more widely shared.",
        "It becomes more dangerous, of unknown strength and purity.",
        "It disappears from circulation entirely.",
        "It is tested and regulated more strictly than before."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says nothing about the drug becoming cheaper; it stresses danger and unknown purity, and notes an illegal trade grows rich.",
        "Correct: the passage states that 'driven underground, a drug becomes more dangerous, of unknown strength and purity'.",
        "Wrong: far from disappearing, the passage says 'a vast illegal trade grows rich on the prohibition itself'.",
        "Wrong: being underground removes testing and regulation; the passage describes unknown strength and purity, the opposite of stricter regulation."
      ],
      workedSolution:
        "Explicit comprehension. The relevant line says an underground drug becomes " +
        "more dangerous, of unknown strength and purity. The answer reproduces " +
        "that; the cheaper, disappears and better-regulated options are " +
        "contradicted by the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-632",
      passageId: "psg-philosophy-609",
      type: "assume",
      stem:
        "The argument that punishing the drug user answers 'a misfortune with a " +
        "penalty' relies on which unstated assumption?",
      options: [
        "Drug users are more numerous than participants in dangerous sports.",
        "A person who harms only himself has not wronged others in the way the criminal law exists to address.",
        "All misfortunes should be met with state compensation.",
        "Punishment always succeeds in deterring future drug use."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: relative numbers of users and sportspeople are never invoked; the argument turns on the nature of self-harm, not on counts.",
        "Correct: calling punishment of the user a penalty for a 'misfortune' only holds if harming oneself is not the kind of wrong against others that the criminal law addresses; the passage assumes exactly this when it says such a person 'has not obviously wronged anyone' in that way.",
        "Wrong: the argument does not assume all misfortunes deserve compensation; it claims only that punishing self-harm is misplaced, not that the state must pay.",
        "Wrong: the argument does not rest on punishment always deterring; if anything it stresses prohibition's failures, so this is not the needed premise."
      ],
      workedSolution:
        "An assumption is the required missing premise. To treat punishing the user " +
        "as penalising a mere misfortune, the author must assume that purely " +
        "self-regarding harm is not the sort of wrong against others the criminal " +
        "law targets. Negate that and the 'misfortune, not crime' framing fails. " +
        "The other options are irrelevant or unneeded.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-philosophy-610 (3 questions) --- */
    {
      id: "q-standpoint-633",
      passageId: "psg-philosophy-610",
      type: "standpoint",
      stem:
        "What is the author's overall view of the modern zoo's two main defences?",
      options: [
        "Both defences fully justify keeping animals in zoos.",
        "Both defences are outright lies with no truth in them.",
        "Both contain some truth, but for most animals actually kept the conservation and education benefits do not justify the cost of confinement.",
        "Only the education defence has any merit, while conservation is worthless."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author argues the benefits are limited and that for 'most of what zoos do' the cost is not justified, so the defences do not fully succeed.",
        "Wrong: the author says 'both claims contain truth', so he does not call them outright lies.",
        "Correct: the author grants each defence 'contains truth' yet argues conservation describes 'a small fraction' of animals and education is 'shakier still', so for most animals the cost of confinement is not justified.",
        "Wrong: the author treats conservation as 'real' for the genuinely endangered, so he does not call it worthless while sparing education."
      ],
      workedSolution:
        "Find the held position. The author concedes both defences hold some truth " +
        "but shows each covers only a fraction of what zoos do, leaving the cost to " +
        "the animal unjustified for most. That qualified, critical view is the " +
        "attitude; the fully-justify, outright-lies and only-education options each " +
        "distort it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-634",
      passageId: "psg-philosophy-610",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Most animals in zoos are kept for the benefit of visitors rather than for the animals' own protection.",
        "No animal in a zoo is ever endangered.",
        "Zoos release the majority of the animals they breed back into the wild.",
        "Children learn nothing whatsoever from visiting a zoo."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying most kept animals are common species held 'because visitors wish to see them' and that 'the rest are confined for us, not for them', the author implies the majority are kept for visitors rather than for the animals' protection.",
        "Wrong: the author refers to 'the genuinely endangered' that might warrant limited captivity, so some zoo animals are endangered.",
        "Wrong: the passage says 'few captive-bred animals of any kind are ever released', the opposite of releasing the majority.",
        "Wrong: the author allows a child may learn something, though perhaps the wrong lesson; he does not say children learn nothing at all."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines say most animals are common species " +
        "kept because visitors wish to see them, and that the rest are 'confined " +
        "for us, not for them'. The supported but unstated step is that most are " +
        "kept for visitors, not for their own protection. The other options " +
        "contradict the endangered, release or learning points.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-635",
      passageId: "psg-philosophy-610",
      type: "tone",
      stem:
        "The closing remark that the zoo 'has mistaken the animal's interests for " +
        "our own, and called the substitution care' conveys a tone that is:",
      options: [
        "Warmly celebratory of what zoos achieve.",
        "Playfully teasing without any serious point.",
        "Detached and indifferent to the animals' welfare.",
        "Pointedly critical, charging zoos with disguising human interest as concern for the animal."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the remark is an indictment, not a celebration; it accuses zoos of a substitution.",
        "Wrong: the tone is serious and critical, not playful teasing; a real moral charge is being made.",
        "Wrong: the author is plainly concerned for the confined animal, not indifferent to its welfare.",
        "Correct: saying zoos mistake the animal's interests 'for our own' and call the swap 'care' sharply charges them with disguising human interest as concern for the animal, a pointed criticism matching the argument."
      ],
      workedSolution:
        "Tone follows diction. Charging the zoo with mistaking the animal's " +
        "interests for ours and calling the swap 'care' delivers a clear moral " +
        "criticism. That is pointed criticism, not celebration, indifference or " +
        "playfulness.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-611 (4 questions) --- */
    {
      id: "q-main-636",
      passageId: "psg-currentaffairs-611",
      type: "main",
      stem: "Which of the following best captures the central argument of the passage?",
      options: [
        "A fifth less work must always mean a fifth less output for every job.",
        "The four-day week suits every kind of job equally well.",
        "The five-day week is a timeless arrangement that should never be questioned.",
        "Because output does not rise in step with hours, a four-day week can hold output steady for many jobs, though not for all."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the objection the author rebuts, noting trials find output 'holds steady'; it is not his conclusion.",
        "Wrong: the author says the case is 'far weaker' for jobs like a hospital ward or production line, so he denies it suits every job.",
        "Wrong: the author calls the five-day week 'merely a habit' that 'can be questioned', the reverse of timeless and unquestionable.",
        "Correct: the passage argues output does not track hours, that trials find output 'holds steady' under a shorter week, while conceding the case is weaker for some jobs."
      ],
      workedSolution:
        "Identify the defended conclusion. The author denies output tracks hours, " +
        "cites trials showing steady output under a shorter week, and limits the " +
        "claim for jobs tied to fixed hours. The reading that a four-day week can " +
        "hold output steady for many but not all jobs states this; the others " +
        "assert the rebutted objection, overgeneralise, or call the week timeless.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-637",
      passageId: "psg-currentaffairs-611",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Some of the hours worked in a long week add little or nothing to output.",
        "All meetings are equally productive uses of time.",
        "Hospital wards would benefit most from a four-day week.",
        "Workers in the first hour are no more productive than in the eighth."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying a tired worker 'is not producing at the rate of the first' hour and that trials cut 'the least productive' hours, the author implies some long-week hours add little or nothing to output.",
        "Wrong: the passage treats meetings as expanding 'to fill the space available', implying they are often unproductive, not all equally productive.",
        "Wrong: the author says the case is 'far weaker' for a hospital ward, so it would not benefit most.",
        "Wrong: the passage says the eighth-hour worker is not producing at 'the rate of the first', so first-hour work is more productive, contradicting this."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines say the tired worker lags the first " +
        "hour and that the lost hours were 'the least productive'. The supported " +
        "but unstated step is that some long-week hours add little to output. The " +
        "other options contradict the meetings, hospital-ward or first-hour points.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-638",
      passageId: "psg-currentaffairs-611",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Whether a four-day week works depends partly on whether a job is measured by output or by hours logged.",
        "Every workplace should immediately adopt a four-day week.",
        "Output always falls by exactly the proportion that hours are cut.",
        "The way work is currently arranged is the only way it could ever be arranged."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author contrasts jobs 'measured by what is accomplished' with those tied to fixed hours and weakens the case for the latter, supporting that the policy's success depends partly on which kind of job it is.",
        "Wrong: the author limits the claim, saying some jobs cannot 'compress' hours, so universal immediate adoption is not supported.",
        "Wrong: the passage's evidence is that output 'holds steady' despite fewer hours, contradicting a fixed proportional fall.",
        "Wrong: the author calls the current arrangement a questionable 'habit', so he denies it is the only possible arrangement."
      ],
      workedSolution:
        "An inference must follow from the text. The author ties the four-day " +
        "week's success to whether a job is measured by output or by hours, " +
        "weakening it for fixed-hour work. The supported conclusion is that " +
        "success depends partly on the type of job; the others overgeneralise or " +
        "contradict the steady-output and habit points.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-639",
      passageId: "psg-currentaffairs-611",
      type: "vocab",
      stem:
        "As used in the phrase 'the dull error of the exhausted', 'dull' most " +
        "nearly means:",
      options: [
        "Not sharp or shiny in appearance.",
        "Arising from a mind blunted by tiredness rather than alert.",
        "Boring and uninteresting to read about.",
        "Muffled or quiet in sound."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the visual sense of 'not shiny' does not fit; the phrase concerns errors made by tired minds, not appearance.",
        "Correct: paired with 'of the exhausted' and set against work done with 'sharper attention', 'dull' means arising from a mind blunted by tiredness rather than alert.",
        "Wrong: 'dull' here describes the quality of the mistake's source, not whether the topic is boring to read about.",
        "Wrong: the sound sense of 'muffled' does not fit; the passage is about blunted attention, not noise."
      ],
      workedSolution:
        "Read the word in context: the 'dull error of the exhausted', opposed to " +
        "'sharper attention'. 'Dull' therefore means blunted by tiredness rather " +
        "than alert. The not-shiny, boring-to-read and muffled-sound senses do not " +
        "fit.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-612 (3 questions) --- */
    {
      id: "q-standpoint-640",
      passageId: "psg-currentaffairs-612",
      type: "standpoint",
      stem:
        "What is the author's view of when a university may decline to host a " +
        "speaker?",
      options: [
        "A university must host anyone who wishes to speak, whatever they say.",
        "A university may bar a speaker simply because the speaker's views are offensive or unpopular.",
        "A university should invite only speakers whose conclusions are comfortable and uncontroversial.",
        "Declining is defensible against incitement or abuse that is no longer argument, but not against an idea merely because it is detested."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says a university 'is not a public square obliged to host anyone', so the must-host claim misstates his view.",
        "Wrong: the author insists the choice 'cannot be made on the ground that an idea is merely offensive or unpopular', rejecting this.",
        "Wrong: the author warns that admitting 'only the inoffensive' would betray the university's purpose, so he opposes inviting only comfortable speakers.",
        "Correct: the author draws the line between 'argument, however provocative' and 'the incitement or abuse that is no longer argument', allowing a university to decline the latter but not to bar a merely detested idea."
      ],
      workedSolution:
        "Find the held position. The author places the defensible line between " +
        "provocative argument, which must be protected, and incitement or abuse, " +
        "which a university may decline. That distinction is the attitude; the " +
        "must-host, bar-the-offensive and only-the-inoffensive options each fall on " +
        "the wrong side of it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-641",
      passageId: "psg-currentaffairs-612",
      type: "opinion",
      stem:
        "Which of the following is an evaluative opinion the author asserts rather " +
        "than a neutral statement of the dispute?",
      options: [
        "To bar a thinker because his conclusions are detested is to abandon the university's work.",
        "Protesters say a campus need not platform views that wound its members.",
        "The speaker's defenders say a university exists to air uncomfortable ideas.",
        "Students sometimes demand that a controversial speaker be disinvited."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the judgement that barring a thinker for detested conclusions 'is to abandon the university's work' is the author's own evaluative verdict, advanced to support his line, not a neutral report of either side.",
        "Wrong: this reports what the protesters say, a neutral description of one side's position, not the author's verdict.",
        "Wrong: this reports the defenders' position, again a neutral statement of the dispute rather than the author's evaluation.",
        "Wrong: that students sometimes demand a disinvitation is a factual description of the situation, not an asserted opinion."
      ],
      workedSolution:
        "Separate opinion from neutral report. The protesters' claim, the " +
        "defenders' claim and the fact of disinvitation demands all describe the " +
        "dispute; the verdict that barring a detested thinker abandons the " +
        "university's work is the author's own evaluation, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-642",
      passageId: "psg-currentaffairs-612",
      type: "vocab",
      stem:
        "As used in the phrase 'a speaker who traffics not in reasons but in " +
        "intimidation', 'traffics' most nearly means:",
      options: [
        "Controls the flow of vehicles on a road.",
        "Deals in or trades habitually in something.",
        "Travels frequently between distant places.",
        "Obeys the signals at a junction."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the road-traffic sense does not fit; the phrase concerns what a speaker deals in, not vehicles.",
        "Correct: contrasted with dealing 'in reasons', 'traffics... in intimidation' means deals or trades habitually in it, describing what the speaker offers instead of argument.",
        "Wrong: 'traffics' here is not about travelling between places; it is about what the speaker trades in.",
        "Wrong: obeying junction signals is unrelated; the word describes habitual dealing in intimidation, not traffic rules."
      ],
      workedSolution:
        "Read the word in context: a speaker who 'traffics not in reasons but in " +
        "intimidation'. Set against dealing in reasons, 'traffics' means deals or " +
        "trades habitually in something. The vehicle-flow, travel and obey-signals " +
        "senses do not fit.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * ESSAY PROMPTS — 3 illustrative, theme-tagged, ids 1601-1603.
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-1601",
      theme: "media-tech-environment",
      text:
        "Should manufacturers be required by law to make their products easy to " +
        "repair?",
      source: "illustrative"
    },
    {
      id: "prompt-1602",
      theme: "civil-liberties",
      text:
        "“The state has no business punishing people for harming only " +
        "themselves.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-1603",
      theme: "education-society",
      text:
        "When, if ever, is a university entitled to refuse a platform to a " +
        "controversial speaker?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * MOCK — mock-06. Full paper: 12 passages, 42 questions (six 4-Q + six
   * 3-Q passages), 3 prompts. sample:false, so the exact-42 split is checked.
   * ====================================================================== */
  DATA.mocks.push({
    id: "mock-06",
    title: "Mock Paper 6",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-literature-601",
        "psg-literature-602",
        "psg-politics-603",
        "psg-politics-604",
        "psg-science-605",
        "psg-science-606",
        "psg-history-607",
        "psg-history-608",
        "psg-philosophy-609",
        "psg-philosophy-610",
        "psg-currentaffairs-611",
        "psg-currentaffairs-612"
      ],
      questionIds: [
        "q-main-601",
        "q-structure-602",
        "q-vocab-603",
        "q-inference-604",
        "q-standpoint-605",
        "q-detail-606",
        "q-assume-607",
        "q-main-608",
        "q-implied-609",
        "q-factinf-610",
        "q-tone-611",
        "q-standpoint-612",
        "q-detail-613",
        "q-assume-614",
        "q-main-615",
        "q-detail-616",
        "q-inference-617",
        "q-tone-618",
        "q-standpoint-619",
        "q-implied-620",
        "q-vocab-621",
        "q-main-622",
        "q-factinf-623",
        "q-vocab-624",
        "q-assume-625",
        "q-standpoint-626",
        "q-inference-627",
        "q-opinion-628",
        "q-main-629",
        "q-structure-630",
        "q-detail-631",
        "q-assume-632",
        "q-standpoint-633",
        "q-implied-634",
        "q-tone-635",
        "q-main-636",
        "q-implied-637",
        "q-inference-638",
        "q-vocab-639",
        "q-standpoint-640",
        "q-opinion-641",
        "q-vocab-642"
      ]
    },
    sectionB: {
      promptIds: ["prompt-1601", "prompt-1602", "prompt-1603"]
    }
  });
})(typeof window !== "undefined" ? window : this);
