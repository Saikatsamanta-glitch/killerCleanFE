import React from "react";
import { Card, Button } from "flowbite-react";
import { servicesInfo } from "../data";
import { Link } from "react-router-dom";
const ImageCard = () => {
  return (
    <div className="bg-[#f3fafc] px-32">
      <h1 className="text-[50px] text-center text-[#014584] font-semibold ">Our Services</h1>
      <p className="text-center text-lg mb-4 text-[#014584]">See our cleaning services below or view our complete <span className="underline text-[#046bd2]">cleaning checklist.</span></p>
      <div className="flex flex-col items-center bg-white h-[1100px] shadow-lg ">
        <div className="flex flex-wrap justify-center">
        {servicesInfo.map((service) => (
          <Card key={service.id} className="max-w-[420px]">
            <img src={service.img} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {service.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {service.desc}
            </p>
            
          </Card>
          
        ))}
        </div>
        <Button className="w-36 book" as={Link} to={'/book'}>Book Online</Button>
      </div>
    </div>
  );
};

export default ImageCard;
