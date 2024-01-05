import React from 'react'

function Main() {
    return (
    <>
    <div className='flex'>
    <div className='w-6/12 py-11 px-20'>
      <h1 className='heading text-7xl'>YOUR FEET DESERVE THE BEST</h1>
     <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem quae modi magni odit numquam in eum debitis reiciendis alias quod aliquam a veniam, possimus dolor at enim quaerat earum tempore fuga veritatis ratione.</p>
      <div className="">
        <button className='bg-red-500  text-white py-1 px-2 border-2'>Shop Now</button>
        <button className=' bg-white mx-10 text-gray-600  py-1 px-2 border-2'>Category</button>
      </div>
    </div>
    
      <img className='w-6/12' src="../public/hero-image.png" alt="" />
    
    </div>
    <div>
      content
    </div>
    </>
    )
}

export default Main