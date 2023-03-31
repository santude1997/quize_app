import React, { useEffect, useState } from "react";
import data from "../database/data";

const Question = () => {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];
  useEffect(() => {
    console.log(question);
  });
  function onSelect() {
    console.log("Radio button change");
  }
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.option.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-optios`}
              onChange={onSelect()}
            />

            <label htmlFor={`q${i}-optios`} className="text-primary">
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
