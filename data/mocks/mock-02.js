/*
 * mock-02.js — full LNAT Section A mock paper (Mock Paper 2) for the study site.
 *
 * NOT real exam content. Original, illustrative material calibrated against the
 * official 2010 papers: every passage is argumentative (clear thesis + reasoning)
 * and every question is answerable from its passage ALONE, with no outside
 * knowledge, exactly 4 options, and "wrong but almost right" distractors.
 *
 * Self-contained: references ONLY ids defined in this file (200-299 range).
 * Delivery model: assigns into the buckets loader.js created on window.LNAT_DATA.
 * Must load AFTER loader.js. English only.
 *
 *   12 passages  : psg-<genre>-201..212 (two per genre across the 6 genres)
 *   42 questions : q-<type>-201..242 (number unique 201-242; type token = sub-type)
 *    3 prompts   : prompt-201..203 (illustrative)
 *    1 mock      : mock-02 (sample:false, full 42-question paper)
 *
 * Per-passage question split (sums to 42): six 4-Q passages + six 3-Q passages.
 * Type distribution across the 42 (all 11 sub-types, each >= 3):
 *   main 5, standpoint 5, structure 3, detail 5, implied 3, inference 5,
 *   factinf 3, assume 4, opinion 3, vocab 3, tone 3.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-02.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ====================================================================== *
   * PASSAGES (12) — two per genre across literature, politics, science,
   * history, philosophy, currentaffairs. Each 250-380 words, argumentative.
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-philosophy-201",
      genre: "philosophy",
      title: "The Trouble with Moral Luck",
      body:
        "We like to believe that people deserve praise or blame only for what lies " +
        "within their control. A driver who checks her mirrors, signals, and brakes " +
        "carefully has done everything a careful driver can do. If a child darts out " +
        "and is killed, she is unlucky; if no child appears, she arrives home without " +
        "incident. Her conduct was identical in both cases, yet we condemn the first " +
        "driver far more harshly than the second, and the law punishes her more " +
        "severely too. This is the puzzle philosophers call moral luck: our judgements " +
        "track outcomes that the agent did nothing to bring about. " +
        "Some respond that the harsher judgement is simply a mistake, an emotional " +
        "residue we should train ourselves to discard. On this view the two drivers " +
        "are equally blameworthy, and only our squeamishness about a dead child makes " +
        "us pretend otherwise. The proposal is admirably consistent, but it asks us to " +
        "abandon almost every practice of holding people responsible. We do not, after " +
        "all, sentence attempted murderers as we sentence murderers, and few would " +
        "wish to. " +
        "A better response accepts the puzzle rather than dissolving it. Our moral life " +
        "was never built on the tidy principle that control is everything; it was built " +
        "on the messier conviction that what people actually do, and not merely what " +
        "they intend, matters. The careful driver who kills has, however blamelessly, " +
        "still killed, and that fact cannot be wished away by pointing to her intentions. " +
        "To insist that luck should make no difference is to demand a morality fit for " +
        "angels rather than for the embodied, accident-prone creatures we are. The " +
        "honest conclusion is not that our judgements are confused but that the " +
        "principle of control, however attractive, was always too simple to capture them.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-202",
      genre: "philosophy",
      title: "When Crowds Stop Being Wise",
      body:
        "The fashionable claim that crowds are wise rests on a genuine mathematical " +
        "insight. If many people guess the weight of an ox independently, their errors " +
        "tend to cancel, and the average guess can be remarkably accurate. The result " +
        "is real, but the conditions it requires are routinely forgotten by those who " +
        "invoke it. The guesses must be independent, the errors must be unbiased, and " +
        "the question must have a definite answer that the crowd is trying to find. " +
        "Remove any of these and the magic evaporates. " +
        "Consider what happens when guesses are not independent. If each person can see " +
        "what others have already said, opinions converge not because they are right " +
        "but because people imitate one another. The crowd then behaves like a single " +
        "nervous individual, prone to fashions and panics, and its average tells us " +
        "only what the loudest early voices claimed. Markets, juries, and online polls " +
        "all routinely violate the independence condition, which is why their verdicts " +
        "swing so wildly. " +
        "Worse, many of the questions we most want crowds to answer have no definite " +
        "answer to converge upon. Asking a crowd whether a policy is just, or a work " +
        "of art good, is not like asking it to weigh an ox. There is no hidden number " +
        "for the errors to cancel around. To treat the average opinion as wisdom in " +
        "such cases is to mistake popularity for truth. None of this means that " +
        "consulting many people is worthless; diverse views can expose blind spots a " +
        "single expert would miss. But the wisdom of crowds is a narrow theorem, not a " +
        "general licence to prefer the majority to the informed. Its champions too " +
        "often smuggle the conclusion past conditions they have not checked.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-201",
      genre: "politics",
      title: "The Case for Limiting Money in Politics",
      body:
        "Opponents of campaign-finance limits often cast them as an attack on free " +
        "expression: to cap what a citizen may spend supporting a candidate, the argument " +
        "runs, is to ration political speech and to stifle the very debate a democracy " +
        "depends on. The principle sounds unanswerable, but it mistakes the kind of good " +
        "that elections are meant to secure. " +
        "An election is not merely an occasion for speech; it is a procedure for weighing " +
        "citizens against one another as equals, one verdict to each. When a single donor " +
        "can fund advertising that a thousand ordinary voters together could never match, " +
        "the contest stops measuring how many are persuaded and starts measuring how much " +
        "can be spent. The wealthy speaker does not merely add his voice to the chorus; he " +
        "drowns it, and the equality the ballot was designed to register is quietly " +
        "cancelled before a single vote is cast. " +
        "Defenders of unlimited spending reply that money only buys a hearing, and that " +
        "voters remain free to judge the message on its merits. There is something to " +
        "this, but it proves less than it seems. Attention is finite, and a message " +
        "repeated a hundred times crowds out one that can be afforded only once, whatever " +
        "the relative merits of the two. A hearing monopolised is not a hearing freely " +
        "granted. " +
        "None of this requires us to pretend that money is unrelated to speech, or that " +
        "limits carry no cost. To cap spending is indeed to restrain one form of " +
        "expression, and that is a real loss to be weighed, not waved away. But every " +
        "voting rule restrains something; the question is what each rule is for. A limit " +
        "that keeps the loudest wallet from setting the terms of debate does not betray " +
        "democratic equality. It is the price of taking that equality seriously.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-202",
      genre: "politics",
      title: "The Laboratory Myth of Federalism",
      body:
        "A familiar defence of federal systems holds that regional governments act as " +
        "laboratories of democracy. Let each state try its own policies, the argument " +
        "goes, and the nation as a whole learns which ones work, copying the successes " +
        "and abandoning the failures. It is an attractive image, but the analogy with a " +
        "laboratory is looser than its admirers suppose. " +
        "A laboratory experiment is designed to isolate a single variable. The states, by " +
        "contrast, differ from one another in countless uncontrolled ways: in wealth, " +
        "history, population, and culture. When a policy appears to succeed in one state " +
        "and fail in another, we usually cannot tell whether the policy was responsible " +
        "or whether some background difference was doing the work. The experiment, in " +
        "short, has no control group, and its results are confounded from the start. " +
        "There is a further difficulty. A real experiment ends with someone reading the " +
        "results and updating accordingly. But states have little incentive to learn " +
        "from one another's failures, and every incentive to defend their own choices. A " +
        "policy that has become a point of local pride will be retained long after the " +
        "evidence has turned against it, while a neighbour's success may be ignored " +
        "precisely because it is the neighbour's. The information the laboratory is " +
        "supposed to generate is rarely collected and still more rarely acted upon. " +
        "This does not make federalism worthless. Dispersing power has real virtues: it " +
        "limits the damage any single bad decision can do and lets communities govern " +
        "themselves in matters they understand best. But these are virtues of caution " +
        "and self-rule, not of experiment. We should value federalism for containing " +
        "mistakes, not for the dubious promise that it teaches us how to avoid them.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-201",
      genre: "science",
      title: "The Limits of the Long-Range Forecast",
      body:
        "Every winter brings confident predictions of the season ahead, and every spring " +
        "brings the quiet admission that many were wrong. The temptation is to blame the " +
        "forecasters for carelessness, but the deeper problem lies in the nature of the " +
        "systems they study. The atmosphere is what mathematicians call chaotic, and " +
        "chaos sets a hard limit on how far ahead anyone can see. " +
        "A chaotic system is not random. It obeys exact physical laws, and in principle a " +
        "perfect measurement of its present state would yield a perfect prediction of its " +
        "future. The difficulty is that measurements are never perfect. In a chaotic " +
        "system the tiniest error in describing the present is amplified at every step, " +
        "doubling and redoubling until, after a week or two, a forecast built on it bears " +
        "no relation to the weather that actually arrives. Buying a more powerful computer " +
        "does not remove this barrier; it merely postpones it by a day or so, because the " +
        "amplification is built into the equations rather than into our machines. " +
        "It would be a mistake, though, to conclude that prediction is hopeless. Although " +
        "the path of an individual storm cannot be foreseen weeks ahead, the long-run " +
        "statistics of a climate can be. We cannot say whether it will rain on a given day " +
        "next month, yet we can say with confidence that a desert will stay drier than a " +
        "rainforest across the year. The lesson of chaos is not that the future is " +
        "unknowable but that two very different kinds of question, about the particular " +
        "and about the average, have been carelessly run together. Forecasters fail when " +
        "they promise the first; they succeed, unglamorously, at the second.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-202",
      genre: "science",
      title: "The Case for Publishing Failure",
      body:
        "Scientific journals compete to print discoveries, and a discovery, almost by " +
        "definition, is something that worked. An experiment that found nothing, that " +
        "tested a promising idea and watched it fail, is rarely thought worth printing. " +
        "This preference seems harmless, even sensible, but it quietly corrupts the " +
        "record on which science depends. " +
        "Suppose twenty laboratories independently test whether a drug treats a disease, " +
        "and suppose the drug is in fact useless. By chance alone, one or two of those " +
        "studies may show an apparent benefit, while the rest show nothing. If only the " +
        "striking results are published and the nineteen failures are filed away, a " +
        "reader of the literature will find a drug that seems to work, supported by " +
        "exactly the studies that, by the laws of chance, were bound to appear. The " +
        "missing failures are not neutral; their absence actively misleads. " +
        "The remedy is not to lower standards but to widen what counts as a result. A " +
        "well-designed study that finds no effect has answered its question as surely as " +
        "one that finds an effect, and the answer is often more useful, since it warns " +
        "others away from a dead end they would otherwise repeat at great expense. Some " +
        "journals now ask researchers to register their methods in advance and promise " +
        "publication whatever the outcome, so that the decision to publish cannot depend " +
        "on whether the result is exciting. " +
        "Critics object that a literature full of negative findings would be tedious and " +
        "unread. They may be right that few will read it for pleasure. But a record is " +
        "not kept to be entertaining; it is kept to be complete. A library that shelved " +
        "only happy endings would tell us little about the world, and a science that " +
        "publishes only its successes tells us little more.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-201",
      genre: "history",
      title: "The Myth of the Decisive Battle",
      body:
        "Popular history loves a decisive battle. A single afternoon, we are told, settled " +
        "the fate of an empire; had the cavalry charged an hour earlier, or the rain held " +
        "off, the whole course of centuries would have run differently. The drama is " +
        "irresistible, and that is precisely why it should be distrusted. " +
        "The trouble is that battles are the most visible events in a war but seldom the " +
        "most important. An army does not appear on the field by magic. It must be raised, " +
        "fed, paid, and armed, and the side that wins the famous engagement is usually the " +
        "side that had already won the unglamorous contest of supply and population long " +
        "before. When we credit the victory to a charge or a feint, we mistake the last " +
        "link in a long chain for the chain itself. The battle did not create the " +
        "advantages that decided it; it merely revealed them. " +
        "Nor is a single defeat as final as the storytellers imply. A wealthy and populous " +
        "state can lose a battle, even a great one, and raise another army the following " +
        "year; a poorer rival may win every engagement and still be ground down once the " +
        "fighting drags on. The lasting outcome is set less by any one clash of arms than " +
        "by which side can best afford to keep losing. " +
        "This is not to say that battles never matter, or that contingency plays no part " +
        "in history; chance can certainly hasten or delay an outcome. But to treat a " +
        "battle as the cause of an empire's rise or fall is to confuse a symptom with a " +
        "disease. The historian's task is to look past the smoke of the famous afternoon " +
        "to the slower forces that loaded the dice long before the first shot was fired.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-202",
      genre: "history",
      title: "Reading the Silences of the Archive",
      body:
        "A historian's instinct is to trust the documents, and there is no other way to " +
        "begin. Yet the documents that survive are not a fair sample of the past. They " +
        "are the records that someone, for reasons of their own, thought worth making and " +
        "worth keeping, and that accident or neglect then happened to spare. To read them " +
        "as though they spoke for everyone is to let the survivors of a shipwreck describe " +
        "the drowned. " +
        "Consider who tends to leave records. Governments tax, conscript, and prosecute, " +
        "and so the poor appear in the archive chiefly as numbers in a ledger or names in " +
        "a court roll, described from the outside by the very officials who taxed and " +
        "judged them. The literate and the powerful, by contrast, leave letters, diaries, " +
        "and memoirs in their own words. A historian who simply totals up the evidence " +
        "will therefore hear the powerful speaking for themselves and the powerless being " +
        "spoken about, and may mistake this imbalance of sources for an imbalance of " +
        "importance. " +
        "The discipline's hardest skill, then, is learning to read what is absent. When a " +
        "group leaves few records, the historian must ask why, and treat the silence " +
        "itself as evidence rather than as an empty space to be passed over. A tax roll " +
        "compiled by the state can, read against the grain, reveal something of the lives " +
        "of those it was meant only to count. " +
        "This is delicate work, and it can be overdone; a historian who hears too much in " +
        "the silences risks replacing the documents with his own imagination. The remedy " +
        "is not to stop reading the silences but to read them with the same discipline we " +
        "bring to the documents, always asking what the evidence can and cannot bear. The " +
        "archive is not a window onto the past; it is a mirror that reflects most clearly " +
        "those who built it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-201",
      genre: "literature",
      title: "In Defence of the Difficult Book",
      body:
        "A recurring complaint against serious literature is that it is needlessly hard. " +
        "Why, the reader asks, should a novel withhold its meaning, scramble its " +
        "chronology, or demand to be read twice? Surely a good writer, like a good host, " +
        "should make the guest comfortable. The complaint sounds like common sense, but " +
        "it rests on a cramped idea of what reading is for. " +
        "Not every difficulty is a fault. Some books are merely badly made, their obscurity " +
        "the residue of muddled thinking, and these deserve the impatience they provoke. " +
        "But other books are difficult because what they have to say cannot be said more " +
        "simply without being falsified. A novel that tries to render the confusion of " +
        "memory, or the way a mind contradicts itself, may have to be confusing and " +
        "contradictory on the page, because a tidy account would be a lie about its " +
        "subject. To demand that such a book be made easy is to demand that it stop doing " +
        "the very thing it set out to do. " +
        "There is also something the easy book cannot give. A work that yields all its " +
        "meaning on a first, lazy reading has nothing left to offer a second; it is used " +
        "up at once, like a joke whose punchline is known. The difficult book, by " +
        "contrast, rewards the labour it demands, releasing new meaning each time the " +
        "reader returns with more skill and patience. The effort is not a toll exacted at " +
        "the door but part of the experience itself. " +
        "None of this excuses obscurity for its own sake, the writer who hides behind fog " +
        "to seem profound. The test is whether the difficulty does any work. Where it " +
        "earns its keep, by saying something that could not otherwise be said, the demand " +
        "that literature be effortless is not a reasonable request but a refusal of what " +
        "literature can uniquely do.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-202",
      genre: "literature",
      title: "The Unreliable Narrator Reconsidered",
      body:
        "Readers often praise the unreliable narrator as the height of literary " +
        "sophistication. A storyteller who cannot be trusted, the thinking goes, forces " +
        "us to read actively, piecing together the real events from behind a distorting " +
        "screen. There is something to this, but the device is celebrated far too " +
        "uncritically, as though unreliability were a virtue in itself. " +
        "The first thing to notice is that unreliability only works if the reader can " +
        "detect it. A narrator whose distortions leave no trace is not unreliable but " +
        "simply wrong, and the reader, having no way to know better, is merely misled. " +
        "The effect the admirers prize depends entirely on the author planting clues that " +
        "let us see past the narrator, which means the supposedly untrustworthy voice is " +
        "in fact carefully managed by a wholly reliable hand behind it. The cleverness " +
        "belongs to the author, not to the device. " +
        "There is a further risk. Because an unreliable narrator can explain away any " +
        "inconsistency, the technique tempts lazy writers to excuse their own mistakes. A " +
        "plot hole becomes a clue to the narrator's confusion; a flat character becomes a " +
        "sign of the narrator's limited perception. Unfalsifiable in this way, the device " +
        "can shield bad writing from the criticism it deserves. " +
        "The honest verdict is that the unreliable narrator is a tool like any other, " +
        "neither sophisticated nor crude in itself, valuable only when it serves the work. " +
        "Used well, as a means of showing how a particular mind misperceives the world, it " +
        "can achieve effects no reliable narrator could. Used as a badge of cleverness, or " +
        "as a licence for carelessness, it achieves nothing the author could not have done " +
        "more honestly by other means. The question to ask is never whether a narrator is " +
        "unreliable, but what the unreliability is for.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-201",
      genre: "currentaffairs",
      title: "The False Promise of the Digital Detox",
      body:
        "The digital detox has become a fashionable cure for our unease about screens. " +
        "Switch off the phone for a weekend, the advice runs, retreat to a cabin, and " +
        "return refreshed and cured of your bad habits. The ritual is appealing, and it " +
        "does no harm, but as a remedy it misunderstands the problem it claims to solve. " +
        "The first objection is that the detox treats overuse as a failure of individual " +
        "willpower, a habit to be broken by a few days of abstinence. But the products " +
        "that occupy our attention are not neutral tools that we happen to misuse. They " +
        "are engineered, by some of the most talented people alive, to capture and hold " +
        "attention for as long as possible, because that attention is what they sell. To " +
        "frame the struggle as one of personal discipline is to blame the user for losing " +
        "a contest that was designed to be unwinnable. " +
        "The second objection is that the detox, by its very structure, concedes the " +
        "point. A cure that must be repeated every few weekends is not a cure but a " +
        "symptom; we do not speak of detoxing from a tool that genuinely serves us. The " +
        "weekend in the cabin functions less as a solution than as a pressure valve, " +
        "releasing just enough discomfort to let the underlying arrangement continue " +
        "unchallenged. " +
        "None of this means that individuals are powerless or that switching off is " +
        "pointless. A quiet weekend is a pleasant thing. But we should not mistake a " +
        "private indulgence for a public answer. The design of these systems is a matter " +
        "for collective decision, about what such products may and may not do, and no " +
        "amount of personal retreat will settle it. To sell the detox as the solution is " +
        "to hand responsibility to the very people least able to bear it, and to let the " +
        "designers off the hook entirely.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-202",
      genre: "currentaffairs",
      title: "Rethinking the Right to Be Forgotten",
      body:
        "The right to be forgotten lets individuals demand that search engines delist old " +
        "information about them, so that a youthful folly or a settled debt need not " +
        "shadow a person forever. The impulse behind it is humane. People change, and a " +
        "search result frozen in time can punish them long after any purpose has been " +
        "served. Yet the right, as commonly framed, sits uneasily beside another value we " +
        "claim to hold dear. " +
        "The difficulty is that one person's embarrassing past is often another person's " +
        "relevant information. The delisted article does not vanish; it is simply made " +
        "hard to find, which means the public's ability to learn true facts is curtailed " +
        "to spare an individual discomfort. When the individual is a private citizen and " +
        "the fact is trivial, that trade may be worth making. But the same machinery can " +
        "be turned by the powerful to bury matters the public has every reason to know, " +
        "and a tool built for the forgotten ex-debtor is just as available to the " +
        "fraudulent businessman. " +
        "Defenders answer that the law already distinguishes public figures from private " +
        "ones, and matters of public interest from mere gossip. So it does, on paper. But " +
        "these judgements are delicate, and they have been handed to the search companies " +
        "themselves, who must rule on thousands of requests with no incentive to err on " +
        "the side of disclosure. Faced with the choice between a costly fight and a quiet " +
        "deletion, a company will delete, and the public interest, which has no one to " +
        "file a complaint on its behalf, quietly loses. " +
        "The right to be forgotten is not therefore wrong in principle, but it has been " +
        "built the wrong way round. A remedy that genuinely balanced privacy against the " +
        "public's right to know would not leave the balancing to a private firm with " +
        "every reason to forget.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS (42) — q-<type>-201..242, in passage order, numbers unique.
   * Per-passage split: four-question passages are the -201 of each genre;
   * three-question passages are the -202 of each genre.
   * ====================================================================== */
  DATA.questions.push(
    {
      id: "q-main-201",
      passageId: "psg-philosophy-201",
      type: "main",
      stem: "Which of the following best expresses the main point of the passage?",
      options: [
        "The two drivers are equally blameworthy, and our harsher judgement of the one who kills is an error to be corrected.",
        "The puzzle of moral luck shows that the principle of control was always too simple to capture how we actually assign blame.",
        "The law is mistaken to punish a driver who kills a child more severely than one who happens to harm no one.",
        "Moral responsibility should depend entirely on what an agent intends rather than on what an agent does."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the 'emotional residue' view the author considers and rejects as demanding 'a morality fit for angels', not the conclusion reached.",
        "Correct: the closing sentences state that our judgements are not confused; rather 'the principle of control ... was always too simple to capture them', which is the central claim.",
        "Wrong: the author treats the law's harsher punishment as evidence that outcomes matter, not as a mistake to be reformed.",
        "Wrong: the passage argues the opposite, that 'what people actually do, and not merely what they intend, matters'."
      ],
      workedSolution:
        "The passage poses the moral-luck puzzle, rejects the 'discard the harsher judgement' response, and concludes that the control principle was 'too simple' while our outcome-tracking judgements are sound. Option B states that conclusion; the others restate views the author rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-202",
      passageId: "psg-philosophy-201",
      type: "standpoint",
      stem: "What is the author's attitude toward the proposal that the harsher judgement is simply a mistake?",
      options: [
        "Approving: the author regards it as the only consistent position.",
        "Indifferent: the author reports it without taking any view.",
        "Critical: the author grants its consistency but rejects it as demanding too much of human morality.",
        "Hostile: the author dismisses it as obviously absurd and unworthy of discussion."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls the proposal 'admirably consistent' but does not approve of it, instead arguing against it.",
        "Wrong: the author plainly evaluates and rejects the proposal, so 'indifferent' misreads the text.",
        "Correct: the author concedes the view is 'admirably consistent' yet objects that it 'asks us to abandon almost every practice of holding people responsible' and demands 'a morality fit for angels'.",
        "Wrong: the author takes the proposal seriously, acknowledging its consistency, rather than dismissing it as absurd."
      ],
      workedSolution:
        "Distinguish describing from judging. The author describes the 'mistake' proposal, credits it as consistent, then rejects it for abandoning ordinary responsibility. That is qualified criticism, option C, not approval, indifference, or contemptuous dismissal.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-203",
      passageId: "psg-philosophy-201",
      type: "assume",
      stem: "The author's objection to the 'mistake' proposal relies on which unstated assumption?",
      options: [
        "Most everyday practices of assigning blame are worth preserving.",
        "The two drivers intended exactly the same outcome.",
        "Attempted murderers are never punished at all.",
        "Emotions should always override consistent principles."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author treats it as decisive that the proposal would force us 'to abandon almost every practice of holding people responsible'; this counts against it only if those practices are worth keeping, an unstated premise.",
        "Wrong: that the drivers' conduct was identical is stated outright in the passage, so it is not an unstated assumption.",
        "Wrong: the passage implies attempted murderers are punished, only less severely than murderers; this option contradicts the text.",
        "Wrong: the author does not claim emotion should always win; the argument rests on the value of existing practices, not on a blanket rule favouring emotion."
      ],
      workedSolution:
        "Apply the negation test. The objection is that the proposal abandons our blame practices. If those practices were worthless, abandoning them would be no cost and the objection would fail. So the argument assumes the practices are worth preserving, option A.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-204",
      passageId: "psg-philosophy-201",
      type: "vocab",
      stem: "As used in the final paragraph, the phrase 'a morality fit for angels' most nearly means a morality that:",
      options: [
        "is divinely inspired and therefore beyond criticism.",
        "applies only to especially virtuous people.",
        "is more compassionate than ordinary human morality.",
        "ignores the fact that humans act in a physical world where accidents happen."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: 'divinely inspired' takes 'angels' literally; the passage uses it figuratively to mean free of bodily accident, and makes no claim about being beyond criticism.",
        "Wrong: the contrast is between angelic (accident-free) and human (accident-prone) existence, not between virtuous and ordinary people.",
        "Wrong: the point is not that the morality is kinder but that it is unrealistic for embodied agents; compassion is not the contrast being drawn.",
        "Correct: the phrase is glossed by its contrast with 'the embodied, accident-prone creatures we are', so it means a morality suited to beings not subject to physical accident."
      ],
      workedSolution:
        "Read the phrase against its immediate contrast: 'fit for angels rather than for the embodied, accident-prone creatures we are'. 'Angels' stands for beings free of physical accident, so the phrase means a morality that ignores human exposure to accident, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-205",
      passageId: "psg-philosophy-202",
      type: "detail",
      stem: "According to the passage, which conditions must hold for the 'wisdom of crowds' result to work?",
      options: [
        "The crowd must be large, expert, and enthusiastic.",
        "The guesses must be independent, the errors unbiased, and the question must have a definite answer.",
        "The members must be able to see one another's guesses and adjust them.",
        "The question must concern a matter of justice or artistic value."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage names independence, unbiased errors, and a definite answer; expertise and enthusiasm are not among the stated conditions.",
        "Correct: the passage states the guesses 'must be independent, the errors must be unbiased, and the question must have a definite answer that the crowd is trying to find'.",
        "Wrong: being able to see others' guesses destroys independence, which the passage gives as a violation of the conditions, not a requirement.",
        "Wrong: the passage uses questions of justice and artistic value as examples where the result fails, because they have no definite answer."
      ],
      workedSolution:
        "This is explicit comprehension. The passage lists three conditions verbatim: independent guesses, unbiased errors, and a definite answer to find. Option B reproduces them; the other options invert or replace them.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-206",
      passageId: "psg-philosophy-202",
      type: "inference",
      stem: "Which conclusion does the passage most support about an online poll whose respondents can see the running results?",
      options: [
        "Its average answer is especially trustworthy because more information is available to voters.",
        "It will always converge on the objectively correct answer.",
        "It cannot produce any answer at all.",
        "Its average answer is likely to reflect early loud voices rather than independent judgement."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says visible answers cause imitation, undermining trustworthiness, not enhancing it.",
        "Wrong: convergence on the correct answer requires independence and a definite answer, conditions a visible-results poll violates.",
        "Wrong: the passage says such a crowd still produces an average; it questions the value of that average, not its existence.",
        "Correct: the passage states that when people 'can see what others have already said', the average 'tells us only what the loudest early voices claimed', which applies directly to such a poll."
      ],
      workedSolution:
        "The passage explains that visible prior answers break independence, so opinions converge through imitation and the average reflects 'the loudest early voices'. Applied to a poll showing running results, option D follows; the others contradict the passage's reasoning.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-207",
      passageId: "psg-philosophy-202",
      type: "opinion",
      stem: "Which of the following is offered as the author's own evaluative judgement rather than as a neutral statement of the mathematical result?",
      options: [
        "To treat the average opinion as wisdom where there is no definite answer is to mistake popularity for truth.",
        "Independent guesses about an ox's weight tend to have errors that cancel.",
        "If people can see others' guesses, their opinions may converge through imitation.",
        "The averaging result requires that the question have a definite answer."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: 'to mistake popularity for truth' is the author's critical verdict on a practice, an evaluative judgement going beyond the bare mathematics.",
        "Wrong: this states the underlying mathematical mechanism neutrally, not the author's evaluation.",
        "Wrong: this describes a mechanism (imitation) factually; it reports what happens rather than passing judgement.",
        "Wrong: this simply states one of the conditions of the theorem, a neutral claim about the result."
      ],
      workedSolution:
        "Separate factual description from evaluation. Options A, C, and D report how the mechanism works. Option A delivers a judgement, that relying on the crowd here is to 'mistake popularity for truth', which is the author's opinion, so it is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-main-208",
      passageId: "psg-politics-201",
      type: "main",
      stem: "Which statement best captures the central argument of the passage?",
      options: [
        "Money has nothing to do with political speech, so limiting it costs a democracy nothing at all.",
        "Political advertising should be banned outright because it never changes how anyone votes.",
        "Limiting campaign spending protects the equality elections exist to register, and that protection is worth its cost to expression.",
        "The wealthy are better informed than ordinary voters and so deserve a louder voice in elections."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage explicitly grants that capping spending 'is indeed to restrain one form of expression' and 'a real loss', so it does not claim money is unrelated to speech or costless to limit.",
        "Wrong: the passage argues for limiting spending, not banning advertising, and never says advertising fails to move voters.",
        "Correct: the passage argues that an election weighs 'citizens against one another as equals' and that a spending limit 'is the price of taking that equality seriously', a cost it accepts as worth paying.",
        "Wrong: the passage treats outspending as drowning out others, not as a deserved reward for being better informed; it never ranks the wealthy as wiser."
      ],
      workedSolution:
        "The thesis is built across the passage: elections exist to weigh citizens as equals, unlimited spending cancels that equality, and a limit is therefore 'the price of taking that equality seriously' despite its real cost to expression. The option capturing that two-part claim, equality protected at an accepted cost, is the answer; the others deny the conceded cost, overstate the remedy as a ban, or invert the equality point.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-209",
      passageId: "psg-politics-201",
      type: "structure",
      stem: "What is the function of the third paragraph, which begins 'Defenders of unlimited spending reply that money only buys a hearing'?",
      options: [
        "It introduces the author's main thesis for the first time.",
        "It states an opposing argument and then rebuts it by appealing to the finite supply of attention.",
        "It abandons the author's earlier position in favour of the defenders'.",
        "It provides statistical evidence that spending does not affect election results."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the thesis about democratic equality is set out in the first two paragraphs; this paragraph takes up a counter-argument rather than introducing the thesis.",
        "Correct: the paragraph first states the defenders' claim that 'money only buys a hearing', then rebuts it by arguing that 'attention is finite' so a message repeated many times 'crowds out' one heard only once.",
        "Wrong: the author does not switch sides; after granting 'there is something to this' he immediately argues the point 'proves less than it seems'.",
        "Wrong: no statistics appear; the rebuttal turns on reasoning about finite attention, not data."
      ],
      workedSolution:
        "Map the paragraph's role. It opens with an opponent's reply that money merely buys a hearing, grants it a token concession, then turns to a rebuttal grounded in the scarcity of attention, where repetition crowds out a rival message. That structure is the statement of an objection followed by its rebuttal, which is the answer; the other options misread it as a thesis, a reversal, or a use of data.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-210",
      passageId: "psg-politics-201",
      type: "inference",
      stem: "The passage most strongly supports which of the following inferences?",
      options: [
        "A spending limit would remove every advantage a candidate could hold over a rival.",
        "Voters are generally unable to evaluate a political message once they have heard it.",
        "The candidate with the most persuasive message reliably wins under unlimited spending.",
        "A candidate able to far outspend rivals can largely determine which messages voters most often encounter."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage targets only the distortion caused by spending; it never claims a limit erases all other advantages a candidate might have.",
        "Wrong: the passage allows that voters 'remain free to judge the message on its merits'; its point is that attention is monopolised, not that voters cannot evaluate.",
        "Wrong: the passage argues the reverse, that under unlimited spending the contest measures 'how much can be spent' rather than how persuasive the message is.",
        "Correct: the passage says a heavily funded message 'repeated a hundred times crowds out one that can be afforded only once', supporting the inference that a big spender shapes which messages voters mostly meet."
      ],
      workedSolution:
        "An inference must be supported, not merely plausible. The passage states that a message a wealthy candidate can repeat many times crowds out one a rival can afford only once. From this it follows that a candidate who vastly outspends others largely controls which messages reach voters, which is the answer. The remaining options are either contradicted by the text or overstated beyond what it claims.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-211",
      passageId: "psg-politics-201",
      type: "tone",
      stem: "The phrase 'the loudest wallet' in the final paragraph chiefly conveys a tone that is:",
      options: [
        "Disapproving, treating the dominance of concentrated money as something to be resisted.",
        "Neutral and purely descriptive.",
        "Admiring of the influence that wealthy donors bring to a campaign.",
        "Playful, making a joke at no one's expense."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: yoking volume to a 'wallet' mocks the idea that spending power should set 'the terms of debate', marking the author's disapproval of money's dominance.",
        "Wrong: 'loudest wallet' is a loaded, evaluative image, not a neutral description of campaign spending.",
        "Wrong: the author argues for limiting such influence, so an admiring reading runs against the passage.",
        "Wrong: the phrase is pointed rather than merely playful; it carries a clear critical edge, not a joke at no one's expense."
      ],
      workedSolution:
        "Tone is read from diction. Fusing loudness with a 'wallet' ridicules the notion that the deepest pockets should dictate debate, and the sentence casts that outcome as something a spending limit rightly prevents. The combination is disapproving, which is the answer; neutral, admiring, and merely playful all miss the critical charge.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-212",
      passageId: "psg-politics-202",
      type: "factinf",
      stem: "Which of the following is presented in the passage as a stated fact rather than as the author's inference?",
      options: [
        "Federalism should be valued for containing mistakes rather than for teaching policy lessons.",
        "The information a federal 'laboratory' is supposed to generate is rarely acted upon.",
        "States differ from one another in wealth, history, population, and culture.",
        "The analogy between federalism and a laboratory is looser than its admirers suppose."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the author's concluding recommendation, an evaluative inference, not a bare stated fact.",
        "Wrong: the claim that the information is 'rarely collected and still more rarely acted upon' is the author's interpretive conclusion drawn from states' incentives, not a simply reported fact.",
        "Correct: that states 'differ from one another in countless uncontrolled ways: in wealth, history, population, and culture' is stated as a plain fact on which the argument then builds.",
        "Wrong: that the analogy is 'looser than its admirers suppose' is the author's evaluative thesis, the very inference the passage argues for."
      ],
      workedSolution:
        "Separate reported facts from steps the author takes. The differences among states (wealth, history, population, culture) are stated as fact. The looseness of the analogy, the failure to act on information, and the recommendation are inferences built on such facts. Option C is the fact.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-213",
      passageId: "psg-politics-202",
      type: "detail",
      stem: "According to the passage, why can we usually not tell whether a policy itself caused an outcome in a given state?",
      options: [
        "Because states deliberately conceal their policy results from one another.",
        "Because the federal government forbids comparison between states.",
        "Because policies are never tried in more than one state at a time.",
        "Because states differ in many uncontrolled ways, so results are confounded and there is no control group."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: concealment is not mentioned; the stated problem is uncontrolled background differences, not secrecy.",
        "Wrong: no federal prohibition on comparison is mentioned anywhere in the passage.",
        "Wrong: the passage's point is that comparisons across differing states are confounded, not that policies appear in only one state.",
        "Correct: the passage says states 'differ from one another in countless uncontrolled ways' so we 'cannot tell whether the policy was responsible' and 'the experiment ... has no control group'."
      ],
      workedSolution:
        "Locate the stated reason. The passage attributes the difficulty to states differing 'in countless uncontrolled ways', leaving the comparison 'confounded' with 'no control group'. Option D reproduces this; the others introduce causes the passage never gives.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-214",
      passageId: "psg-politics-202",
      type: "assume",
      stem: "The author's claim that federalism's results are 'confounded from the start' assumes which of the following?",
      options: [
        "States never share any characteristics with one another.",
        "Useful policy lessons can be drawn only when a single variable can be isolated from others.",
        "Laboratory experiments are the only source of knowledge of any kind.",
        "Federal governments are generally more competent than regional ones."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the argument needs states to differ in relevant ways, not to share nothing; this overstates the premise.",
        "Correct: the charge of confounding matters only if isolating a variable is necessary for a useful lesson; the author assumes the laboratory standard of single-variable isolation applies to policy learning.",
        "Wrong: the author allows other virtues and sources of value; the argument does not assume experiments are the only knowledge.",
        "Wrong: the relative competence of governments is never at issue in the confounding argument."
      ],
      workedSolution:
        "Negation test. If useful lessons did not require isolating variables, confounding would not defeat the laboratory claim. So the argument assumes that single-variable isolation is needed for a genuine policy lesson, option B.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-215",
      passageId: "psg-science-201",
      type: "standpoint",
      stem: "Which best describes the author's overall stance on long-range weather prediction?",
      options: [
        "Prediction is hopeless, and forecasters should stop attempting it.",
        "Forecasters are simply careless and could see much further ahead with more effort.",
        "Predicting particular events far ahead is impossible, but predicting long-run averages is not, so the two must be kept apart.",
        "A powerful enough computer will eventually make accurate long-range forecasts routine."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly says 'it would be a mistake ... to conclude that prediction is hopeless'.",
        "Wrong: the author rejects carelessness, locating 'the deeper problem ... in the nature of the systems they study'.",
        "Correct: the author holds that individual events cannot be foreseen far ahead while 'the long-run statistics of a climate can be', faulting the careless running together of the two questions.",
        "Wrong: the author says a more powerful computer 'does not remove this barrier; it merely postpones it by a day or so'."
      ],
      workedSolution:
        "The author's position balances two claims: particulars are unpredictable far ahead, averages are predictable, and conflating them is the error. That measured stance is option C; the other options take an extreme the author explicitly disowns.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-216",
      passageId: "psg-science-201",
      type: "detail",
      stem: "According to the passage, why does buying a more powerful computer fail to extend a forecast indefinitely?",
      options: [
        "Because the amplification of error is built into the equations, so more computing power only postpones the barrier by a day or so.",
        "Because forecasters do not know how to program such computers.",
        "Because chaotic systems are random and so cannot be computed at all.",
        "Because measurements of the present state are always perfect."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states the computer 'merely postpones it by a day or so, because the amplification is built into the equations rather than into our machines'.",
        "Wrong: programming skill is never mentioned; the limit is attributed to the mathematics of the system.",
        "Wrong: the passage explicitly says a chaotic system 'is not random' and obeys 'exact physical laws'.",
        "Wrong: the passage says the opposite, that 'measurements are never perfect', which is the source of the problem."
      ],
      workedSolution:
        "Find the stated reason. The passage says error amplification 'is built into the equations rather than into our machines', so more power only buys 'a day or so'. Option A reproduces this; the others contradict the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-217",
      passageId: "psg-science-201",
      type: "factinf",
      stem: "Which of the following is presented in the passage as a stated fact about chaotic systems rather than as the author's broader interpretation?",
      options: [
        "The lesson of chaos is that two kinds of question have been carelessly run together.",
        "The future is not, in the end, unknowable.",
        "Forecasters fail when they promise to predict particular events far ahead.",
        "A chaotic system obeys exact physical laws and is not random."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the author's overarching 'lesson', an interpretive conclusion, not a bare factual statement about the systems.",
        "Wrong: 'the future is not ... unknowable' is the author's concluding interpretation drawn from the facts, not itself a reported fact.",
        "Wrong: this is the author's evaluative diagnosis of why forecasters fail, a judgement rather than a stated property of the systems.",
        "Correct: that a chaotic system 'obeys exact physical laws' and 'is not random' is stated as a fact about such systems, on which the rest of the argument builds."
      ],
      workedSolution:
        "Separate reported facts from interpretation. The defining facts about chaotic systems (lawful, not random) are factual premises; the 'lesson', the diagnosis of failure, and the verdict on knowability are conclusions built on them. Option D is the fact.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-218",
      passageId: "psg-science-201",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Climate scientists cannot say anything reliable about long-run averages.",
        "Two equally careful measurements of today's atmosphere could lead to very different two-week forecasts if they differ even slightly.",
        "Weather forecasting will become perfectly accurate within a few years.",
        "The atmosphere does not obey physical laws."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says the opposite, that long-run statistics 'can be' predicted with confidence.",
        "Correct: since 'the tiniest error in describing the present is amplified ... doubling and redoubling', two near-identical measurements differing slightly would yield wildly diverging forecasts, an implication the passage supports without stating it in these words.",
        "Wrong: the passage denies forecasts can be perfected, since the barrier is built into the equations.",
        "Wrong: the passage states a chaotic system 'obeys exact physical laws', contradicting this option."
      ],
      workedSolution:
        "Stated-vs-implied. The explicit claim is that tiny present errors amplify until a forecast 'bears no relation' to reality. The unstated but supported step is that two slightly different but equally careful measurements diverge into very different forecasts, option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-219",
      passageId: "psg-science-202",
      type: "structure",
      stem: "What is the main function of the second paragraph, which describes twenty laboratories testing a useless drug?",
      options: [
        "It presents an illustrative case showing how publishing only striking results can make a useless drug appear effective.",
        "It states the author's thesis for the first time.",
        "It concedes that negative results are too tedious to publish.",
        "It offers real statistics from a named clinical trial."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the twenty-laboratory case is a worked example demonstrating that if only the chance 'successes' are printed, 'a reader ... will find a drug that seems to work', illustrating the corruption of the record.",
        "Wrong: the thesis (selective publication 'corrupts the record') is introduced in the first paragraph; this paragraph supplies an illustration.",
        "Wrong: the tedium objection appears in the final paragraph, raised by critics, not here.",
        "Wrong: the laboratories are a hypothetical illustration ('Suppose twenty laboratories'), not real named statistics."
      ],
      workedSolution:
        "Identify the paragraph's role. 'Suppose twenty laboratories...' signals a hypothetical example that demonstrates the first paragraph's claim in concrete terms. That is illustration, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-220",
      passageId: "psg-science-202",
      type: "implied",
      stem: "The passage implies that the practice of registering methods in advance and promising publication regardless of outcome would:",
      options: [
        "make scientific journals more entertaining to read.",
        "guarantee that every registered drug turns out to be effective.",
        "make a study's publication independent of whether its result is exciting.",
        "lower the methodological standards expected of researchers."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage concedes a complete record may be 'tedious', so it does not imply greater entertainment.",
        "Wrong: registration affects publication, not whether a drug works; the passage's example features a drug that is in fact useless.",
        "Correct: the passage says such registration is adopted 'so that the decision to publish cannot depend on whether the result is exciting', implying publication becomes independent of the result's appeal.",
        "Wrong: the author insists 'the remedy is not to lower standards but to widen what counts as a result'."
      ],
      workedSolution:
        "The passage states the purpose of advance registration: to sever the publication decision from the excitement of the result. Option C restates that implication; the others contradict the passage's explicit points about standards, drug efficacy, and tedium.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-221",
      passageId: "psg-science-202",
      type: "tone",
      stem: "The closing image of 'a library that shelved only happy endings' is used to convey a tone that is:",
      options: [
        "Cheerfully optimistic about the state of scientific publishing.",
        "Nostalgic for an earlier age of science.",
        "Detached and strictly neutral about publication practices.",
        "Pointedly critical, underscoring how a selective record distorts the truth."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the image is a warning about distortion, not an optimistic endorsement.",
        "Wrong: nothing in the passage looks back fondly on a past era; the concern is the present record's completeness.",
        "Wrong: the pointed analogy is evaluative, not neutral; it is deployed to condemn the practice.",
        "Correct: comparing selective publishing to a library of 'only happy endings' that 'would tell us little about the world' drives home a critical point about distortion of the record."
      ],
      workedSolution:
        "Tone is read from the rhetorical image. The 'happy endings' library is an unflattering comparison meant to expose how selective publication misleads, signalling pointed criticism, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-222",
      passageId: "psg-history-201",
      type: "main",
      stem: "Which of the following best expresses the main argument of the passage?",
      options: [
        "Famous battles are the true causes of the rise and fall of empires.",
        "Battles usually reveal rather than create the deeper advantages of supply and population that decide wars.",
        "Chance plays no role whatever in the outcomes of wars.",
        "Poorer states win wars more often than wealthy ones."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the popular view the author sets out to debunk, calling it a confusion of 'a symptom with a disease'.",
        "Correct: the passage argues the winning side 'had already won the unglamorous contest of supply and population', so a battle 'did not create the advantages that decided it; it merely revealed them'.",
        "Wrong: the author concedes 'chance can certainly hasten or delay an outcome', so denying any role for chance misstates the text.",
        "Wrong: the passage says a poorer rival 'may win every engagement and still be ground down', the opposite of this option."
      ],
      workedSolution:
        "The thesis is that battles reveal pre-existing advantages rather than create them, and that lasting outcomes turn on supply and population. Option B states this; the others restate the rejected view or contradict explicit concessions.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-223",
      passageId: "psg-history-201",
      type: "standpoint",
      stem: "How would the author most likely respond to someone who says 'that battle decided the fate of the empire'?",
      options: [
        "Agree wholeheartedly, since single battles are decisive.",
        "Argue that only chance, and nothing else, determined the result.",
        "Insist that the battle had no connection to the empire's fate at all.",
        "Caution that the battle probably revealed advantages already in place rather than causing the outcome."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author distrusts exactly this kind of claim, calling the drama of decisive battles something 'to be distrusted'.",
        "Wrong: the author treats chance as able only to 'hasten or delay', not as the sole determinant.",
        "Wrong: the author allows battles 'matter' and reveal advantages, so denying any connection overstates the view.",
        "Correct: the author would say the battle 'merely revealed' advantages of supply and population won 'long before', not that it caused the empire's fate."
      ],
      workedSolution:
        "Apply the author's stated position to a new case. Since battles reveal rather than create advantages, the author would qualify the claim, saying the battle exposed an outcome already loaded by supply and population. That is option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-224",
      passageId: "psg-history-201",
      type: "vocab",
      stem: "In the final paragraph, the phrase 'loaded the dice long before the first shot was fired' is used to mean that:",
      options: [
        "the outcome was already heavily tilted by slower forces before the battle began.",
        "the battle's result was determined purely by random chance.",
        "soldiers cheated to secure the victory.",
        "the outcome could not be predicted by anyone."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: 'loaded the dice' here is a metaphor for the 'slower forces' that tilted the result in advance, consistent with the passage's stress on supply and population.",
        "Wrong: the passage argues outcomes are set by deeper advantages, not by randomness; this reverses the point.",
        "Wrong: 'loaded the dice' is figurative; no literal cheating by soldiers is meant or mentioned.",
        "Wrong: the metaphor concerns predetermination by deeper forces, not unpredictability; indeed the forces make the outcome more, not less, intelligible."
      ],
      workedSolution:
        "Read the metaphor in context. The passage urges looking past the battle 'to the slower forces that loaded the dice long before'. 'Loaded the dice' thus means the outcome was tilted in advance by those forces, option A, not literal cheating or randomness.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-225",
      passageId: "psg-history-201",
      type: "factinf",
      stem: "Which of the following does the passage present as the author's inference rather than as an uncontested fact?",
      options: [
        "An army must be raised, fed, paid, and armed.",
        "A populous state can lose a battle and raise another army the following year.",
        "Crediting a victory to a charge mistakes the last link in a chain for the chain itself.",
        "A battle is the most visible event in a war."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that an army must be raised, fed, paid, and armed is stated as a plain fact about armies.",
        "Wrong: this is offered as a general fact about wealthy, populous states, used as a premise rather than as the contested conclusion.",
        "Correct: the claim that crediting victory to a charge 'mistake[s] the last link ... for the chain itself' is the author's interpretive judgement, the inference the argument is building.",
        "Wrong: that battles are 'the most visible events in a war' is presented as an uncontested observation, not as the author's contested inference."
      ],
      workedSolution:
        "Distinguish premises from the step beyond them. The visibility of battles and the logistics of armies are factual premises; the claim that we 'mistake the last link ... for the chain' is the inference drawn from them. Option C is that inference.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-226",
      passageId: "psg-history-202",
      type: "opinion",
      stem: "Which statement best expresses the author's own opinion rather than a neutral description of the archive?",
      options: [
        "The poor often appear in the archive as numbers in a ledger or names in a court roll.",
        "Learning to read what is absent is the discipline's hardest skill.",
        "Governments tax, conscript, and prosecute their populations.",
        "The literate and the powerful leave letters, diaries, and memoirs."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this neutrally describes how the poor appear in records; it reports a state of affairs rather than passing judgement.",
        "Correct: calling reading the silences 'the discipline's hardest skill' is the author's evaluative judgement about what historical work demands, not a neutral description.",
        "Wrong: this states a plain fact about what governments do, used as a premise, not the author's opinion.",
        "Wrong: this neutrally describes the records the powerful leave; it is descriptive, not evaluative."
      ],
      workedSolution:
        "Separate evaluation from description. Options A, C, and D describe who leaves what records. Option B ranks reading silences as 'the hardest skill', an evaluative judgement, making it the author's opinion.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-227",
      passageId: "psg-history-202",
      type: "inference",
      stem: "The passage most strongly supports which of the following inferences about a historian who 'simply totals up the evidence'?",
      options: [
        "Such a historian relies only on the records left by the poor.",
        "Such a historian will produce a perfectly balanced account of the past.",
        "Such a historian ignores documents entirely.",
        "Such a historian is likely to overstate the importance of the powerful and understate that of the poor."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the imbalance runs toward the powerful, who leave more records, not toward the poor.",
        "Wrong: the passage says the opposite, that such totalling produces a skewed, not balanced, account.",
        "Wrong: totalling up the evidence means using the documents, not ignoring them.",
        "Correct: the passage warns that totalling the evidence makes a historian 'mistake this imbalance of sources for an imbalance of importance', i.e. overstate the powerful and understate the poor."
      ],
      workedSolution:
        "The passage states that counting sources leads one to 'mistake this imbalance of sources for an imbalance of importance'. Since the powerful leave more records, the historian overstates them and understates the poor, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-228",
      passageId: "psg-history-202",
      type: "vocab",
      stem: "As used in the third paragraph, reading a tax roll 'against the grain' most nearly means:",
      options: [
        "extracting from a source information it was not designed to convey.",
        "rejecting the source as worthless because it is biased.",
        "copying the source's figures without alteration.",
        "reading the document in its original language."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says a state's tax roll 'can, read against the grain, reveal something of the lives of those it was meant only to count', i.e. yield what it was not designed to convey.",
        "Wrong: 'against the grain' here means using the biased source, not discarding it; the very next idea is what it can 'reveal'.",
        "Wrong: copying figures unchanged is ordinary 'with the grain' reading, the opposite of the contextual sense.",
        "Wrong: nothing ties the phrase to original-language reading; that idea is absent from the passage."
      ],
      workedSolution:
        "Read the phrase in its sentence: a tax roll 'meant only to count' people can, against the grain, reveal their lives. So it means drawing out information the source was not designed to give, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-229",
      passageId: "psg-literature-201",
      type: "main",
      stem: "Which of the following best captures the central claim of the passage?",
      options: [
        "All difficult books are profound and worth the effort they demand.",
        "Good writers should always make their books easy and comfortable to read.",
        "Difficulty in literature is justified when it does real work that could not be done by a simpler treatment, though not when it is mere obscurity.",
        "Literature has no obligation to communicate with its readers at all."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly denies this, conceding some books are 'merely badly made' and deserve impatience.",
        "Wrong: the author rejects the demand for effortless literature as 'a refusal of what literature can uniquely do'.",
        "Correct: the passage holds that 'the test is whether the difficulty does any work', defending difficulty that says 'something that could not otherwise be said' while condemning 'obscurity for its own sake'.",
        "Wrong: the author allows that mere obscurity is a fault, implying literature should communicate; it simply may be hard."
      ],
      workedSolution:
        "The passage distinguishes earned difficulty (which does work) from mere obscurity (a fault). Its thesis is the conditional defence in option C; the other options ignore one half of the distinction.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-230",
      passageId: "psg-literature-201",
      type: "standpoint",
      stem: "What is the author's attitude toward 'the writer who hides behind fog to seem profound'?",
      options: [
        "Disapproving: such obscurity is treated as a fault that earns no defence.",
        "Approving, since such fog is the mark of serious literature.",
        "Neutral, treating it as no better or worse than earned difficulty.",
        "Uncertain, refusing to judge whether such writing is good or bad."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says 'none of this excuses obscurity for its own sake' and contrasts the fog-hiding writer unfavourably with difficulty that earns its keep.",
        "Wrong: the author defends only difficulty that 'does any work', explicitly not obscurity used to seem profound.",
        "Wrong: the author sharply distinguishes mere fog from earned difficulty, so treating them alike misreads the text.",
        "Wrong: the author reaches a clear judgement against pointless obscurity, not an uncertain stance."
      ],
      workedSolution:
        "The author's evaluative line, 'none of this excuses obscurity for its own sake', condemns the fog-hiding writer. The attitude is disapproving, option A, distinguished sharply from the defence of difficulty that does work.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-231",
      passageId: "psg-literature-201",
      type: "assume",
      stem: "The argument that a difficult book can be worth its difficulty relies on which assumption?",
      options: [
        "That easy books are never worth reading.",
        "That readers always enjoy difficult books more than easy ones.",
        "That every book worth reading must be read at least twice.",
        "That some things worth saying cannot be said more simply without being falsified."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author allows some easy books are fine and condemns only books 'used up at once'; this option overstates the claim.",
        "Wrong: the author speaks of difficulty being 'rewarded', not of readers always enjoying it more; enjoyment is not the premise.",
        "Wrong: the passage says the difficult book 'rewards' rereading, but does not assume every worthwhile book must be reread.",
        "Correct: the defence of difficulty depends on the premise that certain subjects 'cannot be said more simply without being falsified'; without it, the difficulty would have no justification."
      ],
      workedSolution:
        "Negation test. If everything worth saying could be said simply, hard books would have no justification and the defence would collapse. So the argument assumes some things cannot be simplified without falsification, option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-232",
      passageId: "psg-literature-201",
      type: "detail",
      stem: "According to the passage, what does the easy book fail to provide that the difficult book can?",
      options: [
        "A clear and comfortable first reading.",
        "New meaning released on rereading, since the easy book is 'used up at once'.",
        "A subject worth writing about.",
        "Any meaning at all on a first reading."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: a comfortable first reading is what the easy book does provide; the question asks what it fails to provide.",
        "Correct: the passage says a book that 'yields all its meaning on a first ... reading has nothing left to offer a second', whereas the difficult book keeps 'releasing new meaning each time the reader returns'.",
        "Wrong: the passage does not say easy books lack a worthwhile subject; the contrast concerns rereading, not subject matter.",
        "Wrong: the easy book gives its meaning at once; it is not said to lack meaning on a first reading."
      ],
      workedSolution:
        "Locate the stated contrast. The easy book is 'used up at once' with 'nothing left to offer a second' reading, while the difficult book keeps releasing meaning on return. The missing feature is rereadable meaning, option B.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-standpoint-233",
      passageId: "psg-literature-202",
      type: "standpoint",
      stem: "Which best describes the author's overall view of the unreliable narrator?",
      options: [
        "It is inherently the most sophisticated of all narrative devices.",
        "It is always a sign of lazy writing and should be avoided.",
        "It is a neutral tool, valuable only when it serves the work and worthless when used as a badge of cleverness or a cover for carelessness.",
        "It is impossible for readers ever to detect and therefore pointless."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls this celebration 'far too uncritical' and denies the device is sophisticated 'in itself'.",
        "Wrong: the author says that, 'used well', it 'can achieve effects no reliable narrator could', so it is not always lazy writing.",
        "Correct: the author's 'honest verdict' is that it is 'a tool like any other ... valuable only when it serves the work', powerful used well and empty used as a badge of cleverness or licence for carelessness.",
        "Wrong: the author says unreliability 'only works if the reader can detect it' via planted clues, not that it can never be detected."
      ],
      workedSolution:
        "The author rejects both the uncritical praise and a blanket dismissal, settling on a conditional view: a neutral tool, good only when it serves the work. That balanced verdict is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-234",
      passageId: "psg-literature-202",
      type: "inference",
      stem: "The passage most strongly supports which inference about a narrator whose distortions leave no detectable trace?",
      options: [
        "The reader is simply misled rather than reading with the active insight admirers prize.",
        "Such a narrator represents the highest form of literary art.",
        "Such a narrator makes the author's skill especially visible to the reader.",
        "The reader will always reconstruct the true events correctly."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says such a narrator 'is not unreliable but simply wrong, and the reader, having no way to know better, is merely misled'.",
        "Wrong: the passage reserves praise for unreliability the reader can detect; an undetectable distortion is not held up as the highest art.",
        "Wrong: it is detectable clues that reveal the author's managing hand; undetectable distortion hides rather than displays that skill.",
        "Wrong: with no trace to follow, the reader cannot reconstruct the truth; the passage says the reader is 'merely misled'."
      ],
      workedSolution:
        "The passage states that without a detectable trace the narrator is 'simply wrong' and the reader is 'merely misled'. Option A restates this supported inference; the others contradict the passage's logic about detection.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-235",
      passageId: "psg-literature-202",
      type: "tone",
      stem: "The author's use of the phrase 'as though unreliability were a virtue in itself' conveys a tone that is:",
      options: [
        "Wholeheartedly admiring of how the device is celebrated.",
        "Bitterly outraged at anyone who uses the device.",
        "Strictly neutral, merely reporting a common opinion.",
        "Gently mocking of the uncritical praise the device receives."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the phrase signals disagreement with the praise, not admiration for it.",
        "Wrong: the tone is wry and measured, not outraged; the author later grants the device real value when used well.",
        "Wrong: the 'as though' construction marks the author's distance from the view, so it is not neutral reporting.",
        "Correct: 'as though unreliability were a virtue in itself' mocks the assumption behind the praise, treating it as naive and dropping the device from a pedestal."
      ],
      workedSolution:
        "Tone from diction. The 'as though ... a virtue in itself' construction quietly ridicules the assumption that unreliability is automatically good, marking a gently mocking attitude toward the uncritical praise, option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-236",
      passageId: "psg-currentaffairs-201",
      type: "structure",
      stem: "How are the two central paragraphs of the passage (the 'first objection' and 'second objection') organised?",
      options: [
        "They offer two pieces of evidence that the digital detox is an effective cure.",
        "They present two distinct objections to the detox: that it misframes the problem, and that it merely manages rather than cures it.",
        "The second paragraph withdraws the claim made in the first.",
        "They give a chronological history of how the digital detox developed."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: both paragraphs attack the detox; neither offers evidence that it works.",
        "Correct: the paragraphs are explicitly signposted 'The first objection...' (it blames the user for an unwinnable contest) and 'The second objection...' (a repeated cure is 'a symptom'), two separate criticisms.",
        "Wrong: the second objection adds a further criticism rather than retracting the first.",
        "Wrong: the paragraphs analyse the detox's logic, not the timeline of its emergence."
      ],
      workedSolution:
        "Map the structure. The signposts 'first objection' and 'second objection' introduce two independent criticisms (misframing the problem; managing rather than curing). That is two distinct objections, option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-237",
      passageId: "psg-currentaffairs-201",
      type: "detail",
      stem: "According to the passage, why does the author say the struggle against these products is 'a contest that was designed to be unwinnable'?",
      options: [
        "Because users lack the intelligence to resist them.",
        "Because the products are simple, neutral tools.",
        "Because no one has ever succeeded in switching off a phone.",
        "Because the products are deliberately engineered to capture and hold attention, since attention is what they sell."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage blames the design of the products, not any deficiency in users' intelligence.",
        "Wrong: the passage explicitly denies they are 'neutral tools that we happen to misuse'.",
        "Wrong: the passage describes weekend switch-offs as real, even pleasant, not impossible.",
        "Correct: the passage says the products 'are engineered ... to capture and hold attention for as long as possible, because that attention is what they sell', making willpower an unfair contest."
      ],
      workedSolution:
        "Find the stated reason. The contest is 'unwinnable' because the products are engineered by experts to hold attention, which they sell. Option D reproduces this; the others contradict the passage.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-238",
      passageId: "psg-currentaffairs-201",
      type: "assume",
      stem: "The author's claim that the detox 'is not a cure but a symptom' depends on which assumption?",
      options: [
        "A genuine cure would not need to be repeated regularly.",
        "Spending a weekend in a cabin is physically harmful.",
        "Most people own a phone they use every day.",
        "Designers of these products intend to help their users."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author infers 'symptom, not cure' from the fact that the detox 'must be repeated every few weekends'; this only follows if a real cure would not require regular repetition.",
        "Wrong: the author calls the weekend 'a pleasant thing', so harm is not assumed; indeed it would undercut that concession.",
        "Wrong: phone ownership is background context, not the premise linking repetition to the 'symptom' conclusion.",
        "Wrong: the passage suggests designers seek to hold attention they sell, the opposite of intending to help; this is not an assumption the argument relies on."
      ],
      workedSolution:
        "Negation test. If a genuine cure could require regular repetition, the need to repeat the detox would not show it is 'a symptom'. So the argument assumes a real cure need not be repeated, option A.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-239",
      passageId: "psg-currentaffairs-201",
      type: "implied",
      stem: "The passage implies, without directly stating, that lasting change in how these products behave will require:",
      options: [
        "more frequent and longer digital detox weekends.",
        "every individual permanently giving up their phone.",
        "collective decisions, such as rules about what the products may and may not do, rather than individual abstinence alone.",
        "trusting the product designers to reform themselves voluntarily."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage treats repeated detoxes as a 'symptom', not as the route to lasting change.",
        "Wrong: the passage says individuals are not 'powerless' and that a weekend off is fine; it does not imply permanent personal renunciation.",
        "Correct: by saying 'the design of these systems is a matter for collective decision ... and no amount of personal retreat will settle it', the passage implies lasting change needs collective rules rather than individual retreat.",
        "Wrong: the passage casts designers as selling attention and being 'let ... off the hook', so it does not imply trusting them to self-reform."
      ],
      workedSolution:
        "Stated-vs-implied. The explicit claim is that design is 'a matter for collective decision' that 'personal retreat' cannot settle. The implied conclusion is that lasting change requires collective rules, not abstinence alone, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-240",
      passageId: "psg-currentaffairs-202",
      type: "main",
      stem: "Which of the following best expresses the main point of the passage?",
      options: [
        "The right to be forgotten should be abolished because privacy does not matter.",
        "Delisted information is permanently destroyed, so the public can never recover it.",
        "Search companies always strike the right balance between privacy and the public interest.",
        "The right to be forgotten is humane in principle but has been built the wrong way round, leaving delicate judgements to search firms inclined to delete."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls the impulse 'humane' and the right 'not ... wrong in principle', so abolition for privacy's sake misstates the view.",
        "Wrong: the passage states a delisted article 'does not vanish; it is simply made hard to find', so it is not destroyed.",
        "Wrong: the passage argues firms have 'no incentive to err on the side of disclosure' and will tend to delete, contradicting this option.",
        "Correct: the passage concludes the right 'is not therefore wrong in principle, but it has been built the wrong way round', because balancing is left to firms with 'every reason to forget'."
      ],
      workedSolution:
        "The thesis balances praise for the right's humane aim with the structural criticism that the balancing is misassigned to search firms. Option D states this; the others contradict explicit claims about principle, firms' incentives, and deletion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-241",
      passageId: "psg-currentaffairs-202",
      type: "inference",
      stem: "The passage most strongly supports which inference about how search companies will tend to decide borderline delisting requests?",
      options: [
        "They will tend to delete rather than fight, because they have no incentive to favour disclosure.",
        "They will refuse most requests in order to protect the public interest.",
        "They will refer every borderline case to an independent court.",
        "They will charge individuals a high fee before deleting anything."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says firms have 'no incentive to err on the side of disclosure' and, facing 'a costly fight' or 'a quiet deletion', 'a company will delete', supporting this inference.",
        "Wrong: the passage says the public interest 'has no one to file a complaint on its behalf' and tends to lose, so firms will not generally refuse to protect it.",
        "Wrong: the passage says the judgements 'have been handed to the search companies themselves', not referred to courts.",
        "Wrong: no fee for deletion is mentioned; the incentive described is to avoid a costly fight, not to charge individuals."
      ],
      workedSolution:
        "An inference must follow from the text. The passage gives firms no incentive to disclose and a choice between a costly fight and quiet deletion, concluding 'a company will delete'. The supported inference is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-242",
      passageId: "psg-currentaffairs-202",
      type: "opinion",
      stem: "Which statement best expresses the author's own opinion rather than a neutral description of how the right operates?",
      options: [
        "A delisted article is made hard to find rather than removed from existence.",
        "Search companies must rule on thousands of delisting requests.",
        "The right to be forgotten has been built the wrong way round.",
        "The law distinguishes public figures from private individuals."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this neutrally describes what delisting does to an article, not the author's verdict.",
        "Wrong: this factually describes the companies' workload; it reports a state of affairs without judgement.",
        "Correct: 'built the wrong way round' is the author's evaluative conclusion about the right's design, an opinion rather than a neutral description.",
        "Wrong: this neutrally states what the law does; it is description, not the author's opinion."
      ],
      workedSolution:
        "Distinguish evaluation from description. Options A, C, and D describe how the right and the law operate. Option C delivers the author's judgement that the right is 'built the wrong way round', making it the opinion.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * ESSAY PROMPTS (3) — illustrative, theme-tagged, realistic LNAT style.
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-201",
      theme: "media-tech-environment",
      text:
        "Should there be legal limits on how far technology companies may design " +
        "their products to capture users' attention?",
      source: "illustrative"
    },
    {
      id: "prompt-202",
      theme: "politics-governance",
      text:
        "“Limiting the number of terms an elected representative may serve does " +
        "more harm than good.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-203",
      theme: "education-society",
      text:
        "Is a society right to value difficult art and literature more highly than " +
        "work that is easy to enjoy?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * MOCK — mock-02, full 42-question paper (sample:false). References only
   * ids defined above. Passages in order; questionIds in passage order.
   * ====================================================================== */
  DATA.mocks.push({
    id: "mock-02",
    title: "Mock Paper 2",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-philosophy-201",
        "psg-philosophy-202",
        "psg-politics-201",
        "psg-politics-202",
        "psg-science-201",
        "psg-science-202",
        "psg-history-201",
        "psg-history-202",
        "psg-literature-201",
        "psg-literature-202",
        "psg-currentaffairs-201",
        "psg-currentaffairs-202"
      ],
      questionIds: [
        "q-main-201",
        "q-standpoint-202",
        "q-assume-203",
        "q-vocab-204",
        "q-detail-205",
        "q-inference-206",
        "q-opinion-207",
        "q-main-208",
        "q-structure-209",
        "q-inference-210",
        "q-tone-211",
        "q-factinf-212",
        "q-detail-213",
        "q-assume-214",
        "q-standpoint-215",
        "q-detail-216",
        "q-factinf-217",
        "q-implied-218",
        "q-structure-219",
        "q-implied-220",
        "q-tone-221",
        "q-main-222",
        "q-standpoint-223",
        "q-vocab-224",
        "q-factinf-225",
        "q-opinion-226",
        "q-inference-227",
        "q-vocab-228",
        "q-main-229",
        "q-standpoint-230",
        "q-assume-231",
        "q-detail-232",
        "q-standpoint-233",
        "q-inference-234",
        "q-tone-235",
        "q-structure-236",
        "q-detail-237",
        "q-assume-238",
        "q-implied-239",
        "q-main-240",
        "q-inference-241",
        "q-opinion-242"
      ]
    },
    sectionB: {
      promptIds: ["prompt-201", "prompt-202", "prompt-203"]
    }
  });
})(typeof window !== "undefined" ? window : this);
