# Themenübersicht zur Klausur am 10.12.

Die Klausur deckt den gesamten Themenkomplex „Energetische Sanierung" ab, so wie wir ihn seit September bearbeitet haben – von den bauphysikalischen Grundlagen über die Energiebilanz bis zur Beratungspraxis. Diese Seite ist eure Übersicht für die Vorbereitung: welche Themenfelder sind klausurrelevant, was müsst ihr auswendig wissen, was dürft ihr aus der Formelsammlung entnehmen, und wo findet ihr pro Thema die passenden Übungen.

!!! info "Formalia zur Klausur"
    - **Datum:** 10.12.2026
    - **Dauer:** 120 Minuten
    - **Hilfsmittel:** Formelsammlung (die aus dieser Seite — Werkzeuge → [Formelsammlung](../berechnungen/formelsammlung.md)), Taschenrechner (nicht grafik- oder programmierbar)
    - **Nicht erlaubt:** Smartphone, Smartwatch, eigene Notizen
    - **Aufgabentypen:** Rechenaufgaben, Begründungs- und Transferaufgaben, kurze Verständnis- und Einordnungsfragen

## Grundprinzip: Faktenwissen vs. Nachschlagewissen

Die Klausur ist so aufgebaut, dass ihr mit der Formelsammlung effizient arbeiten könnt. Zwei Dinge solltet ihr unterscheiden:

**Faktenwissen** — muss auswendig verfügbar sein, weil ihr ohne es nicht wisst, *was* ihr nachschlagen sollt:

- Fachbegriffe und ihre Bedeutung ($U$-Wert, $H_T$, JAZ, COP, $F_x$, iSFP, $\eta_a$ usw.)
- Prinzipien der Verfahren (wie funktioniert eine Wärmepumpe? Was unterscheidet Aufsparren- von Zwischensparrendämmung?)
- Logische Zusammenhänge (warum braucht die WP eine niedrige Vorlauftemperatur? Warum verändert WDVS die Dampfdiffusion?)
- Namen der Förderprogramme und Zuständigkeiten (BAFA = Hülle, KfW 458 = Heizung)

**Nachschlagewissen** — steht in der Formelsammlung oder im Aufgabentext:

- Formeln (U-Wert, $H_T$, Q_T, Q_H, $E_{End}$, Amortisation, CO₂-Bilanz)
- $\lambda$-Werte von Materialien
- $F_x$-Werte für Temperaturkorrektur
- $R_{si}/R_{se}$-Standardwerte
- Fördersätze (BAFA 15 % / 20 %, KfW 458 Bausteine)
- Energiepreise, CO₂-Faktoren
- $G_t$-Werte der Klimaregionen

Wer Faktenwissen und Nachschlagewissen klar trennt, spart Klausurzeit – und muss weniger auswendig lernen.

## Die sechs Themenfelder

### Themenfeld I: Bauphysik & Materialien (ca. 20 %)

**Was lernt ihr hier?** Die physikalische Basis jeder energetischen Betrachtung – Wärmeleitung durch ein Bauteil, Berechnung des U-Werts aus Schichtaufbauten, Rolle der Wärmeübergänge und Wärmebrücken, Materialkenntnis.

**Faktenwissen:**

- Begriff und Bedeutung des U-Werts, $\lambda$-Werts, R-Werts
- Was sind $R_{si}$ und $R_{se}$, wo sitzen sie im Schichtenaufbau?
- Was ist eine Wärmebrücke, und warum wirkt sie sich auf den $H_T$ aus?
- Welche Dämmstoffe (grob): Mineralwolle, EPS/XPS, Holzfaser, PIR, Vakuumdämmung – mit ihrer Charakteristik (Preis, Ökologie, Einsatzbereich)
- Was macht PIR besonders? Was macht Holzfaser besonders (Phasenverschiebung)?

**Nachschlagewissen (Formelsammlung):**

- Formel $R = d / \lambda$, $R_{ges} = R_{si} + \sum R_i + R_{se}$, $U = 1/R_{ges}$
- $\lambda$-Werte verschiedener Baustoffe
- $R_{si}/R_{se}$-Standardwerte je Lage
- Wärmebrückenzuschlag $\Delta U_{WB}$ je Ausführungsqualität

