import React from "react";
import '../styles/navBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="navBar">
        <div className="navContainer">
        <ul className="navTabs">
          <li className="navBtn">
            <Link to="/" className="link">ABOUT ME</Link>
          </li>
          <li className="navBtn">
            <Link to="/works" className="link">WORKS</Link>
          </li>
          <li className="navBtn">
            <Link to="/message" className="link">CONTACT</Link>
          </li>
        
        </ul>
        </div> 
      </nav>

    );
  }
  
  export default NavBar;
