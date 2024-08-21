import React from 'react'
type propsType = {
  btnName: string;
  className:string;
}
const Button = ({ btnName,className }: propsType) => {
  return (
    
    <button className={`${className} text-3xl font-roboto font-bold bg-customBlue  px-10 py-4 border-none focus:outline-none text-white rounded-full xl:text-2xl  mb:px-8 mb:py-4 mb:text-base`} >      {btnName}
    </button>

  )
}

export default Button
