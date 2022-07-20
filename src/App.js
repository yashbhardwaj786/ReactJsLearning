// import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 3000);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }

  }
  return (
    <>
      {/* <NavBar /> */}
      <NavBar titleName="TextUtils" aboutText="About" mode={mode}
      toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
         <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> 
        
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
