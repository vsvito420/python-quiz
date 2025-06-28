# Quiz programmieren - Schritt für Schritt

## Schritt 1: Das Mini-Quiz (mini-quiz.py)

Beginne mit dem allereinfachsten Quiz - nur eine Frage! Das ist perfekt, um zu verstehen, wie ein Quiz funktioniert.

**Was lernst du hier:**
- `print()` für Text ausgeben
- `input()` für Eingaben vom Benutzer
- `if/else` für Entscheidungen

**Probiere es aus:**
```bash
python mini-quiz.py
```

## Schritt 2: Das einfache Quiz (einfaches-quiz.py)

Wenn das Mini-Quiz funktioniert, probiere das einfache Quiz mit 3 Fragen!

**Was ist neu:**
- Mehrere Fragen hintereinander
- Eine Variable zum Zählen (`richtige_antworten`)
- Mehrere `if/elif/else` Bedingungen

**Probiere es aus:**
```bash
python einfaches-quiz.py
```

## Schritt 3: Dein eigenes Quiz erstellen

Jetzt kannst du dein eigenes Quiz machen! Hier sind ein paar Ideen:

### Neue Fragen hinzufügen
Kopiere einfach einen Frage-Block und ändere ihn:

```python
# --- FRAGE 4 ---
print("Frage 4:")
print("Deine neue Frage hier?")
print("a) Antwort A")
print("b) Antwort B") 
print("c) Antwort C")

antwort4 = input("Deine Antwort: ")

if antwort4 == "a":  # Ändere hier die richtige Antwort
    print("Richtig! Toll!")
    richtige_antworten = richtige_antworten + 1
else:
    print("Leider falsch. Die richtige Antwort ist 'a'.")

print()
```

**Vergiss nicht:**
- Die Anzahl der Fragen im Ergebnis zu ändern: `"von 3 Fragen"` → `"von 4 Fragen"`

### Ideen für neue Fragen:
- Fragen über deine Hobbys
- Mathe-Aufgaben
- Fragen über Tiere
- Fragen über deine Lieblings-TV-Serie

### Das Quiz schwerer machen:
- Mehr Antwortmöglichkeiten (a, b, c, d)
- Fragen mit Zahlen
- Fragen, wo man Text eingeben muss (nicht nur a, b, c)

## Schritt 4: Erweiterte Funktionen (für später)

Wenn du mehr gelernt hast, kannst du:
- **Funktionen** verwenden (wie im original quiz.py)
- **Listen** für die Fragen verwenden
- **Zufällige Reihenfolge** der Fragen
- **Farben** hinzufügen (siehe quiz-mit-farben.py)

## Tipps zum Programmieren:

1. **Klein anfangen:** Beginne mit dem Mini-Quiz
2. **Schritt für Schritt:** Füge immer nur eine Sache hinzu
3. **Testen:** Probiere dein Quiz nach jeder Änderung aus
4. **Fehler sind normal:** Wenn etwas nicht funktioniert, lies die Fehlermeldung
5. **Kommentare schreiben:** Erkläre mit `#`, was dein Code macht

## Häufige Fehler:

- **Vergessene Anführungszeichen:** `print(Hallo)` → `print("Hallo")`
- **Falsche Einrückung:** Python braucht Leerzeichen vor `print()` nach `if:`
- **Vergessener Doppelpunkt:** `if antwort == "a"` → `if antwort == "a":`

Viel Spaß beim Programmieren! 🐍✨
