import React from 'react'
import Image from 'next/image'
import edit from "../../../../public/assets/icons/editicon.svg"
import FormHeading from './FormHeading'
const ReviewFormHead = ({heading}) => {
  return (
    <div className='flex justify-between items-center border-b border-[#534988]' >
      <FormHeading heading={heading} />
      <div className='cursor-pointer flex gap-2' >
        <Image src={edit} />
        <h2 className='text-[22px] text-customBlue underline' >Edit</h2>
      </div>
    </div>
  )
}

export default ReviewFormHead
