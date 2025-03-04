import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Product</h1>
      <p>Discover the amazing features of our new product.</p>
      <Link to="/features">Learn More</Link>
    </div>
  );
};

export default Home;