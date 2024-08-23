import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import payment from "../../public/assets/homepage/paymentimg.png"

const Payment = () => {
  return (
    <div className='w-9/12 m-auto  pt-60 pb-8 flex flex-col items-center justify-center row-gap-12 mb:w-full mb:py-12 mb:gap-0 lg:w-3/5'>
      <h2 className='text-[87px] font-extrabold text-darkBlue lg:text-[60px] xl:text-[70px] relative mb:text-[30px] mb:ab' >Completely Risk-free secure payment with <span className=' absolute text-[7rem] text-lightblue font-extrabold ml-8 mb:text-[40px] lg:text-[80px] mb:ml-0 mb:relative ' >Stripe</span> </h2>
      <Image className='mt-28 h-64 w-auto mb:mt-12 mb:h-auto' src={payment} alt=''/>
    </div>
  )
}

export default Payment
