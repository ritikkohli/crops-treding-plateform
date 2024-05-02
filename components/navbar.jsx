import Link from "next/link"
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-green-500 h-12 flex items-center px-10 justify-between">
        <div>
            <Link className="" href={'/'}>Home</Link>
        </div>
        <div className="flex gap-2">
            <Link className="font-bold" href={'/usertype'}>signup</Link>
            <Link className="font-bold" href={'/login'}>login</Link>            
        </div>
    </nav>
  )
}
