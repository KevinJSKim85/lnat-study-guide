/*
 * mock-03.js — LNAT Section A mock exam (Mock Paper 3).
 *
 * Self-contained: assigns 12 passages, 42 four-option MCQs, 3 essay prompts, and
 * one mock object into the buckets that loader.js created on window.LNAT_DATA. It
 * references ONLY its own IDs (range 300-399) and must load AFTER loader.js. All
 * content is English-only and original.
 *
 * Calibrated against the official 2010 papers (research §7-8): passages are
 * argumentative (thesis + reasoning), answerable from the passage ALONE with NO
 * outside knowledge; every question has exactly 4 options and one defensible key,
 * with "wrong but almost right" distractors. Answer keys are spread across A-D.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-03.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* PASSAGES — 12, two per genre across the 6 genres; each argumentative, self-contained, 250-380 words. */
  DATA.passages.push(
    {
      id: "psg-philosophy-301",
      genre: "philosophy",
      title: "What We Owe the Future",
      body: "We make decisions today, about emissions, debt and the disposal of long-lived waste, that will shape the lives of people not yet born. Many find it hard to see how we could owe such people anything at all. They cannot vote, bargain or complain; they do not yet exist; and some philosophers conclude that duties simply cannot run to parties so insubstantial. This conclusion is too quick, and the reasoning behind it is weaker than it looks.\n\nThe first objection holds that we cannot have obligations to people who do not yet exist. But the relevant question is not whether they exist now; it is whether our present actions will affect them when they do. A factory that buries toxic waste certain to leak in a century harms whoever lives above it then, and the fact that those victims are unborn today makes the harm no less real. We routinely accept duties of this delayed kind: a person who sets a trap is responsible for the stranger it maims years later, though that stranger was anonymous when the trap was laid.\n\nA second objection appeals to ignorance. We cannot know who future people will be or what they will want, so we cannot know what we owe them. Yet some interests are safe to attribute across any plausible future. Whoever comes after us will need breathable air, a stable climate and uncontaminated water, whatever else their tastes may be. These needs are not hostage to the particular preferences of a generation we cannot foresee; they follow from the kind of creatures our successors are bound to be.\n\nThe deepest resistance is probably not philosophical at all but a matter of distance. The unborn are remote from us, and remoteness dulls concern as surely as it dims a sound. But moral standing was never meant to fade with separation in time any more than with separation in space. A harm does not shrink because its victim is far off, whether the distance is measured in miles or in years. To treat the merely future as the morally weightless is to confuse what we find easy to ignore with what we are entitled to ignore.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-302",
      genre: "philosophy",
      title: "In Defence of Boredom",
      body: "Boredom has acquired the reputation of a minor affliction, a void to be filled as quickly as a glowing screen will allow. We treat the empty half-hour as wasted time and reach reflexively for distraction, as though the mind at rest were a machine left idling. But this hostility to boredom rests on a mistake about what the restless mind is actually doing.\n\nBoredom is not the absence of activity; it is a particular and uncomfortable kind of activity, the mind casting about for something worth its attention and failing, for the moment, to find it. That discomfort is not a defect to be abolished but a signal to be heeded. It tells us that our present occupation has ceased to engage us, and in doing so it pushes us toward something better: a new question, an unexpected connection, a project we would never have begun had every idle minute been pre-filled. The most fertile daydreams tend to arrive precisely when we have run out of ready-made stimulation.\n\nThe danger of the perpetual distraction now available to us is therefore not that it wastes time, but that it forecloses this process before it can begin. A person who never tolerates a dull moment never discovers what that dull moment was trying to provoke. None of this is to romanticise tedium for its own sake; a life of unrelieved boredom would be a misery, and the point is not to seek boredom out. The point is that the reflex to extinguish it instantly, before it has done its work, deprives us of one of the few remaining occasions on which the mind is left to its own devices. We should be readier to sit inside the empty half-hour rather than scrambling to abolish it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-303",
      genre: "politics",
      title: "Immigration and the Anxiety About Cohesion",
      body: "A common worry about immigration is that it erodes social cohesion. A society, the argument goes, holds together because its members share a way of life; admit newcomers with different languages, customs and beliefs, and the common ground on which trust and cooperation rest is steadily worn away. The concern deserves a serious answer rather than a sneer, but the picture of cohesion behind it is mistaken.\n\nThe argument treats a shared culture as something fixed, a fragile inheritance that arrivals can only dilute. Yet the cultures of settled populations are not static and never were. They are the running outcome of earlier minglings, borrowings and quarrels, and they have always absorbed newcomers and been changed by them without dissolving. To freeze one moment of this long process and call it the authentic core that immigration threatens is to mistake a snapshot for the thing itself.\n\nThere is a further confusion in the worry. It assumes that cohesion means sameness, that people can trust and cooperate only with those who resemble them. But the bonds that actually hold a complex society together are not bonds of likeness; they are shared institutions, a common law, and habits of dealing fairly with strangers. Citizens who look and worship differently can rely on one another perfectly well provided the rules that govern them are fair and seen to be fair. Where cohesion frays, the cause is far more often visible injustice or neglect than mere variety.\n\nThis is not to deny that rapid change can strain a community, or that integration asks something of newcomers and hosts alike. A society may reasonably attend to the pace of arrival and to the institutions that knit people together. But it should locate the real threat correctly. What undermines cohesion is not difference as such but the failure to extend the same fair treatment to everyone; and that is a failure of the host society at least as much as of those it admits.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-304",
      genre: "politics",
      title: "Devolution and the Cost of Uniformity",
      body: "Whenever a national government devolves power to regional or local bodies, critics warn of a 'postcode lottery': citizens in different areas will receive different levels of service, and a benefit available in one town will be denied in the next. The complaint treats any such variation as a self-evident injustice. It is not.\n\nThe objection assumes that uniformity is the natural baseline from which every divergence is a falling-off. But there is nothing fair in itself about treating unlike places alike. A rule written for the whole country must be written for an imagined average citizen who lives nowhere in particular; applied to a remote rural district and a dense inner city at once, it will fit neither well. Local decision-makers, closer to the conditions they govern, can match provision to need in ways a distant ministry cannot. Variation, on this view, is not the failure of the system but the whole point of it.\n\nThere is a deeper reply as well. Where decisions are made locally, voters can see who decided and why, and can replace them if they disapprove. A service withdrawn by a council that answers to its own electorate has at least been chosen by someone the affected citizens can hold to account; the same service set by a remote authority answerable to no one in particular has not. Differences that arise from local choice carry a democratic warrant that uniform national diktat lacks.\n\nNone of this means every variation is acceptable; a genuine floor of basic entitlements may still be owed to everyone regardless of where they live. But the mere fact that provision differs from place to place is no scandal. It is the visible trace of decisions taken by those best placed to take them, and the price of refusing it is a flattening uniformity that serves the convenience of the centre rather than the needs of the governed.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-305",
      genre: "science",
      title: "Prediction Is Not Understanding",
      body: "Machine-learning systems now forecast many things with remarkable accuracy. Fed enough past data, they predict which patients will be readmitted to hospital, which transactions are fraudulent, which molecules might bind to a target. Their success has encouraged a tempting slogan: that with enough data, prediction can replace explanation altogether, and the old scientific ambition to understand why things happen can be retired as a relic.\n\nThe slogan confuses two different achievements. A model that predicts readmission may have fastened on a statistical shadow of the real cause, rather than the cause itself. Suppose it learns that patients discharged on a Friday are readmitted more often. The pattern may be perfectly real and perfectly useful for triage, yet it explains nothing: the day of the week does not make anyone ill. It may simply track reduced weekend staffing, or the kind of case that tends to be cleared before a weekend. Acting on the correlation as though it were the cause, by forbidding Friday discharges, could leave outcomes untouched while disrupting the wards.\n\nThis is why explanation retains a value prediction cannot supply. A system that has identified a genuine causal mechanism will keep working when circumstances change, because the mechanism travels with the world it describes. A system that has merely memorised yesterday's correlations is hostage to the conditions under which those correlations happened to hold; when staffing patterns or referral habits shift, its forecasts silently decay. The predictor cannot tell us which of its inputs would survive such a change, because it was never built to distinguish a cause from a companion. Prediction tells us what is likely to happen next under conditions like today's. Understanding tells us what would happen if those conditions were different, and only the second kind of knowledge can be safely steered by.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-306",
      genre: "science",
      title: "The Mirage of De-extinction",
      body: "The prospect of resurrecting vanished species, from the mammoth to the dodo, is regularly announced as conservation's next frontier. Splice recovered fragments of ancient DNA into the genome of a living relative, the story goes, and a lost creature walks again. The promise is seductive, and it is largely an illusion.\n\nBegin with what would actually be produced. Ancient DNA survives only in degraded scraps, so the gaps must be filled with the sequence of a modern cousin. What emerges is therefore not the extinct animal but a hybrid: an elephant edited to tolerate cold, say, rather than a mammoth. To call such a creature a resurrected species is to mistake a passable imitation for the original. The thing that was lost remains lost; what is gained is a novel organism wearing its name.\n\nEven the imitation, moreover, would be an animal without a world. A species is not merely a genome but a way of life learned and transmitted within a habitat that no longer exists. The mammoth's tundra has gone; the social knowledge by which a herd once raised its young died with the last of them. A lone engineered calf, reared by keepers, would inherit the genes but not the life, and would have nowhere to live it.\n\nThe gravest objection is not technical but moral, and concerns where the effort is aimed. Conservation budgets are finite. Every pound and every talented researcher drawn toward the spectacle of bringing back the dead is a pound and a researcher not spent keeping the living from joining them. Worse, the very promise of reversal corrodes the urgency that protects existing species: if extinction can be undone, why agonise over preventing it? De-extinction sells the comforting fiction that loss is reversible, and in doing so it makes the irreversible losses now under way easier to bear, and therefore easier to permit.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-307",
      genre: "history",
      title: "Against the Great Man Theory",
      body: "It is a habit of popular history to explain the past through its towering individuals. The revolution succeeded because of its leader's genius; the empire fell because its ruler was weak; the age took its shape from the will of the few remembered by name. The approach flatters our appetite for vivid stories, but as an account of how change actually happens it is badly misleading.\n\nThe trouble is that it mistakes visibility for causation. The leader is the part of the historical record we can see most clearly, because contemporaries wrote about her and monuments preserved her, while the conditions that made her possible left fainter traces. A general wins a famous victory, and the victory is credited to his daring; the supply lines, the demographic weight of his recruiting grounds, the technology his smiths had mastered, all recede into the background as mere circumstance. Yet remove those conditions and the same daring would have produced only a footnote, or a defeat.\n\nA more honest test is to ask whether the celebrated figure could have been replaced. If a movement has reached the point where it throws up one capable leader, it can usually throw up another; the individual who happens to fill the role is far more replaceable than the conditions that created the vacancy. The pressures of an industrialising economy, a discredited regime, a population that will no longer consent to be governed as before: these do not depend on any single person, and they would have found some other agent had the famous one never been born.\n\nThis is not to deny that individuals ever matter; a blunder at a decisive moment can certainly alter the course of events. It is to deny that they matter in the way the great-man story supposes, as prime movers conjuring change from nothing. The named individual is better understood as the agent through whom impersonal forces found expression than as their author. To read history the other way around is to confuse the actor on the stage with the author of the play.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-308",
      genre: "history",
      title: "The Uses of the Counterfactual",
      body: "Serious historians have long been suspicious of the counterfactual question — what would have happened if some event had gone otherwise? Such speculation, the objection runs, is unprovable and therefore unhistorical: we cannot run the past a second time, so any answer is mere fancy dressed up as scholarship. The suspicion is understandable, but it proves too much.\n\nFor the historian who avoids counterfactuals does not thereby escape them; she merely leaves them unexamined. To say that a particular decision 'caused' a war is already to make a tacit claim about what would have followed had the decision gone the other way. A cause, after all, is something whose absence would have changed the outcome. Every causal statement in history therefore smuggles in a counterfactual, whether or not the writer chooses to inspect it. The choice is not between using such reasoning and refusing it, but between using it carefully and using it blindly.\n\nThe legitimate counterfactual is not idle 'what if' entertainment. It is disciplined by the same evidence as ordinary history: it alters one variable, holds the rest of the known context fixed, and asks what the documented circumstances would plausibly have allowed. Conducted this way, it is a tool for weighing the relative importance of causes — for distinguishing the decision that truly tipped events from the one that merely accompanied them.\n\nThe fanciful kind, which spins long chains of consequence from a single altered detail, deserves the scorn it receives; with every additional step the speculation drifts further from anything the evidence can constrain. But the remedy for bad counterfactual reasoning is good counterfactual reasoning, not the pretence that historians can do without it. The question is not whether to imagine roads not taken, but how rigorously to discipline the imagining.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-309",
      genre: "literature",
      title: "The Quarrel over Content Warnings",
      body: "Few disputes in literary education generate more heat than the question of content warnings: the brief notices that flag distressing material before a novel or poem is studied. To their fiercest opponents, such warnings are an act of cowardice, a coddling that insults the resilience of readers and betrays literature's vocation to disturb. This indignation is overblown, and it rests on a misunderstanding of what a warning is.\n\nA warning is not a wall. It does not remove the difficult text, soften its language, or excuse anyone from grappling with it; it simply tells the reader in advance what kind of difficulty is coming. The critics speak as if a single sentence of forewarning were the same as banning the book, when in truth nothing has been taken away. A reader told that a chapter depicts a suicide is no less obliged to read and confront that chapter; she is merely not ambushed by it.\n\nIndeed the objection inverts the actual effect. A reader braced for what is coming is often better placed to engage with it seriously, rather than being knocked into the numb self-protection that sudden shock provokes. Far from blunting literature's power to unsettle, a warning can sharpen it, by ensuring the reader meets the disturbance with open eyes rather than flinching away. The teacher who frames a harrowing passage does not weaken its force; she makes it possible to feel that force without being merely overwhelmed by it.\n\nThis is not to say every warning is wise or that the practice cannot be carried to absurd lengths; a notice attached to every faint shadow would indeed become a joke, and a pretext for avoidance. But the sensible use of warnings is a courtesy, not a capitulation. To confuse the considerate framing of a hard text with the refusal to teach it is to mistake good manners for surrender.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-310",
      genre: "literature",
      title: "What Literary Prizes Are For",
      body: "Every year the announcement of a major book award is followed by the same complaint: the prize is a lottery, its choices arbitrary, the notion of a single 'best' novel absurd when taste is so various. The complaint is half right and wholly beside the point. Literary prizes do not work, and were never going to work, by measuring books the way a scale measures weight.\n\nOf course there is no objective ranking of novels; a panel that met a week later, or contained different readers, might well have crowned a different title. But to treat this as an indictment is to judge the prize by a standard it does not claim to meet. Its verdict is not a measurement but a considered argument: a small group of serious readers has wagered its judgment on a book and staked its reputation on the choice. The value lies not in the false promise of objectivity but in the act of advocacy.\n\nThat advocacy does real work in a crowded culture. Each year far more books are published than any reader could survey, and most sink without trace not because they are bad but because no one points to them. A prize is a way of pointing — of lifting a handful of titles out of the deluge and insisting they be argued over. Even readers who end up disagreeing with the choice are drawn into reading and judging books they would otherwise never have opened, and that argument is itself a service to literature.\n\nSo the lottery objection, though accurate as far as it goes, mistakes the purpose. We should not ask of a prize whether it has identified the one book that is objectively best, a question with no answer. We should ask whether it has provoked the kind of attention and argument that keeps books alive. By that measure the apparent arbitrariness is not a flaw to be cured but the cost of doing something worthwhile.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-311",
      genre: "currentaffairs",
      title: "Flexibility and the Gig-Economy Bargain",
      body: "Defenders of the gig economy rest their case on a single prized word: flexibility. App-based platforms, they argue, let people work when and as much as they like, free of the rigid schedules of conventional employment, and that freedom is precisely why classifying such workers as employees would do them no favours. The argument is not empty, but it leans on the word 'flexibility' far harder than the word can bear.\n\nThe first difficulty is that flexibility, as advertised, is not evenly shared. A worker is free to decline a job, certainly; but a worker who depends on the platform for a living, and whose ranking falls each time he declines, is free in a thin sense only. The platform, meanwhile, retains the genuine flexibility: it sets the pay per task, adjusts it without notice, and can deactivate an account at will. To describe a relationship so lopsided as a fair exchange of flexibility is to use one word for two very unequal things.\n\nThe second difficulty is that flexibility and protection are not the opposites the argument assumes. It is treated as obvious that a worker must choose between the freedom to set his own hours and the safety net of sick pay, insurance, and a wage floor. But there is no law of nature linking the two. One could readily imagine arrangements that preserved genuine choice over hours while still guaranteeing the basic protections that employment normally carries. The platforms present the trade-off as inevitable because the absence of those protections is precisely what makes their model cheap.\n\nNone of this settles exactly which legal category such work belongs in; that is a question for careful regulation, not a slogan. But the appeal to flexibility cannot do the work asked of it. It dresses up the removal of ordinary protections as a gift to the worker, when the chief beneficiary of the arrangement is the company that is spared their cost.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-312",
      genre: "currentaffairs",
      title: "The Open-Plan Office Reconsidered",
      body: "The open-plan office was sold to a generation of employers as the natural home of collaboration. Tear down the walls and the partitions, the pitch ran, and ideas will flow freely as colleagues mingle; the very architecture would make a workforce more communicative and more creative. The promise was intuitive, widely believed, and, on the evidence of how people behave in such spaces, largely backwards.\n\nWhat removing the walls actually removes is privacy, and the loss provokes a defensive response. A person who can be seen and overheard by everyone tends not to converse more freely but to retreat: headphones go on, messages replace conversations, and a sensitive exchange is postponed until it can be had unobserved. The wall that the design abolished was doing useful work, marking the boundary within which an unguarded conversation felt safe. Strip that boundary away and people manufacture flimsier substitutes, guarding their words in the very space meant to loosen them.\n\nThere is a further confusion in the original promise. It assumes that more interaction is the same as better collaboration, as though good work were simply a matter of volume of contact. But much valuable work is solitary and requires sustained concentration, and the open plan is hostile to exactly that. A constant low surf of noise and movement fragments attention into useless slivers; the worker who must reread the same paragraph after each interruption is not collaborating but merely failing to think.\n\nNone of this is an argument for sealing everyone behind a closed door; some kinds of work plainly profit from easy contact, and the right answer is a mixture of spaces suited to different tasks. The error was the dogma that one arrangement serves every purpose, and the particular conceit that openness is always and everywhere the friend of good work. Knocking down the walls did not release a torrent of collaboration; it mostly taught people new ways to hide.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* QUESTIONS — 42 four-option MCQs. Numbers 301-342 unique; type token reflects sub-type. Passage order. */
  DATA.questions.push(
    {
      id: "q-main-301",
      passageId: "psg-philosophy-301",
      type: "main",
      stem: "Which of the following best expresses the main conclusion of the passage?",
      options: [
        "We can have no genuine obligations to people who do not yet exist.",
        "The standard objections fail, so we can and do owe moral duties to future generations.",
        "Future people matter only if we can predict exactly who they will be.",
        "Present generations should always sacrifice their own interests for those of the unborn."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the conclusion the author sets out to refute, calling the reasoning behind it 'weaker than it looks'.",
        "Correct: the passage rebuts the non-existence, ignorance and distance objections in turn and concludes that the merely future is not 'morally weightless', so duties to future people stand.",
        "Wrong: the author argues the opposite, that certain interests 'are safe to attribute across any plausible future' even without knowing who future people will be.",
        "Wrong: the passage argues that future people have moral standing, not that the present must 'always' sacrifice its interests; that stronger claim is never made."
      ],
      workedSolution: "The passage poses the doubt that we can owe the unborn anything, then dismantles three objections, non-existence, ignorance and distance, and closes by denying that the future is morally weightless. The option stating that the objections fail and duties to future generations hold is the answer. One option is the rejected doubt, another contradicts the ignorance reply, and the last overstates the conclusion into constant self-sacrifice.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-302",
      passageId: "psg-philosophy-301",
      type: "assume",
      stem: "The trap-setter example in the second paragraph relies on which unstated assumption?",
      options: [
        "Responsibility for a harm depends on the harm one's act actually causes, not on whether the victim was identifiable when one acted.",
        "Everyone who buries toxic waste intends to harm future generations.",
        "A harm that occurs in the distant future is always worse than a harm that occurs today.",
        "Future people will share all the tastes and preferences of the present generation."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the example works only if one can be responsible for a harm to a victim who was unidentifiable at the time of acting; the author needs that what fixes responsibility is the act's effect when it lands, not the victim's being known in advance.",
        "Wrong: the argument does not require anyone to intend harm; the trap-setter and the waste-burier may be merely reckless, yet still responsible.",
        "Wrong: the argument needs delayed harms to count, not to count for more; it never assumes future harms outweigh present ones.",
        "Wrong: shared preferences are the concern of the separate ignorance objection; the trap example does not rely on future people matching present tastes."
      ],
      workedSolution: "Use the negation test. The trap-setter is offered as someone responsible for harming a stranger who was anonymous when the trap was laid. If responsibility instead required the victim to be identifiable at the moment of acting, the analogy would collapse and the unborn could be excluded. So the argument assumes responsibility tracks the harm an act actually produces rather than the victim's being known in advance, which is the answer. The other options add intent, comparative severity, or shared preferences the example does not need.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-303",
      passageId: "psg-philosophy-301",
      type: "standpoint",
      stem: "What is the author's attitude toward the objections that we can owe the unborn nothing?",
      options: [
        "He endorses them as decisive, agreeing that no duties can run to future people.",
        "He is genuinely undecided whether the objections succeed.",
        "He takes them seriously but argues each one fails on examination.",
        "He dismisses them as obviously absurd and unworthy of any reply."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author rejects the objections, concluding that the future is not 'morally weightless', so he does not endorse them as decisive.",
        "Wrong: the passage reaches a firm verdict against the objections, so 'undecided' misreads its close.",
        "Correct: he says the concern 'deserves a serious answer rather than a sneer', then takes the non-existence, ignorance and distance objections one by one and shows each is 'too quick' or 'weaker than it looks'.",
        "Wrong: he explicitly warns against meeting the worry with 'a sneer' and engages each objection in turn, the opposite of dismissing them as absurd."
      ],
      workedSolution: "Distinguish views held from views engaged. The author insists the doubt 'deserves a serious answer rather than a sneer', then rebuts the non-existence, ignorance and distance objections in succession and concludes the future is not morally weightless. That is serious engagement followed by rejection, which is the answer; the alternatives have him endorsing, wavering over, or scorning the objections.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-304",
      passageId: "psg-philosophy-301",
      type: "vocab",
      stem: "As used in the final paragraph ('remoteness dulls concern'), 'remoteness' most nearly means:",
      options: [
        "coldness or unfriendliness of manner",
        "the slim chance that an event will occur",
        "control exercised from a distance",
        "the state of being far off or distant"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the 'aloof manner' sense of 'remote', but the passage is about the unborn being distant in time, not about anyone's personality.",
        "Wrong: 'remoteness' can mean improbability elsewhere, yet here it follows 'The unborn are remote from us', a statement about distance, not likelihood.",
        "Wrong: this is the 'operated from afar' sense; the sentence concerns how distance weakens concern, not the remote operation of anything.",
        "Correct: the sentence says 'The unborn are remote from us, and remoteness dulls concern', and pairs it with 'separation in time' and 'space', so 'remoteness' means the state of being far off."
      ],
      workedSolution: "Read the word in place: 'The unborn are remote from us, and remoteness dulls concern', glossed by 'separation in time' and 'space'. The contextual sense is being far off or distant, which is the answer. The aloof-manner, improbability, and operated-from-afar senses are dictionary-association traps that do not fit the talk of distance in time.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-305",
      passageId: "psg-philosophy-302",
      type: "inference",
      stem: "Which conclusion does the passage most support?",
      options: [
        "People should deliberately seek out boredom in order to become more creative.",
        "Daydreaming is the only source of worthwhile new ideas.",
        "Constant distraction can cost us something valuable even when no time is, strictly speaking, wasted.",
        "A life containing any boredom at all is preferable to one containing none."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly says the point 'is not to seek boredom out', so this contradicts the text.",
        "Wrong: the passage calls daydreams 'fertile' but never claims they are the only source of worthwhile ideas; 'only' overreaches.",
        "Correct: the author says the danger of distraction 'is therefore not that it wastes time' but that 'it forecloses this process', implying a real loss independent of wasted time.",
        "Wrong: the author concedes 'a life of unrelieved boredom would be a misery', so does not rank any-boredom over none in general."
      ],
      workedSolution: "An inference must be supported, not merely plausible. The passage reframes the cost of distraction away from wasted time toward foreclosing a valuable process, so the supported conclusion is that constant distraction can cost us something valuable even when no time is strictly wasted. Two options are explicitly disavowed by the text (seeking boredom out, and ranking any boredom above none), and the claim that daydreaming is the 'only' source of worthwhile ideas inserts a word the passage never asserts.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-306",
      passageId: "psg-philosophy-302",
      type: "structure",
      stem: "What is the function of the sentence 'None of this is to romanticise tedium for its own sake'?",
      options: [
        "It introduces the passage's central thesis for the first time.",
        "It heads off a likely misreading by limiting the claim the author is making.",
        "It concedes that the author's earlier argument was mistaken.",
        "It offers a concrete example of a productive daydream."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the thesis (boredom is a useful signal, not a defect) is developed earlier; this sentence does not introduce it.",
        "Correct: the sentence pre-empts the reader's suspicion that the author is glorifying tedium, then narrows the claim ('the point is not to seek boredom out'), guarding the argument against an overstatement.",
        "Wrong: it qualifies the argument's scope rather than retracting it; the author immediately restates the genuine point.",
        "Wrong: no example of a daydream is given here; the sentence is a scope-limiting disclaimer."
      ],
      workedSolution: "Identify the sentence's role in the argument map. After praising boredom's usefulness, the author anticipates the objection that he is romanticising tedium and explicitly disclaims it, narrowing his thesis. That is a limiting, misreading-blocking move, option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-307",
      passageId: "psg-philosophy-302",
      type: "tone",
      stem: "The phrase 'as though the mind at rest were a machine left idling' chiefly serves to convey the author's:",
      options: [
        "neutral, technical description of how attention works",
        "admiration for the efficiency of modern technology",
        "anxiety that human minds are being replaced by machines",
        "scepticism toward the assumption that an unoccupied mind is doing nothing"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the phrase is pointedly evaluative ('as though'), signalling a view the author rejects, not neutral description.",
        "Wrong: the author is critical of reflexive distraction, not admiring of technology's efficiency.",
        "Wrong: the concern is that we waste the resting mind's potential, not a fear of humans being replaced by machines.",
        "Correct: the simile mocks the assumption that a resting mind is merely idle; the author immediately argues this 'rests on a mistake', so the tone is sceptical of that assumption."
      ],
      workedSolution: "Tone is read from word choice and framing. 'As though' marks the machine-idling image as a view the author distances himself from, and the next sentence calls it 'a mistake'. The attitude is sceptical of the lazy-mind assumption, option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-308",
      passageId: "psg-politics-303",
      type: "main",
      stem: "Which statement best captures the central argument of the passage?",
      options: [
        "Immigration need not erode social cohesion, because cohesion rests on fair shared institutions rather than on sameness, and the real threat is unfair treatment.",
        "Immigration should be halted until newcomers can be made to resemble the existing population.",
        "Social cohesion is an outdated idea that no modern society has any reason to value.",
        "A shared national culture is a fixed inheritance that newcomers inevitably dilute."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author argues cohesion depends on 'shared institutions, a common law, and habits of dealing fairly', not on likeness, and that fraying is caused 'far more often' by injustice than by variety.",
        "Wrong: the author rejects the equation of cohesion with sameness, so demanding that newcomers be made to resemble the population is the opposite of the view.",
        "Wrong: the author takes cohesion seriously and seeks to protect it, denying only a mistaken account of it; the passage does not dismiss cohesion as outdated.",
        "Wrong: the passage explicitly argues that cultures 'are not static and never were', so treating culture as a fixed inheritance is the view being refuted, not endorsed."
      ],
      workedSolution: "Trace the thesis: the cohesion worry rests on a false picture (culture as fixed, cohesion as sameness); cohesion really rests on fair shared institutions, so difference need not threaten it and unfair treatment is the genuine danger. The option stating that two-part claim is the answer. One option demands sameness, another dismisses cohesion altogether, and the last restates the fixed-culture view the passage rejects.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-309",
      passageId: "psg-politics-303",
      type: "detail",
      stem: "According to the passage, what does it say actually holds a complex society together?",
      options: [
        "A shared language and a single common religion among its members.",
        "The members' close resemblance to one another in customs and beliefs.",
        "Shared institutions, a common law, and habits of dealing fairly with strangers.",
        "A fixed national culture preserved unchanged from earlier generations."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage does not name a shared language or single religion as the bond; it actually says citizens 'who look and worship differently' can rely on one another.",
        "Wrong: the passage denies that the bonds are 'bonds of likeness', so resemblance is precisely what it says does not do the work.",
        "Correct: the passage states that the bonds 'are shared institutions, a common law, and habits of dealing fairly with strangers'.",
        "Wrong: the passage argues cultures 'are not static', so a fixed unchanged culture is rejected, not offered as the binding force."
      ],
      workedSolution: "This is explicit comprehension. The third paragraph states that the bonds holding a complex society together 'are shared institutions, a common law, and habits of dealing fairly with strangers'. The option reproducing that list is the answer; the others name likeness, a single language or religion, or a fixed culture, all of which the passage rejects.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-310",
      passageId: "psg-politics-303",
      type: "assume",
      stem: "The claim that fraying cohesion is caused 'far more often' by injustice than by variety relies on which assumption?",
      options: [
        "Citizens who differ in customs and beliefs are able to trust and cooperate when the rules that govern them are fair.",
        "Every society that admits newcomers will sooner or later cease to function.",
        "Cultural variety has no effect of any kind on how a society operates.",
        "Newcomers always integrate more quickly than the host population expects."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: blaming injustice rather than variety only works if diverse citizens could cohere under fair rules; the argument assumes that variety alone, absent injustice, does not prevent trust and cooperation.",
        "Wrong: the argument assumes the reverse of inevitable breakdown; it holds that diverse societies can hold together when treatment is fair.",
        "Wrong: the author allows that rapid change 'can strain a community', so the argument does not assume variety has no effect at all; that is stronger than needed.",
        "Wrong: the speed of newcomers' integration is never relied on; the claim turns on fairness of treatment, not on integration outpacing expectations."
      ],
      workedSolution: "Negation test: if diverse citizens could not trust and cooperate even under fair rules, then variety itself would explain fraying cohesion and the claim that injustice is the more frequent cause would fail. So the argument assumes diverse citizens can cohere when treated fairly, which is the answer. One option asserts inevitable breakdown, another denies any effect of variety, and the last is off-topic.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-311",
      passageId: "psg-politics-303",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "a society with no immigration at all would be immune to any loss of cohesion",
        "newcomers bear sole responsibility for integrating into the host society",
        "cultural difference is the single greatest danger a society can face",
        "a society can damage its own cohesion through unfair treatment, regardless of how many newcomers it admits"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: by locating the threat in injustice rather than difference, the passage implies cohesion could fray even without immigration, not that a closed society would be immune.",
        "Wrong: the author says integration 'asks something of newcomers and hosts alike' and faults the host society, so it does not place sole responsibility on newcomers.",
        "Wrong: the passage argues that difference 'as such' is not the threat, so it cannot be implying difference is the greatest danger.",
        "Correct: since the author says cohesion frays from 'visible injustice or neglect' and calls this 'a failure of the host society', it follows that a society can undermine its own cohesion by treating people unfairly, whatever the level of immigration."
      ],
      workedSolution: "Stated vs implied: the author relocates the cause of fraying cohesion from difference to unfair treatment, and calls that a failure of the host society. The unstated but supported point is that a society can erode its own cohesion through injustice independently of how much immigration it receives, which is the answer. The other options contradict the argument or overstate it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-312",
      passageId: "psg-politics-304",
      type: "standpoint",
      stem: "Which best describes the author's position on variation in services between areas?",
      options: [
        "Such variation is always an injustice that good government should eliminate.",
        "Such variation is generally defensible, though a basic floor of entitlements may still be owed to all.",
        "Such variation is a matter of indifference about which nothing useful can be said.",
        "Such variation should be maximised regardless of any minimum standard."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the 'postcode lottery' complaint the author sets out to rebut, not his own view.",
        "Correct: the author defends variation as the point of local decision-making, then concedes 'a genuine floor of basic entitlements may still be owed to everyone'.",
        "Wrong: the author argues at length that variation is positively justified, so it is not a matter of indifference.",
        "Wrong: he qualifies his defence with a possible minimum floor, so he does not call for maximising variation regardless of standards."
      ],
      workedSolution: "The author rebuts the postcode-lottery objection and defends variation as the visible trace of accountable local choice, while explicitly allowing a basic floor. That qualified defence is option B. A is the rejected complaint; C and D ignore his reasoning and his caveat respectively.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-313",
      passageId: "psg-politics-304",
      type: "structure",
      stem: "The phrase 'There is a deeper reply as well' at the start of the third paragraph signals that the author is about to:",
      options: [
        "abandon his earlier argument in favour of a new one",
        "concede a point to the critics he has been answering",
        "add a further, distinct argument for the same conclusion",
        "give a concrete example illustrating the previous paragraph"
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the earlier argument (local fit to need) is not abandoned; the new paragraph supplements it.",
        "Wrong: the paragraph advances the author's case rather than conceding to critics; the concession comes only in the final paragraph.",
        "Correct: 'a deeper reply as well' introduces an additional, different argument — democratic accountability — supporting the same defence of variation already begun.",
        "Wrong: it presents a new line of reasoning (accountability), not an illustration of the preceding fit-to-need point."
      ],
      workedSolution: "Signpost analysis: 'as well' marks accumulation, and 'deeper reply' marks a new and stronger argument of the same kind. The paragraph then gives a distinct accountability argument for the same conclusion. That is option C.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-opinion-314",
      passageId: "psg-politics-304",
      type: "opinion",
      stem: "Which of the following is offered as the author's evaluative opinion rather than as a neutral description?",
      options: [
        "A national rule must be written for an imagined average citizen.",
        "Local decision-makers are closer to the conditions they govern.",
        "Voters can replace local decision-makers of whom they disapprove.",
        "There is nothing fair in itself about treating unlike places alike."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is presented as a structural feature of national rules, descriptive of how such rules must be framed, not a value judgment.",
        "Wrong: this states a factual relationship of proximity between local bodies and conditions, offered as description.",
        "Wrong: this describes a feature of local accountability (voters can replace officials), a factual claim rather than an evaluation.",
        "Correct: 'nothing fair in itself' is an explicit value judgment about fairness, the author's evaluative claim rather than a neutral description."
      ],
      workedSolution: "Separate evaluation from description. 'There is nothing fair in itself about treating unlike places alike' makes a judgment about fairness, marking it as opinion. The other three are descriptive claims about how rules and local bodies work. So the opinion is option D.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-315",
      passageId: "psg-science-305",
      type: "main",
      stem: "What is the main point the author is making?",
      options: [
        "Machine-learning models are too inaccurate to be useful in medicine.",
        "Accurate prediction does not amount to causal understanding, and only the latter remains reliable when conditions change.",
        "Scientists should abandon the search for causes now that prediction has improved.",
        "Correlations are always misleading and should be ignored."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author grants the models forecast 'with remarkable accuracy' and are 'useful for triage', so does not claim they are too inaccurate.",
        "Correct: the passage distinguishes prediction from explanation and argues that only a model capturing a causal mechanism 'will keep working when circumstances change'.",
        "Wrong: this is the 'tempting slogan' the author sets out to refute, not his conclusion.",
        "Wrong: the author calls the Friday correlation 'perfectly real and perfectly useful for triage', so does not say correlations should always be ignored."
      ],
      workedSolution: "The passage rejects the slogan that prediction can replace explanation, using the Friday-discharge case to show prediction may rest on a non-causal shadow, and concludes only causal understanding survives changing conditions. That is option B. A, C, and D each contradict explicit concessions or the thesis.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-316",
      passageId: "psg-science-305",
      type: "inference",
      stem: "From the passage, which of the following is best supported regarding a model that forecasts well today?",
      options: [
        "It must have identified the true causes of the outcome it forecasts.",
        "It will always continue to perform well no matter how circumstances change.",
        "It may fail after conditions change, because it cannot itself distinguish a cause from a mere correlate.",
        "It is certain to have relied on the day of the week as a predictor."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage's central point is that accurate prediction need not capture true causes, so 'must have identified' is exactly what the author denies.",
        "Wrong: only a model capturing a genuine mechanism keeps working through change; this is not guaranteed for any well-forecasting model.",
        "Correct: the author says a model that 'merely memorised yesterday's correlations' has forecasts that 'silently decay' when conditions shift and 'cannot tell us which of its inputs would survive'.",
        "Wrong: the day-of-week case is one illustrative example, not a feature every accurate model must share."
      ],
      workedSolution: "An inference must be supported by the text. The passage states a correlation-based predictor decays when conditions change and cannot identify which inputs are causal, so the supported conclusion is that a well-forecasting model may fail once conditions shift because it cannot tell a cause from a mere correlate. The claim that it 'must' have found the true causes reverses the thesis; the claim that it will 'always' keep performing ignores the cause/correlate distinction; and the claim that it relied on the day of the week treats one example as universal.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-317",
      passageId: "psg-science-305",
      type: "factinf",
      stem: "Which of the following does the passage present as a factual premise rather than as the author's own interpretive claim?",
      options: [
        "Prediction cannot supply the value that explanation does.",
        "Only knowledge of mechanisms can be safely steered by.",
        "A model that memorised correlations is hostage to the conditions under which they held.",
        "Machine-learning systems forecast outcomes such as hospital readmission with remarkable accuracy."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the author's interpretive thesis about the limits of prediction, not a reported fact.",
        "Wrong: this is the author's evaluative conclusion drawn at the end, an interpretive claim rather than a premise of record.",
        "Wrong: this is part of the author's reasoning about why correlation-based models decay, an interpretation rather than a stated fact.",
        "Correct: the opening states as a matter of record that such systems forecast readmission, fraud, and binding 'with remarkable accuracy'; the rest of the argument interprets this fact."
      ],
      workedSolution: "Separate reported facts from interpretive steps. The accuracy of these forecasts is stated as established background; the claims about explanation's value and what can be steered by are the author's interpretations built on it. So the fact is option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-318",
      passageId: "psg-science-305",
      type: "detail",
      stem: "According to the passage, why might forbidding Friday discharges leave patient outcomes untouched?",
      options: [
        "Because Friday discharges are too rare to matter.",
        "Because weekend staffing would automatically increase in response.",
        "Because the model would simply select a different day to flag.",
        "Because the day of discharge does not itself make anyone ill."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the passage never claims Friday discharges are rare; its point is that the day is not the cause.",
        "Wrong: the passage suggests reduced weekend staffing may be the real factor, but does not say banning Friday discharges would raise staffing.",
        "Wrong: the model's re-selecting another day is not given as the reason outcomes stay the same; the reason is the day's non-causal status.",
        "Correct: the passage states 'the day of the week does not make anyone ill' and may merely track staffing or case-mix, so acting on it 'could leave outcomes untouched'."
      ],
      workedSolution: "Explicit comprehension: the text explains that the day of the week 'does not make anyone ill' and only tracks staffing or case-mix, so intervening on it changes nothing causal. That is option D. The others are not stated as the reason.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-319",
      passageId: "psg-science-306",
      type: "vocab",
      stem: "As used in the passage, the phrase 'a novel organism wearing its name' means a creature that:",
      options: [
        "is genuinely the extinct species brought back to life",
        "has been given a scientific name for the first time",
        "is a new kind of animal merely labelled with the extinct species' name",
        "physically resembles the extinct species in every respect"
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is precisely the claim the author denies; he insists the result is 'not the extinct animal but a hybrid', so calling it the species genuinely brought back reverses the point.",
        "Wrong: 'wearing its name' refers to carrying the extinct species' name, not to receiving a formal scientific name for the first time.",
        "Correct: the author contrasts 'not the extinct animal but a hybrid' and says what is gained is 'a novel organism wearing its name', i.e. a new creature that merely bears the old label.",
        "Wrong: the passage stresses the creature is a hybrid that differs from the original, so 'resembles in every respect' contradicts the point."
      ],
      workedSolution: "Read the phrase in context: the engineered creature is 'not the extinct animal but a hybrid', and to call it resurrected is to mistake 'a passable imitation for the original'; it is 'a novel organism wearing its name'. So it is a new animal merely bearing the old name — the option stating it is a new kind of animal merely labelled with the extinct species' name (option C). The option claiming genuine resurrection is the very claim the author denies.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-implied-320",
      passageId: "psg-science-306",
      type: "implied",
      stem: "The passage implies, without stating it outright, that:",
      options: [
        "preserving a living species requires more than preserving its genome",
        "ancient DNA can now be recovered completely intact",
        "engineered animals are always healthier than their wild counterparts",
        "the mammoth's tundra habitat could be easily recreated"
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by arguing that a species is 'not merely a genome but a way of life' transmitted within a habitat, the author implies that conserving a species means conserving more than its genetic code.",
        "Wrong: the passage says ancient DNA 'survives only in degraded scraps', the opposite of being recoverable intact.",
        "Wrong: nothing is said about engineered animals being healthier; the point is they lack a world to live in.",
        "Wrong: the passage states 'the mammoth's tundra has gone', implying the habitat is not easily recreated."
      ],
      workedSolution: "Stated vs implied: the author explicitly says a species is more than a genome — it is a learned way of life in a habitat. The unstated but supported corollary is that saving a living species likewise demands more than its genome, option A. The others contradict explicit statements.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-321",
      passageId: "psg-science-306",
      type: "assume",
      stem: "The author's claim that de-extinction makes ongoing extinctions 'easier to permit' relies on which assumption?",
      options: [
        "People's willingness to prevent extinction depends partly on whether they believe it to be irreversible.",
        "All conservation scientists currently support de-extinction projects.",
        "Engineered hybrids will eventually be indistinguishable from the originals.",
        "Public funding for conservation is increasing every year."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the argument that the 'promise of reversal corrodes the urgency' only works if belief in reversibility weakens people's resolve to prevent loss; that psychological link is assumed.",
        "Wrong: the argument does not need universal support among scientists; it concerns the effect of the promise on public urgency, not scientists' opinions.",
        "Wrong: the author actually argues hybrids are not the originals; needing them to become indistinguishable would undercut his case, so this is not an assumption it relies on.",
        "Wrong: rising funding is irrelevant to whether the belief in reversibility erodes the urgency to prevent extinction."
      ],
      workedSolution: "Negation test: if believing extinction reversible had no effect on people's resolve to prevent it, the 'easier to permit' claim collapses. So the argument assumes that belief does affect resolve, option A. B and D are off-topic; C runs against the author's own thesis.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-322",
      passageId: "psg-history-307",
      type: "standpoint",
      stem: "Which best describes the author's view of the role of individuals in history?",
      options: [
        "Individuals never have any effect on the course of events.",
        "Individuals are the true authors of historical change, as popular history holds.",
        "Only military leaders, not other individuals, can influence history.",
        "Individuals can affect events but are usually the agents of larger forces rather than their prime movers."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly grants that 'a blunder at a decisive moment can certainly alter the course of events', so denies that individuals never matter.",
        "Wrong: this is the great-man view the author sets out to refute, not his own position.",
        "Wrong: the general is only one example; the author's claim is general, not restricted to military leaders.",
        "Correct: he concedes individuals can matter but argues they are 'the agent through whom impersonal forces found expression', not prime movers."
      ],
      workedSolution: "The author rejects the great-man theory yet refuses the opposite extreme: individuals can alter events but operate as conduits for impersonal forces, not as their authors. That qualified view is option D. A overstates his denial; C is the rejected view; D over-restricts it.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-323",
      passageId: "psg-history-307",
      type: "structure",
      stem: "What is the role of the question 'whether the celebrated figure could have been replaced' in the third paragraph?",
      options: [
        "It is the central thesis of the entire passage.",
        "It is a rhetorical question the author leaves unanswered.",
        "It supplies a test the author uses to argue that conditions matter more than the particular individual.",
        "It concedes that famous individuals are in fact irreplaceable."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the thesis is the broader critique of the great-man theory; the replaceability question is a device serving that thesis, not the thesis itself.",
        "Wrong: the author answers it directly: such a leader can usually be replaced, while the conditions cannot.",
        "Correct: the author calls it 'a more honest test' and uses it to conclude the individual 'is far more replaceable than the conditions', supporting his case.",
        "Wrong: the author argues the figure is replaceable, so the question does not concede irreplaceability."
      ],
      workedSolution: "Identify the device's function. The replaceability question is introduced as 'a more honest test' and then answered to show conditions outweigh the individual. It is an analytical test supporting the thesis, option C, not the thesis itself and not left hanging.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-324",
      passageId: "psg-history-307",
      type: "factinf",
      stem: "Which of the following is presented as the author's inference rather than as a neutral statement of fact?",
      options: [
        "Contemporaries wrote about prominent leaders and monuments preserved them.",
        "The named individual is better understood as the agent through whom impersonal forces found expression.",
        "Popular history often explains the past through towering individuals.",
        "A general's victory depends in part on supply lines and recruiting grounds."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that contemporaries recorded leaders and monuments preserved them is offered as a factual observation about the historical record.",
        "Correct: recasting the individual as a mere 'agent through whom impersonal forces found expression' is the author's interpretive conclusion, drawn from his argument rather than reported as plain fact.",
        "Wrong: that popular history favours great individuals is stated as an observable habit, a descriptive premise.",
        "Wrong: the dependence of victory on supply lines and recruiting grounds is offered as a factual feature of how battles are won, supporting the inference rather than being it."
      ],
      workedSolution: "Distinguish reported facts from the author's inferential conclusions. The recording habits, the popular-history habit, and the material basis of victory are presented as facts; the reframing of the individual as a conduit for impersonal forces is the conclusion drawn from them. So the inference is option B.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-325",
      passageId: "psg-history-307",
      type: "implied",
      stem: "The passage implies that the fame of a historical leader is:",
      options: [
        "proof that the leader single-handedly shaped the age",
        "evidence that the leader was irreplaceable",
        "irrelevant to how historians should study the past",
        "an unreliable guide to how much that leader actually caused events"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the great-man conclusion the author rejects, the opposite of his implication.",
        "Wrong: the author argues the famous figure is replaceable, so fame is not implied to show irreplaceability.",
        "Wrong: the author does not say fame is irrelevant to study; he says it must not be confused with causation, which is a different claim.",
        "Correct: by arguing the approach 'mistakes visibility for causation' — the leader is simply the most visible part of the record — the author implies fame is a poor measure of real causal weight."
      ],
      workedSolution: "Stated vs implied: the explicit charge is that the great-man approach 'mistakes visibility for causation'. The unstated but supported step is that a leader's fame (visibility) is an unreliable index of causal importance, option D. The others contradict the argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-326",
      passageId: "psg-history-308",
      type: "inference",
      stem: "Which conclusion does the passage most strongly support?",
      options: [
        "Historians who make causal claims are already committed to some counterfactual reasoning.",
        "Counterfactual history is always unreliable and should be abandoned.",
        "It is possible to write history containing no causal claims at all.",
        "The longer a chain of counterfactual reasoning, the more reliable it becomes."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author argues that 'every causal statement in history... smuggles in a counterfactual', so making causal claims commits one to counterfactual reasoning.",
        "Wrong: the author defends the disciplined counterfactual and says the remedy for bad versions is good ones, not abandonment.",
        "Wrong: the passage treats causal claims as pervasive and counterfactual-laden, implying one cannot simply avoid them, not that history without causes is possible.",
        "Wrong: the author says the fanciful kind drifts 'further from anything the evidence can constrain' with each step, so longer chains are less reliable, not more."
      ],
      workedSolution: "An inference must follow from the text. The author's key move is that a cause is something whose absence would have changed the outcome, so every causal claim embeds a counterfactual. Hence historians making causal claims already reason counterfactually, option A. The others contradict explicit statements.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-327",
      passageId: "psg-history-308",
      type: "detail",
      stem: "According to the passage, what distinguishes a disciplined counterfactual from a fanciful one?",
      options: [
        "The disciplined kind alters one variable and holds the rest of the known context fixed.",
        "The disciplined kind ignores the surviving documentary evidence.",
        "The disciplined kind builds long chains of consequence from a single change.",
        "The disciplined kind avoids making any causal claims."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage says the legitimate counterfactual 'alters one variable, holds the rest of the known context fixed, and asks what the documented circumstances would plausibly have allowed'.",
        "Wrong: the disciplined kind is 'disciplined by the same evidence as ordinary history', so it heeds the evidence rather than ignoring it.",
        "Wrong: building long chains from one change describes the fanciful kind the author criticises, not the disciplined one.",
        "Wrong: the disciplined counterfactual is a tool for weighing causes, so it engages causal claims rather than avoiding them."
      ],
      workedSolution: "Explicit comprehension: the third paragraph defines the legitimate counterfactual as altering one variable, holding the rest fixed, and asking what the evidence allows. That is option A. The other options describe the fanciful kind or contradict the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-opinion-328",
      passageId: "psg-history-308",
      type: "opinion",
      stem: "Which sentence expresses the author's evaluative opinion rather than a neutral observation?",
      options: [
        "We cannot run the past a second time.",
        "A cause is something whose absence would have changed the outcome.",
        "The fanciful kind deserves the scorn it receives.",
        "Some historians have long been suspicious of the counterfactual question."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is a factual statement about the nature of the past, offered without evaluation.",
        "Wrong: this is presented as a definitional point about causation, descriptive rather than evaluative.",
        "Correct: saying the fanciful counterfactual 'deserves the scorn it receives' is an explicit value judgment endorsing that scorn.",
        "Wrong: this reports the existence of a scholarly attitude, a neutral observation about other historians."
      ],
      workedSolution: "Separate evaluation from description. 'Deserves the scorn it receives' passes judgment on the fanciful counterfactual, marking it as the author's opinion. The other three state facts or definitions without endorsement. So the opinion is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-329",
      passageId: "psg-literature-309",
      type: "main",
      stem: "Which of the following best states the author's central claim?",
      options: [
        "Content warnings amount to censorship and should be abolished.",
        "Content warnings, used sensibly, do not weaken engagement with difficult literature and may aid it.",
        "All distressing literature should carry detailed content warnings.",
        "Readers are too fragile to study disturbing texts without protection."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is closer to the opponents' view; the author argues a warning 'is not a wall' and removes nothing, the opposite of censorship.",
        "Correct: the author argues warnings take nothing away and a braced reader 'is often better placed to engage', while conceding the practice can be overdone.",
        "Wrong: the author warns against attaching notices to 'every faint shadow', so does not call for warnings on all distressing texts.",
        "Wrong: the author says a warned reader is still 'no less obliged to read and confront' the text, so does not portray readers as too fragile to study it."
      ],
      workedSolution: "The passage rebuts the charge that warnings are cowardly censorship: a warning is not a wall, takes nothing away, and can sharpen engagement, though it can be overdone. That balanced defence is option B. A and D echo the rejected view; C ignores the author's caveat.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-330",
      passageId: "psg-literature-309",
      type: "tone",
      stem: "The author's description of the opponents' stance as 'this indignation is overblown' conveys a tone that is:",
      options: [
        "neutral and non-committal",
        "openly contemptuous and mocking",
        "measuredly critical of the opponents' reaction",
        "anxious and self-doubting"
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: 'overblown' is an evaluative verdict on the opponents, not a neutral or non-committal phrasing.",
        "Wrong: the author argues against the opponents with measured reasons and even concedes warnings can be overdone, so the tone is not contemptuous mockery.",
        "Correct: calling the indignation 'overblown' and resting on 'a misunderstanding' is a clear but controlled criticism, in keeping with the author's reasoned, qualified case.",
        "Wrong: the author writes with confident, structured argument, not anxiety or self-doubt."
      ],
      workedSolution: "Tone from word choice: 'overblown' judges the opponents' reaction as excessive, but the author then reasons carefully and grants a caveat, keeping the criticism measured rather than savage. That is option C.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-331",
      passageId: "psg-literature-309",
      type: "vocab",
      stem: "As used in the passage, 'ambushed' (in 'she is merely not ambushed by it') most nearly means:",
      options: [
        "physically attacked",
        "permanently shielded from harm",
        "criticised in public",
        "taken by surprise without warning"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the literal military sense of attack does not fit; the context is about encountering distressing content unexpectedly, not physical assault.",
        "Wrong: 'ambushed' refers to being surprised, not shielded; indeed the reader is still required to confront the material.",
        "Wrong: public criticism has no foothold here; the sentence concerns unexpected exposure to disturbing content.",
        "Correct: the contrast is that a forewarned reader still confronts the chapter but is not caught off guard, so 'ambushed' means taken by surprise."
      ],
      workedSolution: "Read in context: a warned reader 'is no less obliged to read and confront' the chapter, 'she is merely not ambushed by it'. The contrast with forewarning fixes the sense as being taken by surprise, option D. The literal attack sense (A) is the dictionary-association trap.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-implied-332",
      passageId: "psg-literature-309",
      type: "implied",
      stem: "The passage implies that sudden, unwarned exposure to disturbing material can:",
      options: [
        "deepen a reader's engagement with the text",
        "provoke a self-protective numbness that hampers genuine engagement",
        "be entirely prevented by careful teaching",
        "make a text less disturbing than it really is"
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author argues the braced reader engages better, so sudden shock is not implied to deepen engagement; this reverses the point.",
        "Correct: the author says a reader can be 'knocked into the numb self-protection that sudden shock provokes', implying unwarned shock can blunt real engagement.",
        "Wrong: the passage suggests warnings help, but does not claim teaching can entirely prevent exposure to disturbing material.",
        "Wrong: nothing implies shock makes a text less disturbing; the concern is with how the reader copes, not the text's intensity."
      ],
      workedSolution: "Stated vs implied: the author writes that sudden shock can knock a reader into 'numb self-protection'. The supported implication is that unwarned exposure can produce a numbness that hampers genuine engagement, option B. The others contradict or overreach the text.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-333",
      passageId: "psg-literature-310",
      type: "standpoint",
      stem: "What is the author's attitude toward the 'lottery' objection to literary prizes?",
      options: [
        "He accepts it fully and concludes that prizes are worthless.",
        "He grants its accuracy but argues it misjudges the purpose of prizes.",
        "He rejects it as factually mistaken about how panels choose winners.",
        "He ignores it in favour of an unrelated argument."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author argues prizes do valuable work, so does not conclude they are worthless.",
        "Correct: he calls the objection 'half right' and 'accurate as far as it goes', yet says it is 'wholly beside the point' because it judges prizes by a standard they do not claim to meet.",
        "Wrong: he concedes there is 'no objective ranking of novels', so he does not call the objection factually mistaken.",
        "Wrong: the whole passage engages the lottery objection directly rather than ignoring it."
      ],
      workedSolution: "The author concedes the objection's factual core (no objective ranking) but denies its relevance, since prizes aim at advocacy, not measurement. That is concede-accuracy-but-deny-relevance, option B. A and C misstate his concession; D is false since he addresses it throughout.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-334",
      passageId: "psg-literature-310",
      type: "detail",
      stem: "According to the passage, why do most published books 'sink without trace'?",
      options: [
        "Because they are of poor quality.",
        "Because literary prizes deliberately suppress them.",
        "Because no one points to them, not because they are bad.",
        "Because readers prefer older books to new ones."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage explicitly says they sink 'not because they are bad', directly excluding poor quality as the reason.",
        "Wrong: prizes are described as 'pointing' to books and lifting them out of the deluge, not suppressing other titles.",
        "Correct: the passage states most books sink 'not because they are bad but because no one points to them'.",
        "Wrong: a preference for older books is never mentioned; the stated cause is lack of attention."
      ],
      workedSolution: "Explicit comprehension: the text says most books sink 'not because they are bad but because no one points to them'. That matches the option stating books sink because no one points to them, not because they are bad (option C). Option A is explicitly denied by the passage; options B and D find no support in it.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-335",
      passageId: "psg-literature-310",
      type: "inference",
      stem: "Which of the following is best supported by the passage?",
      options: [
        "A prize can serve literature even when many readers disagree with its choice.",
        "A prize is valuable only if the public agrees with its verdict.",
        "The best novel of a year can be identified objectively by a careful panel.",
        "Disagreement with a prize's choice shows the prize has failed."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says even readers who 'end up disagreeing' are drawn into reading and arguing over books, and 'that argument is itself a service to literature'.",
        "Wrong: the passage values the argument a prize provokes regardless of agreement, so public agreement is not the measure of value.",
        "Wrong: the author insists 'there is no objective ranking of novels', directly contradicting this.",
        "Wrong: the author treats disagreement as part of the valuable argument a prize stirs, not as evidence of failure."
      ],
      workedSolution: "An inference must be supported. The passage states that even dissenting readers are drawn into argument, which 'is itself a service to literature'. So a prize can serve literature despite disagreement, option A. B and D invert the author's view; C contradicts an explicit denial.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-336",
      passageId: "psg-currentaffairs-311",
      type: "structure",
      stem: "How is the body of the passage (its two central paragraphs) organised?",
      options: [
        "As a single extended example of one worker's experience.",
        "As a chronological history of the gig economy.",
        "As two distinct difficulties raised against the appeal to flexibility.",
        "As a list of policy recommendations for regulators."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the body does not follow one worker's story; it advances two separate analytical objections.",
        "Wrong: there is no chronological narrative of the gig economy's development.",
        "Correct: the paragraphs open 'The first difficulty is...' and 'The second difficulty is...', presenting two distinct problems with the flexibility argument.",
        "Wrong: the author explicitly defers the regulatory question, saying it 'is a question for careful regulation, not a slogan', rather than listing recommendations."
      ],
      workedSolution: "Map the structure via signposts. The two central paragraphs begin 'The first difficulty' and 'The second difficulty', laying out two separate objections to the flexibility appeal. That is option C. The others mischaracterise the organisation.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-337",
      passageId: "psg-currentaffairs-311",
      type: "factinf",
      stem: "Which of the following is presented as the author's interpretive claim rather than as a description of how the platforms operate?",
      options: [
        "The platform sets the pay per task and can adjust it without notice.",
        "To describe the relationship as a fair exchange of flexibility is to use one word for two unequal things.",
        "A worker's ranking can fall each time he declines a job.",
        "The platform can deactivate an account at will."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this describes a concrete feature of how platforms set pay, offered as a factual description of their operation.",
        "Correct: judging that calling the arrangement a 'fair exchange' misuses one word for 'two very unequal things' is the author's interpretive verdict, not a description of platform mechanics.",
        "Wrong: the falling ranking on declining work is described as a factual feature of the platform's system.",
        "Wrong: that platforms can deactivate accounts at will is given as a factual description of their power."
      ],
      workedSolution: "Separate descriptive facts from the author's interpretation. The pay-setting, ranking, and deactivation claims describe how platforms operate; the verdict that 'fair exchange' misdescribes the relationship is the author's interpretive judgment. So the interpretive claim is option B.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-vocab-338",
      passageId: "psg-currentaffairs-311",
      type: "vocab",
      stem: "As used in the passage, 'lopsided' (in 'a relationship so lopsided') most nearly means:",
      options: [
        "physically tilted to one side",
        "frequently changing",
        "mutually agreed",
        "unbalanced in favour of one party"
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the literal sense of a physical tilt does not fit a description of a working relationship.",
        "Wrong: 'lopsided' here marks imbalance of power, not frequency of change.",
        "Wrong: the point is precisely that the exchange is unequal, so 'mutually agreed' is the opposite of the intended sense.",
        "Correct: the surrounding text contrasts the worker's thin freedom with the platform's genuine flexibility, so 'lopsided' describes a relationship weighted heavily toward one side."
      ],
      workedSolution: "Read in context: the platform keeps 'the genuine flexibility' while the worker is free 'in a thin sense only', and the author calls the relationship 'so lopsided'. That fixes the sense as power tilted to one party, option D. The literal physical tilt (A) is the dictionary trap.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-factinf-339",
      passageId: "psg-currentaffairs-311",
      type: "factinf",
      stem: "Which statement is offered as the author's inference rather than as a reported feature of the gig-economy arrangement?",
      options: [
        "Workers can decline individual jobs on the platforms.",
        "Conventional employment normally carries protections such as sick pay and insurance.",
        "Some workers depend on a platform for their living.",
        "The platforms present the trade-off between flexibility and protection as inevitable because the absence of protections makes their model cheap."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that workers can decline jobs is stated as a factual feature of how the platforms work.",
        "Wrong: that conventional employment normally carries such protections is offered as a background fact.",
        "Wrong: that some workers depend on a platform for a living is presented as a factual premise of the argument.",
        "Correct: the claim about why platforms portray the trade-off as inevitable — to protect a cheap model — is the author's inference about their motive, not a reported fact."
      ],
      workedSolution: "Distinguish reported facts from inferred motive. The ability to decline jobs, the existence of employment protections, and workers' dependence are stated as facts. The explanation of the platforms' motive (presenting the trade-off as inevitable to keep the model cheap) is the author's inference, option D.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-340",
      passageId: "psg-currentaffairs-312",
      type: "assume",
      stem: "The author's argument that open-plan offices reduce free conversation relies on which assumption?",
      options: [
        "People are less willing to speak freely when they can be observed and overheard.",
        "All employees dislike working near their colleagues.",
        "Noise has no effect on concentration.",
        "Walls are more expensive to build than open-plan layouts."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the claim that removing privacy makes people 'retreat' rather than converse only follows if being observable inhibits free speech; that link is the assumption.",
        "Wrong: the argument needs only that observability inhibits candour, not that all employees dislike proximity to colleagues; this is broader than required.",
        "Wrong: the author actually argues noise harms concentration, so this contradicts the passage rather than being an assumption it needs.",
        "Wrong: relative building costs are never mentioned and are irrelevant to whether open plans reduce candid conversation."
      ],
      workedSolution: "Negation test: if being observed did not inhibit candour, removing privacy would not reduce free conversation and the argument fails. So the argument assumes observability inhibits candour, option A. B is too broad; C contradicts the text; D is off-topic.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-341",
      passageId: "psg-currentaffairs-312",
      type: "opinion",
      stem: "Which of the following is the author's evaluative opinion rather than a neutral description of behaviour?",
      options: [
        "In open-plan spaces people often put on headphones and use messages instead of conversation.",
        "The worker who must reread a paragraph after each interruption is not collaborating but merely failing to think.",
        "Open-plan offices remove internal walls and partitions.",
        "A sensitive exchange may be postponed until it can be had unobserved."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this describes observed behaviour (headphones, messaging) in open offices, a descriptive claim.",
        "Correct: the verdict that the interrupted worker 'is not collaborating but merely failing to think' is a pointed evaluation, the author's judgment rather than a neutral description.",
        "Wrong: this simply states what open-plan design does physically, a description.",
        "Wrong: this describes a behavioural response (postponing a sensitive talk), offered as observation rather than evaluation."
      ],
      workedSolution: "Separate evaluation from description. The headphones, wall-removal, and postponed-conversation statements describe behaviour or design. 'Not collaborating but merely failing to think' delivers a judgment, marking it as the author's opinion. So the opinion is option B.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-342",
      passageId: "psg-currentaffairs-312",
      type: "tone",
      stem: "The final sentence — 'it mostly taught people new ways to hide' — chiefly conveys a tone that is:",
      options: [
        "wryly critical of the open-plan ideal",
        "warmly approving of open-plan design",
        "alarmed and fearful about workplace surveillance",
        "detached and purely statistical"
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: ending on the irony that knocking down walls 'taught people new ways to hide' delivers a pointed but understated criticism of the collaboration promise, matching the author's measured scepticism.",
        "Wrong: the sentence undercuts the open-plan ideal, so it is not approving.",
        "Wrong: the tone is ironic critique, not alarm or fear about surveillance.",
        "Wrong: the vivid, ironic phrasing is the opposite of detached statistical reporting."
      ],
      workedSolution: "Tone from phrasing: the closing line turns the collaboration promise on its head with gentle irony ('new ways to hide'), a controlled, critical flourish consistent with the passage's sceptical argument. That is wry criticism, option A.",
      difficulty: "medium",
      source: "illustrative"
    }
  );

  /* ESSAY PROMPTS — 3 illustrative, theme-tagged, realistic LNAT style. */
  DATA.prompts.push(
    {
      id: "prompt-301",
      theme: "education-society",
      text: "“Universities should select students solely on academic merit, ignoring their social background.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-302",
      theme: "media-tech-environment",
      text: "Should social-media companies be held legally responsible for the content their users post?",
      source: "illustrative"
    },
    {
      id: "prompt-303",
      theme: "politics-governance",
      text: "Is it ever justifiable for a government to keep information secret from the public?",
      source: "illustrative"
    }
  );

  /* MOCK — full mock-03. References ONLY the 12 passages, 42 questions, 3 prompts above. */
  DATA.mocks.push({
    id: "mock-03",
    title: "Mock Paper 3",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-philosophy-301",
        "psg-philosophy-302",
        "psg-politics-303",
        "psg-politics-304",
        "psg-science-305",
        "psg-science-306",
        "psg-history-307",
        "psg-history-308",
        "psg-literature-309",
        "psg-literature-310",
        "psg-currentaffairs-311",
        "psg-currentaffairs-312"
      ],
      questionIds: [
        "q-main-301",
        "q-assume-302",
        "q-standpoint-303",
        "q-vocab-304",
        "q-inference-305",
        "q-structure-306",
        "q-tone-307",
        "q-main-308",
        "q-detail-309",
        "q-assume-310",
        "q-implied-311",
        "q-standpoint-312",
        "q-structure-313",
        "q-opinion-314",
        "q-main-315",
        "q-inference-316",
        "q-factinf-317",
        "q-detail-318",
        "q-vocab-319",
        "q-implied-320",
        "q-assume-321",
        "q-standpoint-322",
        "q-structure-323",
        "q-factinf-324",
        "q-implied-325",
        "q-inference-326",
        "q-detail-327",
        "q-opinion-328",
        "q-main-329",
        "q-tone-330",
        "q-vocab-331",
        "q-implied-332",
        "q-standpoint-333",
        "q-detail-334",
        "q-inference-335",
        "q-structure-336",
        "q-factinf-337",
        "q-vocab-338",
        "q-factinf-339",
        "q-assume-340",
        "q-opinion-341",
        "q-tone-342"
      ]
    },
    sectionB: {
      promptIds: [
        "prompt-301",
        "prompt-302",
        "prompt-303"
      ]
    }
  });
})(typeof window !== "undefined" ? window : this);
