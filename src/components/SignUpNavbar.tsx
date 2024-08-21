import React from 'react'
import Image from 'next/image'
import logo from "../../public/assets/signup/signuplogo.svg"
import Link from 'next/link'
const SignUpNavbar = () => {
  return (
    <div className='py-12 px-10 mb:p-5'>
    <Link href='/' > <Image src={logo} alt='' className='cursor-pointer w-32'/></Link> 
    </div>
  )
}

export default SignUpNavbar
