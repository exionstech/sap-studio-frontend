import React from 'react'
import Logo from './logo'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full max-w-screen-2xl mx-auto px-5 md:px-14 py-3 flex items-center bg-[#F9FBF4] z-10'>
      <Logo/>
    </div>
  )
}

export default Navbar
