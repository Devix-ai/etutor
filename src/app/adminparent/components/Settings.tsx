import React, { useState } from "react";
import Image from "next/image";
import plusicon from "../../../../public/plus circle icon purple.svg";
import editicon from "../../../../public/edit icon.svg";
const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "account" >("personal");
  const [subactive, setsubactive] = useState("")

  return (
    <div className="min-h-screen rounded-3xl relative  bg-[#EDE8FA]">
      <div className="px-5 custom-2xl:px-10 py-5 custom-2xl:py-10 flex gap-2 sm:gap-8 custom-2xl:gap-16 ">
        {/* left side bar */}
        <div className="bg-[#A296CC] font-roboto max-w-[20rem] custom-2xl:max-w-[26.4rem] w-full  rounded-3xl  min-h-screen  px-5 custom-2xl:px-10 ">
          <div className="m-auto w-full  flex flex-col items-center  mt-20">
            <Image
              src="/assets/heroimg.png"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full w-[5rem] h-[5rem] custom-2xl:w-[11.4rem] custom-2xl:h-[11.4rem] border-2 border-red-500"
            />

            <p className="text-sm sm:text-lg custom-2xl:text-xl font-roboto text-[#534988] font-bold mt-2 cursor-pointer">
              Upload photo
            </p>
          </div>

          <div className="space-y-2 mt-[137px] ">
            <button
              className={`w-full py-4  px-9 rounded-3xl text-sm custom-xl:text-lg custom-2xl:text-2xl font-bold transition-all flex  ${
                activeTab === "personal"
                  ? "bg-white text-[#685AAD]"
                  : " text-[#685AAD]"
              }`}
              onClick={() => {setActiveTab("personal"); setsubactive("")}}
            >
              Personal information
            </button>
            <button
              className={`w-full py-4  px-9 rounded-3xl text-sm custom-xl:text-lg custom-2xl:text-2xl font-bold transition-all flex ${
                activeTab === "account"
                  ? "bg-white text-[#685AAD]"
                  : "text-[#685AAD]"
              }`}
              onClick={() => setActiveTab("account")}
            >
              Account settings
            </button>
            <button className="w-full py-4  px-9 rounded-3xl text-sm custom-xl:text-lg custom-2xl:text-2xl font-bold transition-all flex  items-center  gap-1 custom-2xl:gap-3 text-[#685AAD]">
              <Image src={plusicon} alt="" className="w-4 custom-2xl:w-8" />
              add&nbsp;a child
            </button>
          </div>
        </div>

        {/* right side content */}
        <div className="w-full font-roboto ">
          {activeTab === "personal" && (
            <div className="space-y-4 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-roboto text-[#685AAD] font-bold ml-4 sm:ml-8 md:ml-14">
                Personal information
              </h2>
              <div className="grid grid-cols-1 custom-2xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12 pt-8 sm:pt-12 md:pt-20 ">
                <div className="w-full">
                  <label className="block text-lg sm:text-xl font-semibold text-[#9085C4] pl-4 sm:pl-8 md:pl-12">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-lg sm:text-xl font-semibold text-[#9085C4] pl-4 sm:pl-8 md:pl-12">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-lg sm:text-xl font-semibold text-[#9085C4] pl-4 sm:pl-8 md:pl-12">
                    Country
                  </label>
                  <input
                    type="text"
                    className="mt-2 sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-lg sm:text-xl font-semibold text-[#9085C4] pl-4 sm:pl-8 md:pl-12">
                    State / City
                  </label>
                  <input
                    type="text"
                    className="mt-2 sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                </div>
                <div className="w-full custom-2xl:col-span-2 ">
                  <label className="block text-lg sm:text-xl font-semibold text-[#9085C4] pl-4 sm:pl-8 md:pl-12">
                    Street Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full custom-2xl:w-[47%] rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                </div>
              </div>
            </div>
          ) }
          {activeTab === "account" && subactive === "" && (
            <div className="space-y-4 mt-10">

              <div className="flex flex-col gap-8">
              
              <div className=" custom-2xl:max-w-[55%] w-full">

                <div className="flex justify-between items-center px-12">
                <label className="text-lg sm:text-xl font-semibold   text-[#685AAD] ">
                  Phone Number
                </label>
                <Image src={editicon} alt="" className="w-12" />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    className="mt-2 sm:mt-2 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                 
                </div>
              </div>
              <div className="custom-2xl:max-w-[55%] w-full">

                <div className="flex justify-between items-center px-12">
                <label className="text-lg sm:text-xl font-semibold   text-[#685AAD]  ">
                  Email Address
                </label>
                <Image src={editicon} alt="" className="w-12 cursor-pointer" onClick={() => setsubactive("email")} />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    className="mt-2 sm:mt-2 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  />
                 
                </div>
              </div>

              <div className="w-[90%] border border-[#685aad89] mt-8"></div>
              </div>



              <div className="grid grid-cols-1 custom-2xl:grid-cols-2 gap-4">
              <div>
                <label className="text-lg sm:text-xl font-semibold   text-[#685AAD] pl-12">
                  Old password
                </label>
                <input
                  type="password"
                  className="mt-4  placeholder-[#685aad5b]  sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  placeholder="old password"
                />
              </div>
              <div></div>

                <div>
                  <label className="text-lg sm:text-xl font-semibold   text-[#685AAD]  pl-12">
                    New password
                  </label>
                  <input
                    type="password"
                    className="mt-4 placeholder-[#685aad5b]  sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                    placeholder="new password"
                  />
                </div>

                <div>
                  <label className="text-lg sm:text-xl font-semibold   text-[#685AAD] pl-12">
                    Repeat new password
                  </label>
                  <input
                    type="password"
                    className="mt-4 placeholder-[#685aad5b]   sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                    placeholder="repeat password"
                  />
                </div>
                
              </div>
              <div className="flex justify-end space-x-3 pt-7 ">
                <button className=" bg-[#685AAD] rounded-full text-sm sm:text-lg custom-2xl:text-2xl font-medium  px-3 sm:px-5 custom-2xl:px-10  py-1 sm:py-2 custom-2xl:py-3">
                  cancel
                </button>
                <button className="bg-[#8653FF]  rounded-full text-sm sm:text-lg custom-2xl:text-2xl font-medium  px-3 sm:px-5 custom-2xl:px-10  py-1 sm:py-2 custom-2xl:py-3">
                  save changes
                </button>
              </div>


            </div>
          )}
          {subactive === "email" && (
              <div className="mt-40 flex flex-col gap-12 items-center ">
                <div className=" w-full custom-2xl:w-[90%]">
                <label className="text-lg sm:text-2xl font-semibold   text-[#685AAD] pl-12">
                New Email Address                </label>
                <input
                  type="email"
                  className="mt-4  placeholder-[#685aad5b]  sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  placeholder="enter new email address"
                />
              </div>
              <div className="w-full custom-2xl:w-[90%]">
                <label className="text-lg sm:text-2xl font-semibold   text-[#685AAD] pl-12">
                Current Password                </label>
                <input
                  type="password"
                  className="mt-4  placeholder-[#685aad5b]  sm:mt-4 pl-4 sm:pl-8 md:pl-12 pr-4 py-2 sm:py-3 custom-2xl:py-5 block w-full rounded-full text-[#685AAD] bg-[#DBCAFF] text-lg sm:text-xl md:text-2xl"
                  placeholder="enter your password"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-7 ">
                <button onClick={()=> setsubactive("")} className=" bg-[#685AAD] rounded-full text-sm sm:text-lg custom-2xl:text-3xl font-medium  px-3 sm:px-5 custom-2xl:px-10  py-1 sm:py-2 custom-2xl:py-3">
                  cancel
                </button>
                <button className="bg-[#8653FF]  rounded-full text-sm sm:text-lg custom-2xl:text-3xl font-medium  px-3 sm:px-5 custom-2xl:px-10  py-1 sm:py-2 custom-2xl:py-3">
                  save changes
                </button>
              </div>
              </div>
          )}
         


        </div>
      </div>
    </div>
  );
};

export default UserProfile;
