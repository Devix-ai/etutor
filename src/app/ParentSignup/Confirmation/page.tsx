import SignUpNavbar from '@/components/SignUpNavbar'
import React from 'react'
import Image from 'next/image';
import back from '../../../../public/assets/signup/confirmation.png';
const page = () => {
  return (
    <div className='flex h-screen flex-col w-full bg-cover bg-center px-16 mb:px-4  min-h-screen min-w-screen "
      '  style={{ backgroundImage: `url(${back.src})` }}>
     <SignUpNavbar/>
     <div className=' m-auto' >
      <div className="  max-w-[55rem]"> {/* Optional dark overlay */}
        <h1 className="text-darkBlue max-w-6xl font-bold sm:text-5xl  text-center p-4  ">
          A confirmation email with a link has been sent to your inbox. 
          <span className='font-light'>Please check your <span className='underline font-light'>email</span> to complete the process.</span>
        </h1>
      </div>
      <div className='flex justify-end pt-40 mb:pt-10 '>
        <div className='rounded-md sm:rounded-2xl text-4xl bg-purpleBtn text-black p-4 cursor-pointer mb:text-sm mb:p-3'>
            Confirmation
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
