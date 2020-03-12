var questions = [
    {
        title:"",
        choices: ["","","",""],
        answer:""
    },
]

var currentquestionindex = 0;
var time = questions.length * 10;
var timerInterval;

var timeEl = document.getElementById("time");
var startbtn = document.getElementById("start-btn");
function startgame() {
     timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = time;
    
        if(time === 0) {
          clearInterval(timerInterval);
          endgame();
        }
    loadquestion()
      }, 1000);
}
function loadquestion(){

}
function questionclick(){
    
}
function endgame(){
    // THEN I can save my initials and score */
    // use local storage
}
startbtn.onclick = startgame;

/* GIVEN I am taking a code quiz
WHEN I click the start button

THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
