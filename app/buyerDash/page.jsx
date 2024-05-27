'use client';

import BuyerDash from '@/components/BuyerDash';
import { useEffect, useState } from 'react';

export default function Buyerdash() {
  const [isFarmer, setIsFarmer]  = useState(false);


  const getUserType = async () => {
    const res = await fetch('api/users/usertype');
    const {user} = await res.json();
    const {isFarmer} = user;
    console.log(isFarmer);
    setIsFarmer(isFarmer);
  }

  useEffect(()=>{
    getUserType()
  },[])

  if(isFarmer){
    return <h1>only buyer can access</h1>
  }else{
      return <BuyerDash/>
  }
}