'use client'

import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-full lg:w-1/2 px-6 py-10 sm:px-10 sm:py-12 lg:p-14 flex flex-col justify-center font-standard'>
      <h1 className='font-headline text-4xl sm:text-5xl'>Login</h1>

      <form className='mt-8 flex flex-col gap-6'>
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
              type={showPassword ? 'text' : 'password'}
              placeholder='8+ characters'
              className='border border-gray-300 rounded-xs px-4 py-3 pr-10 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <button
          type='submit'
          className='bg-black text-background rounded-xs py-3 font-medium mt-2'
        >
          Login to Dashboard
        </button>

        <p className='text-xs text-gray-500 -mt-3'>
          By continuing, I agree to the{' '}
          <Link href='/terms' className='hover:text-gray-800 underline'>Terms of Use</Link>
          {' '}&amp;{' '}
          <Link href='/privacy' className='hover:text-gray-800 underline'>Privacy Policy</Link>
        </p>
      </form>

      <p className='mt-8 text-sm'>
        Don&apos;t have an Account?{' '}
        <Link href='/register' className='font-medium underline'>Create Account</Link>
      </p>
    </div>
  )
}

export default LoginForm
