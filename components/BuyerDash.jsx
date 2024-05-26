'use client';

import React, { useState } from 'react';
import PendingBids from './PendingBids';
import AcceptedBids from './AcceptedBids';
import CropsDash from './CropsDash';

export default function BuyerDash() {
  const [isActiveOne, setIsActiveOne] = useState(true);
  const [isActiveTwo,setIsActiveTwo] = useState(false);
  const [isActiveThree,setIsActiveThree] = useState(false);
  const [activeComponent, setActiveComponent] = useState(<CropsDash/>);


  const handleClickOne = () => {
    setIsActiveOne(true);
    setIsActiveTwo(false);
    setIsActiveThree(false);
    setActiveComponent(<CropsDash/>);
  }

  const handleClickTwo = () => {
    setIsActiveTwo(true);
    setIsActiveOne(false);
    setIsActiveThree(false);
    setActiveComponent(<PendingBids/>);
  }

  const handleClickThree = () => {
    setIsActiveTwo(false);
    setIsActiveOne(false);
    setIsActiveThree(true);
    setActiveComponent(<AcceptedBids/>);
  }

  return (
    <div className='flex flex-col items-center gap-2 py-5'>
      <div className='h-9 sm:w-1/3 bg-gray-200 rounded-lg p-1 flex justify-between w-5/6'>
        <div 
          className='w-2/5 h-full rounded-lg cursor-pointer p-1 flex justify-center items-center'
          style={{backgroundColor: isActiveOne ? 'white' : 'transparent'}}
          onClick={handleClickOne}
        >all crops</div>

        <div 
          className='w-2/5 h-full rounded-lg cursor-pointer p-1 flex justify-center items-center transition duration-700'
          style={{backgroundColor: isActiveTwo ? 'white' : 'transparent'}}
          onClick={handleClickTwo}
        >pending</div>

        <div 
          className='w-2/5 h-full rounded-lg cursor-pointer p-1 flex justify-center items-center'
          style={{backgroundColor: isActiveThree ? 'white' : 'transparent'}}
          onClick={handleClickThree}
        >accepted</div>
      </div>

      <div className='w-full h-min'>
          {activeComponent}
      </div>
    </div>
  )
}