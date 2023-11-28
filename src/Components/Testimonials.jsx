import React from "react";
import { testimonials } from "../data";
import { Carousel, Rating } from "flowbite-react";

// import type { CustomFlowbiteTheme } from 'flowbite-react';

const carousel= {
  root: {
    base: 'relative h-full w-full',
    leftControl: 'absolute top-0 left-0 flex h-full items-center justify-center sm:px-4 px-0 focus:outline-none',
    rightControl: 'absolute top-0 right-0 flex h-full items-center justify-center sm:px-4 px-0 focus:outline-none',
},
indicators: {
    active: {
        off: 'bg-gray-600/50 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800',
        on: 'bg-black dark:bg-gray-800',
    },
    base: 'h-2 w-2 rounded-full',
    wrapper: 'absolute -bottom-10 left-1/2 flex -translate-x-1/2 space-x-3',
},
control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60  sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
},
}
export default function Testimonials() {
  return (
    <>
      <section className="relative w-full">
        <div
          style={{
            backgroundImage:
              'url("https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/testimonial_background_section-1.png")',
          }}
          className="bg-contain bg-repeat w-full opacity-[10%] bg-[400px auto] p-20"
        ></div>
        <h1 className="absolute top-0 text-[#014584] text-5xl font-semibold lg:max:xxl:p-20 xxl:py-10 xxl:px-20 py-6 mt-4 px-4">
          Testimonials
        </h1>
        <div
          style={{
            backgroundImage:
              'url("https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/testimonial_background_section-1.png")',
          }}
          className="bg-contain bg-repeat w-full  opacity-[8%] bg-[400px auto] p-20"
        ></div>
        <div
          style={{
            backgroundImage:
              'url("https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/testimonial_background_section-1.png")',
          }}
          className="bg-contain bg-repeat w-full  opacity-[8%] bg-[400px auto] p-20"
        ></div>
        <div
          style={{
            backgroundImage:
              'url("https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/testimonial_background_section-1.png")',
          }}
          className="bg-contain bg-repeat w-full  opacity-[8%] bg-[400px auto] p-20"
        ></div>
        <div className=" absolute top-40 w-full sm:p-20 p-2 left-0">
          <div className="sm:h-[300px] h-[400px] xxl:h-[400px] w-full lg:w-[90%] xxl:w-full lg:max-xxl:mx-10">
            <Carousel theme={carousel}>
              {testimonials.map((review) => (
                <div
                  key={review.id}
                  className="flex justify-center h-full items-center px-3 lg:px-10" 
                >
                  <div className="text-left sm:p-10 xxl:px-20 max-xxl:px-4 max-xxl:py-8 flex flex-col justify-evenly items-start sm:items-start max-xxl:max-w-[90%] xxl:w-[90%] sm:h-[300px] xxl:h-[400px] h-[400px] border bg-white">  
                    <h1 className="text-xl xxl:text-3xl font-semibold text-[#015d9c]">
                      {review.name}
                      <Rating >
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                      </Rating>
                    </h1>
                    <p className="text-[#015d9c] text-base xxl:text-xl text-left font-medium ">
                      {review.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
