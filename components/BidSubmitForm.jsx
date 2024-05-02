'use client';

import React, { useState } from 'react';

export default function BidSubmitForm(props) {
  const [bid, setBid] = useState(2275);
  console.log(props.crop)

  const increaseByHundred = (e) => {
    e.preventDefault();
    setBid(bid+100);
  }

  const increaseByTen = (e) => {
    e.preventDefault();
    setBid(bid+10);
  }

  const decreaseByHundred = (e) => {
    e.preventDefault();
    setBid(bid-100);
  }

  const decreaseByTen = (e) => {
    e.preventDefault();
    setBid(bid-10);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bid/addBid',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            bid,
            crop: props.crop
        })
      });
      if(res.ok){
        const temp = await res.json();
        console.log(temp);
    }else{
        console.log('bid submission failed');
    }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h1>BidSubmitForm</h1>
        <h1>MSP : 2275</h1>
        <form className='flex flex-col gap-4 bg-green-200' onSubmit={handleSubmit}>
          <h1>{bid}</h1>
          <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={increaseByHundred}>+100</button>
          <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={decreaseByHundred}>-100</button>
          <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={increaseByTen}>+10</button>
          <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={decreaseByTen}>-10</button>
          <input type='submit' />
        </form>
    </div>
  )
}