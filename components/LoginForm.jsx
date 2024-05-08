'use client';

import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

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
        const form = e.target;
        form.reset();
        toast.success('Login successfull');
        router.push('/dashboard');
        router.refresh();
      }else{
        console.log('User login failed')
      }

    } catch (error) {
      console.log('Login failed', error);  
    }
  }


  return (
    <div className='w-1/4 bg-blue-300 p-2 absolute right-1/2 translate-x-1/2'>
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
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
</div>
  )
}