**Übungen:** [Übung Weber Aufgaben 1 und 2](../berechnungen/uebung-weber.md), U-Wert-Beispiele im Kapitel [U-Wert von Bauteilen](../berechnungen/u-wert-bauteil.md).

---

### Themenfeld II: Energiebilanz des Gebäudes (ca. 25 %)

**Was lernt ihr hier?** Vom einzelnen Bauteil zur Gesamtbilanz – wie viel Wärme verliert das Gebäude pro Jahr, wie viel Energie muss die Heizung liefern, wie viel Endenergie wird eingekauft?

**Dies ist das Kernrechen-Thema der Klausur.** Hier wird am meisten gerechnet, und hier liegen die meisten Punkte.

**Faktenwissen:**

- Was ist $H_T$, was ist $Q_T$, was ist $Q_H$, was ist $E_{End}$ – wie hängen sie zusammen?
- Was macht $F_x$ – warum zählt die Kellerdecke nur zur Hälfte?
- Rolle der Lüftungsverluste und der Gewinne (solar, intern)
- Was ist $\eta_a$, was ist der Gewinnausnutzungsgrad $\eta_g$?
- Rolle des GEG als Höchstwert, BAFA als Förderhürde

**Nachschlagewissen (Formelsammlung):**

- $H_T = \sum (U_i \cdot A_i \cdot F_{x,i}) + \Delta U_{WB} \cdot A_{\text{Hülle}}$
- $Q_T = H_T \cdot G_t \cdot 24 / 1\,000$
- $Q_V = 0{,}34 \cdot n \cdot V_L \cdot G_t \cdot 24 / 1\,000$
- $Q_H = (Q_T + Q_V) - \eta_g \cdot (Q_S + Q_I)$
- $E_{End} = Q_H / \eta_a + Q_{WW}$
- $F_x$-Werte, $G_t$-Werte, spezifische Werte $q_S$, $q_I$, $q_{WW}$
- Anlagenwirkungsgrade $\eta_a$ bzw. JAZ

**Übungen:** [Übung Weber Aufgaben 3 und 4](../berechnungen/uebung-weber.md), [Transmissionswärmeverluste](../berechnungen/transmissionsverluste.md), [Heizwärmebedarf](../berechnungen/heizwaermebedarf.md).

---

### Themenfeld III: Sanierungskonzepte (ca. 15 %)

**Was lernt ihr hier?** Welche Verfahren gibt es pro Bauteil, wo liegen ihre Voraussetzungen, Vor- und Nachteile, GEG- und BAFA-Grenzen? Wie bewertet man Varianten gegeneinander?

**Faktenwissen:**

- Pro Bauteil die Verfahrensvarianten mit ihrer **charakteristischen Stärke**:
    - **Außenwand**: WDVS (dominant), VHF, Innendämmung
    - **Dach**: Aufsparren (wärmebrückenfrei, teuer), Zwischensparren (Standard), Untersparren (Ergänzung)
    - **Fenster**: 2-fach modern, 3-fach Standard, 3-fach Premium — Variantenkette, $U_W = U_g + U_f + \Psi_g$
    - **Kellerdecke**: von unten (Standard, günstig), von oben (teuer, Komfort), Perimeter (nur bei beheiztem Keller)
- GEG-Höchstwerte und BAFA-Anforderungen je Bauteil (als Richtwert — die genauen Zahlen stehen in der Formelsammlung)
- Nicht-energetische Argumente: Komfort (Innenoberflächen-Temperatur), Schallschutz, Sicherheit, sommerlicher Hitzeschutz, Schimmelprävention

**Nachschlagewissen (Formelsammlung):**

- Tabelle „Typische U-Werte für Sanierungs-Bauteile" mit GEG und BAFA
- Material-Kennwerte

**Übungen:** [Phase 1 WDVS-Kapitel](../fassade-wdvs/wdvs-system.md), [Phase 2 Bauteilkapitel](../phase2/uebersicht.md), die Präsentationsergebnisse der Gruppen vom 10.10.

---

