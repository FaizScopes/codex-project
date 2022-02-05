import React from 'react';
import { useState, useEffect } from 'react';

export default function Login() {

  useEffect(() => {
    if(localStorage.getItem('loggedIn')) {
       window.location.href = '/app'
    }
   }, []);
   
  const [alert, setalert] = useState(false);

  


  function enter() {
    //Just for mock without any auth or database

    var inputs = [...document.getElementsByTagName('input')]
    
   


    if(inputs[0].value === '' || inputs[1].value === '') {
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
      <h1>Login</h1>
      <div className='form'>
        <div className='form-row'>
          <span className='form-text'>Email</span>
          <input type="email" autoComplete='false' required/>
        </div>
        <div className='form-row'>
          <span className='form-text'>Password</span>
          <input type="password" autoComplete='false' required/>
        </div>
        <div className='form-row click'>
        <button className='button' onClick={enter}>Login</button>
        </div>
      </div>
      <div className='form-row'>
      <a href='/signup'>Don't have an account?</a>
        </div>
        <br></br>
        <div className='form-row'>
      <a href='/'>Go back to home</a>
        </div>
    </div>
  </div> 
}
