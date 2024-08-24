const quizData = [
    {
        question: "What is the correct syntax to output 'Hello World' in Python?",
        choices: ["echo 'Hello World'", "print('Hello World')", "System.out.println('Hello World')", "cout << 'Hello World'"],
        correct: 1
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        choices: ["Tuple", "String", "List", "Integer"],
        correct: 2
    },
    {
        question: "What is the output of the following Python code: `print(type([]))`?",
        choices: ["<class 'list'>", "<class 'tuple'>", "<class 'array'>", "<class 'dict'>"],
        correct: 0
    },
    {
        question: "Which method is used to find the length of a string in Python?",
        choices: ["len()", "length()", "count()", "size()"],
        correct: 0
    },
    {
        question: "What is the output of `5 // 2` in Python?",
        choices: ["2", "2.5", "3", "2.0"],
        correct: 0
    },
    {
        question: "Which of the following is used to define a block of code in Python?",
        choices: ["Brackets", "Indentation", "Parentheses", "Quotes"],
        correct: 1
    },
    {
        question: "Which keyword is used to define a function in Python?",
        choices: ["func", "def", "function", "lambda"],
        correct: 1
    },
    {
        question: "How do you insert comments in Python code?",
        choices: ["/* This is a comment */", "// This is a comment", "# This is a comment", "-- This is a comment"],
        correct: 2
    },
    {
        question: "What is the result of `2 ** 3` in Python?",
        choices: ["5", "6", "8", "9"],
        correct: 2
    },
    {
        question: "What is the output of `len('Python')`?",
        choices: ["5", "6", "7", "Error"],
        correct: 1
    },
    {
        question: "Which of the following is a valid Python variable name?",
        choices: ["1variable", "variable_name", "variable-name", "variable name"],
        correct: 1
    },
    {
        question: "Which of the following statements is used to create an empty set in Python?",
        choices: ["{}", "[]", "set()", "set([])"],
        correct: 2
    },
    {
        question: "How can you convert a string to lowercase in Python?",
        choices: ["str.toLower()", "str.lowercase()", "str.lower()", "str.tolowercase()"],
        correct: 2
    },
    {
        question: "Which of the following can be used to handle exceptions in Python?",
        choices: ["try-except", "catch-throw", "do-catch", "error handling"],
        correct: 0
    },
    {
        question: "What does `None` represent in Python?",
        choices: ["A boolean value", "A null value", "An empty string", "An integer zero"],
        correct: 1
    },
    {
        question: "Which of the following operators is used for string concatenation in Python?",
        choices: ["+", "&", ".", "*"],
        correct: 0
    },
    {
        question: "How do you define a list in Python?",
        choices: ["[]", "{}", "()", "<>"],
        correct: 0
    },
    {
        question: "Which function is used to read a line of input from the user in Python?",
        choices: ["get_input()", "input()", "read()", "scan()"],
        correct: 1
    },
    {
        question: "What is the purpose of the `pass` statement in Python?",
        choices: ["To exit a loop", "To define a function", "To skip execution of a block of code", "To raise an error"],
        correct: 2
    },
    {
        question: "Which Python data type is an ordered collection of items?",
        choices: ["Set", "List", "Dictionary", "Tuple"],
        correct: 1
    }
];
let currentQuestionIndex = 0;
let score = 0;
let userName = "";

const loginContainer = document.getElementById('login-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const questionCountElement = document.getElementById('question-count');

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if (nameInput && emailInput && passwordInput) {
        userName = nameInput;
        startQuiz();
    }
});

function startQuiz() {
    loginContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
        document.getElementById('choice' + i).style.backgroundColor = "#007bff";
    }
    updateProgress();
}

function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('button[id^="choice"]');
    if (choice === currentQuestion.correct) {
        score++;
        buttons[choice].style.backgroundColor = "green";
    } else {
        buttons[choice].style.backgroundColor = "red";
        buttons[currentQuestion.correct].style.backgroundColor = "green";
    }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextBtn.style.display = 'none';
    } else {
        showResults();
    }
}

function updateProgress() {
    questionCountElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `${userName}, your score is ${score} out of ${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    loginContainer.style.display = 'block';
    document.getElementById('login-form').reset();
}

// Initialize the quiz
nextBtn.style.display = 'none';





