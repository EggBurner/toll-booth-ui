import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center px-8 py-4 border-b'>
        <div className='flex items-center gap-4 w-[60%]' >
        <Image alt='Company Logo' src={"/Icon.svg"} width={50} height={50} unoptimized/>
        <p className='font-bold text-xl'>Toll Booth</p>
        </div>

        <nav className='flex items-center justify-between w-full'>
            <menu className='flex items-center gap-12'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Enterprise</li>
            </menu>
            <menu className='flex items-center gap-12'>
                <li>Log In</li>
                <li className='bg-black text-background px-4 py-2 rounded-xs'>Sign Up Free</li>

            </menu>
        </nav>

    </header>
  )
}

export default Header
