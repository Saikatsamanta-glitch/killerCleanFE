import React from "react";
import { Card, Button } from "flowbite-react";
import { servicesInfo } from "../data";
import { Link } from "react-router-dom";
const ImageCard = () => {
  return (
    <div className="bg-[#f3fafc] w-full py-2 mb-28 lg:max-xxl:px-32 sm:max-xxl:">
      <h1 className=" text-center text-[#014584] font-semibold text-[34px] mb-3 sm:max-xxl:mt-0 sm:max-xxl:text-[50px]">Our Services</h1>
      <p className="text-center text-[17px]  mb-4 text-[#014584] mx-3 sm:max-xxl:text-[18px] ">See our cleaning services below or view our complete <span className="underline text-[#046bd2]">cleaning checklist.</span></p>
      <div className="flex flex-col items-center bg-white sm:h-[1100px] shadow-lg mx-[10px]">
        <div className="flex flex-wrap  justify-center">
        {servicesInfo.map((service) => (
          <Card key={service.id} className="max-w-[420px]">
            <img className="" src={service.img} alt="" />
            <h5 className="sm:max-xxl:text-2xl text-xl font-semibold  text-[#014584] text-center sm:max-xxl:text-current">
              {service.title}
            </h5>
            <p className="font-normal text-center text-[#014584]">
              {service.desc}
            </p>
            
          </Card>
          
        ))}
        </div>
        <Button className="book mt-4 mb-20 w-42" as={Link} to={'/book'}>Book Online</Button>
      </div>
    </div>
  );
};

export default ImageCard;
