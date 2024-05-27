'use client';

import AddCropForm from '@/components/AddCropForm';
import { useEffect, useState } from 'react';


export default function Addcrop() {
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
      return <AddCropForm/>
  }else{
      return <h1>only farmer can access</h1>
  }
}