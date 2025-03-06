import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Lock, Server, BarChart, Headphones, ArrowRight } from 'lucide-react';
import '../../styles/solutions.css';

const Enterprise = () => {
  return (
    <div className="solutions-page">
      <div className="solutions-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="solutions-header"
        >
          <h1>Enterprise Solutions</h1>
          <p>Powerful features and dedicated support for large organizations</p>
        </motion.div>

        <div className="solutions-content">
          <section className="solutions-section">
            <h2>Enterprise Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Shield size={24} />
                </div>
                <h3>Advanced Security</h3>
                <ul>
                  <li>SSO Integration</li>
                  <li>Role-based Access Control</li>
                  <li>Audit Logs</li>
                  <li>Data Encryption</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <h3>Team Management</h3>
                <ul>
                  <li>Unlimited Team Members</li>
                  <li>Department Organization</li>
                  <li>Custom Permissions</li>
                  <li>Team Analytics</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={24} />
                </div>
                <h3>Performance</h3>
                <ul>
                  <li>Dedicated Servers</li>
                  <li>99.99% Uptime</li>
                  <li>Global CDN</li>
                  <li>Load Balancing</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Lock size={24} />
                </div>
                <h3>Compliance</h3>
                <ul>
                  <li>GDPR Ready</li>
                  <li>HIPAA Compliant</li>
                  <li>SOC 2 Certified</li>
                  <li>Data Residency</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="solutions-section">
            <h2>Enterprise Support</h2>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">
                  <Headphones size={24} />
                </div>
                <h3>24/7 Support</h3>
                <p>Dedicated support team available around the clock</p>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <Server size={24} />
                </div>
                <h3>Infrastructure</h3>
                <p>Custom infrastructure setup and maintenance</p>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <BarChart size={24} />
                </div>
                <h3>Analytics</h3>
                <p>Advanced analytics and reporting tools</p>
              </div>
            </div>
          </section>

          <section className="solutions-section">
            <h2>Custom Solutions</h2>
            <div className="custom-solutions">
              <div className="custom-solution-card">
                <h3>Custom Integration</h3>
                <p>Seamlessly integrate with your existing tools and workflows</p>
                <ul>
                  <li>API Customization</li>
                  <li>Custom Workflows</li>
                  <li>Third-party Integrations</li>
                </ul>
              </div>
              <div className="custom-solution-card">
                <h3>Training & Onboarding</h3>
                <p>Comprehensive training and onboarding for your team</p>
                <ul>
                  <li>Team Training Sessions</li>
                  <li>Documentation</li>
                  <li>Best Practices</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="solutions-section">
            <h2>Get Started</h2>
            <div className="cta-section">
              <div className="cta-content">
                <h3>Ready to Transform Your Organization?</h3>
                <p>Contact our sales team to learn more about enterprise solutions</p>
                <button className="cta-button">
                  Contact Sales
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Enterprise; 