import React from 'react';
import { motion } from 'framer-motion';
import { Code, Key, Server, Users, Zap } from 'lucide-react';
import '../../styles/docs.css';

const ApiReference = () => {
  return (
    <div className="docs-page">
      <div className="docs-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="docs-header"
        >
          <h1>API Reference</h1>
          <p>Integrate YourBrand with your applications using our powerful API</p>
        </motion.div>

        <div className="docs-content">
          <section className="docs-section">
            <h2>Authentication</h2>
            <div className="code-block">
              <div className="code-header">
                <Key size={20} />
                <span>API Key Authentication</span>
              </div>
              <pre>
                <code>{`curl -X GET https://api.yourbrand.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
              </pre>
            </div>
          </section>

          <section className="docs-section">
            <h2>Endpoints</h2>
            <div className="endpoints-grid">
              <div className="endpoint-card">
                <div className="endpoint-icon">
                  <Server size={24} />
                </div>
                <h3>Projects</h3>
                <ul>
                  <li>GET /v1/projects</li>
                  <li>POST /v1/projects</li>
                  <li>GET /v1/projects/{'{id}'}</li>
                  <li>PUT /v1/projects/{'{id}'}</li>
                </ul>
              </div>
              <div className="endpoint-card">
                <div className="endpoint-icon">
                  <Users size={24} />
                </div>
                <h3>Team</h3>
                <ul>
                  <li>GET /v1/team</li>
                  <li>POST /v1/team/invite</li>
                  <li>PUT /v1/team/{'{id}'}</li>
                  <li>DELETE /v1/team/{'{id}'}</li>
                </ul>
              </div>
              <div className="endpoint-card">
                <div className="endpoint-icon">
                  <Zap size={24} />
                </div>
                <h3>Analytics</h3>
                <ul>
                  <li>GET /v1/analytics</li>
                  <li>GET /v1/analytics/project/{'{id}'}</li>
                  <li>GET /v1/analytics/team</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="docs-section">
            <h2>Rate Limits</h2>
            <div className="rate-limits">
              <div className="rate-limit-card">
                <h3>Free Plan</h3>
                <ul>
                  <li>100 requests per minute</li>
                  <li>1,000 requests per hour</li>
                  <li>10,000 requests per day</li>
                </ul>
              </div>
              <div className="rate-limit-card">
                <h3>Pro Plan</h3>
                <ul>
                  <li>1,000 requests per minute</li>
                  <li>10,000 requests per hour</li>
                  <li>100,000 requests per day</li>
                </ul>
              </div>
              <div className="rate-limit-card">
                <h3>Enterprise Plan</h3>
                <ul>
                  <li>Custom rate limits</li>
                  <li>Dedicated support</li>
                  <li>Priority access</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="docs-section">
            <h2>SDKs</h2>
            <div className="sdk-grid">
              <a href="/docs/sdks/javascript" className="sdk-card">
                <Code size={24} />
                <h3>JavaScript</h3>
                <p>npm install @yourbrand/sdk</p>
              </a>
              <a href="/docs/sdks/python" className="sdk-card">
                <Code size={24} />
                <h3>Python</h3>
                <p>pip install yourbrand-sdk</p>
              </a>
              <a href="/docs/sdks/ruby" className="sdk-card">
                <Code size={24} />
                <h3>Ruby</h3>
                <p>gem install yourbrand-sdk</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ApiReference; 