const startButton = document.getElementById('start')
const submitButton = document.getElementById ('submit')
const congrats = document.getElementById ('congrats')
var rightAnswera = document.getElementById('answera')
var rightAnswerd = document.getElementById('answerd')
var rightAnswere = document.getElementById('answere')
var wrongAnswerb = document. getElementById('answerb')
var wrongAnswerc = document. getElementById('answerc')
var wrongAnswerf = document. getElementById('answerf')

startButton.addEventListener('click', startGame)

let score = 0

 


function startGame() {
  var question1 = document.getElementById ('question1'). innerHTML = "Who is Harrys best friends"
  var answer1 = document.getElementById ('answera'). innerHTML = 'Hermonie And Ron'
  var answer2 = document.getElementById ('answerb'). innerHTML = 'Malfoy and Neville'
  rightAnswera.addEventListener('click', changeColor1)
  wrongAnswerb.addEventListener ('click', changeC1)
  var question2 = document.getElementById ('question2'). innerHTML = "Who is the principal of Hogwarts"
  var answer3 = document.getElementById ('answerc'). innerHTML = 'Snape'
  var answer4 = document.getElementById ('answerd'). innerHTML = 'Dumbledor'
  rightAnswerd.addEventListener('click',changeColor2)
  wrongAnswerc.addEventListener ('click', changeC2)
  var question3 = document.getElementById ('question3'). innerHTML = "What is Harrys Owl called"
  var answer5 = document.getElementById ('answere'). innerHTML = 'Hedwig'
  var answer6 = document.getElementById ('answerf'). innerHTML = 'Scabbers'
  rightAnswere.addEventListener('click',changeColor3)
  wrongAnswerf.addEventListener ('click', changeC3)


}

function changeColor1() {
  rightAnswera.style.backgroundColor = 'lightgreen';
  score++
  
}
function changeColor2 () {
  rightAnswerd.style.backgroundColor = 'lightgreen';
}


function changeColor3 () {
  rightAnswere.style.backgroundColor = 'lightgreen';

}

function changeC1 () {
  wrongAnswerb.style.backgroundColor = 'red';
  
}

function changeC2 () {
  wrongAnswerc.style.backgroundColor = 'red';
  
}

function changeC3 () {
  wrongAnswerf.style.backgroundColor = 'red';
  
}
