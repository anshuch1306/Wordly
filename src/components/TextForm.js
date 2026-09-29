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
      navigator.clipboard.writeText(text);
      
      props.showAlert("Copied to Clipboard","success"); 
      
    }

    const handleSpace=()=>{
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
    <div className="container my-4">
    <h1>{props.heading}</h1>
    <div className="mb-3">
  
    <textarea className="form-control my-4" value = {text} onChange={handleOnChange} id="myBox" rows="8"  style={{backgroundColor: props.mode==='dark'?'#1d267b':'white',
        color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2"  onClick={handleUpClickLower} >Convert to Lowercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-3 my-2" onClick={handleClearClick} >Clear Text</button>
    <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={Reverse} >Reverse</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={Undo} >Undo</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy} >Copy text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleSpace} >Remove extra space</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>time to read {(text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008).toFixed(2)} minutes</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}