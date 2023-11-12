import React from 'react'
import DoctorProfile from './DoctorProfile'
import DoctorTask from './DoctorTask'

export default function DoctorRightSide() {
  return (
    <div className='doctorrightside'>
        <DoctorProfile/>
        <DoctorTask/>
    </div>
  )
}
