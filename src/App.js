// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react'
import Alert from './component/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// let name="Yogesh Tiwari";
function App() {
  const[mode,setMode]=useState('light');//whether dark mode enable or not
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-black')
  document.body.classList.remove('bg-white')

 }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    // if(mode==='light'){
      // setMode('dark')
      // document.body.style.backgroundColor="grey";
      // showAlert("Dark Mode Enabled","Success")
      // setInterval(() => {
      //   document.title="Your Site is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Download Our App Now !!!"
      // }, 1500);

    }
    // else{
      // setMode('light')
      // document.body.style.backgroundColor="white";
      // showAlert("Light Mode enabled","Success")
    // }
  // }
  return (
    <>
    <Router>
    <Navbar title="YVT" mode={mode} aboutUs=" About Us" toggleMode={toggleMode}/>
<div className="contain my-3">
  <Alert alert={alert}/>
  <Routes>{/* in new version we use Routes instead of Switche*/}
  {/* /user --> component1
      /user/home-->component2  ,should use exact for proper path 
  */}

  <Route exact path='about' element={<About/>} />
          <Route path='/' element={<TextForm mode={mode} heading ="Enter the next to analyse"/> } />
        </Routes>
  {/* <About/> */}
   <TextForm mode={mode} heading ="Enter the next to analyse"/>


  </div>
  </Router>
    </>
   
  );
}

export default App;
