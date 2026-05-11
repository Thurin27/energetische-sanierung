# Transmissionswärmeverluste

Im Kapitel [U-Wert berechnen](u-wert-bauteil.md) haben wir den momentanen Wärmestrom durch eine Wand bestimmt: $\dot{Q} = U \cdot A \cdot \Delta\vartheta$. Das ergab für die Außenwand der Schmitts 2,8 kW – aber ein Haus hat nicht nur Wände. Es hat auch Dach, Fenster, Tür und Kellerdecke. **Alle diese Bauteile verlieren gleichzeitig Wärme.**

In diesem Kapitel weiten wir die Betrachtung auf das gesamte Gebäude aus und kommen so vom momentanen Wärmestrom zum **Jahres-Wärmeverlust**. Das ist die Brücke zur Energiekostenrechnung.

!!! abstract "Lernziele"
    Nach diesem Kapitel könnt ihr
    
    - den Transmissionswärmeverlustkoeffizienten $H_T$ eines Gebäudes berechnen,
    - Temperaturkorrekturfaktoren $F_x$ situationsgerecht anwenden,
    - den Wärmebrückenzuschlag $\Delta U_{WB}$ berücksichtigen,
    - mit Heizgradtagen den Jahres-Transmissionsverlust ermitteln.

## Vom einzelnen Bauteil zum Gesamtgebäude

Für jedes einzelne Bauteil gilt weiterhin $\dot{Q}_i = U_i \cdot A_i \cdot \Delta\vartheta$. Wenn wir alle Bauteile addieren und die Temperaturdifferenz ausklammern, wird daraus

$$
\dot{Q}_{ges} = \Big( \sum_i U_i \cdot A_i \Big) \cdot \Delta\vartheta
$$

Die Klammergröße ist eine **Eigenschaft des Gebäudes**, unabhängig von der aktuellen Außentemperatur. Sie bekommt einen eigenen Namen: **Transmissionswärmeverlustkoeffizient** $H_T$.

$$
H_T = \sum_i U_i \cdot A_i \cdot F_{x,i} \;+\; \Delta U_{WB} \cdot A_{Hülle} \quad \text{in W/K}
$$

Damit lässt sich der momentane Verlust einfach schreiben als $\dot{Q} = H_T \cdot \Delta\vartheta$. Was die zwei zusätzlichen Größen bedeuten, schauen wir uns jetzt an.

## Temperaturkorrekturfaktor F_x

Nicht alle Bauteile grenzen an Außenluft. Manche Bauteile grenzen an **angrenzende, unbeheizte Bereiche** – beispielsweise an einen unbeheizten Keller oder an einen unbeheizten Dachboden. In diesen Bereichen herrschen mildere Temperaturen als draußen, der Wärmeverlust ist also geringer.

Statt mit der vollen Temperaturdifferenz wird mit einem **reduzierten Anteil** gerechnet, ausgedrückt im **Temperaturkorrekturfaktor $F_x$**:

| Angrenzender Bereich | $F_x$ |
|---|---|
| Außenluft | 1,0 |
| unbeheizter Keller | 0,5 |
| unbeheizter Dachraum | 0,8 |
| unbeheizter Wintergarten | 0,7 |
| Erdreich (Bodenplatte) | 0,3–0,5 |

(Vereinfachte Werte nach DIN V 4108-6)

!!! example "Beispiel: Kellerdecke der Schmitts"
    Die Kellerdecke (95 m², U = 1,1) grenzt an den unbeheizten Keller. Der Keller hat im Winter ca. 10 °C, der Wohnraum 20 °C, draußen 0 °C. Die Temperaturdifferenz **Wohnraum → Keller** beträgt nur 10 K, nicht 20 K. Der Faktor $F_x = 0{,}5$ trägt diesem Umstand Rechnung: 
    
    $\dot{Q}_{Keller} = U \cdot A \cdot F_x \cdot \Delta\vartheta_{außen} = 1{,}1 \cdot 95 \cdot 0{,}5 \cdot 20 = 1\, 045$ W

## Wärmebrückenzuschlag ΔU_WB

