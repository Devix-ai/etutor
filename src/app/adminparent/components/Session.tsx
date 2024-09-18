import React, { useState } from 'react';

const SessionDashboard = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeSubTab, setActiveSubTab] = useState('upcoming');

  const tabs = [
    { id: 'individual', label: 'INDIVIDUAL SESSION' },
    { id: 'group', label: 'GROUP SESSION' },
    { id: 'trial', label: 'TRIAL SESSION' },
  ];

  const subTabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <div className="w-full  h-fit pt-4 bg-[#EDE8FA] rounded-3xl  relative">



      <div className="flex justify-between items-center mb-4 absolute top-0 left-0 w-full">
        <div className=" grid grid-cols-3   rounded-tl-3xl rounded-tr-3xl h-20 w-full">
        {tabs.map((tab) => (
  <button
    key={tab.id}
    onClick={() => setActiveTab(tab.id)}
    className={` flex items-center justify-center flex-nowrap py-2 font-bold text-sm 
      ${
        // Check for 'individual' tab
        tab.id === 'individual' 
          ? activeTab === 'individual' 
            ? 'bg-[#EDE8FA] text-[#685AAD] rounded-tl-3xl  ' // Active 'individual' tab styles
            : 'bg-[#6B5692] text-white rounded-tl-3xl ' // Inactive 'individual' tab styles with top-right corner rounded
          : ''
      } 
      ${
        // Check for 'group' tab
        tab.id === 'group' 
          ? activeTab === 'group'
            ? 'bg-[#EDE8FA] text-[#685AAD]   ' // Active 'group' tab styles
            : 'bg-[#9B85C8] text-white ' // Inactive 'group' tab styles
          : ''
      }
      ${
        // Check for 'trial' tab
        tab.id === 'trial' 
          ? activeTab === 'trial'
            ? 'bg-[#EDE8FA] text-[#685AAD]  ' // Active 'trial' tab styles
            : 'bg-[#6B5692] text-white ' // Inactive 'trial' tab styles
          : ''
      }`}
  >
    {tab.label}
  </button>
))}

        </div>

        <div className='bg-white h-20 w-[42%] rounded-bl-3xl'>

        </div>
        
      </div>



      <div className='mt-24'>
      <div className="bg-[#473171] ml-10 py-2 px-2 text-sm rounded-xl w-fit flex">
      <button
        onClick={() => setActiveSubTab('upcoming')}
        className={`flex-1 py-5 px-9 text-center rounded-xl transition-all duration-300 ${
          activeSubTab === 'upcoming' ? 'bg-[#8653FF] text-white' : 'text-[#d8b4fe]'
        }`}
      >
        Upcoming
      </button>
      <button
        onClick={() => setActiveSubTab('completed')}
        className={`flex-1 py-5 px-9 text-center rounded-xl transition-all duration-300 ${
          activeSubTab === 'completed' ? 'bg-[#8653FF] text-white' : 'text-[#d8b4fe]'
        }`}
      >
        Completed
      </button>
    </div>
      </div>



      <div className="bg-[#a296cc] p-4 rounded-3xl mt-6">
       

      
          {activeTab === 'individual' && (
            <div>{activeSubTab === "upcoming" && (
              <div className='px-10'>
                <div className='border-2 w-[65%] flex justify-between mb-4'>
                  <span>Subject and level</span>
                  <span>eTutor</span>
                  <span>Duration</span>
                  <span>Date and Time </span>
                </div>


                <div>
                  <div className='flex border-2 justify-between items-center p-1 rounded-lg'>
                    <span>English Level C1 #3</span>
                    <span>Tutor Name</span>
                    <span>60min</span>
                    <span>17-june-12:00</span>
                    <div className='flex gap-2 items-center justify-center'>
                      <button  className='bg-blue px-6 py-1 rounded-lg'>Edit Session</button>
                      <button className='bg-blue px-6 py-1 rounded-lg'>Meeting Link</button>
                    </div>
                  </div>
                </div>


              </div>
            )}</div>
          )}
          {activeTab === 'group' && (
            <div>Group Session Content for {activeSubTab}</div>
          )}
          {activeTab === 'trial' && (
            <div>Trial Session Content for {activeSubTab}</div>
          )}
      
      </div>
    </div>
  );
};

export default SessionDashboard;