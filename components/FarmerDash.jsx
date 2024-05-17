'use client';

import React, { useState } from 'react';
import BidDash from './BidDash';
import AcceptedBids2 from './AcceptedBids2';

export default function FarmerDash() {

  const [isActiveOne, setIsActiveOne] = useState(true);
  const [isActiveTwo,setIsActiveTwo] = useState(false);
  const [activeComponent, setActiveComponent] = useState(<BidDash/>);


  const handleClickOne = () => {
    setIsActiveOne(true);
    setIsActiveTwo(false);
    setActiveComponent(<BidDash/>);
  }

  const handleClickTwo = () => {
    setIsActiveTwo(true);
    setIsActiveOne(false);
    setActiveComponent(<AcceptedBids2/>);
  }


  return (
    <div className='flex flex-col items-center'>
      <h1 className='m-2'>Farmer dash - bids</h1>

      <div className='h-9 w-1/3 bg-gray-200 rounded-lg p-1 flex justify-between'>
        <div 
          className='w-2/5 h-full rounded-lg cursor-pointer p-1 flex justify-center items-center'
          style={{backgroundColor: isActiveOne ? 'white' : 'transparent'}}
          onClick={handleClickOne}
        >my crops</div>

        <div 
          className='w-2/5 h-full rounded-lg cursor-pointer p-1 flex justify-center items-center transition duration-700'
          style={{backgroundColor: isActiveTwo ? 'white' : 'transparent'}}
          onClick={handleClickTwo}
        >accepted</div>
      </div>

      <div className='w-full h-min bg-green-300'>
          {activeComponent}
      </div>
    </div>
  )
}