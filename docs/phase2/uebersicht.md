# Phase 2 – Übersicht

In Phase 1 habt ihr Familie Schmitts Außenwand vollständig durchgerechnet: Bauphysik, Wirtschaftlichkeit, Ökologie. Das Ergebnis steht – **die WDVS-Sanierung lohnt sich**, und sie ist die richtige Voraussetzung für die geplante Wärmepumpe.

In Phase 2 stellt sich für eure Beratung jetzt eine neue Frage: **Welche Maßnahme kommt als Nächstes?** Das Außenwand-Paket allein bringt die Schmitts nicht auf das energetische Niveau, das ein effizienter Wärmepumpenbetrieb braucht. Aber die anderen Bauteile sind sehr unterschiedlich – beim Dach habt ihr drei konkurrierende Verfahren zur Auswahl, beim Fenster geht es um Verglasungstypen und Rahmen, beim Keller um die Frage, ob die Dämmung von oben oder von außen sinnvoll ist. Jede dieser Entscheidungen folgt einer eigenen Logik.

!!! abstract "Lernziele"
    Nach Phase 2 könnt ihr

    - die verbleibenden Wärmeverluste eines Gebäudes nach einer Teilsanierung quantitativ einordnen,
    - die Sanierungsmaßnahmen für Dach, Fenster, Keller und Anlagentechnik in ihren Verfahrensvarianten gegeneinander abwägen,
    - eine **Sanierungsreihenfolge** fachlich begründet aufstellen,
    - eine ganzheitliche Sanierungsempfehlung mit Zeit- und Investitionsplan formulieren.

## Wo stehen die Schmitts nach Phase 1?

Nach der WDVS-Sanierung ist die Außenwand kein Wärmeproblem mehr. $U$ ist von 0,92 auf 0,18 W/(m²·K) gefallen, und der Beitrag der Außenwand zum gesamten Transmissionsverlust ist von 140 W/K auf 27 W/K geschrumpft. Aber wo sind die verbleibenden Verluste?

Hier ist die Bilanz: derselbe Schritt wie [Aufgabe 5](../berechnungen/transmissionsverluste.md), aber jetzt mit der **sanierten** Außenwand:

| Bauteil | $A$ in m² | $U$ in W/(m²·K) | $F_x$ | $U \cdot A \cdot F_x$ in W/K | Anteil |
|---|---|---|---|---|---|
| Außenwand (saniert WDVS) | 152,0 | 0,18 | 1,0 | 27,4 | 14 % |
| Dach | 121,0 | 0,32 | 1,0 | 38,7 | 19 % |
| Fenster | 13,4 | 2,80 | 1,0 | 37,5 | 19 % |
| Haustür | 2,1 | 3,50 | 1,0 | 7,4 | 4 % |
| Kellerdecke | 95,0 | 1,10 | 0,5 | 52,3 | 26 % |
| Wärmebrücken (pauschal 0,10 W/(m²·K)) | 383,5 | 0,10 | 1,0 | 38,4 | 19 % |
| **$H_T$ nach Phase 1** | | | | **≈ 202** | **100 %** |

Zur Erinnerung: Im Bestand waren es $H_T = 314$ W/K, davon allein 140 W/K aus der Außenwand. Mit der WDVS-Sanierung ist $H_T$ um 36 % gesunken – ein guter Schritt, aber kein Erreichen des Wärmepumpen-Niveaus.

Drei Dinge fallen am Rest-$H_T$ auf:

1. **Die Kellerdecke ist jetzt der größte Einzelposten** (52 W/K, 26 %). Sie war es vorher schon, aber durch die Außenwand wurde sie überdeckt. Jetzt ist sie der offensichtliche nächste Hebel.
2. **Dach, Fenster und Wärmebrücken liegen praktisch gleichauf** (jeweils ca. 38 W/K, je 19 %). Trotz völlig unterschiedlicher Bauteilflächen ($A_{\text{Dach}} = 121$ m² gegen $A_{\text{Fenster}} = 13,4$ m²!) ergeben sie ähnliche Beiträge – weil der U-Wert der Fenster zehnmal höher ist.
3. **Die Außenwand ist nicht mehr das schwächste Glied** der Gebäudehülle. Mit 14 % ist sie weit unten in der Prioritätenliste.

