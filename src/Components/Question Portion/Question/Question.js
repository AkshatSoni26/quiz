import React from 'react'

export default function Question({question_type, question_text,id,qNum}) {

    console.log("question_type, question_text",question_type, question_text)
    return (
        <section id={id}>
            <h3 style={{ color: '#6d6b69' }} >{question_type}</h3>
             <div dangerouslySetInnerHTML={{ __html: question_text }} ></div>
            {/* {console.log("under the question.js",data)} */}
        </section>
    )
}
