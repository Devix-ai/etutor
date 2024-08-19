'use client';
import React, { useState } from 'react';
import SingupHeading from './SingupHeading';
import QuestionBtn from './QuestionBtn';
import ConfirmBtn from './ConfirmBtn';
import Image from 'next/image';
import dropdown from "../../../../public/assets/icons/downarrow.svg"
import google from "../../../../public/assets/icons/googleicon.svg"
import line from "../../../../public/assets/icons/line.svg"
import countryicon from "../../../../public/assets/icons/countryicon.svg"
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';

import Page from '../page';
const SingupQuestions = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [QuestionNo,setQuestionNo] = useState(1)
  const [isGradeConfirmed, setIsGradeConfirmed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [text, setText] = useState('');
  const [isOpenCountry,setIsOpenCountry] = useState(false)
  const [selectedTimeZone,setSelectedTimeZone] = useState('Berlin, GMT +02:200')
  const [countryInfo,setCountryInfo] = useState('Berlin, GMT +02:200')

  // const navigate = useNavigate

  // const confirmNavigate = ()=>{
  //   navigate('/confirmation')
  // }


  const timeZones = [
    'Newyork, GMT +01:00',
    'Paris, GMT +02:00',
    'Berlin, GMT +02:00',
    'Berlin, GMT +02:00',
    'London, GMT +01:00',
    'Moscow, GMT +03:00',
  ]

  const countryCode = [
    {
      id:1,
      code : '49',
      img:countryicon,
    },
    {
      id:2,
      code : '265',
      img:countryicon,
    },
    {

      id:3,
      code : '112',
      img:countryicon,
    },
    {
      id:4,
      code : '212',
      img:countryicon,
    },
  ]
  const toggleCountry = () => {
    setIsOpenCountry(!isOpenCountry)
  }
  const handleSelect = (timezone) => {
    setSelectedTimeZone(timezone)
    setIsOpenCountry(false)
  }
  const handleCountry = (country) =>{
    setCountryInfo(country)
    setIsOpenCountry(false)
  }
  const clearText = () => {
    setText('');
  };
  const subjects = ['Algebra','Geometry','Calculas','Statistics','Trignometry','Biology','Chemistry', 'Physics', 'Environmental Science','Earth Sciences','English Literature','Grammar'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOption = (subject) => {
    setSelectedOptions((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject); // Deselect if already selected
      }
      return [...prev, subject]; // Select if not selected
    });
  };

  const handleOptionChange = (option) => {
    setSelectedLevel(option);
    setClassLevel(''); // Reset class level when changing options
    console.log('Option changed:', option);
  };
  const handleCountrySelect = (country) => {
    setSelectedCountry(country.code);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };
  const confirmGrade = () => {
    setIsGradeConfirmed(true); // When the grade is confirmed
};
  const renderClassLevelOptions = () => {
    switch (selectedLevel) {
      case 'middle':
        return (
          <div className='  rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
            <div>

            <SingupHeading heading='What is your Grade?' />
            </div>
            <div className='flex w-full justify-between gap-10'>
            <div className='w-full'>
              <div className=' '>

            <QuestionBtn className='hover:bg-customBlue hover:text-white focus:bg-customBlue' btnName='5th grade' onClick={() => {setClassLevel('5th grade') }} />
              </div>
            <QuestionBtn className='hover:bg-customBlue hover:text-white'  btnName='6th grade' onClick={() => setClassLevel('6th grade')} />
            <QuestionBtn className='hover:bg-customBlue hover:text-white' btnName='7th grade' onClick={() => setClassLevel('7th grade')} />
            </div>
           <div className='w-full'>
           <QuestionBtn className='hover:bg-customBlue hover:text-white'  btnName='8th grade' onClick={() => setClassLevel('8th grade')} />
            <QuestionBtn className='hover:bg-customBlue hover:text-white' btnName='9th grade' onClick={() => setClassLevel('9th grade')} />
           </div>
            </div>
            <ConfirmBtn  onClick={() => {
    setIsGradeConfirmed(true);
  }} btnName='Confirm' />
           
         
          </div>
        );
      case 'high':
        return (
          <div className='rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
            <div>

            <SingupHeading heading='What is your Grade?' />
            </div>
            <div className='flex w-full justify-between gap-10'>
            <div className='w-full'>
            <QuestionBtn btnName='9th grade' onClick={() => setClassLevel('9th grade')} />
            <QuestionBtn btnName='10th grade' onClick={() => setClassLevel('10th grade')} />
            </div>
            <div className='w-full'>
            <QuestionBtn btnName='11th grade' onClick={() => setClassLevel('11th grade')} />
            <QuestionBtn btnName='12th grade' onClick={() => setClassLevel('12th grade')} />
            </div>
            </div>
            <ConfirmBtn  onClick={() => {
    setIsGradeConfirmed(true);
  }} btnName='Confirm' />
          
           
          </div>
        );
      case 'college':
        return (
          <div className='rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
            <SingupHeading heading='What is your level of study?' />
            <QuestionBtn btnName='Freshman year' onClick={() => setClassLevel('Freshman year')} />
            <QuestionBtn btnName='Sophomore year' onClick={() => setClassLevel('Sophomore year')} />
            <QuestionBtn btnName='Junior year' onClick={() => setClassLevel('Junior year')} />
            <QuestionBtn btnName='Senior year' onClick={() => setClassLevel('Senior year')} />
            <ConfirmBtn  onClick={() => {
    setIsGradeConfirmed(true);
  }} btnName='Confirm' />
          </div>
        );
      case 'adult':
        return (
          <div className='rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
            <SingupHeading heading='What is your level of study?' />
            <QuestionBtn btnName='Middle school' onClick={() => setClassLevel('Middle school')} />
            <QuestionBtn btnName='High school' onClick={() => setClassLevel('High school')} />
            <QuestionBtn btnName='College / Graduate school' onClick={() => setClassLevel('College / Graduate school')} />
            <QuestionBtn btnName='Adult / professional' onClick={() => setClassLevel('Adult / professional')} />
            <ConfirmBtn onClick={confirmGrade}
   btnName='Confirm' />
          </div>
        );
      default:
        return null;
    }
  };

  const renderQuestionNo = ()=>{
    switch(QuestionNo){
      
      case 1:
        return (
          <div className='rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
              <SingupHeading heading='What subjects do you need 
  help with?' />
          <div className="relative">
            <div className='flex justify-between items-center w-full cursor-pointer px-5 py-2 bg-purple rounded-3xl text-darkBlue text-2xl mb:text-sm'  onClick={toggleDropdown}>
            <button
           
            className="  bg-purple focus:outline-none"
          >
            Select Subjects
          </button>
          <Image src={dropdown} alt='dropdown' />
            </div>
         
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-4 rounded-3xl shadow-lg bg-purple ">
              <div className="py-1 ">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center p-2 text-darkBlue  hover:bg-darkBlue hover:text-white  px-5 py-2 text-2xl  cursor-pointer mb:text-sm">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(subject)}
                      onChange={() => handleOption(subject)}
                      className="mr-2"
                    />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ConfirmBtn onClick={()=>setQuestionNo(QuestionNo+1)}  btnName='Confirm' />

        </div>

      );
        case 2:
          return (
            <div className='  rounded-3xl bg-questionbg p-10 px-16 w-full lg:p-8 mb:w-full mb:p-6'>
              <div>
  
              <SingupHeading heading='Additional Information' />
              </div>
             <p className='text-darkBlue text-lg mb:text-xs'>Please provide any important information about yourself that you feel your eTutor should know. This could include learning preferences, any disabilities, a 504 plan or specific teaching strategies that work best for you. Your notes will help us tailor your learning experience to better meet your needs.</p>
             <div className="relative my-10 mb:my-5">
      <textarea
        className="text-black font-bold  w-full rounded-2xl p-4 border-gray-500 border focus:border-blue-500 focus:outline-none mb:text-xs"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={7}
        placeholder='Type here'
      >
        
      </textarea>
      <button
        onClick={clearText}
        className="absolute top-2 right-10 bg-black-500 text-black rounded p-1"
        title="Clear text"
      >
        &times; 
      </button>
    </div>
             <div className='w-9/12 m-auto'>

              <ConfirmBtn  onClick={()=>setQuestionNo(QuestionNo+1)}  btnName='Confirm' />
             </div>
             
           
            </div>
          );
          // when you are available
      case 3:
        return(
          <div className=' rounded-3xl mr-auto bg-questionbg px-8 py-10 w-2/6 lg:w-1/2  lg:p-8 mb:w-full mb:p-6'>

<SingupHeading heading='When are you available?' />

          <div className='date-input-container'>
            <input className='custom-date-input w-full px-5 py-2 bg-purple rounded-full text-lg text-darkBlue focus:outline-none'    type="date"  />
          </div>
          <div className='flex justify-between relative  items-center bg-purple rounded-full px-5 py-2 mt-5'>
             <p>Start time</p> 
              <div                 onClick={toggleCountry}
 className=' text-white text-sm text- cursor-pointer bg-darkBlue rounded-full px-5 py-1'>
              {selectedTimeZone}
              </div>
              {isOpenCountry && (
                                <div style={{top:'40px',right:'10px'}} className="absolute text-white text-xs bg-darkBlue right-0  mt-2 px-4 py-3  rounded-3xl  z-10">
{
  timeZones.map((timezone,index)=>(
      <div key={index} onClick={()=>handleSelect(timezone)} className="px-4 py-2 cursor-pointer  border-b border-white ">
          {timezone}
      </div>
  ))
}
                    
                </div>
              )}
          </div>
          <ConfirmBtn  onClick={()=>setQuestionNo(QuestionNo+1)}  btnName='Free Trial' />
          </div>
        );
        // signup form
       case 4:
        return(
          <div className='rounded-3xl bg-questionbg p-5  w-1/3 lg:p-8 lg:w-5/12 mb:w-full mb:p-5 '>
              <SingupHeading className='text-5xl py-0' heading='Sign Up' />
              <p className='text-lightpurple text-xl' >As a Student</p>
              <div className='flex items-center justify-center p-3 gap-3 text-darkBlue cursor-pointer rounded-full bg-transparent border-darkBlue border mt-5 mb:py-2 mb:text-sm'>
                <Image src={google}  alt='google'/>
              Continue with Google
              </div>
              <div className='flex items-center justify-center w-full gap-3 py-5 px-3'>
                <div className='w-full'> <Image  alt='' src={line}/></div>
               <span className='text-darkBlue'>or</span>
                <div className='w-full'><Image alt='' src={line}/></div>
              </div>
              <div className='flex w-full gap-5 mb:gap-3'>
              <div className='rounded-full bg-purpleBtn px-6 py-3 '>
                <input type="text" className='placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs' placeholder='First Name' />
              </div>
              <div className='rounded-full bg-purpleBtn px-6 py-3'>
                <input type="text" className='placeholder-darkBlue w-full  bg-transparent outline-none mb:text-xs' placeholder='Last Name' />
              </div>
              </div>
              <div className='rounded-full mt-5 bg-purpleBtn px-6 py-3'>
                <input type="email" className='placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs' placeholder='Email' />
              </div>
              <div className='rounded-full mt-3 bg-purpleBtn px-6 py-3'>
                <input type="password" className='placeholder-darkBlue w-full bg-transparent outline-none mb:text-xs' placeholder='Password' />
              </div>
              <div className='relative flex justify-between items-center rounded-full mt-3 bg-purpleBtn px-6 py-3' >
      <div   className='w-1/2 flex justify-center items-center gap-3  text-darkBlue mb:gap-1'>
        <Image src={countryicon} className='mb:h-6 ' alt='countryicon' />        <h2 className='text-xl mb:text-sm'>+49</h2>
        <Image onClick={toggleDropdown}  src={dropdown} className='cursor-pointer' alt='dropdonw' />
      </div>
      <span className='px-4 text-darkBlue '>|</span>
      <div className='w-1/2 absolute mt-16 bg-purpleBtn p-3 rounded-3xl top-0' style={{ display: isDropdownOpen ? 'block' : 'none' }}>
        {countryCode.map((country, index) => (
          <div
            key={index}
            className='flex justify-start items-center gap-2 py-1 border-lightpurple border-b cursor-pointer'
            onClick={() => handleCountrySelect(country)}
          >
            <Image src={country.img} alt={country.code} width={20} height={20} />
            <p>+{country.code}</p>
          </div>
        ))}
      </div>
      <input
        className='placeholder-darkBlue w-1/2 bg-transparent outline-none mb:text-xs'
        placeholder='Phone number'
        onChange={(e) => setPhoneNumber(e.target.value)} // Update phone number state
      />
    </div>
    <div>
      
    </div>
    <Link href='StudentSignup/Confirmation'>
<div>

    <ConfirmBtn btnName='Continue' />
</div>
</Link>

              <p className='text-darkBlue text-xs mt-5'>By clicking “Continue with Google / Email“ you agree to our User </p>
              <span className='text-btnbg underline text-xs'>Terms of Service and Privacy Policy</span>
             
          </div>
        );
   
    }
  }

  return (
    <>
      {/* Show this section only if no level has been selected */}
      {!selectedLevel && (
        <div className='rounded-3xl bg-questionbg p-10 px-16 w-1/2 lg:p-8 mb:w-full mb:p-6'>
          <SingupHeading heading='What is your level of study?' />
          <div onClick={() => handleOptionChange('middle')}>
            <QuestionBtn btnName='Middle school' />
          </div>
          <div onClick={() => handleOptionChange('high')}>
            <QuestionBtn btnName='High school' />
          </div>
          <div onClick={() => handleOptionChange('college')}>
            <QuestionBtn btnName='College / Graduate school' />
          </div>
          <div onClick={() => handleOptionChange('adult')}>
            <QuestionBtn btnName='Adult / professional' />
          </div>
        </div>
      )}
          {selectedLevel && !isGradeConfirmed && renderClassLevelOptions()}
          {isGradeConfirmed && renderQuestionNo()} {/* Render next question */}
      </>
  );
};

export default SingupQuestions;
