import React from 'react';
import '../styles/Card.css';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h3>Have a Query? </h3>
                <p>
Feel free to reach out to us!                </p>
                <button className="contact-button">Contact Us</button>
            </div>
        </div>
    );
};

export default Card;
