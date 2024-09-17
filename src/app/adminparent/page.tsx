"use client";
import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  Settings,
  Menu,
  User,
  LogOut,
} from "lucide-react";

import Dashboard from "./components/Dashboard";
import logo from "../../../public/parentadminlogo.svg";
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

const SessionsDashboard = () => {
  
  const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [previousSidebarItem, setPreviousSidebarItem] = useState("");


  const sidebarItems = [
    { name: "Dashboard", icon: Home1 },
    { name: "My Sessions", icon: session },
    { name: "Calendar", icon: calender },
    { name: "My eTutor", icon: eicon },
    { name: "Find eTutor", icon: find },
    { name: "My Membership", icon: membership },
    { name: "Contact Support", icon: contact },
    { name: "Refer your Friends", icon: refer },
    { name: "Activity", icon: activity },
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
      case "Dashboard":
        return (
          <div>
            {/* <Dashboard /> */}
            
          </div>
        );
      case "My Sessions":
        return (
          <Session/>
        );
      case "Calendar":
        return <div>Calendar Content</div>;
      case "My eTutor":
        return <div>My eTutor Content</div>;
      case "Find eTutor":
        return <div>Find eTutor Content</div>;
      case "My Membership":
        return <div>My Membership Content</div>;
      case "Contact Support":
        return <div>Contact Support Content</div>;
      case "Refer your Friends":
        return <div>Refer your Friends Content</div>;
      case "Activity":
        return <div>Activity Content</div>;
      default:
        return <div>Select a tab from the sidebar</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } custom-lg:translate-x-0 fixed custom-lg:static inset-y-0 left-0 z-50 max-w-[40rem] min-h-screen custom-2xl:w-[21%] rounded-tr-3xl rounded-br-3xl bg-darkpurple text-white flex flex-col transition-transform duration-300 ease-in-out pl-4 pr-7 pt-8 pb-4`}
      >
        <div className="flex items-center mb-16 pb-2 pl-5">
          <Image src={logo} alt="" className="w-52" />
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
                    className={`flex items-center w-full px-6 py-3 rounded-[19px] transition-colors ${
                      activeSidebarItem === item.name
                        ? "bg-white text-customBlue"
                        : "hover:bg-darkpurple"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      className="w-5 h-5 mr-6"
                      alt=""
                      style={{
                        filter:
                          activeSidebarItem === item.name
                            ? "none"
                            : "invert(1) sepia(1) saturate(0) brightness(140%) opacity(.8)",
                      }}
                    />
                    <p
                      className={`text-[#cac7d8] text-xl ${
                        activeSidebarItem === item.name ? "text-[#8652ff]" : ""
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
                    className={`flex items-center w-full px-6 py-3 rounded-[19px] transition-colors ${
                      activeSidebarItem === item.name
                        ? "bg-white text-customBlue"
                        : "hover:bg-darkpurple"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      className="w-5 mr-6"
                      alt=""
                      style={{
                        filter:
                          activeSidebarItem === item.name
                            ? "none"
                            : "invert(1) sepia(1) saturate(0) brightness(140%) opacity(.8)",
                      }}
                    />
                    <p
                      className={`text-[#cac7d8] text-xl ${
                        activeSidebarItem === item.name ? "text-[#8652ff]" : ""
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
      <main className="flex-1 px-7 py-4 overflow-auto  bg-transparent">
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
                className="flex cursor-pointer"
              >
                <ChevronLeft
                  className="mr-2 cursor-pointer text-darkBlue"
                  size={24}
                />
                <h1 className="text-black">Back</h1>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4 relative">
            <Bell size={24} className="cursor-pointer text-darkBlue" />
            <div className="w-8 h-8 bg-customOrange rounded-full"></div>
            <button
              onClick={toggleProfile}
              className="flex items-center text-darkBlue"
            >
              <span>YOUSSEF</span>
              <ChevronDown size={24} className="cursor-pointer ml-1" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-darkBlue hover:bg-purple"
                >
                  <User className="inline-block mr-2" size={16} /> Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-darkBlue hover:bg-purple"
                >
                  <Settings className="inline-block mr-2" size={16} /> Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-darkBlue hover:bg-purple"
                >
                  <LogOut className="inline-block mr-2" size={16} /> Logout
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








// "use client";
// import React, { useState } from "react";
// import {
//   Bell,
//   ChevronDown,
//   ChevronLeft,
//   Settings,
//   Menu,
//   User,
//   LogOut,
// } from "lucide-react";

// import Dashboard from "./components/Dashboard";
// import logo from "../../../public/parentadminlogo.svg";
// import Image from "next/image";
// import Home1 from "../../../public/homeicon.svg";
// import session from "../../../public/sessionicon.svg";
// import calender from "../../../public/calander.svg";
// import eicon from "../../../public/eicon.svg";
// import find from "../../../public/findEtutor.svg";
// import membership from "../../../public/membership.svg";
// import contact from "../../../public/contactandsupporticon.svg";
// import refer from "../../../public/refericon.svg";
// import activity from "../../../public/activityicon.svg";
// import setting from "../../../public/settingicon.svg";
// import link from "../../../public/linkicons.svg";

// const SessionsDashboard = () => {
//   const [activeTab, setActiveTab] = useState("INDIVIDUAL SESSION");
//   const [activeSubTab, setActiveSubTab] = useState("Upcoming");
//   const [activeSidebarItem, setActiveSidebarItem] = useState("Dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [previousSidebarItem, setPreviousSidebarItem] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false); // New state for dark mode
//   const tabs = ["INDIVIDUAL SESSION", "GROUP SESSION", "TRIAL SESSION"];
//   const subTabs = ["Upcoming", "Completed"];

//   const sidebarItems = [
//     { name: "Dashboard", icon: Home1 },
//     { name: "My Sessions", icon: session },
//     { name: "Calendar", icon: calender },
//     { name: "My eTutor", icon: eicon },
//     { name: "Find eTutor", icon: find },
//     { name: "My Membership", icon: membership },
//     { name: "Contact Support", icon: contact },
//     { name: "Refer your Friends", icon: refer },
//     { name: "Activity", icon: activity },
//     { name: "Settings", icon: setting },
//     { name: "Useful links", icon: link },
//   ];

//   const sessions = [
//     {
//       subject: "English Level C1 #3",
//       tutor: "Same Jhonson",
//       duration: "60min",
//       date: "17 - June - 12:00 PM",
//     },
//     // ... (other sessions)
//   ];

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode); // Toggle dark mode
//   };

//   const renderContent = () => {
//     switch (activeSidebarItem) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "My Sessions":
//         return (
//           <>
//             <div className="bg-cardbg rounded-lg p-6 shadow-md">
//               {/* Tab rendering logic */}
//             </div>
//           </>
//         );
//       // ... (other cases)
//       default:
//         return <div>Select a tab from the sidebar</div>;
//     }
//   };

//   return (
//     <div className={`flex min-h-screen ${isDarkMode ? "bg-darkbg text-white" : "bg-cardbg text-black"}`}>
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } custom-lg:translate-x-0 fixed custom-lg:static inset-y-0 left-0 z-50 max-w-[40rem] min-h-screen custom-2xl:w-[21%] rounded-tr-3xl rounded-br-3xl ${
//           isDarkMode ? "bg-darkpurple" : "bg-white"
//         } text-white flex flex-col transition-transform duration-300 ease-in-out pl-4 pr-7 pt-8 pb-4`}
//       >
//         <div className="flex items-center mb-16 pb-2 pl-5">
//           <Image src={logo} alt="" className="w-52" />
//         </div>
//         <nav className="flex-grow flex flex-col">
//           <ul className="space-y-2 flex-grow">
//             {sidebarItems.map((item) => (
//               <li key={item.name}>
//                 <button
//                   onClick={() => {
//                     setPreviousSidebarItem(activeSidebarItem);
//                     setActiveSidebarItem(item.name);
//                     if (window.innerWidth < 1024) {
//                       setIsSidebarOpen(false);
//                     }
//                   }}
//                   className={`flex items-center w-full px-6 py-3 rounded-[19px] transition-colors ${
//                     activeSidebarItem === item.name
//                       ? "bg-white text-customBlue"
//                       : "hover:bg-darkpurple"
//                   }`}
//                 >
//                   <Image
//                     src={item.icon}
//                     className="w-5 h-5 mr-6"
//                     alt=""
//                     style={{
//                       filter:
//                         activeSidebarItem === item.name
//                           ? "none"
//                           : "invert(1) sepia(1) saturate(0) brightness(140%) opacity(.8)",
//                     }}
//                   />
//                   <p
//                     className={`text-[#cac7d8] text-xl ${
//                       activeSidebarItem === item.name ? "text-[#8652ff]" : ""
//                     }`}
//                   >
//                     {item.name}
//                   </p>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 px-7 py-4 overflow-auto">
//         <header className="flex justify-between items-center mb-8">
//           <div className="flex items-center">
//             <button
//               onClick={toggleSidebar}
//               className="custom-lg:hidden mr-4"
//             >
//               <Menu size={24} />
//             </button>
//             <button
//               onClick={toggleDarkMode} // Toggle dark mode on click
//               className="border-2 border-black px-4 py-2 rounded"
//             >
//               {isDarkMode ? "Light Mode" : "Dark Mode"}
//             </button>

//             {activeSidebarItem === "Dashboard" ? (
//               <></>
//             ) : (
//               <div
//                 onClick={() => {
//                   if (previousSidebarItem) {
//                     setActiveSidebarItem(previousSidebarItem); // Navigate back to previous item
//                   }
//                 }}
//                 className="flex"
//               >
//                 <ChevronLeft
//                   className="mr-2 cursor-pointer"
//                   size={24}
//                 />
//                 <h1>Back</h1>
//               </div>
//             )}
//           </div>
//           <div className="flex items-center space-x-4 relative">
//             <Bell size={24} />
//             <div className="w-8 h-8 bg-customOrange rounded-full"></div>
//             <button
//               onClick={toggleProfile}
//               className="flex items-center"
//             >
//               <span>YOUSSEF</span>
//               <ChevronDown size={24} className="cursor-pointer ml-1" />
//             </button>
//             {isProfileOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-purple"
//                 >
//                   <User className="inline-block mr-2" size={16} /> Profile
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-purple"
//                 >
//                   <Settings className="inline-block mr-2" size={16} /> Settings
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-purple"
//                 >
//                   <LogOut className="inline-block mr-2" size={16} /> Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </header>
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default SessionsDashboard;
