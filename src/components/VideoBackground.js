import React from 'react';
import Fire from '../images/Fire.mp4';
const VideoBackground =()=>{
  return(
    <video autoPlay={true} muted loop={true} className='video-background'>
      <source src={Fire} />
    </video>
  )
}
export default VideoBackground;
