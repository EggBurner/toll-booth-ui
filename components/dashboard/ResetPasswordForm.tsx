"use client"

import { useState } from 'react'
import { Lock, Check } from 'lucide-react'
import { useResetPasswordMutation } from '@/services/authApi'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useAppSelector } from '@/libs/hooks'

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error
  )
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

const ResetPasswordForm = () => {
  const user = useAppSelector((state) => state.auth.user)

  const [resetPassword, { isLoading, error }] = useResetPasswordMutation()

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mismatch, setMismatch] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    setMismatch(newPassword !== value)
    setSuccess(false)
  }

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewPassword(value)
    setMismatch(confirmPassword !== '' && confirmPassword !== value)
    setSuccess(false)
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setMismatch(true)
      return
    }

    const email = user?.email
    if (!email) {
      return
    }

    try {
      await resetPassword({ email , oldPassword, newPassword }).unwrap()

      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
      setMismatch(false)
      setSuccess(true)
    } catch {
      setSuccess(false)
    }
  }

  return (
    <div className='border border-gray-200 bg-white rounded-xs px-6 py-8 sm:px-10 sm:py-10 font-standard mt-8'>
      <h2 className='font-headline text-3xl sm:text-4xl'>Reset Password</h2>
      <p className='text-secondary mt-2 text-sm'>Update the password used to sign in to your account.</p>

      <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-6 max-w-xl'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='oldPassword' className='text-sm'>Old Password</label>
          <div className='relative'>
            <Lock size={16} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              id='oldPassword'
              name='oldPassword'
              type='password'
              placeholder='Enter your current password'
              className='border border-gray-300 rounded-xs pl-11 pr-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='newPassword' className='text-sm'>New Password</label>
          <div className='relative'>
            <Lock size={16} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              id='newPassword'
              name='newPassword'
              type='password'
              placeholder='Enter a new password'
              className='border border-gray-300 rounded-xs pl-11 pr-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 focus:border-black'
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='confirmPassword' className='text-sm'>Confirm New Password</label>
          <div className='relative'>
            <Lock size={16} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              placeholder='Re-enter the new password'
              className={`border rounded-xs pl-11 pr-4 py-3 w-full placeholder:text-gray-400 focus:outline-0 ${
                mismatch ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black'
              }`}
              value={confirmPassword}
              onChange={handleConfirmChange}
              required
            />
            {!mismatch && confirmPassword !== '' && (
              <Check size={16} className='absolute right-4 top-1/2 -translate-y-1/2 text-green-600' />
            )}
          </div>
          {mismatch && <p className='text-red-500 text-sm'>Passwords do not match.</p>}
        </div>

        {error && isFetchBaseQueryError(error) && <p className='text-red-500 text-sm'>{getErrorMessage(error)}</p>}
        {success && <p className='text-green-600 text-sm'>Password updated successfully.</p>}

        <button
          type='submit'
          disabled={isLoading || mismatch}
          className='bg-black text-background rounded-xs py-3 font-medium w-full disabled:opacity-50'
        >
          {isLoading ? 'Updating...' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}

export default ResetPasswordForm
