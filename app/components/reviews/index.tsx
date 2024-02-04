import React from 'react'
import { FaStar } from "react-icons/fa";

const Reviews = () => {
    return (
        <div className='container quote-style flex flex-col items-center text-white text-center quote-bg-gradient-burbon py-10 px-5 mb-20 md:py-20 md:mt-40'>
        
         <h3 className='font-bold flex text-3xl md:text-5xl uppercase items-center'>
                <span>
                    <FaStar className='text-yellow-200 mr-5 text-5xl' />
                </span>
                    Opinie Google
                <span>
                    <FaStar className='text-yellow-200 ml-5 text-5xl' />
                </span>
            </h3>
         <br />
         <p className='font-bold text-2xl md:text-4xl'> Rozwiąż swoje problemy</p>
         <br />
         <div>
            <ul className='font-bold text-xl md:text-3xl text-left list-disc'>
                <li>Usuwanie negatywów</li>
                <li>Nowe opinie</li>
                <li>Polubienia</li>
                <li>Walka z konkurencją</li>
            </ul>
         </div>
         <div className='flex gap-7 justify-center mt-10 text-4xl'> 
         <FaStar className='text-yellow-200' />
         <FaStar className='text-yellow-300' />
         <FaStar className='text-yellow-300' />
         <FaStar className='text-yellow-300' />
         <FaStar className='text-yellow-300' />
        </div>
    
         
        </div>
    )
}

export default Reviews