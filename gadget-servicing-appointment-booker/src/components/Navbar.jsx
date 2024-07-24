import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="leftSide">
                <p className='webname'><b>Computer Doctor</b></p>
            </div>
            <div className="rightSide">
                <button className="menu-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </button>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/appointment">Book Appointment</Link>
                    <Link to="/faqs">Faqs</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
