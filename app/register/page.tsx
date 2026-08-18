import Footer from '@/components/Footer'
import RegisterForm from '@/components/RegisterForm'
import RegisterIllustration from '@/components/RegisterIllustration'


const page = () => {
  return (
    <main className='bg-background flex flex-col min-h-screen'>
      <div className='flex-1 flex items-center justify-center px-4 py-10 sm:py-16'>
        <div className='w-full max-w-4xl bg-white sm:border sm:border-gray-200 sm:rounded-lg overflow-hidden flex flex-col lg:flex-row'>
          <RegisterIllustration />
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default page
