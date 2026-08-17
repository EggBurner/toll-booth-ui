import { Camera, Send, Code2, Globe } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-16 px-8'>
      <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
        <div className='flex items-center gap-3'>
          <span className='font-bold text-lg'>Toll Booth</span>
          <Camera size={16} className='text-gray-400' />
          <Send size={16} className='text-gray-400' />
          <Code2 size={16} className='text-gray-400' />
          <Globe size={16} className='text-gray-400' />
        </div>
      </div>

      <div className='flex items-center justify-between border-t border-gray-100 py-4 text-sm text-gray-500'>
        <p>© 2026 Toll Booth All rights reserved.</p>
        <div className='flex items-center gap-6'>
          <Link href='/terms' className='hover:text-gray-800'>Terms &amp; conditions</Link>
          <Link href='/privacy' className='hover:text-gray-800'>Privacy policy</Link>
          <Link href='https://www.linkedin.com/in/abdullah-islam-857816254/' className='hover:text-gray-800'>@Abdullah Islam</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer