import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import TableData from '../Components/TableData';
const CleaningChecklist = () => {
    return (
        <div className='px-32 mt-10'>
            <h1 className='text-[42px] text-[#014584] font-semibold text-center mb-4'>Cleaning Checklist</h1>
            <div className='h-[600px] w-[1200px] bg-white'>
                <div className=''>
                    <div className='flex flex-row justify-evenly pt-7'>
                    <Button className="w-[300px]  bg-[#f9fafb]" as={Link} to={'#'}>KITCHEN</Button>
                    <Button className="w-[300px] " as={Link} to={'#'}>BATHROOM</Button>
                    <Button className="w-[360px] " as={Link} to={'#'}>BEDROOM & COMMON AREA</Button>
                    </div>
                </div>
                <TableData/>
            </div>
        </div>
    );
}

export default CleaningChecklist;
