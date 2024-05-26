// For farmers 
'use client';

import React, { useState, useEffect } from 'react';

export default function AcceptedBids2() {
    const [bids,setBids] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch('api/acceptedbid/getbid2');
            const {data} = await res.json();
            if(data){
                console.log(data);
                setBids(data)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <h1></h1>
            {bids && bids.map((b,id)=>(
                <div key={id} className='border border-1 bg-green-300 p-1 cursor-pointer hover:bg-green-400'>
                    <h1>Crop - {b.crop.name} ({b.crop.variety})</h1>
                    <h1>Bid ammout -  INR {b.ammount}</h1>
                    <h1>By - {b.buyer.name}</h1>
                    <h1>From - {b.buyer.district},{b.buyer.state}</h1>
                    <h1>Contact - {b.buyer.mobile}</h1>
                </div>
            ))}
        </div>
  )
}
