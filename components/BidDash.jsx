'use client';

import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BidDash() {
    const [crops, setCrops] = useState([]);
    const [isExpanded, SetIsExpanded] = useState(false);

    const handleClick = async (c,b) => {
        // e.preventDefault();
        try {
            console.log('ok',c,b)
            // api call
            const res = await fetch('api/acceptedbid/createbid',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ammount: b.bid,
                    crop: c._id,
                    buyer: b.buyer._id
                })
            })
            if(res.ok){
                console.log('bid accepted');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
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
        getData();
    },[])

  return (
    <div className='px-5'>
        <div className='m-1 flex justify-end'>
            <Link className='bg-gray-400 rounded-lg p-1' href={'addcrop'}>add +</Link>
        </div>
        <div className='flex gap-5 flex-wrap flex-col items-center'>
            {
                crops.map((c,id)=>(
                    <div className='w-5/6 sm:w-1/3 bg-green-300 rounded-md p-3 flex flex-col gap-2' key={id}>
                            <Image
                                className='rounded-md'
                                src={`/${c.name}.jpg`}
                                width={400}
                                height={400}
                            />
                            <h1>{c.name} ({c.variety})</h1>
                            <p>{c.quantity} kg</p>
                            <p className='bg-yellow-400 px-1 w-min text-sm rounded-md font-bold'>{c.stage}</p>
                            <div className='flex flex-col gap-1'>
                                <h1 className='bg-yellow-300 p-1 rounded-md mt-2' >total bids - {c.bids.length}</h1>
                                {
                                    c.bids.map((b,id)=>(
                                        <div key={id} className='flex justify-between bg-yellow-200 m-1 rounded-md'>
                                        <h1 className='m-1'>{b.buyer.name}</h1>
                                        <h1 className='m-1'>{b.bid}</h1>
                                        <button className='bg-yellow-300 rounded-r-md p-1' onClick={()=>handleClick(c,b)}>accept now</button>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}