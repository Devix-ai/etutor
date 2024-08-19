import React from 'react'
import Button from './Button'
import Image from 'next/image'
import heroimg from "../../public/assets/heroimg.png"
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='w-full flex items-center mb:flex-col mb:gap-6 mb:py-4 mb:justify-center' >
      <div className='mb:w-full mb:text-center  w-1/2 '>
        <h2 className=' font-bold text-4xl mb:text-2xl'>
          <span className='text-darkBlue'>Unlock Better Grades with </span>
          <span className='text-customBlue'>Engaging, </span>
          <span className='text-customPink'>Efficient </span>
          <span className='text-darkBlue'>& </span>
          <span className='text-customOrange'>Encouraging </span>
          <span className='text-darkBlue'>Learning!</span>
        </h2>
        <h3 className='text-black max-w-md mt-6 mb:text-sm '>Our eTutors are chosen for their exceptional knowledge and their ability to relate to fellow students Experience the difference with us and dachieve your academic goals!</h3>
        <div className='mt-10'>

        <Link href='/SignupAs' > <Button className='' btnName='BOOK A FREE LESSON' /></Link> 
        </div>
      </div>
      <div className='mb:w-full w-1/2 '>
        <Image alt='' src={heroimg} />
      </div>
    </div>
  )
}

export default Hero
