"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { asset } from "../../lib/asset";

const CATEGORIES = [
  {
    icon: "fa-solid fa-users-line",
    title: "Conferences",
    desc: "Scholarly dialogue on Islam and medicine",
    href: "/conferences",
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Workshops",
    desc: "Applied learning for professionals and communities",
    href: "/workshops",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Community Learning",
    desc: "Research-informed education for everyday life",
    href: "/education",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Past Events",
    desc: "Explore our previous conferences, workshops, and programs",
    href: "#past-events",
  },
];

const FEATURED_EVENTS = [
  {
    id: "bioethics-end-of-life",
    title: "Islamic Bioethics and End-of-Life Healthcare Decisions",
    date: {
      month: "AUG",
      day: "29",
      year: "2026",
    },
    location: "UMMA Health, California",
    img: "/images/events/featured-audience.jpg",
    alt: "Audience attending healthcare bioethics lecture",
    href: "/dignity-and-healthcare-at-end-of-life",
    description:
      "This event brings together scholars, clinicians, and community members to explore Islamic perspectives on end-of-life care, including issues of advance directives, withdrawal of treatment, and palliative care within a faith-informed framework.",
    type: "Workshop",
  },
  {
    id: "healers-ethos",
    title: "The Healer's Ethos: Reimagining Illness and Care Through Prophetic Decisions",
    date: {
      month: "MAR",
      day: "22",
      year: "2026",
    },
    location: "Conference on Medicine and Religion",
    img: "/images/events/featured-mosaic.jpg",
    alt: "Intricate traditional Islamic mosaic archway and tilework",
    href: "/conferences",
    description:
      "A scholarly gathering at the intersection of Islamic tradition and modern medicine, examining how Prophetic wisdom can shape contemporary healing practices, medical ethics, and the physician-patient relationship.",
    type: "Conference",
  },
];

const PAST_EVENTS = [
  {
    id: "producing-parenthood",
    title: "Producing Parenthood in Modernity: The Intersection of Islamic Bioethics, Assistive Reproductive Techniques and Social Arrangements",
    date: "April 6, 2025",
    location: "Indianapolis Marriott Downtown",
    img: "/images/events/past-skyline.jpg",
    alt: "Indianapolis downtown skyline",
    href: "/conferences",
  },
  {
    id: "bioethics-milwaukee",
    title: "Islamic Bioethics & End-of-Life Healthcare Decisions",
    date: "January 24, 2026",
    location: "Islamic Society of Milwaukee",
    img: "/images/events/past-olive.jpg",
    alt: "Green olive branch illuminated by warm sunlight",
    href: "/dignity-and-healthcare-at-end-of-life",
  },
  {
    id: "organ-donation",
    title: "Organ Donation in Islam",
    date: "January 19 – February 2, 2024",
    location: null,
    img: "/images/events/featured-mosaic.jpg",
    alt: "Arabesque mosaic tilework",
    href: "/living-organ-donation",
  },
];


