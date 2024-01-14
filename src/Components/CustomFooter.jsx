import React from "react";
import logo from "../Images/footer-logo.png";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function CustomFooter() {
  return (
    <Footer container className="bg-[#014584] px-0 relative w-screen">
      <div className="w-full">
        <div
          className=" w-full max-md:px-2 flex flex-col
        lg:mt-4 md:px-[30px] lg:px-[80px] lg:grid lg:grid-cols-2 lg:-gap-x-9"
        >
          <div className="flex flex-col items-center justify-center md:items-start">
            <div className="flex lg:flex-col max-lg:items-center lg:items-start max-lg:justify-between w-full max-md:px-2 md:max-lg:px-8">
              <Footer.Brand
                href="/"
                src={logo}
                alt="Killer CLean Logo"
                className="sm:-mt-4 md:-ml-0"
              />
              <div className="flex items-center justify-center list-none mb-3">
                <Footer.Link href="https://www.facebook.com/profile.php?id=61553403698498" target="_blank">
                  <BsFacebook className="text-white text-lg xxl:text-2xl sm:mr-5 mr-3" />
                </Footer.Link>
                <Footer.Link>
                  <BsInstagram className="text-white text-lg xxl:text-2xl" />
                </Footer.Link>
              </div>
            </div>
            <p
              className="text-xs md:text-sm max-lg:text-center leading-7
            lg:text-[15.5px] max-md:px-10 lg:leading-[26px] xxl:text-2xl"
            >
           We refer highly vetted cleaners in the area to our customers.
            </p>
          </div>

          <div className="grid grid-cols-2  gap-y-6 max-md:gap-x-4 md:max-lg:gap-x-8 mt-6 text-center lg:grid-cols-2">
            <div>
              <Footer.Title title="Quick Links:" />
              <Footer.LinkGroup col className="space-y-2 ">
                <Footer.Link as={Link} to={"/"}>
                  Home
                </Footer.Link>
                <Footer.Link as={Link} to={"/contact"}>
                  Contact
                </Footer.Link>
                <Footer.Link as={Link} to={"/book"}>
                  Book Now!
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col className="space-y-2">
                <Footer.Link href="tel:1234567890">951-877-5077</Footer.Link>
                <Footer.Link href="mailto:support@killerclean.com">
                killercleanllc@gmail.com
                </Footer.Link>
                <Footer.Link href="#">Mon-Sunday, 24 hours</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col items-center justify-center lg:flex-row md:items-center m-0 px-4 md:justify-between">
          <Footer.Copyright
            href="#"
            by="|&nbsp; Killer Clean"
            className="text-white text-xs lg:text-base xxl:text-xl"
            year={new Date().getFullYear()}
          />
          <div className="flex items-center list-none ">
            <Footer.Link href="#" className="footer-text">
              Privacy Policy
            </Footer.Link>{" "}
            |&nbsp;
            <Footer.Link href="#" className="footer-text">
              Terms &amp; Conditions
            </Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}
