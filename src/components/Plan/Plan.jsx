import React from 'react'
import './Plan.css'
const Plan = () => {
  return (
    <div id="price" className='mb-20'>
        <div className="buisness">
            <h2>Choose the plan that’s right for your business</h2>
            <p className='text-zinc-400'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        </div>
        <div className="Plan">
            <div className="Plan1">
                <p>STARTER</p>
                <h2>$22.99</h2>
                <i disabled>This is a monthly recurring payment.</i>
                <ul>
                    <li>Pointing has no control</li>
                    <li>A small river named Duden flows</li>
                    <li>Roasted parts of sentences fly into <span className='ml-10'>your mouth</span></li>
                </ul>
                <button>Get Started</button>
            </div>
            <div className="Plan1 Plan2">
                <p>STARTER</p>
                <h2>$22.99</h2>
                <i disabled>This is a monthly recurring payment.</i>
                <ul>
                    <li>Pointing has no control</li>
                    <li>A small river named Duden flows</li>
                    <li>Roasted parts of sentences fly into <span className='ml-10'>your mouth</span></li>
                </ul>
                <button>Get Started</button>
            </div>
            <div className="Plan1">
                <p>STARTER</p>
                <h2>$22.99</h2>
                <i disabled>This is a monthly recurring payment.</i>
                <ul>
                    <li>Pointing has no control</li>
                    <li>A small river named Duden flows</li>
                    <li>Roasted parts of sentences fly into <span className='ml-10'>your mouth</span></li>
                </ul>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Plan