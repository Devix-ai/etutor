import Image from "next/image";
import React, { useState } from "react";
import loading from "../../../../public/loading icon.svg";
const SessionCalendarComponent = () => {
  const [activeTab, setActiveTab] = useState("sessions");
  const [activeSessionTab, setActiveSessionTab] = useState("unconfirmed");

  const renderContent = () => {
    if (activeTab === "sessions") {
      return (
        <div className="bg-[#EDE8FA] min-h-screen w-full rounded-3xl pb-6  ">
          <div className="flex w-full rounded-t-3xl mb-5 transition-all justify-between ">
            <div className=" w-full flex">
              <button
                className={`w-full font-bold text-xs sm:text-xl px-4 uppercase py-2 rounded-tl-3xl transition-all ${
                  activeSessionTab === "unconfirmed"
                    ? "bg-[#EDE8FA] text-[#685AAD] transition-all"
                    : activeSessionTab === "confirmed"
                    ? "bg-[#9B85C8] text-white transition-all"
                    : "bg-[#6B5692] text-white transition-all"
                }`}
                onClick={() => setActiveSessionTab("unconfirmed")}
              >
                Unconfirmed
              </button>
              <button
                className={`w-full font-bold text-xs sm:text-xl px-4 uppercase py-2 transition-all ${
                  activeSessionTab === "confirmed"
                    ? "bg-[#EDE8FA] text-[#685AAD] transition-all"
                    : activeSessionTab === "unconfirmed transition-all"
                    ? "bg-[#9B85C8] text-white transition-all"
                    : "bg-[#9B85C8] text-white transition-all"
                }`}
                onClick={() => setActiveSessionTab("confirmed")}
              >
                Confirmed
              </button>
              <button
                className={`w-full font-bold text-xs sm:text-xl px-4 uppercase py-2  transition-all ${
                  activeSessionTab === "canceled"
                    ? "bg-[#EDE8FA] text-[#685AAD] transition-all"
                    : "bg-[#6B5692] text-white transition-all"
                }`}
                onClick={() => setActiveSessionTab("canceled")}
              >
                Canceled
              </button>
            </div>

            <div className=" w-[40%] bg-white rounded-bl-3xl"></div>
          </div>

          <div className="w-full  px-4">
            <div className="w-full min-h-screen bg-[#A296CC] rounded-3xl px-5 py-8">
              {activeSessionTab === "unconfirmed" && (
                <>
                  <div className="">
                    <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-7 custom-xl:px-4">
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
                      <div className="flex  justify-between custom-xl:items-center  py-1 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                        <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            English Level C1 #3
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            Tutor Name
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                            60min
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            17-june-12:00
                          </span>
                        </div>

                        <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                          <button className="bg-[#473171] px-6 py-[2px] rounded-md">
                            Edit&nbsp;Session
                          </button>
                          <button className="bg-transparent cursor-default px-6 py-[2px] rounded-md flex gap-3 items-center ">
                            <Image src={loading} alt="" className=" w-4 h-4" />
                            Pending
                          </button>
                        </div>
                      </div>
                      <div className="flex  justify-between custom-xl:items-center  py-1 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                        <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            English Level C1 #3
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            Tutor Name
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                            60min
                          </span>
                          <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                            17-june-12:00
                          </span>
                        </div>

                        <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                          <button className="bg-[#473171] px-6 py-[2px] rounded-md">
                            Edit&nbsp;Session
                          </button>
                          <button className="bg-transparent cursor-default px-6 py-[2px] rounded-md flex gap-3 items-center ">
                            <Image src={loading} alt="" className=" w-4 h-4" />
                            Pending
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeSessionTab === "confirmed" && (
                <>
                  <>
                    <div className="">
                      <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-7 custom-xl:px-4">
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
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              English Level C1 #3
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              Tutor Name
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                              60min
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              17-june-12:00
                            </span>
                          </div>

                          <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                            <button className="bg-[#473171] px-6 py-[2px] rounded-md">
                              Edit&nbsp;Session
                            </button>
                            <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                              Meeting&nbsp;Link
                            </button>
                          </div>
                        </div>
                        <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                          <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              English Level C1 #3
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              Tutor Name
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                              60min
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              17-june-12:00
                            </span>
                          </div>

                          <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                            <button className="bg-[#473171] px-6 py-[2px] rounded-md">
                              Edit&nbsp;Session
                            </button>
                            <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                              Meeting&nbsp;Link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
              {activeSessionTab === "canceled" && (
                <>
                  <>
                    <div className="">
                      <div className="w-full custom-xl:w-[65%] flex justify-between mb-1 sm:mb-7 custom-xl:px-4">
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
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              English Level C1 #3
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              Tutor Name
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                              60min
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              17-june-12:00
                            </span>
                          </div>

                          <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                            <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                              Edit&nbsp;Session
                            </button>
                          </div>
                        </div>
                        <div className="flex  justify-between custom-xl:items-center  py-2 rounded-lg bg-[#564589] pl-2 sm:pl-4 pr-2 flex-col custom-xl:flex-row">
                          <div className="w-full custom-xl:w-[65%] custom-xl:pr-6 flex justify-between ">
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              English Level C1 #3
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              Tutor Name
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg custom-xl:pr-4">
                              60min
                            </span>
                            <span className="text-xs max-w-13 sm:text-sm custom-xl:text-lg">
                              17-june-12:00
                            </span>
                          </div>

                          <div className="flex gap-2 items-center justify-center custom-xl:pl-6  flex-wrap sm:flex-nowrap   w-fit custom-lg:w-fit mt-4 custom-xl:mt-0 ">
                            <button className="bg-[#8653FF] px-6 py-[2px] rounded-md">
                              Edit&nbsp;Session
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      
      return (
        <div className="w-full min-h-screen border-2 border-red-400">
           

            
        </div>
      );
    }
  };

  return (
    <div className="w-full min-h-screen  relative ">
      <div className="flex space-x-2 mb-4  w-fit bg-[#9B85C8] p-3 rounded-full absolute -top-6 custom-xl:-top-20 custom-xl:left-32 transition-all">
        <button
          className={`px-8 py-1 sm:px-16 sm:py-3 transition-all rounded-full text-md font-bold uppercase bg-[#EDE8FA] text-[#6B5692] ${
            activeTab === "sessions"
              ? "bg-[#6c5794] text-white transition-all"
              : "bg-[#EDE8FA] text-[#6B5692] transition-all"
          }`}
          onClick={() => setActiveTab("sessions")}
        >
          Sessions
        </button>
        <button
          className={`px-8 py-1 sm:px-16 sm:py-3 rounded-full transition-all text-md font-bold uppercase bg-[#EDE8FA] text-[#6B5692] ${
            activeTab === "calendar"
              ? "bg-[#6c5794] text-white transition-all"
              : "bg-[#EDE8FA] text-[#6B5692] transition-all"
          }`}
          onClick={() => setActiveTab("calendar")}
        >
          Calendar
        </button>
      </div>
      <div className="h-[4rem] "> 
        
      </div>
      {renderContent()}
    </div>
  );
};

export default SessionCalendarComponent;
