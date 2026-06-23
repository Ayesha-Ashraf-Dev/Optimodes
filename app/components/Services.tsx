'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Services.module.css';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  url: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom, scalable web applications built with modern technologies to drive your business forward.',
    icon: '/assets/img/icon/7.png',
    image: '/assets/img/service/web-dev.png',
    url: '/#contact',
  },
  {
    id: 2,
    title: 'Web & Mobile Design',
    description: 'Beautiful, user-centric designs optimized for every device and screen size.',
    icon: '/assets/img/icon/9.png',
    image: '/assets/img/service/wmd.png',
    url: '/#contact',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that engage users and deliver results.',
    icon: '/assets/img/icon/8.png',
    image: '/assets/img/service/mobile-app.png',
    url: '/#contact',
  },
  {
    id: 4,
    title: 'AI Apps & Integration',
    description: 'Intelligent AI-powered solutions that automate tasks and boost productivity.',
    icon: '/assets/img/icon/5.png',
    image: '/assets/img/service/AI-hub.png',
    url: '/#contact',
  },
  {
    id: 5,
    title: 'Desktop Application Development',
    description: 'Robust desktop software solutions for complex business requirements.',
    icon: '/assets/img/icon/7.png',
    image: '/assets/img/service/desktop-app.png',
    url: '/#contact',
  },
  {
    id: 6,
    title: 'Ecommerce Development',
    description: 'Full-featured online stores that convert visitors into loyal customers.',
    icon: '/assets/img/icon/9.png',
    image: '/assets/img/service/e-comm.png',
    url: '/#contact',
  },
  {
    id: 7,
    title: 'Custom Software Development',
    description: 'Tailored software solutions engineered for your specific business needs.',
    icon: '/assets/img/icon/8.png',
    image: '/assets/img/service/custom-soft.png',
    url: '/#contact',
  },
  {
    id: 8,
    title: 'Database Management & Administration',
    description: 'Secure, optimized database solutions that keep your data reliable and accessible.',
    icon: '/assets/img/icon/5.png',
    image: '/assets/img/service/db-manage.png',
    url: '/#contact',
  },
  {
    id: 9,
    title: 'AI & Machine Learning',
    description: 'Advanced AI and ML solutions that unlock insights and drive intelligent automation.',
    icon: '/assets/img/icon/7.png',
    image: '/assets/img/service/AI-ML.png',
    url: '/#contact',
  },
];

export default function Services() {
  const swiperRef = useRef(null);

  return (
    <section id="services" className={styles.servicesArea}>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <div className={styles.headingContent}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.mainTitle}>
            Comprehensive digital solutions 
            <br />
            <span className={styles.highlight}>tailored to your needs</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.headingDescription}>
            We deliver innovative technology solutions that transform businesses and drive growth
          </p>
        </div>
      </div>

      {/* Services Carousel */}
      <div className={styles.carouselWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          navigation={{
            nextEl: `.${styles.navNext}`,
            prevEl: `.${styles.navPrev}`,
          }}
          pagination={{
            el: `.${styles.paginationContainer}`,
            clickable: true,
            dynamicBullets: true,
          }}
          className={styles.servicesCarousel}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className={styles.serviceCardWrapper}>
              <Link href={service.url} className={styles.serviceCardLink}>
                <div className={styles.serviceCard}>
                  {/* Service Image */}
                  <div className={styles.serviceThumb}>
                    <img src={service.image} alt={service.title} width={400} height={300} />
                    
                    {/* Gradient Overlay */}
                    <div className={styles.imageOverlay}>
                      <div className={styles.iconWrapper}>
                        <img src={service.icon} alt={service.title} width={50} height={50} />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={styles.serviceContent}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <div className={styles.serviceNumber}>0{service.id}</div>
                    </div>
                    
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.learnMore}>Learn More</span>
                      <span className={styles.arrowIcon}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className={`${styles.navPrev} ${styles.navButton}`} aria-label="Previous service" suppressHydrationWarning>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className={`${styles.navNext} ${styles.navButton}`} aria-label="Next service" suppressHydrationWarning>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className={styles.paginationContainer}></div>
      </div>
    </section>
  );
}