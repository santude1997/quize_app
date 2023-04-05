import React from "react";
import "../styles/Result.css";
import {Link} from 'react-router-dom';

const Result = () => {
  function onRestart(){
    console.log("Restart operation perfrom");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quize Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>User Name</span>
          <span className="bold">My own use</span>
        </div>
        <div className="flex">
          <span>Total Points : </span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Erns Points : </span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Marks : </span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
      <Link className="btn" to={"/"} onClick = {onRestart}>Restart</Link>
      </div>
    </div>
  );
};

export default Result;
