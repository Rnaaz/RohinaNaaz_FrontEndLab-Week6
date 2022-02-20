var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which is not a JavaScript Framework?", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which is used for Connect To Database?", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),

]

var quiz = new Quiz(questions);

function Question(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrect = function(choice){
    return this.answer === choice;
}

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function() {
    console.log(this.questionIndex);
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkAnswer = function(answer){
    console.log(this.getQuestionByIndex())
    if(this.getQuestionByIndex().isCorrect(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isQuizEnded = function(){
    return this.questionIndex === this.questions.length;
}

function loadPage() {
    console.log(quiz.isQuizEnded())
    if(quiz.isQuizEnded()) showScores();

    else{
        // show Question
        let questionEl = document.getElementById("question");
        questionEl.innerHTML = quiz.getQuestionByIndex().question;

        //show choices

        let choices = quiz.getQuestionByIndex().choices;

        for(let i=0; i<choices.length ; i++){
            var choiceEl = document.getElementById("choice"+i);
            choiceEl.innerHTML = choices[i];
            handleOptionButton("btn"+i, choices[i]);
        }

        //show Progress

        showProgress();


    }
}
    
function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.checkAnswer(choice);
        loadPage();
    }
}

function showProgress() {
    currentQues = quiz.questionIndex + 1;
    var progressEl = document.getElementById("progress");
    progressEl.innerHTML = "Question "+ currentQues + " of "+ questions.length
}

function showScores(){
    var quizEl = document.getElementById("quiz");
    quizEl.innerHTML = `
    <h1>Result</h1>
    <p id="score"> Your Score is : ${quiz.score} and your percentage is ${quiz.score/questions.length *100}%</p>
    `

}

loadPage();























