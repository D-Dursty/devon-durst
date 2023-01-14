import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import NavBar from './components/NavBar';
import About from './components/About';
// import Page from "./components/Page";
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume'
import './App.css'

function App() {
  return ( 
    <div className="main">
        <div>
           
            <Router> 
              <Header/>
              <NavBar/>
              <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/message" element={<Contact/>}/>
                <Route path="/works" element={<Project/>}/>
              </Routes>
            </Router>
        </div>
    </div>
  )
  }

export default App;