import React from 'react'

const FormHeading = ({heading,paragraph,className,paraclass}) => {
  return (
    <div>
      {/* <h2>{heading}</h2> */}
      <h2 className={`${className} text-darkBlue text-[40px] font-semibold`}>{heading}</h2>
     {paragraph && <p className={`${paraclass} text-darkBlue text-[26px]  mt-3`}>{paragraph}</p>} 
    </div>
  )
}

export default FormHeading
