"use client";

import { asset } from "../../lib/asset";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

/** II&M / Dr. Padela talk from Initiative workshop materials (YouTube). */
const IMPACT_VIDEO_ID = "t4U0QCrrYcA";

const JOURNEY = [
  ["fa-people-group", "Listening", <>We listened to Muslim patients, healthcare professionals, and communities about real needs in care.</>],
  ["fa-magnifying-glass", "Researching", <>We conducted rigorous research to understand evidence, ethics, and practice gaps.</>],
  ["fa-file-lines", "Publishing", <>We published findings that inform education, policy conversations, and clinical guidance. See our <Link href="/books">published articles and books</Link>.</>],
  ["fa-handshake", "Collaborating", <>We partnered with institutions, scholars, and organizations to turn insight into action. Projects include <Link href="/mahsn-pro">MAHSN</Link> and <Link href="/community-health-research">EMARCH</Link>.</>],
  ["fa-book-open", "Educating & Engaging", <>We deliver <Link href="/courses">courses</Link>, <Link href="/workshops">workshops</Link>, <Link href="/consultation">consulting</Link>, and <Link href="/speaking">speaking</Link> that equip learners and leaders.</>],
  ["fa-bullseye", "Today & Beyond — Making an Impact", <>Your support helps us expand education and create lasting change in healthcare. <Link href="/donate">Support us today</Link>.</>],
];

const FILTERS = [
  ["all", "All"],
  ["healthcare", "Healthcare Professionals"],
  ["students", "Medical Students"],
  ["leaders", "Community Leaders"],
  ["patients", "Patients & Families"],
];

const TESTIMONIALS = [
  {
    id: "t1",
    cat: "healthcare",
    img: asset("/images/donation/voice-1.jpg"),
    duration: "2:18",
    quote: "II&M gave me language and frameworks to care for Muslim patients with greater confidence and compassion.",
    name: "Rania Awad",
    role: "Psychiatrist, Columbia University",
  },
  {
    id: "t2",
    cat: "students",
    img: asset("/images/donation/voice-2.jpg"),
    duration: "1:54",
    quote: "The courses helped me connect my faith with clinical training in a way that feels rigorous and practical.",
    name: "Omar H.",
    role: "Medical Student",
  },
  {
    id: "t3",
    cat: "healthcare",
    img: asset("/images/donation/voice-3.jpg"),
    duration: "3:02",
    quote: "Their research and teaching strengthen how institutions approach ethics, education, and community partnership.",
    name: "Dr. Aasim I. Padela",
    role: "Founder, Initiative on Islam & Medicine",
  },
  {
    id: "t4",
    cat: "leaders",
    img: asset("/images/donation/impact-bridges.jpg"),
    duration: "2:05",
    quote: "Partnering with II&M helped our organization bring evidence-informed learning to our community.",
    name: "Community Partner",
    role: "Nonprofit Leader",
  },
  {
    id: "t5",
    cat: "patients",
    img: asset("/images/donation/impact-learners.jpg"),
    duration: "1:41",
    quote: "Knowing clinicians are learning faith-sensitive care makes families feel seen and respected.",
    name: "Family Advocate",
    role: "Patient & Family Voice",
  },
];

const IMPACT = [
  [asset("/images/donation/impact-learners.jpg"), "fa-user-doctor", "Equip Learners and Clinicians", "Deliver courses and practical resources that strengthen ethical, faith-informed care.", "/courses"],
  [asset("/images/donation/impact-institutions.jpg"), "fa-building-columns", "Strengthen Institutions", "Integrate curricula and training into schools, hospitals, and organizations.", "/workshops"],
  [asset("/images/donation/impact-expertise.jpg"), "fa-microphone", "Share Expertise Globally", "Bring research-informed teaching and speaking to communities worldwide.", "/speaking"],
  [asset("/images/donation/impact-resources.jpg"), "fa-laptop", "Develop Practical Resources", "Create guides, modules, and tools that move knowledge into everyday practice.", "/mahsn-pro"],
  [asset("/images/donation/impact-bridges.jpg"), "fa-handshake", "Build Bridges and Partnerships", "Collaborate with partners who expand education and community impact.", "/consultation"],
  [asset("/images/donation/impact-change.jpg"), "fa-seedling", "Create Lasting Change", "Sustain programs that improve understanding, equity, and compassionate care.", "/community-health-research"],
];

const PARTNERS = [
  [asset("/images/partners/logos/muslim-edex.webp"), "Muslim EdEx", "Professional learning platform", "https://muslimEdEx.com"],
  [asset("/images/partners/logos/imana.webp"), "IMANA", "Medical education & professional development"],
  [asset("/images/partners/logos/albalagh.png"), "ALBALAGH INSTITUTE", "Islamic scholarship and education"],
  [asset("/images/partners/logos/umma-health.png"), "UMMA HEALTH", "Community health and healthcare initiatives"],
  [asset("/images/partners/logos/workspace-junction.png"), "Workspace Junction", "Community space and events"],
  [asset("/images/partners/icons/360-growth-lab.png"), "360 Growth Lab", "Technology and digital innovation"],
];

