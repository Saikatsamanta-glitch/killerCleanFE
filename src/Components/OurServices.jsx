import React from "react";
import { ourservices } from "../data";
export default function OurServices() {
  return (
    <div className="sm:p-24 px-3 py-6 w-full">
      <div className="sm:flex sm:items-center">
        <h1 className="text-[36px] text-center sm:text-[45px] text-[#014584] font-semibold sm:w-[40%] my-4 sm:mb-10 sm:px-8">
          Our professional services
        </h1>
        <p className="sm:w-[60%] text-[#014584] text-[17px] text-center sm:text-left leading-7 sm:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed
          ullamcorper morbi tincidunt ornare massa. Cursus risus at ultrices mi
          tempus imperdiet nulla. Vulputate odio ut enim blandit volutpat. Lacus
          luctus accumsan tortor posuere ac ut.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:my-12 my-3 items-center justify-evenly">
        {ourservices.map((card) => (
          <div
            key={card.id}
            className="sm:h-[400px] min-h-[400px] bg-white max-w-[400px] mb-6 flex flex-col items-center justify-evenly sm:items-start p-4  sm:p-8 shadow-xl"
          >
            <img src={card.icon} alt="" className="h-14 w-14 sm:mb-4"/>
            <h5 className="text-2xl text-center tracking-tight font-medium text-[#014584] dark:text-white sm:mb-4">
              {card.title}
            </h5>
            <p className="text-[17px] leading-7 text-center text-[#014584] dark:text-gray-400">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
