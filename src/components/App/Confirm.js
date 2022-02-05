import React from 'react';
import { useState } from 'react';

export default function Confirm({next, pick, drop, card}) {
    
    const [price] = useState(Math.round(Math.random() * 25));

  return <div className='box'>
  <h1>Confirm your order</h1>
  <div className='form'>
    <div className='form-row confirm'>
      
      <h2>You will be shipping a package from {pick} to {drop} with {card}</h2>
    </div>
    <br></br>
    <br></br>
    <br></br>

    <div className='form-row confirm'>
      
      <h2>Shipping: {price} AED<br></br>Tax (5%): {(5/100 * price).toFixed(2)} AED<br></br>Total Price: {((5/100 * price) + price).toFixed(2)} AED</h2>
    </div>
    <div className='form-row click'>
    <button className='button' onClick={next}>Confirm</button>
    </div>
  
    
    <div className='form-row'>
  <a href='/app'>Go back</a>
    </div>
    </div>
</div>
}
