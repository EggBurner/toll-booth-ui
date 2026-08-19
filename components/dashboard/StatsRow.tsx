"use client"

import { Link2, MousePointerClick, QrCode } from 'lucide-react'
import { useAppSelector } from '@/libs/hooks'
import { useGetLinksQuery } from '@/services/linkApi'
import StatCard from './StatCard'

const StatsRow = () => {
  const user = useAppSelector((state) => state.auth.user)
  const { data: links = [] } = useGetLinksQuery(
    { userId: user?._id ?? '' },
    { skip: !user?._id }
  )

  const totalClicks = links.reduce((sum, link) => sum + link.visitCount, 0)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
      <StatCard icon={Link2} value={links.length} label='Links Created' />
      <StatCard icon={QrCode} value={'—'} label='QR Generated' />
      <StatCard icon={MousePointerClick} value={totalClicks} label='Clicks Counted' />
    </div>
  )
}

export default StatsRow
