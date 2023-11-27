import React from "react";
import { Card, Button } from "flowbite-react";
import { servicesInfo } from "../data";
import { Link } from "react-router-dom";
const ImageCard = () => {
  return (
    <div className="bg-[#f3fafc]  sm:max-xxl:px-32">
      <h1 className=" text-center text-[#014584] font-semibold text-[34px] mt-[75px] mb-3 sm:max-xxl:mt-0 sm:max-xxl:text-[50px]">Our Services</h1>
      <p className="text-center text-[17px]  mb-4 text-[#014584] mx-3 sm:max-xxl:text-[18px] ">See our cleaning services below or view our complete <span className="underline text-[#046bd2]">cleaning checklist.</span></p>
      <div className="flex flex-col items-center bg-white h-[1100px] shadow-lg mx-[10px]">
        <div className="flex flex-wrap  justify-center">
        {servicesInfo.map((service) => (
          <Card key={service.id} className="max-w-[420px]">
            <img className="" src={service.img} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:max-xxl:text-current">
              {service.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {service.desc}
            </p>
            
          </Card>
          
        ))}
        </div>
        <Button className="w-36 " as={Link} to={'/book'}>Book Online</Button>
      </div>
    </div>
  );
};

export default ImageCard;
