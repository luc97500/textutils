
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import React, { useState } from 'react';

function App() {
 const [mode,setMode] = useState('light')
 const toggleMode =() =>{
  if(mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor='grey'
  }
  else {
    setMode('dark')
    document.body.style.backgroundColor='white'
   }
  }
  return (
    <>
  
    <Navbar title="TextUtils" AboutMe="About" mode={mode}  toggleMode={toggleMode}/>
   <div className="container mx-4">
   
   <TextForm heading="Enter The Text That Analyse Here " mode={mode}/>
   <div className="container mx-4">
   {/* <About/> */}
   </div>
  
   </div>
    </>
    
  )
}
export default App;
