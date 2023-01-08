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
        title: "Which of the following is a fruit?",
        choices: ["Banana", "Tomato", "Carrot", "The concept of time"],
        answer: "Tomato"
    },
    {
        title: "Which of the following is a delicious beverage?",
        choices: ["A Cat", "A Brick", "A Milkshake", "The incomprehensible notion of infinity"],
        answer: "A Milkshake"
    },
    {
        title: "If your lightbulb burns out what should you do?",
        choices: ["Replace it", "Eat it", "Call the hospital", "Try to bring it back using dark magic"],
        answer: "Replace it"
    },
    {
        title: "What is a popular theory as to how Sagittarius A (the supermassive black hole at the galactic center of the milky way) was formed?",
        choices: ["Greg coded it in via Javascript", "Was the result of Rick's experiments", "Was formed by a Quasi-Star collapsing", "Was made by mini Big Bangs occuring within galaxys"],
        answer: "Was formed by a Quasi-Star collapsing"
    },
    {
        title: "Who do Gilgamesh and Enkidu defeat in the Cedar Forest, according to the Epic of Gilgamesh",
        choices: ["Humbaba", "Arinsada", "Exodia the Forbidden one", "Frieza"],
        answer: "Humbaba"
    },
    {
        title: "Why could not the Mongols invade Japan",
        choices: ["They were thwarted by natural disasters", "Their horses couldn't make the trip", "The samurai were too strong", "Japan had the power of Anime on their side"],
        answer: "They were thwarted by natural disasters"
    },
    {
        title: "How great was this quiz?",
        choices: ["Not bad", "Was great", "Worst thing ever", "Peak"],
        answer: "Peak"
    },


];

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

var totalTime = 120;
function newQuiz() {
  questionIndex = 0;
  totalTime = 120;
  timeLeft.textContent = totalTime;
  putInitials.textContent = "";


  var startTimer = setInterval(function() {
      totalTime--;
      timeLeft.textContent = totalTime;
      if(totalTime <= 0) {
          clearInterval(startTimer);
          if (questionIndex < questions.length - 1) {
              gameOver();
          }
      }
  },1000);

  showQuiz();
};

function showQuiz() {
    nextQuestion();
  }
  
  function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
  }
  