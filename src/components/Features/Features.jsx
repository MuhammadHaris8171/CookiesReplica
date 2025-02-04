import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div>
      <div id='feature' className='h-[400vh] bg-blue-100'>
        <div className='FHead'>
          <h2>Features</h2>
          <hr />
          <p className='text-zinc-400'>
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
        <div className='flex mt-20 flex-wrap'>
          <div className='bg-zinc-900'>
            <img src="/Images/img_showcase_1.jpeg" className='w-[120vh] h-[90vh]' alt="Showcase 1" />
          </div>
          <div className='div1 w-[60vh] ml-20'>
            <h2 className='text-blue-800 text-4xl'>Big Benefits for Small Business</h2>
            <p className='text-zinc-400'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <ul className="list-tick text-zinc-400">
              <li>Pointing has no control</li>
              <li>Small river named Duden flows</li>
              <li>Roasted parts of sentences fly into your mouth</li>
            </ul>
          </div>
          <div className='w-[60vh] ml-20 mt-20'>
            <h2 className='text-blue-800 text-4xl'>How Frame is different</h2>
            <p className='text-zinc-400'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <ul className="list-tick text-zinc-400">
              <li>Pointing has no control</li>
              <li>Roasted parts of sentences fly into your mouth</li>
              <li>A small river named Duden flows</li>
            </ul>
          </div>
          <div className='mt-20 ml-10'>
            <img src="/Images/img_showcase_2.jpeg" className='w-[120vh] h-[90vh] ml-20' alt="Showcase 2" />
          </div>
          <div className='mt-20'>
            <img src="/Images/img_showcase_1.jpeg" className='w-[120vh] h-[90vh]' alt="Showcase 1" />
          </div>
          <div className='w-[60vh] ml-20 mt-20'>
            <h2 className='text-blue-800 text-4xl'>All in One Place</h2>
            <p className='text-zinc-400'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <ul className="list-tick">
              <li>Pointing has no control</li>
              <li>A small river named Duden flows</li>
              <li>Roasted parts of sentences fly into your mouth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
