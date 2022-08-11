const startButton = document.getElementById('start')
const submitButton = document.getElementById ('submit')
var rightAnswer = document.getElementById('answera','answerd' )


startButton.addEventListener('click', startGame)
 


function startGame() {
  var question1 = document.getElementById ('question1'). innerHTML = "Who is Harrys best friends"
  var answer1 = document.getElementById ('answera'). innerHTML = 'Hermonie And Ron'
  var answer2 = document.getElementById ('answerb'). innerHTML = 'Malfoy and Neville'
  rightAnswer.addEventListener('click', changeColor)
  var question2 = document.getElementById ('question2'). innerHTML = "Who is the principal of Hogwarts"
  var answer3 = document.getElementById ('answerc'). innerHTML = 'Snape'
  var answer4 = document.getElementById ('answerd'). innerHTML = 'Dumbledor'

  var question3 = document.getElementById ('question3'). innerHTML = "What is Harrys Owl called"
  var answer5 = document.getElementById ('answere'). innerHTML = 'Hedwig'
  var answer6 = document.getElementById ('answerf'). innerHTML = 'Scabbers'


}

function changeColor() {
  rightAnswer.style.backgroundColor = 'lightgreen';
}
