# Bundesländer – Lernen & Quiz

Mini-Spiel zum Lernen der deutschen Bundesländer (Namen + Hauptstädte) mit **Lernen**- und **Quiz**-Modus.

## Features
- **Nur Deutschland-Umriss + Bundesländer** (keine Hintergrundkarte)
- **Lernen**: Klick zeigt Bundesland + Hauptstadt, Karteikarte (Antwort aufdecken)
- **Quiz**: Easy/Medium/Hard
  - **Hard**: Multiple Choice + Timer
  - **Gemischt (2–4x)**: Frage-Typ wechselt in Blöcken von 2 bis 4 Aufgaben (Bundesland/Hauptstadt)
- **Europa-Modus**: eigenes Karten-Quiz für Länder & Hauptstädte, umschaltbar per Modus-Selector
- **Tooltips**: **nur in Lernen** (Checkbox), **nie im Quiz**
- **Statistik pro Spielername** wird in `stats.json` gespeichert

## Start
Im Projektordner:

```bash
python server.py
```

Dann öffnen:
- http://localhost:8000

Dateien:
- `index.html`
- `bundeslaender.geojson`
- `europe.geojson`
- `server.py`
- `stats.json` (wird automatisch angelegt)

## Hinweis
Browser dürfen aus Sicherheitsgründen nicht direkt in Dateien schreiben. Darum speichert `server.py` die Statistik serverseitig in `stats.json`.
