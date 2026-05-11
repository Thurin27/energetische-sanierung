# U-Wert von Bauteilen berechnen

In diesem Kapitel rechnen wir den **U-Wert mehrschichtiger Bauteile** schrittweise per Hand. Wir wenden das Wissen aus dem Kapitel [Wärmedurchgang](../grundlagen/waermedurchgang.md) konkret auf das EFH von Familie Schmitt an – einmal im Bestand und einmal nach Sanierung mit einem Wärmedämmverbundsystem (WDVS).

!!! abstract "Lernziele"
    Nach diesem Kapitel könnt ihr
    
    - den U-Wert eines beliebigen geschichteten Bauteils per Hand berechnen,
    - Schichtaufbauten korrekt interpretieren (von innen nach außen),
    - die Wärmeübergangswiderstände situationsgerecht wählen,
    - die Wirkung einer Dämmmaßnahme quantitativ einschätzen.

## Die Formel

$$
U = \dfrac{1}{R_{si} + \displaystyle\sum_{i} \dfrac{d_i}{\lambda_i} + R_{se}}
$$

mit

- $R_{si}$ = innerer Wärmeübergangswiderstand (Wand: 0,13 m²·K/W)
- $R_{se}$ = äußerer Wärmeübergangswiderstand (Wand: 0,04 m²·K/W)
- $d_i$ = Schichtdicke in Meter
- $\lambda_i$ = Wärmeleitfähigkeit in W/(m·K)

## Die Tabellenform

Jede U-Wert-Berechnung wird **tabellarisch** aufgeschrieben:

| Schicht | $d$ in m | $\lambda$ in W/(m·K) | $R = d/\lambda$ in m²·K/W |
|---|---|---|---|
| Wärmeübergang innen | | | 0,13 |
| Schicht 1 | … | … | … |
| ... | | | |
| Wärmeübergang außen | | | 0,04 |
| **Summe** | | | $R_{ges}$ |

und am Ende: $U = 1 / R_{ges}$.

!!! tip "Saubere Formgebung"
    - Schichten **immer von innen nach außen** auflisten – der Wärmestrom geht in diese Richtung.
    - Dicken in **Meter**, nicht in Zentimeter eingeben (sonst kommt der Faktor 100 raus).
    - Auf **drei Nachkommastellen** rechnen, am Ende auf zwei runden.

---

## Aufgabe 2: Bestand Außenwand bei Familie Schmitt

Die Außenwand des EFH der Schmitts hat folgenden Aufbau (von innen nach außen):

| Schicht | Dicke | $\lambda$ |
|---|---|---|
| Innenputz (Kalkgipsputz) | 1,5 cm | 0,70 W/(m·K) |
| Hochlochziegel (1970er) | 36,5 cm | 0,42 W/(m·K) |
| Außenputz (Mineralputz) | 2,0 cm | 0,87 W/(m·K) |

**Berechne den U-Wert der bestehenden Außenwand.**

<div class="task-input"
  data-target="0.92"
  data-tolerance="0.05"
  data-unit="W/(m²·K)"
  data-label="Aufgabe 2 – U-Wert Bestand:"
  data-hint1="Hast du alle drei Schichten in der Tabelle erfasst (Innenputz, Hochlochziegel, Außenputz)?"
  data-hint2="Vergiss die Wärmeübergangswiderstände nicht: R_si = 0,13 und R_se = 0,04 m²·K/W."
  data-hint3="Prüfe die Einheiten: Schichtdicken müssen in Metern eingesetzt werden, nicht in Zentimetern."></div>

??? success "Lösung"
    
    | Schicht | $d$ in m | $\lambda$ in W/(m·K) | $R = d / \lambda$ in m²·K/W |
    |---|---|---|---|
    | Wärmeübergang innen | – | – | 0,130 |
    | Innenputz | 0,015 | 0,70 | 0,021 |
    | Hochlochziegel | 0,365 | 0,42 | 0,869 |
    | Außenputz | 0,020 | 0,87 | 0,023 |
    | Wärmeübergang außen | – | – | 0,040 |
    | **Summe** | | | **1,083** |
    
    $$
    U = \dfrac{1}{R_{ges}} = \dfrac{1}{1{,}083} = 0{,}923 \approx \mathbf{0{,}92 \, \text{W/(m}^2\text{·K)}}
    $$
    
    **Interpretation:** Pro Quadratmeter Wandfläche fließen bei einem Grad Temperaturunterschied 0,92 W nach außen. Das ist nach heutigem Maßstab ein schlechter Wert – die GEG-Anforderung an sanierte Wände liegt bei 0,24 W/(m²·K).

### Was bedeutet das in Watt?

