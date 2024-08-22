import React from 'react'
import Button from './Button'
import Image from 'next/image'
import heroimg from "../../public/assets/heroimg2.png"
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='w-full px-4 flex items-center mb:flex-col mb:gap-6 mb:py-4 mb:justify-center' >
      <div className='mb:w-full mb:text-center  w-1/2 '>
        <h2 className=' text-[64px] leading-none mb:text-2xl font-extrabold lg:text-3xl xl:text-4xl '>
          <span className='text-darkBlue'>Unlock Better Grades with </span>
          <span className='text-customBlue'>Engaging, </span>
          <span className='text-customPink'>Efficient </span>
          <span className='text-darkBlue'>& </span>
          <span className='text-customOrange'>Encouraging </span>
          <span className='text-darkBlue'>Learning!</span>
        </h2>
        <h3 className='text-darkBlue  font-medium text-3xl  w-10/12 mt-12 leading-9  lg:text-xl lg:leading-normal xl:text-lg mb:text-sm mb:w-full mb:leading-normal mb:mt-5'>
        Our eTutors are chosen for their exceptional knowledge and their ability to relate to fellow students. <br />Experience the difference with us and dachieve your academic goals!</h3>
        <div className='pt-20 lg:pt-12 mb:pt-10'>

        <Link href='/SignupAs' > <Button className='text-[34px] px-16 py-6 lg:px-10 lg:text-xl ' btnName='BOOK A FREE SESSION' /></Link> 
        </div>
      </div>
      <div className='mb:w-full w-1/2 '>
        <Image alt='' src={heroimg} />
      </div>
    </div>
  )
}

export default Hero
