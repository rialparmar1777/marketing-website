import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, BarChart, Star, ChevronDown } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
          style={{ opacity, scale }}
        >
          <h1>Transform Your Business with Our Innovative Platform</h1>
          <p className="hero-subtitle">
            Streamline operations, boost productivity, and drive growth with our cutting-edge solutions
          </p>
          <div className="cta-buttons">
            <Link to="/features" className="cta-button primary">
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link to="/pricing" className="cta-button secondary">
              View Pricing
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => scrollToSection('features')}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Why Choose Us</h2>
          <p>Experience the difference with our comprehensive platform</p>
        </motion.div>

        <div className="features-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="feature-card"
          >
            <Zap size={32} className="feature-icon" />
            <h3>Lightning Fast</h3>
            <p>Experience blazing-fast performance with our optimized infrastructure</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="feature-card"
          >
            <Shield size={32} className="feature-icon" />
            <h3>Enterprise Security</h3>
            <p>Bank-grade security with advanced encryption and compliance</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="feature-card"
          >
            <Users size={32} className="feature-icon" />
            <h3>Team Collaboration</h3>
            <p>Seamless teamwork with real-time collaboration tools</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="feature-card"
          >
            <BarChart size={32} className="feature-icon" />
            <h3>Advanced Analytics</h3>
            <p>Data-driven insights with powerful analytics dashboard</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="stats-grid"
        >
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>10K+</h3>
            <p>Active Users</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>99.9%</h3>
            <p>Uptime</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>24/7</h3>
            <p>Support</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>50+</h3>
            <p>Countries</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>What Our Clients Say</h2>
          <p>Trusted by leading companies worldwide</p>
        </motion.div>

        <div className="testimonials-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring", 
              stiffness: 300 
            }}
          >
            <div className="testimonial-content">
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <p>"The best platform we've ever used. It has transformed our business operations completely."</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>CEO, TechCorp</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="testimonial-card"
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              type: "spring", 
              stiffness: 300 
            }}
          >
            <div className="testimonial-content">
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <Star size={20} className="star-icon" />
              <p>"Incredible support team and amazing features. Highly recommended!"</p>
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Michael Chen</h4>
                <p>CTO, InnovateTech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers and transform your business today</p>
          <Link to="/contact" className="cta-button primary">
            Contact Sales
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;