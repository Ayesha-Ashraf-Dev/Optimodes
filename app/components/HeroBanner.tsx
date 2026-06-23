'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './HeroBanner.module.css';

interface BannerSlide {
  id: number;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  illustration: string;
  illustrationAlt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    heading: 'Grow & Scale\nYour Digital Presence',
    description:
      'We build high-performing websites, custom software, and automated systems to turn your ideas into measurable business results.',
    buttonText: 'Get Consultant',
    buttonUrl: '/#contact',
    illustration: '/assets/img/illustration/2.png',
    illustrationAlt: 'Digital Solutions Illustration',
  },
  {
    id: 2,
    heading: 'Smart Scalable\nSoftware Solutions',
    description:
      'Streamline your operations, reduce manual work, and optimize your business with our customized development services.',
    buttonText: 'Get Consultant',
    buttonUrl: '/#contact',
    illustration: '/assets/img/illustration/3.png',
    illustrationAlt: 'Success Strategy Illustration',
  },
];

export default function HeroBanner() {
  const swiperRef = useRef(null);

  const stats = [
    { number: '200+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Done' },
    { number: '99%', label: 'Satisfaction' },
  ];

  return (
    <section className={styles.bannerArea}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
        className={styles.carousel}
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent}>
                    <div className={styles.accentLine}></div>
                    <span className={styles.tagline}>Welcome to Optimodes</span>

                    <h2 className={styles.heading}>
                      {slide.heading.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.heading.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h2>

                    <p className={styles.description}>{slide.description}</p>

                    <div className={styles.buttonWrapper}>
                      <Link href={slide.buttonUrl} className={styles.ctaButton}>
                        {slide.buttonText}
                      </Link>
                      <Link href="/#services" className={styles.secondaryButton}>
                        Learn More
                      </Link>
                    </div>

                    <div className={styles.statsSection}>
                      {stats.map((stat, idx) => (
                        <div key={idx} className={styles.statItem}>
                          <h3 className={styles.statNumber}>{stat.number}</h3>
                          <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.illustrationWrapper}>
                  <Image
                    src={slide.illustration}
                    alt={slide.illustrationAlt}
                    width={400}
                    height={500}
                    priority
                    className={styles.illustration}
                  />
                </div>
              </div>

              <div
                className={styles.shapeRight}
                style={{ backgroundImage: `url(/assets/img/shape/2.png)` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={styles.navArrowLeft}
        onClick={() => {
          if (swiperRef.current) {
            (swiperRef.current as any).swiper.slidePrev();
          }
        }}
        aria-label="Previous slide"
        suppressHydrationWarning
      >
        <i className="fa fa-chevron-left"></i>
      </button>

      <button
        className={styles.navArrowRight}
        onClick={() => {
          if (swiperRef.current) {
            (swiperRef.current as any).swiper.slideNext();
          }
        }}
        aria-label="Next slide"
        suppressHydrationWarning
      >
        <i className="fa fa-chevron-right"></i>
      </button>

      <div className={styles.paginationContainer}>
        <div className={styles.paginationDots}>
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={styles.dot}
              onClick={() => {
                if (swiperRef.current) {
                  (swiperRef.current as any).swiper.slideTo(index);
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
    </section>
  );
}