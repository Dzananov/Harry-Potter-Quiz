const startButton = document.getElementById('start')
const submitButton = document.getElementById('submit')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')
const a = document.getElementById('a')
const b = document.getElementById('b')




startButton.addEventListener('click', showQuestion)


function showQuestion(question) {

questionElement.innerText = question.question
    a.innerText = question.a
    b.innerText = question.b
}

function selectAnswers() {
      answerElement.forEach(answerElement => answerElement.checked = false)
  }

 

  const question = [
    {
        question: "Who is Harrys best friends",
        a: "Hermonie and Ron",
        b: "Malfoy and Neville",
        
        correct: "a",
    },
    {
        question: "Who is the principal of Hogwarts",
        a: "Snape",
        b: "Dumbledore",
        
        correct: "b",
    },
 ];


  