import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import search from '../assets/search.svg';
function Navbar(){
    return(
        <div className='navbar'>
          <div className="leftSide">
            <p className='webname'><b>Computer Doctor</b></p>
          </div>
          <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faqs">Faqs</Link>
            <Link to="/services">Services</Link>
            <Link to="/appointment">Book Appointment</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    )
}

export default Navbar;