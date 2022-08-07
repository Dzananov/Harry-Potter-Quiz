const questionElement = document.getElementById('question')
const answerElement = document.getElementById ('answers')
const submitButton =document.getElementById ('Submitbutton')


function setQuestion() {
   submitButton.classList.add('hide')
   nextQuestion()
}

function nextQuestion(question){
questionElement.innerText = question.question
}

function score(){

}








const question = [
    {
        question: 'Who is Harrys best friends',
        answers: [
            {text: 'Ron and Hermoine', correct: true},
            {text: 'Malfoe and Neville', correct: false}
        ]
    }
    
]


