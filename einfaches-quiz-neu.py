# -*- coding: utf-8 -*-

# Ein einfaches Quiz mit der gleichen Struktur wie das große Quiz
# Wir verwenden: Dictionaries, Listen, Funktionen und Schleifen

# --- FRAGE-DATENBANK ---
# Wir speichern alle Fragen in einer Liste.
# Jede Frage ist ein "Dictionary" mit Frage, Optionen und Antwort.
fragen = [
    {
        "frage": "Was gibt print('Hallo') aus?",
        "optionen": {
            "a": "Hallo",
            "b": "'Hallo'",
            "c": "print('Hallo')"
        },
        "antwort": "a"
    },
    {
        "frage": "Was ist 5 + 3?",
        "optionen": {
            "a": "53",
            "b": "8",
            "c": "15"
        },
        "antwort": "b"
    },
    {
        "frage": "Wie speichert man Text in einer Variable?",
        "optionen": {
            "a": "name = 'Max'",
            "b": "name = Max",
            "c": "'Max' = name"
        },
        "antwort": "a"
    }
]

# --- QUIZ-LOGIK ---


def starte_quiz(quiz_fragen):
    """Diese Funktion führt durch das gesamte Quiz."""
    punktestand = 0
    print("--- Willkommen zum einfachen Python-Quiz! ---")
    print("Beantworte die Fragen.")
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
        print("PERFEKT! Du bist super! 🌟")
    elif punktestand >= len(quiz_fragen) / 2:
        print("Sehr gut! Du machst das toll! 👍")
    else:
        print("Kein Problem! Probiere es nochmal! 😊")


# --- START DES PROGRAMMS ---
# Wir rufen unsere Funktion auf, um das Quiz zu beginnen
starte_quiz(fragen)
