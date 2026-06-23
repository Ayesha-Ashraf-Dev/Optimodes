'use client';

import { useRouter } from 'next/navigation';

const projects = [
  {
    title: 'Full Stack Car Marketplace Platform',
    slug: 'full-stack-car-marketplace',
    category: 'Website Design & Development',
    description: 'A modern automotive marketplace built to connect buyers, sellers, and dealerships through a seamless digital experience. Featuring advanced vehicle search, secure user authentication, auction listings, and a fully responsive design optimized for performance and scalability.',
    image: '/assets/img/gallery/1.png',
    metrics: '10,000+ Active Vehicle Listings'
  },
  {
    title: '1H1N – One Human One Node Network',
    slug: '1h1n-decentralized-network',
    category: 'Web Platform Design & Development',
    description: 'A modern decentralized network platform designed to empower individuals to create, run, and participate in decentralized applications through a unique one-human-one-node consensus model. The platform combines intuitive onboarding, node management, real-time network statistics, and seamless user experience.',
    image: '/assets/img/gallery/3.png',
    metrics: '28+ Active Nodes • 99.8% Network Uptime'
  },
  {
    title: 'TeamLoom HRMS Platform',
    slug: 'teamloom-hrms',
    category: 'Enterprise SaaS Solutions',
    description: 'A full-stack Human Resource Management System designed to streamline employee operations, including attendance tracking, payroll processing, leave management, and organizational reporting through a centralized admin dashboard.',
    image: '/assets/img/gallery/2.png',
    metrics: '40% Reduction in Administrative Workload'
  },
  {
    title: 'ZK Data Clouds Platform',
    slug: 'zk-data-clouds',
    category: 'Cybersecurity & Privacy Technology',
    description: 'A modern privacy-first cloud platform leveraging zero-knowledge architecture, decentralized infrastructure, and end-to-end encryption to ensure secure, GDPR-compliant data processing and storage.',
    image: '/assets/img/gallery/4.png',
    metrics: '100% GDPR-Compliant Platform'
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: '100vh', background: '#fafbfc', fontFamily: 'var(--font-default)' }}>
      <style>{`
        .project-card {
          display: grid;
          gap: 60px;
          align-items: center;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }
        .project-card:hover {
          opacity: 0.95;
        }
        .project-image img {
          transition: transform 0.6s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: #ffffff;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(24, 0, 173, 0.15);
          transition: all 0.3s ease;
          font-size: 15px;
          cursor: pointer;
          border: none;
        }
        .cta-button:hover {
          box-shadow: 0 12px 30px rgba(24, 0, 173, 0.25);
        }
      `}</style>

      {/* Banner Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        padding: '60px 20px 80px 20px',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>Our Projects</h1>
          <p style={{ fontSize: '16px', maxWidth: '650px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.6', fontWeight: '400' }}>
            Discover real-world solutions we've built for ambitious companies. Each project represents our commitment to excellence and measurable results.
          </p>
          <div style={{ fontSize: '13px', fontWeight: '500', opacity: 0.85 }}>
            <a href="/" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px' }}>Home</a> <span style={{ margin: '0 10px' }}>→</span> <span>Projects</span>
          </div>
        </div>
      </section>

      {/* Projects List Section */}
      <section style={{ padding: '100px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              }}
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              {/* Image - alternates position */}
              <div className="project-image" style={{
                order: index % 2 === 0 ? 2 : 1,
                position: 'relative',
                height: '380px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%)',
                  pointerEvents: 'none'
                }}></div>
              </div>

              {/* Content */}
              <div style={{
                order: index % 2 === 0 ? 1 : 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: 'rgba(156, 0, 255, 0.08)',
                  color: 'var(--color-secondary)',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  width: 'fit-content',
                  letterSpacing: '0.3px'
                }}>
                  {project.category}
                </div>

                <h3 style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  marginBottom: '16px', 
                  color: 'var(--color-heading)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px'
                }}>
                  {project.title}
                </h3>

                <p style={{ 
                  fontSize: '15px', 
                  color: '#666666', 
                  lineHeight: '1.8', 
                  marginBottom: '24px',
                  fontWeight: '400'
                }}>
                  {project.description}
                </p>
                
                {/* Metric box */}
                <div style={{
                  background: '#ffffff',
                  border: '1px solid rgba(156, 0, 255, 0.15)',
                  borderLeft: '3px solid var(--color-secondary)',
                  padding: '16px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--color-secondary)',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '18px' }}>📈</span>
                  <span>Result: {project.metrics}</span>
                </div>

                {/* CTA Link */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  <span>View Details</span>
                  <span style={{ fontSize: '16px' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#ffffff',
        padding: '100px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.04)',
        marginTop: '80px'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Ready to Build Something Great?</h2>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', fontWeight: '400' }}>
            Whether you're looking to automate operations, scale your platform, or grow revenue, we're here to bring your vision to life with cutting-edge technology and proven strategies.
          </p>
          <div
            className="cta-button"
            onClick={() => window.location.href = '/#contact'}
          >
            Start Your Project
          </div>
        </div>
      </section>
    </main>
  );
}
