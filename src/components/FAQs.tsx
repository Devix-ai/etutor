'use client'
import React, { useState } from 'react';
import downarrow from "../../public/assets/icons/downarrow.svg";
import uparrow from "../../public/assets/icons/uparrow.svg";
import Image from 'next/image';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqData: FAQItem[]; // Array of FAQ items
  display:string;
}

const FAQ: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-darkBlue'>
      <div className="py-8 mb:py-4">
        <div className='flex gap-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Image className='mb:h-3 mb:w-3' src={uparrow} alt="Up Arrow" /> : <Image className='mb:h-3 mb:w-3'  src={downarrow} alt="Down Arrow" />}
          <h2 className="text-lg mb:text-xs">{question}</h2>
        </div>
      </div>
      {isOpen && <p className="pl-6 text-base mb:text-xs">{answer}</p>}
    </div>
  );
};

const FAQs: React.FC<{ faqData: any[],display:string }> = ({ faqData,display }) => {
  // Check if faqData is valid
  if (!faqData || !Array.isArray(faqData)) {
    console.log('faqData:', faqData);
    return <div>No FAQs available</div>;
  }

  return (
    <div className='px-10 pr-0 flex justify-between w-full m-auto gap-10 mb:flex-col-reverse mb:px-0'>
      <div className='w-1/2 mb:w-full'>
        {faqData.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className={`bg-cardbg w-1/2 p-6 rounded-l-3xl flex flex-col items-end h-full mb:w-full ${display}`}>
        <h2 className='text-5xl text-darkBlue font-extrabold mb:text-2xl'>Frequently Asked Questions</h2>
        <Link href="" className='text-customBlue underline text-base font-bold mt-6'>More questions?</Link>
      </div>
    </div>
  );
};

export default FAQs;
