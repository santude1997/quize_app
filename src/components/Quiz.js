import React, { useEffect } from 'react'
import Question from './Question';
import {useSeletor } from 'react-redux'
const Quiz = () => {

  const {question} = useSeletor(state => state)

  useEffect(() =>{
    console.log();
  })

  function onNext() {
    console.log("On next Click");
  }

  function onPrev() {
    console.log("On Prev Click");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Question />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>Prev</button>
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz