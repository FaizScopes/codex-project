import React from 'react';
import Button from '../Button';

export default function Safety() {
  return <div className='safety'>


<div className='safety-text'>
<h2>Your safety is <br></br>our first priority</h2>
<p>All parcels and items are scanned and delivered contactless and while maintaining a 2 meter distance</p>
<Button text='More information' link='/safety' long={true}/>
</div>

<img src='https://res.cloudinary.com/avp1813/image/upload/v1643698482/codex/iprcgpryos51qpyeop7g.png' alt='Your safety is our priority'/>
  </div>
  
}
