import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Tired() {
  return (
    <div className="bg-white sm:mt-24 px-2 py-4 sm:px-20 sm:pt-20 w-full ">
      <h1 className="text-center text-[#014584] text-[40px] sm:text-[45px] mb-3 font-semibold">
        Tired Of Cleaning By Yourself?
      </h1>
      <p className="text-center px-2 mb-5 text-[17px] leading-8 sm:text-lg sm:mx-56 text-[#014584]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit sed
        ullamcorper morbi tincidunt ornare massa. Cursus risus at ultrices mi
        tempus imperdiet nulla.
      </p>
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="sm:w-[50%] flex flex-col p-2 items-center sm:items-start sm:p-8">
          <h1 className="text-3xl sm:text-4xl text-[#014584] mb-4 font-semibold">
            Consistent Quality
          </h1>
          <p className="text-[17px] text-[#014584] text-center leading-8 sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt ornare massa. Cursus risus at
            ultrices mi tempus imperdiet nulla. Vulputate odio ut enim blandit
            volutpat. Lacus luctus accumsan tortor posuere ac ut.
          </p>
        </div>
        <div className="sm:w-[50%] flex justify-center sm:justify-end">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-10-1.png"
            alt="" className="w-[90%] p-2 sm:p-7"
          />
        </div>
      </div>
      <div className="flex w-full flex-row-reverse items-center relative">
        <div className="sm:w-[50%] flex flex-col items-start p-8">
          <h1 className="text-4xl text-[#014584] font-semibold mb-4">
            Experienced and Background Checked Cleaners
          </h1>
          <p className="text-[#014584] text-[17px] text-left leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt ornare massa. Cursus risus at
            ultrices mi tempus imperdiet nulla. Vulputate odio ut enim blandit
            volutpat. Lacus luctus accumsan tortor posuere ac ut.
          </p>
        </div>
        <div className="sm:w-[50%] flex justify-start">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-7-1.png"
            alt="" className="w-[90%] p-7"
          />
        </div>
        <img
          src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175153.298.png"
          alt=""
          className="absolute -left-[238px] top-20 h-52 -rotate-1 hidden sm:block"
        />
      </div>
      <div className=" flex items-center w-full">
        <div className="sm:w-[50%] flex flex-col items-start p-8">
          <h1 className="text-4xl text-[#014584] font-semibold mb-4">
            Online Booking & Payment and Responsive Customer Support
          </h1>
          <p className="text-[#014584] text-[17px] text-left mb-4 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt ornare massa. Cursus risus at
            ultrices mi tempus imperdiet nulla. Vulputate odio ut enim blandit
            volutpat. Lacus luctus accumsan tortor posuere ac ut.
          </p>
          <Button as={Link} to={"/book"} className='book'>
            Schedule A Cleaning
          </Button>
        </div>
        <div className="sm:w-[50%] flex justify-end">
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-740-%C3%97-800-px-11-1.png"
            alt="" className="w-[90%] p-7"
          />
        </div>
      </div>
    </div>
  );
}