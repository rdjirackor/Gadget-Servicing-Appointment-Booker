import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeadset, faShieldAlt, faTruck, faWrench, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Homepage.css';  

//Importing Card and Footer
import Card from '../components/Card';

const Homepage = () => {
  useEffect(() => {
    document.title = "Book an Appointment"; 
  }, []); 

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2>24/7 Repair Service Available</h2>
          <p>Book an appointment to repair your electronic gadgets</p>
          <div className="hero-buttons">
            <a href="/services">
              <button className="service-button">Service</button>
            </a>
            <a href="/contact">
              <button className="service-button">Contact Us</button>
            </a>
          </div>
        </div>
      </div>

      <div className="request-section">
        <h2>Request a Service Repair</h2>
        <p>Book an appointment with us now</p>
        <div className="input-group">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>Book A Service</button>
        </div>
      </div>

      <div className="services-section">
        <div className="service-card">
          <div className="icon-bg blue">
            <FontAwesomeIcon icon={faUsers} size="2x" />
          </div>
          <h3>Great Team</h3>
          <p>We have a team of computer experts ready to solve your problem</p>
        </div>
        <div className="service-card">
          <div className="icon-bg green">
            <FontAwesomeIcon icon={faHeadset} size="2x" />
          </div>
          <h3>Customer Support</h3>
          <p>The self-interest been children. I knowing train the instruments, actually</p>
        </div>
        <div className="service-card">
          <div className="icon-bg red">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          </div>
          <h3>Quality Guarantee</h3>
          <p>Must understood. Hand painted, who very unmolested periodic your film design</p>
        </div>
       
      </div>

      
      <Card/>

    </div>
  );
};

export default Homepage;

