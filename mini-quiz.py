# -*- coding: utf-8 -*-

# Das allereinfachste Quiz - nur eine Frage!
# Perfekt zum Anfangen und Verstehen

print("Mini-Quiz: Nur eine Frage!")
print()

print("Was macht print('Hallo Welt')?")
print("a) Zeigt 'Hallo Welt' auf dem Bildschirm")
print("b) Löscht alles")
print("c) Macht einen Fehler")

antwort = input("Deine Antwort (a, b oder c): ")

if antwort == "a":
    print("RICHTIG! Super gemacht!")
else:
    print("Leider falsch. Die richtige Antwort ist 'a'.")

print("Quiz beendet!")
