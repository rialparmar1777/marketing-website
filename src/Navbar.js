import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TechProduct</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/landing">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;