!!! example "Aufgabe 2.1 – Wärmestrom durch die ganze Wand"
    Die Außenwand der Schmitts hat eine Gesamtfläche von **152 m²** (aus Aufgabe 1 der Lernsituation: Außenwand brutto 167,7 m² minus Fenster und Tür 15,5 m²). An einem typischen Wintertag ist es innen 20 °C und außen 0 °C.
    
    Berechne den momentanen Wärmestrom $\dot{Q}$ durch die Außenwand.

??? success "Lösung 2.1"
    Mit $\dot{Q} = U \cdot A \cdot \Delta\vartheta$:
    
    $$
    \dot{Q} = 0{,}92 \, \dfrac{\text{W}}{\text{m}^2 \cdot \text{K}} \cdot 152 \, \text{m}^2 \cdot 20 \, \text{K} = 2 \, 797 \, \text{W} \approx \mathbf{2{,}8 \, \text{kW}}
    $$
    
    **Veranschaulichung:** 2,8 kW – das entspricht dauerhaft eingeschalteten 28 LED-Strahlern à 100 W. Diese Leistung muss die Heizung **nur für die Wand** ständig nachliefern. Solange es draußen kalt ist, geht das jede Sekunde, jeden Tag, den ganzen Winter.

---

## Aufgabe 3: Außenwand nach WDVS-Sanierung

Familie Schmitt entscheidet sich für ein **Wärmedämmverbundsystem mit 16 cm EPS**. Der Schichtaufbau wird ergänzt um (nach außen):

| Schicht | Dicke | $\lambda$ |
|---|---|---|
| Klebemörtel | 0,5 cm | 0,87 W/(m·K) |
| EPS-Hartschaum | 16,0 cm | 0,035 W/(m·K) |
| Armierungsmörtel + Oberputz | 0,5 cm | 0,87 W/(m·K) |

Den Außenputz des Bestands entfernen wir nicht – er bleibt als Untergrund unter dem WDVS. Die übrigen Schichten bleiben wie bisher.

**Berechne den U-Wert der sanierten Außenwand.**

<div class="task-input"
  data-target="0.18"
  data-tolerance="0.05"
  data-unit="W/(m²·K)"
  data-label="Aufgabe 3 – U-Wert nach WDVS-Sanierung:"
  data-hint1="Übernimm die Schichten aus Aufgabe 2 und ergänze die WDVS-Schichten von außen."
  data-hint2="Die EPS-Dämmung trägt mit Abstand am meisten zum Gesamtwiderstand bei. Berechne R_EPS = 0,16 / 0,035 separat – das sind über 4 m²·K/W."
  data-hint3="Achte auf den λ-Wert von EPS (sehr klein: 0,035). Entsprechend groß wird R. Endwert sollte deutlich kleiner als der Bestandswert sein."></div>

??? success "Lösung"
    
    | Schicht | $d$ in m | $\lambda$ in W/(m·K) | $R = d / \lambda$ in m²·K/W |
    |---|---|---|---|
    | Wärmeübergang innen | – | – | 0,130 |
    | Innenputz | 0,015 | 0,70 | 0,021 |
    | Hochlochziegel | 0,365 | 0,42 | 0,869 |
    | (alter) Außenputz | 0,020 | 0,87 | 0,023 |
    | Klebemörtel | 0,005 | 0,87 | 0,006 |
    | EPS-Hartschaum | 0,160 | 0,035 | 4,571 |
    | Armierung + Oberputz | 0,005 | 0,87 | 0,006 |
    | Wärmeübergang außen | – | – | 0,040 |
    | **Summe** | | | **5,666** |
    
    $$
    U = \dfrac{1}{5{,}666} = 0{,}1765 \approx \mathbf{0{,}18 \, \text{W/(m}^2\text{·K)}}
    $$
    
    **Beobachtung:** Der dominierende Widerstand ist jetzt die Dämmschicht ($R = 4{,}57$). Der gesamte Bestandswandaufbau trägt nur noch etwa 0,9 m²·K/W bei – die Dämmung ist allein für 80 % des Gesamtwiderstandes verantwortlich.

### Wirkung der Sanierung

!!! example "Aufgabe 3.1 – Wärmestrom nach Sanierung"
    Berechne erneut den momentanen Wärmestrom durch die Außenwand bei 20 °C innen und 0 °C außen.

??? success "Lösung 3.1"
    $$
    \dot{Q} = 0{,}18 \cdot 152 \cdot 20 = 547 \, \text{W} \approx \mathbf{0{,}55 \, \text{kW}}
    $$
    
    **Vergleich mit Bestand:**
    
    | Zustand | U-Wert | Wärmestrom (20 K) | Faktor |
    |---|---|---|---|
    | Bestand | 0,92 | 2 797 W | 1 |
    | Saniert | 0,18 | 547 W | **0,2** |
    
    Die Sanierung reduziert den Wärmeverlust durch die Wand auf **rund 1/5** des Bestandswerts. Das sind etwa 2,3 kW weniger Heizleistung für den Winter Tag – multipliziert mit der gesamten Heizperiode ergibt das **erhebliche Brennstoff- und Kosteneinsparungen**, die wir später konkret berechnen werden.

