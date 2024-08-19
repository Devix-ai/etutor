import React from 'react'
import Image from 'next/image'
import sortIcon from "../../../../public/assets/icons/sorticon.svg"
import searchIcon from "../../../../public/assets/icons/searchicon.svg"
const SearchTutor = () => {
  return (
    <div className='text-darkBlue text-lg flex items-end justify-end gap-8  mb:gap-4 mb:text-xs mb:flex-col mb:justify-center mb:items-start  '>
      <div className='bg-cardbg rounded-full cursor-pointer px-6 py-4 flex justify-between gap-16 mb:gap-4 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full'>
        <p>Sort By</p>
        <Image alt='sort' className='w-6 h-6 mb:w-3 mb:h-auto' src={sortIcon}/>
      </div>
      <div className='bg-cardbg  rounded-full px-6 py-4 flex justify-between   gap-16 mb:gap-2 mb:rounded-3xl mb:px-4 mb:py-3 mb:text-sm mb:w-full '>
        {/* <p>Search by eTutor's</p> */}
        <input type="text"  placeholder='Search by eTutors' className='placeholder:text-xs placeholder-darkBlue bg-transparent focus:outline-none' />
        <Image alt='search' className='w-6 h-6 mb:w-3 mb:h-auto' src={searchIcon}/>
      </div>
    </div>
  )
}

export default SearchTutor
