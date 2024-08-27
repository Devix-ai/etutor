'use client'
import React, { useState } from 'react'
import FormHeading from '../FormHeading'
import ConfirmBtn from '@/app/ParentSignup/Components/ConfirmBtn'
import RadioInput from '../RadioInput'


const ExperienceQuestions = ({question,className}) => {
 
  return (
    <div>
      <h2 className={`${className} text-[#534988] py-5 text-[26px] font-medium `}>{question} </h2>
    </div>
  )
}


const Experience = ({NextStep}) => {
  const [hasTutoringExperience, setHasTutoringExperience] = useState(null);

  const handleRadioChange = (value) => {
    setHasTutoringExperience(value);
  };
  return (
    <div className='bg-questionbg p-14 rounded-[40px]'>
     <FormHeading className='' heading='Teaching & Tutoring' paragraph='Previous experience is not requirement. Experts with a variety of background have been successful on our 
platform.'/>
      <form className='pt-12 pr-10 flex flex-col gap-10' action="">
        
       <div>
        <ExperienceQuestions question='Do you have tutoring experience?* ' />
        <RadioInput
          id="experienceYes"
          name="tutoringExperience"
          value="yes"
          checked={hasTutoringExperience === 'yes'}
          onChange={() => handleRadioChange('yes')}
          label="Yes"
        />
        <RadioInput
          id="experienceNo"
          name="tutoringExperience"
          value="no"
          checked={hasTutoringExperience === 'no'}
          onChange={() => handleRadioChange('no')}
          label="No"
        />
        </div> 
          
          
          
      <div className=' w-[42%]'>

<ConfirmBtn btnName='Continue' className='text-3xl font-medium' onClick={NextStep}/>
</div>
      </form>
      
    </div>
  )
}

export default Experience


