import React from "react";
import tier from "../../../../public/tier.svg";
import message from "../../../../public/messageicon.svg";
import folder from "../../../../public/foldericon.svg";
import profile from "../../../../public/profileicon.svg";
import sample from "../../../../public/assets/heroimg.png";
import Image from "next/image";

function MyEtutor() {
  return (
    <div className="bg-[#EDE8FA] w-full h-full rounded-3xl px-8 py-6">
      <h1 className="text-3xl font-bold  text-[#685AAD] px-6 mb-8">My eTutors</h1>


      <div className="flex flex-col gap-4 custom-lg:gap-9">
        <div className="flex justify-between flex-wrap  custom-xl:items-center  py-6 rounded-2xl bg-[#A296CC] pl-2 sm:px-8 pr-2  custom-xl:flex-row custom-xl:gap-0 gap-4">
          {/* name and tier box */}
          <div className="flex  justify-center flex-col custom-xl:w-fit w-full custom-xl:flex-row gap-3 h-fit items-center  ">
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
              <b>Mathematics (up to 13th grade)</b> English (up to 13th grade)
              Chemistry (up to 10th grade)
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
              <span className="text-md text-white">Teaching Experience</span>
              <p className="text-md text-[#473171]">
                3 years and 7 students currently
              </p>
            </div>
          </div>

          {/* accept deny box */}

          <div className="flex flex-col items-center custom-xl:items-start  w-full custom-xl:w-fit custom-xl:py-2">
            <div className=" h-full flex flex-col gap-6 w-fit custom-lg:w-fit">
              <div className=" flex  h-fit w-full justify-between items-start  gap-14">
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
                  src={message}
                  alt=""
                  className="w-8  hover:cursor-pointer"
                />
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
                  src={folder}
                  alt=""
                  className="w-8  hover:cursor-pointer"
                />
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
                  src={profile}
                  alt=""
                  className="w-6  hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-wrap  custom-xl:items-center  py-6 rounded-2xl bg-[#A296CC] pl-2 sm:px-8 pr-2  custom-xl:flex-row custom-xl:gap-0 gap-4">
          {/* name and tier box */}
          <div className="flex  justify-center flex-col custom-xl:w-fit w-full custom-xl:flex-row gap-3 h-fit items-center  ">
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
              <b>Mathematics (up to 13th grade)</b> English (up to 13th grade)
              Chemistry (up to 10th grade)
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
              <span className="text-md text-white">Teaching Experience</span>
              <p className="text-md text-[#473171]">
                3 years and 7 students currently
              </p>
            </div>
          </div>

          {/* accept deny box */}

          <div className="flex flex-col items-center custom-xl:items-start  w-full custom-xl:w-fit custom-xl:py-2">
            <div className=" h-full flex flex-col gap-6 w-fit custom-lg:w-fit">
              <div className=" flex  h-fit w-full justify-between items-start  gap-14">
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
                  src={message}
                  alt=""
                  className="w-8  hover:cursor-pointer"
                />
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
                  src={folder}
                  alt=""
                  className="w-8  hover:cursor-pointer"
                />
                <Image
                  // onClick={() => setActiveMYEtutor('My eTutor')}
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
  );
}

export default MyEtutor;
