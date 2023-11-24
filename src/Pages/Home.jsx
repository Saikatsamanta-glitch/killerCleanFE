import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='w-screen'>
      <div className='flex p-[40px] home w-full'>
        <div className='w-[50%] p-8 flex flex-col items-start justify-evenly'>
          <h1 className='text-6xl text-[#014584] font-semibold'>Welcome to Killer Clean</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p>
          <Button as={Link} to={'/book'}>Book Online</Button>
        </div>
        <div className='w-[50%] relative'>
          <img src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175312.201.png" alt="" className='absolute' />
          <img src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/pexels-curtis-adams-4320378-2.jpg" alt="" />
          <img src="https://sparklingclean.siterubix.com/wp-content/uploads/2023/09/Untitled-design-2023-08-01T175312.201.png" alt="" className='absolute'/>
        </div>
      </div>
    </div>
  )
}
