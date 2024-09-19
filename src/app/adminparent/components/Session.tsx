import React, { useState } from "react";
import tier from "../../../../public/tier.svg";
import message from "../../../../public/messageicon.svg";
import folder from "../../../../public/foldericon.svg";
import profile from "../../../../public/profileicon.svg";
import sample from "../../../../public/assets/heroimg.png";
import Image from "next/image";




interface sessionprops {
  setActiveFindEtutor: (item: string) => void;
  setActiveMYEtutor: (item: string) => void;
}

const SessionDashboard = ({ setActiveFindEtutor,setActiveMYEtutor }: sessionprops) => {
  const [activeTab, setActiveTab] = useState("individual");
  const [activeSubTab, setActiveSubTab] = useState("upcoming");

  const tabs = [
    { id: "individual", label: "INDIVIDUAL SESSION" },
    { id: "group", label: "GROUP SESSION" },
    { id: "trial", label: "TRIAL SESSION" },
  ];

  const subTabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
  ];
  // @ts-ignore
  const getTabColor = (tabId) => {
    if (activeTab === 'individual') {
      if (tabId === 'group') return '#9B85C8';
      if (tabId === 'trial') return '#6B5692';
    } else if (activeTab === 'group') {
      if (tabId === 'individual') return '#6B5692';
      if (tabId === 'trial') return '#9B85C8';
    } else if (activeTab === 'trial') {
      if (tabId === 'group') return '#9B85C8';
      if (tabId === 'individual') return '#6B5692';
    }
    return '#EDE8FA'; // Active tab color
  };

  return (
    <div className="w-full  h-full pt-4 bg-[#EDE8FA] rounded-3xl  relative">
      <div className="flex justify-between items-start mb-4 absolute top-0 left-0 w-full">
        <div className=" grid grid-cols-3   rounded-tl-3xl rounded-tr-3xl h-10 sm:h-16 w-full">
        {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center justify-center flex-nowrap  font-normal box-border sm:font-bold text-xs px-2 sm:text-sm transition-all
            ${tab.id === activeTab ? 'bg-[#EDE8FA] text-[#685AAD] transition-all' : `text-white transition-all`}
            ${tab.id === 'individual' ? 'rounded-tl-3xl transition-all' : 'transition-all'}
          `}
          style={{ backgroundColor: getTabColor(tab.id) }}
        >
          {tab.label}
        </button>
      ))}
        </div>

        <div className="bg-white h-10 sm:h-16 w-[38%] rounded-bl-3xl hidden sm:block   flex transition-all  items-start justify-center px-4 custom-lg:px-8 pb-4 ">
          {activeTab === "trial" ? (
            ""):(
              
          <div className="text-[#685AAD] font-bold text-xs px-2 transition-all    sm:text-sm custom-xl:text-xl h-full w-full rounded-md sm:rounded-xl mb-1 uppercase  bg-[#EDE8FA]  flex items-center justify-center ">
          Sessions&nbsp;left:2
          </div>
              )}
        </div>
      </div>

      <div className="mt-24">
        {activeTab === "trial" ? (
          <div className="bg-[#473171] ml-2 sm:ml-10 py-2 px-2 text-sm rounded-xl w-fit flex ">
            <button
              onClick={() => setActiveSubTab("upcoming")}
              className={`flex-1 py-3 sm:py-5 px-9 text-center rounded-xl transition-all duration-300 ${
                activeSubTab === "upcoming"
                  ? "bg-[#8653FF] text-white transition-all"
                  : "text-[#d8b4fe] transition-all"
              }`}
            >
              Requests
            </button>
            <button
              onClick={() => setActiveSubTab("completed")}
              className={`flex-1 py-3 sm:py-5 px-9 text-center rounded-xl transition-all duration-300 ${
                activeSubTab === "completed"
                  ? "bg-[#8653FF] text-white"
                  : "text-[#d8b4fe]"
              }`}
            >
              Application
            </button>
          </div>
        ) : (
          <div className="bg-[#473171] ml-2 sm:ml-10 py-2 px-2 text-sm rounded-xl w-fit flex ">
            <button
              onClick={() => setActiveSubTab("upcoming")}
              className={`flex-1 py-3 sm:py-5 px-9 text-center rounded-xl transition-all duration-300 ${
                activeSubTab === "upcoming"
                  ? "bg-[#8653FF] text-white"
                  : "text-[#d8b4fe]"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveSubTab("completed")}
              className={`flex-1 py-3 sm:py-5 px-9 text-center rounded-xl transition-all duration-300 ${
                activeSubTab === "completed"
                  ? "bg-[#8653FF] text-white"
                  : "text-[#d8b4fe]"
              }`}
            >
              Completed
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#a296cc] p-2 custom-xl:p-4 rounded-3xl mt-6  h-full overflow-auto">
        {/* --------------individual session-----------------   */}
        {activeTab === "individual" && (
          <>
            <div>
              {activeSubTab === "upcoming" && (
                <div className="px-1  custom-xl:px-6">
                  <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-4 custom-xl:px-4">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subject and level
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      eTutor
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Duration
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Date and Time{" "}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>

                      <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                        <button 
                           onClick={() => setActiveFindEtutor('Find eTutor')}
                        className="bg-[#473171] px-6 py-[2px] rounded-md">
                          Edit&nbsp;Session
                        </button>
                        <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                          Meeting&nbsp;Link
                        </button>
                      </div>
                    </div>
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>

                      <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                        <button 
                         onClick={() => setActiveFindEtutor('Find eTutor')}
                        className="bg-[#473171] px-6 py-[2px] rounded-md">
                          Edit&nbsp;Session
                        </button>
                        <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                          Meeting&nbsp;Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              {activeSubTab === "completed" && (
                <div className="px-1  custom-xl:px-6">
                  <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-4 custom-xl:px-4">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subject and level
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      eTutor
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Duration
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Date and Time{" "}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>
                    </div>
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* -----------------group session------------- */}
        {activeTab === "group" && (
          <>
            <div>
              {activeSubTab === "upcoming" && (
                <div className="px-1  custom-xl:px-6">
                  <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-4 custom-xl:px-4">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subject and level
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      eTutor
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Duration
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Date and Time{" "}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>

                      <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                        <button 
                         onClick={() => setActiveFindEtutor('Find eTutor')}
                        className="bg-[#473171] px-6 py-[2px] rounded-md">
                          Edit&nbsp;Session
                        </button>
                        <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                          Meeting&nbsp;Link
                        </button>
                      </div>
                    </div>
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>

                      <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                        <button 
                         onClick={() => setActiveFindEtutor('Find eTutor')}
                        className="bg-[#473171] px-6 py-[2px] rounded-md">
                          Edit&nbsp;Session
                        </button>
                        <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                          Meeting&nbsp;Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              {activeSubTab === "completed" && (
                <div className="px-1  custom-xl:px-6">
                  <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-4 custom-xl:px-4">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subject and level
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      eTutor
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Duration
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Date and Time{" "}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>
                    </div>
                    <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                      <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          English Level C1 #3
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          Tutor Name
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md custom-xl:pr-4">
                          60min
                        </span>
                        <span className="text-xs max-w-13 sm:text-sm custom-xl:text-md">
                          17-june-12:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ------------------trial session----------------- */}
        {activeTab === "trial" && (
          <>
            <div>
              {activeSubTab === "upcoming" && (
                <div className="px-1  custom-xl:px-4">
                  <div className="w-full ml-[5%] custom-xl:w-[65%] custom-2xl:flex justify-between mb-1 sm:mb-4 custom-xl:px-4 hidden py-2 ">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Name and availability
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subjects
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      More information
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex justify-between flex-wrap  custom-xl:items-center  py-6 rounded-2xl bg-[#9B85C8] pl-2 sm:px-8 pr-2  custom-xl:flex-row custom-xl:gap-0 gap-4">
                      {/* name and tier box */}
                      <div className="flex items-center justify-center flex-col custom-xl:w-fit w-full custom-xl:flex-row gap-3 h-fit items-center  ">
                        <div className="h-[112px] w-[112px] rounded-full bg-white relative ">
                          <div className="overflow-hidden  rounded-full h-full w-full">
                            <Image src={sample} alt="" className="" />
                          </div>
                          <div className="tier">
                            <Image
                              src={tier}
                              alt=""
                              className="w-12 h-12 absolute -bottom-1 -left-2"
                            />
                          </div>
                        </div>

                        <div className=" h-full flex flex-col items-center justify-center gap-5 max-w-44 ">
                          <h1 className="font-bold text-xl  w-full text-center custom-xl:text-start ">
                            Mr. FirstName
                          </h1>

                          <div className="w-full  text-center custom-xl:text-start">
                            <p className="text-md">Availability:</p>
                            <span className="text-[#473171] text-md">
                              Mon,wed,thu from 4:00pm
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* subject and info box */}
                      <div className="custom-xl:max-w-52  w-full  h-fit flex flex-col items-center custom-xl:items-start">
                        <span className="text-md">Subjects:</span>
                        <p className="  text-[#473171] text-md text-center custom-xl:text-start">
                          <b>Mathematics (up to 13th grade)</b> English (up to
                          13th grade) Chemistry (up to 10th grade)
                        </p>
                      </div>

                      {/* study and experience box */}
                      <div className="flex flex-col gap-2  custom-xl:max-w-52 w-full items-center ">
                        <div className="flex flex-col items-center custom-xl:items-start">
                          <span className="text-md text-white">Study</span>
                          <p className="text-md text-[#473171]">
                            Primary School Teacher Training{" "}
                          </p>
                        </div>

                        <div className="flex flex-col items-center custom-xl:items-start">
                          <span className="text-md text-white">
                            Teaching Experience
                          </span>
                          <p className="text-md text-[#473171]">
                            3 years and 7 students currently
                          </p>
                        </div>
                      </div>

                      {/* accept deny box */}

                      <div className="flex flex-col items-center custom-xl:items-start  w-full custom-xl:w-fit custom-xl:py-2">
                        <div className=" h-full flex flex-col gap-6 w-fit custom-lg:w-fit">
                          <div className="btns flex gap-6 items-center">
                            <button className="py-1.5 font-normal px-5 text-md rounded-full bg-transparent">
                              Deny
                            </button>
                            <button
                            onClick={() => setActiveFindEtutor('Find eTutor')}
                            className="py-1.5 font-normal px-5 text-md rounded-full bg-[#8358F7]">
                              Accept
                            </button>
                          </div>
                          <div className=" flex  h-fit w-full justify-between items-start ">
                            <Image
                            onClick={() => setActiveMYEtutor('My eTutor')}
                              src={message}
                              alt=""
                              className="w-8  hover:cursor-pointer"
                            />
                            <Image
                            onClick={() => setActiveMYEtutor('My eTutor')}
                              src={folder}
                              alt=""
                              className="w-8  hover:cursor-pointer"
                            />
                            <Image
                            onClick={() => setActiveMYEtutor('My eTutor')}
                              src={profile}
                              alt=""
                              className="w-6  hover:cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              {activeSubTab === "completed" && (
                <div className="px-1  custom-xl:px-4">
                  <div className="w-full ml-[5%] custom-xl:w-[65%] custom-2xl:flex justify-between mb-1 sm:mb-4 custom-xl:px-4 hidden ">
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Name and availability
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      Subjects
                    </span>
                    <span className="px-2 custom-xl:px-0 text-xs sm:text-sm">
                      More information
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 custom-xl:gap-3">
                    <div className="flex justify-between flex-wrap  custom-xl:items-center  py-6 rounded-2xl bg-[#9B85C8] pl-2 sm:px-8 pr-2  custom-xl:flex-row custom-xl:gap-0 gap-4">
                      {/* name and tier box */}
                      <div className="flex items-center justify-center flex-col custom-xl:w-fit w-full custom-xl:flex-row gap-3 h-fit items-center  ">
                        <div className="h-[112px] w-[112px] rounded-full bg-white relative ">
                          <div className="overflow-hidden  rounded-full h-full w-full">
                            <Image src={sample} alt="" className="" />
                          </div>
                          <div className="tier">
                            <Image
                              src={tier}
                              alt=""
                              className="w-12 h-12 absolute -bottom-1 -left-2"
                            />
                          </div>
                        </div>

                        <div className=" h-full flex flex-col items-center justify-center gap-5 max-w-44 ">
                          <h1 className="font-bold text-xl  w-full text-center custom-xl:text-start ">
                            Mr. FirstName
                          </h1>

                          <div className="w-full  text-center custom-xl:text-start">
                            <p className="text-md">Availability:</p>
                            <span className="text-[#473171] text-md">
                              Mon,wed,thu from 4:00pm
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* subject and info box */}
                      <div className="custom-xl:max-w-52  w-full  h-fit flex flex-col items-center custom-xl:items-start">
                        <span className="text-md">Subjects:</span>
                        <p className="  text-[#473171] text-md text-center custom-xl:text-start">
                          <b>Mathematics (up to 13th grade)</b> English (up to
                          13th grade) Chemistry (up to 10th grade)
                        </p>
                      </div>

                      {/* study and experience box */}
                      <div className="flex flex-col gap-2  custom-xl:max-w-52 w-full items-center ">
                        <div className="flex flex-col items-center custom-xl:items-start">
                          <span className="text-md text-white">Study</span>
                          <p className="text-md text-[#473171]">
                            Primary School Teacher Training{" "}
                          </p>
                        </div>

                        <div className="flex flex-col items-center custom-xl:items-start">
                          <span className="text-md text-white">
                            Teaching Experience
                          </span>
                          <p className="text-md text-[#473171]">
                            3 years and 7 students currently
                          </p>
                        </div>
                      </div>

                      {/* accept deny box */}

                      <div className="flex flex-col items-center custom-xl:items-start  w-full custom-xl:w-fit custom-xl:py-2">
                        <div className=" h-full flex flex-col gap-6 w-fit custom-lg:w-fit items-center">
                          <div className="btns flex gap-6 items-center">
                            <button
                            onClick={() => setActiveFindEtutor('Find eTutor')}
                            className="py-1.5 font-normal px-5 text-md rounded-full bg-[#8358F7]">
                              Send request
                            </button>
                          </div>
                          <div className=" flex  gap-6 h-fit w-full justify-between items-start ">
                            <Image
                              onClick={() => setActiveMYEtutor('My eTutor')}
                              src={message}
                              alt=""
                              className="w-8  hover:cursor-pointer"
                            />
                            <Image
                              onClick={() => setActiveMYEtutor('My eTutor')}
                              src={folder}
                              alt=""
                              className="w-8  hover:cursor-pointer"
                            />
                            <Image
                              onClick={() => setActiveMYEtutor('My eTutor')}
                              src={profile}
                              alt=""
                              className="w-6  hover:cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SessionDashboard;
