import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Briefcase, Users, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';

interface ProjectData {
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  date: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: string;
}

const projectsData: Record<string, ProjectData> = {
  'full-stack-car-marketplace': {
    title: 'Full Stack Car Marketplace Platform',
    category: 'Website Design & Development',
    description: 'A modern automotive marketplace built to connect buyers, sellers, and dealerships through a seamless digital experience. Featuring advanced vehicle search, secure user authentication, auction listings, and a fully responsive design optimized for performance and scalability.',
    image: '/assets/img/gallery/1.png',
    client: 'Arudeal',
    date: 'June 2025',
    role: 'Full-Stack Software Engineer',
    challenge: 'The client needed a comprehensive vehicle marketplace capable of handling thousands of listings, dealer management, auctions, and user interactions while maintaining exceptional performance across desktop and mobile devices. Existing solutions lacked scalability, modern design standards, and intuitive user experiences.',
    solution: 'We engineered a full-stack marketplace platform using a modern React-based architecture with a scalable backend and optimized database structure. The platform includes advanced search and filtering, dealer verification, auction management, secure authentication, responsive mobile experiences, and an intuitive admin dashboard for managing vehicles, users, and marketplace operations.',
    results: [
      'Successfully launched a scalable marketplace supporting 10,000+ vehicle listings',
      'Reduced page load times by over 65% through performance optimization techniques',
      'Achieved a fully responsive experience across desktop, tablet, and mobile devices',
      'Improved user engagement with advanced search filters and personalized recommendations',
      'Enabled seamless dealer onboarding and vehicle inventory management'
    ],
    metrics: '10,000+ Active Vehicle Listings'
  },
  '1h1n-decentralized-network': {
    title: '1H1N – One Human One Node Network',
    category: 'Web Platform Design & Development',
    description: 'A modern decentralized network platform designed to empower individuals to create, run, and participate in decentralized applications through a unique one-human-one-node consensus model. The platform combines intuitive onboarding, node management, real-time network statistics, application discovery, and a seamless user experience focused on accessibility, transparency, and scalability.',
    image: '/assets/img/gallery/3.png',
    client: '1H1N Network',
    date: '2026',
    role: 'Full-Stack Software Engineer & UI/UX Developer',
    challenge: 'The goal was to create a professional digital platform that communicates a complex decentralized infrastructure in a simple and accessible way. The network required a seamless onboarding experience for node operators, clear presentation of consensus mechanisms, application discovery, cross-platform node distribution, and a modern interface capable of building trust among both technical and non-technical users.',
    solution: 'We designed and developed a high-performance web platform featuring a modern responsive interface, node download and management workflows, real-time network metrics, decentralized application discovery, and educational onboarding experiences. The platform emphasizes usability, performance, and scalability while visually representing the network\'s human-centric consensus architecture through clean design, intuitive navigation, and optimized user journeys.',
    results: [
      'Delivered a complete decentralized network platform with modern UI/UX',
      'Created a streamlined node onboarding process for Windows, macOS, and Linux users',
      'Improved accessibility by simplifying complex blockchain and consensus concepts',
      'Implemented responsive design ensuring seamless experiences across all devices',
      'Established a scalable foundation for decentralized application discovery and ecosystem growth',
      'Enhanced user engagement through real-time network statistics and intuitive navigation'
    ],
    metrics: '28+ Active Nodes • 99.8% Network Uptime'
  },
  'teamloom-hrms': {
    title: 'TeamLoom HRMS Platform',
    category: 'Enterprise SaaS Solutions',
    description: 'A full-stack Human Resource Management System designed to streamline employee operations, including attendance tracking, payroll processing, leave management, and organizational reporting through a centralized admin dashboard.',
    image: '/assets/img/gallery/2.png',
    client: 'Internal / Portfolio Project',
    date: 'June 2026',
    role: 'Full-Stack Software Engineer',
    challenge: 'HR teams were relying on fragmented tools and manual spreadsheets to manage employee data, attendance, and payroll, leading to inefficiencies, data inconsistency, and delayed reporting.',
    solution: 'Developed a scalable MERN-based HRMS platform with secure authentication, role-based access control, and a responsive admin dashboard. Implemented modules for employee management, attendance tracking with analytics, leave approval workflows, and automated payroll processing.',
    results: [
      'Centralized all HR operations into a single unified platform',
      'Reduced manual administrative workload by 40%',
      'Improved accuracy and accessibility of employee data in real-time'
    ],
    metrics: '40% Reduction in Administrative Workload'
  },
  'zk-data-clouds': {
    title: 'ZK Data Clouds Platform',
    category: 'Cybersecurity & Privacy Technology',
    description: 'A modern privacy-first cloud platform leveraging zero-knowledge architecture, decentralized infrastructure, and end-to-end encryption to ensure secure, GDPR-compliant data processing and storage.',
    image: '/assets/img/gallery/4.png',
    client: 'ZK Data Clouds',
    date: 'January 2026',
    role: 'Full-Stack Developer & UI/UX Designer',
    challenge: 'Organizations handling sensitive user data needed a secure, privacy-focused cloud solution that could meet strict GDPR requirements while maintaining scalability, usability, and enterprise-grade performance.',
    solution: 'Designed and developed a complete SaaS platform featuring a modern landing page, authentication system, secure contact and lead generation workflows, GDPR-focused messaging, and responsive UI components. The platform highlights zero-knowledge proofs, decentralized cloud infrastructure, encrypted data storage, and privacy-preserving analytics through a conversion-focused user experience.',
    results: [
      'Created a professional enterprise-grade cybersecurity brand presence',
      'Delivered a fully responsive user experience across desktop and mobile devices',
      'Improved user trust through privacy-focused design and security messaging',
      'Implemented scalable architecture suitable for future SaaS expansion'
    ],
    metrics: '100% GDPR-Compliant Platform'
  },
  'operations-automation': {
    title: 'Operations Automation Pipeline',
    category: 'Business Automation',
    description: 'A complex enterprise business automation pipeline that links communication channels, payment systems, and internal CRM logs to automate workflow tasks.',
    image: '/assets/img/gallery/4.png',
    client: 'Logix Logistics',
    date: 'May 2026',
    role: 'Automation & Operations Consultant',
    challenge: 'Logix staff spent hours daily copy-pasting delivery updates, invoices, and payment receipts from three different software systems. Manual typos caused shipment delays and customer friction.',
    solution: 'We built automation workflows using custom webhooks and third-party APIs. When a payment triggers in Stripe, client logs automatically generate in the CRM, and logistics delivery alerts post directly to dispatch channels.',
    results: [
      'Manual copy-paste operations reduced by 95%',
      'Typos and shipment dispatch delays eliminated entirely',
      'Saved an average of 25 hours per employee monthly'
    ],
    metrics: '25 Hours Saved per Employee'
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#fafafa',
      fontFamily: 'var(--font-default)',
      color: '#1a1a1a'
    }}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hover-lift {
          transition: all 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }
        
        .badge {
          display: inline-block;
          padding: 4px 14px;
          background: #f0f0f0;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: #555;
          letter-spacing: 0.3px;
        }
        
        .card {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px;
          border: 1px solid #eaeaea;
          transition: all 0.2s ease;
        }
        .cta-primary-link {
  box-shadow: 0 8px 20px rgba(24, 0, 173, 0.15);
  transition: box-shadow 0.2s ease;
}

