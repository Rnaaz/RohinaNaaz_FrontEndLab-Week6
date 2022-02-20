let questions = [
    {
        question: "JavaScript supports",
        choices: ["Functions", "XHTML", "CSS", "HTML"],
        answer: "Functions"
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django"],
        answer: "Django"
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        answer: "PHP"
    },
]

let lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {

    if (quizEnds()) {
        showScores();
    }
    else {
        let ques = questions[currentQuestionIndex];

        const questionEl = document.getElementById("question");

        questionEl.innerHTML = ques.question;

        for (let i = 0; i < ques.choices.length; i++) {
            let choice = document.getElementById("choice" + i);
            choice.innerHTML = ques.choices[i];
            handleChoiceButton("btn" + i, ques.choices[i], currentQuestionIndex);
        }

    }
    if(currentQuestionIndex !== questions.length)
        showProgress();
}

function showProgress() {
currentQues = currentQuestionIndex + 1;
const progressEl = document.getElementById("progress");

progressEl.innerHTML = "Question " +currentQues+ " of "+questions.length;
}

function quizEnds() {
    return currentQuestionIndex === questions.length;
}
function handleChoiceButton(id, choice, i) {
    let buttonEl = document.getElementById(id);
    buttonEl.onclick = function () {
        checkAnswer(choice, i);
        loadQuestion();
    }
}

function checkAnswer(choice, index) {
    if (questions[index].answer === choice) {
        score++;
    }
    currentQuestionIndex++;
}

function showScores(){
    var quizEl = document.getElementById("quiz");
    quizEl.innerHTML = `
    <h1>Result</h1>
    <p id="score"> Your Score is : ${score} and your percentage is ${score/questions.length *100}%</p>
    `
}
loadQuestion();























