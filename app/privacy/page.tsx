'use client';

import styles from './policy.module.css';

export default function Privacy() {
  return (
    <main className={styles.policyPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>Last updated: June 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>1. Introduction</h2>
            <p>
              Optimodes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other information you voluntarily provide</li>
              <li><strong>Device Data:</strong> Browser type, IP address, operating system, and referring URLs</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and interaction with our website</li>
            </ul>

            <h2>3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Email you regarding your inquiry or service request</li>
              <li>Fulfill and manage your orders or requests</li>
              <li>Improve our website and services</li>
              <li>Resolve disputes and troubleshoot problems</li>
              <li>Send you marketing and promotional communications</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
              <li><strong>Service Providers:</strong> To contractors and service providers who assist us in operating our website</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, 
              no security system is impenetrable, and we cannot guarantee absolute security.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at privacy@optimodes.com or 
              through the contact form on our website.
            </p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately 
              upon posting to the website. If we make material changes to this policy, we will notify you here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
