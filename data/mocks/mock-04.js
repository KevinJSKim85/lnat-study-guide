/*
 * mock-04.js — full LNAT Section A mock exam (Mock Paper 4).
 *
 * Self-contained content file. Assigns into the buckets that loader.js creates
 * on window.LNAT_DATA (passages, questions, prompts, mocks). It must load AFTER
 * loader.js. All content is English-only and original.
 *
 * Calibration: passages are argumentative (clear thesis + supporting reasoning),
 * answerable from the passage ALONE with no outside knowledge; every MCQ has
 * exactly 4 options with a "wrong but almost right" distractor set. Matches the
 * frozen contract in data/SCHEMA.md.
 *
 * ID range 400-499. References ONLY its own IDs:
 *   - 12 passages: psg-<genre>-401 .. psg-<genre>-412 (2 per genre, 6 genres)
 *   - 42 questions: q-<type>-401 .. q-<type>-442 (NUMBER unique per question;
 *     the type token reflects the sub-type)
 *   - 3 essay prompts: prompt-401 .. prompt-403 (illustrative)
 *   - 1 mock: mock-04 (six 3-Q + six 4-Q passages = 42)
 *
 * Topics (fresh, distinct across the mock set):
 *   literature   : who controls the literary canon; translation & fidelity
 *   politics     : proportional representation vs first-past-the-post; sortition
 *   science      : nuclear vs renewables for decarbonisation; the precautionary principle
 *   history      : oral history & the reliability of memory; the myth of inevitable progress
 *   philosophy   : paternalism vs autonomy; the value of privacy as autonomy
 *   currentaffairs: the gig economy & worker autonomy; the attention economy
 *
 * Type distribution (>=3 each): main4 standpoint4 structure4 detail4 implied4
 * inference4 factinf4 assume4 vocab4 opinion3 tone3 = 42.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-04.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ====================================================================== *
   * PASSAGES — 12, two per genre across the 6 genres.
   *   literature   : 401, 402
   *   politics     : 403, 404
   *   science      : 405, 406
   *   history      : 407, 408
   *   philosophy   : 409, 410
   *   currentaffairs: 411, 412
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-literature-401",
      genre: "literature",
      title: "Who Keeps the Gate of the Canon",
      body:
        "We speak of the literary canon as though it were a fixed list handed down " +
        "from some impartial authority, a register of the books that simply are great. " +
        "But no such authority exists. The canon is assembled, decade by decade, out " +
        "of the choices of publishers who decide what to keep in print, examiners who " +
        "decide what students must read, critics who decide what is worth reviewing, " +
        "and prize juries who decide what to crown. Each choice looks like a verdict on " +
        "merit, and is sincerely meant as one; but merit is not measured in a vacuum. A " +
        "book that no publisher reprints quietly disappears, and a book that disappears " +
        "cannot be admired, taught, or imitated, however fine it was. Survival, in " +
        "short, is partly a precondition of being judged great rather than purely a " +
        "consequence of it. Defenders of the canon reply that genuine quality tends to " +
        "force its way back into view, that neglected masterpieces are eventually " +
        "rediscovered, and that the list therefore corrects itself over time. There is " +
        "something to this, and the occasional triumphant rediscovery is real. But the " +
        "argument proves less than it claims, for we only ever hear of the works that " +
        "were recovered; the ones that vanished without trace leave no advocates to " +
        "plead their case, and their disappearance is mistaken for an absence of worth. To " +
        "notice that the canon is made rather than found is not to sneer at it or to " +
        "pretend all books are equal. It is to insist that the gate has keepers, that " +
        "their choices shape what later ages are even able to value, and that a list " +
        "which presents itself as the simple record of greatness is quietly also a " +
        "record of who held the keys.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-402",
      genre: "literature",
      title: "The Translator's Impossible Loyalty",
      body:
        "A translation is often praised for being faithful, as though fidelity were a " +
        "single, measurable virtue that a careful enough translator could simply " +
        "achieve. The reality is that the translator is asked to be loyal to two " +
        "masters at once, and the two are forever pulling in opposite directions. " +
        "Loyalty to the literal sense of the original demands that every word be " +
        "rendered as exactly as the target language allows; loyalty to the work as a " +
        "living thing demands that the translation move, sound, and breathe as " +
        "naturally in its new language as the original did in its own. A pun, a " +
        "proverb, or a line of verse exposes the conflict at once. Reproduce the " +
        "literal words and the joke falls flat, the rhythm collapses, the music is " +
        "lost; recreate the effect and you must depart from the words that produced it. " +
        "There is no neutral ground from which both loyalties can be honoured in full, " +
        "and the translator who imagines otherwise simply hides the choice they have " +
        "already made. Some conclude from this that all translation is a kind of " +
        "failure, a pale copy that betrays whatever it touches. That verdict is too " +
        "harsh, and it rests on the very fantasy it claims to puncture: that a perfect, " +
        "loss-free transfer was ever on offer. A translation should be judged not " +
        "against an impossible mirror but against the only real alternative, which for " +
        "most readers is no access to the work at all. Seen so, the translator is not a " +
        "traitor to the original but its most demanding reader, forced to decide, line " +
        "by line, which of its irreconcilable claims matters most here, and to answer in " +
        "full view of everyone who can compare the two.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-403",
      genre: "politics",
      title: "Counting Votes, Counting What",
      body:
        "Defenders of the first-past-the-post electoral system, in which the candidate " +
        "with the most votes in each district wins the seat, often present it as the " +
        "plain and honest way to count a nation's wishes. Whoever gets the most votes " +
        "wins; what could be fairer than that? Yet the apparent simplicity conceals a " +
        "deep arbitrariness. A party that wins forty per cent of the vote spread " +
        "efficiently across many districts may take a commanding majority of seats, " +
        "while a party with twenty-five per cent of the vote piled up in a few strongholds " +
        "wins almost nothing. The same ballots, counted under a proportional system that " +
        "awards seats in line with each party's share of the national vote, would " +
        "produce a strikingly different parliament. Which result expresses the true will " +
        "of the people? The honest answer is that there is no single true will waiting " +
        "to be read off; the rule we adopt does not merely measure preferences but helps " +
        "constitute the outcome it claims to discover. Defenders of first-past-the-post " +
        "are right that it tends to deliver decisive single-party governments and a " +
        "clear local representative for every district, and these are genuine goods. But " +
        "they cannot also claim that it neutrally mirrors what voters want, for a system " +
        "that can hand a minority of votes a majority of power is doing something more " +
        "active than mirroring. Every voting rule is a choice about which features of a " +
        "scattered public to honour and which to suppress, and to call any one of them " +
        "simply fair is to mistake a contestable decision for a fact of arithmetic.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-404",
      genre: "politics",
      title: "Government by Lottery",
      body:
        "The idea of choosing public decision-makers by lot, rather than by election, " +
        "strikes most people today as faintly absurd, a relic of ancient Athens with no " +
        "place in a modern state. Yet the proposal deserves a more serious hearing than " +
        "instinct grants it. The case for a citizens' assembly chosen by lottery rests " +
        "on a simple observation about elections: they systematically favour a narrow " +
        "type. To win an election one must be willing to campaign, to raise money, to " +
        "court donors, and to seek power in the first place, and these traits are not " +
        "evenly distributed across the population. The resulting chamber is wealthier, " +
        "more confident, and more ambitious than the people it represents, and it is " +
        "perpetually preoccupied with the next election. A body drawn by lot from the " +
        "whole citizenry would look like the country in a way no elected house ever " +
        "does, and its members, facing no re-election, could weigh the long term without " +
        "fear of the next campaign. The obvious objection is competence: surely random " +
        "citizens lack the expertise to govern. But this misreads what such assemblies " +
        "are asked to do. They do not draft the fine print; they deliberate on broad " +
        "questions of value after hearing expert testimony, much as a jury reaches a " +
        "verdict on evidence it could not itself have gathered. We already trust " +
        "ordinary people, chosen by lot, to decide whether a fellow citizen goes to " +
        "prison. To declare them fit to weigh a person's liberty but unfit to weigh a " +
        "public question is not an argument but a prejudice, and it is the prejudice, " +
        "not the proposal, that ought to be on trial.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-405",
      genre: "science",
      title: "The Two Roads to a Carbon-Free Grid",
      body:
        "In the urgent search for a way to power our societies without wrecking the " +
        "climate, two camps have hardened into something close to tribes. One insists " +
        "that nuclear power, with its dense and steady output, is the only realistic " +
        "route to deep decarbonisation; the other puts its faith entirely in wind, " +
        "solar, and the falling cost of batteries. Each side marshals real evidence, and " +
        "each quietly leans on a weakness of the other. The nuclear camp is right that " +
        "the wind does not always blow and the sun does not always shine, so that a grid " +
        "built only on renewables must somehow store vast amounts of energy or keep " +
        "fossil-fuelled plants idling for the windless, sunless days. The renewables " +
        "camp is right in turn that new nuclear plants are slow to build and " +
        "extravagantly expensive, and that the price of solar panels and batteries has " +
        "fallen faster than almost anyone predicted. What is striking is how rarely " +
        "either side concedes that both observations can be true at once. The honest " +
        "position is not that one technology must win and the other be banished, but " +
        "that the question is wrongly posed. The real variable is not which single " +
        "source is best in the abstract but what each costs, and how fast it can be " +
        "deployed, in a particular country with its particular geography, grid, and " +
        "deadline. A sun-soaked nation with weak winters and a slow nuclear industry " +
        "faces a different arithmetic from a cloudy, windless one that already runs " +
        "reactors safely. Treating a local engineering trade-off as a clash of " +
        "first principles is not scientific rigour. It is the substitution of loyalty " +
        "for arithmetic, and it slows the very transition both camps claim to want.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-406",
      genre: "science",
      title: "The Hidden Cost of Caution",
      body:
        "When a new technology carries risks we cannot yet measure, a tempting rule " +
        "presents itself: do not proceed until it has been proved safe. This is the " +
        "precautionary principle, and its appeal is plain. Better, surely, to hold back " +
        "than to unleash some irreversible harm we failed to foresee. Yet the principle, " +
        "stated so baldly, contains a flaw its champions seldom face. To refuse a new " +
        "technology is not to choose safety over risk; it is to choose one set of risks " +
        "over another. The drug withheld until every doubt is resolved is a drug denied " +
        "to the patients who would have been cured while the testing dragged on, and " +
        "their suffering is just as real as the side-effects the caution was meant to " +
        "prevent. The harms of action are easy to see and easy to blame, for they have " +
        "a clear cause and a visible victim; the harms of inaction are diffuse, " +
        "statistical, and authorless, and so they slip from view. A principle that " +
        "weighs only the first kind of harm and ignores the second is not cautious but " +
        "one-eyed. None of this is an argument for recklessness, nor a claim that every " +
        "innovation should be waved through. It is an argument that caution itself has a " +
        "price, paid quietly by the people the withheld benefit would have reached, and " +
        "that a rule which counts only the dangers of doing while ignoring the dangers " +
        "of waiting has not escaped the gamble. It has merely chosen to bet on one side " +
        "of it while pretending not to bet at all.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-407",
      genre: "history",
      title: "The Witness and the Document",
      body:
        "When historians began, in earnest, to gather the spoken testimony of ordinary " +
        "people, the recordings of survivors and witnesses who left no written trace, " +
        "some colleagues objected that such evidence was hopelessly unreliable. Memory, " +
        "they pointed out, decays and reshapes itself; a witness recalling events of " +
        "fifty years before will misdate them, conflate them, and unknowingly borrow " +
        "details from later books and films. All of this is true, and the careful " +
        "practitioner of oral history does not deny it. But the objection assumes that " +
        "the written record against which oral testimony is found wanting is itself a " +
        "clear and faithful mirror, and this is precisely what cannot be granted. A " +
        "government memorandum, a census, or a company ledger is no innocent " +
        "photograph of the past; it was written by someone, for a purpose, recording " +
        "what that purpose required and silently omitting the rest. The very people " +
        "whose lives leave the faintest paper trail, the poor, the colonised, the " +
        "unlettered, are exactly those whose memories oral history can recover. To " +
        "discard their testimony because memory is fallible, while trusting documents " +
        "whose own distortions are merely less obvious, is not the rigour it imagines " +
        "itself to be. The sound position is neither to treat a remembered account as " +
        "the unvarnished truth nor to dismiss it as mere anecdote, but to read it as one " +
        "reads any source: critically, aware of how it was produced and what pressures " +
        "shaped it. A memory and a memorandum are both made things, and the historian's " +
        "task is not to crown one of them as honest but to interrogate the gaps and " +
        "the biases of each.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-408",
      genre: "history",
      title: "The Story That Always Ends Well",
      body:
        "There is a habit of mind, deeply rooted in how we narrate the past, of " +
        "treating history as a long climb out of darkness toward the present. Each age " +
        "is understood as an improvement on the one before, its cruelties explained away " +
        "as the growing pains of a species steadily perfecting itself. This is the myth " +
        "of inevitable progress, and it is seductive precisely because some things have, " +
        "by many measures, improved. But the comfort it offers is bought at the price of " +
        "honesty. To read history as a guaranteed ascent is to assume the very thing that " +
        "ought to be demonstrated, and to flatten a record full of reversals into a " +
        "single rising line. Empires that thought themselves the summit of civilisation " +
        "collapsed; hard-won liberties were granted and then revoked; knowledge " +
        "painstakingly accumulated was lost for centuries. The progress that did occur " +
        "was not the unfolding of a law but the contingent result of particular " +
        "struggles, any of which might have gone the other way and some of which were " +
        "later undone. The deeper damage of the myth is not merely that it is " +
        "inaccurate but that it breeds complacency. If improvement is the natural drift " +
        "of things, then the gains we enjoy require no defending, and the injustices " +
        "that remain will dissolve of their own accord in time. The honest reading of " +
        "the past offers no such reassurance. It shows advance as possible but never " +
        "promised, always the achievement of effort and always vulnerable to being " +
        "rolled back, and it hands the present not a guarantee but a responsibility.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-409",
      genre: "philosophy",
      title: "For Your Own Good",
      body:
        "The state, and sometimes our friends, will occasionally stop us from harming " +
        "ourselves: compelling the motorcyclist to wear a helmet, the smoker to read a " +
        "warning, the saver to contribute to a pension. Such interference is called " +
        "paternalism, and it sits uneasily with a principle many of us hold dear, that a " +
        "competent adult should be free to run their own life, mistakes included. The " +
        "hard libertarian view rejects all such meddling outright: provided I harm no " +
        "one else, my choices are mine, and a third party who overrides them treats me " +
        "as a child rather than an equal. There is real force in this, for autonomy " +
        "means little if it evaporates the moment my judgement diverges from the state's. " +
        "Yet the absolute version proves too much. It assumes that the self who chooses " +
        "is always single, informed, and consistent, when in truth our choices are often " +
        "made under pressure, in ignorance, or by a present self at the expense of the " +
        "future one who must live with the result. A rule requiring a cooling-off period " +
        "before an irreversible decision does not insult my autonomy; it protects the " +
        "considered self against a momentary impulse, and may be something I would " +
        "endorse in a calmer hour. The defensible line, then, is not between interference " +
        "and none but between two kinds of interference: that which substitutes the " +
        "state's values for my own, which an adult may rightly resent, and that which " +
        "helps me act on values I already hold but am liable, in the moment, to betray. " +
        "To honour autonomy is not to pretend the chooser is never divided. It is to take " +
        "seriously the whole person across time, and that is something a flat refusal of " +
        "all paternalism cannot do.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-410",
      genre: "philosophy",
      title: "Why Privacy Is More Than Secrecy",
      body:
        "A familiar challenge to privacy runs as follows: if you have done nothing " +
        "wrong, you have nothing to hide, and so nothing to fear from being watched. The " +
        "argument has a brisk, common-sense appeal, but it rests on a cramped picture of " +
        "what privacy is for. It treats privacy as a shield for guilty secrets, so that " +
        "wanting any of it looks faintly suspicious. The deeper value of privacy has " +
        "little to do with concealing wrongdoing. It is a precondition of autonomy, of " +
        "the capacity to shape a self on one's own terms. A person who knows they are " +
        "observed at every moment does not behave as they otherwise would; they perform, " +
        "anticipating the watcher's judgement, smoothing away whatever might invite " +
        "disapproval. The half-formed thought is never voiced, the unorthodox book never " +
        "opened, the eccentric experiment never tried, because each might be recorded and " +
        "held against them. What is lost under constant observation is not merely a few " +
        "embarrassing secrets but the room to experiment, to err, and to become someone " +
        "other than the person the watcher already expects. This is why the 'nothing to " +
        "hide' reply misses the point so completely. The harm of surveillance is not " +
        "confined to those with something to conceal; it falls on everyone, by narrowing " +
        "the space in which a free character can form. Privacy, properly understood, is " +
        "not the secrecy of the guilty but the breathing room of the free, and a society " +
        "that strips it away in the name of having nothing to hide may find it has " +
        "quietly removed the conditions under which independent people are made.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-411",
      genre: "currentaffairs",
      title: "The Freedom of the Gig Worker",
      body:
        "The platforms that dispatch drivers, couriers, and odd-jobbers through an app " +
        "make a proud boast: they have liberated work. Be your own boss, the slogan " +
        "runs; log on when you like, log off when you please, answer to no foreman. " +
        "There is a sliver of truth in this, and many who do such work value the " +
        "flexibility genuinely. But the freedom on offer is narrower than the " +
        "advertisement suggests, and the gap matters. A worker is told they may choose " +
        "their hours, yet an algorithm they cannot see assigns the jobs, sets the pay, " +
        "and ranks them by a score they cannot contest; decline too many tasks and the " +
        "flow of work quietly dries up. This is freedom of a peculiar kind: the freedom " +
        "to accept the platform's terms at a time of one's choosing, while the terms " +
        "themselves are dictated by a party one cannot negotiate with or even address. " +
        "Defenders answer that nobody is forced to take the work, and that the " +
        "alternative for many would be no work at all. The point is fair as far as it " +
        "goes, but it confuses the absence of a chain with the presence of real choice. " +
        "A person with few options who accepts hard terms has not thereby endorsed them " +
        "as free and fair; they have submitted to them. To call this arrangement " +
        "self-employment, with all the independence that word implies, is to borrow the " +
        "dignity of genuine autonomy to dress up its opposite. The honest description is " +
        "neither slavery nor liberation but a new form of subordination, one that has " +
        "kept the obedience of the old employment while shedding the security that once " +
        "came with it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-412",
      genre: "currentaffairs",
      title: "The Market for Your Eyes",
      body:
        "We are accustomed to thinking of the great online services as free, since no " +
        "money changes hands when we use them. But nothing of the kind is true. The " +
        "currency is simply not money; it is attention, and attention, unlike money, is " +
        "strictly finite. Each of us has only so many waking hours, and every minute " +
        "captured by one demand is a minute unavailable to anything else. This is the " +
        "logic of the attention economy, and once it is grasped, the design of the " +
        "services we use looks very different. A feed that never ends, a video that " +
        "plays the next automatically, a notification engineered to pull the eye back: " +
        "these are not conveniences thoughtfully provided for our benefit. They are " +
        "instruments for extracting the one resource the business model requires, and " +
        "they are refined relentlessly to extract more of it. The crucial point is that " +
        "the interests of the service and the interests of the user have come apart. A " +
        "shopkeeper prospers when the customer leaves satisfied; an attention merchant " +
        "prospers only so long as the customer does not leave at all. The very signal " +
        "that the user has had enough, the impulse to put the device down and attend to " +
        "life, is precisely what the design is built to override. To treat such services " +
        "as a neutral utility, like a tap that supplies water on request, is to " +
        "misunderstand them at the root. They are not in the business of serving our " +
        "attention back to us; they are in the business of selling it, and a customer " +
        "who is in fact the product can expect to be treated accordingly.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — 42, unique numbers 401-442 in passage order.
   * Per-passage counts (six 3-Q + six 4-Q = 42):
   *   401:4 402:3 403:4 404:3 405:4 406:3 407:4 408:3 409:4 410:3 411:4 412:3
   * ====================================================================== */
  DATA.questions.push(
    /* ---- psg-literature-401 (4 Q: 401-404) ---------------------------- */
    {
      id: "q-main-401",
      passageId: "psg-literature-401",
      type: "main",
      stem: "Which of the following best expresses the main point of the passage?",
      options: [
        "The literary canon is a fixed list handed down by an impartial authority that records what is simply great.",
        "All books are of roughly equal worth, so the very idea of a canon should be abandoned.",
        "The canon is constructed by the choices of gatekeepers, and those choices shape what later ages are able to value.",
        "Neglected masterpieces are always eventually rediscovered, so the canon reliably corrects itself."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage opens by naming this view only to reject it, insisting 'no such authority exists' and that the canon 'is assembled'.",
        "Wrong: the author explicitly denies this, saying noticing the canon is made is 'not to pretend all books are equal'.",
        "Correct: the passage argues the canon is built from the choices of publishers, examiners, critics, and juries, and that 'their choices shape what later ages are even able to value'.",
        "Wrong: this is a view the author qualifies, noting we only hear of recovered works while the vanished 'leave no advocates', so self-correction is overstated.",
      ],
      workedSolution:
        "Track the thesis. The author rejects the canon-as-found picture, argues it is assembled by gatekeepers, and stresses that those choices condition what can later be valued. The statement that the canon is constructed by gatekeepers whose choices shape later valuation captures that whole claim; the fixed-list and always-rediscovered statements are views the author rejects or qualifies, and the all-books-equal statement is expressly disowned.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-402",
      passageId: "psg-literature-401",
      type: "vocab",
      stem: "As used in the passage, the description of the canon as having 'keepers' who hold 'the keys' most nearly conveys that:",
      options: [
        "critics are dishonest about their real reasons for praising books.",
        "the canon is physically stored in a locked vault that few may enter.",
        "literary greatness is permanently secured once a work is admitted.",
        "particular people control which works are admitted to lasting attention and which are shut out."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage stresses the choices are 'sincerely meant' as verdicts on merit, so it does not accuse the gatekeepers of dishonesty.",
        "Wrong: this takes the gate and keys literally; the passage is describing control over reputation, not a physical building.",
        "Wrong: the image is about who controls entry, not about permanence; nothing in the metaphor says admission is secure forever.",
        "Correct: the 'gate', 'keepers', and 'keys' are a metaphor for the gatekeeping power of those who decide what stays in print, is taught, and is reviewed; they control admission to lasting attention.",
      ],
      workedSolution:
        "Read the image in context. 'Gate', 'keepers', and 'keys' follow a passage about publishers, examiners, critics, and juries deciding what survives. The metaphor means certain people control admission to lasting attention. The option stating that particular people control which works are admitted or shut out matches; the others read the image literally, add permanence, or import an accusation of dishonesty the text denies.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-403",
      passageId: "psg-literature-401",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "every book currently out of print is a neglected masterpiece.",
        "the rediscoveries we celebrate give a misleadingly reassuring picture, because works that vanished entirely cannot make their case.",
        "publishers deliberately suppress books they know to be great.",
        "prize juries are better judges of merit than ordinary readers."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage never suggests everything out of print is a masterpiece; it says some lost works had worth, not that all did.",
        "Correct: by noting that 'we only ever hear of the works that were recovered' while the vanished 'leave no advocates', the passage implies our sample of rediscoveries flatters the self-correction story.",
        "Wrong: the passage treats the gatekeepers' verdicts as sincere, not as deliberate suppression of known greatness.",
        "Wrong: the passage draws no comparison ranking juries above ordinary readers; that claim is absent.",
      ],
      workedSolution:
        "Find the supported-but-unstated step. The text says we hear only of recovered works and that the truly lost leave no advocates. The unstated implication is that celebrated rediscoveries skew the picture toward reassurance, which is the second option. The others are unsupported, contradicted by the 'sincerely meant' line, or simply absent.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-404",
      passageId: "psg-literature-401",
      type: "structure",
      stem: "What is the function of the sentence beginning 'Defenders of the canon reply that genuine quality tends to force its way back into view...'?",
      options: [
        "It states the author's own final conclusion about the canon.",
        "It offers a concrete example of a rediscovered book.",
        "It abandons the passage's main claim in favour of the opposing view.",
        "It introduces a counter-argument that the author then partly grants but ultimately limits."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is not the author's conclusion; the author's view is that the canon is made and its gate has keepers, stated later.",
        "Wrong: it names no specific book; it reports a general defence of the canon, not an illustration.",
        "Wrong: the author does not switch sides; the following sentences cut the objection down rather than adopt it.",
        "Correct: the sentence voices the defenders' reply, which the author concedes has 'something to' it before answering that it 'proves less than it claims'.",
      ],
      workedSolution:
        "Map the sentence's role. It presents the defenders' reply, which the author then partly accepts ('something to this') and then limits ('proves less than it claims'). That is the concede-then-limit move on a counter-argument — the option reading 'It introduces a counter-argument that the author then partly grants but ultimately limits' — not the author's conclusion, an example, or a surrender.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-literature-402 (3 Q: 405-407) ---------------------------- */
    {
      id: "q-standpoint-405",
      passageId: "psg-literature-402",
      type: "standpoint",
      stem: "What is the author's attitude toward the view that all translation is 'a kind of failure'?",
      options: [
        "Wholehearted agreement, since no translation can be perfectly faithful.",
        "Indifference, treating the question as a matter of taste.",
        "Uncertainty, presenting the view without reaching any judgement on it.",
        "Disagreement, because the verdict relies on the very fantasy of a loss-free transfer that it claims to expose."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls this verdict 'too harsh', the opposite of wholehearted agreement.",
        "Wrong: the author takes a clear evaluative stand, so indifference misreads the passage.",
        "Wrong: the author reaches a firm view, judging the verdict too harsh and reframing the translator as the work's most demanding reader.",
        "Correct: the author rejects the 'failure' verdict because it 'rests on the very fantasy it claims to puncture: that a perfect, loss-free transfer was ever on offer'.",
      ],
      workedSolution:
        "Separate the view reported from the view held. The author states the 'all translation is failure' verdict, then rejects it as too harsh and self-undermining. The attitude is disagreement on the ground that the verdict assumes an impossible perfect transfer — the option reading 'Disagreement, because the verdict relies on the very fantasy of a loss-free transfer that it claims to expose'.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-406",
      passageId: "psg-literature-402",
      type: "assume",
      stem: "The author's argument that the translator should be judged 'against the only real alternative' depends on which unstated assumption?",
      options: [
        "Most readers cannot read the original work in its source language.",
        "Every translator consciously intends to betray the original text.",
        "Literal accuracy is always more important than natural style.",
        "A flawless, loss-free translation is in principle achievable with enough care."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the claim that the real alternative is 'no access to the work at all' only holds if readers generally cannot read the original; if they could, the alternative would be reading the original, not nothing.",
        "Wrong: the author denies conscious betrayal, casting the translator as a demanding reader rather than a traitor, so this is not a premise of the argument.",
        "Wrong: the passage treats the two loyalties as irreconcilable without ranking literal accuracy above style as a general rule.",
        "Wrong: the author explicitly denies that a loss-free transfer was ever on offer, so this cannot be an assumption the argument relies on.",
      ],
      workedSolution:
        "Apply the negation test. If most readers could read the original, then the alternative to a translation would be the original itself, not 'no access', and the author's comparison would collapse. So the argument assumes most readers cannot read the source language, the first option. The others are denied by the text or unnecessary.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-407",
      passageId: "psg-literature-402",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "A translation that changes any word of the original has betrayed it.",
        "Poetry should never be translated at all.",
        "A translation is worthwhile only if it loses nothing of the original.",
        "Two equally skilled translators of the same poem might justifiably produce noticeably different versions."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author treats some departure from the words as sometimes necessary to preserve effect, so changing words is not automatically betrayal.",
        "Wrong: the passage values translation as giving access otherwise unavailable; a blanket ban on translating poetry contradicts that.",
        "Wrong: the author calls the loss-free standard a 'fantasy' and an 'impossible mirror', so worth cannot require losing nothing.",
        "Correct: since each loyalty pulls a different way and the translator must 'decide, line by line, which of its irreconcilable claims matters most', two skilled translators could reasonably resolve those choices differently.",
      ],
      workedSolution:
        "An inference must follow from the text. The author says the translator must repeatedly choose between irreconcilable loyalties. It follows that two skilled translators might choose differently and both be defensible — the option reading 'Two equally skilled translators of the same poem might justifiably produce noticeably different versions'. The others contradict the passage's rejection of the loss-free ideal or its valuing of access.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-politics-403 (4 Q: 408-411) ------------------------------ */
    {
      id: "q-main-408",
      passageId: "psg-politics-403",
      type: "main",
      stem: "Which statement best captures the central argument of the passage?",
      options: [
        "First-past-the-post is the fairest electoral system because whoever gets the most votes wins.",
        "Proportional representation is objectively the only just way to allocate seats.",
        "No electoral system can ever produce a stable government.",
        "Every voting rule actively shapes the result it reports, so no rule simply and neutrally mirrors the public will."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author treats this as the claim to be punctured, arguing the system's simplicity 'conceals a deep arbitrariness'.",
        "Wrong: the author does not crown proportional representation as objectively just; it is used to show results depend on the rule chosen.",
        "Wrong: the passage actually credits first-past-the-post with delivering 'decisive single-party governments', so it does not deny stability is achievable.",
        "Correct: the thesis is that a voting rule 'does not merely measure preferences but helps constitute the outcome', so calling any rule simply fair mistakes a choice for arithmetic.",
      ],
      workedSolution:
        "Identify the load-bearing claim amid the concessions. The author grants first-past-the-post real goods but argues every rule helps constitute, not merely mirror, the outcome. The statement that every rule shapes its result so none neutrally mirrors the public will captures that; the first two options take sides the author refuses, and the stability option contradicts an explicit concession.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-409",
      passageId: "psg-politics-403",
      type: "detail",
      stem: "According to the passage, what genuine goods do defenders of first-past-the-post correctly claim for it?",
      options: [
        "Exact proportionality between vote share and seat share.",
        "The elimination of all tactical voting.",
        "Guaranteed coalition governments that represent every party.",
        "Decisive single-party governments and a clear local representative for every district."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: proportionality is the feature the author credits to the rival system, not to first-past-the-post.",
        "Wrong: the passage never mentions tactical voting among the system's claimed goods.",
        "Wrong: coalition governments are associated with proportional systems; the author credits first-past-the-post with the opposite, single-party rule.",
        "Correct: the passage says defenders 'are right that it tends to deliver decisive single-party governments and a clear local representative for every district'.",
      ],
      workedSolution:
        "Locate the explicit statement. The relevant sentence credits first-past-the-post with 'decisive single-party governments and a clear local representative for every district'. That is the fourth option; the others name features the passage assigns elsewhere or never mentions.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-410",
      passageId: "psg-politics-403",
      type: "assume",
      stem: "The claim that a system handing 'a minority of votes a majority of power is doing something more active than mirroring' relies on which assumption?",
      options: [
        "Voters always vote sincerely rather than tactically.",
        "Proportional systems are always easier to administer.",
        "Most voters prefer coalition governments to single-party rule.",
        "A faithful mirror of the public's votes would not turn a minority of votes into a majority of seats."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: sincere-versus-tactical voting is irrelevant to the point about mirroring; the argument turns on the gap between votes and seats.",
        "Wrong: administrative ease is never invoked; the argument concerns representation, not administration.",
        "Wrong: voters' preference between coalition and single-party rule is not needed for the claim about mirroring.",
        "Correct: calling the outcome 'more active than mirroring' presupposes that a true mirror would keep seat shares in line with vote shares; only against that baseline is converting a minority into a majority a distortion.",
      ],
      workedSolution:
        "Use the negation test. If a faithful mirror could legitimately turn a minority of votes into a majority of seats, then doing so would not be 'more active than mirroring'. So the claim assumes a true mirror would track vote shares — the option reading 'A faithful mirror of the public's votes would not turn a minority of votes into a majority of seats'. The others are irrelevant to the mirroring point.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-411",
      passageId: "psg-politics-403",
      type: "tone",
      stem: "The closing remark that to call any one rule 'simply fair is to mistake a contestable decision for a fact of arithmetic' chiefly conveys a tone that is:",
      options: [
        "pointedly corrective, exposing a confusion the author thinks careless talk encourages.",
        "despairing, suggesting that democratic choice is hopeless.",
        "playful and teasing, making light of the whole question.",
        "neutral and procedural, merely defining a technical term."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: contrasting a 'contestable decision' with 'a fact of arithmetic' sharply corrects the habit of calling a chosen rule simply fair; the tone is firm and clarifying.",
        "Wrong: the author critiques a confusion, not democracy itself, and offers no note of despair about democratic choice.",
        "Wrong: the line is serious and corrective, not playful; the author is pressing a point, not joking.",
        "Wrong: the sentence makes an evaluative correction rather than a neutral definition of a term.",
      ],
      workedSolution:
        "Tone follows diction and intent. Setting 'a contestable decision' against 'a fact of arithmetic' is a deliberate correction of loose usage. That is a pointedly corrective tone, the first option; despair, playfulness, and neutrality all misread the firm clarifying purpose.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-politics-404 (3 Q: 412-414) ------------------------------ */
    {
      id: "q-standpoint-412",
      passageId: "psg-politics-404",
      type: "standpoint",
      stem: "Which best describes the author's attitude toward choosing decision-makers by lot?",
      options: [
        "Dismissive, agreeing it is an absurd relic with no modern place.",
        "Sympathetic, holding that the proposal deserves a serious hearing and that the usual objection rests on prejudice.",
        "Neutral, reporting the idea without evaluating it.",
        "Alarmed, warning that it would put incompetents in charge of drafting laws."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author reports that instinct finds the idea absurd only to argue it 'deserves a more serious hearing than instinct grants it'.",
        "Correct: the author defends the lottery proposal and concludes that the competence objection is 'not an argument but a prejudice' that 'ought to be on trial'.",
        "Wrong: the passage is plainly evaluative, building a case for the proposal rather than merely reporting it.",
        "Wrong: the author specifically denies that such assemblies would draft the fine print, defusing rather than raising this alarm.",
      ],
      workedSolution:
        "Read the attitude from the argument's direction. The author answers the absurdity reaction and the competence objection, concluding the latter is mere prejudice. That is a sympathetic stance toward the proposal, the second option, not dismissal, neutrality, or alarm.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-413",
      passageId: "psg-politics-404",
      type: "implied",
      stem: "The comparison with juries is used to imply that:",
      options: [
        "if we trust ordinary citizens to decide on a person's liberty, it is inconsistent to deny they can deliberate on public questions.",
        "juries are infallible and never reach mistaken verdicts.",
        "citizens' assemblies should replace the courts entirely.",
        "only legally trained citizens should serve on juries."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage notes we already 'trust ordinary people, chosen by lot, to decide whether a fellow citizen goes to prison', implying it is inconsistent to call them fit for that but unfit to weigh public questions.",
        "Wrong: the passage makes no claim that juries never err; reliability of verdicts is not the point of the comparison.",
        "Wrong: the analogy supports lot-chosen assemblies, not the abolition of courts; that conclusion is absent.",
        "Wrong: the passage stresses that juries are 'ordinary people', the reverse of requiring legal training.",
      ],
      workedSolution:
        "Find the implied point of the analogy. Juries show we already entrust grave decisions to lot-chosen citizens after hearing evidence. The implication is that denying them public deliberation is inconsistent, the first option. The other choices misread the analogy or add claims the passage does not make.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-414",
      passageId: "psg-politics-404",
      type: "structure",
      stem: "What role does the sentence 'The obvious objection is competence: surely random citizens lack the expertise to govern' play in the argument?",
      options: [
        "It states the author's settled conclusion.",
        "It provides statistical evidence about citizens' assemblies.",
        "It concedes a point the author treats as decisive against the proposal.",
        "It raises an anticipated objection that the author immediately moves to rebut."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the opposing objection, not the author's conclusion, which is that the objection is a prejudice.",
        "Wrong: no statistics follow; the reply is by analogy to juries, not data.",
        "Wrong: the author rejects the objection rather than accepting it as decisive, so it is not a fatal concession.",
        "Correct: the sentence names the competence objection and the next lines answer it ('But this misreads what such assemblies are asked to do'), so it sets up a rebuttal.",
      ],
      workedSolution:
        "Map the move. The competence worry is introduced as 'the obvious objection', then immediately answered ('But this misreads...'). That is the raise-then-rebut structure — the option reading 'It raises an anticipated objection that the author immediately moves to rebut' — not a conclusion, evidence, or a decisive concession.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* ---- psg-science-405 (4 Q: 415-418) ------------------------------- */
    {
      id: "q-main-415",
      passageId: "psg-science-405",
      type: "main",
      stem: "Which of the following best expresses the passage's central argument?",
      options: [
        "Nuclear power is clearly the only realistic route to deep decarbonisation.",
        "Renewables alone can decarbonise any grid without the need for storage.",
        "Whether nuclear or renewables is preferable is a local, context-dependent trade-off, not a clash of first principles.",
        "The climate problem cannot be solved by any combination of current technologies."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is one camp's position, which the author treats as overstated rather than endorses.",
        "Wrong: the author grants the nuclear camp's point that a renewables-only grid 'must somehow store vast amounts of energy', so this is rejected.",
        "Correct: the author argues 'the question is wrongly posed' and that the answer depends on a country's geography, grid, costs, and deadline, making it a local trade-off.",
        "Wrong: the passage assumes the transition is achievable and complains that tribalism slows it, not that it is impossible.",
      ],
      workedSolution:
        "Find the conclusion. The author lets both camps score points, then says the either-or question is wrongly posed and the real answer is a local trade-off of cost and speed. The context-dependent-trade-off option states that; the first two are partisan positions the author balances, and the last contradicts the passage's premise that transition is wanted and feasible.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-416",
      passageId: "psg-science-405",
      type: "detail",
      stem: "According to the passage, what does the nuclear camp correctly point out about a grid built only on renewables?",
      options: [
        "That solar panels and batteries have become far cheaper than expected.",
        "That it must store vast amounts of energy or keep fossil-fuelled plants idling for windless, sunless days.",
        "That new nuclear plants are slow and expensive to build.",
        "That every country has identical geography and grids."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the falling cost of solar and batteries is the point the author credits to the renewables camp, not the nuclear camp.",
        "Correct: the passage says the nuclear camp 'is right that the wind does not always blow and the sun does not always shine', so a renewables-only grid 'must somehow store vast amounts of energy or keep fossil-fuelled plants idling'.",
        "Wrong: the slowness and expense of nuclear is a point the author credits to the renewables camp, not the nuclear camp.",
        "Wrong: the passage stresses that countries differ in geography and grid, the opposite of this claim.",
      ],
      workedSolution:
        "Read the attribution carefully. The nuclear camp's correct point is the intermittency of wind and sun, forcing storage or idling fossil plants. That is the second option; the cheap-renewables and slow-nuclear points belong to the other camp, and identical geography contradicts the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-417",
      passageId: "psg-science-405",
      type: "factinf",
      stem: "Which of the following is best understood as the author's inference rather than a point credited to one of the two camps?",
      options: [
        "The wind does not always blow and the sun does not always shine.",
        "The price of solar panels and batteries has fallen faster than almost anyone predicted.",
        "Treating a local engineering trade-off as a clash of first principles slows the very transition both camps claim to want.",
        "New nuclear plants are slow to build and extravagantly expensive."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the point the passage explicitly credits to the nuclear camp, not the author's own added inference.",
        "Wrong: this is the point the passage credits to the renewables camp, presented as that side's evidence.",
        "Correct: the claim that mistaking the trade-off for a clash of principles 'slows the very transition both camps claim to want' is the author's own concluding inference, drawn from the whole argument.",
        "Wrong: this is credited to the renewables camp as its evidence against nuclear, not offered as the author's inference.",
      ],
      workedSolution:
        "Separate each camp's credited points from the author's own step. Intermittency, cheap renewables, and slow costly nuclear are all assigned to one side or the other. The closing judgement that the false framing slows the transition is the author's inference, the third option.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-418",
      passageId: "psg-science-405",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "The best low-carbon strategy may differ from one country to another.",
        "Storage technology will never be good enough to support a renewables grid.",
        "Countries that already run reactors should immediately shut them down.",
        "The cost of nuclear power will inevitably fall below that of solar."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says a 'sun-soaked nation' 'faces a different arithmetic' from a 'cloudy, windless one that already runs reactors', directly supporting country-by-country variation.",
        "Wrong: the author treats storage as part of the cost calculation, not as a permanently insurmountable barrier; this overstates the text.",
        "Wrong: the passage commends running existing reactors safely; advising immediate shutdown contradicts that.",
        "Wrong: the author makes no prediction that nuclear will undercut solar; relative future costs are left open.",
      ],
      workedSolution:
        "An inference must be supported by the text. The author contrasts the differing arithmetic facing sunny versus cloudy, reactor-running nations. The supported conclusion is that the best strategy may differ by country, the first option; the others overstate, contradict, or predict beyond the passage.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-science-406 (3 Q: 419-421) ------------------------------- */
    {
      id: "q-standpoint-419",
      passageId: "psg-science-406",
      type: "standpoint",
      stem: "Which best describes the author's overall position on the precautionary principle?",
      options: [
        "It should always be applied, since avoiding irreversible harm is paramount.",
        "It is sound only because it removes risk from decision-making entirely.",
        "It is flawed when stated baldly, because it counts the harms of acting while ignoring the harms of waiting.",
        "It proves that no new technology should ever be approved."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author warns the principle 'stated so baldly, contains a flaw', so unqualified application misreads the stance.",
        "Wrong: the author denies that refusing a technology removes risk, calling it a choice of 'one set of risks over another'.",
        "Correct: the author argues the principle 'weighs only the first kind of harm' and 'ignores the second', so 'caution itself has a price'.",
        "Wrong: the author explicitly says this is not 'a claim that every innovation should be waved through', and equally not a ban on all innovation.",
      ],
      workedSolution:
        "Locate the balanced verdict. The author neither endorses nor abolishes the principle but exposes its blind spot: it ignores the harms of inaction. The flawed-when-stated-baldly option captures that; the others push the author to extremes the text disowns.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-420",
      passageId: "psg-science-406",
      type: "opinion",
      stem: "Which of the following is best understood as the author's opinion rather than a statement of fact?",
      options: [
        "A drug can be withheld until every doubt about it is resolved.",
        "The precautionary principle advises against proceeding until a technology has been proved safe.",
        "A principle that weighs only the harms of action and ignores those of inaction is not cautious but one-eyed.",
        "Some patients would have been cured during the period in which a drug was being tested."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that a drug can be withheld pending resolution of doubts is a factual description of what the policy does, not a contestable judgement.",
        "Wrong: this is a neutral statement of what the precautionary principle says, not the author's evaluation.",
        "Correct: calling such a principle 'not cautious but one-eyed' is the author's evaluative judgement, a debatable verdict rather than a neutral fact.",
        "Wrong: that some patients would have been cured during testing is presented as a factual consequence, part of the argument's premises rather than its evaluation.",
      ],
      workedSolution:
        "Separate reported facts from evaluative judgement. The description of withholding, the statement of the principle, and the cured-patients consequence are factual. The loaded verdict that the principle is 'one-eyed' rather than cautious is the author's opinion, the third option.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-421",
      passageId: "psg-science-406",
      type: "vocab",
      stem: "As used in the passage, describing the harms of inaction as 'diffuse, statistical, and authorless' most nearly means that such harms:",
      options: [
        "are written down by an anonymous author and later lost.",
        "are deliberately concealed by those who cause them.",
        "are imaginary and do not really occur.",
        "are spread thinly, show up only in aggregate numbers, and have no single identifiable agent to blame."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: 'authorless' here means lacking a blameable agent, not literally written by an anonymous author; this takes the word too literally.",
        "Wrong: the passage says these harms 'slip from view' because they are diffuse, not because anyone hides them deliberately.",
        "Wrong: the author insists these harms are 'just as real' as the visible ones, so calling them imaginary contradicts the text.",
        "Correct: the three words are glossed by the contrast with action's harms, which have 'a clear cause and a visible victim'; inaction's harms instead spread out, appear only statistically, and lack an identifiable agent.",
      ],
      workedSolution:
        "Read the phrase with its contrast. Action's harms have a clear cause and visible victim; inaction's are the opposite, spread thin, visible only in aggregate, with no one to blame. The option capturing this reads 'are spread thinly, show up only in aggregate numbers, and have no single identifiable agent to blame'. The others read 'authorless' literally, add concealment, or deny the harms the author calls real.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-history-407 (4 Q: 422-425) ------------------------------- */
    {
      id: "q-implied-422",
      passageId: "psg-history-407",
      type: "implied",
      stem: "The passage implies, without stating it directly, that:",
      options: [
        "spoken testimony is always more accurate than written records.",
        "written records can carry distortions of their own, which are simply less obvious than the failings of memory.",
        "historians should abandon written documents in favour of interviews.",
        "memory does not in fact decay or reshape itself over time."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author does not rank oral testimony as always more accurate; the point is that both kinds of source need critical reading.",
        "Correct: by saying documents have 'distortions' that are 'merely less obvious' than memory's failings, the passage implies the written record is not the clear mirror the objection assumes.",
        "Wrong: the author urges reading documents critically alongside testimony, not abandoning them; that prescription is not supported.",
        "Wrong: the author grants that memory 'decays and reshapes itself', so denying this contradicts the passage.",
      ],
      workedSolution:
        "Find the supported-but-unstated step. The author concedes memory's failings but stresses documents are no 'innocent photograph' and carry less obvious distortions. The implication is that written records also distort, only more subtly, the second option. The others overstate, prescribe, or contradict explicit concessions.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-423",
      passageId: "psg-history-407",
      type: "structure",
      stem: "What is the function of the sentence 'All of this is true, and the careful practitioner of oral history does not deny it'?",
      options: [
        "It concedes the critics' point about memory before the author turns to limit its force.",
        "It states the author's final conclusion about oral history.",
        "It offers a specific historical example of a faulty memory.",
        "It rejects the claim that memory is fallible."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the sentence grants that memory decays and reshapes ('All of this is true'), and the following 'But...' turns to limit the objection by attacking the assumed reliability of documents.",
        "Wrong: this is a concession partway through, not the conclusion, which is that both sources must be read critically.",
        "Wrong: it cites no specific example; it acknowledges the general charge about memory.",
        "Wrong: far from rejecting memory's fallibility, the sentence accepts it before qualifying its significance.",
      ],
      workedSolution:
        "Map the move. 'All of this is true' grants the critics' point, and the next 'But' pivots to undercut the contrast by questioning documents. That is concession-before-limitation, the first option, not a conclusion, an example, or a rejection.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-424",
      passageId: "psg-history-407",
      type: "assume",
      stem: "The author's case that discarding oral testimony 'is not the rigour it imagines itself to be' relies on which assumption?",
      options: [
        "Every government memorandum is deliberately falsified.",
        "Oral testimony never contains any errors at all.",
        "A source's value depends on how critically it can be read, not on whether it is spoken or written.",
        "Only written records can ever count as historical evidence."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says documents record 'what that purpose required', a matter of selection, not blanket deliberate falsification; this is stronger than needed.",
        "Wrong: the author concedes oral testimony is fallible, so the argument does not assume it is error-free.",
        "Correct: the case that discarding testimony while trusting documents is false rigour only works if value turns on critical reading rather than on the spoken/written form; otherwise the form alone could justify the preference.",
        "Wrong: the author treats spoken testimony as legitimate evidence, so this contradicts rather than supports the argument.",
      ],
      workedSolution:
        "Use the negation test. If a source's worth did depend on being written rather than spoken, then discarding oral testimony could be rigorous after all. So the argument assumes value turns on critical reading, not form, the third option. The others overstate or contradict the text.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-425",
      passageId: "psg-history-407",
      type: "vocab",
      stem: "As used in the passage, the phrase 'no innocent photograph of the past' most nearly means that a document:",
      options: [
        "contains no actual photographs.",
        "is morally blameless about the events it records.",
        "was produced using outdated technology.",
        "is not an objective, untouched record but a selective account shaped by its maker's purpose."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: 'photograph' is a metaphor for an objective record, not a literal claim about images in the document.",
        "Wrong: 'innocent' here means free of bias or selection, not morally blameless; the moral reading misses the point.",
        "Wrong: the technology of production is irrelevant; the contrast is between an objective record and a purposeful, selective one.",
        "Correct: the phrase is explained by the surrounding clause that the document was 'written by someone, for a purpose, recording what that purpose required and silently omitting the rest', i.e. selective, not objective.",
      ],
      workedSolution:
        "Read the phrase with its gloss. 'No innocent photograph' is immediately unpacked as written for a purpose, recording some things and omitting others. So it means the document is selective rather than objective — the option reading 'is not an objective, untouched record but a selective account shaped by its maker's purpose'. The others take 'photograph' or 'innocent' literally or import technology.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* ---- psg-history-408 (3 Q: 426-428) ------------------------------- */
    {
      id: "q-detail-426",
      passageId: "psg-history-408",
      type: "detail",
      stem: "According to the passage, what does the myth of inevitable progress assume about the cruelties of earlier ages?",
      options: [
        "That they never actually occurred.",
        "That they were the growing pains of a species steadily perfecting itself.",
        "That they were worse than any suffering in the present.",
        "That they were caused by a failure of technology."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the myth does not deny the cruelties happened; it reinterprets them rather than erasing them.",
        "Correct: the passage states the myth treats each age's cruelties as 'explained away as the growing pains of a species steadily perfecting itself'.",
        "Wrong: the passage makes no comparison ranking past cruelties as worse than present suffering; that claim is absent.",
        "Wrong: technological failure is never offered as the myth's explanation of past cruelty.",
      ],
      workedSolution:
        "Locate the explicit statement. The passage says the myth explains away earlier cruelties as 'growing pains of a species steadily perfecting itself'. That is the second option; the others are not what the text attributes to the myth.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-427",
      passageId: "psg-history-408",
      type: "factinf",
      stem: "Which of the following is presented as the author's inference rather than as a historical fact cited in the passage?",
      options: [
        "Some empires that thought themselves the summit of civilisation collapsed.",
        "Certain hard-won liberties were granted and then revoked.",
        "If improvement is treated as the natural drift of things, the gains we enjoy will seem to require no defending.",
        "Knowledge painstakingly accumulated was lost for centuries."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the collapse of self-styled summit empires is offered as a historical fact illustrating reversals, not as the author's inference.",
        "Wrong: the granting and revoking of liberties is cited as a historical fact, part of the record of reversals.",
        "Correct: the claim that treating progress as natural makes our gains 'seem to require no defending' is the author's reasoned inference about the myth's effect, not a cited fact.",
        "Wrong: the loss of accumulated knowledge for centuries is presented as a historical fact, another instance of reversal.",
      ],
      workedSolution:
        "Separate cited facts from the author's added reasoning. The collapsed empires, revoked liberties, and lost knowledge are offered as historical facts. The claim about complacency, that natural-seeming progress makes gains seem not to need defending, is the author's inference, the third option.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-428",
      passageId: "psg-history-408",
      type: "opinion",
      stem: "Which statement from the passage is best understood as the author's opinion rather than a factual claim?",
      options: [
        "Some hard-won liberties were granted and then later revoked.",
        "Certain bodies of knowledge were lost for centuries.",
        "The deeper damage of the myth is that it breeds complacency.",
        "Several empires regarded themselves as the summit of civilisation."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that some liberties were granted and revoked is presented as a matter of historical record, not a contestable judgement.",
        "Wrong: that bodies of knowledge were lost for centuries is offered as a historical fact illustrating reversals.",
        "Correct: the claim that the myth's 'deeper damage' is to 'breed complacency' is an evaluative judgement about its effects, a debatable opinion rather than a recorded fact.",
        "Wrong: that empires regarded themselves as the summit of civilisation is reported as a fact about their self-image, not the author's evaluation.",
      ],
      workedSolution:
        "Separate evaluative judgement from reported fact. The revoked liberties, lost knowledge, and empires' self-image are factual. The verdict that the myth's deeper damage is to breed complacency is the author's opinion, the third option.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-philosophy-409 (4 Q: 429-432) ---------------------------- */
    {
      id: "q-inference-429",
      passageId: "psg-philosophy-409",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "A measure that helps people act on values they already hold can be compatible with respecting their autonomy.",
        "All state interference with personal choices is an insult to autonomy.",
        "A competent adult's choices should never be questioned under any circumstances.",
        "Autonomy requires that the state impose its own values on citizens."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author argues a cooling-off rule 'protects the considered self' and 'may be something I would endorse in a calmer hour', so some interference can respect autonomy.",
        "Wrong: the author rejects the absolute view as proving 'too much', so blanket condemnation of all interference is the position being refuted.",
        "Wrong: the passage holds that choices made under pressure or ignorance may rightly be checked, so 'never questioned' contradicts it.",
        "Wrong: the author distinguishes helping people act on their own values from imposing the state's, and warns against the latter, so this inverts the argument.",
      ],
      workedSolution:
        "An inference must follow from the text. The author defends interference that protects the considered self acting on its own values. It follows that such a measure can be compatible with autonomy, the first option. The others restate the absolute view the author rejects or invert the argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-430",
      passageId: "psg-philosophy-409",
      type: "detail",
      stem: "According to the passage, what example is given of interference that protects the considered self rather than overriding it?",
      options: [
        "A ban on expressing unpopular political opinions.",
        "A tax on goods the state regards as immoral.",
        "A rule requiring a cooling-off period before an irreversible decision.",
        "A law compelling citizens to adopt the state's religion."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: a ban on unpopular opinions is not mentioned and concerns expression, not the cooling-off example the passage gives.",
        "Wrong: a morality tax is not the example offered; the passage's instance is a delay before an irreversible choice.",
        "Correct: the passage offers 'a rule requiring a cooling-off period before an irreversible decision' as interference that 'protects the considered self against a momentary impulse'.",
        "Wrong: compelling a state religion would be exactly the value-imposing interference the author warns against, not the protective example.",
      ],
      workedSolution:
        "Locate the explicit example. The passage names a cooling-off period before an irreversible decision as interference that protects the considered self. That is the third option; the others describe value-imposing measures the author criticises or never mentions.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-standpoint-431",
      passageId: "psg-philosophy-409",
      type: "standpoint",
      stem: "What is the author's attitude toward the 'hard libertarian view' that rejects all paternalism?",
      options: [
        "Total endorsement, since autonomy must never be overridden.",
        "Partial sympathy combined with the judgement that the view 'proves too much'.",
        "Complete dismissal, treating it as having no merit at all.",
        "Indifference, declining to evaluate it."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author does not fully endorse it, judging that 'the absolute version proves too much'.",
        "Correct: the author grants 'there is real force in this' yet concludes 'the absolute version proves too much', a stance of partial sympathy with a decisive qualification.",
        "Wrong: the author credits the view with 'real force', so it is not dismissed as wholly without merit.",
        "Wrong: the author clearly evaluates the view, accepting part and rejecting its absolute form, so indifference misreads the passage.",
      ],
      workedSolution:
        "Weigh the two signals. The author says the libertarian view has 'real force' but 'proves too much'. That combination is partial sympathy plus a decisive limit, the second option, not total endorsement, flat dismissal, or indifference.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-432",
      passageId: "psg-philosophy-409",
      type: "opinion",
      stem: "Which of the following is best understood as the author's opinion rather than a neutral statement?",
      options: [
        "Some laws require motorcyclists to wear helmets.",
        "Paternalism is the name given to interference that stops people from harming themselves.",
        "The defensible line lies between interference that imposes the state's values and interference that helps people act on values they already hold.",
        "A pension scheme can require a saver to make contributions."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that some laws mandate helmets is a factual description of existing rules, not a contestable judgement.",
        "Wrong: defining paternalism as self-protective interference is a neutral statement of what the term means.",
        "Correct: locating 'the defensible line' between two kinds of interference is the author's normative verdict, a debatable judgement rather than a neutral fact.",
        "Wrong: that a pension scheme can require contributions is a factual description, not the author's evaluation.",
      ],
      workedSolution:
        "Separate normative judgement from neutral description. The helmet laws, the definition of paternalism, and the pension example are factual. The claim about where 'the defensible line' falls is the author's opinion, the third option.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* ---- psg-philosophy-410 (3 Q: 433-435) ---------------------------- */
    {
      id: "q-tone-433",
      passageId: "psg-philosophy-410",
      type: "tone",
      stem: "The author's tone toward the 'nothing to hide' argument is best described as:",
      options: [
        "respectfully persuaded, ultimately accepting its logic.",
        "critically corrective, exposing it as resting on a cramped picture of privacy.",
        "openly contemptuous, mocking anyone who holds it.",
        "detached and neutral, simply laying out both sides."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author is not persuaded by it; the passage says it 'rests on a cramped picture' and 'misses the point so completely'.",
        "Correct: the author treats the argument seriously but firmly corrects it, showing it misconceives what privacy is for; the tone is critical yet reasoned.",
        "Wrong: the author critiques the argument's logic rather than mocking its holders; there is no personal contempt.",
        "Wrong: the passage takes a clear evaluative side against the argument, so detached neutrality misreads it.",
      ],
      workedSolution:
        "Tone follows stance and diction. The author engages the argument and dismantles it as resting on a 'cramped picture', without ridicule. That is a critically corrective tone, the second option, not agreement, contempt, or neutrality.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-434",
      passageId: "psg-philosophy-410",
      type: "implied",
      stem: "The passage implies that the chief harm of constant surveillance is:",
      options: [
        "a narrowing of the room in which a free and independent character can form.",
        "the exposure of a few embarrassing personal secrets.",
        "the financial cost of installing the monitoring equipment.",
        "an increase in the rate of detected crime."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says what is lost is 'not merely a few embarrassing secrets but the room to experiment, to err, and to become someone other than' expected, falling 'on everyone'.",
        "Wrong: the author explicitly says the harm is 'not merely a few embarrassing secrets', so this names what the passage downplays.",
        "Wrong: the cost of equipment is never mentioned; the concern is the effect on character formation.",
        "Wrong: detected crime rates are not discussed; the passage's worry is about autonomy, not enforcement outcomes.",
      ],
      workedSolution:
        "Find the implied chief harm. The author contrasts trivial secrets with the deeper loss of room to experiment and become oneself, a harm to everyone. The narrowing-of-room option states that; the others name harms the passage downplays or never raises.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-435",
      passageId: "psg-philosophy-410",
      type: "tone",
      stem: "The closing description of privacy as 'the breathing room of the free' rather than 'the secrecy of the guilty' chiefly conveys a tone that is:",
      options: [
        "affirming and principled, recasting privacy as a positive condition of freedom.",
        "anxious, warning that society is beyond saving.",
        "ironic, implying the author does not really value privacy.",
        "coldly technical, defining a legal term."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the phrase elevates privacy into a positive good, 'the breathing room of the free', stating a principle with conviction rather than mere caution.",
        "Wrong: although the author warns of loss, the closing line is affirming about privacy's value, not despairing that society cannot be saved.",
        "Wrong: there is no irony; the author plainly does value privacy, building the whole passage to defend it.",
        "Wrong: the line is a resonant principled claim, not a cold technical definition.",
      ],
      workedSolution:
        "Tone follows the rhetorical shift. The author replaces a negative framing ('secrecy of the guilty') with a positive one ('breathing room of the free'), affirming privacy as essential to freedom. That is an affirming, principled tone, the first option; anxiety, irony, and technicality all miss it.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* ---- psg-currentaffairs-411 (4 Q: 436-439) ------------------------ */
    {
      id: "q-main-436",
      passageId: "psg-currentaffairs-411",
      type: "main",
      stem: "Which of the following best states the passage's central claim?",
      options: [
        "Gig platforms have genuinely liberated workers by letting them be their own bosses.",
        "Gig work is a form of slavery imposed by force.",
        "The flexibility offered by gig platforms is a narrow freedom that masks a new form of subordination.",
        "Workers should never be allowed to choose their own hours."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the platforms' boast, which the author calls 'narrower than the advertisement suggests'.",
        "Wrong: the author explicitly says the arrangement is 'neither slavery nor liberation', so the slavery claim is rejected.",
        "Correct: the author argues the freedom is 'of a peculiar kind' and the honest description is 'a new form of subordination' that keeps the old obedience while shedding the security.",
        "Wrong: the passage does not oppose flexible hours; it criticises calling a constrained arrangement genuine self-employment.",
      ],
      workedSolution:
        "Find the thesis between the extremes. The author grants real flexibility but argues it is narrow and conceals subordination, while denying both 'liberation' and 'slavery'. The masks-subordination option captures that; the boast and the slavery claim are positions the author rejects, and the no-flexible-hours option is absent.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-437",
      passageId: "psg-currentaffairs-411",
      type: "assume",
      stem: "The argument that accepting hard terms is not the same as endorsing them 'as free and fair' relies on which assumption?",
      options: [
        "Genuine consent requires having a meaningful range of acceptable alternatives.",
        "Every gig worker has many equally good job offers available.",
        "All algorithms used by platforms are technically faulty.",
        "Flexible hours are of no value to anyone."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: distinguishing submission from genuine endorsement only works if real choice requires meaningful alternatives; the author stresses the worker has 'few options', so acceptance does not signal free agreement.",
        "Wrong: the author actually says many workers face 'no work at all' as the alternative, the opposite of having many good offers.",
        "Wrong: the argument concerns the lack of negotiating power, not the technical reliability of the algorithms.",
        "Wrong: the author concedes flexibility is 'value[d] genuinely', so denying its value contradicts the passage.",
      ],
      workedSolution:
        "Use the negation test. If meaningful alternatives were not required for genuine consent, then accepting hard terms with few options could still count as endorsing them, and the author's distinction would fail. So the argument assumes real choice needs meaningful alternatives, the first option. The others contradict the text or are irrelevant.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-438",
      passageId: "psg-currentaffairs-411",
      type: "vocab",
      stem: "As used in the passage, the statement that the arrangement is 'a new form of subordination' most nearly means that gig work:",
      options: [
        "keeps the worker under another party's control while presenting itself as independence.",
        "is an entirely novel kind of job never seen before in any form.",
        "ranks workers lower in social class than other employees.",
        "involves physically demanding manual labour."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: 'subordination' is glossed by the passage as keeping 'the obedience of the old employment' while the worker cannot negotiate the terms, the reverse of the independence advertised.",
        "Wrong: 'new form' marks a variation on an old relationship of control, not something with no precedent at all; the passage stresses continuity with old obedience.",
        "Wrong: 'subordination' here means being under another's control, not a ranking of social class.",
        "Wrong: the physical difficulty of the work is not the point; the word refers to control and obedience, not exertion.",
      ],
      workedSolution:
        "Read the phrase with its gloss. The passage explains subordination as retaining 'the obedience of the old employment' while terms are dictated by an uncontestable party. So it means staying under another's control while looking independent, the first option; the others misread 'new' or 'subordination'.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-439",
      passageId: "psg-currentaffairs-411",
      type: "factinf",
      stem: "Which of the following is best understood as the author's inference rather than a described feature of the platforms?",
      options: [
        "An algorithm the worker cannot see assigns the jobs and sets the pay.",
        "To call the arrangement self-employment is to borrow the dignity of genuine autonomy to dress up its opposite.",
        "Declining too many tasks causes the flow of work to dry up.",
        "Workers are told they may choose their own hours."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that an unseen algorithm assigns jobs and sets pay is a described feature of how the platforms operate, not the author's inference.",
        "Correct: the claim that calling this 'self-employment' borrows 'the dignity of genuine autonomy to dress up its opposite' is the author's evaluative inference drawn from those features.",
        "Wrong: that declining tasks dries up the work is a described operating feature of the platform, part of the factual setup.",
        "Wrong: that workers are told they may choose their hours is a reported feature of the platforms' offer, not the author's inference.",
      ],
      workedSolution:
        "Separate described features from the author's added judgement. The unseen algorithm, the drying-up of work, and the choose-your-hours offer are all reported features. The verdict that the 'self-employment' label borrows autonomy's dignity to disguise its opposite is the author's inference, the second option.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* ---- psg-currentaffairs-412 (3 Q: 440-442) ------------------------ */
    {
      id: "q-inference-440",
      passageId: "psg-currentaffairs-412",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "A service funded by capturing attention has an incentive to keep users engaged even against their own interests.",
        "Online services that charge no money are genuinely free of any cost to the user.",
        "Users always have more than enough time for everything they wish to do.",
        "An attention merchant prospers most when its customers quickly leave satisfied."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says such a service 'prospers only so long as the customer does not leave' and is 'built to override' the user's impulse to stop, supporting a conflict with the user's interest.",
        "Wrong: the author explicitly denies this, arguing the currency is attention rather than money, so the service is not costless.",
        "Wrong: the passage stresses attention is 'strictly finite', the opposite of users having ample time for everything.",
        "Wrong: the author says the attention merchant, unlike a shopkeeper, profits only if the customer 'does not leave at all', so quick satisfied departures would not be its aim.",
      ],
      workedSolution:
        "An inference must follow from the text. The author argues the service profits by keeping users engaged and overriding their impulse to stop. It follows that its incentive runs against the user's interest, the first option. The others contradict explicit claims about cost, finite attention, and the merchant's aim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-441",
      passageId: "psg-currentaffairs-412",
      type: "detail",
      stem: "According to the passage, how does the position of an 'attention merchant' differ from that of a shopkeeper?",
      options: [
        "A shopkeeper profits only from repeat visits, while an attention merchant profits from a single sale.",
        "A shopkeeper prospers when the customer leaves satisfied, while an attention merchant prospers only so long as the customer does not leave at all.",
        "A shopkeeper sells attention, while an attention merchant sells physical goods.",
        "There is no difference; both succeed when customers leave happy."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage draws no contrast about repeat versus single sales; it contrasts leaving satisfied with not leaving at all.",
        "Correct: the passage states 'A shopkeeper prospers when the customer leaves satisfied; an attention merchant prospers only so long as the customer does not leave at all'.",
        "Wrong: this reverses the passage; it is the attention merchant who deals in attention, while a shopkeeper sells ordinary goods.",
        "Wrong: the passage insists their interests differ, so claiming no difference contradicts the explicit contrast.",
      ],
      workedSolution:
        "Locate the explicit contrast. The passage says the shopkeeper profits when the customer leaves satisfied, but the attention merchant profits only while the customer does not leave. That is the second option; the others invent contrasts or deny the stated difference.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-442",
      passageId: "psg-currentaffairs-412",
      type: "structure",
      stem: "What is the function of the comparison between such services and 'a tap that supplies water on request'?",
      options: [
        "It is the passage's central thesis.",
        "It names a view the author rejects, in order to mark the contrast with how these services actually behave.",
        "It offers statistical evidence about water usage.",
        "It concedes that the services are in fact neutral utilities."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the thesis is that these services sell the user's attention; the tap image is a foil, not the central claim.",
        "Correct: the author invokes the neutral-tap picture only to deny it, saying to treat the services so 'is to misunderstand them at the root' because they sell rather than serve attention.",
        "Wrong: no statistics about water appear; the tap is purely an illustrative contrast.",
        "Wrong: the author rejects the neutral-utility view rather than conceding it, so this misstates the function.",
      ],
      workedSolution:
        "Map the role of the image. The neutral tap stands for the view that the services are passive utilities, which the author immediately rejects ('to misunderstand them at the root'). It is a rejected foil that sharpens the contrast, the second option, not the thesis, evidence, or a concession.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * ESSAY PROMPTS — 3 illustrative, theme-tagged, LNAT-style.
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-401",
      theme: "civil-liberties",
      text:
        "Is the state ever justified in protecting people from the consequences of " +
        "their own free choices?",
      source: "illustrative"
    },
    {
      id: "prompt-402",
      theme: "politics-governance",
      text:
        "Should some public decisions be made by citizens chosen at random rather " +
        "than by elected representatives?",
      source: "illustrative"
    },
    {
      id: "prompt-403",
      theme: "media-tech-environment",
      text:
        "“A service you do not pay for is one in which you are the product.” Discuss.",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * MOCK — full paper (NOT sample): 12 passages, 42 questions in passage order,
   * 3 prompts. Six 3-Q + six 4-Q passages = 42. References only its own IDs.
   * ====================================================================== */
  DATA.mocks.push({
    id: "mock-04",
    title: "Mock Paper 4",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-literature-401",
        "psg-literature-402",
        "psg-politics-403",
        "psg-politics-404",
        "psg-science-405",
        "psg-science-406",
        "psg-history-407",
        "psg-history-408",
        "psg-philosophy-409",
        "psg-philosophy-410",
        "psg-currentaffairs-411",
        "psg-currentaffairs-412"
      ],
      questionIds: [
        // psg-literature-401 (4)
        "q-main-401",
        "q-vocab-402",
        "q-implied-403",
        "q-structure-404",
        // psg-literature-402 (3)
        "q-standpoint-405",
        "q-assume-406",
        "q-inference-407",
        // psg-politics-403 (4)
        "q-main-408",
        "q-detail-409",
        "q-assume-410",
        "q-tone-411",
        // psg-politics-404 (3)
        "q-standpoint-412",
        "q-implied-413",
        "q-structure-414",
        // psg-science-405 (4)
        "q-main-415",
        "q-detail-416",
        "q-factinf-417",
        "q-inference-418",
        // psg-science-406 (3)
        "q-standpoint-419",
        "q-opinion-420",
        "q-vocab-421",
        // psg-history-407 (4)
        "q-implied-422",
        "q-structure-423",
        "q-assume-424",
        "q-vocab-425",
        // psg-history-408 (3)
        "q-detail-426",
        "q-factinf-427",
        "q-opinion-428",
        // psg-philosophy-409 (4)
        "q-inference-429",
        "q-detail-430",
        "q-standpoint-431",
        "q-opinion-432",
        // psg-philosophy-410 (3)
        "q-tone-433",
        "q-implied-434",
        "q-tone-435",
        // psg-currentaffairs-411 (4)
        "q-main-436",
        "q-assume-437",
        "q-vocab-438",
        "q-factinf-439",
        // psg-currentaffairs-412 (3)
        "q-inference-440",
        "q-detail-441",
        "q-structure-442"
      ]
    },
    sectionB: {
      promptIds: ["prompt-401", "prompt-402", "prompt-403"]
    }
  });
})(typeof window !== "undefined" ? window : this);
