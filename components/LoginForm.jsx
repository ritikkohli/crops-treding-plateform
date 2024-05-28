'use client';

import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!email || !password) {
      setError('All field are mandatory !')
      return
    }

    try {
      const res = await fetch('api/users/login', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      
      if(res.ok){
        const data = await res.json();
        const form = e.target;
        form.reset();
        toast.success('Login successfull');
        console.log(data.data.isFarmer)
        if(data.data.isFarmer){
          router.push('/farmerDash');
        }
        else{
          router.push('/buyerDash');
        }
        router.refresh();
      }else{
        console.log('User login failed')
      }

    } catch (error) {
      console.log('Login failed', error);  
    }
  }


  return (
    <div className='sm:w-1/4 h-5/6 rounded-lg bg-green-300 p-2 absolute right-1/2 translate-x-1/2 mt-2 w-5/6'>
    <form className='flex flex-col gap-5 mb-4 sm:w-full' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input 
          type='email' 
          onChange={(e)=>setEmail(e.target.value)} 
          placeholder='email' 
          className='border border-2 rounded-md outline-0 p-2 '
        />
        <input 
          type='password' 
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder='password' 
          className='border border-2 rounded-md outline-0 p-2 '
        />
        <span className='bg-red-500 text-white rounded-md px-1 w-max'>{error}</span>
        <input 
          type='submit' 
          placeholder='' 
          className='border border-2 rounded-md outline-0 p-2 cursor-pointer'
        />
    </form>
    <div className='flex flex-col gap-3'>
      <Link className='text-blue-600' href={'/usertype'}>create account ?</Link>
      <Link className='text-blue-600' href={'/login'}>forgot password ?</Link>
    </div>
</div>
  )
}