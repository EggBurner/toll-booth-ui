import Link from 'next/link'
import { Link2, Calendar, BarChart2, ArrowRight } from 'lucide-react'
import { dashboardLinksData } from '@/libs/data/DashboardLinks'

const LatestLinks = () => {
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
        {dashboardLinksData.map((link) => (
          <div key={link.shortUrl} className='px-6 py-5'>
            <p className='flex items-center gap-2 font-medium'>
              <Link2 size={16} className='text-secondary shrink-0' />
              {link.shortUrl}
            </p>
            <p className='text-sm text-secondary mt-1 truncate'>{link.longUrl}</p>
            <div className='flex items-center gap-4 text-xs text-secondary mt-3'>
              <span className='flex items-center gap-1'>
                <Calendar size={14} />
                {link.date}
              </span>
              <span className='flex items-center gap-1'>
                <BarChart2 size={14} />
                {link.clicks} Clicks
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestLinks
