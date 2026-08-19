"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/libs/hooks';
import { stat } from 'fs';

const Header = () => {

    const user = useAppSelector((state) => state.auth.user)
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return (
    <header className='flex flex-col md:flex-row items-center px-4 sm:px-8 py-4 border-b gap-4 md:gap-0'>
        <Link href={'/'} className='flex items-center gap-4 w-full md:w-[60%]'>
            <Image alt='Company Logo' src={"/Icon.svg"} width={50} height={50} unoptimized/>
            <p className='font-bold text-xl'>Toll Booth</p>
        </Link>


        <nav className='flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0'>
            <menu className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Enterprise</li>
            </menu>
            <menu className='flex items-center gap-4 sm:gap-6 lg:gap-12'>

            {
                !isAuthenticated || user == null ? (
                    <>
                        <li><Link href={'/login'}>Log In</Link></li>
                        <li><Link href={'/register'} className='bg-black text-background px-4 py-2 rounded-xs'>Sign Up Free</Link></li>
                    </>
                ) : null
            }
                    
            
               

            </menu>
        </nav>

    </header>
  )
}

export default Header
