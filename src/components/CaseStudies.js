import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, BarChart, Users, Clock, ImageOff } from 'lucide-react';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Technology', 'Business', 'Analytics'];

  const caseStudies = [
    {
      id: 1,
      title: 'Global Tech Company Increases Efficiency by 200%',
      category: 'Technology',
      metrics: {
        improvement: '200%',
        timeframe: '6 months',
        teamSize: '500+ employees'
      },
      description: 'How we helped a leading technology company transform their operations and achieve remarkable efficiency gains.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      logo: 'https://www.microsoft.com/favicon.ico'
    },
    {
      id: 2,
      title: 'E-commerce Platform Scales Revenue 10x',
      category: 'Business',
      metrics: {
        improvement: '10x growth',
        timeframe: '12 months',
        teamSize: '100+ stores'
      },
      description: 'A success story of how our platform helped an e-commerce business scale their operations and revenue.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      logo: 'https://www.shopify.com/favicon.ico'
    },
    {
      id: 3,
      title: 'Data-Driven Decision Making Success',
      category: 'Analytics',
      metrics: {
        improvement: '45% ROI',
        timeframe: '3 months',
        teamSize: '50+ analysts'
      },
      description: 'How implementing our analytics solution led to better decision-making and significant ROI improvements.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      logo: 'https://www.tableau.com/favicon.ico'
    }
  ];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  // Handle image loading errors
  const handleImageError = (e, isLogo = false) => {
    e.target.onerror = null;
    if (isLogo) {
      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PC9zdmc+';
    } else {
      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgOUgxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMyAxNUgxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik01IDlIMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik01IDE1SDIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=';
      e.target.parentElement.classList.add('image-error');
    }
  };

  return (
    <section className="case-studies-section" ref={ref}>
      <motion.div
        className="case-studies-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Success Stories</h2>
        <p>See how we've helped businesses achieve extraordinary results</p>
      </motion.div>

      <motion.div
        className="case-studies-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="case-studies-grid">
        {filteredStudies.map((study, index) => (
          <motion.article
            key={study.id}
            className="case-study-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="case-study-image">
              <img 
                src={study.image} 
                alt={study.title}
                onError={(e) => handleImageError(e, false)}
                loading="lazy"
              />
              <img 
                src={study.logo} 
                alt="Client Logo" 
                className="client-logo"
                onError={(e) => handleImageError(e, true)}
                loading="lazy"
              />
              <div className="image-error-overlay">
                <ImageOff size={48} />
                <span>Image unavailable</span>
              </div>
            </div>

            <div className="case-study-content">
              <span className="case-study-category">{study.category}</span>
              <h3>{study.title}</h3>
              <p>{study.description}</p>

              <div className="case-study-metrics">
                <div className="metric">
                  <BarChart size={20} />
                  <div>
                    <span className="metric-value">{study.metrics.improvement}</span>
                    <span className="metric-label">Improvement</span>
                  </div>
                </div>
                <div className="metric">
                  <Clock size={20} />
                  <div>
                    <span className="metric-value">{study.metrics.timeframe}</span>
                    <span className="metric-label">Timeframe</span>
                  </div>
                </div>
                <div className="metric">
                  <Users size={20} />
                  <div>
                    <span className="metric-value">{study.metrics.teamSize}</span>
                    <span className="metric-label">Team Size</span>
                  </div>
                </div>
              </div>

              <motion.button
                className="read-case-study"
                whileHover={{ gap: '0.75rem' }}
              >
                Read Case Study
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;