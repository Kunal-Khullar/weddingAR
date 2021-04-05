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
                    <div className='applink'>
                    <img src="https://img.icons8.com/officel/50/000000/mac-os.png"/>
                    </div>
                    <div className='applink'>
                    <img src="https://img.icons8.com/dusk/64/000000/google-play.png"/>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            </div>
        </div>
    )
}

export default Contact
