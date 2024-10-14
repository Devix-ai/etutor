'use client'
import SignUpNavbar from '@/components/SignUpNavbar';
import React, { useState } from 'react';
// import Signup from './Components/SignupImage';
// import SingupQuestions from './Components/SingupQuestions';
import Image from 'next/image';
import singup from '../../../../public/assets/signup/signup.png';
import etutorlogin from '../../../../public/etutorLogin.png';
import Link from "next/link";
import google from "../../../../public/googleicon.svg";
import line from "../../../../../../public/assets/icons/line.svg";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter()

  return (
    <div className='flex flex-col h-fit '>
      <SignUpNavbar />
      <div className="flex items-center justify-center custom-lg:items-start  pr-36 pl-0 custom-lg:justify-around lg:pr-20 mb:flex-col mb:px-5 mb:gap-8 pt-10 h-screen custom-lg:h-fit w-full max-w-[1920px]  mx-auto ">
      <div className="w-[54%] hidden custom-lg:flex items-end justify-end mt-2 lg:w-1/2 mb:m-auto mb:mt-0 mb:w-3/4">
            <Image className='' src={etutorlogin} alt='signup' />
          </div>
        
        {/* login form */}

        <div className="rounded-3xl bg-questionbg p-7    lg:p-8 mb:w-full mb:p-5 w-full  max-w-[27rem] ">
          <h1 className="text-6xl font-extrabold text-[#534988] py-0">Sign In</h1>
          <p className="text-lightpurple text-xl py-2">As a eTutor</p>
          <div className="flex items-center justify-center p-2 w-[90%] gap-3 text-lg text-darkBlue cursor-pointer rounded-full bg-transparent border-darkBlue border mt-3 mb:py-2 mb:text-sm">
            <Image src={google} alt="google" className="w-5 h-5" />
            Continue with Google
          </div>
          <div className="flex items-center justify-center w-full gap-3 py-5 px-3">
            <div className="w-full">
              {" "}
              <Image alt="" src={line} />
            </div>
            <span className="text-darkBlue">or</span>
            <div className="w-full">
              <Image alt="" src={line} />
            </div>
          </div>

          <div className="rounded-full mt-0 bg-purpleBtn px-6 py-3 border border-[#6c5baa8b]">
            <input
              type="email"
              className="placeholder-[#685AAD]  w-full bg-transparent outline-none mb:text-xs px-4"
              placeholder="Email"
            />
          </div>
          <div className="rounded-full mt-4 bg-purpleBtn px-6 py-3 border border-[#6c5baa8b]">
            <input
              type="password"
              className="placeholder-[#685AAD]   w-full bg-transparent outline-none mb:text-xs px-4"
              placeholder="Password"
            />
          </div>

          <div></div>
          
            <div
            onClick={()=>{router.push("/etutor")}}
              className={` bg-customBlue text-2xl text-white rounded-full w-full py-2  px-5 mt-14 border-darkBlue border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 `}
            >
              Continue
            </div>
          

          <p className="text-[#534988] text-xs mt-5">
            By clicking “Continue with Google / Email“ you agree to our User{" "} <br />
            <span className="underline">Terms of Service and Privacy Policy </span>
          </p>
        </div>


      </div>
    </div>
  );
}

export default Page;
