import React from 'react';
import {Link} from 'react-router-dom';



function Navbar(){
    return(
        <div className='navbar'>
        <h1><Link to ={"/"}>DigiPair</Link></h1>
        <Link to={"/about"} style={{marginLeft:'650px'}}>About</Link>
        <a>Book Appointment</a>
        <a>Contact</a>
        <a>About Us</a>
        <a>Services</a>
        <a>FAQs</a>
      </div>
    )
}

export default Navbar;