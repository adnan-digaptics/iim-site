"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

/** Set when a verified Zeffy (or other) donation URL is available. */
const DONATION_CHECKOUT_URL = null;

/** II&M / Dr. Padela talk from Initiative workshop materials (YouTube). */
const IMPACT_VIDEO_ID = "JAwBx3WjAuA";

const JOURNEY = [
  ["fa-people-group", "Listening", "We listened to Muslim patients, healthcare professionals, and communities about real needs in care."],
  ["fa-magnifying-glass", "Researching", "We conducted rigorous research to understand evidence, ethics, and practice gaps."],
  ["fa-file-lines", "Publishing", "We published findings that inform education, policy conversations, and clinical guidance."],
  ["fa-handshake", "Collaborating", "We partnered with institutions, scholars, and organizations to turn insight into action."],
  ["fa-book-open", "Educating & Engaging", "We deliver courses, workshops, consulting, and speaking that equip learners and leaders."],
  ["fa-bullseye", "Today & Beyond — Making an Impact", "Your support helps us expand education and create lasting change in healthcare."],
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
    img: "/images/donation/voice-1.jpg",
    duration: "2:18",
    quote: "II&M gave me language and frameworks to care for Muslim patients with greater confidence and compassion.",
    name: "Dr. Rania Awaad",
    role: "Psychiatrist, Columbia University",
  },
  {
    id: "t2",
    cat: "students",
    img: "/images/donation/voice-2.jpg",
    duration: "1:54",
    quote: "The courses helped me connect my faith with clinical training in a way that feels rigorous and practical.",
    name: "Omar H.",
    role: "Medical Student",
  },
  {
    id: "t3",
    cat: "healthcare",
    img: "/images/donation/voice-3.jpg",
    duration: "3:02",
    quote: "Their research and teaching strengthen how institutions approach ethics, education, and community partnership.",
    name: "Dr. Aasim I. Padela",
    role: "Founder, Initiative on Islam & Medicine",
  },
  {
    id: "t4",
    cat: "leaders",
    img: "/images/donation/impact-bridges.jpg",
    duration: "2:05",
    quote: "Partnering with II&M helped our organization bring evidence-informed learning to our community.",
    name: "Community Partner",
    role: "Nonprofit Leader",
  },
  {
    id: "t5",
    cat: "patients",
    img: "/images/donation/impact-learners.jpg",
    duration: "1:41",
    quote: "Knowing clinicians are learning faith-sensitive care makes families feel seen and respected.",
    name: "Family Advocate",
    role: "Patient & Family Voice",
  },
];

const AMOUNTS = [
  [25, "Supports a learner scholarship seat"],
  [50, "Supports workshop materials"],
  [100, "Supports a community education session"],
  [250, "Supports curriculum development"],
  [500, "Supports institutional training"],
];

const IMPACT = [
  ["/images/donation/impact-learners.jpg", "fa-user-doctor", "Equip Learners and Clinicians", "Deliver courses and practical resources that strengthen ethical, faith-informed care."],
  ["/images/donation/impact-institutions.jpg", "fa-building-columns", "Strengthen Institutions", "Integrate curricula and training into schools, hospitals, and organizations."],
  ["/images/donation/impact-expertise.jpg", "fa-microphone", "Share Expertise Globally", "Bring research-informed teaching and speaking to communities worldwide."],
  ["/images/donation/impact-resources.jpg", "fa-laptop", "Develop Practical Resources", "Create guides, modules, and tools that move knowledge into everyday practice."],
  ["/images/donation/impact-bridges.jpg", "fa-handshake", "Build Bridges and Partnerships", "Collaborate with partners who expand education and community impact."],
  ["/images/donation/impact-change.jpg", "fa-seedling", "Create Lasting Change", "Sustain programs that improve understanding, equity, and compassionate care."],
];

const PARTNERS = [
  ["/images/partners/icons/muslim-edex.png", "Muslim EdEx", "Professional learning platform"],
  ["/images/partners/icons/imana.png", "IMANA", "Medical education & professional development"],
  ["/images/partners/icons/albalagh.png", "ALBALAGH INSTITUTE", "Islamic scholarship and education"],
  ["/images/partners/icons/umma-health.png", "UMMA HEALTH", "Community health and healthcare initiatives"],
  ["/images/partners/icons/workspace-junction.png", "Workspace Junction", "Community space and events"],
  ["/images/partners/icons/360-growth-lab.png", "360 Growth Lab", "Technology and digital innovation"],
];

