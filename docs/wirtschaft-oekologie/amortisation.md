# Amortisation

Familie Schmitt steht vor einer Entscheidung: 20 000 € Eigenanteil für die WDVS-Sanierung. Lohnt sich das? Und ab wann? Das ist die zentrale Frage einer wirtschaftlichen Bewertung.

In diesem Kapitel betrachten wir die **Amortisation** der Sanierung — also die Zeit, bis sich die Investition durch eingesparte Energiekosten zurückgezahlt hat. Wir rechnen drei Varianten:

1. **Statische Amortisation** — die einfache Faustformel
2. **Dynamische Amortisation** — mit Energiepreis-Steigerung
3. **Risikobereinigte Bewertung** — was Sanierung über die reine Amortisation hinaus leistet

!!! abstract "Lernziele"
    Nach diesem Kapitel könnt ihr
    
    - die statische und die dynamische Amortisation berechnen,
    - den Einfluss von Energiepreis-Steigerung quantifizieren,
    - die Wirtschaftlichkeit einer Sanierung gegenüber Alternativen einordnen,
    - wirtschaftliche und nicht-wirtschaftliche Argumente sauber trennen.

## Statische Amortisation

Die einfachste Berechnung — und die, die in Beratungsgesprächen meist genannt wird:

$$
T_{stat} = \frac{\text{Eigenanteil}}{\text{jährliche Einsparung}}
$$

Sie ignoriert Zinsen, Inflation und Energiepreisentwicklung — und liefert deshalb einen **konservativen Maximalwert**. Reale Amortisation ist meist kürzer.

Für Familie Schmitt mit den bisherigen Ergebnissen:

| Position | Wert |
|---|---|
| Investitionskosten | 25 000 € |
| BAFA-Förderung (20 % mit iSFP) | – 5 000 € |
| Eigenanteil | **20 000 €** |
| Jährliche Einsparung Endenergie | 11 120 kWh/a |
| Jährliche Einsparung Heizkosten | **1 245 €/a** |

---

## Aufgabe 12: Statische Amortisation

a) Berechne die statische Amortisationszeit der WDVS-Sanierung der Schmitts.  
b) Wie verändert sich die Amortisationszeit, wenn die Schmitts **keinen iSFP** beantragen (BAFA dann nur 15 %)?

<div class="task-input"
  data-target="16.1"
  data-tolerance="0.05"
  data-unit="Jahre"
  data-label="Aufgabe 12a – Statische Amortisationszeit:"
  data-hint1="Eigenanteil ÷ jährliche Einsparung."
  data-hint2="20 000 € ÷ 1 245 €/a = ?"
  data-hint3="20 000 / 1 245 ≈ 16,1 Jahre. Das ist die Zeit, in der sich der Eigenanteil über die Heizkostenersparnis amortisiert – ohne Berücksichtigung von Preissteigerungen."></div>

??? success "Lösung Aufgabe 12"
    
    **a) Mit iSFP-Bonus (20 % Förderung):**
    
    Eigenanteil: 25 000 − 5 000 = 20 000 €
    
    $T_{stat} = \dfrac{20\,000 \, \text{€}}{1\,245 \, \text{€/a}} \approx \mathbf{16{,}1 \, \text{Jahre}}$
    
    **b) Ohne iSFP (15 % Förderung):**
    
    Förderung: 0,15 × 25 000 = 3 750 €
    
    Eigenanteil: 25 000 − 3 750 = 21 250 €
    
    $T_{stat} = \dfrac{21\,250 \, \text{€}}{1\,245 \, \text{€/a}} \approx \mathbf{17{,}1 \, \text{Jahre}}$
    
    **Interpretation:** Der iSFP-Bonus verkürzt die Amortisationszeit um etwa 1 Jahr. Das ist der direkte Mehrwert des iSFP für die WDVS-Maßnahme – plus die Aussicht auf weitere Boni für Folgeschritte.

