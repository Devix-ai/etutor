import Headings from '@/components/Headings'
import React from 'react'
import balance from "../../../../public/assets/homepage/balance.png"
import trial from "../../../../public/assets/homepage/trial.png"
import flexible from "../../../../public/assets/homepage/flexible.png"
import Image from 'next/image'
const Membership = () => {
  return (
    <>
    <div className='bg-cardbg flex flex-col justify-center items-center py-8 mb-3 mb:text-center mb:p-6'>
      <h2 className='text-5xl font-extrabold text-blue mb:text-2xl'>Customise your membership</h2>
      <p className='text-xl max-w-screen-lg text-blue text-center mb:text-sm'>
        Experience customized tutoring with eTutors: affordable rates, 1:1 sessions from 
        expert-matched tutors, flexible lesson packages, and convenient scheduling options.
      </p>
    </div>
    <div className='w-4/5 m-auto gap-8 flex py-20'>
        <div className='w-1/3 flex flex-col gap-3 items-center '>
            <Image className='w-20 h-20' alt='pricing' src={balance}/>
            <h2 className='text-darkBlue text-3xl font-extrabold'> Sensible Pricing</h2>
            <p className='text-xl leading-6 text-center'>
                Our sensible pricing ensures flexible and affordable rates for both college 
                students and parents aiming to help their children achieve their goals.
            </p>
        </div>
        <div className='w-1/3 flex flex-col gap-3 items-center '>
            <Image className='w-32 h-20' alt='pricing' src={trial}/>
            <h2 className='text-darkBlue text-3xl font-extrabold'> 2 Free Trials</h2>
            <p className='text-xl leading-6 text-center'>
             You get 2 free trials every 6 months to find the perfect eTutor, with only 1 free trialper eTutor.
            </p>
        </div>
        <div className='w-1/3 flex flex-col gap-3 items-center '>
            <Image className='w-20 h-20' alt='pricing' src={flexible}/>
            <h2 className='text-darkBlue text-3xl font-extrabold'>Flexibility</h2>
            <p className='text-xl leading-6 text-center'>
               Enjoy the flexibility of rescheduling or choosing to complete your purchased sessions with a differnt eTutor
            </p>
        </div>
    </div>
    </>

  )
}

export default Membership
