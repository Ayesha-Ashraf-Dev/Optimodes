'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Optimodes offer?',
      answer: 'We provide website design & development, custom software solutions, lead generation systems, and business automation services tailored to help your business grow and scale.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while custom software solutions may take 2-4 months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All our projects come with post-launch support. We offer various support packages ranging from 3 months to indefinite support, depending on your needs.'
    },
    {
      question: 'Can you help with an existing project?',
      answer: 'Absolutely. We can audit, improve, or completely redesign existing projects. Our team can also take over maintenance and optimization of your current systems.'
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We use modern, industry-standard technologies including Next.js, React, Node.js, Python, and cloud platforms like AWS and Google Cloud. We choose the best tech for each project\'s requirements.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow strict quality assurance protocols, conduct thorough testing, perform code reviews, and maintain industry best practices. Your satisfaction is our priority.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing options including fixed-price projects, time & materials, and retainer models. We provide transparent quotes with no hidden costs.'
    },
    {
      question: 'How do we stay updated on project progress?',
      answer: 'We provide regular updates through weekly reports, scheduled calls, and our project management dashboard. You have full visibility into your project at every stage.'
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, we take confidentiality seriously and are happy to sign NDAs to protect your intellectual property and business information.'
    }
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
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '16px', maxWidth: '650px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.6', fontWeight: '400' }}>
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #eaeaea',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px 28px',
                  background: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--color-heading)',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8f8f8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                }}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }} 
                />
              </button>
              {openIndex === idx && (
                <div style={{
                  padding: '0 28px 20px 28px',
                  borderTop: '1px solid #eaeaea',
                  background: '#fafafa'
                }}>
                  <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        background: '#ffffff',
        padding: '100px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.04)'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Didn't find your answer?</h2>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', fontWeight: '400' }}>
            Get in touch with our team for personalized assistance.
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
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