.cta-primary-link:hover {
  box-shadow: 0 12px 30px rgba(24, 0, 173, 0.25);
}
        .divider {
          height: 1px;
          background: #eaeaea;
          margin: 40px 0;
        }
        
        @media (max-width: 768px) {
          .card {
            padding: 24px;
          }
          .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .flex-wrap {
            flex-direction: column;
            align-items: stretch !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        background: '#ffffff',
        padding: '60px 20px 50px 20px',
        borderBottom: '1px solid #eaeaea'
      }}>
        <div className="container">
          <Link href="/projects" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#666',
            textDecoration: 'none',
            fontSize: '14px',
            marginBottom: '30px',
            transition: 'color 0.2s ease'
          }}>
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div style={{ marginBottom: '8px' }}>
            <span className="badge">{project.category}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: '600',
            margin: '16px 0 12px 0',
            color: '#1a1a1a',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 1.1vw, 18px)',
            maxWidth: '680px',
            color: '#555',
            lineHeight: '1.7',
            margin: '0 0 24px 0'
          }}>
            {project.description}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            paddingTop: '16px',
            borderTop: '1px solid #f0f0f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={16} color="#888" />
              <span style={{ fontSize: '14px', color: '#888' }}>Role:</span>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{project.role}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="#888" />
              <span style={{ fontSize: '14px', color: '#888' }}>Date:</span>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{project.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={16} color="#888" />
              <span style={{ fontSize: '14px', color: '#888' }}>Client:</span>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '50px 20px 60px 20px' }}>
        <div className="container">

          {/* Key Metric */}
          <div style={{
            background: '#f8f8f8',
            borderRadius: '10px',
            padding: '20px 28px',
            marginBottom: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: '#e8e8e8',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TrendingUp size={20} color="#444" />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  Key Impact
                </div>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a' }}>
                  {project.metrics}
                </div>
              </div>
            </div>
            <Link href="/#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
              color: '#ffffff',
              fontWeight: '500',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(24, 0, 173, 0.2)'
            }}>
              Discuss Your Project
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }} className="grid-2">

            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Challenge */}
              <div className="card hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Target size={18} color="#555" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>The Challenge</h3>
                </div>
                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="card hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Lightbulb size={18} color="#555" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>The Solution</h3>
                </div>
                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Image */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #eaeaea',
                background: '#fafafa'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Results */}
              <div className="card hover-lift">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle size={18} color="#555" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>Key Results</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {project.results.map((result, index) => (
                    <li key={index} style={{
                      fontSize: '14px',
                      color: '#444',
                      lineHeight: '1.6',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <span style={{
                        color: '#1a1a1a',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '1',
                        flexShrink: 0,
                        marginTop: '1px'
                      }}>—</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #eaeaea',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#1a1a1a',
            letterSpacing: '-0.01em'
          }}>
            Ready to achieve similar results?
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.7',
            marginBottom: '32px'
          }}>
            Let's discuss your project and how we can help you build a solution that drives real business growth.
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/#contact" className="cta-primary-link" style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '14px 36px',
  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  color: '#ffffff',
  fontWeight: '500',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '15px',
  transition: 'all 0.2s ease'
}}>
  Start a Project
</Link>
            <Link href="/projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 36px',
              background: 'transparent',
              color: '#1a1a1a',
              border: '1px solid #d0d0d0',
              fontWeight: '500',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
              transition: 'all 0.2s ease'
            }}>
              View All Projects
              <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'full-stack-car-marketplace' },
    { slug: '1h1n-decentralized-network' },
    { slug: 'teamloom-hrms' },
    { slug: 'zk-data-clouds' },
    { slug: 'operations-automation' }
  ];
}