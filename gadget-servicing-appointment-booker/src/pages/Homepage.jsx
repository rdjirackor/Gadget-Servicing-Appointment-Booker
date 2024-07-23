import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeadset, faShieldAlt, faTruck, faWrench, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faRegistered, faEnvelope, faUniversity, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/Homepage.css';  

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
              <button className="contact-button">Contact Us</button>
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
        <div className="service-card">
          <div className="icon-bg yellow">
            <FontAwesomeIcon icon={faTruck} size="2x" />
          </div>
          <h3>Free Delivery</h3>
          <p>The slept control by first be right, and left men's own tin, without at the in project</p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-img">
          <img src="https://plus.unsplash.com/premium_photo-1683134238579-a7575f7eba35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5pY2FsJTIwYmFja2dyb3VnJTIwZm9yJTIwc3lzdGVtJTIwdW5pdHxlbnwwfHwwfHx8MA%3D%3D" alt="Description" />
        </div>
        <div className="info-content">
          <h3>We’re here to help you to fix all types of phones, iPhones, and laptops.</h3>
          <p>We specialize in repairing all types of phones, including iPhones, and laptops with professional and reliable service.</p>
          <div className="info-item">
            <div className="info-icon blue">
              <FontAwesomeIcon icon={faWrench} size="lg" />
            </div>
            <div>
              <h4>Replace Device</h4>
              <p>The were a claim hair was deep may she this carpeting</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon green">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </div>
            <div>
              <h4>Buy and Sell Device</h4>
              <p>Last how absolutely have attention and torn of up</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon red">
              <FontAwesomeIcon icon={faWrench} size="lg" />
            </div>
            <div>
              <h4>Repair Device</h4>
              <p>Right systems textile either self-interest. Object hadn't</p>
            </div>
          </div>
          <div className="info-buttons">
            <a href="/services">
              <button className="view-services-button">View Services</button>
            </a>
            <a href="/contact">
              <button className="contact-us-button">Contact Us</button>
            </a>
          </div>
        </div>
      </div>

      <div className="highlight-section">
        <h2>Get your laptop fixed in 24 hours</h2>
        <p>We have strong feelings about planning. So strong, in fact, that we believe they deserve their own manifesto.</p>
        <a href="/contact">
          <button className="contact-us-button">Contact Us</button>
        </a>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Computer Doctor</h3>
            <ul>
              <li><FontAwesomeIcon icon={faPhone} /> <a href="#">0552233328</a></li>
              <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:cadzewoda001@st.ug.edu.gh">jmusah@st.ug.edu.gh</a></li>
              <li><FontAwesomeIcon icon={faUniversity} /> <a href="#">University of Ghana</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Mobile Repair</a></li>
              <li><a href="#">Laptop Screen Fix</a></li>
              <li><a href="#">Display Repair</a></li>
              <li><a href="#">Phone Unlock</a></li>
              <li><a href="#">Mobile Screen Fix</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /> Pinterest</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Enter your email address</p>
            <form>
              <input type="email" placeholder="Your email" />
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2024 - Computer Doctor. All Rights Reserved by HCI Group 11 <FontAwesomeIcon icon={faRegistered} /></p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

