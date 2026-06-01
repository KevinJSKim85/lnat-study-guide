/*
 * drill-d.js — Section A DRILL set: VOCABULARY-IN-CONTEXT (5a) and TONE (5b).
 *
 * Satisfies the site's vocabulary/tone floor. NOT real exam content.
 * All content is source:"illustrative", English only.
 *
 * Delivery model (mirrors data/SAMPLE.js): this file assigns into the buckets
 * that assets/js/engine/loader.js created on window.LNAT_DATA. It must load
 * AFTER loader.js. It is self-contained: it pushes only its own passages and
 * questions and references no IDs defined elsewhere.
 *
 * DRILL passages are disjoint from every mock: this set uses ONLY the reserved
 * 9xx range (psg-<genre>-961 .. psg-<genre>-976). Questions use q-vocab-961+ and
 * q-tone-961+ so they never collide with the 001/1xx-5xx ranges used elsewhere.
 *
 * Contents:
 *   - 16 passages (961-976) across all six genres, 200-340 words each,
 *     argumentative/expressive enough to anchor meaning-in-context and tone.
 *   - 20 vocab questions (q-vocab-961 .. q-vocab-980).
 *   - 20 tone questions  (q-tone-961  .. q-tone-980).
 * Correct-answer position is balanced ~25% each across A/B/C/D within each type.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    // loader.js must run first. Fail loudly rather than silently creating buckets.
    (root.console || { error: function () {} }).error(
      "[LNAT] drill-d.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * PASSAGES — 16 across the six genres, all in the reserved 9xx DRILL range.
   * Each is opinionated/expressive so vocab-in-context and tone are testable.
   * ---------------------------------------------------------------------- */
  DATA.passages.push(
    {
      id: "psg-philosophy-961",
      genre: "philosophy",
      title: "How Far Should We Edit the Human Genome",
      body:
        "We can now rewrite the human genome with a precision that would have " +
        "seemed like fantasy a generation ago, and the question is no longer " +
        "whether we are able to edit our own inheritance but how far we ought to " +
        "go. The easy cases are not where the difficulty lies. Few would object " +
        "to correcting the single faulty letter that condemns a child to a cruel " +
        "and certain disease; to withhold such a cure, once it is safe, would " +
        "itself need defending. The hard cases begin where therapy shades into " +
        "enhancement, where we move from mending what is broken to engineering " +
        "what we merely prefer. Here the advocates of caution have a real point, " +
        "though they often state it badly. The worry is not that an edited child " +
        "would be unnatural, an objection that collapses the moment one remembers " +
        "that medicine has always been an interference with nature. The worry is " +
        "that an edit made to the germline is visited not on a consenting patient " +
        "but on every descendant who inherits it, none of whom was asked. To " +
        "alter a gene that will be passed down is to make a choice on behalf of " +
        "people who do not yet exist, and that is a graver thing than treating " +
        "the patient in front of us. Nor is the line between cure and improvement " +
        "as firm as either side pretends; a society anxious about height or " +
        "memory will soon learn to file ordinary variation under the heading of " +
        "disease. None of this argues for a permanent ban, which would only drive " +
        "the work into jurisdictions less scrupulous than our own. It argues for " +
        "a humility we are not famous for: a readiness to proceed slowly, to draw " +
        "the line at the heritable edit until we understand far more than we now " +
        "do, and to remember that a power we cannot yet recall is not the same as " +
        "a power we are wise to use.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-962",
      genre: "politics",
      title: "Letting the Land Run Wild Again",
      body:
        "The case for rewilding rests on a simple and unsettling admission: that " +
        "our careful management of the countryside has often impoverished it. For " +
        "a century we have tidied the land into neat compartments, draining the " +
        "marsh and straightening the river, until the living systems that once " +
        "ran through it were broken into manicured fragments. Rewilding proposes " +
        "the opposite discipline. Rather than managing every acre toward some " +
        "human plan, it returns large tracts to the wild, lets the river find its " +
        "own crooked course, and brings back the animals whose absence the land " +
        "still feels. The beaver, hunted out centuries ago, builds dams that slow " +
        "the floodwater we now spend fortunes to hold back; the wolf, reintroduced " +
        "to a famous American park, thinned the deer that had been stripping the " +
        "valleys bare, and the woods returned. The point is not nostalgia for some " +
        "imagined wilderness but a recognition that these creatures did work we " +
        "have been doing badly and expensively ourselves. Critics raise objections " +
        "that deserve an answer rather than a sneer. A farmer whose lambs a " +
        "returning predator might take is owed more than a lecture on biodiversity, " +
        "and a landscape emptied of people is its own kind of loss. Yet the harder " +
        "truth is that the tidy countryside we are asked to defend is not the " +
        "timeless thing it pretends to be; it is itself a recent and managed " +
        "artefact, no more natural than the wilder land that might replace it. To " +
        "rewild is not to abandon the land but to trust it, to accept that a " +
        "system we did not design may keep itself in better order than one we " +
        "police acre by anxious acre.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-963",
      genre: "science",
      title: "The Case for a Regulated Market in Kidneys",
      body:
        "Thousands die each year waiting for a kidney that altruistic donation has " +
        "failed to supply, and the obvious remedy, paying living donors, is widely " +
        "dismissed as repugnant before the argument has even begun. I want to press " +
        "the unfashionable view that a carefully regulated market deserves a fairer " +
        "hearing than disgust allows. The reflexive horror rests on a picture of " +
        "desperate sellers preyed upon by brokers, and where such traffic in organs " +
        "is driven underground that picture is sadly accurate. But an illegal trade " +
        "conducted in the shadows is precisely what a regulated one would replace. " +
        "Imagine instead a single public body as the only lawful buyer, paying a " +
        "fixed and generous sum, screening donors for genuine consent and medical " +
        "fitness, and guaranteeing their aftercare for life. Many of the evils we " +
        "rightly fear are features of prohibition, not of payment, and prohibition " +
        "has its own body count, quietly tallied in the dialysis wards. The deepest " +
        "objection, that a price on a body part violates human dignity, deserves " +
        "respect, yet we already pay the surgeon, the nurse, and the transplant " +
        "coordinator handsomely, and only the person without whom none of them has " +
        "anything to do is required to act for nothing. There is something less than " +
        "consistent in honouring everyone in the operating theatre but the donor. " +
        "None of this proves the case beyond doubt; a market in organs raises real " +
        "hazards that only careful design can contain. It is to insist that the " +
        "hazards be weighed against the lives prohibition is costing now, rather " +
        "than waved away by a squeamishness we mistake for a principle.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-964",
      genre: "history",
      title: "The Verdict of Hindsight",
      body:
        "Historians are fond of warning against the verdict of hindsight, and " +
        "rightly so, yet the warning is more easily issued than obeyed. We know " +
        "how the story ends, and that knowledge seeps backwards, lending an air " +
        "of inevitability to events that, to those living through them, were " +
        "anything but settled. The minister who hesitated looks, from our vantage, " +
        "like a ditherer; at the time he was weighing risks we can no longer feel. " +
        "It is a comfortable vice, this retrospective certainty, for it flatters " +
        "the judge while costing the judged. The harder discipline is to recover " +
        "the genuine uncertainty of the moment, to read the documents as if the " +
        "outcome were still in doubt, and to grant the dead the same fog through " +
        "which we ourselves stumble. This is not a plea to excuse every folly; " +
        "some decisions were foolish on the evidence available at the time, and " +
        "saying so is fair. It is a plea against the cheaper kind of judgement, " +
        "the kind that mistakes knowing the answer for understanding the question. " +
        "The past was once a present, crowded with paths not taken, and the " +
        "historian who forgets this writes not history but a morality tale with " +
        "the ending known in advance.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-965",
      genre: "literature",
      title: "The Book on the Screen",
      body:
        "Whenever a beloved novel reaches the cinema, the same lament goes up from " +
        "its readers: the film has taken liberties with the book, and something " +
        "precious has been lost. There is often truth in the complaint. A camera " +
        "that shows us a character's face all at once cannot easily reproduce the " +
        "slow interior voice a novelist builds over chapters, and a story " +
        "compressed into two hours must shed subplots a patient reader had grown " +
        "to love. Handled carelessly, the adaptation renders a vivid figure flat, " +
        "trading the restless inner life of the page for a handsome surface that " +
        "merely looks the part. Yet the purists who guard the sacred text mistake " +
        "fidelity for virtue. A film is not a book with pictures bolted on; it is " +
        "a different instrument, and to ask it to be faithful in every particular " +
        "is to ask it not to be cinema at all. The adaptations we remember are " +
        "seldom the obedient ones. They are the bold rereadings that find, in the " +
        "grammar of light and sound, an equivalent for what the prose did in words, " +
        "and that occasionally show the novel a meaning its own author had not " +
        "seen. Such a film does not diminish its source; it converses with it, and " +
        "sends us back to the page reading differently. The book is not damaged " +
        "by the screen any more than a song is damaged by being sung in a second " +
        "voice. What the timid adaptation loses in caution, the daring one repays " +
        "in discovery, and a culture too anxious about betrayal will get only the " +
        "embalmed loyalty of the first and never the living argument of the second.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-966",
      genre: "currentaffairs",
      title: "What Are Prisons Actually For",
      body:
        "We lock people up for so many reasons at once that we have stopped asking " +
        "which one we actually mean, and the confusion costs us dearly. A prison may " +
        "be meant to punish the offender, to keep the public safe by holding him " +
        "apart, to deter others tempted to the same crime, or to reform the man so " +
        "that he leaves better than he entered. These four aims sound " +
        "complementary, but in practice they pull hard against one another. A " +
        "regime harsh enough to satisfy the public appetite for retribution is " +
        "often the very regime that hardens an offender and returns him to the world " +
        "more dangerous than before, so that the demand to punish quietly defeats " +
        "the hope to reform. We rarely confront this tension, because each fresh " +
        "scandal sends politicians scrambling to look tough, and toughness is the " +
        "one currency that always trades well at the ballot box. The result is a " +
        "system asked to do everything and therefore designed to do nothing in " +
        "particular, its cells overcrowded, its workshops shuttered, its rates of " +
        "reoffending a standing rebuke. I do not pretend there is a tidy formula " +
        "that dissolves the conflict; serious crimes demand a serious answer, and " +
        "the wish to see justice done is not in itself disreputable. But a society " +
        "that will not say plainly what its prisons are for has no way to judge " +
        "whether they are working, and will keep mistaking the satisfying spectacle " +
        "of severity for the harder achievement of safety. The first reform is not " +
        "a new building or a new programme. It is an honest answer to a question we " +
        "have been careful not to ask.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-967",
      genre: "philosophy",
      title: "On the Uses of Doubt",
      body:
        "Doubt has acquired a bad name, as though to suspend judgement were a " +
        "failure of nerve. The confident are admired, the hesitant pitied, and a " +
        "willingness to say 'I am not sure' is read as weakness rather than as the " +
        "honest report it often is. This is a mistake, and an old one. The value " +
        "of doubt is not that it leaves us paralysed but that it keeps the door " +
        "of inquiry open; the dogmatist has shut that door and mistaken the noise " +
        "of it slamming for the sound of an argument won. Proper doubt is not the " +
        "lazy relativism that holds every view as good as every other, a posture " +
        "that is really only certainty about uncertainty. It is something more " +
        "demanding: a discipline of proportioning belief to evidence, of holding " +
        "conclusions firmly where the case is strong and loosely where it is thin. " +
        "The doubter of this stripe is not the enemy of conviction but its " +
        "guardian, for a belief that has survived genuine questioning is worth " +
        "more than one that has never been asked to account for itself. To prize " +
        "doubt, then, is not to prize indecision. It is to insist that the only " +
        "beliefs worth holding are the ones we have earned.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-968",
      genre: "science",
      title: "The Machine That Cannot Explain Itself",
      body:
        "A new generation of predictive systems can now outperform human experts " +
        "at a widening range of tasks, and yet cannot say why. Asked to justify a " +
        "particular verdict, the model offers only the brute fact of its training: " +
        "this is what the patterns dictate. Enthusiasts wave the difficulty away. " +
        "If the predictions are accurate, they ask, who cares about the reasons? " +
        "The question is glib. In medicine, in law, in the granting or refusal of " +
        "a loan, a decision that cannot be explained cannot properly be " +
        "challenged, and a decision that cannot be challenged sits uneasily with " +
        "everything we mean by accountability. There is, besides, a quieter worry. " +
        "A system whose reasoning is opaque may be right for reasons that will not " +
        "generalise, leaning on some accident of the data that holds today and " +
        "fails tomorrow, and we shall not know until it fails. None of this is an " +
        "argument for abandoning the tools, which are genuinely powerful and in " +
        "many domains already indispensable. It is an argument for a certain " +
        "humility about them, and for resisting the seductive equation of " +
        "accuracy with understanding. A prediction we cannot interrogate is a " +
        "convenience that may, on the day it matters most, prove to have been a " +
        "liability all along.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-969",
      genre: "politics",
      title: "The Comfort of the Strong Leader",
      body:
        "In anxious times the call goes up for a strong leader, someone who will " +
        "cut through the tangle of debate and simply act. The appeal is easy to " +
        "understand and easier still to indulge. Deliberation is slow, " +
        "frustrating, and visibly imperfect; decisive command looks, by contrast, " +
        "clean and swift. But the contrast flatters the wrong thing. What is " +
        "praised as strength is often only impatience given a uniform, and the " +
        "speed so admired is frequently the speed of a man who has stopped " +
        "listening. The institutions that slow a government down, the committees " +
        "and chambers and courts that the impatient deride as obstacles, are not " +
        "defects in the machine; they are the machine, the very mechanism by which " +
        "a decision is tested before it becomes irreversible. A leader unbound by " +
        "them may indeed act faster, but speed is a virtue only when the direction " +
        "is right, and nothing in raw decisiveness guarantees that it is. History " +
        "is not short of strong leaders who acted swiftly and were swiftly, " +
        "catastrophically, wrong. The longing for one is understandable; it is " +
        "also, more often than its advocates admit, a longing to be relieved of " +
        "the burden of disagreement, which is to say a longing to stop doing the " +
        "work that self-government requires.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-970",
      genre: "currentaffairs",
      title: "The Tyranny of the Trend",
      body:
        "Each week the culture lurches toward some new enthusiasm, declared " +
        "indispensable on Monday and quietly abandoned by Friday. The diet, the " +
        "device, the management philosophy: each arrives trailing the same breathless " +
        "promise that this, at last, is the thing that changes everything. I have " +
        "watched enough of these waves break to feel a certain fond exasperation " +
        "with the spectacle. The trend is not, in itself, the problem; novelty is " +
        "the engine of much that is good, and the reflexive sneer at anything " +
        "popular is its own kind of laziness. The problem is the surrender of " +
        "judgement that the trend invites, the eagerness to mistake what is merely " +
        "current for what is genuinely better. There is a particular pleasure in " +
        "being early to a fashion, a small social dividend paid to those who adopt " +
        "before the crowd, and that dividend quietly corrupts our assessment of " +
        "whether the thing is any good at all. The remedy is not to stand aloof " +
        "from every novelty, which only swaps one vanity for another, but to ask " +
        "of each the unfashionable question: stripped of its glamour and its " +
        "advocates, what does this actually do, and for whom? The honest answer is " +
        "frequently less exciting than the hype, and occasionally more.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-971",
      genre: "literature",
      title: "The Quiet Heroism of the Minor Character",
      body:
        "Our stories lavish their attention on the protagonist, the figure who " +
        "changes and is changed, while the minor characters are kept in service, " +
        "useful chiefly for what they reveal about the hero. I have come to think " +
        "this a kind of injustice, and a revealing one. The innkeeper who feeds " +
        "the questing knight, the servant who carries the fatal letter, the friend " +
        "who listens and is never thanked: these figures do the unglamorous labour " +
        "on which the whole plot quietly depends, and the narrative repays them " +
        "with oblivion. There is something almost callous in the convention, as " +
        "though only the spectacular life were worth recording. Yet the minor " +
        "character has a dignity the form refuses to honour. He persists; he " +
        "endures the story without the compensation of being its subject; he is " +
        "the world against which the hero's drama is staged, and a world is no " +
        "small thing to be. A literature that learned to see such figures whole, " +
        "rather than as furniture for someone else's transformation, would be " +
        "richer and, I suspect, truer to the texture of an actual life, in which " +
        "each of us is, to almost everyone, a minor character, and bears it with " +
        "more grace than the stories allow.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-972",
      genre: "history",
      title: "The Monument and the Memory",
      body:
        "A statue is raised, we are told, to honour a memory, but it more often " +
        "serves to arrest one. The figure cast in bronze is fixed in a single " +
        "attitude, stripped of the contradictions that made him a person, and " +
        "handed down to posterity as a verdict rather than a life. This is the " +
        "sly work that monuments do: they convert the messy business of judgement " +
        "into the settled fact of commemoration, and they do it so quietly that " +
        "we mistake the result for nature. The recent quarrels over which statues " +
        "should stand are often dismissed as a fit of present-mindedness, an " +
        "imposition of today's morals on yesterday's men. There is a grain of " +
        "justice in the complaint, but it misses the deeper point. The objection " +
        "is not merely that the honoured figure did wrong by our lights; it is " +
        "that the monument was always an argument disguised as a tribute, a claim " +
        "about who deserves remembering that was passed off as simple respect. To " +
        "debate the statue is therefore not to vandalise history but to resume a " +
        "conversation the bronze was designed to close. A society confident in its " +
        "past would not fear the question; it is the brittle confidence of the " +
        "monument, not the past itself, that the quarrel disturbs.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-973",
      genre: "philosophy",
      title: "The Ledger of Good Intentions",
      body:
        "We are inclined to grade an action by the warmth of the heart behind it, " +
        "as though a good intention were a kind of receipt that settled the moral " +
        "account. The instinct is generous and, up to a point, sound: we rightly " +
        "think better of the clumsy helper than of the skilful saboteur. But the " +
        "instinct, left unchecked, curdles into something self-serving. The donor " +
        "who gives to soothe his own conscience, indifferent to whether the gift " +
        "helps or harms, has purchased a feeling rather than performed a kindness, " +
        "and the feeling is for him, not for the recipient. Good intention is a " +
        "necessary ingredient of a good act, but it is not the whole recipe, and " +
        "to treat it as such is to license a vast deal of comfortable harm. The " +
        "hard question is not whether one meant well; almost everyone means well, " +
        "including most of those whose meddling has wrecked the lives it set out " +
        "to mend. The hard question is whether one troubled to find out what would " +
        "actually help, and then did it, and stood ready to be judged by the " +
        "result. Intention without that discipline is mere sentiment, and " +
        "sentiment, however sincere, is a poor steward of other people's welfare.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-974",
      genre: "science",
      title: "The Comfort of the Natural",
      body:
        "Few words carry as much unearned authority as 'natural'. A product so " +
        "labelled seems to come pre-approved, as though nature were a benevolent " +
        "committee that had vetted it on our behalf. The appeal runs deep and is " +
        "almost entirely confused. Nature is not a kindly parent but a vast " +
        "indifference, equally the author of the antibiotic and the toxin, the " +
        "spring water and the cholera in it. To call a thing natural tells us " +
        "where it came from, not whether it is good for us, and the slide from " +
        "the first to the second is one of the most profitable errors a marketer " +
        "can exploit. This is not a defence of the artificial for its own sake, " +
        "which would merely invert the same lazy reasoning. The point is narrower " +
        "and, I think, more useful: that the origin of a substance settles almost " +
        "nothing about its merits, and that the comforting glow of the word " +
        "'natural' is a feeling we have been sold rather than a fact we have " +
        "established. A poison brewed by a plant is no kinder for being organic, " +
        "and a remedy synthesised in a laboratory is no crueller for never having " +
        "grown in soil. The relevant question is never where a thing was born but " +
        "what, on the evidence, it does.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-975",
      genre: "politics",
      title: "The Slow Virtue of Compromise",
      body:
        "Compromise has fallen out of fashion, dismissed as the refuge of those " +
        "without the courage of their convictions. The purist, who will not bend, " +
        "is celebrated as a person of principle, while the one who meets an " +
        "opponent halfway is suspected of having no principles to bend. I want to " +
        "enter a quiet defence of the despised art. In a society of genuine " +
        "disagreement, where reasonable people want incompatible things, " +
        "compromise is not the betrayal of principle but the only alternative to " +
        "imposing one's own by force. The purist's nobility is frequently bought " +
        "at someone else's expense, since to refuse all accommodation is to insist " +
        "that the other side simply lose. This is not to bless every bargain; some " +
        "compromises are shabby, splitting differences that ought not to be split " +
        "and selling the vulnerable to buy a quiet life. The distinction worth " +
        "drawing is between the compromise that finds a tolerable common life " +
        "among people who must share one, and the capitulation that merely " +
        "surrenders what should have been defended. To honour the first is not " +
        "weakness. It is the recognition, unwelcome to the zealot of every stripe, " +
        "that in a shared and crowded world we have to live together, somehow, " +
        "with the very people we cannot persuade.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-976",
      genre: "currentaffairs",
      title: "The Spectacle of Outrage",
      body:
        "Outrage has become a kind of public performance, staged daily for an " +
        "audience that rewards the loudest with its attention. There is a market " +
        "in indignation now, and like any market it shapes what is produced. The " +
        "measured objection earns no applause; the furious denunciation goes far " +
        "and wide, and so we have learned to manufacture fury whether or not the " +
        "occasion warrants it. I find the whole economy faintly absurd, and " +
        "corrosive in a way that is easy to underestimate. Genuine anger at " +
        "genuine wrong is a precious civic resource, the spur to many a needed " +
        "reform. But a currency printed without limit loses its value, and outrage " +
        "spent on every trivial slight has none left for the outrages that should " +
        "command it. There is, too, a comfortable laziness in the posture. To be " +
        "loudly appalled costs nothing and feels like virtue; it is far easier " +
        "than the patient labour of actually mending what one deplores. I do not " +
        "counsel the bland serenity that meets every injustice with a shrug, which " +
        "is its own failure. I counsel only that we spend our indignation as we " +
        "would spend any finite thing, with care, lest we find on the day it is " +
        "truly needed that we have nothing left in the account.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * VOCAB QUESTIONS (5a) — 20 items, q-vocab-961 .. q-vocab-980.
   * Each asks the meaning of a word/phrase AS USED; the trap is the common
   * dictionary sense that does not fit the context.
   * Answer positions across the 20: A=5, B=5, C=5, D=5.
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-vocab-961",
      passageId: "psg-philosophy-961",
      type: "vocab",
      stem: "As used in the passage, 'visited' (in 'an edit made to the germline is visited not on a consenting patient but on every descendant') most nearly means:",
      options: [
        "Imposed on or inflicted upon someone.",
        "Called on socially as a guest.",
        "Toured or sightseen as a place.",
        "Inspected in an official capacity."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage contrasts a 'consenting patient' with descendants on whom the heritable edit lands without their consent; 'visited ... on every descendant' means imposed or inflicted on them.",
        "Wrong: the common 'call on someone socially' sense of 'visit' does not fit; descendants are not being called on as guests but burdened with a consequence.",
        "Wrong: the 'tour a place' sense is the most familiar everyday meaning of 'visit' but no location is involved; the object is a person who inherits the edit.",
        "Wrong: the 'official inspection' sense (as in a visiting examiner) does not fit; the passage is about a consequence falling on people, not an inspection."
      ],
      workedSolution:
        "Read the word in its clause: an edit 'is visited not on a consenting patient but on every descendant who inherits it'. The contrast is between someone who agreed and people on whom the result is forced, so 'visited' means imposed on or inflicted upon, in the sense of a burden falling on someone. The everyday 'call on socially' and 'tour a place' meanings are the dictionary traps that do not fit.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-962",
      passageId: "psg-philosophy-961",
      type: "vocab",
      stem: "As used in the passage, 'file' (in 'will soon learn to file ordinary variation under the heading of disease') most nearly means:",
      options: [
        "Classify or place something in a category.",
        "Store a paper document in a folder for safekeeping.",
        "Submit a formal application or claim.",
        "Smooth or shape a surface with an abrasive tool."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: 'file ordinary variation under the heading of disease' means to classify or place that variation in the category labelled 'disease', the author's worry being that normal differences get reclassified as illnesses.",
        "Wrong: the literal 'store a paper in a folder' sense is the most familiar everyday meaning of 'file' but no documents are involved; the passage is about how a society categorises human traits.",
        "Wrong: the 'submit a formal claim' sense (as in to file a lawsuit) does not fit; nothing is being lodged with an authority here.",
        "Wrong: the 'smooth with an abrasive tool' sense is a homograph with no relevance to the passage's point about classification."
      ],
      workedSolution:
        "Context: a society 'will soon learn to file ordinary variation under the heading of disease'. The phrase 'under the heading of' shows the word means to sort something into a category, so 'file' means to classify or place in a category. The everyday 'store a document' sense and the unrelated 'smooth with a tool' sense are the dictionary traps.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-963",
      passageId: "psg-politics-962",
      type: "vocab",
      stem: "As used in the passage, 'compartments' (in 'tidied the land into neat compartments') most nearly means:",
      options: [
        "Enclosed seating sections of a railway carriage.",
        "Sealed chambers in the hull of a ship.",
        "Small zipped pockets within a bag.",
        "Separated divisions into which a whole has been parcelled."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the railway-carriage sense is a common everyday meaning of 'compartment' but no train is involved; the passage describes land carved into parts.",
        "Wrong: the ship's-hull sense is a familiar literal meaning but irrelevant here; the subject is countryside, not a vessel.",
        "Wrong: the 'zipped pocket in a bag' sense is another concrete literalism that does not fit a passage about dividing up land.",
        "Correct: the land has been 'tidied ... into neat compartments', i.e. parcelled into separated divisions, the figurative sense matching the broken 'manicured fragments' the passage laments."
      ],
      workedSolution:
        "The clause says management has 'tidied the land into neat compartments', and the next sentence calls the result 'manicured fragments'. So 'compartments' means separated divisions into which the whole has been parcelled. The railway, ship, and bag senses are concrete dictionary traps that do not fit land.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-964",
      passageId: "psg-politics-962",
      type: "vocab",
      stem: "As used in the passage, 'police' (in 'one we police acre by anxious acre') most nearly means:",
      options: [
        "The civil force responsible for enforcing the law.",
        "Keep under constant control and supervision.",
        "Investigate and punish a wrongdoer.",
        "Patrol an area to deter crime."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the noun sense, the law-enforcement force, but the passage uses 'police' as a verb describing how the land is managed, not a body of officers.",
        "Correct: the passage contrasts a self-ordering wild system with a landscape we 'police acre by anxious acre', i.e. keep under constant, watchful control and supervision.",
        "Wrong: 'investigate and punish a wrongdoer' is too narrowly criminal; the object is land being closely managed, not an offender being pursued.",
        "Wrong: the literal 'patrol to deter crime' sense imports crime that is not in view; the passage means anxious, continuous oversight of the countryside."
      ],
      workedSolution:
        "Context: a self-keeping wild system is set against land 'we police acre by anxious acre'. Applied to land, 'police' means to keep under constant control and supervision. The law-enforcement noun and the crime-related senses are the dictionary traps that do not fit a passage about managing countryside.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-965",
      passageId: "psg-science-963",
      type: "vocab",
      stem: "As used in the passage, 'traffic' (in 'such traffic in organs is driven underground') most nearly means:",
      options: [
        "The movement of vehicles along a road.",
        "The volume of messages passing through a network.",
        "The flow of pedestrians through a building.",
        "Dealing or trade, especially of an illicit kind."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the 'vehicles on a road' sense is the most common everyday meaning of 'traffic' but no roads or cars are in view; the passage is about buying and selling organs.",
        "Wrong: the 'network traffic' sense is a familiar modern usage but irrelevant to a discussion of organ trade.",
        "Wrong: 'flow of pedestrians' is another literal movement sense that does not fit; the passage concerns commerce, not foot traffic.",
        "Correct: 'traffic in organs ... driven underground' refers to dealing or trade in organs, here of an illicit kind, the sense preserved in phrases like 'drug traffic'."
      ],
      workedSolution:
        "Read the word in its phrase: 'such traffic in organs is driven underground'. The passage is about buying and selling organs illegally, so 'traffic' means illicit dealing or trade, the sense in 'drug traffic'. The road-vehicle meaning is the common dictionary trap that does not fit here.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-966",
      passageId: "psg-science-963",
      type: "vocab",
      stem: "As used in the passage, 'handsomely' (in 'we already pay the surgeon ... handsomely') most nearly means:",
      options: [
        "Generously, in a large or ample amount.",
        "In a physically good-looking manner.",
        "With graceful skill and dexterity.",
        "By a wide and decisive margin."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the contrast is that the surgeon and nurse are paid well while the donor is 'required to act for nothing', so 'handsomely' means generously, in a large amount.",
        "Wrong: the 'good-looking' sense is the most common everyday meaning of 'handsome' but the passage is about how much people are paid, not their appearance.",
        "Wrong: 'with graceful skill' describes how a task is performed, not the size of a payment, so it does not fit the contrast with acting 'for nothing'.",
        "Wrong: 'by a wide margin' suits a victory or score, not the generosity of a fee; the point is the amount paid, not a margin of difference."
      ],
      workedSolution:
        "Context: 'we already pay the surgeon, the nurse, and the transplant coordinator handsomely', set against the donor who acts 'for nothing'. The contrast is well-paid versus unpaid, so 'handsomely' means generously or amply. The good-looking sense is the common dictionary trap.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-967",
      passageId: "psg-history-964",
      type: "vocab",
      stem: "As used in the passage, 'vice' (in 'It is a comfortable vice, this retrospective certainty') most nearly means:",
      options: [
        "A clamping tool fixed to a workbench.",
        "A criminal or immoral trade.",
        "A deputy who acts in another's place.",
        "A bad habit or moral failing."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the 'workbench clamp' (often spelled vice/vise) is a homograph with no relevance to the passage.",
        "Wrong: the 'organised vice / illicit trade' sense is too strong and concrete; the passage means a tempting personal failing, not a criminal trade.",
        "Wrong: the 'vice-' prefix meaning 'deputy' is a different word entirely and does not fit.",
        "Correct: 'a comfortable vice' names retrospective certainty as a bad habit or moral failing the historian is prone to, which is the contextual sense."
      ],
      workedSolution:
        "Context: 'a comfortable vice, this retrospective certainty ... flatters the judge'. A vice here is a tempting moral failing or bad habit, option D. The tool and deputy senses are homograph traps; the criminal-trade sense overshoots.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-968",
      passageId: "psg-history-964",
      type: "vocab",
      stem: "As used in the passage, 'fog' (in 'to grant the dead the same fog through which we ourselves stumble') most nearly means:",
      options: [
        "A state of uncertainty in which outcomes are unclear.",
        "A thick mist that reduces visibility outdoors.",
        "A film of moisture on a glass surface.",
        "A confused, drowsy mental state after sleep."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the 'fog' is the 'genuine uncertainty of the moment' the historian must recover, i.e. the condition of not knowing how things will turn out.",
        "Wrong: literal weather-fog is the everyday meaning, but no atmosphere is described; the word is a metaphor.",
        "Wrong: 'condensation on glass' is a literal sense with no connection to the argument about historical uncertainty.",
        "Wrong: the 'grogginess on waking' sense (as in 'a mental fog') is plausible-sounding but the passage means uncertainty about outcomes, not drowsiness."
      ],
      workedSolution:
        "Earlier the passage names 'the genuine uncertainty of the moment'; the 'fog through which we ourselves stumble' restates that uncertainty as a metaphor. So the sense is a state of uncertainty, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-969",
      passageId: "psg-literature-965",
      type: "vocab",
      stem: "As used in the passage, 'liberties' (in 'the film has taken liberties with the book') most nearly means:",
      options: [
        "Legal rights and freedoms enjoyed by a citizen.",
        "Periods of leave granted to a sailor on shore.",
        "Bold but welcome acts of creative courage.",
        "Unwarranted alterations or departures from the original."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the 'civil rights and freedoms' sense is the most familiar everyday meaning of 'liberties' but no rights are in view; the readers are complaining that the film has changed the book.",
        "Wrong: the naval 'shore leave' sense (as in 'liberties ashore') is a specialised meaning with no relevance to a passage about adapting a novel.",
        "Wrong: this option imports a positive judgement, but in the readers' lament 'taken liberties' is a reproach; the praise for bold rereading comes later and is the author's, not the meaning of this phrase.",
        "Correct: 'taken liberties with the book' names the unwarranted alterations or departures the readers complain of, the changes they feel have lost 'something precious'."
      ],
      workedSolution:
        "Read the word in its clause: 'the film has taken liberties with the book, and something precious has been lost'. The complaint is that the film has altered the novel without warrant, so 'liberties' means unjustified departures from the original. The civil-freedoms and shore-leave senses are dictionary traps, and the 'bold courage' reading misreads a reproach as praise.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-970",
      passageId: "psg-literature-965",
      type: "vocab",
      stem: "As used in the passage, 'flat' (in 'renders a vivid figure flat') most nearly means:",
      options: [
        "Level and even, without bumps or slopes.",
        "Deflated, as a tyre that has lost its air.",
        "Lifeless and lacking depth or vitality.",
        "Fixed at a single unvarying rate."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the literal 'level surface' sense is the most common everyday meaning of 'flat' but no physical surface is described; the word characterises a character on screen.",
        "Wrong: the 'deflated tyre' sense is a concrete literalism that does not fit; the passage is about a figure drained of inner life, not about losing air.",
        "Correct: a careless adaptation 'renders a vivid figure flat', trading 'the restless inner life of the page' for 'a handsome surface', so 'flat' means lifeless and lacking depth.",
        "Wrong: the 'single unvarying rate' sense (as in a flat fee) belongs to pricing and has no bearing on the depiction of a character."
      ],
      workedSolution:
        "Context: a careless film 'renders a vivid figure flat', exchanging the character's 'restless inner life' for a mere 'handsome surface'. Applied to a character, 'flat' means lifeless and lacking depth. The level-surface, deflated-tyre, and fixed-rate senses are the dictionary traps that do not fit.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-971",
      passageId: "psg-currentaffairs-966",
      type: "vocab",
      stem: "As used in the passage, 'deter' (in 'to deter others tempted to the same crime') most nearly means:",
      options: [
        "To clean or remove a stain from something.",
        "To discourage from acting by the prospect of unwelcome consequences.",
        "To decide a matter once and for all.",
        "To postpone an action to a later time."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this confuses 'deter' with 'detergent'; cleaning has nothing to do with discouraging would-be offenders.",
        "Correct: a prison is said 'to deter others tempted to the same crime', i.e. to discourage them from offending by the threat of like punishment.",
        "Wrong: 'decide once and for all' confuses 'deter' with 'determine'; the passage is about putting people off, not settling a question.",
        "Wrong: 'postpone' confuses 'deter' with 'defer'; the point is to prevent the crime, not to delay something."
      ],
      workedSolution:
        "Context: the prison aims 'to deter others tempted to the same crime'. To deter is to discourage by the prospect of unwelcome consequences, here the punishment. The clean/decide/postpone options are sound-alike traps drawn from 'detergent', 'determine', and 'defer'.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-972",
      passageId: "psg-currentaffairs-966",
      type: "vocab",
      stem: "As used in the passage, 'regime' (in 'A regime harsh enough to satisfy the public appetite') most nearly means:",
      options: [
        "A government, especially an authoritarian or undemocratic one.",
        "A prescribed course of diet, exercise, or medical treatment.",
        "An established system or manner of running an institution.",
        "A period during which a particular ruler holds power."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the 'authoritarian government' sense is the most common political meaning of 'regime' but the passage is describing how a prison is run, not a form of state.",
        "Wrong: this is the 'regimen' sense (a health or treatment plan); the passage concerns the running of a prison, not a diet or therapy.",
        "Correct: 'a regime harsh enough to satisfy the public appetite' refers to the established system or manner in which a prison is run, here a severe one.",
        "Wrong: 'a ruler's term of power' does not fit; the passage is about the character of prison conditions, not the span of anyone's rule."
      ],
      workedSolution:
        "Context: 'a regime harsh enough to satisfy the public appetite for retribution ... hardens an offender'. The word describes the established way a prison is run, so the sense is an institutional system or manner of running something. The authoritarian-government meaning is the common dictionary trap.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-973",
      passageId: "psg-philosophy-967",
      type: "vocab",
      stem: "As used in the passage, 'proportioning' (in 'proportioning belief to evidence') most nearly means:",
      options: [
        "Dividing something into equal shares.",
        "Adjusting the strength of one thing to match another.",
        "Calculating the dimensions of a shape.",
        "Distributing a budget across departments."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'dividing into equal shares' is a common sense of proportioning but the passage is not splitting belief equally; it is matching belief to the weight of evidence.",
        "Correct: the passage glosses it as 'holding conclusions firmly where the case is strong and loosely where it is thin', i.e. adjusting the strength of belief to the strength of evidence.",
        "Wrong: the geometric 'work out the dimensions' sense is unrelated to the epistemic point about belief.",
        "Wrong: 'distributing a budget' is a concrete administrative sense that does not fit reasoning about evidence."
      ],
      workedSolution:
        "The next sentence defines the phrase: believe firmly where evidence is strong, loosely where thin. That is matching strength to strength, option B, not equal division (A).",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-974",
      passageId: "psg-science-968",
      type: "vocab",
      stem: "As used in the passage, 'glib' (in 'The question is glib') most nearly means:",
      options: [
        "Smooth-talking in a way that is superficial and too easy.",
        "Cheerful and good-humoured.",
        "Quick and physically nimble.",
        "Slippery to the touch."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author dismisses the 'who cares about the reasons?' question as 'glib', meaning offered too easily and superficially, ignoring real difficulties the passage then lists.",
        "Wrong: 'cheerful' is not the sense; 'glib' here is a criticism of shallow ease, not a description of mood.",
        "Wrong: 'physically nimble' confuses 'glib' with 'lithe'; the passage concerns a too-easy argument, not movement.",
        "Wrong: 'slippery to the touch' is a literal misreading; 'glib' describes the manner of the reasoning, not a texture."
      ],
      workedSolution:
        "The passage calls the dismissive question 'glib' and immediately shows why it is too easy (accountability, generalisation). So 'glib' means superficially easy/smooth, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-975",
      passageId: "psg-philosophy-973",
      type: "vocab",
      stem: "As used in the passage, 'curdles' (in 'the instinct, left unchecked, curdles into something self-serving') most nearly means:",
      options: [
        "Causes milk to separate into solids and liquid.",
        "Freezes solid in cold conditions.",
        "Thickens into a rich, desirable substance.",
        "Turns or spoils into something worse."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the literal dairy sense (milk separating) is the word's usual meaning, but no milk is involved; the subject is a moral instinct.",
        "Wrong: 'freezes solid' confuses curdling with freezing; the passage is about something going bad, not cold.",
        "Wrong: this reverses the sense; the instinct does not improve but degrades, so 'thickens into something desirable' is the opposite of what is meant.",
        "Correct: the generous instinct, 'left unchecked, curdles into something self-serving', i.e. turns or spoils into something worse, as the donor buying 'a feeling rather than ... a kindness' shows."
      ],
      workedSolution:
        "Context: a sound instinct 'curdles into something self-serving'. The metaphor borrows the souring of milk to mean spoiling or turning bad, option D. The literal dairy sense (A) is the dictionary trap; option C reverses the direction of change.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-976",
      passageId: "psg-politics-969",
      type: "vocab",
      stem: "As used in the passage, 'machine' (in 'they are the machine') most nearly means:",
      options: [
        "A mechanical device with moving parts.",
        "An organisation that controls a political party.",
        "The structured system by which government decisions are made.",
        "A person who works tirelessly and without feeling."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the literal 'mechanical device' is the everyday meaning, but the passage applies 'machine' to committees, chambers and courts.",
        "Wrong: the 'party machine' (a political-control sense) is plausible-sounding but the passage means the deliberative apparatus of government, not a party's internal organisation.",
        "Correct: the passage says the slowing institutions 'are the machine, the very mechanism by which a decision is tested', i.e. the structured system by which government decisions are made.",
        "Wrong: 'a tireless person' is a metaphor for individuals, but here 'the machine' names the institutions collectively."
      ],
      workedSolution:
        "The appositive 'the very mechanism by which a decision is tested' defines 'machine' as the decision-making system of government, option C. The party-machine sense (B) is the near-miss trap.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-977",
      passageId: "psg-currentaffairs-970",
      type: "vocab",
      stem: "As used in the passage, 'dividend' (in 'a small social dividend') most nearly means:",
      options: [
        "A share of company profits paid to shareholders.",
        "A benefit or reward gained from something.",
        "A number to be divided in an arithmetic operation.",
        "A bonus added to an insurance policy."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the financial 'shareholder payout' is the most common sense but no company or shares are involved; the reward here is social standing.",
        "Correct: being early to a fashion pays 'a small social dividend', i.e. a benefit or reward, namely the standing gained from adopting before the crowd.",
        "Wrong: the arithmetic 'number to be divided' is a technical sense with no relevance to the passage.",
        "Wrong: the 'insurance bonus' sense is another financial literalism that does not fit the social context."
      ],
      workedSolution:
        "Context: early adopters enjoy 'a small social dividend ... paid to those who adopt before the crowd'. A dividend here is a benefit/reward, option B; the shareholder sense (A) is the dictionary trap.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-978",
      passageId: "psg-history-972",
      type: "vocab",
      stem: "As used in the passage, 'arrest' (in 'it more often serves to arrest one') most nearly means:",
      options: [
        "Seize a person by legal authority.",
        "Capture someone's attention compellingly.",
        "Bring something to a stop or fix it in place.",
        "Slow the progress of a disease."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the legal 'take into custody' sense is the most familiar meaning but a statue does not detain a memory; the passage means it freezes a memory.",
        "Wrong: 'capture attention' (as in 'an arresting image') is a real sense, but the contrast here is 'honour a memory' versus stop/fix it, not grab attention.",
        "Correct: the statue 'serves to arrest' a memory by fixing it 'in a single attitude', i.e. bringing it to a stop and holding it fixed.",
        "Wrong: the medical 'arrest a disease' sense does not fit; the object is a memory, and the point is fixity, not halting an illness."
      ],
      workedSolution:
        "The next sentences explain: the figure is 'fixed in a single attitude'. To arrest a memory is thus to stop and fix it, option C. The custody sense (A) is the leading trap.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-979",
      passageId: "psg-science-974",
      type: "vocab",
      stem: "As used in the passage, 'vetted' (in 'a benevolent committee that had vetted it') most nearly means:",
      options: [
        "Treated by a veterinary surgeon.",
        "Examined and approved as satisfactory.",
        "Forbidden or blocked by a veto.",
        "Recorded in an official register."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'treated by a vet' shares a root sound but is the wrong sense; nothing here concerns animal medicine.",
        "Correct: nature is imagined as a 'committee' that had 'vetted' the product on our behalf, i.e. examined and approved it as satisfactory, which is why it seems 'pre-approved'.",
        "Wrong: 'vetted' is not 'vetoed'; the passage imagines approval, not prohibition, so this reverses the meaning.",
        "Wrong: 'recorded in a register' is unrelated; the image is of vetting for approval, not mere listing."
      ],
      workedSolution:
        "The product 'seems to come pre-approved' because a committee supposedly 'vetted' it. To vet is to examine and approve, option B. The veterinary and veto senses are sound-alike traps.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-980",
      passageId: "psg-currentaffairs-976",
      type: "vocab",
      stem: "As used in the passage, 'currency' (in 'a currency printed without limit loses its value') most nearly means:",
      options: [
        "The state of being widely accepted or current.",
        "The flow rate of a moving stream.",
        "A medium of exchange whose worth depends on its scarcity.",
        "The latest or most up-to-date version of something."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the 'being current / in circulation' sense exists, but the passage's point is about value collapsing when something is over-issued, which is the money analogy.",
        "Wrong: 'current' as a flow of water is a homophone-driven confusion with no relevance to the passage.",
        "Correct: outrage is likened to money, 'a currency printed without limit', whose value falls when over-issued; so 'currency' is a medium of exchange whose worth depends on scarcity.",
        "Wrong: 'the latest version' confuses 'currency' with 'currentness'; the passage is making an economic analogy about value, not recency."
      ],
      workedSolution:
        "The metaphor explicitly invokes printing money 'without limit' so that it 'loses its value'. 'Currency' is therefore a medium of exchange whose worth depends on scarcity, option C.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * TONE QUESTIONS (5b) — 20 items, q-tone-961 .. q-tone-980.
   * Each asks what the author's word choices reveal about attitude.
   * Answer positions across the 20: A=5, B=5, C=5, D=5.
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-tone-961",
      passageId: "psg-philosophy-961",
      type: "tone",
      stem: "The author's overall attitude toward editing the heritable human genome is best described as:",
      options: [
        "Enthusiastically eager to press ahead with enhancement.",
        "Cautiously wary, urging restraint without rejecting the technology outright.",
        "Coldly indifferent to how the technology is used.",
        "Furiously opposed, condemning all genetic editing as monstrous."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author warns against moving from cure to 'engineering what we merely prefer', so he is not eager to press ahead with enhancement.",
        "Correct: phrases like 'a humility we are not famous for', 'move slowly', and drawing 'the line at the heritable edit until we understand far more' mark a careful wariness that counsels restraint while explicitly refusing 'a permanent ban'.",
        "Wrong: the sustained argument about consent and unborn descendants shows engaged concern, not cold indifference.",
        "Wrong: the author allows easy therapeutic cases and rejects a 'permanent ban', so the tone is measured caution, not furious blanket condemnation."
      ],
      workedSolution:
        "Tone is read from the closing plea for 'a humility we are not famous for', the call to 'move slowly', and the insistence on drawing the line at the heritable edit, set against the explicit refusal of a permanent ban. That combination is cautious wariness urging restraint without rejecting the technology, not eagerness, indifference, or fury.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-962",
      passageId: "psg-politics-962",
      type: "tone",
      stem: "The phrase 'one we police acre by anxious acre' chiefly conveys a tone that is:",
      options: [
        "Admiring of diligent, attentive land management.",
        "Reassured that close control keeps the land in good order.",
        "Neutrally descriptive of farming practice.",
        "Gently critical of fretful, over-controlling stewardship."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: 'anxious' and the laborious 'acre by acre' rhythm mock the effort rather than admiring it; the author prefers the self-ordering wild system.",
        "Wrong: the author doubts that anxious control keeps the land in good order, suggesting a wild system 'may keep itself in better order', so the phrase is not reassured.",
        "Wrong: 'anxious' is an evaluative word, so the phrase passes judgement rather than describing practice neutrally.",
        "Correct: calling the management 'anxious' and stressing the plodding 'acre by acre' labour lightly faults a fretful, over-controlling stewardship, in keeping with the passage's preference for trusting the land."
      ],
      workedSolution:
        "Tone is read from the loaded word 'anxious' and the weary 'acre by acre' repetition, which paint close management as fretful overwork, set against a wild system that 'may keep itself in better order'. That is a gently critical view of over-controlling stewardship, not admiration, reassurance, or neutral description.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-963",
      passageId: "psg-politics-962",
      type: "tone",
      stem: "The author's overall attitude toward rewilding is best described as:",
      options: [
        "Persuaded in its favour, yet willing to grant the critics' objections a fair hearing.",
        "Wholly dismissive, treating it as a fashionable indulgence.",
        "Anxious and alarmed about the risks it carries.",
        "Coldly neutral, taking no side in the debate."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author plainly favours rewilding, urging us to 'trust' the land, while insisting critics' objections 'deserve an answer rather than a sneer' and conceding the farmer 'is owed more than a lecture', a committed but fair-minded stance.",
        "Wrong: he advocates rewilding rather than dismissing it, so 'wholly dismissive' contradicts the passage.",
        "Wrong: the tone is confident and persuaded, not anxious or alarmed; the anxiety he names belongs to over-controlling management.",
        "Wrong: the author argues actively for rewilding and against the 'tidy countryside', so he is not coldly neutral."
      ],
      workedSolution:
        "The author makes the case for rewilding ('to rewild is not to abandon the land but to trust it') yet treats opponents fairly, saying their objections 'deserve an answer rather than a sneer' and that the affected farmer 'is owed more than a lecture'. That is committed advocacy paired with a fair hearing for critics, not dismissal, alarm, or neutrality.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-964",
      passageId: "psg-science-963",
      type: "tone",
      stem: "The phrase 'a squeamishness we mistake for a principle' chiefly conveys an attitude that is:",
      options: [
        "Detached and even-handed, taking no side on the question.",
        "Indignant and angry at those who oppose organ markets.",
        "Provocative and faintly impatient, pressing a case the author thinks disgust has prematurely closed.",
        "Tentative and apologetic about raising the subject at all."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author openly takes a side ('I want to press the unfashionable view'), so the tone is committed, not detached or even-handed.",
        "Wrong: though pointed, the author stays measured, granting the dignity objection 'deserves respect'; this is not hot indignation or anger at opponents.",
        "Correct: recasting the standard objection as mere 'squeamishness we mistake for a principle' is a deliberately provocative, slightly impatient jab, of a piece with pressing an 'unfashionable view' against a reaction he thinks has closed the argument too soon.",
        "Wrong: far from apologetic, the author is forthright; he insists the case 'deserves a fairer hearing', the opposite of a tentative apology."
      ],
      workedSolution:
        "Reducing the opposing view to a 'squeamishness we mistake for a principle' is a pointed, provocative reframing, matching the author's stated wish to 'press the unfashionable view'. Yet he stays measured enough to call the dignity objection worthy of respect, so the tone is provocative and faintly impatient rather than detached, angry, or apologetic. That is the answer describing a provocative, impatient pressing of the case.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-965",
      passageId: "psg-history-964",
      type: "tone",
      stem: "The author's attitude toward 'the cheaper kind of judgement' is best described as:",
      options: [
        "Tolerant and accepting.",
        "Enthusiastically approving.",
        "Uncertain and conflicted.",
        "Disapproving, regarding it as a lazy and self-flattering error."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: calling the judgement 'cheaper' and a 'comfortable vice' is censure, not tolerance.",
        "Wrong: the author criticises this kind of judgement, the opposite of approval.",
        "Wrong: the position is firm, not conflicted; the author clearly prefers the 'harder discipline'.",
        "Correct: 'cheaper', 'comfortable vice', 'flatters the judge', and 'mistakes knowing the answer for understanding the question' all mark a clear disapproval of lazy hindsight."
      ],
      workedSolution:
        "Loaded phrases ('cheaper kind of judgement', 'comfortable vice', 'flatters the judge') convey firm disapproval of self-flattering hindsight, option D, not tolerance, approval, or conflict.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-966",
      passageId: "psg-literature-965",
      type: "tone",
      stem: "In saying that the purists 'who guard the sacred text mistake fidelity for virtue', the author adopts a tone that is:",
      options: [
        "Gently critical of their reverence for the original.",
        "Furiously contemptuous of everyone who reads novels.",
        "Neutral and uncommitted on the question.",
        "Admiring of their devotion to the book."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the mock-solemn 'guard the sacred text' and the verdict that they 'mistake fidelity for virtue' signal a measured, gently critical doubt about their reverence rather than outright hostility; the author still grants there is often 'truth in the complaint'.",
        "Wrong: the tone is restrained and even concedes the readers' lament has truth, so it is not furious or sweepingly contemptuous of all novel-readers.",
        "Wrong: the author takes a clear side against rigid fidelity, so 'uncommitted' is wrong.",
        "Wrong: he faults the purists for their reverence rather than admiring it; 'mistake fidelity for virtue' is a reproach, not praise."
      ],
      workedSolution:
        "'Guard the sacred text' is lightly mocking and 'mistake fidelity for virtue' delivers a measured reproach, yet the author concedes the readers' complaint 'has truth'. Together these give gentle criticism of their reverence, option A, not fury, neutrality, or admiration.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-967",
      passageId: "psg-literature-965",
      type: "tone",
      stem: "The author's attitude toward the timid adaptation that offers only 'embalmed loyalty' is:",
      options: [
        "Admiring of its restraint.",
        "Sympathetic to its caution.",
        "Critical, treating its faithful caution as lifeless rather than virtuous.",
        "Indifferent to whether an adaptation is bold or cautious."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author prizes the daring rereading over the cautious one, so he does not admire the timid adaptation's restraint.",
        "Wrong: 'embalmed loyalty' assigns a deadening fault, not a caution that earns sympathy.",
        "Correct: 'embalmed loyalty', set against 'the living argument' of the bold adaptation, marks a clear criticism of faithful timidity as lifeless.",
        "Wrong: the author plainly prefers the daring adaptation to the timid one, so 'indifferent' is wrong."
      ],
      workedSolution:
        "The timid adaptation is described with deadening language ('embalmed loyalty') and opposed to 'the living argument' of the daring one. That is criticism of lifeless fidelity, option C, set deliberately against the admired bold rereading.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-968",
      passageId: "psg-currentaffairs-966",
      type: "tone",
      stem: "The phrase 'the satisfying spectacle of severity' chiefly conveys the author's:",
      options: [
        "Approval of harsh punishment as emotionally rewarding.",
        "Critical suggestion that the public is drawn to a display of toughness mistaken for real safety.",
        "Neutral report of how punishment is staged.",
        "Fear of the offenders such severity is meant to contain."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'satisfying' names the appeal the author is diagnosing, not endorsing; he sets this spectacle against 'the harder achievement of safety', faulting it.",
        "Correct: pairing 'satisfying spectacle' with 'severity' and opposing it to genuine safety implies the public is gratified by a show of toughness that he thinks is mistaken for the real thing, a pointed criticism.",
        "Wrong: 'spectacle' and the contrast with real safety are evaluative and disapproving, not a neutral report.",
        "Wrong: the phrase targets the public's appetite for a display of toughness, not the author's fear of offenders."
      ],
      workedSolution:
        "Calling severity a 'satisfying spectacle' and contrasting it with 'the harder achievement of safety' frames public toughness as a gratifying show mistaken for real protection. That is criticism, the option describing a critical view that the public is drawn to a display mistaken for safety, not approval, neutrality, or fear.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-969",
      passageId: "psg-currentaffairs-966",
      type: "tone",
      stem: "The author's overall attitude toward the way prisons are currently run is best described as:",
      options: [
        "Critical of the muddle and the appetite for severity, yet allowing that serious crime warrants a serious answer.",
        "Wholly cynical, treating reform as hopeless and the system as beyond saving.",
        "Complacent, satisfied that prisons broadly do their job.",
        "Outraged, denouncing all punishment as inherently unjust."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author faults the system as 'asked to do everything and therefore designed to do nothing in particular', yet grants that 'serious crimes demand a serious answer' and that wanting justice done 'is not in itself disreputable', a critical but balanced stance.",
        "Wrong: he proposes a 'first reform' and calls for an honest answer, so he does not treat reform as hopeless or the system as beyond saving.",
        "Wrong: the catalogue of overcrowded cells, shuttered workshops, and reoffending as 'a standing rebuke' is the opposite of complacency.",
        "Wrong: he expressly says the wish to see justice done 'is not in itself disreputable', so he does not denounce all punishment as unjust."
      ],
      workedSolution:
        "The author condemns the incoherence and the public appetite for severity while conceding that serious crime needs a serious answer and that wanting justice is not disreputable. That is a critical but balanced attitude, not cynicism, complacency, or blanket outrage. So the answer is the critical-yet-allowing option.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-970",
      passageId: "psg-philosophy-967",
      type: "tone",
      stem: "The author's attitude toward 'the dogmatist' is best described as:",
      options: [
        "Respectful of his certainty.",
        "Critical, portraying his confidence as a refusal to inquire.",
        "Envious of his conviction.",
        "Neutral and merely descriptive."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the dogmatist is criticised, not respected; he has 'shut the door' of inquiry.",
        "Correct: the dogmatist 'has shut that door and mistaken the noise of it slamming for the sound of an argument won', a pointed criticism of false confidence.",
        "Wrong: there is no envy; the author plainly prefers proper doubt to dogmatic certainty.",
        "Wrong: the vivid 'door slamming' image is evaluative, not neutral description."
      ],
      workedSolution:
        "The slamming-door metaphor mocks the dogmatist for confusing noise with victory, a clear criticism, option B. Respect, envy, and neutrality all miss the loaded image.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-971",
      passageId: "psg-philosophy-973",
      type: "tone",
      stem: "The author's attitude toward 'the donor who gives to soothe his own conscience' is best described as:",
      options: [
        "Admiring of his generosity.",
        "Warmly sympathetic.",
        "Critical, treating his giving as self-serving sentiment rather than true kindness.",
        "Neutral and merely descriptive."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author does not admire this donor; he says the donor 'has purchased a feeling rather than performed a kindness'.",
        "Wrong: the tone is pointedly critical, not sympathetic; the donor is 'indifferent to whether the gift helps or harms'.",
        "Correct: phrases like 'purchased a feeling rather than performed a kindness' and 'the feeling is for him, not for the recipient' expose the giving as self-serving sentiment, a clear criticism.",
        "Wrong: the loaded language ('purchased a feeling', 'comfortable harm') is evaluative, not neutral description."
      ],
      workedSolution:
        "The donor who gives to soothe his conscience is said to have 'purchased a feeling rather than performed a kindness', with the benefit accruing to himself. That is criticism of self-serving sentiment, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-972",
      passageId: "psg-science-968",
      type: "tone",
      stem: "The closing sentence ('A prediction we cannot interrogate ... a liability all along') conveys a tone that is:",
      options: [
        "Reassured that accuracy is sufficient.",
        "Excited about the systems' power.",
        "Dismissive of any concern.",
        "Soberly cautionary about over-reliance on opaque systems."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the sentence warns that accuracy is not enough, the opposite of reassurance.",
        "Wrong: although the passage admits the systems are powerful, the close is a warning, not excitement.",
        "Wrong: the author voices the concern himself, so he is not dismissive of it.",
        "Correct: 'a convenience that may, on the day it matters most, prove to have been a liability' is a measured warning, in keeping with the call for 'humility', i.e. soberly cautionary."
      ],
      workedSolution:
        "The conditional warning ('may ... prove to have been a liability') and the earlier plea for 'humility' set a cautionary, sober tone, option D, not reassurance, excitement, or dismissal.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-973",
      passageId: "psg-science-968",
      type: "tone",
      stem: "The author's attitude toward the 'enthusiasts' who 'wave the difficulty away' is:",
      options: [
        "Critical, regarding their dismissal as too easy.",
        "Wholly persuaded by them.",
        "Sympathetic and reassured.",
        "Frightened of their power."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author labels the enthusiasts' rhetorical question 'glib' and answers it at length, marking their dismissal as superficial, a clear criticism.",
        "Wrong: he rejects their position, so he is not persuaded by it.",
        "Wrong: 'glib' is the reverse of sympathetic; he is unconvinced, not reassured.",
        "Wrong: the passage criticises the enthusiasts' reasoning, not out of fear of their power."
      ],
      workedSolution:
        "Calling their question 'glib' and rebutting it shows the author finds the enthusiasts' dismissal too easy. That is criticism, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-974",
      passageId: "psg-politics-969",
      type: "tone",
      stem: "The phrase 'impatience given a uniform' chiefly conveys the author's:",
      options: [
        "Admiration for decisive military leadership.",
        "Neutral report of a leadership style.",
        "Fear of disorder.",
        "Sceptical, deflating view of what passes for 'strength'."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the phrase mocks rather than admires; it reduces 'strength' to mere impatience.",
        "Wrong: 'impatience given a uniform' is a barbed reframing, not a neutral report.",
        "Wrong: the author worries about reckless action, but the phrase itself deflates 'strength' rather than expressing fear of disorder.",
        "Correct: redescribing celebrated 'strength' as 'impatience given a uniform' punctures the flattering label, a sceptical, deflating jab consistent with the passage's critique of the strong-leader cult."
      ],
      workedSolution:
        "The phrase swaps the grand word 'strength' for the unflattering 'impatience given a uniform', deflating it. That is sceptical deflation, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-975",
      passageId: "psg-politics-969",
      type: "tone",
      stem: "The author's attitude toward 'the longing for a strong leader' is best described as:",
      options: [
        "Wholly contemptuous of those who feel it.",
        "Understanding of its appeal yet critical of what it really represents.",
        "Strongly supportive of the longing.",
        "Entirely indifferent to it."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author twice calls the longing 'understandable', so he is not contemptuous of those who feel it.",
        "Correct: he grants it is 'understandable' yet diagnoses it as 'a longing to be relieved of the burden of disagreement', sympathy paired with pointed criticism.",
        "Wrong: he criticises where the longing leads, so he does not support it.",
        "Wrong: the sustained analysis shows engagement, not indifference."
      ],
      workedSolution:
        "He concedes the longing is 'understandable' but reframes it as a wish to escape self-government's burdens. That mix of empathy and critique is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-976",
      passageId: "psg-currentaffairs-970",
      type: "tone",
      stem: "The author's tone toward the parade of weekly trends is best described as:",
      options: [
        "Coldly hostile to all novelty.",
        "Fondly exasperated, amused yet wary.",
        "Breathlessly enthusiastic.",
        "Detached and clinical."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author explicitly warns against 'the reflexive sneer at anything popular', so he is not coldly hostile to novelty.",
        "Correct: 'a certain fond exasperation with the spectacle' precisely names a tone that is affectionate and amused but also weary and wary of the surrender of judgement.",
        "Wrong: the breathless enthusiasm belongs to the trend's promoters, which the author gently mocks; it is not his own tone.",
        "Wrong: 'detached and clinical' misses the warmth in 'fond exasperation'; the author is engaged, not coolly neutral."
      ],
      workedSolution:
        "The author names his own tone: 'fond exasperation'. That is affectionate weariness, option B, not hostility, enthusiasm, or clinical detachment.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-tone-977",
      passageId: "psg-literature-971",
      type: "tone",
      stem: "The author's attitude toward the narrative convention that grants minor characters 'oblivion' is:",
      options: [
        "Reproachful, viewing it as an injustice the form ought to remedy.",
        "Approving of its efficiency.",
        "Playfully teasing without real concern.",
        "Coolly impartial."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author calls the convention 'a kind of injustice', 'almost callous', and a dignity 'the form refuses to honour', a reproachful moral judgement.",
        "Wrong: he laments the convention rather than praising any efficiency in it.",
        "Wrong: words like 'injustice' and 'callous' show genuine concern, not mere teasing.",
        "Wrong: the strong evaluative language ('injustice', 'callous') is the opposite of cool impartiality."
      ],
      workedSolution:
        "'A kind of injustice', 'almost callous', 'refuses to honour' all register moral reproach toward the convention, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-978",
      passageId: "psg-history-972",
      type: "tone",
      stem: "The phrase 'the sly work that monuments do' chiefly conveys the author's:",
      options: [
        "Admiration for the craftsmanship of statues.",
        "Indifference to public memorials.",
        "Suspicion that monuments quietly smuggle in a contestable judgement.",
        "Delight in commemorative tradition."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: 'sly' concerns the rhetorical effect of monuments, not their artistry, which the author does not praise.",
        "Wrong: the author is keenly interested, devoting the passage to what monuments quietly do.",
        "Correct: 'sly work' frames monuments as covertly converting 'judgement into ... commemoration', so the tone is suspicious of a hidden argument 'disguised as a tribute'.",
        "Wrong: the author questions commemoration rather than delighting in it."
      ],
      workedSolution:
        "'Sly work' imputes a quiet, almost deceptive operation to monuments, matching 'an argument disguised as a tribute'. That is suspicion, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-979",
      passageId: "psg-science-974",
      type: "tone",
      stem: "The author's attitude toward the marketing use of the word 'natural' is best described as:",
      options: [
        "Approving of its reassuring power.",
        "Anxious and alarmed.",
        "Wistful for a simpler past.",
        "Critically dismissive, treating its authority as 'unearned' and confused."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author rejects the word's pull, calling it 'almost entirely confused', so he does not approve of it.",
        "Wrong: the tone is briskly critical rather than anxious or alarmed.",
        "Wrong: there is no nostalgia; the point is logical, that origin does not settle merit.",
        "Correct: 'unearned authority', 'almost entirely confused', and 'a feeling we have been sold rather than a fact' mark a critical, dismissive verdict on the marketing appeal."
      ],
      workedSolution:
        "Phrases like 'unearned authority' and 'a feeling we have been sold' dismiss the natural-equals-good appeal as confused, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-980",
      passageId: "psg-politics-975",
      type: "tone",
      stem: "The author's attitude toward compromise (of the better kind) is best described as:",
      options: [
        "Contemptuous, agreeing it is cowardice.",
        "Indifferent to whether people compromise.",
        "Approving, defending it as a mature necessity of shared life.",
        "Alarmed by its dangers."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: he resists the fashionable view that compromise is cowardice, so he is not contemptuous of it.",
        "Wrong: he argues actively for the better kind of compromise, so he is not indifferent.",
        "Correct: the author enters 'a quiet defence of the despised art' and calls good compromise 'the recognition ... that we have to live together' with those we cannot persuade, clear approval.",
        "Wrong: he distinguishes good compromise from shabby capitulation and defends the former; he is not alarmed by it."
      ],
      workedSolution:
        "'A quiet defence of the despised art' and praise of compromise as mature recognition of shared life signal approval, option C. He criticises only 'capitulation', a different thing.",
      difficulty: "medium",
      source: "illustrative"
    }
  );
})(typeof window !== "undefined" ? window : this);
