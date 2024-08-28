import React from 'react'
import FormHeading from '../FormHeading'
import ReviewFormHead from '../ReviewFormHead'

const Review = () => {
  return (
    <div className='bg-questionbg p-14 rounded-[40px]'>
     <FormHeading className='' heading='Review Appllication' paragraph='Please review each section of your application to insure your information is correct. once you’re ready
click ‘’submit’’ to finalize this portion of the application process '/>
    <ReviewFormHead heading='Contact Information' />
    </div>
  )
}

export default Review
