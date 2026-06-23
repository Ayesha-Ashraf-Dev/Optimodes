import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceData {
  title: string;
  description: string;
  longText: string;
  icon: string;
  image: string;
  deliverables: string[];
  results: string;
}

const servicesData: Record<string, ServiceData> = {
  'website-design-development': {
    title: 'Website Design & Development',
    description: 'Visually stunning, user-friendly, fully responsive websites optimized for performance, conversions, and SEO.',
    longText: 'We build websites that do more than just look good. We build custom websites that convert visitors into customers, load in milliseconds, and rank highly on Google. From high-converting landing pages to complex corporate portals, we handle design, coding, performance optimizations, and integrations from start to finish.',
    icon: '💻',
    image: '/assets/img/service/1.jpg',
    deliverables: [
      'Custom UI/UX Design (designed to match your brand identity)',
      'Mobile-First responsive development (runs perfectly on all devices)',
      'Core Web Vitals optimization (super fast load times and smooth scrolling)',
      'Advanced SEO structures & schema metadata setups',
      'Modern headless & JAMstack architectures (Next.js, React)',
      'E-commerce integrations (Shopify, WooCommerce, Stripe)'
    ],
    results: '80%+ increase in website performance scores and an average 35% growth in conversion rates.'
  },
  'custom-software-solutions': {
    title: 'Custom Software Solutions',
    description: 'Scalable, secure, efficient software built to streamline operations and improve productivity.',
    longText: 'Off-the-shelf software often leaves you compromised or struggling to fit your workflows into their rigid templates. We build custom software tailored exactly to your operations. Whether you need a web app, custom CRM, dashboard, or internal operational tools, we provide scalable, secure solutions that grow with your company.',
    icon: '⚙️',
    image: '/assets/img/service/3.jpg',
    deliverables: [
      'Tailored Web Applications & Software Solutions',
      'Custom CRMs, Client Portals, and Dashboards',
      'Robust API architectures & third-party integrations',
      'Secure database design & cloud hosting management',
      'Enterprise security best practices (SSO, role-based access control)',
      'Custom reporting modules & business intelligence tools'
    ],
    results: 'Average 40% reduction in employee time spent on administration and zero licensing overhead.'
  },
  'lead-generation-systems': {
    title: 'Lead Generation Systems',
    description: 'High-converting funnels and automated systems that attract, capture, and nurture leads.',
    longText: 'A website is useless if it does not bring in qualified business. Our lead generation systems combine marketing psychology with workflow automation to attract prospects, capture their details, and nurture them into qualified clients. We build the pages, write the email sequences, and connect the pipes so you get a predictable lead flow.',
    icon: '🚀',
    image: '/assets/img/service/2.jpg',
    deliverables: [
      'Conversion-focused landing pages & sales funnels',
      'Automated email drip sequences & lead magnets',
      'Analytics, tracking pixels, and conversion tracking setup',
      'Multi-channel lead capture pipelines',
      'A/B testing implementation & analysis',
      'Automated booking and calendar scheduler integrations'
    ],
    results: 'Clients report an average 3.2x increase in qualified weekly prospects within 90 days.'
  },
  'business-automation': {
    title: 'Business Automation',
    description: 'Workflow automation and tool integrations to reduce manual work and optimize operations.',
    longText: "Your team shouldn't be wasting hours copying and pasting data between systems or manually sending follow-ups. We build automation pipelines that connect all your software platforms, automate redundant tasks, and streamline operations. From Zapier/Make integrations to custom AI bots, we make your business run like clockwork.",
    icon: '⚡',
    image: '/assets/img/gallery/4.jpg',
    deliverables: [
      'Tool & Platform Integrations (CRM, Email, Billing, Slack, etc.)',
      'Automated data sync pipelines & reporting',
      'Automated invoicing, payroll, and receipt matching',
      'AI assistant integrations & customer support chatbots',
      'Custom workflow scripting & webhook configurations',
      'Employee training & workflow documentation'
    ],
    results: 'On average, our clients save 25+ hours of manual labor per employee each month.'
  }
};

// Generate static params for static site generation support in Next.js
export async function generateStaticParams() {
  return [
    { slug: 'website-design-development' },
    { slug: 'custom-software-solutions' },
    { slug: 'lead-generation-systems' },
    { slug: 'business-automation' }
  ];
}

// Use the params prop directly instead of useParams()
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

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
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#ffffff', letterSpacing: '-0.5px' }}>{service.title}</h1>
          <p style={{ fontSize: '16px', maxWidth: '650px', margin: '0 auto 20px auto', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.6', fontWeight: '400' }}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
          {/* Left Side - Overview */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid #eaeaea',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>{service.icon}</div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--color-heading)' }}>Overview</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8', marginBottom: '28px' }}>
              {service.longText}
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Impact</h3>
            <div style={{
              background: 'rgba(156, 0, 255, 0.08)',
              border: '1px solid rgba(156, 0, 255, 0.15)',
              borderLeft: '3px solid var(--color-secondary)',
              padding: '16px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--color-secondary)',
              lineHeight: '1.6'
            }}>
              📈 {service.results}
            </div>
          </div>

          {/* Right Side - Deliverables */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
            border: '1px solid #eaeaea',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px', color: 'var(--color-heading)' }}>What We Deliver</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {service.deliverables.map((item, index) => (
                <li key={index} style={{
                  fontSize: '14px',
                  color: '#444',
                  lineHeight: '1.6',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <span style={{
                    color: 'var(--color-primary)',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '1',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
          <h2 style={{ fontSize: '40px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-heading)', letterSpacing: '-0.5px' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.8', marginBottom: '40px', fontWeight: '400' }}>
            Get in touch with our team to discuss your business requirements and receive a customized implementation plan.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Book a Consultation
            </Link>
            <Link href="/services" style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: 'transparent',
              color: 'var(--color-primary)',
              border: '2px solid var(--color-primary)',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '15px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(24, 0, 173, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}>
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}