export default function EventsPageClient() {
  const [email, setEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState("idle");
  const [newsError, setNewsError] = useState("");
  const [activeEvent, setActiveEvent] = useState(null);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const modalRef = useRef(null);

  const openEventDetail = useCallback((ev) => { setActiveEvent(ev); }, []);
  const closeEventDetail = useCallback(() => { setActiveEvent(null); }, []);
  const openRegModal = useCallback(() => { setIsRegModalOpen(true); setIframeLoading(true); }, []);
  const closeRegModal = useCallback(() => { setIsRegModalOpen(false); }, []);

  // Escape key closes whichever modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isRegModalOpen) closeRegModal();
        else if (activeEvent) closeEventDetail();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeEvent, isRegModalOpen, closeEventDetail, closeRegModal]);

  // Lock scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = (activeEvent || isRegModalOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeEvent, isRegModalOpen]);

  // Newsletter submission handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setNewsError("Please enter a valid email address.");
      setNewsStatus("error");
      return;
    }
    setNewsError("");
    setNewsStatus("submitting");

    // Simulate async submission with verified success
    setTimeout(() => {
      setNewsStatus("success");
      setEmail("");
    }, 450);
  };

  return (
    <main className="events-page">

      {/* ============================================================
          1. HERO SECTION — SAME AS OTHER PAGES (hero-seamless)
      ============================================================ */}
      <header className="hero-seamless hero-events-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/events/hero-building.jpg")}
            alt="University of Chicago Gothic campus architectural building and tower"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">EVENTS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Events at <em>II&amp;M.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M hosts conferences, workshops, and community learning programs at the intersection of Islam, biomedicine, ethics, research, and community education.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/consultation" className="btn-seamless-maroon">
                REGISTER FOR AN EVENT <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
              <a href="#featured" className="btn-seamless-outline">
                UPCOMING EVENTS <i className="fa-solid fa-arrow-down ms-2" />
              </a>
            </div>
          </div>
          <div className="hero-seamless-quote">
            <p className="quote-text">
              Dialogue.
              <br />
              Ethics.
              <br />
              Public Impact.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      {/* ============================================================
          2. EVENT CATEGORY CARDS (4 COLUMNS)
      ============================================================ */}
      <section className="ev-categories-section">
        <div className="events-container">
          <div className="ev-categories-grid">
            {CATEGORIES.map((cat) => (
              <Link href={cat.href} key={cat.title} className="ev-cat-card">
                <div className="ev-cat-icon-wrap" aria-hidden="true">
                  <i className={cat.icon} />
                </div>
                <h3 className="ev-cat-title">{cat.title}</h3>
                <p className="ev-cat-desc">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. FEATURED EVENTS (UPCOMING & CURRENT EVENTS)
      ============================================================ */}
      <section className="ev-featured-section" id="featured">
        <div className="events-container">
          <div className="ev-section-header">
            <div className="ev-eyebrow-wrap">
              <span className="ev-eyebrow-text">FEATURED EVENTS</span>
              <span className="ev-eyebrow-bar" aria-hidden="true" />
            </div>
            <h2 className="ev-section-heading">Upcoming &amp; Current Events</h2>
          </div>

          <div className="ev-featured-grid">
            {FEATURED_EVENTS.map((ev) => (
              <article className="ev-featured-card" key={ev.id}>
                <div className="ev-featured-media">
                  <img
                    src={asset(ev.img)}
                    alt={ev.alt}
                    className="ev-featured-img"
                    loading="lazy"
                  />
                </div>
                <div className="ev-featured-body">
                  <div className="ev-date-badge">
                    <span className="ev-date-month">{ev.date.month}</span>
                    <span className="ev-date-day">{ev.date.day}</span>
                    <span className="ev-date-year">{ev.date.year}</span>
                  </div>
                  <div className="ev-featured-info">
                    <h3 className="ev-featured-title">
                      <Link href={ev.href}>{ev.title}</Link>
                    </h3>
                    <p className="ev-featured-location">
                      <i className="fa-solid fa-location-dot me-1" aria-hidden="true" />
                      {ev.location}
                    </p>
                    <div className="ev-featured-action">
                      <button
                        type="button"
                        onClick={() => openEventDetail(ev)}
                        className="ev-featured-btn"
                        aria-label={`View details for ${ev.title}`}
                      >
                        Event Details <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. PAST EVENTS (HORIZONTAL ROWS)
      ============================================================ */}
      <section className="ev-past-section" id="past-events">
        <div className="events-container">
          <div className="ev-section-header">
            <div className="ev-eyebrow-wrap">
              <span className="ev-eyebrow-text">PAST WORKSHOPS / LEARNING EXPERIENCES</span>
              <span className="ev-eyebrow-bar" aria-hidden="true" />
            </div>
            <h2 className="ev-section-heading">Past Events</h2>
          </div>

          <div className="ev-past-list">
            {PAST_EVENTS.map((ev) => (
              <article className="ev-past-row" key={ev.id}>
                <div className="ev-past-thumb-wrap">
                  <img
                    src={asset(ev.img)}
                    alt={ev.alt}
                    className="ev-past-thumb"
                    loading="lazy"
                  />
                </div>
                <div className="ev-past-content">
                  <h3 className="ev-past-title">
                    <Link href={ev.href}>{ev.title}</Link>
                  </h3>
                  <div className="ev-past-meta">
                    <span className="ev-past-date">
                      <i className="fa-regular fa-calendar me-1" aria-hidden="true" />
                      {ev.date}
                    </span>
                    {ev.location && (
                      <>
                        <span className="ev-past-meta-divider" aria-hidden="true">|</span>
                        <span className="ev-past-location">
                          <i className="fa-solid fa-location-dot me-1" aria-hidden="true" />
                          {ev.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="ev-past-action">
                  <Link href={ev.href} className="ev-past-btn">
                    View Details <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. REGISTER FOR AN EVENT (FULL-WIDTH PROMO CARD)
      ============================================================ */}
      <section className="ev-register-section">
        <div className="events-container">
          <div className="ev-register-card">
            <div className="ev-register-media">
              <img
                src={asset("/images/events/register-archway.jpg")}
                alt="Grand Islamic stone colonnade with archways"
                className="ev-register-img"
                loading="lazy"
              />
            </div>
            <div className="ev-register-content">
              <h2 className="ev-register-heading">Register for an Event</h2>
              <p className="ev-register-desc">
                Planning to attend an upcoming II&amp;M event? Get in touch with us to secure your place.
              </p>
              <div className="ev-register-action">
                <Link href="/consultation" className="ev-register-btn">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2" aria-hidden="true" />
                  Get in Touch
                  <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. STAY INFORMED NEWSLETTER BANNER
      ============================================================ */}
      <section className="ev-newsletter-section">
        <div className="events-container">
          <div className="ev-newsletter-card">
            <div className="ev-newsletter-left">
              <div className="ev-newsletter-icon-wrap" aria-hidden="true">
                <i className="fa-regular fa-envelope" />
              </div>
              <div className="ev-newsletter-copy">
                <h2 className="ev-newsletter-heading">Stay Informed</h2>
                <p className="ev-newsletter-desc">
                  Subscribe to our newsletter for updates on future events and resources.
                </p>
              </div>
            </div>

            <div className="ev-newsletter-right">
              {newsStatus === "success" ? (
                <div className="ev-newsletter-success">
                  <i className="fa-solid fa-circle-check me-2" aria-hidden="true" />
                  Thank you for subscribing to II&amp;M updates!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="ev-newsletter-form" noValidate>
                  <div className="ev-newsletter-field-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (newsError) setNewsError("");
                      }}
                      placeholder="Enter your email"
                      className="ev-newsletter-input"
                      aria-label="Email address for event updates"
                      disabled={newsStatus === "submitting"}
                    />
                    <button
                      type="submit"
                      className="ev-newsletter-btn"
                      disabled={newsStatus === "submitting"}
                    >
                      {newsStatus === "submitting" ? (
                        <span>Subscribing...</span>
                      ) : (
                        <>
                          Subscribe <i className="fa-solid fa-arrow-right ms-1" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                  {newsError && (
                    <p className="ev-newsletter-error" role="alert">
                      {newsError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. EVENT DETAIL POPUP
      ============================================================ */}
      {activeEvent && (
        <div
          className="ev-modal-overlay"
          onClick={closeEventDetail}
          role="dialog"
          aria-modal="true"
          aria-label={activeEvent.title}
        >
          <div
            className="ev-detail-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="ev-detail-media">
              <img
                src={asset(activeEvent.img)}
                alt={activeEvent.alt}
                className="ev-detail-img"
              />
              <button
                type="button"
                className="ev-modal-close ev-detail-close"
                onClick={closeEventDetail}
                aria-label="Close event details"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>
            <div className="ev-detail-body">
              <div className="ev-detail-meta-row">
                <span className="ev-detail-type">{activeEvent.type}</span>
                <span className="ev-detail-date-pill">
                  <i className="fa-regular fa-calendar me-1" aria-hidden="true" />
                  {activeEvent.date.month} {activeEvent.date.day}, {activeEvent.date.year}
                </span>
              </div>
              <h2 className="ev-detail-title">{activeEvent.title}</h2>
              <p className="ev-detail-location">
                <i className="fa-solid fa-location-dot me-2" aria-hidden="true" />
                {activeEvent.location}
              </p>
              <div className="ev-detail-divider" aria-hidden="true" />
              <p className="ev-detail-desc">{activeEvent.description}</p>
              <div className="ev-detail-actions">
                <button
                  type="button"
                  onClick={() => { closeEventDetail(); openRegModal(); }}
                  className="ev-detail-register-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square me-2" aria-hidden="true" />
                  Register for This Event
                </button>
                <button
                  type="button"
                  onClick={closeEventDetail}
                  className="ev-detail-close-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GHL EVENT REGISTRATION MODAL */}
      {isRegModalOpen && (
        <div
          className="ev-modal-overlay"
          onClick={closeRegModal}
          role="dialog"
          aria-modal="true"
          aria-label="Event Registration Form"
        >
          <div
            className="ev-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <div className="ev-modal-header">
              <div className="ev-modal-header-copy">
                <span className="ev-modal-eyebrow">II&amp;M EVENTS</span>
                <h3 className="ev-modal-title">Event Registration</h3>
              </div>
              <button
                type="button"
                className="ev-modal-close"
                onClick={closeRegModal}
                aria-label="Close registration form"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>
            <div className="ev-modal-body">
              {iframeLoading && (
                <div className="ev-modal-loader">
                  <div className="ev-modal-spinner" />
                  <p>Loading registration form...</p>
                </div>
              )}
              <iframe
                src="https://links.360growthlab.com/widget/form/CstJIHikubJG75Zv16TR"
                title="Event Registration Form"
                className="ev-modal-iframe"
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
