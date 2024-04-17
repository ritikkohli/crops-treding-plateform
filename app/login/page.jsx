'use client';

import { signIn } from 'next-auth/react';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
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
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if(res.error){
        setError('Invalid credentials');
        return
      }

      router.replace('/dashboard');
    } catch (error) {
      console.log(error);  
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
