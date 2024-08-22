import React from 'react'

const QuestionBtn = ({btnName,className,onClick }) => {
  return (
    <div className='font-roboto'>
      <div onClick={onClick } className={`bg-purpleBtn text-2xl text-[#534988] rounded-full w-full py-4 2xl:text-4xl  px-5 mt-4 border-darkBlue border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 ${className}`}>
        {btnName}
      </div>
    </div>
  )
}

export default QuestionBtn
