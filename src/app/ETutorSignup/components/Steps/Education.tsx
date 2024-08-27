'use client'
import React, { useState } from 'react'
import FormHeading from '../FormHeading'
import InputHeading from '../InputHeading'
import Image from 'next/image'
import dropdown from "../../../../../public/assets/icons/purplearrowdown.svg"
import uparrow from "../../../../../public/assets/icons/uparrow.svg"
import ContinueBtn from '@/app/ETutorSignup/components/ContinueBtn'
import ConfirmBtn from '@/app/ParentSignup/Components/ConfirmBtn'


const Education = ({NextStep}) => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false) ;
const [isVisible,setIsVisible] = useState(false)
const [degree,setDegree] = useState(false)
const [major,setMajor] = useState(false)
const [graduateYear,setGraduateYear] = useState(false)

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
     <FormHeading className='' heading='Education' paragraph='Tutors are required to be enrolled in or have a graduation from a four-year college program '/>
      <form className='pt-12 pr-10 flex flex-col gap-10' action="">
        
          <div className='w-full flex justify-between'>
            <div className='w-[45%]'>

          <InputHeading text='University/College ' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 '>
  <input type="text" 
         className='placeholder-darkpurple text-2xl text-[#685AAD] placeholder:text-[22px] w-full bg-transparent outline-none mb:text-xs placeholder:text-[#AD9DDE]' 
         placeholder='Search for your school' />
</div>

            </div>
 <div className='w-[45%]'>
          <InputHeading text='Degree' />
          <div className="relative w-full flex justify-center items-center">
            <div className='flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm'  onClick={()=>setDegree(!degree)}>
            <button
           
            className="  bg-purpleBtn focus:outline-none text-[#AD9DDE]"
          >
            select a degree
          </button>
        {degree ?(<Image src={uparrow} alt='dropdown' />):(<Image src={dropdown} alt='uparrow' />)}  
            </div>
         
          {degree && (
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
            {/* <div className='w-1/2'>

          <InputHeading text='Last Name' />
          <div className='rounded-full bg-purpleBtn px-10 py-4 w-4/5'>
  <input type="text" 
         className='placeholder-darkpurple placeholder:text-[22px] text-2xl text-[#685AAD]  w-full bg-transparent outline-none mb:text-xs' 
         placeholder='Last Name' />
</div>

            </div> */}
              
              
          </div>
          <div className='w-full flex justify-between'>
          <div className='w-[45%]'>
          <InputHeading text='Major' />
          <div className="relative w-full flex justify-center items-center">
            <div className='flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-[#AD9DDE] text-2xl mb:text-sm'  onClick={()=>setMajor(!major)}>
            <button
           
            className="  bg-purpleBtn focus:outline-none text-[#AD9DDE]"
          >
            select
          </button>
        {major ?(<Image src={uparrow} alt='dropdown' />):(<Image src={dropdown} alt='uparrow' />)}  
            </div>
         
          {major && (
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
            <div className='w-[45%]'>
          <InputHeading text='Graduation Year' />
          <div className="relative w-full flex justify-center items-center">
            <div className='flex justify-between items-center w-full cursor-pointer px-12 py-4 bg-purpleBtn rounded-full text-darkBlue text-2xl mb:text-sm'  onClick={toggleDropdown}>
            <button
           
            className="  bg-purpleBtn focus:outline-none text-[#AD9DDE]"
          >
            select a degree
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
              
              
          </div>
          <div >
            <div className='' onClick={()=>setIsVisible(true)}>

            <InputHeading text='+ Add School '  className={`!text-[#AE92F9] cursor-pointer !text-4xl ${isVisible ? '!text-[#8653FF]' : '!text-[#AE92F9]'}`} />
            </div>
            {
              isVisible &&
              <div className='w-[45%]'>
          <div className='rounded-full bg-purpleBtn px-10 py-4'>
            <input
              type='text'
              className='placeholder-darkpurple text-2xl text-[#685AAD] placeholder:text-[22px] w-full bg-transparent outline-none mb:text-xs placeholder:text-[#AD9DDE]'
              placeholder='Text'
            />
          </div>
        </div>
            }
            <div>
            <div className=' w-[42%]'>

<ConfirmBtn btnName='Continue' className='text-3xl font-medium' onClick={NextStep}/>
</div>
            </div>
          </div>
          
      </form>
      
    </div>
  )
}

export default Education
