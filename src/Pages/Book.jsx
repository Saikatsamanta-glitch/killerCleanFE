import BookEdit from "../Components/BookEdit";

import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { Multiselect } from "multiselect-react-dropdown";
import { ButtonGroup } from "react-bootstrap";
// import { handleScroll, optionSel } from "../utils";
import { Link } from "react-router-dom";
import BookForm from "../Components/BookForm";
// import { objectArray } from "../data";
const ProgressCheck = ({ step, setStep }) => {
  return (
    <div className="flex justify-between text-xl relative overflow-x-hidden ">
      <div className="w-32 flex flex-col z-50 items-center text-center">
        Contact
        <br />
        Information
        <h1
          onClick={() => setStep(0)}
          className="mt-3 h-14 w-14 center-element rounded-full cur bg-white text-[#015d9c]"
        >
          1
        </h1>
      </div>
      <div className="w-32 flex flex-col z-50 items-center text-center">
        Schedule
        <br />
        Cleaning
        <h1 className="mt-3 h-14 w-14 center-element rounded-full bg-white  text-[#015d9c]">
          2
        </h1>
      </div>
      <div className=" w-32 flex flex-col z-50 items-center text-center">
        Review &
        <br />
        Purchase
        <h1 className="mt-3 h-14 w-14  center-element rounded-full bg-white  text-[#015d9c]">
          3
        </h1>
      </div>
      <ProgressBar
        animated
        now={50 * step}
        className="absolute w-full z-10 top-[90px] left-0"
      />
    </div>
  );
};
export default function Book() {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  });
  const [step, setStep] = useState(0);
  // const [option, setOption] = useState(optionSel.onetime);
  // const [selectedTool, setSelectedTool] = useState({});
  const handleSteps = () => {
    setStep((pre) => pre + 1);
    // handleScroll();
  };
  // const selectOpt = (e) => setOption(optionSel[e.target.value]);
  // const selectedOpt = (v) => setSelectedTool(v);
  // const place = "Bangalore";
  return (
    <div className="w-screen book-page bg-white p-[10px]">
      <div className="w-full bg-[#f0f5f9]  ">
        <div className="flex flex-col py-16 px-[280px]">
          <h1 className="text-[44px] mb-4 text-[#11263c] font-bold text-center">
            Book A Cleaning Today
          </h1>
          <p className="text-[15px] font-medium text-center text-[#52616b] ">
            Enter your information below to secure your appointment! Once your
            booking is confirmed a notification will be sent to your email.
            (<span className="italic">This is a demo booking form</span>).
          </p>
        </div>
        <div>
          <BookForm />
        </div>
      </div>
      <BookEdit />
    </div>
  );
}
