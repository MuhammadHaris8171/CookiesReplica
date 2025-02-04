import React from 'react'

const Header = () => {
  return (
    <div className='top-0 left-0 w-full fixed'>
    
      <div className='flex bg-zinc-700'>
        <div className='flex'>
        <img src="logo.png" className='mx-5' alt="" />
        <p className='w-28 bg-zinc-800 text-slate-300 mx-50 py-4 uppercase'>+ frame</p>
      </div>
      <div className='w-full'>
        <ul className='flex float-right'>
        <li className='px-4 border-l border-zinc-500 h-16 py-3 text-gray-500'><a href="#"><i class="fa-solid fa-desktop text-3xl" ></i></a></li>
          <li className='px-4 border-l border-zinc-500 h-16 py-3 text-gray-500'><a href="#"><i class="fa-solid fa-tablet-screen-button text-3xl"></i></a></li>
          <li className='px-4 border-l border-zinc-500 h-16 py-3 text-gray-500'><a href="#"><i className="fa-solid fa-mobile-screen-button text-3xl"></i></a></li>
          <li className='px-4 border-l border-zinc-500 h-16 py-3 text-white bg-green-600'><a href="#"><i class="fa-solid fa-cloud-arrow-down text-3xl"></i></a></li>
          <li className='px-4 border-l border-zinc-500 h-16 py-3 text-gray-500'><a href="#"><i class="fa-solid fa-xmark text-3xl"></i></a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Header