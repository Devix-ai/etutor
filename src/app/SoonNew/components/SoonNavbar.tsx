'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { level: 0, text: 'Coming Soon' },
  { level: 1, text: 'About Us' },
  { level: 2, text: 'Features' },
  { level: 3, text: 'Kickstart' },
  { level: 4, text: 'Support' },
];

const SoonNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className='py-11 w-[50%] mx-auto'>
      <ul className='flex justify-between items-center w-full'>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.level}>
            <li
              className='flex items-center text-lg font-bold'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/soon-new/${item.level}`}>
                <p
                  className={`text-white transition-all duration-200 ${
                    hoveredIndex === index ? 'text-gray-400' : ''
                  }`}
                >
                  {hoveredIndex === index ? item.text : `Level ${item.level}`}
                </p>
              </Link>
            </li>
            {index < menuItems.length - 1 && (
              <span className='text-white'> | </span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default SoonNavbar;
