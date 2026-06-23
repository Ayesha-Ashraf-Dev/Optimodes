'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './FunFactor.module.css';

interface StatCardProps {
  number: number;
  text: string;
  suffix?: string;
  divisor?: number;
}

const StatCard = ({ number, text, suffix = '', divisor = 1 }: StatCardProps) => {
  const displayNumber = Math.floor(number / divisor);
  return (
    <div className={styles.statCard}>
      <div className={styles.statNumber}>
        {displayNumber.toLocaleString()}
        {suffix}
      </div>
      <div className={styles.statText}>{text}</div>
    </div>
  );
};

const FunFactor = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    ongoing: 0,
  });
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounter = () => {
      const duration = 2000;
      const startTime = Date.now();
      // Use large internal targets so all counters animate at fast, visible speed
      const targets = {
        clients: 200000,  
        projects: 9900,  
        ongoing: 1500,   
      };

      const animate = () => {
        const currentTime = Date.now();
        // ease-out cubic for smoother deceleration
        const t = Math.min((currentTime - startTime) / duration, 1);
        const progress = 1 - Math.pow(1 - t, 3);

        setStats({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          ongoing: Math.floor(targets.ongoing * progress),
        });

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          setStats({ clients: targets.clients, projects: targets.projects, ongoing: targets.ongoing });
        }
      };

      animate();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.funFactorArea}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          <StatCard number={stats.clients}  text="Happy Clients"       suffix="+" divisor={1000} />
          <StatCard number={stats.projects} text="Successful Projects"  suffix="%" divisor={100}  />
          <StatCard number={stats.ongoing}  text="Ongoing Projects"     suffix="+" divisor={100}  />
        </div>
      </div>
    </section>
  );
};

export default FunFactor;
