import { Calendar, ChartArea, FastForward, MapPin, Power, Tractor, Wallet } from 'lucide-react'
import React from 'react'

export const Services =[
    {icon:<Tractor size={50} color='green'/>,
      title:"Same-Day Delivery", 
      description:"Get your parcels delivered within hours with real-time tracking."
    },
    {icon:<Calendar size={50} color='red'/>,
      title:"Scheduled Delivery", 
      description:"Book deliveries in advance for a specific date and time"
    },
    {icon:<ChartArea size={50} color='blue'/> ,
      title:"E-commerce Delivery", 
      description:"Seamless delivery solutions for online stores and businesses."
    },
    {icon:<Power size={50} color='blue'/> ,
      title:"Express Courier", 
      description:"Priority handling for important packages with fastest delivery."
    }
  ]
export const Features =[
    {icon:<FastForward size={50} color='green'/>,
      title:"Fast Delivery", 
      description:"Receive your parcels in record time."
    },
    {icon:<MapPin size={50} color='red'/>,
      title:"Real-time Tracking", 
      description:"Track your order from pickup to delivery."
    },
    {icon:<Wallet size={50} color='blue'/> ,
    title:"Online Payments", 
      description:"Pay easily using Tellbirr or digital wallets."
    }
  ]
