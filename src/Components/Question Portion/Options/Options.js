import React from 'react'
import { Form } from 'react-bootstrap'
import SubmitButton from '../SubmitButton/SubmitButton'
import { setOptionId } from '../../../Store/QuestionData';

export default function Options({ options,qNum }) {

    const handleCheckChange = (i, qNum) => {
        // const isChecked = event.target.checked;
        // Perform actions based on the checkbox selection
        console.log('Checkbox checked:', i, qNum);
        setOptionId([i,qNum])
      };

    console.log(options)
    return (
<>
       { options.map(
            (option, index) => {
                return (
                    <>
                        <div key={index} style={{ display: "flex" }}>

                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check
                                onChange={()=> handleCheckChange(option.option_id, qNum)}
                                    // label={<span dangerouslySetInnerHTML={{ __html: option.option_value }} />}
                                    name="group1"
                                    type="radio"
                                    id={`inline-radio-1`}
                                />
                                <div dangerouslySetInnerHTML={{ __html: option.option_value }} />
                            </div>

                            
                        </div>
                        
                    </>

                )
            }
        )}
        {/* <SubmitButton /> */}
        </>

    )
}
