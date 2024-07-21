import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Computer Doctor</h4>
                <ul>
                    <li>📞 0552332238</li>
                    <li>📧 catwood00018@st.ug.edu.gh</li>
                    <li>📍 University of Ghana</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Services</h4>
                <ul>
                    <li>Mobile Repair</li>
                    <li>Laptop Screen Fix</li>
                    <li>Display Repair</li>
                    <li>Phone Unlock</li>
                    <li>Mobile Screen Fix</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Newsletter</h4>
                <input type="email" placeholder="Enter your email address" />
                <button>📧</button>
            </div>
            <div className="footer-bottom">
                <p>&copy;2024 - Computer Doctor. All Rights Reserved by HCI Group 11</p>
            </div>
        </footer>
    );
};

export default Footer;
