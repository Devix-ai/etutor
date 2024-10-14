import React from "react";

const ContactForm = () => {
  return (
    <div className=" w-full  px-7">
      <h2 className="text-[#534988]  text-xl sm:text-2xl custom-2xl:text-5xl font-bold mb-11">
        Please provide your details and describe your issue
      </h2>
      <form className="">
        <div className="mb-8 sm:mb-16 grid grid-cols-1 gap-x-16 gap-y-10 max-w-[51rem]  custom-2xl:grid-cols-2">
          {/* First Name in the first column */}
          <input
            type="text"
            placeholder="First Name"
            className="px-5 sm:px-10 py-2 sm:py-3  rounded-full bg-[#DBCAFF] text-sm sm:text-lg text-[#8476C1] placeholder-[#8476c198]"
          />
          {/* Last Name in the second column */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-5 sm:px-10 py-2 sm:py-3  rounded-full bg-[#DBCAFF] text-sm sm:text-lg text-[#8476C1] placeholder-[#8476c198]"
          />
          {/* Email in the first column */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 sm:px-10 py-2 sm:py-3  rounded-full bg-[#DBCAFF] text-sm sm:text-lg text-[#8476C1] placeholder-[#8476c198]"
          />
          {/* Empty space to maintain 2-column layout */}
          <div className="hidden custom-2xl:block"></div>
          {/* Topic in the first column */}
          <input
            type="text"
            placeholder="Topic"
            className="w-full px-5 sm:px-10 py-2 sm:py-3  rounded-full bg-[#DBCAFF] text-sm sm:text-lg text-[#8476C1] placeholder-[#8476c198]"
          />
        </div>

        <div>
          <h3 className="text-[#534988]  text-xl sm:text-2xl custom-2xl:text-5xl font-bold mb-5 sm:mb-10">
            Additional Information
          </h3>
          <textarea
            placeholder="Type here"
            rows={6}
            className="w-full rounded-xl p-3 text-sm sm:p-5 font-medium border-2 border-[#BBBBBB] text-[#BBBBBB]"
          ></textarea>
        </div>
        <button
          type="submit"
          
          className="w-fit mt-7 sm:mt-14 float-right bg-[#8558F9] text-white py-2 sm:py-3 px-12 sm:px-24  text-sm custom-xl:text-2xl rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
