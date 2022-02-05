import React from 'react';

export default function Billing({next, card, alert, setalert}) {
  return <div className='box'>
    {alert && <div className="alert" id='alert'>
  <span className="closebtn" onClick={() => {setalert(false)}}>&times;</span>
  Please input all values.
</div>}
  <h1>Billing</h1>
  <div className='form'>
    <div className='form-row'>
      
      <input type="text" autoComplete='false' placeholder='Cardholder Name'/>
    </div>
    <div className='form-row'>
      
      <input type="number" autoComplete='false' placeholder='Card Number' ref={card}/>
    </div>
    <div className='form-row'>
      
      <input type="number" autoComplete='false' placeholder='CVV'/>
    </div>
    <div className='form-row'>
      
      <input type="date" autoComplete='false' placeholder='Expiration Date'/>
    </div>
    <div className='form-row click'>
    <button className='button' onClick={next}>Next</button>
    </div>
  </div>
  
    <br></br>
    <div className='form-row'>
  <a href='/app'>Go back</a>
    </div>
</div>
}
