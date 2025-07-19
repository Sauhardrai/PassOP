import React from 'react'

const footer = () => {
  return (

    <div className='bg-slate-800 w-full fixed bottom-0'>
        <div className='text-white p-2'>
            <h1 className='text-xl font-bold text-center'><span className='text-green-500'>&lt;</span>
                    Pass<span className='text-green-500'>OP/&gt;</span></h1>
        </div>
      <div className='text-center text-white '>
        Created With <i className="fa-solid fa-heart" style={{color: "#f90606",}}></i> By Sauhard
      </div>
    </div>
  )
}

export default footer
