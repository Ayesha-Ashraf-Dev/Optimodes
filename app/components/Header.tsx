'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Brand/Logo */}
          <div className={styles.navbarHeader}>
            <button
              className={styles.navbarToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <Link href="/" className={styles.navbarBrand}>
              <Image
                src="/assets/img/logo/logo.png"
                alt="Optimodes Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Main Navigation Menu */}
          <div className={`${styles.navbarCollapse} ${mobileMenuOpen ? styles.collapseOpen : ''}`}>
            {/* Main Navigation Links */}
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink} onClick={handleNavClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.navLink} onClick={handleNavClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className={styles.navLink} onClick={handleNavClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#features" className={styles.navLink} onClick={handleNavClick}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className={styles.navLink} onClick={handleNavClick}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.navLink} onClick={handleNavClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Contact Info */}
          <div className={styles.attrRight}>
            <div className={styles.attrNav}>
              <div className={styles.contactInfo}>
                <div className={styles.icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.info}>
                  <p>Get in Touch</p>
                  <h5>
                    <a href="mailto:info@optimodes.com">info@optimodes.com</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className={styles.overlayScreen}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}