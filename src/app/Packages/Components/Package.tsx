import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
const Package = () => {
  return (
    <div className='w-[85%] lg:w-[90%]   m-auto mb:w-full mb:py-5 py-24 lg:py-12'>
      <h2 className='text-blue 2xl:text-5xl max-w-[500px]  mx-auto text-3xl text-center font-extrabold mb:text-2xl'>
        Our most popular Package
      </h2>

      <div className='w-100 flex gap-10 py-10 mb:flex-col lg:gap-5 mb:justify-center mb:items-center mb:py-0 mb:gap-12'>

        <div className='relative w-1/3  mt-10 mb:w-11/12'>
          <div className='absolute inset-0 transform -translate-x-4 translate-y-4 bg-[#CFCCDD] rounded-3xl shadow-lg'></div>
          <div className='relative bg-white rounded-3xl border-[#646493] border-2'>
            <h2 className='bg-[#646493] 2xl:text-5xl text-center text-xl text-white font-bold py-4 rounded-t-2xl mb:text-base'>Standard</h2>
            <div className='p-6 mb:p-4 text-center '>
              <h3 className='text-customBlue text-2xl 2xl:text-4xl flex items-center justify-center gap-2 font-extrabold mb:text-xl'>
                <span className='text-6xl 2xl:text-[80px]'>4 </span> Sessions / month
              </h3>
              <p className='text-[#584A91] 2xl:text-2xl  lg:my-2  text-lg my-6 mb:my-2 mb:text-sm'>
                <span className='font-bold'>Session duration:</span> 60 minutes
              </p>
              <p className='text-[#584A91]  2xl:text-2xl text-lg my-6 lg:my-2  mb:my-2 mb:text-sm'>
                <span className='font-bold'>Membership duration:</span> Flexible
              </p>
              <p className='text-[#584A91] 2xl:text-2xl text-lg my-6  lg:my-2 mb:my-2 mb:text-sm'>
                <span className='font-bold'>Average cost per session:</span> $34.75
              </p>
              <h1 className='text-customBlue text-3xl lg:text-xl 2xl:text-4xl py-8 flex items-center justify-center gap-2 font-bold mb:text-xl'>
                <span className='text-6xl lg:text-4xl mb:text-3xl font-extrabold'>$139 </span>/ month
              </h1>
           <Link href='/SignupAs' ><Button className='text-sm 2xl:text-2xl xl:text-lg text-black w-full' btnName='BOOK A FREE TRIAL' /></Link>   
            </div>
          </div>
        </div>

        <div className='relative w-1/3 mb:w-11/12'>
          <div className='absolute inset-0  transform  -translate-y bg-[#CFCCDD] rounded-3xl shadow-lg mb-4 mb:-translate-x-4 mb:-mb-4 mb:mt-4 '></div>
          <div className='relative bg-white rounded-3xl border-[#646493] border-2'>
            <h2 className='bg-[#5553C4] 2xl:text-5xl text-center text-xl text-white font-bold py-4 rounded-t-2xl mb:text-base'>Premium</h2>
            <div className='p-6 mb:p-4 text-center '>
              <h3 className='text-customBlue text-2xl 2xl:text-4xl flex items-center justify-center gap-2 font-extrabold mb:text-xl'>
                <span className='text-6xl 2xl:text-[80px]'>8 </span> Sessions / month
              </h3>
              <p className='text-[#584A91] 2xl:text-2xl  lg:my-2  text-lg my-6 mb:my-2 mb:text-sm'>
                <span className='font-bold'>Session duration:</span> 60 minutes
              </p>
              <p className='text-[#584A91]  2xl:text-2xl text-lg my-6 lg:my-2  mb:my-2 mb:text-sm'>
                <span className='font-bold'>Membership duration:</span> Flexible
              </p>
              <p className='text-[#584A91] 2xl:text-2xl text-lg my-6  lg:my-2 mb:my-2 mb:text-sm'>
                <span className='font-bold'>Average cost per session:</span> $30.75
              </p>
              <h1 className='text-customBlue text-3xl lg:text-xl 2xl:text-4xl py-8 flex items-center justify-center gap-2 font-bold mb:text-xl'>
                <span className='text-6xl lg:text-4xl mb:text-3xl font-extrabold'>$249 </span>/ month
              </h1>
           <Link href='/SignupAs' ><Button className='text-sm 2xl:text-2xl xl:text-lg text-black w-full' btnName='BOOK A FREE TRIAL' /></Link>   
            </div>
          </div>
        </div>

        <div className='relative w-1/3  mt-10 mb:w-11/12 mb:mt-0'>
          <div className='absolute inset-0 transform translate-x-4 translate-y-4 bg-[#CFCCDD] rounded-3xl shadow-lg mb:-translate-x-4'></div>
          <div className='relative bg-white rounded-3xl border-darkBlue border-2'>
            <h2 className='bg-[#646493] text-center  text-xl 2xl:text-5xl text-white font-bold py-4 rounded-t-2xl mb:text-base'>Pay as you go</h2>
            <div className='p-8 mb:p-4'>
              <h3 className='text-customBlue text-2xl  flex items-center justify-center gap-2 font-extrabold '>

                <span className='text-4xl 2xl:text-5xl mb:text-2xl lg:text-3xl'> Free Package </span>
              </h3>
              <p className='text-darkBlue 2xl:text-2xl 2xl:py-6 xl:my-10 text-xl lg:text-lg my-4 text-center font-bold mb:text-sm'>
                Book an eTutor at any time,
                paying only the fees listed for
                each session. No upfront costs
                or subscription fees
              </p>
              <p className='text-blue text-center 2xl:text-2xl lg:my-2  text-lg my-8 mb:text-sm'>
                Ideal for upcoming exams
                and quick revisions.
              </p>
              <p className='text-darkBlue text-base 2xl:text-xl lg:text-xs  my-8 text-center font-bold mb:text-xs'>
                <span className='text-customBlue underline'>Contact us</span> Contact us for a personalized
                one with a discount
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Package
