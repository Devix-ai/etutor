'use client'
import React, { useState } from 'react'
import StepperControl from './components/StepperControl'
import Stepper from './components/Stepper'
import SignUpNavbar from '@/components/SignUpNavbar'
import ContactInformation from './components/Steps/ContactInformation'
import Education from './components/Steps/Education'
import Experience from './components/Steps/Experience'
import Review from './components/Steps/Review'

const Page = () => {

    const [currentStep,setCurrentStep] = useState(1)
    const steps = [
        'Contact Information',
        'Education',
        'Experience',
        'Review & Submit'
    ]
    const displayStep = (step)=>{
        switch(step){
            case 1:
                return <ContactInformation/>;
            case 2:
                return <Education/>;
            case 3:
                return <Experience/>;
            case 4:
                return <Review/>   
                default  :   
        }
    }

  return (
    <div className='flex flex-col'>
      {/* Stepper */}
      <div>
        <SignUpNavbar/>
      </div>
      <div className='flex '>
      <div className='w-1/4'>
      <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {/* Navigation */}
      <div className='w-3/4'>
      <StepperControl/>
      </div>
      </div>
    
    </div>
  )
}

export default Page
