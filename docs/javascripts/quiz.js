/* Quiz-Komponente
 *
 * HTML-Struktur:
 *   <div class="quiz" data-title="Verständnis-Check">
 *     <div class="quiz__q" data-correct="2">
 *       <p class="quiz__qtext">Frage…</p>
 *       <ul class="quiz__opts">
 *         <li>Option 1</li>
 *         <li>Option 2 (richtige Antwort)</li>
 *         <li>Option 3</li>
 *       </ul>
 *       <div class="quiz__explain">Erklärung warum…</div>
 *     </div>
 *     ...
 *   </div>
 *
 * data-correct ist 1-basiert. Mehrere richtige Antworten werden derzeit nicht unterstützt.
 */

(function () {
  "use strict";

  function buildQuestion(qEl, qIndex, totalQuestions, onAnswered) {
    if (qEl.dataset.initialized === "1") return;
    qEl.dataset.initialized = "1";

    const correctIdx = parseInt(qEl.dataset.correct, 10);
    if (isNaN(correctIdx)) {
      console.warn("quiz: kein gültiges data-correct", qEl);
      return;
    }

    // Frage-Nummer voranstellen, wenn nicht schon vorhanden
    const qtext = qEl.querySelector(".quiz__qtext");
    if (qtext && !qtext.querySelector(".quiz__qnum")) {
      const num = document.createElement("span");
      num.className = "quiz__qnum";
      num.textContent = `Frage ${qIndex}.`;
      qtext.insertBefore(num, qtext.firstChild);
      // Leerzeichen sicherstellen
      if (num.nextSibling && num.nextSibling.nodeType === Node.TEXT_NODE) {
        if (!num.nextSibling.textContent.startsWith(" ")) {
          num.nextSibling.textContent = " " + num.nextSibling.textContent;
        }
      } else {
        num.insertAdjacentText("afterend", " ");
      }
    }

    const optsList = qEl.querySelector(".quiz__opts");
    if (!optsList) return;

    // Optionen als klickbare Elemente vorbereiten
    const options = Array.from(optsList.children);
    options.forEach((li, i) => {
      li.classList.add("quiz__opt");
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");
      li.dataset.idx = String(i + 1);

      const handler = () => {
        if (qEl.classList.contains("quiz__q--locked")) return;
        const chosenIdx = i + 1;
        const correct = chosenIdx === correctIdx;

        if (correct) {
          li.classList.add("quiz__opt--correct");
        } else {
          li.classList.add("quiz__opt--wrong");
          // Auch die richtige Antwort markieren
          const correctOpt = options[correctIdx - 1];
          if (correctOpt) correctOpt.classList.add("quiz__opt--missed");
        }

        qEl.classList.add("quiz__q--locked");

        // Erklärung anzeigen
        const explain = qEl.querySelector(".quiz__explain");
        if (explain) explain.classList.add("quiz__explain--visible");

        onAnswered(qIndex, correct);
      };

      li.addEventListener("click", handler);
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handler();
        }
      });
    });
  }

  function resetQuiz(quizEl) {
    const questions = quizEl.querySelectorAll(".quiz__q");
    questions.forEach((qEl) => {
      qEl.classList.remove("quiz__q--locked");
      qEl.querySelectorAll(".quiz__opt").forEach((opt) => {
        opt.classList.remove(
          "quiz__opt--correct",
          "quiz__opt--wrong",
          "quiz__opt--missed"
        );
      });
      const explain = qEl.querySelector(".quiz__explain");
      if (explain) explain.classList.remove("quiz__explain--visible");
    });
    const score = quizEl.querySelector(".quiz__score");
    if (score) score.classList.remove("quiz__score--visible");
    quizEl._answered = 0;
    quizEl._correct = 0;
  }

  function initQuiz(quizEl) {
    if (quizEl.dataset.initialized === "1") return;
    quizEl.dataset.initialized = "1";

    // Titel und Intro voranstellen, falls definiert
    const title = quizEl.dataset.title || "Verständnis-Check";
    const intro = quizEl.dataset.intro ||
      "Beantworte die Fragen zur Selbstkontrolle. Die Antworten werden nicht gespeichert – probiere ruhig mehrfach.";

    // Nur einfügen, wenn nicht schon manuell vorhanden
    if (!quizEl.querySelector(".quiz__title")) {
      const titleEl = document.createElement("h3");
      titleEl.className = "quiz__title";
      titleEl.textContent = title;
      quizEl.insertBefore(titleEl, quizEl.firstChild);

      const introEl = document.createElement("p");
      introEl.className = "quiz__intro";
      introEl.textContent = intro;
      titleEl.insertAdjacentElement("afterend", introEl);
    }

    const questions = Array.from(quizEl.querySelectorAll(".quiz__q"));
    const total = questions.length;
    quizEl._answered = 0;
    quizEl._correct = 0;

    function onAnswered(qIndex, correct) {
      quizEl._answered += 1;
      if (correct) quizEl._correct += 1;
      if (quizEl._answered === total) {
        showScore(quizEl, total);
      }
    }

    questions.forEach((qEl, idx) => buildQuestion(qEl, idx + 1, total, onAnswered));

    // Score-Bereich anlegen, wenn nicht vorhanden
    if (!quizEl.querySelector(".quiz__score")) {
      const score = document.createElement("div");
      score.className = "quiz__score";
      const scoreText = document.createElement("div");
      scoreText.className = "quiz__score-text";
      score.appendChild(scoreText);

      const restart = document.createElement("button");
      restart.type = "button";
      restart.className = "quiz__restart";
      restart.textContent = "↻ Quiz wiederholen";
      restart.addEventListener("click", () => resetQuiz(quizEl));
      score.appendChild(restart);

      quizEl.appendChild(score);
    }
  }

  function showScore(quizEl, total) {
    const got = quizEl._correct;
    const score = quizEl.querySelector(".quiz__score");
    const scoreText = score.querySelector(".quiz__score-text");

    let label;
    const ratio = got / total;
    if (ratio === 1) {
      label = "🎉 Perfekt – alles richtig!";
    } else if (ratio >= 0.8) {
      label = "Sehr gut – fast alles richtig.";
    } else if (ratio >= 0.6) {
      label = "Solide Grundlagen – schau dir die Erklärungen zu den falschen Antworten nochmal an.";
    } else {
      label = "Es lohnt sich, das Kapitel nochmal durchzugehen.";
    }

    scoreText.innerHTML = `<strong>${got} von ${total}</strong> richtig — ${label}`;
    score.classList.add("quiz__score--visible");
  }

  function initAll() {
    document.querySelectorAll(".quiz:not([data-initialized])").forEach(initQuiz);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      initAll();
    });
  } else {
    document.addEventListener("DOMContentLoaded", initAll);
  }
})();
