import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features">
      <h2>Product Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Advanced AI integration for smarter workflows.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Seamless collaboration across teams.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Real-time analytics and reporting.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;