import React from 'react'
import HomeNav from './HomeNav'
import HomeMain from './HomeMain'
import HomeSpeciality from './HomeSpeciality'
import Covid19 from './Covid19'
import Contact from './Contact'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-navbar'>
        <HomeNav/>
      </div>
      <div className='home-content'>
        <HomeMain/>
        <HomeSpeciality/>
        <Covid19/>
        <Contact/>
      </div>
        
    </div>
  )
}

export default Home