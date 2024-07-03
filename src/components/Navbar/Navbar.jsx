import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {
        // setShowNav(!showNav)
        setShowNav(prev => !prev)
    }
  return (
    <header>
        <nav className='main-container'>
            <p className='logo'>MyLogo</p>
            <ul className='list-container'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
            <p className='hamburger' onClick={handleClick}><RxHamburgerMenu /></p>
        </nav>
        {showNav && <ul className='mobile-list-container'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>}
    </header>
  )
}

export default Navbar