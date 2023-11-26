import React from "react";
import { ourservices } from "../data";
export default function OurServices() {
  return (
    <div className="p-24 w-full">
      <div className="flex items-center w-full">
        <h1 className="text-[45px] text-[#014584] font-semibold w-[40%] mb-10 px-8">
          Our professional services
        </h1>
        <p className="w-[60%] text-[#014584] text-[17px] text-left leading-7 px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed
          ullamcorper morbi tincidunt ornare massa. Cursus risus at ultrices mi
          tempus imperdiet nulla. Vulputate odio ut enim blandit volutpat. Lacus
          luctus accumsan tortor posuere ac ut.
        </p>
      </div>
      <div className="flex my-12 justify-evenly">
        {ourservices.map((card) => (
          <div
            key={card.id}
            className="h-[400px] bg-white w-[380px] flex flex-col items-start p-8 shadow-xl"
          >
            <img src={card.icon} alt="" className="h-14 w-14 mb-4"/>
            <h5 className="text-2xl  tracking-tight font-medium text-[#014584] dark:text-white mb-4">
              {card.title}
            </h5>
            <p className="text-[17px] leading-7 text-[#014584] dark:text-gray-400">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
