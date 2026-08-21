'use client'

import React from 'react'
import { Link2, BarChart2, Calendar } from 'lucide-react'
import { useAppSelector } from '@/libs/hooks'
import CopyLinkButton from './CopyLinkButton'

const AllLinks = () => {

    const rawLinks = useAppSelector((state) => state.links.items)

    const links = [...rawLinks].sort((a,b) => new Date(b.linkDateCreated).getTime() - new Date(a.linkDateCreated).getTime())

    
  return (
      <div className='flex flex-col border border-gray-200 rounded-xs bg-white divide-y divide-gray-200'>
        {links.length === 0 && (
          <p className='px-6 py-5 text-sm text-secondary'>No links yet — create your first one.</p>
        )}

        {links.map((link) => (
          <div key={link._id} className='px-6 py-5'>
            <p className='flex items-center justify-between gap-2 font-medium'>
              <span className='flex items-center gap-2 min-w-0'>
                <Link2 size={16} className='text-secondary shrink-0' />
                <span className='truncate'>https://toll-booth-ui.vercel.app/{link.shortCode}</span>
              </span>
              <CopyLinkButton link={`https://toll-booth-ui.vercel.app/${link.shortCode}`} />
            </p>
            <p className='text-sm text-secondary mt-1 truncate'>{link.targetLink}</p>
            <div className='flex items-center gap-4 text-xs text-secondary mt-3'>
              <span className='flex items-center gap-1'>
                <Calendar size={14} />
                {new Date(link.linkDateCreated).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className='flex items-center gap-1'>
                <BarChart2 size={14} />
                {link.visitCount} Clicks
              </span>
            </div>
          </div>
        ))}
      </div>
  )
}

export default AllLinks
