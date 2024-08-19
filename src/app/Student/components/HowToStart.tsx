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
    <div className='px-10 mb:px-0'>
      <Headings heading='How to get started'/>
      <div className='flex flex-col gap-12 py-16 mb:py-12'>
      <div className='flex  items-start gap-16 mb:gap-6'>
      <div className='w-16 h-16 bg-cardbg rounded-xl relative '>
              <Image className='absolute left-0 w-16 h-12 ' style={{left:'15px',bottom:'-10px'}} src={icon1} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-2xl font-bold mb:text-xl'>Apply</h2>
                <p className='max-w-lg mb:text-xs'>
                Sign up and complete our selection process to become an eTutor.
                </p>
            </div>
      </div>
      <div className='flex  items-start gap-16 mb:gap-6'>
      <div className='w-16 h-16 bg-cardbg rounded-xl relative'>
              <Image className='absolute left-0 w-16 h-16' style={{left:'15px',bottom:'-10px'}} src={icon2} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-2xl font-bold mb:text-xl'>Tutor</h2>
                <p className='max-w-lg mb:text-xs'>
                Start tutoring students, providing engaging and effective lessons.
                </p>
            </div>
      </div>
      <div className='flex  items-start gap-16  mb:gap-6 '>
      <div className='w-16 h-16 bg-cardbg rounded-xl relative'>
              <Image className='absolute left-0 w-16 h-16 mb:h-12 ' style={{left:'15px',bottom:'-10px'}} src={icon3} />
            </div>
            <div className='text-darkBlue  mb:w-2/3'>
              <h2 className=' bold text-2xl font-bold mb:text-xl'>Level Up</h2>
                <p className='max-w-lg mb:text-xs'>
                Increase your level based on tutoring success, activity, and community
                involvement.                </p>
            </div>
      </div>
      <div className='flex  items-start gap-16  mb:gap-6'>
      <div className='w-16 h-16 bg-cardbg rounded-xl relative'>
              <Image className='absolute left-0 w-16 h-16 ' style={{left:'15px',bottom:'-10px'}} src={icon4} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-2xl font-bold mb:text-xl'>Earn More</h2>
                <p className='max-w-lg mb:text-xs'>
                Enjoy continuous pay increases as you advance through the levels.                </p>
            </div>
      </div>
      <div className='flex  items-start gap-16 mb:gap-6'>
      <div className='w-16 h-16 bg-cardbg rounded-xl relative'>
              <Image className='absolute left-0 w-16 h-16 mb:h-12' style={{left:'15px',bottom:'-10px'}} src={icon5} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-2xl font-bold mb:text-xl '>Flexible Work</h2>
                <p className='max-w-lg mb:text-xs'>
                Schedule sessions at your convenience and work from anywhere in the world.                </p>
            </div>
      </div>
      </div>
      
    </div>
  )
}

export default HowToStart
