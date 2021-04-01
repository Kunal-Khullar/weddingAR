import React from 'react'
import './product.css'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Product = () => {
    return (
        <div>
            <div className="pattern"></div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">WeddingAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="c4" href="#home">Our Product</Nav.Link>
      <Nav.Link className="c4" href="#link">How it Works</Nav.Link>
      <Nav.Link className="c4" href="#link">Demo</Nav.Link>
      <Nav.Link className="c4" href="#link">Contact</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      <div className="top_container">
        <Row>
          <Col className="product_details col-md-8 ">
            <Row>
              logo 
              product name
            </Row>
            <p>Details</p>
            <Button>Buy Now</Button>
          </Col>
          <Col className="product_gif col-md-4 "></Col>
        </Row>

      </div>
        </div>
    )
}

export default Product
