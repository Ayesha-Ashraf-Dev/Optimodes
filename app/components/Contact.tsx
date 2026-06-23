'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

interface ContactItem {
  id: number;
  icon: string;
  title: string;
  content: string;
  link?: string;
  delay: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactItems: ContactItem[] = [
  {
    id: 1,
    icon: 'fas fa-phone-alt',
    title: 'Hotline',
    content: '+92 339 000 5807',
    link: 'tel:+923390005807',
    delay: '0ms',
  },
  {
    id: 2,
    icon: 'fas fa-map-marker-alt',
    title: 'Our Location',
    content: 'karachi, sindh, pakistan',
    delay: '300ms',
  },
  {
    id: 3,
    icon: 'fas fa-envelope-open-text',
    title: 'Official Email',
    content: 'info@optimodes.com',
    link: 'mailto:info@agrul.com',
    delay: '500ms',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please resolve the errors below before submitting.',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: 'Contact Form Submission',
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactArea}>
      {/* Decorative Shape */}
      <div className={styles.decorativeShape}>
        <img src="/assets/img/shape/37.png" alt="Shape" width={200} height={200} />
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Contact Information */}
          <div className={styles.leftColumn}>
            <div className={styles.contactInfo}>
              <h2 className={styles.mainTitle}>
                <span className={styles.titleLine}>Contact</span>
                <span className={styles.titleLine}>Information</span>
              </h2>

              <p className={styles.description}>
                Plan upon yet way get cold spot its week. Almost do am or limits
                hearts. Resolve parties but why she shewing.
              </p>

              {/* Contact Items List */}
              <ul className={styles.contactList}>
                {contactItems.map((item) => (
                  <li key={item.id} className={styles.contactItem} style={{ animationDelay: item.delay }}>
                    <div className={styles.iconWrapper}>
                      <i className={item.icon}></i>
                    </div>
                    <div className={styles.itemContent}>
                      <h5 className={styles.itemTitle}>{item.title}</h5>
                      {item.link ? (
                        <a href={item.link} className={styles.itemLink}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={styles.itemText}>{item.content}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={styles.rightColumn}>
            <div className={styles.formWrapper}>
              <h5 className={styles.formSubtitle}>Have Questions?</h5>
              <h2 className={styles.formTitle}>Send us a Message</h2>

              <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                {/* Name Field */}
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                    suppressHydrationWarning
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                {/* Email and Phone Row */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                      suppressHydrationWarning
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell Us About Project * (At least 10 characters)"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <div className={styles.formGroup}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={styles.submitButton}
                    suppressHydrationWarning
                  >
                    <i className="fas fa-paper-plane"></i>
                    {isLoading ? 'Sending...' : 'Get in Touch'}
                  </button>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`${styles.statusMessage} ${
                      submitStatus.type === 'success'
                        ? styles.successMessage
                        : styles.errorMessage
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
