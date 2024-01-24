import React from 'react'
import { FaStar } from "react-icons/fa";

const Quote = ({quoteText} : {
    quoteText:any
}) => {
  return (
    <div className='container quote-style text-white text-center quote-bg-gradient-burbon py-10 mt-20 md:py-20 md:mt-40'>
     <q className='font-bold text-2xl md:text-4xl'>{quoteText}</q>
     <p className='opacity-30 font-extralight text-sm mt-1'>-Marek Nowacki</p>
     <div className='flex gap-2 justify-center mt-3'>
     <FaStar className='text-yellow-200 text-xl' />
     <FaStar className='text-yellow-200 text-xl' />
     <FaStar className='text-yellow-200 text-xl' />
     <FaStar className='text-yellow-200 text-xl' />
     <FaStar className='text-yellow-200 text-xl' />
      </div>
     
    </div>
  )
}

export default Quote