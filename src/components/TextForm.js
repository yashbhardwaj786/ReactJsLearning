import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  // text = "new text" // wrong way to set text

  const handleUpClick = () => {
    // console.log("Upper case was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    // console.log("Lower case was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  
  const hanldeOnChange = (event) => {
    // console.log("hanldeOnChange fired");
    setText(event.target.value);
  };
  
  return (
    <>
      <div className={"container"}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={hanldeOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charatres</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text}</p>
      </div>
    </>
  );
}
