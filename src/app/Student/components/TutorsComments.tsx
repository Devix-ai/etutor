import Headings from '@/components/Headings'
import React from 'react'
import img1 from "../../../../public/assets/homepage/img3.png"
import img2 from "../../../../public/assets/homepage/img2.png"
import award1 from "../../../../public/assets/icons/award1.svg"
import award2 from "../../../../public/assets/icons/award2.svg"
import award3 from "../../../../public/assets/icons/award3.svg"
import award4 from "../../../../public/assets/icons/award4.svg"
import Image from 'next/image'
const TutorsComments = () => {
    const content = [
        {
          id: 1,
          title: 'Emily J.',
          date: 'August 3, 2024',
          img: img1,
          paragraph: `I recently started as an eTutor , and I can 
clearly see how everything works. The 
platform is incredibly well-organized, making 
it easy to manage my schedule and connect 
with students. The support and resources 
available have been fantastic, and I'm excited 
to continue growing and helping students 
achieve their academic goals. `,
award:award1,
        },
        {
          id: 2,
          title: 'Sarah M.',
          date: ' June 15, 2024',
          img: img1,
          paragraph: `As a Level 6 eTutor, I've had an amazing 
experience so far. It is exceptionally 
well-organized, making it easy to track my 
progress and schedule sessions. The gamified 
system motivates me to keep improving, and 
I love seeing my students succeed. The 
community support is fantastic, and I feel 
valued and rewarded for my efforts. Highly 
recommend to anyone looking to make a 
difference in students' lives!`,
award:award1,
        },
        {
          id: 3,
          title: 'Priscilla J.',
          date: '  September 28, 2024',
          img: img1,
          paragraph: `I've recently reached Level 8 with eTutor4Me, 
and I couldn't be happier with my experience. 
From day one, everything has been 
straightforward and well-organized, which 
made settling in a breeze. The platform's 
structure is fantastic, and it's clear that a lot 
of thought has gone into making it 
user-friendly. The leveling system is not only 
fun but also a great way to keep track of my 
growth and success. I've found the flexibility 
to be a huge plus, allowing me to balance 
tutoring with my other commitments.`,
award:award3,
        },
        {
          id: 4,
          title: 'July 22, 2024',
          date: ' Oct 16 2023',
          img: img2,
          paragraph: `Reaching Level 10 with eTutor4Me has been 
an incredible journey! I started by adding my 
university grades, which allowed me to jump 
straight to Level 4. From there, I worked my 
way up to Level 10. The platform is 
exceptionally well-organized, making it easy 
to manage everything from scheduling 
sessions to tracking progress. The leveling 
system keeps me motivated and clearly 
showcases my growth. The flexibility is 
fantastic, fitting perfectly with my other 
commitments. The supportive community 
and structured environment make tutoring 
here a truly rewarding experience.`,
award:award4,
        }
    
      ]
  return (
    <div className='px-10 py-16 mb:px-0 mb:py-4'>
      <Headings heading='``What our eTutors say' />
      <p className='text-darkBlue text-sm mb:text-xs' >98% of our eTutors say they are happy to work with us</p>
      <div className='w-full flex gap-4 py-8 mb:flex-col'>
        {
          content.map((content) => (
            <div className='bg-cardbg p-6 w-1/3 rounded-xl mb:w-full mb:p-4' key={content.id}>
              <div className='flex flex-col row-gap-2' >
                <div className='flex items-center gap-5'>
                  <div className='rounded-full w-20 h-20'>
                    <Image src={content.img} />
                  </div>
                  <div>
                    <h2 className=' font-bold text-lg'>{content.title}</h2>
                    <p style={{ fontSize: '9px' }} className=''>Published:{content.date}</p>
                  </div>
                  <div className='rounded-full w-20 h-20'>
                    <Image className='w-20 h-20' src={content.award} />
                  </div>
                </div>
                <p className='text-darkBlue text-xs leading-4  '>
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

export default TutorsComments
