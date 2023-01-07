var timer = document.getElementById("time");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("firstPage");
var startQuizBtn = document.getElementById("begin");

var questionDiv = document.getElementById("questionPage");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn1");
var choiceB = document.getElementById("btn2");
var choiceC = document.getElementById("btn3");
var choiceD = document.getElementById("btn4");
var answerCheck = document.getElementById("checkAnswer");

var summary = document.getElementById("finished");
var submitInitialBtn = document.getElementById("submit");
var initialInput = document.getElementById("putInitials");

var highScoreSection = document.getElementById("viewHS");
var listOfHighScores = document.getElementById("listOfHighScores");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("back");
var clearHighScoreBtn = document.getElementById("clear"); 
var viewHighScore = document.getElementById("highScores");



var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

var questions = [
    {
        title: "Which of the following is NOT an example of a javascript variable?",
        choices: ["let", "var", "set", "const"],
        answer: "set"
    },
    {
        title: "To select an element with a specific id in CSS, write a _ character followed by the id of the element.",
        choices: ["#", "/", ".", "$"],
        answer: "#"
    },
    {
        title: "What does HTML stand for?",
        choices: ["HyperText Modern Language", "HotText Modern Language", "HighText Markup Language", "HyperText Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        title: "What is the first index in any given array?",
        choices: ["-1", "1", "i", "0"],
        answer: "0"
    },
    {
        title: "A JavaScript Boolean represents one of two values:",
        choices: ["yes, no", "on, off", "true, false", "black, white"],
        answer: "true, false"
    },
    {
        title: "Which HTML element does not require a closing tag?",
        choices: ["h1", "img", "div", "form"],
        answer: "img"
    },
    {
        title: "The CSS box model is essentially a box that wraps around every HTML element. It consists of:",
        choices: ["margins, padding", "margins, borders, padding, page content", "margins, borders, padding", "borders"],
        answer: "margins, borders, padding, page content"
    },
    {
        title: "What is bootstrap?",
        choices: ["free open-source CSS framework", "paid open-source CSS framework", "free open-source javascript framework", "a strap on your boot"],
        answer: "free open-source CSS framework"
    },
    {
        title: "Which does DOM stand for?",
        choices: ["Document Object Method", "Document Office Material", "Document Object Model", "Document Online Model"],
        answer: "Document Object Model"
    },
    {
        title: "Which of the following is okay to store in local storage?",
        choices: ["social security number", "credit card info", "passwords", "highscore"],
        answer: "highscore"
    },
];

function startTimer() {
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = "Time: " + time;
        if(time === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
      }, 1000);
}

function sendMessage () {
    alert("TIME'S UP!");
    submitHighscores();
}