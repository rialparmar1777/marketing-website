import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  // Dark mode state and toggle function
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">TechProduct</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/landing">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;