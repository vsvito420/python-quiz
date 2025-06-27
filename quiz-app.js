// Haupt-Quiz-Anwendung
// Verwaltet die gesamte Benutzeroberfläche und Spiellogik

class QuizApp {
    constructor() {
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.isAnswered = false;

        this.initializeApp();
    }

    // Initialisiert die Anwendung
    initializeApp() {
        this.bindEvents();
        this.showSection('quiz-section');
        this.loadQuestionsForManagement();
    }

    // Bindet alle Event-Listener
    bindEvents() {
        // Navigation
        document.getElementById('quiz-btn').addEventListener('click', () => {
            this.showSection('quiz-section');
            this.setActiveNavButton('quiz-btn');
        });

        document.getElementById('admin-btn').addEventListener('click', () => {
            this.showSection('admin-section');
            this.setActiveNavButton('admin-btn');
            this.loadQuestionsForManagement();
        });

        // Quiz-Events
        document.getElementById('start-quiz-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        // Admin-Events
        document.getElementById('add-question-tab').addEventListener('click', () => {
            this.showAdminPanel('add-question-panel');
            this.setActiveTab('add-question-tab');
        });

        document.getElementById('manage-questions-tab').addEventListener('click', () => {
            this.showAdminPanel('manage-questions-panel');
            this.setActiveTab('manage-questions-tab');
            this.loadQuestionsForManagement();
        });

        // Formular-Events
        document.getElementById('question-form').addEventListener('submit', (e) => {
            this.handleQuestionSubmit(e);
        });
    }

    // Zeigt einen bestimmten Bereich an
    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Setzt den aktiven Navigationsbutton
    setActiveNavButton(buttonId) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(buttonId).classList.add('active');
    }

    // Zeigt ein bestimmtes Admin-Panel an
    showAdminPanel(panelId) {
        document.querySelectorAll('.admin-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(panelId).classList.add('active');
    }

    // Setzt den aktiven Tab
    setActiveTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    }

    // Startet das Quiz
    startQuiz() {
        this.currentQuestions = window.quizData.getShuffledQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;

        if (this.currentQuestions.length === 0) {
            alert('Keine Fragen verfügbar! Bitte fügen Sie zuerst Fragen hinzu.');
            return;
        }

        document.getElementById('quiz-start').classList.add('hidden');
        document.getElementById('quiz-game').classList.remove('hidden');
        document.getElementById('quiz-result').classList.add('hidden');

        this.displayQuestion();
    }

