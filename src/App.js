import React from 'react';

import Page from "./Components/Page";
import Header from "./Components/Header";
import './app.css'

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