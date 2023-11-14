import EncodingParametersInURLs from './EncodingParametersInURLS.js'
import WorkingWithObjects from './WorkingWithObjects.js'
import WorkingWithArrays from "./WorkingWithArrays.js"
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href="http://localhost:4000/a5/welcome"
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs/>
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;