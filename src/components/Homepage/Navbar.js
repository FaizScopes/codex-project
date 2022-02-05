import React from 'react';
import Button from '../Button';

export default function Navbar() {
  return <div className='navbar'>
      <h2 className='brand' onClick={() => {window.location.href = '/'}}>deliverit</h2>

      <div className='links'>
      <a href='/safety' className='nav-link'>Safety and Privacy</a>
      <br></br>
      <Button text='Get Started' link='/signup'/>
      </div>
  </div>;
}
