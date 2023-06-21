import React, { useEffect, useState } from 'react'
import { QuizDataAPI } from '../URLs/Urls'
import axios from 'axios'
import SpinnerPopUP from '../Spinner/Spinner'
import Question from './Question/Question'
import Options from './Options/Options'
import SubmitButton from './SubmitButton/SubmitButton'
import { QuestionData, setQuestionData } from '../../Store/QuestionData'
// import { data } from '../../Store/QuestionData'
// import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Question Portion/QuestionPortion.css'



export default function QuestionPortion() {

  const data = QuestionData()

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };


  return (
    (!data) ?
      <SpinnerPopUP />
      :
      <>

<Carousel showArrows={false} showThumbs={false} showIndicators={false} axis={"horizontal"} >
        {/* {console.log("data",data)} */}
        {
          data.map(
            (Qdata, index) => {
              return (
                <div>
         
                  
                  {console.log("dar,index", Qdata.question_id, Qdata.question_type, index)}
                  {/* <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt="First slide"
        /> */}
                  <Question question_type={Qdata.question_type} question_text={Qdata.question_text} id={Qdata.question_id} qNum={data.question_order} />
                  <Options options={Qdata.options} qNum={Qdata.question_order}/>
                  <SubmitButton options={Qdata.options} />

                
                
                </div>
              )
            }
          )
        }
        </Carousel>
      </>
  )
}
