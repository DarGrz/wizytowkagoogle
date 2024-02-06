import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaCity } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-around border-t-2 gap-5 py-10 h-40'>
        <a href="tel:572275002" className='flex gap-2 items-center'><FaPhoneVolume />+48 572 275 002</a>
        <a href="mailto:kontakt@wizytowkigoogle.pl" className='flex gap-2 items-center'><IoMdMail />kontakt@wizytowkigoogle.pl</a>
        <a href="" className='flex gap-2 items-center'><FaCity />Kraków, Polska</a>

    </div>
  )
}

export default Footer