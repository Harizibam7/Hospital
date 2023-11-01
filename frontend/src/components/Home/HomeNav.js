import React from 'react'

export default function HomeNav() {
  return (
    <div className='homenav'>
      <div className='homebrand'>
          <h1>Hawkz Hospital</h1>
      </div>
      <div className='hometopic'>
          <h2>Home</h2>
          <h2>About us</h2>
          <h2>Services</h2>
          <h2>Pharmacy</h2>
      </div>
      <div className='homelogin'>
          <button>Login</button>
      </div>
    </div>
  )
}
