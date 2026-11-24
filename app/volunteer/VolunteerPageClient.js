"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { asset } from "../../lib/asset";

const BENEFITS = [
  {
    icon: "fa-solid fa-users",
    title: "Support Our Mission",
    text: "Contribute to impactful work that bridges Islam, ethics, and healthcare.",
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Gain Experience",
    text: "Be part of a dynamic, interdisciplinary learning environment.",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Create Lasting Impact",
    text: "Help advance knowledge, education, and health equity in Muslim communities.",
  },
];

export default function VolunteerPageClient() {
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  useEffect(() => {
    const scriptSrc = "https://links.360growthlab.com/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Smooth scroll to apply section
  const scrollToApply = (e) => {
    e.preventDefault();
    const target = document.getElementById("apply");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Submit Newsletter
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.trim())) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterError("");

    setTimeout(() => {
      setNewsletterSubmitting(false);
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
    }, 500);
  };

  return (
    <main className="volunteer-page">
      {/* ====================================================================
          1. HERO SECTION (Seamless Institutional Style matching Reference Mockup)
          ==================================================================== */}
      <header className="hero-seamless hero-volunteer-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/volunteer/volunteer-hero.jpg")}
            alt="Muslim volunteers in burgundy II&M vests collaborating around a laptop"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-left" aria-hidden="true" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner volunteer-hero-content-inner">
            <div className="volunteer-hero-eyebrow-wrap">
              <span className="volunteer-hero-eyebrow-line" />
              <span className="volunteer-hero-eyebrow-text">GET INVOLVED</span>
              <span className="volunteer-hero-eyebrow-line" />
            </div>
            <h1 className="volunteer-hero-main-title">
              Volunteer at II&amp;M
            </h1>
            <p className="volunteer-hero-main-lead">
              Support II&amp;M’s mission by contributing your time, skills, and
              perspective to advance research, education, and community
              engagement at the intersection of Islam and medicine.
            </p>
            <div className="volunteer-hero-main-actions">
              <a
                href="#apply"
                onClick={scrollToApply}
                className="btn-volunteer-primary"
                aria-label="Scroll to become a volunteer application form"
              >
                BECOME A VOLUNTEER <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. MAKE A MEANINGFUL CONTRIBUTION + 3. THREE BENEFIT CARDS
          ==================================================================== */}
      <section className="volunteer-contribution-section" id="contribution">
        <div className="container">
          {/* Editorial Two-Column Introduction */}
          <div className="row align-items-center volunteer-contribution-row">
            <div className="col-lg-5 volunteer-contribution-heading-col">
              <div className="volunteer-contribution-heading-wrap">
                <h2 className="volunteer-contribution-title">
                  Make a<br />
                  Meaningful<br />
                  Contribution
                </h2>
              </div>
            </div>
            <div className="col-lg-7 volunteer-contribution-text-col">
              <p className="volunteer-contribution-desc">
                II&amp;M welcomes volunteers who are passionate about improving the
                health and well-being of Muslim communities and who want to
                support our research, educational, and community initiatives.
              </p>
            </div>
          </div>

          {/* Three Compact Benefit Cards */}
          <div className="volunteer-benefits-grid">
            {BENEFITS.map((item, idx) => (
              <div className="volunteer-benefit-card" key={idx}>
                <div className="volunteer-benefit-icon-badge" aria-hidden="true">
                  <i className={item.icon} />
                </div>
                <div className="volunteer-benefit-body">
                  <h3 className="volunteer-benefit-title">{item.title}</h3>
                  <p className="volunteer-benefit-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. BECOME A VOLUNTEER — APPLICATION SECTION
          ==================================================================== */}
      <section className="volunteer-apply-section" id="apply">
        <div className="container">
          <div className="volunteer-apply-card">
            <div className="volunteer-apply-form-inner">
              {/* Subtle Geometric Watermark */}
              <div className="volunteer-form-watermark" aria-hidden="true" />

              {/* Header Decoration & Title */}
              <div className="volunteer-form-header">
                <div className="volunteer-form-accent-bar" aria-hidden="true" />
                <h2 className="volunteer-form-title">Become a Volunteer</h2>
              </div>

              {/* Embedded NPE Volunteer Application Form (GHL) */}
              <div className="volunteer-iframe-wrap">
                <iframe
                  src="https://links.360growthlab.com/widget/form/uCLJ2qglm3CgvwDM9aGv"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    minHeight: "720px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  id="inline-uCLJ2qglm3CgvwDM9aGv"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="NPE Volunteer Application"
                  data-height="1825"
                  data-layout-iframe-id="inline-uCLJ2qglm3CgvwDM9aGv"
                  data-form-id="uCLJ2qglm3CgvwDM9aGv"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="NPE Volunteer Application"
                />
                <Script
                  src="https://links.360growthlab.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. STAY CONNECTED — NEWSLETTER SECTION
          ==================================================================== */}
      <section className="volunteer-newsletter-section">
        <div className="volunteer-newsletter-pattern" aria-hidden="true" />
        <div className="container">
          <div className="volunteer-newsletter-wrapper">
            {/* Left: Envelope Icon + Separator */}
            <div className="volunteer-newsletter-left">
              <div className="volunteer-newsletter-icon" aria-hidden="true">
                <i className="fa-regular fa-envelope" />
              </div>
              <div className="volunteer-newsletter-divider" aria-hidden="true" />
            </div>

            {/* Center: Heading & Description */}
            <div className="volunteer-newsletter-center">
              <h2 className="volunteer-newsletter-title">Stay Connected</h2>
              <p className="volunteer-newsletter-desc">
                Subscribe for updates on opportunities, events, and new
                initiatives at II&amp;M.
              </p>
            </div>

            {/* Right: Subscription Input + Button */}
            <div className="volunteer-newsletter-right">
              {newsletterSubmitted ? (
                <div className="volunteer-newsletter-success">
                  <i className="fa-solid fa-check-circle me-2" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="volunteer-newsletter-form"
                  noValidate
                >
                  <div className="volunteer-newsletter-field-group">
                    <label htmlFor="vl-newsletter-email" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="vl-newsletter-email"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterError) setNewsletterError("");
                      }}
                      placeholder="Enter your email"
                      required
                      className="volunteer-newsletter-input"
                    />
                    <button
                      type="submit"
                      disabled={newsletterSubmitting}
                      className="volunteer-newsletter-btn"
                    >
                      {newsletterSubmitting ? (
                        "..."
                      ) : (
                        <>
                          SUBSCRIBE <i className="fa-solid fa-arrow-right ms-2" />
                        </>
                      )}
                    </button>
                  </div>
                  {newsletterError && (
                    <span className="volunteer-newsletter-error">
                      {newsletterError}
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
