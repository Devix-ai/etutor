import React from 'react'
type propsType = {
  number: number,
  head: string,
  text: string;
}
const WorkSteps = ({ number, head, text }: propsType) => {
  return (
    <div className='text-darkBlue font-roboto flex justify-start items-center mt-8 gap-5 mb:gap-3 mb:mt-5'>
      <div className=' w-32 h-32 text-darkBlue  text-6xl flex justify-center items-center bg-cardbg  rounded-xl font-extrabold lg:w-20 lg:h-20 lg:text-2xl mb:text-2xl  mb:h-16 mb:w-16 mb:p-4'>
        {number}</div>
      <div className='w-[80%]'>
        <h2 className=' text-4xl font-bold lg:text-2xl mb:text-base '>{head}</h2>
        <p className=' text-lg font-bold lg:text-sm mb:text-xs'>{text}</p>

      </div>
    </div>
  )
}

export default WorkSteps
