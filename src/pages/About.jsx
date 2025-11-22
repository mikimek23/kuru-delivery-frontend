import React from 'react';
import { RocketLaunchIcon, HandRaisedIcon, CubeTransparentIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/solid'; 

const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg transition-all duration-300">
        <Icon className="w-12 h-12 text-orange-600 mb-3" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const valuesData = [
    { icon: StarIcon, title: "Reliability", description: "Ensuring every parcel, big or small, arrives safely and on schedule." },
    { icon: CubeTransparentIcon, title: "Transparency", description: "Providing real-time tracking and clear communication every step of the way." },
    { icon: RocketLaunchIcon, title: "Innovation", description: "Integrating modern payment solutions like Tellbirr and digital wallets." },
    { icon: UserGroupIcon, title: "Customer Focus", description: "Building our service around the needs of our users, from small businesses to individuals." },
];

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 bg-orange-50 min-h-[80vh]">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-12">
            Our Story: Delivering <span className='text-orange-600'>Trust</span> 🚀
        </h1>
        
        <div className="space-y-12 text-gray-700">
            
            <section className="max-w-4xl mx-auto p-4">
                <h2 className="text-3xl font-semibold text-orange-600 mb-6 flex items-center gap-3">
                    <HandRaisedIcon className='w-7 h-7' /> The Kuru Vision
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Kuru Delivery Services was founded in [Year] with the goal of revolutionizing the last-mile delivery experience. We saw the gap between rapid e-commerce growth and slow, opaque traditional logistics. Our vision is to be the **most trusted and technologically advanced** delivery partner, connecting businesses and individuals seamlessly across the region.
                </p>
            </section>

            <section className="max-w-6xl mx-auto p-4">
                <h2 className="text-3xl font-semibold text-orange-600 mb-6 border-b pb-2 text-center">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valuesData.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </section>

            <section className="bg-orange-100 p-8 rounded-lg border-l-4 border-orange-500 shadow-md max-w-4xl mx-auto">
                <p className="italic text-xl text-gray-800">
                    "At Kuru, we're not just delivering packages; we're delivering promises. Our technology ensures speed, but our people ensure care."
                </p>
                <p className="mt-3 text-right text-gray-600">— CEO, Kuru Delivery</p>
            </section>
            
          
            <div className="text-center pt-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
                <div className="inline-block shadow-lg transition-transform hover:scale-105 rounded-lg">
                    <a href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white bg-orange-600 text-xl rounded-lg hover:bg-orange-700 transition-all duration-200">
                        Book Your First Delivery
                    </a>
                </div>
            </div>

        </div>
    </div>
  );
};

export default About;