import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className="Footer1 bg-blue-600">
            <div className="Footer2">
            <ul className='flex'>
                <li><a href="" target='_self'><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="" target='_self'><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="" target='_self'><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="" target='_self'><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul></div>
            <div className="Footer3">
                <p className='pl-5'>© 2019 Frame. All Rights Reserved.</p>
                <p>Designed & <span >Bootstrap templates</span>  by uiCookies</p>
                <p className='pl-10'>Demo Images by <span>Unsplash</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer