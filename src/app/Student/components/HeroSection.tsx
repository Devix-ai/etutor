import React from 'react'
import Image from 'next/image'
import img from "../../../../public/assets/homepage/studenthero.png"
import Button from '@/components/Button'
const HeroSection = () => {
  return (
    <div className='w-full flex items-center h-lvh mb:flex-col mb:flex mb:items-center mb:text-center mb:justify-center mb:gap-10 mb:py-8' >
      <div className='w-1/2 mb:w-full'>
        <h2 className=' font-extrabold text-5xl mb:text-3xl'>
          <span className='text-darkBlue'>Become an  </span>
          <span className='text-customOrange'>eTutor </span>
          <span className='text-darkBlue'>and join our  </span>
          <span className='text-customBlue'>Global Team </span>

        </h2>
        <h3 className='text-black max-w-md mt-6 mb:mt-3 '>Transform Learning,Level Up, & Earn from anywhere</h3>
        <div className='mt-10 mb:mt-6'>

          <Button className='' btnName='BECOME AN eTUTOR' />
        </div>
      </div>
      <div className='w-1/2 mb:w-full '>
        <Image alt='' src={img} />
      </div>
    </div>
  )
}

export default HeroSection
