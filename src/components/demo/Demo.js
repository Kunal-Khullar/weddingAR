import React from 'react'
import './demo.css'
import { useVideojs } from 'react-videojs-hook';
 
import 'video.js/dist/video-js.css';
const Demo = () => {
 
    return (
        <div>
            <div className="videoplayer">
              
         <div className="video"
            data-aos="fade-down"
           data-aos-delay="50"
           data-aos-duration="500"
           data-aos-easing="ease-in-out-cubic"
         >
         <h1>Product Demo</h1>
                <p>Here is a video showing the complete working of our product</p>
           <div >
           <video id="videos" poster="https://i.pinimg.com/originals/77/29/c3/7729c3395007be06ca06c35ccd799138.png"  controls>
             <source src="https://c4604efbcf2f76c02fd8-0c3ebf250b59f974a474a645a5bdda06.ssl.cf2.rackcdn.com/TrekkVideos/ForTrekkwWeb_Think%202016.mp4" type="video/mp4"></source>
           </video>
          </div>
         </div>
            </div>
        </div>
    )
}

export default Demo