## Dynamische Amortisation – mit Energiepreissteigerung

Die statische Rechnung unterstellt, dass der Gaspreis die nächsten 16 Jahre konstant bleibt. Das ist **historisch unrealistisch** (siehe Kapitel [Energiepreise](energiepreise.md)). Realistischer ist eine reale Energiepreissteigerung von 2–3 % pro Jahr — über inflationsbereinigt gerechnet.

Die Einsparung im Jahr $n$ wächst dann mit dem Preisanstieg:

$$
\text{Einsparung}_n = E_0 \cdot (1 + p)^{n-1}
$$

mit $E_0$ = Einsparung im ersten Jahr (1 245 €), $p$ = jährliche reale Steigerungsrate.

Die kumulierte Einsparung nach $T$ Jahren ist eine geometrische Reihe:

$$
S_T = E_0 \cdot \frac{(1+p)^T - 1}{p}
$$

**Beispielrechnung mit p = 3 % real (typisch für Erdgas der letzten 15 Jahre):**

| Jahr | Einsparung (3 %) | Kumuliert |
|---|---|---|
| 1 | 1 245 € | 1 245 € |
| 5 | 1 401 € | 6 612 € |
| 10 | 1 624 € | 14 277 € |
| **13** | 1 775 € | **19 700 €** |
| 14 | 1 828 € | 21 530 € |
| 20 | 2 184 € | 33 460 € |

Die Investition von 20 000 € amortisiert sich bei 3 % realer Energiepreissteigerung also bereits **nach etwa 13 Jahren** — drei Jahre früher als die statische Rechnung suggeriert.

!!! tip "Faustformel"
    Bei einer realen Energiepreissteigerung von 3 % verkürzt sich die statische Amortisationszeit grob um 15–20 %. Bei höheren Steigerungsraten (oder explodierenden CO₂-Preisen) entsprechend mehr.

## Was die Amortisationsrechnung *nicht* erfasst

Eine reine Amortisationsbetrachtung lässt vier wichtige Faktoren außer Acht:

### 1. Werterhalt der Immobilie

Eine sanierte Immobilie behält ihren Marktwert deutlich besser als eine unsanierte. Ab Mai 2026 verschärft sich die EU-weite Energieausweis-Pflicht — Effizienzklasse F (wie aktuell bei den Schmitts) wird im Verkauf zur erkennbaren Schwachstelle. Studien zeigen Wertabschläge von **5–15 %** für unsanierte Bestandsimmobilien gegenüber vergleichbaren sanierten Objekten.

### 2. Komfortgewinn

Eine 0,18-W/(m²K)-Außenwand ist **deutlich behaglicher** als eine 0,92-W/(m²K)-Wand: keine kalte Strahlung der Innenwand, gleichmäßigere Raumtemperatur, weniger Schimmelrisiko an Wärmebrücken. Diesen Wert beziffern Bewohner oft mit "wer's einmal hat, will's nicht mehr missen" — er entzieht sich der Wirtschaftlichkeitsrechnung.

### 3. Risiko-Absicherung gegen Preissteigerungen

Wer nicht saniert, bleibt **voll dem Energiemarkt ausgesetzt** — einschließlich der CO₂-Preisentwicklung, die bis 2035 voraussichtlich 90–120 €/t erreicht. Die Sanierung wirkt wie eine **Versicherung gegen Energiepreis-Schocks**.

### 4. CO₂-Beitrag

Die ökologische Dimension — 2,7 t CO₂/a Einsparung — lässt sich ebenfalls nicht direkt monetisieren. Wer sie monetisieren will, kann sie mit dem CO₂-Preis bewerten:

$2{,}7 \, \text{t/a} \cdot 60 \, \text{€/t} = \mathbf{162 \, \text{€/a}}$

