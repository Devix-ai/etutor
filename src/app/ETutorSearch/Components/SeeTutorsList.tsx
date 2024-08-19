import Headings from '@/components/Headings'
import React from 'react'
import blackbg from "../../../../public/assets/homepage/listbackpic.png"
import Button from '@/components/Button'
import Link from 'next/link'
const SeeTutorsList = () => {
  return (
    <div   className=' flex items-center justify-center  flex-col bg-cover py-12 my-32 bg-gray-400 bg-center  w-full rounded-3xl mb:my-20 mb:px-8 mb:py-0 '
    style={{ 
        height: '30rem', 
        width: '100%', 
        backgroundImage: `url(${blackbg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
        <h2 className='text-4xl text-gray-600 mb:text-xl'>600+ More eTutors found</h2>
      <Headings className='mb:mt-2' heading='Sign up to see the full list'/>
     <Link href='/SignupAs'><Button className='py-5 mt-10' btnName='SEE THE FULL LIST'/></Link> 
    </div>
  )
}

export default SeeTutorsList
