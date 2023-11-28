import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function Welcome() {
  return (
    <div className="md:mb-5 max-xxl:w-full">
      <div className="sm:flex max-sm:p-2 sm:max-md:p-2 lg:p-[50px] home w-full">
        <div className=" max-sm:py-4 max-sm:px-4 flex flex-col items-center justify-center 
        sm:p-2 sm:max-md:items-start sm:max-xxl:w-[50%] sm:justify-evenly">
          <h1 className="text-left max-sm:text-center text-[36px] text-[#014584] font-semibold
          sm:max-md:text-5xl md:max-lg:text-6xl
          max-sm:mb-2 sm:max-md:mb-6">
            Welcome to Killer Clean
          </h1>
          <p className="text-[#014584] max-sm:mb-10 max-sm:text-center
          sm:max-md:text-base md:max-lg:text-lg
          sm:max-md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt ornare massa.
          </p>
          <Button as={Link} to={"/book"} className='book'>
            Book Now <BsArrowRight className="ml-3 " strokeWidth={1} />
          </Button>
        </div>
        <div className="sm:w-[50%] px-8 py-3 sm:max-md:p-8 relative z-50">
          <div className="-rotate-12 absolute  -top-6 -left-6 ">
            <img
              src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175312.201.png"
              alt=""
              className=" h-24 rotate-180 hidden lg:block"
            />
          </div>
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/pexels-curtis-adams-4320378-2.jpg"
            alt="" className=""
          />
          <div className="hidden lg:block absolute  -right-10 -bottom-10  ">
            <img
              src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175312.201.png"
              alt=""
              className="h-32"
            />
          </div>
        </div>
      </div>
     
      <div className="rotate-180 -scale-x-[1] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute -bottom-32 sm:-bottom-12 h-32 w-full -z-20 right-0"
        >
          <path class="elementor-shape-fill" fill="white" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
   
    </div>
  );
}
