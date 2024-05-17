'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CropsDash() {
    const [crop, setCrop] = useState([]);

    const getData = async (e) => {

        const res = await fetch('api/crops/getCrops',{ cache: 'no-store' });
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
                            className='rounded-md h-full w-full'
                            src={c.image} 
                        />
                        <h1>{c.name} ({c.variety})</h1>
                        <p>{c.quantity} kg</p>
                        <p className='bg-yellow-400 px-1 w-min text-sm rounded-md font-bold'>{c.stage}</p>
                        <Link href={`/bidsubmit/${c._id}`} className='bg-green-600 rounded-md px-2 px-1 text-white font-bold text-lg'>bid now</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
