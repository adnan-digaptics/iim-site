import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Religious Dimensions of Healthcare Delivery Workshop | II&M",
  description:
    "A multidisciplinary workshop at Swift Hall, University of Chicago, bringing together clinicians, chaplains, ethicists, and theologians to explore religious dimensions of healthcare delivery.",
};

const objectives = [
  "Highlight relationships between religious dimensions of faith and healthcare delivery.",
  "Foster collaboration among allied health professionals to improve delivery of care.",
  "Assist healthcare professionals to understand the spiritual care resources available in a hospital.",
  "Enhance the ability of healthcare professionals to serve as advisers, counselors, and navigators to patients.",
  "Facilitate the incorporation of patients' religious perspectives into healthcare interactions, including decision-making conversations.",
];

const SPEAKERS = [
  {
    name: "Dr. Aasim I. Padela, MD, MSc, FACEP",
    role: "Director, Initiative on Islam & Medicine",
    affiliation: "University of Chicago",
    tag: "KEYNOTE & CONVENER",
    topic: "Religious Dimensions of Healthcare Delivery: Bridging Clinical Practice and Spiritual Care",
    image: asset("/images/symposium/dr-padela-portrait-hq.jpg"),
  },
  {
    name: "Prof. Dr. Andrea Bieler",
    role: "Faculty Panel · Practical Theology",
    affiliation: "University of Basel",
    tag: "FACULTY PRESENTATION",
    topic: "Hospital Chaplaincy, Spiritual Care Resources, and Patient Advocacy in Acute Settings",
    image: asset("/images/symposium/speaker-andrea-bieler-hq.jpg"),
  },
  {
    name: "Dr. Cynthia G. Lindner, DMin",
    role: "Director of Ministry Studies",
    affiliation: "University of Chicago Divinity School",
    tag: "ROUNDTABLE WORKSHOP",
    topic: "Facilitating Patients' Faith Perspectives in Shared Decision-Making and Complex Care",
    image: asset("/images/symposium/speaker-cynthia-lindner-hq.jpg"),
  },
];

const SPONSORS = [
  {
    name: "Program on Medicine and Religion (PMR), University of Chicago",
    src: asset("/images/symposium/sponsor-pmr.png"),
    alt: "Program on Medicine and Religion (PMR), University of Chicago",
    className: "rwd-sponsor-logo-pmr",
  },
  {
    name: "The University of Chicago Divinity School & Divinity Students Association",
    src: asset("/images/symposium/sponsor-uchicago-divinity-dsa.png"),
    alt: "The University of Chicago Divinity School and Divinity Students Association",
    className: "rwd-sponsor-logo-divinity-dsa",
  },
  {
    name: "A Center of Christian-Muslim Engagement for Peace and Justice (CCME)",
    src: asset("/images/symposium/sponsor-ccme.png"),
    alt: "A Center of Christian-Muslim Engagement for Peace and Justice (CCME), LSTC",
    className: "rwd-sponsor-logo-ccme",
  },
];

