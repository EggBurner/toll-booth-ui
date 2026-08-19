import { Link2, QrCode, MousePointerClick } from 'lucide-react'

import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar'
import DashboardFooter from '@/components/dashboard/DashboardFooter'
import WelcomeCard from '@/components/dashboard/WelcomeCard'
import StatCard from '@/components/dashboard/StatCard'
import LatestLinks from '@/components/dashboard/LatestLinks'

const DashboardPage = () => {
  return (
    <div className='flex min-h-screen bg-background'>
      <DashboardSidebar />

      <div className='flex-1 flex flex-col min-w-0'>
        <DashboardTopbar />

        <main className='flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8'>
          <WelcomeCard />

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
            <StatCard icon={Link2} value={4} label='Links Created' />
            <StatCard icon={QrCode} value={4} label='QR Generated' />
            <StatCard icon={MousePointerClick} value={18} label='Clicks Counted' />
          </div>

          <LatestLinks />
        </main>

        <DashboardFooter />
      </div>
    </div>
  )
}

export default DashboardPage
