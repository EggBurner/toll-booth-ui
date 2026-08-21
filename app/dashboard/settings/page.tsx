import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardTopbar from '@/components/dashboard/DashboardTopbar'
import DashboardFooter from '@/components/dashboard/DashboardFooter'
import ResetPasswordForm from '@/components/dashboard/ResetPasswordForm'

const SettingsPage = () => {
  return (
    <div className='flex min-h-screen bg-background'>
      <DashboardSidebar />

      <div className='flex-1 flex flex-col min-w-0'>
        <DashboardTopbar />

        <main className='flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8'>
          <h1 className='font-headline text-3xl sm:text-4xl'>Settings</h1>
          <p className='text-secondary mt-2 text-sm'>Manage your account preferences.</p>

          <ResetPasswordForm />
        </main>

        <DashboardFooter />
      </div>
    </div>
  )
}

export default SettingsPage
