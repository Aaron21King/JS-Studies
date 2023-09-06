const questions = [
    {
        question: "¿Quien es el responsable del reinicio del universo DC?",
        options: ["Flash", "Doctor Manhattan", "Darkseid"],
        answer: "Doctor Manhattan"
    },
    {
        question: "¿Quien es el personaje responsable de la muerte de Superman?",
        options: ["Captain Cold", "Deathstroke", "Doomsday"],
        answer: "Doomsday"
    },
    {
        question: "¿Cual fue el primer equipo de superheroes de DC?",
        options: ["The Justice League", "Green Lantern Corps", "The Justice Society"],
        answer: "The Justice Society"
    },
    {
        question: "¿Que personaje es el responsable del evento Crisis en tierras infinitas?",
        options: ["Darkseid", "Anti-Monitor", "Parallax"],
        answer: "Anti-Monitor"
    },
    {
        question: "¿Quien es el responsable de la muerte de la madre de Barry Allen?",
        options: ["Dark Flash", "Reverse Flash", "Red Death"],
        answer: "Reverse Flash"
    },
    {
        question: "¿Quien de estos tres villanos es el principal enemigo de Batman?",
        options: ["Joker", "Lex Luthor", "General Zod"],
        answer: "Joker"
    },
];

const questionElement = document.querySelector("h1");
const optionsContainer = document.querySelector(".options");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    scoreElement.textContent = score;
    optionsContainer.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    nextButton.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        optionsContainer.querySelectorAll("button").forEach(button => {
            button.disabled = false;
        });
    } else {
        alert(`Fin del juego. Puntuación final: ${score}/${questions.length}`);
    }
}

displayQuestion();
nextButton.addEventListener("click", nextQuestion);