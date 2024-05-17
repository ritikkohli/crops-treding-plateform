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
            <h1>AcceptedBids</h1>
            {bids && bids.map((b,id)=>(
                <div key={id} className=''>
                    <h1>{b.ammount}</h1>
                    <h1>farmer - {b.farmer.name}</h1>
                    <h1>crop - {b.crop.name} {b.crop.variety}</h1>
                </div>
            ))}
        </div>
  )
}