### Themenfeld IV: Anlagentechnik & Erneuerbare Energien (ca. 15 %)

**Was lernt ihr hier?** Wärmeerzeugungs-Systeme in der Sanierung, Wärmepumpe im Zentrum, Photovoltaik und weitere EE-Technologien.

**Faktenwissen:**

- Grundprinzip Wärmepumpe (Umweltwärme + Antriebsstrom → Nutzwärme)
- Unterschied **COP** vs. **JAZ** (Prüfstand vs. Jahresrealität)
- Wichtigste Bauarten: Luft-Wasser, Sole-Wasser, deren JAZ-Bereiche
- Carnot-Argument: warum sinkt JAZ mit steigender Vorlauftemperatur? Warum ist WP eine Konsequenz aus der Hüllensanierung?
- Grundprinzip PV, Nennleistung in kWp, spezifischer Jahresertrag
- Rolle von Solarthermie, Biomasse, Wärmenetzen — qualitative Einordnung
- GEG 65-%-Regel

**Nachschlagewissen (Formelsammlung):**

- JAZ-Formel: $W_{Strom} = Q_{Heiz} / \text{JAZ}$
- Typische JAZ-Werte je Bauart
- PV-Ertrag: $E_{PV} = P_{Nenn} \cdot y_{spez}$ mit Richtwert für NRW
- CO₂-Faktoren Strom-Mix und Prognosen

**Übungen:** [Anlagentechnik-Kapitel](../phase2/anlagentechnik.md), [Erneuerbare Energien](../erneuerbare-energien/index.md).

---

### Themenfeld V: Wirtschaftlichkeit & Förderung (ca. 15 %)

**Was lernt ihr hier?** Investition und Amortisation, Rolle der Förderung in der Entscheidung, aktueller Stand BAFA / KfW 458.

**Faktenwissen:**

- Was ist eine statische Amortisation, was eine dynamische (letztere nur qualitativ, nicht ausrechnen)?
- Zuständigkeiten: **BAFA** für Hülle und Anlagentechnik ohne Heizung, **KfW 458** für Heizungstausch
- iSFP als Instrument und sein doppelter Nutzen (Beratung + 5 %-Bonus)
- Antrag **vor** Auftragsvergabe – häufigster Fehler
- Prinzip Klimageschwindigkeitsbonus (an Austausch alter Heizung gebunden) und Einkommensbonus (gestaffelt)

**Nachschlagewissen (Formelsammlung):**

- Formeln: $\Delta K = \Delta E_{End} \cdot p$, $I_{netto} = I_{brutto} \cdot (1 - f_{Förder})$, $T_{stat} = I_{netto} / \Delta K$
- BAFA-Fördersätze pro Maßnahme (15 % / 20 % mit iSFP)
- KfW-458-Bausteine mit aktuellen Sätzen
- Deckel förderfähige Kosten
- Aktuelle Energiepreise

**Übungen:** [Übung Weber Aufgabe 5](../berechnungen/uebung-weber.md), [Förderung-Kapitel](../wirtschaft-oekologie/foerderung.md), [Amortisation-Kapitel](../wirtschaft-oekologie/amortisation.md).

---

### Themenfeld VI: Beratungspraxis & Industriebau (ca. 10 %)

**Was lernt ihr hier?** Die „weichen" Aspekte der Energieberatung und die Besonderheiten des Industriebaus (neu am 03.11.).

**Faktenwissen:**

- Rolle der Energieberater:in als Vermittler zwischen Fachlichkeit und Kundeninteresse
- iSFP als strukturiertes Beratungsprodukt
- Priorisierungskriterien bei einer Gesamtsanierung (Wirtschaftlichkeit, Anlassbezug, Wärmepumpen-Vorbereitung, Belastung der Bewohner, Liquidität)
- Industriebau: Prozesswärme dominiert oft über Raumwärme — andere Priorisierung als im Wohnbau
- Abwärmerückgewinnung als zentrales Industriethema (meist höchster wirtschaftlicher Hebel)
- Kraft-Wärme-Kopplung (KWK) als Option für Industrie mit konstanter Grundwärmelast