Genau dieser Wechsel der Prioritäten ist der eigentliche Lerninhalt von Phase 2.

## Wie Phase 2 didaktisch funktioniert

Phase 1 war **tief**: ein einziges Bauteil, dafür komplett durchgerechnet vom $\lambda$-Wert bis zum CO₂-Lebenszyklus.

Phase 2 ist **breit**: vier Bauteile bzw. Themen nebeneinander, dafür konzentriert auf die *Verfahrensentscheidungen*, die jeweils anstehen. Was im Detail anders ist:

| | Phase 1 | Phase 2 |
|---|---|---|
| Fokus | ein Bauteil komplett | mehrere Bauteile im Vergleich |
| Bauphysik | von Grund auf hergeleitet | bekannt vorausgesetzt, gezielt angewendet |
| Berechnungen | jedes Detail per Hand | Schlüsselgrößen, oft mit der [Formelsammlung](../berechnungen/formelsammlung.md) |
| Materialfragen | ein Dämmstoff sicher beherrschen | Varianten gegeneinander abwägen |
| Wirtschaftlichkeit | eine Maßnahme bewerten | Reihenfolge mehrerer Maßnahmen begründen |
| Lernergebnis | sicher rechnen können | sicher empfehlen können |

Das Pensum pro Bauteil ist deshalb kleiner als das ganze Phase-1-Paket, aber die Bauteile bauen aufeinander auf – am Ende steht der **Verfahrensvergleich**, in dem ihr aus euren Einzelergebnissen eine Gesamtempfehlung mit Zeitachse formuliert.

## Aufbau Phase 2

Jedes Bauteilkapitel folgt einer einheitlichen Struktur: kurze bauphysikalische Einordnung → Verfahrensvarianten → Bewertung an der Lernsituation Schmitt → Beitrag zur Gesamtempfehlung.

- **[Dachsanierung](dach.md)**: Aufsparren-, Zwischensparren-, Untersparrendämmung im Vergleich. Welche Variante passt zu welcher Ausgangssituation? Welche bauphysikalischen Risiken hat jede?
- **[Fenster](fenster.md)**: 2-fach- vs. 3-fach-Verglasung, Rahmenmaterialien, Einbausituation. Warum sind Fenster pro Quadratmeter so teuer wie kein anderes Bauteil – und wann lohnt es trotzdem?
- **[Keller & Bodenplatte](keller.md)**: Kellerdeckendämmung von unten, Perimeterdämmung von außen. Bei den Schmitts mit ihrer Kellerdecke ($U = 1{,}1$, $F_x = 0{,}5$) ist hier der größte Einzelbeitrag zur weiteren Reduktion.
- **[Anlagentechnik](anlagentechnik.md)**: Wärmepumpe als Kern, ergänzt um Photovoltaik, Lüftung mit Wärmerückgewinnung. Das ist der Schritt von der Hülle zur Anlage.
- **[Verfahrensvergleich](vergleich.md)**: methodisches Vorgehen, Bewertungsmatrix, Reihenfolge der Maßnahmen. Hier kommt am Ende die Gesamtempfehlung für die Schmitts zusammen.

## Verständnis-Check

<div class="quiz" data-title="Verständnis-Check Phase 2 – Einstieg">

