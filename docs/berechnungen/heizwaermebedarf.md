# Heizwärmebedarf

Im Kapitel [Transmissionsverluste](transmissionsverluste.md) haben wir den jährlichen Verlust **durch die Bauteile** der Gebäudehülle berechnet: 26 400 kWh/a im Bestand. Aber das ist noch nicht alles. Auch durch Lüftung verlässt Wärme das Haus. Auf der anderen Seite kommen Wärmegewinne durch die Sonne und durch interne Quellen (Personen, Geräte) hinzu.

Der **Heizwärmebedarf** $Q_H$ ist die jährliche Energiemenge, die nach Berücksichtigung aller Verluste und Gewinne **noch von der Heizung** geliefert werden muss. Daraus ergeben sich Energieverbrauch, Kosten und CO₂-Emissionen – die Größen, die für Familie Schmitt am Ende zählen.

!!! abstract "Lernziele"
    Nach diesem Kapitel könnt ihr
    
    - die vereinfachte Energiebilanz eines Wohngebäudes aufstellen,
    - den Lüftungswärmeverlust $Q_V$ berechnen,
    - den Heizwärmebedarf $Q_H$ ermitteln und mit dem Energieausweis vergleichen,
    - vom Heizwärmebedarf zur Endenergie und damit zu Kosten und CO₂ rechnen,
    - den Unterschied zwischen Bedarf und Verbrauch erklären.

## Die Energiebilanz

Was geht ein, was geht raus? Im Sinne der Energieerhaltung muss die Heizung genau das ersetzen, was netto verloren geht:

$$
Q_H = (Q_T + Q_V) - \eta_g \cdot (Q_S + Q_I)
$$

mit

- $Q_T$ – Transmissionswärmeverlust (haben wir berechnet)
- $Q_V$ – Lüftungswärmeverlust (rechnen wir gleich)
- $Q_S$ – solare Wärmegewinne durch Fensterflächen
- $Q_I$ – interne Wärmegewinne (Personen, Geräte, Beleuchtung)
- $\eta_g$ – Ausnutzungsgrad der Gewinne (≈ 0,95 bei Wohngebäuden)

Der Ausnutzungsgrad $\eta_g$ trägt der Tatsache Rechnung, dass nicht alle Gewinne genau dann anfallen, wenn sie gebraucht werden. Sommerliche Sonneneinstrahlung an einem 25-°C-Tag hilft beim Heizen nicht – sie führt höchstens zur Überhitzung.

## Lüftungswärmeverlust

Damit Wohnräume hygienisch genutzt werden können, muss regelmäßig gelüftet werden. Mit der austretenden warmen Luft geht **Wärme verloren**, die mit kalter Außenluft "ersetzt" werden muss. Diesen Verlust quantifizieren wir analog zur Transmission:

$$
H_V = V_h \cdot n_L \cdot c_p \cdot \rho \quad \text{in W/K}
$$

mit

- $V_h$ – beheiztes Luftvolumen (m³) ≈ Wohnfläche × mittlere lichte Höhe
- $n_L$ – **Luftwechselrate** in 1/h (Standard: 0,5/h für Wohngebäude nach DIN V 4108-6)
- $c_p \cdot \rho$ – spezifische Wärmekapazität von Luft = **0,34 Wh/(m³·K)**

Die letzte Größe ist eine Naturkonstante: 1 m³ Luft enthält etwa 0,34 Wh thermische Energie pro Kelvin Temperaturdifferenz.

Der jährliche Lüftungsverlust ergibt sich genau wie bei der Transmission über die Heizgradtage:

$$
Q_V = H_V \cdot G_t \cdot 24 / 1000 \quad \text{in kWh/a}
$$

## Solare und interne Gewinne

Diese beiden Gewinne werden in der vereinfachten Bilanz **pauschal** angesetzt. Genaue Bedarfsrechnungen nach DIN V 18599 gehen detailliert vor (Fensterorientierung, g-Wert, Verschattung etc.) – das ist Stoff späterer Vertiefungskurse.

