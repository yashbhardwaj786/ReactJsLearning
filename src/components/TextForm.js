import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here2');
    // text = "new text" // wrong way to set text

    const handleUpClick = () => {
        console.log('Upper case was clicked: '+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const hanldeOnChange = (event) => {
        console.log('hanldeOnChange fired');
        setText(event.target.value);
    }
  return (
    <div>
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

    <button className="btn btn-primary" onClick={handleUpClick}> Convert to Upper Case</button>

    </div>
  );
}
