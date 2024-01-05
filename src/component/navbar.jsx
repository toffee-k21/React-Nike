import React from 'react'

function Navbar() {
  return (
    <nav className='flex p-3 justify-between'>
    <div className=''>
      <img src="../public/brand_logo.png" alt="j" />
    </div>

      <ul className='flex font-semibold'>
        <li className='mx-2'><a className='h-full inline-block' href="">MENU</a></li>
        <li className='mx-2'><a className='align-middle' href="">LOCATION</a></li>
        <li className='mx-2'><a className='align-middle' href="">ABOUT</a></li>
        <li className='mx-2'><a className='align-middle' href="">CONTACT</a></li>
      </ul>
      <button className='font-semibold'>Login</button>
  </nav>
  )
}

export default Navbar