| Größe | Pauschalwert für Wohngebäude |
|---|---|
| solare Gewinne $Q_S$ | ≈ 15 kWh/(m²·a) Wohnfläche |
| interne Gewinne $Q_I$ | ≈ 22 kWh/(m²·a) Wohnfläche |

Diese Werte gelten als Richtwerte für mitteleuropäisches Klima und durchschnittlich verglaste Wohnhäuser. Sie reichen für unsere Beratungspraxis aus.

## Endenergie aus Heizwärmebedarf

$Q_H$ ist der **Wärmebedarf in den Räumen**. Damit dieser geliefert werden kann, muss die Heizung mehr Brennstoff einsetzen, als an Wärme im Raum ankommt – wegen Verlusten in Kessel, Rohrleitungen und Speicher. Diesen Sachverhalt fasst der **Anlagenwirkungsgrad** $\eta_a$ zusammen:

$$
Q_{End,Heizung} = \frac{Q_H}{\eta_a}
$$

Typische Anlagenwirkungsgrade:

| Heizungsanlage | $\eta_a$ |
|---|---|
| Alter Konstanttemperatur-Kessel | 0,75 |
| Niedertemperatur-Kessel (Schmitts!) | 0,85 |
| Gas-Brennwert | 0,95 |
| Wärmepumpe (JAZ 3,5) | 3,5 |

(Werte vereinfacht; Wärmepumpen-JAZ ist kein Wirkungsgrad im klassischen Sinn, wird hier aber genauso eingesetzt.)

Zusätzlich kommt der **Warmwasserbedarf** dazu, der nicht über die Heizwärmebilanz erfasst wird. Aus dem [Energieausweis](../lernsituation/familie-schmitt.md) entnehmen wir für die Schmitts ca. **2 500 kWh/a** Warmwasser.

$$
Q_{End,gesamt} = \frac{Q_H}{\eta_a} + Q_{WW}
$$

---

## Aufgabe 7: Lüftungswärmeverlust Bestand

Berechne den Lüftungswärmeverlust $Q_V$ des EFH der Schmitts.

Hinweise:

- Wohnfläche 145 m², mittlere lichte Höhe 2,5 m
- Luftwechselrate $n_L = 0{,}5$/h
- Heizgradtage $G_t = 3\,500$ Kd/a

??? success "Lösung Aufgabe 7"
    
    **Schritt 1 – beheiztes Volumen:**
    
    $V_h = 145 \cdot 2{,}5 = 362{,}5 \, \text{m}^3$
    
    **Schritt 2 – Lüftungswärmeverlustkoeffizient:**
    
    $H_V = V_h \cdot n_L \cdot c_p\rho = 362{,}5 \cdot 0{,}5 \cdot 0{,}34 = 61{,}6 \, \text{W/K}$
    
    **Schritt 3 – jährlicher Verlust:**
    
    $Q_V = H_V \cdot G_t \cdot 24 / 1000 = 61{,}6 \cdot 3\,500 \cdot 24 / 1000 \approx \mathbf{5\,180 \, \text{kWh/a}}$
    
    **Größenordnung:** Der Lüftungsverlust ist deutlich kleiner als der Transmissionsverlust (5 180 vs. 26 400 kWh/a) – etwa ein Fünftel. Das ist typisch für ungedämmte Bestandsgebäude, bei denen die Hülle das Hauptproblem ist. Bei modernen, sehr gut gedämmten Häusern dreht sich das Verhältnis um.

---

## Aufgabe 8: Heizwärmebedarf Bestand und Vergleich mit dem Energieausweis

a) Berechne den Heizwärmebedarf $Q_H$ des Bestandshauses. Verwende die bisherigen Ergebnisse:

- $Q_T = 26\,400$ kWh/a
- $Q_V = 5\,180$ kWh/a
- $Q_S = 15 \cdot 145$ kWh/a
- $Q_I = 22 \cdot 145$ kWh/a
- $\eta_g = 0{,}95$

b) Berechne die Endenergie (Heizung + Warmwasser, $\eta_a = 0{,}85$, $Q_{WW} = 2\,500$ kWh/a) und vergleiche mit dem Energieausweis (28 000 kWh/a, 193 kWh/(m²·a)).

