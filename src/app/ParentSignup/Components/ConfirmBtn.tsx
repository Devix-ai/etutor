import React from 'react'

const ConfirmBtn = ({btnName,className,onClick} ) => {
  return (
    <div onClick={onClick } className={ `${className} bg-customBlue text-2xl text-white rounded-full w-full py-3  px-5 mt-12 border-darkBlue border cursor-pointer text-center lg:text-xl lg:py-2 mb:text-sm mb:p-2 mb:mt-2 `}>
   {btnName}
  </div>
  )
}

export default ConfirmBtn