**Übungen:** [Verfahrensvergleich](../phase2/vergleich.md) (5-Schritte-Methodik), [Industriebau-Kapitel](../industriebau/index.md).

---

## Was in der Klausur erwartet wird

### Typische Aufgabenformate

1. **Durchgängige Energiebilanz-Rechnung** (längere Aufgabe, ca. 40–50 min): Von U-Wert über $H_T$ bis Endenergie-Einsparung und Amortisation einer Maßnahme. Mit vorgegebenen Zahlen; die Formeln entnehmt ihr der Formelsammlung.

2. **Kurze Rechenaufgaben** (3–5 Teilaufgaben à 5–8 min): JAZ und Stromverbrauch einer WP, PV-Ertrag, Fördersatz-Berechnung, nötige Dämmdicke für BAFA.

3. **Begründungs- und Transferaufgaben** (ca. 20–30 min): Verfahrensauswahl in einer gegebenen Beratungssituation begründen, Priorisierung erklären, zu einer realistischen Kundenfrage Stellung beziehen.

4. **Verständnis-Fragen** (ca. 10–15 min): Kurze Erklärung von Fachbegriffen, Vergleich COP vs. JAZ, warum WP eine niedrige Vorlauftemperatur braucht, usw.

### Was häufig Punkte kostet

- **Einheiten** werden nicht konsequent mitgeführt (Dicken in cm statt m einrechnet)
- **F_x** vergessen – vor allem bei der Kellerdecke
- **Wärmebrückenzuschlag** fehlt in der $H_T$-Rechnung
- **$\eta_a$** vergessen beim Übergang von Nutzwärme zu Endenergie
- **Nachkommastellen** zu früh gerundet (Rechnet durchgehend mit mindestens 3 Nachkommastellen und rundet erst am Ende)
- Bei Begründungsaufgaben: nur Fakten aufzählen, aber nicht **argumentieren**

### Zeitempfehlung in der Klausur

- Am Anfang 5 min: Alle Aufgaben überfliegen, grob eine Reihenfolge festlegen
- Längere Rechenaufgabe zuerst, solange der Kopf frisch ist
- Zum Ende hin 10 min: Durchsicht, Einheiten prüfen, Antworten vollständig?

## Vorbereitungstipps

**Was lohnt sich jetzt noch?**

1. **Die Übung Weber nochmal durchrechnen** — die sechs Aufgaben decken den gesamten Phase-1-Rechenweg ab. Wenn ihr jede davon ohne Lösungsweg schafft, seid ihr im Rechenteil der Klausur gut aufgestellt.
2. **Formelsammlung aktiv kennen** — nicht nur im Besitz haben, sondern wissen, wo welche Tabelle steht. Beim Klausurdruck zählen Sekunden.
3. **Die Phase-2-Präsentationen durchgehen** — die eigene Gruppe und die der anderen. Transferaufgaben zu Verfahrensvergleichen sind sehr wahrscheinlich.
4. **Die Themenfelder III und VI nicht vernachlässigen** — qualitative Argumentation macht in Summe fast 25 % der Klausur aus, braucht aber keine große Rechenübung.
5. **Am 01.12. die Probeklausur** — zeigt euch realistisch, wo ihr steht.

**Was lohnt sich NICHT mehr?**

- Vollständige Formeln auswendig lernen – die stehen in der Formelsammlung
- $\lambda$-Werte auswendig lernen – stehen in der Formelsammlung
- Alle Fördersätze auswendig lernen – stehen in der Formelsammlung
- Komplette Lehrbuchkapitel durchlesen, die wir nicht behandelt haben

## Fragen zur Prüfungstiefe

Habt ihr konkrete Fragen vom Typ „Was muss ich zum Thema XY alles auswendig wissen?" – stellt sie **am Ende des Distanztermins am 03.11.** in der Rückmeldeschleife (Block C). Ich greife häufig gestellte Fragen in den Präsenzterminen am 07.11. und 21.11. auf.

Nicht ausweichen vor der Frage: Wenn ihr euch bei einem Themenfeld unsicher fühlt, meldet das zurück. Ihr habt in den nächsten vier Terminen genug Zeit, Lücken zu schließen — aber nur, wenn wir sie kennen.
