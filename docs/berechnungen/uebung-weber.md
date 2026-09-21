# Übungsaufgaben – Fall Frau Weber

!!! info "Zur Übung"
    **Bearbeitungszeit:** ca. 60 Minuten in Einzelarbeit · **Besprechung:** ca. 30 Minuten gemeinsam per Videokonferenz.

    Diese Übungsaufgaben rechnen die Phase-1-Methodik an einem **neuen Fall** durch – Frau Weber, ein Reihenmittelhaus aus 1965 in Recklinghausen. Ihr braucht keine Vorarbeit aus dem Phase-2-Kapitel – arbeitet parallel zu euren Präsentationen.

    Nutzt die [Formelsammlung](formelsammlung.md) als Nachschlagewerk. Jede Aufgabe hat eine Eingabezeile zur Selbstkontrolle und einen ausklappbaren Lösungsweg. Öffnet die Lösung erst nach dem eigenen Rechenversuch.

## Der Fall Frau Weber

Frau Weber (68, verwitwet) bewohnt ein **Reihenmittelhaus, Baujahr 1965** in Recklinghausen. Nach dem Tod ihres Mannes im letzten Jahr überlegt sie, ob und wie sie das Haus energetisch sanieren soll – auch mit Blick auf die späteren Erben. Ihr seid Mitarbeiter:innen im Ingenieurbüro der Energieberaterin und übernehmt die Berechnungen für die Beratung.

**Ausgangsdaten des Gebäudes:**

- Reihenmittelhaus, 92 m² Wohnfläche auf 2 Etagen, 5,8 × 8 m Grundriss
- Zwei Giebelseiten als **Außenwand** (an Nachbarhäuser grenzt beheizter Raum, $F_x = 0$): $A_{Wand} = 34$ m²
- **Dach** (Spitzdach, ungedämmt, oberste Geschossdecke): $A = 55$ m², $U_{Bestand} = 2{,}0$ W/(m²·K)
- **Fenster** (Isolierglas 1980er): $A = 12$ m², $U_{Bestand} = 2{,}60$ W/(m²·K)
- **Haustür**: $A = 2$ m², $U_{Bestand} = 3{,}0$ W/(m²·K)
- **Kellerdecke** (Beton unverputzt): $A = 46$ m², $U_{Bestand} = 1{,}50$ W/(m²·K), $F_x = 0{,}5$
- **Wärmebrücken**: ohne Nachweis, $\Delta U_{WB} = 0{,}10$ W/(m²·K)
- **Klimaregion**: Recklinghausen, $G_t = 3\,500$ Kd/a
- **Heizung**: Gas-Niedertemperatur, $\eta_a = 0{,}85$
- **Gaspreis**: 11 ct/kWh, CO₂-Faktor Erdgas 240 g/kWh

**Der Aufbau der Außenwand (von innen nach außen):**

| Schicht | Dicke $d$ in m | $\lambda$ in W/(m·K) |
|---|---|---|
| Gipsputz innen | 0,015 | 0,70 |
| Vollziegel-Mauerwerk | 0,30 | 0,42 |
| Kalkzementputz außen | 0,020 | 0,87 |

Wärmeübergangswiderstände: $R_{si} = 0{,}13$ m²·K/W · $R_{se} = 0{,}04$ m²·K/W.

---

## Aufgabe 1 – U-Wert der Außenwand (Schichtenmethode)

Berechnet den U-Wert der Außenwand von Frau Weber im Bestand nach der Schichtenmethode.

<div class="task-input" data-target="1.08" data-tolerance="0.05" data-unit="W/(m²·K)" data-decimals="2">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Für jede Schicht gilt $R_i = d_i / \lambda_i$. Achtung: Dicken in Meter.</div>
    <div class="task-input__hint">Tipp 2: $R_{ges} = R_{si} + \sum R_i + R_{se}$.</div>
    <div class="task-input__hint">Tipp 3: $U = 1 / R_{ges}$.</div>
  </div>
</div>

??? success "Lösungsweg"
    $R_{Putz,i} = 0{,}015 / 0{,}70 = 0{,}021$ m²·K/W

    $R_{Ziegel} = 0{,}30 / 0{,}42 = 0{,}714$ m²·K/W

    $R_{Putz,a} = 0{,}020 / 0{,}87 = 0{,}023$ m²·K/W

    $R_{ges} = 0{,}13 + 0{,}021 + 0{,}714 + 0{,}023 + 0{,}04 = 0{,}928$ m²·K/W

    $U = 1 / 0{,}928 \approx 1{,}08$ W/(m²·K)

    **Einordnung:** Typischer Wert für eine ungedämmte Ziegelwand der 1960er Jahre. Weit über dem GEG-Höchstwert (0,24) und der BAFA-Anforderung (0,20).

