import React from 'react'
type propsType = {
  number: number,
  head: string,
  text: string;
}
const WorkSteps = ({ number, head, text }: propsType) => {
  return (
    <div className='flex justify-center items-center mt-8 col-gap-5 mb:col-gap-3 mb:mt-5'>
      <div className=' w-20 h-20 text-darkBlue  text-5xl flex justify-center items-center bg-purple  rounded-xl font-extrabold mb:text-2xl  mb:h-16 mb:w-16 mb:p-4'>
        {number}</div>
      <div>
        <h2 className=' text-2xl font-bold mb:text-lg'>{head}</h2>
        <p className=' text-xs'>{text}</p>

      </div>
    </div>
  )
}

export default WorkSteps
