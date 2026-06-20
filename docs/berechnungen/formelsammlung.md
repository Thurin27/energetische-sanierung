# Formelsammlung

Diese Seite bündelt alle Formeln und Standardwerte aus dem Kurs an einer Stelle – als Nachschlagewerk während der Bearbeitung und für die Beratungspraxis. Die Herleitungen und Anwendungsbeispiele findet ihr in den jeweiligen Kapiteln.

!!! tip "Hinweis"
    Alle Formeln verwenden SI-Einheiten. **Schichtdicken in Meter** (nicht in Zentimetern!), Temperaturen in Kelvin oder °C (Differenzen sind in beiden Einheiten gleich), Energiemengen in kWh.

## Bauphysik – Wärmedurchgang

→ Kapitel [Wärmedurchgang](../grundlagen/waermedurchgang.md), [U-Wert von Bauteilen](u-wert-bauteil.md)

| Größe | Formel | Einheit |
|---|---|---|
| Wärmedurchlasswiderstand einer Schicht | $R = \dfrac{d}{\lambda}$ | m²·K/W |
| Gesamtwiderstand eines Bauteils | $R_{ges} = R_{si} + \sum R_i + R_{se}$ | m²·K/W |
| Wärmedurchgangskoeffizient | $U = \dfrac{1}{R_{ges}}$ | W/(m²·K) |
| Momentaner Wärmestrom durch ein Bauteil | $\dot{Q} = U \cdot A \cdot \Delta T$ | W |

**Wärmeübergangswiderstände nach DIN EN ISO 6946:**

| Lage | $R_{si}$ (innen) | $R_{se}$ (außen) |
|---|---|---|
| Außenwand (waagerechter Wärmestrom) | 0,13 | 0,04 |
| Dach (Wärmestrom aufwärts) | 0,10 | 0,04 |
| Kellerdecke (Wärmestrom abwärts) | 0,17 | 0,04 |

## Bauphysik – Transmissionsverluste

→ Kapitel [Transmissionswärmeverluste](transmissionsverluste.md)

| Größe | Formel | Einheit |
|---|---|---|
| Transmissionswärmeverlustkoeffizient | $H_T = \sum (U_i \cdot A_i \cdot F_{x,i}) + \Delta U_{WB} \cdot A_{\text{Hülle}}$ | W/K |
| Jahres-Transmissionsverlust | $Q_T = H_T \cdot G_t \cdot 24 / 1000$ | kWh/a |

**Temperaturkorrekturfaktoren $F_x$:**

| Bauteilanschluss | $F_x$ |
|---|---|
| direkt an Außenluft (Außenwand, Dach, Fenster) | 1,0 |
| an unbeheiztes Dachgeschoss | 0,8 |
| an unbeheizten Keller (Kellerdecke) | 0,5 |
| an Erdreich (Bodenplatte, erdberührte Wand) | 0,5 – 0,6 |
| an beheizten Nachbarraum | 0,0 |

**Wärmebrückenzuschlag $\Delta U_{WB}$ auf gesamte Hüllfläche:**

| Ausführung | $\Delta U_{WB}$ in W/(m²·K) |
|---|---|
| ohne Nachweis (pauschal) | 0,10 |
| mit Standarddetails nach DIN 4108 Beiblatt 2 | 0,05 |
| mit detailliertem Wärmebrückennachweis | 0,03 |

**Heizgradtagzahl $G_t$ (Klimazonen Deutschland, $\vartheta_i = 20$ °C):**

| Region | $G_t$ in Kd/a |
|---|---|
| Oberrhein, Niederrhein | ca. 3 000 |
| Norddeutsches Tiefland, Ruhrgebiet | ca. 3 500 |
| Mittelgebirge | ca. 4 000 |
| Alpenvorland, Höhenlagen | ca. 4 500 – 5 500 |

## Energiebilanz – Heizwärmebedarf

→ Kapitel [Heizwärmebedarf](heizwaermebedarf.md)

