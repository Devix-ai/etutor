import Headings from '@/components/Headings'
import React from 'react'
import img1 from "../../../../public/assets/homepage/blueaward.png"
import img2 from "../../../../public/assets/homepage/findtutor.png"
import img3 from "../../../../public/assets/homepage/packages.png"
import img4 from "../../../../public/assets/homepage/questions.png"
import img5 from "../../../../public/assets/homepage/generalquestion.png"
import img6 from "../../../../public/assets/homepage/booking.png"
import img7 from "../../../../public/assets/homepage/security.png"
import img8 from "../../../../public/assets/homepage/etutor.png"
import Image from 'next/image'
const FAQHero = () => {

   const content = [
    {
        Text:`Become aneTutor `,
        img:img1,
    },
    {
        Text:`For eTutors `,
        img:img2,
    },
    {
        Text:`Packages `,
        img:img3,
    },
    {
        Text:`Technical questions`,
        img:img4,
    },
    {
        Text:`General questions `,
        img:img5,
    },
    {
        Text:`Booking`,
        img:img6,
    },
    {
        Text:`Security`,
        img:img7,
    },
    {
        Text:`eTutor4Me`,
        img:img8,
    },
   ] 
  return (
    <div className='w-100'>
     <div className='w-3/4 m-auto flex items-center justify-center text-center my-10 '>
     <Headings className='text-6xl max-w-3xl' heading='Frequently Asked Questions'/>
        </div>
      
      <p className='text-2xl text-center font-bold  text-darkBlue mt-4 mb:text-lg mb:w-4/5 mb:m-auto'>Here you'll find answers to the most common questions about our services
      </p>
      <div className='grid  grid-cols-4 row-gap-10 m-auto content-center justify-items-center  w-11/12 py-48 mb:grid-cols-2 mb:w-full mb:gap-5 mb:py-12' >
      {content.map((item, index) => (
        <div key={index} className='flex flex-col items-center  gap-2 justify-center h-56 w-56 bg-cardbg rounded-3xl p-4 mb:w-full mb:h-full'>
          <Image className='w-20 h-20 mb:w-12 mb:h-12' src={item.img} alt={item.Text} />
          <h2 className='text-center text-darkBlue font-extrabold text-2xl mt-2 mb:text-base'>{item.Text}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default FAQHero
