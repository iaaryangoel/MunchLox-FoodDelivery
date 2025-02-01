import React from 'react'
import './Navbar.css'
import {assets} from '../../Assets/assets'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img className='navbar-logo' src={assets.logo} alt="" />
      {/* <h5 className='navbar-logo-title'>Admin Panel</h5> */}
      <img className='navbar-profile-image' src={assets.profile_image} alt="" />
    </div>
  )
}
