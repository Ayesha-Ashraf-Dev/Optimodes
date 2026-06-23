'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

const partnerLogos = [
  { id: 1, src: '/assets/img/logo/1.png', alt: 'Partner 1' },
  { id: 2, src: '/assets/img/logo/2.png', alt: 'Partner 2' },
  { id: 3, src: '/assets/img/logo/7.png', alt: 'Partner 3' },

];

export default function Partners() {
  return (
    <section className={styles.partnersArea}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Partner Map */}
          <div className={styles.leftColumn}>
            <div
              className={styles.partnerMap}
              style={{
                backgroundImage: `url(/assets/img/shape/map.png)`,
              }}
            >
              <h2 className={styles.partnerCount}>50</h2>
              <h4 className={styles.partnerText}>Partners in world wide</h4>
            </div>
          </div>

          {/* Right Column - Partner Logos */}
          <div className={styles.rightColumn}>
            <div className={styles.partnerItems}>
              <ul className={styles.logoList}>
                {partnerLogos.map((partner) => (
                  <li key={partner.id} className={styles.logoItem}>
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      width={100}
                      height={60}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
