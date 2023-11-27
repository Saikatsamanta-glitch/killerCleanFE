import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <div className="bg-white w-full p-20">
      <h1 className="text-center text-5xl text-[#014584] font-semibold mb-10">
        How It Works
      </h1>
      <div className="h-full w-full flex items-center justify-evenly">
        {work.map((v, index) => (
          <>
            <div key={v.id} className="flex flex-col items-center w-[220px] mb-4">
              <img src={v.img} alt="" className="h-16 w-16 mb-2" />
              <h1 className="font-medium text-2xl text-[#014584] mb-2">{v.title}</h1>
              <p className="text-center text-[16.5px] leading-7 text-[#014584]">{v.desc}</p>
            </div>
            {index < work.length - 1 && (
              <img
                key={v.id + "-image"}
                src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/output-onlinepngtools-2023-08-01T222209.018.png"
                alt=""
                className="h-6"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
