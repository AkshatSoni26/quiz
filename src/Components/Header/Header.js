import React from "react";
import { QuestionData } from "../../Store/QuestionData";

export default function Header() {
  const questionData = QuestionData();

  function handleQuestion(i) {

    const element = document.getElementById(`${i}`);
    console.log(element);
    element.scrollIntoView();

  }

  return (
    <header style={{ display: "flex" }}>
      {questionData.map((Qnum, index) => {
        // console.log("Qnum", Qnum)

        return (
          <button onClick={() => handleQuestion(Qnum.question_id)} >
            <div
              key={index}
              // id={Qnum.question_id}
              className="header"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              {Qnum.question_order}
            </div>
          </button>
        );
      })}
    </header>
  );
}
