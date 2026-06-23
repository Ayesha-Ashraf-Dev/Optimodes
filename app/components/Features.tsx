'use client';

import Image from 'next/image';
import styles from './Features.module.css';

interface FeatureCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    icon: '/assets/img/icon/5.png',
    title: 'Digital Transformation',
    description:
      'We turn your complex business challenges into simple, elegant, and high-performing digital solutions designed to deliver real growth.',
    delay: '0ms',
  },
  {
    id: 2,
    icon: '/assets/img/icon/6.png',
    title: 'Optimized Performance',
    description:
      'Our websites and custom software are built with speed, scalability, and security at their core to ensure long-term stability.',
    delay: '300ms',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.featuresArea}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Heading and Stats */}
          <div className={styles.leftColumn}>
            <div className={styles.heading}>
              <div className={styles.arrowShape}>
                <img src="/assets/img/shape/21.png" alt="Arrow shape" width={150} height={150} />
              </div>
              <h2 className={styles.title}>
                <span className={styles.titleLine}>Discover Innovative</span>
                <span className={styles.titleLine}>Digital Solutions</span>
              </h2>
              <div className={styles.description}>
                <p>
                  We focus on turning your ideas into smart, scalable digital solutions. By using an iterative, 
                  performance-driven development approach, we ensure your product aligns perfectly with your 
                  business goals and user needs.
                </p>
                {/* <div className={styles.statCard}>
                  <h3 className={styles.statAmount}>$3 Million</h3>
                  <p className={styles.statText}>In value due to increased team productivity</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className={styles.rightColumn}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard} style={{ '--delay': feature.delay } as React.CSSProperties}>
                <div className={styles.iconWrapper}>
                  <img src={feature.icon} alt={feature.title} width={60} height={60} />
                </div>
                <div className={styles.featureInfo}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
