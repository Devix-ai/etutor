"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
 
  Menu,
 
} from "lucide-react";

import Dashboard from "./components/Dashboard";
import logo from "../../../public/parentlogo.svg";
import Image from "next/image";
import Home1 from "../../../public/homeicon.svg";
import session from "../../../public/sessionicon.svg";
import calender from "../../../public/calander.svg";
import eicon from "../../../public/eicon.svg";
import find from "../../../public/findEtutor.svg";
import membership from "../../../public/membership.svg";
import contact from "../../../public/contactandsupporticon.svg";
import refer from "../../../public/refericon.svg";
import activity from "../../../public/activityicon.svg";
import setting from "../../../public/settingicon.svg";
import link from "../../../public/linkicons.svg";
import Session from "./components/Session";
import etokiicon from "../../../public/etokiIcon.svg";
import EPlusIcon from "../../../public/Plus circle.svg";
import redeemIcon from "../../../public/redeem.svg";
import bell from "../../../public/bellicon.svg";
import translate from "../../../public/translateicon.svg";
import dark from "../../../public/darkicon.svg";
import lightcalender from "../../../public/lightcalendar.svg";
import sessionicongray from "../../../public/compltedsessionsicon gray.svg";
import chat from "../../../public/chat.svg";
import bellgray from "../../../public/bellicongrat.svg";
import chaticon from "../../../public/chaticon.svg";
import refergray from "../../../public/grayrefer.svg";
import rightarrow from "../../../public/arrowwww.svg";
import Calender from "./components/Calender";
import MyEtutor from "./components/MyEtutor";
import FindEtutor from "./components/FindEtutor";
import MyMembership from "./components/MyMembership";
import ContactSupport from "./components/ContactSupport";
import ReferYourFriends from "./components/ReferYourFriends";
import Setting from "./components/Settings";
import UsefulLinks from "./components/UsefulLinks";
import { useRouter } from "next/navigation";

const SessionsDashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [previousSidebarItem, setPreviousSidebarItem] = useState("");
  const Router = useRouter()

  const targetRef = useRef<HTMLDivElement>(null); // Reference to your component

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is outside the component (targetRef), close the dropdown/modal/etc.
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const sidebarItems = [
    { name: "Dashboard", icon: Home1 },
    { name: "My Sessions", icon: session },
    { name: "Calendar", icon: calender },
    { name: "My eTutor", icon: eicon },
    { name: "Find eTutor", icon: find },
    { name: "My Membership", icon: membership },
    { name: "Contact Support", icon: contact },
    { name: "Refer your Friends", icon: refer },
    // { name: "Activity", icon: activity },
    { name: "Settings", icon: setting },
    { name: "Useful links", icon: link },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const renderContent = () => {
    switch (activeSidebarItem) {
      // ---------------------------DashBoard--------------------------------------------------------------
      case "Dashboard":
        return (
          <div className="  h-fit    ">
            {/* <Dashboard /> */}

            {/* top left box TOKIs */}
            <div className=" custom-xl:w-[80%] sm:max-w-[40rem]   flex  items-start flex-col custom-2xl:flex-row gap-6 absolute top-14 custom-lg:top-0 mt-4  ">
              <div className=" flex flex-col space-y-3 py-4 px-6  bg-purple-100  rounded-2xl w-[100%] sm:w-[24rem] bg-[#EDE8FA]">
                <div className=" flex justify-between items-center bg-purple-300 rounded-full px-4 pl-6 py-[10px] bg-[#A296CC]">
                  <div className="text-3xl font-bold">150</div>
                  <div className=" flex items-center justify-center">
                    <Image src={etokiicon} alt="" className="w-9 h-9" />
                  </div>
                </div>

                <div className="flex  space-x-6 mt-4 hover:cursor-pointer px-2 pt-2">
                  <button className="flex-1 bg-[#685AAD] text-white py-[2px] px-4  rounded-md text-xs flex items-center justify-center gap-1 hover:cursor-pointer">
                    <Image
                      src={EPlusIcon}
                      alt=""
                      className="w-6 h-6 hover:cursor-pointer"
                    />{" "}
                    etokis
                  </button>
                  <button className="flex-1 bg-[#8653FF] text-white py-[2px] px-4 rounded-md flex items-center justify-center gap-1 hover:cursor-pointer">
                    Redeem
                    <Image src={redeemIcon} alt="" className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="bg-[#EDE8FA] rounded-lg font-bold px-8 py-3 text-center text-base text-[#685AAD] ">
                SESSIONS&nbsp;LEFT:2
              </div>
            </div>

            <div className="block mb-60  sm:mb-64 custom-lg:mb-36 ">a</div>

            <div className="">
              <div className="grid gap-5 grid-cols-1 custom-2xl:grid-cols-8 custom-2xl:grid-rows-5 h-fit ">
                {/* ------------calendar----------- */}
                <div className=" p-4 bg-[#EDE8FA] text-[#685AAD] rounded-2xl  col-span-3 row-span-3">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-2xl">July 2024</h1>
                    <Image src={lightcalender} alt="" className="w-6 h-6" />
                  </div>
                </div>

                {/* -------------schedule------- */}
                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4 col-span-3 row-span-3">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl">THIS WEEK’S SCHEDULE</h1>
                    <Image src={lightcalender} alt="" className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    <div className="bg-[#A296CC] rounded-lg px-6 py-2 flex justify-between ">
                      <div className="pl-2">
                        <h1 className="font-semibold text-white text-lg">
                          Chemistry
                        </h1>
                        <p className=" text-white text-lg ">Mr.john</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button className="text-white bg-[#685AAD] rounded-md px-2 py-1 text-xs">
                          Edit Session
                        </button>
                        <button className="text-white bg-[#8653FF] rounded-md px-2 py-1 text-xs">
                          Meeting Link
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#A296CC] rounded-lg px-6 py-2 flex justify-between ">
                      <div className="pl-2">
                        <h1 className="font-semibold text-white text-lg">
                          Chemistry
                        </h1>
                        <p className=" text-white text-lg ">Mr.john</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button className="text-white bg-[#685AAD] rounded-md px-2 py-1 text-xs">
                          Edit Session
                        </button>
                        <button className="text-white bg-[#8653FF] rounded-md px-2 py-1 text-xs">
                          Meeting Link
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#A296CC] rounded-lg px-6 py-2 flex justify-between ">
                      <div className="pl-2">
                        <h1 className="font-semibold text-white text-lg">
                          Chemistry
                        </h1>
                        <p className=" text-white text-lg ">Mr.john</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button className="text-white bg-[#685AAD] rounded-md px-2 py-1 text-xs">
                          Edit Session
                        </button>
                        <button className="text-white bg-[#8653FF] rounded-md px-2 py-1 text-xs">
                          Meeting Link
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#A296CC] rounded-lg px-6 py-2 flex justify-between ">
                      <div className="pl-2">
                        <h1 className="font-semibold text-white text-lg">
                          Chemistry
                        </h1>
                        <p className=" text-white text-lg ">Mr.john</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button className="text-white bg-[#685AAD] rounded-md px-2 py-1 text-xs">
                          Edit Session
                        </button>
                        <button className="text-white bg-[#8653FF] rounded-md px-2 py-1 text-xs">
                          Meeting Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------completed session------------ */}

                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4 col-span-3 custom-2xl:col-span-2 row-span-2 w-full">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl uppercase">
                      completed sessions
                    </h1>
                    <Image src={sessionicongray} alt="" className="w-5 h-5" />
                  </div>

                  <div className="flex justify-between items-center border-b-2 border-[#8b55ff39] py-2">
                    <div className="flex flex-col ">
                      <h3 className="text-[#8653FF] text-sm">SAT B2</h3>
                      <div className="flex justify-between gap-4 ">
                        <span className="text-sm">DATE</span>
                        <span className="text-sm">June 20, 2024</span>
                      </div>
                    </div>

                    <div>
                      <button className="bg-[#8653FF] text-white px-5 py-1 rounded-md text-sm">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-[#8b55ff39] py-2">
                    <div className="flex flex-col ">
                      <h3 className="text-[#8653FF] text-sm">SAT B2</h3>
                      <div className="flex justify-between gap-4 ">
                        <span className="text-sm">DATE</span>
                        <span className="text-sm">June 20, 2024</span>
                      </div>
                    </div>

                    <div>
                      <button className="bg-[#8653FF] text-white px-5 py-1 rounded-md text-sm">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b-2 border-[#8b55ff39] py-2">
                    <div className="flex flex-col ">
                      <h3 className="text-[#8653FF] text-sm">SAT B2</h3>
                      <div className="flex justify-between gap-4 ">
                        <span className="text-sm">DATE</span>
                        <span className="text-sm">June 20, 2024</span>
                      </div>
                    </div>

                    <div>
                      <button className="bg-[#8653FF] text-white px-5 py-1 rounded-md text-sm">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center  py-2">
                    <div className="flex flex-col ">
                      <h3 className="text-[#8653FF] text-sm">SAT B2</h3>
                      <div className="flex justify-between gap-4 ">
                        <span className="text-sm">DATE</span>
                        <span className="text-sm">June 20, 2024</span>
                      </div>
                    </div>

                    <div>
                      <button className="bg-[#8653FF] text-white px-5 py-1 rounded-md text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>

                {/* ------chat--------- */}
                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4 col-span-3 custom-2xl:col-span-2 row-span-3 text-xl">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl">CHAT</h1>
                    <Image src={chat} alt="" className="w-4 h-4" />
                  </div>

                  <div className="border-b-2 border-[#8b55ff39] py-2">
                    <h1 className="text-sm text-[#685AAD]">MR.Name</h1>
                    <p className="text-xs text-[#685AAD]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                      elittetur adipisicing elittetur{" "}
                    </p>
                  </div>
                  <div className="border-b-2 border-[#8b55ff39] py-2">
                    <h1 className="text-sm text-[#685AAD]">MR.Name</h1>
                    <p className="text-xs text-[#685AAD]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                      elittetur adipisicing elittetur{" "}
                    </p>
                  </div>
                  <div className="border-b-2 border-[#8b55ff39] py-2">
                    <h1 className="text-sm text-[#685AAD]">MR.Name</h1>
                    <p className="text-xs text-[#685AAD]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                      elittetur adipisicing elittetur{" "}
                    </p>
                  </div>
                </div>

                {/* --------24hr support----------- */}
                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4 col-span-3  text-xl flex flex-col justify-between  ">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl uppercase">24H SUPPORT</h1>
                    <Image src={chaticon} alt="" className="w-5 h-5" />
                  </div>

                  <div className=" ">
                    <div className="flex flex-col">
                      <span className="text-[#685AAD] text-sm">Need help?</span>
                      <span className="text-[#685AAD] text-sm">
                        Contact us.
                      </span>
                    </div>
                  </div>
                </div>
                {/* -----Notifications----------- */}

                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4  text-xl col-span-3 row-span-2">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl uppercase">
                      NOTIFICATIONS
                    </h1>
                    <Image src={bellgray} alt="" className="w-4 h-4" />
                  </div>

                  <div className=" mt-2 ">
                    <div className="border-b-2 border-[#8b55ff39] py-1">
                      <h1 className="text-md text-[#685AAD]">
                        Support Response
                      </h1>
                      <p className="text-sm text-[#685aad94]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elittetur adipisicing elittetur{" "}
                      </p>
                    </div>
                    <div className="border-b-2 border-[#8b55ff39] py-1">
                      <h1 className="text-md text-[#685AAD]">MR.Name</h1>
                      <p className="text-sm text-[#685aad94]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elittetur adipisicing elittetur{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---------refer friends--------- */}
                <div className=" bg-[#EDE8FA] text-[#685AAD] rounded-2xl p-4  text-xl col-span-3 ">
                  <div className="flex  justify-between items-center">
                    <h1 className="font-bold text-xl uppercase">
                      Prefer your friends
                    </h1>
                    <Image src={refergray} alt="" className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-[#8653FF] font-bold">
                      Refer your friends, get eTokis to spend on courses and
                      more
                    </p>
                    <p className="text-sm text-[#685AAD] font-normal">
                      Get 10 eTokis for each student and 5 eTokis for each tutor
                      you successfully refer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      // ---------------------------My session--------------------------------------------------------------
      case "My Sessions":
        return (
          <Session
            setActiveFindEtutor={setActiveSidebarItem}
            setActiveMYEtutor={setActiveSidebarItem}
          />
        );

      case "Calendar":
        return (
          <>
            <Calender />
          </>
        );
      case "My eTutor":
        return <MyEtutor />;
      case "Find eTutor":
        return (
          <div>
            <FindEtutor />
          </div>
        );
      case "My Membership":
        return <MyMembership />;
      case "Contact Support":
        return <ContactSupport />;
      case "Refer your Friends":
        return <ReferYourFriends />;
      case "Activity":
        return <div>Activity Content</div>;
      case "Settings":
        return <Setting />;
      case "Useful links":
        return <UsefulLinks />;
      default:
        return <div>Select a tab from the sidebar</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-white relative z-0">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } custom-lg:translate-x-0 fixed custom-lg:static inset-y-0 left-0 z-50 max-w-[20rem] sm:max-w-[25rem] w-full  min-h-screen  rounded-tr-3xl rounded-br-3xl bg-darkpurple text-white flex flex-col transition-transform duration-300 ease-in-out pl-5 pr-9 pt-8 custom-2xl:pt-11 pb-4`}
      >
        <div className="flex items-center mb-[23.5%] pb-2 pl-7">
          <Image src={logo} alt="" className= "w-52 sm:w-[17rem]" />
        </div>
        <nav className="flex-grow flex flex-col">
          <ul className="space-y-2 flex-grow">
            {sidebarItems
              .filter(
                (item) => !["Settings", "Useful links"].includes(item.name)
              )
              .map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setPreviousSidebarItem(activeSidebarItem);
                      setActiveSidebarItem(item.name);
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`flex   hover:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.3)] hover:transition-all duration-1000  items-center w-full px-6 custom-2xl:px-9 py-3 sm:py-[18px] rounded-[22px]  transition-all  ${
                      activeSidebarItem === item.name
                        ? "bg-white  transition-all"
                        : "hover:bg-darkpurple transition-all"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      className="w-5 sm:w-6 h-5 sm:h-6 mr-7"
                      alt=""
                      style={{
                        filter:
                          activeSidebarItem === item.name
                            ? "none"
                            : "invert(1) sepia(1) saturate(0) brightness(140%) opacity(.8)",
                      }}
                    />
                    <p
                      className={`text-[#cac7d8] text-xl font-medium ${
                        activeSidebarItem === item.name
                          ? "text-customBlue"
                          : "text-[#cac7d8]"
                      }`}
                    >
                      {item.name}
                    </p>
                  </button>
                </li>
              ))}
          </ul>
          <ul className="space-y-2 mt-6 ">
            {sidebarItems
              .filter((item) =>
                ["Settings", "Useful links"].includes(item.name)
              )
              .map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setActiveSidebarItem(item.name);
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`flex   hover:shadow-[0px_0px_5px_1px_rgba(255,255,255,0.3)] hover:transition-all duration-1000  items-center w-full px-6 custom-2xl:px-9 py-3 sm:py-[18px] rounded-[22px]  transition-all  ${
                      activeSidebarItem === item.name
                        ? "bg-white text-customBlue"
                        : "hover:bg-darkpurple"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      className="w-5 sm:w-6 h-5 sm:h-6 mr-7"
                      alt=""
                      style={{
                        filter:
                          activeSidebarItem === item.name
                            ? "none"
                            : "invert(1) sepia(1) saturate(0) brightness(140%) opacity(.8)",
                      }}
                    />
                    <p
                      className={`text-[#cac7d8] text-xl font-medium ${
                        activeSidebarItem === item.name ? "text-customBlue" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-9 py-4 overflow-auto  bg-transparent">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="custom-lg:hidden mr-4 text-darkBlue"
            >
              <Menu size={24} />
            </button>

            {activeSidebarItem === "Dashboard" ? (
              <></>
            ) : (
              <div
                onClick={() => {
                  if (previousSidebarItem) {
                    setActiveSidebarItem(previousSidebarItem); // Navigate back to previous item
                  }
                }}
                className="flex cursor-pointer  items-center"
              >
                <ChevronLeft
                  className="mr-2 cursor-pointer text-[#685AAD]"
                  size={24}
                />

                <h1 className="text-[#685AAD] text-xs sm:text-sm custom-lg:text-xl hidden sm:block">
                  Back
                </h1>
              </div>
            )}
            {activeSidebarItem === "My Sessions" && (
              <h1 className="text-[#685AAD]  text-sm sm:text-md custom-lg:text-5xl  font-extrabold ml-0 sm:ml-6 absolute top-16 left-16 sm:static">
                My&nbsp;Sessions
              </h1>
            )}
          </div>

          <div
            ref={targetRef}
            className="flex items-center space-x-4 relative -right-4 select-none "
          >
            {/* <Bell size={24} className="cursor-pointer text-darkBlue" /> */}
            <div className="flex gap-6 custom-2xl:gap-10 mr-2">
              <Image src={dark} alt="" className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6" />
              <Image src={translate} alt="" className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6" />
              <Image src={bell} alt="" className="w-5 h-5 custom-2xl:w-6 custom-2xl:h-6" />
            </div>

            {/* -------profile complete------- */}
            {activeSidebarItem === "Dashboard" && (
              <div className=" absolute mb-28 custom-xl:mb-8 hidden sm:block right-4 top-48 custom-lg:top-[8.9rem] custom-xl:top-[6.5rem] max-w-[20.5rem]  custom-xl:max-w-[26.5rem]  ">
                <div className="flex  justify-between items-center">
                  <div>
                    <h1 className="font-bold text-xl custom-xl:text-3xl   text-[#685AAD] pr-2 custom-xl:pr-24">
                      Complete&nbsp;your&nbsp;profile
                    </h1>
                  </div>
                  <Image src={rightarrow} alt="" className="w-3 h-3" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-[#685AAD] pb-2">
                    Profile Status
                  </span>
                  <div className="w-full bg-[#DBD8EF] h-2 rounded-full">
                    <div className="w-[50%] h-full bg-[#00DAE5] rounded-full"></div>
                  </div>
                </div>
              </div>
            )}

            <div
            onClick={toggleProfile}
              className={`flex bg-[#EDE8FA] hover:cursor-pointer  px-2 py-1 justify-between w-[9rem] custom-2xl:w-[12.5rem]   h-10 custom-2xl:h-11 items-center rounded-md ${
                isProfileOpen ? "border border-[#685aad7a]" : "border-0"
              }`}
            >
                <div className="w-6 custom-2xl:w-7 h-6 custom-2xl:h-7 bg-customOrange rounded-full"></div>
              {/* <div className="flex items-center  w-full  gap-2 custom-2xl:gap-4">

              </div> */}
                <span className="text-sm custom-2xl:text-base font-bold text-[#685AAD]">
                  YOUSSEF
                </span>

              {isProfileOpen ? (
                <ChevronUp
                  size={18}
                  className="cursor-pointer  text-[#685AAD] "
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="cursor-pointer  text-[#685AAD] "
                />
              )}
            </div>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 hover:cursor-pointer  bg-[#EDE8FA] font-bold rounded-md shadow-lg py-1 z-10 top-full w-[9rem] custom-2xl:w-[12.5rem] px-4 border border-[#685aad7a]">
                <a
                  href="#"
                  className="block px-2 py-2 custom-2xl:py-3 text-sm text-[#685AAD]  border-b border-[#685aad7a] "
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-2  py-2 custom-2xl:py-3 text-sm text-[#685AAD]  border-b border-[#685aad7a]"
                >
                  Ryan
                </a>
                <a
                  onClick={()=> {setActiveSidebarItem('Settings'); setIsProfileOpen(false)}}
                  className="block px-2  py-2 custom-2xl:py-3 text-sm text-[#685AAD]  border-b border-[#685aad7a] hover:cursor-pointer"
                >
                  Settings
                </a>
                <a 
                onClick={()=>{Router.push('/')}}
                 className="block px-2 py-2 custom-2xl:py-3 text-sm text-[#685AAD] ">
                  Logout
                </a>
              </div>
            )}
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default SessionsDashboard;
