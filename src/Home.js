import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to TechProduct</h1>
        <p>Discover the future of technology with our innovative product.</p>
        <Link to="/features" className="cta-button">Explore Features</Link>
      </div>
    </div>
  );
};

export default Home;