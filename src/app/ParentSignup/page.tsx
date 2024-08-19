'use client'
import SignUpNavbar from '@/components/SignUpNavbar';
import React, { useState } from 'react';
import Signup from './Components/SignupImage';
import SingupQuestions from './Components/SingupQuestions';
import Image from 'next/image';
import singup from '../../../public/assets/signup/parent.png';

const Page = ({ QuestionNo }) => {
  // Debugging: Log the QuestionNo to check its value

  
  // Log the current QuestionNo
  console.log('Current QuestionNo:', QuestionNo);

  return (
    <div className='flex flex-col'>
      <SignUpNavbar />
      <div className='flex items-start w-full pr-32 pl-0 justify-between lg:pr-20 mb:flex-col mb:px-5 mb:gap-8'>
        {/* Only render the div containing the image if QuestionNo is not equal to 5 */}
        {QuestionNo !== 5 && (
          <div className='w-auto flex items-end justify-end mt-20 lg:w-1/2 mb:m-auto mb:mt-0 mb:w-3/5'>
            <Image className='' src={singup} alt='signup' />
          </div>
        )}
        <SingupQuestions  />
      </div>
    </div>
  );
}

export default Page;
