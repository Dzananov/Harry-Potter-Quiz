const QUESTION = [{"question": "Who is Harrys best friends",  "answer1" : "Hermonie and Ron","answer2": "Malfoy and Neville", "correct": "Hermonie and Ron"}, 
{"question": "Who is ther principal of Hogwarts?",  "answer1" : "Snape", "answer2": "Dumbeldore", "correct":"Dumbeldore"},
{"question": "What is Harrys owl called?",  "answer1" : "Hedwig", "answer2": "Dolores", "correct":"Hedwig"},
{"question": "Wich proffessor can turn into a cat?",  "answer1" : "Nymphadora Tonks", "answer2": "Minerva McGonagall", "correct":"Minerva McGonagall"},
{"question": "What kind of creature can Remus Lupin turn into?",  "answer1" : "Dementore", "answer2": "Werewolf", "correct":"Werewolfl"},
{"question": "What kind of monster did attack the students and other in the seconde book?",  "answer1" : "A Fenix bird", "answer2": "Snake", "correct":"Snake"},
{"question": "Aragon is Hagrids friend but what kind of creature is he?",  "answer1" : "Spider", "answer2": "Dog", "correct":"Spider"},
{"question": "Who becomes Harrys girlfriend in the 6th book?",  "answer1" : "Ginny", "answer2": "Kathy", "correct":"Ginny"},
{"question": "Who is Sirius Black?",  "answer1" : "Harrys godfather", "answer2": "a runnaway convict", "correct":"Harrys godfather"},
{"question": "Wich positions does Harry have in quiddich?",  "answer1" : "Chaser", "answer2": "Seeker", "correct":"Seeker"},
{"question": "Wich spell can make things fly?",  "answer1" : "avada kadavra", "answer2": "Wingardium leviosa", "correct":"Wingardium leviosa"},]

/*Questioncount*/
let currentQuestion = 0;
let correctQuestion = 0;

/*Defining answer buttons and questionsarea aswell as start and reset buttons*/


let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let submit = document.getElementById("submit");
let questionarea = document.getElementById('question-area')
let reset = document.getElementById("reset")
let start = document.getElementById("start")

/*calling events when clicked on*/

answer1.addEventListener('click', selectedAnswer);
answer2.addEventListener('click', selectedAnswer);
reset.addEventListener('click', restart)
start.addEventListener('click', displayNextQuestion)

startGame()
/*The first function calls the startbutton when user clicks on the startbutton questionarea will be shown and
game will start*/
function startGame(){
  document.getElementById("start").classList.remove('hide')
  document.getElementById("question-area").classList.add('hide')
}
/* In this function question and answers will be shown and the user can click on wichever answer he/she think is correct. ext
question will be shown directly after*/
function displayNextQuestion() {
  let q = QUESTION[currentQuestion];
  document.getElementById("question-area").classList.remove('hide')
  document.getElementById("start").classList.add('hide')
   document.getElementById("question").innerText = q.question;
   document.getElementById("answer1").innerText = q.answer1;
   document.getElementById("answer2").innerText = q.answer2;
   
   
   
  } 

/*This fuction manages the correction of user answers and also scorecount. When all the questions are answerd user will be redirected to next function*/
function selectedAnswer(Event) {
  
  selectedAnswer = Event.currentTarget.innerText
  let q = QUESTION[currentQuestion];
  if (selectedAnswer === q.correct) 
    { let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    correctQuestion ++;
    }
  currentQuestion++;
  if (currentQuestion < QUESTION.length ) {
    displayNextQuestion()
    } else {
      document.getElementById("resultSection").classList.remove('hide')
      document.getElementById("question-area").classList.add("hide")
      
    }
  }
/* When all the questions been answerd user can choose to restart the game*/
  function restart() {

    currentQuestion = 0;
    correctQuestion = 0;
    document.getElementById("score").innerText = 0
    document.getElementById("resultSection").classList.add('hide')
    document.getElementById("question-area").classList.remove("hide")
    displayNextQuestion();
  }
startGame()
displayNextQuestion()
