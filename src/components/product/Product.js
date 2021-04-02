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
           
      <div className="top_container">
        <Row id="#product">
          <Col  className="product_details col-md-7 ">
            <Row id="products">
              <img id="logo" src="https://cdn1.iconfinder.com/data/icons/love-wedding-vol-2/512/wedding_photo_photography_memento-512.png" alt="" />
              <h1>Product Name</h1>
            </Row>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Button className="btn1 btn-success">Buy Now</Button>
          </Col>
          <Col className="product_gif col-md-5 ">
            <video autoPlay muted loop>
              <source src="https://cdn.dribbble.com/users/6745/screenshots/8195589/media/3d3e04346b2cf25c5efe9ceafcceb315.mp4" type="video/mp4" />
            </video>
          </Col>
        </Row>

      </div>
        </div>
    )
}

export default Product
