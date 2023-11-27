import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
export default function Welcome() {
  return (
    <div className=" sm:mb-5">
      <div className="sm:flex p-2 sm:p-[50px] home w-full">
        <div className=" py-4 px-4 sm:p-8 flex flex-col items-center sm:items-start sm:w-[50%] sm:justify-evenly">
          <h1 className=" text-center mb-2 text-[40px] text-[#014584] font-semibold
          sm:text-6xl">
            Welcome to Killer Clean
          </h1>
          <p className="text-[#014584] mb-10  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            sed ullamcorper morbi tincidunt ornare massa.
          </p>
          <Button as={Link} to={"/book"} className='book'>
            Book Online <BsArrowRight className="ml-3 " strokeWidth={1} />
          </Button>
        </div>
        <div className="sm:w-[50%] px-8 py-3 sm:p-12 relative sm:z-50 z-50">
          <div className="-rotate-12 absolute  -top-6 -left-6 ">
            <img
              src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175312.201.png"
              alt=""
              className=" h-24 rotate-180 hidden sm:block"
            />
          </div>
          <img
            src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/pexels-curtis-adams-4320378-2.jpg"
            alt="" className=""
          />
          <div className="hidden sm:block absolute  -right-10 -bottom-10  ">
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
