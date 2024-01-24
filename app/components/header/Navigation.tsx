"use client"

import React, {useState} from "react"
import Image from "next/image"
import logo from '@/public/images/wizytowka-google-logo.png'
import Link from "next/link"
import Hamburger from 'hamburger-react'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="container mx-auto flex flex-column items-center justify-between border-b-2 py-2 h-24 relative">
        <Link href='/' className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <Image src={logo} width={60} height={60} alt="Wizytówka Google Logo"/>
            <h1 className="font-bold uppercase text-gray-600"></h1>
        </Link>
      <div className={`grow absolute top-20 transition-opacity md:relative md:inset-0 opacity-100  ${!isOpen && "hidden opacity-0"} md:block w-full md:w-auto`}>
        <div className="flex flex-col md:flex-row md:items-center items-center py-40 md:py-5  md:justify-end gap-5 md:gap-8 bg-white">
          <Link className="hover:text-gray-800 hover:underline transition-all font-semibold text-gray-600" href="/">Home</Link>
          <Link className="hover:text-gray-800 hover:underline transition-all font-semibold text-gray-600" href="/">Blog</Link>
          <Link className="hover:text-gray-800 hover:underline transition-all font-semibold text-gray-600" href="/">Contact</Link>
          <Link className="hover:text-gray-800 hover:underline transition-all font-semibold text-gray-600" href="/">FAQ</Link>
        </div>
      </div>
      <div className="md:hidden">
       <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  )
}

export default Navigation