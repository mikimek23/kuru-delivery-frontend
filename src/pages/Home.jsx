import React from 'react'
import { Navbar } from '../components/global/Navbar'
import { Footer } from '../components/global/Footer'
import { HeroSection } from '../components/homepage/HeroSection'
import { Features, Services } from '../components/homepage/ServiceHighlight'

import logo from '../assets/images/kurulogo2.png';
import { ArrowRightIcon } from '../components/auth/SvgIcons'

export const Home = () => {
  return (
    <div className='border min-h-screen bg-orange-50'>
       <Navbar />
       <HeroSection />
       {/** Other homepage sections can be added here **/}
       <div className="flex-1 text-center md:text-center mt-4 min-h-1/2 px-4 sm:px-6 lg:px-8 py-12 bg-orange-50">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Our delivery <span className="text-orange-600">Services</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 ">
            {Services.map((platform, index) => (
              <div key={index} className="text-center bg-orange-50 rounded-lg p-8 hover:shadow-lg transition-shadow ">
                <div className=" flex justify-center mb-4">{platform.icon}</div>
                <h3 className=" text-2xl font-bold mb-2 text-orange-500">{platform.title}</h3>
                <p className="text-gray-600 text-2xl">{platform.description}</p>
              </div>
            ))}
          </div>
          </div>
       <div className="flex-1 text-center md:text-center mt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 bg-orange-50">
            Why Choose Kuru <span className="text-orange-600">Delivery?</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 bg-orange-50 ">
            {Features.map((platform, index) => (
              <div key={index} className="text-center bg-orange-50 rounded-lg p-8 hover:shadow-lg hover:scale-105 transition-shadow ">
                <div className=" flex justify-center mb-4">{platform.icon}</div>
                <h3 className=" text-2xl font-bold mb-2 text-orange-500">{platform.title}</h3>
                <p className="text-gray-600 text-2xl">{platform.description}</p>
              </div>
            ))}
          </div>
          </div>
           <div className="w-full bg-orange-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800 flex flex-col items-center justify-center gap-6 mt-10">
                      <h6 className=" flex items-center justify-center font-semibold uppercase md:justify-start">
                        <img src={logo} alt="Kuru Delivery logo" className='w-10 m-auto mt-10'/>
                        
                      </h6>
                      <h1 className="block text-4xl text-center font-bold text-orange-500 ">Kuru Delivery</h1>
                      <p className='text-2xl text-center '>
                        Fast, reliable, and secure delivery services for all your shipping needs. Trusted by thousands of businesses worldwide.
                      </p>
                      
                          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1 rounded-4xl">
            <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-orange-500 text-orange-500 text-4xl rounded-4xl   hover:border-2  hover:text-white hover:border-black hover:bg-orange-500 md:py-4 md:text-lg md:px-10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
              Book Delivery
            </a>
          </div>
          
        </div>
                </div>
       <Footer />
    </div>
  )
}
