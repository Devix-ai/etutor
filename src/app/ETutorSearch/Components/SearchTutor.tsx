'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import sortIcon from "../../../../public/assets/icons/sorticon.svg"
import searchIcon from "../../../../public/assets/icons/searchicon.svg"
const SearchTutor = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const subjects = ['Joining Date','Alphabetical order','Age','Grade','Option 5'];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className='text-[#685AAD] font-roboto w-[60%] xl:w-[70%] lg:w-[75%] lg:text-2xl text-3xl ml-auto flex mt-64 mb-40 items-end justify-end gap-8  mb:gap-4 mb:text-xs mb:flex-col mb:justify-center mb:items-start mb:my-12 mb:w-full '>
      <div onClick={toggleDropdown} className='bg-[#DBCAFF] w-1/2 relative rounded-full items-center  cursor-pointer px-10 py-4 flex  justify-between gap-16 mb:gap-4 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full'>
        <p>Sort By</p>
        <Image alt='sort' className='w-6 h-10 mb:w-3 mb:h-auto'  src={sortIcon}/>
        {isDropdownOpen && (
            <div className="absolute z-10 w-[90%]  top-8 mt-16 right-6 mx-auto  rounded-3xl shadow-lg bg-[#DBCAFF] mb:mt-0 mb:right-3">
              <div className="py-4 px-5   ">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center text-3xl p-3 lg:text-xl text-[#685AAD] border-b border-[#6A6096]    px-5 py-2   cursor-pointer mb:text-sm">
                    
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
      <div className='bg-[#DBCAFF] w-1/2 rounded-full px-10 py-4 flex justify-between   gap-16 mb:gap-2 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full '>
        {/* <p>Search by eTutor's</p> */}
        <input type="text"  placeholder='Search by eTutors' className='placeholder:text-3xl mb:placeholder:text-xs lg:placeholder:text-2xl w-[70%] placeholder-[#685AAD] bg-transparent focus:outline-none' />
        <Image alt='search' className='w-6 h-10 mb:w-3 mb:h-auto' src={searchIcon}/>
      </div>
    </div>
  )
}

export default SearchTutor