In jedem realen Bauwerk gibt es **Wärmebrücken** – Stellen, an denen der Wärmestrom lokal erhöht ist (zu den Details siehe [Wärmebrücken](../grundlagen/waermebruecken.md)). Sie pauschal mitzubilanzieren ist Standard und erfolgt über einen **flächenbezogenen Zuschlag** auf die Hüllfläche:

| Verfahren | $\Delta U_{WB}$ |
|---|---|
| ohne Nachweis (pauschal) | 0,10 W/(m²·K) |
| mit Standarddetails (Beiblatt 2 zu DIN 4108) | 0,05 W/(m²·K) |
| mit detailliertem Wärmebrückennachweis | 0,03 W/(m²·K) |

Für die Schmitts setzen wir den **pauschalen Wert 0,10 W/(m²·K)** an – Wärmebrücken-Detailbetrachtung lohnt sich erst bei deutlich höheren Anforderungen (Effizienzhaus 55 oder besser).

## Vom momentanen Verlust zur Jahresenergie

$H_T \cdot \Delta\vartheta$ liefert den momentanen Wärmestrom in Watt. Um daraus den **Jahresverlust in kWh/a** zu erhalten, müssen wir über die gesamte Heizperiode integrieren. Vereinfacht geht das mit der **Heizgradtagzahl** $G_t$:

$$
G_t = \sum_{Heiztage} (T_{innen} - T_{außen}) \;\text{(in Kd/a)}
$$

In Worten: Für jeden Tag der Heizperiode wird die Temperaturdifferenz aufaddiert. Man rechnet üblicherweise mit der **Standard-Heizgrenze 15 °C**: Sobald die Tagesmitteltemperatur unter 15 °C fällt, gilt der Tag als Heiztag. Innentemperatur wird mit 20 °C angesetzt.

Für **Gelsenkirchen / Ruhrgebiet** beträgt $G_t \approx 3\,500$ Kd/a (mehrjähriges Mittel).

Die Formel für den jährlichen Transmissionsverlust lautet damit:

$$
Q_T = H_T \cdot G_t \cdot 24 \, \text{h} \quad \text{in Wh/a}
$$

Der Faktor 24 macht aus den "Kelvin-Tagen" "Kelvin-Stunden", denn $H_T$ ist in W/K = J/(s·K) angegeben.

!!! tip "Praktische Form"
    $Q_T = H_T \cdot G_t \cdot 24 / 1000$ liefert direkt **kWh/a**. So rechnen wir in den Aufgaben.

---

## Aufgabe 5: Transmissionsverlust Bestand

Berechne den Transmissionswärmeverlustkoeffizienten $H_T$ des EFH der Schmitts im Bestand. Die Bauteildaten habt ihr in [Aufgabe 1](../lernsituation/familie-schmitt.md) ermittelt:

| Bauteil | $A$ in m² | $U$ in W/(m²·K) | $F_x$ |
|---|---|---|---|
| Außenwand | 152,0 | 0,92 | 1,0 |
| Dach | 121,0 | 0,32 | 1,0 |
| Fenster | 13,4 | 2,80 | 1,0 |
| Haustür | 2,1 | 3,50 | 1,0 |
| Kellerdecke | 95,0 | 1,10 | 0,5 |

Wärmebrückenzuschlag: pauschal 0,10 W/(m²·K) auf die wärmeübertragende Hüllfläche.

<div class="task-input"
  data-target="314"
  data-tolerance="0.05"
  data-unit="W/K"
  data-label="Aufgabe 5 – H_T des Bestandsgebäudes:"
  data-hint1="Berechne für jedes Bauteil den Beitrag U · A · F_x separat in einer Tabelle und summiere am Ende."
  data-hint2="Die Kellerdecke hat F_x = 0,5, weil sie an einen unbeheizten Keller grenzt – diesen Faktor nicht vergessen."
  data-hint3="Vergiss den Wärmebrückenzuschlag nicht: 0,10 W/(m²·K) × Hüllfläche (Σ aller Bauteilflächen ≈ 384 m²)."></div>

