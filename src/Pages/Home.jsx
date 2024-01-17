import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import OurServices from "../Components/OurServices";
import Tired from "../Components/Tired";
import Welcome from "../Components/Welcome";
import Testimonials from "../Components/Testimonials";
import Work from "../Components/Work";
import Ready from "../Components/Ready";
export default function Home() {
  return (
    <div className="w-screen relative">
      <Welcome />
      <Tired />
      <OurServices />
      <section
        className=" bg-cover relative bg-center sm:bg-fixed bg-no-repeat w-full  h-[450px]"
        style={{
          backgroundImage:
            'url("https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/southern_sparkle_cleaning.png")',
        }}
      >
        <div
          className="opacity-[65%] h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #014584 0%, #001121 100%)",
          }}
        ></div>

        <div className="flex flex-col items-center justify-center absolute left-0 top-0 right-0 bottom-0 m-auto sm:px-80 sm:py-10 px-4 py-10">
          <h1 className="text-[40px] sm:text-[44px] xxl:text-6xl font-medium text-center text-white z-20 mb-4">
            Reclaim your Saturdays!
          </h1>
          <p className="text-base sm:text-[17px] xxl:text-xl leading-7 mb-4 z-20 text-center text-white">
            {`Let's make your space shine together! Schedule with Killer Clean
            today and let the magic happen!`}
          </p>
          <Button
            as={Link}
            to={"/book"}
            className="book"
            style={{ outline: "none", border: "none" }}
          >
            Get Pricing & Book Online!
          </Button>
        </div>
      </section>
      <Testimonials />
      <Work />
      <Ready />
    </div>
  );
}
