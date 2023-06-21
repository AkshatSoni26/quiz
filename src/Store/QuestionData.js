/* ----------------------------------------- Store Question Data ----------------------------------------------------------*/


let data = []

export const QuestionData = () => data;

export const setQuestionData = (qustions)  => {
    data = qustions
}  


/* ----------------------------------------- Question Id Handler----------------------------------------------------------*/

let questionId = ''

export const QuestionId = () => questionId;

export const setQuestionId = (id) => {
    questionId = id
} 


/*------------------------------------------- Option Id Handler----------------------------------------------------------*/

let option = []

export const OptionId = () => option;

export const setOptionId = (questionNumber) => {
    option = questionNumber
} 


/*------------------------------------------- user selected Options Array----------------------------------------------------------*/

export const UserOptionsArray = []


// export const OptionId = () => option;

// export const setOptionId = (questionNumber) => {
//     option = questionNumber
// } 