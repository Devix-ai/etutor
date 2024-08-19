import React from 'react'
import Headings from './Headings'
import Image from 'next/image'
import img1 from "../../public/assets/homepage/engaging-session.png"
import img2 from "../../public/assets/homepage/efficient-learn.png"
import img3 from "../../public/assets/homepage/encourage-env.png"
const WhyeTutor = () => {
  const content = [
    {
      id: 1,
      heading: 'Engaging Lessons',
      paragraph: 'Our approach ensures that learning is interactive and captivating. Our eTutors use innovative teaching methods to make lessons interesting and enjoyable, keeping students motivated and eager to learn.',
      img:img1,
    },
    {
      id: 2,
      heading: 'Efficient Learning',
      paragraph: 'We value your time and aim to make every session as productive as possible. Our eTutors are trained to deliver concise and impactful lessons that help you understand concepts quickly and thoroughly.',
      img:img2,
    },
    {
      id: 3,
      heading: 'Encouraging Environment',
      paragraph: 'We believe in fostering a supportive and positive learning atmosphere. Our eTutors are dedicated to encouraging students, building their confidence, and helping them overcome academic challenges with ease.',
      img:img3,
    }

  ]
  return (
    <div className=' px-10 lg:px-0 mb:px-0'>
      <Headings className='' heading='Why Choose eTutor4Me?' />

      <div className='w-full flex gap-4 py-8 mb:flex-col'>
        {
          content.map((content) => (
            <div className='bg-cardbg p-6 w-1/3 rounded-xl mb:w-full' key={content.id}>
              <div className='flex flex-col row-gap-2 mb:text-xs ' >
                <div className='h-64 w-full bg-gray-400 rounded-3xl mb:h-full'>
                  <Image className='w-full h-full ' alt='img' src={content.img} />
                </div>
                <h2 className='text-darkBlue font-bold mt-2 mb:text-sm'>{content.heading}</h2>
                <p className='text-darkBlue '>
                  {content.paragraph}
                </p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default WhyeTutor
