import React, { useState } from 'react'
import { OptionId, QuestionData, setOptionId } from '../../Store/QuestionData'

export default function Footer() {

  const data = OptionId()
  const Question_Number = data[1]
  const Qestion_data = QuestionData()
  const Question_data_length = Qestion_data.length

  const [currentQuestion, setCurrentQuestion] = useState(1)
  console.log("currentQuestion", currentQuestion)

  console.log("Question_data_length", Question_data_length)


  function handleQuestion() {
    const element = document.getElementById(`${Qestion_data[currentQuestion+1].question_id}`);
    console.log("Foooter Button", Qestion_data[currentQuestion+1].question_id)
    console.log('element', element);
    if (element) {
      element.scrollIntoView();
    }
  }



    const handlePageChange = (newcurrentQuestion) => {
      if (newcurrentQuestion < 1) {
        setCurrentQuestion(1);
        handleQuestion()
      } else if (newcurrentQuestion > Question_data_length) {
        setCurrentQuestion(Question_data_length);
        handleQuestion()
      } else {
        setCurrentQuestion(newcurrentQuestion);
        handleQuestion()
        setOptionId([])
      }
    };

    

  return (
    <footer style={{ display: 'flex' }}>

      <button disabled={currentQuestion <= 1}
            onClick={() => handlePageChange(currentQuestion - 1)}>Prev</button>

      <button  disabled={currentQuestion >= Question_data_length}
            onClick={() => handlePageChange(currentQuestion + 1)}>Next</button>

    </footer>
  )
}
