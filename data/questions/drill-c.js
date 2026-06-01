/*
 * drill-c.js — Section A DRILL set: ASSUMPTION (4a) and OPINION-vs-ASSUMPTION (4b).
 *
 * Type-focused practice for the LNAT study site. NOT real exam content; every
 * item is source:"illustrative". This file assigns into the buckets that
 * loader.js creates on window.LNAT_DATA, so it MUST load AFTER loader.js.
 *
 * DRILL passages are disjoint from every mock: they use ONLY the reserved
 * 9xx range owned by this lane (psg-<genre>-941 .. psg-<genre>-960). All
 * passages are reserved:false so they are usable in the drill UI. English only.
 *
 * Authoring contract (data/SCHEMA.md + research §5 cluster 4):
 *   - ASSUMPTION (q-assume): a premise the argument REQUIRES. Most stems ask for
 *     the single UNSTATED premise — something the author never says but that must
 *     hold for the inference — with distractors that are contradicted or simply
 *     unnecessary. A few stems instead ask which premise the argument "rests on";
 *     there the key may be a premise the author also states, and the read each
 *     time follows exactly what the stem asks.
 *   - OPINION vs ASSUMPTION (q-opinion): separates a view the author EXPRESSES
 *     on the page from an unstated underpinning (or from neutral reportage /
 *     fact). The correct option matches exactly what the stem asks for.
 *
 * Answer-position distribution across this file's 32 items: A=8, B=8, C=10, D=6.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    // loader.js must run first. Fail loudly rather than silently creating buckets.
    (root.console || { error: function () {} }).error(
      "[LNAT] drill-c.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ====================================================================== *
   * PASSAGES — 11 argumentative passages, varied genres, 220-340 words,
   * self-contained, reserved:false, source:"illustrative". IDs 941-951.
   * ====================================================================== */
  DATA.passages.push(
    {
      id: "psg-philosophy-941",
      genre: "philosophy",
      title: "When the Leak Is the Lesser Wrong",
      body:
        "An employee who signs a contract of confidentiality, or a civil servant " +
        "sworn to secrecy, takes on a genuine obligation, and to break it is to " +
        "betray a trust that others have relied upon. Those who leak such " +
        "information are therefore right to be met with suspicion rather than " +
        "applause, for a world in which every confidence could be broken at will " +
        "would be one in which no confidence could safely be given. Yet the duty to " +
        "keep a secret, real as it is, was never meant to be absolute. We do not " +
        "think a promise binds a doctor to conceal that a colleague is operating " +
        "drunk, and the reason is plain: the obligation of secrecy is a means to " +
        "good ends, and it cannot sensibly be invoked to shield the very harms it " +
        "exists to prevent. When confidentiality is bent to hide a serious wrong " +
        "from those it endangers, the leaker who exposes it is not so much breaking " +
        "the rule as honouring its purpose. This does not licence every disclosure " +
        "that flatters its author as brave. A leak earns its justification only " +
        "under conditions: the wrong revealed must be grave, the ordinary channels " +
        "of complaint must have been tried or be plainly useless, and no more must " +
        "be exposed than the wrong itself requires. The whistleblower who dumps a " +
        "ministry's secrets indiscriminately, careless of who is endangered, claims " +
        "a licence the public interest does not grant. What the public interest does " +
        "grant, where those conditions hold, is narrower and harder: a right to set " +
        "the duty of silence aside precisely when keeping silent would make one the " +
        "accomplice of the wrong one has been sworn to conceal.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-942",
      genre: "politics",
      title: "The Case for a Year of National Service",
      body:
        "Proposals for a compulsory year of national service, civic or military, are " +
        "usually defended on the grounds of what the young would gain: discipline, " +
        "skills, a spell of structure before adult life. That case is real but it is " +
        "not the strongest one, and pitched at the level of personal benefit it " +
        "invites the obvious retort that people should choose their own paths. The " +
        "deeper argument is not about the individual conscript at all; it is about " +
        "the republic. A democracy asks its citizens to share burdens, to trust " +
        "strangers, and to accept the verdicts of people whose lives they will never " +
        "see, and these are not natural dispositions. They are habits, and habits " +
        "must be learned somewhere. A society sorted from birth into separate " +
        "schools, separate neighbourhoods, and separate screens offers fewer and " +
        "fewer occasions on which the banker's son and the cleaner's daughter are " +
        "obliged to depend on one another. National service would manufacture, " +
        "artificially and on purpose, exactly the mixing that such a society no " +
        "longer produces by accident. The point is not that a year of service makes " +
        "better individuals, though it might. The point is that it makes the kind of " +
        "citizen a shared democracy quietly relies on and can no longer assume, the " +
        "person who has once had to cooperate across the lines that ordinarily keep " +
        "us apart. A republic that will not arrange such encounters anywhere should " +
        "not be surprised when its citizens stop believing they belong to one " +
        "another at all.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-943",
      genre: "science",
      title: "The Floor That Frees",
      body:
        "Whenever an unconditional basic income is proposed, paying every citizen a " +
        "regular sum with no strings attached, the reflex objection is that free " +
        "money must make people stop working. The worry sounds like common sense, " +
        "but it is a claim about how people behave, and the evidence we now have does " +
        "not support it. When cash has actually been handed to people without " +
        "conditions, in trials from Finland to Kenya to the towns of the American " +
        "Midwest, the recipients did not, in the main, abandon their jobs. Hours " +
        "worked fell only slightly, and where they fell it was mothers of young " +
        "children and teenagers staying longer in school who accounted for most of " +
        "the drop, hardly the idle the objection imagines. What the trials did show " +
        "was subtler and more telling. Freed from the threat of immediate " +
        "destitution, people behaved less like cornered animals and more like " +
        "planners. They left jobs that were exploitative or going nowhere and " +
        "searched longer for work that fit, rather than seizing the first wage on " +
        "offer out of fear. They started small enterprises that a single bad month " +
        "would once have strangled in the cradle. A floor beneath a person, it turns " +
        "out, is not a hammock but a springboard, and an economy in which workers " +
        "can refuse the worst bargains is one in which the worst bargains must " +
        "improve. There is a deeper case still, beyond the ledger of hours and " +
        "earnings. Every existing welfare system spends a fortune deciding who is " +
        "deserving, policing claimants, and stigmatising those who ask for help, and " +
        "much of that apparatus exists to solve a problem the trials suggest is " +
        "largely imaginary. An income paid to all, like a vote or a public road, " +
        "asks no one to prove their worth before they may live. A society confident " +
        "enough to trust its members with that much can stop treating poverty as a " +
        "character flaw to be audited.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-944",
      genre: "history",
      title: "The Wisdom That Cannot State Its Reasons",
      body:
        "A confident modern temper holds that any inherited practice must justify " +
        "itself at the bar of reason or be swept away. If no one can explain why a " +
        "custom exists, the thinking goes, the custom is mere superstition and we " +
        "are free, even obliged, to discard it. There is something bracing in this, " +
        "and many a cruel tradition has rightly fallen to exactly such questioning. " +
        "Yet the principle, stated so broadly, rests on a quiet overconfidence. " +
        "Traditions are not, in the main, theories someone once proposed and wrote " +
        "down; they are the settled residue of countless small trials and errors, " +
        "winnowed over generations by the simple fact that communities observing " +
        "them tended to fare a little better than those that did not. The reasons " +
        "for such a practice may have been lost, or may never have been articulated " +
        "by anyone, and still the practice can encode hard-won knowledge that no " +
        "living person could reconstruct from first principles. To demand that every " +
        "custom produce its rationale on request is therefore to assume that whatever " +
        "cannot be explained cannot be wise, and that is precisely the assumption a " +
        "long history of practices outliving their explanations should make us " +
        "doubt. The honest course is neither blind reverence nor brisk demolition. " +
        "It is to treat an old practice as a witness whose testimony we do not fully " +
        "understand, to be questioned carefully rather than either obeyed without " +
        "thought or dismissed for failing to argue its own case.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-945",
      genre: "currentaffairs",
      title: "The Shopper Cannot Vote with a Trolley",
      body:
        "We are urged, with growing insistence, to consume ethically: to boycott the " +
        "tainted brand, to pay the premium for the fair-trade label, to let the " +
        "checkout become a kind of ballot box in which each purchase casts a vote " +
        "for the world we want. The impulse is decent, and I would not mock it. But " +
        "the model of the shopper as citizen quietly misleads, and it misleads in a " +
        "way that serves the very interests it claims to discipline. A single " +
        "consumer's choices are too small to move a global supply chain, and the " +
        "consumer knows it, which is why ethical shopping so easily becomes a private " +
        "ritual of conscience rather than an instrument of change. Worse, by framing " +
        "harm as something each of us purchases or declines individually, the model " +
        "lifts the burden from the institutions that actually set the terms, the " +
        "firms that organise production and the governments that regulate them, and " +
        "lays it on the shopper standing tired before a wall of near-identical goods. " +
        "The factory does not reform because a few buyers frown at its label; it " +
        "reforms when a law compels it or a movement shames its whole sector at once. " +
        "To treat consumption as the chief lever of justice is thus to choose the one " +
        "lever almost designed not to work, and to let those with real power present " +
        "our individual guilt as though it were the problem. The remedy for a harm " +
        "produced collectively is not a better-curated trolley. It is the slower, " +
        "less flattering work of acting as citizens together, where the choices are " +
        "binding on everyone and not merely on the conscientious few.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-946",
      genre: "literature",
      title: "When the Story Is Really an Advertisement",
      body:
        "A great deal of what is published for children now arrives already tied to " +
        "a toy, a film, or a franchise waiting to be bought. The book is no longer " +
        "quite the point; it is a doorway into a catalogue, and its characters are " +
        "less people than products with plots attached. Defenders say this is " +
        "harmless, even useful: if a licensed annual gets a reluctant child reading " +
        "at all, who are we to sneer? The objection has force, and I do not doubt " +
        "that a child may stumble into a real love of books through the unlikeliest " +
        "door. But the worry is not about literacy in the narrow sense of decoding " +
        "words. It is about what a story teaches a child to want from a story. A tale " +
        "built to sell something must keep its young reader pleasantly wanting more, " +
        "never unsettled, never made to sit with a feeling that resists resolution, " +
        "because discomfort is bad for business and an unhappy customer does not " +
        "return. The genuinely formative children's book does the opposite. It risks " +
        "the strange, the sad, the unresolved; it trusts the child to bear a little " +
        "darkness and to be enlarged by it. A diet of stories engineered chiefly to " +
        "move merchandise trains a child to expect of every narrative only the safe " +
        "pleasures of the familiar, and that expectation, carried into adult life, " +
        "is exactly the appetite a serious book must overcome. The danger is not that " +
        "the child reads the wrong book. It is that the child learns the wrong reason " +
        "for reading at all.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-947",
      genre: "philosophy",
      title: "The Limits of the Precautionary Principle",
      body:
        "Faced with a new technology whose risks are not yet understood, many urge " +
        "us to follow the precautionary principle: where an action might cause " +
        "serious harm, the burden of proof falls on those who would proceed, and in " +
        "the absence of certainty we should hold back. As a corrective to reckless " +
        "optimism this has its place. But pressed too far the principle devours " +
        "itself, for inaction is not a safe harbour outside the reach of risk. " +
        "Declining to develop a new vaccine, or to build a new source of clean " +
        "energy, carries its own dangers, the diseases left unchecked and the " +
        "emissions left unabated, and these harms are no less real for being the " +
        "consequences of caution rather than of daring. A principle that weighs only " +
        "the hazards of acting, while treating the status quo as a costless default, " +
        "is not neutral between risks; it is systematically biased toward whatever " +
        "we happen to be doing already. The honest question is never simply whether " +
        "a course of action might do harm, since every course, including standing " +
        "still, might do harm. It is which of the available risks, those of moving " +
        "and those of not moving, is the graver and the better understood. A " +
        "precaution that refuses to ask that comparative question does not protect " +
        "us from danger. It merely hides one set of dangers behind another and calls " +
        "the concealment prudence.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-948",
      genre: "science",
      title: "Why Spend on Space While the Earth Waits",
      body:
        "The objection is as old as the rockets themselves: with hunger, disease, " +
        "and want unrelieved on the ground, how can we justify pouring fortunes into " +
        "the empty sky? Put that way the question seems to answer itself, and the " +
        "money for the next probe looks like a luxury stolen from the needy. Yet the " +
        "argument proves too much, for it would forbid almost any expenditure that " +
        "is not immediate relief, and we do not in fact believe that. The deeper " +
        "flaw is the assumption that a pound not spent on a telescope would " +
        "otherwise have reached a hungry child. It would not; the budgets are set by " +
        "politics, not by a single moral ledger, and cancelling the mission far more " +
        "often funds a tax cut or another warship than a meal. There is, besides, a " +
        "narrowness in measuring the worth of an endeavour purely by the suffering " +
        "it relieves this year. The same logic, consistently applied, would have " +
        "stopped us mapping the ocean floor or decoding the genome, undertakings " +
        "whose vast later benefits no accountant of the moment could have scored. " +
        "Space science has already returned the satellites that warn of famine and " +
        "track a warming climate, dividends invisible to anyone totting up costs at " +
        "the launch. None of this licenses spending without limit or scrutiny. It is " +
        "only to insist that 'feed the poor first' is not the knockdown reply it " +
        "pretends to be, and that a civilisation which abandoned every long horizon " +
        "until the last want was met would, in the name of compassion, have given up " +
        "on the future entirely.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-949",
      genre: "politics",
      title: "The Lawbreaker Who Asks to Be Arrested",
      body:
        "Those who break the law in protest are often met with a simple rebuke: in a " +
        "democracy there are ballots and courts, so why take to the streets and defy " +
        "the rules the rest of us obey? The challenge deserves an answer, and the " +
        "answer is not that the protester is above the law. It is that civil " +
        "disobedience, properly understood, is a peculiar kind of lawbreaking that " +
        "affirms the very legal order it appears to flout. The genuine practitioner " +
        "breaks one law openly, accepts the penalty, and submits to arrest precisely " +
        "in order to dramatise an injustice that ordinary politics has failed to " +
        "remedy. This willingness to bear the punishment is what separates the civil " +
        "disobedient from the common criminal, who breaks the law for private gain " +
        "and hopes to escape. The disobedient pays the price publicly, and by paying " +
        "it declares that he still recognises the authority of the system, asking it " +
        "to live up to its own professed principles rather than seeking to overthrow " +
        "it. Such action earns its legitimacy, however, only under conditions: the " +
        "cause must be a serious injustice, the lawful channels must have been tried " +
        "and found wanting, and the protest must stay non-violent, for violence " +
        "abandons the appeal to conscience that is the method's whole justification. " +
        "Where those conditions hold, breaking the law can be not an assault on the " +
        "rule of law but one of its sharpest instruments, the means by which a " +
        "democracy is recalled to commitments it has begun to betray.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-950",
      genre: "currentaffairs",
      title: "The False Economy of the Cheap Garment",
      body:
        "A shirt that costs the price of a sandwich seems, at the till, an " +
        "unambiguous bargain, and shoppers congratulate themselves on the saving. " +
        "But the figure on the price tag is not the price of the shirt; it is only " +
        "the portion of that price the buyer happens to pay. The rest is met " +
        "elsewhere and by others. It is met by the worker whose wage is squeezed to " +
        "keep the number low, by the river that receives the dye the factory was too " +
        "cheap to treat, and by the future buyer of nothing in particular who will " +
        "inherit a warming atmosphere and a landfill swollen with garments worn " +
        "twice and discarded. These costs are real; they have simply been moved off " +
        "the receipt and onto people and places with no say in the transaction. To " +
        "call such a shirt cheap is therefore to mistake a transfer for a saving. " +
        "The expense has not been eliminated, only relocated to those least able to " +
        "refuse it, and the apparent thrift of the wealthy shopper is underwritten " +
        "by the involuntary subsidy of the poor and of the unborn. None of this " +
        "requires us to suppose that every shopper is callous; most simply read the " +
        "tag and believe it. The deception lies in the price itself, which is " +
        "engineered to display a fraction and conceal the whole, and a society that " +
        "judges value by that fraction will keep mistaking its debts for its " +
        "bargains.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-951",
      genre: "philosophy",
      title: "Why Forgiveness Need Not Wait for an Apology",
      body:
        "It is widely held that forgiveness must be earned: the wrongdoer repents, " +
        "and only then may the wronged release their resentment. On this view " +
        "forgiveness is a transaction, a response owed to contrition and withheld " +
        "where contrition is absent. There is something to the picture, for an " +
        "apology can make forgiveness easier and can restore a relationship in a way " +
        "that unilateral forgiveness cannot. But to make repentance a precondition " +
        "is to misunderstand whom forgiveness primarily serves. Resentment, nursed " +
        "over years, is a weight carried by the person who was wronged, not by the " +
        "one who wronged them; the offender often sleeps soundly while the victim " +
        "rehearses the injury nightly. To insist that the victim may set this burden " +
        "down only once the offender chooses to apologise is to hand the offender a " +
        "second power over the victim's peace, having already exercised a first in " +
        "the original wrong. Forgiveness understood as the release of corrosive " +
        "resentment is something the wronged can grant themselves, for their own " +
        "sake, whether or not an apology ever comes. This is not to excuse the wrong " +
        "or to pretend it did not happen; one may forgive and still judge the act " +
        "clearly, still decline to trust again. It is only to deny that the healing " +
        "of the injured must be held hostage to the conscience of the one who " +
        "injured them.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — ASSUMPTION (q-assume), 16 items.
   * An assumption is the UNSTATED premise the argument REQUIRES. Distractors
   * are: already stated, contradicted by the text, or simply unnecessary.
   * ====================================================================== */
  DATA.questions.push(
    // --- psg-philosophy-941 (Whistleblowing) — answer A (idx 0) -----------
    {
      id: "q-assume-941",
      passageId: "psg-philosophy-941",
      type: "assume",
      stem: "The argument that exposing a concealed wrong can be justified depends on which unstated assumption?",
      options: [
        "The duty to keep a confidence can be outweighed when keeping it would shield a serious harm.",
        "A contract of confidentiality places no genuine obligation on the person who signs it.",
        "Most secrets that organisations keep are concealing serious wrongdoing.",
        "Anyone who leaks information should be applauded as brave."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the leap from 'confidentiality is being used to hide a serious wrong' to 'the leaker can be justified' only works if the duty of secrecy is not absolute but can be overridden by a weightier interest. That bridging premise is never stated outright, yet the conclusion collapses without it.",
        "Wrong: the author insists the obligation is 'genuine' and that breaking it 'is to betray a trust', so denying that any obligation exists is contradicted by the text, not assumed.",
        "Wrong: the argument needs only that secrecy is sometimes bent to hide a wrong, not that 'most' secrets do so; the stronger empirical claim is never made and is not required.",
        "Wrong: the author says leakers are 'right to be met with suspicion rather than applause', so treating every leaker as brave contradicts the passage rather than grounding it.",
      ],
      workedSolution:
        "Find the missing premise that links 'secrecy is hiding a serious wrong' to 'the leak can be justified'. That link is the unstated principle in the first option: the duty of confidentiality is not absolute and can be outweighed when silence would shield harm. Denying any obligation is contradicted, the 'most secrets' claim overshoots, and 'always applaud leakers' is the reverse of the author's caution. So the required assumption is that the duty of secrecy can be outweighed.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-philosophy-941 (Whistleblowing) — answer C (idx 2) -----------
    {
      id: "q-assume-942",
      passageId: "psg-philosophy-941",
      type: "assume",
      stem: "In treating the demand that ordinary channels be tried first as a condition of a justified leak, the author assumes that:",
      options: [
        "Internal channels of complaint always succeed in correcting a wrong once they are used.",
        "A leak that skips available channels can never reveal anything of value.",
        "There usually exist lawful avenues of complaint that a person could pursue before resorting to disclosure.",
        "Every organisation deliberately designs its complaint procedures to fail."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author allows that ordinary channels may be 'plainly useless', so he does not assume they always succeed; that would make the condition pointless.",
        "Wrong: the argument does not need disclosures that skip channels to be worthless; it asks only that channels be tried or be useless first, a condition, not a claim about the value of what a hasty leak finds.",
        "Correct: making 'the ordinary channels of complaint must have been tried or be plainly useless' a precondition presupposes that such channels generally exist to be tried. If there were normally no avenue to pursue, requiring that one be attempted first would be incoherent, so their general availability is the silent premise.",
        "Wrong: the author treats channels as sometimes useless, not as universally rigged; the universal-sabotage claim is stronger than the argument uses and is never asserted.",
      ],
      workedSolution:
        "The condition that ordinary channels be tried before a leak only makes sense if such channels generally exist to try. That assumed availability is the unstated bridge in the third option. The always-succeed claim would void the condition, the never-valuable claim is not needed, and the universal-sabotage claim overshoots the author's 'plainly useless' hedge. So the required assumption is that lawful avenues of complaint usually exist to be pursued first.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-politics-942 (National service) — answer B (idx 1) -----------
    {
      id: "q-assume-943",
      passageId: "psg-politics-942",
      type: "assume",
      stem: "The argument that national service would benefit the republic depends on the unstated assumption that:",
      options: [
        "Military training is more valuable to a society than civilian forms of service.",
        "The cooperative habits a democracy relies on can be cultivated by arranged experience rather than being innate.",
        "Young people are generally unwilling to choose service for themselves.",
        "A year of service makes individuals more disciplined and skilled."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author treats civic and military service as equally eligible ('civic or military') and never ranks them, so this comparison is no part of the argument.",
        "Correct: the case rests on the claim that trust and cooperation across social lines are 'habits' that 'must be learned somewhere'. If those dispositions were innate, arranging encounters to instil them would be pointless, so their learnability is the premise the argument silently requires.",
        "Wrong: whether the young would volunteer is beside the civic argument; the author sets aside personal-benefit reasoning precisely to make a point about the republic, not about willingness.",
        "Wrong: the author explicitly downgrades this individual-benefit claim ('not the strongest one'), so it is not the premise the republic-focused argument leans on.",
      ],
      workedSolution:
        "The argument moves from 'a democracy relies on cooperative habits' to 'service should manufacture them'. That move works only if such habits are learned through arranged experience rather than inborn, which is the assumption the passage never states but cannot do without. The military-versus-civilian ranking is never made, willingness is set aside, and the discipline-and-skills benefit is expressly called the weaker case. So the required assumption is that the needed habits can be cultivated rather than being innate.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-politics-942 (National service) — answer D (idx 3) -----------
    {
      id: "q-assume-944",
      passageId: "psg-politics-942",
      type: "assume",
      stem: "The claim that a modern society 'no longer produces by accident' the mixing of citizens across class lines assumes that:",
      options: [
        "Compulsory service has already been tried and failed in most countries.",
        "Citizens of different backgrounds dislike one another and avoid contact deliberately.",
        "Where people are sorted from birth into separate schools, neighbourhoods, and media, they will rarely encounter those from other backgrounds.",
        "Schools are the only institution capable of mixing citizens of different classes."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage makes no claim about past attempts at service; the argument is about present social sorting, not a track record of policy.",
        "Wrong: the author attributes the lack of contact to structural separation ('separate schools, neighbourhoods, and screens'), not to mutual dislike; hostility is never asserted and is not needed.",
        "Correct: the claim that society no longer mixes people by accident only follows if being sorted into separate institutions means the different classes seldom meet. That link between structural separation and absent contact is the unstated premise driving the diagnosis.",
        "Wrong: the argument needs many such occasions to have dwindled, not that schools uniquely provide them; indeed it cites neighbourhoods and screens too, so 'only schools' is both unstated and too strong.",
      ],
      workedSolution:
        "The author infers that mixing no longer happens spontaneously from the fact that people are sorted into separate schools, neighbourhoods, and screens. That inference depends on the premise that such separation leaves the classes rarely meeting, which the passage assumes without stating. The failed-attempts claim, the mutual-dislike claim, and the schools-only claim are each absent or contradicted, so the required assumption is the link between separation and absent contact.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-science-943 (Basic income) — answer C (idx 2) ----------------
    {
      id: "q-assume-945",
      passageId: "psg-science-943",
      type: "assume",
      stem: "The move from 'recipients in the trials did not abandon their jobs' to 'a national basic income would not make people stop working' depends on the unstated assumption that:",
      options: [
        "Most people dislike paid work and would quit it given any opportunity.",
        "The basic income tested in the trials was large enough to live on comfortably.",
        "The way people responded in the limited trials would also hold under a permanent, country-wide scheme.",
        "Welfare systems are expensive to administer."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is closer to the objection the author is attacking; his case does not rest on people disliking work, and assuming it would undercut, not support, his reply.",
        "Wrong: the passage never specifies the size of the trial payments, and the argument does not turn on their generosity; it turns on whether the trial behaviour carries over to a national policy.",
        "Correct: the author rebuts a claim about a permanent universal policy using evidence from short, local trials. That inference only works if behaviour observed in those bounded experiments would persist when the income is made permanent and universal. The passage never states this generalisation, yet the rebuttal collapses without it.",
        "Wrong: administrative cost is a separate strand of the argument (the third paragraph) and plays no part in the leap from trial behaviour to a national prediction.",
      ],
      workedSolution:
        "The reply infers a nationwide outcome ('would not make people stop working') from local, temporary trials. The hidden premise is that trial behaviour generalises to a permanent, universal scheme, which is C. A restates the objection rather than a supporting premise, B concerns payment size the passage never fixes, and D belongs to a different part of the argument. The required assumption is C.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-science-943 (Basic income) — answer A (idx 0) ----------------
    {
      id: "q-assume-946",
      passageId: "psg-science-943",
      type: "assume",
      stem: "The claim that 'an economy in which workers can refuse the worst bargains is one in which the worst bargains must improve' depends on the unstated assumption that:",
      options: [
        "Employers must offer better pay or conditions when workers are able to walk away from the worst offers.",
        "Most jobs on offer today are exploitative or lead nowhere.",
        "A basic income would be set at the level of an average wage.",
        "Workers always prefer starting their own enterprise to taking a job."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the conclusion that bad bargains 'must improve' only follows if employers are forced to raise their terms once workers can decline the worst offers. That link between workers' power to refuse and employers' need to compete is the mechanism the argument relies on but never states.",
        "Wrong: the passage gives bad jobs as examples of what freed workers left, but the argument does not need 'most' jobs to be exploitative; even a minority would still have to improve once refusable.",
        "Wrong: the author never fixes the income at an average wage; the inference about improving bargains turns on workers' ability to say no, not on the payment matching a wage.",
        "Wrong: enterprise-founding is one observed behaviour, not a universal preference, and the claim about bargains improving does not require workers always to prefer self-employment.",
      ],
      workedSolution:
        "The leap is from 'workers can refuse the worst bargains' to 'the worst bargains must improve'. That holds only if employers respond to workers' power to walk away by bettering their terms, which is the unstated premise in A. B over-generalises an example, C invents a payment level the text never sets, and D turns one behaviour into a universal preference. The required assumption is A.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-history-944 (Tradition) — answer B (idx 1) -------------------
    {
      id: "q-assume-947",
      passageId: "psg-history-944",
      type: "assume",
      stem: "The claim that an unexplained custom 'can encode hard-won knowledge' assumes that:",
      options: [
        "Every surviving tradition is beneficial to the community that keeps it.",
        "A practice can carry useful knowledge even when no one can articulate the reason for it.",
        "Traditions were originally designed by wise lawgivers who recorded their purposes.",
        "Communities that question their customs always fare worse than those that do not."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author claims customs 'tended' to help those who kept them, a statistical tendency, not that 'every' tradition benefits its community; the stronger claim is not needed and is not made.",
        "Correct: to say an unexplained custom encodes real knowledge presupposes that knowledge can be carried by a practice without anyone being able to state its rationale. Deny that link and an inarticulate custom could hold nothing worth preserving, so it is the premise the claim requires.",
        "Wrong: the passage says the reverse, that traditions are not theories 'someone once proposed and wrote down'; a designing lawgiver is explicitly denied.",
        "Wrong: the argument needs only that observing communities 'tended to fare a little better', not that questioners 'always' fare worse; the universal claim overshoots the text.",
      ],
      workedSolution:
        "The inference is that a custom no one can explain may still hold real knowledge. That only follows if knowledge can reside in a practice apart from any stated reason, which is the unstated premise. The every-tradition-benefits claim and the always-fare-worse claim are stronger than the passage's hedged 'tended', and the wise-lawgiver picture is expressly rejected. So the required assumption is that a practice can carry knowledge without an articulable reason.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-history-944 (Tradition) — answer D (idx 3) -------------------
    {
      id: "q-assume-948",
      passageId: "psg-history-944",
      type: "assume",
      stem: "The argument that the demand 'justify every custom or discard it' rests on overconfidence depends on the assumption that:",
      options: [
        "Most inherited customs are in fact cruel and deserve to be swept away.",
        "Reason is never a reliable guide to whether a practice should be kept.",
        "Human reason cannot always reconstruct, from first principles, the knowledge a practice has accumulated.",
        "Any custom that has lasted a long time must be worth preserving."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author concedes only that 'many a cruel tradition has rightly fallen'; he does not claim most customs are cruel, and that claim would cut against his defence of tradition.",
        "Wrong: the passage credits reason with toppling cruel customs and urges careful questioning, so it never holds reason to be never reliable; that overstatement is the opposite of the balanced view urged.",
        "Correct: charging the 'justify or discard' rule with overconfidence requires that reason cannot always rebuild what a practice knows. If reason could reconstruct every such lesson on demand, nothing would be lost by discarding the unexplained, and the charge of overconfidence would collapse. So this limit on reason is the load-bearing premise.",
        "Wrong: the author expressly rejects 'blind reverence' and treats longevity as a reason to question carefully, not to preserve automatically; this is contradicted by the closing balance.",
      ],
      workedSolution:
        "The accusation of overconfidence works only if reason cannot always reconstruct the knowledge a custom embodies; otherwise demanding an explanation would cost nothing. That limit on reason is the unstated premise. The most-customs-are-cruel and longevity-warrants-preservation options are both contradicted by the author's balance, and 'reason is never reliable' overshoots his measured view. So the required assumption is the limit on what reason can reconstruct.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-currentaffairs-945 (Ethical consumption) — answer A (idx 0) --
    {
      id: "q-assume-949",
      passageId: "psg-currentaffairs-945",
      type: "assume",
      stem: "The argument that ethical shopping 'so easily becomes a private ritual of conscience' rather than real change rests on the premise that:",
      options: [
        "A single consumer's choices are too small to move a global supply chain.",
        "Most shoppers are secretly indifferent to the harms behind cheap goods.",
        "Fair-trade products are no better made than their cheaper rivals.",
        "Boycotts have never altered the behaviour of any company."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the slide into a mere ritual of conscience follows only if one shopper's choices cannot actually shift production. The author states this directly ('A single consumer's choices are too small to move a global supply chain'), and it is the premise on which the 'private ritual' claim depends: were a single buyer able to move the supply chain, ethical shopping would be effective action rather than empty ritual.",
        "Wrong: the author calls the impulse 'decent' and refuses to mock it, so he does not assume shoppers are secretly indifferent; that imputation is contradicted by his tone.",
        "Wrong: the relative quality of fair-trade goods is never the issue; the argument concerns the leverage of individual purchases, not product standards.",
        "Wrong: the passage allows that a 'movement' can shame a whole sector, so it does not rely on boycotts never working; the universal claim is contrary to the text.",
      ],
      workedSolution:
        "Ethical shopping collapses into private ritual only if the individual's choices are too small to move production. The author states that powerlessness outright, and the 'private ritual' conclusion rests on it. The secret-indifference imputation clashes with the author calling the impulse decent, product quality is irrelevant, and the never-works claim is contradicted by his allowance for movements. So the load-bearing premise is the smallness of a single shopper's leverage, which is A.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-currentaffairs-945 (Ethical consumption) — answer C (idx 2) --
    {
      id: "q-assume-950",
      passageId: "psg-currentaffairs-945",
      type: "assume",
      stem: "The argument that the consumer-as-citizen model 'serves the very interests it claims to discipline' assumes that:",
      options: [
        "Firms and governments are wholly indifferent to public opinion.",
        "Consumers enjoy being made to feel guilty about their purchases.",
        "Casting harm as a matter of individual choice diverts pressure away from the firms and governments that set the terms of production.",
        "Ethical labels are usually fraudulent."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says firms reform when 'a movement shames its whole sector', which requires them to be sensitive to opinion; wholesale indifference is contradicted.",
        "Wrong: whether consumers enjoy guilt is beside the point; the argument is about where responsibility is placed, not about shoppers' feelings.",
        "Correct: the charge that the model helps the powerful only holds if framing harm as individual choice lifts pressure off the firms and governments that actually set the terms. That redirection of responsibility is exactly the mechanism the author relies on but states only as a consequence, leaving the underlying premise unstated.",
        "Wrong: the author never claims the labels are fraudulent; his point is that even honest individual choices are too weak to compel reform, so label fraud is not assumed.",
      ],
      workedSolution:
        "Why would a model of conscientious shopping serve the powerful? Because treating harm as an individual matter takes pressure off the institutions that set the terms of production. That diversion is the unstated premise. The indifferent-firms claim is contradicted by the shaming-movement line, consumer feelings are off-topic, and label fraud is never asserted. So the required assumption is that individualising harm shields the firms and governments.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-literature-946 (Commercialised childhood) — answer D (idx 3) -
    {
      id: "q-assume-951",
      passageId: "psg-literature-946",
      type: "assume",
      stem: "The argument that merchandise-driven stories train 'the wrong appetite' for reading depends on the assumption that:",
      options: [
        "Children cannot learn to decode words from a licensed annual.",
        "Every book tied to a toy or franchise is poorly written.",
        "Publishers deliberately intend to harm the children who read their products.",
        "The habits of reading a child forms early carry forward and shape what that child later seeks in books."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author concedes the opposite, that a licensed annual may get a reluctant child 'reading at all', so he does not assume such books cannot teach decoding.",
        "Wrong: the argument is about what a sales-driven story teaches a child to want, not about prose quality; it never claims every franchise book is badly written.",
        "Wrong: the passage attributes the effect to the commercial logic of keeping a customer wanting more, not to any intent to harm; deliberate malice is neither claimed nor needed.",
        "Correct: the worry that early reading 'carried into adult life' breeds an appetite a serious book must overcome only works if childhood reading habits persist and shape later taste. That continuity between early and adult reading is the unstated premise the argument requires.",
      ],
      workedSolution:
        "The claim that merchandise-driven stories train the wrong appetite depends on early habits carrying forward into adult reading; otherwise the childhood diet would leave no lasting mark. That continuity is the unstated premise. The decoding concession is granted by the author, prose quality is not the issue, and deliberate harm is never alleged. So the required assumption is that early reading habits shape what the adult later seeks.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-philosophy-947 (Precaution) — answer B (idx 1) ---------------
    {
      id: "q-assume-952",
      passageId: "psg-philosophy-947",
      type: "assume",
      stem: "The argument that the precautionary principle 'devours itself' assumes that:",
      options: [
        "New technologies are usually safe once examined closely.",
        "Inaction can itself produce serious harms.",
        "The burden of proof should always rest on those who wish to act.",
        "Decision-makers can predict the consequences of new technologies with certainty."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author takes no stand on whether new technologies tend to be safe; the argument turns on the costs of caution, not on technology's typical safety.",
        "Correct: the self-defeat charge works only because 'inaction is not a safe harbour', i.e. declining to act carries its own serious harms (diseases unchecked, emissions unabated). Remove that and caution would indeed be costless, so this is the load-bearing premise.",
        "Wrong: this is the precautionary principle the author is criticising, not a premise of the criticism; the passage rejects treating the status quo as a costless default.",
        "Wrong: the author assumes the reverse, that consequences are uncertain ('risks are not yet understood'); assuming certainty would dissolve the whole debate.",
      ],
      workedSolution:
        "The principle 'devours itself' only if inaction is also risky, which is B. A is irrelevant, C restates the view under attack, and D is contradicted by the stated uncertainty. The required assumption is B.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-science-948 (Space funding) — answer C (idx 2) ---------------
    {
      id: "q-assume-953",
      passageId: "psg-science-948",
      type: "assume",
      stem: "The author's reply that the 'feed the poor first' objection 'proves too much' relies on the assumption that:",
      options: [
        "Hunger and disease are not genuinely serious problems.",
        "Space science always returns benefits that exceed its costs.",
        "We do not in fact accept a rule that would forbid all spending except immediate relief of suffering.",
        "Money saved from space programmes would otherwise be wasted entirely."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author treats hunger and disease as real ('unrelieved on the ground'); the reply turns on the scope of the objection, not on denying that suffering matters.",
        "Wrong: he claims only that space science 'has already returned' some benefits, not that its returns 'always' exceed its costs; the universal claim is stronger than the argument uses.",
        "Correct: the 'proves too much' move works by noting the objection would forbid almost any non-relief spending, which we reject. That reductio only bites if we genuinely do not accept such a sweeping rule, so our rejection of it is the premise the reply requires.",
        "Wrong: the author argues the saved money would more often fund a tax cut or a warship, not that it would be wasted 'entirely'; this misstates his point about how budgets actually move.",
      ],
      workedSolution:
        "A 'proves too much' reply assumes the over-strong principle is one we already reject. Here the rule 'spend only on immediate relief' would forbid nearly all non-relief spending, and the reply works only because we do not accept that rule. The objection does not deny suffering is serious, the always-exceeds claim is stronger than needed, and the wasted-entirely claim misreads the budget point. So the required assumption is that we do not in fact accept the relief-only rule.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-politics-949 (Civil disobedience) — answer A (idx 0) ---------
    {
      id: "q-assume-954",
      passageId: "psg-politics-949",
      type: "assume",
      stem: "The claim that accepting the penalty separates the civil disobedient from the common criminal rests on the premise that:",
      options: [
        "Willingly bearing the punishment signals that one still recognises the authority of the legal system.",
        "Common criminals are never punished for their offences.",
        "Every law a protester breaks is itself unjust.",
        "Violent protest is more effective than peaceful protest at changing laws."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the distinction works only if submitting to arrest carries a meaning, namely that the lawbreaker still accepts the system's authority. The author states this directly ('by paying it declares that he still recognises the authority of the system'), and the contrast with the common criminal depends on it: strip that significance from accepting punishment and the two lawbreakers would no longer differ in the way claimed.",
        "Wrong: the difference drawn is that the criminal 'hopes to escape', not that criminals are never caught; whether they are eventually punished is beside the point.",
        "Wrong: the method breaks one law 'openly' to dramatise an injustice elsewhere; the broken law need not itself be unjust, so the contrast does not rely on it.",
        "Wrong: the passage holds the reverse, that violence 'abandons the appeal to conscience'; treating violence as more effective contradicts the author.",
      ],
      workedSolution:
        "The criminal-versus-disobedient contrast turns on what accepting punishment means: that the lawbreaker still recognises the system's authority. The author states that significance outright, and the distinction rests on it. Whether criminals are ever caught is irrelevant, the broken law need not be unjust, and the author rejects the idea that violence works better. So the load-bearing premise is that bearing the penalty signals continued recognition of legal authority, which is A.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-currentaffairs-950 (Cheap garment) — answer D (idx 3) --------
    {
      id: "q-assume-955",
      passageId: "psg-currentaffairs-950",
      type: "assume",
      stem: "The argument that calling the shirt 'cheap' mistakes 'a transfer for a saving' assumes that:",
      options: [
        "Every shopper who buys a cheap shirt knows about its hidden costs.",
        "The factory's owners are deliberately cruel to their workers.",
        "Expensive shirts impose no costs on workers or the environment.",
        "Costs borne by workers, rivers, and future generations are real costs of the shirt even though the buyer does not pay them."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says most shoppers 'simply read the tag and believe it', so universal awareness is contradicted by the text.",
        "Wrong: the passage attributes the low price to squeezed wages and untreated dye, an economic mechanism, not to deliberate cruelty; malice is not assumed.",
        "Wrong: the argument does not claim expensive shirts are costless; it compares paid price to total cost, and this comparison does not require pricier garments to be clean.",
        "Correct: the 'transfer not saving' conclusion only follows if the externalised burdens genuinely count as costs of the shirt. Deny that and the off-receipt items would be irrelevant, leaving the low tag a true saving, so their reality as costs is the premise.",
      ],
      workedSolution:
        "A transfer rather than a saving requires that the off-receipt burdens are real costs of the shirt, which is D. A is contradicted ('read the tag and believe it'), B imports motive, and C is an unneeded claim about other shirts. The required assumption is D.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-philosophy-951 (Forgiveness) — answer B (idx 1) --------------
    {
      id: "q-assume-956",
      passageId: "psg-philosophy-951",
      type: "assume",
      stem: "The argument that forgiveness need not wait for an apology depends on the assumption that:",
      options: [
        "An apology can never make forgiveness easier.",
        "Forgiveness can be understood as the wronged person's release of their own corrosive resentment.",
        "Every victim resents the wrong done to them for many years.",
        "Offenders are generally indifferent to the harm they have caused."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author explicitly says an apology 'can make forgiveness easier', so denying this contradicts the passage rather than grounding the argument.",
        "Correct: the conclusion that the victim can forgive unilaterally only follows if forgiveness is the self-administered release of resentment rather than a transaction owed to contrition. The author proposes exactly this reframing, and the argument stands or falls with it.",
        "Wrong: the argument needs only that resentment is a burden on the wronged, not that 'every' victim resents for years; the universal claim is stronger than required.",
        "Wrong: the sleeping-offender line is an illustration, not a premise; the argument does not require offenders to be generally indifferent, only that the victim's peace should not depend on them.",
      ],
      workedSolution:
        "Unilateral forgiveness is possible only if forgiveness is the release of one's own resentment rather than a response owed to repentance, which is B. A is contradicted, C overstates with 'every', and D mistakes an illustration for a premise. The required assumption is B.",
      difficulty: "hard",
      source: "illustrative"
    }
  );

  /* ====================================================================== *
   * QUESTIONS — OPINION vs ASSUMPTION (q-opinion), 16 items.
   * These separate a view the author EXPRESSES on the page from an unstated
   * underpinning, or from neutral reportage / fact. Read the stem carefully:
   * some ask for the stated opinion, some for the underlying assumption.
   * ====================================================================== */
  DATA.questions.push(
    // --- psg-philosophy-941 (Whistleblowing) — answer A (idx 0) -----------
    {
      id: "q-opinion-941",
      passageId: "psg-philosophy-941",
      type: "opinion",
      stem: "Which of the following is an opinion the author actually expresses, as opposed to an unstated assumption the argument relies on?",
      options: [
        "Those who leak confidential information are right to be met with suspicion rather than applause.",
        "The duty to keep a confidence can be outweighed by a weightier interest.",
        "Lawful avenues of complaint usually exist to be pursued before a leak.",
        "A promise of secrecy binds a person absolutely, whatever it conceals."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author states outright that those who leak 'are therefore right to be met with suspicion rather than applause', an opinion expressed verbatim on the page.",
        "Wrong: that the duty of secrecy can be outweighed is the argument's unstated premise; the author leans on it but never states it as such, so it is an assumption, not an expressed opinion.",
        "Wrong: the general availability of lawful channels is likewise assumed rather than stated; it underpins the 'try the channels first' condition without appearing on the page.",
        "Wrong: this absolutist view is one the author explicitly denies, insisting the duty of secrecy 'was never meant to be absolute'; it is neither his opinion nor a premise he relies on.",
      ],
      workedSolution:
        "The stem asks for an expressed opinion, not an assumption. The suspicion-not-applause line is written on the page in those words. The duty-can-be-outweighed and channels-exist options are unstated premises the argument needs, and the absolutist option is a view the author expressly rejects. So the expressed opinion is that leakers are rightly met with suspicion.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-philosophy-941 (Whistleblowing) — answer C (idx 2) -----------
    {
      id: "q-opinion-942",
      passageId: "psg-philosophy-941",
      type: "opinion",
      stem: "Which statement best captures the author's expressed opinion about the indiscriminate leaker?",
      options: [
        "Anyone who exposes official secrets serves the public interest.",
        "Confidentiality should be abolished because it only ever hides wrongdoing.",
        "Someone who dumps a ministry's secrets indiscriminately claims a licence the public interest does not grant.",
        "A disclosure is justified whenever its author believes it to be brave."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author distinguishes the justified leaker from the reckless one, so he does not hold that anyone exposing secrets serves the public interest.",
        "Wrong: the author calls the obligation of secrecy 'genuine' and a means 'to good ends', the opposite of urging its abolition.",
        "Correct: the author writes that the whistleblower who 'dumps a ministry's secrets indiscriminately, careless of who is endangered, claims a licence the public interest does not grant', an opinion stated directly.",
        "Wrong: the author says a disclosure does not earn justification merely because it 'flatters its author as brave', so this states the view he rejects.",
      ],
      workedSolution:
        "Locate the author's actual statement about the reckless leaker. He says the one who dumps secrets indiscriminately claims a licence the public interest does not grant, which is the third option. The serves-the-public claim is too broad, the abolish-confidentiality claim reverses him, and the self-flattering-bravery claim is one he denies. The expressed opinion is that the indiscriminate leaker overreaches.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-politics-942 (National service) — answer B (idx 1) -----------
    {
      id: "q-opinion-943",
      passageId: "psg-politics-942",
      type: "opinion",
      stem: "Which of the following expresses the author's own opinion rather than a view he merely reports others as holding?",
      options: [
        "The chief reason to favour national service is the discipline and skills the young would gain.",
        "National service makes the kind of citizen a shared democracy quietly relies on.",
        "People should always be left to choose their own paths.",
        "Compulsory service unjustly sacrifices the individual to the state."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author reports this personal-benefit case only to set it aside as 'not the strongest one'; it is the view he downgrades, not the opinion he commits to.",
        "Correct: that service 'makes the kind of citizen a shared democracy quietly relies on and can no longer assume' is the author's own central judgement, stated as the conclusion of his civic argument.",
        "Wrong: this is the 'obvious retort' the author anticipates from objectors, a reported challenge rather than his own position.",
        "Wrong: the author argues the reverse, that service serves the republic; he never claims it unjustly sacrifices the individual, so this is not his expressed view.",
      ],
      workedSolution:
        "Separate the author's committed voice from views he merely reports. The discipline-and-skills case is explicitly downgraded, the choose-your-own-path line is the objectors' retort, and the unjust-sacrifice claim is the opposite of his thesis. His own opinion is that service makes the citizen a shared democracy relies on, which is the answer.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-politics-942 (National service) — answer D (idx 3) -----------
    {
      id: "q-opinion-944",
      passageId: "psg-politics-942",
      type: "opinion",
      stem: "Which option states an unstated assumption of the argument rather than an opinion the author expresses?",
      options: [
        "A spell of national service might make better individuals.",
        "Trust and cooperation across social lines are not natural dispositions.",
        "Modern society sorts people into separate schools, neighbourhoods, and screens.",
        "The cooperation a republic needs cannot be reliably learned except through shared undertakings that force dependence across social lines."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author states this concession outright ('it makes better individuals, though it might'), so it is expressed, not assumed.",
        "Wrong: the author says directly that these dispositions 'are not natural', so this claim is on the page rather than hidden.",
        "Wrong: the passage describes this sorting explicitly ('separate schools, separate neighbourhoods, and separate screens'), so it is stated.",
        "Correct: the recommendation of service as the cure assumes that the needed cooperation can be learned only through shared undertakings that compel cross-class dependence. The author asserts that such habits must be learned 'somewhere' and that service supplies the occasion, but never states that no other route would reliably serve; that exclusivity is the silent premise the prescription requires.",
      ],
      workedSolution:
        "The stem wants the assumption. The better-individuals concession, the 'not natural' claim, and the social-sorting description are all stated on the page. The hidden premise is that the cooperation a republic needs cannot reliably be learned except through shared undertakings forcing cross-class dependence, which is what makes service the remedy rather than one option among many. So the assumption is that exclusivity of the learning route.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-science-943 (Basic income) — answer C (idx 2) ----------------
    {
      id: "q-opinion-945",
      passageId: "psg-science-943",
      type: "opinion",
      stem: "Which of the following is an opinion the author expresses, as opposed to an unstated assumption the argument relies on?",
      options: [
        "Free money paid with no strings attached must make people stop working.",
        "Employers raise their terms once workers gain the power to walk away.",
        "A floor beneath a person is not a hammock but a springboard.",
        "Behaviour seen in short local trials would persist under a permanent national scheme."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the 'reflex objection' the author sets out in order to rebut it; it is a view he reports and rejects, not an opinion he holds.",
        "Wrong: that employers must compete once workers can refuse bad offers is the unstated premise behind 'the worst bargains must improve'; the author relies on it but never states it, so it is an assumption.",
        "Correct: the author states in his own words that 'a floor beneath a person, it turns out, is not a hammock but a springboard', an opinion expressed directly on the page.",
        "Wrong: the generalisation from limited trials to a permanent universal policy is the hidden premise of his rebuttal; he leans on it without stating it, so it is an assumption rather than an expressed opinion.",
      ],
      workedSolution:
        "The stem asks for an expressed opinion, not an assumption. C is written on the page in the author's own words. A is the objection he rejects, while B and D are the argument's unstated bridging premises. So the expressed opinion is C.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-science-943 (Models) — answer A (idx 0) ----------------------
    {
      id: "q-opinion-946",
      passageId: "psg-science-943",
      type: "opinion",
      stem: "Which option is an unstated assumption of the 'deeper case' in the final paragraph rather than a view the author states outright?",
      options: [
        "Paying an income to everyone would do away with the costly machinery that conditional welfare needs to decide who is deserving.",
        "Every existing welfare system spends a fortune deciding who is deserving.",
        "An income paid to all asks no one to prove their worth before they may live.",
        "A confident society can stop treating poverty as a character flaw to be audited."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the deeper case treats the desert-policing apparatus as a cost a universal income would escape, but it never says that paying everyone removes the need for such checking. That step, from 'paid to all' to 'no deserving-checks needed', is the silent premise that lets the administrative waste count against conditional welfare and in favour of a universal payment.",
        "Wrong: the author states this outright ('Every existing welfare system spends a fortune deciding who is deserving'), so it is an expressed claim, not a hidden one.",
        "Wrong: the passage says this directly ('An income paid to all... asks no one to prove their worth before they may live'), so it is stated rather than assumed.",
        "Wrong: this is the author's expressed conclusion, written on the page in those words; it is the view the assumption supports, not the unstated premise itself.",
      ],
      workedSolution:
        "The stem wants the assumption. The fortune spent on deciding desert, the income that asks no proof of worth, and the closing line about not auditing poverty are all stated. The hidden gear is that a payment made to everyone needs none of the costly desert-checking conditional welfare requires, which is what turns that administrative cost into a point against the existing system. So the assumption is A.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-history-944 (Tradition) — answer B (idx 1) -------------------
    {
      id: "q-opinion-947",
      passageId: "psg-history-944",
      type: "opinion",
      stem: "Which statement reflects the author's expressed opinion rather than a claim he reports or concedes?",
      options: [
        "A confident modern temper holds that any custom must justify itself at the bar of reason.",
        "The honest course is to treat an old practice as a witness whose testimony we do not fully understand.",
        "Many a cruel tradition has rightly fallen to rational questioning.",
        "If no one can explain why a custom exists, it is mere superstition."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the view the author attributes to a 'confident modern temper' in order to criticise it; he reports the position, he does not endorse it.",
        "Correct: recommending that we treat an old practice 'as a witness whose testimony we do not fully understand, to be questioned carefully' is the author's own evaluative prescription, offered as his considered conclusion.",
        "Wrong: this is a concession the author grants to the other side, acknowledging reason's successes; it is not the distinctive opinion he is advancing.",
        "Wrong: this restates the 'thinking' of the temper he opposes ('the thinking goes'), a reported premise rather than his own judgement.",
      ],
      workedSolution:
        "Separate the author's own verdict from positions he reports or concedes. The 'justify at the bar of reason' line and the 'mere superstition' line both belong to the temper he criticises, and the cruel-traditions point is a concession to the other side. His own opinion is the prescription to treat an old practice as a witness questioned carefully, which is the answer.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-history-944 (Tradition) — answer D (idx 3) -------------------
    {
      id: "q-opinion-948",
      passageId: "psg-history-944",
      type: "opinion",
      stem: "Which of the following is an unstated assumption rather than an opinion the author states outright?",
      options: [
        "Neither blind reverence nor brisk demolition is the honest course toward an old practice.",
        "Traditions are the settled residue of countless small trials and errors.",
        "The reasons for a practice may have been lost or never articulated.",
        "Practices that helped a community survive tend to be passed on, while those that harmed it tend to die out."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author states this balance directly as his closing recommendation, so it is an expressed opinion, not a hidden premise.",
        "Wrong: the passage asserts outright that traditions are 'the settled residue of countless small trials and errors', so this is stated.",
        "Wrong: the author says plainly that the reasons 'may have been lost, or may never have been articulated', so this too is on the page.",
        "Correct: the whole picture of customs as winnowed wisdom depends on a selective mechanism, that beneficial practices get transmitted while harmful ones fall away. The author leans on this survival-of-the-useful assumption to claim that what endures 'tended' to help, yet never states the filtering principle itself, so it is the unstated premise.",
      ],
      workedSolution:
        "The stem wants the assumption. The neither-reverence-nor-demolition balance, the trial-and-error description, and the lost-reasons remark are all stated. The hidden gear is the selective mechanism by which helpful practices are passed on and harmful ones die out, which is what licenses reading endurance as evidence of wisdom. So the assumption is that survival filters customs for usefulness.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-currentaffairs-945 (Ethical consumption) — answer A (idx 0) --
    {
      id: "q-opinion-949",
      passageId: "psg-currentaffairs-945",
      type: "opinion",
      stem: "Which of the following best states an opinion the author actually holds?",
      options: [
        "The remedy for collectively produced harm is the work of acting as citizens together, not a better-curated trolley.",
        "Everyone should boycott tainted brands as a matter of personal duty.",
        "Ethical shopping is the chief lever by which justice can be advanced.",
        "The impulse to consume ethically is foolish and deserves to be mocked."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author states plainly that the remedy 'is not a better-curated trolley' but 'the slower, less flattering work of acting as citizens together', a directly expressed opinion.",
        "Wrong: far from urging universal boycotts, the author argues such individual gestures are too weak to compel reform, so this misstates his view.",
        "Wrong: he calls consumption 'the one lever almost designed not to work', the opposite of treating it as the chief lever of justice.",
        "Wrong: he expressly calls the impulse 'decent' and says 'I would not mock it', so this contradicts his stated attitude.",
      ],
      workedSolution:
        "Pick the view the author endorses in his own words. He says the remedy is collective citizen action rather than a curated trolley. The universal-boycott line and the consumption-as-chief-lever line are positions he rejects, and he explicitly declines to mock the ethical impulse. So the expressed opinion is that the remedy is acting as citizens together.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-currentaffairs-945 (Ethical consumption) — answer C (idx 2) --
    {
      id: "q-opinion-950",
      passageId: "psg-currentaffairs-945",
      type: "opinion",
      stem: "Which option is an unstated assumption of the argument rather than a view the author expresses?",
      options: [
        "The impulse to consume ethically is decent.",
        "A single consumer's choices are too small to move a global supply chain.",
        "Collective action through law and movements is a more effective remedy for systemic harm than the sum of individual purchases.",
        "Firms reform when a law compels them or a movement shames their sector."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author states this outright ('The impulse is decent'), so it is an expressed opinion, not a hidden premise.",
        "Wrong: he asserts this directly when explaining why ethical shopping fails, so it is stated rather than assumed.",
        "Correct: the recommendation to abandon the trolley for citizen action presupposes that collective levers actually work better on systemic harm than aggregated individual choices. The author asserts that consumption fails and that movements can shame a sector, but the comparative superiority of collective action is the bridging premise he leans on without ever arguing for it.",
        "Wrong: the author states this mechanism explicitly ('it reforms when a law compels it or a movement shames its whole sector'), so it is on the page, not assumed.",
      ],
      workedSolution:
        "The stem wants the assumption. The decent-impulse claim, the single-shopper-is-too-small claim, and the firms-reform-when-compelled claim are all stated. The unargued bridge is that collective action is a more effective remedy for systemic harm than the sum of individual purchases, which is what makes 'act as citizens, not shoppers' follow. So the assumption is the comparative superiority of collective action.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-literature-946 (Commercialised childhood) — answer D (idx 3) -
    {
      id: "q-opinion-951",
      passageId: "psg-literature-946",
      type: "opinion",
      stem: "Which of the following is an opinion the author expresses about children's books?",
      options: [
        "A licensed annual is always worthless and should be kept from children.",
        "Tying a book to a toy or film is entirely harmless.",
        "The chief danger is that children read books with the wrong words in them.",
        "The genuinely formative children's book risks the strange, the sad, and the unresolved."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author grants that a licensed annual may get a reluctant child reading, so he does not call such books always worthless or urge keeping them away.",
        "Wrong: this is the defenders' claim, which the author sets out in order to dispute it; it is not his own view.",
        "Wrong: he explicitly says the worry is 'not about literacy in the narrow sense of decoding words' but about what a story teaches a child to want, so this misstates his concern.",
        "Correct: the author asserts that the genuinely formative children's book 'risks the strange, the sad, the unresolved' and trusts the child to be enlarged by it, an opinion stated directly.",
      ],
      workedSolution:
        "Find the affirmed view. The author praises the formative book for risking the strange, sad, and unresolved. The always-worthless line and the entirely-harmless line are positions he rejects, and he expressly denies that the danger is about decoding the wrong words. So the expressed opinion is that the formative book risks the strange and unresolved.",
      difficulty: "easy",
      source: "illustrative"
    },
    // --- psg-philosophy-947 (Precaution) — answer B (idx 1) ---------------
    {
      id: "q-opinion-952",
      passageId: "psg-philosophy-947",
      type: "opinion",
      stem: "Which statement expresses the author's own opinion rather than the precautionary view he is criticising?",
      options: [
        "Where an action might cause serious harm, the burden falls on those who would proceed.",
        "A precaution that refuses to compare risks hides one set of dangers behind another.",
        "In the absence of certainty about harm, we should always hold back.",
        "The status quo is a safe harbour outside the reach of risk."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the precautionary principle as the author summarises it for criticism, not his own conclusion.",
        "Correct: the author's own verdict is that a precaution refusing the comparative question 'merely hides one set of dangers behind another and calls the concealment prudence', stated directly as his conclusion.",
        "Wrong: this restates the precautionary stance the author attacks for treating the status quo as costless; it is the target, not his view.",
        "Wrong: the author denies this, insisting 'inaction is not a safe harbour'; the option states the very assumption he rejects.",
      ],
      workedSolution:
        "Separate the criticised principle from the author's verdict. A and C state the precautionary view; D states an assumption he rejects. His own opinion is that uncomparative precaution merely hides dangers, which is B.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-science-948 (Space funding) — answer C (idx 2) ---------------
    {
      id: "q-opinion-953",
      passageId: "psg-science-948",
      type: "opinion",
      stem: "Which of the following is an opinion the author expresses rather than an unstated assumption?",
      options: [
        "A pound not spent on a telescope would otherwise have reached a hungry child.",
        "The worth of an endeavour is measured solely by the suffering it relieves this year.",
        "'Feed the poor first' is not the knockdown reply to space spending that it pretends to be.",
        "Long-horizon projects always repay their costs in the end."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the assumption the author identifies and rejects ('It would not'); he attributes it to the objector rather than asserting it himself.",
        "Wrong: he criticises this narrow measure as a 'flaw', so it states the view he opposes, not his own opinion.",
        "Correct: the author states directly that 'feed the poor first is not the knockdown reply it pretends to be', offering this as his own considered verdict on the objection.",
        "Wrong: the author never claims long-horizon projects 'always' repay; he cites particular cases like the genome and the ocean floor, so the universal claim is not his expressed view.",
      ],
      workedSolution:
        "The stem contrasts expressed opinion with assumption. The pound-reaching-a-child claim is the assumption he attributes to the objector and rejects, the suffering-this-year measure is the view he criticises, and the always-repay claim overstates his case. His own stated verdict is that 'feed the poor first' is not the knockdown reply it pretends to be. So that is the expressed opinion.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-politics-949 (Civil disobedience) — answer A (idx 0) ---------
    {
      id: "q-opinion-954",
      passageId: "psg-politics-949",
      type: "opinion",
      stem: "Which of the following best states the author's expressed opinion?",
      options: [
        "Under the right conditions, breaking the law can be one of the rule of law's sharpest instruments.",
        "In a democracy, taking to the streets is never justified.",
        "The civil disobedient places himself above the law.",
        "Violent protest is a legitimate means of appealing to conscience."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author concludes that where his conditions hold, breaking the law 'can be not an assault on the rule of law but one of its sharpest instruments', his directly expressed view.",
        "Wrong: this is the rebuke the author sets out to answer, not his own position; he argues protest can be justified.",
        "Wrong: he explicitly denies this ('the answer is not that the protester is above the law'), so it contradicts his view.",
        "Wrong: he holds that violence 'abandons the appeal to conscience', so he denies its legitimacy rather than affirming it.",
      ],
      workedSolution:
        "Find the author's affirmed claim. He holds that, under his stated conditions, lawbreaking can be one of the rule of law's sharpest instruments. The never-justified line is the rebuke he answers, he expressly denies the protester is above the law, and he rejects violence as abandoning the appeal to conscience. So the expressed opinion is that principled lawbreaking can serve the rule of law.",
      difficulty: "medium",
      source: "illustrative"
    },
    // --- psg-currentaffairs-950 (Cheap garment) — answer B (idx 1) --------
    {
      id: "q-opinion-955",
      passageId: "psg-currentaffairs-950",
      type: "opinion",
      stem: "Which of the following is an opinion the author expresses rather than an unstated assumption of the argument?",
      options: [
        "Externalised burdens borne by others are genuine costs of the shirt.",
        "The deception lies in a price engineered to display a fraction and conceal the whole.",
        "A buyer deserves blame only if they knowingly impose costs on others.",
        "Most shoppers are secretly indifferent to the suffering behind cheap goods."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that the off-receipt burdens count as real costs of the shirt is the argument's unstated premise; the author relies on it to call the price a transfer but does not state it as such.",
        "Correct: the author states that 'the deception lies in the price itself, which is engineered to display a fraction and conceal the whole', an opinion expressed directly.",
        "Wrong: this principle about blame is neither stated nor required; the author in fact downplays blame, saying most shoppers 'simply read the tag and believe it'.",
        "Wrong: the author says the opposite, that shoppers are not callous but deceived, so secret indifference is contradicted.",
      ],
      workedSolution:
        "Contrast stated opinion with assumption. A is the unstated premise; C and D are not the author's view (D is contradicted). His expressed opinion is that the deception lies in a price built to show a fraction and hide the whole, which is B.",
      difficulty: "hard",
      source: "illustrative"
    },
    // --- psg-philosophy-951 (Forgiveness) — answer D (idx 3) --------------
    {
      id: "q-opinion-956",
      passageId: "psg-philosophy-951",
      type: "opinion",
      stem: "Which statement expresses the author's own opinion about forgiveness?",
      options: [
        "Forgiveness is a transaction owed to the wrongdoer's contrition.",
        "To forgive is necessarily to excuse the wrong and agree to trust again.",
        "A victim may release resentment only once the offender apologises.",
        "One may forgive a wrong while still judging the act clearly and declining to trust again."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this transactional view is the position the author sets up in order to reject it, not his own conclusion.",
        "Wrong: the author denies this, saying forgiveness is 'not to excuse the wrong' and is compatible with declining to trust; the option contradicts him.",
        "Wrong: the author argues precisely against making an apology a precondition, so this states the view he opposes.",
        "Correct: the author states that one 'may forgive and still judge the act clearly, still decline to trust again', an opinion expressed directly as part of his reframing.",
      ],
      workedSolution:
        "Distinguish the rejected view from the author's own. A and C state the transactional position he argues against, and B is explicitly denied. His expressed opinion is that forgiving is compatible with clear judgement and continued distrust, which is D.",
      difficulty: "medium",
      source: "illustrative"
    }
  );
})(typeof window !== "undefined" ? window : this);