??? success "Lösung Aufgabe 5"
    
    **Schritt 1 – Bauteil-Beiträge tabellarisch:**
    
    | Bauteil | $A$ | $U$ | $F_x$ | $U \cdot A \cdot F_x$ in W/K |
    |---|---|---|---|---|
    | Außenwand | 152,0 | 0,92 | 1,0 | 139,8 |
    | Dach | 121,0 | 0,32 | 1,0 | 38,7 |
    | Fenster | 13,4 | 2,80 | 1,0 | 37,5 |
    | Haustür | 2,1 | 3,50 | 1,0 | 7,4 |
    | Kellerdecke | 95,0 | 1,10 | 0,5 | 52,3 |
    | **Summe** | | | | **275,7** |
    
    **Schritt 2 – Hüllfläche und Wärmebrückenzuschlag:**
    
    $A_{Hülle} = 152{,}0 + 121{,}0 + 13{,}4 + 2{,}1 + 95{,}0 = 383{,}5 \, \text{m}^2$
    
    $\Delta U_{WB} \cdot A_{Hülle} = 0{,}10 \cdot 383{,}5 = 38{,}4 \, \text{W/K}$
    
    **Schritt 3 – Gesamt-$H_T$:**
    
    $$
    H_{T,Bestand} = 275{,}7 + 38{,}4 = 314{,}1 \, \text{W/K} \approx \mathbf{314 \, \text{W/K}}
    $$
    
    **Interpretation:** Pro Kelvin Temperaturdifferenz fließen aus dem Haus dauerhaft 314 W an die Umgebung. An einem typischen Wintertag mit $\Delta\vartheta = 20$ K sind das $314 \cdot 20 = 6\,280$ W ≈ **6,3 kW**. Das ist die **Heizleistung**, die das Haus durchgehend benötigt – mehr als das Doppelte der Außenwand allein, weil jetzt auch Dach, Fenster, Tür und Kellerdecke mitzählen.

### Anschluss-Aufgabe 5.1: Jahres-Transmissionsverlust

Bestimme den jährlichen Transmissionswärmeverlust $Q_T$ des Bestandshauses. Verwende für Gelsenkirchen $G_t = 3\,500$ Kd/a.

??? success "Lösung Aufgabe 5.1"
    $$
    Q_T = H_T \cdot G_t \cdot 24 / 1000 = 314 \cdot 3\,500 \cdot 24 / 1000 \approx \mathbf{26\,400 \, \text{kWh/a}}
    $$
    
    **Einordnung:** Dieser Wert ist der reine Transmissionsverlust (durch die Bauteile). Hinzu kommen noch Lüftungsverluste – die rechnen wir im nächsten Kapitel [Heizwärmebedarf](heizwaermebedarf.md).

---

## Aufgabe 6: Wirkung der WDVS-Sanierung

Berechne $H_T$ und $Q_T$ nach der WDVS-Sanierung der Außenwand. Alle anderen Bauteile bleiben unverändert. Vergleiche mit dem Bestand.

a) Berechne $H_{T,saniert}$.  
b) Berechne $Q_{T,saniert}$.  
c) Wie groß ist die jährliche Einsparung bei den Transmissionsverlusten?

??? success "Lösung Aufgabe 6"
    
    **a) $H_{T,saniert}$:**
    
    Nur der Beitrag der Außenwand ändert sich (von 139,8 auf 27,4 W/K):
    
    | Bauteil | $A$ | $U$ | $F_x$ | $U \cdot A \cdot F_x$ |
    |---|---|---|---|---|
    | Außenwand (saniert) | 152,0 | 0,18 | 1,0 | **27,4** |
    | Dach | 121,0 | 0,32 | 1,0 | 38,7 |
    | Fenster | 13,4 | 2,80 | 1,0 | 37,5 |
    | Haustür | 2,1 | 3,50 | 1,0 | 7,4 |
    | Kellerdecke | 95,0 | 1,10 | 0,5 | 52,3 |
    | Σ Bauteile | | | | 163,3 |
    | + Wärmebrücken | | | | 38,4 |
    | **$H_{T,saniert}$** | | | | **201,7 W/K** |
    
    **b) $Q_{T,saniert}$:**
    
    $Q_T = 201{,}7 \cdot 3\,500 \cdot 24 / 1000 \approx \mathbf{16\,940 \, \text{kWh/a}}$
    
    **c) Einsparung:**
    
    | | Bestand | Saniert | Einsparung |
    |---|---|---|---|
    | $H_T$ in W/K | 314 | 202 | −112 (≈ 36 %) |
    | $Q_T$ in kWh/a | 26 400 | 16 940 | **9 460 kWh/a (≈ 36 %)** |
    
    **Interpretation:** Die Außenwand-Sanierung reduziert die jährlichen Transmissionsverluste um über **9 000 kWh** – das ist mehr als ein Drittel des gesamten Transmissionsverlusts. Bei einem Gaspreis von 11,2 ct/kWh (und einem Anlagenwirkungsgrad von 85 %) entspricht das grob **1 250 € pro Jahr** an Einsparung. Die genaue Wirtschaftlichkeit rechnen wir später in den Kapiteln [Energiepreise](../wirtschaft-oekologie/energiepreise.md) und [Amortisation](../wirtschaft-oekologie/amortisation.md).

