import React from 'react'
import Headings from './Headings'
import Link from 'next/link'
const ContactUs = () => {
  return (
    <div className='px-10 pt-56 pb-20 lg:py-32 mb:px-0 mb:py-20 font-roboto'>
      <Headings className='' heading='Contact Us' />
      <p className='text-darkBlue text-2xl mb:text-sm'>Have questions or need more information? Reach out to us at<Link href='' className='text-customBlue'> contact@etutor4me.com</Link></p>
    </div>
  )
}

export default ContactUs
