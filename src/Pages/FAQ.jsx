import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { faqs } from "../data";
export default function FAQ() {
  return (
    <div className="w-screen">
      <div className="bg-[#014584] h-[120px] flex items-center px-40 py-10">
        <h1 className="text-white text-4xl">Frequently Asked Questions</h1>
      </div>
      <div className="">
      <Accordion multiple className="w-full text-justify px-40 py-10">
        {faqs.map((q) => (
          <AccordionTab
            key={q.id}
            header={q.que}
            className="mb-5 text-[#014584] max-xxl:text-xl xxl:text-xl"
          >
            <p className="m-0 text-black max-xxl:text-xl xxl:text-xl">{q.ans}</p>
          </AccordionTab>
        ))}
      </Accordion>
      </div>
    </div>
  );
}
