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
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("finished");
var submitInitialBtn = document.getElementById("submit");
var initialInput = document.getElementById("putInitials");

var highScoreSection = document.getElementById("highScoreSection");
var listOfHighScores = document.getElementById("listOfHighScores");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("back");
var clearHighScoreBtn = document.getElementById("clear"); 
var viewHighScore = document.getElementById("viewHighScore");



var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

var questions = [
    {
        question: "Which of the following is a fruit?",
        choices: ["Banana", "Tomato", "Carrot", "The concept of time"],
        answer: "Tomato"
    },
    {
        question: "Which of the following is a delicious beverage?",
        choices: ["A Cat", "A Brick", "A Milkshake", "The incomprehensible notion of infinity"],
        answer: "A Milkshake"
    },
    {
        question: "If your lightbulb burns out what should you do?",
        choices: ["Replace it", "Eat it", "Call the hospital", "Try to bring it back using dark magic"],
        answer: "Replace it"
    },
    {
        question: "What is a popular theory as to how Sagittarius A (the supermassive black hole at the galactic center of the milky way) was formed?",
        choices: ["Greg coded it in via Javascript", "Was the result of Rick's experiments", "Was formed by a Quasi-Star collapsing", "Was made by mini Big Bangs occuring within galaxys"],
        answer: "Was formed by a Quasi-Star collapsing"
    },
    {
        question: "Who do Gilgamesh and Enkidu defeat in the Cedar Forest, according to the Epic of Gilgamesh",
        choices: ["Humbaba", "Arinsada", "Exodia the Forbidden one", "Frieza"],
        answer: "Humbaba"
    },
    {
        question: "Why could not the Mongols invade Japan",
        choices: ["They were thwarted by natural disasters", "Their horses couldn't make the trip", "The samurai were too strong", "Japan had the power of Anime on their side"],
        answer: "They were thwarted by natural disasters"
    },
    {
        question: "How great was this quiz?",
        choices: ["Not bad", "Was great", "Worst thing ever", "Peak"],
        answer: "Peak"
    },


];

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);


  submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
  });

  viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
  });

  goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
    location.reload();
  });
  
  clearHighScoreBtn.addEventListener("click", function() {
    window.localStorage.removeItem("high scores");
    location.reload();
  });


var totalTime = 120;
function newQuiz() {
  questionIndex = 0;
  totalTime = 120;
  timeLeft.textContent = totalTime;
  putInitials.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";


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

  function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";
  
    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Better luck next time, The correct answer is: " + questions[questionIndex].answer;
    }
  
    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
  }

  function chooseA() { checkAnswer(0); }
  function chooseB() { checkAnswer(1); } 
  function chooseC() { checkAnswer(2); }
  function chooseD() { checkAnswer(3); }
  
  function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";
  
    finalScore.textContent = correctAns;
  }
  

  function storeHighScores(event) {
  event.preventDefault();

  if (initialInput.value === "") {
      alert("Please enter your initials!");
      return;
  } 

  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";   

  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
      scoresArray = [];
  } else {
      scoresArray = JSON.parse(savedHighScores)
  }

  var userScore = {
      initials: initialInput.value,
      score: finalScore.textContent
  };

  console.log(userScore);
  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);
  
  showHighScores();
}


  
var i = 0;
function showHighScores() {

  startDiv.style.display = "none";
  timer.style.display = "none";
  questionDiv.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");


  if (savedHighScores === null) {
      return;
  }
  console.log(savedHighScores);

  var storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
      var eachNewHighScore = document.createElement("p");
      eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      listOfHighScores.appendChild(eachNewHighScore);
  }
}

