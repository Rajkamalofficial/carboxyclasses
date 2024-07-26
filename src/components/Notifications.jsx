import React from 'react'
import { FaBell } from 'react-icons/fa'
import { Popover, PopoverTrigger, PopoverContent, Button, Badge } from "@nextui-org/react";


function Notifications() {
  return (
    <Popover placement="bottom" showArrow={true} backdrop="" >
      <Badge className='text-[10px]' content="5" color="danger" shape="circle" size='sm'>
        <PopoverTrigger>
          <Button isIconOnly radius='full' variant='light' size='sm'> <FaBell size='16px' className='text-cyan-900' /></Button>
        </PopoverTrigger>
      </Badge>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Notifications