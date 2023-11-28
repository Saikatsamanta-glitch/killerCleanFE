import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
export default function Ready() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center px-4 py-20 md:py-16 lg:p-28">
        <h1 className="text-[36px] text-center sm:text-[44px] xxl:text-7xl font-semibold text-[#014584] mb-4">Ready for a Sparkling Home?</h1>
        <p className="text-base sm:text-[17px] xxl:text-xl leading-7 mb-4 text-center text-[#014584]">
        Schedule your next clean in just 60 seconds. Get Started just below!
        </p>
        <Button as={Link} to={"/book"} className='book' style={{outline:'none',border:'none'}}>
          Book Now <BsArrowRight className="ml-3 " />
        </Button>
        </div>
    </div>
  )
}
