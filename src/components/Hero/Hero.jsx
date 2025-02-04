import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../index.css';

const Hero = () => {
  return (
    <div className='' id="home">
      <div className='bg-cover bg-top h-screen bg-hero '>
        <Navbar />
        <div className='container mx-80  mt-20 py-20  w-[90vh]'>
          <h1 className='text-4xl font-bold text-center text-white'>
            uicookies.com Creates High Quality Bootstrap Template For Free
          </h1>
          <a href="https://uicookies.com" className='inline-block bg-blue-600 px-10 py-5 mt-10 md:mt-20 mr-5 md:mr-30 ml-28 rounded-md text-white'>
            Get Them Now
          </a>
          <a href="#feature" className='inline-block hover:bg-gray-400 border border-white bg-transparent px-10 py-5 rounded-md text-white'>
            See Features
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
