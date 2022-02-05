import React from 'react';
import Button from '../Button';

export default function Footer() {
  return <div className='final'>
      <div className='started'>
        <h1>Ready to get started?</h1>
        <Button text={'Get Started'} link={'/signup'}/>
      </div>
      <div className='footer'>
      <div className='first'>
        <img src='https://res.cloudinary.com/avp1813/image/upload/v1643715225/codex/p76mfwajn9jx1s86scek.png' alt='Logo'/>
        <p>&copy; 2022 DeliverIt<br></br>Proudly made by Faiz and Ahmed</p>
      </div>
      </div>
  </div>
}
