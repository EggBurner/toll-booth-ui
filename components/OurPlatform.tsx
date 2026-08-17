import React from 'react'
import OurPlatformCard from './OurPlatformCard'

const OurPlatform = () => {
  return (
    <div className='pt-12 pb-12 border-t border-gray-800 text-center font-semibold w-[80%] mx-auto'>
        <p className="tracking-wider text-sm">OUR PLATFORM</p>
        <p className='font-headline font-semibold text-3xl/12 w-[80%] 2xl:w-[60%] mt-4 mx-auto '>Ready to simplify Your Links & Empowering Your Links
        with Advanced Features</p>
        <p className='mt-8 text-lg w-[80%] 2xl:w-[50%] mx-auto text-secondary'>All the products you need to build brand connections, manage links & QRs, connect with
        audiences everywhere, in a single unified platform.</p>

        <OurPlatformCard />

      <div className='w-fit flex gap-6 mx-auto mt-8'>
        <button className='bg-black text-background px-6 py-1'>Get Started - It's free</button> 
        <button className='border px-6 py-1'>Learn More</button>
      </div> 
    </div>
  )
}

export default OurPlatform
