import React from 'react'
import DoctorSide from './doctorSide';
import './doctorDashboard.css';
// import DoctorMain from './DoctorMain';
// import DoctorRightSide from './DoctorRightSide';
// import DoctorAppointment from './DoctorAppointment';
// import DoctorPatient from './DoctorPatient';
// import Payment from './Payment';
import Details from '../Details/Details';
import Message from '../Message/Message';
function doctordashboard() {
  return (
    <div className='doctordashboard'>
        <DoctorSide/>
        {/* <DoctorMain/>
        <DoctorRightSide/> */}
        {/* <DoctorAppointment/> */}
        {/* <DoctorPatient/>   */}
        {/* <Payment/> */}
        {/* <Details/> */}
        <Message/>
    </div>
  )
}

export default doctordashboard