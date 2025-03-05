import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a tech company dedicated to delivering innovative solutions that empower businesses and individuals.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/landing">Sign Up</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@techproduct.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 TechProduct. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;