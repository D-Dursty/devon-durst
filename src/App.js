import React from 'react';

import Header from "./components/Header";
import Page from "./components/Page";
import './App.css'

function App() {
  return ( 
    <div className="main">
        <div>
            <Header/>
            <Page/>
        </div>
    </div>
  )
  }

export default App;