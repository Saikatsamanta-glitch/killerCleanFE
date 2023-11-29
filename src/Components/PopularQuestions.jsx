import React from 'react'
import { popularQuestions } from '../data'
import { Accordion, AccordionTab } from 'primereact/accordion'
export default function PopularQuestions() {
  return (
    <div className="card max-xxl:px-2 w-[390px] md:max-lg:w-[730px] lg:max-xxl:w-[350px] xxl:w-[500px] max-xxl:py-2 xxl:p-10">
          <h1 className="mb-6 font-bold text-lg xxl:text-3xl text-[#11263c]">Popular Questions</h1>
          <Accordion multiple className='w-full '>
            {popularQuestions.map((q) => (
              <AccordionTab key={q.id} header={q.ques} className="mb-4 xxl:text-xl">
                <p className="m-0 xxl:text-xl">{q.ans}</p>
              </AccordionTab>
            ))}
          </Accordion>
    </div>
  )
}
