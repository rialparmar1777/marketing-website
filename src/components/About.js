import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Shield, Zap, Heart
} from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Customer First',
      description: 'Your success is our priority, every step of the way.'
    }
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Story</h1>
          <p>Transforming businesses through innovative technology solutions since 2020</p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>To empower businesses with cutting-edge technology solutions that drive growth, innovation, and success in the digital age.</p>
            <div className="mission-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <motion.div 
            className="values-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <motion.div 
            className="team-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <motion.div 
                  key={index}
                  className="team-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Journey</h2>
            <p>Be part of our mission to transform businesses through technology</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
