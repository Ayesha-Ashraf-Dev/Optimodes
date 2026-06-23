'use client';

import styles from './career.module.css';
type Position = {
  title: string;
  location: string;
  type: string;
  description: string;
};
export default function Career() {
  const openPositions: Position[] = [];

  return (
    <main className={styles.careerPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Join Our Team</h1>
          <p className={styles.heroSubtitle}>
            Help us transform businesses with innovative digital solutions
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <h2>Why Work With Us?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <i className="fas fa-star"></i>
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career advancement in a dynamic tech environment.</p>
            </div>
            <div className={styles.benefit}>
              <i className="fas fa-users"></i>
              <h3>Collaborative Culture</h3>
              <p>Work with talented professionals who are passionate about innovation.</p>
            </div>
            <div className={styles.benefit}>
              <i className="fas fa-laptop"></i>
              <h3>Remote-Friendly</h3>
              <p>Flexible work arrangements that prioritize work-life balance.</p>
            </div>
            <div className={styles.benefit}>
              <i className="fas fa-briefcase"></i>
              <h3>Competitive Benefits</h3>
              <p>Competitive salary, health insurance, and professional development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.positionsSection}>
        <div className={styles.container}>
          <h2>Open Positions</h2>
          <div className={styles.positionsList}>
            {openPositions.length > 0 ? (
              openPositions.map((position, idx) => (
                <div key={idx} className={styles.positionCard}>
                  <div className={styles.positionHeader}>
                    <h3>{position.title}</h3>
                    <div className={styles.badges}>
                      <span className={styles.location}>{position.location}</span>
                      <span className={styles.type}>{position.type}</span>
                    </div>
                  </div>
                  <p>{position.description}</p>
                  <a href="/#contact" className={styles.applyButton}>Apply Now</a>
                </div>
              ))
            ) : (
              <p className={styles.noJobs}>No open positions at the moment. Check back soon!</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Don't see your role?</h2>
          <p>Send us your resume and let us know about your interests.</p>
          <a href="/#contact" className={styles.ctaButton}>Send Your Resume</a>
        </div>
      </section>
    </main>
  );
}
