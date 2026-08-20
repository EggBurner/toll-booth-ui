'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Link2, Lock, ExternalLink } from 'lucide-react'

import { useGetRedirectRequestQuery, useVerifyRedirectPinMutation } from '@/services/linkApi'
import type { RedirectRequest, RedirectRequestResponse } from '@/types/Link'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import Footer from '@/components/Footer'
import NotFound from '../not-found'

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

export default function Page() {
    const { shortCode } = useParams<{ shortCode: string }>()

    const { data, isLoading, isError } = useGetRedirectRequestQuery(shortCode)
    const [verifyRedirectPin, { isLoading: isVerifying }] = useVerifyRedirectPinMutation()

    const [redirectInfo, setRedirectInfo] = useState<RedirectRequestResponse | null>(null)
    const [pin, setPin] = useState('')
    const [pinError, setPinError] = useState('')

    useEffect(() => {
        if (data) {
            setRedirectInfo(data)
        }
    }, [data])

    const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPin(e.target.value.replace(/\D/g, '').slice(0, 4))
        setPinError('')
    }

    const handleRedirect = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const redirectRequest: RedirectRequest = {
            shortCode: shortCode,
            pin: redirectInfo?.pinProtected ? pin : ''
        }

        try {
            const response = await verifyRedirectPin(redirectRequest).unwrap()
            if (response.pinMatch) {
                window.location.href = response.targetLink
            } else {
                setPinError('Incorrect pin. Please try again.')
            }
        } catch (err) {
            setPinError(isFetchBaseQueryError(err) ? getErrorMessage(err) : 'Something went wrong. Please try again.')
        }
    }

    if (isError) {
        return <NotFound />
    }

    return (
        <main className='bg-background flex flex-col min-h-screen'>
            <div className='flex-1 flex items-center justify-center px-4 py-10 sm:py-16'>
                <div className='w-full max-w-md border border-gray-200 bg-white rounded-xs px-6 py-8 sm:px-10 sm:py-10 font-standard'>
                    {isLoading || !redirectInfo ? (
                        <p className='text-secondary text-sm'>Loading link details...</p>
                    ) : (
                        <>
                            <h1 className='font-headline text-3xl sm:text-4xl'>You&apos;re being redirected</h1>
                            <p className='text-secondary mt-2 text-sm'>This link will take you to</p>

                            <div className='flex items-center gap-2 border border-gray-200 rounded-xs px-4 py-3 mt-4 bg-background'>
                                <Link2 size={16} className='text-gray-400 shrink-0' />
                                <span className='text-sm truncate'>{redirectInfo.targetLink}</span>
                            </div>

                            <form onSubmit={handleRedirect} className='mt-6 flex flex-col gap-6'>
                                {redirectInfo.pinProtected && (
                                    <div className='flex flex-col gap-2'>
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
                                                required
                                            />
                                        </div>
                                    </div>
                                )}

                                {pinError && <p className='text-red-500 text-sm'>{pinError}</p>}

                                <button
                                    type='submit'
                                    disabled={isVerifying}
                                    className='bg-black text-background rounded-xs py-3 font-medium w-full flex items-center justify-center gap-2 disabled:opacity-50'
                                >
                                    {isVerifying ? 'Verifying...' : redirectInfo.pinProtected ? 'Verify & Continue' : 'Continue to Link'}
                                    <ExternalLink size={16} />
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    )
}
