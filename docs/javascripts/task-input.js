/* Task-Input-Komponente
 *
 * Erwartet ein Element <div class="task-input"> mit folgenden data-Attributen:
 *   data-target       Zielwert (z.B. "0.92")
 *   data-tolerance    Relative Toleranz (Standard: 0.05 = ±5%)
 *   data-unit         Einheit zur Anzeige (z.B. "W/(m²·K)")
 *   data-label        Optionaler abweichender Label-Text
 *   data-hint1        Tipp nach 1. falscher Eingabe
 *   data-hint2        Tipp nach 2. falscher Eingabe
 *   data-hint3        Tipp nach 3. falscher Eingabe
 *
 * Der direkt folgende <details>-Block (typisch erzeugt durch `??? success "..."`)
 * wird verborgen, bis das richtige Ergebnis eingegeben wurde oder der Schüler
 * "Lösung dennoch anzeigen" anklickt (verfügbar nach 3 Versuchen).
 */

(function () {
  "use strict";

  function parseNumberCandidates(str) {
    if (!str) return [];
    const s = String(str).trim().replace(/\s/g, "");
    if (!s) return [];

    const candidates = new Set();

    // Variante 1: Komma als Dezimal (deutsch), Punkte als Tausender
    const v1 = parseFloat(s.replace(/\./g, "").replace(",", "."));
    if (!isNaN(v1)) candidates.add(v1);

    // Variante 2: Punkt als Dezimal (englisch), Kommas als Tausender
    const v2 = parseFloat(s.replace(/,/g, ""));
    if (!isNaN(v2)) candidates.add(v2);

    // Variante 3: alle Trennzeichen entfernen (z.B. wenn Schüler "33650" tippt)
    const v3 = parseFloat(s.replace(/[,.]/g, ""));
    if (!isNaN(v3)) candidates.add(v3);

    return [...candidates];
  }

  function isCorrect(input, target, tolerance) {
    const candidates = parseNumberCandidates(input);
    for (const c of candidates) {
      const rel = Math.abs(c - target) / Math.abs(target);
      if (rel <= tolerance) return true;
    }
    return false;
  }

  function initTaskInput(box) {
    if (box.dataset.initialized === "1") return;
    box.dataset.initialized = "1";

    const target = parseFloat(box.dataset.target);
    const tolerance = parseFloat(box.dataset.tolerance || "0.05");
    const unit = box.dataset.unit || "";
    const label = box.dataset.label || "Endergebnis eingeben:";
    const hints = [
      box.dataset.hint1,
      box.dataset.hint2,
      box.dataset.hint3
    ].filter(Boolean);

    if (isNaN(target)) {
      console.warn("task-input: kein gültiger data-target", box);
      return;
    }

    // Verbergen des nachfolgenden details-Elements
    const details = box.nextElementSibling;
    if (details && details.tagName === "DETAILS") {
      details.classList.add("task-locked");
    }

    // UI aufbauen
    box.innerHTML = ""; // Inhalte werden komplett ersetzt

    const labelEl = document.createElement("p");
    labelEl.className = "task-input__label";
    labelEl.textContent = label;
    box.appendChild(labelEl);

    const row = document.createElement("div");
    row.className = "task-input__row";
    box.appendChild(row);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-input__field";
    input.placeholder = "z. B. 0,92";
    input.setAttribute("aria-label", label);
    row.appendChild(input);

    if (unit) {
      const unitEl = document.createElement("span");
      unitEl.className = "task-input__unit";
      unitEl.textContent = unit;
      row.appendChild(unitEl);
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "task-input__btn";
    btn.textContent = "Prüfen";
    row.appendChild(btn);

    const skipBtn = document.createElement("button");
    skipBtn.type = "button";
    skipBtn.className = "task-input__skip";
    skipBtn.textContent = "Lösung dennoch anzeigen";
    row.appendChild(skipBtn);

    const feedback = document.createElement("div");
    feedback.className = "task-input__feedback";
    feedback.setAttribute("aria-live", "polite");
    box.appendChild(feedback);

    const hintEl = document.createElement("div");
    hintEl.className = "task-input__hint";
    hintEl.style.display = "none";
    box.appendChild(hintEl);

    let attempts = 0;
    let solved = false;

    function showFeedback(html, kind) {
      feedback.innerHTML = html;
      feedback.classList.remove(
        "task-input__feedback--wrong",
        "task-input__feedback--correct"
      );
      if (kind === "wrong") feedback.classList.add("task-input__feedback--wrong");
      if (kind === "correct") feedback.classList.add("task-input__feedback--correct");
    }

    function showHint(idx) {
      if (hints[idx]) {
        hintEl.textContent = hints[idx];
        hintEl.style.display = "";
      }
    }

    function unlockSolution(skipped) {
      if (details && details.tagName === "DETAILS") {
        details.classList.remove("task-locked");
        if (skipped) details.classList.add("task-skipped");
        details.open = true;
      }
      box.classList.add("task-input--solved");
    }

    function check() {
      const value = input.value;
      if (!value.trim()) {
        showFeedback("Bitte ein Ergebnis eingeben.", "wrong");
        return;
      }
      attempts += 1;
      if (isCorrect(value, target, tolerance)) {
        solved = true;
        showFeedback(
          "✓ Richtig! Die Lösung ist nun freigeschaltet.",
          "correct"
        );
        hintEl.style.display = "none";
        input.disabled = true;
        btn.disabled = true;
        skipBtn.style.display = "none";
        unlockSolution(false);
      } else {
        showFeedback(
          "✗ Das passt noch nicht. Prüfe deine Rechnung und versuche es erneut.",
          "wrong"
        );
        // Tipps gestaffelt anzeigen
        if (attempts === 1 && hints.length >= 1) {
          showHint(0);
        } else if (attempts === 2 && hints.length >= 2) {
          showHint(1);
        } else if (attempts >= 3 && hints.length >= 3) {
          showHint(2);
        }
        // Skip-Button nach 3 Versuchen
        if (attempts >= 3) {
          skipBtn.classList.add("task-input__skip--visible");
        }
      }
    }

    btn.addEventListener("click", check);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        check();
      }
    });

    skipBtn.addEventListener("click", () => {
      if (solved) return;
      unlockSolution(true);
      showFeedback(
        "Die Lösung wurde ohne korrekte Eingabe geöffnet. Vergleiche deine Rechnung sorgfältig mit dem Lösungsweg.",
        "wrong"
      );
      input.disabled = true;
      btn.disabled = true;
      skipBtn.style.display = "none";
    });
  }

  function initAll() {
    const boxes = document.querySelectorAll(".task-input:not([data-initialized])");
    boxes.forEach(initTaskInput);
  }

  // Material for MkDocs benutzt instant navigation; wir hängen uns an document$
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      initAll();
    });
  } else {
    document.addEventListener("DOMContentLoaded", initAll);
  }
})();
