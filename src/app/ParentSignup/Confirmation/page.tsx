import SignUpNavbar from '@/components/SignUpNavbar'
import React from 'react'
import Image from 'next/image';
import back from '../../../../public/assets/signup/confirmation.png';
const page = () => {
  return (
    <div className='flex h-screen flex-col w-full bg-cover bg-center px-16 mb:px-4  "
      '  style={{ backgroundImage: `url(${back.src})` }}>
     <SignUpNavbar/>
     <div className='h-full m-auto' >
      <div className=" m-auto pt-20 mb:w-full mb:m-auto mb:pt-10"> {/* Optional dark overlay */}
        <h1 className="text-darkBlue max-w-6xl font-bold text-5xl md:text-2xl text-center p-4 mb:text-xl ">
          A confirmation email with a link has been sent to your inbox. 
          <span className='font-light'>Please check your <span className='underline font-light'>email</span> to complete the process.</span>
        </h1>
      </div>
      <div className='flex justify-end pt-40 mb:pt-10 '>
        <div className='rounded-3xl text-xl bg-purpleBtn p-4 cursor-pointer mb:text-sm mb:p-3'>
            Confirmation
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
