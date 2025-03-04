import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/landing">Sign Up</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;