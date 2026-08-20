"use client"

import React, { useState } from 'react'
import { Link2, Lock, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCreateLinkMutation } from '@/services/linkApi'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useAppSelector } from '@/libs/hooks'

const CreateLinkForm = () => {

  const user = useAppSelector((state) => state.auth.user)


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

  const [createLink, { isLoading, error }] = useCreateLinkMutation()

  const [longLink, setLongLink] = useState('')
  const [pinProtected, setPinProtected] = useState(false)
  const [pin, setPin] = useState('')
  const ownerID = user?._id

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!ownerID) {
      console.log("Link creation failed: no authenticated user")
      return
    }

    try {
      const response = await createLink({
        targetLink: longLink,
        pinProtected: pinProtected,
        pin,
        ownerID,
      }).unwrap()
      console.log(response);

      setLongLink('')
      setPinProtected(false)
      setPin('')

      router.push("/dashboard")
    } catch (err) {
      console.log("Link creation failed: ", isFetchBaseQueryError(err) ? err.data : err)
    }
  }

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value.replace(/\D/g, '').slice(0, 4))
  }

  return (
    <div className='border border-gray-200 bg-white rounded-xs px-6 py-8 sm:px-10 sm:py-10 font-standard'>
      <h1 className='font-headline text-3xl sm:text-4xl'>Create Link</h1>
      <p className='text-secondary mt-2 text-sm'>Shorten a long link and share it anywhere.</p>

      <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-6 max-w-xl'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='longLink' className='text-sm'>Long Link</label>
          <div className='relative'>
            <Link2 size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              id='longLink'
              name='longLink'
              type='url'
              placeholder='https://example.com/a-very-long-path'
              className='border border-gray-300 rounded-xs pl-11 pr-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
              value={longLink}
              onChange={(e) => setLongLink(e.target.value)}
              required
            />
          </div>
        </div>

        <label className='flex items-center gap-3 cursor-pointer select-none w-fit'>
          <input
            type='checkbox'
            checked={pinProtected}
            onChange={(e) => setPinProtected(e.target.checked)}
            className='peer sr-only'
          />
          <span className='w-5 h-5 shrink-0 border border-gray-300 rounded-xs flex items-center justify-center peer-checked:bg-black peer-checked:border-black peer-focus-visible:ring-2 peer-focus-visible:ring-gray-300 transition-colors'>
            <Check size={14} className={pinProtected ? 'text-background' : 'text-transparent'} />
          </span>
          <span className='text-sm font-medium'>Pin Protected?</span>
        </label>

        <div
          className={`grid transition-all duration-200 ease-in-out ${
            pinProtected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className='overflow-hidden'>
            <div className='flex flex-col gap-2 pt-1 w-full sm:w-48'>
              <label htmlFor='pin' className='text-sm'>4-Digit Pin</label>
              <div className='relative'>
                <Lock size={16} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
                <input
                  id='pin'
                  name='pin'
                  type='password'
                  inputMode='numeric'
                  pattern='\d{4}'
                  maxLength={4}
                  placeholder='••••'
                  value={pin}
                  onChange={handlePinChange}
                  className='border border-gray-300 rounded-xs pl-11 pr-4 py-3 w-full tracking-[0.5em] placeholder:tracking-normal placeholder:text-gray-400 focus:outline-0 focus:border-black'
                  required={pinProtected}
                />
              </div>
            </div>
          </div>
        </div>

        {error && isFetchBaseQueryError(error) && <p className='text-red-500 text-sm'>{getErrorMessage(error)}</p>}

        <button
          type='submit'
          className='bg-black text-background rounded-xs py-3 font-medium mt-2 w-full sm:w-fit sm:px-10'
        >
          Create Link
        </button>
      </form>
    </div>
  )
}

export default CreateLinkForm
