import Image from 'next/image'
import React from 'react'

const Stats = () => {
  return (
    <div className='pt-12 border-t border-gray-800 text-center font-semibold w-[90%] sm:w-[80%] mx-auto'>
        <p className="tracking-wider text-sm">WHY CHOOSE US</p>
        <p className='font-headline font-semibold text-2xl sm:text-3xl/14 w-full sm:w-[80%] 2xl:w-[60%] mt-4 mx-auto '>We're not just another URL shortener. Our platform is built with a
        focus on reliability, user experience, and detailed analytics. Join
        thousands of users who trust us to simplify and amplify their digital
        presence.</p>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 mt-12 w-[90%] sm:w-[80%] 2xl:w-[70%] mx-auto'>
            <div className='text-center flex flex-col items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-headline'>18K+</p>
                <p>Total Users</p>
            </div>
            <div className='text-center flex flex-col items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-headline'>1M+</p>
                <p>Links Created</p>
            </div>
            <div className='text-center flex flex-col items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-headline'>10M+</p>
                <p>Redirected Links</p>
            </div>
        </div>
        <div className='mt-8'>
            <Image alt='Globe Image' src={"/globe-message.png"} width={400} height={400} unoptimized className='mx-auto'/>
        </div>

    </div>
  )
}

export default Stats