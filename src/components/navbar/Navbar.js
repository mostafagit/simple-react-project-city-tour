import React from 'react'
import logo from "../../logo.svg"
import "./navbar.scss"

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <img src={logo} alt="city tours" />
            <ul className='nav-links'>
                <li><a href="/" className='nav-link'>Home</a></li>
                <li><a href="/" className='nav-link'>About</a></li>
                <li><a href="/" className='nav-link'>Tours</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;