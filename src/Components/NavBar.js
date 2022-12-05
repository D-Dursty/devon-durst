import React from "react";
import '../styles/navBar.css';

function NavBar({currentPage, handlePageChange}) {
    return (
      <div className="navBar">
        <ul className="navTabs">
          <li className="navBtn">
            <a href="#about" onClick={()=> handlePageChange("About")}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
          </li>
          <li className="navBtn">
            <a href="#ProjectPage" onClick={()=> handlePageChange("ProjectPage")}
            className={currentPage === 'ProjectPage' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          </li>
          <li className="navBtn">
            <a href="#Contact" onClick={()=> handlePageChange("Contact")}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </li>
          <li className="navBtn">
            <a href="#Resume" onClick={()=> handlePageChange("Resume")}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          </li>
        </ul>
      </div>

    );
  }
  
  export default NavBar;
