import React from 'react'

const StartJourney = () => {
  return (
    <div className='bg-cardbg flex flex-col justify-center items-center py-12 mb-3 mb:text-center'>
    <h2 className='text-5xl font-extrabold text-blue mb:text-2xl mb:px-3'>Getting started is simple with eTutor4Me</h2>
    
 
    <div className='flex justify-around items-stretch space-x-4 py-20 mb:flex-col mb:gap-10 mb:py-8 mb:justify-center mb:items-center'>
      <div className='relative w-1/4 mb:w-4/5 mb:mx-auto'>
        <div className='absolute inset-0 bg-purple rounded-xl transform translate-x-4 translate-y-4 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white h-full rounded-xl border-darkBlue border px-8 py-6 flex flex-col justify-between z-10'>
          <div className='flex flex-col items-center justify-center flex-grow'>
            <h2 className='text-3xl font-extrabold text-darkpurple mb:text-xl'>
              Take 1 to 2 Free Trial Sessions
            </h2>
            <p className='text-xl leading-7 mt-2 mb:text-sm mb:leading-normal'>
              Begin your journey with a free trial session from one of our eTutors. Experience firsthand how eTutor4Me works, with no obligation.
            </p>
          </div>
        </div>
      </div>
      <div className='relative w-1/4 mb:w-4/5 mb:m-auto'>
        <div className='absolute inset-0 bg-purple rounded-xl transform translate-x-4 translate-y-4 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white rounded-xl h-full border-darkBlue border px-8 py-6 flex flex-col justify-between z-10'>
          <div className='flex flex-col items-center justify-center flex-grow'>
            <h2 className='text-3xl font-extrabold text-darkpurple mb:text-xl'>
              Unsure of your Package?
            </h2>
            <p className='text-xl leading-7 mt-2 mb:text-sm mb:leading-normal'>
              Set up a meeting with one of our advisors to discuss your learning goals to ensure we find the perfect eTutor match and package for you.
            </p>
          </div>
        </div>
      </div>
      <div className='relative w-1/4 mb:w-4/5 mb:m-auto '>
        <div className='absolute inset-0  bg-purple rounded-xl transform translate-x-4 translate-y-4 shadow-lg z-0 mb:-translate-x-3'></div>
        <div className='relative bg-white h-full rounded-xl border-darkBlue border px-8 py-6 flex flex-col justify-between z-10'>
          <div className='flex flex-col items-start  flex-grow ' >
            <h2 className='text-3xl font-extrabold text-darkpurple mb:text-xl'>
            Start your journey
            </h2>
            <p className='text-xl leading-7 mt-2 mb:text-sm mb:leading-normal'>
              Book your personalized session package and begin achieving your academic goals with eTutor4Me.
            </p>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default StartJourney




