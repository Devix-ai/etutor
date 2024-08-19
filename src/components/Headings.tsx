import Link from 'next/link'
import React from 'react'
type propsType = {
  heading: string,
  className:string,
}
const Headings = ({ heading,className }: propsType) => {
  return (
    <div className=' '>
      <h1 className={`mb:text-2xl text-5xl font-extrabold text-darkBlue ${className}`}>{heading}</h1>
      {/* <p className='text-darkBlue text-base'>Have questions or need more information? Reach out to us at<Link href='' className='text-customBlue'> contact@etutor4me.com</Link></p> */}
    </div>
  )
}

export default Headings
