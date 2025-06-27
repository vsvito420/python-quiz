// Quiz-Daten-Modul
// Hier werden alle Quiz-Fragen gespeichert und verwaltet

class QuizData {
    constructor() {
        this.defaultQuestions = [
            {
                id: 1,
                frage: `Was gibt der folgende "Zauberspruch" aus?

print("Abra", "Kadabra")`,
                optionen: {
                    a: "AbraKadabra",
                    b: "Abra Kadabra",
                    c: "Ein Fehler, man darf nur eine Sache in print() schreiben."
                },
                antwort: "b"
            },
            {
                id: 2,
                frage: `Ein Held sammelt Trankzutaten. Welchen Wert hat die Variable \`zutaten\` am Ende?

zutaten = 5
zutaten = zutaten + 10
zutaten = 3`,
                optionen: {
                    a: "15",
                    b: "5",
                    c: "3"
                },
                antwort: "c"
            },
            {
                id: 3,
                frage: `Ein Torwächter fragt nach einem Codewort. Du gibst "Sesam" ein. Was passiert?

codewort = "Öffne dich"
eingabe = "Sesam"

if eingabe == codewort:
  print("Das Tor schwingt auf!")
else:
  print("Das Tor bleibt verschlossen.")`,
                optionen: {
                    a: "Das Tor schwingt auf!",
                    b: "Das Tor bleibt verschlossen.",
                    c: "Es passiert nichts."
                },
                antwort: "b"
            },
            {
                id: 4,
                frage: `Was ist der richtige Begriff für 'name' in diesem "Rezept" aus dem Zauberbuch?

def begruesse_held(name):
  print("Sei gegrüßt,", name)`,
                optionen: {
                    a: "Eine Variable",
                    b: "Ein Parameter",
                    c: "Eine Definition"
                },
                antwort: "b"
            },
            {
                id: 5,
                frage: `Wenn eine Klasse der "Bauplan" für ein Monster ist, was ist dann das fertige Monster?

grummel = Monster("Grummel", "grün")`,
                optionen: {
                    a: "Eine Funktion",
                    b: "Eine Klasse",
                    c: "Ein Objekt"
                },
                antwort: "c"
            },
            {
                id: 6,
                frage: `Wir haben ein Haustier-Objekt. Wie lassen wir es bellen?

class Hund:
  def bellen(self):
    print("Wuff!")

bello = Hund()
# Welcher Code kommt jetzt?`,
                optionen: {
                    a: "bellen(bello)",
                    b: "bello.bellen()",
                    c: "Hund.bellen()"
                },
                antwort: "b"
            }
        ];

        this.initializeQuestions();
    }

    // Initialisiert die Fragen im localStorage, falls noch nicht vorhanden
    initializeQuestions() {
        if (!localStorage.getItem('quizQuestions')) {
            this.saveQuestions(this.defaultQuestions);
        }
    }

    // Lädt alle Fragen aus dem localStorage
    loadQuestions() {
        const questions = localStorage.getItem('quizQuestions');
        return questions ? JSON.parse(questions) : this.defaultQuestions;
    }

    // Speichert Fragen im localStorage
    saveQuestions(questions) {
        localStorage.setItem('quizQuestions', JSON.stringify(questions));
    }

    // Fügt eine neue Frage hinzu
    addQuestion(questionData) {
        const questions = this.loadQuestions();
        const newId = Math.max(...questions.map(q => q.id), 0) + 1;

        const newQuestion = {
            id: newId,
            frage: questionData.frage,
            optionen: {
                a: questionData.optionA,
                b: questionData.optionB,
                c: questionData.optionC
            },
            antwort: questionData.antwort
        };

        questions.push(newQuestion);
        this.saveQuestions(questions);
        return newQuestion;
    }

    // Löscht eine Frage
    deleteQuestion(questionId) {
        const questions = this.loadQuestions();
        const filteredQuestions = questions.filter(q => q.id !== questionId);
        this.saveQuestions(filteredQuestions);
        return filteredQuestions;
    }

    // Bearbeitet eine Frage
    updateQuestion(questionId, questionData) {
        const questions = this.loadQuestions();
        const questionIndex = questions.findIndex(q => q.id === questionId);

        if (questionIndex !== -1) {
            questions[questionIndex] = {
                id: questionId,
                frage: questionData.frage,
                optionen: {
                    a: questionData.optionA,
                    b: questionData.optionB,
                    c: questionData.optionC
                },
                antwort: questionData.antwort
            };
            this.saveQuestions(questions);
            return questions[questionIndex];
        }
        return null;
    }

    // Gibt eine zufällige Reihenfolge der Fragen zurück
    getShuffledQuestions() {
        const questions = this.loadQuestions();
        const shuffled = [...questions];

        // Fisher-Yates Shuffle Algorithmus
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    // Setzt die Fragen auf die Standardfragen zurück
    resetToDefault() {
        this.saveQuestions(this.defaultQuestions);
        return this.defaultQuestions;
    }

    // Exportiert alle Fragen als JSON
    exportQuestions() {
        const questions = this.loadQuestions();
        const dataStr = JSON.stringify(questions, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'quiz-fragen.json';
        link.click();
    }

    // Importiert Fragen aus einer JSON-Datei
    importQuestions(jsonData) {
        try {
            const questions = JSON.parse(jsonData);

            // Validierung der Datenstruktur
            if (Array.isArray(questions) && this.validateQuestions(questions)) {
                this.saveQuestions(questions);
                return { success: true, count: questions.length };
            } else {
                return { success: false, error: 'Ungültiges Datenformat' };
            }
        } catch (error) {
            return { success: false, error: 'Fehler beim Parsen der JSON-Datei' };
        }
    }

    // Validiert die Struktur der Fragen
    validateQuestions(questions) {
        return questions.every(q =>
            q.hasOwnProperty('frage') &&
            q.hasOwnProperty('optionen') &&
            q.hasOwnProperty('antwort') &&
            q.optionen.hasOwnProperty('a') &&
            q.optionen.hasOwnProperty('b') &&
            q.optionen.hasOwnProperty('c') &&
            ['a', 'b', 'c'].includes(q.antwort)
        );
    }

    // Gibt Statistiken über die Fragen zurück
    getStatistics() {
        const questions = this.loadQuestions();
        return {
            totalQuestions: questions.length,
            defaultQuestions: this.defaultQuestions.length,
            customQuestions: questions.length - this.defaultQuestions.length
        };
    }
}

// Globale Instanz für die Verwendung in anderen Dateien
window.quizData = new QuizData();