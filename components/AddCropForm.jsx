'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const crops = [
    {
        name: 'wheat',
        varieties: [
            'DBW-303',
            'DBW-327',
            'PBW-343',
            'HD-2967',
            'WH-1270',
            'DBW-222',
            'PBW-771',
            'HD-3226'
        ],
        msp: 2275,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'rice',
        varieties: [
            'basmati',
            '1509'
        ],
        msp: 1650,
        image: 'https://gonefarmers.com/cdn/shop/products/image_f6749f7f-9436-4b2d-bbd0-267fec6d9822_1024x1024@2x.jpg?v=1624422832'
    },
    {
        name: 'corn',
        varieties: [
            'GANGA-1',
            'GANGA-2',
            'D-765'
        ],
        msp: 2090,
        image: 'https://5.imimg.com/data5/FR/BR/MY-14085389/raw-maize-500x500.jpg'
    }
]

export default function AddCropForm() {

    const [name, setName] = useState('');
    const [varieties, setVarieties] = useState([]);
    const [variety, setVariety] = useState('');
    const [stage, setStage] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [msp, setMsp] = useState(0);
    const [image,setImage] = useState('');


    const changeCropName = (e) =>{
        e.preventDefault();
        setName(e.target.value);
        if(e.target.value == ''){
            setVarieties([]);
            setMsp(0);
        }else{
            setVarieties(crops.find(c => c.name === e.target.value).varieties);
            setMsp(crops.find(c => c.name === e.target.value).msp);
            setImage(crops.find(c => c.name === e.target.value).image);
        }
        console.log(varieties)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await fetch('api/crops/addCrop',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    name,
                    variety,
                    stage,
                    quantity,
                    msp,
                    image
                },
                { cache: 'no-store' })
            });
            if(res.ok){
                const temp = await res.json();
                console.log(temp);
                toast.success('crop added');
                const form = e.target;
                form.reset();
            }else{
                console.log('crop addition failed');
            }

        } catch (error) {
            console.log('crop addition failed',error);
        }
    }

    return (
        <div className='bg-green-200 p-2 absolute right-1/2 m-2 translate-x-1/2 sm:w-1/4 w-5/6 rounded-lg h-5/6'>
            <h1 className='text-center mb-3'>add a crop</h1>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <select 
                    className='border border-2 rounded-md outline-0 p-2'
                    onChange={changeCropName}
                >
                    <option value="">Select crop</option>
                    {
                        crops.map((crp,id)=>(
                            <option value={crp.name} key={id}>{crp.name}</option>
                        ))
                    }
                </select>

                <select 
                    className='border border-2 rounded-md outline-0 p-2'
                    onChange={(e)=>{setVariety(e.target.value)}}
                >
                    <option value="">Select variety</option>
                    {
                        varieties.map((v,id)=>(
                            <option value={v} key={id}>{v}</option>
                        ))
                    }
                </select>

                <select
                    className='border border-2 rounded-md outline-0 p-2'
                    onChange={(e)=>{setStage(e.target.value)}}
                >
                    <option value="">Select stage</option>
                    <option value="growing">growing</option>
                    <option value="ripe">ripe</option>
                    <option value="harvested">harvested</option>
                </select>

                <input 
                    min='1'
                    max='100000'
                    type='number'
                    placeholder='quantity in kg' 
                    className='border border-2 rounded-md outline-0 p-2'
                    onChange={(e)=>{setQuantity(e.target.value)}}
                />

                <input
                    type='submit' 
                    placeholder='Proceeed' 
                    className='cursor-pointer border border-2 border-white rounded-md outline-0 p-2 '
                />
            </form>
        </div>
    )
}