# -*- coding: utf-8 -*-

# Ein ganz einfaches Quiz für Anfänger
# Wir verwenden nur das, was wir schon gelernt haben:
# print(), input(), Variablen und if/else

print("=== Willkommen zum Python-Quiz! ===")
print("Beantworte die Fragen mit a, b oder c")
print()

# Wir zählen die richtigen Antworten
richtige_antworten = 0

# --- FRAGE 1 ---
print("Frage 1:")
print("Was macht print('Hallo')?")
print("a) Zeigt 'Hallo' auf dem Bildschirm")
print("b) Löscht den Text")
print("c) Macht nichts")

antwort1 = input("Deine Antwort: ")

if antwort1 == "a":
    print("Richtig! Super!")
    richtige_antworten = richtige_antworten + 1
else:
    print("Leider falsch. Die richtige Antwort ist 'a'.")

print()  # Leerzeile

# --- FRAGE 2 ---
print("Frage 2:")
print("Was steht in der Variable 'name'?")
print("name = 'Lisa'")
print("a) Lisa")
print("b) name")
print("c) Nichts")

antwort2 = input("Deine Antwort: ")

if antwort2 == "a":
    print("Richtig! Toll gemacht!")
    richtige_antworten = richtige_antworten + 1
else:
    print("Leider falsch. Die richtige Antwort ist 'a'.")

print()  # Leerzeile

# --- FRAGE 3 ---
print("Frage 3:")
print("Was passiert hier?")
print("alter = 10")
print("if alter > 5:")
print("    print('Du bist älter als 5')")
print()
print("a) Es wird nichts ausgegeben")
print("b) Es wird 'Du bist älter als 5' ausgegeben")
print("c) Es gibt einen Fehler")

antwort3 = input("Deine Antwort: ")

if antwort3 == "b":
    print("Richtig! Sehr gut!")
    richtige_antworten = richtige_antworten + 1
else:
    print("Leider falsch. Die richtige Antwort ist 'b'.")

print()  # Leerzeile

# --- ERGEBNIS ---
print("=== Quiz beendet! ===")
print("Du hast", richtige_antworten, "von 3 Fragen richtig beantwortet.")

if richtige_antworten == 3:
    print("Perfekt! Du bist ein Python-Profi!")
elif richtige_antworten == 2:
    print("Sehr gut! Du lernst schnell!")
elif richtige_antworten == 1:
    print("Gut gemacht! Weiter so!")
else:
    print("Kein Problem! Übung macht den Meister!")
