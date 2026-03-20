import React from 'react'
import {useState} from 'react'
import questions from './questions.json'

const Questions = () => {

  const [currentIndex , setCurrentIndex] = useState(0);
  const [score , setScore] = useState(0);

  console.log(questions.length);
  console.log(score)

  const hadnleOptionClick = (selectedOption) => {
    if(selectedOption === questions[currentIndex].answer){
      setScore(prev => prev + 1)
    }

    if(currentIndex < questions.length-1){
      setCurrentIndex(prev => prev + 1);
    }
  }

  return (
    <>
    <h2 className='mt-8 mb-4'>{questions[currentIndex].question}</h2>

    <div className='flex flex-col gap-3'>

    {
      questions[currentIndex].options.map((item)=>(
        <button key={item} onClick={()=> hadnleOptionClick(item)}>
          {item}
        </button>
      ))
    }

    </div>

    </>
  )
}

export default Questions