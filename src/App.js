// import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar titleName="TextUtils" aboutText="AboutTextUtils" />
      <div className="container my-3">
         <TextForm heading = "Enter the text to analyze below"/> 
        
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
