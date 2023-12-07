import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { popularQuestions } from '../data'
export default function PopularQuestions() {
  return (
    <div className="card max-xxl:px-2 w-[290px] mm:w-[340px] md:max-lg:w-[630px] lg:max-xxl:w-[350px]  xxl:max-w-[500px] max-xxl:py-2 xxl:p-10">
          <h1 className="mb-3 font-bold text-lg xxl:text-3xl text-[#11263c]">Popular Questions</h1>
          <Accordion allowZeroExpanded allowMultipleExpanded  className="w-full text-justify max-lg:p-2 lg:px-0 lg:py-3">
          {popularQuestions.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading className="bg-none">
                <AccordionItemButton className='popular'>{item.ques}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel><p className="mb-2 max-md:text-sm md:text-base">{item.ans}</p></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  )
}
