import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Conferences & Public Programs | Initiative on Islam & Medicine",
  description:
    "II&M convenes thought leaders, healthcare professionals, scholars, and community members to explore pressing issues at the intersection of Islam and medicine.",
};

const conferences = [
  {
    img: asset("/images/our-impact/conf-1.jpg"),
    eyebrow: "BIOETHICS DIALOGUE",
    title: "Dignity and Healthcare at End-of-Life: Abrahamic Faiths in a Bioethics Conversation",
    text: "A multidisciplinary dialogue on dignity, care, and faith traditions at the end of life. Bringing together scholars, clinicians, chaplains, and community leaders.",
    href: "/dignity-and-healthcare-at-end-of-life/",
  },
  {
    img: asset("/images/our-impact/conf-2.jpg"),
    eyebrow: "MULTIDISCIPLINARY CONFERENCE",
    title: "Interfaces and Discourses: A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine",
    text: "Scholars and clinicians examining the intersections of theology, law, and biomedicine — advancing rigorous interdisciplinary dialogue.",
    href: "/interfaces-and-discourses/",
  },
  {
    img: asset("/images/our-impact/conf-3.jpg"),
    eyebrow: "ANNUAL SYMPOSIUM",
    title: "Multidisciplinary Symposium on Islam and Biomedicine",
    text: "Advancing research and conversation across medicine, ethics, and Islamic studies. A flagship gathering of leading voices in Islam and healthcare.",
    href: "/multidisciplinary-symposium-on-islam-and-biomedicine/",
  },
  {
    img: asset("/images/our-impact/conf-4.jpg"),
    eyebrow: "PROFESSIONAL WORKSHOP",
    title: "Religious Dimensions of Healthcare Delivery: A Multidisciplinary Workshop",
    text: "A practical workshop exploring faith, values, and healthcare delivery — equipping professionals with tools for more inclusive, compassionate care.",
    href: "/religious-dimensions-of-healthcare-delivery/",
  },
];

const stats = [
  ["4+", "Signature Conferences"],
  ["500+", "Scholars & Clinicians"],
  ["15+", "Countries Represented"],
  ["12+", "Partner Institutions"],
];

export default function ConferencesPage() {
  return (
    <div className="conf-page">

      {/* HERO */}
      <header className="conf-hero">
        <div className="conf-hero-bg">
          <img
            src={asset("/images/our-impact/conf-2.jpg")}
            alt="Scholars and healthcare professionals at a conference"
          />
          <div className="conf-hero-overlay" />
        </div>
        <div className="container conf-hero-inner">
          <p className="conf-eyebrow">CONFERENCES &amp; PUBLIC PROGRAMS</p>
          <div className="conf-hero-bar" />
          <h1>Convening Voices for <em>a Healthier Future.</em></h1>
          <p className="conf-hero-lead">
            II&amp;M brings together thought leaders, healthcare professionals, Islamic scholars, and community members to explore pressing questions at the intersection of Islam and medicine.
          </p>
        </div>
      </header>

      {/* STATS */}
      <section className="conf-stats">
        <div className="container">
          <div className="conf-stats-grid">
            {stats.map(([num, label]) => (
              <div className="conf-stat" key={label}>
                <span className="conf-stat-num">{num}</span>
                <span className="conf-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCE LIST */}
      <section className="conf-list">
        <div className="container">
          <div className="conf-list-head">
            <p className="conf-eyebrow conf-eyebrow-maroon">ALL CONFERENCES &amp; PROGRAMS</p>
            <h2>Our Signature Events</h2>
          </div>
          <div className="conf-cards">
            {conferences.map((item) => (
              <article className="conf-card" key={item.title}>
                <div className="conf-card-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="conf-card-body">
                  <p className="conf-card-eyebrow">{item.eyebrow}</p>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="conf-card-text">{item.text}</p>
                  <Link href={item.href} className="conf-card-link">
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="conf-cta">
        <div className="container">
          <p className="conf-eyebrow conf-eyebrow-gold">PARTNER WITH US</p>
          <h2>Host or Sponsor a Conference</h2>
          <p>
            Interested in bringing an II&amp;M conference to your institution or community? We welcome partnerships with academic centers, hospitals, mosques, and community organizations.
          </p>
          <div className="conf-cta-actions">
            <Link href="/consultation" className="btn-seamless-maroon">
              GET IN TOUCH <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/impact" className="btn-seamless-outline">
              VIEW OUR IMPACT <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
