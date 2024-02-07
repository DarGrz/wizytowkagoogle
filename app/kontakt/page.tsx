import React from 'react'
import {Input} from "@nextui-org/react";

const index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center -z-10">
       <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            className="-z-10 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0"  title="map"  loading="lazy"
               
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%Kraków&ie=UTF8&t=&z=14&iwloc=B&output=embed"
               ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Opis</h2>
                    <p className="mt-1">Mamy mistrzowstwo w zarządzaniu Wizytówkami Google oraz reklamami Google Ads. Prowadzimy biznesy z branży Beauty,Budowlanej, IT. Google nie ma przed nami tajemnic. </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
                    <a className="main-gradient-color leading-relaxed">kontak@wizytowkigoogle.pl</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Telefon</h2>
                    <p className="leading-relaxed main-gradient-color">+48 572 275 002</p>
                </div>
            </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Wsparcie</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Napisz, jeśli chcesz zapisać się do Newslettera.
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Imię</label>
                <Input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <Input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Wiadomość</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white  quote-bg-gradient-burbon border-0 py-2 px-6 focus:outline-none rounded text-lg">Wyślij</button>
            <p className="text-xs text-gray-500 mt-3"></p>
        </div>
    </div>
      </div>
  )
}

export default index