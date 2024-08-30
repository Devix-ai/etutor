'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import line from "../../../../public/assets/comingsoon/whiteline.svg";

const menuItems = [
  { level: 0, text: 'Coming Soon', href: '/SoonNew' },
  { level: 1, text: 'About Us', href: '/SoonNew/Level1' },
  { level: 2, text: 'Features', href: '/SoonNew/Level2' },
  { level: 3, text: 'Kickstart', href: '/SoonNew/Level3' },
  { level: 4, text: 'Support', href: '/SoonNew/Level4' },
];

const SoonNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    // Optionally, reset hoveredIndex to prevent hover state from showing
    setHoveredIndex(null);
  };

  const getText = (index: number) => {
    // Display text based on selection or hover state
    if (selectedIndex === index) {
      return menuItems[index].text;
    }
    if (hoveredIndex === index) {
      return menuItems[index].text;
    }
    return `Level ${menuItems[index].level}`;
  };

  return (
    <nav className='py-11 w-[50%] tb:w-[60%] mx-auto'>
      <ul className='flex items-center justify-between w-full'>
        {menuItems.map((item, index) => (
          <li
            key={item.level}
            className='flex items-center justify-between text-[16px] lg:text-[13px] font-bold w-[15%] text-center'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(index)}
          >
            <Link href={item.href}>
              <p className='text-white transition-colors duration-300 ease-in-out'>
                {getText(index)}
              </p>
            </Link>
            {index < menuItems.length - 1 && (
              <Image src={line} alt="Separator" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SoonNavbar;
