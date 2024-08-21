import Headings from '@/components/Headings'
import React from 'react'
import Image from 'next/image'
import icon1 from "../../../../public/assets/icons/applyicon.svg"
import icon2 from "../../../../public/assets/icons/tutoricon.svg"
import icon3 from "../../../../public/assets/icons/levelupicon.svg"
import icon4 from "../../../../public/assets/icons/earnicon.svg"
import icon5 from "../../../../public/assets/icons/flexibleicon.svg"
const HowToStart = () => {
  return (
    <div className='px-10 pt-32 mb:px-0 font-roboto lg:px-0 mb:pt-8'>
      <Headings heading='How to get started'/>
      <div className='flex justify-between lg:gap-4 gap-12 py-16 mb:py-12 mb:flex-col'>
        
        <div className='w-[50%] flex flex-col gap-24 mb:w-full mb:gap-10'>
        <div className='flex w-full  items-start gap-[10%] mb:gap-6'>
      <div className='w-20 h-20 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'20px',bottom:'-10px'}} src={icon1} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Apply</h2>
                <p className=' text-2xl xl:text-xl mb:text-xs lg:text-base mt-2'>
                Sign up and complete our selection process to become an eTutor.               </p>
            </div>
      </div>
        <div className='flex w-full  items-start gap-[10%] mb:gap-6'>
      <div className='w-20 h-20 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'20px',bottom:'-10px'}} src={icon2} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Tutor</h2>
                <p className=' text-2xl xl:text-xl mb:text-xs lg:text-base mt-2'>
                Start tutoring students, providing engaging and effective lessons.                </p>
            </div>
      </div>
        <div className='flex w-full  items-start gap-[10%] mb:gap-6'>
      <div className='w-20 h-20 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'20px',bottom:'-10px'}} src={icon3} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Level Up</h2>
                <p className=' text-2xl xl:text-xl mb:text-xs lg:text-base mt-2'>
                Increase your level based on tutoring success, activity, and community
                involvement.                </p>
            </div>
      </div>
       
      
        </div>
        <div className='w-[50%] flex flex-col gap-24 mb:w-full mb:gap-10'>
        <div className='flex w-full  items-start gap-[10%] mb:gap-6'>
      <div className='w-20 h-20 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'20px',bottom:'-10px'}} src={icon4} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Earn More</h2>
                <p className=' text-2xl xl:text-xl mb:text-xs lg:text-base mt-2'>
                Enjoy continuous pay increases as you advance through
                the levels.                </p>
            </div>
      </div>
        <div className='flex w-full  items-start gap-[10%] mb:gap-6'>
      <div className='w-20 h-20 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'20px',bottom:'-10px'}} src={icon5} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-bold xl:text-3xl mb:text-xl lg:text-2xl'>Flexible Work</h2>
                <p className=' text-2xl xl:text-xl mb:text-xs lg:text-base mt-2'>
                Schedule sessions at your convenience and work from
                anywhere in the world.
                </p>
            </div>
      </div>
       
      
        </div>
      
      
      </div>
      
    </div>
  )
}

export default HowToStart
