"use client"

import { useEffect, useState, type ReactNode } from 'react'
import { useAppDispatch } from '@/libs/hooks'
import { hydrate, AUTH_STORAGE_KEY } from '@/libs/authSlice'
import type { LoginResponseUser } from '@/types/auth'

const AuthInitializer = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)

    if (stored) {
      try {
        dispatch(hydrate(JSON.parse(stored) as LoginResponseUser))
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY)
      }
    }

    setHasHydrated(true)
  }, [dispatch])

  if (!hasHydrated) return null

  return <>{children}</>
}

export default AuthInitializer
