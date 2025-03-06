import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Check, ArrowRight, Mail, Building2, User,
  Sun, Moon, Gift, Sparkles, Shield, 
  Clock, CreditCard, Zap, Search, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [showNotification, setShowNotification] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'pro'
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        'Up to 5 team members',
        '10 projects',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'API access'
      ],
      recommended: false,
      value: 'basic',
      savings: 'Save $58/year with annual billing',
      highlight: '30-day money-back guarantee'
    },
    {
      name: 'Pro',
      price: '$79',
      period: 'per month',
      features: [
        'Up to 15 team members',
        'Unlimited projects',
        'Advanced analytics',
        '24/7 Priority support',
        'Custom integrations',
        '50GB storage',
        'Advanced security',
        'Team collaboration tools'
      ],
      recommended: true,
      value: 'pro',
      savings: 'Save $158/year with annual billing',
      highlight: 'Most popular choice'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'custom billing',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Enterprise analytics',
        'Dedicated support',
        'Custom development',
        'SLA guarantee',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'Dedicated success manager'
      ],
      recommended: false,
      value: 'enterprise',
      savings: 'Custom pricing for your needs',
      highlight: 'For large organizations'
    }
  ];

  const specialOffer = {
    title: "🎉 Special Launch Offer",
    description: "Get 3 months free when you sign up for annual billing",
    code: "LAUNCH2024",
    expires: "Limited time offer"
  };

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      if (newValue) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      return newValue;
    });
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
    }
    return errors;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setSubmitting(true);
      setShowError(false);

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            resolve();
          } else {
            reject(new Error('Service temporarily unavailable'));
          }
        }, 1500);
      });

      setShowSuccess(true);
      setFormErrors({});
      
      setTimeout(() => {
        setShowGetStarted(false);
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          plan: 'pro'
        });
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setShowError(true);
      setFormErrors({
        submit: error.message || 'Failed to submit form. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  }, [validateForm]);

  const handleCloseModal = useCallback(() => {
    setShowGetStarted(false);
    setShowSuccess(false);
    setShowError(false);
    setFormErrors({});
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const renderFormError = (fieldName) => {
    return formErrors[fieldName] && (
      <motion.span
        className="form-error"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {formErrors[fieldName]}
      </motion.span>
    );
  };

  // Mock search data - replace with your actual data source
  const searchData = useMemo(() => [
    { title: 'Getting Started Guide', category: 'Documentation', url: '/docs/getting-started' },
    { title: 'API Reference', category: 'Documentation', url: '/docs/api' },
    { title: 'Pricing Plans', category: 'Pricing', url: '/pricing' },
    { title: 'Enterprise Solutions', category: 'Solutions', url: '/solutions/enterprise' },
    { title: 'Customer Success Stories', category: 'Resources', url: '/case-studies' },
    { title: 'Blog', category: 'Resources', url: '/blog' },
    { title: 'Contact Sales', category: 'Support', url: '/contact' },
  ], []); // Empty dependency array since this data is static

  const handleSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    setSearchError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Filter results based on query
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(results);
    } catch (error) {
      setSearchError('Failed to fetch search results. Please try again.');
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  }, [searchData]); // searchData is now stable

  const handleSearchInput = useCallback((e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  }, [handleSearch]);

  const handleSearchKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setShowSearch(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  }, []);

  // Add debounced search to prevent too many API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        handleSearch(searchQuery);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchQuery, handleSearch]);

  // Cleanup search state when modal closes
  useEffect(() => {
    if (!showSearch) {
      setSearchQuery('');
      setSearchResults([]);
      setSearchError(null);
    }
  }, [showSearch]);

  return (
    <>
      {showNotification && (
        <motion.div 
          className="top-notification"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <div className="notification-content">
            <Sparkles size={16} />
            <span>
              {specialOffer.title} - {specialOffer.description}
              <strong> Use code: {specialOffer.code}</strong>
            </span>
          </div>
          <button 
            className="notification-close"
            onClick={() => setShowNotification(false)}
          >
            <X size={16} />
          </button>
        </motion.div>
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="logo-container"
            >
              <div className="logo-icon">
                <span className="logo-icon-text">Y</span>
              </div>
              <div className="logo-text-container">
                <span className="logo-text">YourBrand</span>
                <span className="logo-badge">Beta</span>
              </div>
            </motion.div>
          </Link>

          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="nav-link-content"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </div>
            ))}
            
            <div className="nav-actions">
              <button 
                className="nav-icon-button search-button" 
                aria-label="Search"
                onClick={() => setShowSearch(true)}
              >
                <Search size={20} />
              </button>
              <button 
                className="nav-icon-button theme-toggle" 
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <motion.button
                className="nav-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowGetStarted(true)}
              >
                <span className="cta-text">Get Started</span>
                <span className="cta-arrow">
                  <ArrowRight size={16} />
                </span>
              </motion.button>
            </div>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item, index) => (
                <div key={index} className="mobile-nav-item">
                  <Link
                    to={item.path}
                    className="nav-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="mobile-actions">
                <button 
                  className="mobile-action-button search-button" 
                >
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <button 
                  className="mobile-action-button" 
                  onClick={toggleTheme}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <button 
                  className="nav-mobile-cta"
                  onClick={() => {
                    setIsOpen(false);
                    setShowGetStarted(true);
                  }}
                >
                  <span className="cta-text">Get Started</span>
                  <span className="cta-arrow">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showGetStarted && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="get-started-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={handleCloseModal}
              >
                <X size={24} />
              </button>

              <div className="modal-content">
                <div className="modal-header">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2>Start Your Journey</h2>
                    <p>Choose a plan and start your 14-day free trial. No credit card required.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="special-offer-banner"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Gift size={20} />
                    <div>
                      <strong>{specialOffer.title}</strong>
                      <p>{specialOffer.description}</p>
                    </div>
                    <span className="offer-code">{specialOffer.code}</span>
                  </motion.div>
                </div>

                <div className="plans-grid">
                  {plans.map((plan, index) => (
                    <motion.div 
                      key={plan.value}
                      className={`plan-card ${formData.plan === plan.value ? 'selected' : ''} ${plan.recommended ? 'recommended' : ''}`}
                      onClick={() => handleInputChange({ target: { name: 'plan', value: plan.value } })}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {plan.recommended && (
                        <motion.span 
                          className="recommended-badge"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Recommended
                        </motion.span>
                      )}
                      <h3>{plan.name}</h3>
                      <div className="plan-price-container">
                        <div className="plan-price">{plan.price}</div>
                        <div className="plan-period">{plan.period}</div>
                      </div>
                      <div className="plan-savings">{plan.savings}</div>
                      <ul className="plan-features">
                        {plan.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <Check size={16} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="plan-highlight">
                        <Zap size={16} />
                        {plan.highlight}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <label>
                      <User size={16} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-invalid={!!formErrors.name}
                      />
                    </label>
                    {renderFormError('name')}
                  </div>
                  <div className="form-group">
                    <label>
                      <Mail size={16} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-invalid={!!formErrors.email}
                      />
                    </label>
                    {renderFormError('email')}
                  </div>
                  <div className="form-group">
                    <label>
                      <Building2 size={16} />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        aria-invalid={!!formErrors.company}
                      />
                    </label>
                    {renderFormError('company')}
                  </div>

                  {formErrors.submit && (
                    <motion.div
                      className="form-error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formErrors.submit}
                    </motion.div>
                  )}

                  <div className="form-footer">
                    <div className="form-guarantees">
                      <div className="guarantee-item">
                        <Shield size={16} />
                        <span>30-day money-back guarantee</span>
                      </div>
                      <div className="guarantee-item">
                        <Clock size={16} />
                        <span>Instant setup</span>
                      </div>
                      <div className="guarantee-item">
                        <CreditCard size={16} />
                        <span>No credit card required</span>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={`submit-button ${submitting ? 'submitting' : ''}`}
                      disabled={submitting}
                      aria-busy={submitting}
                    >
                      {submitting ? (
                        <motion.div
                          className="loading-spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          Start Free Trial
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      role="alert"
                    >
                      <Check size={24} />
                      <p>Successfully registered! Redirecting...</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showError && (
                    <motion.div
                      className="error-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      role="alert"
                    >
                      <X size={24} />
                      <p>An error occurred. Please try again.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="search-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              className="search-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="search-header">
                <div className="search-input-container">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search documentation, guides, and more..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                    onKeyDown={handleSearchKeyDown}
                    autoFocus
                  />
                </div>
                <button
                  className="search-close"
                  onClick={() => setShowSearch(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="search-content">
                {isSearching ? (
                  <div className="search-loading">
                    <Loader2 size={24} className="spinning" />
                    <p>Searching...</p>
                  </div>
                ) : searchError ? (
                  <div className="search-error">
                    <p>{searchError}</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="search-results">
                    {searchResults.map((result, index) => (
                      <motion.a
                        key={index}
                        href={result.url}
                        className="search-result-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="result-title">{result.title}</div>
                        <div className="result-category">{result.category}</div>
                      </motion.a>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="search-no-results">
                    <p>No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="search-suggestions">
                    <h3>Popular Searches</h3>
                    <div className="suggestion-grid">
                      {searchData.slice(0, 6).map((item, index) => (
                        <button
                          key={index}
                          className="suggestion-item"
                          onClick={() => {
                            setSearchQuery(item.title);
                            handleSearch(item.title);
                          }}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