---

## Was wir gleich tun

Der Transmissionsverlust ist nur ein Teil des Gesamtverlusts eines Gebäudes – Lüftung verursacht zusätzliche Verluste. Und auf der Gewinnseite stehen solare Strahlung und innere Wärmequellen. Die vollständige Bilanz ist der **Heizwärmebedarf**.

## Verständnis-Check

<div class="quiz" data-title="Verständnis-Check Transmissionsverluste">

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Was beschreibt der Transmissionswärmeverlustkoeffizient H<sub>T</sub>?</p>
<ul class="quiz__opts">
<li>Den jährlichen Wärmeverlust eines Gebäudes in kWh.</li>
<li>Den Wärmestrom durch alle Bauteile zusammen pro Kelvin Temperaturdifferenz.</li>
<li>Die mittlere Heiztemperatur des Gebäudes.</li>
<li>Den Wirkungsgrad der Heizungsanlage.</li>
</ul>
<div class="quiz__explain">H<sub>T</sub> ist eine <strong>Gebäude-Eigenschaft mit Einheit W/K</strong> – sie sagt, wie viel Wärme pro Sekunde und pro Kelvin durch alle Bauteile zusammen verloren geht. Erst die Multiplikation mit der Temperaturdifferenz ergibt den momentanen Wärmestrom (in W), erst die zusätzliche Multiplikation mit den Heizgradtagen den Jahresverlust (in kWh/a).</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Welcher Temperaturkorrekturfaktor F<sub>x</sub> gilt typisch für eine Kellerdecke an unbeheiztem Keller?</p>
<ul class="quiz__opts">
<li>F<sub>x</sub> = 1,0 (wie Außenluft)</li>
<li>F<sub>x</sub> = 0,8</li>
<li>F<sub>x</sub> = 0,5</li>
<li>F<sub>x</sub> = 0,1</li>
</ul>
<div class="quiz__explain">Der unbeheizte Keller ist im Winter wesentlich wärmer als die Außenluft (typisch 8–12 °C). Deshalb ist die effektive Temperaturdifferenz nur etwa halb so groß wie zur Außenluft – das spiegelt sich in F<sub>x</sub> = 0,5 wider. Außenwand und Dach grenzen direkt an Außenluft (F<sub>x</sub> = 1,0), unbeheizte Dachräume liegen bei 0,8.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Wie groß ist der pauschale Wärmebrückenzuschlag ohne detaillierten Nachweis?</p>
<ul class="quiz__opts">
<li>0,02 W/(m²·K)</li>
<li>0,10 W/(m²·K)</li>
<li>0,50 W/(m²·K)</li>
<li>1,00 W/(m²·K)</li>
</ul>
<div class="quiz__explain">Ohne Nachweis wird pauschal <strong>0,10 W/(m²·K)</strong> auf die wärmeübertragende Hüllfläche angesetzt. Mit Standarddetails nach DIN 4108 Beiblatt 2 sinkt der Wert auf 0,05 – mit detailliertem Wärmebrückennachweis sogar auf 0,03. Diese Reduktionen lohnen sich aber erst bei hochwertigen Sanierungen wie Effizienzhaus 55.</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Was ist die Heizgradtagzahl G<sub>t</sub> näherungsweise für Gelsenkirchen / NRW?</p>
<ul class="quiz__opts">
<li>ca. 500 Kd/a</li>
<li>ca. 1 500 Kd/a</li>
<li>ca. 3 500 Kd/a</li>
<li>ca. 10 000 Kd/a</li>
</ul>
<div class="quiz__explain"><strong>3 500 Kd/a</strong> ist ein typischer Wert für das gemäßigte Klima Mitteleuropas (Innentemperatur 20 °C, Heizgrenze 15 °C). In wärmeren Regionen wie der Oberrheinebene liegt der Wert bei etwa 3 000, in den Alpen bei 4 500 und mehr.</div>
</div>

