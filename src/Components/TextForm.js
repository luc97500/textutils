import React , {useState} from "react";

export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log("Upper Case Was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick =() =>{
        console.log("Lower Case Was clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =() =>{
        console.log("Clear Button was"+ text)
        let newText = " ";
        setText(newText)
    }

    const handleOnChange =(event)  =>{
        console.log("On Change")
        setText(event.target.value);
    }
    const [text,setText] = useState('  ');
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"value={text} onChange={handleOnChange} id="my Box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
    <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert To Lower Case</button>
    <div className="container my-3">
    <button className="btn btn-danger" onClick={handleClearClick}> Clear The Text</button>
    
        <h3>
           Our Text Summary 
            <p>
                {text.split(" ").length} Word and {text.length} character
            </p>
        </h3>
    </div>
    </>
  );
}
