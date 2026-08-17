import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const LinkBar = () => {
  return (
    <div className='border w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto flex items-center justify-between px-2 py-2 mt-8'>
        <div className='flex items-center gap-2 sm:gap-4 w-fit'>
        <Image alt='URL logo' src={"/Icon.svg"} width={20} height={20}/>
        <input type="text" required placeholder='https://example.com/long-url' className='w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 field-sizing-content whitespace-nowrap overflow-hidden text-ellipsis focus:outline-0'/>
        </div>

        <Link href={'/login'} className='bg-black text-background px-2 py-2 text-xs sm:px-6 sm:py-2 sm:text-base rounded-xs shrink-0'>Generate Link - It's free</Link>
    </div>

  )
}

export default LinkBar
