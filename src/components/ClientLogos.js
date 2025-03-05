import React, { useEffect, useState } from 'react';
import '../styles/ClientLogos.css';

const CLIENT_DOMAINS = [
  'google.com',
  'microsoft.com',
  'apple.com',
  'amazon.com',
  'facebook.com',
];

const ClientLogos = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchedLogos = CLIENT_DOMAINS.map(
      (domain) => `https://logo.clearbit.com/${domain}`
    );
    setLogos(fetchedLogos);
  }, []);

  return (
    <div className="client-logos">
      <h2>Trusted By</h2>
      <div className="logos-list">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
