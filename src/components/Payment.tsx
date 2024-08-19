import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import payment from "../../public/assets/homepage/paymentimg.png"

const Payment = () => {
  return (
    <div className='w-3/4 m-auto pt-32 pb-8 flex flex-col items-center justify-center row-gap-12 mb:w-full mb:py-12 mb:gap-0'>
      <h2 className='text-5xl font-extrabold text-darkBlue relative mb:text-2xl mb:ab' >Completely Risk-free secure payment with <span className=' absolute  text-blue font-extrabold ml-4 mb:text-2xl mb:ml-0 mb:relative' style={{fontSize:'5rem'}}>Stripe</span> </h2>
      <Image className='mt-32 h-64 w-auto mb:mt-12 mb:h-auto' src={payment} alt=''/>
    </div>
  )
}

export default Payment
