document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const scoreElement = document.getElementById('score');
    let score = 0;

    const questions = [
        { question: 'What color is the sky on a clear day?', answers: ['Blue', 'Red', 'Green', 'Yellow'], correct: 'Blue' },
        { question: 'How many legs does a spider have?', answers: ['6', '8', '4', '10'], correct: '8' },
        { question: 'What is the capital of France?', answers: ['Paris', 'London', 'Rome', 'Madrid'], correct: 'Paris' },
        { question: 'What do you call a baby kangaroo?', answers: ['Joey', 'Cub', 'Kid', 'Calf'], correct: 'Joey' },
        { question: 'How many colors are in a rainbow?', answers: ['5', '7', '9', '6'], correct: '7' },
        { question: 'Which animal is known as the “Ship of the Desert”?', answers: ['Camel', 'Horse', 'Elephant', 'Lion'], correct: 'Camel' },
        { question: 'What is the boiling point of water in degrees Celsius?', answers: ['90', '100', '110', '120'], correct: '100' },
        { question: 'Which planet is known as the Red Planet?', answers: ['Mars', 'Jupiter', 'Saturn', 'Venus'], correct: 'Mars' },
        { question: 'What do bees collect and use to create honey?', answers: ['Pollen', 'Nectar', 'Water', 'Leaves'], correct: 'Nectar' },
        { question: 'In which direction does the sun rise?', answers: ['East', 'West', 'North', 'South'], correct: 'East' }

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