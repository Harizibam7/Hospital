import React from 'react'
import {MdLocalHospital} from 'react-icons/md'
import {BiBus} from 'react-icons/bi'
import {BsBandaid} from 'react-icons/bs';
import {BsBuildingAdd} from 'react-icons/bs';
export default function HomeSpeciality() {
  return (
    <div className='homespeciality'>
      <div className='homespeciality-box'>
        <div className='box'>
          <MdLocalHospital className='icon'/>
          <h2>JCI Accredited</h2>
          <h4>Best safety and security with JCI Accrededited</h4>
        </div>
        <div className='box'>
          <BiBus className='icon' />
          <h2>Best Service</h2>
          <h4>Best safety and security with JCI Accrededited</h4>
        </div>
        <div className='box'>
          <BsBandaid className='icon' />
          <h2>Affordable</h2>
          <h4>Best safety and security with JCI Accrededited</h4>
        </div>
        <div className='box'>
          <BsBuildingAdd className='icon' />
          <h2>Top Facility</h2>
          <h4>Best safety and security with JCI Accrededited</h4>
        </div>
      </div>
    </div>
  )
}
