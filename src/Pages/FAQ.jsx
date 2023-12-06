import React from "react";
// import { Accordion, AccordionTab } from "primereact/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { faqs } from "../data";
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
  return (
    <div className="w-screen">
      <div className="bg-[#014584] h-[120px] flex items-center max-lg:p-6 lg:px-40 lg:py-10">
        <h1 className="text-white max-lg:text-2xl lg:text-4xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="">
        <Accordion allowZeroExpanded allowMultipleExpanded  className="w-full text-justify max-lg:p-4 lg:px-40 lg:py-10">
          {faqs.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading className="bg-none">
                <AccordionItemButton >{item.que}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel><p className="mb-2">{item.ans}</p><p>{item.ans2}</p></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
