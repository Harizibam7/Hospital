import React from 'react'
import DoctorSide from './doctorSide';
import './doctorDashboard.css';
import DoctorMain from './DoctorMain';
import DoctorRightSide from './DoctorRightSide';

function doctordashboard() {
  return (
    <div className='doctordashboard'>
        <DoctorSide/>
        <DoctorMain/>
        <DoctorRightSide/>
    </div>
  )
}

export default doctordashboard