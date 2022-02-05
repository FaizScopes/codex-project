import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Address from './App/Address';
import Billing from './App/Billing';
import Confirm from './App/Confirm';

export default function Add() {

    const [current, setCurrent] = useState(0);
    const [title, settitle] = useState('');
    const [drop, setdrop] = useState('');
    const [pick, setpick] = useState('');
    const [card, setCard] = useState();
    const [alert, setalert] = useState();


    
    const titleRef = useRef();
    const pickupRef = useRef();
    const dropRef = useRef();
    const cardRef = useRef();




    useEffect(() => {
      if(!localStorage.getItem('loggedIn')) {
         window.location.href = '/login'
      }
     }, []);

  function next() {
   
    var inputs = [...document.getElementsByTagName('input')]
    

     if(current !== 2) {
    if(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '') {
     
        setalert(true)
      return
    }
  }

    current === 0 && settitle(titleRef.current.value)
    current === 0 && setpick(pickupRef.current.value)
    current === 0 && setdrop(dropRef.current.value)

    if(current === 1) {
    var temp = cardRef.current.value
    current === 1 && setCard(temp.substring(0, temp.length - 6) + '****')
    }
    
    setalert(false)
    setCurrent(current + 1)
    
    if(current === 2) {
        if(localStorage.getItem('orders') === '' || !localStorage.getItem('orders')) {
            localStorage.setItem('orders', '[]')
        }
        var orders = JSON.parse(localStorage.getItem('orders'))
        
        orders.push({title: title})
        localStorage.setItem('orders', JSON.stringify(orders))
        window.location.href = '/app'
        
    
        
        
        
    }

    
  }

  
  return <div className='add-order'>
  {current === 0 && <Address next={next} title={titleRef} pickup={pickupRef} drop={dropRef} alert={alert} setalert={setalert}/>}
  {current === 1 && <Billing next={next} card={cardRef} alert={alert} setalert={setalert}/>}
  {current === 2 && <Confirm next={next} pick={pick} drop={drop} card={card}/>}


  </div> 
}
