'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Professional Website',
        'Mobile Responsive Design',
        'Basic SEO Optimization',
        '3 Months Support',
        'SSL Certificate',
        '5 Email Accounts'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced SEO & Analytics',
        'E-commerce Integration',
        'Custom Plugins',
        '12 Months Support',
        'Performance Optimization',
        '50 Email Accounts'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Everything in Professional',
        'Custom Software Development',
        'API Integration',
        'Dedicated Account Manager',
        'Priority 24/7 Support',
        'Unlimited Email Accounts',
        'Custom Training & Consultation'
      ],
      highlighted: false
    }
  ];

  const faqs = [
    { q: 'What\'s included in the support?', a: 'Our support includes bug fixes, updates, and technical assistance. Enterprise plans include dedicated support managers.' },
    { q: 'Can I upgrade or downgrade my plan?', a: 'Yes! You can upgrade or downgrade at any time. We\'ll adjust billing accordingly.' },
    { q: 'Do you offer custom packages?', a: 'Absolutely. Contact us to discuss your specific needs and we\'ll create a tailored solution.' }
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#fafafa', fontFamily: 'var(--font-default)', color: '#1a1a1a' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        padding: '60px 20px 80px 20px',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>Plans & Pricing</h1>
          <p style={{ fontSize: '16px', maxWidth: '650px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.6', fontWeight: '400' }}>
            Transparent pricing designed to scale with your business
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: plan.highlighted ? '2px solid var(--color-primary)' : '1px solid #eaeaea',
                borderRadius: '12px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative',
                transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(24, 0, 173, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  color: '#ffffff',
                  padding: '4px 16px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.5px'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-heading)' }}>{plan.name}</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', margin: 0 }}>{plan.description}</p>
              
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontSize: '42px', fontWeight: '700', color: 'var(--color-primary)' }}>{plan.price}</span>
                {plan.price !== 'Custom' && <span style={{ fontSize: '14px', color: '#888', marginLeft: '8px' }}>/project</span>}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#555', fontWeight: '500' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/#contact" style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: plan.highlighted ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' : 'transparent',
                color: plan.highlighted ? '#ffffff' : 'var(--color-primary)',
                border: plan.highlighted ? 'none' : '2px solid var(--color-primary)',
                fontWeight: '600',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                fontSize: '15px',
                boxShadow: plan.highlighted ? '0 4px 15px rgba(24, 0, 173, 0.2)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(24, 0, 173, 0.3)';
                } else {
                  e.currentTarget.style.background = 'rgba(24, 0, 173, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (plan.highlighted) {
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(24, 0, 173, 0.2)';
                } else {
                  e.currentTarget.style.background = 'transparent';
                }
              }}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 20px', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', color: 'var(--color-heading)', textAlign: 'center', letterSpacing: '-0.5px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                style={{
                  background: '#fafafa',
                  border: '1px solid #eaeaea',
                  borderRadius: '12px',
                  padding: '20px 28px',
                  cursor: 'pointer'
                }}
              >
                <summary style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--color-heading)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  userSelect: 'none'
                }}>
                  {faq.q}
                  <span style={{ marginLeft: '12px', flexShrink: 0 }}>▼</span>
                </summary>
                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginTop: '16px', marginBottom: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#ffffff',
        padding: '100px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.04)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', fontWeight: '400' }}>
            Choose your plan and let's transform your business today.
          </p>
          <Link href="/#contact" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 8px 20px rgba(24, 0, 173, 0.15)',
            transition: 'all 0.3s ease',
            fontSize: '15px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(24, 0, 173, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(24, 0, 173, 0.15)';
          }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
