import React from 'react'
import { work } from '../data'

export default function Work() {
  return (
    <div>
        <h1>How It Works</h1>
        <div className='h-full w-full'>
            {
                work.map(v=>{
                    <div key={v.id}>
                        <img src={v.img} alt="" />
                        <h1>{v.title}</h1>
                        <p>{v.desc}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}