export default function DonatePageClient() {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [freq, setFreq] = useState("once");
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const filtered = useMemo(
    () => (filter === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.cat === filter)),
    [filter]
  );

  const pages = Math.max(1, Math.ceil(filtered.length / 3));
  const safePage = Math.min(page, pages - 1);
  const visible = filtered.slice(safePage * 3, safePage * 3 + 3);

  const selectedAmount = customOpen ? Number(custom) || 0 : amount;

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

  function handleDonate() {
    if (!selectedAmount || selectedAmount <= 0) return;
    if (DONATION_CHECKOUT_URL) {
      const url = new URL(DONATION_CHECKOUT_URL);
      url.searchParams.set("amount", String(selectedAmount));
      url.searchParams.set("frequency", freq);
      window.open(url.toString(), "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = `/consultation?intent=donate&amount=${selectedAmount}&frequency=${freq}`;
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
            src="/images/donation/donate-hero.jpg"
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
              Real Knowledge.<br />
              Real People.<br />
              Real Change.
            </h1>
            <p className="hero-seamless-lead">
              For years, we listened to Muslim patients, healthcare professionals, and communities. We conducted research, published our findings, and worked with diverse stakeholders. Today, we are bringing together leading thinkers, educators, and practitioners to deliver education, workshops, courses, training, consulting, and speaking engagements — turning knowledge into meaningful impact.
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

            <aside className="donate-panel" id="donate-panel">
              <p className="donate-eyebrow">SUPPORT II&amp;M</p>
              <h2 className="donate-h2">Choose Your Impact</h2>
              <p className="donate-panel-lead">
                Your support helps us expand education, advance research, and build bridges between healthcare and Muslim communities.
              </p>
              <div className="donate-freq" role="group" aria-label="Donation frequency">
                <button type="button" className={freq === "once" ? "is-active" : ""} onClick={() => setFreq("once")}>One-Time</button>
                <button type="button" className={freq === "monthly" ? "is-active" : ""} onClick={() => setFreq("monthly")}>Monthly</button>
              </div>
              <div className="donate-amounts">
                {AMOUNTS.map(([value, note]) => (
                  <button
                    key={value}
                    type="button"
                    className={`donate-amount${!customOpen && amount === value ? " is-selected" : ""}`}
                    onClick={() => {
                      setAmount(value);
                      setCustomOpen(false);
                    }}
                  >
                    <strong>${value}</strong>
                    <span>{note}</span>
                  </button>
                ))}
                <button
                  type="button"
                  className={`donate-amount${customOpen ? " is-selected" : ""}`}
                  onClick={() => setCustomOpen(true)}
                >
                  <strong>Custom</strong>
                  <span>Enter your own amount</span>
                </button>
              </div>
              {customOpen ? (
                <label className="donate-custom">
                  <span>Custom amount (USD)</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="Enter amount"
                  />
                </label>
              ) : null}
              <button type="button" className="donate-submit" onClick={handleDonate}>
                SUPPORT II&amp;M <i className="fa-solid fa-arrow-right" />
              </button>
              {!DONATION_CHECKOUT_URL ? (
                <p className="donate-checkout-note">
                  Online checkout (Zeffy) is not configured yet — you will be guided to contact II&amp;M to complete your gift.
                </p>
              ) : null}
              <div className="donate-secure">
                <i className="fa-solid fa-lock" />
                <div>
                  <strong>Secure &amp; Fee-Free Giving</strong>
                  <p>We use Zeffy, a 100% free, secure giving platform, so more of your support goes directly to our mission.</p>
                </div>
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
            {IMPACT.map(([img, icon, title, text]) => (
              <article className="donate-impact-card" key={title}>
                <img src={img} alt={title} />
                <span className="donate-impact-icon"><i className={`fa-solid ${icon}`} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
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
                Together, We Can Create a More<br />
                Compassionate Healthcare Future
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
            <img src="/images/donation/cta-mosque.jpg" alt="Mosque with blue dome viewed through an Islamic archway at sunset" />
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
          <div className="donate-partners-grid">
            {PARTNERS.map(([logo, name, text]) => (
              <article className="donate-partner" key={name}>
                <div className="donate-partner-logo">
                  <img src={logo} alt="" />
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
