'use client';

import Image from 'next/image';
import styles from './About.module.css';

interface AboutItem {
  id: number;
  number: string;
  title: string;
  description: string;
  delay: string;
}

const aboutItems: AboutItem[] = [
  {
    id: 1,
    number: '01',
    title: 'Website Design & Development',
    description:
      'We create visually stunning, user-friendly, and fully responsive websites optimized for performance, conversions, and search engines.',
    delay: '0ms',
  },
  {
    id: 2,
    number: '02',
    title: 'Custom Software Solutions',
    description:
      'We develop scalable, secure, and efficient software tailored to your business needs, from web apps to CRM systems.',
    delay: '500ms',
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutArea}>
      {/* Decorative shape */}
      <div className={styles.decorativeShape}>
        <img src="/assets/img/shape/10.png" alt="Decorative shape" width={150} height={150} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Images */}
          <div className={styles.leftColumn}>
            <div className={styles.imageWrapper}>
              {/* Background image */}
              <div className={styles.imageContainer}>
                <img
                  src="/assets/img/about/5.jpg"
                  alt="Team working"
                  width={400}
                  height={450}
                  className={styles.backgroundImage}
                />
                {/* Foreground image */}
                <img
                  src="/assets/img/about/6.jpg"
                  alt="Team collaboration"
                  width={350}
                  height={400}
                  className={styles.foregroundImage}
                />
              </div>

              {/* Certification Badge */}
              <div className={styles.certificationBadge}>
                <div className={styles.certIcon}>
                  <img src="/assets/img/icon/10.png" alt="Certification" width={40} height={40} />
                </div>
                <h4 className={styles.certText}>Certified Company</h4>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.rightColumn}>
            <div className={styles.aboutContent}>
              <h4 className={styles.subTitle}>About Optimodes</h4>
              <h2 className={styles.mainTitle}>
                <span className={styles.titleLine}>Transform Your</span>
                <span className={styles.titleLine}>Business with Smart</span>
                <span className={styles.titleLine}>Digital Solutions</span>
              </h2>
              <p className={styles.missionText}>
                We help businesses grow, scale, and stay ahead in today's competitive digital landscape through modern, 
                high-performing websites, powerful software solutions, and results-driven lead generation systems. Our mission 
                is simple: to turn your ideas into smart, scalable digital solutions that not only look great but also deliver 
                measurable business results.
              </p>

              {/* About Items List */}
              <div className={styles.itemsList}>
                {aboutItems.map((item) => (
                  <div
                    key={item.id}
                    className={styles.listItem}
                    style={{ '--delay': item.delay } as React.CSSProperties}
                  >
                    <div className={styles.itemNumber}>{item.number}</div>
                    <div className={styles.itemInfo}>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.itemDescription}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