export default function ReligiousDimensionsWorkshopPage() {
  return (
    <div className="religious-workshop-page">
      {/* 1. SEAMLESS HERO (MATCHING HOMEPAGE & INNER PAGES) */}
      <header className="hero-seamless hero-rwd-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/symposium/hero-campus-uchicago.jpg")}
            alt="Swift Hall and historic Gothic quadrangle at the University of Chicago"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">WORKSHOP · UNIVERSITY OF CHICAGO</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Religious Dimensions of <em>Healthcare Delivery</em>
            </h1>
            <p className="hero-seamless-lead">
              A multidisciplinary workshop bringing together clinicians, chaplains, ethicists, and theologians to examine how patient and practitioner religious values shape modern clinical interactions.
            </p>
            <div className="hero-seamless-actions">
              <a href="#overview" className="btn-seamless-maroon">
                WORKSHOP OVERVIEW &gt;
              </a>
              <a href="#objectives" className="btn-seamless-outline">
                LEARNING OBJECTIVES
              </a>
            </div>
          </div>
          <div className="hero-seamless-quote">
            <p className="quote-text">
              Faith, Healing &amp;<br />Spiritual Care.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      {/* 1B. HIGHLIGHTS STRIP (MATCHING HOMEPAGE FOUR-VALUES STRIP) */}
      <section className="strip-four-values-exact fullwidth-strip">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-regular fa-calendar-days value-exact-icon" />
                <h3 className="value-exact-title">March 2–3, 2019</h3>
                <p className="value-exact-text">Two-Day Multidisciplinary Workshop</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-location-dot value-exact-icon" />
                <h3 className="value-exact-title">Swift Hall</h3>
                <p className="value-exact-text">University of Chicago Divinity School</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-hospital-user value-exact-icon" />
                <h3 className="value-exact-title">Allied Care</h3>
                <p className="value-exact-text">Clinicians, Chaplains &amp; Ethicists</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-heart-pulse value-exact-icon" />
                <h3 className="value-exact-title">Spiritual Care</h3>
                <p className="value-exact-text">Integrating Patient Perspectives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rwd-content">
        <section className="rwd-overview" id="overview" aria-labelledby="rwd-overview-title">
          <div className="rwd-section-heading">
            <h2 id="rwd-overview-title">Workshop Overview</h2>
            <span className="rwd-heading-rule" aria-hidden="true" />
          </div>
          <p>
            Hosted at Swift Hall at the University of Chicago, this multidisciplinary
            workshop brought together scholars and healthcare professionals
            across medicine, religion, theology, and ethics to explore the
            religious dimensions of healthcare delivery. By fostering active dialogue
            between allied clinicians and spiritual care providers, the workshop addressed
            critical gaps at the crossroads of medicine, faith, and clinical ethics.
          </p>
        </section>

        <section className="rwd-objectives" id="objectives" aria-labelledby="rwd-objectives-title">
          <div className="rwd-objectives-heading">
            <h2 id="rwd-objectives-title">Learning Objectives</h2>
            <span className="rwd-heading-rule" aria-hidden="true" />
          </div>
          <div className="rwd-objectives-content">
            <p>
              By initiating conversations between allied health professionals
              including clinicians and chaplains, this multidisciplinary
              workshop will:
            </p>
            <ul>
              {objectives.map((objective) => (
                <li key={objective}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rwd-speakers" id="speakers" aria-labelledby="rwd-speakers-title">
          <div className="rwd-section-heading">
            <h2 id="rwd-speakers-title">Speakers &amp; Sessions</h2>
            <span className="rwd-heading-rule" aria-hidden="true" />
          </div>
          <div className="rwd-speaker-grid" aria-label="Workshop speakers and presentations">
            {SPEAKERS.map((spk, idx) => (
              <div className="rwd-speaker-card" key={idx}>
                <div className="rwd-speaker-imgwrap">
                  <img
                    src={spk.image}
                    alt={`${spk.name} - ${spk.role}`}
                    className="rwd-speaker-img"
                    loading="eager"
                  />
                </div>
                <div className="rwd-speaker-info">
                  <span className="rwd-speaker-tag">{spk.tag}</span>
                  <h3 className="rwd-speaker-name">{spk.name}</h3>
                  <p className="rwd-speaker-role">{spk.role} · {spk.affiliation}</p>
                  <p className="rwd-speaker-topic">&ldquo;{spk.topic}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rwd-sponsors" id="sponsors" aria-labelledby="rwd-sponsors-title">
          <div className="rwd-section-heading">
            <h2 id="rwd-sponsors-title">Our Sponsors</h2>
            <span className="rwd-heading-rule" aria-hidden="true" />
          </div>
          <div className="rwd-sponsors-container">
            <div className="rwd-sponsors-list">
              {SPONSORS.map((sp, idx) => (
                <div key={idx} className="rwd-sponsor-group">
                  <div className="rwd-sponsor-item" title={sp.name}>
                    <img
                      src={sp.src}
                      alt={sp.alt}
                      className={`rwd-sponsor-img ${sp.className}`}
                      loading="eager"
                    />
                  </div>
                  {idx < SPONSORS.length - 1 && (
                    <div className="rwd-sponsor-divider" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="rwd-newsletter" aria-labelledby="rwd-newsletter-title">
        <div className="rwd-newsletter-inner">
          <div className="rwd-newsletter-intro">
            <i className="fa-regular fa-envelope" aria-hidden="true" />
            <span className="rwd-newsletter-divider" aria-hidden="true" />
            <div>
              <h2 id="rwd-newsletter-title">Stay Informed</h2>
              <p>
                Subscribe to our newsletter for updates on future events and
                resources.
              </p>
            </div>
          </div>
          <a
            className="rwd-newsletter-link"
            href="https://us3.campaign-archive.com/?u=2bae284872df3a573e6e5c828&id=7ddea0acbb"
            target="_blank"
            rel="noopener noreferrer"
          >
            View newsletter <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
