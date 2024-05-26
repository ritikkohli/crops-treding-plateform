'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SelectUserType() {

  const router = useRouter();

  function handleClickOne(e){
    e.preventDefault();

    router.push('/farmerRegister')
  }


  function handleClickTwo(e){
    e.preventDefault();

    router.push('/buyerRegister')
  }

  return (
    <div className='flex flex-col gap-3 sm:w-1/4 absolute right-1/2 top-1/4 translate-x-1/2 w-full'>
        <button
            onClick={handleClickOne}
            className='bg-green-500 rounded-lg px-4 py-2 text-white text-xl font-bold'
        >farmer</button>
        <h1 className='text-center'>OR</h1>
        <button
            onClick={handleClickTwo}
            className='bg-blue-500 rounded-lg px-4 py-2 text-white text-xl font-bold'
        >buyer</button>
    </div>
  )
}