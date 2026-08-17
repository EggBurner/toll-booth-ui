import Footer from '@/components/Footer'
import LoginForm from '@/components/LoginForm'
import LoginIllustration from '@/components/LoginIllustration'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='bg-background flex flex-col min-h-screen'>
      <div className='flex-1 flex items-center justify-center px-4 py-10 sm:py-16'>
        <div className='w-full max-w-4xl bg-white sm:border sm:border-gray-200 sm:rounded-lg overflow-hidden flex flex-col lg:flex-row'>
          <LoginForm />
          <LoginIllustration />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default LoginPage
