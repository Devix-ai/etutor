import React from 'react'
import Headings from './Headings'
import Link from 'next/link'
const ContactUs = () => {
  return (
    <div className='px-10 py-56 lg:py-32 mb:px-0 mb:py-20'>
      <Headings className='' heading='Contact Us' />
      <p className='text-darkBlue text-base mb:text-sm'>Have questions or need more information? Reach out to us at<Link href='' className='text-customBlue'> contact@etutor4me.com</Link></p>
    </div>
  )
}

export default ContactUs
