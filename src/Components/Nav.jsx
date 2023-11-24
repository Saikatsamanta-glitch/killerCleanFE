import { Button, Navbar } from "flowbite-react";
import logo from "../Images/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setTablet] = useState(window.innerWidth < 1024);
  useEffect(() => {
    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-screen ">
      <div className="nav-header h-[55px] bg-[#014584] flex items-center w-full px-24  justify-between ">
        <div className="flex items-center">
          <Link to={"tel:1234567890"} className="no-underline">
            <i className="fa-solid fa-phone text-[#61B1D6] mr-3"></i>
            <span className="text-white mr-16 text-[15px] font-semibold">
              123-456-7890
            </span>
          </Link>
          <Link to={"mailto:support@killerclean.com"} className="no-underline">
            <i className="fa-solid fa-envelope text-[#61B1D6] mr-3"></i>
            <span className="text-white text-[15px] tracking-wide font-semibold">
              support@killerclean.com
            </span>
          </Link>
        </div>
        <div className=" flex items-center text-[24px]">
          <Link className="no-underline text-white">
            <i className="fa-brands fa-facebook mr-6 hover:animate-pulse "></i>
          </Link>
          <Link className="no-underline text-white">
            <i className="fa-brands fa-instagram hover:animate-pulse"></i>
          </Link>
        </div>
      </div>

      <Navbar fluid className="px-20  bg-[#F3FAFC]  w-full">
        <Navbar.Brand href="/">
          <img src={logo} className="h-6 sm:h-36" alt="Killer CLean Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to={'/'}>Home</Navbar.Link>
          <Navbar.Link as={Link} to={'/services'}>Services</Navbar.Link>
          <Navbar.Link href="/cleaningchecklist">
            Cleaning Checklist
          </Navbar.Link>
          <Navbar.Link href="/customerlogin">Customer Login</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          <Navbar.Link href="/applynow">Apply Now</Navbar.Link>
          {isMobile || isTablet ? (
            <Navbar.Link href="/book">Book Online</Navbar.Link>
          ) : (
            <Button as={Link} to={"/book"}>
              Book Online
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}