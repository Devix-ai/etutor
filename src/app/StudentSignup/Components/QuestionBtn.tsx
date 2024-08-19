import React from 'react'

const QuestionBtn = ({btnName,className,onClick }) => {
  return (
    <div>
      <div onClick={onClick } className={`bg-purpleBtn text-2xl text-darkBlue rounded-full w-full py-3  px-5 mt-4 border-darkBlue border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 ${className}`}>
        {btnName}
      </div>
    </div>
  )
}

export default QuestionBtn
