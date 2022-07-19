// import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
      {/* <NavBar /> */}
      <NavBar titleName="TextUtils" aboutText="About" mode={mode}
      toggleMode={toggleMode}/>
      <div className="container my-3">
         <TextForm heading = "Enter the text to analyze below" mode={mode}/> 
        
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
