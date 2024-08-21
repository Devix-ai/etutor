import React from 'react'

const FormHeading = ({heading,paragraph,className}) => {
  return (
    <div>
      {/* <h2>{heading}</h2> */}
      <h2 className={`text-darkBlue text-4xl font-bold`}>{heading}</h2>
      <p className={`text-darkBlue text-2xl  mt-3`}>{paragraph}</p>
    </div>
  )
}

export default FormHeading
