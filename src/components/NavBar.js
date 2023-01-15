import React from "react";
import '../styles/navBar.css';

import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';

// function NavBar() {
//   return (
//     <nav className="navBar">
//       <div className="navContainer">
//         <ul className="navTabs">
//           <li className="navBtn">
//             <Link to="/" className="link">
//               ABOUT ME
//             </Link>
//           </li>
//           <li className="navBtn">
//             <Link to="/works" className="link">
//               WORKS
//             </Link>
//           </li>
//           <li className="navBtn">
//             <Link to="/message" className="link">
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navContainer">
        <span>
        <ul className="navTabs">
          <li className="navBtn">
            <LinkContainer to="/" className="link">
             <Nav.Link><span>ABOUT</span> </Nav.Link> 
            </LinkContainer>
          </li>
          <li className="navBtn">
            <LinkContainer to="/works" className="link">
             <Nav.Link>WORKS</Nav.Link> 
            </LinkContainer>
          </li>
          <li className="navBtn">
            <LinkContainer to="/message" className="link">
             <Nav.Link>CONTACT</Nav.Link> 
            </LinkContainer>
          </li>
        </ul>
        </span>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
