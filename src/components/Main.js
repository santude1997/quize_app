import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css'

const Main = () => {

    const inputRef = useRef(null)

    return (
        <div className="container">
            <h1 className="title text-light">Quiz App</h1>
            <ol>
                <li>You will ask 10 qustion one after another</li>
                <li>10 points is awarded for Each correct answer</li>
                <li>Each question has 4 opction chose only one from them</li>
                <li>You can review changes before submit</li>
                <li>Result is given after the Quiz</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className = "userid" type="text" placeholder='User Name*' />
            </form>

            <div className="start">
            <Link className="btn" to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    )
}

export default Main