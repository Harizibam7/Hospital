import React from 'react'
import Elon from '../../assets/elon.jpg'
import { FaListUl } from "react-icons/fa6";
export default function MessageMainTop() {
  return (
    <div className='messagemaintop'>
      <div className='messagetopdetails'> 
          <img src={Elon} className='messagemaintopimage'/>
          <span className='messagemaintopname'>Balaji</span>
      </div>
      <FaListUl />
    </div>
  )
}
