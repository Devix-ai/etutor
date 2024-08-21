import React from 'react'
import Headings from '@/components/Headings'
import Image from 'next/image'
import icon1 from "../../../../public/assets/icons/icon1.svg"
import icon2 from "../../../../public/assets/icons/icon2.svg"
import icon3 from "../../../../public/assets/icons/icon3.svg"
import icon4 from "../../../../public/assets/icons/icon4.svg"
const WhyEtutorWithus = () => {
  return (
    <div className='px-12 py-16 mb:px-0 mb:py-6 pt-64 lg:px-0 lg:pt-12'>
      <Headings className='' heading='Why become an eTutor with us?' />
      <div className='py-16 mb:py-4 font-roboto'>
        <div className='flex  justify-between w-full py-16 mb:flex-col mb:py-4 mb:w-full '>

          <div className='flex w-screen justify-between mb:flex-col mb:py-4 mb:w-full'>

            <div className='flex  items-start gap-16  w-[40%] lg:w-1/2 xl:w-[50%] lg:gap-8 mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
              <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
                <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon1} />
              </div>
              <div className='text-darkBlue  mb:w-2/3'>
                <h2 className=' bold text-5xl font-extrabold mb:text-lg xl:text-4xl lg:text-3xl'>Work from Anywhere</h2>
                <p className='max-w-[28rem] mt-5 text-3xl  mb:text-xs mb:max-w-none lg:text-2xl xl:text-2xl mb:mt-2'>
                  Enjoy the freedom to tutor from anywhere
                  in the world, whether you're at home,
                  in a café, or traveling, and connect with
                  students online for valuable sessions.
                </p>
              </div>
            </div>
            <div className='flex  items-start gap-16 xl:w-[50%]  lg:w-1/2 lg:gap-8  w-[40%]  mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
              <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
                <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon2} />
              </div>
              <div className='text-darkBlue mb:w-2/3'>
                <h2 className=' bold text-5xl font-extrabold mb:text-lg xl:text-4xl lg:text-3xl'>Flexible Scheduling</h2>
                <p className='max-w-[28rem] mt-5 text-3xl  mb:text-xs mb:max-w-none lg:text-2xl  xl:text-2xl mb:mt-2'>
                As an eTutor, you control your schedule,
                  fitting sessions around your commitments
                  with our flexible platform.
                  community involvement
                </p>
              </div>
            </div>
           
          </div>


        </div>
     
        <div className='flex  justify-between w-full py-16 mb:flex-col mb:py-4 mb:w-full mb:pt-0'>

<div className='flex w-screen justify-between mb:flex-col mb:py-4 mb:w-full mb:pt-0'>

  <div className='flex  items-start gap-16 w-[40%] xl:w-[50%]  lg:w-1/2 lg:gap-8  mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
    <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
      <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon3} />
    </div>
    <div className='text-darkBlue mb:w-2/3'>
      <h2 className=' bold text-5xl font-extrabold mb:text-lg xl:text-4xl lg:text-3xl'>Constant Pay Increases</h2>
      <p className='max-w-[28rem] mt-5 text-3xl  mb:text-xs mb:max-w-none lg:text-2xl xl:text-2xl mb:mt-2'>
      Your dedication and hard work lead to constant
                pay increases, as leveling up and student success
                directly boost your earnings.
      </p>
    </div>
  </div>
  <div className='flex  items-start gap-16  w-[40%] xl:w-[50%]  lg:w-1/2 lg:gap-8 mb:gap-8 mb:w-full mb:m-auto mb:py-4 '>
    <div className='w-20 h-20  bg-cardbg rounded-xl relative'>
      <Image alt='' className='absolute left-0 mb:h-full ' style={{ left: '15px', bottom: '-10px' }} src={icon4} />
    </div>
    <div className='text-darkBlue mb:w-2/3'>
      <h2 className=' bold text-5xl font-extrabold mb:text-lg xl:text-4xl lg:text-3xl'>Gamified Tutoring</h2>
      <p className='max-w-[28rem] mt-5 text-3xl  mb:text-xs mb:max-w-none lg:text-2xl xl:text-2xl mb:mt-2'>
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


    </div>
  )
}

export default WhyEtutorWithus
