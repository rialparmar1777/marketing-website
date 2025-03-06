import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Rocket, Shield, Zap, Users, BarChart, Code, 
  ArrowRight, CheckCircle2, Clock, Star
} from 'lucide-react';
import '../styles/Features.css';

// Error boundary component for feature cards
const FeatureCardErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="feature-card error-state">
        <div className="feature-icon">
          <Shield size={24} />
        </div>
        <h3>Something went wrong</h3>
        <p>Please try refreshing the page</p>
      </div>
    );
  }

  return children;
};

const featuresList = [
  {
    icon: <Rocket size={24} />,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed and efficiency to deliver the best user experience.',
    expanded: 'Our platform is built on cutting-edge technology, ensuring lightning-fast load times and smooth interactions. We use advanced caching mechanisms and optimized code delivery to provide instant responses to user actions.',
    benefits: ['Global CDN', 'Edge Computing', 'Smart Caching']
  },
  {
    icon: <Shield size={24} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your valuable data.',
    expanded: 'We implement industry-leading security protocols including end-to-end encryption, two-factor authentication, and regular security audits. Your data is protected with military-grade encryption and stored in secure, redundant data centers.',
    benefits: ['End-to-end Encryption', '2FA Support', 'Regular Audits']
  },
  {
    icon: <Zap size={24} />,
    title: 'Real-time Analytics',
    description: 'Get instant insights with our powerful analytics dashboard.',
    expanded: 'Access real-time data visualization and insights through our intuitive dashboard. Track key metrics, generate custom reports, and make data-driven decisions with confidence.',
    benefits: ['Live Updates', 'Custom Reports', 'Data Export']
  },
  {
    icon: <Users size={24} />,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members in real-time.',
    expanded: 'Enable seamless collaboration with features like real-time editing, team chat, and shared workspaces. Keep everyone in sync with instant notifications and activity tracking.',
    benefits: ['Real-time Editing', 'Team Chat', 'Activity Tracking']
  },
  {
    icon: <BarChart size={24} />,
    title: 'Advanced Reporting',
    description: 'Comprehensive reports to track your business growth.',
    expanded: 'Generate detailed reports with customizable dashboards, automated scheduling, and multiple export formats. Track KPIs and visualize trends with interactive charts.',
    benefits: ['Custom Dashboards', 'Scheduled Reports', 'Multiple Formats']
  },
  {
    icon: <Code size={24} />,
    title: 'API Integration',
    description: 'Easy integration with your existing tools and systems.',
    expanded: 'Connect with your favorite tools through our comprehensive API. We provide detailed documentation, SDKs, and integration guides to make implementation seamless.',
    benefits: ['RESTful API', 'SDK Support', 'Integration Guides']
  }
];

const stats = [
  {
    number: '99.9%',
    label: 'Uptime Guarantee',
    icon: <Clock size={24} />
  },
  {
    number: '50M+',
    label: 'Daily Active Users',
    icon: <Users size={24} />
  },
  {
    number: '4.9/5',
    label: 'Customer Satisfaction',
    icon: <Star size={24} />
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleFeatureClick = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="features-section loading">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <section className="features-section" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="features-header"
      >
        <motion.h2 variants={itemVariants}>
          Powerful Features
        </motion.h2>
        <motion.p variants={itemVariants}>
          Everything you need to scale your business with confidence
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="features-grid"
      >
        {featuresList.map((feature, index) => (
          <FeatureCardErrorBoundary key={index}>
            <motion.div
              className="feature-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              
              <div 
                className="feature-details"
                onClick={() => handleFeatureClick(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleFeatureClick(index)}
                aria-expanded={expandedFeature === index}
              >
                Learn more
                <ArrowRight size={16} />
              </div>

              <AnimatePresence>
                {expandedFeature === index && (
                  <motion.div
                    className="feature-expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{feature.expanded}</p>
                    <div className="feature-benefits">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="benefit-item">
                          <CheckCircle2 size={16} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </FeatureCardErrorBoundary>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="feature-stats"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;