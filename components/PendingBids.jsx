// 

'use client';

import React, { useState, useEffect } from 'react';

export default function PendingBids() {
    const [crops, setCrops] = useState([]);
    const [user,setUser] = useState('');

    const getData = async () => {
        try {
            const res = await fetch('api/bids/myBids');
            const {data,userId} = await res.json();
            if(data){
                setCrops(data);
            }
            console.log(data,userId);
            setUser(userId)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[getData])

    return (
        <div>
            {
                crops.map((c,id)=>(
                    <div className='border border-1 bg-green-300 cursor-pointer p-1 hover:bg-green-400' key={id}>
                        <h1>crop - {c.name}</h1>
                        <h1>farmer - {c.farmer.name}</h1>
                        <h1>contact - {c.farmer.mobile}</h1>

                        {c.bids.filter(obj=>obj.buyer === user).map((b,id)=>(
                            <div className='' key={id}>
                                <h1>amount - INR {b.bid}</h1>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}
