const startButton = document.getElementById('start')
const submitButton = document.getElementById('submit')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')
const a = document.getElementById('a')
const b = document.getElementById('b')




function myFunction() {
document.getElementById("welcome").innerText = 'May the best player win';
}



function startgame()



	
questionElement.innerText = thequiz.question
a.innerText = thequiz.a
b.innerText = thequiz.b 
	

const questions = [
	  {
	    question : 'Who is Harrys best friends',
		answer1:'Ron and Hermonie',
		answer2:'Malfoy and Neville',
		correctAnswer: 'Ron and Hermonie',
	       
	  },
	    
	  
	  {
	    question: 'What is the halfgiant, who also becomes a professor in the third book, called?',
	    
	      answer1 : 'Snape',
	      answer2 : 'Hagrid',
		  correctAnswer: 'Hagrid',

	   
	    
	  },
	  {
	    question: 'Witch spell makes things fly?',
	    
	      answer1: 'wingardium leviosa', 
	      answer2: 'Avada kadavra', 
		  correctAnswer: 'wingardium leviosa',
	      
	    
	  },
	  
		
	 ]
	  
