import React, {useState} from 'react'
// import { alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextForm(props) {
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.");

  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.");
  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert();
    props.showAlert("Text is Capitalized.");
  }
  const handleRev=()=>{
    let newText=text.split(" ").reverse( ).join(" ");
    setText(newText);
    props.showAlert("Text Reversed.");
  }
  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard");
        
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed.");
  }
  const handleClear=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared.");
  }
  const[text, setText]=useState();
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>Write text for convert</h1>
       <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Write Your Text Here' id="mybox" rows="8"></textarea>
      </div>
        {/* <p>your text contains Words and Characters.</p> */}
  </div>
  
  <div className="container">
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Capitalize</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleRev}>Reverse</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-2 my-2" onClick={handleClear}>Clear</button>
  </div>
    <div className="container my-4">
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
