# -*- coding: utf-8 -*-

# Ein kleines Quiz, um unser Wissen zu testen.
# Der Code selbst benutzt auch alles, was wir gelernt haben:
# print(), Variablen, if/else, Funktionen und sogar eine kleine Klasse!

# --- FRAGE-DATENBANK ---
# Wir speichern alle Fragen in einer Liste.
# Jede Frage ist ein "Dictionary",
# das ist wie eine Schatzkiste mit beschrifteten Fächern.
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
eingabe = "Sesam"  # Stell dir vor, das kommt vom Spieler

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
        "frage": """Wenn eine Klasse der "Bauplan" für ein Monster ist, was ist dann das fertige Monster, das wir erschaffen?

grummel = Monster("Grummel", "grün")""",
        "optionen": {
            "a": "Eine Funktion",
            "b": "Eine Klasse",
            "c": "Ein Objekt"
        },
        "antwort": "c"
    },
    {
        "frage": """Wir haben ein Haustier-Objekt erschaffen. Wie lassen wir es bellen?

class Hund:
  def __init__(self, name):
    self.name = name
  
  def bellen(self):
    print("Wuff!")

bello = Hund("Bello")
# Welcher Code kommt jetzt? """,
        "optionen": {
            "a": "bellen(bello)",
            "b": "bello.bellen()",
            "c": "Hund.bellen()"
        },
        "antwort": "b"
    }
]

# --- QUIZ-LOGIK ---


def starte_quiz(quiz_fragen):
    """Diese Funktion führt durch das gesamte Quiz."""
    punktestand = 0
    print("--- Willkommen zum großen Python-Zauberer-Quiz! ---")
    print("Mal sehen, was du heute gelernt hast.")
    print("Tippe a, b oder c für deine Antwort und drücke Enter.\n")

    # Wir gehen jede Frage in unserer Liste durch
    # enumerate gibt uns die Nummer (i) und die Frage (q)
    for i, q in enumerate(quiz_fragen):
        print(f"--- Frage {i + 1} ---")
        print(q["frage"])

        # Optionen anzeigen
        for key, value in q["optionen"].items():
            print(f"{key}) {value}")

        # Auf die Antwort des Spielers warten
        while True:
            antwort_spieler = input("Deine Antwort: ").lower()
            if antwort_spieler in ["a", "b", "c"]:
                break
            else:
                print("Ungültige Eingabe! Bitte nur a, b oder c tippen.")

        # Überprüfen, ob die Antwort richtig war
        if antwort_spieler == q["antwort"]:
            print("RICHTIG! Sehr gut gemacht!\n")
            punktestand = punktestand + 1
        else:
            print(
                f"Leider falsch. Die richtige Antwort wäre '{q['antwort']}' gewesen.\n")

    # Am Ende das Ergebnis anzeigen
    print("=====================================")
    print("Das Quiz ist vorbei!")
    print(
        f"Du hast {punktestand} von {len(quiz_fragen)} Fragen richtig beantwortet.")

    if punktestand == len(quiz_fragen):
        print("PERFEKT! Du bist ein wahrer Python-Meisterzauberer! ✨")
    elif punktestand >= len(quiz_fragen) / 2:
        print("Starke Leistung! Du bist auf dem besten Weg, ein Gildenmeister zu werden.")
    else:
        print("Ein guter Anfang! Übung macht den Meister. Probiere es ruhig noch einmal!")


# --- START DES PROGRAMMS ---
# Wir rufen unsere Funktion auf, um das Quiz zu beginnen
starte_quiz(fragen)
