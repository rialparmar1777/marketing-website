import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, BookOpen, Zap, Shield, Users } from 'lucide-react';
import '../../styles/docs.css';

const GettingStarted = () => {
  return (
    <div className="docs-page">
      <div className="docs-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="docs-header"
        >
          <h1>Getting Started Guide</h1>
          <p>Learn how to get up and running with YourBrand in minutes</p>
        </motion.div>

        <div className="docs-content">
          <section className="docs-section">
            <h2>Quick Start</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-icon">
                  <BookOpen size={24} />
                </div>
                <h3>1. Sign Up</h3>
                <p>Create your account and choose your plan</p>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <Zap size={24} />
                </div>
                <h3>2. Configure</h3>
                <p>Set up your workspace and preferences</p>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <Shield size={24} />
                </div>
                <h3>3. Secure</h3>
                <p>Enable security features and 2FA</p>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <Users size={24} />
                </div>
                <h3>4. Invite Team</h3>
                <p>Add team members and set permissions</p>
              </div>
            </div>
          </section>

          <section className="docs-section">
            <h2>Key Features</h2>
            <div className="features-list">
              <div className="feature-item">
                <Check size={20} />
                <div>
                  <h3>Project Management</h3>
                  <p>Create and manage projects with ease</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} />
                <div>
                  <h3>Team Collaboration</h3>
                  <p>Work together seamlessly with your team</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} />
                <div>
                  <h3>Analytics Dashboard</h3>
                  <p>Track progress and performance metrics</p>
                </div>
              </div>
              <div className="feature-item">
                <Check size={20} />
                <div>
                  <h3>API Integration</h3>
                  <p>Connect with your favorite tools</p>
                </div>
              </div>
            </div>
          </section>

          <section className="docs-section">
            <h2>Next Steps</h2>
            <div className="next-steps">
              <a href="/docs/api" className="next-step-card">
                <h3>API Reference</h3>
                <p>Learn how to integrate with our API</p>
                <ArrowRight size={20} />
              </a>
              <a href="/docs/security" className="next-step-card">
                <h3>Security Guide</h3>
                <p>Best practices for securing your account</p>
                <ArrowRight size={20} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted; 