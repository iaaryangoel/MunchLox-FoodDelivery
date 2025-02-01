import React from 'react'
import './Footer.css'
import {assets} from '../../Assets/assets.js'

export default function Footer(){
  return (
    <div className='footer' id='footer'>
        <div className="footer-data">
            <div className="footer-data-left">
                <img className="footer-logo" src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptates atque numquam molestiae officiis animi quae excepturi ratione sapiente. Temporibus veritatis accusantium distinctio sunt accusamus repudiandae libero? Delectus, fugit nihil.</p>
                <div className="footer-social">
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                </div>
            </div>
            <div className="footer-data-mid">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-data-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9891980164</li>
                    <li>aaryangoel.ag@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 © MunchLox.com - All Rights Reserved
        </p>
    </div>
  )
}

