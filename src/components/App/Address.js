import React from 'react';

export default function Address({next, title, pickup, drop, alert, setalert}) {
  return <div className='box'>
    {alert && <div className="alert" id='alert'>
  <span className="closebtn" onClick={() => {setalert(false)}}>&times;</span>
  Please input all values.
</div>}
  <h1>Add an item</h1>
  <div className='form'>
  <div className='form-row'>
      
      <input type="text" autoComplete='false' placeholder='Add a title for your order' ref={title}/>
    </div>

    <div className='form-row'>
      
      <input type="text" autoComplete='false' placeholder='Pickup Address' ref={pickup}/>
    </div>
    <div className='form-row'>
      
      <input type="text" autoComplete='false' placeholder='Dropoff Address' ref={drop}/>
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
