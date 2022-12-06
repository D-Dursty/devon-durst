import React from 'react';

import Page from "./components/Page";
import Header from "./components/Header";
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