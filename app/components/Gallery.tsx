'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Gallery.module.css';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  categories: string;
  link: string;
  delay: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/assets/img/gallery/1.png',
    title: 'Full Stack Car Marketplace Platform',
    categories: 'Website Design & Development',
    link: '/projects/full-stack-car-marketplace',
    delay: '0ms',
  },
  {
    id: 2,
    image: '/assets/img/gallery/3.png',
    title: '1H1N – One Human One Node Network',
    categories: 'Web Platform Design & Development',
    link: '/projects/1h1n-decentralized-network',
    delay: '100ms',
  },
  {
    id: 3,
    image: '/assets/img/gallery/2.png',
    title: 'TeamLoom HRMS Platform',
    categories: 'Enterprise SaaS Solutions',
    link: '/projects/teamloom-hrms',
    delay: '150ms',
  },
  {
    id: 4,
    image: '/assets/img/gallery/4.png',
    title: 'ZK Data Clouds Platform',
    categories: 'SAAS & Custom Software',
    link: '/projects/zk-data-clouds',
    delay: '100ms',
  },
];

export default function Gallery() {
  return (
    <section className={styles.galleryArea}>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <div className={styles.headingContent}>
          <h4 className={styles.subTitle}>Recent Gallery</h4>
          <h2 className={styles.mainTitle}>
          
            <span className={styles.titleLine}>completed projects</span>
            
          </h2>
          <div className={styles.divider}></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={styles.galleryItem}
              style={{ animationDelay: item.delay }}
            >
              <div className={styles.galleryCard}>
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className={styles.galleryImage}
                />

                {/* Decorative Shape */}
                <div className={styles.decorativeShape}>
                  <img
                    src="/assets/img/shape/35.png"
                    alt="Shape"
                    width={80}
                    height={80}
                  />
                </div>

                {/* Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.categories}>{item.categories}</span>
                    <h4 className={styles.projectTitle}>
                      <Link href={item.link}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className={styles.loadMoreContainer}>
        <p className={styles.loadMoreText}>
          Are you interested to show more portfolios?{' '}
          <Link href="/projects" className={styles.loadMoreLink}>
            Load More
          </Link>
        </p>
      </div>
    </section>
  );
}
