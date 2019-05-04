import React from 'react';
import Fire from '../images/Fire.mp4';
const VideoBackground =(props)=>{
  return(
    <video autoPlay={true} muted loop={true} className='video-background' playsInline>
      <source src={Fire} />
    </video>
  )
}
export default VideoBackground;
