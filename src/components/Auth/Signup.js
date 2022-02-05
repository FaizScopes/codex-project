import React from 'react';
import { useState, useEffect } from 'react';

export default function Signup() {
  
  const [alert, setalert] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('loggedIn')) {
       window.location.href = '/app'
    }
   }, []);

   
  function enter() {
    //Just for mock without any auth or database
    var inputs = [...document.getElementsByTagName('input')]
    
    
    if(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '') {
      setalert(true)
      return
    }
    localStorage.setItem('loggedIn', 'true')
    window.location.href = '/app'
  }

  return <div className='signup'>
    <div className='box'>

    
    {alert && <div className="alert" id='alert'>
  <span className="closebtn" onClick={() => {setalert(false)}}>&times;</span>
  Please input all values.
</div>}
      <h1>Create an account</h1>
      <div className='form'>
        <div className='form-row'>
          <span className='form-text'>Name</span>
          <input type="text" autoComplete='false' required/>
        </div>
        <div className='form-row'>
          <span className='form-text'>Email</span>
          <input type="email" autoComplete='false' required/>
        </div>
        <div className='form-row'>
          <span className='form-text'>Password</span>
          <input type="password" autoComplete='false' required/>
        </div>
        <div className='form-row click'>
        <button className='button' type='submit' onClick={enter}>Register</button>
        </div>
      </div>
      <div className='form-row'>
      <a href='/login'>Already have an account?</a>
        </div>
    </div>

  </div>
}
