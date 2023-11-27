import React from 'react'
import { bookservices } from '../data'

export default function BookEdit() {
  return (
    <div className='bg-white p-12'>
        <div className="h-full w-full flex  items-center justify-evenly">
        {bookservices.map((v, index) => (
            <div key={v.id} className="flex flex-col items-center justify-start h-[180px] w-[270px] mb-4">
              <div className='h-24 w-24 bg-[#ced5d8] rounded-full flex items-center mb-4 justify-center'>
              <img src={v.img} alt="" className="h-12 w-12" />
              </div>
              <p className="text-center text-lg font-medium leading-7 text-[#52616b]">{v.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
