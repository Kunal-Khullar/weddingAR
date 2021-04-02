import React,{useState} from 'react'
import './navbar.css'
// import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import AOS from "aos";
import "aos/dist/aos.css";
const Navibar = () => {
  window.onscroll = function() {myFunction()};

// Get the navbar
// const navbar = useRef(null)
var myc = "";
const [colorChange, setColorchange] = useState(false);
// Get the offset position of the navbar
function myFunction() {
  console.log("sad")
  if (window.pageYOffset >= 40) {
    setColorchange(true);


  }
  else{
    setColorchange(false);
  }

}
    return (
        <div>
             <div className="pattern"></div>
            <Navbar  className={colorChange ? 'sticky' : ''}  bg="light" expand="lg">
  <Navbar.Brand href="#home">WeddingAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="c4" href="#product">Our Product</Nav.Link>
      <Nav.Link className="c4" href="#works">How it Works</Nav.Link>
      <Nav.Link className="c4" href="#demos">Demo</Nav.Link>
      <Nav.Link className="c4" href="#contacts">Contact</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
   

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

}

export default Navibar
