import React from 'react'
import logo from "../../public/assets/signup/signuplogo.svg"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='px-10 bg-cardbg py-12 mb:p-5 font-roboto'>
      <div className='flex justify-between items-start mb:flex-col mb:gap-5'>
        <div className='flex flex-col justify-between gap-8 mb:py-4 xl:gap-5 mb:gap-4'>
          <Link  href=''> <Image alt='' src={logo} /></Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-lg mb:text-sm' href=''>contact@etutor4me.com</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-lg mb:text-sm' href='' >Contact us on: <span className='text-green-500'>Whatsapp</span></Link>
        </div>
        <div className='flex flex-col gap-8 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-3xl text-darkBlue font-bold mb:text-base xl:text-xl xl:row-gap-5 lg:text-xl'>Additional Resources</h2>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Question Bank</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base  mb:text-sm' href=''>Terms and Conditions</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base  mb:text-sm' href=''>Privacy Policy</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base  mb:text-sm' href=''>Cookie Policy</Link>
        </div>
        <div className='flex flex-col gap-8 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-3xl text-darkBlue font-bold mb:text-base xl:text-xl lg:text-xl'>Our Services</h2>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Online Tutoring</Link>
          <Link className='text-xl text-darkBlue lg:text-base mb:text-sm' href=''>For Employees</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>GCSE Exam</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>MarkMyGCSE</Link>
        </div>
        <div className='flex flex-col gap-8 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-3xl text-darkBlue font-bold mb:text-base xl:text-xl lg:text-xl'>Private Tutoring</h2>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Math Tutors</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>English Tutors</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Physics Tutor</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>GCSE Tutors</Link>
        </div>
        <div className='flex flex-col gap-8 text-xs text-[#251F3A] mb:gap-3 mb:pt-4 xl:gap-5 lg:gap-4'>
          <h2 className='text-3xl text-darkBlue font-bold mb:text-base xl:text-xl lg:text-xl'>More Information</h2>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm'  href=''>Frequently Asked Questions</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>About etutor4me</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Join Us</Link>
          <Link className='text-xl text-darkBlue xl:text-lg lg:text-base mb:text-sm' href=''>Blog</Link>
        </div>

      </div>
      <div className=' text-[#251F3A] flex flex-col mt-2 mb:mt-10 mb:text-sm'>
        {/* <Link href=''>contact@etutor4me.com</Link>
        <Link href='' className='mt-3'>Contact us on: <span className='text-green-500'>Whatsapp</span></Link> */}
        <p className='mt-12 mb:mt-10'>Copyright 2024 / etutor4me</p>
      </div>
    </div>
  )
}

export default Footer
