/*
 * fundamentals.js — Section B essay guide, 9 official prompts, and self-marking
 * checklist for the LNAT study site.
 *
 * Buckets written:
 *   window.LNAT_DATA.essayGuide  (ids: essay-fundamentals, essay-checklist)
 *   window.LNAT_DATA.prompts     (ids: prompt-601 .. prompt-609)
 *
 * The essayGuide bucket is non-standard (not in the core schema's loader manifest).
 * It is initialised defensively below before any push.
 *
 * Official prompts cited from: https://lnat.ac.uk/how-to-prepare/sample-essays/
 * All other content: English only, original.
 */
(function (root) {
  "use strict";

  var DATA = root.LNAT_DATA;
  if (!DATA) {
    (root.console || { error: function () {} }).error(
      "[LNAT] fundamentals.js loaded before loader.js — window.LNAT_DATA is missing."
    );
    return;
  }

  /* ---------------------------------------------------------------------- *
   * Defensive bucket initialisation for essayGuide (non-manifest bucket).
   * ---------------------------------------------------------------------- */
  DATA.essayGuide = DATA.essayGuide || [];

  /* ====================================================================== *
   * 1. ESSAY GUIDE — id: essay-fundamentals                                 *
   * ====================================================================== */
  DATA.essayGuide.push({
    id: "essay-fundamentals",
    title: "Section B Fundamentals: How to Write an LNAT Essay",
    body:
      "<h2>What Section B actually is</h2>" +
      "<p>Section B gives you <strong>three prompts</strong>. You choose one and write " +
      "a single essay in <strong>40 minutes</strong>. The recommended length is " +
      "<strong>500–600 words</strong> (absolute maximum ~750). Crucially, your essay " +
      "is <em>not</em> centrally scored by LNAT. It is sent verbatim — exactly as " +
      "you typed it — to every university you listed. Each university then reads and " +
      "assesses it on its own criteria. This means:</p>" +
      "<ul>" +
      "<li>There is no universal marking scheme or grade to chase.</li>" +
      "<li>Universities like UCL and Bristol weight the essay heavily; KCL and LSE " +
      "weight it lightly. Know your target university's stance.</li>" +
      "<li>Cambridge tutors reportedly mark essays /10; Oxford weighs essay quality " +
      "alongside a high MCQ threshold. Either way, a weak essay costs you.</li>" +
      "</ul>" +

      "<h2>What universities look for (marking dimensions)</h2>" +
      "<p>Official hints and university guidance converge on five dimensions. An " +
      "excellent essay scores well on all five; a weak essay typically fails on the " +
      "first two.</p>" +
      "<ol>" +
      "<li><strong>Clarity of thought and expression</strong> — precise, unambiguous " +
      "sentences; no ornate language masking thin reasoning.</li>" +
      "<li><strong>Argument quality</strong> — a clear, committed position defended " +
      "with reasons; not a survey of views or a fence-sitting summary.</li>" +
      "<li><strong>Structure</strong> — a recognisable shape: thesis in the " +
      "introduction, developed body paragraphs, a counterargument engaged and " +
      "rebutted, a conclusion that restates the position.</li>" +
      "<li><strong>Concrete, relevant examples</strong> — specific illustrations " +
      "that ground your claims; bald assertions without evidence are penalised.</li>" +
      "<li><strong>Economy</strong> — every sentence earns its place; no padding, " +
      "no throat-clearing, no restating what you just said.</li>" +
      "</ol>" +

      "<h2>The Five I's — fatal flaws to eliminate</h2>" +
      "<p>Oxford tutors and leading LNAT coaches identify five patterns that " +
      "consistently produce weak essays. Learn to name them so you can spot them " +
      "in your own drafts.</p>" +
      "<table>" +
      "<thead><tr><th>The flaw</th><th>What it looks like</th><th>How to fix it</th></tr></thead>" +
      "<tbody>" +
      "<tr><td><strong>Irresolute</strong></td><td>Fence-sitting. You list multiple " +
      "views and call them all 'understandable'. You never commit. The conclusion " +
      "says 'it depends'.</td><td>State a clear thesis in paragraph 1. Every " +
      "subsequent paragraph should defend <em>that</em> thesis, not hedge it.</td></tr>" +
      "<tr><td><strong>Indecisive</strong></td><td>Mid-essay wobbling. You begin on " +
      "one side, raise a counterargument, and then quietly slide to the other side " +
      "without rebutting it. The reader loses track of your position.</td>" +
      "<td>Concede the counterargument's force, then explicitly rebut it. Your " +
      "position after the rebuttal must be the same as your opening thesis.</td></tr>" +
      "<tr><td><strong>Imprecise</strong></td><td>Vague language: 'interesting', " +
      "'somehow', 'in a way', 'generally speaking'. Ornate vocabulary that sounds " +
      "sophisticated but says nothing specific.</td><td>Replace every vague qualifier " +
      "with a concrete claim or example. If you cannot make the claim specific, the " +
      "claim probably has no substance.</td></tr>" +
      "<tr><td><strong>Inconsistent</strong></td><td>Self-contradiction across " +
      "paragraphs. You assert X in paragraph 2 and implicitly deny X in paragraph 4 " +
      "without acknowledging the tension.</td><td>Re-read your essay as a hostile " +
      "reader would. Ask: do my claims hold together? Does any example undermine my " +
      "thesis rather than support it?</td></tr>" +
      "<tr><td><strong>Indignant</strong></td><td>Attacking the question rather than " +
      "answering it. 'This question is impossible to answer' or 'How anyone could " +
      "think X is beyond me.' Moral outrage replacing argument.</td>" +
      "<td>You may find a prompt uncomfortable — answer it anyway. Rigorous argument " +
      "from a position you find distasteful is precisely what law schools want to see " +
      "you produce.</td></tr>" +
      "</tbody></table>" +

      "<h2>The five-part essay structure</h2>" +
      "<p>Every high-scoring LNAT essay follows this shape. You do not need to be " +
      "original about structure — save originality for your arguments.</p>" +
      "<ol>" +
      "<li><strong>Introduction + thesis</strong> (2–4 sentences)<br>" +
      "Define any key terms in the prompt if they are genuinely ambiguous. Then state " +
      "your thesis: one clear sentence that takes a side. Optionally, signal the two " +
      "or three reasons that will follow. Do <em>not</em> begin with 'Since the dawn " +
      "of time...' or a dictionary definition no one asked for.</li>" +
      "<li><strong>Argument paragraph 1</strong> (5–8 sentences)<br>" +
      "Develop your strongest reason. State the point, explain the reasoning, anchor " +
      "it with a concrete example or fact. End with a sentence that links back to the " +
      "thesis.</li>" +
      "<li><strong>Argument paragraph 2</strong> (5–8 sentences)<br>" +
      "Develop a second, distinct reason — not a restatement of the first. Same " +
      "pattern: point → reasoning → example → link.</li>" +
      "<li><strong>Counterargument + rebuttal</strong> (4–6 sentences)<br>" +
      "State the strongest objection to your thesis fairly and in full. Then rebut it: " +
      "show why it does not defeat your position, or why your argument outweighs it. " +
      "A rebuttal that dismisses the counterargument in one word ('However, this is " +
      "wrong') is not a rebuttal.</li>" +
      "<li><strong>Conclusion</strong> (2–3 sentences)<br>" +
      "Restate your thesis in fresh language — do not copy paragraph 1. Briefly " +
      "echo the two main reasons. Introduce no new arguments or evidence. One clean " +
      "closing sentence.</li>" +
      "</ol>" +

      "<h2>40-minute timing plan</h2>" +
      "<p>This plan is tight. Practise it under timed conditions so the allocation " +
      "becomes automatic.</p>" +
      "<table>" +
      "<thead><tr><th>Phase</th><th>Time</th><th>What to do</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Read all three prompts</td><td>~2 min</td><td>Read each carefully. " +
      "Pick the one where you can immediately think of (a) a clear thesis and " +
      "(b) at least two reasons and one counterargument. Do <em>not</em> pick the " +
      "topic you know most about if you cannot form a committed position.</td></tr>" +
      "<tr><td>Plan</td><td>5–8 min</td><td>Write a micro-outline on screen: thesis " +
      "sentence → reason 1 + example → reason 2 + example → best counterargument → " +
      "rebuttal → conclusion hook. Do not skip this. Essays that skip planning " +
      "meander.</td></tr>" +
      "<tr><td>Write</td><td>25–28 min</td><td>Follow the five-part structure. Aim " +
      "for 500–600 words. Write continuously — do not edit as you go. Keep one eye " +
      "on the word count; stop new content at 580 words and move to the " +
      "conclusion.</td></tr>" +
      "<tr><td>Edit</td><td>4–5 min</td><td>One pass only. Check: (1) Does the " +
      "thesis appear in paragraph 1? (2) Is any sentence doing zero work? Delete it. " +
      "(3) Any vague qualifier (see Imprecise)? Replace it. (4) Any self-contradiction " +
      "(see Inconsistent)? Fix it.</td></tr>" +
      "</tbody></table>" +

      "<h2>Strong vs weak at a glance</h2>" +
      "<table>" +
      "<thead><tr><th>Strong essay</th><th>Weak essay</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Committed thesis in sentence 1</td><td>No thesis; 'there are many views'</td></tr>" +
      "<tr><td>Two distinct developed reasons</td><td>Same point restated twice</td></tr>" +
      "<tr><td>Concrete examples (named, specific)</td><td>Bald assertions</td></tr>" +
      "<tr><td>Counterargument stated fairly and rebutted</td><td>Counterargument ignored or dismissed in one word</td></tr>" +
      "<tr><td>Internally consistent throughout</td><td>Contradicts itself mid-essay</td></tr>" +
      "<tr><td>Economical — no wasted sentences</td><td>Padded with throat-clearing</td></tr>" +
      "<tr><td>Precise, plain prose</td><td>Ornate language masking thin content</td></tr>" +
      "<tr><td>Original angle on the question</td><td>Generic, rehearsed argument</td></tr>" +
      "</tbody></table>"
  });

  /* ====================================================================== *
   * 2. NINE OFFICIAL PROMPTS — ids: prompt-601 .. prompt-609               *
   *    Source: https://lnat.ac.uk/how-to-prepare/sample-essays/            *
   * ====================================================================== */
  DATA.prompts.push(
    {
      id: "prompt-601",
      theme: "law-justice",
      text: "How should judges be appointed?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-602",
      theme: "education-society",
      text: "Make the best case you can for public funding of the arts.",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-603",
      theme: "ethics",
      text: "Does it matter if some animal and plant species die out?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-604",
      theme: "education-society",
      text:
        "“It is right that students should contribute to the cost of their " +
        "degrees.” Do you agree?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-605",
      theme: "education-society",
      text: "What disciplinary sanctions should teachers be allowed to use?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-606",
      theme: "civil-liberties",
      text:
        "“We must be prepared to sacrifice traditional liberties to defeat " +
        "terrorism.” Discuss.",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-607",
      theme: "politics-governance",
      text: "Should the law require people to vote in general elections?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-608",
      theme: "media-tech-environment",
      text: "Should private cars be rationed? If so, how?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    },
    {
      id: "prompt-609",
      theme: "politics-governance",
      text: "What is “political correctness” and why does it matter?",
      source: "official-cited",
      citation: "https://lnat.ac.uk/how-to-prepare/sample-essays/"
    }
  );

  /* ====================================================================== *
   * 3. SELF-MARKING CHECKLIST — id: essay-checklist                        *
   * ====================================================================== */
  DATA.essayGuide.push({
    id: "essay-checklist",
    title: "Self-Marking Checklist: Apply After Every Practice Essay",
    body:
      "<p><strong>Instructions:</strong> Complete this checklist within 5 minutes " +
      "of finishing each practice essay. Answer every item honestly. A 'No' on any " +
      "item is a specific action point, not a general feeling of having done badly.</p>" +

      "<h3>Structure &amp; Thesis</h3>" +
      "<ol>" +
      "<li>Thesis stated explicitly in paragraph 1? <strong>Y / N</strong><br>" +
      "<em>Rubric: thesis | Five-I avoided: Irresolute</em></li>" +
      "<li>Thesis takes ONE clear side — not fence-sitting or 'it depends'? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: thesis | Five-I: Irresolute</em></li>" +
      "<li>Essay has at least 2 distinct argument paragraphs (not the same point " +
      "restated)? <strong>Y / N</strong><br>" +
      "<em>Rubric: structure, argument</em></li>" +
      "<li>Counterargument stated fairly — in the opposing side's own terms, not a " +
      "straw man? <strong>Y / N</strong><br>" +
      "<em>Rubric: counterargument</em></li>" +
      "<li>Counterargument explicitly rebutted — not just acknowledged and dropped? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: counterargument | Five-I: Indecisive</em></li>" +
      "<li>Conclusion restates the thesis (in fresh words, not copied)? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: structure</em></li>" +
      "<li>Conclusion introduces no new arguments or evidence? <strong>Y / N</strong><br>" +
      "<em>Rubric: structure, economy</em></li>" +
      "</ol>" +

      "<h3>Argument Quality</h3>" +
      "<ol start=\"8\">" +
      "<li>Each main claim supported by at least one concrete, specific example? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: examples | Five-I: Imprecise</em></li>" +
      "<li>No paragraph that is pure assertion with zero reasoning or evidence? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: argument, examples</em></li>" +
      "<li>Position is the same at the end as at the start (no mid-essay drift to " +
      "the other side)? <strong>Y / N</strong><br>" +
      "<em>Rubric: argument | Five-I: Indecisive</em></li>" +
      "<li>No self-contradiction across paragraphs (claim X in §2 not denied in §4 " +
      "without acknowledgement)? <strong>Y / N</strong><br>" +
      "<em>Five-I: Inconsistent</em></li>" +
      "</ol>" +

      "<h3>Clarity &amp; Economy</h3>" +
      "<ol start=\"12\">" +
      "<li>Every sentence does a job — no throat-clearing, no padding, no " +
      "restatement for its own sake? <strong>Y / N</strong><br>" +
      "<em>Rubric: economy</em></li>" +
      "<li>Language is precise — no vague qualifiers ('somehow', 'interesting', " +
      "'in a way', 'generally speaking') standing in for a real claim? " +
      "<strong>Y / N</strong><br>" +
      "<em>Rubric: clarity | Five-I: Imprecise</em></li>" +
      "<li>Tone is measured throughout — no moral outrage, no attacking the question " +
      "instead of answering it? <strong>Y / N</strong><br>" +
      "<em>Five-I: Indignant</em></li>" +
      "<li>Prose is readable at first pass — no sentence so long or tangled that it " +
      "needs re-reading? <strong>Y / N</strong><br>" +
      "<em>Rubric: clarity</em></li>" +
      "</ol>" +

      "<h3>Word Count</h3>" +
      "<ol start=\"16\">" +
      "<li>Word count is between 500 and 600 words? <strong>Y / N</strong> — " +
      "auto-count in the text box.<br>" +
      "<em>Target: 500–600 words. Below 500 = underdeveloped. Above 750 = padding " +
      "or structural problem.</em></li>" +
      "</ol>" +

      "<h3>Scoring guide</h3>" +
      "<p>16 Yes = no obvious flaw to fix this session — work on depth and " +
      "originality.<br>" +
      "13–15 Yes = solid foundation; trace each No to the rubric dimension listed " +
      "and drill that specific area.<br>" +
      "10–12 Yes = structural gaps; re-read the Five-I guide before your next " +
      "attempt.<br>" +
      "Below 10 = re-read the full fundamentals guide and write a new essay on a " +
      "different prompt before re-scoring.</p>" +

      "<hr>" +
      "<p><strong>HONESTY NOTE:</strong> This checklist is intentionally mechanical " +
      "and judgment-free — it catches structural and surface-level problems that you " +
      "can self-diagnose reliably. However, Section B has one dimension this " +
      "checklist cannot reach: whether your <em>argument</em> is genuinely " +
      "persuasive to a reader who does not share your starting assumptions. That " +
      "requires a real human reader. If possible, exchange essays with a peer or " +
      "ask a teacher to read one timed attempt cold and tell you (a) what they " +
      "think your thesis is, and (b) which paragraph, if any, lost them. " +
      "That external read is the one piece of feedback the site cannot replicate " +
      "on its own.</p>"
  });

})(typeof window !== "undefined" ? window : this);
