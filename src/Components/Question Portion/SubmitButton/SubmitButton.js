import React, { useState } from "react";
import { OptionId, UserOptionsArray } from "../../../Store/QuestionData";

export default function SubmitButton({ options }) {

  const [answerId, setAnswerId] = useState(false);

  // correct Options sender

  function handleAnswerCheck() {
    console.log("submit", OptionId());

    const user_selected_option = OptionId();

    const user_selected_option_id = user_selected_option[0];
    const user_answerd_question = user_selected_option[1];

    // options =OptionId()

    // handling if user goes to next page without answering then showing the error

    if (user_selected_option.length === 0) {
      alert("first select the option.");
    } 
    else {

      setAnswerId(true)
      
      // finding correct option and setting data of option choose
      options.map((option, i) => {
        if (option.is_solution == true) {
          // setAnswerId(option.option_id)
          console.log("correct answer", option.option_id);

          const correct_option_id = option.option_id;

          if (user_selected_option_id == correct_option_id) {
            console.log("choose Option is correct");
          } else {
            console.log("choose option is incorrect");
          }

          UserOptionsArray[user_answerd_question-1] = [
            {
              "Question Number": user_answerd_question,
              correct_answerid: option.option_id,
              "user selected question id": user_selected_option_id,
            },
          ];

          console.log(UserOptionsArray);
        }
      });
    }
  }

  return (
    (answerId == false)
    ?
    <div>
      <button onClick={handleAnswerCheck}>Submit </button>
    </div>
    :
    <div>
      <button>Show Solution</button>
    </div>
  );
}
