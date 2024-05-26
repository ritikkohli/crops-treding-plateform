// For buyers 
'use client';

import React, { useState, useEffect } from 'react';

export default function AcceptedBids() {
    const [bids,setBids] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch('api/acceptedbid/getbid');
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
            {bids && bids.map((b,id)=>(
                <div key={id} className='border bg-green-300 border-1 hover:bg-green-400 p-1'>
                    <h1>crop - {b.crop.name} ({b.crop.variety})</h1>
                    <h1>bid - INR {b.ammount}</h1>
                    <h1>farmer - {b.farmer.name}</h1>
                    <h1>from - {b.farmer.district},{b.farmer.state}</h1>
                    <h1>contact - {b.farmer.mobile}</h1>
                </div>
            ))}
        </div>
  )
}
