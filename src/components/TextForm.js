import React, { useState } from 'react'               //shortcut->rfc + adding usestate
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("upper case was clicked");
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const handleDownClick =()=>{
    console.log("down case was clicked");
    let newText= text.toLowerCase();
    setText(newText);
  }

  const handleClearClick =()=>{
    console.log("clear case was clicked");
    let newText='';
    setText(newText);
  }
  const handleChangeText =()=>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces =()=>{
    console.log("extra spces removed");
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState('Enter text here'); 
  // text= "newtext"; //wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#343a40'}}>
        <div className="mb-3">
        <h1>{props.heading }</h1>
        <div className="mb-3">                    {/* mb-3 bnya bootstrap ma break ho */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white' , color: props.mode==='dark'?'white':'#343a40'}} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-4" onClick={handleDownClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-4" onClick={handleClearClick}>Clear text</button>
        <button type="button" className="btn btn-primary mx-4" onClick={handleChangeText}>Copy text</button>
        <button type="button" className="btn btn-primary mx-4" onClick={handleExtraSpaces}>Remove White Spaces </button>
        </div>
        <div className="container">
          <h1>Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters.</p>
          <p>{0.008*text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </div>
    </>

  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}