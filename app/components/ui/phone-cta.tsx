import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const Phonecta = () => {
  return (
    <div>
        <h5 className='text-5xl text-gray-700 text-center'>Zadzwoń</h5>
        <div className="mt-5 hover:scale-110 h-100 text-4xl flex flex-col justify-center items-center">
            <div className="text-6xl text-violet-500 my-3 ">
            <FaPhoneVolume />
            </div> 
            <a href="tel:572 275 002" className=" flex items-center main-text-gradient justify-center gap-5 md:text-5xl font-bold text-center -z-10  px-5 py-3">
            +48 572 275 002
            </a>
        </div>  
</div>
             
  )
}

export default Phonecta