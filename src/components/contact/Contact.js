import React from 'react'
import './contact.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple} from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div>
            <div id="contacts">
            <Row>
                <Col id='leftcol'>
                   <a href="#"> <div className='applink'>
                    <img src="https://img.icons8.com/officel/50/000000/mac-os.png"/>
                    <div className='links'>
                    <h4>Available on the </h4>
                    <h2>App Store</h2>
                    </div>
                    
                    </div>
                    </a>
                    <a href="#">
                    <div className='applink'>
                    <img src="https://img.icons8.com/dusk/64/000000/google-play.png"/>
                    <div className='links'>
                    <h4>GET IT ON </h4>
                    <h2>Google Play</h2>
                    </div>
                    </div>
                    </a>

                </Col>
                <Col>
                <div className='links2'></div>
                </Col>
            </Row>
            <div className='social'></div>
            </div>
        </div>
    )
}

export default Contact
