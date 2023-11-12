import React from 'react'

export default function doctorSide() {
    return (
        <div className='doctorside'>
            <div className='doctorside-top'>
                    <h2>HMS</h2>
            </div>
             <ul className='doctorside-list'>
                    <li className='doctorside-active'>Home</li>
                    <li>Appointments</li>
                    <li>Doctors</li>
                    <li>Staff</li>
                    <li>Patient</li>
                    <li>Payment</li>
                </ul>
                <div className='doctorside-logout'>
                        <span>Log out</span>
                </div>
        </div>
      )
}
