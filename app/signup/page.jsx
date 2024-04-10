import React from 'react'

export default function page() {
  return (
    <div className='w-1/4 bg-blue-300 p-2 absolute right-1/2 translate-x-1/2'>
        <form className='flex flex-col gap-5'>
            <h1>Signup</h1>
            <input type='text' placeholder='full name' className='border border-2 rounded-md outline-0 p-2 '/>
            <input type='email' placeholder='email' className='border border-2 rounded-md outline-0 p-2 '/>
            <input type='tel' placeholder='mobile' className='border border-2 rounded-md outline-0 p-2 '/>
            <input type='text' placeholder='otp' className='border border-2 rounded-md outline-0 p-2 '/>
            <input type='submit' placeholder='' className='border border-2 rounded-md outline-0 p-2 '/>
        </form>
    </div>
  )
}
