import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex justify-between items-center px-40 py-5 h-10">
        <div className="logo font-bold  text-2xl">
            <span className='text-green-700'>&lt;</span>
            Pass<span className='text-green-700'>OP/&gt;</span>
            
            </div>
        <ul className=''>
            <li className='flex gap-4 items-center'>
            <div  className='hover:text-green-500 border-2 border-green-900 rounded-xl py-1 px-3 cursor-pointer'><a href="www.github.com" target='_blank'><i className="fa-brands fa-github px-2"></i>Github </a></div>
            </li>
        </ul>
        
        </div>
    </nav>
  )
}

export default Navbar
