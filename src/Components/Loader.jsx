import React from 'react'

const Loader = () => {
  return (
   <div className='wapper bg-black h-screen absolute top-0 left-0  w-screen flex items-center justify-center'>
    <div className="container w-24 rotate-45 grid grid-cols-3 gap-1 ">
        {
            new Array(9).fill().map((arr)=>{
                return <div className='box shadow-[0_4px_10px_rgba(255,255,255,0.5)]  w-7 h-7 bg-[#fff]'> </div>
            })
        }
        
    </div>
   </div>
  )
}

export default Loader