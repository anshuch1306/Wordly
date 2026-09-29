import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light");
  const [alert,setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#00185e';
      document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been Enabled","success");
    }
  }
  return (
    <>
   <Router>
      {/* <Navbar title = "Anshu" feature="Good Feature"/> */}
      <Navbar mode = {mode} title = "Wordly" feature="About" toggleMode = {toggleMode}  />
      <Alert alert={alert} />    
      <div className="container">
      <Routes>
      <Route
      path="/"
       element={
       <TextForm heading = "Try Wordly - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode} 
       showAlert={showAlert}
       />
       }
      />
      <Route path= "/about" element={<About mode = {mode}/>}/>
       </Routes>  
      </div>
      

</Router>
</>
  );
}

export default App;
