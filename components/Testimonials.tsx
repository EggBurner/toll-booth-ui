import React from 'react'
import TestimonialsCard from './TestimonialsCard'

const Testimonials = () => {
  return (
    <div className='pt-12 pb-12 border-t border-gray-800 text-center font-semibold w-[90%] sm:w-[80%] mx-auto'>
        <p className="tracking-wider text-sm">Testimonials</p>
        <p className='font-headline font-semibold text-2xl sm:text-3xl/12 w-full sm:w-[80%] 2xl:w-[60%] mt-4 mx-auto '>Trusted by Thousands Worldwide</p>
        <p className='mt-8 text-lg w-full sm:w-[80%] 2xl:w-[50%] mx-auto text-secondary'>"Using this URL shortener has completely transformed how I share links. The analytics tools are a game changer for my campaigns!"</p>

        <TestimonialsCard />
    </div>
  )
}

export default Testimonials