| Größe | Formel | Einheit |
|---|---|---|
| Lüftungsverluste (Faustformel) | $Q_V = 0{,}34 \cdot n \cdot V_L \cdot G_t \cdot 24 / 1000$ | kWh/a |
| Solare Gewinne (vereinfacht) | $Q_S = q_S \cdot A_N$ | kWh/a |
| Innere Gewinne (vereinfacht) | $Q_I = q_I \cdot A_N$ | kWh/a |
| Heizwärmebedarf | $Q_H = (Q_T + Q_V) - \eta_g \cdot (Q_S + Q_I)$ | kWh/a |
| Endenergiebedarf (Heizung + Warmwasser) | $E_{End} = \dfrac{Q_H}{\eta_a} + Q_{WW}$ | kWh/a |

Erläuterungen: $V_L$ = beheiztes Luftvolumen ≈ 0,8 · Gebäudevolumen, $n$ = Luftwechselrate (typ. 0,5 1/h), $A_N$ = Nutzfläche (vereinfacht Wohnfläche), $\eta_g$ = Gewinnausnutzungsgrad (typ. 0,90–0,95), $\eta_a$ = Anlagenwirkungsgrad.

**Spezifische Werte für die vereinfachte Bilanz:**

| Größe | Wert |
|---|---|
| spez. solare Gewinne $q_S$ | 15 kWh/(m²·a) |
| spez. interne Gewinne $q_I$ | 22 kWh/(m²·a) |
| spez. Warmwasserbedarf $q_{WW}$ | 12–18 kWh/(m²·a) |

**Anlagenwirkungsgrade $\eta_a$ bzw. Jahresarbeitszahl JAZ:**

| Anlagentyp | $\eta_a$ bzw. JAZ |
|---|---|
| Konstanttemperaturkessel (alt) | 0,75 |
| Gas-Niedertemperaturkessel | 0,85 |
| Gas-Brennwertkessel | 0,95 |
| Wärmepumpe Luft-Wasser (Bestand mit FBH) | JAZ 3,0 – 3,5 |
| Wärmepumpe Sole-Wasser | JAZ 4,0 – 4,5 |

## Wirtschaftlichkeit

→ Kapitel [Energiepreise](../wirtschaft-oekologie/energiepreise.md), [Förderung](../wirtschaft-oekologie/foerderung.md), [Amortisation](../wirtschaft-oekologie/amortisation.md)

| Größe | Formel | Einheit |
|---|---|---|
| Jährliche Energiekosten-Einsparung | $\Delta K = \Delta E_{End} \cdot p_{Energie}$ | €/a |
| Investition nach Förderung | $I_{netto} = I_{brutto} \cdot (1 - f_{\text{Förder}})$ | € |
| Statische Amortisationszeit | $T_{stat} = \dfrac{I_{netto}}{\Delta K}$ | a |
| Dynamische Amortisationszeit | $T_{dyn}$: $\sum_{t=1}^{T} \dfrac{\Delta K \cdot (1+p)^{t-1}}{(1+i)^t} = I_{netto}$ | a |

mit $p$ = Energiepreissteigerung pro Jahr, $i$ = Kapitalzinssatz, $f_{\text{Förder}}$ = Förderquote.

**Aktuelle Energiepreise (Endkundentarife, Anfang 2026):**

| Energieträger | Preis |
|---|---|
| Erdgas (Haushalt) | ca. 11 ct/kWh |
| Heizöl | ca. 10 ct/kWh |
| Strom (Haushalt) | ca. 37 ct/kWh |
| Wärmepumpentarif | ca. 25 – 28 ct/kWh |
| Holzpellets | ca. 7 ct/kWh |

**BAFA-Förderung BEG-EM (Bundesförderung für effiziente Gebäude – Einzelmaßnahmen, Stand 2026):**

| Maßnahme | Grundförderung | mit iSFP-Bonus |
|---|---|---|
| Außenwand U ≤ 0,20 W/(m²·K) | 15 % | 20 % |
| Dachdämmung U ≤ 0,14 W/(m²·K) | 15 % | 20 % |
| Fenster U_W ≤ 0,95 W/(m²·K) | 15 % | 20 % |
| Wärmepumpe (im Bestand) | 30 % + Klimabonus | bis 70 % |

