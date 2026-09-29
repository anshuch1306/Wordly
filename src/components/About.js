// import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    let myStyle = {
      color : props.mode ==='dark' ? 'white':'black',
      backgroundColor : props.mode ==='dark' ? '#122346':'#c2c5ca',
    }

    let buttonStyle = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ? '#091428' : '#8b8d91',
}
    
  return (
    <div className="container" >
        <h1 className="my-4"><b>Information</b></h1>
        <div className="accordion" id="accordionExample"  style={myStyle}>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">


      <button className={`accordion-button collapsed ${props.mode === 'dark' ? 'dark-arrow' : 'light-arrow'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={buttonStyle} aria-expanded="true" aria-controls="collapseOne">
        <b>Simplifying Everyday Text Tasks</b>
      </button>

      
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
Wordly is an interactive text utility application built to make text manipulation quick and convenient. With features like uppercase/lowercase conversion, text reversal, extra-space removal, copy, text-to-speech, and dark mode, users can handle everyday text tasks with ease.      </div>
    </div>
  </div>



  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">
      <button  style={buttonStyle}className={`accordion-button collapsed ${props.mode === 'dark' ? 'dark-arrow' : 'light-arrow'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>Smart Text Editor</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={myStyle}>
Wordly is a web-based text utility application that helps users perform common text-editing tasks effortlessly. From changing text cases to removing extra spaces, copying, reversing, and converting text to speech, Wordly brings useful tools together in one place.      </div>
    </div>
  </div>


 <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">
      <button   className={`accordion-button collapsed ${props.mode === 'dark' ? 'dark-arrow' : 'light-arrow'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"   style={buttonStyle}>
        <b>Text-to-Speech Feature</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body " style={myStyle}>
Wordly’s Speak feature converts written text into spoken words. Users can enter or edit text and listen to it using the text-to-speech functionality, making the content easier to hear and understand.  </div>
    </div>
  </div>
    </div>
    </div>
  )
}
