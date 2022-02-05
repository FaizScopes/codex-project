import React from 'react';
import Button from '../Button';

export default function Main() {
  return <div className='main'>
      <video src='https://res.cloudinary.com/avp1813/video/upload/v1643892532/codex/zp4bieoxgkb8tioimi9m.mp4' muted autoPlay loop/>
      {/* https://res.cloudinary.com/avp1813/video/upload/v1643892351/codex/x2tcpd5rytuvmxdxem5z.mp4 */}

      <div className='main-info'>
          <h2 className='tagline'>From one doorstep to another</h2>
          <p>Our service provides a fast delivery of your products. <br></br><br></br>
Anytime! Anywhere! Anything!</p>
<div>
<Button text='Get Started' link='/signup'/>
</div>
      </div>
  </div>
}
