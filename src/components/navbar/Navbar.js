import React from 'react'
import './navbar.css'
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AOS from "aos";
import "aos/dist/aos.css";
const Navibar = () => {
    return (
        <div>
             <div className="pattern"></div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">WeddingAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="c4" href="#product">Our Product</Nav.Link>
      <Nav.Link className="c4" href="#link">How it Works</Nav.Link>
      <Nav.Link className="c4" href="#link">Demo</Nav.Link>
      <Nav.Link className="c4" href="#link">Contact</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navibar
