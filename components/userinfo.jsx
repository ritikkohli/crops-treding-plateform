import React from 'react';
import { signOut } from 'next-auth/react';

export default function Userinfo() {
  return (
    <div className=''>
        <h1 className='bg-red-500 text-white font-bold text-4xl'>User info page</h1>
        <button onClick={()=>signOut()} className=''>
            Signout
        </button>
    </div>
  )
}
