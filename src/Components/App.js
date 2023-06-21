import { useEffect, useState } from 'react';
import '../CSS/App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import QuestionPortion from './Question Portion/QuestionPortion';
import TestURLHiter from '../URLHiter/TestURLHiter';
import SpinnerPopUP from './Spinner/Spinner';
import { QuestionData, setQuestionData } from '../Store/QuestionData';
import axios from 'axios';
import { QuizDataAPI } from './URLs/Urls';

function App() {

  const [data, setData] = useState();


  const [score, setScore] = useState(0)


  useEffect(
    () => {
      axios.get(QuizDataAPI).then((response) => {
        // console.log("response.data.data", response.data.data);
        // setQuestionData(response.data.data)
        setData(response.data.data)
        setQuestionData(response.data.data)
      }
      ).catch((error) => {
        
          console.log(error.message)
          
      })
    }, []
  )

  return (
    (!data) ?

      <SpinnerPopUP />

      :

      <>

        {/* {console.log('data in app.js', data)} */}
        {console.log('data in app.js setdata', QuestionData())}

        <section style={{ display: "fixed" }}>
          <Header />
        </section>

        <section>
          <QuestionPortion />
        </section>

        <section>
          <Footer />
        </section>
      </>
  )
}

export default App;
