import React from 'react';
import '../styles/Card.css';
import {Link} from 'react-router-dom';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h3>Have a Query? </h3>
                <p>
Feel free to reach out to us!                </p>
<Link to ='/contact'>  <button className="contact-button"> Contact Us</button></Link>
            </div>
        </div>
    );
};

export default Card;
