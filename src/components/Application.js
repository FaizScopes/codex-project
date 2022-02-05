import React, { useEffect, useState } from 'react';
import BingMapsReact from 'bingmaps-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faCheck } from '@fortawesome/free-solid-svg-icons'


export default function Application() {

  function randomNum(min, max) { 
    return (Math.random() * (max - min ) + min)
  }

  const [orders] = useState(JSON.parse(localStorage.getItem('orders')));
  const [current, setCurrent] = useState();


    useEffect(() => {
     if(!localStorage.getItem('loggedIn')) {
        window.location.href = '/login'
     }
    }, []);

    function getRandomPinLat() { //Gives random latitude in a vicinity for map pushpin
      var lat = randomNum(25.2202, 25.2507)
      return lat
    }
    function getRandomPinLong() { //Gives random longitude in a vicinity for map pushpin
      var long = randomNum(55.27, 55.31)
      return long
    }

 
    

    
    
    
    
  return <div className='application'>

    <div className='top'>
      <div className='orders'>
        <div className='top'>
        <h2>Orders</h2>
        <FontAwesomeIcon icon={faPlusSquare} size='2x' className='add' onClick={() => {window.location.href = '/app/add'}}/>
        </div>
        <ul className='bottom order-list'>
          {orders && orders.map(title => (
            <h1 key={orders.indexOf(title)} onClick={() => {setCurrent(title)}} className={current === title ? 'listel selected': 'listel'}>{title.title}</h1>
          ))}

        </ul>

      </div>
    
      {current && <BingMapsReact
      bingMapsKey={process.env.REACT_APP_BING_MAPS_KEY}
      height="60vh"
      pushPins={[{
        center: {
          latitude: getRandomPinLat(),
          longitude: getRandomPinLong(),
        },
        options: {
          title: current.title + " Delivery",
          color: 'red'
        },
      }]}
      mapOptions={{
        allowHidingLabelsOfRoad: 'false',
        navigationBarMode: "square",
      }}
      width="60%"
      viewOptions={{
        center: { latitude: getRandomPinLat(), longitude: getRandomPinLong() },
        zoom: 13,
        mapTypeId: "aerial",
      }}
    />}

</div>

{current && <div className='status'>
  
  <div className='stat'>
  <div className='circle'>
<FontAwesomeIcon icon={faCheck} size='2x' className='check'/>
</div>
<h3>Ordered</h3>
</div>

<div className='stat'>
  <div className='circle'>
<FontAwesomeIcon icon={faCheck} size='2x' className='check'/>
</div>
<h3>Picked Up</h3>
</div>

<div className='stat'>
  <div className='circle empty'>

</div>
<h3>Delivered</h3>
</div>

</div>}
      
  </div>
}
