/*
 * drill-a.js — Section A DRILL question set (type-focused practice).
 *
 * Covers four Argument-Analysis / Information-Retrieval sub-types:
 *   main        (1a Main Idea / Primary Purpose)
 *   standpoint  (1b Author's Standpoint / Attitude)
 *   structure   (1c Logical Structure / Argument Map)
 *   detail      (2a Explicit Comprehension / Stated Fact)
 *
 * Self-contained: every question references a passage defined in THIS file.
 * DRILL passages live in the reserved 9xx number range (psg-<genre>-901..920)
 * so they are disjoint from the mock-paper passages.
 *
 * Delivery model: assigns into the buckets that loader.js created on
 * window.LNAT_DATA. Must load AFTER loader.js. English-only. All items are
 * source:"illustrative" (drill content is never official).
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] drill-a.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ====================================================================== *
   * PASSAGES — 18 argumentative passages, 220-340 words, across all 6
   * genres, all reserved:false, all source:"illustrative".
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-philosophy-901",
      genre: "philosophy",
      title: "Punishment and the Backward Glance",
      body:
        "When we punish a wrongdoer, what exactly do we hope to achieve? One familiar " +
        "answer looks forward: punishment deters future offences and, ideally, reforms " +
        "the offender. A rival answer looks backward: the wrongdoer simply deserves to " +
        "suffer in proportion to the wrong done, whether or not anyone is thereby " +
        "deterred. Each view, taken alone, runs into trouble. A purely forward-looking " +
        "theory would, in principle, license punishing an innocent person whenever doing " +
        "so frightened enough others into good behaviour, which strikes almost everyone " +
        "as monstrous. A purely backward-looking theory, by contrast, treats suffering as " +
        "valuable in itself, and struggles to explain why a society should spend scarce " +
        "resources inflicting pain that improves nothing. The most defensible position, I " +
        "suggest, is a hybrid one. Desert sets the outer limits of punishment: we may " +
        "never punish the innocent, and we may never punish the guilty more harshly than " +
        "their offence warrants. Within those limits, however, the actual severity we " +
        "choose should be guided by what will best protect the community. On this account " +
        "desert constrains, and deterrence directs. Critics will object that a hybrid is " +
        "merely two flawed theories stapled together. But the combination is not arbitrary: " +
        "it assigns to each consideration the role it is suited to play, and refuses to let " +
        "either do work it cannot do alone. The forward-looking theory was never wrong to care " +
        "about consequences; it erred only in caring about nothing else. The backward-looking " +
        "theory was never wrong to insist on desert; it erred only in treating desert as a reason " +
        "to inflict suffering rather than as a boundary upon it. Read so, the two halves correct " +
        "each other's excesses, and what looked like a compromise turns out to be the more exact " +
        "view of what punishment is for.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-902",
      genre: "philosophy",
      title: "The Self That Persists",
      body:
        "What makes the person reading this sentence the same person who fell asleep last night? " +
        "The obvious answer points to the body: it is the same physical organism, continuous in " +
        "space and time, that carries one's identity forward. The answer has a genuine appeal, " +
        "for the body is the one thing visibly present at every moment of a life. Yet taken as " +
        "the whole story it is plainly inadequate. Imagine a person whose memories, character, " +
        "and intentions were entirely erased overnight and replaced with someone else's, the body " +
        "left untouched. We would not say the original person had survived in a new frame of mind; " +
        "we would say they were, in every way that mattered, gone. The example shows that bodily " +
        "continuity is neither here nor there when the inner life it once carried has been " +
        "extinguished. The better account locates identity in psychological continuity: the " +
        "overlapping chain of memories, dispositions, and purposes that links each stage of a life " +
        "to the next. On this view I am the same person as the child I was not because we share a " +
        "body but because an unbroken thread of remembering and caring runs between us. Some object " +
        "that this makes identity a matter of degree, since the thread frays and thins across a long " +
        "life, and a settled self ought to be all or nothing. The objection misses its mark. That " +
        "identity comes in degrees is not an embarrassment to the theory but a truth about persons " +
        "the theory has the honesty to admit. We do, on reflection, feel more distant from our " +
        "remote past selves than from our recent ones, and a theory that records this is describing " +
        "the moral life we actually live rather than imposing a tidiness it never had.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-903",
      genre: "philosophy",
      title: "Why Boredom Is Not Trivial",
      body:
        "Boredom is usually dismissed as a minor irritation, the sort of complaint we expect " +
        "from idle children. This dismissal is a mistake. Boredom is better understood as a " +
        "signal, comparable to physical pain, that something has gone wrong in the relation " +
        "between a person and their situation. Pain tells us that the body is being damaged; " +
        "boredom tells us that our attention is being wasted, that we are spending the one " +
        "resource we cannot recover on activity we find meaningless. Seen this way, the " +
        "feeling is not a defect of character but a piece of useful information. The person " +
        "who is never bored is not necessarily admirable; they may simply have stopped asking " +
        "whether their time is well spent. None of this is to recommend chasing constant " +
        "stimulation, which is itself a way of refusing to hear the signal. The point is " +
        "rather that boredom deserves to be interpreted rather than merely endured or " +
        "anaesthetised. A life arranged so as never to provoke it, by filling every gap with " +
        "distraction, may succeed only in muffling an alarm that was trying to tell us " +
        "something important about how we live. This reframing also explains why boredom is " +
        "so often felt as a moral reproach rather than a mere lull. To be bored by an activity " +
        "is, in part, to register that it does not deserve the attention one is giving it, and " +
        "that judgement can be uncomfortable precisely because it is accurate. The remedy it " +
        "recommends is not more entertainment but a change in what one is doing, or in why. Treated " +
        "as a question rather than an affliction, the feeling becomes one of the few honest guides " +
        "we have to whether a life is being spent as its owner would, on reflection, wish.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-904",
      genre: "science",
      title: "The Misread Promise of Brain Scans",
      body:
        "Colourful images of the brain at work have become a fixture of popular science, and " +
        "they carry an air of hard objectivity that ordinary psychology seems to lack. A " +
        "picture showing a region 'lighting up' when a subject feels fear looks like direct " +
        "evidence, almost a photograph of the mind in action. The impression is misleading. " +
        "The colours are not measurements of thought; they are statistical summaries of small " +
        "changes in blood flow, processed through many layers of assumption and then painted " +
        "onto a standard template for display. More importantly, the fact that a region is " +
        "active during an emotion does not establish that the region produces the emotion, or " +
        "that activity there means the emotion is present. The same area may be recruited for " +
        "quite different tasks, so reading a feeling off a scan is rarely as straightforward " +
        "as the images suggest. This is not an argument against the technology, which has " +
        "taught us a great deal. It is an argument against a particular misuse of it: the " +
        "habit of treating a vivid picture as if it settled a question that, in truth, only " +
        "careful experiment can address. The danger is not the scanner but the false sense of " +
        "finality the image lends to claims that remain, on examination, distinctly tentative. " +
        "An equation written on a page would invite the scrutiny it deserves; the same claim, " +
        "wrapped in colour and laid over a picture of a skull, slips past our defences and is " +
        "accepted before it has been weighed. The remedy is not to ban the images but to read " +
        "them as one reads any other piece of processed data: as a result that must be argued " +
        "for, not as a sight that speaks for itself.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-905",
      genre: "science",
      title: "Vaccination and the Logic of the Herd",
      body:
        "It is sometimes argued that, since a well-vaccinated population protects even those " +
        "who go unvaccinated, a cautious individual may sensibly decline the vaccine and rely " +
        "on the immunity of others. The reasoning has a surface plausibility, but it conceals " +
        "a flaw that becomes obvious once the argument is made general. Herd immunity exists " +
        "only because most people do not reason this way; it is a collective good produced by " +
        "the very behaviour the cautious individual proposes to avoid. If everyone followed the " +
        "same logic, the protection each hoped to exploit would never come into being. The " +
        "free-rider's calculation thus depends, for its success, on remaining the exception. " +
        "This does not, by itself, settle every question about mandates or individual rights, " +
        "which raise further considerations. What it does show is that the appeal to herd " +
        "immunity cannot serve as a reason available to everyone at once. An argument that " +
        "works only so long as few people accept it is not a principle but a parasitism, and " +
        "it forfeits the moral standing that a genuine principle, applicable to all, would " +
        "possess. The test applied here is an old and demanding one: a reason offered in defence " +
        "of conduct must be capable of being acted on by everyone in the same situation. Reasons " +
        "that pass this test bind the person who gives them; reasons that fail it expose a wish " +
        "to be treated as a special case. The free-rider's argument fails plainly, for its whole " +
        "advantage lies in others not sharing it. That is why, whatever else may be said about " +
        "vaccination, this particular defence of declining cannot be among the things said in its " +
        "favour.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-906",
      genre: "science",
      title: "The Quiet Cost of Precision Farming",
      body:
        "Modern agriculture is often celebrated for its efficiency. Satellite-guided machinery, " +
        "targeted fertiliser, and engineered seed have allowed a shrinking workforce to feed a " +
        "growing world, and the achievement is genuine. Yet efficiency, measured narrowly as " +
        "yield per acre, can hide costs that fall outside the ledger. A field optimised for a " +
        "single crop, planted and harvested by machine on a vast scale, is biologically poorer " +
        "than the patchwork it replaced: hedgerows vanish, soil organisms decline, and the " +
        "insects on which wider food webs depend lose their habitat. None of these losses shows " +
        "up in the figure the farm is managed to maximise. The mistake is not in seeking " +
        "efficiency but in assuming that a single number can capture whether a system is " +
        "healthy. A fuller accounting would treat the surrounding ecology as part of the farm's " +
        "real output, not as an externality to be ignored. Critics of high-technology farming " +
        "sometimes romanticise the past, and that is no help. The serious point is narrower and " +
        "harder to dismiss: that what we choose to measure determines what we choose to protect, " +
        "and a metric blind to the living systems around the crop will, predictably, let them " +
        "erode. The point generalises well beyond the farm gate. Any enterprise managed to a " +
        "single figure will, over time, sacrifice whatever that figure omits, not through malice " +
        "but through the ordinary pressure to improve the number on which it is judged. The cure " +
        "is not to abandon measurement, which would leave us blind in a different way, but to " +
        "widen it until it includes the things we would regret losing. Until the ledger counts " +
        "the hedgerow and the insect, the farmer who clears them will look, on paper, like the " +
        "better manager.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-907",
      genre: "politics",
      title: "Term Limits and the Experienced Hand",
      body:
        "Proposals to cap the number of terms a legislator may serve are usually defended as a " +
        "cure for entrenched incumbency: fresh representatives, it is said, stay closer to the " +
        "people and are less captured by the machinery of office. The aim is admirable, but the " +
        "remedy is double-edged. Governing well is a skill, and like other skills it improves " +
        "with practice. A chamber emptied of experienced members every few years does not " +
        "thereby become more responsive to voters; it becomes more dependent on the people who " +
        "do not face limits — the permanent civil servants, the lobbyists, the unelected staff " +
        "who alone retain the institutional memory. Power, in other words, does not disappear " +
        "when elected members are forced out; it migrates to those who remain. This is not a " +
        "decisive case against all limits, for a very long tenure carries dangers of its own. " +
        "But it shows that the popular argument proves less than it claims. The choice is not " +
        "between captured veterans and responsive newcomers; it is between different " +
        "distributions of expertise, some of them accountable to the electorate and some of " +
        "them not. A reform that weakens the accountable holders of knowledge while leaving the " +
        "unaccountable ones untouched may move power in exactly the wrong direction. None of this " +
        "is to deny that some legislators outstay their usefulness, or that long incumbency can " +
        "breed complacency and worse. The objection is narrower: that the reform addresses only " +
        "the visible holders of power and ignores the invisible ones, who gain precisely what the " +
        "elected lose. A measure that genuinely wished to keep representatives close to the people " +
        "would have to strengthen their independent expertise, not strip it away and hand the " +
        "advantage to those the people never chose and cannot remove.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-908",
      genre: "politics",
      title: "The Referendum and the Tyranny of the Question",
      body:
        "The referendum is often presented as democracy in its purest form: the people, " +
        "unmediated by representatives, decide an issue for themselves. There is something to " +
        "this, but the picture flatters the device. Whoever frames the question wields a power " +
        "that the simple language of direct democracy conceals. A binary choice forces a complex " +
        "matter into two boxes, and the way those boxes are labelled can shape the result as " +
        "surely as any speech. Subtler still is the choice of what to put to a vote at all, and " +
        "when: an issue raised at a moment of public anger will yield a different answer than the " +
        "same issue raised in calmer times. The voter, presented with a finished question, never " +
        "sees the choices already made on his behalf in composing it. None of this means that " +
        "referendums should be abandoned, for representatives too can distort the public will. It " +
        "means only that the referendum is not the unmediated instrument it appears to be. Behind " +
        "the apparent directness stands an agenda-setter whose decisions, though invisible on the " +
        "ballot paper, may matter more than the cross the voter is finally invited to make. To say " +
        "this is not to sneer at the electorate or to doubt that majorities should sometimes decide. " +
        "It is to insist that the question itself is never neutral, and that a vote can be shaped " +
        "long before it is cast by hands the voter never sees. A referendum may still be the right " +
        "instrument for a given decision. But it earns that status by the fairness of the process " +
        "that frames it, not by the bare fact that the people, at the last, were the ones to answer.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-909",
      genre: "politics",
      title: "Twelve Strangers in the Jury Box",
      body:
        "Why entrust the gravest verdicts to a dozen citizens picked at random, untrained in law and " +
        "dispersed the moment the trial ends? Put as a question about competence, the practice looks " +
        "indefensible: a career judge has heard a thousand cases, knows the rules of evidence, and " +
        "would surely reach a more consistent result. But the case for the jury was never chiefly " +
        "about getting the most accurate answer. Its point is to keep the power to condemn out of the " +
        "exclusive hands of the state and its professionals, and to require that, before the machinery " +
        "of punishment closes on a person, ordinary members of the community agree that it should. A " +
        "verdict delivered by fellow citizens carries a legitimacy that no official, however expert, " +
        "can supply, because it cannot be dismissed as the judgement of the very power bringing the " +
        "charge. This is not to pretend the jury has no costs. Laypeople can be swayed by prejudice " +
        "or rhetoric, verdicts can be inconsistent, and a complex fraud may baffle those with no head " +
        "for accounts. A defender who denied any of this would be defending a fiction. The honest " +
        "claim is narrower: that these are the costs of a deliberate trade, in which a measure of " +
        "expert reliability is given up to secure something expertise cannot provide, namely the " +
        "consent of the governed to the state's most coercive act. Those who would replace the jury " +
        "with professional judges to gain consistency should be clear about what they are spending to " +
        "buy it. The question is not which body decides more accurately, but whose decision a free " +
        "people will accept as their own.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-910",
      genre: "history",
      title: "The Nation as a Recent Invention",
      body:
        "Nations present themselves as ancient, their borders and loyalties seeming to reach back " +
        "beyond memory into something almost natural. The historical record tells a stranger story. " +
        "Most of the nations that now appear timeless were assembled comparatively recently, and " +
        "assembled is the right word. Before a peasant in one valley could feel kinship with a " +
        "stranger three hundred miles away, the two had to be taught a shared language, a shared " +
        "history, and a shared name, and that teaching was the work of particular institutions at a " +
        "particular time. The printing press standardised dialects into national tongues; mass " +
        "schooling drilled a common past into children who would otherwise have known only their " +
        "locality; conscript armies and national newspapers persuaded scattered populations that " +
        "they belonged to a single people with a single destiny. None of this was inevitable, and " +
        "much of it was deliberate. To say so is not to declare national feeling a fraud, and here " +
        "the debunking impulse overreaches if left unchecked. A loyalty is no less real for having a " +
        "history, and a community no less binding for having been made rather than found; friendship " +
        "and marriage are constructed too, and we do not think them illusions on that account. The " +
        "point is narrower and more useful. Once we see that the nation was built, we can ask who " +
        "built it and why, and we lose the habit of treating its claims as facts of nature beyond " +
        "discussion. What was assembled within history can be examined, criticised, and in part " +
        "remade, which is precisely what those who prefer it to seem eternal would rather we did not " +
        "notice.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-911",
      genre: "history",
      title: "The Empire in the Mirror of Its Historians",
      body:
        "The history of an empire is, more often than not, first written at its centre, by the " +
        "civilisation that did the conquering. Such histories have a recognisable shape. They " +
        "present expansion as the spread of order, law, and trade into regions that had supposedly " +
        "known only chaos before, and they cast the conquered peoples, when they appear at all, as " +
        "grateful beneficiaries or as obstacles cleared from the path of progress. The account is " +
        "not usually a deliberate lie. It is simply the world as it looked from the capital, set " +
        "down by men who could not easily imagine that it looked otherwise from the frontier. A " +
        "reader who takes these histories at face value inherits their vantage point without " +
        "noticing, and mistakes one party's version of events for a neutral record of them. The " +
        "more careful historian treats the imperial narrative as evidence of how the conquerors " +
        "wished to understand themselves, rather than as a transparent report of what was done and " +
        "to whom. This does not mean inverting the story so that every empire becomes a simple tale " +
        "of villainy; that would merely swap one flattering myth for another. The discipline " +
        "required is harder: to read the victors' record for what it inadvertently reveals, and to " +
        "set beside it whatever traces survive of those who were written about but never allowed to " +
        "write. An administrative report boasting of a pacified province still records, between its " +
        "lines, the resistance that made pacifying necessary. A tax demand preserves the existence " +
        "of those squeezed to pay it. Read against the grain in this way, the same documents that " +
        "once flattered the empire can be made to disclose the costs it preferred to forget, and the " +
        "history of the conqueror becomes, in part, a history of the conquered as well.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-912",
      genre: "history",
      title: "Against Judging the Past by the Present",
      body:
        "It is fashionable to condemn historical figures for failing to hold the moral views we now " +
        "take for granted. The impulse is understandable and sometimes justified, but as a general " +
        "method it is incoherent. To blame a person for not anticipating a moral consensus that " +
        "took centuries to form is to demand that they reason from premises they could not have " +
        "possessed. This is not to say that anything was permissible because everyone did it; some " +
        "of the period's own thinkers condemned practices their contemporaries accepted, which " +
        "shows that better judgement was available even then. The proper test is not whether a " +
        "figure met our standards but whether they fell short of the best standards genuinely " +
        "accessible in their own time. That test is harder to apply and yields less satisfying " +
        "verdicts, but it is the only one that treats the dead as agents rather than as foils for " +
        "our own sense of progress. The alternative, judging every age by the verdict of the latest, " +
        "guarantees that we in turn will be found guilty by whatever standard the future happens to " +
        "adopt, and learn nothing in the meantime about how moral understanding actually changes. " +
        "The more instructive question is how the dissenters of any age reached conclusions their " +
        "neighbours could not, for that is the process by which a moral consensus is enlarged. To " +
        "study it we must grant that the figures of the past were reasoning beings working within " +
        "real constraints, not waiting blankly for our enlightenment. Judged that way, some of them " +
        "emerge as genuinely culpable and others as ahead of their time, distinctions that the " +
        "blanket verdict of the present flattens into a single complacent sneer.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-913",
      genre: "literature",
      title: "In Defence of the Critic",
      body:
        "It is now common to dismiss the professional critic as a relic, a self-appointed gatekeeper " +
        "whose verdicts matter no more than any reader's star rating. Taste, the argument runs, is " +
        "personal; one response to a book is as good as another; who is the critic to tell me what " +
        "is good? The democratic sentiment is appealing, but it rests on a confusion. The critic's " +
        "claim was never to feel more correctly than other readers, but to have looked harder and " +
        "longer, and to be able to say what was found. A practised critic notices the structure " +
        "beneath a plot, the way a sentence's rhythm carries its meaning, the debt one book owes to " +
        "another, the place a work occupies in a tradition. These are not private feelings but " +
        "describable features, and pointing them out can teach a reader to see what they had passed " +
        "over. To call all of this 'mere opinion' is to flatten a real distinction between a remark " +
        "and an argument. None of this is to say that critics are infallible or that their " +
        "judgements should be received as commands; a critic who cannot show you what they saw has " +
        "earned no special authority, and deserves the scepticism such pronouncements invite. The " +
        "point is narrower. When we treat every response as equal merely because it is sincerely " +
        "felt, we lose the one thing good criticism offers, which is not a verdict to be obeyed but " +
        "an attention to be borrowed. The reader who reads a fine critic well does not surrender his " +
        "own judgement; he equips it. To discard the critic in the name of equality is to mistake " +
        "the refusal to learn from anyone for a kind of freedom, when it is really only a narrowing " +
        "of what one is able to notice.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-914",
      genre: "literature",
      title: "Translation and the Fidelity Trap",
      body:
        "A translation is often judged by a single question: is it faithful to the original? The " +
        "demand sounds unanswerable, yet on inspection 'fidelity' splits into two aims that " +
        "frequently conflict. A translator can be faithful to the literal sense, rendering each " +
        "word as closely as the target language allows, or faithful to the effect, reproducing in " +
        "the new reader the experience the original produced in its first audience. These rarely " +
        "coincide. A pun, a piece of slang, a line of verse whose music carries half its meaning — " +
        "translate the words exactly and the effect dies; preserve the effect and the words must " +
        "change. To insist on literal fidelity as the sole measure is therefore not rigour but a " +
        "confusion, one that mistakes the surface of a text for its life. The better translator " +
        "accepts that some loss is inevitable and chooses, consciously, what to save. This is not " +
        "a licence for invention; the translator remains bound to serve the original rather than " +
        "to display herself. But the service required is judgement, not mechanical substitution, " +
        "and a version that reads as though no choice was ever made has usually made the worst " +
        "choice of all without admitting it. The best translators, tellingly, are often the readiest " +
        "to confess what their versions cannot carry across, footnoting a pun they could not save or " +
        "a cadence that died in transit. Far from undermining their work, such honesty is a mark of " +
        "it, for it shows a translator who has weighed the losses rather than pretended there were " +
        "none. The reader is thereby told where to listen for the original behind the copy, which is " +
        "the most any translation, however fine, can finally provide.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-915",
      genre: "literature",
      title: "Why Difficulty in Poetry Can Be Earned",
      body:
        "Difficult poetry is regularly accused of elitism, as if a poem that withholds its meaning " +
        "were simply being rude to its reader. Sometimes the charge is fair; obscurity can be a " +
        "pose, a way of seeming deep while saying little. But the blanket complaint confuses two " +
        "very different things. Some difficulty is empty, a fog with nothing behind it; other " +
        "difficulty is earned, the unavoidable price of saying something that plainer language " +
        "could not say at all. An experience that is itself tangled — grief shot through with " +
        "relief, love mixed with resentment — may simply not survive translation into tidy " +
        "statement. To demand that every poem be immediately clear is to demand that poetry handle " +
        "only the feelings that are already easy to name. The reader's task, faced with a difficult " +
        "poem, is therefore not to dismiss it but to ask which kind of difficulty it offers, and " +
        "whether the effort it requires is repaid. The lazy reader and the lazy poet make the same " +
        "mistake from opposite directions: both assume that clarity and worth are the same thing, " +
        "when at the edges of experience they can come apart. This is not a permission slip for " +
        "obscurity, and the distinction is not always easy to draw from the outside; empty fog and " +
        "earned difficulty can look alike at first glance. The test is whether the obscurity does " +
        "work, whether wrestling with it returns something that a plainer phrasing would have lost. " +
        "Where it does, the difficulty is part of the meaning and not a barrier to it. Where it does " +
        "not, the reader is right to walk away, and the fault lies with the poem and not with him.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-916",
      genre: "currentaffairs",
      title: "The Neighbourhood That Prices Out Its Own",
      body:
        "When money flows into a long-neglected district, the visible results are easy to applaud. " +
        "Boarded shopfronts reopen, derelict buildings are restored, streets that were dangerous " +
        "after dark grow calm, and a tax base that had withered begins to recover. Anyone who has " +
        "watched a neighbourhood decline knows these are real goods, and it would be perverse to " +
        "mourn the disappearance of broken glass and shuttered windows. Yet the same process that " +
        "delivers them quietly rewrites who the neighbourhood is for. As the area becomes " +
        "desirable, rents climb beyond the reach of the very residents whose endurance kept it " +
        "alive through the lean years, and one by one the families, the corner businesses, and the " +
        "informal networks that made it a community are dispersed to cheaper ground. The " +
        "improvement is genuine; so is the loss, and the loss falls hardest on those least able to " +
        "absorb it. This is not an argument for leaving poor districts to rot, which serves no one " +
        "and least of all the people who live in them. It is a caution against measuring renewal " +
        "by the state of the buildings alone, as if a place were its façades rather than its " +
        "people. A street can be restored and its community destroyed in the same decade, and a " +
        "policy that counts only the first will record a triumph where residents experienced an " +
        "eviction. The harder task is to pursue the investment that revives a district while " +
        "protecting the claim of those already there to remain and share in it. Where that claim " +
        "is ignored, regeneration becomes a polite word for replacement, and the neighbourhood is " +
        "improved for everyone except the people who needed it improved.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-917",
      genre: "currentaffairs",
      title: "The Logic of the Sin Tax",
      body:
        "Governments routinely place heavy taxes on tobacco, alcohol, and sugary drinks, and the " +
        "practice draws fire from two directions. Some object that it is moralising, the state " +
        "presuming to punish pleasures it disapproves of; others note that it falls hardest on the " +
        "poor, who spend a larger share of their income on the taxed goods. Both complaints have " +
        "force, yet both miss the strongest case for such a tax, which rests on neither morality " +
        "nor revenue. When a person smokes or drinks to excess, part of the cost is not borne by " +
        "him alone: it shows up later in crowded hospitals, lost working days, and bills the wider " +
        "public must meet. A tax sized to those external costs simply returns them to the point of " +
        "decision, so that the price a buyer pays reflects the full burden his choice imposes " +
        "rather than only the share he happens to notice. Understood this way, the tax is not a " +
        "judgement on the smoker's character but a correction of a price that was misleading him. " +
        "This rationale, however, comes with a condition the moralising version conveniently " +
        "ignores. If the levy is justified by the social costs it offsets, then the revenue it " +
        "raises ought to go toward meeting those costs, not vanish into the general budget while " +
        "the poorest payers are left worse off and unhealed. A sin tax defended as cost-correction " +
        "but spent as ordinary income has quietly changed its justification midway, keeping the " +
        "respectable argument while pocketing the proceeds. The test of whether a government means " +
        "what it says is therefore not the rate it sets but where the money goes.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-918",
      genre: "currentaffairs",
      title: "Anonymity Online and Its Defenders",
      body:
        "Calls to abolish online anonymity grow louder with every wave of digital abuse. If users " +
        "had to post under their real names, the argument runs, they would behave, and the cruelty " +
        "that flourishes behind a pseudonym would wither. The hope is decent, but the reasoning is " +
        "shakier than it looks. Anonymity does not only shelter the abuser; it also shelters the " +
        "whistle-blower, the dissident under a hostile government, the abuse victim seeking help " +
        "without exposure. Strip it away and these voices are silenced first, for they have the " +
        "most to fear from being named. There is, besides, little evidence that visible identity " +
        "reliably civilises behaviour; some of the ugliest abuse is committed quite openly, by " +
        "people entirely unembarrassed to attach their names to it. The real driver of online " +
        "cruelty is less the mask than the distance and the absence of consequence. To treat " +
        "anonymity as the root of the problem is therefore to misdiagnose it, and to propose a cure " +
        "that would harm the vulnerable while barely inconveniencing the cruel. The genuine remedies " +
        "are harder and less tidy, which is precisely why the simple call to unmask everyone is so " +
        "tempting and so mistaken. If the true engines of cruelty are distance and impunity, then " +
        "the measures likely to help address those directly: swifter consequences for abuse, designs " +
        "that restore a sense of the person on the other side of the screen, and patient enforcement " +
        "rather than a single dramatic ban. These are slower to deliver and harder to legislate than " +
        "the abolition of the mask, and they make for poorer headlines. But they have the merit of " +
        "aiming at the disease rather than at a symptom that, on inspection, turns out to protect as " +
        "many people as it conceals.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — four sub-types (main, standpoint, structure, detail),
   * >=14 of each. Each is a 4-option MCQ with exactly one defensible key,
   * a 4-entry per-option rationale, and a worked solution.
   *
   * Answer-position balance (authored target ~25% each across A/B/C/D).
   * ====================================================================== */

  /* ---------------------------------------------------------------------- *
   * TYPE: main  (1a Main Idea / Primary Purpose) — 15 questions
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-main-901",
      passageId: "psg-philosophy-901",
      type: "main",
      stem: "Which of the following best expresses the main point of the passage?",
      options: [
        "Punishment can be justified only by its power to deter future wrongdoing.",
        "The backward-looking theory of punishment is superior to the forward-looking one.",
        "Punishment is best justified by a hybrid view in which desert sets limits and deterrence directs severity within them.",
        "Society should stop spending scarce resources on punishing the guilty."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the purely forward-looking theory, which the author rejects because it could license punishing the innocent.",
        "Wrong: the author treats the backward-looking theory as flawed on its own, not as superior; it cannot explain spending resources on useless suffering.",
        "Correct: the passage argues for a hybrid in which desert constrains (no punishing the innocent or the excessive) while deterrence directs severity within those limits.",
        "Wrong: the author never recommends abandoning punishment of the guilty; this misreads the criticism of the backward-looking view."
      ],
      workedSolution:
        "The passage lays out two rival theories, shows each fails alone, and then proposes a hybrid: 'desert constrains, and deterrence directs.' The final sentences defend that combination as principled. Option C states exactly that hybrid thesis.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-902",
      passageId: "psg-philosophy-902",
      type: "main",
      stem: "What is the central claim of the passage?",
      options: [
        "Personal identity over time is constituted by psychological continuity rather than by sameness of body.",
        "A person ceases to exist the moment any of their memories are lost.",
        "The body is the only thing that could possibly carry a person's identity forward.",
        "Questions about personal identity cannot be answered at all."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author rejects bodily continuity as the whole story and locates identity in the 'overlapping chain of memories, dispositions, and purposes' that links each stage of a life.",
        "Wrong: the author treats identity as a matter of degree that frays gradually, not as something destroyed by any single lost memory.",
        "Wrong: this is the appealing but 'plainly inadequate' view the passage sets out to correct.",
        "Wrong: the passage offers a definite account of identity rather than declaring the question unanswerable."
      ],
      workedSolution:
        "The structure is: the appeal of the bodily view, a defect shown by example, then the psychological-continuity account defended against an objection. The main point is that psychological continuity, not the body, constitutes identity, which is the option naming psychological continuity.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-903",
      passageId: "psg-philosophy-903",
      type: "main",
      stem: "The passage is primarily concerned to argue that:",
      options: [
        "people should seek constant stimulation to avoid boredom.",
        "boredom is a trivial complaint typical of idle children.",
        "the person who is never bored is the most admirable.",
        "boredom is a meaningful signal that should be interpreted rather than merely endured or suppressed."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly calls chasing constant stimulation 'a way of refusing to hear the signal.'",
        "Wrong: this is the dismissive view the author opens by rejecting as 'a mistake.'",
        "Wrong: the author says such a person 'may simply have stopped asking whether their time is well spent' — not that they are admirable.",
        "Correct: the passage reframes boredom as a useful signal, like pain, that 'deserves to be interpreted rather than merely endured or anaesthetised.'"
      ],
      workedSolution:
        "After rejecting the trivialising view, the author develops the pain analogy and concludes boredom should be interpreted, not suppressed by distraction. Option D captures that thesis.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-main-904",
      passageId: "psg-science-904",
      type: "main",
      stem: "Which statement best captures the author's primary purpose?",
      options: [
        "To argue that brain-scanning technology should be abandoned as unscientific.",
        "To warn against treating vivid brain images as settling questions that only careful experiment can resolve.",
        "To explain the technical process by which brain scans are produced.",
        "To show that emotions are located in specific, identifiable brain regions."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author explicitly says 'this is not an argument against the technology, which has taught us a great deal.'",
        "Correct: the passage targets 'a particular misuse,' the habit of treating a vivid picture as if it settled a question only experiment can address.",
        "Wrong: the technical description of blood-flow summaries is a supporting detail, not the purpose.",
        "Wrong: the author argues the opposite — the same region serves different tasks, so a feeling cannot simply be read off a scan."
      ],
      workedSolution:
        "The closing sentences name the real target: 'not the scanner but the false sense of finality the image lends.' The purpose is to warn against that misuse, which is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-905",
      passageId: "psg-science-905",
      type: "main",
      stem: "The main point of the passage is that:",
      options: [
        "vaccine mandates are always justified.",
        "a cautious individual is wise to rely on the immunity of others.",
        "the appeal to herd immunity cannot serve as a reason available to everyone, because it works only while few people accept it.",
        "herd immunity does not exist."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly sets aside questions of mandates and rights as raising 'further considerations.'",
        "Wrong: this is the free-rider argument the passage sets out specifically to refute.",
        "Correct: the passage shows the free-rider's reasoning 'depends, for its success, on remaining the exception' and so cannot be a principle applicable to all.",
        "Wrong: the author affirms herd immunity exists; that is the very good the free-rider hopes to exploit."
      ],
      workedSolution:
        "The argument is a generalisation test: if everyone reasoned as the free-rider does, the protection would never exist. The conclusion is that the appeal cannot be a universal reason, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-906",
      passageId: "psg-science-906",
      type: "main",
      stem: "Which of the following best states the passage's central argument?",
      options: [
        "High-technology farming should be replaced by the patchwork agriculture of the past.",
        "Efficiency, measured as yield per acre, is the correct sole measure of a healthy farm.",
        "Precision farming has failed to increase food production.",
        "What a system is managed to measure determines what it protects, so a metric blind to surrounding ecology will let it erode."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly says critics who romanticise the past are 'no help'; the argument is not for reversal.",
        "Wrong: this is precisely the assumption the passage attacks — that 'a single number can capture whether a system is healthy.'",
        "Wrong: the author grants that the efficiency achievement 'is genuine' and that the workforce feeds a growing world.",
        "Correct: the closing 'serious point' is that what we measure determines what we protect, and a metric ignoring living systems lets them erode."
      ],
      workedSolution:
        "The passage concedes the efficiency gain, then argues the chosen metric hides ecological costs, ending on the explicit 'serious point.' Option D restates that point.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-main-907",
      passageId: "psg-politics-907",
      type: "main",
      stem: "The passage is mainly arguing that:",
      options: [
        "term limits, by removing experienced elected members, can shift power to unaccountable insiders rather than to voters.",
        "term limits always make legislatures more responsive to the people.",
        "very long tenures in office carry no dangers.",
        "lobbyists and civil servants should be subject to term limits."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the central claim is that power 'migrates' from forced-out elected members to unlimited insiders, possibly moving accountability 'in exactly the wrong direction.'",
        "Wrong: this is the popular argument the author says 'proves less than it claims.'",
        "Wrong: the author explicitly concedes 'a very long tenure carries dangers of its own.'",
        "Wrong: the passage notes such people 'do not face limits' but does not propose limiting them; that is not its thesis."
      ],
      workedSolution:
        "The author accepts the aim but shows the remedy is 'double-edged': expertise migrates to the unaccountable. The thesis is that warning about misdirected power, option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-908",
      passageId: "psg-politics-908",
      type: "main",
      stem: "Which best expresses the main idea of the passage?",
      options: [
        "Referendums should be abandoned in favour of representative decision-making.",
        "The referendum is the purest possible form of democracy.",
        "Despite appearing direct, a referendum is shaped by an agenda-setter whose choices may matter more than the vote itself.",
        "Voters always understand the full context of the questions they are asked."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly says this does not mean referendums 'should be abandoned,' since representatives also distort.",
        "Wrong: this is the flattering 'picture' the passage sets out to qualify.",
        "Correct: the passage argues that framing and timing give the agenda-setter hidden power that 'may matter more than the cross the voter is finally invited to make.'",
        "Wrong: the author stresses the opposite — the voter 'never sees the choices already made on his behalf.'"
      ],
      workedSolution:
        "The passage concedes a grain of truth, then exposes the hidden agenda-setting power behind the apparent directness. Option C states that conclusion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-909",
      passageId: "psg-politics-909",
      type: "main",
      stem: "The author's central contention is that:",
      options: [
        "juries should be abolished because professional judges are more accurate.",
        "the value of the jury lies less in accuracy than in placing the power to convict in citizens' hands, securing the consent of the governed.",
        "laypeople reach more accurate verdicts than trained judges.",
        "the chief test of a verdict is how consistent it is with past cases."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author concedes a judge may be more consistent but argues accuracy was 'never chiefly' the point of the jury.",
        "Correct: the thesis is that the jury keeps 'the power to condemn out of the exclusive hands of the state' and supplies a legitimacy 'no official can supply.'",
        "Wrong: the author does not claim laypeople are more accurate; he grants they can be swayed and inconsistent.",
        "Wrong: the author says 'the question is not which body decides more accurately,' so consistency is not the chief test he endorses."
      ],
      workedSolution:
        "The author sets aside the competence question and argues the jury secures legitimacy and consent that expertise cannot provide. That is the legitimacy/consent option.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-910",
      passageId: "psg-history-910",
      type: "main",
      stem: "Which statement best captures the passage's main point?",
      options: [
        "Nations are ancient, natural communities that reach back beyond memory.",
        "National feeling is a fraud that should be exposed and discarded.",
        "Nations are recent historical constructions, and recognising this lets us examine their claims without dismissing national loyalty as unreal.",
        "Only printing and schooling, and nothing else, created modern nations."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says this is how nations 'present themselves' but that the record 'tells a stranger story.'",
        "Wrong: the author explicitly denies that saying nations were made is 'to declare national feeling a fraud.'",
        "Correct: the passage argues nations were 'assembled comparatively recently' yet insists 'a loyalty is no less real for having a history,' so the point is to examine rather than debunk.",
        "Wrong: printing and schooling are examples among several (also conscription, newspapers); the thesis is the constructed, recent character of nations, not an exhaustive list of causes."
      ],
      workedSolution:
        "The author rejects the natural-and-ancient self-image, resists mere debunking, and lands on the claim that nations were built recently and can therefore be examined. That is the constructed-and-recent option.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-911",
      passageId: "psg-history-911",
      type: "main",
      stem: "The passage is primarily intended to argue that:",
      options: [
        "histories written at the imperial centre are neutral, transparent reports of what was done.",
        "every empire's history should be rewritten as a simple tale of villainy.",
        "the perspective of conquered peoples can never be recovered in any form.",
        "imperial histories reflect the conquerors' self-image, so historians must read them against the grain to recover the costs and the conquered."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says taking such histories 'at face value' inherits the conquerors' vantage point and mistakes it for a neutral record.",
        "Wrong: the author explicitly rejects merely inverting the story into 'a simple tale of villainy' as swapping one myth for another.",
        "Wrong: the passage argues traces of the conquered can be recovered by reading the record against the grain.",
        "Correct: the passage holds that imperial narratives show how conquerors 'wished to understand themselves' and that careful historians read them against the grain to recover what they omit."
      ],
      workedSolution:
        "The author explains the imperial narrative's bias, rejects both naive acceptance and simple inversion, and lands on reading against the grain to recover the conquered. The option naming that argument is correct.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-912",
      passageId: "psg-history-912",
      type: "main",
      stem: "Which of the following best summarises the author's main claim?",
      options: [
        "Historical figures should be judged against the best standards genuinely accessible in their own time, not against present-day consensus.",
        "Anything was permissible in the past because everyone did it.",
        "Historical figures should always be judged by the moral views we hold today.",
        "Moral standards never change over time."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author proposes that 'the proper test' is whether a figure fell short of the best standards 'genuinely accessible in their own time.'",
        "Wrong: the author explicitly denies this, noting some contemporaries condemned accepted practices.",
        "Wrong: this is the 'fashionable' method the author calls 'incoherent' as a general approach.",
        "Wrong: the passage assumes moral understanding does change ('a moral consensus that took centuries to form')."
      ],
      workedSolution:
        "The author rejects present-day judgement, rejects blanket excuse, and lands on a third test: the best standards available at the time. That is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-913",
      passageId: "psg-literature-913",
      type: "main",
      stem: "What is the main point of the passage?",
      options: [
        "Critics are infallible and their judgements should be obeyed as commands.",
        "Taste is wholly personal, so one reader's response is always as good as another's.",
        "Professional criticism should be abolished in the name of equality.",
        "Dismissing criticism as mere opinion costs readers the trained attention that good criticism lends to their own judgement."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly denies critics are 'infallible' or that their judgements are 'commands.'",
        "Wrong: this is the populist view the passage sets out to answer, calling it 'a confusion.'",
        "Wrong: the author defends the critic and argues discarding the critic is 'a narrowing of what one is able to notice.'",
        "Correct: the thesis is that good criticism offers 'an attention to be borrowed,' which is lost when every response is treated as equally good."
      ],
      workedSolution:
        "The author rejects both critical infallibility and the 'mere opinion' view, landing on the narrow claim that criticism supplies a borrowable attention readers lose by dismissing it. That is the option about trained attention.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-914",
      passageId: "psg-literature-914",
      type: "main",
      stem: "The central argument of the passage is that:",
      options: [
        "a faithful translation must always render each word as literally as possible.",
        "fidelity in translation splits into literal sense and reproduced effect, which often conflict, so good translation requires conscious judgement about what to save.",
        "translators should freely invent in order to display their own style.",
        "translation is impossible and should not be attempted."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author calls insisting on literal fidelity as the sole measure 'not rigour but a confusion.'",
        "Correct: the passage divides fidelity into literal sense versus effect, shows they conflict, and concludes translation requires conscious choice of what to save.",
        "Wrong: the author explicitly denies this is 'a licence for invention'; the translator serves the original.",
        "Wrong: the passage assumes translation is worth doing and discusses how to do it well, not whether to attempt it."
      ],
      workedSolution:
        "The author unpacks 'fidelity' into two conflicting aims and argues the translator must consciously choose what to preserve. Option B states that thesis.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-915",
      passageId: "psg-currentaffairs-917",
      type: "main",
      stem: "Which of the following best expresses the passage's main idea?",
      options: [
        "Sin taxes are unjustifiable because they punish pleasures the state dislikes.",
        "The strongest case for a sin tax is that it makes buyers bear the external costs their choices impose, which is why the revenue should fund those costs.",
        "Sin taxes are simply an efficient way for governments to raise general revenue.",
        "Taxes on tobacco and alcohol should be abolished because they fall on the poor."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author treats the moralising complaint as missing 'the strongest case,' not as decisive against the tax.",
        "Correct: the thesis is that the tax 'returns' external costs 'to the point of decision,' and that this rationale requires the revenue to go 'toward meeting those costs.'",
        "Wrong: the author says the strongest case rests 'on neither morality nor revenue,' so revenue-raising is not the justification.",
        "Wrong: the author acknowledges the regressive worry but does not conclude the taxes should be abolished; he ties their fairness to how the money is spent."
      ],
      workedSolution:
        "The author sets aside moralising and revenue, defends the tax as returning external costs to the buyer, and conditions its fairness on spending the proceeds on those costs. That is the cost-correction option.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * TYPE: standpoint  (1b Author's Standpoint / Attitude) — 15 questions
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-standpoint-901",
      passageId: "psg-philosophy-901",
      type: "standpoint",
      stem: "Which best describes the author's own position on the theories of punishment?",
      options: [
        "The author endorses the purely backward-looking theory.",
        "The author endorses the purely forward-looking theory.",
        "The author rejects both theories and concludes punishment cannot be justified.",
        "The author favours a hybrid in which desert limits punishment and deterrence guides its severity."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says the backward-looking theory 'struggles to explain' useless suffering, so it is not endorsed alone.",
        "Wrong: the author rejects the forward-looking theory because it could license punishing the innocent.",
        "Wrong: the author defends punishment on the hybrid view, not its impossibility.",
        "Correct: the author explicitly calls the hybrid 'the most defensible position,' with desert constraining and deterrence directing."
      ],
      workedSolution:
        "Look for the first-person commitment: 'I suggest' introduces the hybrid as 'the most defensible position.' That is the author's own stance, option D.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-standpoint-902",
      passageId: "psg-philosophy-902",
      type: "standpoint",
      stem: "How does the author regard the objection that psychological continuity makes identity 'a matter of degree'?",
      options: [
        "As mistaken, since identity coming in degrees is a truth about persons rather than a flaw in the theory.",
        "As decisive, forcing the psychological account to be abandoned.",
        "As correct but too minor to discuss.",
        "As proof that the bodily account was preferable after all."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says the objection 'misses its mark,' because degreed identity is 'not an embarrassment to the theory but a truth about persons.'",
        "Wrong: the author rejects the objection rather than treating it as decisive against the theory.",
        "Wrong: the author engages the objection directly and denies it is correct, not that it is merely minor.",
        "Wrong: the author calls the bodily view 'plainly inadequate,' so the objection does not vindicate it."
      ],
      workedSolution:
        "The author states the objection 'misses its mark' and argues degreed identity is a truth the theory 'has the honesty to admit.' The attitude is dismissive of the objection, which is the option calling it mistaken.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-903",
      passageId: "psg-philosophy-903",
      type: "standpoint",
      stem: "The author's attitude toward the person 'who is never bored' is best described as:",
      options: [
        "skeptical, suggesting they may have stopped asking whether their time is well spent.",
        "admiring, treating such a person as a model.",
        "indifferent, regarding the matter as unimportant.",
        "envious of their contentment."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author is skeptical, noting they 'may simply have stopped asking whether their time is well spent.'",
        "Wrong: the author says such a person 'is not necessarily admirable,' explicitly withholding admiration.",
        "Wrong: the whole passage treats the matter as important, calling boredom a meaningful signal.",
        "Wrong: there is no expression of envy; the tone is analytical and cautionary."
      ],
      workedSolution:
        "The relevant sentence withholds praise and offers a deflating alternative explanation. The attitude is skeptical, option A.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-standpoint-904",
      passageId: "psg-science-904",
      type: "standpoint",
      stem: "What is the author's stance toward brain-scanning technology itself?",
      options: [
        "Hostile: the technology is pseudoscientific and should be discarded.",
        "Uncritically enthusiastic: the images settle questions about the mind.",
        "Supportive of the technology but critical of a specific misuse of its images.",
        "Wholly indifferent to what the technology can or cannot show."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says explicitly 'this is not an argument against the technology.'",
        "Wrong: the author argues the images do not settle such questions, calling the impression 'misleading.'",
        "Correct: the author credits the technology with teaching 'a great deal' while attacking the misuse of treating images as final.",
        "Wrong: the author is clearly engaged, distinguishing valuable use from misuse."
      ],
      workedSolution:
        "The author separates the tool ('taught us a great deal') from its misuse ('the false sense of finality'). The stance is supportive-but-critical, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-905",
      passageId: "psg-science-905",
      type: "standpoint",
      stem: "The author's attitude toward the free-rider's argument is best characterised as:",
      options: [
        "Approving: it is a sensible strategy for the cautious.",
        "Critical: it works only by remaining an exception and so lacks the standing of a genuine principle.",
        "Neutral: the author merely reports it without judgement.",
        "Uncertain: the author cannot decide whether it is valid."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author refutes the argument rather than approving it.",
        "Correct: the author calls the reasoning 'a parasitism' that 'forfeits the moral standing' of a genuine principle.",
        "Wrong: the author clearly judges the argument, exposing its flaw.",
        "Wrong: the author is decisive, not uncertain, in rejecting the reasoning."
      ],
      workedSolution:
        "Phrases like 'conceals a flaw,' 'a parasitism,' and 'forfeits the moral standing' show a clearly critical attitude. That is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-906",
      passageId: "psg-science-906",
      type: "standpoint",
      stem: "How does the author regard critics who 'romanticise the past' of agriculture?",
      options: [
        "As allies whose nostalgia strengthens the argument.",
        "As basically correct that old methods were superior.",
        "As unhelpful, because their nostalgia distracts from the narrower, serious point about measurement.",
        "As the primary target of the passage's criticism."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author distances himself from them, saying their stance 'is no help.'",
        "Wrong: the author does not endorse the superiority of old methods; he grants the efficiency gain 'is genuine.'",
        "Correct: the author says such romanticising 'is no help' and pivots to 'the serious point,' which is 'narrower.'",
        "Wrong: the main target is the misuse of a single metric, not nostalgic critics."
      ],
      workedSolution:
        "The author explicitly sidelines the romantics ('no help') to isolate the measurement argument. The attitude is dismissive of them, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-907",
      passageId: "psg-politics-907",
      type: "standpoint",
      stem: "What is the author's overall position on term limits?",
      options: [
        "They are wholly beneficial and should be adopted everywhere.",
        "They are entirely without merit and should never be considered.",
        "Their popular justification is overstated, though the author does not declare them wrong in every case.",
        "They should be replaced by lifetime appointments for legislators."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author warns they can shift power to the unaccountable, so not 'wholly beneficial.'",
        "Wrong: the author says 'this is not a decisive case against all limits,' so not 'entirely without merit.'",
        "Correct: the author says the popular argument 'proves less than it claims' while conceding long tenures carry dangers, stopping short of condemning all limits.",
        "Wrong: the author notes long tenure 'carries dangers of its own,' so does not endorse lifetime appointments."
      ],
      workedSolution:
        "The author is critical of the standard case but explicitly non-absolute ('not a decisive case against all limits'). The measured stance is option C.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-908",
      passageId: "psg-politics-908",
      type: "standpoint",
      stem: "The author's attitude toward the claim that referendums are 'democracy in its purest form' is:",
      options: [
        "wholehearted agreement.",
        "partial: there is 'something to this,' but the picture 'flatters the device.'",
        "total rejection: there is nothing democratic about referendums.",
        "indifference to whether the claim is true."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author qualifies rather than wholly agrees, exposing hidden agenda-setting.",
        "Correct: the author concedes 'there is something to this' but says it 'flatters the device,' a partial, qualified stance.",
        "Wrong: the author grants a grain of truth, so does not totally reject the claim.",
        "Wrong: the author clearly evaluates the claim rather than ignoring it."
      ],
      workedSolution:
        "The phrasing 'something to this, but the picture flatters the device' is textbook qualified acceptance. That is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-909",
      passageId: "psg-politics-909",
      type: "standpoint",
      stem: "Which best describes the author's view of trial by jury?",
      options: [
        "It is the most accurate method of reaching a verdict.",
        "It is indefensible and should be replaced by professional judges.",
        "It is worth keeping for the legitimacy it supplies, even though it carries real costs in reliability.",
        "It is irrelevant to whether a free people accept the state's verdicts."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author concedes a judge would likely be more accurate and consistent, so accuracy is not the jury's claim.",
        "Wrong: the author defends the jury, calling it indefensible only if judged purely 'as a question about competence.'",
        "Correct: the author defends the jury for the legitimacy and consent it secures while admitting 'these are the costs of a deliberate trade' in reliability.",
        "Wrong: the author makes acceptance by 'a free people' the whole point of the jury, so it is far from irrelevant."
      ],
      workedSolution:
        "The author neither idealises nor dismisses the jury, defending it as a deliberate trade of reliability for legitimacy. That qualified, conditional defence is the option naming both its value and its costs.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-910",
      passageId: "psg-history-910",
      type: "standpoint",
      stem: "The author regards the belief that nations are timeless and natural as:",
      options: [
        "a self-image contradicted by the historical record.",
        "a harmless and accurate description of nations.",
        "an unimportant matter not worth examining.",
        "the soundest basis for national loyalty."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says nations only 'present themselves as ancient,' while 'the historical record tells a stranger story' of recent assembly.",
        "Wrong: the author treats the timeless self-image as misleading, not accurate.",
        "Wrong: the author thinks it very much worth examining, urging us to ask 'who built it and why.'",
        "Wrong: the author argues loyalty is 'no less real for having a history,' so timelessness is not its required basis."
      ],
      workedSolution:
        "The opening contrast between how nations 'present themselves' and what 'the record tells' shows a skeptical valuation of the timeless self-image. That is the option calling it contradicted by the record.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-standpoint-911",
      passageId: "psg-history-912",
      type: "standpoint",
      stem: "What is the author's attitude toward judging historical figures by present-day moral views?",
      options: [
        "Approving, since modern standards are the only valid measure.",
        "Wholly opposed to any moral judgement of the past.",
        "Indifferent to how the past is judged.",
        "Critical, treating it as 'incoherent' as a general method while allowing some judgement is justified."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls this fashionable approach 'incoherent' as a general method.",
        "Wrong: the author endorses judging figures against the best standards available in their time, so not opposed to all judgement.",
        "Wrong: the author argues actively for a particular method, the opposite of indifference.",
        "Correct: the author criticises present-day judgement as incoherent yet allows the impulse is 'sometimes justified,' proposing a different test."
      ],
      workedSolution:
        "The author rejects the present-day method as incoherent but concedes some judgement is warranted, then offers an alternative. The nuanced critical stance is option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-912",
      passageId: "psg-literature-913",
      type: "standpoint",
      stem: "The author's attitude toward the view that criticism is 'mere opinion' is best described as:",
      options: [
        "enthusiastic agreement.",
        "critical, holding that the view flattens a real distinction between a remark and an argument.",
        "neutral description without evaluation.",
        "agreement, provided the critic is also a published author."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author calls the 'mere opinion' view 'a confusion,' the opposite of agreement.",
        "Correct: the author is critical, saying that to call criticism 'mere opinion' is 'to flatten a real distinction between a remark and an argument.'",
        "Wrong: the passage is plainly evaluative, defending the critic rather than merely describing the dispute.",
        "Wrong: the author makes no such condition; the critic's authority rests on showing what was seen, not on being a published author."
      ],
      workedSolution:
        "The passage's argument and word choice ('a confusion,' 'flatten a real distinction') reveal a critical stance toward the 'mere opinion' dismissal. That is the option calling it critical.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-913",
      passageId: "psg-literature-915",
      type: "standpoint",
      stem: "How does the author regard difficulty in poetry?",
      options: [
        "As always a pose that conceals emptiness.",
        "As always justified, since hard poems are inherently superior.",
        "As irrelevant to a poem's worth.",
        "As sometimes empty and sometimes earned, depending on whether the effort is repaid."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author allows that some difficulty is empty 'sometimes,' but insists other difficulty is earned.",
        "Wrong: the author concedes obscurity 'can be a pose,' so difficulty is not always justified.",
        "Wrong: the author treats difficulty as bearing directly on worth, not as irrelevant.",
        "Correct: the author distinguishes 'empty' from 'earned' difficulty and asks whether the effort 'is repaid.'"
      ],
      workedSolution:
        "The author refuses the blanket charge and the blanket defence, splitting difficulty into two kinds. That balanced view is option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-914",
      passageId: "psg-currentaffairs-916",
      type: "standpoint",
      stem: "Which best captures the author's attitude toward the renewal of declining neighbourhoods?",
      options: [
        "Unreserved enthusiasm for the visible improvements it brings.",
        "An insistence that poor districts should be left untouched.",
        "Wariness: the improvements are real, but they can displace the existing community at a cost that goes uncounted.",
        "Complete indifference to who benefits from the changes."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author warns that renewal can amount to 'replacement,' so the enthusiasm is not unreserved.",
        "Wrong: the author explicitly says this is 'not an argument for leaving poor districts to rot.'",
        "Correct: the author calls the improvements 'genuine' yet stresses the displacement 'falls hardest on those least able to absorb it.'",
        "Wrong: the author is centrally concerned with who is priced out and who benefits."
      ],
      workedSolution:
        "The author concedes the improvements are real yet dwells on the displacement of existing residents, refusing both boosterism and neglect. That wary middle stance is the option naming real gains alongside an uncounted cost.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-915",
      passageId: "psg-currentaffairs-918",
      type: "standpoint",
      stem: "What is the author's position on proposals to abolish online anonymity?",
      options: [
        "Opposed: the proposal misdiagnoses the problem and would harm the vulnerable while barely affecting the cruel.",
        "Supportive: abolishing anonymity would end online cruelty.",
        "Neutral: the author merely lists arguments on both sides.",
        "Undecided: the author finds the case finely balanced."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says abolition would 'misdiagnose' the problem and 'harm the vulnerable while barely inconveniencing the cruel.'",
        "Wrong: the author calls this hope 'decent' but the reasoning 'shakier than it looks.'",
        "Wrong: the author takes a clear side rather than merely listing arguments.",
        "Wrong: the author is decisive, calling the simple proposal 'mistaken.'"
      ],
      workedSolution:
        "The author identifies anonymity's protective value and the weak link between names and civility, concluding the proposal is mistaken. That opposed stance is option A.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * TYPE: structure  (1c Logical Structure / Argument Map) — 15 questions
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-structure-901",
      passageId: "psg-philosophy-901",
      type: "structure",
      stem: "What is the role of the sentence describing punishing an innocent person to frighten others?",
      options: [
        "It states the author's own recommended policy.",
        "It is offered as an objection to the hybrid view the author defends.",
        "It illustrates a fatal weakness of the purely forward-looking theory.",
        "It provides historical evidence that deterrence works."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls this outcome 'monstrous,' so it is not his recommended policy.",
        "Wrong: it targets the forward-looking theory, not the hybrid, which the author proposes later.",
        "Correct: the example shows that a purely forward-looking theory could license punishing the innocent, exposing its flaw.",
        "Wrong: it is a hypothetical objection, not historical evidence about deterrence."
      ],
      workedSolution:
        "The sentence appears where the author shows each theory 'runs into trouble.' It functions as a reductio against the forward-looking view, option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-902",
      passageId: "psg-philosophy-901",
      type: "structure",
      stem: "How is the passage's overall argument organised?",
      options: [
        "Two rival theories are presented, each is shown to fail alone, and a hybrid is then proposed and defended.",
        "A single theory is stated and then supported with three historical examples.",
        "A thesis is asserted first and the rest of the passage repeats it in different words.",
        "Two theories are compared and the author concludes they are equally acceptable."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage introduces forward- and backward-looking theories, shows each fails, then proposes and defends the hybrid.",
        "Wrong: there are no three historical examples; the support is conceptual.",
        "Wrong: the thesis appears only after the two theories are critiqued, not first.",
        "Wrong: the author judges each flawed alone and prefers the hybrid, not equal acceptability."
      ],
      workedSolution:
        "Trace the movement: theory 1, theory 2, 'each runs into trouble,' then 'the most defensible position is a hybrid.' That maps to option A.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-903",
      passageId: "psg-philosophy-902",
      type: "structure",
      stem: "What is the function of the example of the person whose memories are 'erased overnight' while the body is left untouched?",
      options: [
        "It supports the view that the body carries personal identity.",
        "It demonstrates the inadequacy of the bodily-continuity view.",
        "It is the author's preferred picture of what a person is.",
        "It introduces a topic unrelated to personal identity."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the example undermines the bodily view rather than supporting it.",
        "Correct: it shows we would judge the original person 'gone' despite the surviving body, exposing the defect the author then corrects.",
        "Wrong: the author uses the case to show what is lost, not to model what a person is.",
        "Wrong: the example is used precisely to diagnose the identity question, not to introduce an unrelated topic."
      ],
      workedSolution:
        "The example sits right after the claim that the bodily view is 'plainly inadequate' and yields the verdict that the person is 'gone.' It is a counterexample demonstrating the defect, which is the option naming the bodily view's inadequacy.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-904",
      passageId: "psg-philosophy-903",
      type: "structure",
      stem: "What role does the comparison between boredom and physical pain play in the argument?",
      options: [
        "It proves that boredom is physically harmful to the body.",
        "It is a digression unconnected to the main claim.",
        "It supplies the analogy through which the author reframes boredom as a useful signal.",
        "It concedes that boredom is, after all, a trivial complaint."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author uses pain as an analogy for a signal, not to claim boredom damages the body.",
        "Wrong: the comparison is central, supporting the reframing of boredom.",
        "Correct: pain 'tells us the body is being damaged' just as boredom 'tells us our attention is being wasted'; the analogy carries the reframing.",
        "Wrong: the analogy is used to deny triviality, not concede it."
      ],
      workedSolution:
        "The pain comparison is the engine of the 'signal' argument, mapping a bodily warning onto an attentional one. That is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-905",
      passageId: "psg-science-904",
      type: "structure",
      stem: "What is the function of the sentence noting that the colours are 'statistical summaries of small changes in blood flow'?",
      options: [
        "It concedes that the images are direct photographs of thought.",
        "It supports the author's claim that the images' air of objectivity is misleading.",
        "It recommends a better scanning technology.",
        "It states the passage's main conclusion."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: it argues the opposite — the colours are not direct measurements of thought.",
        "Correct: by explaining what the colours actually are, it backs the claim that their 'air of hard objectivity' is misleading.",
        "Wrong: the passage recommends no alternative technology.",
        "Wrong: the main conclusion concerns the misuse of images, not this technical detail."
      ],
      workedSolution:
        "This sentence follows 'the impression is misleading' and substantiates it by exposing what the image really represents. It is supporting evidence, option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-906",
      passageId: "psg-science-905",
      type: "structure",
      stem: "Which best describes the logical strategy of the passage?",
      options: [
        "It tests the free-rider argument by asking what would happen if everyone reasoned that way.",
        "It refutes the argument by citing statistics on vaccination rates.",
        "It accepts the argument and extends it to new cases.",
        "It appeals to the authority of medical experts to dismiss the argument."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author generalises the reasoning — 'if everyone followed the same logic' the protection would vanish — to expose the flaw.",
        "Wrong: no statistics are cited; the argument is purely logical.",
        "Wrong: the author refutes rather than accepts and extends the argument.",
        "Wrong: the passage makes no appeal to expert authority."
      ],
      workedSolution:
        "The decisive move is universalisation: imagine everyone reasoning the same way. That generalisation test is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-907",
      passageId: "psg-science-906",
      type: "structure",
      stem: "What is the role of the sentence 'The mistake is not in seeking efficiency but in assuming that a single number can capture whether a system is healthy'?",
      options: [
        "It abandons the argument made earlier in the passage.",
        "It concedes that efficiency is a worthless goal.",
        "It pinpoints the precise target of the author's criticism.",
        "It introduces an unrelated topic."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: it sharpens rather than abandons the argument.",
        "Wrong: the author affirms the value of efficiency ('not in seeking efficiency'), so does not call it worthless.",
        "Correct: the sentence isolates what the author objects to — not efficiency itself, but reliance on a single number.",
        "Wrong: it directly continues the passage's theme of measurement."
      ],
      workedSolution:
        "The 'not X but Y' construction explicitly locates the criticism, distinguishing the acceptable aim from the faulty assumption. That is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-908",
      passageId: "psg-politics-907",
      type: "structure",
      stem: "What is the function of the clause 'This is not a decisive case against all limits, for a very long tenure carries dangers of its own'?",
      options: [
        "It reverses the author's argument and endorses unlimited tenure.",
        "It qualifies the argument, preventing it from being read as a blanket rejection of term limits.",
        "It provides the passage's main thesis.",
        "It introduces statistical evidence about tenure length."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: it does not endorse unlimited tenure; it warns long tenure has dangers.",
        "Correct: the clause concedes a point to limit the scope of the criticism, signalling the argument is not absolute.",
        "Wrong: the main thesis is that term limits can misdirect power; this clause merely bounds that claim.",
        "Wrong: no statistics are offered; the qualification is conceptual."
      ],
      workedSolution:
        "The clause is a concessive hedge ('not a decisive case... for...') that narrows the conclusion. Its role is qualification, option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-909",
      passageId: "psg-politics-908",
      type: "structure",
      stem: "How does the author build the case that the referendum is less 'direct' than it appears?",
      options: [
        "By identifying hidden choices — question framing, labelling, and timing — that precede the vote.",
        "By arguing that voters are too uninformed to be trusted.",
        "By citing the outcomes of specific historical referendums.",
        "By claiming that representative democracy is flawless."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author points to framing, the labelling of the 'boxes,' and the timing of the vote as choices made before the voter acts.",
        "Wrong: the argument concerns hidden agenda-setting, not voters' competence.",
        "Wrong: no specific historical referendums are cited.",
        "Wrong: the author says representatives 'too can distort the public will,' denying their flawlessness."
      ],
      workedSolution:
        "The passage accumulates pre-vote choices (framing, labels, timing) to show the apparent directness conceals an agenda-setter. That method is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-910",
      passageId: "psg-politics-909",
      type: "structure",
      stem: "What is the role of the sentence 'This is not to pretend the jury has no costs'?",
      options: [
        "It is the passage's main conclusion.",
        "It contradicts the rest of the passage.",
        "It pre-empts a misreading by conceding the jury's drawbacks before narrowing the claim being defended.",
        "It offers evidence that juries are more accurate than judges."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the main conclusion concerns legitimacy and consent, not this concession.",
        "Wrong: it is consistent with the passage, which defends the jury while admitting its costs.",
        "Correct: the sentence blocks the inference that defending the jury denies its faults, then leads into 'the honest claim is narrower.'",
        "Wrong: it concedes the jury's unreliability rather than claiming superior accuracy."
      ],
      workedSolution:
        "After defending the jury, the author forestalls the objection that he ignores its faults by conceding them, then narrows his claim. The sentence's role is pre-emptive concession, which is the option about conceding drawbacks before narrowing the claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-911",
      passageId: "psg-history-910",
      type: "structure",
      stem: "What is the function of the references to the printing press, mass schooling, and conscript armies?",
      options: [
        "They are the author's main thesis.",
        "They serve as the chief examples illustrating how nations were deliberately assembled.",
        "They prove that national feeling is an illusion.",
        "They are an aside with no bearing on the argument."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the thesis is the general claim that nations were built recently; these are its illustrations.",
        "Correct: the institutions are listed as the means by which scattered people were taught 'a shared language, a shared history, and a shared name.'",
        "Wrong: the author explicitly denies that the constructed origin makes national feeling 'a fraud.'",
        "Wrong: the examples are central support for the construction thesis, not an irrelevant aside."
      ],
      workedSolution:
        "The institutions are introduced right after the claim that nations were 'assembled,' showing concretely how the assembly happened. They function as the supporting examples, which is the second option.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-912",
      passageId: "psg-history-911",
      type: "structure",
      stem: "How does the author support the claim that imperial histories are not neutral reports?",
      options: [
        "By describing the recognisable, self-flattering shape of such histories and then showing the same documents can be read against the grain to reveal what they omit.",
        "By arguing that no records of any empire have survived.",
        "By citing population statistics from the conquered provinces.",
        "By claiming that imperial historians always lied deliberately."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author first lays out the typical shape of imperial narratives (expansion as order, the conquered as grateful or as obstacles) and then shows reports and tax demands can be read against the grain.",
        "Wrong: the author works precisely from imperial records that do survive.",
        "Wrong: no population statistics are cited; the support is interpretive.",
        "Wrong: the author says the account 'is not usually a deliberate lie,' so does not rest on claims of deliberate falsification."
      ],
      workedSolution:
        "The support has two parts: characterising the imperial narrative's flattering shape, and showing the same documents can be read against the grain. That combination is the first option.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-913",
      passageId: "psg-history-912",
      type: "structure",
      stem: "What is the role of the observation that 'some of the period's own thinkers condemned practices their contemporaries accepted'?",
      options: [
        "It proves that present-day standards should govern all historical judgement.",
        "It is the author's main conclusion.",
        "It is irrelevant to the argument about judging the past.",
        "It blocks the excuse that wrongdoing was acceptable simply because it was common, supporting the author's middle position."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author rejects governing all judgement by present standards.",
        "Wrong: the main conclusion is the proposed test, not this single observation.",
        "Wrong: it is directly relevant, supplying the rationale for the author's standard.",
        "Correct: the observation shows 'better judgement was available even then,' rebutting the blanket excuse and grounding the 'best available standards' test."
      ],
      workedSolution:
        "The sentence answers the objection 'everyone did it' by showing dissenters existed, which licenses the author's middle test. Its role is option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-914",
      passageId: "psg-literature-914",
      type: "structure",
      stem: "Which best describes how the passage develops its argument about fidelity?",
      options: [
        "It defines 'fidelity' as one clear idea and defends it throughout.",
        "It argues that translation is impossible and abandons the topic.",
        "It compares several named translations of a single book.",
        "It splits 'fidelity' into two conflicting aims, shows they diverge with examples, and concludes that judgement is required."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author shows 'fidelity' is not one clear idea but 'splits into two aims.'",
        "Wrong: the author treats good translation as achievable, not impossible.",
        "Wrong: no named translations are compared.",
        "Correct: the passage divides fidelity into literal sense and effect, illustrates the conflict (pun, slang, verse), and concludes judgement is needed."
      ],
      workedSolution:
        "The development is: split the concept, show the split aims conflict via examples, then draw the conclusion about judgement. That is option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-915",
      passageId: "psg-currentaffairs-917",
      type: "structure",
      stem: "What is the function of the claim that part of the cost of excess 'shows up later in crowded hospitals, lost working days, and bills the wider public must meet'?",
      options: [
        "It proves that smoking and drinking are morally wrong.",
        "It is the passage's concluding recommendation.",
        "It recommends a specific tax rate for each product.",
        "It supports the thesis that a sin tax corrects for costs the buyer imposes on others."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author expressly separates the cost-correction case from any judgement on the smoker's 'character.'",
        "Wrong: it is evidence offered mid-argument, not the passage's concluding recommendation about where the money goes.",
        "Wrong: the author sets no particular rate; he says the test 'is not the rate it sets but where the money goes.'",
        "Correct: by naming the external costs others must bear, it backs the claim that the tax 'returns' those costs to the buyer's decision."
      ],
      workedSolution:
        "The sentence identifies the social costs not borne by the user, which is what the cost-correction thesis requires the tax to internalise. That supports the cost-correction option.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * TYPE: detail  (2a Explicit Comprehension / Stated Fact) — 15 questions
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    {
      id: "q-detail-901",
      passageId: "psg-philosophy-901",
      type: "detail",
      stem: "According to the passage, what role does desert play in the author's hybrid view?",
      options: [
        "It determines the exact severity of every punishment.",
        "It sets the outer limits of punishment.",
        "It justifies punishing the innocent when useful.",
        "It is irrelevant to the justification of punishment."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says severity 'within those limits' is guided by deterrence, not by desert.",
        "Correct: the passage states 'desert sets the outer limits of punishment' — no punishing the innocent, no excess beyond the offence.",
        "Wrong: the author says we may 'never punish the innocent,' the opposite of this option.",
        "Wrong: desert is central to the hybrid; it 'constrains.'"
      ],
      workedSolution:
        "The text says directly 'desert sets the outer limits of punishment' and 'desert constrains.' Option B restates that explicit point.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-902",
      passageId: "psg-philosophy-902",
      type: "detail",
      stem: "According to the passage, in what does psychological continuity consist?",
      options: [
        "An overlapping chain of memories, dispositions, and purposes linking each stage of a life to the next.",
        "The uninterrupted persistence of the same physical organism in space and time.",
        "A single memory that never changes throughout a person's life.",
        "The approval of others that a person remains the same individual."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage defines psychological continuity as 'the overlapping chain of memories, dispositions, and purposes that links each stage of a life to the next.'",
        "Wrong: that describes bodily continuity, the view the passage rejects as the whole story.",
        "Wrong: the passage describes an overlapping chain that frays over time, not one unchanging memory.",
        "Wrong: the passage never makes identity depend on the approval of others."
      ],
      workedSolution:
        "The text states directly that the better account locates identity in 'the overlapping chain of memories, dispositions, and purposes.' That explicit definition is the option naming that chain.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-903",
      passageId: "psg-philosophy-903",
      type: "detail",
      stem: "According to the passage, what does boredom signal?",
      options: [
        "That the body is being physically damaged.",
        "That a person lacks strength of character.",
        "That one's attention is being wasted on activity one finds meaningless.",
        "That a person should seek constant stimulation."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that is what pain signals; boredom is the analogue for attention, not bodily damage.",
        "Wrong: the author explicitly says boredom is 'not a defect of character.'",
        "Correct: the passage says boredom 'tells us that our attention is being wasted... on activity we find meaningless.'",
        "Wrong: the author treats chasing stimulation as refusing the signal, not as what boredom recommends."
      ],
      workedSolution:
        "The text states directly that boredom 'tells us our attention is being wasted.' Option C is the explicit statement.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-904",
      passageId: "psg-science-904",
      type: "detail",
      stem: "According to the passage, what do the colours in a brain image actually represent?",
      options: [
        "Direct measurements of thoughts and feelings.",
        "Statistical summaries of small changes in blood flow.",
        "The precise location where an emotion is produced.",
        "Photographs of neurons firing in real time."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says the colours 'are not measurements of thought.'",
        "Correct: the passage states the colours 'are statistical summaries of small changes in blood flow.'",
        "Wrong: the author argues activity does not establish that a region 'produces the emotion.'",
        "Wrong: the passage describes processed statistical summaries, not real-time photographs of neurons."
      ],
      workedSolution:
        "The text explicitly defines the colours as 'statistical summaries of small changes in blood flow.' That is option B.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-905",
      passageId: "psg-science-905",
      type: "detail",
      stem: "According to the passage, why does herd immunity exist?",
      options: [
        "Because most people do not reason like the free-rider.",
        "Because vaccines are mandatory in most countries.",
        "Because the unvaccinated are naturally immune.",
        "Because the cautious individual declines the vaccine."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states herd immunity 'exists only because most people do not reason this way.'",
        "Wrong: the passage sets mandates aside as a separate question and does not attribute herd immunity to them.",
        "Wrong: the passage does not claim the unvaccinated are naturally immune; they rely on others' immunity.",
        "Wrong: the free-rider's declining is what would destroy herd immunity if generalised, not what creates it."
      ],
      workedSolution:
        "The text says herd immunity is 'a collective good produced by the very behaviour the cautious individual proposes to avoid' and exists because most do not free-ride. That is option A.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-906",
      passageId: "psg-science-906",
      type: "detail",
      stem: "Which specific losses does the passage attribute to a field optimised for a single crop?",
      options: [
        "Vanishing hedgerows, declining soil organisms, and lost insect habitat.",
        "Higher fuel costs and lower yields.",
        "Reduced rainfall and rising temperatures.",
        "A shrinking agricultural workforce."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states 'hedgerows vanish, soil organisms decline, and the insects on which wider food webs depend lose their habitat.'",
        "Wrong: the passage does not mention fuel costs, and it grants that yields are high.",
        "Wrong: rainfall and temperature are not discussed.",
        "Wrong: the shrinking workforce is mentioned as part of the efficiency story, not as a loss from monoculture."
      ],
      workedSolution:
        "The text lists exactly three losses for the optimised field. Option A reproduces that list.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-907",
      passageId: "psg-politics-907",
      type: "detail",
      stem: "According to the passage, to whom does power migrate when experienced legislators are forced out?",
      options: [
        "To newly elected representatives.",
        "To the voters directly.",
        "To permanent civil servants, lobbyists, and unelected staff who face no limits.",
        "To the judiciary."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage argues new members become more dependent on insiders, not that power goes to them.",
        "Wrong: the author denies the chamber thereby becomes 'more responsive to voters.'",
        "Correct: the passage names 'the permanent civil servants, the lobbyists, the unelected staff who alone retain the institutional memory.'",
        "Wrong: the judiciary is not mentioned in the passage."
      ],
      workedSolution:
        "The text states power 'migrates to those who remain,' explicitly listing civil servants, lobbyists, and unelected staff. That is option C.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-908",
      passageId: "psg-politics-908",
      type: "detail",
      stem: "According to the passage, what does the voter never see?",
      options: [
        "The choices already made on his behalf in composing the question.",
        "The wording of the question on the ballot.",
        "The results of the referendum.",
        "The names of the representatives."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage states the voter 'never sees the choices already made on his behalf in composing it.'",
        "Wrong: the voter does see the question's wording; that is the 'finished question' presented to him.",
        "Wrong: the passage does not say the voter is denied the results.",
        "Wrong: representatives' names are not the subject of this point."
      ],
      workedSolution:
        "The text says directly the voter 'never sees the choices already made on his behalf.' Option A reproduces that statement.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-909",
      passageId: "psg-politics-909",
      type: "detail",
      stem: "According to the passage, why does a verdict delivered by fellow citizens carry a legitimacy that an official's cannot?",
      options: [
        "Because citizens know the rules of evidence better than judges.",
        "Because citizens reach more consistent results than judges.",
        "Because juries are cheaper for the state to convene.",
        "Because it cannot be dismissed as the judgement of the very power bringing the charge."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage says the career judge, not the layperson, 'knows the rules of evidence.'",
        "Wrong: the passage grants jury verdicts 'can be inconsistent,' so consistency is not the reason.",
        "Wrong: cost is never mentioned as a source of the jury's legitimacy.",
        "Correct: the passage states the citizens' verdict 'cannot be dismissed as the judgement of the very power bringing the charge.'"
      ],
      workedSolution:
        "The text gives the reason explicitly: the verdict of fellow citizens cannot be dismissed as the prosecuting power's own judgement. That is the option naming that source of legitimacy.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-910",
      passageId: "psg-history-910",
      type: "detail",
      stem: "According to the passage, what did conscript armies and national newspapers do?",
      options: [
        "They abolished local dialects by decree.",
        "They proved that nations are natural and ancient.",
        "They had no role in forming national identity.",
        "They persuaded scattered populations that they belonged to a single people with a single destiny."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage credits the printing press with standardising dialects, and by persuasion rather than decree.",
        "Wrong: the passage uses these institutions to show nations were made, the opposite of natural and ancient.",
        "Wrong: the passage names them precisely as instruments that helped form national identity.",
        "Correct: the passage states conscript armies and national newspapers 'persuaded scattered populations that they belonged to a single people with a single destiny.'"
      ],
      workedSolution:
        "The text says directly that conscript armies and national newspapers persuaded scattered populations of a single people and destiny. That is the option naming that single-people persuasion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-911",
      passageId: "psg-history-911",
      type: "detail",
      stem: "According to the passage, who, more often than not, first writes the history of an empire?",
      options: [
        "The conquered peoples of the frontier.",
        "Independent observers from neutral states.",
        "The civilisation at the centre that did the conquering.",
        "Later generations with no stake in the events."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage says the conquered appear, if at all, only as written-about figures 'never allowed to write.'",
        "Wrong: the passage does not attribute these histories to neutral observers; it stresses the centre's vantage point.",
        "Correct: the passage opens by stating imperial history is 'first written at its centre, by the civilisation that did the conquering.'",
        "Wrong: the passage locates the writing at the imperial centre at the time, not with disinterested later generations."
      ],
      workedSolution:
        "The text says directly that the history of an empire is 'first written at its centre, by the civilisation that did the conquering.' That is the option naming the conquering centre.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-912",
      passageId: "psg-history-912",
      type: "detail",
      stem: "According to the passage, what is 'the proper test' for judging a historical figure?",
      options: [
        "Whether the figure met present-day moral standards.",
        "Whether the figure's contemporaries approved of them.",
        "Whether the figure's actions were common in their era.",
        "Whether the figure fell short of the best standards genuinely accessible in their own time."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author rejects measuring figures by present-day standards.",
        "Wrong: contemporaries' approval is not the test; some contemporaries condemned accepted practices.",
        "Wrong: the author denies that being common makes an action permissible.",
        "Correct: the passage states 'the proper test is... whether they fell short of the best standards genuinely accessible in their own time.'"
      ],
      workedSolution:
        "The text defines the proper test explicitly in terms of the best standards accessible at the time. That is option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-913",
      passageId: "psg-literature-913",
      type: "detail",
      stem: "According to the passage, what does a practised critic notice?",
      options: [
        "Only whether a book conforms to current popular taste.",
        "The structure beneath a plot, how a sentence's rhythm carries meaning, a book's debts to others, and its place in a tradition.",
        "Nothing that an untrained reader could not see at a glance.",
        "The commercial sales figures of a book."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage describes attention to a work's craft and tradition, not conformity to popular taste.",
        "Correct: the passage states the critic notices 'the structure beneath a plot, the way a sentence's rhythm carries its meaning, the debt one book owes to another, the place a work occupies in a tradition.'",
        "Wrong: the passage's point is that the critic sees 'describable features' a reader 'had passed over.'",
        "Wrong: sales figures are never mentioned among what the critic notices."
      ],
      workedSolution:
        "The text lists exactly these describable features the practised critic notices. That is the option reproducing the list.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-914",
      passageId: "psg-literature-914",
      type: "detail",
      stem: "According to the passage, what are the two senses into which 'fidelity' splits?",
      options: [
        "Fidelity to the publisher and fidelity to the reader.",
        "Fidelity to grammar and fidelity to spelling.",
        "Fidelity to the author and fidelity to the translator's reputation.",
        "Fidelity to the literal sense and fidelity to the effect."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage does not mention the publisher; the split concerns sense and effect.",
        "Wrong: grammar and spelling are not the two senses described.",
        "Wrong: the translator's reputation is mentioned only to be set aside ('not... to display herself'), not as a sense of fidelity.",
        "Correct: the passage says a translator can be 'faithful to the literal sense' or 'faithful to the effect.'"
      ],
      workedSolution:
        "The text explicitly names the two aims: literal sense versus effect. That is option D.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-915",
      passageId: "psg-currentaffairs-918",
      type: "detail",
      stem: "According to the passage, whom does anonymity shelter besides the abuser?",
      options: [
        "Only commercial advertisers.",
        "The whistle-blower, the dissident under a hostile government, and the abuse victim seeking help.",
        "Only government officials.",
        "No one else; it shelters the abuser alone."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: advertisers are not mentioned among those anonymity shelters.",
        "Correct: the passage lists 'the whistle-blower, the dissident under a hostile government, the abuse victim seeking help without exposure.'",
        "Wrong: government officials are not named; a dissident 'under a hostile government' is the opposite figure.",
        "Wrong: the passage explicitly says anonymity 'does not only shelter the abuser.'"
      ],
      workedSolution:
        "The text lists exactly these three protected figures alongside the abuser. That is option B.",
      difficulty: "easy",
      source: "illustrative"
    }
  );
})(typeof window !== "undefined" ? window : this);
