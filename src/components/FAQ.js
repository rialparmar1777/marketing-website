import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'How do I get started?',
      answer: 'Simply sign up on our platform and follow the onboarding process.',
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards and PayPal.',
    },
    {
      id: 3,
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time.',
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
              <h3>{faq.question}</h3>
              <span>{activeId === faq.id ? '-' : '+'}</span>
            </div>
            {activeId === faq.id && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;