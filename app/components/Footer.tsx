'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  icon: string;
  label: string;
  values: string[];
}

const companyLinks: FooterLink[] = [
  { label: 'Company Profile', href: '/about' },
  { label: 'Help Center', href: '/faq' },
  { label: 'Career', href: '/career' },
  { label: 'Plans & Pricing', href: '/pricing' },
  { label: 'Contact', href: '/#contact' },
];

const serviceLinks: FooterLink[] = [
  { label: 'Website Design & Development', href: '/services/website-design-development' },
  { label: 'Custom Software Solutions', href: '/services/custom-software-solutions' },
  { label: 'Lead Generation Systems', href: '/services/lead-generation-systems' },
  { label: 'Business Automation', href: '/services/business-automation' },
];

const contactInfo: ContactInfo[] = [
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Address',
    values: ['karachi, Pakistan'],
  },
  {
    icon: 'fas fa-phone-alt',
    label: 'Phone',
    values: ['+92 339 000 5807'],
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    values: ['info@optimodes.com'],
  },
];

const socialLinks = [
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/optimodes?igsh=b3dsdHc2cGtiOGh1', label: 'Instagram' },
  // { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61591340093915', label: 'Facebook' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/127623896/', label: 'LinkedIn' },
];

const policyLinks: FooterLink[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Support', href: '/support' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* About Section */}
            <div className={styles.footerColumn}>
              <div className={styles.aboutSection}>
                <div className={styles.logoWrapper}>
                  <Image
                    src="/assets/img/white logo.png"
                    alt="Optmodes Logo"
                    width={180}
                    height={50}
                    className={styles.footerLogo}
                  />
                </div>
                <p className={styles.aboutText}>
                  We help businesses grow, scale, and stay ahead in today's competitive digital landscape through modern, 
                  high-performing websites, powerful software solutions, and results-driven lead generation systems.
                </p>
                <ul className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} title={social.label} className={styles.socialLink}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company Links */}
            <div className={styles.footerColumn}>
              <div className={styles.linkSection}>
                <h4 className={styles.columnTitle}>Our Company</h4>
                <ul className={styles.linkList}>
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Links */}
            <div className={styles.footerColumn}>
              <div className={styles.linkSection}>
                <h4 className={styles.columnTitle}>Our Services</h4>
                <ul className={styles.linkList}>
                  {serviceLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <div className={styles.contactSection}>
                <h4 className={styles.columnTitle}>Get in touch</h4>
                <ul className={styles.contactList}>
                  {contactInfo.map((info, idx) => (
                    <li key={idx} className={styles.contactItem}>
                      <i className={`${info.icon} ${styles.contactIcon}`}></i>
                      <div className={styles.contactContent}>
                        {info.values.map((value, valueIdx) => (
                          <p key={valueIdx} className={styles.contactText}>
                            {value}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            <div className={styles.copyrightSection}>
              <p className={styles.copyrightText}>
                © Copyright {currentYear}. All Rights Reserved by{' '}
                <Link href="/" className={styles.brandLink}>
                  Optimodes
                </Link>
              </p>
            </div>
            <div className={styles.policySection}>
              <ul className={styles.policyLinks}>
                {policyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.policyLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
