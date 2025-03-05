import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"; // Added Sun and Moon icons
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TechProduct
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdown(dropdown === "about" ? null : "about")}
            >
              About <ChevronDown size={16} />
            </button>
            {dropdown === "about" && (
              <ul className="dropdown-menu">
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/clients">Clients</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdown(dropdown === "resources" ? null : "resources")}
            >
              Resources <ChevronDown size={16} />
            </button>
            {dropdown === "resources" && (
              <ul className="dropdown-menu">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/landing" className="signup-btn">Sign Up</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />} {/* Sun and Moon icons */}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
