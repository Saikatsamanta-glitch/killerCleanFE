import React from "react";
import logo from "../Images/footer-logo.png";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function CustomFooter() {
  return (
    <Footer container className="bg-[#014584] px-0 relative  w-screen">
      <div className="w-full">
        <div className=" w-full max-sm:px-2 flex flex-col items-center
        lg:mt-4 sm:px-[30px] lg:px-[80px] sm:grid sm:grid-cols-2 sm:-gap-x-9">
          <div className="flex flex-col items-center justify-center sm:items-start">
            <Footer.Brand
              href="/"
              src={logo}
              alt="Killer CLean Logo"
              className="sm:-mt-4 "
            />
            <div className="flex items-center justify-center list-none mb-3">
              <Footer.Link>
                <BsFacebook className="text-white text-lg xxl:text-2xl sm:mr-5 mr-3" />
              </Footer.Link>
              <Footer.Link>
                <BsInstagram className="text-white text-lg xxl:text-2xl" />
              </Footer.Link>
            </div>
            <p className="text-xs md:text-sm max-sm:text-center leading-7
            lg:text-[15.5px]  lg:leading-[26px] xxl:text-2xl">
              Killer Clean is not the employer of the house cleaner referred to
              you. We refer highly vetted cleaners in the area to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-6 mt-6 text-center sm:grid-cols-2">
          <div>
            <Footer.Title title="Quick Links:"  />
            <Footer.LinkGroup col className="space-y-2 ">
              <Footer.Link as={Link} to={"/"}>Home</Footer.Link>
              <Footer.Link as={Link} to={"/contact"}>Contact</Footer.Link>
              <Footer.Link as={Link} to={"/book"}>Book Now!</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact" />
            <Footer.LinkGroup col>
              <Footer.Link href="tel:1234567890">123-456-7890</Footer.Link>
              <Footer.Link href="mailto:support@killerclean.com">
                support@killerclean.com
              </Footer.Link>
              <Footer.Link href="#">Mon-Sunday, 24 hours</Footer.Link>
            </Footer.LinkGroup>
          </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col items-center justify-center lg:flex-row sm:items-center m-0 px-4 sm:justify-between">
          <Footer.Copyright
            href="#"
            by="|&nbsp; Killer Clean"
            className="text-white text-xs lg:text-base xxl:text-xl"
            year={2023}
          />
          <div className="flex items-center list-none ">
            <Footer.Link href="#" className="footer-text">Privacy Policy</Footer.Link> |&nbsp;
            <Footer.Link href="#" className="footer-text">Terms &amp; Conditions</Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}
