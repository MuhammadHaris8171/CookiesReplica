import React from 'react'
import './Love.css'
const Card = ({ paragraph, author,imgSource,starColor}) => {
  return (

          <div className="Love3"><img src={imgSource} alt="" />
          <i className="fa-solid fa-star text-yellow-500 mt-5"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star " style={{ color: starColor }}></i>
          <p>{paragraph}</p>
          <sub className='text-zinc-500 '>— {author}</sub>
          
      </div>
  )
}

export default Card