"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Userinfo() {
  const router = useRouter();

  const handleClick = async ()=>{
    try {
      await fetch('/api/users/logout')
      router.push('/')
    } catch (error) {
      console.log('logout failed', error)
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">name</span>
        </div>
        <div>
          Email: <span className="font-bold">email</span>
        </div>
        <button
          onClick={handleClick}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}
