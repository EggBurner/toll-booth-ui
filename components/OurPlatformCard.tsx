import { platformCardData } from '@/libs/data/OurPlatform'
import Image from 'next/image'
import React from 'react'

const OurPlatformCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 '>
      {platformCardData.map((card,index) => (
        <div key={index} className='border bg-white flex flex-col items-center justify-center px-4 py-8 gap-6'>
          <Image alt='platform illustration' src={card.image} width={150} height={150} unoptimized/>
          <p className="text-xl font-bold">{card.heading}</p>
          <p className='text-secondary text-sm'>{card.tagline}</p>
        </div>
      ))}
    </div>
  )
}

export default OurPlatformCard
