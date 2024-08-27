'use client'
import React, { useState } from 'react'
import StepperControl from './components/StepperControl'
import Stepper from './components/Stepper'
import SignUpNavbar from '@/components/SignUpNavbar'
import ContactInformation from '../TutorSignup/components/ContactInformation'
import Education from './components/Steps/Education'
import Experience from './components/Steps/Experience'
import Review from './components/Steps/Review'
import FormSteps from './components/FormSteps'

const Page = () => {

    const [currentStep,setCurrentStep] = useState(1)
    const NextStep=()=>{
      setCurrentStep(currentStep+1)
    }
    const steps = [
        'Contact Information',
        'Education',
        'Experience',
        'Review & Submit'
    ]
    const displayStep = (step)=>{
        switch(step){
            case 1:
                return <ContactInformation NextStep={NextStep} />;
            case 2:
                return <Education NextStep={NextStep}/>;
            case 3:
                return <Experience NextStep={NextStep}/>;
            case 4:
                return <Review NextStep={NextStep}/>   
                default  :   
        }
    }

  return (
    <div className='flex flex-col'>
      {/* Stepper */}
      <div>
        <SignUpNavbar/>
      </div>
      <div className='flex justify-between w-[90%] mx-auto'>
      <div className='w-1/4 mt-32 ml-10'>
      <FormSteps steps={steps} currentStep={currentStep}/>
      </div>
      {/* Navigation */}
      <div className='w-[70%]'>
      {displayStep(currentStep)}
      </div>
      </div>
    
    </div>
  )
}

export default Page
