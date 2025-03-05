import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Shield, Zap, Users, BarChart, Code } from 'lucide-react';
import '../styles/Features.css';

const featuresList = [
  {
    icon: <Rocket size={24} />,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed and efficiency to deliver the best user experience.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your valuable data.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Real-time Analytics',
    description: 'Get instant insights with our powerful analytics dashboard.'
  },
  {
    icon: <Users size={24} />,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members in real-time.'
  },
  {
    icon: <BarChart size={24} />,
    title: 'Advanced Reporting',
    description: 'Comprehensive reports to track your business growth.'
  },
  {
    icon: <Code size={24} />,
    title: 'API Integration',
    description: 'Easy integration with your existing tools and systems.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="features-section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="features-header"
      >
        <h2>Powerful Features</h2>
        <p>Everything you need to scale your business</p>
      </motion.div>

      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;