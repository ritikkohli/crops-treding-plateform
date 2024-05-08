"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Logout() {
  const router = useRouter();

  const logout = async ()=>{
    try {
      await fetch('/api/users/logout');
      router.push('/');
      toast.success('Logout successfully');
      router.refresh();
    } catch (error) {
      console.log('logout failed', error);
    }
  }

  useEffect(()=>{
    logout();
  },[]);

  return (
    <div className="grid place-items-center h-screen">
        <h1>Loging out</h1>
    </div>
  )
}