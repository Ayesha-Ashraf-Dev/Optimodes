'use client';

import styles from './support.module.css';

export default function Support() {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Access our comprehensive guides and tutorials',
      icon: '📚',
      link: '#'
    },
    {
      title: 'Email Support',
      description: 'Get help via email - typically within 24 hours',
      icon: '✉️',
      link: 'mailto:support@optimodes.com'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: '💬',
      link: '#'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: '👥',
      link: '#'
    }
  ];

  return (
    <main className={styles.supportPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Support Center</h1>
          <p className={styles.heroSubtitle}>
            We're here to help. Get support from our team.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className={styles.optionsSection}>
        <div className={styles.container}>
          <div className={styles.optionsGrid}>
            {supportOptions.map((option, idx) => (
              <a key={idx} href={option.link} className={styles.optionCard}>
                <div className={styles.optionIcon}>{option.icon}</div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactBox}>
            <h2>Send Us a Message</h2>
            <p>Can't find what you're looking for? Get in touch with us directly.</p>
            <a href="/#contact" className={styles.contactButton}>Contact Support</a>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h2>Support Response Times</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Standard Support</h3>
              <p className={styles.responseTime}>24-48 hours</p>
              <p>Regular business hours support for general inquiries</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Priority Support</h3>
              <p className={styles.responseTime}>4-8 hours</p>
              <p>Faster response for ongoing projects</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Enterprise Support</h3>
              <p className={styles.responseTime}>1-2 hours</p>
              <p>24/7 dedicated support for enterprise clients</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
