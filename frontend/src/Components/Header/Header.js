import React from 'react'
import './Header.css'

export default function Header(){
  return (
    <div className='header'>
      <div className="header-things">
        <h2>Order your favourite food here</h2>
        <p>why carry LunchBox? <br /> when you have MunchLox!</p>
        <a href='#short-menu'><button>View Menu</button></a>
      </div>
    </div>
  )
}

