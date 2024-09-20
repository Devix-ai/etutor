import React from 'react'
import Image from 'next/image'
import logo from "../../public/assets/signup/signuplogo.svg"
import Link from 'next/link'
const SignUpNavbar = () => {
  return (
    <div className='px-16 pt-16 mb:p-5 transition-all'>
    <Link href='/' > <Image src={logo} alt='' className='cursor-pointer w-28'/></Link> 
    </div>
  )
}

export default SignUpNavbar
