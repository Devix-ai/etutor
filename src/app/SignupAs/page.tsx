import SignUpNavbar from '@/components/SignUpNavbar'
import React from 'react'
import Image from 'next/image'
import img from "../../../public/assets/signupAs.png"
import QuestionBtn from '../ParentSignup/Components/QuestionBtn'
import Link from 'next/link'
const Page = () => {
  return (
    <div>
      <SignUpNavbar/>
      <div className='flex w-10/12 mr-auto gap-24 justify-between h-full mt-auto mb:gap-5 mb:w-full mb:p-8 mb:flex-col-reverse'>
        <div className='w-1/2 mb:w-full'>

        <Image className='w-full h-full' src={img} alt=''/>
        </div>
        <div className='w-1/2 pt-10 text-center mb:w-full mb:pt-4'>
           <Link href='/ParentSignup' > <QuestionBtn className='font-extrabold py-5 border-none' btnName='I’m a Parent' /></Link>
           <Link href='/StudentSignup' > <QuestionBtn className='font-extrabold py-5 border-none' btnName='I’m a Student' /></Link>
           <Link href='' > <div className='text-2xl font-extrabold  py-6 text-customOrange mb:text-sm mb:py-3'>I’m an eTutor</div></Link>
           
        </div>
      </div>
    </div>
  )
}

export default Page
