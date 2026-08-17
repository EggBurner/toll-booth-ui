import Image from 'next/image'
import React from 'react'

const LoginIllustration = () => {
  return (
    <div className='hidden lg:flex lg:w-1/2 bg-background items-center justify-center p-10 border-t lg:border-t-0 lg:border-l border-gray-200'>
      <Image
        alt='Login Illustration'
        src={"/login-illustration.png"}
        width={400}
        height={400}
        className='w-full max-w-sm'
        unoptimized
      />
    </div>
  )
}

export default LoginIllustration
