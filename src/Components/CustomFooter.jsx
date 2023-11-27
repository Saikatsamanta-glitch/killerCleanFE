import React from "react";
import logo from "../Images/footer-logo.png";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
export default function CustomFooter() {
  return (
    <Footer container className="bg-[#014584] px-0 w-screen">
      <div className="w-full">
        <div className="grid w-full justify-between mt-4 px-[80px] grid-cols-2 -gap-x-9">
          <div className="flex flex-col items-start">
            <Footer.Brand
              href="/"
              src={logo}
              alt="Killer CLean Logo"
              className="-mt-4"
            />
            <div className="flex items-center list-none mb-3">
              <Footer.Link>
                <BsFacebook className="text-white text-lg mr-5" />
              </Footer.Link>
              <Footer.Link>
                <BsInstagram className="text-white text-lg" />
              </Footer.Link>
            </div>
            <p className="text-[15.5px] leading-[26px]">
              Killer Clean is not the employer of the house cleaner referred to
              you. We refer highly vetted cleaners in the area to our customers.
            </p>
          </div>

          <div className="grid grid-cols-2">
          <div>
            <Footer.Title title="Quick Links:" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
              <Footer.Link href="#">Book Now!</Footer.Link>
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
        <div className="w-full sm:flex sm:items-center m-0 px-4 sm:justify-between">
          <Footer.Copyright
            href="#"
            by="|&nbsp; Killer Clean"
            className="text-white"
            year={2023}
          />
          <div className="flex items-center list-none">
            <Footer.Link href="#">Privacy Policy</Footer.Link> |&nbsp;
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}
