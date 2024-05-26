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
    <div className='flex flex-col items-center py-5 gap-2'>
      <div className='h-9 sm:w-1/3 bg-gray-200 rounded-lg p-1 flex justify-between w-5/6'>
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

      <div className='w-full h-min'>
          {activeComponent}
      </div>
    </div>
  )
}