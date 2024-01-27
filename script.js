document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    let timer;
    let score = 0; // starting score

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

        updateScore();
        startTimer(); // Start timer for the question
    }

    function startTimer() {
        let timeLeft = 10; // 10 seconds for each question
        timerElement.textContent = `Time left: ${timeLeft}s`;

        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                selectAnswer('');
            }
        }, 1000);
    }
    const correctAnswerSound = new Audio('yay.wav');
    const wrongAnswerSound = new Audio('Noooh.wav');

    function selectAnswer(answer) {
        clearInterval(timer);
        if (answer === questions[currentQuestionIndex].correct) {
            score += 10; // Adds 10 points for a correct answer
            correctAnswerSound.play();
        } else {
            console.log('Noooh.wav');
            wrongAnswerSound.play();
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function updateScore() {
        scoreElement.textContent = `Current Score: ${score}`; // Display current score
    }

    function showResults() {
        questionElement.textContent = 'Game Over!';
        answersElement.innerHTML = '';

        // Check if score is 70 or more to win
        if (score >= 70) {
            scoreElement.textContent = `You win! Your Score: ${score}/${questions.length * 10}`;
        } else {
            scoreElement.textContent = `Your Score: ${score}/${questions.length * 10}`;
        }
    }

    showQuestion();
});

