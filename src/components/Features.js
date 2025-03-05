import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Advanced AI Integration',
      description: 'Leverage cutting-edge AI to automate and optimize your workflows.',
      image: 'https://picsum.photos/300/200?random=9',
    },
    {
      id: 2,
      title: 'Seamless Collaboration',
      description: 'Work together effortlessly with real-time collaboration tools.',
      image: 'https://picsum.photos/300/200?random=10',
    },
    {
      id: 3,
      title: 'Real-Time Analytics',
      description: 'Get actionable insights with real-time data and reporting.',
      image: 'https://picsum.photos/300/200?random=11',
    },
  ];

  return (
    <div className="features">
      <h2>Product Features</h2>
      <div className="features-list">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;