    // Zeigt die aktuelle Frage an
    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];

        // Aktualisiere Header
        document.getElementById('question-counter').textContent =
            `Frage ${this.currentQuestionIndex + 1} von ${this.currentQuestions.length}`;
        document.getElementById('score').textContent = `Punkte: ${this.score}`;

        // Zeige Frage
        document.getElementById('question-text').textContent = question.frage;

        // Erstelle Optionen
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        Object.entries(question.optionen).forEach(([key, value]) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = `${key.toUpperCase()}) ${value}`;
            optionElement.dataset.answer = key;

            optionElement.addEventListener('click', () => {
                this.selectAnswer(key, optionElement);
            });

            optionsContainer.appendChild(optionElement);
        });

        // Reset state
        this.selectedAnswer = null;
        this.isAnswered = false;
        document.getElementById('next-btn').classList.add('hidden');
    }

    // Behandelt die Antwortauswahl
    selectAnswer(answer, optionElement) {
        if (this.isAnswered) return;

        // Entferne vorherige Auswahl
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Markiere ausgewählte Option
        optionElement.classList.add('selected');
        this.selectedAnswer = answer;

        // Zeige Ergebnis nach kurzer Verzögerung
        setTimeout(() => {
            this.showAnswerResult();
        }, 500);
    }

    // Zeigt das Ergebnis der Antwort
    showAnswerResult() {
        if (this.isAnswered) return;

        const question = this.currentQuestions[this.currentQuestionIndex];
        const correctAnswer = question.antwort;
        const isCorrect = this.selectedAnswer === correctAnswer;

        // Markiere alle Optionen entsprechend
        document.querySelectorAll('.option').forEach(opt => {
            const answer = opt.dataset.answer;
            opt.classList.remove('selected');

            if (answer === correctAnswer) {
                opt.classList.add('correct');
            } else if (answer === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // Aktualisiere Score
        if (isCorrect) {
            this.score++;
            document.getElementById('score').textContent = `Punkte: ${this.score}`;
        }

        this.isAnswered = true;

        // Zeige "Nächste Frage" Button
        setTimeout(() => {
            document.getElementById('next-btn').classList.remove('hidden');
        }, 1000);
    }

    // Geht zur nächsten Frage oder zeigt das Ergebnis
    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.currentQuestions.length) {
            this.displayQuestion();
        } else {
            this.showQuizResult();
        }
    }

    // Zeigt das Quiz-Endergebnis
    showQuizResult() {
        document.getElementById('quiz-game').classList.add('hidden');
        document.getElementById('quiz-result').classList.remove('hidden');

        const totalQuestions = this.currentQuestions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);

        document.getElementById('final-score').innerHTML =
            `Du hast <strong>${this.score}</strong> von <strong>${totalQuestions}</strong> Fragen richtig beantwortet.<br>
             Das sind <strong>${percentage}%</strong>!`;

        const resultMessage = document.getElementById('result-message');

        if (this.score === totalQuestions) {
            resultMessage.textContent = 'PERFEKT! Du bist ein wahrer Python-Meisterzauberer! ✨';
            resultMessage.className = 'result-message perfect';
        } else if (this.score >= totalQuestions / 2) {
            resultMessage.textContent = 'Starke Leistung! Du bist auf dem besten Weg, ein Gildenmeister zu werden.';
            resultMessage.className = 'result-message good';
        } else {
            resultMessage.textContent = 'Ein guter Anfang! Übung macht den Meister. Probiere es ruhig noch einmal!';
            resultMessage.className = 'result-message try-again';
        }
    }

    // Startet das Quiz neu
    restartQuiz() {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('quiz-start').classList.remove('hidden');
    }

    // Behandelt das Hinzufügen neuer Fragen
    handleQuestionSubmit(e) {
        e.preventDefault();

        const formData = {
            frage: document.getElementById('question-input').value.trim(),
            optionA: document.getElementById('option-a').value.trim(),
            optionB: document.getElementById('option-b').value.trim(),
            optionC: document.getElementById('option-c').value.trim(),
            antwort: document.getElementById('correct-answer').value
        };

        // Validierung
        if (!formData.frage || !formData.optionA || !formData.optionB ||
            !formData.optionC || !formData.antwort) {
            alert('Bitte füllen Sie alle Felder aus!');
            return;
        }

        // Frage hinzufügen
        const newQuestion = window.quizData.addQuestion(formData);

        if (newQuestion) {
            alert('Frage erfolgreich hinzugefügt!');
            document.getElementById('question-form').reset();

            // Aktualisiere die Fragenliste, falls sie angezeigt wird
            if (document.getElementById('manage-questions-panel').classList.contains('active')) {
                this.loadQuestionsForManagement();
            }
        } else {
            alert('Fehler beim Hinzufügen der Frage!');
        }
    }

    // Lädt Fragen für die Verwaltung
    loadQuestionsForManagement() {
        const questions = window.quizData.loadQuestions();
        const container = document.getElementById('questions-container');

        if (questions.length === 0) {
            container.innerHTML = '<p>Keine Fragen vorhanden.</p>';
            return;
        }

        container.innerHTML = questions.map(question => `
            <div class="question-item" data-id="${question.id}">
                <h4>Frage ${question.id}</h4>
                <p><strong>Frage:</strong> ${this.truncateText(question.frage, 100)}</p>
                <div class="options">
                    <strong>Optionen:</strong><br>
                    A) ${question.optionen.a}<br>
                    B) ${question.optionen.b}<br>
                    C) ${question.optionen.c}
                </div>
                <p class="correct-answer">Richtige Antwort: ${question.antwort.toUpperCase()}</p>
                <div class="question-actions">
                    <button class="btn btn-small btn-danger" onclick="quizApp.deleteQuestion(${question.id})">
                        Löschen
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Löscht eine Frage
    deleteQuestion(questionId) {
        if (confirm('Sind Sie sicher, dass Sie diese Frage löschen möchten?')) {
            window.quizData.deleteQuestion(questionId);
            this.loadQuestionsForManagement();
            alert('Frage erfolgreich gelöscht!');
        }
    }

    // Kürzt Text auf eine bestimmte Länge
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    // Exportiert alle Fragen
    exportQuestions() {
        window.quizData.exportQuestions();
    }

    // Setzt Fragen auf Standard zurück
    resetToDefault() {
        if (confirm('Sind Sie sicher, dass Sie alle Fragen auf die Standardfragen zurücksetzen möchten? Alle benutzerdefinierten Fragen gehen verloren!')) {
            window.quizData.resetToDefault();
            this.loadQuestionsForManagement();
            alert('Fragen wurden auf Standard zurückgesetzt!');
        }
    }

    // Zeigt Statistiken an
    showStatistics() {
        const stats = window.quizData.getStatistics();
        alert(`Statistiken:
        
Gesamtanzahl Fragen: ${stats.totalQuestions}
Standardfragen: ${stats.defaultQuestions}
Benutzerdefinierte Fragen: ${stats.customQuestions}`);
    }
}

// Initialisiere die App, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    window.quizApp = new QuizApp();
});

// Zusätzliche Utility-Funktionen für erweiterte Features
document.addEventListener('DOMContentLoaded', () => {
    // Füge zusätzliche Buttons für erweiterte Funktionen hinzu
    const managePanel = document.getElementById('manage-questions-panel');

    if (managePanel) {
        const utilityButtons = document.createElement('div');
        utilityButtons.className = 'utility-buttons';
        utilityButtons.style.marginTop = '20px';
        utilityButtons.style.textAlign = 'center';

        utilityButtons.innerHTML = `
            <button class="btn btn-primary btn-small" onclick="quizApp.exportQuestions()">
                Fragen exportieren
            </button>
            <button class="btn btn-danger btn-small" onclick="quizApp.resetToDefault()">
                Auf Standard zurücksetzen
            </button>
            <button class="btn btn-success btn-small" onclick="quizApp.showStatistics()">
                Statistiken anzeigen
            </button>
        `;

        managePanel.appendChild(utilityButtons);
    }
});