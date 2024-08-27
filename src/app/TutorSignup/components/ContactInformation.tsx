'use client'
import React, { useState } from 'react'
import FormHeading from '../../ETutorSignup/components/FormHeading'
import InputHeading from '../../ETutorSignup/components/InputHeading' 
import Image from 'next/image'
import dropdown from "../../../../public/assets/icons/downarrow.svg"
import uparrow from "../../../../public/assets/icons/uparrow.svg"
import ContinueBtn from '@/app/ETutorSignup/components/ContinueBtn'
import ConfirmBtn from '@/app/ParentSignup/Components/ConfirmBtn'
const ContactInformation = ({NextStep}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) ;

  const subjects = ['Option 1','Option 2','Option 3','Option 4'];
  const handleOption = (subject) => {
    setSelectedOptions((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject); // Deselect if already selected
      }
      return [...prev, subject]; // Select if not selected
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='bg-questionbg p-14 rounded-[30px]'>
     <FormHeading className='' heading='Contact Information' paragraph='Thank you for your interest in becoming an etutor! Complete this application and take the next step 
toward empowering learners.'/>
      <form className='pt-12 pr-10 flex flex-col gap-10' action="">
        <div>
          <InputHeading text='Select a Country' />
          <div className="relative w-1/2 flex justify-center items-center">
            <div className='flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm'  onClick={toggleDropdown}>
            <button
           
            className="  bg-purpleBtn focus:outline-none text-darkpurple"
          >
            Select a country
          </button>
        {isDropdownOpen ?(<Image src={uparrow} alt='dropdown' />):(<Image src={dropdown} alt='uparrow' />)}  
            </div>
         
          {isDropdownOpen && (
            <div className="absolute z-10 w-11/12 mt-20 m-auto top-0 rounded-3xl shadow-lg bg-purple ">
              <div className="py-4 px-10 ">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center p-2 text-darkBlue border-b     px-5 py-2 text-2xl border-darkBlue  cursor-pointer mb:text-sm placeholder-darkpurple">
                   
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
          <div className='w-full flex'>
            <div className='w-1/2'>

          <InputHeading text='First Name' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 w-4/5'>
  <input type="text" 
         className='placeholder-darkpurple text-2xl text-[#685AAD] placeholder:text-[22px] w-full bg-transparent outline-none mb:text-xs' 
         placeholder='First Name' />
</div>

            </div>
            <div className='w-1/2'>

          <InputHeading text='Last Name' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 w-4/5'>
  <input type="text" 
         className='placeholder-darkpurple placeholder:text-[22px] text-2xl text-[#685AAD]  w-full bg-transparent outline-none mb:text-xs' 
         placeholder='Last Name' />
</div>

            </div>
              
              
          </div>
          <div className='w-full flex'>
            <div className='w-1/2'>

          <InputHeading text='Zip Name' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 w-4/5'>
  <input type="text" 
         className='placeholder-darkpurple text-2xl text-[#685AAD] placeholder:text-[22px] w-full bg-transparent outline-none mb:text-xs' 
         placeholder='Zip Code' />
</div>
<div className=' w-4/5'>

<ConfirmBtn btnName='Continue' className='text-3xl font-medium' onClick={NextStep}/>
</div>

            </div>
            <div className='w-1/2'>

          <InputHeading text='Email' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 w-4/5'>
  <input type="text" 
         className='placeholder-darkpurple text-2xl text-[#685AAD] placeholder:text-[22px] w-full bg-transparent outline-none mb:text-xs' 
         placeholder='Email' />
         
</div>


            </div>
              
              
          </div>
          
      </form>
      
    </div>
  )
}

export default ContactInformation
