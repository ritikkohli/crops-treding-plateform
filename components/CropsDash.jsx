'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function CropsDash() {
    const [crop, setCrop] = useState([]);

    const getData = async (e) => {

        const res = await fetch('api/crops/getCrops');
        const {data} = await res.json();

        if(data){
            setCrop(data);
        }

        console.log(data);
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <h1>crops listing here . . .</h1>
        <div className='flex gap-4 mx-10 '>
            {
                crop.map((c,id)=>(
                    <div className='w-48 h-26 bg-green-200 rounded-md p-3 cursor-pointer flex flex-col gap-2' key={id}>
                        <img
                            className='rounded-md'
                            src={'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        />
                        <h1>{c.name} ({c.variety})</h1>
                        <p>{c.quantity} kg</p>
                        <p className='bg-yellow-400 px-1 w-min text-sm rounded-md font-bold'>{c.status}</p>
                        <Link href={`/bidsubmit/${c._id}`} className='bg-green-600 rounded-md px-2 px-1 text-white font-bold text-lg'>bid now</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
