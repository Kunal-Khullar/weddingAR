import React from 'react'
import './product.css'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const Product = () => {
    return (
        <div>
            <div className="pattern"></div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">WeddingAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Our Product</Nav.Link>
      <Nav.Link href="#link">How it Works</Nav.Link>
      <Nav.Link href="#link">Demo</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Product
