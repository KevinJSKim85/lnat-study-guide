/*
 * engine.js — render a question, let the user pick, self-mark on submit, then
 * reveal correctness + per-option rationale + worked solution.
 *
 * AC-E2 (critical): the correct answer must NOT be present in the rendered DOM /
 * accessibility tree before submission. We therefore:
 *   - render options as plain radios with NO correctness hint and NO rationale;
 *   - keep answerIndex / perOptionRationale / workedSolution only in the closure,
 *     never written to the DOM until the user submits.
 *
 * No external dependencies; works over file://. Exposes window.LNATEngine.
 */
(function (root) {
  "use strict";

  var LETTERS = ["A", "B", "C", "D"];

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  /**
   * renderQuestion — mount a self-marking question into `container`.
   *
   * @param {HTMLElement} container  target element (cleared before render)
   * @param {Object} question        a question object (see data/SCHEMA.md §3.2)
   * @param {Object} [opts]
   *   @param {Object} [opts.passage] passage object to show above the question
   *   @param {Function} [opts.onSubmit] called (correct:boolean, chosenIndex:number, question)
   *   @param {Number} [opts.index]   1-based display index, e.g. "Question 3"
   * @returns {Object} controller { isSubmitted(), getChosenIndex() }
   */
  function renderQuestion(container, question, opts) {
    opts = opts || {};
    container.innerHTML = "";

    var submitted = false;
    var chosenIndex = -1;
    var inputs = [];

    // Optional passage panel.
    if (opts.passage) {
      var panel = el("div", { class: "passage-panel", "aria-label": "Reading passage: " + opts.passage.title }, [
        el("h3", { class: "passage-title", text: opts.passage.title }),
        el("div", { class: "passage-genre", text: "Genre: " + opts.passage.genre + " · Original / illustrative — not an official LNAT passage" })
      ]);
      // Body may contain paragraph breaks marked by "\n\n".
      String(opts.passage.body).split(/\n\n+/).forEach(function (para) {
        panel.appendChild(el("p", { class: "passage-body", text: para }));
      });
      container.appendChild(panel);
    }

    var card = el("section", { class: "question-card", "data-question-id": question.id });

    var heading = opts.index ? "Question " + opts.index : "Question";
    card.appendChild(el("h3", { class: "question-heading", text: heading }));
    card.appendChild(el("p", { class: "question-stem", text: question.stem }));

    // Radiogroup of 4 options. No correctness data is attached here (AC-E2).
    var group = el("div", { class: "options", role: "radiogroup", "aria-label": "Answer options" });
    var groupName = "opt-" + question.id;

    question.options.forEach(function (optText, i) {
      var inputId = groupName + "-" + i;
      var input = el("input", {
        type: "radio",
        name: groupName,
        id: inputId,
        value: String(i),
        class: "option-input"
      });
      var label = el("label", { class: "option-label", "for": inputId }, [
        el("span", { class: "option-letter", text: LETTERS[i] }),
        el("span", { class: "option-text", text: optText })
      ]);
      input.addEventListener("change", function () {
        chosenIndex = i;
        submitBtn.disabled = false;
      });
      // keyboard: radios are natively arrow-navigable inside a radiogroup.
      inputs.push(input);
      var row = el("div", { class: "option-row" }, [input, label]);
      group.appendChild(row);
    });
    card.appendChild(group);

    var submitBtn = el("button", {
      type: "button",
      class: "btn btn-primary submit-answer",
      text: "Submit answer",
      disabled: "disabled"
    });
    var feedback = el("div", { class: "feedback", "aria-live": "polite", hidden: "hidden" });

    submitBtn.addEventListener("click", function () {
      if (submitted || chosenIndex < 0) return;
      submitted = true;
      submitBtn.disabled = true;
      inputs.forEach(function (inp) { inp.disabled = true; });
      reveal();
      if (typeof opts.onSubmit === "function") {
        opts.onSubmit(chosenIndex === question.answerIndex, chosenIndex, question);
      }
    });

    card.appendChild(submitBtn);
    card.appendChild(feedback);
    container.appendChild(card);

    // reveal — injects correctness + rationale + worked solution ONLY now.
    function reveal() {
      var correct = chosenIndex === question.answerIndex;

      // Mark each option row with text + icon (not color alone — AC-Q8).
      var rows = group.querySelectorAll(".option-row");
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var isKey = i === question.answerIndex;
        var isChosen = i === chosenIndex;
        if (isKey) row.classList.add("is-correct");
        if (isChosen && !isKey) row.classList.add("is-incorrect");
        var tag = "";
        if (isKey) tag = "✓ Correct answer";
        else if (isChosen) tag = "✗ Your answer";
        if (tag) {
          row.appendChild(el("span", { class: "option-marker", text: tag }));
        }
        // Per-option rationale, injected on submit.
        row.appendChild(el("p", {
          class: "option-rationale",
          text: question.perOptionRationale[i]
        }));
      }

      feedback.hidden = false;
      feedback.appendChild(el("p", {
        class: correct ? "verdict verdict-correct" : "verdict verdict-incorrect",
        text: correct
          ? "Correct. You chose " + LETTERS[chosenIndex] + "."
          : "Incorrect. You chose " + LETTERS[chosenIndex] + "; the answer is " + LETTERS[question.answerIndex] + "."
      }));
      feedback.appendChild(el("h4", { class: "solution-heading", text: "Worked solution" }));
      feedback.appendChild(el("p", { class: "worked-solution", text: question.workedSolution }));
    }

    return {
      isSubmitted: function () { return submitted; },
      getChosenIndex: function () { return chosenIndex; },
      // Test seam: programmatically choose + submit (used by e2e checks).
      _choose: function (i) {
        if (inputs[i]) { inputs[i].checked = true; chosenIndex = i; submitBtn.disabled = false; }
      },
      _submit: function () { submitBtn.click(); }
    };
  }

  root.LNATEngine = { renderQuestion: renderQuestion, LETTERS: LETTERS, _el: el };
})(typeof window !== "undefined" ? window : this);
