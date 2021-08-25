import React,{useState} from 'react'
import './App.css'

const App = () => {
  const questions=[
    {
      questionText:"What'is the synonym of reconsider?",
      answerOptions:[
        {answerText:'Rethink',isCorrect:true},
        {answerText:'Recycle',isCorrect:false}
     ]
    },
    {
      questionText:"What's the synonym of happy?",
      answerOptions:[
        {answerText:'joyful',isCorrect:true},
        {answerText:'sad',isCorrect:false}
      ]
    },
    {
      questionText:"What's the opposite of success?",
      answerOptions:[
        {answerText:'achievement',isCorrect:false},
        {answerText:'failure',isCorrect:true}
      ]
    },
    {
      questionText:"What's the synonym of compatibility?",
      answerOptions:[
        {answerText:'Obscurity',isCorrect:false},
        {answerText:'Similarity',isCorrect:true}
      ]
    },
    {
      questionText:"What's the opposite of admire?",
      answerOptions:[
        {answerText:'Despise',isCorrect:true},
        {answerText:'Desire',isCorrect:false}
      ]
    }
  ]

  const [currentquestion,setCurrentQuestion]=useState(0)
  const [showscore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  

  const handleAll=(isCorrect)=>{
    if(isCorrect){		 
      setScore(score +1)
    }
    const nextquestion=currentquestion +1
 
    if(nextquestion < questions.length){
      setCurrentQuestion(nextquestion)
    }
    else{
      setShowScore(true)		 
    }
   }
    
  return (
    <div className='app'>
			{showscore ? (
				<div className='score-section'>
					<small>You correct {score} out of {questions.length}</small>
					</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentquestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentquestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentquestion].answerOptions.map((answerOption) => (
							<button className={answerOption.isCorrect ? 'green' :'red'} onClick={() => handleAll(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  )
}

export default App