Diese Zahl steckt allerdings bereits in der Heizkosteneinsparung (CO₂-Preis ist Teil des Gaspreises). Sie wird erst dann zusätzlich relevant, wenn ein **eigener Wert** für vermiedenes CO₂ angesetzt wird (z.&nbsp;B. weil die Schmitts es für ethisch wichtig halten).

## Wann lohnt sich Sanierung *nicht*?

Eine Sanierung lohnt sich kaum, wenn:

- die Eigentümer **kurzfristig verkaufen** wollen (5–10 Jahre Haltedauer reichen meist nicht),
- das Bauteil **bereits nahe Förder-Niveau** ist (z.&nbsp;B. Dach mit U = 0,30 — die Verbesserung auf 0,14 ist teuer und bringt wenig),
- die **Restnutzungsdauer des Gebäudes** zu kurz ist (Abriss in absehbarer Zeit),
- das Gebäude **bereits einen sehr niedrigen Energieverbrauch** hat (Klasse B oder besser).

Die Schmitts erfüllen keine dieser Bedingungen — Klasse F im Bestand, geplante Eigennutzung über 20+ Jahre, intaktes Gebäude, schwache Außenwand. Die Sanierung lohnt sich.

## Verständnis-Check

<div class="quiz" data-title="Verständnis-Check Amortisation">

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Was beschreibt die statische Amortisationszeit?</p>
<ul class="quiz__opts">
<li>Die durchschnittliche Lebensdauer einer WDVS-Sanierung.</li>
<li>Die Zeit, in der sich der Eigenanteil über die Heizkosteneinsparung zurückzahlt – ohne Berücksichtigung von Preissteigerungen oder Zinsen.</li>
<li>Die Zeit, bis das Gebäude die strengsten Förderanforderungen erfüllt.</li>
<li>Die Zeit, bis der CO₂-Ausstoß auf null reduziert ist.</li>
</ul>
<div class="quiz__explain">Die <strong>statische Amortisationszeit</strong> ist die einfachste Wirtschaftlichkeitskennzahl: Eigenanteil ÷ jährliche Einsparung. Sie ignoriert Zinsen und Energiepreis-Entwicklung und ist damit eher konservativ – die reale Amortisation ist meist kürzer.</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Wie verändert sich die Amortisationszeit, wenn der Energiepreis real um 3 % pro Jahr steigt?</p>
<ul class="quiz__opts">
<li>Sie verlängert sich um etwa 15–20 %.</li>
<li>Sie bleibt unverändert – die Einsparung steigt, aber auch die Investitionskosten.</li>
<li>Sie verkürzt sich um etwa 15–20 %.</li>
<li>Sie verkürzt sich auf weniger als die Hälfte.</li>
</ul>
<div class="quiz__explain">Steigende Energiepreise bedeuten <strong>steigende absolute Einsparung pro Jahr</strong>. Die kumulierte Einsparung wächst überproportional, die Amortisation wird kürzer. Bei 3 % realer Steigerung statt konstanter Preise sinkt die Amortisationszeit der Schmitts von etwa 16 auf etwa 13 Jahre.</div>
</div>

