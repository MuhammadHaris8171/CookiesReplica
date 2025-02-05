import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../index.css';

const Hero = () => {
  return (
    <div id="home">
      <div className='bg-cover bg-top h-screen bg-hero'>
        {/* <Navbar /> */}
        <div className='container mx-auto mt-20 py-20 w-[90vh] text-center'>
          <h1 className='text-4xl font-bold text-white'>
            uicookies.com Creates High Quality Bootstrap Template For Free
          </h1>
          <div className='flex justify-center mt-10 space-x-5'>
            <a href="https://uicookies.com" className='bg-blue-600 px-10 py-5 rounded-md text-white'>
              Get Them Now
            </a>
            <a href="#" className='hover:bg-gray-400 border border-white bg-transparent px-10 py-5 rounded-md text-white'>
              See Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
