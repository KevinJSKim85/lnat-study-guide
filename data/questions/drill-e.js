/*
 * drill-e.js — Section A DRILL set: full-spectrum question bank growth.
 *
 * Grows the question bank with 18 FRESH passages (topics used nowhere else in
 * the corpus) and 72 questions spread across ALL 11 Section A sub-types
 * (>= 6 of each). Includes a dedicated "argument flaw" reasoning cluster
 * (correlation-vs-causation, false dichotomy, hasty generalisation, scope
 * error, circularity) authored under the existing `structure` and `assume`
 * type tokens — those tokens test argument structure and unstated premises,
 * which is exactly what flaw-spotting requires. No new type token is invented.
 *
 * NOT real exam content. All content is source:"illustrative", English only.
 *
 * Delivery model (mirrors data/SAMPLE.js + drill-a..d): this file assigns into
 * the buckets that assets/js/engine/loader.js created on window.LNAT_DATA. It
 * must load AFTER loader.js. It is self-contained: it pushes only its own
 * passages and questions and references no IDs defined elsewhere.
 *
 * ID ranges (all in the free 1001+ band, unused anywhere else in the corpus):
 *   - Passages:  psg-<genre>-1001 .. psg-<genre>-1018 (18 passages, 6 genres).
 *   - Questions: each type numbers from 1001 within its own type token, e.g.
 *     q-main-1001.., q-inference-1001.., q-structure-1001.., q-assume-1001..
 *
 * Per-type counts (72 total; >= 6 each):
 *   main 6, standpoint 6, structure 9, detail 6, implied 6, inference 6,
 *   factinf 6, assume 9, opinion 6, vocab 6, tone 6.
 *   The extra structure (3) + assume (3) questions form the argument-flaw
 *   cluster; their stems ask "Which best identifies the flaw in the argument?".
 *
 * Correct-answer position is balanced ~25% each across A/B/C/D.
 * Every worked solution names the answer BY CONTENT (no letters/ordinals).
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    // loader.js must run first. Fail loudly rather than silently creating buckets.
    (root.console || { error: function () {} }).error(
      "[LNAT] drill-e.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * PASSAGES — 18 across the six genres, all in the free 1001+ DRILL range.
   * Each is argumentative/analytical: a stated thesis, support, and at least
   * one acknowledged counter-position, so every sub-type is testable.
   * ---------------------------------------------------------------------- */
  DATA.passages.push(
    {
      id: "psg-currentaffairs-1001",
      genre: "currentaffairs",
      title: "The Risk Score in the Courtroom",
      body:
        "Courts in several countries now consult software that scores a " +
        "defendant's risk of reoffending, and the appeal is easy to see. A " +
        "judge has minutes and a hunch; the algorithm has thousands of past " +
        "cases and no bad mood. Its champions argue that replacing the gut " +
        "feeling of a tired official with a tested statistical model can only " +
        "make sentencing fairer and more consistent. The promise deserves " +
        "scrutiny rather than applause. A risk score is built from historical " +
        "data, and that data records not who actually offended but who was " +
        "caught, charged, and convicted, a population shaped by where the " +
        "police chose to patrol. A tool trained on such records does not " +
        "discover the future; it learns the past and hands it back wearing the " +
        "costume of objectivity. The deeper trouble is that the score predicts " +
        "groups, not persons. To say that people resembling this defendant " +
        "reoffend forty per cent of the time tells us nothing certain about the " +
        "individual standing in the dock, yet the number arrives with a " +
        "decimal point and the authority that decimals carry. None of this " +
        "means the courtroom should be sealed against statistics. A model that " +
        "is open to inspection, audited for bias, and treated as one voice " +
        "among several may sharpen a judge's reasoning. What it must never " +
        "become is the judge, a calculation that decides a human fate while " +
        "answering to no one, its workings hidden behind the trade secrets of " +
        "the firm that sold it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-1002",
      genre: "currentaffairs",
      title: "Teaching the Arithmetic of a Life",
      body:
        "Schools teach children the area of a triangle but rarely how a credit " +
        "card compounds against them, and the campaign to make financial " +
        "literacy a compulsory subject grows louder each year. The case is " +
        "intuitive. Young adults sign loans they do not understand, mistake the " +
        "minimum payment for the cost of the debt, and meet the language of " +
        "interest and risk for the first time when it is already working " +
        "against them. A few hours spent on budgets and borrowing, the argument " +
        "runs, would arm them for a world that is forever trying to sell them " +
        "money. I am sympathetic, but the case is weaker than its champions " +
        "suppose. Knowledge is not behaviour. People who can define compound " +
        "interest still run up the same balances, because spending is driven by " +
        "habit, advertising, and the simple shortness of the month, not by a " +
        "gap in arithmetic. There is a further danger in the lesson itself. To " +
        "teach that prudent budgeting is the cure for hardship is to imply that " +
        "hardship is a failure of budgeting, a tidy story that flatters the " +
        "system and blames the borrower for wages that do not stretch and " +
        "prices set elsewhere. A worthwhile course would teach suspicion as " +
        "much as sums, naming the tricks of the lender and the small print of " +
        "the contract. Taught as personal thrift alone, financial literacy " +
        "risks becoming a way of explaining to the poor that their poverty is " +
        "an oversight they could have corrected with a spreadsheet.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-1003",
      genre: "philosophy",
      title: "The Performer Who Is Always Selling",
      body:
        "The online creator occupies a strange new role: a friend who is also a " +
        "billboard, a confidant whose intimacy is the product. The arrangement " +
        "is praised as a liberation. Anyone with a phone can now reach an " +
        "audience without asking permission from a studio or a publisher, and " +
        "the gatekeepers who once decided whose voice mattered have lost their " +
        "monopoly. That much is true and worth celebrating. The ethical knot " +
        "lies elsewhere, in the currency the creator trades. What the audience " +
        "values is authenticity, the sense that they are seeing a real person " +
        "rather than a performance, and yet that very authenticity is what the " +
        "creator must package and sell to advertisers. The moment sincerity " +
        "becomes the thing being monetised, sincerity is no longer quite " +
        "sincere; the unguarded confession has been chosen, framed, and timed " +
        "for the metrics. This is not a charge of simple dishonesty. The " +
        "creator may believe every word and still be performing belief, much as " +
        "an actor who weeps real tears is paid to weep them. The audience, " +
        "meanwhile, is rarely told where the friendship ends and the " +
        "transaction begins, and the young are least equipped to find the seam. " +
        "The answer is not to mourn some lost age of disinterested art, which " +
        "never existed, but to insist on a plain duty of disclosure: that what " +
        "is paid for be marked as paid for. Intimacy may be sold, but it should " +
        "not be sold under the counter as though it were freely given.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-1004",
      genre: "literature",
      title: "The Hand That Thinks",
      body:
        "We are told that handwriting is a skill the keyboard has made " +
        "obsolete, a piece of fond clutter we keep for birthday cards and " +
        "nothing more. The verdict comes too quickly. To form a letter by hand " +
        "is slower than to strike a key, and it is precisely the slowness that " +
        "does the work. The hand cannot keep pace with a lecturer, so the " +
        "writer is forced to choose, to compress a sentence into its gist, and " +
        "in choosing she understands. The typist, able to capture every word, " +
        "captures them without deciding which matter, and a transcript made " +
        "without judgement is a transcript half forgotten. There is more to the " +
        "loss than memory. A letter drafted by hand carries the tremor of the " +
        "person who wrote it, the crossings-out that show a mind changing course, " +
        "the pressure of feeling in a heavy stroke. The printed message is " +
        "cleaner and says less about its sender; every font is the same font. " +
        "None of this is an argument for abolishing the keyboard, which is " +
        "faster, searchable, and kinder to those whose hands will not obey them. " +
        "It is an argument against treating speed as the only virtue a tool can " +
        "have. The pen teaches the patience that the screen, forever inviting us " +
        "onward, quietly unlearns. To keep handwriting alive is not nostalgia " +
        "but a way of preserving a mode of attention we will miss only once it " +
        "is wholly gone.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-1005",
      genre: "science",
      title: "The Code That Is Never Only Yours",
      body:
        "A cheek swab mailed to a testing company promises to tell you where " +
        "your ancestors wandered and which ailments may lie in wait, and " +
        "millions have sent one off without a second thought. The second " +
        "thought is overdue. A genome is unlike any other personal record, " +
        "because it is never wholly personal. The sequence you reveal is shared " +
        "in large part with parents, siblings, and children who never consented " +
        "to the disclosure, and with cousins you have never met whose privacy " +
        "you quietly spend. A password can be changed after a breach; a genome " +
        "cannot be reissued. Once it is in a database it is there for good, and " +
        "the uses to which it may be put are decided by people who do not yet " +
        "hold the office or own the company. The familiar reassurance, that the " +
        "data is anonymous, has been hollowed out by research showing that a " +
        "surname can often be recovered from a supposedly nameless sequence by " +
        "cross-referencing public genealogy sites. This is not a plea to halt " +
        "the science, which has lengthened lives and cracked cold cases that " +
        "had defeated every other method. It is a plea to treat genetic " +
        "information as the peculiar thing it is: a record that implicates the " +
        "unborn, resists anonymity, and outlasts every promise made about it. " +
        "Consent given by one person to surrender it is, by the nature of the " +
        "molecule, consent given on behalf of many who were never asked.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-1006",
      genre: "politics",
      title: "The Crown We No Longer Need",
      body:
        "Defenders of constitutional monarchy present it as a harmless ornament, " +
        "a head of state who reigns without ruling and so offends no one. The " +
        "picture is more flattering than honest. Even a ceremonial crown is not " +
        "neutral, for it teaches, by its mere existence, that the highest office " +
        "in the land is one no citizen may ever aspire to, settled instead by " +
        "the accident of birth. A republic announces that any child might one " +
        "day hold the state's first office; a monarchy announces the opposite, " +
        "and announces it at every coronation and on every coin. The usual " +
        "defence is that the monarch stands above politics and so unites a " +
        "divided nation in a way an elected president, tainted by party, never " +
        "could. There is something in this, but it proves less than it claims. " +
        "Unity bought by placing one family beyond all criticism is a fragile " +
        "kind, and the same stability is enjoyed by republics whose ceremonial " +
        "presidents manage to be dignified without being hereditary. The " +
        "stronger objection to abolition is practical: the institution is woven " +
        "into the constitution so thoroughly that unpicking it would be a long " +
        "and thankless labour with no obvious prize. That is a fair warning " +
        "against haste, but it is not a defence of the thing itself. It tells us " +
        "only that an indefensible arrangement may be inconvenient to remove, " +
        "which is the sort of argument that has preserved every privilege that " +
        "ever outlived its reasons.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-1007",
      genre: "science",
      title: "Meat Without the Animal",
      body:
        "Meat grown from cells in a steel tank, with no animal raised and none " +
        "slaughtered, has moved from the laboratory bench toward the dinner " +
        "plate, and it arrives trailing large promises. Its advocates say it " +
        "could feed a crowded planet while sparing both the suffering of " +
        "livestock and the forests cleared to graze them. The hope is genuine, " +
        "and the moral arithmetic, if the promises hold, is hard to argue with. " +
        "Yet the promises rest on conditions rarely stated aloud. Cultured meat " +
        "is clean only if the energy that powers the vats is clean; grown on a " +
        "grid still fed by coal, it may spare the cow while warming the climate " +
        "as much as the herd it replaced. The claim of scale is likewise a " +
        "forecast, not a fact, for nothing yet made in a laboratory has been " +
        "produced at the price and volume of a supermarket mince. There is also " +
        "a quieter cost. A countryside emptied of grazing animals is not simply " +
        "a problem solved; it is a landscape and a way of life undone, and the " +
        "shepherd is owed more than the news that his calling is obsolete. None " +
        "of this is a reason to refuse the technology, which may yet do much of " +
        "the good its makers foresee. It is a reason to greet it with the " +
        "patience due to any large promise, judging it by what comes out of the " +
        "tank and onto the plate rather than by the brochure that announced it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-1008",
      genre: "politics",
      title: "Land Left Deliberately Empty",
      body:
        "To set aside a great tract of land as wilderness, barred to roads, " +
        "industry, and almost all human use, strikes many as an obvious good " +
        "and others as an indulgence the world can no longer afford. The " +
        "preservationist case is not, at its best, a sentimental one. Some " +
        "values cannot be manufactured or restored once lost: the slow time of " +
        "an old forest, the silence of a place where no engine has ever run, " +
        "the simple existence of creatures that ask nothing of us. To convert " +
        "every acre to a use is to assume that usefulness to humans is the only " +
        "measure of worth, and that assumption is precisely what is in question. " +
        "The objection most worth answering is that wilderness is a luxury of " +
        "the rich, a view that lets the comfortable fence off beauty while the " +
        "poor are told to forgo the development that fenced land might have " +
        "supplied. This deserves more than a pious answer. Yet the choice it " +
        "describes is often false, for the destruction of wild places has more " +
        "frequently enriched distant shareholders than the people who live " +
        "beside them, who are left with the eroded soil and the emptied river. " +
        "Preservation, fairly arranged, need not be theft from the poor. The " +
        "honest claim is narrower and stronger than the rhetoric on either side: " +
        "that a civilisation able to remake everything has all the more reason " +
        "to decide, deliberately, to leave something alone.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-1009",
      genre: "currentaffairs",
      title: "The Right to Close the Laptop",
      body:
        "Several countries have written into law a right to disconnect, " +
        "shielding workers from the expectation that they answer messages long " +
        "after the working day has formally ended. Critics call it a quaint " +
        "gesture against an unstoppable tide, and a meddling one at that. They " +
        "are wrong on both counts. The expectation it addresses is not a force " +
        "of nature but a habit that technology made easy and management left " +
        "unexamined, and what habit built, law may help unbuild. The case rests " +
        "on a distinction the always-on workplace has blurred: between being " +
        "paid for one's time and surrendering all of it. When a message at ten " +
        "at night must be answered, the hours after work are no longer the " +
        "worker's own; they are merely unpaid hours on call, and rest taken " +
        "with one ear open is not rest. The familiar reply is that flexibility " +
        "cuts both ways, that the same technology lets the employee attend a " +
        "child's recital and finish the report at midnight. There is truth in " +
        "this, and a sensible law leaves room for it. The right to disconnect " +
        "need not forbid the willing midnight email; it need only remove the " +
        "expectation that one is owed. The objection that such a law cannot be " +
        "policed proves too little. Many rights are honoured chiefly because the " +
        "law has named them, shifting what employers may assume and employees " +
        "may decline, long before any case reaches a court.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-1010",
      genre: "philosophy",
      title: "Who Owns the Trail You Leave",
      body:
        "Every click, purchase, and pause leaves a trace, and a profitable " +
        "industry is built on the claim that these traces belong to whoever " +
        "collects them. The claim is usually smuggled in rather than argued. " +
        "When a company says it owns the data its users generate, it speaks as " +
        "though the matter were settled, yet the question of who owns a fact " +
        "about a person is one of the hardest in the field. Information is not " +
        "like a chair, which only one person can sit in at a time. The fact " +
        "that you walked into a shop at noon can be held by you, by the shop, " +
        "and by anyone watching, all at once and without anyone losing it, so " +
        "the language of ownership, borrowed from the world of things, fits " +
        "badly from the start. A popular remedy is to declare that people own " +
        "their data and may sell it as they please. This is tempting and, on " +
        "inspection, troubling. A right you are encouraged to sell is soon a " +
        "right only the desperate exercise, and a market in personal data would " +
        "press hardest on those with least to live on, who would trade their " +
        "privacy by the penny because they could not afford to keep it. The " +
        "better frame may not be property at all but something closer to a duty " +
        "of care, the obligation a doctor owes a patient's confidence. What is " +
        "asked is not a price for the trail we leave but a guardian for it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-1011",
      genre: "philosophy",
      title: "The Apprenticeship That Pays Nothing",
      body:
        "The unpaid internship is defended as a fair exchange: the young worker " +
        "gives labour and receives, in return, experience, contacts, and a line " +
        "on a curriculum vitae worth more than wages. There is a grain of truth " +
        "in the bargain, and it is the grain that makes the arrangement so " +
        "durable. Some of what an intern gains genuinely cannot be paid in " +
        "cash. But the defence collapses the moment one asks who can afford to " +
        "accept such a deal. To work for months without pay, a young person " +
        "must be supported by someone, which means the unpaid internship is " +
        "open only to those whose families can fund it. The position is thus " +
        "not awarded to the most able but auctioned to the most comfortable, " +
        "and a profession recruited this way slowly fills with the children of " +
        "people already inside it. What is sold as a ladder turns out to be a " +
        "turnstile that admits the well-off and bars the rest. There is a " +
        "second sleight worth naming. When the work an intern does is real work " +
        "the firm would otherwise pay for, the talk of pure mentorship is a " +
        "fiction; the company has simply found a labourer it need not wage. The " +
        "remedy is not to abolish the introduction of the young to a trade, " +
        "which is valuable, but to insist that genuine work command at least a " +
        "genuine minimum. Experience is a fine thing to gain, but it has never " +
        "yet paid anybody's rent.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-1012",
      genre: "politics",
      title: "The Case for the Open Border",
      body:
        "The argument for open borders begins from a discomfort most people " +
        "feel but few examine: that the single largest factor in a person's " +
        "life chances is the country in which they happen to be born, an " +
        "accident they did nothing to earn. A child born inside a wealthy " +
        "border inherits opportunities denied to one born a few miles outside " +
        "it, and the line between them is defended with a force we would think " +
        "monstrous if applied to any other accident of birth. From this the " +
        "case proceeds that the freedom to move ought to be counted among the " +
        "basic liberties, not rationed by the lottery of a passport. The " +
        "argument is powerful, and it is strongest when it stays modest about " +
        "what follows. The honest advocate concedes that movement on a great " +
        "scale strains the schools, housing, and services of the places that " +
        "receive it, and that a right asserted without regard to these strains " +
        "will not survive contact with the voters who must live among them. The " +
        "weakest version simply declares the border illegitimate and waves the " +
        "difficulties aside; the strongest treats freedom of movement as a goal " +
        "to be approached as fast as institutions can bear, not a switch to be " +
        "thrown overnight. What the case establishes is not that every barrier " +
        "must fall tomorrow, but that each one now demands a justification it " +
        "has long been permitted to do without.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-1013",
      genre: "science",
      title: "The Face That Was Never There",
      body:
        "Software can now graft a person's face onto footage they never filmed " +
        "and put words they never spoke into a voice indistinguishable from " +
        "their own. The technology is widely condemned, and the condemnation, " +
        "though deserved, often misses where the true harm lies. The first " +
        "instinct is to fear the convincing forgery, the fabricated video that " +
        "fools a nation. That danger is real but, oddly, the lesser one, for a " +
        "forgery can in principle be exposed, traced, and corrected. The deeper " +
        "injury is to trust itself. Once people learn that any recording might " +
        "be fabricated, they are freed to disbelieve the genuine ones, and the " +
        "video that catches real wrongdoing can be waved away as a probable " +
        "fake. The liar's true gift from this technology is not the false " +
        "evidence he can manufacture but the doubt he can now cast on the true. " +
        "There is a personal harm as well, suffered most by those whose " +
        "likenesses are stitched into images they never agreed to, a violation " +
        "that the law, written for an age of harder evidence, is slow to name. " +
        "The answer is unlikely to be a ban, since the tools are loose in the " +
        "world and cannot be recalled. It lies rather in building habits and " +
        "technologies of authentication, ways to prove that a recording is what " +
        "it claims to be, so that the burden falls on the forgery to declare " +
        "itself rather than on the truth to keep proving it is not a lie.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-1014",
      genre: "currentaffairs",
      title: "Paying for the Road You Block",
      body:
        "Charging drivers a fee to enter the busiest part of a city at the " +
        "busiest hour strikes many as a tax on movement, a punishment for the " +
        "ordinary act of getting to work. The objection mistakes what the fee " +
        "is for. A road at rush hour is a scarce thing, and when a scarce thing " +
        "is given away free it is not shared fairly; it is rationed by the " +
        "queue, and everyone pays in the one currency no one can earn more of, " +
        "which is time. Congestion pricing replaces that hidden toll with an " +
        "open one, and the driver who chooses to pay buys back the minutes the " +
        "jam would have taken. The familiar charge that the scheme is regressive, " +
        "hitting the poor hardest, deserves a serious answer rather than a " +
        "denial. Taken alone, a flat fee does press hardest on the least able " +
        "to pay it. But the fee is never alone: the money it raises can be " +
        "returned to the city in the form of cheaper and faster public " +
        "transport, which serves precisely those least likely to drive. A " +
        "policy is not regressive in isolation but in its whole design, and a " +
        "charge that funds the bus the cleaner takes to work may help her more " +
        "than the free road ever did. The deeper point is that the road was " +
        "never truly free. Its cost was merely paid in fumes, delay, and danger, " +
        "spread invisibly across everyone, and a price at least makes the " +
        "reckoning honest.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-1015",
      genre: "history",
      title: "The Studies That Refuse to Specialise",
      body:
        "The liberal-arts ideal, a broad education in letters, history, and the " +
        "sciences before any narrowing to a trade, is dismissed in anxious " +
        "times as a luxury, a costly detour on the way to a job. The dismissal " +
        "forgets what the ideal was for. It did not promise to train a " +
        "particular skill, because its founders distrusted the very idea that a " +
        "young person could know in advance which single skill a long life " +
        "would demand. A world that changes its trades every decade is, if " +
        "anything, a stronger argument for the broad foundation than the stable " +
        "world that first produced it, since the narrowly trained worker is the " +
        "one most easily stranded when his one craft is automated away. The " +
        "honest objection is one of cost and access. When a degree is " +
        "ruinously expensive, the leisure to study widely can look like a " +
        "privilege of the secure, and a poorer student may reasonably want the " +
        "training that leads most directly to a wage. This is a real tension, " +
        "not a knockdown case, for it is an argument about who can afford the " +
        "liberal arts, not about whether they are worth affording. The promise " +
        "was never employment in a named profession but the formation of a mind " +
        "that can judge, doubt, and adapt. Those are not ornaments on a useful " +
        "life. In a century that will retrain everyone several times over, they " +
        "may be the most practical training of all.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-1016",
      genre: "science",
      title: "The Pollution We Have Learned Not to Hear",
      body:
        "Noise is the pollution we have agreed to ignore. We legislate against " +
        "filthy air and poisoned water, yet the steady roar of traffic, " +
        "machinery, and amplified sound is treated as the unavoidable hum of a " +
        "living city, a nuisance at worst rather than a harm. The evidence " +
        "suggests we have misjudged it. Chronic noise does more than annoy; it " +
        "raises the body's alarm even during sleep, and a population kept at a " +
        "low boil of stress pays for it in disturbed rest, raised blood " +
        "pressure, and hearts that wear out sooner. The injury falls unequally, " +
        "for the loudest streets and the flats beside the motorway are seldom " +
        "the addresses of the wealthy, who can buy quiet as surely as they buy " +
        "clean air. The usual reply is that noise is the price of a vibrant " +
        "economy, that a silent city would be a dead one. This confuses two " +
        "different things. Much harmful noise is not the sound of useful " +
        "activity at all but its careless by-product, the avoidable din of " +
        "machinery built without mufflers and roads laid without barriers, and " +
        "to reduce it is not to silence the city but to spare it an injury it " +
        "gains nothing from. We have shown, with smoke and with sewage, that we " +
        "can decide a familiar harm is intolerable and engineer it down. Noise " +
        "is overdue for the same reckoning, and the first step is to stop " +
        "hearing it as merely the sound of life.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-1017",
      genre: "philosophy",
      title: "The Gift That Keeps the Giver in Charge",
      body:
        "Great philanthropy is widely admired and lately, in some quarters, " +
        "widely suspected, and both responses contain a truth worth separating " +
        "out. The admiration is not foolish: a fortune given to cure a disease " +
        "or school the poor does real and measurable good that no amount of " +
        "theorising should be allowed to wave away. The suspicion, however, " +
        "fastens on something the gratitude overlooks. When a single donor " +
        "directs vast sums toward the causes he judges worthy, he exercises a " +
        "kind of private power over public priorities, deciding which diseases " +
        "are studied and which schools are built, and he does so accountable to " +
        "no electorate and removable by no vote. The more lavish the gift, the " +
        "louder this quiet influence. There is a further awkwardness. A fortune " +
        "large enough to reshape a field was often gathered under rules the " +
        "giver helped to write or the taxes he was spared, so that the " +
        "generosity may be returning, with the warm glow of charity, a portion " +
        "of what a fairer arrangement would have collected as a duty. None of " +
        "this is to sneer at the good that is done or to prefer that the money " +
        "stay idle. It is to resist the easy slide from admiring a gift to " +
        "exempting the giver from the questions we ask of every other power. " +
        "Generosity earns thanks; it does not, by itself, earn the right to " +
        "govern from outside the rules that bind the rest.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-1018",
      genre: "currentaffairs",
      title: "The Single Number on the Report",
      body:
        "The standardised test is condemned from every direction, and the " +
        "condemnation has become so reflexive that the case for the thing is " +
        "rarely heard. Begin with what the test was meant to cure. Before it, " +
        "a pupil was judged by the impression she made on a teacher, a " +
        "judgement open to every prejudice of class and accent and familiar " +
        "face. A common examination, marked to one standard and often without a " +
        "name attached, was a genuine instrument of fairness, allowing the able " +
        "child from the wrong neighbourhood to be measured by the same yardstick " +
        "as the favoured one. That promise was real, and those who would scrap " +
        "the test entirely should say what they would put in its place that does " +
        "not quietly restore the old favouritism. Yet the instrument has been " +
        "asked to do far more than it can. A score built to compare can come to " +
        "define, until schools teach only what the test will ask and a child's " +
        "worth is read off a single figure that was never meant to carry it. " +
        "The fault here is less the test than the weight we hang on it. A " +
        "thermometer is a useful thing and a poor god. Used as one signal among " +
        "many, the examination corrects a real injustice; treated as the whole " +
        "measure of a mind, it manufactures a new one. The argument is not for " +
        "abolition or worship but for keeping the tool to the size of its job.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* ---------------------------------------------------------------------- *
   * QUESTIONS — 72 across all 11 sub-types (>= 6 each).
   * Numbering restarts at 1001 within each type token.
   * Worked solutions name the answer by content (no letters/ordinals).
   * ---------------------------------------------------------------------- */
  DATA.questions.push(
    /* ===== MAIN IDEA / PRIMARY PURPOSE (1a) ===== */
    {
      id: "q-main-1001",
      passageId: "psg-currentaffairs-1001",
      type: "main",
      stem: "Which of the following best expresses the main idea of the passage?",
      options: [
        "Risk-scoring tools may assist a judge but must not be allowed to replace human judgement.",
        "Sentencing software should be banned because it can never be made fair.",
        "Judges make better decisions when they are tired than when they rely on data.",
        "Statistical models are objective and therefore fairer than any human official."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage concedes the tool's possible value while insisting it must never become the judge.",
        "Wrong: the author explicitly says the courtroom should not be sealed against statistics, so this overstates the position.",
        "Wrong: the contrast with a tired official is a setup for scrutiny, not a claim that tiredness improves judgement.",
        "Wrong: the author attacks the very 'costume of objectivity' the tools wear."
      ],
      workedSolution: "The passage opens with the appeal of risk scores, then catalogues their flaws, and closes by allowing them as one audited voice while forbidding them to become the judge. The balanced 'assist but never replace' reading captures that arc.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-main-1002",
      passageId: "psg-currentaffairs-1002",
      type: "main",
      stem: "What is the primary purpose of the passage?",
      options: [
        "To argue that financial literacy should never be taught in schools.",
        "To qualify the case for compulsory financial education and warn how it could mislead.",
        "To prove that compound interest is too difficult for young people to learn.",
        "To recommend higher wages as the only solution to personal debt."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author is 'sympathetic' and wants a 'worthwhile course,' not no course.",
        "Correct: the author accepts the idea but warns that, taught as thrift alone, it blames the borrower.",
        "Wrong: the passage says people can define compound interest yet still overspend; difficulty is not the claim.",
        "Wrong: wages are mentioned as a factor, not advanced as the sole remedy."
      ],
      workedSolution: "The writer grants the intuitive appeal, then argues knowledge is not behaviour and that the lesson can imply hardship is a budgeting failure. The purpose is to qualify the proposal and flag its hidden message.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-1003",
      passageId: "psg-literature-1004",
      type: "main",
      stem: "Which statement best captures the central claim of the passage?",
      options: [
        "Handwriting should replace the keyboard in schools and offices.",
        "The keyboard is faster than handwriting in every important respect.",
        "Handwriting is worth preserving because its slowness fosters a kind of attention the keyboard erodes.",
        "Memory is the only reason anyone should continue to write by hand."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says this is 'not an argument for abolishing the keyboard.'",
        "Wrong: the passage credits the keyboard's speed but denies speed is the only virtue.",
        "Correct: the slowness that forces choice, plus the trace of the writer, is the heart of the case for keeping handwriting.",
        "Wrong: memory is one benefit, but the author adds attention, judgement, and the personal trace."
      ],
      workedSolution: "The passage argues the slowness of the hand forces judgement and preserves a 'mode of attention,' while conceding the keyboard's advantages. The attention-and-slowness reading is the central claim.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-main-1004",
      passageId: "psg-politics-1012",
      type: "main",
      stem: "The passage is primarily concerned with arguing that:",
      options: [
        "every border control must be dismantled immediately.",
        "the country of one's birth has no effect on one's life chances.",
        "large-scale migration never strains public services.",
        "freedom of movement deserves to be treated as a basic liberty, so each border now demands justification."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author rejects throwing 'a switch overnight' and calls the weakest version the one that waves difficulties aside.",
        "Wrong: the passage rests on birthplace being 'the single largest factor' in life chances.",
        "Wrong: the author concedes movement 'on a great scale strains the schools, housing, and services.'",
        "Correct: the case is that movement is a basic liberty and that each barrier now needs a justification it once did without."
      ],
      workedSolution: "Starting from the accident of birthplace, the author builds to a modest conclusion: not that every barrier falls tomorrow but that each now demands justification. That is the primary argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-1005",
      passageId: "psg-science-1016",
      type: "main",
      stem: "Which best states the main point the author is making about noise?",
      options: [
        "Noise is a genuine and unequal harm that, like smoke and sewage, can and should be engineered down.",
        "A truly quiet city would be economically dead.",
        "Noise is a harmless feature of city life that should simply be tolerated.",
        "Only the wealthy are affected by chronic noise."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage treats noise as a real, unequal harm and calls for the same reckoning given to smoke and sewage.",
        "Wrong: this is the view the author attributes to opponents and then rebuts.",
        "Wrong: the author argues we have 'misjudged' noise as harmless.",
        "Wrong: the poor are said to suffer most, but the harm is general; the wealthy merely 'buy quiet.'"
      ],
      workedSolution: "The author reclassifies noise from nuisance to harm, notes its unequal burden, and argues it can be reduced as other pollutants were. The 'real harm, engineer it down' reading is the main point.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-main-1006",
      passageId: "psg-currentaffairs-1018",
      type: "main",
      stem: "What is the author's central thesis about standardised testing?",
      options: [
        "Standardised tests should be abolished because they are inherently unfair.",
        "The test corrects a real injustice but causes harm when it is overweighted, so it should be kept to the size of its job.",
        "Standardised tests should be the single measure of a pupil's worth.",
        "Teacher judgement is always fairer than any examination."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author defends the test as 'a genuine instrument of fairness' against the old favouritism.",
        "Correct: the thesis is balance, the thermometer that is 'a useful thing and a poor god,' kept to the size of its job.",
        "Wrong: the passage warns precisely against letting a score 'come to define' a child.",
        "Wrong: teacher impression is described as open to 'every prejudice,' the very thing the test was meant to cure."
      ],
      workedSolution: "The author credits the test for curbing favouritism, then warns against the weight hung on it, landing on 'not abolition or worship.' The balanced thesis is central.",
      difficulty: "medium",
      source: "illustrative"
    },
    /* ===== AUTHOR'S STANDPOINT / ATTITUDE (1b) ===== */
    {
      id: "q-standpoint-1001",
      passageId: "psg-philosophy-1003",
      type: "standpoint",
      stem: "Which best describes the author's attitude toward online creators?",
      options: [
        "Wholly condemning: the author regards all creators as dishonest.",
        "Nostalgic: the author longs for a lost age of disinterested art.",
        "Critically sympathetic: the author values the openness but presses for honest disclosure of what is paid.",
        "Indifferent: the author takes no position on the ethics involved."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says this is 'not a charge of simple dishonesty.'",
        "Wrong: the author explicitly denies mourning a past 'which never existed.'",
        "Correct: the author celebrates the loss of gatekeepers yet insists paid content be marked as paid.",
        "Wrong: the passage advances a clear duty of disclosure, so it is not indifferent."
      ],
      workedSolution: "The author praises the democratising side, declines to call creators liars, rejects nostalgia, and demands disclosure. That mix is critical sympathy.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-1002",
      passageId: "psg-politics-1006",
      type: "standpoint",
      stem: "What is the author's standpoint on constitutional monarchy?",
      options: [
        "The institution is a harmless ornament that offends no one.",
        "An elected president would always be superior in every respect.",
        "The monarchy should be abolished tomorrow regardless of difficulty.",
        "The institution is indefensible in principle, though removing it would be practically difficult."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the defenders' view, which the author calls 'more flattering than honest.'",
        "Wrong: the author concedes the unity argument has 'something in this,' so the claim is not absolute superiority.",
        "Wrong: the author treats the difficulty as 'a fair warning against haste.'",
        "Correct: the author argues the crown is indefensible yet concedes that unpicking it is 'a long and thankless labour.'"
      ],
      workedSolution: "The author judges even a ceremonial crown non-neutral and indefensible, while granting the practical objection to abolition. The 'indefensible but inconvenient to remove' reading fits.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-1003",
      passageId: "psg-science-1007",
      type: "standpoint",
      stem: "The author's attitude toward cultured meat can best be described as:",
      options: [
        "cautiously open, accepting its promise while insisting it be judged by results, not brochures.",
        "uncritically enthusiastic about its benefits.",
        "firmly opposed to the technology on moral grounds.",
        "convinced that it will certainly fail to scale."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says it is 'no reason to refuse the technology' but asks for 'the patience due to any large promise.'",
        "Wrong: the author lists unstated conditions and quieter costs, so enthusiasm is qualified.",
        "Wrong: the moral arithmetic is called 'hard to argue with'; the author is not opposed.",
        "Wrong: scale is called 'a forecast, not a fact,' which withholds judgement rather than predicting failure."
      ],
      workedSolution: "The author grants the moral case, flags energy and scale conditions, and asks to judge by what reaches the plate. That is cautious openness.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-1004",
      passageId: "psg-currentaffairs-1014",
      type: "standpoint",
      stem: "Which statement best reflects the author's position on congestion pricing?",
      options: [
        "It is an unjust tax on the ordinary act of getting to work.",
        "It honestly prices a scarce road and, designed as a whole, can help even those who do not drive.",
        "It is regressive and therefore should be abandoned.",
        "It makes no difference because the road was free anyway."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says this objection 'mistakes what the fee is for.'",
        "Correct: the author argues the fee replaces a hidden time-toll and that revenue can fund transport for the poor.",
        "Wrong: the author answers the regressive charge by pointing to how revenue is used.",
        "Wrong: the author's point is the opposite, that the road was never truly free but paid for in fumes and delay."
      ],
      workedSolution: "The author reframes the road as a scarce good rationed by time, defends the fee against the regressive charge via revenue use, and calls the old free road a hidden cost. That is clear support.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-1005",
      passageId: "psg-philosophy-1017",
      type: "standpoint",
      stem: "How would you best characterise the author's view of large-scale philanthropy?",
      options: [
        "It is an unambiguous good that should be met only with gratitude.",
        "It is mere vanity that does no measurable good at all.",
        "It does real good but should not be exempted from the scrutiny applied to any other power.",
        "It should be banned because the wealthy cannot be trusted."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author resists 'the easy slide from admiring a gift to exempting the giver.'",
        "Wrong: the passage explicitly affirms the good done is real, not vanity.",
        "Correct: the author grants 'real and measurable good' yet subjects the donor's private power to ordinary questions.",
        "Wrong: the author does not call for prohibition or prefer the money 'stay idle.'"
      ],
      workedSolution: "The author balances genuine good against unaccountable private power and a tax-shaped origin, concluding generosity does not earn exemption from scrutiny. That balanced-but-critical view fits.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-1006",
      passageId: "psg-currentaffairs-1009",
      type: "standpoint",
      stem: "The author regards the legal right to disconnect as:",
      options: [
        "a futile gesture against an unstoppable technological tide.",
        "useless because it can never be enforced in court.",
        "an unwarranted intrusion of the law into private business.",
        "a justified protection that need not forbid willing after-hours work but should remove the expectation of it."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says critics who call it futile are 'wrong on both counts.'",
        "Wrong: the author says the enforcement objection 'proves too little,' since naming a right shifts assumptions.",
        "Wrong: the author argues 'what habit built, law may help unbuild,' endorsing the law.",
        "Correct: the author defends the right while leaving 'room' for the willing midnight email, targeting the expectation."
      ],
      workedSolution: "The author rebuts the futility and meddling charges, distinguishes paid time from surrendered time, and says the law need only remove the expectation. That is clear, qualified support.",
      difficulty: "hard",
      source: "illustrative"
    },
    /* ===== LOGICAL STRUCTURE / ARGUMENT MAP (1c) — incl. argument-flaw cluster (1007-1009) ===== */
    {
      id: "q-structure-1001",
      passageId: "psg-currentaffairs-1001",
      type: "structure",
      stem: "What is the role of the sentence stating that a risk score 'learns the past and hands it back wearing the costume of objectivity'?",
      options: [
        "It crystallises the author's objection that the tool launders historical bias as neutrality.",
        "It restates the champions' promise without comment.",
        "It concedes that the tools are genuinely objective.",
        "It introduces a new policy the author recommends."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the line names the core objection, that biased history is dressed up as neutral fact.",
        "Wrong: it is the author's rebuttal of that promise, not a neutral restatement.",
        "Wrong: the 'costume' image mocks the appearance of objectivity rather than conceding it.",
        "Wrong: the author's policy (audited, one voice among several) comes later, not here."
      ],
      workedSolution: "Placed just after the point that the data records who was caught, the sentence drives home that the tool repackages bias as objectivity. Its role is to crystallise that objection.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-1002",
      passageId: "psg-philosophy-1011",
      type: "structure",
      stem: "In the argument, what function does the observation that an intern's work is often 'real work the firm would otherwise pay for' serve?",
      options: [
        "It is the author's main conclusion.",
        "It is a second, distinct objection added to the access objection already made.",
        "It concedes a point to the defenders of unpaid internships.",
        "It provides statistical evidence about internship outcomes."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the conclusion is that genuine work should command a genuine minimum, not this observation alone.",
        "Correct: after the fairness-of-access objection, this adds a separate charge that mentorship talk masks unpaid labour.",
        "Wrong: it undercuts the defenders rather than conceding to them.",
        "Wrong: no statistics are offered; it is a logical point about the nature of the work."
      ],
      workedSolution: "The passage first argues unpaid internships exclude the poor, then signals 'a second sleight' that real work is disguised mentorship. The phrase introduces that distinct, additional objection.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-1003",
      passageId: "psg-politics-1008",
      type: "structure",
      stem: "How does the author handle the objection that 'wilderness is a luxury of the rich'?",
      options: [
        "By ignoring it as unworthy of reply.",
        "By accepting it and abandoning the case for preservation.",
        "By acknowledging it deserves a serious answer, then arguing the choice it describes is often false.",
        "By claiming the rich never benefit from preservation."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says it 'deserves more than a pious answer,' i.e. it is engaged, not ignored.",
        "Wrong: the author maintains the case, calling the honest claim 'narrower and stronger.'",
        "Correct: the author grants the objection's seriousness, then shows destruction has more often enriched distant shareholders than locals.",
        "Wrong: the passage does not deny benefit to the rich; it disputes that preservation is theft from the poor."
      ],
      workedSolution: "The author names the objection, calls for a serious answer, then argues the rich-versus-poor choice is 'often false.' The structure is concede-seriousness-then-rebut.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-1004",
      passageId: "psg-science-1013",
      type: "structure",
      stem: "What is the role of the claim that a convincing forgery is 'oddly, the lesser one' of the dangers?",
      options: [
        "It dismisses all concern about deepfakes as overblown.",
        "It offers technical evidence about how forgeries are made.",
        "It is the passage's final conclusion.",
        "It pivots the argument from the obvious fear toward the deeper harm the author wants to stress."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls the forgery danger 'real,' not overblown.",
        "Wrong: no technical account of fabrication is given.",
        "Wrong: the conclusion concerns authentication technology, reached later.",
        "Correct: by ranking the forgery as lesser, the author turns attention to the erosion of trust, the deeper injury."
      ],
      workedSolution: "Calling the forgery the lesser danger is a hinge: it sets aside the obvious worry to foreground the corrosion of trust ('the liar's true gift'). Its role is that pivot.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-1005",
      passageId: "psg-history-1015",
      type: "structure",
      stem: "What role does the sentence about a 'world that changes its trades every decade' play in the argument?",
      options: [
        "It turns a common objection into support for the author's own thesis.",
        "It concedes that narrow training is the safer choice.",
        "It is an aside unrelated to the main claim.",
        "It introduces statistics about automation rates."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the very changeability usually urged against the liberal arts is recast as 'a stronger argument' for them.",
        "Wrong: the author argues the opposite, that the narrowly trained worker is 'most easily stranded.'",
        "Wrong: it is central, supplying the modern justification for a broad education.",
        "Wrong: no statistics are given; the point is conceptual."
      ],
      workedSolution: "The author takes the fast-changing job market, normally a case for specialisation, and flips it into a reason for breadth. The sentence performs that reversal.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-1006",
      passageId: "psg-currentaffairs-1002",
      type: "structure",
      stem: "What is the function of the sentence 'Knowledge is not behaviour' within the passage?",
      options: [
        "It states the conclusion that financial education must be compulsory.",
        "It is the pivot that launches the author's main objection to the proposal's effectiveness.",
        "It concedes that arithmetic ability prevents overspending.",
        "It summarises the views of those who oppose teaching any mathematics."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: it does not argue for compulsion; the author is qualifying that case.",
        "Correct: this short sentence turns from sympathy to the central objection that knowing the maths does not change spending.",
        "Wrong: it asserts the opposite, that the knowledgeable 'still run up the same balances.'",
        "Wrong: no one in the passage opposes teaching mathematics generally."
      ],
      workedSolution: "Right after expressing sympathy, the author writes 'Knowledge is not behaviour' and then explains why information fails to curb spending. The sentence pivots into the main objection.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-1007",
      passageId: "psg-currentaffairs-1001",
      type: "structure",
      stem: "Suppose someone argued: 'Defendants the model flags as high-risk do reoffend more often, so the model proves those individuals are dangerous.' Which best identifies the flaw in that argument?",
      options: [
        "It commits a circular argument, assuming what it sets out to prove.",
        "It presents a false dichotomy between two options.",
        "It mistakes a statistical pattern across a group for a settled fact about each individual (a scope error from group to person).",
        "It attacks the person rather than the claim."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: nothing here is assumed identical to its conclusion; the flaw is about scope, not circularity.",
        "Wrong: no two-option choice is being forced.",
        "Correct: the passage warns the score 'predicts groups, not persons,' so moving from a group rate to certainty about one person is a scope error.",
        "Wrong: no personal attack is involved."
      ],
      workedSolution: "The passage states a forty-per-cent group rate 'tells us nothing certain about the individual.' Treating a group statistic as proof about one defendant is the group-to-individual scope error.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-1008",
      passageId: "psg-politics-1006",
      type: "structure",
      stem: "A defender says: 'We must keep the monarchy, because the only alternative is the chaos of a divided republic.' Which best identifies the flaw in this reasoning?",
      options: [
        "It generalises hastily from a single example.",
        "It relies on a word used in two different senses.",
        "It confuses correlation with causation.",
        "It poses a false dichotomy, ignoring that dignified republics achieve stability without a hereditary head."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: no leap from one instance to a rule is made.",
        "Wrong: no single ambiguous term carries the argument.",
        "Wrong: no causal link from correlation is drawn.",
        "Correct: the passage notes 'republics whose ceremonial presidents manage to be dignified,' so 'monarchy or chaos' omits a real third option."
      ],
      workedSolution: "The argument forces a choice between monarchy and chaotic republic. The passage itself supplies the missing option, stable ceremonial republics, exposing the false dichotomy.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-structure-1009",
      passageId: "psg-science-1016",
      type: "structure",
      stem: "Someone argues: 'The busiest, noisiest streets also have the most economic activity, so the noise must be what drives the prosperity.' Which best identifies the flaw?",
      options: [
        "It treats a correlation between noise and activity as proof that noise causes prosperity.",
        "It begs the question by assuming its conclusion.",
        "It generalises from one unrepresentative street.",
        "It shifts the meaning of 'prosperity' midway through."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage distinguishes useful activity from its 'careless by-product,' so co-occurrence does not show noise produces prosperity.",
        "Wrong: the conclusion is not smuggled into the premise; the error is causal inference.",
        "Wrong: the claim is about busy streets in general, not one example.",
        "Wrong: 'prosperity' is used consistently; the flaw is correlation-to-causation."
      ],
      workedSolution: "Busy streets being both noisy and active is a correlation. The passage argues much noise is a needless by-product, not the cause of activity, so inferring causation is the flaw.",
      difficulty: "hard",
      source: "illustrative"
    },
    /* ===== EXPLICIT COMPREHENSION / STATED FACT (2a) ===== */
    {
      id: "q-detail-1001",
      passageId: "psg-science-1005",
      type: "detail",
      stem: "According to the passage, why can a genome not be treated like a password?",
      options: [
        "Because a genome is easier to memorise than a password.",
        "Because a genome cannot be reissued or changed after a breach.",
        "Because passwords are shared with relatives but genomes are not.",
        "Because genomes are always perfectly anonymous."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage makes no claim about memorising a genome.",
        "Correct: it states 'A password can be changed after a breach; a genome cannot be reissued.'",
        "Wrong: the passage says the genome, not the password, is shared with relatives.",
        "Wrong: it argues anonymity has been 'hollowed out,' the opposite of perfect anonymity."
      ],
      workedSolution: "The text directly contrasts a changeable password with a genome that 'cannot be reissued' and 'is there for good.' That stated contrast is the answer.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-1002",
      passageId: "psg-currentaffairs-1014",
      type: "detail",
      stem: "What does the passage state is the 'currency no one can earn more of' that drivers pay in a traffic jam?",
      options: [
        "Money.",
        "Fuel.",
        "Time.",
        "Patience."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: money is the open toll the scheme introduces, not the hidden one.",
        "Wrong: fumes and fuel are mentioned elsewhere, not as this currency.",
        "Correct: the passage says everyone pays 'in the one currency no one can earn more of, which is time.'",
        "Wrong: patience is not named; the stated currency is time."
      ],
      workedSolution: "The sentence explicitly identifies the currency as time. That is a direct comprehension point.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-1003",
      passageId: "psg-philosophy-1011",
      type: "detail",
      stem: "According to the passage, who is able to accept an unpaid internship?",
      options: [
        "The most able candidates regardless of background.",
        "Anyone willing to work hard enough.",
        "Only candidates who already hold a degree.",
        "Those whose families can support them through unpaid months."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says the role is 'not awarded to the most able.'",
        "Wrong: willingness is irrelevant if one cannot afford to forgo wages.",
        "Wrong: a degree requirement is not mentioned.",
        "Correct: the text says a young person 'must be supported by someone,' so it is open only to the well-funded."
      ],
      workedSolution: "The passage states the unpaid internship is 'open only to those whose families can fund it.' That stated fact is the answer.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-detail-1004",
      passageId: "psg-science-1007",
      type: "detail",
      stem: "Under what condition does the passage say cultured meat is actually 'clean'?",
      options: [
        "Only if the energy that powers the vats is itself clean.",
        "Whenever no animal is slaughtered to make it.",
        "As soon as it reaches supermarket prices.",
        "Only when it is grown in a countryside full of grazing animals."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the text says it 'is clean only if the energy that powers the vats is clean.'",
        "Wrong: sparing the animal is the moral case, but the cleanliness claim is tied to energy.",
        "Wrong: price concerns scale, not cleanliness.",
        "Wrong: the passage discusses an emptied countryside as a separate cost, not a cleanliness condition."
      ],
      workedSolution: "The passage explicitly conditions cleanliness on clean energy, warning that a coal-fed grid could warm the climate as much as the herd. That stated condition is the answer.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-1005",
      passageId: "psg-currentaffairs-1018",
      type: "detail",
      stem: "What does the passage state was the situation a standardised test was meant to cure?",
      options: [
        "Pupils being judged by an examination marked to one standard.",
        "Pupils being judged by the impression they made on a teacher, open to prejudice.",
        "Schools teaching too broad a curriculum.",
        "A shortage of teachers in poor neighbourhoods."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the common examination is the cure, not the disease.",
        "Correct: the text says before the test a pupil 'was judged by the impression she made on a teacher,' open to prejudice.",
        "Wrong: narrow teaching to the test is a later harm, not the original problem.",
        "Wrong: teacher shortages are not mentioned."
      ],
      workedSolution: "The passage describes the pre-test world of teacher impressions tainted by 'class and accent and familiar face' as the injustice the test addressed. That is the stated answer.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-1006",
      passageId: "psg-currentaffairs-1009",
      type: "detail",
      stem: "According to the passage, what does the right to disconnect 'need only' do?",
      options: [
        "Forbid all contact between employer and employee after hours.",
        "Require employers to pay overtime for every evening email.",
        "Remove the expectation that out-of-hours messages are owed an answer.",
        "Ban the use of work technology at home entirely."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says it 'need not forbid the willing midnight email.'",
        "Wrong: overtime pay is not the mechanism the author describes.",
        "Correct: the text says it 'need only remove the expectation that one is owed.'",
        "Wrong: no outright ban on home technology is proposed."
      ],
      workedSolution: "The passage states the law 'need only remove the expectation that one is owed,' leaving room for willing work. That stated limit is the answer.",
      difficulty: "easy",
      source: "illustrative"
    },
    /* ===== STATED vs IMPLIED (2b) ===== */
    {
      id: "q-implied-1001",
      passageId: "psg-literature-1004",
      type: "implied",
      stem: "Which of the following is implied, rather than directly stated, by the passage?",
      options: [
        "A handwritten letter can show a mind changing course through its crossings-out.",
        "Every font looks the same.",
        "The keyboard is faster than the pen.",
        "Note-takers who record every word may understand their notes less well than those who must select."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the crossings-out point is stated directly.",
        "Wrong: 'every font is the same font' is stated explicitly.",
        "Wrong: the keyboard's speed is stated outright.",
        "Correct: the passage states the typist captures words 'without deciding which matter'; the resulting weaker understanding is left for the reader to draw."
      ],
      workedSolution: "The text says the typist captures everything 'without deciding which matter' and that such a transcript is 'half forgotten.' That selecting aids understanding is the implied step, not a stated rule.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-1002",
      passageId: "psg-politics-1006",
      type: "implied",
      stem: "The passage most strongly implies which of the following?",
      options: [
        "Arguments from mere inconvenience have long protected privileges that had lost their justification.",
        "The monarchy appears on coins and at coronations.",
        "A republic announces that any child might hold the first office.",
        "The monarch reigns without ruling."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the closing line about 'every privilege that ever outlived its reasons' implies such arguments routinely shield outdated privilege.",
        "Wrong: coins and coronations are stated directly.",
        "Wrong: this republican announcement is stated in the text.",
        "Wrong: 'reigns without ruling' is a stated description."
      ],
      workedSolution: "By likening the inconvenience argument to 'the sort of argument that has preserved every privilege that ever outlived its reasons,' the author implies a general pattern without stating it as a rule.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-1003",
      passageId: "psg-currentaffairs-1001",
      type: "implied",
      stem: "Which point is implied by the passage but not directly asserted?",
      options: [
        "Risk scores are built from historical conviction data.",
        "The firms that sell the software may shield their methods from public scrutiny.",
        "A judge has only minutes and a hunch.",
        "The score arrives with a decimal point."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the historical-data origin is stated plainly.",
        "Correct: the reference to 'trade secrets of the firm' implies the methods can be hidden from scrutiny without saying so outright.",
        "Wrong: 'minutes and a hunch' is stated directly.",
        "Wrong: the decimal-point detail is explicitly stated."
      ],
      workedSolution: "The phrase 'hidden behind the trade secrets of the firm' lets the reader infer that proprietary secrecy blocks scrutiny, an implication rather than a direct claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-1004",
      passageId: "psg-philosophy-1010",
      type: "implied",
      stem: "What does the passage imply about a scheme in which people sell their personal data?",
      options: [
        "It is impossible to implement.",
        "Information is unlike a chair because many can hold it at once.",
        "It would leave the poorest least able to protect their privacy.",
        "Companies currently claim to own the data users generate."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: feasibility is not the author's point; fairness is.",
        "Wrong: the chair comparison is stated explicitly.",
        "Correct: saying such a market 'would press hardest on those with least to live on' implies the poor end up least protected.",
        "Wrong: the corporate ownership claim is stated directly."
      ],
      workedSolution: "From 'a right you are encouraged to sell is soon a right only the desperate exercise,' the reader infers the poor lose privacy protection. That consequence is implied.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-1005",
      passageId: "psg-science-1013",
      type: "implied",
      stem: "Which of the following is most clearly implied by the passage?",
      options: [
        "A fabricated video can in principle be exposed.",
        "Software can graft a face onto footage a person never filmed.",
        "The technology cannot be recalled once released.",
        "A genuine recording of wrongdoing could be dismissed as a probable fake."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the exposability of a forgery is stated explicitly.",
        "Wrong: the face-grafting capability is stated outright.",
        "Wrong: that the tools 'cannot be recalled' is stated directly.",
        "Correct: the implication of widespread doubt is that the real video catching wrongdoing 'can be waved away as a probable fake.'"
      ],
      workedSolution: "While the passage states the doubt directly in one place, the worked danger, that real evidence loses its force, is the implication the author wants the reader to grasp from 'the liar's true gift.'",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-1006",
      passageId: "psg-history-1015",
      type: "implied",
      stem: "The passage implies which of the following about narrowly trained workers?",
      options: [
        "They are the most easily stranded when their craft is automated.",
        "They earn higher wages than broadly educated workers.",
        "A liberal-arts degree is ruinously expensive.",
        "The world changes its trades every decade."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: this is the author's stated point, presented as the very reason breadth matters.",
        "Wrong: no wage comparison is made or implied.",
        "Wrong: the cost of a degree is stated directly, not implied.",
        "Wrong: the changing-trades claim is stated outright."
      ],
      workedSolution: "The text states the narrowly trained worker is 'most easily stranded when his one craft is automated away.' Among the options, this is the supported point, the others being explicit details.",
      difficulty: "medium",
      source: "illustrative"
    },
    /* ===== INFERENCE / IMPLICATION (3a) ===== */
    {
      id: "q-inference-1001",
      passageId: "psg-currentaffairs-1002",
      type: "inference",
      stem: "Which conclusion does the passage best support?",
      options: [
        "Teaching budgeting alone is enough to lift people out of hardship.",
        "A financial-literacy course is more valuable when it teaches suspicion of lenders, not only arithmetic.",
        "Compound interest is impossible for most adults to understand.",
        "Schools should stop teaching geometry."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author argues budgeting alone implies hardship is the borrower's fault.",
        "Correct: the author says a worthwhile course 'would teach suspicion as much as sums,' supporting this inference.",
        "Wrong: the passage says people can define compound interest, so understanding is not impossible.",
        "Wrong: geometry is only an opening contrast, not a target for removal."
      ],
      workedSolution: "Because the author faults thrift-only teaching and praises courses that name 'the tricks of the lender,' the supported conclusion is that suspicion adds value beyond arithmetic.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-1002",
      passageId: "psg-politics-1008",
      type: "inference",
      stem: "From the passage, which of the following can most reasonably be inferred?",
      options: [
        "Usefulness to humans is the only valid measure of a place's worth.",
        "Preservation always harms the local poor.",
        "A society capable of remaking everything bears a special responsibility to choose to leave some things untouched.",
        "Old forests can be quickly recreated once destroyed."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author says this assumption is 'precisely what is in question.'",
        "Wrong: the author argues the harm-to-poor claim describes 'often false' choices.",
        "Correct: the closing claim that such a civilisation has 'all the more reason' to leave things alone supports this.",
        "Wrong: the passage stresses some values 'cannot be manufactured or restored once lost.'"
      ],
      workedSolution: "The conclusion that a civilisation able to remake everything should deliberately leave some things alone follows directly from the author's final, narrowest claim.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-1003",
      passageId: "psg-philosophy-1003",
      type: "inference",
      stem: "Which of the following best follows from the author's reasoning?",
      options: [
        "Audiences are always fully aware when a creator is being paid.",
        "There was once a golden age of disinterested art.",
        "All paid endorsements are dishonest by nature.",
        "Disclosure of paid content matters most for audiences least able to spot it, such as the young."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says audiences are 'rarely told where the friendship ends.'",
        "Wrong: the author calls that golden age something 'which never existed.'",
        "Wrong: the author denies this is 'a charge of simple dishonesty.'",
        "Correct: since the young are 'least equipped to find the seam,' disclosure protects them most, a supported inference."
      ],
      workedSolution: "Because audiences are rarely told and the young can least detect the paid seam, the duty of disclosure matters most for them. That inference is well supported.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-1004",
      passageId: "psg-science-1005",
      type: "inference",
      stem: "Which conclusion is best supported by the passage?",
      options: [
        "One person's decision to share a genome can expose relatives who never consented.",
        "Genetic testing has produced no benefits worth mentioning.",
        "A genome can be reissued like a password after a breach.",
        "Anonymity of genetic data is fully guaranteed."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: because a genome is 'shared in large part' with relatives, one person's disclosure implicates many, the passage's closing inference.",
        "Wrong: the author credits the science with lengthening lives and cracking cold cases.",
        "Wrong: the text says a genome 'cannot be reissued.'",
        "Wrong: anonymity is said to be 'hollowed out.'"
      ],
      workedSolution: "The passage concludes that consent by one is 'consent given on behalf of many who were never asked,' supporting the inference about exposing relatives.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-1005",
      passageId: "psg-currentaffairs-1014",
      type: "inference",
      stem: "Which of the following can most reasonably be inferred from the passage?",
      options: [
        "Public transport is irrelevant to congestion pricing.",
        "Whether a charge is regressive can depend on how its revenue is spent.",
        "Roads at rush hour are not scarce.",
        "Drivers gain nothing by paying the fee."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage makes transport central to the rebuttal.",
        "Correct: the author argues a policy is regressive 'in its whole design,' so revenue use can change the verdict.",
        "Wrong: the road is explicitly 'a scarce thing.'",
        "Wrong: the driver who pays 'buys back the minutes' lost to the jam."
      ],
      workedSolution: "Since the author insists regressivity is judged across the whole design, including returned revenue, it follows that spending choices can determine whether the charge is regressive.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-1006",
      passageId: "psg-philosophy-1017",
      type: "inference",
      stem: "Which conclusion does the passage most support about a very large charitable gift?",
      options: [
        "It should be exempted from the scrutiny applied to other forms of power.",
        "It always does more harm than good.",
        "It can confer on one unelected person significant influence over public priorities.",
        "It proves the giver gathered the fortune fairly."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author resists exactly this exemption.",
        "Wrong: the author affirms the good done is 'real and measurable.'",
        "Correct: the text says the donor 'exercises a kind of private power over public priorities,' supporting this inference.",
        "Wrong: the passage suggests the fortune may reflect favourable rules or spared taxes, not proven fairness."
      ],
      workedSolution: "From the donor deciding 'which diseases are studied and which schools are built' while accountable to no electorate, it follows that a large gift can confer real public power.",
      difficulty: "medium",
      source: "illustrative"
    },
    /* ===== FACT vs INFERENCE (3b) ===== */
    {
      id: "q-factinf-1001",
      passageId: "psg-currentaffairs-1001",
      type: "factinf",
      stem: "Which of the following is presented in the passage as a stated fact rather than as the author's inference?",
      options: [
        "Risk scores merely hand the past back as objectivity.",
        "The number's decimal point lends it unearned authority.",
        "A risk model should never become the judge.",
        "Courts in several countries now consult software that scores a defendant's risk of reoffending."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the author's interpretive inference about the tools.",
        "Wrong: the claim about unearned authority is an inference the author draws.",
        "Wrong: this is the author's normative conclusion.",
        "Correct: that courts now consult such software is stated as a plain fact at the outset."
      ],
      workedSolution: "The opening sentence reports the factual practice of courts using risk software; the other options are the author's evaluative inferences built on top of that fact.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-1002",
      passageId: "psg-science-1007",
      type: "factinf",
      stem: "Which statement is offered as a fact in the passage rather than as a forecast or inference?",
      options: [
        "Meat grown from cells in a steel tank has moved from the laboratory toward the dinner plate.",
        "Cultured meat will feed a crowded planet.",
        "Cultured meat will spare the climate as well as the cow.",
        "A countryside emptied of grazing animals is a way of life undone."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: that the technology 'has moved from the laboratory bench toward the dinner plate' is stated as a present fact.",
        "Wrong: feeding the planet is described as a promise, a forecast.",
        "Wrong: sparing the climate depends on clean energy, a conditional inference.",
        "Wrong: this is the author's evaluative inference about a cost."
      ],
      workedSolution: "The movement of cultured meat toward the plate is reported as having happened; the other options are promises or interpretive claims the author scrutinises.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-1003",
      passageId: "psg-science-1005",
      type: "factinf",
      stem: "Which of these is a fact the passage reports, as opposed to a conclusion it draws?",
      options: [
        "Consent to share a genome is consent given on behalf of many.",
        "Research has shown a surname can often be recovered from a supposedly nameless sequence.",
        "A genome is the peculiar thing the author says it is.",
        "Genetic data should be treated with special care."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is the author's concluding inference about consent.",
        "Correct: the recovery of surnames from anonymous sequences is reported as an established research finding.",
        "Wrong: calling the genome 'peculiar' is the author's characterisation.",
        "Wrong: how data 'should' be treated is a normative conclusion."
      ],
      workedSolution: "The passage cites research showing re-identification as a fact; the remaining options are the inferences and recommendations the author builds from it.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-factinf-1004",
      passageId: "psg-currentaffairs-1009",
      type: "factinf",
      stem: "Which of the following does the passage present as a fact rather than as the author's interpretation?",
      options: [
        "Rest taken with one ear open is not rest.",
        "The expectation of after-hours availability is a habit, not a force of nature.",
        "Several countries have written a right to disconnect into law.",
        "Naming a right shifts what employers may assume."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the author's interpretive claim about rest.",
        "Wrong: calling the expectation a 'habit' is the author's framing.",
        "Correct: that several countries have enacted such a law is reported as a fact.",
        "Wrong: the effect of naming a right is an inference the author offers."
      ],
      workedSolution: "The legislative fact opens the passage; the other options are the author's interpretations and inferences about that fact.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-1005",
      passageId: "psg-science-1016",
      type: "factinf",
      stem: "Which statement is reported as factual evidence rather than as the author's evaluative claim?",
      options: [
        "Noise is the pollution we have agreed to ignore.",
        "Noise is overdue for the same reckoning as smoke and sewage.",
        "Much harmful noise is a careless by-product we gain nothing from.",
        "Chronic noise raises the body's alarm even during sleep and is linked to raised blood pressure."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the author's framing of how society treats noise.",
        "Wrong: 'overdue for the same reckoning' is the author's recommendation.",
        "Wrong: 'careless by-product we gain nothing from' is an evaluative claim.",
        "Correct: the physiological effects are presented as what 'the evidence suggests,' i.e. factual support."
      ],
      workedSolution: "The health effects are offered as evidence; the others are the author's evaluations and prescriptions resting on that evidence.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-1006",
      passageId: "psg-politics-1012",
      type: "factinf",
      stem: "Which of the following is presented as the author's inference rather than as a stated fact?",
      options: [
        "Freedom of movement ought to count among the basic liberties.",
        "A child's life chances are strongly shaped by the country of birth.",
        "Large-scale movement strains schools, housing, and services.",
        "Some borders are defended with considerable force."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: that movement 'ought to be counted among the basic liberties' is the normative inference the author draws.",
        "Wrong: the influence of birthplace is presented as a near-factual starting premise.",
        "Wrong: the strain on services is conceded as a practical fact.",
        "Wrong: the forceful defence of borders is described as a fact."
      ],
      workedSolution: "The claim that movement should be a basic liberty is the value-laden inference; the other options are factual premises the author accepts.",
      difficulty: "hard",
      source: "illustrative"
    },
    /* ===== IDENTIFYING ASSUMPTIONS (4a) — incl. argument-flaw cluster (1007-1009) ===== */
    {
      id: "q-assume-1001",
      passageId: "psg-currentaffairs-1002",
      type: "assume",
      stem: "The author's argument that financial education taught as thrift can mislead relies on which unstated assumption?",
      options: [
        "Schools currently teach no mathematics at all.",
        "Hardship has causes beyond an individual's budgeting choices.",
        "Compound interest is impossible to define.",
        "Advertising has no effect on spending."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage acknowledges schools teach geometry, so this is contradicted.",
        "Correct: the worry that thrift-only teaching 'blames the borrower' assumes wages and prices, not just budgeting, drive hardship.",
        "Wrong: the author says people can define compound interest, so this is not assumed.",
        "Wrong: the author cites advertising as a driver of spending, the opposite of this."
      ],
      workedSolution: "For 'hardship is a budgeting failure' to be a misleading implication, hardship must have other causes. That unstated premise underwrites the argument.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-1002",
      passageId: "psg-philosophy-1011",
      type: "assume",
      stem: "The claim that unpaid internships fill a profession with 'the children of people already inside it' assumes which of the following?",
      options: [
        "Talent is distributed only among wealthy families.",
        "Internships teach nothing of value.",
        "The ability to afford unpaid work is not evenly spread across society.",
        "Every firm offers unpaid internships."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author's point is that talent is missed, implying it is spread widely, not concentrated in the rich.",
        "Wrong: the author concedes some gains 'genuinely cannot be paid in cash.'",
        "Correct: the argument needs the premise that only some families can fund unpaid months, so access tracks wealth.",
        "Wrong: the universality of unpaid internships is neither claimed nor needed."
      ],
      workedSolution: "The exclusion argument works only if affording unpaid work is unequally distributed; otherwise the internship would not filter by wealth. That is the required assumption.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-1003",
      passageId: "psg-currentaffairs-1014",
      type: "assume",
      stem: "The author's defence of congestion pricing against the charge of regressivity assumes which unstated premise?",
      options: [
        "The road was genuinely free of any cost.",
        "No driver values their time.",
        "Public transport cannot be improved.",
        "The revenue raised will actually be returned to improve public transport."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author insists the road was never truly free, so this is rejected.",
        "Wrong: the author argues drivers value time highly, paying to buy minutes back.",
        "Wrong: the whole rebuttal presumes transport can be improved with the revenue.",
        "Correct: the rebuttal works only if the money 'can be returned' is actually used to fund cheaper, faster transit."
      ],
      workedSolution: "The claim that the policy need not be regressive depends on revenue actually funding transit. Without that, the flat fee would press hardest on the poor. That is the hidden premise.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-1004",
      passageId: "psg-politics-1006",
      type: "assume",
      stem: "When the author calls even a ceremonial crown 'not neutral,' the argument assumes which of the following?",
      options: [
        "Institutions teach values simply by existing and being honoured.",
        "Monarchs always interfere in day-to-day politics.",
        "Republics never experience instability.",
        "Coronations are inexpensive."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: claiming the crown 'teaches, by its mere existence' assumes institutions transmit values through their presence.",
        "Wrong: the author accepts the monarch 'reigns without ruling,' so daily interference is not assumed.",
        "Wrong: the author concedes the unity argument has merit, not that republics are always stable.",
        "Wrong: the cost of coronations is not part of the neutrality claim."
      ],
      workedSolution: "For a purely ceremonial crown to be non-neutral, mere existence must carry a lesson. That assumption about institutions teaching by example is required.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-1005",
      passageId: "psg-science-1013",
      type: "assume",
      stem: "The author's claim that authentication is a better answer than a ban assumes which unstated premise?",
      options: [
        "Deepfakes cause no personal harm.",
        "The fabrication tools cannot in practice be removed from circulation.",
        "Genuine recordings are never doubted.",
        "Forgeries can never be exposed."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author stresses a real personal harm, so this is contradicted.",
        "Correct: preferring authentication over prohibition presumes the tools are 'loose in the world and cannot be recalled.'",
        "Wrong: the author's whole worry is that genuine recordings will be doubted.",
        "Wrong: the author says a forgery 'can in principle be exposed.'"
      ],
      workedSolution: "Recommending authentication instead of a ban makes sense only if a ban is futile because the tools cannot be recalled. That is the load-bearing assumption.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-1006",
      passageId: "psg-philosophy-1010",
      type: "assume",
      stem: "The argument that a market in personal data 'would press hardest on those with least to live on' assumes which premise?",
      options: [
        "Companies do not currently claim ownership of user data.",
        "Information behaves exactly like a physical object.",
        "Poorer people would be more willing to trade privacy for small sums.",
        "Privacy has no value to anyone."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author states companies do claim ownership, contradicting this.",
        "Wrong: the author argues information is unlike a chair, so this is rejected.",
        "Correct: the claim needs the premise that the poor, lacking alternatives, would sell privacy cheaply.",
        "Wrong: the worry presupposes privacy is valuable, the opposite of this."
      ],
      workedSolution: "For the market to fall hardest on the poor, the poor must be the ones who 'trade their privacy by the penny.' That behavioural assumption underlies the argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-1007",
      passageId: "psg-currentaffairs-1002",
      type: "assume",
      stem: "Consider this argument: 'Most people in serious debt never took a financial-literacy class, so such classes would prevent serious debt.' Which best identifies the flaw in this argument?",
      options: [
        "It generalises hastily from a single case.",
        "It uses 'debt' in two different senses.",
        "It poses a false dichotomy.",
        "It treats a correlation (no class, in debt) as if it established that classes prevent debt."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: it appeals to 'most people,' not one case.",
        "Wrong: 'debt' is used consistently throughout.",
        "Wrong: no forced two-way choice is present.",
        "Correct: the passage's point that 'knowledge is not behaviour' shows the class-debt link is mere correlation, not proven prevention."
      ],
      workedSolution: "The argument leaps from 'lacked a class and in debt' to 'classes prevent debt.' The passage warns knowledge does not change behaviour, exposing the correlation-versus-causation flaw.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-1008",
      passageId: "psg-philosophy-1011",
      type: "assume",
      stem: "A recruiter argues: 'Our last three unpaid interns went on to great careers, which proves unpaid internships are good for everyone who takes them.' Which best identifies the flaw?",
      options: [
        "It generalises hastily from three unrepresentative successes to a claim about everyone.",
        "It commits a circular argument.",
        "It confuses two meanings of the word 'career.'",
        "It presents a false dichotomy between paid and unpaid work."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage notes the unpaid model excludes those who cannot afford it, so three successes cannot speak for 'everyone.'",
        "Wrong: the conclusion is not assumed in the premise; the error is over-generalising.",
        "Wrong: 'career' is used in one sense.",
        "Wrong: no forced binary is offered."
      ],
      workedSolution: "Three favourable cases cannot support a universal claim, especially when, as the passage argues, many are barred from the opportunity. That is a hasty generalisation.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-assume-1009",
      passageId: "psg-currentaffairs-1018",
      type: "assume",
      stem: "Someone argues: 'A standardised test is fair because it measures pupils objectively, and we know it is objective because it is standardised.' Which best identifies the flaw?",
      options: [
        "It generalises from one school to all schools.",
        "It argues in a circle, using 'standardised' to prove 'objective' and back again.",
        "It confuses correlation with causation.",
        "It poses a false dichotomy between fairness and favouritism."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: no single example is being over-extended.",
        "Correct: the conclusion (objective, hence fair) is smuggled into the premise (standardised, hence objective), a circular argument.",
        "Wrong: no causal claim from a correlation is made.",
        "Wrong: although the passage discusses fairness and favouritism, this particular argument's fault is its circularity."
      ],
      workedSolution: "The reasoning assumes objectivity to prove fairness while resting objectivity on the bare fact of standardisation, so it presupposes what it should establish. That is circularity.",
      difficulty: "hard",
      source: "illustrative"
    },
    /* ===== OPINION vs ASSUMPTION (4b) ===== */
    {
      id: "q-opinion-1001",
      passageId: "psg-philosophy-1017",
      type: "opinion",
      stem: "Which of the following is best described as an opinion the author openly expresses, rather than an unstated assumption?",
      options: [
        "That electorates exist to hold officials to account.",
        "That accountability is a value worth applying to power.",
        "Public priorities ought to be set accountably rather than by private donors alone.",
        "That diseases can be studied with funding."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the role of electorates is a background premise the author takes for granted.",
        "Wrong: the value of accountability is the unstated background assumption, not the stated opinion.",
        "Correct: the author openly judges that generosity 'does not earn the right to govern from outside the rules,' an expressed opinion.",
        "Wrong: that funding enables research is an unstated factual assumption."
      ],
      workedSolution: "The stated opinion is the author's verdict that donors should not govern from outside the rules; the assumption beneath it is that accountability ought to govern power. The question asks for the expressed opinion.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-1002",
      passageId: "psg-literature-1004",
      type: "opinion",
      stem: "Which statement is an opinion the author asserts rather than an assumption left unstated?",
      options: [
        "That lecturers speak faster than a hand can write.",
        "That attention is something worth preserving.",
        "That tools can possess virtues at all.",
        "Speed should not be treated as the only virtue a tool can have."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the relative speed of speech and handwriting is a factual assumption.",
        "Wrong: the worth of attention is an underlying assumption, not the headline opinion.",
        "Wrong: that tools have virtues is a background premise.",
        "Correct: the author plainly argues against 'treating speed as the only virtue,' an expressed opinion."
      ],
      workedSolution: "The author's stated opinion is that speed is not the only virtue; the value of attention is the quieter assumption supporting it. The stem asks for the asserted opinion.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-1003",
      passageId: "psg-politics-1008",
      type: "opinion",
      stem: "Which of the following expresses the author's opinion rather than a hidden assumption of the argument?",
      options: [
        "A civilisation able to remake everything should deliberately leave some things alone.",
        "That leaving things alone is possible for such a civilisation.",
        "That wild places can be destroyed by human action.",
        "That shareholders can be distant from the land they affect."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the closing judgement is the author's stated opinion.",
        "Wrong: the possibility of leaving things alone is presupposed, an assumption.",
        "Wrong: that wild places can be destroyed is a factual premise.",
        "Wrong: the distance of shareholders is a background assumption in the rebuttal."
      ],
      workedSolution: "The stated opinion is the prescription to leave some things alone; that doing so is even possible is the assumption behind it. The stem asks for the expressed opinion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-1004",
      passageId: "psg-currentaffairs-1009",
      type: "opinion",
      stem: "Which of the following is an opinion the author states outright?",
      options: [
        "That workers are entitled to rest at all.",
        "Rest taken with one ear open is not real rest.",
        "That employers can send messages at night.",
        "That technology made constant contact easy."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: an entitlement to rest is an underlying assumption, not the stated line.",
        "Correct: 'rest taken with one ear open is not rest' is the author's expressed evaluative opinion.",
        "Wrong: that employers can message at night is a factual premise.",
        "Wrong: that technology eased contact is a stated factual background, not the evaluative opinion in question."
      ],
      workedSolution: "The vivid claim that interrupted rest is not rest is the author's stated opinion; the entitlement to rest is the assumption beneath it. The stem seeks the expressed opinion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-1005",
      passageId: "psg-science-1007",
      type: "opinion",
      stem: "Which statement is best read as the author's opinion rather than an unstated assumption?",
      options: [
        "That vats require energy to operate.",
        "That results can be observed once the product reaches the plate.",
        "A large promise should be greeted with patience and judged by results.",
        "That forests are cleared to graze livestock."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: that vats need energy is a factual premise.",
        "Wrong: that results are observable is an assumption enabling that opinion.",
        "Correct: the call to greet promises with patience is the author's stated opinion.",
        "Wrong: that forests are cleared for grazing is a stated factual background."
      ],
      workedSolution: "The author's expressed opinion is to demand patience and judge by outcomes; that outcomes can be observed is the supporting assumption. The stem asks for the opinion.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-1006",
      passageId: "psg-currentaffairs-1018",
      type: "opinion",
      stem: "Which of the following expresses the author's opinion rather than a background assumption?",
      options: [
        "That examinations can be marked to a single standard.",
        "That a mind can be measured to some degree.",
        "That schools respond to what tests reward.",
        "A test used as the whole measure of a mind manufactures a new injustice."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: that exams can be marked to one standard is a stated factual background.",
        "Wrong: that a mind is measurable at all is an underlying assumption.",
        "Wrong: that schools respond to incentives is a factual premise.",
        "Correct: the verdict that over-weighting the test 'manufactures a new one' is the author's stated opinion."
      ],
      workedSolution: "The author's opinion is that treating the test as the whole measure creates injustice; that minds are partly measurable is the assumption behind using a test at all. The stem asks for the opinion.",
      difficulty: "hard",
      source: "illustrative"
    },
    /* ===== MEANING-IN-CONTEXT / VOCABULARY (5a) ===== */
    {
      id: "q-vocab-1001",
      passageId: "psg-currentaffairs-1001",
      type: "vocab",
      stem: "In context, the phrase 'the costume of objectivity' most nearly means:",
      options: [
        "a misleading outward appearance of being neutral.",
        "a genuine and proven neutrality.",
        "a uniform worn by court officials.",
        "a statistical method of measurement."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: 'costume' signals a disguise, an appearance of objectivity masking inherited bias.",
        "Wrong: the author's point is that the neutrality is only apparent, not genuine.",
        "Wrong: no literal clothing is meant.",
        "Wrong: the phrase comments on appearance, not a method."
      ],
      workedSolution: "A costume is something worn to look like what one is not. The phrase means the tool merely looks objective while handing back the past, so the disguise reading fits.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-1002",
      passageId: "psg-philosophy-1010",
      type: "vocab",
      stem: "As used in the passage, 'smuggled in' (of the ownership claim) most nearly means:",
      options: [
        "transported illegally across a border.",
        "introduced quietly without being properly argued for.",
        "stated openly and defended at length.",
        "stolen from a rival company."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: no literal contraband is meant.",
        "Correct: the next sentence says the claim is treated 'as though the matter were settled,' i.e. slipped in unargued.",
        "Wrong: the author's complaint is precisely that it is not argued.",
        "Wrong: theft from a rival is not the sense here."
      ],
      workedSolution: "The author contrasts 'smuggled in rather than argued,' so the phrase means slipped in without justification. The unargued-introduction reading is correct.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-1003",
      passageId: "psg-history-1015",
      type: "vocab",
      stem: "In context, the word 'stranded' (describing the narrowly trained worker) most nearly means:",
      options: [
        "rewarded with a secure position.",
        "twisted together like strands of rope.",
        "left helpless when his single skill is no longer needed.",
        "relocated to a coastal region."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the meaning is the opposite of secure.",
        "Wrong: the rope sense of 'strand' does not fit the context.",
        "Correct: paired with 'when his one craft is automated away,' it means left without recourse.",
        "Wrong: no coastal or geographic move is implied."
      ],
      workedSolution: "The clause about a craft being 'automated away' shows 'stranded' means left helpless without options. That reading is correct.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-1004",
      passageId: "psg-philosophy-1011",
      type: "vocab",
      stem: "As used in the passage, 'turnstile' most nearly refers to:",
      options: [
        "a ladder leading steadily upward.",
        "a kind of revolving stage.",
        "a tool for measuring wind speed.",
        "a mechanism that admits some while barring others."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the ladder is the contrasting image, not the meaning of turnstile.",
        "Wrong: no stage is meant.",
        "Wrong: that describes a different device entirely.",
        "Correct: the author contrasts a 'ladder' with a 'turnstile that admits the well-off and bars the rest.'"
      ],
      workedSolution: "The sentence explicitly glosses the turnstile as something that 'admits the well-off and bars the rest,' a selective gate. That is the contextual meaning.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-1005",
      passageId: "psg-science-1016",
      type: "vocab",
      stem: "In context, the phrase 'a low boil of stress' most nearly means:",
      options: [
        "a constant, simmering level of strain that never fully subsides.",
        "a sudden, violent outburst of anger.",
        "a literal rise in body temperature.",
        "a complete absence of tension."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the image of a sustained simmer matches 'chronic noise' raising the body's alarm over time.",
        "Wrong: 'low boil' suggests something continuous, not a sudden outburst.",
        "Wrong: no literal temperature change is meant.",
        "Wrong: the phrase describes ongoing strain, not its absence."
      ],
      workedSolution: "A 'low boil' is a steady simmer, and the passage applies it to chronic, never-resolved stress from constant noise. The simmering-strain reading fits.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-1006",
      passageId: "psg-philosophy-1017",
      type: "vocab",
      stem: "As used in the passage, 'lavish' (in 'the more lavish the gift') most nearly means:",
      options: [
        "carelessly wasteful.",
        "extremely large and generous.",
        "reluctantly given.",
        "publicly advertised."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author is not accusing the gift of waste here.",
        "Correct: paired with 'vast sums' and 'the louder this quiet influence,' it means very large and generous.",
        "Wrong: reluctance contradicts the sense of abundance.",
        "Wrong: 'lavish' describes scale, not publicity."
      ],
      workedSolution: "In context, a more 'lavish' gift means a larger, more generous one, since greater size brings louder influence. The large-and-generous reading is correct.",
      difficulty: "easy",
      source: "illustrative"
    },
    /* ===== TONE / ATTITUDE VIA LANGUAGE (5b) ===== */
    {
      id: "q-tone-1001",
      passageId: "psg-currentaffairs-1001",
      type: "tone",
      stem: "The tone of the passage is best described as:",
      options: [
        "wholeheartedly enthusiastic about sentencing software.",
        "indifferent to the outcome of the debate.",
        "warily critical, alert to the dangers while allowing a limited role.",
        "mockingly dismissive of all statistical reasoning."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: phrases like 'costume of objectivity' undercut any enthusiasm.",
        "Wrong: the careful argument shows clear engagement, not indifference.",
        "Correct: the author warns of bias and opacity yet permits an audited tool as 'one voice among several.'",
        "Wrong: the author allows that statistics may 'sharpen a judge's reasoning,' so it is not dismissive of all of it."
      ],
      workedSolution: "The passage couples sharp warnings with a measured concession of limited use, producing a wary, critical tone rather than enthusiasm or dismissal.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-1002",
      passageId: "psg-politics-1006",
      type: "tone",
      stem: "How would you best describe the author's tone toward the defenders' phrase 'a harmless ornament'?",
      options: [
        "Approving and agreeing.",
        "Confused and uncertain.",
        "Furious and insulting.",
        "Gently sceptical, treating the phrase as more flattering than honest."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author disputes the phrase rather than approving it.",
        "Wrong: the author argues with clear direction, not confusion.",
        "Wrong: the tone is critical but controlled, not abusive.",
        "Correct: calling the picture 'more flattering than honest' is measured scepticism, not agreement or rage."
      ],
      workedSolution: "By labelling the 'harmless ornament' view 'more flattering than honest,' the author signals controlled scepticism. That measured doubt is the tone.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-tone-1003",
      passageId: "psg-science-1016",
      type: "tone",
      stem: "The author's tone in discussing society's treatment of noise is best characterised as:",
      options: [
        "concerned and faintly reproachful, urging that a real harm be taken seriously.",
        "resigned acceptance that nothing can be done.",
        "lighthearted and amused.",
        "neutral and purely descriptive."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: phrases like 'we have agreed to ignore' and 'overdue for the same reckoning' carry concern and mild reproach.",
        "Wrong: the author insists noise 'can' be engineered down, the opposite of resignation.",
        "Wrong: the subject of damaged hearts and unequal harm is treated seriously, not humorously.",
        "Wrong: the evaluative language ('misjudged,' 'overdue') shows the author is not neutral."
      ],
      workedSolution: "The author treats noise as a neglected, unequal harm and presses for action, with mildly reproachful phrasing. That concerned, reproachful tone fits.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-1004",
      passageId: "psg-philosophy-1011",
      type: "tone",
      stem: "Which best describes the author's tone toward the 'fair exchange' defence of unpaid internships?",
      options: [
        "Wholly persuaded by it.",
        "Critically unconvinced, exposing it as a privilege dressed up as opportunity.",
        "Entirely neutral about its merits.",
        "Nostalgic for older forms of apprenticeship."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says the defence 'collapses' under scrutiny.",
        "Correct: calling the ladder a 'turnstile' and naming a 'sleight' conveys pointed, critical disbelief.",
        "Wrong: the author plainly argues against the defence, so not neutral.",
        "Wrong: no longing for past apprenticeships is expressed."
      ],
      workedSolution: "The author concedes a grain of truth, then dismantles the defence with words like 'collapses' and 'sleight,' a critical and unconvinced tone.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-1005",
      passageId: "psg-science-1013",
      type: "tone",
      stem: "The author's overall tone regarding deepfake technology is best described as:",
      options: [
        "celebratory of its creative possibilities.",
        "casually unconcerned about its effects.",
        "alarmed yet analytical, redirecting concern toward the deeper harm.",
        "despairing that nothing whatever can be done."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author finds no cause for celebration here.",
        "Wrong: the language of 'injury' and 'the liar's true gift' shows real concern.",
        "Correct: the author takes the danger seriously while calmly re-ranking the harms and proposing authentication.",
        "Wrong: the author offers a constructive path, so it is not despairing."
      ],
      workedSolution: "The passage is worried about the erosion of trust yet reasons coolly toward a remedy, giving an alarmed-but-analytical tone.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-tone-1006",
      passageId: "psg-currentaffairs-1002",
      type: "tone",
      stem: "How is the author's attitude toward compulsory financial-literacy education best characterised?",
      options: [
        "Hostile and contemptuous of the whole idea.",
        "Bored and dismissive of the topic.",
        "Fully and uncritically supportive.",
        "Sympathetic but doubtful, warning of an unintended message."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author explicitly says 'I am sympathetic.'",
        "Wrong: the careful engagement shows interest, not boredom.",
        "Wrong: the author calls the case 'weaker than its champions suppose.'",
        "Correct: the author supports the aim yet warns the lesson can blame the borrower, a sympathetic-but-doubtful stance."
      ],
      workedSolution: "The author opens with sympathy, then raises a serious reservation about implying hardship is a budgeting failure. That mix is sympathetic but doubtful.",
      difficulty: "medium",
      source: "illustrative"
    }
  );
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
