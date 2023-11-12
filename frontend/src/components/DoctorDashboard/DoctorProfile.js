import React from 'react'
import Profile from '../../assets/elon.jpg'
export default function DoctorProfile() {
  return (
    <div className='doctorprofile'>
      <div className='doctorprofile-image'>
          <img src={Profile} alt="#"/>
      </div>
      <div className='doctorprofile-details'>
          <div className='doctorprofile-details-field'>
            <label>Name</label>
            <input placeholder='Name...' />
          </div>
          <div className='doctorprofile-details-field'>
            <label>Specialist</label>
            <input placeholder='Specialist...'/>
          </div>
          <div className='doctorprofile-details-field'>
            <label>Contact</label>
            <input placeholder='Contact...' />
          </div>
          <div className='doctorprofile-details-field'>
            <label>Email</label>
            <input placeholder='Email...' />
          </div>
          <div className='doctorprofile-details-field'>
            <label>Gender</label>
            <input placeholder='Gender...' />
          </div>
          <div className='doctorprofile-details-field'>
            <label>Location</label>
            <input placeholder='Location...' />
          </div>
          <div className='doctorprofile-details-field'>
            <label>Age</label>
            <input placeholder='Age...' />
          </div>
          <button className='doctorprofile-update'>Update</button>
      </div>
    </div>
  )
}
