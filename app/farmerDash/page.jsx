'use client';

import { useEffect, useState } from 'react';
import FarmerDash from '@/components/FarmerDash';

export default function Farmerdash() {
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
      return <FarmerDash/>
  }else{
      return <h1>only farmer can access</h1>
  }
}