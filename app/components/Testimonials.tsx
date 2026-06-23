'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  title: string;
  text: string;
  name: string;
  location: string;
  // logo: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Great Service',
    text: "I had the pleasure of working with Ayesha on the 1H1N and ZK Data Clouds projects. Throughout our collaboration, she proved to be highly responsive, proactive, and fully focused on delivering results. She consistently demonstrated reliability, took initiative when challenges arose, and maintained a strong commitment to the project's objectives. Ayesha is also knowledgeable across the all stacks and digital infrastructures, which is something needed when developing highly articulate and complex project. I would highly recommend her to any team looking for a results-driven developer",
    name: 'Andrea Dalla Val',
    location: 'Italy',
    // logo: '/assets/img/logo/01.png',
    rating: 5,
  },
  {
    id: 2,
    title: 'Best Always',
    text: "Ayeesha was fantastic to work with. She delivered high-quality full-stack development work on time and was very responsive throughout the project. Her technical skills, communication, and attention to detail were excellent. I highly recommend her and would gladly work with her again",
    name: 'Elvin Croes',
    location: 'Netherlands',
    // logo: '/assets/img/logo/04.png',
    rating: 5,
  },
  {
    id: 3,
    title: 'Highly Recommended',
    text: "Ayesha delivered clean and polished UI work. She was punctual, efficient, and professional throughout. It was a real pleasure working with her, and I highly recommend her.",
    name: 'David Alexandre',
    location: 'Germany',
    // logo: '/assets/img/logo/05.png',
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <i key={`full-${i}`} className="fas fa-star"></i>
    );
  }

  if (hasHalf) {
    stars.push(
      <i key="half" className="fas fa-star-half-alt"></i>
    );
  }

  return stars;
};

// Truncate text function
const truncateText = (text: string, maxLength: number = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="testimonials" className={styles.testimonialsArea}>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <div className={styles.headingContent}>
          <h4 className={styles.subTitle}>Testimonials</h4>
          <h2 className={styles.mainTitle}>
            <span className={styles.titleLine}>Clients Feedback</span>
          </h2>
          <div className={styles.divider}></div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className={styles.carouselContainer}>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.testimonialsCarousel}
        >
          {testimonials.map((testimonial) => {
            const isExpanded = expandedId === testimonial.id;
            const displayText = isExpanded 
              ? testimonial.text 
              : truncateText(testimonial.text, 150);
            const shouldShowButton = testimonial.text.length > 150;

            return (
              <SwiperSlide key={testimonial.id} className={styles.testimonialSlide}>
                <div className={`${styles.testimonialCard} ${isExpanded ? styles.expanded : ''}`}>
                  {/* Quote Icon */}
                  <div className={styles.quoteIcon}>
                    <img src="/assets/img/shape/quote.png" alt="Quote" width={40} height={40} />
                  </div>

                  {/* Top Info - Title and Rating */}
                  <div className={styles.topInfo}>
                    <h3 className={styles.testimonialTitle}>{testimonial.title}</h3>
                    <div className={styles.ratingStars}>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Text with Read More */}
                  <div className={styles.testimonialText}>
                    <p>{displayText}</p>
                    {shouldShowButton && (
                      <button 
                        className={styles.readMoreBtn}
                        onClick={() => toggleReadMore(testimonial.id)}
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  {/* Provider Info */}
                  <div className={styles.providerInfo}>
                    <div className={styles.providerContent}>
                      <h4 className={styles.providerName}>{testimonial.name}</h4>
                      <span className={styles.providerLocation}>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}