<div class="task-input"
  data-target="33650"
  data-tolerance="0.05"
  data-unit="kWh/a"
  data-label="Aufgabe 8b – Endenergie Bestand (Heizung + Warmwasser):"
  data-hint1="Zwei Schritte: Erst Q_H ausrechnen, dann teile durch den Anlagenwirkungsgrad η_a = 0,85."
  data-hint2="Den Warmwasseranteil (2 500 kWh/a) addiere am Schluss zum Endenergiebedarf der Heizung. Gesamtformel: Q_H / η_a + Q_WW."
  data-hint3="Q_H ergibt sich aus: (Q_T + Q_V) − 0,95 · (Q_S + Q_I). Setze die Werte aus der Aufgabenstellung ein."></div>

??? success "Lösung Aufgabe 8"
    
    **a) Heizwärmebedarf:**
    
    Verluste: $Q_T + Q_V = 26\,400 + 5\,180 = 31\,580 \, \text{kWh/a}$
    
    Gewinne: $Q_S + Q_I = 15 \cdot 145 + 22 \cdot 145 = 2\,175 + 3\,190 = 5\,365 \, \text{kWh/a}$
    
    Bilanz: $Q_H = 31\,580 - 0{,}95 \cdot 5\,365 = 31\,580 - 5\,100 \approx \mathbf{26\,480 \, \text{kWh/a}}$
    
    Spezifisch: $26\,480 / 145 \approx \mathbf{183 \, \text{kWh/(m}^2\text{·a)}}$
    
    **b) Endenergie und Vergleich:**
    
    Endenergie Heizung: $Q_H / \eta_a = 26\,480 / 0{,}85 \approx 31\,150 \, \text{kWh/a}$
    
    Endenergie gesamt: $31\,150 + 2\,500 = \mathbf{33\,650 \, \text{kWh/a}}$
    
    | | berechnet | Energieausweis |
    |---|---|---|
    | Endenergie | 33 650 kWh/a | 28 000 kWh/a |
    | spezifisch | 232 kWh/(m²·a) | 193 kWh/(m²·a) |
    | Effizienzklasse | F | F |
    
    Die berechnete Endenergie liegt etwa **20 % über** dem real gemessenen Verbrauch. Das ist **kein Rechenfehler** – es ist der typische Unterschied zwischen **Bedarf** (gerechnet) und **Verbrauch** (gemessen).

!!! info "Bedarf vs. Verbrauch – warum die Werte abweichen"
    Die Bedarfsrechnung geht von einem **Standard-Nutzer** aus, definiert in DIN V 18599: **20 °C in allen Räumen**, dauernd, in der gesamten Heizperiode. Reale Bewohner heizen **sparsamer**:
    
    - Schlafzimmer oft 17–18 °C statt 20 °C
    - Tagsüber nur teilweise beheizte Räume
    - Lüftung disziplinierter als der Norm-Wert annimmt
    - Niedrige Anwesenheitszeiten an Werktagen
    
    Die Norm-Abweichung von ±20 % zwischen Bedarf und Verbrauch ist **typisch und akzeptiert**. Beide Kennwerte haben ihre Berechtigung:
    
    - **Bedarf** beschreibt das Gebäude und ist für Sanierungsplanung relevant – er ist nutzerunabhängig.
    - **Verbrauch** beschreibt das tatsächliche Verhalten und ist für Heizkostenrechnungen relevant.
    
    Beim Vergleich von "vorher–nachher" einer Sanierung ist deshalb wichtig: **Wenn die Schmitts vorher und nachher gleich heizen**, sinkt ihr Verbrauch im selben Verhältnis wie der Bedarf. Wir können also mit den **prozentualen Einsparungen** arbeiten und sie auf den realen Verbrauch übertragen.

---

## Aufgabe 9: Wirkung der WDVS-Sanierung

