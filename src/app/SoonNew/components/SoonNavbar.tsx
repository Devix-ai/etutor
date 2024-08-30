'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { level: 0, text: 'Coming Soon', href: '/SoonNew/Level0' },
  { level: 1, text: 'About Us', href: '/SoonNew/Level1' },
  { level: 2, text: 'Features', href: '/SoonNew/Level2' },
  { level: 3, text: 'Kickstart', href: '/SoonNew/Level3' },
  { level: 4, text: 'Support', href: '/SoonNew/Level4' },
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
              style={{ width: '100px' }} // Ensure a fixed width for consistency
            >
              <Link href={item.href}>
                <p
                  className={`text-white transition-colors duration-300 ease-in-out ${
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
