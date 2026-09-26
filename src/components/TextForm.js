import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("change te text");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleUpClickLower = () =>{
        console.log("change te text");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = () =>{
        console.log("change te text");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success"); 
    }

    const handlSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Space","success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Message Spoken","success");
    }

    const Reverse =() =>{
      let reversed = text.split(" ").reverse().join(" ");
      setText(reversed);
      props.showAlert("Text Reversed","success");
    }

    const handleOnChange = (event) =>{
        setPreviousText(text);
        setText(event.target.value);
    }

    const Undo = () =>{
      setText(previousText);
    }

    const [text,setText] = useState("");
    const [previousText,setPreviousText] = useState ("");
    return (
    <>
    <div className="container my-3">
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Email address</label>
    <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',
        color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleUpClickLower} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear Text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    <button className="btn btn-primary mx-3" onClick={Reverse} >Reverse</button>
    <button className="btn btn-primary mx-3" onClick={Undo} >Undo</button>
    <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy text</button>
    <button className="btn btn-primary mx-3" onClick={handlSpace} >Remove extra space</button>
    </div>
    <div className="container my-3">
      <h1>Yor text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>time to read {text.split(" ").length*0.008} minutes</p>
    </div>
    </>
  )
}