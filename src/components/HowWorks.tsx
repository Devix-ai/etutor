import React from 'react'
import Headings from './Headings'
import WorkSteps from './WorkSteps'
const HowWorks = () => {
  return (
    <div className='px-10 lg:px-0 mb:px-0 pt-32 mb:pt-10'>
      <Headings heading='How it works' />
      <div className='flex w-full justify-between col-gap-20 mb:flex-col lg:col-gap-6'>
        <div className=' flex flex-col justify-start items-start'>
          <WorkSteps number='1' head='Sign Up' text='Create your account and tell us about your learning needs' />
          <WorkSteps number='2' head='Choose' text='Browse and select a eTutor who specializes in your area of study' />
          <WorkSteps number='3' head='Free Sessions' text='Book your first session and enjoy a free lesson to experience
the quality of tutoring.' />
        </div>
        <div className=' flex flex-col justify-start items-start'>
          <WorkSteps number='4' head='Learn' text='Schedule additional sessions and continue your personalized
learning journey.' />
          <WorkSteps number='5' head='Achieve' text='See your grades improve and gain confidence in your abilities.' />

        </div>
      </div>


    </div>
  )
}

export default HowWorks
