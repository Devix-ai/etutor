// app/SoonNew/components/SoonNavbar.tsx
import React from 'react';
import Link from 'next/link';

const SoonNavbar = () => {
  return (
    <nav className=' py-11 w-[50%] mx-auto'>
      <ul className='flex justify-between items-center w-full'>
        {[1, 2, 3, 4, 5].map((level, index) => (
          <React.Fragment key={level}>
            <li className='flex items-center text-lg font-bold'>
              <Link href={`/soon-new/${level}`}>
                <p className='text-white hover:text-gray-400'>{`Level ${level}`}</p>
              </Link>
            </li>
            {index < 4 && <span className='text-white '>|</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default SoonNavbar;
