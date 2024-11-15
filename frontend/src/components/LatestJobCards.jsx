import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-2xl shadow-purple-300 bg-white border border-gray-300 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet..</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Position</Badge>
            <Badge className={'text-red-700 font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-purple-700 font-bold'} variant="ghost">24 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards
