'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../../../public/assets/logo.png"
import icon from "../../../public/assets/headericon.png"
import hamburger from "../../../public/assets/icons/hamburger-button.svg"
import cross from "../../../public/assets/icons/crossicon.svg"
import Link from 'next/link'
import Button from '../Button'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  const router = useRouter()
  const navigate =(link)=>{
    router.push(link)
  }

  return (
    <div className='flex justify-between items-center py-12  px-20 mx-auto  mb:p-5 mb:flex-col xl:px-8 lg:px-6'>
      
      <div className="mb:hidden">
      <Link href='/' > <Image className='w-[160px] h-[30px]' src={logo} alt="" /></Link>
      </div>
      
      <div className='mb:hidden flex  items-center justify-between gap-12 xl:gap-8 lg:gap-6 w-[80%]'>
      <ul className='flex text-2xl w-[55%] justify-between font-medium text-[#473171]  xl:text-xl  lg:gap-4 lg:text-sm'>
        <Link href="/" passHref><li>How it works</li></Link>
        <Link href="/ETutorSearch"> <li>eTutors</li> </Link>
        <Link href="/Packages"><li  >Packages</li></Link>
        <Link href="/Faqs" > <li >FAQs</li></Link>
        <li>|</li>
        <li>  <Link href="/Student"> For eTutors</Link></li>
      </ul>
      <div className='cursor-pointer'>
        <Image src={icon}  />
      </div>

    <Link href='/SignupAs' >  <button className= '  font-medium text-customBlue text-[27px] focus:outline-none	xl:text-xl lg:text-base'>SIGN IN</button></Link>
      {/* <button className='bg-customBlue '>SIGN UP</button> */}
     <Link href='/SignupAs' ><Button className=' font-extrabold text-[27px] xl:text-lg xl:px-6 xl:py-3 lg:text-xs lg:px-6 lg:py-2' btnName='SIGN UP' /></Link> 
      </div>

{/* //mobile navbar */}


<div className='hidden mb:block w-full'>
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href='/' >
          <Image className='w-[160px] h-[30px]' src={logo} alt="Logo" /></Link>
        </div>
        <div>
          
        {isOpen ? (
            <Image className='h-8 w-8 cursor-pointer' src={cross} alt="Close Menu" onClick={toggleMenu} />
          ) : (
            <Image className='h-8 w-8 cursor-pointer' src={hamburger} alt="Open Menu" onClick={toggleMenu} />
          )}        </div>
      </div>
      
      <div className={`mb:block flex-col ${isOpen ? '' : 'mb:hidden'} w-full`}>
        <ul className='flex font-bold text-darkBlue mb:flex-col mb:gap-3 py-4'>
          <Link href="/"><li>How it works</li></Link>
          <Link href="/ETutorSearch"><li>eTutors</li></Link>
          <Link href="/Packages"><li>Packages</li></Link>
          <Link href="/Faqs"><li>FAQs</li></Link>
          <li className='hidden'>|</li>
          <Link href="/Student" ><li>For eTutors</li></Link>
        </ul>
        <div className='flex flex-col gap-4'>
         <Link href='/SignupAs' > <button className='text-customBlue focus:outline-none font-bold w-full '>SIGN IN</button></Link>
       <Link href='/SignupAs' >  <Button className='mb:text-sm font-bold text-xs w-full' btnName='SIGN UP' /> </Link> 
        </div>
      </div>
    </div>
     
      
    </div>
  )
}

export default Navbar
