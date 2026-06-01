/*
 * mock-05.js — full LNAT Section A mock exam (Mock Paper 5).
 *
 * Original, illustrative content authored against data/SCHEMA.md. It is fully
 * self-contained: every question, prompt and the mock object reference ONLY the
 * IDs defined in this file (range 500-599). All MCQs use exactly 4 options and
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
 *   - 3 illustrative essay prompts.
 *   - The mock-05 object wiring all 12 passages, 42 questions and 3 prompts.
 *
 * Topics (all distinct from mocks 01-04 and from the banned-topic list):
 *   literature   : genre fiction vs literary prestige; death of the author
 *   politics     : wealth taxes & fairness; judicial review vs parliamentary sovereignty
 *   science      : AI authorship & creativity; open access vs traditional publishing
 *   history      : counterfactual reasoning; microhistory vs grand narrative
 *   philosophy   : free will & the reactive attitudes; the ethics of imposing risk
 *   currentaffairs: overtourism & sense of place; meritocracy & its discontents
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-05.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ====================================================================== *
   * PASSAGES — 12 across 6 genres (2 each), ids 501-512.
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-literature-501",
      genre: "literature",
      title: "The Snobbery of the Serious Novel",
      body:
        "A quiet prejudice governs the way we sort fiction. On one side sit the " +
        "literary novels, granted prizes, reviewed at length, and assumed to " +
        "repay close study. On the other sit the genres, the detective story, " +
        "the romance, the tale of distant planets, which are read by millions " +
        "and respected by few. The dividing line is treated as though it marked " +
        "a difference in quality, but it marks something nearer to a difference " +
        "in fashion. A book is filed as genre fiction when it obeys a familiar " +
        "pattern, a murder solved or a love requited, and as literary when it " +
        "does not; yet obeying a pattern is no more a fault than departing from " +
        "one is a merit. The crime novel that anatomises a city's corruption " +
        "and the literary novel that follows a marriage through forty years are " +
        "both bound by conventions, simply different ones. What decides a book's " +
        "worth is not whether it has a recognisable shape but what it does " +
        "within that shape: the precision of its observation, the life of its " +
        "characters, the pressure of its sentences. Some genre novels meet that " +
        "test more fully than the prize-winners of their year, and some " +
        "celebrated literary novels fail it while wearing the costume of " +
        "seriousness. None of this means the categories are useless, for a " +
        "reader looking for a particular pleasure is right to seek it where it " +
        "is reliably found. It means only that the categories describe a kind " +
        "of book, not a level of achievement, and that to mistake the label for " +
        "a verdict is to let a marketing category do the work that reading " +
        "alone can honestly perform.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-502",
      genre: "literature",
      title: "What the Author Cannot Settle",
      body:
        "When readers disagree about what a poem means, someone will often " +
        "propose to end the quarrel by asking what the author intended. The " +
        "appeal is understandable, but it rests on a confusion about where a " +
        "work's meaning lives. A finished poem is a public object made of " +
        "words, and words carry the senses a language gives them whether or not " +
        "the writer foresaw each one. A poet who meant a line to console may " +
        "find readers chilled by it, and the chill is not a misreading to be " +
        "corrected by consulting the poet's diary; it is a property the words " +
        "genuinely have. This is why even the author, returning to an old work, " +
        "can be surprised by it, reading as a stranger reads and discovering " +
        "what was not consciously put there. If the maker can be surprised, " +
        "then intention cannot be the final court of meaning, for one cannot " +
        "be surprised by the contents of one's own decree. The point is easily " +
        "overstated. To deny intention the last word is not to declare that a " +
        "text means anything a reader pleases, which would make interpretation " +
        "a free-for-all and criticism pointless. The words themselves set " +
        "limits; a reading must answer to what is on the page, and most " +
        "fanciful interpretations fail precisely there. What follows is more " +
        "modest: that a poem, once released, belongs to the language as much as " +
        "to its author, and that the question worth asking is not what the " +
        "writer hoped to do but what the words actually do. The author lights " +
        "the fire; he does not own the warmth, and the reader who feels it is " +
        "not obliged to check the match.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-503",
      genre: "politics",
      title: "The Case for Taxing Wealth",
      body:
        "Most taxes fall on income, on what a person earns in a year, and leave " +
        "untouched the far larger sums that sit in property, shares and " +
        "inherited estates. Defenders of this arrangement say that wealth has " +
        "already been taxed once as it was earned, and that to tax it again is " +
        "to punish thrift. The objection has a surface appeal and a hidden " +
        "flaw. A great deal of large wealth was never earned by the person who " +
        "holds it; it was inherited, or it swelled as land and assets rose in " +
        "value while the owner slept. To tax only income is therefore to ask " +
        "the salaried nurse to contribute from her labour while the heir whose " +
        "fortune grows untouched contributes nothing on the growth. Fairness, " +
        "properly understood, tracks the capacity to pay, and capacity is far " +
        "better measured by what one owns than by what one happens to receive " +
        "in a given year. A modest annual levy on fortunes above a high " +
        "threshold would reach resources that income tax cannot, and would do " +
        "so without touching the savings of ordinary households at all. " +
        "Critics warn that the rich would simply move their money abroad, and " +
        "the warning is serious; a tax that cannot be collected raises nothing. " +
        "But the difficulty is one of design, not of principle. Property cannot " +
        "flee, registries can be shared across borders, and the same ingenuity " +
        "now spent avoiding tax could be met by ingenuity in collecting it. To " +
        "abandon the aim because the execution is hard is to confuse a " +
        "practical obstacle with a moral verdict. The deeper question is not " +
        "whether a wealth tax is easy but whether a system that taxes the wage " +
        "and spares the windfall can call itself fair, and the honest answer is " +
        "that it cannot.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-504",
      genre: "politics",
      title: "Who Should Have the Last Word",
      body:
        "In any constitutional order a question eventually arises: when an " +
        "elected parliament passes a law that appears to violate a fundamental " +
        "right, who decides whether the law stands? One answer gives the last " +
        "word to judges, empowered to strike down statutes that breach a " +
        "protected right. Another keeps the last word with parliament, on the " +
        "ground that those who make the law must answer to the voters, while " +
        "judges answer to no one. Each answer purchases a virtue at a price. " +
        "Judicial review protects the individual and the unpopular minority " +
        "against the passing temper of a majority, which is no small thing; " +
        "rights that a legislature could repeal at will are rights held on " +
        "sufferance. Yet it does so by handing contested moral questions to a " +
        "small, unelected body whose reasoning, however careful, cannot be " +
        "voted out when the public disagrees. Parliamentary supremacy keeps " +
        "decisions accountable, since a law the people detest can be reversed " +
        "at the next election; but accountability is cold comfort to the " +
        "minority whose rights the majority is presently content to override. " +
        "The choice, then, is not between a system that respects rights and one " +
        "that does not, but between two ways of deciding whose judgement about " +
        "rights should prevail when reasonable people disagree. Those who " +
        "trumpet judicial review as simply the defence of rights, and those who " +
        "trumpet parliamentary supremacy as simply the defence of democracy, " +
        "are each describing one half of a trade-off and calling it the whole. " +
        "A mature constitution does not pretend the tension away; it decides, " +
        "with open eyes, which risk it would rather run, the risk of an " +
        "overbearing court or the risk of an overbearing majority, knowing that " +
        "no arrangement escapes both.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-505",
      genre: "science",
      title: "Can a Machine Be an Author?",
      body:
        "Now that software can produce a passable sonnet or a plausible " +
        "watercolour on demand, it is tempting to announce that machines have " +
        "become creative, and equally tempting to insist that they never could " +
        "be. Both reactions move too fast. The interesting question is not " +
        "whether the output looks creative, for it plainly can, but what we are " +
        "crediting when we call a human work creative in the first place. We " +
        "do not praise a poem merely because its words are novel; a random " +
        "generator could shuffle words into novelty without anyone calling the " +
        "result art. We praise it because choices were made: because a maker, " +
        "pursuing some purpose and answerable for the result, selected this " +
        "word over that one for reasons that can be questioned and defended. A " +
        "system that predicts the most probable next word has no purpose of its " +
        "own and answers for nothing; it is a mirror polished by millions of " +
        "human examples, returning a composite of what people have already " +
        "made. This does not settle matters in the machine's disfavour, for one " +
        "might reply that human originality is also assembled from what came " +
        "before. But there remains a difference the analogy glosses over. The " +
        "human borrower can be asked why, and can answer; the machine can only " +
        "be asked how it was built. Until a system can own its choices, " +
        "creativity is the wrong word for what it does, however striking the " +
        "product. The achievement, real as it is, belongs less to the program " +
        "than to the uncounted authors whose work it silently recombines, and " +
        "to the engineers who aimed it. To call the machine the author is to " +
        "thank the mirror for the face.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-506",
      genre: "science",
      title: "Who Pays to Read the Science",
      body:
        "Most research is paid for by the public, through universities and " +
        "government grants, and yet for much of the last century the public " +
        "could not read it without paying again. The findings appeared in " +
        "journals that charged steep subscriptions, so that a result funded by " +
        "taxpayers sat behind a paywall most taxpayers could not cross. The " +
        "open-access movement set out to correct this, arguing that work the " +
        "public has already financed should be freely available to read. The " +
        "principle is hard to fault, and the older model, in which a few " +
        "publishers earned large margins gatekeeping publicly funded knowledge, " +
        "is hard to defend. But the reform has a sting that its champions did " +
        "not always foresee. If readers no longer pay, someone else must, and " +
        "under the dominant arrangement that someone is the author, charged a " +
        "fee to publish. The paywall that once blocked readers has in effect " +
        "moved to the other end of the process and now blocks writers, and it " +
        "blocks them unevenly. A scholar at a wealthy institution can absorb " +
        "the publication fee; a researcher in a poorer country, or at an " +
        "underfunded department, may not, and so the very openness meant to " +
        "democratise knowledge can quietly decide whose findings enter the " +
        "record. This does not show that open access was a mistake, only that " +
        "moving a cost is not the same as removing it. A reform that frees the " +
        "reader while taxing the author has not abolished the barrier to " +
        "knowledge; it has relocated it, and a barrier at the point of writing " +
        "may exclude exactly the voices a public archive most needs to hear.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-507",
      genre: "history",
      title: "The Uses of the Road Not Taken",
      body:
        "Serious historians are often wary of the question 'what if', dismissing " +
        "speculation about roads not taken as a parlour game unworthy of a " +
        "discipline devoted to what actually happened. The caution is partly " +
        "right and wholly understandable, yet pressed too far it conceals " +
        "something the historian cannot do without. To say that one cause " +
        "produced an effect is already to make a claim about what would have " +
        "followed had the cause been absent; a counterfactual is smuggled into " +
        "the very word 'cause'. When we assert that a tax revolt triggered a " +
        "rebellion, we commit ourselves to the view that, without the tax, the " +
        "rebellion would have been less likely, and that hidden comparison is " +
        "doing the explanatory work. The disreputable 'what if' is therefore " +
        "only the explicit form of a move every causal claim makes silently. " +
        "What discredits the parlour game is not that it imagines alternatives " +
        "but that it imagines them carelessly, piling change upon change until " +
        "the exercise floats free of evidence. A disciplined counterfactual is " +
        "different: it alters one thing, holds the rest of the known world " +
        "fixed, and asks, on the basis of what we understand about that world, " +
        "what difference the single change would plausibly have made. Used this " +
        "way the method does not abandon evidence; it tests how much weight a " +
        "proposed cause can really bear. The historian who refuses every " +
        "counterfactual is not being more rigorous than one who reasons with " +
        "them carefully. He has merely hidden his counterfactuals inside his " +
        "verbs, where they cannot be examined, and called the concealment " +
        "rigour.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-508",
      genre: "history",
      title: "The Village and the Age",
      body:
        "There are two ways to write the history of a period. One surveys it " +
        "from above, tracing the broad movements, the rise of a class, the " +
        "spread of a faith, the slow turning of an economy, in a narrative " +
        "that spans nations and centuries. The other burrows downward into a " +
        "single village, a single trial, a single obscure life, and tries to " +
        "reconstruct a whole world from one small point. The grand narrative " +
        "has the obvious advantage of scope; it can say what an age was like in " +
        "general, and generalisation is part of what we want from history. But " +
        "it buys that reach at a cost, for the large pattern is assembled by " +
        "averaging, and averages erase the very texture of lived experience, " +
        "the exception that did not fit, the ordinary person who never " +
        "registered as a trend. Microhistory makes the opposite wager. By " +
        "examining one case in exhaustive depth it can recover detail and " +
        "contradiction that the survey smooths away, and can test whether the " +
        "grand generalisation actually held on the ground or merely looked " +
        "tidy from a distance. Its own danger is equally plain: a single " +
        "village may be unrepresentative, and a vivid particular case can " +
        "seduce a reader into mistaking it for the rule. Neither approach is " +
        "simply the more truthful. The survey without the close case risks a " +
        "history of bloodless abstractions; the close case without the survey " +
        "risks a heap of fascinating fragments that add up to no larger " +
        "understanding. The history worth having moves between the two scales, " +
        "letting the small case interrogate the large pattern and the large " +
        "pattern give the small case its meaning, and treating either scale " +
        "alone as a partial view mistaken, by its practitioners, for the whole.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-509",
      genre: "philosophy",
      title: "Blame and the Suspended Reaction",
      body:
        "Suppose the philosophers who deny free will are right, and every choice " +
        "is the inevitable product of causes reaching back before our birth. " +
        "Many assume that this would abolish blame, since one cannot fairly " +
        "resent a person for doing what could not have been otherwise. The " +
        "inference is too quick, and the reason illuminates what blame actually " +
        "is. Our reactions to one another, the gratitude, the resentment, the " +
        "indignation we feel when wronged, are not conclusions we reach after " +
        "settling the metaphysics of causation; they are the natural responses " +
        "of creatures who live among other people and care how they are " +
        "treated. We do not first prove that an insult was uncaused and then " +
        "decide to feel aggrieved. The feeling comes unbidden, and the question " +
        "is whether the truth of universal causation gives us reason to give " +
        "it up. Tellingly, we already suspend resentment in particular cases, " +
        "not because we discover the act was caused, which is always true, but " +
        "because of something special about it: the person was pushed, or was " +
        "a small child, or did not know what the package contained. We excuse " +
        "the agent who lacked the ordinary capacity to understand and respond " +
        "to reasons. But that is a distinction within the caused world, not a " +
        "demand that some actions escape causation altogether. Since our " +
        "practice of excusing never depended on finding an uncaused act, the " +
        "discovery that no act is uncaused removes nothing that the practice " +
        "ever relied on. Blame was never a verdict about metaphysics. It was " +
        "always a way of holding one another to the standards of beings who " +
        "can be reached by reasons, and a being who can be so reached remains " +
        "answerable whether or not his answer was, in the end, caused.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-510",
      genre: "philosophy",
      title: "The Wrong of Risking",
      body:
        "We usually judge an action by the harm it causes, but a great deal of " +
        "what we do harms no one and yet still seems wrong. A driver who races " +
        "through a red light at midnight may meet no other car and injure " +
        "nobody, and the reckless gun owner who fires into the air may happen " +
        "to hit no one. If wrongdoing were simply the causing of harm, we would " +
        "have to say these people did nothing wrong, since by luck no harm " +
        "occurred. That verdict is hard to accept, and the difficulty points to " +
        "an overlooked truth: imposing a risk on others is itself a way of " +
        "wronging them, quite apart from whether the risk happens to ripen into " +
        "injury. To gamble with someone else's safety without their consent is " +
        "to treat their interests as counters in a wager they never agreed to " +
        "enter, and that disrespect is real whether or not the dice fall badly. " +
        "It might be objected that risk is unavoidable, since almost every " +
        "action endangers someone to some tiny degree, and a rule against all " +
        "risk would forbid leaving the house. The objection is sound but does " +
        "not touch the point. What we condemn is not risk as such but the " +
        "imposition of an unreasonable risk, one whose danger to others is out " +
        "of all proportion to its purpose; ordinary careful driving imposes a " +
        "risk we collectively accept, while drunk speeding does not. The " +
        "wrongness lies in the unreasonableness of the gamble, not in the " +
        "tragic outcome that may or may not follow. A morality that waits for " +
        "harm before it speaks arrives too late, and says nothing to the lucky " +
        "reckless, who differ from the unlucky only in what fortune spared " +
        "them, not in anything they chose.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-511",
      genre: "currentaffairs",
      title: "When the Visitors Outnumber the Place",
      body:
        "A celebrated city draws the travellers who wish to see it, and beyond " +
        "a certain point the travellers begin to destroy the very thing they " +
        "came for. The lanes that charmed the first visitors fill with crowds " +
        "that charm no one; the bakery that fed the neighbourhood becomes a " +
        "counter selling souvenirs; the residents who gave the place its life " +
        "are priced out by short-term lets and depart, leaving a stage set with " +
        "no actors. This is the paradox of overtourism: the popularity that a " +
        "place earns by being distinctive steadily erases the distinctiveness " +
        "that earned it. Defenders of unrestricted tourism point to the money " +
        "it brings, and the money is real, but it is not the whole account. " +
        "Much of it flows to owners who do not live there and to chains that " +
        "could trade anywhere, while the costs, the noise, the crowding, the " +
        "hollowing of a community into a backdrop, fall on those who remain. A " +
        "town that measures only its takings will count overtourism a success " +
        "even as the thing of value quietly disappears. The honest response is " +
        "not to wall the gates, which would be both impossible and mean, but to " +
        "recognise that a place is not an inexhaustible resource to be consumed " +
        "without limit. What gives a city its worth, the sense that real lives " +
        "are lived in it, is precisely what mass tourism wears away, and a " +
        "visitor who loves such a place has an interest, alongside its " +
        "residents, in not loving it to death. To treat access as unlimited is " +
        "to mistake a living community for a museum that cannot be exhausted, " +
        "and so to spend, without noticing, the very capital that drew the " +
        "crowds.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-512",
      genre: "currentaffairs",
      title: "The Trouble with Deserving It",
      body:
        "A meritocracy promises to reward people according to their talent and " +
        "effort rather than their birth, and the promise is rightly popular, " +
        "for the alternative, a society that hands out position by bloodline, " +
        "is plainly worse. Yet the meritocratic ideal carries a difficulty that " +
        "its admirers seldom face. If those at the top are there because they " +
        "deserve to be, then those at the bottom must, by the same logic, " +
        "deserve their place too, and a doctrine meant to dignify achievement " +
        "begins to justify inequality and to blame the unsuccessful for their " +
        "own condition. There is a further problem with the very notion of " +
        "deserved talent. The abilities a meritocracy rewards, a quick mind, a " +
        "capacity for sustained work, even the drive to compete, are " +
        "themselves largely the gifts of genes and upbringing that no one " +
        "earns. The child born to attentive parents in a good school district " +
        "did nothing to deserve those advantages, and to treat the success they " +
        "make possible as wholly earned is to mistake good fortune for virtue. " +
        "None of this is an argument for abandoning merit as a way of assigning " +
        "jobs; we want the bridge built by the ablest engineer, not the " +
        "best-born one. It is an argument against the moral conceit that " +
        "frequently travels with it, the belief that those who rise have earned " +
        "every part of their station and owe nothing to luck or to the society " +
        "that nurtured them. A meritocracy that forgets how much of merit is " +
        "inherited becomes not the opposite of an aristocracy but its " +
        "best-disguised heir, distributing privilege while flattering the " +
        "privileged that they made themselves.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — 42 four-option MCQs, ids 501-542. Each is answerable from
   * its passage alone, with one defensible key and three distractors that
   * are each wrong for a distinct, stated reason.
   * ====================================================================== */
  DATA.questions.push(
    /* --- psg-literature-501 (4 questions) --- */
    {
      id: "q-main-501",
      passageId: "psg-literature-501",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Genre fiction is generally superior to the literary novels that win prizes.",
        "The literary/genre divide marks a difference in kind, not in quality, so the label should never be mistaken for a verdict on a book's worth.",
        "The categories of literary and genre fiction are useless and should be discarded.",
        "A novel's worth is decided by whether it follows a recognisable pattern."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says only that some genre novels outdo the prize-winners of their year, not that genre fiction is generally superior; he keeps the comparison case by case.",
        "Correct: the passage argues the divide 'describe[s] a kind of book, not a level of achievement' and that 'to mistake the label for a verdict' is the error, which the whole text develops.",
        "Wrong: the author explicitly says the categories are 'not useless', since a reader seeking a particular pleasure is right to look where it is found.",
        "Wrong: the passage states the reverse, that following a pattern is 'no more a fault than departing from one is a merit'."
      ],
      workedSolution:
        "Find the claim the whole passage serves. The thesis is that the " +
        "literary/genre line tracks kind rather than quality, so the label is " +
        "not a verdict. The answer states exactly that. The 'genre is superior' " +
        "and 'pattern decides worth' options overstate or invert the argument, " +
        "and the 'categories are useless' option is expressly denied.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-502",
      passageId: "psg-literature-501",
      type: "structure",
      stem:
        "What is the function of the sentence 'None of this means the categories " +
        "are useless, for a reader looking for a particular pleasure is right to " +
        "seek it where it is reliably found'?",
      options: [
        "It abandons the argument the passage has been making.",
        "It introduces the passage's central thesis for the first time.",
        "It qualifies the argument, conceding a legitimate use for the categories so the central claim is not overstated.",
        "It gives a concrete example of a mislabelled novel."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author does not abandon the argument; the next sentence restates the narrower point that the categories mark kind, not achievement.",
        "Wrong: the thesis (label is not a verdict) is developed earlier; this late sentence cannot be its first statement.",
        "Correct: by granting that the categories usefully guide a reader seeking a particular pleasure, the sentence heads off the misreading that the author thinks them worthless, narrowing and protecting the central claim.",
        "Wrong: no specific novel is named here; the sentence is a concession, not an illustration."
      ],
      workedSolution:
        "Locate the sentence in the argument map. After attacking the use of the " +
        "labels as verdicts, the author concedes the labels still serve a reader " +
        "seeking a known pleasure, then restates the narrower point. That is a " +
        "qualifying concession, not an abandonment, a new thesis, or an example.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-503",
      passageId: "psg-literature-501",
      type: "vocab",
      stem:
        "As used in the phrase 'while wearing the costume of seriousness', " +
        "'costume' most nearly means:",
      options: [
        "An outward appearance adopted without the substance behind it.",
        "A historically accurate period dress.",
        "The cost or price of producing a book.",
        "A regular custom or established habit."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the phrase describes celebrated novels that 'fail' the test of worth yet look serious, so 'costume' names an outward show of seriousness without the substance.",
        "Wrong: the literal theatrical or period-dress sense does not fit; the passage concerns the look of seriousness, not clothing.",
        "Wrong: 'costume' is not being used to mean expense; cost of production is not in play here.",
        "Wrong: this confuses 'costume' with the near-homophone 'custom'; the passage means an assumed appearance, not a habit."
      ],
      workedSolution:
        "Read the word in its sentence: novels that fail the test of worth while " +
        "'wearing the costume of seriousness'. The contrast is between looking " +
        "serious and being good, so 'costume' means an outward appearance " +
        "without the substance. The literal-dress and 'custom' readings are the " +
        "traps.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-tone-504",
      passageId: "psg-literature-501",
      type: "tone",
      stem:
        "The closing remark that mistaking the label for a verdict lets 'a " +
        "marketing category do the work that reading alone can honestly perform' " +
        "conveys a tone that is:",
      options: [
        "Warmly approving of how books are currently categorised.",
        "Bitterly contemptuous of everyone who reads genre fiction.",
        "Uncertain and hesitant about the author's own position.",
        "Pointedly critical, exposing a lazy substitute for genuine judgement."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the line criticises reliance on the category; it is the opposite of approval of current practice.",
        "Wrong: the author respects genre readers, calling them 'right to seek' their pleasure; the criticism targets a habit of judgement, not readers.",
        "Wrong: the phrasing is decisive, not hesitant; the author states his judgement plainly.",
        "Correct: setting 'a marketing category' against the honest work of 'reading alone' sharply faults the use of labels as a shortcut for judgement, a pointed but measured criticism that fits the argument."
      ],
      workedSolution:
        "Tone is read from word choice. Opposing a 'marketing category' to what " +
        "'reading alone can honestly perform' lands a criticism on using labels " +
        "as a substitute for judgement, while staying measured. That is pointed " +
        "criticism, not approval, hesitation, or contempt for readers.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-literature-502 (3 questions) --- */
    {
      id: "q-standpoint-505",
      passageId: "psg-literature-502",
      type: "standpoint",
      stem:
        "What is the author's attitude toward using the author's intention to " +
        "settle what a work means?",
      options: [
        "Accepting: intention is the final court of a work's meaning.",
        "Indifferent: the author takes no view on the matter.",
        "Hostile to interpretation itself as a worthwhile activity.",
        "Critical: intention cannot have the last word, though the words on the page still set limits."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author argues 'intention cannot be the final court of meaning', directly rejecting this.",
        "Wrong: the passage argues a clear position at length, so 'indifferent' misreads it.",
        "Wrong: the author defends interpretation that 'answer[s] to what is on the page'; he limits one method, not the activity.",
        "Correct: the author denies intention the last word (the maker can be surprised by his own work) yet insists 'the words themselves set limits', the balanced critical view the passage defends."
      ],
      workedSolution:
        "Separate the view described from the view held. The author rejects " +
        "intention as the final arbiter, using the surprised author as evidence, " +
        "but refuses the opposite extreme that a text means anything at all. The " +
        "attitude is critical-but-qualified, not accepting, indifferent, or " +
        "hostile to interpretation.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-506",
      passageId: "psg-literature-502",
      type: "detail",
      stem:
        "According to the passage, why can even the author be surprised by an " +
        "old work of their own?",
      options: [
        "Because the author has usually forgotten writing it.",
        "Because the author's diary records a different intention.",
        "Because readers have secretly altered the text since publication.",
        "Because a finished work belongs to the language and carries senses the writer did not consciously put there."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: forgetting the act of writing is never given as the reason; the passage locates the surprise in the words carrying unforeseen senses.",
        "Wrong: the diary is cited as something that cannot correct a reading, not as the source of the author's surprise.",
        "Wrong: nothing in the passage suggests readers alter the text; the surprise comes from the words' own meanings, not tampering.",
        "Correct: the passage says words 'carry the senses a language gives them whether or not the writer foresaw each one', so the returning author reads 'as a stranger reads' and finds what 'was not consciously put there'."
      ],
      workedSolution:
        "This is explicit comprehension. The passage explains the author's " +
        "surprise by the words carrying senses the writer did not consciously " +
        "intend, so the maker reads as a stranger. The other options invent " +
        "reasons (forgetting, tampering, the diary) the passage does not give.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-507",
      passageId: "psg-literature-502",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "A reading that ignores what is on the page can still be correct if it is imaginative.",
        "Every interpretation a reader proposes is as good as every other.",
        "Consulting the author's stated intention is the only way to rule out a bad reading.",
        "An interpretation can be judged wrong when it is not answerable to the words on the page."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says a reading 'must answer to what is on the page', so a reading that ignores the page is not endorsed.",
        "Wrong: the author expressly denies a free-for-all in which a text 'means anything a reader pleases'.",
        "Wrong: the author denies intention the last word, so consulting it cannot be the only test; the text itself supplies the limit.",
        "Correct: by stating the words 'set limits' and that 'most fanciful interpretations fail precisely there', the passage supports judging a reading wrong when it does not answer to the text."
      ],
      workedSolution:
        "An inference must follow from the text. The passage holds that the " +
        "words set limits and fanciful readings fail by ignoring them. The " +
        "supported conclusion is that a reading can be wrong when it does not " +
        "answer to the page. The other options contradict the page-limit or the " +
        "rejection of intention as final.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-politics-503 (4 questions) --- */
    {
      id: "q-main-508",
      passageId: "psg-politics-503",
      type: "main",
      stem: "Which of the following best captures the central argument of the passage?",
      options: [
        "A wealth tax is impossible to collect and should therefore be abandoned.",
        "Taxing income twice is unfair and should be stopped.",
        "Because fairness tracks capacity to pay, which wealth measures better than yearly income, a system that taxes wages but spares wealth cannot call itself fair.",
        "Inherited fortunes are the only legitimate target of any tax."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author treats collection as 'a difficulty of design, not of principle' and argues against abandoning the aim; this states the view he rebuts.",
        "Wrong: 'taxing income twice is unfair' is the defenders' objection the author criticises, not his conclusion.",
        "Correct: the passage argues fairness 'tracks the capacity to pay', that wealth measures capacity better than annual income, and that a system taxing the wage and sparing the windfall 'cannot' be fair.",
        "Wrong: the author proposes a levy on large fortunes generally, not only on inheritances; inheritance is one example of unearned wealth."
      ],
      workedSolution:
        "Identify the defended conclusion. The author grounds fairness in " +
        "capacity to pay, argues wealth tracks it better than income, and " +
        "concludes a wage-only system is unfair, treating collection as a design " +
        "problem. The answer states that thesis; the rest restate objections he " +
        "rejects or overstate a side point.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-509",
      passageId: "psg-politics-503",
      type: "structure",
      stem:
        "What role does the sentence 'Critics warn that the rich would simply " +
        "move their money abroad, and the warning is serious' play in the " +
        "passage?",
      options: [
        "It states the author's main conclusion.",
        "It raises an objection the author takes seriously and then answers, rather than dismisses.",
        "It abandons the author's argument about fairness.",
        "It introduces a new topic unrelated to taxing wealth."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the main conclusion is that a wage-only system is unfair; this sentence introduces a challenge to the proposal, not the conclusion.",
        "Correct: the author grants the capital-flight warning is 'serious', then answers it ('the difficulty is one of design, not of principle'), so it is an objection raised and rebutted, not waved away.",
        "Wrong: the fairness argument is not abandoned; the author returns to it, calling collection a practical obstacle rather than a moral verdict.",
        "Wrong: capital flight is directly about whether a wealth tax can work, not an unrelated topic."
      ],
      workedSolution:
        "Trace the sentence's job. The author voices the strongest objection " +
        "(money will flee), concedes its seriousness, then rebuts it by treating " +
        "collection as a design challenge. That is an objection-and-response " +
        "move, not the conclusion, an abandonment, or a digression.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-510",
      passageId: "psg-politics-503",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Two people with the same yearly income may differ greatly in their capacity to pay tax.",
        "Every wealthy person inherited their entire fortune.",
        "Income tax should be abolished entirely.",
        "The savings of ordinary households would be heavily taxed under the proposal."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by arguing capacity is measured by what one owns rather than yearly receipts, the author implies that equal earners can differ sharply in capacity if one holds far more wealth, without stating it outright.",
        "Wrong: the author says 'a great deal' of large wealth was inherited, not that every wealthy person inherited everything; 'every' overstates a qualified claim.",
        "Wrong: the passage proposes adding a wealth levy, not abolishing income tax; it never calls for ending income taxation.",
        "Wrong: the author says the levy would fall on fortunes 'above a high threshold' 'without touching the savings of ordinary households', the opposite of this option."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit claim is that capacity to pay tracks " +
        "wealth, not annual income. The unstated but supported step is that two " +
        "equal earners can differ in capacity if their wealth differs. The other " +
        "options overstate ('every'), invert ('abolish income tax'), or " +
        "contradict the ordinary-households exemption.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-511",
      passageId: "psg-politics-503",
      type: "assume",
      stem:
        "The argument that a wealth tax can be made to work despite capital " +
        "flight relies on which unstated assumption?",
      options: [
        "The rich are more honest than ordinary taxpayers.",
        "Income tax has never once been successfully collected.",
        "The practical means of collection, such as taxing fixed property and sharing registries across borders, can be improved enough to reach most taxable wealth.",
        "All government revenue should come from a single tax."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the argument does not depend on the rich being honest; it turns on whether collection methods can be designed to work, not on taxpayer virtue.",
        "Wrong: nothing in the argument requires income tax to have always failed; that claim is irrelevant to whether a wealth tax can be collected.",
        "Correct: the conclusion that flight is a 'difficulty of design, not of principle' only follows if collection methods (immobile property, shared registries, better enforcement) can in fact be improved enough to reach the wealth; that link is assumed, not proved.",
        "Wrong: the author never assumes a single-tax system; he proposes a wealth levy alongside existing income tax."
      ],
      workedSolution:
        "An assumption is a required missing premise. The claim that capital " +
        "flight is only a design problem needs the bridge that collection can " +
        "actually be made effective (property cannot flee, registries shared). " +
        "Negate that and the rebuttal collapses. The other options are unneeded " +
        "or contradicted.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-politics-504 (3 questions) --- */
    {
      id: "q-standpoint-512",
      passageId: "psg-politics-504",
      type: "standpoint",
      stem:
        "What is the author's overall view of the choice between judicial review " +
        "and parliamentary supremacy?",
      options: [
        "Judicial review is plainly correct because it defends rights.",
        "Parliamentary supremacy is plainly correct because it defends democracy.",
        "Both arrangements are equally worthless and the question cannot be answered.",
        "Each option secures one good at the cost of another, so the real choice is which risk a constitution would rather run."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says those who trumpet judicial review as 'simply the defence of rights' describe 'one half of a trade-off and call it the whole', so he rejects this as the plain answer.",
        "Wrong: likewise he faults those who present parliamentary supremacy as 'simply the defence of democracy'; neither side is the obvious winner.",
        "Wrong: the author does not call both worthless; he says a mature constitution must decide which risk to run, which presumes the choice is meaningful.",
        "Correct: the passage holds that 'each answer purchases a virtue at a price' and that a mature constitution 'decides... which risk it would rather run', exactly this balanced view."
      ],
      workedSolution:
        "Find the author's committed position. He presents both options as " +
        "trade-offs, rebukes each side for claiming the whole truth, and frames " +
        "the real decision as choosing which risk to bear. The answer states " +
        "that two-sided conclusion; the others take a side or deny the choice " +
        "altogether.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-513",
      passageId: "psg-politics-504",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's evaluative " +
        "inference rather than a neutral description of one of the two systems?",
      options: [
        "Judicial review empowers judges to strike down statutes that breach a protected right.",
        "Those who present either system as the whole answer are each describing only one half of a trade-off.",
        "Under parliamentary supremacy a law the people detest can be reversed at the next election.",
        "Parliamentary supremacy keeps the last word with parliament rather than the courts."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this neutrally describes what judicial review is, part of the author's even-handed exposition, not his evaluative step.",
        "Correct: the judgement that each camp 'describ[es] one half of a trade-off and call[s] it the whole' is the author's critical inference about the debate, drawn from his trade-off analysis, not a neutral description of either system.",
        "Wrong: this simply reports a feature of parliamentary supremacy (reversibility at elections), a descriptive fact within the passage.",
        "Wrong: this neutrally states where the last word lies under parliamentary supremacy, a definitional description rather than an evaluation."
      ],
      workedSolution:
        "Separate neutral description from the author's added judgement. The " +
        "definitions of each system are expository; the charge that both camps " +
        "mistake half a trade-off for the whole is the evaluative inference the " +
        "author reaches, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-514",
      passageId: "psg-politics-504",
      type: "tone",
      stem:
        "The remark that 'rights that a legislature could repeal at will are " +
        "rights held on sufferance' conveys a tone that is:",
      options: [
        "Flippant and dismissive of the value of rights.",
        "Gravely cautionary, underscoring how precarious such rights are.",
        "Cheerfully optimistic that rights are always secure.",
        "Confused about what a legislature does."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'held on sufferance' treats the precariousness of rights as a serious matter, not a flippant or dismissive one.",
        "Correct: 'held on sufferance' is a weighty phrase warning that rights a legislature can repeal at will are insecure, a grave, cautionary note that fits the author's concern for the minority.",
        "Wrong: the line stresses precariousness, the opposite of cheerful confidence that rights are secure.",
        "Wrong: the passage is lucid about legislatures; there is no confusion, only a warning about repeal."
      ],
      workedSolution:
        "Tone follows diction. 'Held on sufferance' is a serious, faintly bleak " +
        "phrase emphasising how fragile repealable rights are. That is a grave " +
        "cautionary tone, not flippancy, optimism, or confusion.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-science-505 (4 questions) --- */
    {
      id: "q-main-515",
      passageId: "psg-science-505",
      type: "main",
      stem: "Which statement best expresses the main point of the passage?",
      options: [
        "Machines can never produce anything that looks creative.",
        "Until a system can own and answer for its choices, 'creativity' is the wrong word for what it does, however impressive the output.",
        "A work counts as creative whenever its words or images are novel.",
        "Human originality and machine output are creative in exactly the same way."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author concedes the output 'plainly can' look creative, so this misstates his view.",
        "Correct: the passage argues we credit creativity to a maker who 'select[s]... for reasons that can be questioned and defended', and that 'until a system can own its choices, creativity is the wrong word for what it does'.",
        "Wrong: the author denies that novelty suffices, noting 'a random generator could shuffle words into novelty' without making art.",
        "Wrong: the author marks a difference the analogy 'glosses over': the human can be asked why and answer; the machine can only be asked how it was built."
      ],
      workedSolution:
        "Identify the defended conclusion. The author ties creativity to a maker " +
        "who owns and can defend choices, and concludes that without that, " +
        "'creativity' misdescribes the machine. The answer captures this; the " +
        "others deny the output can look creative, reduce creativity to novelty, " +
        "or erase the human/machine difference.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-516",
      passageId: "psg-science-505",
      type: "detail",
      stem:
        "According to the passage, why do we praise a human poem as creative?",
      options: [
        "Because its words are more novel than anyone else's.",
        "Because it recombines a larger range of earlier works.",
        "Because it was produced more quickly than a machine could manage.",
        "Because choices were made by a maker who pursued a purpose and can be questioned and defended over them."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says novelty alone does not earn the word, since a random generator could produce novel words without making art.",
        "Wrong: breadth of recombination describes what the machine does ('a composite of what people have already made'), not the author's reason for praising a human poem.",
        "Wrong: speed of production is never offered as the ground of praise; the passage locates it in answerable choice.",
        "Correct: the passage states we praise a poem 'because choices were made: because a maker, pursuing some purpose and answerable for the result, selected this word over that one for reasons that can be questioned and defended'."
      ],
      workedSolution:
        "Explicit comprehension: locate the stated reason. The passage credits " +
        "creativity to a purposeful maker who selects for defensible reasons and " +
        "answers for the result. The other options substitute novelty, speed, or " +
        "recombination, which the passage either rejects or assigns to the " +
        "machine.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-517",
      passageId: "psg-science-505",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "Being able to answer for one's choices is central to authorship as the passage understands it.",
        "Any work assembled from earlier material cannot be creative.",
        "The quality of a machine's output proves it has purposes of its own.",
        "Human creativity owes nothing to what came before."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage turns on the contrast that a human 'can be asked why, and can answer' while a machine 'can only be asked how it was built', supporting that answerability is central to authorship.",
        "Wrong: the author allows human originality is also 'assembled from what came before', so being built from earlier material does not by itself rule out creativity.",
        "Wrong: the passage says the system 'has no purpose of its own' however striking the product, so quality does not prove purpose.",
        "Wrong: the author grants human work draws on predecessors, so 'owes nothing to what came before' contradicts the text."
      ],
      workedSolution:
        "An inference must follow from the text. The author's pivotal move is " +
        "that authorship requires being answerable for one's choices, which the " +
        "machine is not. The answer draws that supported point; the others are " +
        "contradicted by the concessions about borrowing, purpose, and " +
        "predecessors.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-518",
      passageId: "psg-science-505",
      type: "vocab",
      stem:
        "As used in the closing image 'To call the machine the author is to " +
        "thank the mirror for the face', the mirror most nearly represents:",
      options: [
        "A fragile object that is easily broken.",
        "A device that distorts whatever it shows.",
        "Something that merely reflects back human work without originating it.",
        "A source of light in a dark room."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: fragility is not the point; the passage already calls the system 'a mirror polished by millions of human examples', stressing reflection, not breakability.",
        "Wrong: the image is about reflecting rather than distorting; the machine returns 'a composite of what people have already made', not a warped version.",
        "Correct: the passage describes the system as a mirror 'returning a composite of what people have already made', so the mirror stands for something that reflects human work back without originating it; thanking it for the face credits the wrong source.",
        "Wrong: the mirror is not a light source here; the metaphor concerns reflection of others' work, not illumination."
      ],
      workedSolution:
        "Read the image in context. The passage calls the system a mirror that " +
        "returns 'a composite of what people have already made'. So the mirror " +
        "represents mere reflection of human work, and thanking it for the face " +
        "mistakes the reflector for the origin. The fragility, distortion, and " +
        "light readings miss this.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-science-506 (3 questions) --- */
    {
      id: "q-standpoint-519",
      passageId: "psg-science-506",
      type: "standpoint",
      stem: "What is the author's position on the open-access reform?",
      options: [
        "Open access was a clear mistake that should be reversed.",
        "Open access perfectly solved the problem of access to research.",
        "The old subscription model was the fairest arrangement after all.",
        "The principle is sound, but by shifting the cost to authors the reform relocates the barrier rather than removing it."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says explicitly 'this does not show that open access was a mistake', so he does not call for reversal.",
        "Wrong: the author argues the reform has 'a sting', moving the paywall to the author's end, so it did not perfectly solve access.",
        "Wrong: the author says the old model, with publishers gatekeeping publicly funded work, 'is hard to defend', so he does not call it fairest.",
        "Correct: the author calls the principle 'hard to fault' yet argues 'moving a cost is not the same as removing it', so the barrier is 'relocated' to the point of writing, which is exactly this view."
      ],
      workedSolution:
        "Find the held position. The author endorses the open-access principle " +
        "but warns that author fees relocate the barrier to writers. The answer " +
        "states this balanced view; the others either reverse the reform, " +
        "overclaim its success, or defend the old model he criticises.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-520",
      passageId: "psg-science-506",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "The findings entering the public record may be skewed toward researchers who can afford publication fees.",
        "Subscription journals never charged readers anything.",
        "Researchers in poorer countries produce lower-quality work.",
        "Publication fees are paid by the readers of each article."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying the author-pays model 'blocks them unevenly' and 'can quietly decide whose findings enter the record', the author implies the record skews toward those who can pay the fee, without stating it as a flat claim.",
        "Wrong: the passage says subscription journals 'charged steep subscriptions', the opposite of charging readers nothing.",
        "Wrong: the author's point is about ability to pay a fee, not quality of work; he never suggests poorer researchers do worse science.",
        "Wrong: under the model described the fee falls on the author, not the reader; readers no longer pay, which is the whole point."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines are that author fees block writers " +
        "unevenly and can decide 'whose findings enter the record'. The supported " +
        "but unstated step is that the record skews toward those who can afford " +
        "fees. The other options contradict the passage on subscriptions, " +
        "quality, or who pays.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-521",
      passageId: "psg-science-506",
      type: "vocab",
      stem:
        "As used in the phrase 'a few publishers earned large margins " +
        "gatekeeping publicly funded knowledge', 'gatekeeping' most nearly means:",
      options: [
        "Repairing and maintaining physical gates.",
        "Controlling who is allowed access to something.",
        "Generously giving something away for free.",
        "Carefully checking work for factual errors."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the literal sense of tending physical gates does not fit; the passage concerns access to knowledge, not hardware.",
        "Correct: in context the publishers 'earned large margins' by putting research 'behind a paywall', so 'gatekeeping' means controlling who may access the knowledge.",
        "Wrong: this reverses the meaning; gatekeeping here restricts access rather than giving knowledge away.",
        "Wrong: the word refers to controlling access, not to fact-checking or peer review, which the passage does not mention here."
      ],
      workedSolution:
        "Read the word in context: publishers earned margins by keeping research " +
        "behind a paywall. 'Gatekeeping' therefore means controlling access to " +
        "it. The literal-gate, give-away, and fact-checking readings do not fit " +
        "the paywall sense the passage establishes.",
      difficulty: "easy",
      source: "illustrative"
    },

    /* --- psg-history-507 (4 questions) --- */
    {
      id: "q-detail-522",
      passageId: "psg-history-507",
      type: "detail",
      stem:
        "According to the passage, what does asserting that one cause produced " +
        "an effect already commit a historian to?",
      options: [
        "A view about what would have followed had the cause been absent.",
        "The claim that the effect was bound to happen no matter what.",
        "A refusal to consider any evidence about the period.",
        "The belief that 'what if' questions are always a parlour game."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states that to say a cause produced an effect 'is already to make a claim about what would have followed had the cause been absent', a counterfactual smuggled into the word 'cause'.",
        "Wrong: the author's point is the opposite of inevitability; the causal claim involves a comparison about likelihood without the cause, not a claim that the effect was unavoidable.",
        "Wrong: the passage ties causal claims to a disciplined use of evidence, not to refusing it.",
        "Wrong: the author argues 'what if' is the explicit form of a move every causal claim makes, not that such questions are always idle."
      ],
      workedSolution:
        "Explicit comprehension. The relevant sentence says a causal claim " +
        "already commits one to a counterfactual about the cause's absence. The " +
        "answer reproduces this; the others contradict the passage by importing " +
        "inevitability, refusal of evidence, or a blanket dismissal of 'what if'.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-523",
      passageId: "psg-history-507",
      type: "assume",
      stem:
        "The claim that the historian who refuses all counterfactuals has merely " +
        "'hidden his counterfactuals inside his verbs' relies on which " +
        "assumption?",
      options: [
        "Counterfactual reasoning is always more reliable than direct evidence.",
        "Every historian secretly enjoys parlour games.",
        "Historians should never use the word 'cause' at all.",
        "Making a causal claim necessarily involves an implicit comparison with what would have happened otherwise."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the argument does not need counterfactuals to beat direct evidence; it claims only that causal talk contains a hidden counterfactual.",
        "Wrong: the historians' private enjoyment is irrelevant; the point concerns the logic of causal claims, not anyone's tastes.",
        "Wrong: the author does not assume 'cause' should be banned; on the contrary, he says using it commits one to a counterfactual, which he treats as legitimate.",
        "Correct: the charge that a counterfactual-refusing historian still uses them 'inside his verbs' only holds if every causal claim carries an implicit comparison with the alternative; that is the premise the argument depends on."
      ],
      workedSolution:
        "An assumption is the missing premise the conclusion needs. The claim " +
        "that causal verbs conceal counterfactuals requires that causal claims " +
        "inherently involve a comparison with the alternative. Negate that and " +
        "the charge fails. The other options are irrelevant or contradicted.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-524",
      passageId: "psg-history-507",
      type: "tone",
      stem:
        "The final sentence, that the cautious historian 'called the " +
        "concealment rigour', conveys a tone that is:",
      options: [
        "Pointedly critical, charging the over-cautious historian with a hidden inconsistency.",
        "Warmly admiring of the historian's restraint.",
        "Detached and indifferent to the dispute.",
        "Despairing that history can be written at all."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: saying the historian 'called the concealment rigour' accuses him of dressing up an inconsistency as discipline, a sharp, pointed criticism that caps the author's argument.",
        "Wrong: the line faults, rather than admires, the historian's claim to restraint; it exposes a flaw.",
        "Wrong: the sentence takes a clear side in the dispute, so it is not detached or indifferent.",
        "Wrong: the author thinks careful counterfactual history is possible, so he is not despairing about the discipline."
      ],
      workedSolution:
        "Tone follows the rhetorical move. Calling the refusal of counterfactuals " +
        "a 'concealment' relabelled as 'rigour' is a pointed charge of " +
        "inconsistency. That is critical, not admiring, detached, or despairing.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-525",
      passageId: "psg-history-507",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's interpretive " +
        "claim rather than a neutral report of historians' practice?",
      options: [
        "Many historians are wary of the question 'what if'.",
        "Speculation about roads not taken is often dismissed as a parlour game.",
        "The historian who refuses every counterfactual has merely hidden them inside his verbs.",
        "Some historians describe a tax revolt as triggering a rebellion."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that many historians are wary of 'what if' is a reported observation about the discipline, not the author's evaluative step.",
        "Wrong: that such speculation is 'often dismissed as a parlour game' reports a common attitude, a description rather than the author's own judgement.",
        "Correct: the claim that the counterfactual-refusing historian has 'hidden his counterfactuals inside his verbs' is the author's interpretive verdict, drawn from his analysis of causal language, not a neutral report.",
        "Wrong: that some historians describe a tax revolt as triggering a rebellion is an example of practice the author cites, not his evaluative inference."
      ],
      workedSolution:
        "Separate reported practice from the author's added judgement. The " +
        "wariness about 'what if', its dismissal as a parlour game, and the " +
        "tax-revolt example are descriptive; the charge that refusers hide " +
        "counterfactuals in their verbs is the author's interpretation, so that " +
        "is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-history-508 (3 questions) --- */
    {
      id: "q-structure-526",
      passageId: "psg-history-508",
      type: "structure",
      stem:
        "What is the role of the sentence 'Its own danger is equally plain: a " +
        "single village may be unrepresentative, and a vivid particular case can " +
        "seduce a reader into mistaking it for the rule'?",
      options: [
        "It concedes a weakness of microhistory so that the author's even-handed comparison is not mistaken for a one-sided endorsement.",
        "It states the passage's central thesis for the first time.",
        "It abandons the argument and rejects microhistory altogether.",
        "It offers a specific historical example of a representative village."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: having praised microhistory's depth, the author grants its danger of being unrepresentative, balancing the account so neither scale looks simply superior, in keeping with his even-handed thesis.",
        "Wrong: the thesis (history should move between the two scales) comes later; this sentence supplies one side of the balance, not the thesis.",
        "Wrong: the author does not reject microhistory; he immediately argues both scales are needed together.",
        "Wrong: no specific village is named; the sentence states a danger, not an example."
      ],
      workedSolution:
        "Trace the sentence's job. After crediting microhistory, the author " +
        "concedes its weakness to keep the comparison balanced, setting up the " +
        "conclusion that both scales are needed. That is a balancing concession, " +
        "not the thesis, a rejection, or an example.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-527",
      passageId: "psg-history-508",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "The grand narrative is always more truthful than microhistory.",
        "Microhistory should replace the grand narrative entirely.",
        "History is best written by combining the broad survey with the close case so each corrects the other.",
        "Generalisation has no place in the writing of history."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says neither approach is 'simply the more truthful', so he denies the grand narrative is always superior.",
        "Wrong: he does not want microhistory to replace the survey; he warns the close case alone yields 'a heap of fascinating fragments'.",
        "Correct: the passage concludes the history worth having 'moves between the two scales', letting the small case interrogate the large pattern and the pattern give the case meaning.",
        "Wrong: the author says 'generalisation is part of what we want from history', so it plainly has a place."
      ],
      workedSolution:
        "An inference must follow from the text. The closing argument is that " +
        "good history moves between scales so each checks the other. The answer " +
        "states that; the others rank one scale above the other, call for " +
        "replacement, or deny generalisation, all contrary to the passage.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-528",
      passageId: "psg-history-508",
      type: "opinion",
      stem:
        "Which of the following is best described as an opinion the author " +
        "asserts rather than a neutral statement of fact?",
      options: [
        "One way of writing history surveys a period from above, tracing broad movements.",
        "A grand narrative spanning nations is assembled by a process of averaging.",
        "Treating either scale alone as the whole is a partial view its practitioners mistake for complete understanding.",
        "Microhistory examines a single case in exhaustive depth."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that one approach surveys from above is a neutral description of a method, not a contested evaluation.",
        "Wrong: that the grand narrative is assembled by averaging is a descriptive account of how the survey works, not the author's value judgement.",
        "Correct: calling either scale alone 'a partial view mistaken... for the whole' is the author's evaluative verdict on each method's practitioners, an opinion advanced to support his thesis rather than a neutral fact.",
        "Wrong: that microhistory examines one case in depth is a plain description of the method, not an asserted opinion."
      ],
      workedSolution:
        "Separate opinion from neutral statement. The descriptions of what each " +
        "method does are factual; the charge that practitioners of either scale " +
        "mistake a partial view for the whole is a loaded evaluative judgement, " +
        "so that is the asserted opinion.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-philosophy-509 (4 questions) --- */
    {
      id: "q-standpoint-529",
      passageId: "psg-philosophy-509",
      type: "standpoint",
      stem:
        "What is the author's view of the claim that universal causation would " +
        "abolish blame?",
      options: [
        "He accepts it: if every act is caused, no one can fairly be blamed.",
        "He is undecided, weighing the claim without reaching a verdict.",
        "He rejects it: our practice of blame never depended on finding uncaused acts, so universal causation removes nothing it relied on.",
        "He thinks blame is irrational and should be given up regardless of causation."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls this inference 'too quick' and argues against it, so he does not accept it.",
        "Wrong: the author reaches a firm conclusion, that the discovery 'removes nothing', so 'undecided' misreads him.",
        "Correct: the author argues we excuse only for special incapacities, not for mere causation, so 'the discovery that no act is uncaused removes nothing that the practice ever relied on', exactly this view.",
        "Wrong: the author defends blame as a way of holding one another answerable, not as something irrational to abandon."
      ],
      workedSolution:
        "Find the held view. The author shows our excusing turns on special " +
        "incapacities within a caused world, never on uncausedness, so universal " +
        "causation takes nothing away. The answer states this rejection of the " +
        "abolition claim; the others accept it, hesitate, or call blame " +
        "irrational.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-530",
      passageId: "psg-philosophy-509",
      type: "structure",
      stem:
        "What is the function of the examples of the person who 'was pushed, or " +
        "was a small child, or did not know what the package contained'?",
      options: [
        "They show that we suspend resentment for special incapacities, not because an act was caused, supporting the author's central distinction.",
        "They prove that no one is ever responsible for anything.",
        "They state the author's main thesis.",
        "They concede that universal causation does abolish blame after all."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the cases illustrate that we excuse for 'something special', a lacked capacity to understand and respond to reasons, rather than because the act was caused, which grounds the author's distinction within the caused world.",
        "Wrong: the examples show the opposite of universal non-responsibility; they mark out the special cases in which responsibility is suspended, implying it normally holds.",
        "Wrong: the thesis is the broader claim about blame and causation; these cases are supporting illustrations, not the thesis itself.",
        "Wrong: the examples support the author's denial that causation abolishes blame; they do not concede the abolition view."
      ],
      workedSolution:
        "Identify the examples' role. They demonstrate that excuses track special " +
        "incapacities, not mere causation, which is the distinction the author " +
        "needs. So they are illustrations supporting his central point, not a " +
        "proof of universal non-responsibility, the thesis, or a concession.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-531",
      passageId: "psg-philosophy-509",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "A being who cannot be reached by reasons would be an appropriate target of resentment.",
        "Our feelings of resentment are reached by first proving an act was uncaused.",
        "Whether a person can be reached by reasons matters more to blame than whether their act was ultimately caused.",
        "Small children are morally responsible in exactly the way adults are."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage treats inability to respond to reasons as a ground for excusing, so such a being would not be an apt target of resentment; this reverses the implication.",
        "Wrong: the author says the feeling 'comes unbidden', not via proving an act uncaused, so this contradicts the text.",
        "Correct: by holding that we excuse only those who lack the capacity to respond to reasons, while causation is 'always true', the author implies responsiveness to reasons, not uncausedness, is what matters to blame.",
        "Wrong: the small child is given as an example of someone we excuse, so the passage implies they are not responsible in the adult way."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit claims are that excuses track a lacked " +
        "capacity to respond to reasons and that causation is always present. The " +
        "supported but unstated step is that responsiveness to reasons, not " +
        "uncausedness, governs blame. The other options reverse or contradict " +
        "the text.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-532",
      passageId: "psg-philosophy-509",
      type: "assume",
      stem:
        "The argument that universal causation 'removes nothing' the practice of " +
        "blame relied on depends on which assumption?",
      options: [
        "People never make mistakes about whom to blame.",
        "The grounds on which we actually excuse people are special incapacities, not the bare fact that an act was caused.",
        "Free will has been proven to exist.",
        "Resentment is always a pleasant emotion to feel."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the argument does not need our blame to be error-free; it concerns what excuses are based on, not whether we ever misapply them.",
        "Correct: the conclusion that universal causation changes nothing only follows if our excusing was always based on special incapacities rather than on uncausedness; if we did excuse for mere causation, universal causation would indeed abolish blame.",
        "Wrong: the author's argument works whether or not free will exists; it does not assume free will has been proven, and indeed grants every act may be caused.",
        "Wrong: how resentment feels is irrelevant to the argument, which is about the grounds of excusing, not the pleasantness of emotions."
      ],
      workedSolution:
        "An assumption is the required missing premise. The claim that universal " +
        "causation removes nothing presupposes that our excuses always tracked " +
        "special incapacities, not causation itself. Negate that and the " +
        "conclusion fails. The other options are unneeded or contradicted by the " +
        "text.",
      difficulty: "hard",
      source: "illustrative"
    },

    /* --- psg-philosophy-510 (3 questions) --- */
    {
      id: "q-detail-533",
      passageId: "psg-philosophy-510",
      type: "detail",
      stem:
        "According to the passage, what exactly is it that we condemn when we " +
        "judge a reckless action wrong?",
      options: [
        "The harm the action actually causes in every case.",
        "All risk-taking of any kind whatsoever.",
        "The imposition of an unreasonable risk, whose danger to others is out of all proportion to its purpose.",
        "Any action that frightens another person."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage's whole point is that the wrong can occur even when 'by luck no harm occurred', so it is not the actual harm that is condemned.",
        "Wrong: the author says 'what we condemn is not risk as such', since a rule against all risk 'would forbid leaving the house'.",
        "Correct: the passage states 'what we condemn is not risk as such but the imposition of an unreasonable risk, one whose danger to others is out of all proportion to its purpose'.",
        "Wrong: frightening someone is not the criterion; the passage locates the wrong in the unreasonableness of the risk imposed, not in causing fear."
      ],
      workedSolution:
        "Explicit comprehension. The passage specifies the object of condemnation " +
        "as the imposition of an unreasonable risk disproportionate to its " +
        "purpose. The answer reproduces this; the others substitute actual harm, " +
        "all risk, or fright, each ruled out by the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-534",
      passageId: "psg-philosophy-510",
      type: "factinf",
      stem:
        "Which of the following is best understood as the author's inference " +
        "rather than a neutral description of a case?",
      options: [
        "A driver who runs a red light at midnight may meet no other car.",
        "Imposing a risk on others is itself a way of wronging them, apart from whether harm results.",
        "A reckless gun owner who fires into the air may happen to hit no one.",
        "Almost every action endangers someone to some tiny degree."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that the midnight driver may meet no car is part of the case the author sets up, a stated scenario rather than his inferential step.",
        "Correct: the claim that 'imposing a risk on others is itself a way of wronging them' is the conclusion the author draws from the cases, his central inference rather than a description of a scenario.",
        "Wrong: that the gun owner may hit no one is a stipulated feature of the example, not the author's drawn conclusion.",
        "Wrong: that almost every action carries some tiny risk is offered as a granted observation in the objection, not the author's own inferential claim."
      ],
      workedSolution:
        "Separate the cases from the author's added step. The midnight driver, " +
        "the gun owner, and the ubiquity of small risk are stated scenarios or " +
        "granted points; the claim that risk-imposition is itself a wrong is the " +
        "inference the author reaches, so that is the answer.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-535",
      passageId: "psg-philosophy-510",
      type: "opinion",
      stem:
        "Which statement expresses an evaluative opinion of the author rather " +
        "than a neutral description?",
      options: [
        "A morality that waits for harm before it speaks arrives too late.",
        "A driver may race through a red light when no other car is present.",
        "Some actions endanger others only to a tiny degree.",
        "A gun fired into the air may fail to strike anyone."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: saying such a morality 'arrives too late' is the author's loaded value judgement against harm-based morality, an evaluative opinion rather than a neutral description.",
        "Wrong: that a driver may run a red light when no car is present neutrally describes a scenario, not the author's evaluation.",
        "Wrong: that some actions endanger others only slightly is a factual observation, not an asserted opinion.",
        "Wrong: that a gun fired upward may hit no one describes a possible outcome, not the author's value judgement."
      ],
      workedSolution:
        "Find the evaluative judgement. 'Arrives too late' is charged, " +
        "opinionated language condemning harm-based morality; the other options " +
        "merely describe scenarios or facts. So that is the author's asserted " +
        "opinion.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-511 (4 questions) --- */
    {
      id: "q-main-536",
      passageId: "psg-currentaffairs-511",
      type: "main",
      stem: "Which of the following best states the main argument of the passage?",
      options: [
        "Tourism brings money and is therefore always good for a city.",
        "Cities should wall their gates and ban all visitors.",
        "The residents of popular cities have no real grievance against tourists.",
        "Overtourism erodes the very distinctiveness that drew visitors, so a place must be treated as a finite resource rather than an inexhaustible one."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says the money 'is not the whole account' and that much of it flows to outsiders, so he denies tourism is always good.",
        "Wrong: the author explicitly rejects walling the gates as 'both impossible and mean'.",
        "Wrong: the author stresses that costs 'fall on those who remain', taking the residents' grievance seriously rather than dismissing it.",
        "Correct: the passage argues 'the popularity that a place earns by being distinctive steadily erases the distinctiveness that earned it', and urges treating a place as not 'an inexhaustible resource'."
      ],
      workedSolution:
        "Identify the defended thesis. The author argues overtourism consumes the " +
        "distinctiveness that attracted it and that a place is a finite resource. " +
        "The answer captures this; the others overstate tourism's benefits, " +
        "propose a ban he rejects, or deny the residents' grievance.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-537",
      passageId: "psg-currentaffairs-511",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "The economic gains from tourism are shared equally by residents and outside owners.",
        "A visitor who loves a place can share the residents' interest in limiting the crowds that damage it.",
        "Residents of popular cities generally welcome unlimited short-term lets.",
        "A city's worth can be fully captured by measuring its tourist takings."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says much of the money 'flows to owners who do not live there' while costs fall on residents, so the gains are not shared equally.",
        "Correct: by saying a visitor who loves a place 'has an interest, alongside its residents, in not loving it to death', the author implies the visitor's and residents' interests can align in limiting damaging crowds.",
        "Wrong: the passage says residents are 'priced out by short-term lets and depart', implying they do not welcome them.",
        "Wrong: the author argues a town that 'measures only its takings' misses 'the thing of value', so worth is not captured by takings."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that a loving visitor has an " +
        "interest 'alongside its residents' in not loving the place to death. The " +
        "supported step is that visitor and resident interests can align against " +
        "harmful crowds. The other options contradict the passage on shared " +
        "gains, lets, or takings.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-538",
      passageId: "psg-currentaffairs-511",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "A rising number of visitors always improves a popular destination.",
        "Judging a tourist town's health by its revenue alone can hide the loss of what made it valuable.",
        "Souvenir shops are the most important businesses in any city.",
        "The only honest response to overtourism is to close a city to outsiders."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author argues that beyond a point visitors 'begin to destroy the very thing they came for', so more visitors do not always improve a place.",
        "Correct: the passage says a town 'that measures only its takings will count overtourism a success even as the thing of value quietly disappears', supporting that revenue alone can mask the loss.",
        "Wrong: the souvenir counter is given as a symptom of decline (replacing the neighbourhood bakery), not praised as important.",
        "Wrong: the author rejects closing the gates as 'impossible and mean', so this is not the response he endorses."
      ],
      workedSolution:
        "An inference must follow from the text. The passage warns that a " +
        "takings-only measure counts overtourism a success while real value " +
        "vanishes. The answer draws exactly that; the others contradict the " +
        "passage on visitor numbers, souvenir shops, or closing the gates.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-539",
      passageId: "psg-currentaffairs-511",
      type: "tone",
      stem:
        "The image of residents departing and 'leaving a stage set with no " +
        "actors' conveys a tone that is:",
      options: [
        "Cheerfully approving of the change.",
        "Furiously enraged at individual tourists.",
        "Strictly neutral and statistical.",
        "Rueful and critical, lamenting the hollowing-out of a living community."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: 'a stage set with no actors' depicts a loss, the opposite of cheerful approval.",
        "Wrong: the author criticises the process and its structure, not individual tourists in a rage; the register is regretful, not furious.",
        "Wrong: the metaphor is evaluative and evocative, not neutral or statistical.",
        "Correct: the image of an emptied stage mourns a community reduced to a lifeless backdrop, a rueful and critical note that fits the author's concern for what overtourism wears away."
      ],
      workedSolution:
        "Tone follows the image. A 'stage set with no actors' frames the loss of " +
        "residents as the emptying of a living place, a regretful, critical tone, " +
        "not cheerful, neutral, or enraged.",
      difficulty: "medium",
      source: "illustrative"
    },

    /* --- psg-currentaffairs-512 (3 questions) --- */
    {
      id: "q-assume-540",
      passageId: "psg-currentaffairs-512",
      type: "assume",
      stem:
        "The argument that treating meritocratic success as 'wholly earned' is a " +
        "mistake relies on which assumption?",
      options: [
        "Talent and effort play no part at all in who succeeds.",
        "People do not deserve advantages, such as genes and upbringing, that they did nothing to bring about.",
        "Every successful person was born to wealthy parents.",
        "Society should assign jobs by bloodline rather than ability."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author does not deny talent and effort matter; he grants we want 'the ablest engineer', so this overstates his claim.",
        "Correct: the charge that success is not 'wholly earned' depends on the premise that one does not deserve unearned gifts like genes and upbringing; if those advantages were deserved, the success they enable could be fully earned.",
        "Wrong: the argument does not require every successful person to be born wealthy; the child with 'attentive parents in a good school district' is one example, not a universal claim.",
        "Wrong: the author explicitly prefers ability to bloodline, so assigning jobs by birth is the opposite of a premise he assumes."
      ],
      workedSolution:
        "An assumption is the needed premise. The claim that success is not wholly " +
        "earned rests on the view that unearned advantages (genes, upbringing) are " +
        "not deserved. Negate that and the conclusion fails. The other options " +
        "overstate, universalise, or contradict the author's stated position.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-541",
      passageId: "psg-currentaffairs-512",
      type: "vocab",
      stem:
        "As used in the final sentence, calling a meritocracy 'an aristocracy's " +
        "best-disguised heir' uses 'heir' to suggest that the meritocracy:",
      options: [
        "Legally inherits a sum of money on someone's death.",
        "Will soon be replaced by a true aristocracy.",
        "Is the youngest member of a noble family.",
        "Carries on the same effect of entrenching privilege while hiding that it does so."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the literal sense of inheriting money does not fit; the passage is describing how a meritocracy perpetuates privilege, not a bequest.",
        "Wrong: the point is that the meritocracy succeeds and disguises aristocracy, not that aristocracy will replace it.",
        "Wrong: 'heir' is not used in the literal family sense; the passage speaks of inheriting a social effect, not a birth rank.",
        "Correct: calling it the aristocracy's 'best-disguised heir' means it continues aristocracy's work of 'distributing privilege' while concealing that it does so behind the flattery of self-made merit."
      ],
      workedSolution:
        "Read the word in context. The meritocracy is called aristocracy's 'heir' " +
        "because it 'distribut[es] privilege while flattering the privileged'. So " +
        "'heir' means it carries on the same entrenching of privilege under a " +
        "disguise. The literal-inheritance and family readings are the traps.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-542",
      passageId: "psg-currentaffairs-512",
      type: "opinion",
      stem:
        "Which of the following is an evaluative opinion the author asserts " +
        "rather than a neutral description of how meritocracy works?",
      options: [
        "A meritocracy that forgets how much of merit is inherited becomes aristocracy's best-disguised heir.",
        "A meritocracy rewards people according to their talent and effort.",
        "Some abilities a meritocracy rewards are influenced by upbringing.",
        "A meritocracy distributes positions such as engineering jobs."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: calling a forgetful meritocracy 'aristocracy's best-disguised heir' is the author's loaded evaluative verdict, an opinion advanced to support his thesis rather than a neutral description.",
        "Wrong: that a meritocracy rewards talent and effort neutrally states its defining aim, not the author's evaluation.",
        "Wrong: that some rewarded abilities are shaped by upbringing is a descriptive claim about their origin, not an asserted value judgement.",
        "Wrong: that a meritocracy distributes jobs such as engineering posts is a plain description of what it does, not an opinion."
      ],
      workedSolution:
        "Separate opinion from description. The 'best-disguised heir' verdict is a " +
        "value-laden charge; the other options describe what a meritocracy is, " +
        "rewards, or does. So that is the asserted opinion.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * ESSAY PROMPTS — 3 illustrative, theme-tagged, ids 501-503.
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-501",
      theme: "law-justice",
      text:
        "Should the courts have the power to strike down laws passed by an " +
        "elected parliament?",
      source: "illustrative"
    },
    {
      id: "prompt-502",
      theme: "politics-governance",
      text: "“It is fairer to tax wealth than to tax income.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-503",
      theme: "ethics",
      text:
        "Can we be blamed for our actions if everything we do is ultimately " +
        "caused by factors beyond our control?",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * MOCK — mock-05. Full paper: 12 passages, 42 questions (six 4-Q + six
   * 3-Q passages), 3 prompts. sample:false, so the exact-42 split is checked.
   * ====================================================================== */
  DATA.mocks.push({
    id: "mock-05",
    title: "Mock Paper 5",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-literature-501",
        "psg-literature-502",
        "psg-politics-503",
        "psg-politics-504",
        "psg-science-505",
        "psg-science-506",
        "psg-history-507",
        "psg-history-508",
        "psg-philosophy-509",
        "psg-philosophy-510",
        "psg-currentaffairs-511",
        "psg-currentaffairs-512"
      ],
      questionIds: [
        "q-main-501",
        "q-structure-502",
        "q-vocab-503",
        "q-tone-504",
        "q-standpoint-505",
        "q-detail-506",
        "q-inference-507",
        "q-main-508",
        "q-structure-509",
        "q-implied-510",
        "q-assume-511",
        "q-standpoint-512",
        "q-factinf-513",
        "q-tone-514",
        "q-main-515",
        "q-detail-516",
        "q-inference-517",
        "q-vocab-518",
        "q-standpoint-519",
        "q-implied-520",
        "q-vocab-521",
        "q-detail-522",
        "q-assume-523",
        "q-tone-524",
        "q-factinf-525",
        "q-structure-526",
        "q-inference-527",
        "q-opinion-528",
        "q-standpoint-529",
        "q-structure-530",
        "q-implied-531",
        "q-assume-532",
        "q-detail-533",
        "q-factinf-534",
        "q-opinion-535",
        "q-main-536",
        "q-implied-537",
        "q-inference-538",
        "q-tone-539",
        "q-assume-540",
        "q-vocab-541",
        "q-opinion-542"
      ]
    },
    sectionB: {
      promptIds: ["prompt-501", "prompt-502", "prompt-503"]
    }
  });
})(typeof window !== "undefined" ? window : this);
