'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!name || !email || !mobile || !password) {
      setError('All field are mandatory !')
      return
    }

    if(password !== verifyPassword) {
      setError('password mismatched !')
      return
    }

    try {
      const resUserExist = await fetch('api/userExists',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExist.json();

      if(user){
        setError("User already exists.");
        return
      }

      const res = await fetch('api/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
          body: JSON.stringify({
            name,
            email,
            mobile,
            password
          })
      })

      if(res.ok){
        const form = e.target;
        form.reset();
        router.push('/login')
      }else{
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("User registration failed.", error);
    }
  }

  return (
    <div className='w-1/4 bg-blue-300 p-2 absolute right-1/2 translate-x-1/2'>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <h1 className=''>Signup</h1>
            <input
              type='text'
              onChange={(e)=>setName(e.target.value)} 
              placeholder='full name' 
              className='border border-2 rounded-md outline-0 p-2 '
             />
            <input 
              type='email' 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder='email' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <input 
              type='tel' 
              onChange={(e)=>setMobile(e.target.value)} 
              placeholder='mobile' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            {/* <input type='text' placeholder='otp' className='border border-2 rounded-md outline-0 p-2 '/> */}
            <input 
              type='password' 
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder='password' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <input
              type='password' 
              onChange={(e)=>setVerifyPassword(e.target.value)} 
              placeholder='verify password' 
              className='border border-2 rounded-md outline-0 p-2 '
            />
            <span className='bg-red-500 text-white rounded-md px-1 w-max'>{error}</span>
            <input
              type='submit' 
              placeholder='' 
              className='cursor-pointer border border-2 rounded-md outline-0 p-2 '
            />
        </form>
    </div>
  )
}
