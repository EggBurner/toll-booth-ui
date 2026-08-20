import AllLinks from '@/components/dashboard/AllLinks'
import DashboardFooter from '@/components/dashboard/DashboardFooter'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar'
import React from 'react'

const page = () => {
  return (
    <>
         <div className='flex min-h-screen bg-background'>
      <DashboardSidebar />

      <div className='flex-1 flex flex-col min-w-0'>
        <DashboardTopbar />

        <main className='flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8'>
          <AllLinks />
        </main>

        <DashboardFooter />
      </div>
    </div>
    </>
  )
}

export default page
