'use client';

import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions that give our clients competitive advantages.'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards of quality in every project, ensuring robust, scalable, and secure deliverables.'
    },
    {
      title: 'Partnership',
      description: 'We treat our clients as partners, working collaboratively to understand their unique needs and exceed expectations.'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust through consistent, ethical business practices.'
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
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>About Optimodes</h1>
          <p style={{ fontSize: '16px', maxWidth: '650px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.6', fontWeight: '400' }}>
            Transforming businesses through innovative digital solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Our Story</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
              Optimodes was founded with a mission to help businesses thrive in the digital age. We combine strategic thinking, 
              creative expertise, and technical excellence to deliver solutions that drive real, measurable results.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8' }}>
              Since our inception, we've partnered with hundreds of companies across industries, helping them streamline operations, 
              reach new customers, and achieve sustainable growth.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Our Vision</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
              To be the trusted digital partner that empowers businesses of all sizes to compete globally and achieve their ambitions 
              through innovative technology solutions.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8' }}>
              We believe in building long-term relationships based on transparency, expertise, and a genuine commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 20px', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '60px', color: 'var(--color-heading)', textAlign: 'center', letterSpacing: '-0.5px' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            {values.map((value, idx) => (
              <div 
                key={idx} 
                style={{
                  background: '#fafafa',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #eaeaea',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--color-primary)' }}>{value.title}</h3>
                <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', margin: 0 }}>{value.description}</p>
              </div>
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
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', fontWeight: '400' }}>
            Let's work together to achieve your goals.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
