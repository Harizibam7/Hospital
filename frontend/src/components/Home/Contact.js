import React from 'react'
import {MdLocalHospital} from 'react-icons/md'
import {BiBus} from 'react-icons/bi'
export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-box'>
        <div className="contact-li">
          Contact Us
        </div>
        <div className="contact-li">
          <BiBus className='icon' />
          <div className='service'>
            <h2>24 Hours Emergency</h2>
            <h2>2-098-019</h2>
          </div>
        </div>
        <div className="contact-li">
          <MdLocalHospital className='icon'/>
          <div className='service'>
            <h2>Costumer Service</h2>
            <h2>2-222-091</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
