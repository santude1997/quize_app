import React, { useState } from 'react'

const Question = () => {

const [checked, setChecked] = useState(undefined)

    function onSelect(){
        
        console.log("Radio button change");
    }
  return (
    <div className="questions">
        <h2 className="text-light">Sample Question 1</h2>

        <ul>
            <li>
                <input 
                type="radio"
                value={checked}
                name="options"
                id='q1-option'
                onChange={onSelect()}
                />

                <label htmlFor="q1-option" className='text-primary'>option</label>
                <div className="check checked"></div>
            </li>
        </ul>
    </div>
  )
}

export default Question