---

## Aufgabe 4: GEG-Konformität prüfen

Das [Gebäudeenergiegesetz (GEG)](../grundlagen/geg-anforderungen.md) verlangt für **sanierte Außenwände** einen U-Wert von höchstens **0,24 W/(m²·K)**.

!!! example "Aufgabe 4 – GEG-Anforderung"
    a) Erfüllt die WDVS-Sanierung der Schmitts (16 cm EPS) die GEG-Anforderung?
    
    b) Welche Mindest-Dämmstoffdicke wäre nötig, um genau die 0,24 W/(m²·K) zu erreichen? (Annahme: nur die EPS-Dicke wird variiert, alle anderen Schichten bleiben gleich.)

??? success "Lösung 4"
    **a)** Der berechnete U-Wert von 0,18 W/(m²·K) liegt **deutlich unter** dem GEG-Höchstwert von 0,24. Die Sanierung erfüllt die Anforderung mit Reserve. ✓
    
    **b)** Die Wand ohne Dämmung hat $R_{ohne EPS} = 1{,}083 + 0{,}006 + 0{,}006 = 1{,}095$ m²·K/W (Bestand-R-Wert plus Klebemörtel und Armierung).
    
    Für $U = 0{,}24$ muss gelten: $R_{ges} = 1 / 0{,}24 = 4{,}167$ m²·K/W.
    
    Der EPS-Anteil muss also $R_{EPS} = 4{,}167 - 1{,}095 = 3{,}072$ m²·K/W beitragen.
    
    Daraus folgt $d_{EPS} = R \cdot \lambda = 3{,}072 \cdot 0{,}035 = 0{,}108$ m, also etwa **11 cm EPS**.
    
    Mit den geplanten 16 cm liegen die Schmitts deutlich auf der sicheren Seite und erreichen sogar **Effizienzhaus-Niveau**, was bei der Förderung relevant wird.

---

## Zusammenfassung

Mit der Tabellenmethode könnt ihr jeden geschichteten Bauteilaufbau berechnen. Wichtige Erkenntnisse aus dieser Lerneinheit:

- **Der U-Wert ergibt sich rein rechnerisch** aus den Schichteigenschaften – kein Messen nötig.
- **Die Dämmschicht dominiert** das Ergebnis, sobald sie ausreichend dick ist. Schon 16 cm EPS sorgen für 80 % des Gesamtwiderstandes der sanierten Wand.
- **Die Sanierung reduziert den Wärmeverlust auf ein Fünftel** des Bestandswerts – ein Faktor, der sich später direkt in Heizkosten und CO₂ niederschlägt.
- **GEG-Anforderungen sind mit modernen WDVS leicht zu erfüllen** und werden häufig sogar deutlich übertroffen.

→ Im nächsten Schritt schauen wir uns das WDVS näher an: Wie ist es aufgebaut, welche Materialien gibt es, wie wird es ausgeführt?

## Verständnis-Check

<div class="quiz" data-title="Verständnis-Check U-Wert-Berechnung">

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Du verwechselst beim Eintragen versehentlich die Schichtdicke 16 cm in der EPS-Zeile als 16 m statt 0,16 m. Wie wirkt sich das auf den berechneten U-Wert aus?</p>
<ul class="quiz__opts">
<li>Der U-Wert wird 100-fach zu groß.</li>
<li>Der U-Wert wird etwa 100-fach zu klein – ein offensichtlich unrealistischer Traumwert.</li>
<li>Der Fehler wird durch die anderen Schichten ausgeglichen, das Endergebnis stimmt trotzdem.</li>
<li>Die Tabelle lässt sich gar nicht weiterrechnen, weil R unendlich wird.</li>
</ul>
<div class="quiz__explain">R = d / λ. Mit d = 16 m wäre R = 16 / 0,035 ≈ 457 m²·K/W – das ist ein <strong>100-fach zu großer</strong> Widerstand und damit ein <strong>100-fach zu kleiner</strong> U-Wert (≈ 0,002). Ein solch unrealistischer Wert ist ein typisches Warnsignal für Einheiten-Fehler. Plausibilitätsprüfung der Größenordnung ist deshalb wichtig.</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Welcher der folgenden Bauteilaufbauten ergibt den kleinsten U-Wert?</p>
<ul class="quiz__opts">
<li>36,5 cm Vollziegel (λ = 0,80) ohne weitere Schichten</li>
<li>24 cm Hochlochziegel (λ = 0,42) mit 4 cm EPS außen (λ = 0,035)</li>
<li>24 cm Kalksandstein (λ = 0,99) mit 16 cm EPS außen (λ = 0,035)</li>
<li>50 cm Vollziegel (λ = 0,80)</li>
</ul>
<div class="quiz__explain">Die <strong>16 cm EPS</strong> liefern allein R ≈ 4,57 m²·K/W – das ist mehr als jede der reinen Mauerwerk-Lösungen erreichen kann. Auch ein "schlechter" Mauerwerksstoff (Kalksandstein) wird durch eine ordentliche Dämmschicht zur sehr gut dämmenden Wand. <strong>Die Dämmschicht dominiert.</strong> Vollziegel-Wände dämmen schlecht, weil λ hoch ist – auch 50 cm Stärke helfen nicht viel.</div>
</div>

