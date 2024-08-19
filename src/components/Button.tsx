import React from 'react'
type propsType = {
  btnName: string;
  className:string;
}
const Button = ({ btnName,className }: propsType) => {
  return (
    
    <button className={`${className} text-lg bg-customBlue font-bold px-8 py-3 border-none focus:outline-none text-white rounded-full mb:text-xs mb:px-6  `} >      {btnName}
    </button>

  )
}

export default Button
