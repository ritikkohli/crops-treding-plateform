'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function BidSubmitForm(props) {
  const [bid, setBid] = useState(0);
  const [crop, setCrop] = useState({});
  const [msp, setMsp] = useState(0);
  const [isExpanded, SetIsExpanded] = useState(false);
  const [rotate, setRotate] = useState(0);


  const router = useRouter();

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
    if(bid <= msp){
      return
    }else if(bid-100 <= msp){
      setBid(msp);
    }else{
      setBid(bid-100);
    }
  }

  const decreaseByTen = (e) => {
    e.preventDefault();
    if(bid <= msp){
      return
    }else if(bid-10 <= msp){
      setBid(msp);
    }else{
      setBid(bid-10);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/crops/bidSubmit',{
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
        toast.success('bid submitted successfully');
        router.push('/');
        }else{
          console.log('bid submission failed');
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async (e) => {

    try {
      const cropInfo = await fetch(`/api/crops/getCrops/${props.crop}`);
      const {data} = await cropInfo.json();
      console.log(data);
      setCrop(data);
      setBid(data.msp);
      setMsp(data.msp);
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = () => {
    setRotate(rotate + 180);
    SetIsExpanded(!isExpanded)
  }

  useEffect(()=>{
    getData();
  },[])

  if(crop){
    return (
      <div className='bg-blue-400 p-2 sm:w-1/4 absolute right-1/2 translate-x-1/2 w-5/6 rounded-lg mt-2'>
          <h1 className='text-center'>BidSubmition</h1>
          <div className='bg-red-200 mb-5 p-2 rounded-md'>
            <h1>{crop.name}</h1>
            <p>variety : {crop.variety}</p>
            <h1>stage : {crop.stage}</h1>
          </div>
          <form className='flex flex-col gap-4 bg-green-200 rounded-md p-2' onSubmit={handleSubmit}>
            <h1 className='bg-black text-white p-2 rounded-md text-center'>INR {bid}</h1>
            <div className='flex justify-between'>
              <div className=''>
                <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center mb-2' onClick={increaseByTen}>+10</button>
                <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={increaseByHundred}>+100</button>
              </div>
              <div className=''>
                <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center mb-2' onClick={decreaseByTen}>-10</button>
                <button className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center' onClick={decreaseByHundred}>-100</button>
              </div>
            </div>
            <input type='submit'
                  className='bg-green-600 w-16 rounded-md p-2 flex items-center justify-center cursor-pointer w-full'
            />
          </form>
          <div className=''>
              <div className='bg-yellow-300 p-1 px-2 rounded-md mt-2 flex justify-between items-center'>
                <h1 className=''>total bids - {crop.bids && crop.bids.length}</h1>
                <i
                  className="ri-arrow-down-s-line cursor-pointer font-bold text-xl" 
                  onClick={handleClick}
                  style={{ transform: `rotate(${rotate}deg)` }}
                />
              </div>
              {
                isExpanded && crop.bids && crop.bids.map((b,id)=>(
                  <div key={id} className='flex justify-between bg-yellow-200 m-1 p-1 rounded-md'>
                      <h1>{b.buyer.name}</h1>
                      <h1>{b.bid}</h1>
                  </div>
                ))
              }
          </div>
      </div>
    )
  }
  else{
    return <h1>loading ... </h1>
  } 
}