'use client';

import Link from 'next/link';

const services = [
  {
    title: 'Website Design & Development',
    slug: 'website-design-development',
    description: 'Visually stunning, user-friendly, fully responsive websites optimized for performance, conversions, and SEO — from landing pages to full-scale business websites.',
    icon: '💻',
    features: [
      'Custom Responsive Design',
      'SEO & Performance Optimization',
      'E-commerce & CMS Integration',
      'Speed & Security Best Practices'
    ]
  },
  {
    title: 'Custom Software Solutions',
    slug: 'custom-software-solutions',
    description: 'Scalable, secure, efficient software (web apps, CRMs, dashboards, internal systems) built to streamline operations and improve productivity.',
    icon: '⚙️',
    features: [
      'Tailored Web Applications',
      'CRM & ERP Development',
      'API & Database Design',
      'Automated Testing & Security'
    ]
  },
  {
    title: 'Lead Generation Systems',
    slug: 'lead-generation-systems',
    description: 'High-converting funnels and automated systems that attract, capture, and nurture leads, delivering consistent, qualified prospects.',
    icon: '🚀',
    features: [
      'High-converting Landing Pages',
      'Email Marketing Automation',
      'Analytics & Conversion Tracking',
      'A/B Testing & Funnel Tuning'
    ]
  },
  {
    title: 'Business Automation',
    slug: 'business-automation',
    description: 'Workflow automation and tool/platform integrations to reduce manual work and optimize business operations.',
    icon: '⚡',
    features: [
      'App Integration (Zapier, Make)',
      'Automated Data Workflows',
      'Internal Operation Automations',
      'AI & Bot Integrations'
    ]
  }
];

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8f9fa', fontFamily: 'var(--font-default)' }}>
      {/* Banner Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        padding: '50px 20px 80px 20px',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', color: '#ffffff' }}>Our Services</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
            We provide tailored digital solutions designed to help your business grow, scale, and thrive in today's competitive landscape.
          </p>
          <div style={{ fontSize: '14px', fontWeight: '500', opacity: 0.8 }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link> &nbsp;»&nbsp; <span>Services</span>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(19, 81, 216, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            }}>
              <div>
                {/* Icon */}
                <div style={{
                  fontSize: '40px',
                  background: 'rgba(24, 0, 173, 0.05)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  color: 'var(--color-primary)'
                }}>
                  {service.icon}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: 'var(--color-heading)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-paragraph)', lineHeight: '1.7', marginBottom: '25px' }}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0' }}>
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '14px', color: 'var(--color-paragraph)', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: 'var(--color-primary)', marginRight: '10px', fontWeight: 'bold' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link href={service.slug ? `/services/${service.slug}` : '/services'} style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '12px 25px',
                background: 'var(--color-primary)',
                color: '#ffffff',
                fontWeight: '600',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)';
              }}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#ffffff',
        padding: '80px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)' }}>Ready to Grow Your Business?</h2>
          <p style={{ fontSize: '16px', color: 'var(--color-paragraph)', lineHeight: '1.7', marginBottom: '30px' }}>
            Get in touch with our team today to get a free consultation and learn how our custom digital solutions can optimize your operations and increase your revenue.
          </p>
          <Link href="/#contact" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '50px',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(24, 0, 173, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}
