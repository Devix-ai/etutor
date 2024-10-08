import React from 'react'

const SingupHeading = ({heading,className}) => {
  return (
    <div>
      <h2 className={`${className} text-3xl font-extrabold text-darkBlue py-6 lg:text-2xl lg:py-3 mb:text-lg mb:py-2`}>{heading}</h2>
    </div>
  )
}

export default SingupHeading
