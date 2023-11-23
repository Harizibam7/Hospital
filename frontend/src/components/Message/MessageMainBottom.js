import React from 'react'
import { IoIosSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa";


export default function MessageMainBottom() {
  return (
    <div className='messagemainbottom'>
      <FaPlus className='messagemainicon'/>
      <input placeholder='Type here...' className='messagemaininput'/>
      <IoIosSend className='messagemainicon'/>
    </div>
  )
}