a) Berechne $Q_H$ nach der WDVS-Sanierung. Aus [Aufgabe 6](transmissionsverluste.md) wissen wir: $Q_{T,saniert} = 16\,940$ kWh/a. Lüftung und Gewinne ändern sich nicht.  
b) Berechne die Endenergie nach Sanierung.  
c) Wie groß ist die jährliche Einsparung in kWh, in € (Gaspreis 11,2 ct/kWh) und in kg CO₂ (Emissionsfaktor Erdgas 240 g/kWh)?

<div class="task-input"
  data-target="11120"
  data-tolerance="0.05"
  data-unit="kWh/a"
  data-label="Aufgabe 9c – Endenergieeinsparung durch die Sanierung:"
  data-hint1="Berechne erst die Endenergie nach Sanierung (analog Aufgabe 8b mit Q_T,saniert = 16 940 kWh/a) und ziehe sie von 33 650 kWh/a (Bestand) ab."
  data-hint2="Q_H,saniert = (16 940 + 5 180) − 0,95 · 5 365 ≈ 17 020 kWh/a → Endenergie = 17 020 / 0,85 + 2 500 ≈ 22 530 kWh/a"
  data-hint3="Einsparung = Endenergie Bestand − Endenergie saniert = 33 650 − 22 530 = ?"></div>

??? success "Lösung Aufgabe 9"
    
    **a) Heizwärmebedarf saniert:**
    
    $Q_H = (16\,940 + 5\,180) - 0{,}95 \cdot 5\,365 = 22\,120 - 5\,100 \approx \mathbf{17\,020 \, \text{kWh/a}}$
    
    Spezifisch: $17\,020 / 145 \approx \mathbf{117 \, \text{kWh/(m}^2\text{·a)}}$
    
    Das entspricht etwa **Effizienzklasse D** – ein deutlicher Sprung gegenüber Klasse F (Bestand).
    
    **b) Endenergie saniert:**
    
    Endenergie Heizung: $17\,020 / 0{,}85 \approx 20\,030 \, \text{kWh/a}$
    
    Endenergie gesamt: $20\,030 + 2\,500 = \mathbf{22\,530 \, \text{kWh/a}}$
    
    **c) Einsparung:**
    
    Endenergie: $33\,650 - 22\,530 = \mathbf{11\,120 \, \text{kWh/a}}$
    
    Kosten: $11\,120 \cdot 0{,}112 \, \text{€/kWh} \approx \mathbf{1\,245 \, \text{€/a}}$
    
    CO₂: $11\,120 \cdot 240 \, \text{g/kWh} = 2\,668\,800 \, \text{g/a} \approx \mathbf{2{,}7 \, \text{t CO}_2\text{/a}}$
    
    | Kennwert | Bestand | Saniert | Einsparung |
    |---|---|---|---|
    | Endenergie | 33 650 kWh/a | 22 530 kWh/a | **11 120 kWh/a (33 %)** |
    | spezifisch | 232 kWh/(m²·a) | 156 kWh/(m²·a) | – |
    | Effizienzklasse | F | D | 2 Klassen |
    | Heizkosten | 3 770 €/a | 2 525 €/a | **1 245 €/a** |
    | CO₂ | 8,1 t/a | 5,4 t/a | **2,7 t/a** |

---

## Bezug zur Wirtschaftlichkeit

Die jährliche Einsparung von **1 245 €** und **2,7 t CO₂** ist die Grundlage für alle weiteren Bewertungen:

- **Wirtschaftlichkeit:** Wie schnell amortisiert sich eine Investition von ca. 21 000 € (vor Förderung) bei dieser Einsparung? → [Amortisation](../wirtschaft-oekologie/amortisation.md)
- **Förderung:** Welche staatliche Unterstützung verkürzt die Amortisationszeit? → [Förderung](../wirtschaft-oekologie/foerderung.md)
- **CO₂-Bilanz:** Wie schneidet die Sanierung im Lebenszyklus ab, einschließlich der grauen Energie der Dämmstoffe? → [CO₂-Bilanz](../wirtschaft-oekologie/co2-bilanz.md)

Das ist genau der Bogen, den eine Beratung schlägt: **Vom U-Wert über den Heizwärmebedarf bis zur konkreten Empfehlung an die Familie.**

## Verständnis-Check

