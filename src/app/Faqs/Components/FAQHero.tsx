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
    <div className='w-100 font-roboto'>
      <div className='h-[80vh] flex justify-center items-center flex-col'>

     
     <div className='w-3/4 m-auto flex items-center justify-center text-center my-10 '>
     <Headings className='text-6xl max-w-3xl' heading='Frequently Asked Questions'/>
        </div>
      
      <p className='text-4xl text-center font-bold  text-darkBlue mt-4 mb:text-lg mb:w-4/5 mb:mx-auto'>Here you'll find answers to the most common questions about our services
      </p>
      </div>
      <div className='grid  grid-cols-4 gap-10 m-auto content-center justify-items-center  w-[90%] py-48 mb:grid-cols-2 mb:w-full mb:gap-5 mb:py-12 tb:grid-cols-3' >
      {content.map((item, index) => (
        <div key={index} className='flex w-[80%] lg:w-full cursor-pointer py-4 flex-col items-center  gap-2 justify-center h-64 lg:h-52  bg-cardbg rounded-[3rem] p-6 mb:w-full mb:h-full tb:rounde-[2rem] mb:rounded-[2rem]'>
          <Image className=' w-1/3' src={item.img} alt={item.Text} />
          <h2 className='text-center text-darkBlue font-extrabold text-3xl mt-2 mb:text-base xl:text-2xl lg:text-xl'>{item.Text}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default FAQHero
