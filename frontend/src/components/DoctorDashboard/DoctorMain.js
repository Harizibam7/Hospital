import React from 'react'
import DoctormainTop from './doctormainTop';
import DoctorMainBody from './DoctorMainBody';
import DoctorMainAppointment from './DoctorMainAppointment';
export default function DoctorMain() {
  return (
    <div className='doctormain'>
        <DoctormainTop/>
        <DoctorMainBody/>
        <DoctorMainAppointment/>
    </div>
  )
}
