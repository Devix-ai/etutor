import React from 'react'

const InputHeading = ({text,className}) => {
  return (
    <div>
      <p className={` text-darkpurple text-3xl font-bold xl:text-2xl lg:text-xl py-4 pl-8 mb:text-sm ${className}`} >{text}</p>
    </div>
  )
}

export default InputHeading
