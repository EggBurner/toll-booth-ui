import { EyeOff } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className='w-full lg:w-1/2 px-6 py-10 sm:px-10 sm:py-12 lg:p-14 flex flex-col justify-center font-standard'>
      <h1 className='font-headline text-4xl sm:text-5xl'>Create Account</h1>

      <form className='mt-8 flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='fullName' className='text-sm'>Full Name</label>
          <input
            id='fullName'
            type='text'
            placeholder='john doe'
            className='border border-gray-300 rounded-xs px-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm'>Your Email</label>
          <input
            id='email'
            type='email'
            placeholder='johndoe@xyz.com'
            className='border border-gray-300 rounded-xs px-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password' className='text-sm'>Password</label>
          <div className='relative'>
            <input
              id='password'
              type='password'
              placeholder='8+ characters'
              className='border border-gray-300 rounded-xs px-4 py-3 pr-10 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
            <EyeOff size={18} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='confirmPassword' className='text-sm'>Confirm Password</label>
          <div className='relative'>
            <input
              id='confirmPassword'
              type='password'
              placeholder='8+ characters'
              className='border border-gray-300 rounded-xs px-4 py-3 pr-10 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
            <EyeOff size={18} className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>
        </div>

        <button
          type='submit'
          className='bg-black text-background rounded-xs py-3 font-medium mt-2'
        >
          Continue
        </button>

        <p className='text-xs text-gray-500 -mt-3'>
          By continuing, I agree to the{' '}
          <Link href='/terms' className='hover:text-gray-800 underline'>Terms of Use</Link>
          {' '}&amp;{' '}
          <Link href='/privacy' className='hover:text-gray-800 underline'>Privacy Policy</Link>
        </p>
      </form>

      <p className='mt-8 text-sm'>
        Already have an Account?{' '}
        <Link href='/login' className='font-medium underline'>Try Login</Link>
      </p>
    </div>
  )
}

export default RegisterForm
