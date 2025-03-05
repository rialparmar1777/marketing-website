import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home"
    >
      <div className="home-content">
        <h1>Welcome to TechProduct</h1>
        <p>Discover the future of technology with our innovative product.</p>
        <Link to="/features" className="cta-button">Explore Features</Link>
      </div>
    </motion.div>
  );
};

export default Home;