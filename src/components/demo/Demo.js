import React from 'react'
import './demo.css'
import { useVideojs } from 'react-videojs-hook';
 
import 'video.js/dist/video-js.css';
const Demo = () => {
     const onPlay = (currentTime) => {
    console.log("Video played at: ", currentTime);
  };
 
  const onPause = (currentTime) => {
    console.log("Video paused at: ", currentTime);
  };
 
  const onEnd = (currentTime) => {
    console.log(`Video ended at ${currentTime}`);
  };
 
  const onTimeUpdate = (currentTime) => {
    console.log(`Video current time is ${currentTime}`)
  };
 
    const { vjsId, vjsRef, vjsClassName } = useVideojs({
        src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
        controls: true,
        autoplay: true,
        responsive: true,
        bigPlayButtonCentered: true,
        onPlay,
        onPause,
        onEnd,
        onTimeUpdate,
      });
    return (
        <div>
            <div className="videoplayer">
                <h1>Product Demo</h1>
                <p>Here is a video showing the complete working of our product</p>
                <div data-vjs-player>
      <video ref={vjsRef} id={vjsId} className={vjsClassName}></video>
    </div>
            </div>
        </div>
    )
}

export default Demo
