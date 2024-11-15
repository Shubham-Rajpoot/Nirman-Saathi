import React from 'react'
import { Button } from './ui/button'
import { BookMarked } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl shadow-purple-100 bg-white border border-gray-200'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant="outline" className="rounded-full " size="icon" > <BookMarked/></Button>

        </div>
     <div className='flex items-center gap-2 my-2'>
            <Button className="p-6" variant="outline" size="icon">
                <Avatar>
                    <AvatarImage src="https://img.freepik.com/free-vector/business-logo_23-2147503133.jpg?t=st=1731678168~exp=1731681768~hmac=70254be191c29ba14abf2373a487eb3e7c36c68110b3c4e0b54d00739335a7c3&w=740"/>
                </Avatar>
            </Button>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
     </div>
     <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quae.</p>
     </div>
     <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Position</Badge>
            <Badge className={'text-red-700 font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-purple-700 font-bold'} variant="ghost">24 LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button variant="outline">Details</Button>
            <Button className="bg-purple-800">Save for Later</Button>
        </div>
    </div>
  )
}

export default Job
