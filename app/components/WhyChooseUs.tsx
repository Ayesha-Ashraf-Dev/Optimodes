'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

interface ListItem {
  id: number;
  text: string;
}

const listItems: ListItem[] = [
  { id: 1, text: 'Modern Website Design & Development' },
  { id: 2, text: 'Custom Scalable Software Solutions' },
  { id: 3, text: 'Results-driven Lead Generation & Automation' },
];

export default function WhyChooseUs() {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const target = 846;
    const startTime = Date.now();

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);
      setClientCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    animateCounter();
  }, []);

  return (
    <section className={styles.chooseUsArea}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Title */}
            <div className={styles.chooseUsContent}>
              <h2 className={styles.mainTitle}>
                Partner with us to grow and scale your digital presence
              </h2>

              {/* Description and List */}
              <div className={styles.descriptionBlock}>
                <p className={styles.description}>
                  We turn your ideas into smart, scalable digital solutions. We believe in providing tailored, high-performing websites and software that drive measurable business results.
                </p>

                {/* List */}
                <ul className={styles.listStyleOne}>
                  {listItems.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expertise Box */}
            <div
              className={styles.expertiseBox}
              style={{
                backgroundImage: 'url(/assets/img/banner/7.jpg)',
              }}
            >
              <div className={styles.expertiseContent}>
                <div className={styles.expertiseLeft}>
                  <h2 className={styles.experienceText}>
                    <strong>6+</strong> Years of experience
                  </h2>
                </div>
                <div className={styles.expertiseRight}>
                  <a
                    href="https://www.youtube.com/watch?v=owhuBrGIOsE"
                    className={styles.videoButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fas fa-play"></i> WATCH PROCESS
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Illustration */}
            <div className={styles.illustrationWrapper}>
              <Image
                src="/assets/img/illustration/6.png"
                alt="Why Choose Us Illustration"
                width={450}
                height={400}
                priority
                className={styles.illustration}
              />

              {/* Decorative Shape */}
              <div className={styles.decorativeShape}>
                <img
                  src="/assets/img/shape/8.png"
                  alt="Decorative Shape"
                  width={200}
                  height={200}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
