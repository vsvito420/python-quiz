# 🧙‍♂️ Python-Zauberer-Quiz - Web-Version

Eine modulare Web-Anwendung basierend auf dem ursprünglichen Python-Quiz, mit der Möglichkeit, eigene Fragen hinzuzufügen und zu verwalten.

## 📋 Features

### Quiz-Funktionen
- **Interaktives Quiz**: Spielen Sie das Quiz mit einer benutzerfreundlichen Web-Oberfläche
- **Zufällige Reihenfolge**: Fragen werden bei jedem Spiel neu gemischt
- **Sofortiges Feedback**: Erhalten Sie direktes Feedback zu Ihren Antworten
- **Detaillierte Ergebnisse**: Sehen Sie Ihre Punktzahl und eine motivierende Nachricht
- **Responsive Design**: Funktioniert auf Desktop und mobilen Geräten

### Verwaltungsfunktionen
- **Fragen hinzufügen**: Erstellen Sie eigene Quiz-Fragen mit drei Antwortoptionen
- **Fragen verwalten**: Anzeigen und Löschen vorhandener Fragen
- **Lokale Speicherung**: Alle Fragen werden im Browser gespeichert
- **Export/Import**: Exportieren Sie Fragen als JSON-Datei
- **Statistiken**: Überblick über die Anzahl der Fragen

## 🚀 Installation und Verwendung

### Einfache Verwendung
1. Laden Sie alle Dateien in einen Ordner herunter
2. Öffnen Sie die `index.html` Datei in einem modernen Webbrowser
3. Das Quiz ist sofort einsatzbereit!

### Dateien im Projekt
```
python-quiz-web/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Styling
├── quiz-data.js        # Datenmanagement
├── quiz-app.js         # Hauptanwendungslogik
└── README.md           # Diese Datei
```

## 🎮 Verwendung

### Quiz spielen
1. Klicken Sie auf "Quiz spielen" in der Navigation
2. Drücken Sie "Quiz starten"
3. Wählen Sie für jede Frage eine Antwort (A, B oder C)
4. Sehen Sie Ihr Ergebnis am Ende

### Fragen verwalten
1. Klicken Sie auf "Fragen verwalten" in der Navigation
2. **Neue Frage hinzufügen**:
   - Wechseln Sie zum Tab "Neue Frage hinzufügen"
   - Geben Sie Ihre Frage ein
   - Fügen Sie drei Antwortoptionen hinzu
   - Wählen Sie die richtige Antwort
   - Klicken Sie "Frage hinzufügen"

3. **Fragen bearbeiten**:
   - Wechseln Sie zum Tab "Fragen bearbeiten"
   - Sehen Sie alle vorhandenen Fragen
   - Löschen Sie Fragen mit dem "Löschen"-Button

### Erweiterte Funktionen
- **Fragen exportieren**: Speichern Sie alle Fragen als JSON-Datei
- **Auf Standard zurücksetzen**: Setzen Sie alle Fragen auf die ursprünglichen zurück
- **Statistiken anzeigen**: Sehen Sie die Anzahl der Fragen

## 🎨 Design-Features

### Farbschema
Das Design verwendet die gleichen Farben wie das ursprüngliche Python-Script:
- **Lila**: Titel und wichtige Elemente
- **Blau**: Navigation und Buttons
- **Grün**: Erfolg und richtige Antworten
- **Gelb**: Fragen-Hintergrund
- **Rot**: Fehler und falsche Antworten

### Responsive Design
- Funktioniert auf Desktop-Computern
- Optimiert für Tablets
- Mobile-freundlich

## 💾 Datenspeicherung

### Lokale Speicherung
- Alle Fragen werden im Browser's `localStorage` gespeichert
- Daten bleiben auch nach dem Schließen des Browsers erhalten
- Keine Server-Verbindung erforderlich

### Datenformat
Fragen werden im folgenden JSON-Format gespeichert:
```json
{
  "id": 1,
  "frage": "Was gibt print('Hallo') aus?",
  "optionen": {
    "a": "Hallo",
    "b": "print('Hallo')",
    "c": "Ein Fehler"
  },
  "antwort": "a"
}
```

## 🔧 Technische Details

### Verwendete Technologien
- **HTML5**: Struktur der Anwendung
- **CSS3**: Styling und Animationen
- **Vanilla JavaScript**: Gesamte Anwendungslogik
- **LocalStorage API**: Datenpersistierung

### Browser-Kompatibilität
- Chrome (empfohlen)
- Firefox
- Safari
- Edge
- Moderne mobile Browser

### Keine Abhängigkeiten
- Keine externen Bibliotheken erforderlich
- Funktioniert offline
- Keine Installation notwendig

## 📝 Anpassungen

### Eigene Fragen hinzufügen
1. Verwenden Sie die Web-Oberfläche (empfohlen)
2. Oder bearbeiten Sie die `quiz-data.js` Datei direkt

### Styling anpassen
- Bearbeiten Sie die `styles.css` Datei
- Ändern Sie die CSS-Variablen am Anfang der Datei für neue Farben

### Funktionen erweitern
- Die modulare Struktur ermöglicht einfache Erweiterungen
- Neue Features können in `quiz-app.js` hinzugefügt werden

## 🐛 Fehlerbehebung

### Häufige Probleme
1. **Fragen werden nicht gespeichert**: Stellen Sie sicher, dass localStorage im Browser aktiviert ist
2. **Styling funktioniert nicht**: Überprüfen Sie, ob alle CSS-Dateien korrekt geladen werden
3. **JavaScript-Fehler**: Öffnen Sie die Browser-Entwicklertools (F12) für Details

### Browser-Cache leeren
Falls Probleme auftreten, leeren Sie den Browser-Cache:
- Chrome: Strg+Shift+R
- Firefox: Strg+F5
- Safari: Cmd+Shift+R

## 🤝 Beitragen

### Verbesserungsvorschläge
- Neue Features können durch Bearbeitung der JavaScript-Dateien hinzugefügt werden
- Das modulare Design erleichtert Erweiterungen

### Bekannte Einschränkungen
- Fragen sind auf den aktuellen Browser beschränkt
- Keine Benutzerkonten oder Online-Synchronisation
- Maximale Speicherkapazität durch localStorage begrenzt

## 📄 Lizenz

Dieses Projekt ist für Bildungszwecke erstellt und kann frei verwendet und modifiziert werden.

## 🎯 Zukünftige Verbesserungen

Mögliche Erweiterungen:
- Timer für Fragen
- Schwierigkeitsgrade
- Kategorien für Fragen
- Mehrspieler-Modus
- Online-Synchronisation
- Detaillierte Statistiken
- Fragen-Import aus verschiedenen Formaten

---

Viel Spaß beim Zaubern mit Python! 🐍✨