import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Conferences & Public Programs | Initiative on Islam & Medicine",
  description:
    "II&M convenes thought leaders, healthcare professionals, scholars, and community members to explore pressing issues at the intersection of Islam and medicine.",
};

const CONFERENCES = [
  {
    img: "/images/our-impact/conf-1.jpg",
    eyebrow: "BIOETHICS DIALOGUE",
    title: "Dignity and Healthcare at End-of-Life: Abrahamic Faiths in a Bioethics Conversation",
    text: "A multidisciplinary dialogue on dignity, care, and faith traditions at the end of life. Bringing together scholars, clinicians, chaplains, and community leaders.",
    href: "/dignity-and-healthcare-at-end-of-life/",
  },
  {
    img: "/images/our-impact/conf-2.jpg",
    eyebrow: "MULTIDISCIPLINARY CONFERENCE",
    title: "Interfaces and Discourses: A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine",
    text: "Scholars and clinicians examining the intersections of theology, law, and biomedicine — advancing rigorous interdisciplinary dialogue.",
    href: "/interfaces-and-discourses/",
  },
  {
    img: "/images/our-impact/conf-3.jpg",
    eyebrow: "ANNUAL SYMPOSIUM",
    title: "Multidisciplinary Symposium on Islam and Biomedicine",
    text: "Advancing research and conversation across medicine, ethics, and Islamic studies. A flagship gathering of leading voices in Islam and healthcare.",
    href: "/multidisciplinary-symposium-on-islam-and-biomedicine/",
  },
  {
    img: "/images/our-impact/conf-4.jpg",
    eyebrow: "PROFESSIONAL WORKSHOP",
    title: "Religious Dimensions of Healthcare Delivery: A Multidisciplinary Workshop",
    text: "A practical workshop exploring faith, values, and healthcare delivery — equipping professionals with tools for more inclusive, compassionate care.",
    href: "/religious-dimensions-of-healthcare-delivery/",
  },
];

const STATS = [
  ["4+", "Signature Conferences"],
  ["500+", "Scholars & Clinicians"],
  ["15+", "Countries Represented"],
  ["12+", "Partner Institutions"],
];

const PILLARS = [
  {
    icon: "fa-solid fa-users",
    title: "Scholarly Dialogue",
    text: "Convening theologians, ethicists, clinicians, and community leaders for rigorous interdisciplinary conversation.",
  },
  {
    icon: "fa-solid fa-book-open-reader",
    title: "Research & Education",
    text: "Generating evidence-based insights that advance Muslim health equity and culturally responsive care.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Community Impact",
    text: "Translating academic scholarship into practical guidance for Muslim patients, families, and healthcare providers.",
  },
];

export default function ConferencesPage() {
  return (
    <div className="conf-page">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <header className="hero-seamless hero-conf-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/our-impact/conf-2.jpg")}
            alt="Scholars and healthcare professionals at a conference"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">CONFERENCES &amp; PUBLIC PROGRAMS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Convening Voices for <em>a Healthier Future.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M brings together thought leaders, healthcare professionals, Islamic scholars, and community members to explore pressing questions at the intersection of Islam and medicine.
            </p>
            <div className="hero-seamless-actions">
              <a href="#conferences" className="btn-seamless-maroon">
                VIEW CONFERENCES <i className="fa-solid fa-arrow-down ms-2" />
              </a>
              <Link href="/events" className="btn-seamless-outline">
                UPCOMING EVENTS <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote">
            <p className="quote-text">
              Scholarly Dialogue.<br />
              Bioethics.<br />
              Public Impact.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section className="conf-stats">
        <div className="container">
          <div className="conf-stats-grid">
            {STATS.map(([num, label]) => (
              <div className="conf-stat" key={label}>
                <span className="conf-stat-num">{num}</span>
                <span className="conf-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH (3 PILLAR CARDS) ──────────────────────── */}
      <section className="conf-approach-section">
        <div className="container">
          <div className="conf-section-head">
            <p className="conf-eyebrow conf-eyebrow-maroon">OUR APPROACH</p>
            <h2 className="conf-section-title">Why II&amp;M Conferences Matter</h2>
            <div className="conf-accent-bar" />
          </div>
          <div className="conf-pillars-grid">
            {PILLARS.map((p) => (
              <div className="conf-pillar-card" key={p.title}>
                <div className="conf-pillar-icon" aria-hidden="true">
                  <i className={p.icon} />
                </div>
                <h3 className="conf-pillar-title">{p.title}</h3>
                <p className="conf-pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFERENCE LIST ─────────────────────────────────────── */}
      <section className="conf-list" id="conferences">
        <div className="container">
          <div className="conf-section-head">
            <p className="conf-eyebrow conf-eyebrow-maroon">ALL CONFERENCES &amp; PROGRAMS</p>
            <h2 className="conf-section-title">Our Signature Events</h2>
            <div className="conf-accent-bar" />
          </div>
          <div className="conf-cards">
            {CONFERENCES.map((item, idx) => (
              <article className="conf-card" key={item.title}>
                <div className="conf-card-num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="conf-card-media">
                  <img src={asset(item.img)} alt={item.title} loading="lazy" />
                </div>
                <div className="conf-card-body">
                  <p className="conf-card-eyebrow">{item.eyebrow}</p>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="conf-card-text">{item.text}</p>
                  <Link href={item.href} className="conf-card-link">
                    LEARN MORE <i className="fa-solid fa-arrow-right ms-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ───────────────────────────────────────── */}
      <section className="conf-quote-section">
        <div className="container">
          <div className="conf-quote-inner">
            <span className="conf-quote-mark" aria-hidden="true">"</span>
            <p className="conf-quote-text">
              Every conference is a step toward a healthcare system that sees and serves the whole person — body, mind, and faith.
            </p>
            <span className="conf-quote-attr">— Initiative on Islam &amp; Medicine</span>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="conf-cta">
        <div className="conf-cta-bg">
          <img
            src={asset("/images/our-impact/cta-mosque.jpg")}
            alt="Mosque architecture"
            loading="lazy"
          />
          <div className="conf-cta-overlay" />
        </div>
        <div className="container conf-cta-inner">
          <p className="conf-eyebrow">PARTNER WITH US</p>
          <div className="conf-hero-bar" />
          <h2 className="conf-cta-title">Host or Sponsor a Conference</h2>
          <p className="conf-cta-lead">
            Interested in bringing an II&amp;M conference to your institution or community? We welcome partnerships with academic centers, hospitals, mosques, and community organizations.
          </p>
          <div className="conf-cta-actions">
            <Link href="/consultation" className="btn-seamless-maroon">
              GET IN TOUCH <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
            <Link href="/impact" className="btn-seamless-outline">
              VIEW OUR IMPACT <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
