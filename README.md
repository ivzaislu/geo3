# Geografie – Lernen & Quiz

Mini-Spiel zum Lernen von Regionen und Ländern (inkl. Hauptstädten) mit **Lernen**- und **Quiz**-Modus.

## Features
- **Deutschland, Europa und Afrika** als separate Karten
- **Nur Umrisse** (keine Hintergrundkarte)
- **Lernen**: Klick zeigt Region/Land + Hauptstadt, Karteikarte (Antwort aufdecken)
- **Quiz**: Leicht/Mittel/Schwer
  - **Hard**: Multiple Choice + Timer
  - **Gemischt (2–4x)**: Frage-Typ wechselt in Blöcken von 2 bis 4 Aufgaben (Bundesland/Hauptstadt)
- **Europa- und Afrika-Modus**: eigene Karten-Quiz für Länder & Hauptstädte
- **Tooltips**: **nur in Lernen** (Checkbox), **nie im Quiz**
- **Statistik pro Spielername** wird in `stats.json` gespeichert
- **Zoom & Pan**: Karte ist zoombar für kleine Länder/Regionen

## Start
Im Projektordner:

```bash
python server.py
```

Dann öffnen:
- http://localhost:8000

Dateien:
- `index.html`
- `germany.html`
- `europe.html`
- `africa.html`
- `bundeslaender.geojson`
- `europe.geojson`
- `africa.json`
- `server.py`
- `stats.json` (wird automatisch angelegt)

## Hinweis
Browser dürfen aus Sicherheitsgründen nicht direkt in Dateien schreiben. Darum speichert `server.py` die Statistik serverseitig in `stats.json`.
