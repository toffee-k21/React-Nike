import React, { useEffect, useState } from 'react'

function Slider() {
// let r = '0'
  const [i,setI] = useState(0)
  
  // function scrollLeft(){
    // // seti('')
    // console.log('h')
    // }
    function scroll(){
      setI(prevState => prevState + 10)
      console.log('set i walA hai')
    }

    useEffect(()=>{
      console.log('update kroge')
    } ,[i])
    
  return (
    <>
      <div className="container m-0 p-1 h-screen relative bg-slate-400 overflow-hidden">
        <div className={`flex h-screen translate-x-[${i}px]`}>{i}
          <div className={`flex-shrink-0 w-[1200px] bg-no-repeat bg-cover h-2/3 m-2 bg-[url(../../public/pexels-parth-shah-824197.jpg)] `}>hhhh</div>
          <div className='flex-shrink-0 w-[1200px] bg-no-repeat bg-cover h-2/3 ${} m-2 bg-[url(../../public/pexels-thought-catalog-904616.jpg)] '>hhhh</div>
          <div className='flex-shrink-0 w-[1200px] bg-no-repeat bg-cover h-2/3 ${} m-2 bg-[url(../../public/pexels-parth-shah-824197.jpg)] '>hhhh</div>
        </div>
          <button className=' border-black border-2 p-2 absolute top-60 left-0' 
          //  onClick={()=> scroll()}>Left</button>
           onClick={scroll}>Left</button>
          <button className=' border-black border-2 p-2 absolute top-60 right-0' 
           onClick={scroll}>Right</button>
      </div>


    </>
  )
}

export default Slider