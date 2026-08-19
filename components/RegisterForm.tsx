"use client"
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {useState} from 'react'
import { useRegisterMutation } from '@/services/authApi'
import { useRouter} from 'next/navigation'
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const RegisterForm = () => {

  function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error
  );
}

  function getErrorMessage(error: FetchBaseQueryError): string {
    if (error.status === 'PARSING_ERROR') {
      return error.data || error.error
    }
    if (typeof error.status === 'number') {
      const data = error.data
      if (data && typeof data === 'object' && 'message' in data) {
        return String((data as { message: unknown }).message)
      }
      if (typeof data === 'string' && data) {
        return data
      }
      return `Request failed with status ${error.status}`
    }
    return error.error
  }


  const router = useRouter();

  const [register, { isLoading, error}] = useRegisterMutation()

  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "MEMBER"
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await register(form).unwrap()
        console.log(response);
        setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "MEMBER",
      });

      router.push("/login");
    } catch (err) {
          console.log("Registeration failed: ", isFetchBaseQueryError(err) ? err.data : err)
    }
  }



  return (
    <div className='w-full lg:w-1/2 px-6 py-10 sm:px-10 sm:py-12 lg:p-14 flex flex-col justify-center font-standard'>
      <h1 className='font-headline text-4xl sm:text-5xl'>Create Account</h1>

      <form className='mt-8 flex flex-col gap-6' onSubmit={handleSubmit}>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='flex flex-col gap-2 flex-1'>
            <label htmlFor='firstName' className='text-sm'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              placeholder='John'
              value={form.firstName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xs px-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
          </div>

          <div className='flex flex-col gap-2 flex-1'>
            <label htmlFor='lastName' className='text-sm'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              placeholder='Doe'
              value={form.lastName}
              onChange={handleChange}
              className='border border-gray-300 rounded-xs px-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm'>Your Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='johndoe@xyz.com'
            value={form.email}
            onChange={handleChange}
            className='border border-gray-300 rounded-xs px-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password' className='text-sm'>Password</label>
          <div className='relative'>
            <input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='8+ characters'
              value={form.password}
              onChange={handleChange}
              className='border border-gray-300 rounded-xs px-4 py-3 pr-10 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {error && isFetchBaseQueryError(error) && <p className='text-red-500 text-sm'>{getErrorMessage(error)}</p>}

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
