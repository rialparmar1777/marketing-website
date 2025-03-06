import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      price: {
        monthly: '$29',
        annual: '$24'
      },
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
      price: {
        monthly: '$79',
        annual: '$64'
      },
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
      price: {
        monthly: 'Custom',
        annual: 'Custom'
      },
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

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </motion.p>
      </div>

      <motion.div
        className="billing-toggle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
        <button
          className={`toggle-button ${billingCycle === 'annual' ? 'active' : ''}`}
          onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
        >
          <span className="toggle-slider"></span>
        </button>
        <span className={billingCycle === 'annual' ? 'active' : ''}>Annual</span>
      </motion.div>

      <motion.div
        className="special-offer-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Zap size={20} />
        <div>
          <strong>{specialOffer.title}</strong>
          <p>{specialOffer.description}</p>
        </div>
        <span className="offer-code">{specialOffer.code}</span>
      </motion.div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.value}
            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
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
            <div className="pricing-card-price">
              <div className="price">{plan.price[billingCycle]}</div>
              <div className="period">{plan.period}</div>
            </div>
            <div className="savings">{plan.savings}</div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * featureIndex }}
                >
                  <Check size={16} />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="pricing-card-highlight">
              <Zap size={16} />
              {plan.highlight}
            </div>
            <motion.button
              className="choose-plan-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose {plan.name}
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="pricing-guarantees"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="guarantee-item">
          <Shield size={20} />
          <span>30-day money-back guarantee</span>
        </div>
        <div className="guarantee-item">
          <Clock size={20} />
          <span>Instant setup</span>
        </div>
        <div className="guarantee-item">
          <CreditCard size={20} />
          <span>No credit card required</span>
        </div>
      </motion.div>

      <motion.div
        className="pricing-faq"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a contract?</h3>
            <p>No long-term contracts required. You can cancel your subscription at any time.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;