import React from 'react'
import HomeMainJPG from '../../images/homemain.jpg';
export default function HomeMain() {
  return (
    <div className='HomeMain'>
      <div className='HomeMainLeft'>
        <div className='HomeMainContent'>
            <h2>A heritage in care.</h2>
            <h2>A reputation in </h2>
            <h2>excellence.</h2>
        </div>
        <div className='HomeMainTheme'>
          <h5>Alpha Hospital provides excellent service by prioritizing</h5>
          <h5>the safety and security of patients</h5>
          <button>Book Now</button>
        </div>
      </div>
      <div className='HomeMainRight'>
          <img src={HomeMainJPG} className='HomeMainImage' />
      </div>
    </div>
  )
}
