"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Plus, Bell, Search } from 'lucide-react'
import { useAppSelector } from '@/libs/hooks'

const DashboardTopbar = () => {
  const user = useAppSelector((state) => state.auth.user)

  const initials = user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : '?'

  return (
    <header className='flex items-center justify-between gap-4 px-4 sm:px-8 py-4 border-b border-gray-200 bg-white'>
      <Link href={'/'} className='flex items-center gap-3 shrink-0'>
        <Image alt='Company Logo' src={'/Icon.svg'} width={32} height={32} unoptimized />
        <p className='font-bold text-lg hidden sm:block'>Toll Booth</p>
      </Link>

      <div className='flex items-center gap-2 sm:gap-4'>
        <button aria-label='Search' className='p-2 text-secondary hover:text-black sm:hidden'>
          <Search size={20} />
        </button>
        <button aria-label='Notifications' className='p-2 text-secondary hover:text-black'>
          <Bell size={20} />
        </button>
        <button className='flex items-center gap-2 bg-black text-background px-3 sm:px-4 py-2 rounded-xs text-sm font-medium shrink-0'>
          <Plus size={16} />
          <span>Create Link</span>
        </button>
        <div className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium shrink-0'>
          {initials}
        </div>
      </div>
    </header>
  )
}

export default DashboardTopbar
