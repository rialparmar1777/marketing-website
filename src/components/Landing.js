import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Landing.css';

const Landing = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Transform Your Digital Presence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Innovative solutions for modern businesses
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-cta"
        >
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </motion.div>
      </div>
      
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <img src="/images/hero-illustration.svg" alt="Hero Illustration" />
      </motion.div>
    </section>
  );
};

export default Landing;