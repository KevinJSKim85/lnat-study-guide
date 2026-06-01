/*
 * drill-b.js — Section A DRILL set B (type-focused practice).
 *
 * This is NOT real exam content. It is original, illustrative LNAT-style material
 * for the study site's type-drilling lane, focused on the three highest-ambiguity
 * Inference & Implication sub-types: 2b Stated-vs-Implied (implied),
 * 3a Inference/Implication (inference), and 3b Fact-vs-Inference (factinf).
 *
 * Disjointness: every passage here lives in the reserved 9xx range
 * (psg-<genre>-921 .. 933) so it cannot collide with any mock passage (1xx-5xx).
 *
 * Delivery model: this file assigns into the buckets that loader.js created on
 * window.LNAT_DATA. It must load AFTER loader.js. All content is English-only and
 * source:"illustrative". Each passage is argumentative and answerable from the
 * passage ALONE; distractors are "plausible but unsupported" — wrong for a
 * distinct reason in each case.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    // loader.js must run first. Fail loudly rather than silently creating buckets.
    (root.console || { error: function () {} }).error(
      "[LNAT] drill-b.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * PASSAGES — 13 argumentative passages, 9xx range, varied genres.
   * Each is self-contained and 220-340 words.
   * ---------------------------------------------------------------------- */
  DATA.passages.push(
    {
      id: "psg-philosophy-921",
      genre: "philosophy",
      title: "Reading the Minds of Animals",
      body:
        "Can we ever know what an animal is thinking? A familiar scepticism says we " +
        "cannot, and for a tidy reason: we can never climb inside another creature's " +
        "experience and feel it from within, so any claim about an animal's inner life " +
        "is guesswork dressed as knowledge. The point is genuine and ought not be waved " +
        "away. But pressed to its conclusion it proves far too much. We can no more " +
        "inhabit the mind of our neighbour than that of a crow, yet we do not on that " +
        "account doubt that our neighbour thinks; we read his mind from what he does, " +
        "and the same door is open to us with animals. Notice when we walk through it " +
        "with most confidence. A crow that bends a wire into a hook to fish a treat from " +
        "a tube, having never seen the trick performed, invites an explanation in terms " +
        "of foresight and purpose, and the plodding alternative, that blind instinct " +
        "happens to mimic planning, grows strained the more flexibly the bird behaves. " +
        "It is the failure of the simpler story that makes the richer one compelling: " +
        "the case for crediting an animal with a thought is strongest exactly where no " +
        "mechanical reflex will account for what it does. None of this licenses us to " +
        "paint every creature in human colours, for much animal behaviour yields to " +
        "spare explanations, and to ignore them is mere sentiment. The claim is " +
        "narrower, and it carries a sting. If some animals do reason, remember, and " +
        "suffer in ways we can read from their conduct, then the moral consideration we " +
        "owe a creature cannot be settled by its species alone; it must track the mental " +
        "life the creature actually has. To deny animals any inner world because we " +
        "cannot enter it is not caution but a refusal to read the evidence already in " +
        "front of us.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-922",
      genre: "politics",
      title: "The Quiet Power of the Agenda",
      body:
        "We tend to measure political power by who wins the votes that are taken. " +
        "But the more consequential power is often exercised earlier and more " +
        "quietly, in deciding which questions reach a vote at all. A committee chair " +
        "who keeps a proposal off the order paper defeats it as surely as a majority " +
        "would, and at less cost, for there is no recorded division to point to and " +
        "no losing coalition to nurse a grievance. Reformers who count only the " +
        "roll-calls therefore flatter the openness of the institutions they study. " +
        "They see vigorous debate on the matters admitted and conclude that all live " +
        "issues are being aired, when the most threatening issues may simply have " +
        "been kept off the floor. This is not a claim that every silence conceals a " +
        "conspiracy. Many questions go unasked because no one cares about them. The " +
        "argument is only that the absence of overt conflict is weak evidence of " +
        "genuine consensus. A population that never demands a change may be content, " +
        "or it may have learned, through long experience, that the demand will go " +
        "nowhere and merely mark the demander as a troublemaker. The two cases look " +
        "identical from the gallery, which is exactly why gatekeeping is such an " +
        "attractive instrument: it works best when it leaves no trace. An honest " +
        "account of who governs must therefore look past the visible contests to the " +
        "prior question of how the menu of contests was set, and by whom.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-923",
      genre: "science",
      title: "Does Copyright Feed or Starve Creativity?",
      body:
        "The case for strong copyright is usually made on behalf of creativity itself. " +
        "Grant authors a long monopoly over what they make, the argument runs, and you " +
        "reward the labour of creation, so more of it will follow. There is something " +
        "to this, for nobody writes a symphony or a novel expecting to be copied the " +
        "next morning for nothing. Yet the argument quietly assumes that creation begins " +
        "from blankness, when in truth every new work is stitched from older ones. The " +
        "composer reworks a folk tune, the playwright lifts a plot that was already " +
        "ancient, the scientist builds on results she did not discover. A regime that " +
        "locks each of these ingredients away for the better part of a century does not " +
        "merely reward the first maker; it raises the price of the raw material every " +
        "later maker needs. Protection that is meant to encourage the next work can, " +
        "past a certain point, forbid it. This is the tension too often ignored by those " +
        "who treat more protection as straightforwardly more creativity. The right " +
        "question is not whether creators should be rewarded, which scarcely anyone " +
        "denies, but where the reward stops paying for itself and starts taxing the very " +
        "activity it was meant to feed. A term long enough to outlive the author's " +
        "grandchildren cannot be defended as an incentive to a person who is no longer " +
        "alive to be incentivised; it can only be defended as a windfall to whoever now " +
        "holds the rights. None of this is a case for abolishing copyright, which would " +
        "leave creators exposed in just the way the critics fear. It is a case for " +
        "remembering that the protection is a means to an end, and that a means pursued " +
        "without limit can come to defeat the end it was built to serve.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-924",
      genre: "history",
      title: "When a Language Falls Silent",
      body:
        "A language is not lost the way a coin is lost, suddenly and by accident. It dies " +
        "by a long process that historians can trace, in which speakers, one household at " +
        "a time, decide that their children will fare better in some larger and more " +
        "powerful tongue. The decision is rarely foolish. A parent who raises a child in " +
        "the dominant language is buying access to schooling, work, and the wider world, " +
        "and it would be glib to call such a choice a betrayal. Yet the sum of these " +
        "reasonable private decisions is a public loss that none of them intended. When the " +
        "last fluent speaker dies, what disappears is not merely a set of words for which " +
        "other words could be substituted. A language carries distinctions its neighbours " +
        "lack, names for plants and weather and kinship that encode generations of attention " +
        "to a particular place, and stories that exist nowhere else. Some of this can be " +
        "written down before the end, and salvage of that kind is worth doing. But a " +
        "grammar recorded in a notebook is not the same as a grammar alive in a community, " +
        "any more than a pressed flower is the same as a meadow. Those who shrug at the " +
        "trend often assume that the surviving major languages can say everything worth " +
        "saying, so that the loss is sentimental rather than real. The assumption is exactly " +
        "what the dying languages disprove, for each holds some thought its successors " +
        "render only clumsily or not at all. To mourn a vanished language is therefore not " +
        "nostalgia for quaintness. It is the recognition that a way of seeing the world has " +
        "gone out, and that the speakers who let it go could not have known the full price " +
        "of a choice that, taken singly, made perfect sense.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-925",
      genre: "currentaffairs",
      title: "The City Built for Cars",
      body:
        "For much of the last century, planners rebuilt cities around the automobile, and the " +
        "results have hardened into something we now mistake for the natural order. Roads were " +
        "widened and neighbourhoods cut through to speed traffic; shops and homes were pushed " +
        "apart and ringed with the parking that cars demand; distances swelled until walking " +
        "between the places of an ordinary day became impractical. Each step was defensible on " +
        "its own terms, a reasonable response to rising traffic. Together they produced a " +
        "settlement in which the car is no longer one option among several but a precondition of " +
        "taking part in daily life at all. This is the feature most easily missed. A person who " +
        "would rather not drive, who cannot afford a car, or who is too young or too old to hold " +
        "a licence, does not thereby gain the freedom to live another way; he inherits a city " +
        "arranged so that the other ways no longer function. The bus comes rarely because few " +
        "ride it; few ride it because it comes rarely; and the pavement peters out where the " +
        "planners assumed no one would be walking. None of this is an argument that cars are evil " +
        "or that they brought no goods; they carried real freedoms, and the mobility they offer is " +
        "not to be sneered at. The argument is narrower. A city shaped around one way of moving " +
        "does not merely favour that way; it slowly removes the alternatives, until a choice that " +
        "was once genuinely open has been made for everyone in advance by the shape of the streets " +
        "themselves. The freedom to drive, pursued by planners for decades, has quietly become the " +
        "obligation to.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-926",
      genre: "literature",
      title: "Whose Past Sits in the Display Case?",
      body:
        "The great encyclopaedic museums defend their refusal to return contested " +
        "objects with an argument that sounds almost generous. A treasure gathered from " +
        "a distant land, they say, is better seen in a metropolis where millions pass " +
        "by than in some provincial gallery few will ever reach, and to scatter the " +
        "collections back to their origins would impoverish everyone. The premise is " +
        "not absurd; access matters, and a great museum does place world culture within " +
        "one afternoon's walk. Yet the argument proves too much, for it would justify " +
        "almost any acquisition by almost any wealthy institution, on the sole ground " +
        "that it can attract a larger crowd. If footfall were the test, the museum that " +
        "drew the most visitors would have the strongest claim to anything, however it " +
        "came by it, and the question of how an object left its homeland would never " +
        "need to be asked. That question is exactly the one the access argument is built " +
        "to avoid. Many of the disputed pieces were taken in conditions their original " +
        "owners would never have agreed to, by armies or administrators who answered to " +
        "no one in the place they stripped. An object so acquired does not become rightful " +
        "property merely because it has been kept a long time and shown to a large " +
        "audience. None of this means every artefact must go home, or that museums have " +
        "no role as stewards; some objects were freely sold, and others have no surviving " +
        "community to receive them. The point is narrower. A museum cannot settle the " +
        "matter by counting the visitors at its door, for the prior question is whether " +
        "what stands in the case was ever the museum's to display, and no crowd, however " +
        "large, can answer that.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-927",
      genre: "philosophy",
      title: "Is Beauty in the Object?",
      body:
        "That beauty lies in the eye of the beholder is among the most quoted of " +
        "comfortable opinions, and among the least examined. Taken strictly, it says that " +
        "a judgement of beauty reports only the speaker's private response, so that to " +
        "call a painting beautiful is no more disputable than to say one likes anchovies. " +
        "The view is tidy, but our actual conduct refutes it at every turn. We argue about " +
        "beauty, sometimes for hours, which would be senseless if each party were merely " +
        "announcing a sensation; nobody argues about whether the other really likes " +
        "anchovies. We defer, too, to those who have looked at more pictures or heard more " +
        "music than we have, as though their verdicts were better and not just different. " +
        "And we revise our own taste, coming to find admirable what once left us cold, and " +
        "we describe this as having learned to see, not as having simply changed. None of " +
        "these practices makes sense unless our judgements of beauty are reaching for " +
        "something in the work, and not only registering a flutter in ourselves. This is " +
        "not to claim that beauty is a plain property like mass, the same for every observer " +
        "and measurable by instrument. The response of a competent observer is part of the " +
        "story, and to that extent the subjectivist saw something real. The mistake was to " +
        "leap from the involvement of a response to the conclusion that nothing but the " +
        "response is involved. A judgement of beauty can be more or less perceptive, better " +
        "or worse informed, and open to correction by longer looking, and a theory that " +
        "denies this has not described our experience of art but quietly replaced it with " +
        "a simpler thing we do not, on reflection, recognise.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-928",
      genre: "science",
      title: "The Comfort and Cost of the Average",
      body:
        "To summarise a crowd of measurements in a single number is one of the small " +
        "triumphs of statistics, and one of its quiet hazards. The average tells us " +
        "where a distribution sits, and for many purposes that is all we need. But the " +
        "convenience invites a forgetting. A river with an average depth of one metre " +
        "is perfectly drownable if its middle channel runs to four. A medicine that " +
        "extends life by a mean of three months may grant two patients three years " +
        "while shortening the lives of others, the gains and losses cancelling into a " +
        "reassuring figure that describes no actual person. The average is a fact about " +
        "the group, not a forecast about the individual, and the slide from the first " +
        "to the second is among the commonest errors in the reading of numbers. None of " +
        "this is an argument against averages, which remain indispensable. The argument " +
        "is against treating the average as though it exhausted what the data have to " +
        "say. A summary that hides its own spread can mislead precisely because it " +
        "soothes; the single tidy number feels like understanding when it may be the " +
        "beginning of misunderstanding. The remedy is not to abandon the measure but to " +
        "refuse to let it travel alone. Report the spread beside the centre, ask how " +
        "wide the variation runs and how the extremes behave, and the same figure that " +
        "once concealed begins to inform. The number was never the problem. The problem " +
        "was the wish to be told a single thing about a world that is rarely so obliging.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-929",
      genre: "politics",
      title: "Rights and the Cost of Taking Them Seriously",
      body:
        "It is easy to be in favour of rights in the abstract, and the test of whether " +
        "one means it comes only when a right protects someone we would rather it did " +
        "not. A right that yields whenever its exercise proves unpopular or inconvenient " +
        "is not a right at all but a privilege held at the pleasure of the majority. " +
        "This is the feature that makes rights valuable and the same feature that makes " +
        "them irritating. Their whole point is to remove certain choices from the " +
        "ordinary calculus of costs and benefits, to say that here, on this matter, the " +
        "numbers do not get to decide. A free press that could be silenced the moment " +
        "its revelations embarrassed a government would offer no protection precisely " +
        "when protection was needed. Critics object that treating rights as trumps lets " +
        "stubborn minorities frustrate the common good, and the objection has force in " +
        "extreme cases. But notice what the objection assumes: that we can reliably tell, " +
        "in the heat of the moment, the genuine emergency from the merely awkward " +
        "demand. The history of suspended liberties is largely a history of awkward " +
        "demands recast as emergencies by those they inconvenienced. A right that is " +
        "honoured only when honouring it is comfortable teaches the holder that he has " +
        "nothing he can count on. That, and not any single instance of frustrated policy, " +
        "is the cost we should weigh most heavily, for it is paid not once but in the " +
        "steady erosion of every assurance the right was meant to give.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-930",
      genre: "history",
      title: "Where One Age Ends and Another Begins",
      body:
        "Textbooks parcel the past into ages: the classical world gives way to the Middle " +
        "Ages, which yield in turn to the Renaissance, each with its character and its " +
        "approximate dates. The divisions are indispensable; no one could think about " +
        "centuries of history without some way of grouping them. But it is worth remembering " +
        "that the boundaries were drawn later, by historians, and were invisible to the people " +
        "who supposedly lived on either side of them. No peasant woke one morning to find that " +
        "the Middle Ages had begun, and the scholars we file under 'Renaissance' did not know " +
        "they were being reborn; the label was pinned on them by others, centuries after. This " +
        "is more than a curiosity, because a period name is never merely a neutral bookmark. To " +
        "call an era the Dark Ages is already to deliver a verdict on it, and to mark a sharp " +
        "line between two centuries is to suggest a break where those living through them may " +
        "have felt only continuity. The danger is that the label, adopted to make discussion easier, " +
        "begins to do our thinking for us, so that we expect the people on one side of the line " +
        "to differ sharply from those on the other and overlook how much simply carried on. None " +
        "of this means the divisions should be abandoned, which would leave us unable to " +
        "generalise at all. It means that they are tools of the historian's making, to be picked " +
        "up and put down as they help or hinder, not features of the past itself that the " +
        "historian merely discovers. The map is not the territory, and the lines ruled across the " +
        "centuries, however useful, were ruled by us and not by time.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-931",
      genre: "currentaffairs",
      title: "Transparency and the Theatre of Disclosure",
      body:
        "Few words command such easy assent as transparency. Who could be against being " +
        "shown the workings of the powers that govern us? Yet disclosure and " +
        "accountability, though often spoken in the same breath, are not the same thing, " +
        "and the gap between them can be exploited. An institution that publishes a " +
        "thousand pages of data has technically disclosed; whether it has been held to " +
        "account depends on whether anyone can find, in that haystack, the few facts " +
        "that matter. Volume can conceal as effectively as secrecy, and at a lower " +
        "reputational cost, for the body that buries an inconvenient figure on page nine " +
        "hundred can always protest that it hid nothing. There is a further trap. The " +
        "demand to make everything visible can itself drive the real decisions out of " +
        "the record and into the corridor, the unminuted lunch, the deniable phone call. " +
        "When every written word may be published, the prudent stop writing the words " +
        "that matter, and the archive that results is honest about trivia and silent " +
        "about substance. None of this is a case for secrecy, which has abuses far worse. " +
        "The point is that transparency is a means, not an end, and a means that can be " +
        "gamed by anyone who grasps the difference between being seen and being " +
        "understood. The citizen who is satisfied by the mere fact of publication has " +
        "settled for the appearance of scrutiny. Genuine accountability asks the harder " +
        "question of whether the disclosure was shaped to inform, or shaped to overwhelm.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-932",
      genre: "philosophy",
      title: "The Case for Being Alone",
      body:
        "Our age treats time spent alone as a problem to be solved. To be by oneself is " +
        "assumed to be lonely, and loneliness is assumed to be a kind of failure, so that " +
        "the solitary person attracts a faint pity even when none is warranted. This runs " +
        "together two things that ought to be kept apart. Loneliness is the painful sense " +
        "of a connection one wants and lacks; solitude is the deliberate withdrawal from " +
        "company for the sake of what only solitude allows. The first is an affliction; the " +
        "second is a resource, and confusing them does real harm, because it teaches people " +
        "to flee a condition they should sometimes seek. Certain goods are simply not " +
        "available in company. It is alone that one tests a borrowed opinion against one's " +
        "own experience and discovers whether it survives, alone that the half-formed " +
        "thought is given room to grow before the chorus of other voices crowds it out. A " +
        "mind never left to itself takes on the shape of its surroundings, mistaking the " +
        "consensus of the room for the verdict of its own judgement. None of this is a brief " +
        "for the hermit, and the point is easily pushed too far. We are social creatures, " +
        "much of what is best in a life is shared, and solitude pursued as a permanent " +
        "condition curdles into something bleak. The claim is only that solitude has its own " +
        "necessary work, which company cannot do for us, and that a culture unable to tell it " +
        "apart from loneliness will raise people who have never learned to be alone, and who " +
        "are therefore, in a sense the culture cannot see, never quite themselves. The capacity " +
        "to sit with one's own company is not a consolation prize for the friendless. It is a " +
        "condition of having a self worth bringing back to others.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-933",
      genre: "science",
      title: "Why We Notice the Hits and Forget the Misses",
      body:
        "A friend telephones at the very moment you were thinking of her, and the " +
        "coincidence feels charged with meaning. Surely, you think, something more than " +
        "chance is at work. The feeling is powerful and almost entirely unearned, " +
        "because it rests on a count you never took. To know whether the call was " +
        "remarkable you would need to weigh it against all the times you thought of her " +
        "and the telephone stayed silent, and all the times it rang while she was the " +
        "last person on your mind. Those non-events leave no trace in the memory; they " +
        "are not stories, and we do not rehearse them. The striking coincidence is " +
        "recorded and retold precisely because it is striking, while its countless dull " +
        "cousins are discarded the instant they occur. The result is a tally rigged in " +
        "favour of wonder. This is not a defect peculiar to the credulous. The same " +
        "machinery underwrites the gambler's certainty that his system is working, the " +
        "patient's faith in a remedy taken during the week a cold was going to lift " +
        "anyway, and the conviction that bad news arrives in threes. In each case the " +
        "confirming instance is vivid and the disconfirming absence is invisible, and " +
        "the mind, totting up only what it can see, reaches a confident and worthless " +
        "verdict. The corrective is unglamorous but reliable: before marvelling at how " +
        "often a thing happens, ask how often it had the chance to happen and did not. " +
        "Coincidence astonishes only those who decline to do the arithmetic.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * QUESTIONS — implied (15), inference (15), factinf (15) = 45 total.
   * Each is a four-option MCQ with a 4-entry per-option rationale and a
   * worked solution. answerIndex spread is balanced across A/B/C/D.
   * ---------------------------------------------------------------------- */

  /* ===== TYPE: implied (Stated vs Implied, 2b) — 15 questions ============ */
  DATA.questions.push(
    // psg-philosophy-921 — answer A (0)
    {
      id: "q-implied-921",
      passageId: "psg-philosophy-921",
      type: "implied",
      stem: "The passage implies, without stating it directly, that our confidence that an animal is genuinely thinking is strongest when:",
      options: [
        "no simpler, mechanical explanation can account for what the animal does.",
        "the animal physically resembles a human being.",
        "we are able to feel the animal's experience from within.",
        "the behaviour can be put down to blind instinct."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says 'the case for crediting an animal with a thought is strongest exactly where no mechanical reflex will account for what it does', so confidence is strongest where the simpler explanation fails.",
        "Wrong: the passage ties confidence to the failure of mechanical explanations, not to physical likeness to humans, and it warns against painting creatures 'in human colours'.",
        "Wrong: the author grants we can 'never climb inside another creature's experience', so feeling it from within is exactly what is not required, or even possible, for the claim.",
        "Wrong: where instinct does explain the behaviour the richer reading 'grows strained', so this reverses the condition the passage gives."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that crediting an animal with a thought is strongest 'where no mechanical reflex will account for what it does'. The unstated but supported step is that our confidence is strongest when no simpler, mechanical explanation will do, which is the no-simpler-explanation option. The others attach the claim to physical likeness, to feeling the experience from within, or to instinct, each of which the passage rejects.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-politics-922 — answer B (1)
    {
      id: "q-implied-922",
      passageId: "psg-politics-922",
      type: "implied",
      stem: "Which of the following does the passage imply without directly asserting it?",
      options: [
        "Most political silences are the product of deliberate conspiracy.",
        "A contented population and a quietly resigned one can be indistinguishable to an outside observer.",
        "Recorded votes are a fabrication that should be ignored.",
        "Committee chairs are the most powerful figures in any government."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author explicitly denies this, saying it is 'not a claim that every silence conceals a conspiracy'.",
        "Correct: by saying the contented case and the resigned case 'look identical from the gallery', the passage implies an observer cannot tell them apart from the outside.",
        "Wrong: the passage treats roll-calls as real but incomplete evidence, not as fabrications to ignore.",
        "Wrong: the chair is one illustration of agenda power, not a claim that chairs outrank all other officials."
      ],
      workedSolution:
        "The explicit statement is that the content and the resigned 'look identical from the gallery'. The implied, unstated step is that an external observer therefore cannot distinguish them, which is option B. Option A is expressly disavowed; C and D overreach beyond the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-science-923 — answer C (2)
    {
      id: "q-implied-923",
      passageId: "psg-science-923",
      type: "implied",
      stem: "The passage implies, without stating it directly, that a copyright term lasting beyond the author's lifetime:",
      options: [
        "encourages that author to produce still more work.",
        "is the only way to reward the labour of creation.",
        "serves the current rights-holder rather than any creative incentive.",
        "has no effect on the cost of making new works."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage says such a term 'cannot be defended as an incentive to a person who is no longer alive to be incentivised', so it cannot spur that author.",
        "Wrong: the passage treats reward as widely accepted but argues an over-long term stops paying for itself, so it is not held up as the only way to reward creation.",
        "Correct: by saying the long term 'can only be defended as a windfall to whoever now holds the rights', the passage implies it serves the present rights-holder, not any incentive to create.",
        "Wrong: the passage states protection 'raises the price of the raw material every later maker needs', so it does affect the cost of new work."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines are that a term outliving the author's grandchildren cannot be an incentive to the dead author and 'can only be defended as a windfall to whoever now holds the rights'. The unstated but supported step is that such a term benefits the present rights-holder rather than creativity, which is the windfall-to-the-rights-holder option. The others reverse or contradict the text.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-history-924 — answer D (3)
    {
      id: "q-implied-924",
      passageId: "psg-history-924",
      type: "implied",
      stem: "The passage implies, without stating it outright, that writing a dying language down before the last speaker dies:",
      options: [
        "fully preserves everything the living language contained.",
        "is a waste of effort that should not be attempted.",
        "proves the language was never really valuable.",
        "captures only part of what a language alive in a community holds."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the pressed-flower analogy implies the opposite, that the recorded grammar is not the same as the living one.",
        "Wrong: the author calls such salvage 'worth doing', so it is not dismissed as a waste.",
        "Wrong: the passage treats the language as genuinely valuable; the loss is 'real', not merely sentimental.",
        "Correct: by saying 'a grammar recorded in a notebook is not the same as a grammar alive in a community', the author implies the written record captures only part of what the living language held."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that a grammar recorded in a notebook 'is not the same as a grammar alive in a community', glossed by the pressed-flower image. The unstated but supported step is that writing it down preserves only part of the living language, which is the partial-capture option. The others reverse or overstate the passage.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-currentaffairs-925 — answer A (0)
    {
      id: "q-implied-925",
      passageId: "psg-currentaffairs-925",
      type: "implied",
      stem: "The passage implies that a city resident who would prefer not to drive:",
      options: [
        "is left with little practical alternative to relying on a car.",
        "can easily switch to walking or the bus instead.",
        "must be wealthier than those who drive.",
        "is the planners' main concern when roads are designed."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says such a person 'inherits a city arranged so that the other ways no longer function', implying the car is effectively unavoidable.",
        "Wrong: the passage says the bus comes rarely and the pavement 'peters out', so the alternatives are exactly what no longer work.",
        "Wrong: the passage notes one who 'cannot afford a car' is among those stranded, so it does not tie non-driving to wealth.",
        "Wrong: the car-built city implies planners did not centre the needs of non-drivers; it was 'arranged' against them."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that the would-be non-driver 'inherits a city arranged so that the other ways no longer function'. The implied step is that he has little practical alternative to the car, which is the first option. The others contradict the passage's account of the failed alternatives.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-literature-926 — answer B (1)
    {
      id: "q-implied-926",
      passageId: "psg-literature-926",
      type: "implied",
      stem: "The passage implies that, if access to a wide audience were the test of who should hold an object, then:",
      options: [
        "small provincial galleries would be the rightful keepers of treasures.",
        "a museum could keep an object no matter how it had been acquired.",
        "objects would have to be returned to their countries of origin.",
        "no institution could ever justify holding foreign artefacts."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the access argument favours the crowded metropolis over the 'provincial gallery few will ever reach', so it would not hand treasures to small galleries.",
        "Correct: the passage says that on this test 'the museum that drew the most visitors would have the strongest claim to anything, however it came by it', implying the manner of acquisition would cease to matter.",
        "Wrong: the access argument is offered precisely to resist return, so it does not imply objects must go back.",
        "Wrong: the access argument works to justify, not forbid, a great museum's holding of foreign objects."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit consequence drawn is that, on the footfall test, the busiest museum 'would have the strongest claim to anything, however it came by it'. The implied step is that the museum could keep an object regardless of how it was obtained, which is the regardless-of-acquisition option. The others reverse the argument's direction.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-927 — answer C (2)
    {
      id: "q-implied-927",
      passageId: "psg-philosophy-927",
      type: "implied",
      stem: "The passage implies, without stating it directly, that the 'eye of the beholder' view:",
      options: [
        "is the only account compatible with how we discuss art.",
        "denies that anyone ever responds to a work of art.",
        "cannot explain why we treat some judgements of beauty as better than others.",
        "holds that beauty is a measurable property like mass."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage argues our conduct 'refutes it at every turn', the opposite of compatibility.",
        "Wrong: the view centres on the beholder's response, so it plainly does not deny that responses occur.",
        "Correct: by noting that we defer to better-informed judges and speak of 'having learned to see', the author implies the purely subjective view cannot account for our ranking some judgements above others.",
        "Wrong: treating beauty as measurable like mass is the position the author sets against the subjectivist, not the subjectivist's own claim."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit material is that we defer to the more experienced and speak of learning to see. The unstated but supported step is that the beholder view cannot explain why some aesthetic judgements count as better, which is the better-than-others option. The others reverse or misattribute the view.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-science-928 — answer D (3)
    {
      id: "q-implied-928",
      passageId: "psg-science-928",
      type: "implied",
      stem: "By the river example, the passage implies that an average can be dangerous because it:",
      options: [
        "is usually calculated incorrectly.",
        "is always lower than the true maximum.",
        "applies only to rivers and similar natural systems.",
        "can describe the group while saying nothing safe about any particular case."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage never suggests the average is miscalculated; its worry is about how a correct average is read.",
        "Wrong: that an average lies below the maximum is a feature of the example, not the general danger the passage draws from it.",
        "Wrong: the author explicitly generalises beyond rivers, to medicines and to numbers at large.",
        "Correct: the river 'perfectly drownable' despite a safe mean depth implies the average can fit the group yet be unsafe to apply to any individual point, which the passage states as 'a fact about the group, not a forecast about the individual'."
      ],
      workedSolution:
        "The explicit principle is that the average is 'a fact about the group, not a forecast about the individual'. The river image implies the danger of treating a group summary as a guarantee about a particular case, which is option D. A, B and C mistake the example for the lesson or add unstated claims.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-politics-929 — answer A (0)
    {
      id: "q-implied-929",
      passageId: "psg-politics-929",
      type: "implied",
      stem: "The passage implies that calling a right a 'privilege' would mean that it:",
      options: [
        "could be withdrawn whenever the majority found it inconvenient.",
        "was guaranteed more securely than an ordinary right.",
        "belonged only to wealthy members of society.",
        "had been formally written into law."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage defines the failing case as one that 'yields whenever its exercise proves unpopular or inconvenient' and calls that 'a privilege held at the pleasure of the majority', implying a privilege is revocable at the majority's will.",
        "Wrong: this reverses the contrast; the privilege is the weaker, revocable thing, not the more secure one.",
        "Wrong: 'privilege' here means majority-revocable, not wealth-restricted; income is never mentioned.",
        "Wrong: being written into law is not what the passage means by privilege; the distinction is about revocability, not formal enactment."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit gloss is 'a privilege held at the pleasure of the majority' that 'yields whenever its exercise proves unpopular'. The implied meaning of 'privilege' is therefore something the majority may withdraw at will, which is option A. The others reverse or import unrelated features.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-history-930 — answer B (1)
    {
      id: "q-implied-930",
      passageId: "psg-history-930",
      type: "implied",
      stem: "The passage implies, without stating it directly, that the people living around the boundary between two historical eras:",
      options: [
        "consciously marked the change from one age to the next.",
        "would often have experienced continuity rather than any sharp break.",
        "invented the period names that historians later adopted.",
        "lived very differently from one another on either side of the line."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says the boundaries were 'invisible' to those who lived through them, so they did not consciously mark them.",
        "Correct: by saying a sharp line suggests 'a break where those living through them may have felt only continuity', the author implies contemporaries often experienced continuity, not rupture.",
        "Wrong: the passage says the labels were pinned on by historians 'centuries after', not coined by the people themselves.",
        "Wrong: the author warns against expecting people on one side to 'differ sharply' from the other, the reverse of this option."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit material is that the boundaries were invisible to contemporaries and that a sharp line suggests a break where there 'may have felt only continuity'. The unstated but supported step is that those living through it would often have felt continuity, which is the continuity option. The others contradict the text.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-currentaffairs-931 — answer C (2)
    {
      id: "q-implied-931",
      passageId: "psg-currentaffairs-931",
      type: "implied",
      stem: "The passage implies that requiring everything to be put in writing can:",
      options: [
        "guarantee that the public learns what truly matters.",
        "make officials keep fuller and more candid records.",
        "push the most important decisions into unrecorded conversations.",
        "eliminate secrecy from public life altogether."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage warns the opposite, that volume 'can conceal as effectively as secrecy', so it offers no such guarantee.",
        "Wrong: the author says the prudent 'stop writing the words that matter', the reverse of fuller, more candid records.",
        "Correct: the passage states that when every word may be published the real decisions move 'into the corridor, the unminuted lunch, the deniable phone call', implying mandatory writing drives key decisions off the record.",
        "Wrong: the passage treats transparency as gameable, not as something that abolishes secrecy."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit description is that decisions move to 'the unminuted lunch, the deniable phone call'. The implied consequence is that forcing written records pushes important decisions into unrecorded settings, which is option C. The other options reverse or overstate the passage.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-932 — answer D (3)
    {
      id: "q-implied-932",
      passageId: "psg-philosophy-932",
      type: "implied",
      stem: "The passage implies, without stating it directly, that a person who is alone:",
      options: [
        "is necessarily lonely and to be pitied.",
        "has failed to form the relationships a good life requires.",
        "should aim to become a permanent hermit.",
        "need not be suffering any misfortune at all."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author distinguishes solitude from loneliness and says the solitary attract pity 'even when none is warranted', the reverse of this option.",
        "Wrong: the passage treats deliberate solitude as a 'resource', not as evidence of failed relationships.",
        "Wrong: the author explicitly says the passage is 'not a brief for the hermit'.",
        "Correct: by separating solitude, a deliberate and valuable withdrawal, from loneliness, the painful lack of wanted connection, the author implies that being alone need involve no misfortune."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit move is to distinguish solitude (a resource) from loneliness (an affliction). The unstated but supported step is that someone alone need not be suffering at all, which is the no-misfortune option. The others equate aloneness with loneliness or push the point to the hermit extreme the author disowns.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-science-933 — answer A (0)
    {
      id: "q-implied-933",
      passageId: "psg-science-933",
      type: "implied",
      stem: "The passage implies that the sense of wonder at a timely phone call is unwarranted mainly because:",
      options: [
        "the occasions when no call came are never counted.",
        "telephones are now too common to be surprising.",
        "thinking of someone has no effect on their behaviour.",
        "most coincidences are arranged in advance."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the feeling 'rests on a count you never took', because the silent occasions 'leave no trace in the memory', implying the wonder is unearned because the misses go uncounted.",
        "Wrong: the prevalence of telephones is never offered as the reason; the argument is about a missing tally.",
        "Wrong: whether thought influences behaviour is not the passage's claim; it concerns the counting of hits versus misses.",
        "Wrong: the passage attributes the impression to chance plus selective memory, not to coincidences being pre-arranged."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit lines are that the feeling 'rests on a count you never took' and the non-events 'leave no trace'. The implied reason the wonder is unwarranted is that the misses are never counted, which is option A. The others import mechanisms the passage does not endorse.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-literature-926 — answer B (1)
    {
      id: "q-implied-934",
      passageId: "psg-literature-926",
      type: "implied",
      stem: "The passage implies, without stating it directly, that long possession and public display of an object:",
      options: [
        "are enough to make the holder its rightful owner.",
        "do not by themselves convert it into rightful property.",
        "are irrelevant to how many visitors a museum attracts.",
        "prove that the object was originally acquired fairly."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says an object wrongly acquired 'does not become rightful property merely because it has been kept a long time and shown to a large audience', the opposite of this option.",
        "Correct: by denying that long keeping and wide display make a wrongly taken object rightful, the passage implies these things do not by themselves create rightful ownership.",
        "Wrong: the passage does not raise display as irrelevant to visitor numbers; its point is about ownership, not attendance figures.",
        "Wrong: the passage treats the manner of original acquisition as a separate, unanswered question, so long possession proves nothing about fairness at the start."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit line is that an object 'does not become rightful property merely because it has been kept a long time and shown to a large audience'. The unstated but supported step is that possession plus display does not by itself confer rightful ownership, which is the not-by-themselves option. The others reverse or misdirect the claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-politics-922 — answer C (2)
    {
      id: "q-implied-935",
      passageId: "psg-politics-922",
      type: "implied",
      stem: "The passage implies that reformers who study only recorded votes are likely to:",
      options: [
        "overstate how often the powerful resort to conspiracy.",
        "conclude that committees are unnecessary.",
        "overestimate how open the institutions they examine really are.",
        "recommend abolishing the secret ballot."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the conspiracy idea is one the author sets aside, not a tendency he attributes to roll-call reformers.",
        "Wrong: the necessity of committees is never at issue; the chair is only an example of agenda control.",
        "Correct: the passage says such reformers 'flatter the openness of the institutions they study' by seeing only admitted debates, implying they overestimate the institutions' openness.",
        "Wrong: the secret ballot is not discussed; the gatekeeping described is over which questions reach a vote, not how votes are cast."
      ],
      workedSolution:
        "Stated-vs-implied: the explicit charge is that vote-counting reformers 'flatter the openness' of institutions. The implied result is that they overestimate that openness, which is option C. The other options introduce subjects (conspiracy, committees, secret ballots) the passage does not support.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ===== TYPE: inference (Inference / Implication, 3a) — 15 questions ===== */
  DATA.questions.push(
    // psg-science-923 — answer D (3)
    {
      id: "q-inference-921",
      passageId: "psg-science-923",
      type: "inference",
      stem: "Which conclusion does the passage most support about copyright protection?",
      options: [
        "More protection always yields more creativity.",
        "Creators have no legitimate claim to reward for their work.",
        "Copyright should be abolished so that all material is free to reuse.",
        "Beyond a certain point, protection can hinder the very creativity it was meant to encourage."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author challenges exactly this view, calling it the tension 'too often ignored by those who treat more protection as straightforwardly more creativity'.",
        "Wrong: the passage says the reward of creators is something 'scarcely anyone denies', so it does not reject a legitimate claim to reward.",
        "Wrong: the author explicitly states this 'is not a case for abolishing copyright', which would leave creators exposed.",
        "Correct: the passage says protection 'meant to encourage the next work can, past a certain point, forbid it' and 'come to defeat the end it was built to serve', directly supporting this conclusion."
      ],
      workedSolution:
        "An inference must be supported, not merely plausible. The text states that protection past a certain point can 'forbid' the next work and 'defeat the end it was built to serve'. That licenses the hinders-creativity option. The all-protection-helps option is the view the author attacks; the no-reward and abolition options are both expressly denied.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-921 — answer C (2)
    {
      id: "q-inference-922",
      passageId: "psg-philosophy-921",
      type: "inference",
      stem: "From the passage, which conclusion about the sceptical claim that we cannot know an animal's mind is best supported?",
      options: [
        "It is a confused worry that ought to be dismissed out of hand.",
        "It shows that we can know an animal's mind as directly as we know our own.",
        "It proves too much, since the same reasoning would deny us knowledge of other human minds.",
        "It establishes that every animal action reveals a rich inner life."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls the sceptical point 'genuine' and says it 'ought not be waved away', so it is not dismissed out of hand.",
        "Wrong: the passage grants we can 'never climb inside another creature's experience', so it denies that we know an animal's mind directly, let alone as we know our own.",
        "Correct: the passage says we 'can no more inhabit the mind of our neighbour than that of a crow, yet we do not on that account doubt that our neighbour thinks', so the sceptic's reasoning, applied consistently, would bar knowledge of other people's minds too.",
        "Wrong: the author warns that 'much animal behaviour yields to spare explanations', so he denies that every action reveals rich thought."
      ],
      workedSolution:
        "An inference must be supported. The text grants the sceptical point is genuine, then observes that we cannot inhabit a neighbour's mind any more than a crow's yet still credit the neighbour with thought. That supports the proves-too-much conclusion: the same reasoning would deny us knowledge of other human minds. Dismissing the worry and reading every action as rich thought are both expressly denied, and the direct-knowledge option contradicts the concession that we cannot enter another's experience.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-politics-929 — answer B (1)
    {
      id: "q-inference-923",
      passageId: "psg-politics-929",
      type: "inference",
      stem: "Which conclusion about suspending rights during emergencies does the passage most support?",
      options: [
        "Genuine emergencies never justify limiting any right.",
        "Claims of emergency should be treated with suspicion because awkward demands are often dressed up as emergencies.",
        "Rights should be suspended whenever a majority votes to do so.",
        "Minorities who invoke rights are usually acting in bad faith."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author grants the critics' objection 'has force in extreme cases', so does not deny that emergencies can ever justify limits.",
        "Correct: the passage says 'the history of suspended liberties is largely a history of awkward demands recast as emergencies', supporting wariness about emergency claims.",
        "Wrong: the whole point of rights, per the passage, is that 'the numbers do not get to decide', so majority votes are not a sufficient warrant.",
        "Wrong: the bad faith the author identifies lies with those who recast awkward demands as emergencies, not with the minorities invoking rights."
      ],
      workedSolution:
        "The text states that suspended liberties are 'largely a history of awkward demands recast as emergencies'. That supports treating emergency claims sceptically, option B. A overstates; C contradicts the trumps idea; D misassigns the bad faith.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-history-930 — answer A (0)
    {
      id: "q-inference-924",
      passageId: "psg-history-930",
      type: "inference",
      stem: "Which conclusion does the passage most support about historical period names?",
      options: [
        "They are not neutral labels and can shape how we understand the past.",
        "They should be abandoned because they are useless.",
        "They were coined by the very people who lived in each era.",
        "They describe real divisions that historians merely discover in the past."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says a period name 'is never merely a neutral bookmark' and warns the label 'begins to do our thinking for us', supporting that names shape understanding.",
        "Wrong: the author calls the divisions 'indispensable' and warns abandoning them would leave us 'unable to generalise'.",
        "Wrong: the passage says the labels were pinned on 'by others, centuries after', not coined by contemporaries.",
        "Wrong: the author says they are 'tools of the historian's making', 'not features of the past itself that the historian merely discovers'."
      ],
      workedSolution:
        "The text states a period name is 'never merely a neutral bookmark' and can do our thinking for us. The supported conclusion is that the names are non-neutral and shape understanding, which is the first option. The others contradict explicit claims about indispensability, origin, and the map-territory point.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-currentaffairs-931 — answer D (3)
    {
      id: "q-inference-925",
      passageId: "psg-currentaffairs-931",
      type: "inference",
      stem: "Which conclusion about transparency does the passage most support?",
      options: [
        "Publishing more documents always increases accountability.",
        "Secrecy is, on balance, preferable to transparency.",
        "Any institution that releases data has thereby been held to account.",
        "Disclosure can satisfy the form of accountability while defeating its purpose."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says 'volume can conceal as effectively as secrecy', denying that more documents always help.",
        "Wrong: the author states secrecy 'has abuses far worse', so does not prefer it.",
        "Wrong: the passage separates disclosure from accountability, saying being seen is not the same as being understood.",
        "Correct: by distinguishing disclosure from accountability and warning of data that overwhelms, the passage supports that disclosure can meet the form while defeating the purpose of accountability."
      ],
      workedSolution:
        "The text repeatedly drives a wedge between 'being seen and being understood' and warns of burial-by-volume. The supported conclusion is option D. A and C are contradicted; B misstates the author's comparative judgement.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-science-933 — answer C (2)
    {
      id: "q-inference-926",
      passageId: "psg-science-933",
      type: "inference",
      stem: "Which conclusion does the passage most support about the gambler who believes his system works?",
      options: [
        "His system probably does work, given his run of wins.",
        "He has carefully counted both his wins and his losses.",
        "His confidence rests on remembering wins while overlooking losses.",
        "Gambling systems are usually based on sound mathematics."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage groups the gambler with cases of 'a confident and worthless verdict', so it does not endorse his system.",
        "Wrong: the author's whole point is that the disconfirming instances are 'invisible' and uncounted, the opposite of careful tallying.",
        "Correct: the gambler is an instance where 'the confirming instance is vivid and the disconfirming absence is invisible', so his confidence rests on noticing wins and not losses.",
        "Wrong: the passage offers no view on the mathematics of systems; it explains a bias in how evidence is remembered."
      ],
      workedSolution:
        "The text places the gambler among cases where vivid confirmations are counted and absent disconfirmations are not. The supported conclusion is option C. A and D are unsupported; B contradicts the stated invisibility of the misses.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-927 — answer B (1)
    {
      id: "q-inference-927",
      passageId: "psg-philosophy-927",
      type: "inference",
      stem: "Which conclusion about the subjectivist view does the passage most support?",
      options: [
        "It is entirely without merit and gets nothing right.",
        "It correctly identifies the role of the observer's response but wrongly concludes that nothing else is involved.",
        "It proves that beauty is a measurable property of objects.",
        "It shows that arguing about art is always pointless."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author grants 'to that extent the subjectivist saw something real', so the view is not wholly mistaken.",
        "Correct: the passage says the response 'is part of the story' but that the mistake 'was to leap from the involvement of a response to the conclusion that nothing but the response is involved'.",
        "Wrong: the author explicitly denies beauty is 'a plain property like mass', so the subjectivist's error does not establish that.",
        "Wrong: the passage treats argument about art as meaningful evidence, not as pointless."
      ],
      workedSolution:
        "The author concedes the response is genuinely part of aesthetic judgement, then rejects the further step that only the response matters. The supported conclusion is the partly-right option. A overstates the rejection; C and D contradict the text.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-science-928 — answer A (0)
    {
      id: "q-inference-928",
      passageId: "psg-science-928",
      type: "inference",
      stem: "Which conclusion does the passage most support about how averages should be reported?",
      options: [
        "An average is most informative when it is accompanied by a measure of its spread.",
        "Averages should be abandoned in favour of listing every data point.",
        "The wider the variation, the less the average should ever be calculated.",
        "A single number is the clearest possible summary of any dataset."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the remedy offered is to 'report the spread beside the centre', after which 'the same figure that once concealed begins to inform', supporting this conclusion.",
        "Wrong: the passage calls averages 'indispensable' and does not recommend abandoning them for raw data.",
        "Wrong: the author urges reporting spread alongside the average, not refraining from calculating the average when variation is wide.",
        "Wrong: the passage warns that a lone tidy number 'feels like understanding when it may be the beginning of misunderstanding', so it denies this."
      ],
      workedSolution:
        "The explicit remedy is to 'report the spread beside the centre', whereupon the figure 'begins to inform'. That supports option A. B and C overshoot the author's actual recommendation; D states the very error the passage cautions against.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-politics-922 — answer D (3)
    {
      id: "q-inference-929",
      passageId: "psg-politics-922",
      type: "inference",
      stem: "Which conclusion does the passage most support about the absence of overt political conflict?",
      options: [
        "It reliably indicates that the population is content.",
        "It proves that the powerful are actively suppressing dissent.",
        "It means the institution in question is functioning democratically.",
        "It is weak evidence about whether genuine consensus exists."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage explicitly says quiet may mean contentment 'or' learned resignation, so absence of conflict does not reliably indicate contentment.",
        "Wrong: the author denies that 'every silence conceals a conspiracy', so it does not prove active suppression.",
        "Wrong: nothing in the passage equates quiet with democratic health; the thrust is the reverse caution.",
        "Correct: the passage states directly that 'the absence of overt conflict is weak evidence of genuine consensus', which is this conclusion."
      ],
      workedSolution:
        "The text's central claim is that 'the absence of overt conflict is weak evidence of genuine consensus'. That is option D verbatim in substance. A and C overread the silence; B is expressly disavowed.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-history-924 — answer C (2)
    {
      id: "q-inference-930",
      passageId: "psg-history-924",
      type: "inference",
      stem: "Which conclusion does the passage most support about the way languages die?",
      options: [
        "Language death is usually caused by deliberate suppression by governments.",
        "The parents who abandon a language act foolishly and against their children's interests.",
        "A series of individually reasonable choices can combine into a collective loss that no one intended.",
        "A language survives only if its speakers refuse all contact with larger tongues."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage attributes the shift to private decisions for schooling and work, not to deliberate state suppression.",
        "Wrong: the author calls the parents' choice 'rarely foolish' and warns against calling it 'a betrayal'.",
        "Correct: the passage says 'the sum of these reasonable private decisions is a public loss that none of them intended', supporting this conclusion.",
        "Wrong: the passage neither states nor implies that survival requires refusing all contact; it describes why speakers shift, not a rule for survival."
      ],
      workedSolution:
        "The passage builds from rational individual decisions to an unintended public loss, stating the sum 'none of them intended'. The supported conclusion is the collective-loss option. A and D import claims the text avoids; B contradicts the author's defence of the parents' choice.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-932 — answer B (1)
    {
      id: "q-inference-931",
      passageId: "psg-philosophy-932",
      type: "inference",
      stem: "Which conclusion does the passage most support about independent judgement?",
      options: [
        "It is best formed by constant discussion with others.",
        "It can be lost when a mind is never left alone, taking the shape of its surroundings.",
        "It is identical to loneliness.",
        "It requires withdrawing from company permanently."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says a mind never left to itself 'mistakes the consensus of the room for the verdict of its own judgement', so constant discussion is the danger, not the cure.",
        "Correct: the author warns that 'a mind never left to itself takes on the shape of its surroundings', supporting that judgement can be lost without solitude.",
        "Wrong: independent judgement is a good solitude protects, not the affliction of loneliness.",
        "Wrong: the author disowns the hermit ideal, so permanent withdrawal is not what judgement requires."
      ],
      workedSolution:
        "The text says a mind never alone takes the shape of its surroundings and mistakes the room's consensus for its own verdict. The supported conclusion is that judgement can erode without solitude, which is the shape-of-its-surroundings option. The others invert the claim or push it to the hermit extreme.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-currentaffairs-925 — answer A (0)
    {
      id: "q-inference-932",
      passageId: "psg-currentaffairs-925",
      type: "inference",
      stem: "Which conclusion does the passage most support about a city shaped around a single way of moving?",
      options: [
        "It does not merely favour that way but slowly removes the alternatives to it.",
        "It leaves every other way of getting about exactly as usable as before.",
        "It proves that cars brought no real freedoms at all.",
        "It can be reversed simply by individuals choosing to walk more."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states such a city 'does not merely favour that way; it slowly removes the alternatives', directly supporting this conclusion.",
        "Wrong: the passage says the bus and pavement cease to function, so the alternatives are not left as usable as before.",
        "Wrong: the author grants that cars 'carried real freedoms', so this overstates the case.",
        "Wrong: the passage locates the cause in the 'shape of the streets', implying individual choices alone cannot easily undo it."
      ],
      workedSolution:
        "The text says a city built around one mode 'slowly removes the alternatives' until the choice 'has been made for everyone in advance'. The supported conclusion is the removes-the-alternatives option. B contradicts it; C and D over- or understate the author's qualified position.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-literature-926 — answer B (1)
    {
      id: "q-inference-933",
      passageId: "psg-literature-926",
      type: "inference",
      stem: "Which conclusion does the passage most support about how a museum should decide whether to keep a contested object?",
      options: [
        "It should keep whatever object draws the largest crowd to its doors.",
        "It cannot settle the matter by counting visitors, because the prior question is whether the object was rightfully its to display.",
        "It must return every artefact in its collection to the place it came from.",
        "It should base its decision purely on how long the object has been held."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage rejects the footfall test, warning it would justify holding 'anything, however it came by it'.",
        "Correct: the passage states 'a museum cannot settle the matter by counting the visitors at its door, for the prior question is whether what stands in the case was ever the museum's to display'.",
        "Wrong: the author says 'none of this means every artefact must go home', so this overstates the conclusion.",
        "Wrong: the passage denies that long possession makes an object rightful, so duration alone is not the proper basis."
      ],
      workedSolution:
        "An inference must be supported. The closing lines say a museum 'cannot settle the matter by counting the visitors' because the prior question is rightful title to display. That supports the prior-question option. The crowd-size and duration options are the very tests the passage rejects, and the return-everything option is expressly disowned.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-science-928 — answer C (2)
    {
      id: "q-inference-934",
      passageId: "psg-science-928",
      type: "inference",
      stem: "Which conclusion does the passage most support about two datasets that share the same average?",
      options: [
        "They must contain the same individual values.",
        "They cannot differ in any way that matters.",
        "They may behave very differently once their spreads are taken into account.",
        "The one with the wider spread has the higher average."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage's medicine example shows identical means arising from quite different individual outcomes, so a shared average does not fix the values.",
        "Wrong: this is the very error the passage warns against; a soothing single number 'may be the beginning of misunderstanding'.",
        "Correct: the author urges reporting 'the spread beside the centre' because the same figure 'once concealed' can then 'inform', supporting that equal-average datasets may behave very differently when spread is considered.",
        "Wrong: the passage treats spread and centre as independent; a wider spread implies nothing about whether the average is higher."
      ],
      workedSolution:
        "The passage insists the average is 'a fact about the group' that can conceal until the spread is reported alongside it. It follows that two datasets with the same average may still diverge sharply once spread is weighed, which is option C. A and B commit the error the passage diagnoses; D invents a relationship the text denies.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-politics-929 — answer D (3)
    {
      id: "q-inference-935",
      passageId: "psg-politics-929",
      type: "inference",
      stem: "Which conclusion does the passage most support about the deepest cost of honouring rights only when convenient?",
      options: [
        "It is the occasional defeat of a sensible government policy.",
        "It is the financial expense of protecting unpopular speech.",
        "It is the encouragement this gives to stubborn minorities.",
        "It is the loss of any assurance the right-holder can rely on."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly says the cost to weigh most heavily is 'not any single instance of frustrated policy'.",
        "Wrong: financial expense is never raised as the relevant cost in the passage.",
        "Wrong: emboldened minorities are the critics' worry, which the author largely answers, not the deepest cost he identifies.",
        "Correct: the passage says the heaviest cost is the lesson 'that he has nothing he can count on' and 'the steady erosion of every assurance the right was meant to give'."
      ],
      workedSolution:
        "The passage names the gravest cost as teaching the holder he 'has nothing he can count on' and eroding 'every assurance'. That is option D. A is expressly set aside; B and C are not the cost the author prioritises.",
      difficulty: "hard",
      source: "illustrative"
    }
  );

  /* ===== TYPE: factinf (Fact vs Inference, 3b) — 15 questions ============ */
  DATA.questions.push(
    // psg-science-923 — answer C (2)
    {
      id: "q-factinf-921",
      passageId: "psg-science-923",
      type: "factinf",
      stem: "Which statement is presented as a reported fact rather than as the author's inference?",
      options: [
        "Protection meant to encourage the next work can end up forbidding it.",
        "A long copyright term is a windfall to whoever now holds the rights.",
        "Composers rework older tunes and playwrights reuse plots that were already ancient.",
        "Copyright is a means to an end that can come to defeat that end."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that protection 'can, past a certain point, forbid' the next work is the author's reasoned claim, not a reported fact.",
        "Wrong: calling the long term 'a windfall to whoever now holds the rights' is the author's interpretive judgement.",
        "Correct: that composers rework folk tunes and playwrights lift ancient plots is offered as a plain description of how creation proceeds, the factual premise the argument then interprets.",
        "Wrong: that copyright is a means that can defeat its own end is the author's concluding inference."
      ],
      workedSolution:
        "Separate reported facts from inferential steps. The description of how makers build on older works is presented as observed fact; the windfall claim, the forbidding-the-next-work claim, and the means-defeats-end claim are all inferences built on that fact. So the reworks-older-tunes option is the fact.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-philosophy-921 — answer D (3)
    {
      id: "q-factinf-922",
      passageId: "psg-philosophy-921",
      type: "factinf",
      stem: "Which of the following does the passage present as an inference rather than as a plain observation?",
      options: [
        "Sceptics appeal to our inability to enter another creature's experience from within.",
        "A crow has bent a wire into a hook to reach a treat without having seen the trick done.",
        "We cannot climb inside another creature's experience and feel it from within.",
        "The moral consideration we owe a creature must track the mental life it actually has."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that sceptics appeal to our inability to enter an animal's experience is reported as a plain fact about the position they hold.",
        "Wrong: the wire-bending crow is offered as an observed example, the behaviour the argument is built to explain.",
        "Wrong: that we cannot inhabit another creature's experience is presented as a plain fact about our situation, conceded to the sceptic.",
        "Correct: that the moral consideration owed a creature 'must track the mental life the creature actually has' is the author's reasoned conclusion, drawn from the rest, not a plain observation."
      ],
      workedSolution:
        "The reported sceptical appeal, the observed wire-bending crow, and the conceded fact that we cannot feel another creature's experience from within are all presented as facts. The judgement that the moral consideration we owe a creature must track its actual mental life is the author's inference. So the inference is the moral-consideration option.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-history-930 — answer A (0)
    {
      id: "q-factinf-923",
      passageId: "psg-history-930",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's interpretive claim?",
      options: [
        "The boundaries between historical eras were drawn later, by historians.",
        "A period name is never merely a neutral bookmark.",
        "The label, adopted to make discussion easier, begins to do our thinking for us.",
        "The divisions are tools of the historian's making, not features of the past itself."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: that 'the boundaries were drawn later, by historians' is presented as a plain historical fact, the basis for the argument that follows.",
        "Wrong: that a period name 'is never merely a neutral bookmark' is the author's interpretive claim about such labels.",
        "Wrong: that the label 'begins to do our thinking for us' is the author's interpretive warning about its effect.",
        "Wrong: that the divisions are 'tools of the historian's making' rather than features of the past is the author's central interpretation."
      ],
      workedSolution:
        "The dating of when and by whom the boundaries were drawn is presented as a fact. The claims that the names are non-neutral, that they do our thinking, and that they are made not discovered are the author's interpretation. So the fact is the drawn-later-by-historians option.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-currentaffairs-931 — answer B (1)
    {
      id: "q-factinf-924",
      passageId: "psg-currentaffairs-931",
      type: "factinf",
      stem: "Which statement is presented as a plain fact rather than as the author's inference?",
      options: [
        "Volume can conceal as effectively as secrecy.",
        "An institution that publishes a thousand pages of data has technically disclosed.",
        "Transparency is a means and not an end.",
        "The citizen satisfied by mere publication has settled for the appearance of scrutiny."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that volume 'can conceal as effectively as secrecy' is the author's interpretive claim about disclosure, an inference.",
        "Correct: that publishing a thousand pages means an institution 'has technically disclosed' is stated as a plain matter of fact, which the author then interprets.",
        "Wrong: that transparency 'is a means, not an end' is the author's evaluative conclusion.",
        "Wrong: the judgement about the satisfied citizen is the author's critical inference, not a reported fact."
      ],
      workedSolution:
        "The bare fact is that mass publication counts as technical disclosure; the author builds on it to argue that volume can conceal, that transparency is only a means, and that the satisfied citizen is fooled. Those are inferences. So the fact is option B.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-science-933 — answer C (2)
    {
      id: "q-factinf-925",
      passageId: "psg-science-933",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's interpretation?",
      options: [
        "The tally of coincidences is rigged in favour of wonder.",
        "Coincidence astonishes only those who decline to do the arithmetic.",
        "Occasions when the expected call does not come leave no trace in the memory.",
        "The mind reaches a confident and worthless verdict."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that the tally is 'rigged in favour of wonder' is the author's interpretive summary of the bias.",
        "Wrong: the closing aphorism that coincidence 'astonishes only those who decline to do the arithmetic' is the author's evaluative conclusion.",
        "Correct: that the non-events 'leave no trace in the memory' is presented as a plain fact about how memory works, the premise the argument rests on.",
        "Wrong: calling the resulting verdict 'confident and worthless' is the author's judgement, not a reported fact."
      ],
      workedSolution:
        "The factual premise is that unremarkable non-events 'leave no trace in the memory'. From it the author infers that the tally is rigged, the verdict worthless, and the closing maxim. So the fact is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-politics-929 — answer D (3)
    {
      id: "q-factinf-926",
      passageId: "psg-politics-929",
      type: "factinf",
      stem: "Which statement is presented as a reported fact rather than as the author's argument?",
      options: [
        "A right that yields when inconvenient is really a privilege.",
        "The cost of erosion should be weighed more heavily than any single frustrated policy.",
        "Treating rights as trumps removes certain choices from the calculus of costs and benefits.",
        "The history of suspended liberties is largely a history of awkward demands recast as emergencies."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: redefining a convenience-bound right as 'really ... a privilege' is the author's interpretive claim.",
        "Wrong: that erosion should be weighed most heavily is the author's evaluative conclusion.",
        "Wrong: that rights as trumps remove choices from the cost-benefit calculus is the author's analysis of how rights function.",
        "Correct: the claim about 'the history of suspended liberties' is offered as a historical matter of record, which the argument then uses."
      ],
      workedSolution:
        "The privilege redefinition, the weighing judgement, and the analysis of rights-as-trumps are all the author's reasoning. The statement about the history of suspended liberties is presented as a fact about the record. So the fact is option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-science-928 — answer A (0)
    {
      id: "q-factinf-927",
      passageId: "psg-science-928",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's inference?",
      options: [
        "A river with a mean depth of one metre may have a channel four metres deep.",
        "A summary that hides its spread can mislead because it soothes.",
        "The average is a fact about the group, not a forecast about the individual.",
        "The problem was the wish to be told a single thing about an unobliging world."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the river's mean depth alongside a deeper channel is presented as a plain illustrative fact, from which the author then reasons.",
        "Wrong: that a soothing summary misleads is the author's interpretive claim about why averages deceive.",
        "Wrong: the 'group not individual' formulation is the author's general principle, an inference drawn from the examples.",
        "Wrong: diagnosing 'the wish to be told a single thing' as the problem is the author's concluding judgement."
      ],
      workedSolution:
        "The concrete river figures are a factual example. The claims that soothing summaries mislead, that the average describes the group not the individual, and that the wish for one number is the problem are the inferences built on such examples. So the fact is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-philosophy-927 — answer B (1)
    {
      id: "q-factinf-928",
      passageId: "psg-philosophy-927",
      type: "factinf",
      stem: "Which of the following is offered as the author's inference rather than as a reported feature of our practice?",
      options: [
        "People argue about whether a painting is beautiful.",
        "Our judgements of beauty are reaching for something in the work itself.",
        "We defer to those who have looked at more pictures or heard more music.",
        "People come to admire works that once left them cold."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that people argue about beauty is reported as an observed feature of how we behave.",
        "Correct: that our judgements 'are reaching for something in the work' is the conclusion the author draws from those practices, an inference.",
        "Wrong: that we defer to the more experienced is presented as an observed practice, part of the evidence.",
        "Wrong: that people come to admire what once left them cold is reported as an observed fact about changing taste."
      ],
      workedSolution:
        "The arguing, the deferring, and the revising of taste are presented as observed practices. The claim that our judgements reach for something in the work is the inference the author builds from them. So the inference is the reaching-for-something option.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-history-924 — answer C (2)
    {
      id: "q-factinf-929",
      passageId: "psg-history-924",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's interpretation?",
      options: [
        "Mourning a vanished language is not nostalgia for quaintness.",
        "A written grammar is not the same as a grammar alive in a community.",
        "Parents commonly raise their children in the dominant language to gain access to schooling and work.",
        "When a language dies, a way of seeing the world has gone out."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that mourning a language 'is not nostalgia' is the author's evaluative interpretation of the loss.",
        "Wrong: the contrast between a written and a living grammar, with its pressed-flower image, is the author's interpretive claim.",
        "Correct: that parents raise children in the dominant language for schooling and work is presented as a plain observation about behaviour, the premise the argument interprets.",
        "Wrong: that 'a way of seeing the world has gone out' is the author's interpretive conclusion about what the loss means."
      ],
      workedSolution:
        "Separate reported facts from inferential steps. The observed parental behaviour is presented as fact; the claims that mourning is not nostalgia, that a written grammar differs from a living one, and that a way of seeing has gone out are interpretations built on it. So the fact is the parental-behaviour option.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-currentaffairs-925 — answer D (3)
    {
      id: "q-factinf-930",
      passageId: "psg-currentaffairs-925",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's interpretation?",
      options: [
        "The car is now a precondition of taking part in daily life at all.",
        "A city shaped around one way of moving slowly removes the alternatives.",
        "The freedom to drive has quietly become the obligation to drive.",
        "Roads were widened and shops and homes were pushed apart and ringed with parking."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that the car is now 'a precondition of taking part' is the author's interpretive conclusion about the result.",
        "Wrong: that such a city 'slowly removes the alternatives' is the author's central interpretive claim.",
        "Wrong: that freedom has 'become the obligation to' drive is the author's pointed concluding interpretation.",
        "Correct: that roads were widened and homes and shops pushed apart and ringed with parking is presented as a plain account of what planners did, the factual basis of the argument."
      ],
      workedSolution:
        "The concrete planning actions are presented as fact. The claims that the car is now a precondition, that the city removes alternatives, and that freedom has become obligation are the author's interpretation built on those facts. So the fact is the roads-widened option.",
      difficulty: "easy",
      source: "illustrative"
    },
    // psg-politics-922 — answer A (0)
    {
      id: "q-factinf-931",
      passageId: "psg-politics-922",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's inference?",
      options: [
        "A chair who keeps a proposal off the order paper leaves no recorded division to point to.",
        "Reformers who count only roll-calls flatter the openness of institutions.",
        "The absence of overt conflict is weak evidence of genuine consensus.",
        "Gatekeeping is attractive because it works best when it leaves no trace."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: that blocking a proposal off the agenda produces 'no recorded division to point to' is stated as a plain procedural fact, the basis for the wider argument.",
        "Wrong: that roll-call reformers 'flatter the openness' of institutions is the author's interpretive charge.",
        "Wrong: that absence of conflict is 'weak evidence of genuine consensus' is the author's central inferential claim.",
        "Wrong: explaining why gatekeeping is 'attractive' is the author's interpretation, not a reported fact."
      ],
      workedSolution:
        "The procedural point that agenda-blocking leaves no recorded division is a stated fact. The charge against reformers, the consensus claim, and the account of gatekeeping's appeal are the author's inferences. So the fact is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-literature-926 — answer B (1)
    {
      id: "q-factinf-932",
      passageId: "psg-literature-926",
      type: "factinf",
      stem: "Which statement is presented as the author's interpretation rather than as a plain observation?",
      options: [
        "Encyclopaedic museums defend keeping contested objects by appealing to wider access.",
        "An object wrongly acquired does not become rightful property through long keeping and display.",
        "A great museum places world culture within one afternoon's walk.",
        "Many disputed pieces were taken by armies or administrators answerable to no one locally."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that the great museums defend retention by appealing to access is reported as a fact about the case they make.",
        "Correct: that a wrongly acquired object 'does not become rightful property merely because it has been kept a long time and shown to a large audience' is the author's interpretive, evaluative claim.",
        "Wrong: that a great museum places world culture within an afternoon's walk is granted as a plain observation, the premise the author concedes.",
        "Wrong: that many pieces were taken by armies or administrators is offered as a historical matter of fact."
      ],
      workedSolution:
        "The reported museum defence, the conceded observation about access, and the historical claim about how pieces were taken are presented as givens. The judgement that long keeping and display do not confer rightful ownership is the author's interpretation. So the interpretation is the not-rightful-property option.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-philosophy-932 — answer A (0)
    {
      id: "q-factinf-933",
      passageId: "psg-philosophy-932",
      type: "factinf",
      stem: "Which statement is presented as a plain given rather than as the author's interpretation?",
      options: [
        "Human beings are social creatures.",
        "Solitude is a resource that company cannot replace.",
        "A mind never left alone mistakes the room's consensus for its own judgement.",
        "The capacity to be alone is a condition of having a self worth bringing back to others."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: that 'we are social creatures' is offered as a flat factual concession, a given the author grants while qualifying his case.",
        "Wrong: that solitude is an irreplaceable 'resource' is the author's central interpretive claim.",
        "Wrong: that an unaccompanied mind mistakes consensus for judgement is the author's interpretive warning.",
        "Wrong: that the capacity to be alone is a condition of having a self is the author's concluding evaluative claim."
      ],
      workedSolution:
        "The flat statement that we are social creatures is presented as a given. The claims that solitude is an irreplaceable resource, that an unaccompanied mind defers to the room, and that being alone is a condition of selfhood are the author's interpretation. So the given is the social-creatures option.",
      difficulty: "medium",
      source: "illustrative"
    },
    // psg-science-923 — answer D (3)
    {
      id: "q-factinf-934",
      passageId: "psg-science-923",
      type: "factinf",
      stem: "Which statement is presented as the author's inference rather than as a reported fact?",
      options: [
        "Nobody writes a symphony or a novel expecting to be copied the next morning for nothing.",
        "A scientist builds on results she did not herself discover.",
        "A playwright lifts a plot that was already ancient.",
        "Strong copyright, past a certain point, taxes the very activity it was meant to feed."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that creators do not expect to be copied for nothing is offered as a plain observation about how makers think, part of the case for reward.",
        "Wrong: that a scientist builds on results she did not discover is presented as a factual description of how creation proceeds.",
        "Wrong: that a playwright reuses an ancient plot is given as an observed feature of how works are made.",
        "Correct: that strong protection 'starts taxing the very activity it was meant to feed' is the author's reasoned conclusion, an inference drawn from those facts."
      ],
      workedSolution:
        "The observation that creators expect some reward, and the descriptions of the scientist and the playwright building on older material, are presented as reported facts. The claim that protection past a point taxes the activity it was meant to feed is the author's inference. So the inference is the taxes-the-activity option.",
      difficulty: "hard",
      source: "illustrative"
    },
    // psg-currentaffairs-931 — answer C (2)
    {
      id: "q-factinf-935",
      passageId: "psg-currentaffairs-931",
      type: "factinf",
      stem: "Which statement is presented as a fact rather than as the author's interpretation?",
      options: [
        "Disclosure and accountability are not the same thing.",
        "The body that buries a figure on page nine hundred can protest that it hid nothing.",
        "Secrecy has abuses far worse than transparency.",
        "Genuine accountability asks whether disclosure was shaped to inform or to overwhelm."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that disclosure and accountability 'are not the same thing' is the author's interpretive distinction, the hinge of the argument.",
        "Wrong: the page-nine-hundred protest is the author's illustrative interpretation of how volume conceals, not a reported fact.",
        "Correct: that 'secrecy ... has abuses far worse' is presented as a flat factual concession the author treats as given while building the argument.",
        "Wrong: defining what 'genuine accountability asks' is the author's evaluative conclusion."
      ],
      workedSolution:
        "The disclosure-accountability distinction, the page-nine-hundred image, and the definition of genuine accountability are the author's interpretation. The concession that secrecy has far worse abuses is presented as a plain fact. So the fact is option C.",
      difficulty: "medium",
      source: "illustrative"
    }
  );
})(typeof window !== "undefined" ? window : this);
