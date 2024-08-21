import React from 'react';
import tutorsData from "../data/data.json";
import tutor1 from "../../public/assets/homepage/tutor1.png";
import tutor2 from "../../public/assets/homepage/tutor2.png";
import tutor3 from "../../public/assets/homepage/tutor3.png";
import tutor4 from "../../public/assets/homepage/tutor4.png";
import award from "../../public/assets/homepage/award.png";
import Image from 'next/image';
import Link from 'next/link';
import Headings from './Headings';

const MeeteTutors = () => {

  const tutorsData = [
    {
      id: 1,
      image: tutor1,
      name: "Julie",
      bookings: "60+ Bookings",
      sessionPrice: "$30"
    },
    {
      id: 2,
      image: tutor2,
      name: "Koby",
      bookings: "100+ Bookings",
      sessionPrice: "$45"
    },
    {
      id: 3,
      image: tutor3,
      name: "Henry",
      bookings: "70+ Bookings",
      sessionPrice: "$40"
    },
    {
      id: 4,
      image: tutor4,
      name: "Scarlett",
      bookings: "46+ Bookings",
      sessionPrice: "$30"
    }
  ];

  return (
    <div className='font-roboto pt-64  mt-16 px-10 lg:px-0 mb:p-0 lg:pt-40'>
      <div className=' flex justify-between items-end mb:block'>
        <Headings className=''  heading='Meet Our eTutors' />
        <Link href="" className='text-customBlue underline text-3xl font-extrabold lg:text-xl'>More eTutors</Link>
      </div>
      <div className='mt-8 mb:flex-wrap  justify-between  grid grid-cols-4 mb:grid-cols-1 tb:grid-cols-2 lg:grid-cols-3 mb:justify-center lg:flex-wrap  items-center gap-6 py-5 '>
        {
          tutorsData.map((tutor) => (
            <div className='mb:w-full flex flex-col w-100 font-roboto bg-cardbg px-8 py-6 rounded-3xl gap-2 lg:w-72' key={tutor.id}>
              <div className='relative'>
                <Image className='mb:w-full w-full' alt='' src={tutor.image} />
                <Image alt='' src={award} style={{ right: '-10%', bottom: '-12%' }} className='w-24 h-24 absolute' />
              </div>
              <h3 className='text-darkBlue text-5xl font-extrabold lg:text-3xl xl:text-4xl mb:text-3xl'>{tutor.name}</h3>
              <p className='text-customBlue text-3xl font-thin lg:text-xl xl:text-2xl mb:text-2xl'>{tutor.bookings}</p>
              <p className='text-darkBlue text-2xl font-extrabold lg:text-lg xl:text-xl mb:text-xl'>{tutor.sessionPrice}<span className='text-gray-600 font-light'>/session</span></p>
            </div>
          ))
        }
      </div>
      <div className='text-darkBlue text-2xl leading-8 font-bold font-roboto mb:py-5 mb:text-xs py-16 mb:leading-normal  lg:text-xl'>
        <p  >Our eTutors are top students selected for their exceptional knowledge and ability to connect with peers. They understand your challenges and
          provide practical, effective solutions. Always striving to level up, their progress is based on experience, student improvements, and reviews. This
          gamer-like drive ensures you get the best support possible.
        </p>
        <p className='mt-4 '>Want to become an eTutor? <Link href='' className='text-customBlue underline font-extrabold' > <span>Join us </span></Link> </p>
      </div>
    </div>
  );
}

export default MeeteTutors;
