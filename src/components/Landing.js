import React, { useState } from 'react';
import '../styles/Landing.css';

const Landing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up! We'll contact you at ${email}.`);
    setEmail('');
  };

  return (
    <div className="landing">
      <h2>Sign Up for More Information</h2>
      <div className="landing-content">
        <div className="landing-image">
          <img src="https://picsum.photos/400/300?random=5" alt="Sign Up" />
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Landing;