<div class="quiz" data-title="Verständnis-Check Heizwärmebedarf">

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Welcher Term steht NICHT in der vereinfachten Energiebilanz für den Heizwärmebedarf?</p>
<ul class="quiz__opts">
<li>Lüftungswärmeverlust Q<sub>V</sub></li>
<li>Solare Wärmegewinne Q<sub>S</sub></li>
<li>Wirkungsgrad der Heizungsanlage η<sub>a</sub></li>
<li>Innere Wärmegewinne Q<sub>I</sub></li>
</ul>
<div class="quiz__explain">Q<sub>H</sub> = (Q<sub>T</sub> + Q<sub>V</sub>) − η<sub>g</sub> · (Q<sub>S</sub> + Q<sub>I</sub>) beschreibt den <strong>Wärmebedarf in den Räumen</strong>. Der Anlagenwirkungsgrad η<sub>a</sub> kommt erst danach ins Spiel: Endenergie = Q<sub>H</sub> / η<sub>a</sub>. Der Wirkungsgrad spielt also für den Bedarf <em>im Raum</em> noch keine Rolle – er beschreibt erst, wie viel Brennstoff dafür eingesetzt werden muss.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Bei den Schmitts liegt der berechnete Endenergiebedarf bei rund 33 650 kWh/a, der reale Verbrauch laut Energieausweis bei 28 000 kWh/a. Wie ist diese Abweichung von etwa 20 % zu interpretieren?</p>
<ul class="quiz__opts">
<li>Es liegt ein Rechenfehler vor – Bedarf und Verbrauch müssen identisch sein.</li>
<li>Die Differenz ist typisch und nutzungsbedingt: die Schmitts heizen sparsamer als der DIN-Norm-Nutzer mit 20 °C in allen Räumen.</li>
<li>Der Energieausweis ist falsch erstellt worden – er müsste 33 650 kWh/a anzeigen.</li>
<li>Der berechnete Wert ist zu hoch, weil die Heizgradtage falsch gewählt wurden.</li>
</ul>
<div class="quiz__explain">Die <strong>Bedarfsrechnung</strong> nimmt einen Norm-Nutzer an: 20 °C in allen Räumen, durchgehend, in der gesamten Heizperiode. Reale Bewohner heizen Schlafzimmer kühler, sind tagsüber nicht zuhause und lüften disziplinierter. Eine Abweichung von ±20 % ist <strong>typisch und akzeptiert</strong>. Beide Kennwerte haben ihre Berechtigung – Bedarf für die Sanierungsplanung (nutzerunabhängig), Verbrauch für reale Heizkostenrechnungen.</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Welcher typische Anlagenwirkungsgrad η<sub>a</sub> gilt für einen Gas-Brennwertkessel?</p>
<ul class="quiz__opts">
<li>0,75</li>
<li>0,85</li>
<li>0,95</li>
<li>3,5</li>
</ul>
<div class="quiz__explain">Ein <strong>Gas-Brennwertkessel</strong> nutzt zusätzlich die Kondensationswärme der Abgase und erreicht etwa 0,95. Konstanttemperaturkessel (alte Anlagen) liegen bei 0,75, Niedertemperaturkessel (wie bei den Schmitts) bei 0,85. Der Wert 3,5 wäre eine <strong>Wärmepumpe</strong> – streng genommen kein Wirkungsgrad, sondern die Jahresarbeitszahl (JAZ): pro kWh Strom werden 3,5 kWh Wärme bereitgestellt.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Was bedeutet eine Wärmepumpe mit Jahresarbeitszahl JAZ = 3,5?</p>
<ul class="quiz__opts">
<li>Sie verbraucht 3,5-mal so viel Strom wie ein Gas-Brennwertkessel mit gleicher Heizleistung.</li>
<li>Pro kWh Stromaufnahme liefert sie im Jahresmittel 3,5 kWh Heizwärme.</li>
<li>Sie hat einen Wirkungsgrad von 35 % – also schlechter als ein Gas-Brennwertkessel.</li>
<li>Sie heizt das Wasser auf maximal 35 °C auf.</li>
</ul>
<div class="quiz__explain">Die <strong>JAZ</strong> ist das Verhältnis von gelieferter Wärme zur eingesetzten elektrischen Energie. JAZ = 3,5 heißt: 1 kWh Strom liefert 3,5 kWh Heizwärme. Das ist physikalisch möglich, weil die Wärmepumpe Energie aus der Umwelt (Luft, Erdreich, Grundwasser) "umpumpt" und nur den Kompressor antreibt. Eine niedrige Vorlauftemperatur (gut gedämmtes Haus, Flächenheizung) erhöht die JAZ deutlich.</div>
</div>

