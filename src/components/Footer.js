import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ArrowRight, 
  Facebook, Instagram, Linkedin, Github, Twitter,
  Shield, Clock, CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'About', href: '/about' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://facebook.com/rialparmar', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/rialparmar', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/rialparmar', label: 'Instagram' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/rialparmar', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/rialparmar', label: 'GitHub' }
  ];

  const guarantees = [
    { icon: <Shield size={16} />, text: '30-day money-back guarantee' },
    { icon: <Clock size={16} />, text: 'Instant setup' },
    { icon: <CreditCard size={16} />, text: 'No credit card required' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="logo-text">YourBrand</span>
              <span className="logo-badge">Beta</span>
            </motion.div>
            <p className="brand-description">
              Empowering businesses with cutting-edge solutions that drive growth and innovation.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-section">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul>
                  {links.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                    >
                      <Link to={link.href}>
                        <ArrowRight size={12} />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <a href="mailto:support@techproduct.com">support@techproduct.com</a>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-guarantees">
          {guarantees.map((guarantee, index) => (
            <motion.div 
              key={index}
              className="guarantee-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {guarantee.icon}
              <span>{guarantee.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>&copy; 2025 YourBrand. All rights reserved.</p>
          <p>Powered by <motion.span 
            className="rial-highlight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Rial</motion.span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
