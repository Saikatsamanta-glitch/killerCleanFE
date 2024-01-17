import React from 'react'
import { bookservices } from '../data'

export default function BookEdit() {
  return (
    <div className='bg-white max-sm:p-4 sm:max-xxl:p-12 xxl:p-20 w-full'>
        <div className="h-full w-full flex flex-col md:flex-row md:max-lg:flex-wrap items-center justify-evenly">
        {bookservices.map(v => (
            <div key={v.id} className="flex flex-col items-center justify-center max-xxl:h-[180px] w-[270px] xxl:h-[250px] mb-4">
              <div className='max-xxl:h-24 max-xxl:w-24 xxl:h-32 xxl:w-32 bg-[#ced5d8] rounded-full flex items-center mb-4 justify-center'>
              <img src={v.img} alt="" className="max-xxl:h-12 max-xxl:w-12 xxl:h-16 xxl:w-16" />
              </div>
              <p className="text-center text-lg xxl:text-xl font-medium leading-7 text-[#52616b]">{v.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
