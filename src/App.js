
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor='#343a40';
    }else{
        setMode('light');
        document.body.style.backgroundColor='white';
    };
    console.log(mode);
    
   
};

  return (
  <>
  {/* <Router> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert="please this is just the test."/> */}
    <div className="container">
    {/* <Switch>
          <Route exact path="/about">
            <About  />
          </Route> */}


          {/* exact ko kaam banya /users ra /users/home path use garda exactly tei path ma lagxa */}
          {/* hamro yo case ma chai farak pardeina tara use gareko ramro */}


          {/* <Route exact path="/">          */}
            <TextForm heading="Enter your text to analyze" mode={mode}/>
          {/* </Route>
      </Switch> */}

    </div>
    {/* </Router> */}
  </> 
  );
}

export default App;
