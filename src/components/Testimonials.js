import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    image: '/images/testimonials/sarah.jpg',
    quote: 'This platform has transformed how we operate. The efficiency gains and user experience are remarkable.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at InnovateLabs',
    image: '/images/testimonials/michael.jpg',
    quote: 'The integration was seamless, and the support team was exceptional throughout the process.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Marketing at GrowthCo',
    image: '/images/testimonials/emily.jpg',
    quote: 'We\'ve seen a 300% increase in engagement since implementing this solution. Absolutely game-changing.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + testimonials.length) % testimonials.length
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Trusted by industry leaders worldwide</p>
      </div>

      <div className="testimonials-carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className="testimonial-content">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">{testimonials[currentIndex].quote}</p>
              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="carousel-controls">
          <button
            className="carousel-button prev"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
          <button
            className="carousel-button next"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