<div class="quiz__q" data-correct="3">
<p class="quiz__qtext">Vor der WDVS-Sanierung war die Außenwand mit 140 W/K der größte Einzelposten im $H_T$. Welches Bauteil ist jetzt – nach Phase 1 – der größte Einzelposten?</p>
<ul class="quiz__opts">
<li>Das Dach mit 38,7 W/K.</li>
<li>Die Fenster mit 37,5 W/K.</li>
<li>Die Kellerdecke mit 52,3 W/K.</li>
<li>Die Wärmebrücken mit 38,4 W/K.</li>
</ul>
<div class="quiz__explain">Die <strong>Kellerdecke</strong> ist mit 52,3 W/K der größte Einzelposten. Sie hat zwar nur $U = 1{,}1$ – wesentlich besser als die Fenster (2,8) –, aber mit 95 m² eine sehr große Fläche, die den Verlust treibt. Wichtig: Der Temperaturkorrekturfaktor $F_x = 0{,}5$ ist bereits eingerechnet. Ohne $F_x$ wäre der Beitrag doppelt so groß.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Trotz nur 13,4 m² Fläche tragen die Fenster mit 37,5 W/K fast so viel zum $H_T$ bei wie das gesamte Dach mit 121 m² Fläche. Was ist der Grund?</p>
<ul class="quiz__opts">
<li>Fenster werden über $F_x = 1{,}0$ stärker gewichtet als andere Bauteile.</li>
<li>Der $U$-Wert der Fenster ($U = 2{,}80$) ist fast neunmal so hoch wie der des Dachs ($U = 0{,}32$).</li>
<li>Fenster verlieren Wärme zusätzlich über Lüftung und Undichtigkeiten, die in den 37,5 W/K mitgerechnet sind.</li>
<li>Fenster sind nach Süden ausgerichtet und verlieren deshalb mehr Wärme.</li>
</ul>
<div class="quiz__explain">$U \cdot A$ ist das, was zählt. Bei Fenstern ist $U$ sehr hoch, weil Glas und Rahmen schlechte Dämmer sind – $U = 2{,}80$ ist typisch für 2-fach-Verglasung der frühen 1990er. Pro Quadratmeter verlieren Fenster fast neunmal so viel Wärme wie ein gedämmtes Dach. Lüftungsverluste werden separat in $Q_V$ erfasst, $F_x$ ist für alle Bauteile zur Außenluft gleich (1,0), die Himmelsrichtung spielt für den Transmissionsverlust keine Rolle.</div>
</div>

<div class="quiz__q" data-correct="2">
<p class="quiz__qtext">Warum reicht es bei einer ganzheitlichen Sanierung nicht, einfach jede Maßnahme nach absteigender Höhe ihres $H_T$-Beitrags abzuarbeiten?</p>
<ul class="quiz__opts">
<li>Weil das GEG bestimmte Reihenfolgen vorschreibt.</li>
<li>Weil neben dem Wärmeverlust auch Kosten, Förderung, baulicher Aufwand, gegenseitige Abhängigkeiten und der Wärmepumpen-Standard berücksichtigt werden müssen.</li>
<li>Weil $H_T$ sich nach jeder Maßnahme verändert und nicht mehr aussagekräftig ist.</li>
<li>Weil die Kellerdecke immer als Letztes saniert werden sollte.</li>
</ul>
<div class="quiz__explain">Die reine $H_T$-Reduktion ist ein Kriterium, aber nicht das einzige. <strong>Kosten pro eingespartem kWh</strong> sind oft entscheidender, ebenso wie <strong>Förderbedingungen</strong> (welche Maßnahmen werden bezuschusst?), <strong>baulicher Zusammenhang</strong> (Fenstertausch beeinflusst die Laibungsdämmung, Heizungstausch braucht eine gut gedämmte Hülle), und der <strong>Wärmepumpen-Vorbedingung</strong>: Damit eine Wärmepumpe wirtschaftlich läuft, muss die Hülle ein bestimmtes Niveau erreichen. Genau dieses Abwägen ist die Lernarbeit von Phase 2.</div>
</div>