<div class="quiz__q" data-correct="1">
<p class="quiz__qtext">Ein Gebäude hat H<sub>T</sub> = 200 W/K. Wie groß ist die benötigte Heizleistung an einem Wintertag mit Innen 20 °C und Außen 0 °C (Transmission, ohne Lüftung)?</p>
<ul class="quiz__opts">
<li>4 000 W = 4 kW</li>
<li>200 W</li>
<li>1 000 W</li>
<li>20 000 W = 20 kW</li>
</ul>
<div class="quiz__explain">Q̇ = H<sub>T</sub> · ΔT = 200 · 20 = <strong>4 000 W</strong>. Diese Heizleistung muss die Heizung dauerhaft liefern, um die Wärmeverluste durch die Bauteile zu kompensieren. Diese Größenordnung ist auch wichtig für die Auslegung einer Wärmepumpe – die Heizlast ist eine ihrer zentralen Auslegungsgrößen.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Bei den Schmitts beträgt H<sub>T</sub> im Bestand 314 W/K, nach WDVS 202 W/K. Welche der folgenden Aussagen ist richtig?</p>
<ul class="quiz__opts">
<li>Die Sanierung halbiert H<sub>T</sub> – das ist die maximal erreichbare Reduktion.</li>
<li>H<sub>T</sub> sinkt um 36 % – die anderen Bauteile (Dach, Fenster, Keller) begrenzen die weitere Verbesserung durch reine Außenwanddämmung.</li>
<li>H<sub>T</sub> sinkt um 80 % – das spiegelt den Anteil der Außenwand am Wärmeverlust wider.</li>
<li>H<sub>T</sub> bleibt nahezu gleich, weil die Dämmung nur einen kleinen Effekt hat.</li>
</ul>
<div class="quiz__explain">Die <strong>WDVS-Sanierung allein reduziert H<sub>T</sub> um 36 %</strong>. Für noch tiefer greifende Verbesserungen müssten auch die anderen schwachen Bauteile saniert werden – besonders die Fenster (U = 2,8) und die Kellerdecke (U = 1,1). Das ist genau der Übergang von Phase 1 zu Phase 2 des Kurses.</div>
</div>

</div>

## Im Unterricht besprechen

<div class="discuss">

<div class="discuss__item discuss__item--reflect">
<span class="discuss__tag">Reflexion</span>
<p>Wir haben H<sub>T</sub> berechnet und gesehen, dass die WDVS-Sanierung allein etwa 36 % Reduktion bringt. Hattest du vor der Rechnung eher mit mehr oder weniger gerechnet? Was hat dich überrascht?</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Bei den Schmitts ist nach der Außenwand-Sanierung die Kellerdecke (U = 1,1) das Bauteil mit dem höchsten verbleibenden Beitrag zu den Transmissionsverlusten. Trotzdem schlagen viele Beraterinnen und Berater <em>nicht</em> die Kellerdeckendämmung als nächste Maßnahme vor. Welche Gründe könnten dafür sprechen, lieber die Fenster oder das Dach vorzuziehen?</p>
<p class="discuss__hint">Denkt an: Komfortgewinn (warme Füße im Winter sind weniger spürbar als kalte Innenwände), GEG-Anforderungen, Kosten pro eingespartes kWh, Bauablauf, Mitnahme-Effekte (z.&nbsp;B. Fenster sowieso defekt).</p>
</div>

</div>

→ Weiter zu [Heizwärmebedarf](heizwaermebedarf.md)
