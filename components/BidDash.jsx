'use client';

import React, { useState , useEffect} from 'react';

export default function BidDash() {
    const [crops, setCrops] = useState([]);

    const getData = async (e) => {
        try {
            const res = await fetch('api/crops/getMyCrops');
            const {data} = await res.json();
            if(data){
                setCrops(data);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='bg-red-400 p-2 px-5'>
        <h1 className='bg-black text-white p-2 mb-2 rounded-md text-center'>our crops</h1>
        {
            crops.map((c,id)=>(
                <div className='w-1/3 bg-green-200 rounded-md p-3 flex flex-col gap-2' key={id}>
                        <img
                            className='rounded-md'
                            src={'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        />
                        <h1>{c.name} ({c.variety})</h1>
                        <p>{c.quantity} kg</p>
                        <p className='bg-yellow-400 px-1 w-min text-sm rounded-md font-bold'>{c.status}</p>
                        <div className='flex flex-col gap-1'>
                            <h1 className='bg-yellow-300 p-1 rounded-md mt-2'>total bids - {c.bids.length}</h1>
                            {
                                c.bids.map((b,id)=>(
                                    <div key={id} className='flex justify-between bg-yellow-200 m-1 rounded-md'>
                                    <h1 className='m-1'>{b.buyer.name}</h1>
                                    <h1 className='m-1'>{b.bid}</h1>
                                    <button className='bg-yellow-300 rounded-r-md p-1'>accept now</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            ))
        }
    </div>
  )
}
