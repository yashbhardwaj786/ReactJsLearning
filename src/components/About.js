import React, { useState } from "react";

export default function About(props) {

  const myStyle = {
    color: props.mode ===  'dark' ? 'white' : '#042743',
    backgroundColor: props.mode ===  'dark' ? 'rgb(36 74, 104)' : 'white',
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743',
  }

  return (
    <div className="container" style={{color: props.mode ===  'dark' ? 'white' : '#042743'}}>
      <h1>About Us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils gives you the way to analyze your text quickly and efficiently.  Be it your word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>  Free to use  </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character count tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle} >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
            <strong>   Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browser such as Chrome, Firefox, Opera, Internet Explorer, safari. It suits to count character in Facebook, blogs, books, pdfs, documents, Essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
