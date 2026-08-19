"use client"

import Link from 'next/link'
import { useAppSelector } from '@/libs/hooks'

const WelcomeCard = () => {
  const user = useAppSelector((state) => state.auth.user)
  const name = user ? `${user.firstName} ${user.lastName}` : 'there'

  return (
    <div className='border border-gray-200 bg-white rounded-xs px-6 py-8 sm:px-10 sm:py-10'>
      <h1 className='font-headline text-4xl sm:text-5xl'>Welcome back, {name}</h1>
      <p className='text-secondary mt-4'>Here&apos;s what&apos;s happening with your links today.</p>
      <Link
        href='/dashboard/settings'
        className='inline-block border border-gray-300 px-6 py-3 rounded-xs mt-6 text-sm font-medium hover:bg-gray-50'
      >
        Manage Account
      </Link>
    </div>
  )
}

export default WelcomeCard