Höchstgrenze förderfähige Kosten: 60 000 €/WE (mit iSFP), sonst 30 000 €/WE.

## Ökologische Bewertung

→ Kapitel [CO₂-Bilanz](../wirtschaft-oekologie/co2-bilanz.md)

| Größe | Formel | Einheit |
|---|---|---|
| Jährliche CO₂-Einsparung | $\Delta m_{CO_2} = \Delta E_{End} \cdot f_{CO_2}$ | kg CO₂/a |
| Energetische Amortisation graue Energie | $T_{ener} = \dfrac{Q_{grau}}{\Delta E_{End,a}}$ | a |
| Lebenszyklus-CO₂-Saldo | $\Delta m_{LZ} = \Delta m_{CO_2} \cdot T_{Leben} - m_{grau}$ | kg CO₂ |

**CO₂-Emissionsfaktoren $f_{CO_2}$ (ProBas / Umweltbundesamt, inkl. Vorkette):**

| Energieträger | $f_{CO_2}$ in g/kWh |
|---|---|
| Erdgas | 240 |
| Heizöl | 320 |
| Holzpellets | 25 – 60 |
| Strom-Mix DE 2025 | 380 |
| Strom-Mix DE 2030 (Prognose) | ca. 200 |
| Strom-Mix DE 2035 (Prognose) | ca. 100 – 150 |

**Graue Energie WDVS-Dämmstoffe (16 cm WDVS, Herstellung + Vorkette):**

| Dämmstoff | $m_{grau}$ in kg CO₂-eq/m² |
|---|---|
| Holzfaser | –20 bis –40 (negativ, biogen) |
| Mineralwolle | 40 – 60 |
| EPS | 70 – 90 |
| Resol-Hartschaum | 90 – 120 |

## Standardwerte – λ und U

**Wärmeleitfähigkeit $\lambda$ ausgewählter Baustoffe:**

| Material | $\lambda$ in W/(m·K) |
|---|---|
| Stahlbeton | 2,30 |
| Kalksandstein (Vollstein) | 1,00 |
| Vollziegel | 0,80 |
| Kalkzementputz / Mineralputz | 0,87 |
| Mauerwerk Hochlochziegel (1970er) | 0,42 |
| Gipsputz / Kalkgipsputz | 0,70 |
| Holz (Fichte) | 0,13 |
| Holzfaserdämmplatte | 0,037 – 0,045 |
| Mineralwolle (WDVS-Platte) | 0,032 – 0,040 |
| EPS weiß | 0,035 – 0,040 |
| EPS grau (Graphit) | 0,031 – 0,035 |
| Resol-Hartschaum | 0,022 – 0,025 |
| Vakuumdämmplatte (VIP) | 0,007 – 0,008 |

**Typische U-Werte für Sanierungs-Bauteile:**

| Bauteil | Bestand 1970er | nach Sanierung | GEG-Höchstwert (saniert) | BAFA-Förderung |
|---|---|---|---|---|
| Außenwand | 0,80 – 1,20 | 0,15 – 0,25 | 0,24 | ≤ 0,20 |
| Dach / oberste Geschossdecke | 0,40 – 0,90 | 0,12 – 0,18 | 0,24 (0,20 für oberste Geschossdecke) | ≤ 0,14 |
| Fenster (Verglasung 1990er) | 2,80 – 3,00 | 0,80 – 1,10 | 1,30 | ≤ 0,95 |
| Kellerdecke | 1,00 – 1,50 | 0,25 – 0,35 | 0,30 | ≤ 0,25 |
| Haustür | 3,00 – 4,00 | 1,20 – 1,80 | 1,30 | ≤ 1,30 |

---

→ Zurück zur [Aufgabensammlung Schmitt](aufgaben-schmitt.md) · weiter im roten Faden geht es bei [WDVS – Materialien](../fassade-wdvs/wdvs-materialien.md) bzw. [Transmissionswärmeverluste](transmissionsverluste.md).
