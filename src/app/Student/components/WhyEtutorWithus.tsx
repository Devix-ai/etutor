import React from 'react'
import Headings from '@/components/Headings'
import Image from 'next/image'
import icon1 from "../../../../public/assets/icons/icon1.svg"
import icon2 from "../../../../public/assets/icons/icon2.svg"
import icon3 from "../../../../public/assets/icons/icon3.svg"
import icon4 from "../../../../public/assets/icons/icon4.svg"
const WhyEtutorWithus = () => {
  return (
    <div className='px-12 py-16 mb:px-0 mb:py-6'>
      <Headings className='' heading='Why become an eTutor with us?' />
      <div className='py-16 mb:py-4 '>
        <div className='flex  justify-between w-full py-16 mb:flex-col mb:py-4 mb:w-full '>


          <div className='flex w-screen justify-between mb:flex-col mb:py-4 mb:w-full'>

            <div className='flex  items-start gap-16  w-1/2  mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
              <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
                <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon1} />
              </div>
              <div className='text-darkBlue mb:w-2/3'>
                <h2 className=' bold text-4xl font-extrabold mb:text-lg'>Work from Anywhere</h2>
                <p className='max-w-xs  mb:text-xs mb:max-w-none '>
                  Enjoy the freedom to tutor from anywhere
                  in the world, whether you're at home,
                  in a café, or traveling, and connect with
                  students online for valuable sessions.
                </p>
              </div>
            </div>
            <div className='flex  items-start gap-16  w-1/2  mb:gap-8 mb:w-full mb:m-auto'>
              <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
                <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon2} />
              </div>
              <div className='text-darkBlue mb:w-2/3'>
                <h2 className=' bold text-4xl font-extrabold mb:text-lg'>Flexible Scheduling</h2>
                <p className='max-w-xs  mb:text-xs mb:max-w-none '>
                  As an eTutor, you control your schedule,
                  fitting sessions around your commitments
                  with our flexible platform.
                  community involvement
                </p>
              </div>
            </div>


          </div>


        </div>
        <div className='flex w-full justify-between mb:flex-col mb:py-0 mb:w-full'>

          <div className='flex  items-start gap-16  w-1/2  mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
            <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
              <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon3} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-extrabold mb:text-lg'>Constant Pay Increases</h2>
              <p className='max-w-xs  mb:text-xs mb:max-w-none '>
                className='max-w-xs  mb:max-w-none mb:text-xs'
                Your dedication and hard work lead to constant
                pay increases, as leveling up and student success
                directly boost your earnings.
              </p>
            </div>
          </div>
          <div className='flex  items-start gap-16  w-1/2  mb:gap-8 mb:w-full mb:m-auto'>
            <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
              <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon4} />
            </div>
            <div className='text-darkBlue mb:w-2/3'>
              <h2 className=' bold text-4xl font-extrabold mb:text-lg'>Gamified Tutoring</h2>
              <p className='max-w-xs  mb:text-xs mb:max-w-none '>
                Our unique system lets you level up
                like in a game, with your progress based
                on tutoring effectiveness, activity, and
                community involvement
              </p>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default WhyEtutorWithus