<div class="quiz__q" data-correct="1">
<p class="quiz__qtext">In Phase 1 habt ihr jede Berechnung von $\lambda$ bis CO₂-Bilanz ausführlich hergeleitet. Was ändert sich daran in Phase 2?</p>
<ul class="quiz__opts">
<li>Die Bauphysik wird als bekannt vorausgesetzt; ihr arbeitet mit der Formelsammlung und konzentriert euch auf Verfahrensentscheidungen.</li>
<li>Berechnungen entfallen in Phase 2 vollständig; es geht nur noch um qualitative Bewertung.</li>
<li>Phase 2 baut bauphysikalisch komplett neu auf, weil andere Bauteile anderen Regeln folgen.</li>
<li>Phase 2 verwendet ausschließlich die Online-Rechner, nicht mehr die Handrechnung.</li>
</ul>
<div class="quiz__explain">Phase 2 nutzt die <strong>Formelsammlung als Arbeitsgrundlage</strong>: Die Herleitungen kennt ihr, jetzt geht es um Anwendung und Vergleich. Berechnungen finden weiterhin statt – meist als Schlüsselgrößen, die für eine Beratungsentscheidung relevant sind, nicht als Selbstzweck. Die Bauphysik gilt unverändert für jedes Bauteil; nur die <em>typischen Werte</em> und <em>Verfahren</em> unterscheiden sich.</div>
</div>

</div>

## Im Unterricht besprechen

<div class="discuss">

<div class="discuss__item discuss__item--reflect">
<span class="discuss__tag">Reflexion</span>
<p>Wenn ihr nur das Endergebnis aus der $H_T$-Tabelle oben anschaut – Kellerdecke 26 %, Dach und Fenster und Wärmebrücken je 19 %, Außenwand 14 %, Haustür 4 % – welche Reihenfolge würdet ihr <em>spontan</em> für die nächsten Sanierungsschritte vorschlagen? Notiert eure Antwort, wir vergleichen sie am Ende der Phase 2 mit dem, was nach Verfahrensvergleich übrig bleibt.</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Familie Schmitt hat nach der WDVS-Sanierung etwa 11 120 kWh/a Endenergie eingespart und 1 245 €/a Heizkosten. Würdet ihr ihnen empfehlen, <strong>direkt weitere Bauteile zu sanieren</strong>, oder <strong>erst ein paar Jahre die Investition wirken zu lassen</strong>, bevor der nächste Schritt kommt? Welche Argumente sprechen für die jeweilige Strategie?</p>
<p class="discuss__hint">Pro „direkt weiter": Förderung jetzt sicher (BAFA-Konditionen können sich ändern), iSFP-Bonus läuft ggf. ab, Wärmepumpe braucht die gedämmte Hülle, baulicher Zusammenhang (Gerüst steht). Pro „erst wirken lassen": Liquidität, Erfahrung mit der ersten Maßnahme sammeln, Energiepreis-Entwicklung beobachten, eigene Lebensplanung berücksichtigen.</p>
</div>

<div class="discuss__item discuss__item--debate">
<span class="discuss__tag">Diskussion</span>
<p>Die Fenster der Schmitts haben $U = 2{,}80$ W/(m²·K) – ein für die frühen 1990er typischer Wert, aber heute weit unter dem Stand der Technik (moderne 3-fach-Verglasung erreicht $U_W = 0{,}80$). Trotzdem ist der Gesamtbeitrag der Fenster zum $H_T$ „nur" 18,6 %. Wann ist ein Fenstertausch im konkreten Beratungsgespräch trotzdem eine sehr starke Empfehlung, auch wenn der absolute Energiebeitrag begrenzt ist?</p>
<p class="discuss__hint">Komfort (Kaltluft, Strahlungstemperatur), Schallschutz (besonders bei verkehrsbelasteten Lagen), Werterhalt, Sicherheit (RC-Klassen), Schimmelvermeidung an Laibungen, Energiepreis-Resilienz. Außerdem: Fenster sind oft <em>der</em> sichtbare Bauteilwechsel, der dem Eigentümer das Sanierungsgefühl gibt – ein wichtiger psychologischer Aspekt in Beratungen.</p>
</div>

</div>

---

Die Reihenfolge im Material ist ein Vorschlag, kein Zwang. Wenn ihr ein bestimmtes Bauteil zuerst angehen wollt – etwa weil es im Beratungsfall einer eigenen Familie gerade ansteht –, ist auch das ein guter Weg.

→ Weiter zur [Dachsanierung](dach.md)
