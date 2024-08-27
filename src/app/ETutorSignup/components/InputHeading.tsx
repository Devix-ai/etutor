import React from 'react'

const InputHeading = ({text,className}) => {
  return (
    <div>
      <p className={`${className} text-darkpurple text-[28px] font-medium xl:text-2xl lg:text-xl py-4 pl-8 mb:text-sm `} >{text}</p>
    </div>
  )
}

export default InputHeading
