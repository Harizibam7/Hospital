import React from 'react'
import {BiSearch} from 'react-icons/bi';
export default function doctormainTop() {
  return (  
    <div className='doctormaintop'>
        <div className='doctormaintop-search'>
            <BiSearch className='maintop-icon'/>
            <input className='maintop-search' placeholder='Search...' />
        </div>
        <div className='doctormaintop-date'>
            <span>
                07-07-2005
            </span>
        </div>
    </div>
    
  )
}
