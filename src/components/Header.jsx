import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'


const Header = () => {
  return (
    <header className='max-w-5xl mx-auto flex justify-between items-center font-primary text-sm px-2 md:px-4 shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)]'>
      <Link to="/">
        <img src={logo} alt="logo" className='w-[36px] hover:scale-110 transition-all' />
      </Link>
      <Navbar/>

    </header>
  )
}

export default Header