<div class="quiz__q" data-correct="1">
<p class="quiz__qtext">Eine Wand wird mit zusätzlich 8 cm EPS gedämmt. Der U-Wert sinkt von 1,0 auf 0,30. Eine zweite, identische Wand wird mit 16 cm EPS gedämmt. Welcher U-Wert ist nach der zweiten Sanierung zu erwarten?</p>
<ul class="quiz__opts">
<li>Etwa 0,18 – der Effekt jeder zusätzlichen Dämmschicht wird mit zunehmender Dicke kleiner.</li>
<li>Genau 0,15 – der U-Wert halbiert sich, weil die Dämmstärke verdoppelt wird.</li>
<li>0,00 – mit 16 cm Dämmung ist die Wand thermisch perfekt.</li>
<li>0,30 – die Dicke spielt keine Rolle mehr, sobald eine Dämmschicht vorhanden ist.</li>
</ul>
<div class="quiz__explain">U-Wert und R-Wert sind <strong>Kehrwerte voneinander</strong>. R wird linear mit der Dicke größer, aber U fällt dadurch <strong>nicht-linear</strong> – der Effekt zusätzlicher Dämmung wird mit steigender Dicke immer kleiner. Das ist das "abnehmende Grenznutzen"-Prinzip der Wärmedämmung: Die ersten Zentimeter bringen am meisten, die letzten Zentimeter wenig. Bei den Schmitts sinkt U mit 16 cm EPS auf 0,18 – etwa wie hier abgeschätzt.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Bei der GEG-Konformitätsprüfung erfüllt eine Wand U = 0,28 W/(m²·K). Welche Schlussfolgerung ist richtig?</p>
<ul class="quiz__opts">
<li>Die Wand erfüllt das GEG, weil 0,28 < 0,30.</li>
<li>Die Wand erfüllt das GEG nicht, weil der Höchstwert 0,24 W/(m²·K) beträgt.</li>
<li>Die Wand erfüllt das GEG, weil 0,28 < 1,30 (Fenster-Höchstwert).</li>
<li>Das hängt vom Bundesland ab.</li>
</ul>
<div class="quiz__explain">Der GEG-Höchstwert für sanierte Außenwände beträgt <strong>0,24 W/(m²·K)</strong>. U = 0,28 erfüllt diese Anforderung nicht – die Sanierung müsste durch dickere Dämmung oder besseres Material verbessert werden, oder die 10-%-Schwelle dürfte nicht überschritten werden (was bei einem WDVS auf der ganzen Wand nicht möglich ist).</div>
</div>

</div>

## Im Unterricht besprechen

<div class="discuss">

<div class="discuss__item discuss__item--reflect">
<span class="discuss__tag">Reflexion</span>
<p>An welchem Schritt der U-Wert-Berechnung sehen erfahrene Berater:innen am häufigsten Fehler in den eingereichten Unterlagen von Bauherren? Worauf achtet ihr persönlich beim Korrekturlesen eurer eigenen Berechnungen?</p>
<p class="discuss__hint">Häufige Stolperfallen: Schichten in Zentimeter statt Meter, Vergessen der Übergangswiderstände, Vertauschen von R und U.</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Eine Beratungskundin sagt nach der ersten Berechnung: „Wenn 16 cm Dämmung U auf 0,18 senken – warum nehmen wir nicht gleich 30 cm und kommen auf U = 0,10? Doppelt hält besser." Wie reagiert ihr fachlich?</p>
<p class="discuss__hint">Rechnet kurz: Wie verändert sich U bei 8, 16, 24, 32 cm EPS? Wo liegt der „abnehmende Grenznutzen" und welche praktischen Argumente sprechen gegen sehr dicke Pakete (Fenstertiefe, Sturz, Dachüberstand, Kosten)?</p>
</div>

</div>

→ Weiter zu [WDVS – das System](../fassade-wdvs/wdvs-system.md)
