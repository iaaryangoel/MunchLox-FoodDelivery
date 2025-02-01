import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-data">
        <Sidebar/>
      </div>
    </div>
  )
}
