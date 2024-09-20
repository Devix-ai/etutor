import SignUpNavbar from '@/components/SignUpNavbar'
import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/signupAs.png"
import QuestionBtn from '../ParentSignup/Components/QuestionBtn'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='transition-all'>
      <SignUpNavbar/>
      <div className='flex 2xl:mt-10 w-10/12 2xl:w-[90%] mr-auto gap-24 justify-between h-full mt-auto mb:gap-5 mb:w-full mb:p-8 mb:flex-col-reverse'>
        <div className='w-1/2  mb:w-full'>

        <Image className='w-full h-full' src={img} alt=''/>
        </div>
        <div className='w-1/2 2xl:w-[40%] pt-10 text-center mb:w-full mb:pt-4'>
           <Link href='/signin/parentsignin' > <QuestionBtn className='font-extrabold py-5 border-none' btnName='I’m a Parent' /></Link>
           <Link href='/signin/studentsignin' > <QuestionBtn className='font-extrabold py-5 border-none' btnName='I’m a Student' /></Link>
           <Link href='/signin/tutorsignin' > <div className='text-2xl font-extrabold  py-6 text-customOrange mb:text-sm mb:py-3'>I’m an eTutor</div></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Page
