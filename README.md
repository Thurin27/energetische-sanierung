# Energetische Sanierung – Lernmaterial

MkDocs-basiertes Lernmaterial für die Fachschule Umweltschutztechnik am Hans-Schwier-Berufskolleg Gelsenkirchen.

## Voraussetzungen

- Python 3.9 oder neuer
- pip

## Einrichtung

```bash
# Virtuelle Umgebung anlegen (empfohlen)
python -m venv venv
source venv/bin/activate          # Linux/macOS
# .\venv\Scripts\activate         # Windows

# Abhängigkeiten installieren
pip install -r requirements.txt
```

## Lokale Vorschau

```bash
mkdocs serve
```

Öffnet einen lokalen Server auf <http://127.0.0.1:8000>. Änderungen an Markdown-Dateien werden automatisch übernommen (Hot Reload).

## Statische Seite bauen

```bash
mkdocs build
```

Erzeugt das fertige Site im Verzeichnis `site/`.

## Veröffentlichung auf GitHub Pages

```bash
mkdocs gh-deploy
```

Pusht den gebauten Stand in den Branch `gh-pages` und veröffentlicht ihn dort.

## Projektstruktur

```
energetische-sanierung/
├── mkdocs.yml                 # Konfiguration und Navigation
├── requirements.txt
├── README.md
└── docs/
    ├── index.md               # Startseite
    ├── lernsituation/         # Fall Familie Schmitt
    ├── grundlagen/            # Bauphysik, GEG
    ├── fassade-wdvs/          # Phase 1: Fassadendämmung
    ├── berechnungen/          # Rechenverfahren + Aufgaben
    ├── wirtschaft-oekologie/  # Wirtschaftlichkeit, CO₂
    ├── rechner/               # Online-Rechner (wachsen mit dem Kurs)
    ├── phase2/                # Vorbereitete Erweiterung
    └── assets/images/         # Bilder, Schnittzeichnungen
```

## Hinweise

- **Bilder**: In `docs/assets/images/` ablegen und in den Markdown-Dateien als `![Beschreibung](../assets/images/dateiname.jpg)` referenzieren.
- **Mathematische Formeln**: LaTeX-Syntax über MathJax, `$inline$` oder `$$display$$`.
- **Hinweisboxen**: Material for MkDocs unterstützt `!!! note`, `!!! warning`, `!!! tip` etc.
