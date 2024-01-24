import React from 'react'
import Image from 'next/image'
import ImageMoreClients from '@/public/images/jak-przyciagnac-klientow.png'
import ImageDigitalMarketing from '@/public/images/reklama-google.png'

const WhatCards = () => {
  return (
    <section className="container w-full grid gap-2 md:mt-20">
        <div>
          <h2 className="text-center mb-10 text-4xl">Co z tego będziesz miał?</h2>
        </div>
        <div className="row flex md:flex-row  flex-col gap-2 justify-center ">
          <div className="cards relative flex flex-col items-center justify-center border-2 rounded-sm p-5 md:p-3 text-center drop-shadow-sm md:w-2/4">
            <Image className=''  src={ImageMoreClients} height={500} width={500} alt={"lokalna widoczność w google"} />
            <h3 className='uppercase absolute bottom-10 lg:text-3xl  md:text-2xl text-xl text-white quote-bg-gradient-burbon rounded-md py-3 px-10 font-bold'>10x Więcej Klientów</h3>
          </div>
          <div className='sub-col flex flex-col gap-2 justify-center'>
          <div className="flex h-full gap-2">
            <div className="cards grid place-content-center border-2 rounded-sm md-p5 p-3 text-center drop-shadow-sm md:w-2/4">
              <h3 className='uppercase text-md md:text-xl font-bold'>Większą widoczność w Google</h3>
            </div>
            <div className="cards grid grid-inline place-content-center border-2 rounded-sm md-p5 p-3 text-center w-full drop-shadow-sm md:w-2/4">
              <h3 className='text-md md:text-xl font-bold'>NOWE POZYTYWNE OPINIE</h3></div>
            </div>
            <div className="flex h-full">
                <div className="cards flex items-center  border-2 rounded-sm  p-2 text-center  drop-shadow-sm w-full">
                  <h3 className='bottom-5 md:text-xl text:md uppercase w-40 md:w-80  rounded-md py-3 pl-10 font-bold'>Magnetyczne Kampanie Reklamowe</h3>
                  <Image className='w-1/3 md:w-2/4 mx-auto'  src={ImageDigitalMarketing} height={250} width={250} alt={"lokalna widoczność w google"} />
                </div>
            </div>
          </div>
          
        </div>
        <div className="row flex md:flex-row  flex-col gap-2 justify-center">
          
        </div>
      </section>
  )
}

export default WhatCards