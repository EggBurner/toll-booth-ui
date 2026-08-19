import Link from 'next/link'

const DashboardFooter = () => {
  return (
    <footer className='border-t border-gray-200 px-4 sm:px-8 py-6 mt-12'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary'>
        <p>&copy; 2026 Toll Booth Systems. All rights reserved.</p>
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
          <Link href='/privacy' className='underline hover:text-black'>Privacy Policy</Link>
          <Link href='/terms' className='underline hover:text-black'>Terms of Service</Link>
          <Link href='/support' className='underline hover:text-black'>Support</Link>
        </div>
      </div>
    </footer>
  )
}

export default DashboardFooter
