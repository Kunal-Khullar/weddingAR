import React from 'react'
import './working.css'
import {Animated} from "react-animated-css";
const Working = () => {
    return (
        <div>
            <div id="works" className="mid_container">
                <h1>How it works</h1>
                <div className="work_container">
                    <div data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out-cubic" className="steps">
                        <div className="imgcontainer">
                    <img className="imgs" src="https://img.icons8.com/officel/2x/online-payment---v2.gif"/>
                    </div>
                    <h3 className="headings">Book</h3>
                    <p className="steps_des">Book your models and upload your photos and invite your friends.</p>
                    </div>
                    <div id="second" data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out-cubic" className="steps">
                    <div className="imgcontainer">
                        <img className="imgs" src="https://img.icons8.com/office/2x/upload--v2.gif" /></div>
                        <h3 className="headings">Upload</h3>
                        <p className="steps_des">Book your models and upload your photos and invite your friends.</p>
                    </div>
                    <div data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out-cubic" className="steps">
                    <div className="imgcontainer">
                        <img className="imgs" src="https://img.icons8.com/color/2x/invitation--v2.gif" /></div>
                        <h3 className="headings">Invite</h3>
                        <p className="steps_des">Book your models and upload your photos and invite your friends.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working
