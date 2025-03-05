import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a tech company delivering cutting-edge solutions that empower businesses and individuals.
          </p>
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
          <p>Email: <a href="mailto:support@techproduct.com">support@techproduct.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechProduct. All rights reserved.</p>
        <div className="powered-by">
          <p>Powered by</p>
          <p className="rial"><span className="rial-highlight">Rial Parmar</span></p>
          <div className="social-icons">
            <a href="https://github.com/rialparmar" target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></a>
            <a href="https://linkedin.com/in/rialparmar" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
            <a href="https://facebook.com/rialparmar" target="_blank" rel="noopener noreferrer" className="icon"><FaFacebook /></a>
            <a href="https://instagram.com/rialparmar" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
