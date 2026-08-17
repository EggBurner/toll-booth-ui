import { TestimonialsCardData } from '@/libs/Testimonails'
import Image from 'next/image'
import React from 'react'

const TestimonialsCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center  mt-8'>
      {
        TestimonialsCardData.map((card, index) => (
            <div key={index} className='flex flex-col gap-4 items-start text-left h-full border bg-white px-4 py-6'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image alt='user profile image ' src={card.image} width={30} height={30} unoptimized/>
                    <p>{card.name}</p>
                </div>
                <p>{card.testimonial}</p>
                <p className='text-[#1A0DAB] text-sm'>#{card.hashTag}</p>
            </div>
        ))
      }
    </div>
  )
}

export default TestimonialsCard