<div class="quiz__q" data-correct="4">
<p class="quiz__qtext">Welcher der folgenden Aspekte ist <strong>nicht</strong> Teil einer reinen Amortisationsrechnung?</p>
<ul class="quiz__opts">
<li>Investitionskosten</li>
<li>Förderung</li>
<li>Heizkosteneinsparung</li>
<li>Werterhalt der Immobilie und Wohnkomfort</li>
</ul>
<div class="quiz__explain"><strong>Werterhalt und Komfort</strong> sind reale Vorteile, lassen sich aber nicht in einer einfachen Amortisationsrechnung erfassen. Sie sind oft mindestens so relevant wie die rechnerische Amortisation – gerade bei Eigentümern, die das Haus langfristig selbst bewohnen.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Familie A spart durch Sanierung 1 000 €/a, hat 18 000 € Eigenanteil. Familie B spart 2 500 €/a, hat 30 000 € Eigenanteil. Welche der beiden hat die kürzere statische Amortisationszeit?</p>
<ul class="quiz__opts">
<li>Familie A (18 Jahre)</li>
<li>Familie B (12 Jahre)</li>
<li>Beide haben dieselbe (15 Jahre)</li>
<li>Lässt sich ohne CO₂-Preis nicht berechnen.</li>
</ul>
<div class="quiz__explain">A: 18 000 / 1 000 = 18 Jahre. B: 30 000 / 2 500 = 12 Jahre. <strong>Familie B amortisiert schneller</strong>, obwohl die absolute Investition höher ist – weil die jährliche Einsparung überproportional steigt. Höher investieren kann sich lohnen, wenn die Einsparung entsprechend mitwächst.</div>
</div>

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Wann ist eine WDVS-Sanierung wirtschaftlich am wenigsten attraktiv?</p>
<ul class="quiz__opts">
<li>Bei einem unsanierten 1970er-Bestandsbau in Klasse F mit geplanter Eigennutzung über 25 Jahre.</li>
<li>Bei einer schlecht gedämmten Außenwand mit U = 1,2 W/(m²·K).</li>
<li>Bei einem Gebäude, das die Eigentümer in 5–7 Jahren verkaufen wollen.</li>
<li>Bei steigenden Energiepreisen.</li>
</ul>
<div class="quiz__explain">Bei <strong>kurzem Verbleib (5–7 Jahre)</strong> reicht die Amortisationszeit von typisch 15–20 Jahren nicht – der Verkauf erfolgt bevor die Investition zurückgeflossen ist. Allerdings: Auch hier kann die Sanierung über den <em>Wertgewinn der Immobilie</em> lohnen – das ist aber riskanter und marktabhängig.</div>
</div>

</div>

## Im Unterricht besprechen

<div class="discuss">

<div class="discuss__item discuss__item--reflect">
<span class="discuss__tag">Reflexion</span>
<p>16 Jahre statische Amortisationszeit – wie würdest du das einer Bauherrschaft kommunizieren? Lieber als „die Sanierung rechnet sich erst in 16 Jahren" oder als „die Sanierung erwirtschaftet über 30 Jahre Lebensdauer das Doppelte ihrer Kosten"? Beides ist mathematisch richtig – welche Formulierung ist <em>fair</em>?</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Eine Hausbesitzerin sagt: „<em>16 Jahre Amortisation, das ist mir zu lang. Da könnte ich das Geld auch in einen ETF stecken und zu 7 % Rendite anlegen.</em>" Ist die Argumentation fachlich richtig? Welche Punkte sollte eine Beratung ansprechen?</p>
<p class="discuss__hint">Bedenkt: 7 % Rendite sind nominal, nicht real. Die Sanierungseinsparung ist <em>real</em> (inflationsgeschützt). Außerdem: Werterhalt der Immobilie, CO₂-Bepreisung als „Zinseszinseffekt", Risiko-Diversifikation. Aber: Es gibt auch Konstellationen, bei denen die ETF-Argumentation tatsächlich aufgeht.</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Sollte der Staat die Förderung so gestalten, dass die <strong>statische Amortisationszeit</strong> auf einen bestimmten Wert (z.&nbsp;B. 10 Jahre) gedrückt wird – um Sanierungen wirtschaftlich attraktiv zu machen? Oder ist das ein Eingriff in den Markt, der falsche Anreize setzt?</p>
<p class="discuss__hint">Pro: Sanierungen sind ein gesellschaftliches Ziel (Klimaschutz), das ohne Förderung nicht in der nötigen Geschwindigkeit erreicht wird. Contra: Subventionen verzerren Preise, fördern teure Lösungen, kommen oft Eigenheimbesitzern und damit eher gut situierten Haushalten zugute.</p>
</div>

</div>

→ Weiter zu [CO₂-Bilanz](co2-bilanz.md)
