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
    },[])

    return (
        <div>
            PendingBids
            {
                crops.map((c,id)=>(
                    <div className='' key={id}>
                        <h1>{c.name}</h1>
                        <h1>{c.farmer.name}</h1>
                        <h1>{c.farmer.mobile}</h1>
                        <h1 className='bg-blue-200 w-min'>{user}</h1>

                        {c.bids.filter(obj=>obj.buyer === user).map((b,id)=>(
                            <div className='' key={id}>
                                <h1>{b.buyer} {b.bid}</h1>

                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}
