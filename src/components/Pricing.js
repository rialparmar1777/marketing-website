import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$19',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 2,
      name: 'Pro',
      price: '$49',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$99',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <div className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-list">
        {plans.map((plan) => (
          <div key={plan.id} className="pricing-item">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;