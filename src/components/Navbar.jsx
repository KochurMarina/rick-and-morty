import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className='md:flex md:justify-end md:gap-6 md:my-5'>
                <li className='font-extra md:text-lg hover:text-shadow-lg hover:text-amber-600'><Link to="/">Characters</Link></li>
                <li className='font-extra md:text-lg hover:text-shadow-lg hover:text-amber-600'><Link to="/locations">Locations</Link></li>
                <li className='font-extra md:text-lg hover:text-shadow-lg hover:text-amber-600'><Link to="/episodes">Episodes</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar 
