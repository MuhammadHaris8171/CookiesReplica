import React from 'react'
import './Email.css'
const Email = () => {
  return (
    <div>
        <div className="Email1" id="contact">
            <div className="Email2">
                <h2 >Get In Touch</h2>
                
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Your Phone' />
                <textarea name="T1" id="t1" cols="62" rows  ="10" placeholder='Write a Message'></textarea>
          
              <a href="" target='_self'>Send Message</a>
            
            </div>
            <div className="Email3">
              <h2>EMAIL</h2>
              <p className='mb-10'>probootstrap@gmail.com</p>
              <h2>PHONE</h2>
              <p className='mb-10'>+30 976 1382 9921</p>
              <h2>FAX</h2>
              <p className='mb-10'>+30 976 1382 9922</p>
              <h2>ADDRESS</h2>
              <p>San Francisco, CA</p>
              <p>4th Floor8 Lower</p>
              <p>San Francisco street, M1 50F</p>
            </div>
            
        </div>
    </div>
  )
}

export default Email