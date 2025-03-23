import React from 'react'
import './buttons.css'


const Buttons = () => {
  return (
    <div className='h-[100svh] flex flex-col justify-center items-center'>
      <button className='btn-first btn mb-10'>Hover Me</button>
      <button className='btn btn-second mb-10'>Hover Me Too</button>
      <button className='btn btn-third mb-10'>Me Too</button>
      <button className='btn btn-fourth mb-10'>And me..</button>
      <button className='btn btn-fifth'>Please Me Too</button>
    </div>
  )
}

export default Buttons