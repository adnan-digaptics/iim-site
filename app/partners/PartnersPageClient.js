"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset } from "../../lib/asset";
import PastPartners from "../about/PastPartners";

const PARTNER_CATEGORIES = [
  {
    category: "Academic & Research Institutions",
    desc: "Collaborating with renowned academic institutions on empirical bioethics research, interdisciplinary symposia, and scholarly dialogue.",
    partners: [
      { name: "The University of Chicago", logo: "/images/partners/collaborations/uchicago.png", role: "Research & Academic Collaboration" },
      { name: "Medical College of Wisconsin", logo: "/images/partners/collaborations/mcw.png", role: "Medical Education & Clinical Ethics" },
      { name: "International Islamic University Malaysia", logo: "/images/partners/collaborations/iium.png", role: "Global Theological & Scientific Exchange" },
    ],
  },
  {
    category: "Foundations & Philanthropic Alliances",
    desc: "Partnering with global philanthropic organizations dedicated to the constructive dialogue between science and religion.",
    partners: [
      { name: "John Templeton Foundation", logo: "/images/partners/collaborations/templeton.jpg", role: "Grant Funding & Intellectual Inquiry" },
      { name: "Muslim Community Center (MCC)", logo: "/images/partners/collaborations/mcc.jpg", role: "Community Health & Educational Engagement" },
    ],
  },
  {
    category: "Medical & Clinical Associations",
    desc: "Working with leading Muslim physician organizations and healthcare professional networks.",
    partners: [
      { name: "IMANA", logo: "/images/partners/collaborations/imana.png", role: "Islamic Medical Association of North America" },
      { name: "CPSA", logo: "/images/partners/collaborations/cpsa.png", role: "Council of Pakistani Physicians in North America" },
    ],
  },
  {
    category: "Educational Institutions & Islamic Schools",
    desc: "Equipping Islamic high schools, educators, and youth leaders with evidence-informed science & theology curricula.",
    partners: [
      { name: "Darul Qasim", logo: "/images/partners/collaborations/darul-qasim.png", role: "Traditional Islamic Sciences Institute" },
      { name: "Universal School", logo: "/images/partners/collaborations/universal-school.png", role: "Secondary Education Partner" },
      { name: "Basira Education", logo: "/images/partners/collaborations/basira-education.png", role: "Theological Education & Rational Sciences" },
      { name: "ISLA", logo: "/images/partners/collaborations/isla.png", role: "Islamic Schools League of America" },
      { name: "Salaam School", logo: "/images/partners/collaborations/salaam-school.jpg", role: "Community School Partner" },
    ],
  },
];

const WHY_PARTNER = [
  { icon: "fa-flask", title: "Academic & Research", text: "Co-author research and contribute to empirical bioethics scholarship at the intersection of Islam and medicine." },
  { icon: "fa-chalkboard-user", title: "Educational Programs", text: "Partner on curricula, workshops, and training programs that equip healthcare professionals with faith-sensitive care skills." },
  { icon: "fa-people-group", title: "Community Outreach", text: "Connect with and serve diverse Muslim communities through evidence-informed health education initiatives." },
  { icon: "fa-globe", title: "Global Network", text: "Join a distinguished network of scholars, clinicians, theological leaders, and organizations worldwide." },
];

export default function PartnersPageClient() {
  const [formOpen, setFormOpen] = useState(false);

  /* lock body scroll while modal is open */
  useEffect(() => {
    if (!formOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [formOpen]);

  /* ESC key closes modal */
  useEffect(() => {
    if (!formOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setFormOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [formOpen]);

  return (
    <div className="partners-page">

      {/* ── Hero ── */}
      <header className="hero-seamless hero-partners-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/donation/donate-hero.jpg")}
            alt="Healthcare collaboration and partnership"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">OUR NETWORK &amp; COLLABORATIONS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Partners &amp; <em>Collaborators</em>
            </h1>
            <p className="hero-seamless-lead">
              The Initiative on Islam &amp; Medicine collaborates with leading universities,
              academic medical centers, religious foundations, and community organizations to
              bridge traditional Islamic wisdom and contemporary healthcare.
            </p>
            <div className="hero-seamless-actions">
              <button type="button" className="btn-seamless-maroon" onClick={() => setFormOpen(true)}>
                COLLABORATE WITH US <i className="fa-solid fa-arrow-right ms-2" />
              </button>
              <Link href="/about" className="btn-seamless-outline">
                ABOUT OUR WORK <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Marquee ── */}
      <PastPartners />

      {/* ── Partner Categories ── */}
      <section className="partners-categories-section">
        <div className="container">
          <div className="row g-5">
            {PARTNER_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="partner-cat-card">
                  <h2 className="partner-cat-title">{cat.category}</h2>
                  <p className="partner-cat-desc">{cat.desc}</p>
                  <div className="partner-items-grid">
                    {cat.partners.map((p, pIdx) => (
                      <div key={pIdx} className="partner-item-card">
                        <div className="partner-item-logo-wrap">
                          <img src={asset(p.logo)} alt={p.name} className="partner-item-logo" loading="lazy" />
                        </div>
                        <div className="partner-item-info">
                          <h3 className="partner-item-name">{p.name}</h3>
                          <span className="partner-item-role">{p.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaborate CTA Section ── */}
      <section className="partners-collab-section" id="collaborate">
        <div className="container">
          <div className="partners-collab-header">
            <p className="partners-collab-eyebrow">COLLABORATE WITH US</p>
            <h2 className="partners-collab-heading">Interested in Partnering With II&amp;M?</h2>
            <p className="partners-collab-subtext">
              Whether you represent an academic medical center, a community institution, or an
              educational foundation — we welcome opportunities for meaningful collaboration.
            </p>
          </div>

          <div className="partners-why-grid">
            {WHY_PARTNER.map((item) => (
              <div className="partners-why-card" key={item.title}>
                <span className="partners-why-icon">
                  <i className={`fa-solid ${item.icon}`} />
                </span>
                <h4 className="partners-why-title">{item.title}</h4>
                <p className="partners-why-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="partners-collab-cta">
            <button type="button" className="partners-form-open-btn" onClick={() => setFormOpen(true)}>
              <i className="fa-solid fa-handshake me-2" />
              FILL OUT PARTNERSHIP FORM
            </button>
            <p className="partners-or-email">
              Or email us at{" "}
              <a href="mailto:info@medicineandislam.org">info@medicineandislam.org</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Modal Popup ── */}
      {formOpen && (
        <div
          className="partners-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Partner / Collaboration Form"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="partners-modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="partners-modal-header">
              <div>
                <p className="partners-modal-eyebrow">COLLABORATION INTAKE</p>
                <h3 className="partners-modal-title">Partner / Collaboration Form</h3>
              </div>
              <button
                type="button"
                className="partners-modal-close"
                onClick={() => setFormOpen(false)}
                aria-label="Close form"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="partners-modal-body">
              <iframe
                src="https://links.360growthlab.com/widget/form/3awHj1uCU83Tc44PIGHn"
                style={{ width: "100%", height: "1689px", border: "none", display: "block" }}
                id="inline-3awHj1uCU83Tc44PIGHn"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Partner / Collaboration Intake Form"
                data-height="1689"
                data-layout-iframe-id="inline-3awHj1uCU83Tc44PIGHn"
                data-form-id="3awHj1uCU83Tc44PIGHn"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="Partner / Collaboration Intake Form"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
