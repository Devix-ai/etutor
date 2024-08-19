import React from 'react'
import Image from 'next/image'
import award from "../../../../public/assets/icons/award4.svg"
import award9 from "../../../../public/assets/icons/award9.svg"
import award7 from "../../../../public/assets/icons/award7.svg"
import tut1 from "../../../../public/assets/homepage/tut1.png"
import tut2 from "../../../../public/assets/homepage/tut2.png"
import tut3 from "../../../../public/assets/homepage/tut3.png"
import tut4 from "../../../../public/assets/homepage/tut4.png"
const TutorDetails = () => {
    const TutorsDetail = [
        {
            name:'Mr.Firstname',
            bookings:'100',
            sessionPrice:'40',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award,
            img:tut1,
        },
        {
            name:'Mr.Firstname',
            bookings:'40',
            sessionPrice:'35',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award9,
            img:tut2,

        },
        {
            name:'Mr.Firstname',
            bookings:'60',
            sessionPrice:'30',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award7,
            img:tut3,

        },
        {
            name:'Mr.Firstname',
            bookings:'90',
            sessionPrice:'40',
            description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laboriosam, unde explicabo sit modi eum reprehenderit earum hic necessitatibus accusantium veritatis placeat ullam autem harum. Pariatur, aut omnis quos reiciendis magnam magni, eius quasi alias possimus officiis tenetur quis atque odit placeat aliquam cumque quae architecto.',
            award:award,
            img:tut4,

            
        },
    ]
  return (
    <>
{

    TutorsDetail.map((tutor)=>(
  <div className='flex w-100 gap-12 border-b border-gray-600 py-12 mb:py-8 mb:flex-col mb:gap-4 '>
   
        <div className='flex gap-8 justify-between items-center mb:justify-between mb:gap-4'>
  <div className='w-40 h-40  rounded-2xl  mb:w-1/2 mb:h-auto'>
        <Image src={tutor.img} alt='tutor' />
  </div>
  <div className='flex flex-col gap-3 mb:gap-1'>
      <h3 className='text-3xl font-extrabold mb:text-xl '>{tutor.name}</h3>
      <p className='text-2xl text-customBlue mb:text-sm'>100+{tutor.bookings}</p>
      <p className='text-2xl text font-extrabold mb:text-sm'>${tutor.sessionPrice}<span className='text-gray-600-500 font-thin'>/session</span></p>
  </div>
</div>
<div className='flex items-center justify-between gap-24 w-full mb:gap-4 mb:flex-col mb:justify-start mb:items-start'>
  <div className='max-w-xl mb:w-full'> 
      <h2 className='text-xl font-bold'>About me</h2>
      <p className='text-base leading-5 mb:text-xs mb:leading-4'>
         {tutor.description}
      </p>
  </div>
  <div className='mb:w-1/2'>
      <Image className='w-32 h-32' alt='award' src={tutor.award} />
  </div>
</div>
 
    
</div>
   ))
}






  </>
  )

}

export default TutorDetails;
