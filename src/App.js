
import React, { useState } from 'react';

import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const[mode , setMode] = useState('light');
  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
   
  //   <Router>
      <>
         <Navbar title="TextOperations" about='About US' mode={mode} togglemode={toggleMode}/>
         {/* <div className="container my-3">
           <Routes>  {/* Use 'Routes' instead of 'Switch' */}
           {/* <Route exact path="/about" element={<About />} /> */} 
            {/* //  <Route exact path="/" element={<Textform heading="Enter text below" mode={mode} />} /> */}
            <Textform heading="Enter text below" mode={mode} />
           {/* </Routes>
         </div> */}
       </>
  // </Router>
    
  );
}

export default App;


