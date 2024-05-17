'use client';

import CropsDash from '@/components/CropsDash';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {

  const router = useRouter();

  const getUserType = async () => {
    try {
      const res = await fetch('api/users/usertype');
      const {user} = await res.json();
      const {isFarmer} = user;
      if(isFarmer){
        router.push('/farmerDash');
      }else{
        router.push('/buyerDash');
      }
      console.log('ok',isFarmer);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUserType();
  },[])

  return (
    <div className=''>
      <h1>dash</h1>
        {/* <CropsDash/> */}
    </div>
  )
}