import React from 'react'

export default function Login() {
  return (
    <div className='w-1/4 bg-blue-300 p-2 absolute right-1/2 translate-x-1/2'>
    <form className='flex flex-col gap-5'>
        <h1>Login</h1>
        <input type='email' placeholder='email' className='border border-2 rounded-md outline-0 p-2 '/>
        <input type='password' placeholder='password' className='border border-2 rounded-md outline-0 p-2 '/>
        <input type='submit' placeholder='' className='border border-2 rounded-md outline-0 p-2 '/>
    </form>
</div>
  )
}
