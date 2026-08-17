import React from 'react'
import LinkBar from './LinkBar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='text-center mt-12 sm:mt-16 lg:mt-20 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto font-standard'>
        <p className='text-sm font-bold tracking-wider'>SIMPLIFY YOUR LINKS</p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-semibold mt-4'>Transform Long Urls, into Tiny Links Instantly!</h1>
        <h2 className='mt-8 text-lg w-full sm:w-[80%] mx-auto'>Shorten long URLs, track performance, & manage all your links in one place.
        Your go to solution for smarter sharing. Paste your long link below.</h2>
        <LinkBar />
        <div className='mx-auto w-[80%] sm:w-[60%] md:w-[40%] mt-4 flex items-center justify-center gap-2'>
            <Image alt='People' src={"/peopleIcons.png"} width={70} height={30} unoptimized/>
            <p>1k people already using it</p>
        </div>
        <Image alt='Hero Illustration' src={"/Hero-Illustration.png"} width={200} height={200} className='w-full mt-8' unoptimized />
    </div>
  )
}

export default Hero
