const startButton = document.getElementById('start')
const submitButton = document.getElementById('submit')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')
	

	let shuffledQuestions, currentQuestionIndex
	

	startButton.addEventListener('click', startGame)
	submitButton.addEventListener('click', () => {
	  currentQuestionIndex++
	  setNextQuestion()
	})
	

	function startGame() {
	  startButton.classList.add('hide'),
	  shuffledQuestions = questions.sort(() => Math.random() - .5),
	  currentQuestionIndex = 0,

	  setNextQuestion()
	}
	

	function setNextQuestion() {
	  resetState(),
	  showQuestion(shuffledQuestions[currentQuestionIndex])
	}
	

	function showQuestion(question) {
	  questionElement.innerText = question.question
	  question.answers.forEach(answer => {
	    const button = document.createElement('button')
	    button.innerText = answer.text
	    button.classList.add('buttona')
	    if (answer.correct) {
	      button.dataset.correct = answer.correct
         
	    }
	    button.addEventListener('click', selectAnswer)
	    answerButtonsElement.appendChild(button)
	  })
	}
	

	function resetState() {
	  clearStatusClass(document.body)
	  submitButton.classList.add('hide')
	  while (answerButtonsElement.firstChild) {
	    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	  }
	}
	

	function selectAnswer(e) {
	  const selectedButton = e.target
	  const correct = selectedButton.dataset.correct
	  setStatusClass(document.body, correct)
	  Array.from(answerButtonsElement.children).forEach(button => {
	    setStatusClass(button, button.dataset.correct)
	  })
	  if (shuffledQuestions.length > currentQuestionIndex + 1) {
	    submitButton.classList.remove('hide')
	 
	}
	

	function setStatusClass(element, correct) {
	  clearStatusClass(element)
	  if (correct) {
	    element.classList.add('correct')
	  } else {
	    element.classList.add('wrong')
	  }
	}
	

	function clearStatusClass(element) {
	  element.classList.remove('correct')
	  element.classList.remove('wrong')
	}
	

	const questions = [
	  {
	    question: 'Who is Harrys best friends',
	    answers: [
	      { text: 'Hermonie and Ron', correct: true },
	      { text: 'Malfoy and Neville', correct: false }
	    ]
	  },
	  {
	    question: 'What is the halfgiant, who also becomes a professor in the third book, called?',
	    answers: [
	      { text: 'Snape', correct: false },
	      { text: 'Hagrid', correct: true },
	   
	    ]
	  },
	  {
	    question: 'Witch spell makes things fly?',
	    answers: [
	      { text: 'wingardium leviosa', correct: true },
	      { text: 'Avada kadavra', correct: false },
	      
	    ]
	  },
	  {
	    question: 'Witch creature helps Harry in the second book by trowing him the sword?',
	    answers: [
	      { text: 'Aragon the spider', correct: false },
	      { text: 'The Fenix bird', correct: true }
	    ]
		
	} ]  } 
	  