---

## Aufgabe 2 – Nötige Dämmdicke für BAFA-Förderung

Frau Weber möchte die Außenwand mit einem WDVS aus **EPS ($\lambda = 0{,}035$ W/(m·K))** dämmen. Ziel: BAFA-Förderfähigkeit, also $U \leq 0{,}20$ W/(m²·K).

**Berechnet zunächst die nötige Dämmdicke** (auf ganze Zentimeter aufrunden).

<div class="task-input" data-target="14.2" data-tolerance="0.15" data-unit="cm" data-decimals="1">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Aus dem Ziel-U-Wert ergibt sich $R_{ges,neu} = 1 / U_{ziel}$.</div>
    <div class="task-input__hint">Tipp 2: Die zusätzliche Dämmschicht muss $R_{zusatz} = R_{ges,neu} - R_{Bestand}$ liefern.</div>
    <div class="task-input__hint">Tipp 3: $d = R_{zusatz} \cdot \lambda$ – Ergebnis in Meter, dann × 100 für cm.</div>
  </div>
</div>

Frau Weber wählt zur Sicherheit **16 cm EPS**. Berechnet nun den tatsächlichen U-Wert der sanierten Außenwand:

<div class="task-input" data-target="0.182" data-tolerance="0.05" data-unit="W/(m²·K)" data-decimals="3">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Gleiche Logik wie oben, aber jetzt mit $d = 0{,}16$ m fest vorgegeben.</div>
    <div class="task-input__hint">Tipp 2: $R_{zusatz} = 0{,}16 / 0{,}035$.</div>
    <div class="task-input__hint">Tipp 3: $R_{neu} = R_{Bestand} + R_{zusatz}$, dann $U = 1 / R_{neu}$.</div>
  </div>
</div>

??? success "Lösungsweg"
    **Nötige Dämmdicke:**

    $R_{ges,neu} = 1 / 0{,}20 = 5{,}0$ m²·K/W

    $R_{zusatz} = 5{,}0 - 0{,}928 = 4{,}072$ m²·K/W

    $d = 4{,}072 \cdot 0{,}035 = 0{,}143$ m ≈ **14,2 cm** → aufgerundet **15 cm**

    **U-Wert mit 16 cm EPS:**

    $R_{zusatz} = 0{,}16 / 0{,}035 = 4{,}571$ m²·K/W

    $R_{neu} = 0{,}928 + 4{,}571 = 5{,}499$ m²·K/W

    $U_{neu} = 1 / 5{,}499 \approx 0{,}182$ W/(m²·K)

    **Bewertung:** Deutlich besser als BAFA-Grenze – die 16 cm bringen 10 % Reserve. Typische Praxis: einen Zentimeter mehr wählen als rechnerisch nötig, um Ausführungstoleranzen abzusichern.

---

## Aufgabe 3 – H_T-Bilanz im Bestand

Berechnet den Transmissionswärmeverlustkoeffizienten $H_T$ des Gebäudes im **Bestand**. Nutzt die Ausgangsdaten oben und den U-Wert der Außenwand aus Aufgabe 1 (der Einfachheit halber $U_{Wand} \approx 1{,}08$).

**Erinnerung zum Reihenmittelhaus:** Die Trennwände zu den Nachbarhäusern haben $F_x = 0$ und tauchen in der Bilanz nicht auf – wärmeübertragend sind nur die zwei Giebelseiten (Außenwand), Dach, Fenster, Haustür, Kellerdecke.

<div class="task-input" data-target="233" data-tolerance="0.03" data-unit="W/K" data-decimals="0">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Für jedes Bauteil gilt $H_{T,i} = U_i \cdot A_i \cdot F_{x,i}$. Vergesst den Wärmebrückenzuschlag nicht: $\Delta U_{WB} \cdot A_{\text{Hülle}}$.</div>
    <div class="task-input__hint">Tipp 2: Die Hüllfläche $A_{\text{Hülle}}$ ist die Summe **aller** Bauteile mit F_x > 0.</div>
    <div class="task-input__hint">Tipp 3: Kellerdecke: nicht vergessen, dass $F_x = 0{,}5$.</div>
  </div>
</div>