export default function DonatePageClient() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const filtered = useMemo(
    () => (filter === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.cat === filter)),
    [filter]
  );

  const pages = Math.max(1, Math.ceil(filtered.length / 3));
  const safePage = Math.min(page, pages - 1);
  const visible = filtered.slice(safePage * 3, safePage * 3 + 3);

  useEffect(() => {
    if (!activeVideoId) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveVideoId(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [activeVideoId]);

  function onFilter(key) {
    setFilter(key);
    setPage(0);
  }

  function openImpactVideo(videoId = IMPACT_VIDEO_ID) {
    const id = typeof videoId === "string" && videoId.length > 5 ? videoId : IMPACT_VIDEO_ID;
    setActiveVideoId(id);
  }

  function closeVideo() {
    setActiveVideoId(null);
  }

  return (
    <div className="donate-page">
      <header className="hero-seamless hero-donate-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/donation/donate-hero.jpg")}
            alt="Healthcare professionals in consultation"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">SUPPORT II&amp;M</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Real Knowledge. Real People. Real Change.
            </h1>
            <p className="hero-seamless-lead">
              For years, we listened to Muslim patients, healthcare professionals, and communities. We conducted <Link href="/research">research</Link>, published our findings, and worked with diverse stakeholders. Today, we are bringing together leading thinkers, educators, and practitioners to deliver education, <Link href="/workshops">workshops</Link>, <Link href="/courses">courses</Link>, training, <Link href="/consultation">consulting</Link>, and <Link href="/speaking">speaking engagements</Link> — turning knowledge into meaningful impact.
            </p>

            <div className="hero-seamless-actions donate-hero-actions">
              <a href="#donate-panel" className="btn-seamless-maroon">
                MAKE A DONATION <i className="fa-solid fa-arrow-right" />
              </a>
              <button type="button" className="donate-video-link" onClick={() => openImpactVideo()}>
                <span className="donate-video-link-icon" aria-hidden="true">
                  <i className="fa-solid fa-play" />
                </span>
                WATCH OUR IMPACT VIDEO
              </button>
            </div>
          </div>
          <div className="donate-hero-media-ui">
            <button type="button" className="donate-hero-play" onClick={() => openImpactVideo()} aria-label="Watch our impact video">
              <i className="fa-solid fa-play" />
            </button>
            <div className="donate-hero-caption">
              <strong>How II&amp;M Translates Knowledge into Change</strong>
              <span>A 90-second look at our mission, work, and impact.</span>
            </div>
          </div>
        </div>
      </header>

      {activeVideoId ? (
        <div className="donate-video-modal" role="dialog" aria-modal="true" aria-label="Impact video">
          <button type="button" className="donate-video-modal-backdrop" onClick={closeVideo} aria-label="Close video" />
          <div className="donate-video-modal-panel">
            <button type="button" className="donate-video-modal-close" onClick={closeVideo} aria-label="Close">
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="donate-video-modal-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="II&M impact video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              className="donate-video-modal-fallback"
              href={`https://www.youtube.com/watch?v=${activeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on YouTube <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </div>
        </div>
      ) : null}

      <section className="donate-journey">
        <div className="container">
          <p className="donate-eyebrow">OUR JOURNEY TO IMPACT</p>
          <h2 className="donate-h2">From Listening to Lasting Change</h2>
          <div className="donate-journey-grid">
            {JOURNEY.map(([icon, title, text], i) => (
              <article className="donate-journey-step" key={title}>
                <div className="donate-journey-top">
                  <span className={`donate-journey-icon${i % 2 ? " is-green" : ""}`}>
                    <i className={`fa-solid ${icon}`} />
                  </span>
                  {i < JOURNEY.length - 1 ? <i className="fa-solid fa-chevron-right donate-journey-arrow" /> : null}
                </div>
                <h3>{i + 1}. {title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-voices-wrap">
        <div className="container">
          <div className="donate-voices-grid">
            <div className="donate-voices">
              <p className="donate-eyebrow">VOICES OF IMPACT</p>
              <h2 className="donate-h2">Hear From Our Community</h2>
              <p className="donate-lead">
                Healthcare professionals, medical students, community leaders, and patients share how II&amp;M has made a difference in their lives and work.
              </p>
              <div className="donate-filters" role="tablist" aria-label="Testimonial categories">
                {FILTERS.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={filter === key}
                    className={`donate-filter${filter === key ? " is-active" : ""}`}
                    onClick={() => onFilter(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="donate-voice-cards">
                {visible.map((t) => (
                  <article className="donate-voice-card" key={t.id}>
                    <button type="button" className="donate-voice-thumb" onClick={() => openImpactVideo(t.video || IMPACT_VIDEO_ID)} aria-label={`Play testimonial from ${t.name}`}>
                      <img src={t.img} alt="" />
                      <span className="donate-voice-play"><i className="fa-solid fa-play" /></span>
                      <span className="donate-voice-time">{t.duration}</span>
                    </button>
                    <p className="donate-voice-quote">“{t.quote}”</p>
                    <div className="donate-voice-meta">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="donate-voice-nav">
                <div className="donate-voice-controls">
                  <button type="button" aria-label="Previous testimonials" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={safePage === 0}>
                    <i className="fa-solid fa-arrow-left" />
                  </button>
                  <button type="button" aria-label="Next testimonials" onClick={() => setPage((p) => Math.min(pages - 1, p + 1))} disabled={safePage >= pages - 1}>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                  <div className="donate-dots" aria-hidden="true">
                    {Array.from({ length: pages }).map((_, i) => (
                      <button key={i} type="button" className={i === safePage ? "is-active" : ""} onClick={() => setPage(i)} aria-label={`Go to slide ${i + 1}`} />
                    ))}
                  </div>
                </div>
                <Link href="/impact" className="donate-text-link">VIEW ALL TESTIMONIALS <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            </div>

            <aside
              className="donate-panel"
              id="donate-panel"
              style={{ alignSelf: "stretch", display: "flex" }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "450px",
                  width: "100%",
                  flex: 1,
                }}
              >
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{
                    position: "absolute",
                    border: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.zeffy.com/embed/donation-form/instilling-hikmah-in-healthcare"
                  allow="payment"
                  allowtransparency="true"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="donate-impact">
        <div className="container">
          <div className="donate-impact-head">
            <div>
              <p className="donate-eyebrow">WHAT YOUR SUPPORT MAKES POSSIBLE</p>
              <h2 className="donate-h2">Turning Knowledge into Real-World Impact</h2>
              <p className="donate-lead">
                Your generosity helps us bring together leading thinkers, educators, and practitioners to deliver education, training, and guidance that improves care and strengthens communities.
              </p>
            </div>
            <Link href="/impact" className="btn-seamless-maroon donate-impact-cta">
              OUR IMPACT <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="donate-impact-grid">
            {IMPACT.map(([img, icon, title, text, href]) => (
              <article className="donate-impact-card" key={title}>
                <img src={img} alt={title} />
                <span className="donate-impact-icon"><i className={`fa-solid ${icon}`} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                {href && (
                  <Link href={href} className="donate-impact-link">
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-cta-band container-fluid p-0">
        <div className="donate-cta-split row g-0">
          <div className="col-12 col-lg-6 donate-cta-copy">
            <div className="donate-cta-copy-inner">
              <h2>
                Together, We Can Create a More Compassionate Healthcare Future
              </h2>
              <p>
                The research established the need. The evidence built our foundation. Now, your support helps us put that knowledge to work — through education, training, consultation, and speaking that create meaningful change.
              </p>
              <a href="#donate-panel" className="donate-cta-btn">
                SUPPORT II&amp;M TODAY <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 donate-cta-media">
            <img src={asset("/images/donation/cta-mosque.jpg")} alt="Mosque with blue dome viewed through an Islamic archway at sunset" />
          </div>
        </div>
      </section>

      <section className="donate-partners">
        <div className="container">
          <div className="donate-partners-head">
            <div>
              <p className="donate-eyebrow">OUR STRATEGIC PARTNERS</p>
              <h2 className="donate-h2">Collaborating for Greater Impact</h2>
              <p className="donate-lead">
                We work with leading organizations to expand education, strengthen communities, and advance healthcare at the intersection of Islam and medicine.
              </p>
            </div>
            <Link href="/consultation" className="btn-seamless-maroon">
              PARTNER WITH US <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="donate-partners-marquee">
            <div className="donate-partners-track" style={{ animation: "partner-logo-loop 28s linear infinite" }}>
              {[0, 1].map((copy) =>
                PARTNERS.map(([logo, name, text, href]) => (
                  <article
                    className={`donate-partner${name === "Muslim EdEx" ? " donate-partner-edex" : ""}`}
                    key={`${name}-${copy}`}
                    aria-hidden={copy === 1 ? "true" : undefined}
                  >
                    <div className="donate-partner-logo">
                      {href && copy === 0 ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website`}>
                          <img src={logo} alt={name} />
                        </a>
                      ) : (
                        <img src={logo} alt={copy === 0 ? name : ""} />
                      )}
                    </div>
                    <h3>
                      {href && copy === 0 ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                      ) : name}
                    </h3>
                    <p>{text}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
