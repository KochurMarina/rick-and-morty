import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <ul className='hidden md:flex md:justify-end md:items-center md:gap-6 md:my-5 md:text-lg '>
                <li className='font-extra md:text-lg  hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/">Characters</NavLink></li>
                <li className='font-extra md:text-lg hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/locations">Locations</NavLink></li>
                <li className='font-extra md:text-lg hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/episodes">Episodes</NavLink></li>
            </ul>
            <i onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? "hidden" : "block"}`}>
                <svg className='md:hidden block cursor-pointer hover:scale-110 transition-all hover:text-amber-600' width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                </svg>
            </i>
            <i onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? "block" : "hidden"}`}>
                <svg className='md:hidden block cursor-pointer hover:scale-110 transition-all hover:text-amber-600' width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24"
                    transform="scale(-1,1) rotate(180)">
                    <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                </svg>
            </i>

            <ul 
            className={
                `md:hidden absolute z-100 top-15 left-0 w-full h-50% flex flex-col bg-white items-center gap-12 pt-1 pb-12 text-lg font-extra transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} 
                // className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2'
                >
                <li className='font-extra md:text-lg  hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/">Characters</NavLink></li>
                <li className='font-extra md:text-lg hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/locations">Locations</NavLink></li>
                <li className='font-extra md:text-lg hover:scale-110 transition-all hover:text-amber-600'><NavLink to="/episodes">Episodes</NavLink></li>
            </ul>


        </nav>
    )
}

export default Navbar 
