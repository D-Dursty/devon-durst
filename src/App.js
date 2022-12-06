import React from 'react';

import Header from "./comps/Header";
import Page from "./comps/Page";
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