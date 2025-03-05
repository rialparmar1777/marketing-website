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
  );
};

export default Landing;