import React from "react";
import { ourservices } from "../data";
export default function OurServices() {
  return (
    <div className="lg:p-24 px-3 py-6 w-full">
      <div className="sm:flex sm:items-center md:mb-16">
        <h1 className="text-[36px] xxl:text-7xl max-sm:text-center md:text-[40px] lg:text-[45px] text-[#014584] font-semibold sm:w-[40%] xxl:w-[30%] my-4 sm:mb-10 sm:px-8">
          Our professional services
        </h1>
        <p className="sm:w-[60%] text-[#014584] xxl:w-[70%] text-[17px] xxl:text-3xl max-sm:text-center sm:text-left leading-7 sm:px-10">
        We’re proud to provide safe and reliable professional-grade cleaning supplies and products. Each of our teams of Killer Clean has been professionally trained to deliver high quality house cleaning services. We offer multiple cleaning packages that are designed to meet the demands of any home owner. Whether you need your house cleaning services on a regular basis or just one time, we have a cleaning option that's right for you. A comprehensive description of each cleaning package is below.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:my-12 my-3 items-center w-full justify-evenly">
        {ourservices.map((card) => (
          <div
            key={card.id}
            className="md:h-[500px] min-h-[400px] bg-white max-sm:max-w-[400px] md:w-[230px] lg:w-[250px] xl:w-[370px] xxl:w-[400px]  mb-6 flex flex-col items-center justify-evenly sm:items-start p-4  lg:p-8 shadow-xl"
          >
            <img src={card.icon} alt="" className="h-14 w-14 sm:mb-4 xxl:h-20 xxl:w-20"/>
            <h5 className="text-2xl max-sm:text-center tracking-tight font-medium text-[#014584] dark:text-white sm:mb-4 xxl:text-4xl">
              {card.title}
            </h5>
            <p className="text-[17px] xxl:text-xl leading-7 max-sm:text-center text-[#014584] dark:text-gray-400">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
