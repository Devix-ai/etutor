'use client'
import React, { useState } from 'react'
import FormHeading from '../FormHeading'
import ConfirmBtn from '@/app/ParentSignup/Components/ConfirmBtn'
import RadioInput from '../RadioInput'
import CheckboxInput from '../CheckboxInput'
import Dropdown from '@/components/Dropdonw'
import DaysHeading from '@/components/DaysHeading'
import DaysOfWeek from '../DaysOfWeek'


const ExperienceQuestions = ({question,className,span}) => {
 
  return (
    <div>
      <h2 className={`${className} text-[#534988] py-5 text-[26px] font-medium `}>{question} <span className='!font-light'>{span}</span></h2>
    </div>
  )
}


const Experience = ({NextStep}) => {
  const [hasTutoringExperience, setHasTutoringExperience] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);

  const languages = ['English', 'Spanish', 'French', 'German'];
  const subjects = ['Math', 'Science', 'Arts', 'History'];
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleLanguageSelect = (selectedLanguages: string[]) => {
    console.log('Selected Languages:', selectedLanguages);
};

const handleSubjectSelect = (selectedSubjects: string[]) => {
    console.log('Selected Subjects:', selectedSubjects);
};

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedValues((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((v) => v !== value)
        : [...prevSelected, value]
    );
  };
  const handleRadioChange = (value) => {
    setHasTutoringExperience(value);
  };
  return (
    <div className='bg-questionbg p-14 rounded-[40px]'>
     <FormHeading className='' heading='Teaching & Tutoring' paragraph='Previous experience is not requirement. Experts with a variety of background have been successful on our 
platform.'/>
      <form className='pt-12 pr-10 flex flex-col ' action="">
        
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
        <div>
          <ExperienceQuestions question='What level(s) are you interested in tutoring? ' span='(Select all that apply)*' />
          <CheckboxInput
       
        label="Pre-Kindergarten"
      />
          <CheckboxInput
       
        label="Kindergarten-2nd grade"
      />
          <CheckboxInput
       
        label="3rd-5th Grade"
      />
          <CheckboxInput
       
        label="Middle School"
      />
          <CheckboxInput
       
        label="High School"
      />
          <CheckboxInput
       
        label="College"
      />
          <CheckboxInput
       
        label="Graduate "
      />
          <CheckboxInput
       
        label="Adult"
      />

        </div>
        <div className='mt-5'>
          <ExperienceQuestions question='What subject(s) can you tutor in?' />
          <Dropdown 
    options={subjects} 
    label='select subject(s)'  
    className='!text-xl'
    onSelect={handleSubjectSelect}
    initialSelectedOptions={['Art']}
/>
        </div>
        <div className='mt-10'>
          <ExperienceQuestions question='What languages can you tutor in?' />
          <Dropdown 
    options={languages} 
    label='select language(s)'  
    className='!text-xl'
    onSelect={handleSubjectSelect}
    initialSelectedOptions={['English','French']}
/>
        </div>
        <div className='mt-16' >
          <ExperienceQuestions question='What type of instruction are you interested in? 'span='(Select all that apply)*' />
          <CheckboxInput label='1-on-1' />
          <CheckboxInput label='Small group (5 to 15 student)' />
        </div>
        <div className='mt-28'>
        <ExperienceQuestions question='How many hours are you available to tutor each week?* ' />
        <RadioInput
          id="experienceYes"
          name="tutoringExperience"
          value="yes"
          checked={hasTutoringExperience === 'yes'}
          onChange={() => handleRadioChange('yes')}
          label="Less than 5 hours"
        />
        <RadioInput
          id="experienceNo"
          name="tutoringExperience"
          value="no"
          checked={hasTutoringExperience === '5'}
          onChange={() => handleRadioChange('no')}
          label="5-10 hours"
        />
        <RadioInput
          id="experienceNo"
          name="tutoringExperience"
          value="no"
          checked={hasTutoringExperience === 'no'}
          onChange={() => handleRadioChange('no')}
          label="10-20 hours"/>
        <RadioInput
          name="tutoringExperience"
          value="no"
          onChange={() => handleRadioChange('no')}
          label="More than 20 hours"
        />
        </div> 
        <div className='mt-8' >
          <ExperienceQuestions question='What date can you start tutoring?' />
            <input className='w-1/2 px-12 py-3 rounded-full bg-purpleBtn mt-5' type="date" value='select a date' />
        </div>
        <div className='mt-16'>
          <ExperienceQuestions question='What’s your general availability? ' span='(Select all that apply)' />
          {/* <div className='w-[85%]' >
            <div className='flex pl-8 justify-between items-center' >
              <DaysHeading day='Monday' />
              <CheckboxInput label='Morning ' />
              <CheckboxInput label='Afternoon ' />
              <CheckboxInput label='Evening ' />
            </div>
          </div> */}
          <DaysOfWeek/>
        </div>
        <div>
        <ExperienceQuestions question='Do you have classroom teaching experience?* ' />
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
          
          
          
      <div className=' w-[42%] mt-20'>

<ConfirmBtn btnName='Continue' className='text-3xl font-medium' onClick={NextStep}/>
</div>
      </form>
      
    </div>
  )
}

export default Experience


