import React from 'react'
import './Download.css'
import {assets} from '../../Assets/assets'

export default function Download(){
  return (
    <div className='download' id='download'>
        {/* <p>For Enhanced Experience Download <br /> <span>MunchLox</span> App</p> */}
        <p>For best offers and discounts curated specially for you. <br /> Get the <span>MunchLox</span> App now!</p>
        <div className="download-source">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
