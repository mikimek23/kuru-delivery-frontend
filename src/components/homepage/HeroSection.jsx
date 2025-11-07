import React from 'react'

export const HeroSection = () => {
  return (
    <div>
      <section aria-labelledby="hero-heading" className="min-h-screen relative sm:mt-6 lg:mt-8 mt-12 mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -right-40 w-96 h-96  rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"></div>
    </div>

    <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-8 lg:gap-12 items-center flex-col lg:flex-row">
      {/* Text Content */}
      <div className="sm:text-center lg:text-left flex-2">
        <h1 id="hero-heading" className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl flex items-baseline gap-3 justify-center lg:justify-start">
          <span className="block text-orange-600 text-7xl">Kuru Delivery</span>
          
        </h1>
<p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Fast & Reliable Delivery Across the City</p>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Book your deliveries online and track them in real time.
        </p>

        {/* Button Section */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-1 rounded-4xl">
            <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-orange-500 text-orange-500 text-4xl rounded-4xl   hover:border-2  hover:text-white hover:border-black hover:bg-orange-500 md:py-4 md:text-lg md:px-10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
              Book Delivery
            </a>
          </div>
          
        </div>
      </div>

      {/* Image Section */}
      <div className="flex relative w-full lg:w-1/2">
        <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] animate-bounce-slow">
          {/* Background linear */}
          <div className="absolute inset-0  rounded-3xl blur-2xl opacity-50" aria-hidden="true"></div>

          {/** Main image */}
          <img id="hero-image" src="src/assets/images/kurudelive.png" className="relative w-full h-full object-cover rounded-2xl " alt="Delivery man" loading="eager" />

          {/* Overlay linear */}
          
        </div>
        
      </div>
    </div>
  </section>
    </div>
  )
}
