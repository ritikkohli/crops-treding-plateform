'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CropsDash() {
    const [crop, setCrop] = useState([]);

    useEffect(()=>{
        const getData = async (e) => {
            try{
                const res = await fetch('api/crops/getCrops',{ cache: 'no-store' });
                const {data} = await res.json();
        
                if(data){
                    setCrop(data);
                }
        
                console.log(data);
            }
            catch (error){
                console.log(error);
            }
        }
        getData();
    },[])

  return (
        <div className='flex flex-col sm:flex-row items-center gap-4 my-4'>
            {
                crop.map((c,id)=>(
                    <div className='sm:w-48 w-4/6 h-26 bg-green-300 rounded-md p-3 cursor-pointer flex flex-col gap-2' key={id}>
                        <Image
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
  )
}
