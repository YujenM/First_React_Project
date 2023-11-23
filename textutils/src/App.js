// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About'
import React, { useState } from 'react';
function App() {
  const[template,settemplate]=useState("light");
  const togglemode = () => {
    if (template === 'light') {
      settemplate('dark');
      document.body.style.backgroundColor="#0f172a";
    } else {
      settemplate('light');
      document.body.style.backgroundColor="white";
    }
  };
  return (
    <Router>
      <Navbar title='Text Editor'  template={template} togglemode={togglemode}/>
        <Routes>
          <Route path="/About" element={<About template={template}/>}/>
        
          <Route path="/" element={<TextForm texttitle="Enter your text Here" heading="Total Text" template={template}/>}/>
        </Routes>
    </Router>
  );
}

export default App;