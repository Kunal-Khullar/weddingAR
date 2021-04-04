import React from 'react'
import './demo.css'
import { useVideojs } from 'react-videojs-hook';
 
import 'video.js/dist/video-js.css';
const Demo = () => {
 
    return (
        <div>
            <div className="videoplayer">
              
         <div className="video">
         <h1>Product Demo</h1>
                <p>Here is a video showing the complete working of our product</p>
           <div >
           <video id="videos" autoPlay controls>
             <source src="https://c4604efbcf2f76c02fd8-0c3ebf250b59f974a474a645a5bdda06.ssl.cf2.rackcdn.com/TrekkVideos/ForTrekkwWeb_Think%202016.mp4" type="video/mp4"></source>
           </video>
          </div>
         </div>
            </div>
        </div>
    )
}

export default Demo
