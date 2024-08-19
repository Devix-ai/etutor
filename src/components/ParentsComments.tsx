import React from 'react'
import Headings from './Headings'
import img1 from "../../public/assets/homepage/img1.png"
import img2 from "../../public/assets/homepage/img2.png"
import img3 from "../../public/assets/homepage/img3.png"
import Image from 'next/image'
const ParentsComments = () => {
  const content = [
    {
      id: 1,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img1,
      paragraph: `"eTutor4Me has completely changed the way 
I approach my studies. The sessions are 
engaging and my grades have improved 
significantly!" – Sarah, High School Student`
    },
    {
      id: 2,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img2,
      paragraph: `"My eTutor understands exactly what I need 
help with and explains things in a way that 
makes sense to me. Highly recommend!" – 
James, College Student`
    },
    {
      id: 3,
      title: 'Priscilla',
      date: ' Oct 16 2023',
      img: img3,
      paragraph: `"As a parent, I've seen such an amazing 
improvement in my child's grades and 
confidence. Big thanks to Emily, our fantastic 
eTutor!" – Lisa, Parent`
    }

  ]
  return (


    <div className=' px-10 my-40 mb:px-0 lg:px-0 mb:my-5'>
      <Headings className='' heading='`` Loved by parents & students' />
      <p className='text-darkBlue text-sm ' >98% of our parents say their students made significant progress</p>

      <div className='w-full flex gap-4 py-8 mb:flex-col'>
        {
          content.map((content) => (
            <div className='bg-cardbg p-6 w-1/3 rounded-xl mb:w-full' key={content.id}>
              <div className='flex flex-col row-gap-2' >
                <div className='flex items-center gap-5'>
                  <div className='rounded-full w-32 h-32 mb:w-20 mb:h-20'>
                    <Image alt='img' src={content.img} />
                  </div>
                  <div>
                    <h2 className=' font-bold text-lg '>{content.title}</h2>
                    <p className='text-sm mb:text-xs'>Published:{content.date}</p>
                  </div>
                </div>
                <p className='text-darkBlue mb:text-xs '>
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

export default ParentsComments
