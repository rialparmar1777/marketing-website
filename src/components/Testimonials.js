import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, TechCorp',
      comment: 'This product has transformed our workflow. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO, InnovateX',
      comment: 'Incredible features and excellent support. A game-changer!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Product Manager, NextGen',
      comment: 'The best investment we’ve made for our team.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <div className="testimonials">
      <h2 className='heading'>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
