"use client"

import Link from 'next/link'
import { Link2, Calendar, BarChart2, ArrowRight } from 'lucide-react'
import { useAppSelector } from '@/libs/hooks'
import CopyLinkButton from './CopyLinkButton'

const LatestLinks = () => {
  const links = useAppSelector((state) => state.links.items)

  const latest = [...links]
    .sort((a, b) => new Date(b.linkDateCreated).getTime() - new Date(a.linkDateCreated).getTime())
    .slice(0, 3)

  return (
    <div className='mt-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='font-headline text-2xl'>Latest Links</h2>
        <Link href='/dashboard/links' className='text-sm font-medium flex items-center gap-1 hover:text-secondary'>
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className='flex flex-col border border-gray-200 rounded-xs bg-white divide-y divide-gray-200'>
        {latest.length === 0 && (
          <p className='px-6 py-5 text-sm text-secondary'>No links yet — create your first one.</p>
        )}

        {latest.map((link) => (
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
    </div>
  )
}

export default LatestLinks
