import Image from 'next/image'
import React from 'react'

const LinkBar = () => {
  return (
    <form className='border sm:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto flex items-center justify-between px-2 py-2 mt-8'>
        <div className='flex items-center gap-4 w-fit'>
        <Image alt='URL logo' src={"/Icon.svg"} width={20} height={20}/>
        <input type="text" required placeholder='https://example.com/long-url' className='w-8 sm:w-16 md:w-32 lg:w-48 xl:w-60 2xl:w-72 field-sizing-content whitespace-nowrap overflow-hidden text-ellipsis focus:outline-0'/> 
        </div>

        <button className='bg-black text-background px-6 py-2 rounded-xs'>Generate Link - It's free</button>
    </form>

  )
}

export default LinkBar
