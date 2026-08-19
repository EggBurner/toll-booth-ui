"use client"

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '@/libs/hooks'
import { logout } from '@/libs/authSlice'

const UserMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const user = useAppSelector((state) => state.auth.user)

  const initials = user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : '?'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    setOpen(false)
    router.push('/')
  }

  return (
    <div className='relative shrink-0' ref={menuRef}>
      <button
        aria-label='Account menu'
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium hover:ring-2 hover:ring-gray-300'
      >
        {initials}
      </button>

      {open && (
        <div
          role='menu'
          className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50'
        >
          {user && (
            <div className='px-4 py-2 border-b border-gray-100'>
              <p className='text-sm font-medium truncate'>{user.firstName} {user.lastName}</p>
              <p className='text-xs text-secondary truncate'>{user.email}</p>
            </div>
          )}
          <button
            role='menuitem'
            onClick={handleLogout}
            className='w-full flex items-center gap-2 px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-50'
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default UserMenu
