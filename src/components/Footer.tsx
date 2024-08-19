import React from 'react'
import logo from "../../public/assets/logo.png"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='px-10 bg-cardbg py-12 mb:p-5'>
      <div className='flex justify-around items-start mb:flex-col'>
        <div className='mb:py-4'>
          <Link href=''> <Image alt='' src={logo} /></Link>
        </div>
        <div className='flex flex-col row-gap-5 text-xs text-[#251F3A] mb:row-gap-3 mb:pt-4'>
          <h2 className='text-xl font-bold mb:text-base'>Additional Resources</h2>
          <Link href=''>Question Bank</Link>
          <Link href=''>Terms and Conditions</Link>
          <Link href=''>Privacy Policy</Link>
          <Link href=''>Cookie Policy</Link>
        </div>
        <div className='flex flex-col row-gap-5 text-xs text-[#251F3A] mb:row-gap-3 mb:pt-4'>
          <h2 className='text-xl font-bold mb:text-base'>Our Services</h2>
          <Link href=''>Online Tutoring</Link>
          <Link href=''>For Employees</Link>
          <Link href=''>GCSE Exam</Link>
          <Link href=''>MarkMyGCSE</Link>
        </div>
        <div className='flex flex-col row-gap-5 text-xs text-[#251F3A] mb:row-gap-3 mb:pt-4'>
          <h2 className='text-xl font-bold mb:text-base'>Private Tutoring</h2>
          <Link href=''>Math Tutors</Link>
          <Link href=''>English Tutors</Link>
          <Link href=''>Physics Tutor</Link>
          <Link href=''>GCSE Tutors</Link>
        </div>
        <div className='flex flex-col row-gap-5 text-xs text-[#251F3A] mb:row-gap-3 mb:pt-4'>
          <h2 className='text-xl font-bold mb:text-base'>More Information</h2>
          <Link href=''>Frequently Asked Questions</Link>
          <Link href=''>About etutor4me</Link>
          <Link href=''>Join Us</Link>
          <Link href=''>Blog</Link>
        </div>

      </div>
      <div className=' text-[#251F3A] flex flex-col mt-32 mb:mt-10 mb:text-sm'>
        <Link href=''>contact@etutor4me.com</Link>
        <Link href='' className='mt-3'>Contact us on: <span className='text-green-500'>Whatsapp</span></Link>
        <p className='mt-32 mb:mt-10'>Copyright 2024 / etutor4me</p>
      </div>
    </div>
  )
}

export default Footer