<div class="quiz__q" data-correct="1">
<p class="quiz__qtext">Welcher Anteil hat der Lüftungswärmeverlust typischerweise an den Gesamtverlusten in einem ungedämmten Bestandsgebäude?</p>
<ul class="quiz__opts">
<li>Etwa 15–20 % – die Hülle dominiert klar.</li>
<li>Etwa 50 % – Lüftung und Transmission halten sich die Waage.</li>
<li>Etwa 80 % – Lüftung ist immer der Hauptverlustpfad.</li>
<li>Praktisch 0 % – nur Neubauten haben relevante Lüftungsverluste.</li>
</ul>
<div class="quiz__explain">Bei den Schmitts haben wir berechnet: Q<sub>V</sub> ≈ 5 180 kWh/a vs. Q<sub>T</sub> ≈ 26 400 kWh/a – das sind etwa <strong>16 %</strong>. In ungedämmten Bestandsgebäuden dominiert klar die Hülle. Bei modernen, sehr gut gedämmten Häusern dreht sich das Verhältnis aber um: Da kann die Lüftung den Hauptanteil der Verluste ausmachen – deshalb sind dort Lüftungsanlagen mit Wärmerückgewinnung sinnvoll.</div>
</div>

</div>

## Im Unterricht besprechen

<div class="discuss">

<div class="discuss__item discuss__item--reflect">
<span class="discuss__tag">Reflexion</span>
<p>Die Differenz zwischen <strong>berechnetem Bedarf</strong> (33 650 kWh/a) und <strong>realem Verbrauch</strong> (28 000 kWh/a) hat dich vielleicht überrascht. Welche Konsequenz hat das aus deiner Sicht für die Sanierungsberatung in der Praxis: <em>Mit welchem Wert</em> rechnet man Einsparung und Amortisation an die Familie?</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Eine Hausbesitzerin sagt: „<em>Ich heize sowieso wenig – meine Schlafzimmer bleiben kalt, tagsüber bin ich auf der Arbeit. Bei mir lohnt sich Dämmung doch gar nicht.</em>" Wie reagiert ihr fachlich? Hat sie aus rein wirtschaftlicher Sicht recht – und welche <em>nicht-monetären</em> Argumente sprechen trotzdem für eine Sanierung?</p>
<p class="discuss__hint">Bedenkt: Schimmelrisiko an kalten Innenwänden, Komfortgewinn, Werterhalt der Immobilie, CO₂-Bilanz, GEG-Anforderungen bei Eigentümerwechsel, Resilienz gegenüber Energiepreis-Schocks.</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Familie Schmitt heizt mit einem Gas-Niedertemperaturkessel (η<sub>a</sub> = 0,85). Der Heizungsbauer schlägt einen Brennwertkessel vor (η<sub>a</sub> = 0,95), die Energieberaterin eine Wärmepumpe (JAZ ≈ 3,5 nach WDVS-Sanierung). Welche der drei Anlagen liefert die größte CO₂-Reduktion – und welche die geringsten Betriebskosten?</p>
<p class="discuss__hint">Rechnet überschlägig durch: Endenergie nach Sanierung (22 530 kWh/a) bei Gas-Brennwert (η = 0,95) vs. Wärmepumpe (JAZ = 3,5, Stromverbrauch?). Strompreis ca. 30 ct/kWh, Gaspreis ca. 11 ct/kWh, CO₂-Faktoren: Gas 240 g/kWh, Strom-Mix 2026 ca. 350 g/kWh und sinkend.</p>
</div>

</div>
