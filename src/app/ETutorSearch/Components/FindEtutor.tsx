import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
const FindEtutor = () => {
  return (
    <div className='flex flex-col justify-center items-center  gap-10 mb:h-full mb:gap-4' style={{height:'80vh'}}>
      <h2 className='text-5xl font-extrabold mb:text-3xl'> Find your <span className='text-customOrange'>eTutor</span></h2>
      <p className='max-w-2xl text-2xl text-center mb:text-base'>
        Find the best private tutors online, book a free trial and arrange a meeting
        with one of our vetted tutors.
      </p>
    <Link href='/SignupAs' > <Button className='py-6 mb:py-4' btnName='BOOK A FREE SESSION'/></Link> 
    </div>
  )
}

export default FindEtutor
