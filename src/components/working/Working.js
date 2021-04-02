import React from 'react'
import './working.css'
import {Animated} from "react-animated-css";
const Working = () => {
    return (
        <div>
            <div id="works" className="mid_container">
                <h1>How it works</h1>
                <div className="work_container">
                    <div className="steps">
                    <img src="https://img.icons8.com/officel/2x/online-payment---v2.gif"/>
                    <p>Book</p>
                    </div>
                    <div className="steps">
                        <img src="https://img.icons8.com/office/2x/upload--v2.gif"></img>
                        <p>Upload</p>
                    </div>
                    <div className="steps">
                        <img src="https://img.icons8.com/color/2x/invitation--v2.gif"></img>
                        <p>Invite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working
