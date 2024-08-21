import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import payment from "../../public/assets/homepage/paymentimg.png"

const Payment = () => {
  return (
    <div className='w-9/12 m-auto font-roboto pt-56 pb-8 flex flex-col items-center justify-center row-gap-12 mb:w-full mb:py-12 mb:gap-0 lg:w-3/5'>
      <h2 className='text-6xl font-extrabold text-darkBlue lg:text-4xl relative mb:text-xl mb:ab' >Completely Risk-free secure payment with <span className=' absolute text-[7rem] text-lightblue font-extrabold ml-4 mb:text-3xl lg:text-2xl mb:ml-0 mb:relative' >Stripe</span> </h2>
      <Image className='mt-32 h-64 w-auto mb:mt-12 mb:h-auto' src={payment} alt=''/>
    </div>
  )
}

export default Payment