??? success "Lösungsweg"
    | Bauteil | $U$ | $A$ | $F_x$ | $H_T$-Beitrag |
    |---|---|---|---|---|
    | Außenwand | 1,08 | 34 | 1,0 | 36,7 |
    | Dach | 2,00 | 55 | 1,0 | 110,0 |
    | Fenster | 2,60 | 12 | 1,0 | 31,2 |
    | Haustür | 3,00 | 2 | 1,0 | 6,0 |
    | Kellerdecke | 1,50 | 46 | 0,5 | 34,5 |

    Summe Bauteile: $36{,}7 + 110{,}0 + 31{,}2 + 6{,}0 + 34{,}5 = 218{,}4$ W/K

    Hüllfläche: $A_{\text{Hülle}} = 34 + 55 + 12 + 2 + 46 = 149$ m²

    Wärmebrücken: $\Delta U_{WB} \cdot A_{\text{Hülle}} = 0{,}10 \cdot 149 = 14{,}9$ W/K

    **$H_T = 218{,}4 + 14{,}9 \approx 233$ W/K**

    **Auffällig:** Das Dach allein liegt bei 110 W/K – also **47 %** des gesamten $H_T$! Ein Reihenmittelhaus mit zwei Giebelseiten und großer Dachfläche ist bauphysikalisch ein Sonderfall gegenüber dem EFH.

---

## Aufgabe 4 – Wirkung der WDVS-Sanierung

Frau Weber lässt die Außenwand mit 16 cm EPS sanieren ($U_{neu} = 0{,}182$ W/(m²·K), aus Aufgabe 2). Alle anderen Bauteile bleiben unverändert.

Berechnet die **jährliche Endenergie-Einsparung** durch diese Maßnahme.

<div class="task-input" data-target="3000" data-tolerance="0.05" data-unit="kWh/a" data-decimals="0">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Erst $\Delta H_T$ ausrechnen: alten Wand-Beitrag rausrechnen, neuen Wand-Beitrag rein. Alle anderen Bauteile ändern sich nicht, ebensowenig der Wärmebrücken-Zuschlag.</div>
    <div class="task-input__hint">Tipp 2: $\Delta Q_T = \Delta H_T \cdot G_t \cdot 24 / 1000$ – das ist die Einsparung an Nutzwärme.</div>
    <div class="task-input__hint">Tipp 3: Endenergie: $\Delta E_{End} = \Delta Q_T / \eta_a$. Mit $\eta_a = 0{,}85$.</div>
  </div>
</div>

Und daraus die jährliche **CO₂-Einsparung** in kg/a:

<div class="task-input" data-target="720" data-tolerance="0.05" data-unit="kg CO₂/a" data-decimals="0">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: $\Delta m_{CO_2} = \Delta E_{End} \cdot f_{CO_2}$.</div>
    <div class="task-input__hint">Tipp 2: $f_{CO_2}$ für Erdgas: 240 g/kWh = 0,240 kg/kWh.</div>
  </div>
</div>

??? success "Lösungsweg"
    **$H_T$-Reduktion:**

    Alter Wand-Beitrag: $1{,}08 \cdot 34 \cdot 1{,}0 = 36{,}7$ W/K

    Neuer Wand-Beitrag: $0{,}182 \cdot 34 \cdot 1{,}0 = 6{,}2$ W/K

    $\Delta H_T = 36{,}7 - 6{,}2 = 30{,}5$ W/K

    **Q_T-Einsparung (Nutzwärme):**

    $\Delta Q_T = 30{,}5 \cdot 3\,500 \cdot 24 / 1\,000 \approx 2\,560$ kWh/a

    **Endenergie-Einsparung:**

    $\Delta E_{End} = 2\,560 / 0{,}85 \approx 3\,010$ kWh/a → **ca. 3 000 kWh/a**

    **CO₂-Einsparung:**

    $\Delta m_{CO_2} = 3\,010 \cdot 0{,}240 \approx 720$ kg CO₂/a

    **Einordnung:** 3 000 kWh/a entspricht bei 11 ct/kWh einer Kostenersparnis von etwa **330 €/a**. Die WDVS-Sanierung ist damit ein relevanter, aber nicht dominanter Beitrag – schaut euch Aufgabe 6 an, was noch übrig bleibt.

---

## Aufgabe 5 – Wirtschaftlichkeit und Amortisation

Die Handwerkerangebote für die WDVS-Sanierung liegen bei durchschnittlich **150 €/m²** (fertig gestellt, inkl. Gerüst und Farbanstrich). Frau Weber lässt einen iSFP erstellen und erhält damit **20 % BAFA-Förderung**.

Berechnet die **statische Amortisationszeit** dieser Maßnahme.

<div class="task-input" data-target="12.3" data-tolerance="0.10" data-unit="Jahre" data-decimals="1">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: $I_{brutto} = 150 \cdot A_{Wand}$ (mit $A_{Wand} = 34$ m²).</div>
    <div class="task-input__hint">Tipp 2: $I_{netto} = I_{brutto} \cdot (1 - 0{,}20)$.</div>
    <div class="task-input__hint">Tipp 3: $T_{stat} = I_{netto} / \Delta K$, wobei $\Delta K = \Delta E_{End} \cdot 0{,}11$ €/kWh die jährliche Kosteneinsparung ist.</div>
  </div>
