'use client'
import React from 'react';

interface LevelsHeadingProps {
  headingClassName?: string;
  paragraphClassName?: string;
  headingText?: string;
  paragraphText?: string;
}

const LevelsHeading =({headingClassName,paragraphClassName,headingText,paragraphText})=> {
  return (
    <div className='text-center' >
    <h2 className={`${headingClassName} font-bold text-7xl text-white `}>
      {headingText}
    </h2>
    <p className={`${paragraphClassName} text-white text-[40px] font-medium mt-11 `}>
      {paragraphText}
    </p>
  </div>
  );
}

export default LevelsHeading;
