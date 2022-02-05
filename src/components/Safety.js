import React from 'react';
import Navbar from './Homepage/Navbar';

export default function Safety() {

    document.body.style.backgroundColor = '#264653'

  return <div className='safety-page'>
      <Navbar/>
      <h1>Safety and Privacy</h1>

      <div className='safety-item'>
          <div className='safety-text'>
              <h2>Contactless Delivery</h2>
              <p>All parcels and items are scanned and delivered contactless and while maintaining a 2 meter distance</p>
         
          </div>
          <div className='safety-img'>
            <img src='https://res.cloudinary.com/avp1813/image/upload/v1643698482/codex/iprcgpryos51qpyeop7g.png' alt='Contactless Delivery'/>
          </div>
      </div>
      <div className='safety-item two'>
          <div className='safety-text'>
              <h2>Privacy</h2>
              <p>We have a strict privacy policy to ensure that the items you send with our service are delivered safely.</p>
         
          </div>
          <div className='safety-img'>
            <img src='https://res.cloudinary.com/avp1813/image/upload/v1643894681/codex/ifmyx7u2zwpll6xaqto1.jpg' alt='Privacy'/>
          </div>
      </div>
  </div>
}
