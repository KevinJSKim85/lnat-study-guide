/*
 * mock-01.js - Full LNAT Section A mock exam (Mock Paper 1).
 *
 * Self-contained: this file authors 12 passages, 42 four-option MCQs, and 3
 * essay prompts, then assembles a single mock object that references ONLY the
 * IDs defined in this file. It pushes into the buckets that loader.js created on
 * window.LNAT_DATA and must load AFTER loader.js. English-only.
 *
 * ID range: 100-199. Passages psg-<genre>-101..112 (two per genre across the 6
 * genres). Questions q-<type>-101..142 (the 101-142 number is unique per
 * question; the <type> token reflects the sub-type). Prompts prompt-101..103.
 *
 * Calibration (research s5,s7-8): passages are argumentative (clear thesis +
 * reasoning), self-contained, and answerable from the passage ALONE with no
 * outside knowledge; every question has exactly 4 options, one defensible key,
 * and three distractors each wrong for a distinct, stateable reason. The answer
 * key is spread across all four option positions. All items are
 * source:"illustrative".
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] mock-01.js loaded before loader.js - window.LNAT_DATA is missing."
    );
    return;
  }

  /* PASSAGES - 12 across the 6 genres (two each), 250-380 words, argumentative. */
  DATA.passages.push(
    {
      id: "psg-literature-101",
      genre: "literature",
      title: "Why the Unreliable Narrator Endures",
      body: "Readers sometimes complain that a story told by an untrustworthy narrator cheats them. If the voice guiding us through the events cannot be believed, the objection runs, then the contract between writer and reader has been broken, and we are left with a puzzle rather than a story. This complaint mistakes the source of a novel's authority. A narrator is not a witness under oath; the narrator is a device the author uses to shape what we feel and notice. When a narrator misremembers, flatters himself, or hides his motives, the gap between what he says and what we slowly infer is precisely where the meaning lives. We are not being deceived so much as invited to read against the grain, to assemble from hints a truth the speaker cannot or will not state. Far from being a trick, this demand is a compliment to the reader's intelligence. A reliable narrator hands us conclusions; an unreliable one makes us earn them, and what is earned tends to be valued more highly. The technique also mirrors ordinary life, in which we constantly weigh testimony against the interests of the person giving it, discounting here and trusting there. To insist that fiction supply only narrators who tell the plain truth would be to ask it to be less honest about how knowledge actually reaches us. The unreliable narrator endures, then, not because writers enjoy misleading their audience, but because the form rewards the very habits of careful, suspicious reading that thoughtful people bring to every other testimony in their lives.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-literature-102",
      genre: "literature",
      title: "The Case Against Tidy Endings",
      body: "There is a widespread assumption that a satisfying story must resolve its conflicts, reward its virtuous characters, and punish its villains. Editors speak of giving readers 'closure', as though an unresolved ending were a failure of nerve. I want to defend the opposite view: that the tidy ending is often the least truthful thing a writer can offer. Consider what such an ending implies. It suggests that the moral universe balances its accounts, that consequences follow neatly from deserts, and that the loose threads of a life can be gathered and knotted. Experience teaches otherwise. The cruel frequently prosper; the kind are not always repaid; questions that matter most are the ones we carry unanswered. A story that pretends otherwise comforts us at the price of misleading us. None of this is an argument for mere confusion. An ending may be open without being arbitrary; the best unresolved conclusions are carefully prepared, so that the reader feels the absence of resolution as a deliberate shape rather than as the author losing control. Henry James ends some of his finest tales on a question the characters themselves cannot answer, and the effect is not frustration but a deepened seriousness. The point is not that happy endings are forbidden, but that they should be earned by the logic of the story rather than imposed to soothe us. When a writer ties every knot, we should ask whether the world being described could really be so obliging, or whether we are being flattered into mistaking neatness for truth.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-103",
      genre: "politics",
      title: "Term Limits and the Cost of Experience",
      body: "Supporters of strict term limits for legislators argue that they break the grip of career politicians and force a healthy turnover of fresh faces. There is something to this, but the case is weaker than its popularity suggests. The central difficulty is that legislating well is a skilled activity. Drafting workable laws, scrutinising budgets, and holding officials to account all require knowledge that takes years to acquire. A chamber that expels its members just as they master these tasks does not abolish expertise; it merely transfers expertise to people who are not elected and cannot be voted out. Unelected civil servants and professional lobbyists, who face no term limit, become the only actors in the room who understand how the machinery works, and their influence grows accordingly. The reform meant to empower voters can therefore end by weakening the very representatives voters chose. Defenders of limits reply that a constant flow of newcomers keeps the institution closer to ordinary life. Perhaps; but closeness to ordinary life is of little use if it comes paired with ignorance of how a bill becomes a law. None of this means that entrenched incumbents pose no danger, or that voters should never be offered alternatives. It means only that the supposed cure carries a cost its advocates rarely admit: in driving out the career politician, term limits may hand the real power to those the public never selected and can never remove. A wiser reform would aim not at the blunt expulsion of the experienced but at sharpening the tools by which voters already judge their representatives, so that an incumbent is tested at each election rather than simply ushered out by the calendar. To prize turnover for its own sake is to treat a symptom while leaving the disease untouched, and to forget that the point of an election is to let the public keep what works and discard what does not.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-politics-104",
      genre: "politics",
      title: "The Quiet Politics of the Opinion Poll",
      body: "Opinion polls are presented as neutral instruments that simply report what the public already thinks. This self-image deserves more scepticism than it usually receives. A poll does not merely measure opinion; under certain conditions it helps to manufacture the very opinion it claims to record. Consider the wording of questions. Ask whether people support 'sensible limits on immigration' and most will agree; ask whether they support 'turning away refugees who have nowhere else to go' and the same people may balk. The numbers differ not because opinion has shifted but because the framing has. Consider, too, the effect of publication. When a poll reports that a candidate is far ahead, some supporters of the trailing candidate conclude that their vote is wasted and stay home, while waverers drift toward the apparent winner so as to back the likely victor. The forecast thus nudges the result it predicted, lending the poll a spurious air of accuracy. None of this is to say that polling is worthless or that every survey is a manipulation. Carefully designed polls, honestly reported, can illuminate a great deal. The warning is narrower: because the act of asking and the act of publishing can each shape the answer, we should treat poll figures not as a photograph of opinion taken from outside, but as a reading that is partly the creation of the instrument taking it. There is a further reason for caution. Because a published figure can travel faster than the reasoning behind it, a single eye-catching number often hardens into a fact in the public mind long before anyone examines how the question was put or how the sample was drawn. The remedy is not to abandon polling but to read it as one would read any argument: asking who was questioned, how, and to what end, rather than accepting the headline percentage as though it had fallen from the sky.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-105",
      genre: "science",
      title: "The Limits of the Brain Scan",
      body: "Few images carry more authority today than a brain scan with a region lit up in vivid colour. Such pictures are routinely offered as proof that a mental state is 'real' or that a behaviour is 'hard-wired'. The persuasive power of these images outruns what they actually establish. A functional scan does not photograph a thought. It records, indirectly, where blood flow increases while a person performs a task, and the bright colours are added afterwards by software to mark statistical differences that would otherwise be invisible. To say that a region 'lights up' is shorthand for a long chain of inference, each link of which involves assumptions that could be questioned. More importantly, showing that a mental activity has a physical correlate tells us almost nothing we did not already know. Of course thinking involves the brain; everything we do involves the brain. Pointing to the relevant tissue does not explain the thought any more than pointing to a printing press explains the meaning of a book. The danger is that the glamour of the image short-circuits argument. A claim about human nature that would be challenged if stated in plain words can slip past our guard when it arrives decorated with a colourful scan. Used carefully, imaging is a powerful research tool. Used as a rhetorical trump card, it invites us to mistake a picture of where something happens for an explanation of why it happens. None of this is a reason to abandon the technology, which has transformed what we can study about the living brain. It is a reason to keep the picture in its place: as a prompt for further questions rather than as the final word that ends them. The colourful image is a beginning of inquiry, not its conclusion, and treating it otherwise mistakes a map for the territory it merely sketches.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-science-106",
      genre: "science",
      title: "Why Eradication Is Harder Than It Looks",
      body: "The eradication of smallpox is rightly celebrated as one of the great achievements of public health, and it has encouraged hopes that other diseases might be wiped out in the same way. Yet the very features that made smallpox eradicable are unusual, and the optimism it inspires can be misleading. Smallpox had no animal reservoir: it lived only in human hosts, so that protecting humans starved the virus completely. It produced an obvious rash, which made cases easy to identify and isolate. And a single robust vaccine conferred lasting immunity. Many diseases that campaigners now hope to eradicate share none of these traits. A pathogen that also lives in animals can retreat into a wild population and return once human vigilance relaxes, so that eradication in people is no eradication at all. An infection that often produces no symptoms spreads invisibly, defeating the strategy of find-and-isolate that worked against the tell-tale smallpox rash. Where immunity fades, or where the pathogen mutates quickly, even a good vaccine may have to be given again and again, and any lapse reopens the door. None of this is a counsel of despair. Control, suppression, and the prevention of countless deaths remain achievable goals well worth the effort. But to promise eradication for diseases that lack smallpox's peculiar vulnerabilities is to set a target that the biology may simply not allow, and to risk discrediting public health when the promise goes unmet. The lesson is not that ambition in public health is misplaced, but that the target must be chosen to fit the biology of each disease rather than borrowed wholesale from a single famous success. A campaign that sets the right goal, however modest it sounds, will save more lives than one that promises total victory and then quietly fails to deliver it.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-107",
      genre: "history",
      title: "Reading History Backwards",
      body: "One of the commonest errors in thinking about the past is to treat what happened as what was bound to happen. Because we know how a war ended or a dynasty fell, we are tempted to read the outcome back into the events that preceded it, picking out the clues that pointed the right way and quietly ignoring the equally numerous signs that pointed elsewhere. This habit, sometimes called hindsight bias, flatters us with a sense of understanding while corrupting it. The people who lived through these events did not know the ending. They acted amid uncertainty, weighing possibilities that to them seemed live and to us seem absurd only because they did not come to pass. A defeated strategy was not necessarily a foolish one; it may have been a reasonable bet that the dice happened to settle against. When the historian smooths the past into a single inevitable line, the contingency that the participants actually faced disappears, and with it any honest account of why they chose as they did. There is a moral cost as well as an intellectual one. If outcomes were inevitable, then praise and blame lose their footing, for no one could have done otherwise. The discipline of the good historian is therefore to recover the open future as it looked from inside the moment: to remember that the road which now seems the only one was, at the time, merely one path among several that a reasonable person might have taken. The remedy is not to pretend that we can forget what we know, which is impossible, but to hold our knowledge of the ending lightly enough to ask, at each turn, what the alternatives looked like before the outcome closed them off. Only then can we judge the actors by the choices they actually faced rather than by the one we happen to have inherited.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-history-108",
      genre: "history",
      title: "The Myth of the Lone Inventor",
      body: "Popular history loves the story of the lone inventor: the solitary genius who, in a flash of insight, conjures a device that changes the world. It is a satisfying tale, but it distorts how invention actually happens. Major innovations are characteristically the work of many hands across many years, and the famous name attached to them usually belongs to the person who took a last, decisive step on a path others had already cleared. The telephone, the light bulb, and the aeroplane were each approached more or less simultaneously by rival workers drawing on a shared stock of accumulated knowledge, which is why bitter priority disputes so often accompany them. That very simultaneity is the clue. If a breakthrough were truly the product of one irreplaceable mind, we should not expect several people to arrive at it within months of one another; the fact that they regularly do suggests that the idea was, so to speak, ripe, and that the conditions for it had been prepared by predecessors whose names we have forgotten. Crediting a single hero is not merely inaccurate. It discourages the patient, collective, often unglamorous work on which progress really depends, by teaching the young to wait for inspiration rather than to build, step by step, on what others have left them. The romance of the lone genius, in short, is a flattering story that gets the mechanics of discovery almost exactly backwards. To say this is not to deny that individuals matter, for someone must take the last step, and taking it may require real talent. It is to insist that the step is the smaller part of the story, and that the longer, quieter labour of those who made the step possible deserves a place in any honest account of how the new thing came into the world.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-109",
      genre: "philosophy",
      title: "Luck and the Limits of Desert",
      body: "We praise the diligent and condemn the reckless as though each had earned their fate, yet a moment's reflection shows how much of what we call desert rests on luck. Whether a person is born with a steady temperament or a volatile one, into a household that prizes effort or one that crushes it, is settled long before any choice of theirs. Even the capacity to make an effort, the trait we most readily credit to the individual, is itself the product of a brain and an upbringing the person did not select. If this is right, the confident moral bookkeeping by which we distribute praise and blame begins to look unsupported. Some conclude that desert is an illusion and that no one truly merits reward or punishment. That conclusion goes too far. Even if our characters are shaped by forces outside our control, the practices of holding people responsible do real work: they shape behaviour, sustain trust, and give our choices a weight they would otherwise lack. The sensible position is not to abolish desert but to hold it more humbly, remembering that the successful owe a larger debt to fortune than they like to admit, and that the unfortunate are rarely the sole authors of their misfortune. Humility of this kind need not paralyse judgement. It asks only that we temper our confidence, soften our contempt for those who fail, and recognise in our own achievements the quiet contribution of a luck we did nothing to deserve. Nor does this humility excuse the wrongdoer or dissolve the difference between the careful and the careless, for those differences still matter to how we must live together. It asks only that we hold our verdicts with a lighter hand, mindful that the line between the fortunate and the unfortunate was drawn, in large part, by a hand that was never ours to guide.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-philosophy-110",
      genre: "philosophy",
      title: "Promises and the Future Self",
      body: "A promise binds the person who makes it, but who exactly is that person? When I undertake today to do something next year, I bind a future self who may have different desires, and perhaps even a different view of what matters. Some philosophers press this point to a sceptical conclusion: if the self that must keep the promise is not quite the self that made it, why should the later self be bound by a bargain it never struck? The objection has a certain force, but it proves too much. Taken seriously, it would dissolve not only promises but every commitment that reaches beyond the present moment: savings, friendships, the rearing of children, the whole fabric of a planned life. A creature genuinely unable to bind its future self could not undertake anything at all, and would be less free, not more, for the lack. The better response is to see that the continuity of a person is not a metaphysical discovery we await but partly a practical achievement we bring about. By keeping faith with my past undertakings, I make myself into the kind of continuous agent who can be relied upon, including by myself. The binding force of a promise, on this view, does not depend on the later self being numerically identical to the earlier one in some deep sense. It depends on the value of being the sort of person whose word, once given, settles the matter. Seen this way, the sceptic has mistaken a task for an obstacle. The gap between the self that promises and the self that performs is not a reason to deny the promise but the very thing the promise is for: it is by reaching across that gap, again and again, that a person becomes someone whose commitments can be trusted to hold.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-111",
      genre: "currentaffairs",
      title: "The False Promise of the Paywall",
      body: "As advertising revenue collapsed, many newspapers turned to the paywall, charging readers directly for access in the hope of funding serious journalism. The strategy has kept some titles alive, and to that extent it has succeeded. But its champions rarely acknowledge a troubling side-effect. When reliable reporting is locked behind a fee while rumour, propaganda, and conspiracy circulate without charge, the predictable result is that the audience for accurate information shrinks to those able and willing to pay, while everyone else is left to the free and frequently false. A two-tier information system of this kind is corrosive in a democracy, where decisions at the ballot box depend on a shared base of facts. The difficulty is genuine, not imaginary, and it is not answered by the familiar retort that journalism, like any product, must be paid for. That journalism costs money is not in dispute. The question is who should bear the cost, and whether a model that prices the poorest readers out of the truth can be reconciled with journalism's claim to serve the public. Some propose public subsidy; others, micropayments or advertising-supported free tiers alongside the paywall. Each carries its own risks. The point here is not to crown a solution but to insist that the paywall, whatever its merits as a business model, cannot be treated as a costless rescue of the press, for it solves the newspaper's problem by deepening the public's. Whichever remedy is chosen, the first step is to stop pretending that the choice is free of cost. A society that wants both a free press and a financially viable one will have to decide, openly, how the bill is to be shared, rather than allowing the question to be settled by default in favour of those who can afford to pay and against those who cannot.",
      reserved: false,
      source: "illustrative"
    },
    {
      id: "psg-currentaffairs-112",
      genre: "currentaffairs",
      title: "Working From Home and the Hidden Bargain",
      body: "Remote work has been hailed as a victory for employees: no commute, more flexibility, time reclaimed for family and rest. Much of this is real, and for many workers the gains are substantial. Yet the enthusiasm has tended to obscure a quieter exchange taking place beneath the surface. When the office dissolves into the home, the boundary that once separated working hours from private life dissolves with it. The commute, for all its tedium, marked a daily threshold between two roles; without it, the laptop on the kitchen table is always within reach, and the expectation that one is reachable can quietly expand to fill the evening and the weekend. There is a second cost, less visible still. Careers are advanced not only by work done but by work seen, and by the informal contact through which trust and reputation are built. The employee who is never in the room may find that the colleagues who are present are the ones remembered when promotions are decided. None of this is an argument for herding everyone back to the office, nor a denial of the real benefits remote work confers. It is a reminder that the bargain is more complicated than the cheerful headlines suggest: that flexibility may be purchased, in part, with a blurring of the line between labour and leisure, and with a loss of the visibility on which advancement has long depended. A benefit accepted without noticing its price is not quite the unmixed gift it appears. The sensible course is neither to romanticise the office nor to dismiss its uses, but to name the trade clearly, so that workers and employers alike can decide with open eyes what they are giving up in exchange for what they gain. A freedom whose costs are hidden is a freedom only half understood.",
      reserved: false,
      source: "illustrative"
    }
  );

  /* QUESTIONS - 42 four-option MCQs (q-<type>-101..142), in passage order. */
  DATA.questions.push(
    {
      id: "q-main-101",
      passageId: "psg-literature-101",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Writers should avoid unreliable narrators because they break the contract with the reader.",
        "A reliable narrator is always inferior to an unreliable one.",
        "The unreliable narrator endures because it rewards the same careful, suspicious reading we apply to testimony in real life.",
        "Fiction should aim above all to tell the plain truth about its events."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the reader's complaint the author sets out to rebut, not the author's own conclusion.",
        "Wrong: the author says the unreliable narrator 'makes us earn' conclusions but never claims reliable narrators are always inferior; the comparison is about effort, not blanket superiority.",
        "Correct: the closing sentences say the form endures because it rewards 'the very habits of careful, suspicious reading' people bring to other testimony.",
        "Wrong: the author argues the opposite, that demanding only plain-truth narrators would make fiction 'less honest' about how knowledge reaches us."
      ],
      workedSolution: "The opening raises a complaint; the body reframes the narrator as a device and argues the gap between speech and inferred truth is where meaning lives; the close generalises that the technique mirrors how we weigh real testimony. The overarching claim is that the unreliable narrator endures because it rewards careful, suspicious reading. The 'avoid them / break the contract' and 'tell the plain truth' options are the rejected view; 'reliable is always inferior' overstates a comparison the author keeps narrow.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-102",
      passageId: "psg-literature-101",
      type: "standpoint",
      stem: "What is the author's attitude toward the unreliable narrator?",
      options: [
        "Approving: it is treated as a valuable technique that respects the reader.",
        "Hostile: it is condemned as a cheap trick that deceives readers.",
        "Indifferent: the author reports the debate without taking sides.",
        "Anxious: the author fears the technique is being overused by modern writers."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author calls the technique 'a compliment to the reader's intelligence' and explains why it 'endures', a clearly favourable stance.",
        "Wrong: 'cheap trick' and 'deceives' is the complaint the author explicitly rejects ('Far from being a trick').",
        "Wrong: the author takes a definite side, arguing the complaint 'mistakes the source of a novel's authority'.",
        "Wrong: nothing about overuse or frequency among modern writers is raised; this concern is absent from the passage."
      ],
      workedSolution: "Separate views described from the view held. The author describes the complaint, then judges it mistaken and praises the technique as 'a compliment to the reader's intelligence'. The held attitude is approving. 'Hostile' restates the rejected view; 'indifferent' ignores the clear stance; 'anxious about overuse' imports a worry the passage never raises.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-103",
      passageId: "psg-literature-101",
      type: "vocab",
      stem: "As used in the passage, the phrase 'read against the grain' most nearly means:",
      options: [
        "Refuse to finish a difficult book.",
        "Read the chapters in reverse order.",
        "Dislike the narrator on moral grounds.",
        "Interpret the narrator's words sceptically, inferring a truth he does not state."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the phrase describes a way of interpreting, not abandoning, the text; the surrounding sentence is about assembling truth from hints.",
        "Wrong: nothing concerns chapter order; this misreads 'against the grain' literally.",
        "Wrong: the phrase concerns interpretive method, not moral approval or disapproval of the narrator.",
        "Correct: the clause explains it as assembling 'from hints a truth the speaker cannot or will not state', i.e. a sceptical reading that goes beyond the narrator's words."
      ],
      workedSolution: "Read the phrase in its sentence: we 'read against the grain, to assemble from hints a truth the speaker cannot or will not state'. That is sceptical, inferential reading. The 'refuse to finish', 'reverse order', and 'dislike on moral grounds' options take the idiom literally or import an unrelated idea.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-104",
      passageId: "psg-literature-101",
      type: "tone",
      stem: "The tone of the phrase 'a compliment to the reader's intelligence' is best described as:",
      options: [
        "Appreciative, presenting the technique's demands as a mark of respect for the reader.",
        "Sarcastic, implying readers are not in fact intelligent.",
        "Apologetic, conceding that the technique is a regrettable necessity.",
        "Alarmed, warning that readers are being manipulated."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the phrase frames the extra interpretive work demanded of readers as respectful flattery, matching the author's favourable case for the technique.",
        "Wrong: the surrounding argument is sincere and laudatory; there is no ironic reversal signalling sarcasm.",
        "Wrong: nothing apologetic appears; the author champions rather than regrets the technique.",
        "Wrong: the author explicitly denies that readers are being deceived ('We are not being deceived'), so an alarmed reading contradicts the text."
      ],
      workedSolution: "Tone is read from word choice and context. 'A compliment to the reader's intelligence' is praise, embedded in a passage defending the technique, so the tone is appreciative. Sarcasm, apology, and alarm all run against the passage's sincere, favourable argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-105",
      passageId: "psg-literature-102",
      type: "detail",
      stem: "According to the passage, what does a tidy ending imply about the moral universe?",
      options: [
        "That it is fundamentally unknowable.",
        "That it balances its accounts, with consequences following neatly from deserts.",
        "That virtue is always its own reward regardless of outcome.",
        "That writers are obliged to punish villains."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says the tidy ending suggests the universe 'balances its accounts', the opposite of portraying it as unknowable.",
        "Correct: the author states such an ending 'suggests that the moral universe balances its accounts, that consequences follow neatly from deserts'.",
        "Wrong: 'virtue is its own reward' is not stated; the passage's point is that the kind are 'not always repaid', which this option ignores.",
        "Wrong: this describes a convention about villains, not what the tidy ending implies about the moral universe; it misreads the question's focus."
      ],
      workedSolution: "Locate the explicit statement. The sentence after 'Consider what such an ending implies' says it suggests the moral universe 'balances its accounts, that consequences follow neatly from deserts'. That is the correct answer, a direct paraphrase. The 'unknowable', 'virtue is its own reward', and 'obliged to punish villains' options are not stated or misdirect the focus.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-inference-106",
      passageId: "psg-literature-102",
      type: "inference",
      stem: "Which conclusion about unresolved endings does the passage most support?",
      options: [
        "An unresolved ending is always superior to a resolved one.",
        "Readers never derive any satisfaction from open endings.",
        "Open endings are acceptable only in the work of Henry James.",
        "An ending can be left open and still be the result of careful design rather than authorial failure."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says happy endings are not 'forbidden' and should be earned, so 'always superior' overstates the case.",
        "Wrong: the James example produces 'a deepened seriousness', so the passage allows that open endings can satisfy; 'never' is contradicted.",
        "Wrong: James is offered as one illustration, not as the sole legitimate case; the argument is general.",
        "Correct: the passage says an ending 'may be open without being arbitrary' and that the best are 'carefully prepared', felt as 'a deliberate shape rather than as the author losing control'."
      ],
      workedSolution: "An inference must be supported, not merely plausible. The author distinguishes open-but-prepared endings from authorial loss of control and praises a carefully shaped absence of resolution. The correct answer captures that supported point. 'Always superior' overstates; 'readers never satisfied' is contradicted by the James effect; 'only Henry James' wrongly narrows a general claim to one author.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-107",
      passageId: "psg-literature-102",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "A neatly resolved ending can be a sign that the story is misrepresenting how the world works.",
        "Editors are generally incompetent at their jobs.",
        "Henry James wrote only stories with unresolved endings.",
        "Confusing endings are the surest mark of a serious writer."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying we should ask 'whether we are being flattered into mistaking neatness for truth', the author implies tidy resolution can signal a distorted picture of the world.",
        "Wrong: the author criticises the editorial preference for 'closure' but never implies editors are broadly incompetent; that overreaches.",
        "Wrong: the passage says James ends 'some of his finest tales' on a question, which implies not all; 'only' is unsupported.",
        "Wrong: the author explicitly disavows 'mere confusion' as a virtue, so this contradicts the text rather than following from it."
      ],
      workedSolution: "Stated-versus-implied: the explicit line invites us to ask whether neatness is being mistaken for truth. The unstated but supported step is that a tidy ending can itself signal misrepresentation of the world. The 'editors incompetent', 'James only', and 'confusion is the mark of seriousness' options overreach or contradict explicit qualifications.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-108",
      passageId: "psg-politics-103",
      type: "main",
      stem: "Which of the following best captures the central argument of the passage?",
      options: [
        "Term limits are the most effective way to make legislators accountable to voters.",
        "Term limits can backfire by shifting power from elected members to unelected officials and lobbyists.",
        "Career politicians never pose any danger to democratic government.",
        "Legislative skill is unimportant compared with closeness to ordinary life."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is close to the supporters' view the author criticises, not the author's conclusion.",
        "Correct: the passage argues term limits 'may hand the real power to those the public never selected', because expertise transfers to civil servants and lobbyists.",
        "Wrong: the author explicitly grants that 'entrenched incumbents' can 'pose' a danger, so this absolute claim is denied by the text.",
        "Wrong: the author treats legislative skill as crucial ('legislating well is a skilled activity'), the reverse of this option."
      ],
      workedSolution: "The thesis emerges through the body: expelling members just as they gain expertise transfers power to the unelected. The conclusion restates this as the hidden cost. The correct answer matches. 'Most effective accountability' is the criticised view; 'career politicians never a danger' contradicts an explicit concession; 'skill unimportant' inverts the author's stress on skill.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-109",
      passageId: "psg-politics-103",
      type: "structure",
      stem: "What is the role of the sentence 'Defenders of limits reply that a constant flow of newcomers keeps the institution closer to ordinary life'?",
      options: [
        "It states the author's own main conclusion.",
        "It provides statistical evidence for the author's claim.",
        "It introduces a counter-argument that the author then answers.",
        "It concedes that term limits have no drawbacks at all."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author's conclusion is that limits transfer power to the unelected; this sentence voices an opposing view, not that conclusion.",
        "Wrong: no statistics appear anywhere; the sentence reports an opposing argument, not data.",
        "Correct: it presents the defenders' reply, which the author immediately rebuts ('Perhaps; but closeness ... is of little use if it comes paired with ignorance').",
        "Wrong: the sentence raises a point for limits; it is the author, elsewhere, who notes a cost, so it does not concede the absence of drawbacks."
      ],
      workedSolution: "Map the argument. After making his case, the author introduces the defenders' reply and then answers it with 'Perhaps; but...'. The sentence's function is to set up a counter-argument for rebuttal. The other options misidentify it as the author's conclusion, as statistics, or as a concession that limits have no drawbacks.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-110",
      passageId: "psg-politics-103",
      type: "assume",
      stem: "The author's argument depends on which of the following unstated assumptions?",
      options: [
        "Civil servants and lobbyists are more intelligent than elected legislators.",
        "Voters are incapable of judging which candidates are competent.",
        "Term limits have been adopted in every modern democracy.",
        "If experienced legislators are removed, the expertise needed to govern does not simply vanish but is exercised by someone else."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the argument relies on who holds expertise, not on anyone being more intelligent; relative intelligence is never required.",
        "Wrong: the passage does not need voters to be incapable judges; indeed it worries about weakening representatives voters 'chose'.",
        "Wrong: adoption rates are irrelevant to the logical step and are never mentioned; the argument does not rely on this.",
        "Correct: the claim that power 'transfers' to the unelected only follows if the governing expertise persists and must be exercised by others rather than disappearing; that link is assumed."
      ],
      workedSolution: "Use the negation test. If removing experienced members made the needed expertise simply vanish rather than pass to others, the 'transfer of power to the unelected' would not follow. So the argument assumes the expertise persists and is exercised by someone else. The 'more intelligent', 'voters incapable', and 'adopted everywhere' options are unnecessary or absent premises.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-opinion-111",
      passageId: "psg-politics-103",
      type: "opinion",
      stem: "Which statement in the passage is best understood as the author's opinion rather than a neutral statement of fact?",
      options: [
        "Drafting laws and scrutinising budgets require knowledge that takes years to acquire.",
        "The supposed cure carries a cost its advocates rarely admit.",
        "Civil servants and lobbyists face no term limit.",
        "Supporters of term limits say they break the grip of career politicians."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: this is presented as a general statement about the nature of the work, offered as fact rather than as a contestable evaluation.",
        "Correct: 'a cost its advocates rarely admit' is an evaluative judgement about opponents' candour, the author's opinion rather than a neutral report.",
        "Wrong: that the unelected face no term limit is a straightforward factual premise within the argument.",
        "Wrong: this merely reports what supporters say; it is attributed description, not the author's own opinion."
      ],
      workedSolution: "Distinguish opinion from neutral fact. 'A cost its advocates rarely admit' passes an evaluative verdict on the advocates and the strength of their case, marking it as the author's opinion. The 'takes years to acquire' and 'no term limit' statements are factual premises; the 'supporters say' line is reported description.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-112",
      passageId: "psg-politics-104",
      type: "standpoint",
      stem: "How would you best describe the author's overall position on opinion polls?",
      options: [
        "Polls are worthless and should be banned.",
        "Polls are perfectly neutral instruments that simply report opinion.",
        "Polls can be informative but should not be treated as a detached photograph of opinion, because asking and publishing can shape it.",
        "Polls are reliable only when they predict the eventual winner."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author explicitly denies that polling is 'worthless' and allows that careful polls 'can illuminate a great deal'.",
        "Wrong: this 'self-image' is exactly what the author says 'deserves more scepticism'.",
        "Correct: the author grants polls can inform but warns they are 'partly the creation of the instrument', because question wording and publication can shape opinion.",
        "Wrong: the author treats matching the winner as a 'spurious air of accuracy' arising from the bandwagon effect, not as a mark of reliability."
      ],
      workedSolution: "The author qualifies on both sides: polls are not worthless, but neither are they neutral photographs. The balanced position is that polls can inform yet must not be treated as a detached photograph, because asking and publishing shape opinion. 'Worthless/banned' and 'perfectly neutral' are the two extremes the author rejects; 'reliable only when predicting the winner' misreads the bandwagon passage.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-inference-113",
      passageId: "psg-politics-104",
      type: "inference",
      stem: "Which conclusion does the passage most support about the publication of a poll showing a large lead?",
      options: [
        "It has no effect on how people subsequently vote.",
        "It guarantees that the leading candidate will lose support.",
        "It can influence turnout and choices in ways that make its own prediction more likely to come true.",
        "It proves that the poll was conducted dishonestly."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the passage describes definite behavioural effects (supporters staying home, waverers drifting), so 'no effect' is contradicted.",
        "Wrong: the described effects favour the apparent winner, not a loss of support, so this reverses the passage.",
        "Correct: the author says the forecast 'nudges the result it predicted', via discouraged supporters and bandwagon waverers.",
        "Wrong: the publication effect is presented as a structural dynamic, not as evidence that the poll itself was dishonest."
      ],
      workedSolution: "Trace the supported step. Publication discourages the trailing side and attracts waverers to the leader, so the forecast 'nudges the result it predicted'. The correct answer states that self-fulfilling tendency. 'No effect' and 'guarantees the leader loses support' contradict the described direction; 'proves dishonesty' imports a charge the text does not make here.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-114",
      passageId: "psg-politics-104",
      type: "tone",
      stem: "The phrase 'a spurious air of accuracy' chiefly conveys a tone that is:",
      options: [
        "Admiring of the poll's predictive success.",
        "Sceptical, suggesting the apparent accuracy is misleading rather than genuine.",
        "Neutral and purely technical.",
        "Furious and accusatory toward all pollsters."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'spurious' signals fake or unfounded, the opposite of admiration for genuine success.",
        "Correct: 'spurious' marks the accuracy as only apparent, expressing scepticism about reading a self-fulfilling forecast as a real hit.",
        "Wrong: 'spurious' is an evaluative, loaded word, not neutral technical description.",
        "Wrong: the author is critical but measured, and explicitly says not 'every survey is a manipulation', so 'furious and accusatory toward all' overstates the tone."
      ],
      workedSolution: "Tone follows diction. Calling the accuracy 'spurious' brands it false-seeming, a sceptical judgement. The correct answer names that scepticism. The tone is neither admiring nor neutral, and the author's hedges ('not every survey is a manipulation') rule out blanket fury at all pollsters.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-115",
      passageId: "psg-science-105",
      type: "main",
      stem: "Which of the following best expresses the passage's main point?",
      options: [
        "Brain scans are fraudulent and should never be used in research.",
        "Every claim about human nature can be settled by a brain scan.",
        "Thinking does not involve the brain at all.",
        "Brain-scan images carry a persuasive authority that outruns what they actually establish, and showing where an activity occurs does not explain it."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author calls imaging 'a powerful research tool' when 'used carefully', so does not condemn it as fraudulent.",
        "Wrong: this is the inflated view the author warns against, not the author's position.",
        "Wrong: the author affirms that 'everything we do involves the brain', so this contradicts the text.",
        "Correct: the passage argues the images' 'persuasive power outruns what they actually establish' and that locating activity does not explain it ('mistake a picture of where ... for an explanation of why')."
      ],
      workedSolution: "The thesis is signalled early ('persuasive power ... outruns what they actually establish') and restated at the close (where versus why). The correct answer captures it. 'Fraudulent, never use' overstates into condemnation; 'every claim settled by a scan' is the criticised overclaim; 'thinking does not involve the brain' contradicts an explicit statement.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-detail-116",
      passageId: "psg-science-105",
      type: "detail",
      stem: "According to the passage, what does a functional brain scan actually record?",
      options: [
        "Where blood flow increases while a person performs a task.",
        "A direct photograph of a thought.",
        "The meaning of the mental activity being studied.",
        "The colours naturally emitted by active brain tissue."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says it 'records, indirectly, where blood flow increases while a person performs a task'.",
        "Wrong: the passage states flatly that a scan 'does not photograph a thought'.",
        "Wrong: the passage argues that locating activity does not capture meaning or explanation, so this is denied.",
        "Wrong: the colours are 'added afterwards by software', not naturally emitted, per the passage."
      ],
      workedSolution: "Explicit comprehension: the sentence 'It records, indirectly, where blood flow increases while a person performs a task' is the direct answer. The 'photograph of a thought', 'the meaning', and 'colours naturally emitted' options are precisely the misreadings the passage corrects.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-vocab-117",
      passageId: "psg-science-105",
      type: "vocab",
      stem: "As used in the passage, 'short-circuits' (in 'the glamour of the image short-circuits argument') most nearly means:",
      options: [
        "Strengthens and completes the argument.",
        "Bypasses or cuts short the reasoning that should take place.",
        "Electrically damages the brain being scanned.",
        "Repeats the argument for emphasis."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the context is a 'danger', so the word marks a failure of reasoning, not its strengthening.",
        "Correct: the next sentence explains a claim can 'slip past our guard', so 'short-circuits argument' means the image bypasses the scrutiny that should occur.",
        "Wrong: this takes the electrical metaphor literally; no physical damage to a brain is meant.",
        "Wrong: the point is that argument is skipped, not repeated; 'short-circuits' does not mean reiterate."
      ],
      workedSolution: "Read the metaphor in context: the danger is that glamour 'short-circuits argument', letting a claim 'slip past our guard'. That means it bypasses the reasoning that should occur. The 'strengthens', 'electrically damages the brain', and 'repeats for emphasis' options ignore the cautionary context or take the metaphor literally.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-118",
      passageId: "psg-science-105",
      type: "factinf",
      stem: "Which of the following does the passage present as a factual description rather than as the author's evaluative inference?",
      options: [
        "The glamour of the image short-circuits argument.",
        "Imaging used as a rhetorical trump card invites us to mistake correlation for explanation.",
        "The bright colours in a scan are added afterwards by software.",
        "A physical correlate tells us almost nothing we did not already know."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the author's interpretive warning about the effect of the image, an inference, not a neutral fact.",
        "Wrong: this is the author's evaluative conclusion about misuse, not a reported fact.",
        "Correct: that the colours are 'added afterwards by software to mark statistical differences' is given as a factual description of how scans are produced.",
        "Wrong: this is the author's judgement about the significance of a correlate, an evaluative inference."
      ],
      workedSolution: "Separate reported facts from steps beyond them. The mechanism, that the bright colours are 'added afterwards by software', is a factual description of the technology. The 'short-circuits argument', 'rhetorical trump card', and 'tells us almost nothing' lines are the author's evaluations built on such facts.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-119",
      passageId: "psg-science-106",
      type: "inference",
      stem: "Which conclusion about a disease that also lives in animals does the passage most support?",
      options: [
        "It can never be controlled by any means.",
        "It is necessarily more deadly than smallpox was.",
        "It will always produce an obvious rash.",
        "Eliminating it from humans alone may not amount to true eradication, because it can return from a wild population."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author affirms that 'control, suppression, and the prevention of countless deaths remain achievable', so 'never controlled' is contradicted.",
        "Wrong: lethality is never compared; the discussion concerns reservoirs, not how deadly the disease is.",
        "Wrong: the obvious rash is a feature of smallpox specifically; the passage notes other diseases may show no symptoms.",
        "Correct: the passage says a pathogen that lives in animals 'can retreat into a wild population and return', so 'eradication in people is no eradication at all'."
      ],
      workedSolution: "Trace the supported claim. An animal reservoir lets the pathogen return after human eradication, so eliminating it in humans 'is no eradication at all'. The correct answer states exactly this. 'Never controlled' is contradicted; 'more deadly than smallpox' and 'always an obvious rash' import comparisons or traits the passage does not assign.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-120",
      passageId: "psg-science-106",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Promising eradication for unsuitable diseases could undermine public trust in public health.",
        "Smallpox was the only disease ever to cause a rash.",
        "Vaccines are generally ineffective.",
        "Public health campaigns should be abandoned."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the closing warns that promising eradication where biology forbids it risks 'discrediting public health when the promise goes unmet', implying a loss of trust.",
        "Wrong: the passage uses the rash to illustrate smallpox's visibility, not to claim no other disease causes a rash; that is an over-literal misreading.",
        "Wrong: the author treats a 'good vaccine' as valuable and merely notes immunity can fade, so 'generally ineffective' is unsupported.",
        "Wrong: the author explicitly says control and suppression 'remain achievable goals well worth the effort', the opposite of abandonment."
      ],
      workedSolution: "Stated-versus-implied: the explicit warning is about 'discrediting public health'. The unstated but supported step is that overpromising erodes public trust. The 'only disease with a rash', 'vaccines generally ineffective', and 'abandon campaigns' options misread illustrations or contradict explicit statements.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-structure-121",
      passageId: "psg-science-106",
      type: "structure",
      stem: "What is the function of the three features of smallpox listed early in the passage (no animal reservoir, an obvious rash, a single robust vaccine)?",
      options: [
        "They prove that all diseases can be eradicated.",
        "They establish the special conditions that made smallpox eradicable, against which other diseases are then contrasted.",
        "They are offered as the author's main conclusion.",
        "They list the symptoms a patient should watch for."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage uses these features to argue the reverse, that most diseases lack them and so resist eradication.",
        "Correct: the three traits are the 'unusual' features that made smallpox eradicable; the next paragraph shows other diseases 'share none of these traits'.",
        "Wrong: the conclusion is the warning against overpromising eradication, not the list itself.",
        "Wrong: the list explains eradicability, not clinical advice about symptoms to watch for."
      ],
      workedSolution: "Map the structure. The author first sets out what made smallpox eradicable, then contrasts diseases lacking those traits. The list functions as the baseline for that contrast. The other options misread it as proof that all diseases can be eradicated, as the conclusion, or as clinical advice about symptoms.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-main-122",
      passageId: "psg-history-107",
      type: "main",
      stem: "Which of the following best states the main point of the passage?",
      options: [
        "Historical outcomes are always inevitable once the facts are known.",
        "The past is impossible to study with any accuracy.",
        "Good history must recover the genuine uncertainty the participants faced, rather than treating what happened as what was bound to happen.",
        "People in the past were generally less rational than people today."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this inevitability is precisely the 'error' the passage sets out to expose.",
        "Wrong: the author advocates a disciplined way of doing history, not the impossibility of studying the past.",
        "Correct: the author urges the historian 'to recover the open future as it looked from inside the moment', resisting the hindsight that makes outcomes seem inevitable.",
        "Wrong: the passage says past actors 'acted amid uncertainty' and could be reasonable, so it does not claim they were less rational."
      ],
      workedSolution: "The passage diagnoses hindsight bias and prescribes recovering the contingency participants faced. The central claim is that good history must recover the genuine uncertainty rather than treat outcomes as inevitable. 'Always inevitable' is the criticised error; 'impossible to study' overstates into impossibility; 'less rational than us' misreads the defence of past actors' reasonableness.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-standpoint-123",
      passageId: "psg-history-107",
      type: "standpoint",
      stem: "What is the author's attitude toward smoothing the past into 'a single inevitable line'?",
      options: [
        "Approving, because it makes history easier to teach.",
        "Neutral, treating it as one valid method among many.",
        "Enthusiastic, because inevitability lends history moral clarity.",
        "Critical, because it erases the real uncertainty and corrupts our understanding."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author never praises ease of teaching; he says the habit 'corrupts' understanding.",
        "Wrong: the author judges the practice harmful, not a neutral, equally valid option.",
        "Wrong: the author warns that inevitability makes 'praise and blame lose their footing', the opposite of welcoming moral clarity.",
        "Correct: the author says smoothing the past makes 'the contingency that the participants actually faced' disappear and 'corrupts' understanding, a clearly critical view."
      ],
      workedSolution: "Identify the held attitude. The author calls hindsight a habit that 'corrupts' understanding and erases real contingency, a clearly critical view. The 'approving for ease of teaching', 'neutral method', and 'enthusiastic for moral clarity' options misattribute attitudes the text contradicts.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-assume-124",
      passageId: "psg-history-107",
      type: "assume",
      stem: "The claim that hindsight bias 'corrupts' our understanding relies on which unstated assumption?",
      options: [
        "An accurate understanding of past decisions requires grasping the uncertainty under which they were made.",
        "Historians are deliberately dishonest about the past.",
        "No historical event has more than one possible cause.",
        "The participants in past events were always correct in their judgements."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: calling the smoothing-away of contingency a corruption of understanding presupposes that genuine understanding requires capturing that uncertainty; remove this and the charge of corruption fails.",
        "Wrong: the author attributes the error to a cognitive 'habit', not to deliberate dishonesty, so this is not required.",
        "Wrong: a single-cause claim is neither needed nor implied; the argument is about contingency, not cause-counting.",
        "Wrong: the author says a defeated strategy 'was not necessarily foolish', not that participants were always right; this assumption is not relied upon."
      ],
      workedSolution: "Negation test: if accurate understanding did not require grasping the original uncertainty, then ignoring that uncertainty would not 'corrupt' understanding. Since the argument says it does corrupt understanding, it assumes that grasping the uncertainty is required. The 'deliberately dishonest', 'single cause', and 'participants always correct' options are unnecessary or contradicted.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-125",
      passageId: "psg-history-107",
      type: "detail",
      stem: "According to the passage, what 'moral cost' follows if outcomes are treated as inevitable?",
      options: [
        "Historians lose their professional reputation.",
        "Praise and blame lose their footing, since no one could have done otherwise.",
        "The past becomes impossible to date accurately.",
        "Future events become easier to predict."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: professional reputation is never mentioned; this is not the stated moral cost.",
        "Correct: the passage states that if outcomes were inevitable 'then praise and blame lose their footing, for no one could have done otherwise'.",
        "Wrong: dating accuracy is unrelated to the moral cost the passage describes.",
        "Wrong: the passage makes no claim that treating outcomes as inevitable improves prediction of the future."
      ],
      workedSolution: "Locate the explicit statement. The sentence 'If outcomes were inevitable, then praise and blame lose their footing, for no one could have done otherwise' is the stated moral cost. The 'lose reputation', 'impossible to date', and 'easier to predict the future' options are absent from the text.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-126",
      passageId: "psg-history-108",
      type: "structure",
      stem: "What is the role of the observation that several rivals often arrive at the same invention within months of one another?",
      options: [
        "It is a digression unrelated to the author's thesis.",
        "It is the counter-argument the author ultimately rejects.",
        "It is offered as evidence that an invention was 'ripe', supporting the claim that invention is collective rather than the work of one mind.",
        "It proves that priority disputes are always dishonest."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author calls the simultaneity 'the clue' and builds directly on it, so it is central, not a digression.",
        "Wrong: this observation supports the author's thesis; it is not a view he rejects.",
        "Correct: the author argues that near-simultaneous invention shows the idea was 'ripe' and the conditions 'prepared by predecessors', supporting the collective-invention thesis.",
        "Wrong: priority disputes are mentioned as a symptom of simultaneity, not declared 'always dishonest'."
      ],
      workedSolution: "Map the argument. Simultaneity is named 'the clue' and used to infer that the idea was ripe and prepared by others, supporting the lone-inventor critique. The correct answer states this. The other options misread it as a digression, as a rejected counter-argument, or as proof that priority disputes are always dishonest.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-127",
      passageId: "psg-history-108",
      type: "vocab",
      stem: "As used in the passage, the word 'ripe' (the idea was 'so to speak, ripe') most nearly means:",
      options: [
        "Decayed and no longer useful.",
        "Owned exclusively by one inventor.",
        "Kept deliberately secret from rivals.",
        "Ready to emerge because the necessary conditions had matured."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this is the 'overripe/rotten' sense; the passage uses ripe positively, as ready to appear.",
        "Wrong: the point is the opposite of exclusive ownership; the idea was available to several workers at once.",
        "Wrong: nothing about secrecy attaches to 'ripe'; the rivals were drawing on a 'shared stock' of knowledge.",
        "Correct: the surrounding clause says 'the conditions for it had been prepared by predecessors', so 'ripe' means ready because conditions had matured."
      ],
      workedSolution: "Read 'ripe' with its explanation: the conditions 'had been prepared by predecessors', so the idea was ready to emerge. The 'decayed', 'owned exclusively', and 'kept secret' readings all clash with the context of shared, matured conditions.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-factinf-128",
      passageId: "psg-history-108",
      type: "factinf",
      stem: "Which of the following is presented in the passage as a fact rather than as the author's inference?",
      options: [
        "The idea behind a breakthrough was 'ripe' when several people reached it.",
        "Bitter priority disputes often accompany major inventions such as the telephone and the light bulb.",
        "Crediting a lone hero discourages patient collective work.",
        "The romance of the lone genius gets the mechanics of discovery backwards."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: 'ripe' is the author's interpretive inference drawn from the pattern, not a bare reported fact.",
        "Correct: that priority disputes 'so often accompany' such inventions is stated as a matter of record on which the argument then builds.",
        "Wrong: this is the author's evaluative claim about the effect of the lone-hero myth, an inference.",
        "Wrong: this is the author's concluding judgement, an evaluation rather than a reported fact."
      ],
      workedSolution: "Separate the reported pattern from interpretation. The occurrence of priority disputes accompanying inventions like the telephone and light bulb is given as fact. The 'ripe' claim, the 'discourages collective work' claim, and the 'gets the mechanics backwards' verdict are inferences and evaluations built on it.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-standpoint-129",
      passageId: "psg-philosophy-109",
      type: "standpoint",
      stem: "What is the author's position on the claim that 'desert is an illusion'?",
      options: [
        "The author fully endorses it.",
        "The author rejects it as going too far, while still urging a more humble view of desert.",
        "The author treats it as obviously absurd and not worth discussing.",
        "The author is unable to reach any view on the matter."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author says explicitly 'That conclusion goes too far', so does not endorse it.",
        "Correct: the author calls the no-desert conclusion an overreach yet argues we should 'hold it more humbly', a middle position.",
        "Wrong: the author engages the view seriously and explains why it has appeal before qualifying it, not dismissing it as absurd.",
        "Wrong: the author reaches a definite 'sensible position', so is not undecided."
      ],
      workedSolution: "The author grants the force of the luck argument, then says the no-desert conclusion 'goes too far' and recommends holding desert 'more humbly'. That is a qualified rejection. 'Fully endorses', 'obviously absurd', and 'unable to reach a view' misstate the author's clearly reasoned middle stance.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-130",
      passageId: "psg-philosophy-109",
      type: "assume",
      stem: "The argument that much of what we call desert 'rests on luck' relies on which unstated assumption?",
      options: [
        "People never make any genuine choices.",
        "Everyone is born with identical temperaments.",
        "Effort has no effect on a person's success.",
        "A person cannot fully deserve credit for traits and circumstances they did not choose."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author preserves responsibility practices and speaks of our 'choices', so denying all choice is not assumed.",
        "Wrong: the argument needs only that temperaments are unchosen, not that they are identical; identical temperaments is a different, unneeded claim.",
        "Wrong: the author treats effort as real and even credits it as 'the trait we most readily credit'; denying its effect is not assumed.",
        "Correct: the move from 'these traits were not chosen' to 'desert rests on luck' requires the premise that one cannot fully deserve credit for the unchosen; without it the inference fails."
      ],
      workedSolution: "Negation test: if a person could fully deserve credit for unchosen traits, then showing the traits were unchosen would not show desert rests on luck. So the argument assumes one cannot fully deserve credit for the unchosen. 'Never make choices', 'identical temperaments', and 'effort has no effect' are stronger or unrelated claims the argument does not require.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-inference-131",
      passageId: "psg-philosophy-109",
      type: "inference",
      stem: "Which conclusion does the passage most support about holding people responsible?",
      options: [
        "It can remain justified on practical grounds even if our characters are largely shaped by forces beyond our control.",
        "It should be abandoned entirely because character is shaped by luck.",
        "It is justified only for people born with a steady temperament.",
        "It depends on proving that luck plays no role in human life."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the passage argues that even if character is shaped by external forces, holding people responsible 'shapes behaviour, sustains trust', so it stays justified on practical grounds.",
        "Wrong: the author says abolishing desert 'goes too far' and that responsibility practices 'do real work'.",
        "Wrong: the passage never limits responsibility to the steadily tempered; it applies the practical defence generally.",
        "Wrong: the author affirms luck's large role, so responsibility cannot require proving luck plays no part."
      ],
      workedSolution: "The supported step: granting the role of luck, the author still defends responsibility by its practical effects, since the practices 'shape behaviour, sustain trust'. The correct answer states this. 'Abandon entirely' contradicts 'goes too far'; 'only the steadily tempered' invents a restriction; 'requires luck plays no role' reverses the author's acceptance of luck.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-132",
      passageId: "psg-philosophy-109",
      type: "tone",
      stem: "The closing recommendation to 'temper our confidence, soften our contempt for those who fail' has a tone best described as:",
      options: [
        "Cynical and dismissive of moral judgement.",
        "Measured and humane, urging humility without abandoning judgement.",
        "Triumphant and self-congratulatory.",
        "Despairing about the possibility of justice."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the author keeps moral judgement ('need not paralyse judgement'), so the tone is not dismissive of it.",
        "Correct: the language ('temper', 'soften', 'humility') is calm and compassionate while still affirming that judgement continues, a measured, humane tone.",
        "Wrong: there is no triumphalism; the passage counsels humility, not self-congratulation.",
        "Wrong: the author is constructive, not despairing, explicitly saying humility 'need not paralyse judgement'."
      ],
      workedSolution: "Tone from diction and stance. 'Temper', 'soften', and the call to recognise luck convey calm compassion, paired with a refusal to abandon judgement. That is measured and humane. The other options exaggerate into cynicism, triumph, or despair.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-implied-133",
      passageId: "psg-philosophy-110",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "A being incapable of binding its future self would have less freedom, not more.",
        "Promises are legally enforceable in every country.",
        "People never change their desires over time.",
        "Savings and friendships are morally worthless."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: the author says such a creature 'could not undertake anything at all, and would be less free, not more', so this is supported (indeed nearly stated as a consequence).",
        "Wrong: legal enforceability across countries is never discussed; this is outside the passage.",
        "Wrong: the author allows that a future self 'may have different desires', so 'never change' is contradicted.",
        "Wrong: the author lists savings and friendships as valuable commitments the sceptical view would wrongly dissolve, not as worthless."
      ],
      workedSolution: "Stated-versus-implied: the passage states that the inability to bind one's future self leaves a creature unable to undertake anything and 'less free, not more'. The correct answer draws out that supported point about freedom. The 'legally enforceable everywhere', 'never change desires', and 'savings worthless' options are absent or contradicted.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-tone-134",
      passageId: "psg-philosophy-110",
      type: "tone",
      stem: "The author's response to the sceptical objection ('it proves too much') is best described in tone as:",
      options: [
        "Dismissive without argument, refusing to engage the objection.",
        "Wholly persuaded by the sceptical objection.",
        "Critically engaged: granting the objection 'a certain force' before showing it leads to unacceptable consequences.",
        "Mocking and contemptuous toward the philosophers who raise it."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author does engage, granting the objection 'a certain force' and then arguing against it, so it is not a refusal to engage.",
        "Wrong: the author rejects the objection's conclusion, so is not persuaded by it.",
        "Correct: the author concedes the objection has 'a certain force' but argues it 'proves too much', dissolving ordinary commitments, a critical but fair engagement.",
        "Wrong: the tone is reasoned, not mocking; the philosophers' point is taken seriously before being answered."
      ],
      workedSolution: "Tone tracks how the objection is handled. The author allows it 'a certain force', then refutes it by showing it would dissolve savings, friendships, and planned life. That is critical but fair engagement. The other options misread the balance of concession and rebuttal as refusal, full agreement, or mockery.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-135",
      passageId: "psg-philosophy-110",
      type: "opinion",
      stem: "Which statement is best understood as the author's opinion rather than a neutral report of others' views?",
      options: [
        "Some philosophers press the point to a sceptical conclusion.",
        "A promise made today may bind a future self with different desires.",
        "The sceptical objection asks why the later self should be bound.",
        "The continuity of a person is partly a practical achievement we bring about, not merely a metaphysical discovery we await."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: this reports what 'some philosophers' do, attributed description rather than the author's own view.",
        "Wrong: this is offered as a general observation about promising, a premise rather than the author's distinctive opinion.",
        "Wrong: this restates the objection's question, reporting the sceptics' move, not the author's opinion.",
        "Correct: 'the continuity of a person is ... partly a practical achievement we bring about' is the author's own contested thesis, signalled as 'The better response'."
      ],
      workedSolution: "Distinguish the author's opinion from reported views. The thesis that a person's continuity 'is partly a practical achievement we bring about' is the author's own positive proposal, signalled by 'The better response is to see...'. The other statements report others' positions or state shared premises.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-detail-136",
      passageId: "psg-currentaffairs-111",
      type: "detail",
      stem: "According to the passage, why did many newspapers turn to the paywall?",
      options: [
        "Because readers demanded that journalism be made free.",
        "Because advertising revenue collapsed and they hoped to fund serious journalism by charging readers directly.",
        "Because governments required them to do so.",
        "Because they wished to spread propaganda more widely."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: the passage says nothing about readers demanding free journalism; this reverses the situation described.",
        "Correct: the opening states that 'as advertising revenue collapsed', papers adopted paywalls 'in the hope of funding serious journalism'.",
        "Wrong: no government requirement is mentioned; the move is presented as a business response.",
        "Wrong: the passage associates propaganda with the free tier, not with the newspapers' motive for paywalls."
      ],
      workedSolution: "Explicit comprehension: the first sentence gives the cause, that 'advertising revenue collapsed', and the aim, to fund serious journalism by charging readers. The 'readers demanded free', 'governments required', and 'spread propaganda' options invent motives the passage does not state.",
      difficulty: "easy",
      source: "illustrative"
    },
    {
      id: "q-structure-137",
      passageId: "psg-currentaffairs-111",
      type: "structure",
      stem: "What is the function of the sentence 'That journalism costs money is not in dispute'?",
      options: [
        "It states the author's main conclusion.",
        "It introduces statistical evidence about newspaper finances.",
        "It concedes a point to the opposing 'must be paid for' retort in order to redirect attention to who should bear the cost.",
        "It abandons the author's earlier argument."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: the author's conclusion is that the paywall is not a costless rescue; this sentence is a concession, not that conclusion.",
        "Wrong: no statistics are given; the sentence concedes a point rather than presenting data.",
        "Correct: the author grants that journalism costs money, then pivots ('The question is who should bear the cost'), using the concession to refocus the argument.",
        "Wrong: the author does not abandon the argument; the concession sets up the sharper question that follows."
      ],
      workedSolution: "Map the move. The author concedes the uncontested point that journalism costs money and immediately redirects to the real issue: who pays, and whether pricing out the poorest is acceptable. That is a concede-and-redirect. The other options misread it as the conclusion, as statistics, or as abandoning the argument.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-vocab-138",
      passageId: "psg-currentaffairs-111",
      type: "vocab",
      stem: "As used in the passage, 'corrosive' (a two-tier information system is 'corrosive in a democracy') most nearly means:",
      options: [
        "Gradually damaging or undermining.",
        "Physically acidic.",
        "Expensive to maintain.",
        "Popular and widely admired."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: in context, 'corrosive' describes how a two-tier system harms democracy by eroding the 'shared base of facts' decisions depend on.",
        "Wrong: the literal chemical sense does not fit a description of effects on a democracy.",
        "Wrong: cost is not the point; the word concerns harm to democratic decision-making.",
        "Wrong: 'corrosive' is plainly negative here, the opposite of popular or admired."
      ],
      workedSolution: "Read the metaphor in context: the two-tier system undermines the shared factual basis of democratic choice, so 'corrosive' means gradually damaging. The literal-acid, 'expensive', and 'popular and admired' readings ignore the harmful sense the sentence requires.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-assume-139",
      passageId: "psg-currentaffairs-111",
      type: "assume",
      stem: "The claim that the paywall is 'corrosive in a democracy' depends on which unstated assumption?",
      options: [
        "All free information is false.",
        "Newspapers have a legal duty to be free.",
        "Readers who pay for news are better citizens than those who do not.",
        "Sound democratic decision-making depends on a base of facts being widely shared rather than confined to those who pay."
      ],
      answerIndex: 3,
      perOptionRationale: [
        "Wrong: the author says rumour and falsehood circulate freely and reliable reporting is paywalled, but not that ALL free information is false; the argument does not need that.",
        "Wrong: no legal duty is assumed; the author even canvasses paywalls as a legitimate business model.",
        "Wrong: the argument concerns access to facts, not the comparative virtue of paying readers; this is not required.",
        "Correct: the harm-to-democracy claim follows only if democracy needs facts to be widely shared; the passage states decisions 'depend on a shared base of facts', and the argument relies on this."
      ],
      workedSolution: "Negation test: if widely shared facts were not necessary for democratic decisions, confining facts behind a paywall would not be 'corrosive in a democracy'. So the argument assumes democracy needs facts to be widely shared. 'All free information is false', 'legal duty to be free', and 'paying readers are better citizens' are stronger or irrelevant claims it does not need.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-implied-140",
      passageId: "psg-currentaffairs-112",
      type: "implied",
      stem: "The passage implies, without directly stating, that:",
      options: [
        "Employees who work remotely may be overlooked for promotion compared with those physically present.",
        "Remote work has no genuine benefits for employees.",
        "Commuting is the most valuable part of any job.",
        "Every employer expects staff to work through the weekend."
      ],
      answerIndex: 0,
      perOptionRationale: [
        "Correct: by saying present colleagues 'are the ones remembered when promotions are decided', the author implies the remote employee may be passed over.",
        "Wrong: the author affirms the benefits are 'real' and 'substantial', so denying them contradicts the text.",
        "Wrong: the commute is called 'tedium' that merely marked a threshold; it is not praised as the most valuable part of a job.",
        "Wrong: the author says expectations 'can quietly expand', a tendency, not a universal rule that 'every employer' demands weekend work."
      ],
      workedSolution: "Stated-versus-implied: the explicit line is that present colleagues are the ones 'remembered when promotions are decided'. The unstated but supported step is that remote workers risk being overlooked. The 'no genuine benefits', 'commute most valuable', and 'every employer expects weekend work' options contradict the text or overstate tendencies into absolutes.",
      difficulty: "medium",
      source: "illustrative"
    },
    {
      id: "q-opinion-141",
      passageId: "psg-currentaffairs-112",
      type: "opinion",
      stem: "Which statement is best understood as the author's opinion rather than a factual observation?",
      options: [
        "Remote work removes the daily commute.",
        "A benefit accepted without noticing its price is not quite the unmixed gift it appears.",
        "Without the office, the laptop on the kitchen table is always within reach.",
        "Careers are advanced partly by informal contact among colleagues."
      ],
      answerIndex: 1,
      perOptionRationale: [
        "Wrong: that remote work removes the commute is a plain factual observation, not a contestable judgement.",
        "Correct: 'not quite the unmixed gift it appears' is the author's evaluative verdict on remote work, an opinion that draws the passage's moral.",
        "Wrong: this is a factual description of the home-working arrangement, not an evaluative opinion.",
        "Wrong: this is presented as a general observation about how careers advance, a premise rather than the author's distinctive opinion."
      ],
      workedSolution: "Distinguish opinion from observation. The closing verdict that the benefit is 'not quite the unmixed gift it appears' is the author's evaluation. The 'removes the commute', 'laptop within reach', and 'careers advanced by informal contact' statements state facts or shared premises rather than the author's judgement.",
      difficulty: "hard",
      source: "illustrative"
    },
    {
      id: "q-factinf-142",
      passageId: "psg-currentaffairs-112",
      type: "factinf",
      stem: "Which of the following does the passage present as a factual description rather than as the author's inference?",
      options: [
        "The bargain is more complicated than the cheerful headlines suggest.",
        "Without a commute, the boundary between working hours and private life can dissolve.",
        "The commute marked a daily threshold between two roles.",
        "Flexibility may be purchased with a loss of visibility on which advancement depends."
      ],
      answerIndex: 2,
      perOptionRationale: [
        "Wrong: this is the author's overall evaluative conclusion, an inference, not a neutral fact.",
        "Wrong: 'can dissolve' states the author's interpretive claim about a consequence of remote work, an inference rather than a bare fact.",
        "Correct: that the commute 'marked a daily threshold between two roles' is given as a factual description of what commuting did, on which the argument then builds.",
        "Wrong: this is the author's evaluative judgement about the trade-off, an inference."
      ],
      workedSolution: "Separate description from interpretation. The statement that the commute 'marked a daily threshold between two roles' is a factual description of its former role. The 'complicated bargain', 'boundary dissolves', and 'flexibility purchased with lost visibility' lines are the author's evaluative inferences built on it.",
      difficulty: "hard",
      source: "illustrative"
    }
  );

  /* ESSAY PROMPTS - 3 illustrative, theme-tagged, LNAT-style. */
  DATA.prompts.push(
    {
      id: "prompt-101",
      theme: "civil-liberties",
      text: "Should governments be allowed to restrict free speech in order to protect people from offence?",
      source: "illustrative"
    },
    {
      id: "prompt-102",
      theme: "education-society",
      text: "“Examinations measure little of real value.” Do you agree?",
      source: "illustrative"
    },
    {
      id: "prompt-103",
      theme: "media-tech-environment",
      text: "Is the rise of artificial intelligence a threat that governments should act to contain?",
      source: "illustrative"
    }
  );

  /* MOCK - full Mock Paper 1. References ONLY the IDs defined above. */
  DATA.mocks.push({
    id: "mock-01",
    title: "Mock Paper 1",
    sample: false,
    sectionA: {
      passageIds: [
        "psg-literature-101",
        "psg-literature-102",
        "psg-politics-103",
        "psg-politics-104",
        "psg-science-105",
        "psg-science-106",
        "psg-history-107",
        "psg-history-108",
        "psg-philosophy-109",
        "psg-philosophy-110",
        "psg-currentaffairs-111",
        "psg-currentaffairs-112"
      ],
      questionIds: [
        "q-main-101",
        "q-standpoint-102",
        "q-vocab-103",
        "q-tone-104",
        "q-detail-105",
        "q-inference-106",
        "q-implied-107",
        "q-main-108",
        "q-structure-109",
        "q-assume-110",
        "q-opinion-111",
        "q-standpoint-112",
        "q-inference-113",
        "q-tone-114",
        "q-main-115",
        "q-detail-116",
        "q-vocab-117",
        "q-factinf-118",
        "q-inference-119",
        "q-implied-120",
        "q-structure-121",
        "q-main-122",
        "q-standpoint-123",
        "q-assume-124",
        "q-detail-125",
        "q-structure-126",
        "q-vocab-127",
        "q-factinf-128",
        "q-standpoint-129",
        "q-assume-130",
        "q-inference-131",
        "q-tone-132",
        "q-implied-133",
        "q-tone-134",
        "q-opinion-135",
        "q-detail-136",
        "q-structure-137",
        "q-vocab-138",
        "q-assume-139",
        "q-implied-140",
        "q-opinion-141",
        "q-factinf-142"
      ]
    },
    sectionB: {
      promptIds: ["prompt-101", "prompt-102", "prompt-103"]
    }
  });
})(typeof window !== "undefined" ? window : this);
