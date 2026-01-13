import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='max-w-5xl mx-auto px-6 font-primary text-sm md:px-0 border-b-1 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)]'>
      <Link to="/">
        <img src="./src/assets/icons/logo-black.png" alt="logo" className='absolute flex items-center w-[36px]' />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header