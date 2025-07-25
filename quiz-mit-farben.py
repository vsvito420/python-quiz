# -*- coding: utf-8 -*-

# --- UNSERE MAGISCHE FARBPALETTE (als Klasse) ---
# Hier speichern wir die "Zaubersprüche" für die Farben,
# damit wir sie leicht benutzen können.
class Farben:
    LILA = '\033[95m'
    BLAU = '\033[94m'
    GRUEN = '\033[92m'
    GELB = '\033[93m'
    ROT = '\033[91m'
    # Das ist der wichtigste "Zauber": Er setzt die Farbe wieder auf normal!
    ENDE = '\033[0m'
    FETT = '\033[1m'


# --- FRAGE-DATENBANK (unverändert) ---
fragen = [
    {
        "frage": """Was gibt der folgende "Zauberspruch" aus?

print("Abra", "Kadabra")""",
        "optionen": {
            "a": "AbraKadabra",
            "b": "Abra Kadabra",
            "c": "Ein Fehler, man darf nur eine Sache in print() schreiben."
        },
        "antwort": "b"
    },
    {
        "frage": """Ein Held sammelt Trankzutaten. Welchen Wert hat die Variable `zutaten` am Ende?

zutaten = 5
zutaten = zutaten + 10
zutaten = 3""",
        "optionen": {
            "a": "15",
            "b": "5",
            "c": "3"
        },
        "antwort": "c"
    },
    {
        "frage": """Ein Torwächter fragt nach einem Codewort. Du gibst "Sesam" ein. Was passiert?

codewort = "Öffne dich"
eingabe = "Sesam"

if eingabe == codewort:
  print("Das Tor schwingt auf!")
else:
  print("Das Tor bleibt verschlossen.")""",
        "optionen": {
            "a": "Das Tor schwingt auf!",
            "b": "Das Tor bleibt verschlossen.",
            "c": "Es passiert nichts."
        },
        "antwort": "b"
    },
    {
        "frage": """Was ist der richtige Begriff für 'name' in diesem "Rezept" aus dem Zauberbuch?

def begruesse_held(name):
  print("Sei gegrüßt,", name)""",
        "optionen": {
            "a": "Eine Variable",
            "b": "Ein Parameter",
            "c": "Eine Definition"
        },
        "antwort": "b"
    },
    {
        "frage": """Wenn eine Klasse der "Bauplan" für ein Monster ist, was ist dann das fertige Monster?

grummel = Monster("Grummel", "grün")""",
        "optionen": {
            "a": "Eine Funktion",
            "b": "Eine Klasse",
            "c": "Ein Objekt"
        },
        "antwort": "c"
    },
    {
        "frage": """Wir haben ein Haustier-Objekt. Wie lassen wir es bellen?

class Hund:
  def bellen(self):
    print("Wuff!")

bello = Hund()
# Welcher Code kommt jetzt? """,
        "optionen": {
            "a": "bellen(bello)",
            "b": "bello.bellen()",
            "c": "Hund.bellen()"
        },
        "antwort": "b"
    }
]

# --- QUIZ-LOGIK (jetzt mit Farben!) ---


def starte_quiz(quiz_fragen):
    """Diese Funktion führt durch das gesamte Quiz."""
    punktestand = 0
    # Wir benutzen f-Strings mit unserer Farben-Klasse
    print(f"{Farben.LILA}{Farben.FETT}--- Willkommen zum großen Python-Zauberer-Quiz! ---{Farben.ENDE}")
    print("Mal sehen, was du heute gelernt hast.")
    print("Tippe a, b oder c für deine Antwort und drücke Enter.\n")

    for i, q in enumerate(quiz_fragen):
        print(f"{Farben.GELB}--- Frage {i + 1} ---{Farben.ENDE}")
        print(q["frage"])

        for key, value in q["optionen"].items():
            print(f"{key}) {value}")

        while True:
            antwort_spieler = input("Deine Antwort: ").lower()
            if antwort_spieler in ["a", "b", "c"]:
                break
            else:
                print(
                    f"{Farben.ROT}Ungültige Eingabe! Bitte nur a, b oder c tippen.{Farben.ENDE}")

        if antwort_spieler == q["antwort"]:
            print(f"{Farben.GRUEN}RICHTIG! Sehr gut gemacht!{Farben.ENDE}\n")
            punktestand = punktestand + 1
        else:
            print(
                f"{Farben.ROT}Leider falsch. Die richtige Antwort wäre '{q['antwort']}' gewesen.{Farben.ENDE}\n")

    print(f"{Farben.LILA}{Farben.FETT}====================================={Farben.ENDE}")
    print(f"{Farben.BLAU}Das Quiz ist vorbei!{Farben.ENDE}")
    print(f"Du hast {Farben.FETT}{punktestand}{Farben.ENDE} von {Farben.FETT}{len(quiz_fragen)}{Farben.ENDE} Fragen richtig beantwortet.")

    # Unterschiedliche Nachrichten je nach Ergebnis, jetzt auch in Farbe!
    if punktestand == len(quiz_fragen):
        print(f"{Farben.GRUEN}{Farben.FETT}PERFEKT! Du bist ein wahrer Python-Meisterzauberer! ✨{Farben.ENDE}")
    elif punktestand >= len(quiz_fragen) / 2:
        print(f"{Farben.BLAU}Starke Leistung! Du bist auf dem besten Weg, ein Gildenmeister zu werden.{Farben.ENDE}")
    else:
        print(f"{Farben.ROT}Ein guter Anfang! Übung macht den Meister. Probiere es ruhig noch einmal!{Farben.ENDE}")


# --- START DES PROGRAMMS ---
starte_quiz(fragen)