</div>

??? success "Lösungsweg"
    **Investition:**

    $I_{brutto} = 150 \cdot 34 = 5\,100$ €

    BAFA-Förderung 20 % = 1 020 €

    $I_{netto} = 5\,100 - 1\,020 = 4\,080$ €

    **Kosteneinsparung:**

    $\Delta K = 3\,010 \cdot 0{,}11 \approx 331$ €/a

    **Amortisation:**

    $T_{stat} = 4\,080 / 331 \approx 12{,}3$ Jahre

    **Bewertung:** Attraktive Amortisation deutlich innerhalb der WDVS-Lebensdauer (35–40 Jahre). Über die Lebensdauer der Maßnahme spart Frau Weber netto etwa **7 000–8 000 €** an Heizkosten – bei aktuellen Preisen und ohne Preissteigerung. Mit CO₂-Preis-Anstieg und Gaspreis-Entwicklung wird die Bilanz noch günstiger.

---

## Aufgabe 6 – Priorisierung der nächsten Maßnahme

Schaut euch nochmal die $H_T$-Beiträge aus Aufgabe 3 an. Frau Weber möchte **eine zweite Sanierungsmaßnahme** angehen und fragt euch:

*„Welches Bauteil sollte ich nach der Außenwand als Nächstes angehen – und warum?"*

Ordnet die verbleibenden Bauteile nach ihrem prozentualen Anteil am **noch verbleibenden** $H_T$ (nach WDVS-Sanierung) und nennt euren Vorschlag.

<div class="task-input" data-target="55" data-tolerance="0.05" data-unit="% Dach-Anteil" data-decimals="0">
  <div class="task-input__hints">
    <div class="task-input__hint">Tipp 1: Neuer $H_T$-Gesamt: 233 − 30 = **203** W/K.</div>
    <div class="task-input__hint">Tipp 2: Der Dach-Beitrag ist unverändert: 110 W/K.</div>
    <div class="task-input__hint">Tipp 3: 110 / 203 = …</div>
  </div>
</div>

??? success "Lösungsweg und Empfehlung"
    Neuer $H_T$ nach WDVS: **203 W/K**

    | Bauteil | $H_T$-Beitrag | Anteil |
    |---|---|---|
    | **Dach** | 110 W/K | **54 %** |
    | Kellerdecke | 34,5 W/K | 17 % |
    | Fenster | 31,2 W/K | 15 % |
    | Wärmebrücken | 14,9 W/K | 7 % |
    | Außenwand (saniert) | 6,2 W/K | 3 % |
    | Haustür | 6,0 W/K | 3 % |

    **Klare Priorität: Dachsanierung.** Das Dach ist bei Frau Weber der überragende Verlustposten – über die Hälfte des verbleibenden $H_T$. Anders als bei Familie Schmitt (deren Dach schon einmal gedämmt war) ist Frau Webers Dach **völlig ungedämmt** – die Sanierung springt hier von $U = 2{,}0$ auf ca. 0,18. Das ist ein Riesensprung, der bei den Schmitts nicht möglich war.

    Konkret: Die Dachsanierung würde $\Delta H_T \approx 100$ W/K bringen – **über dreimal so viel wie die WDVS-Sanierung**. Endenergie-Einsparung entsprechend über 9 000 kWh/a.

    Die anderen Bauteile: Kellerdecke und Fenster sind relevant, aber deutlich kleiner. Wärmebrücken und Außenwand sind nach WDVS gut versorgt.

---

## Zur gemeinsamen Besprechung

In der 30-minütigen Videokonferenz-Besprechung schauen wir uns an:

- **Aufgabe 1 & 2**: Wo lagen typische Rechenfehler? Wo hilft die Formelsammlung, wo nicht?
- **Aufgabe 3**: Der $F_x$-Faktor für die Kellerdecke – hat er alle richtig eingerechnet? Und die Trennwände zum Nachbarn – wer hat sie fälschlich mitgerechnet?
- **Aufgabe 4 & 5**: Der Weg von $\Delta H_T$ über Endenergie zur Wirtschaftlichkeit – die kompletten Rechenschritte einmal durchgehen.
- **Aufgabe 6**: Vergleich zu Familie Schmitt – bei den Schmitts war das Dach schon teilsaniert; bei Frau Weber steht es ganz am Anfang. Was heißt das für die Priorisierung? Wie erklärt ihr Frau Weber (die ja keine Fachfrau ist), warum das Dach jetzt vor Fenster oder Kellerdecke kommen sollte?

Bringt eure Ergebnisse und eure offenen Fragen mit.
