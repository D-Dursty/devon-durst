import React from "react";
import '../styles/navBar.css';

import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />       */}
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
      </Container>
    </Navbar>
  );
}

export default NavBar;
