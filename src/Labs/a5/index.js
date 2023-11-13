import EncodingParametersInURLs from './EncodingParametersInURLS.js'
import WorkingWithObjects from './WorkingWithObjects.js'
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

function Helper({wer}) {
  const [qwe, asd] = useState(wer);
  return (
    <div>
      <h2>{qwe}</h2>
      <button onClick={() => asd(qwe + 20)}>ZXC</button>
      <button onClick={() => asd(qwe - 30)}>CXZ</button>
    </div>
  );
}

function Assignment5() {
  return (
    <div>
        <Helper wer={10}/>
{/*       <h1>Assignment 5</h1>
      <div className="list-group">
        <a href="http://localhost:4000/a5/welcome"
           className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs/>
      <WorkingWithObjects /> */}
    </div>
  );
}
export default Assignment5;