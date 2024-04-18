import { Button, Navbar } from "flowbite-react";
import logo from "../Images/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

    <div className="w-full overflow-x-hidden">
      <div className="nav-header h-[55px] hidden bg-[#014584]  md:flex  items-center w-full lg:px-24 px-10 justify-between ">
        <div className="flex items-center">
          <Link to={"tel:951-877-5077"} className="no-underline">
            <i className="fa-solid fa-phone text-[#61B1D6] mr-3"></i>
            <span className="text-white mr-16 text-[15px] font-semibold">
            951-877-5077
            </span>
          </Link>
          <Link to={"mailto:willc76@me.com"} className="no-underline">
            <i className="fa-solid fa-envelope text-[#61B1D6] mr-3"></i>
            <span className="text-white text-[15px] tracking-wide font-semibold">
   killercleanllc@gmail.com
            </span>
          </Link>
        </div>
        <div className=" flex items-center text-[24px]">
          <Link className="no-underline text-white" to={'https://www.facebook.com/profile.php?id=61553403698498'} target="_blank">
            <i className="fa-brands fa-facebook mr-6 hover:animate-pulse "></i>
          </Link>
          <Link className="no-underline text-white" to={"https://www.instagram.com/killercleanservices?igsh=MXh5Zjc1MDM3b3I0MA%3D%3D&utm_source=qr"} target="_blank">
            <i className="fa-brands fa-instagram hover:animate-pulse"></i>
          </Link>
        </div>
      </div>

      <Navbar fluid className={`sm:max-lg:px-0 px-20 left-0 top-0 bg-[#F3FAFC] w-full z-50`}>
        <Navbar.Brand href="/">
          <img src={logo} className="h-24 sm:max-lg:h-[200px] lg:h-[150px] max-lg:mt-0 " alt="Killer CLean Logo" />
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Navbar.Link as={Link}  to={'/'}>Home</Navbar.Link>
          <Navbar.Link as={Link} to={'/services'}>Services</Navbar.Link>
          <Navbar.Link as={Link} to={"/cleaningchecklist"}>
            Cleaning Checklist
          </Navbar.Link>
          <Navbar.Link as={Link} to={"/contact"}>Contact</Navbar.Link>
          <Navbar.Link as={Link} to={"/faq"}>{`FAQ'S`}</Navbar.Link>
          {isMobile ? (
            <Navbar.Link as={Link} to={"/book"}>Book Online</Navbar.Link>
          ) : (
            <Button as={Link} to={"/book"} className='book active:bg-none active:border-none active:outline-none focus:outline-none'>
              Book Online
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
