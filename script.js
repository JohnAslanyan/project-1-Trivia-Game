document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const scoreElement = document.getElementById('score');
    let score = 0;

    const questions = [
        { question: 'What color is the sky on a clear day?', answers: ['Blue', 'Red', 'Green', 'Yellow'], correct: 'Blue' },
        { question: 'How many legs does a spider have?', answers: ['6', '8', '4', '10'], correct: '8' },
        // Add more questions here
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = '';
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer');
            button.addEventListener('click', () => selectAnswer(answer));
            answersElement.appendChild(button);
        });
    }

    function selectAnswer(answer) {
        if (answer === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionElement.textContent = 'Game Over!';
        answersElement.innerHTML = '';
        scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
    }

    showQuestion();
});