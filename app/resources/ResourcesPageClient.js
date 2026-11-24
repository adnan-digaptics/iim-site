"use client";

import { asset } from "../../lib/asset";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// useMemo removed — tab filtering is synchronous

const TABS = [
  { id: "guides",    label: "Replication Guides & Teaching Modules" },
  { id: "research",  label: "Survey Measures" },
  { id: "workshops", label: "Decision Aids" },
];

const RESOURCES = [
  /* ── Replication Guides & Teaching Modules ── */
  {
    id: "eol-workshop",
    title: "Islamic Dimensions of End-of-Life Healthcare: A Community Education Workshop Replication Guide",
    tab: "guides",
    image: "/images/resource-covers/cover-eol-workshop.png",
    href: "/exploring-bioscience",
  },
  {
    id: "women-health-guide",
    title: "Caring for Body and Soul: A Workshop on Women's Health Program Replication Guide.",
    tab: "guides",
    image: "/images/resource-covers/cover-women-health-guide.png",
    href: "/pdfs/resources/women-health-replication-guide.pdf",
  },
  {
    id: "women-health-manual",
    title: "Caring for Body and Soul: A Workshop on Women's Health Peer Educator Training Manual.",
    tab: "guides",
    image: "/images/resource-covers/cover-women-health-manual.png",
    href: "/pdfs/resources/women-health-peer-educator-manual.pdf",
  },
  {
    id: "pcor-toolkit",
    title: "Toolkit For Patient-Centered Outcomes Research in Islamic Schools",
    tab: "guides",
    image: "/images/resource-covers/cover-pcor-toolkit.png",
    href: "/pdfs/resources/pcor-islamic-schools-toolkit.pdf",
  },
  {
    id: "bioscience",
    title: "Exploring Bioscience & Islam (A Curriculum on Fundamental Questions about the Human Being)",
    tab: "guides",
    image: "/images/resource-covers/cover-bioscience.png",
    href: "/exploring-bioscience",
  },
  {
    id: "mosque-pcor",
    title: "A Tool-kit for Mosque-Based Patient Centered Outcomes Research — A Resource Guide For Conducting PCOR In Muslim Communities",
    tab: "guides",
    image: "/images/resource-covers/cover-mosque-pcor.png",
    href: "/mosque-health-education",
  },
  /* ── Survey Measures ── */
  {
    id: "survey-1",
    title: "Adapting a Religious Health Fatalism Measure for Use in Muslim Populations",
    tab: "research",
    image: "/images/resource-covers/cover-survey-1.png",
    href: "/research",
  },
  {
    id: "survey-2",
    title: "The Development and Validation of a Modesty Measure for Diverse Muslim Populations",
    tab: "research",
    image: "/images/resource-covers/cover-survey-2.png",
    href: "/research",
  },
  {
    id: "survey-3",
    title: "The Development and Validation of the Islamic Knowledge of Living Organ Donation Knowledge Scale",
    tab: "research",
    image: "/images/resource-covers/cover-survey-1.png",
    href: "/living-organ-donation",
  },
  /* ── Decision Aids ── */
  {
    id: "decision-1",
    title: "Islamic Bioethical Considerations for End-of-Life Healthcare: A Guide for Muslim Americans",
    tab: "workshops",
    image: "/images/resource-covers/cover-decision-1.png",
    href: "/pdfs/resources/organ-donation-guide.pdf",
  },
  {
    id: "decision-2",
    title: "End-of-Life Care Decision Aid for Muslim Patients & Families",
    tab: "workshops",
    image: "/images/resource-covers/cover-decision-2.png",
    href: "/books",
  },
];

const PUBLICATIONS = [
  {
    id: "mental-health",
    journal: "Journal of Muslim Mental Health",
    title: "Mental Health and Muslim Communities",
    description: "Exploring mental health needs, stigma, and opportunities for culturally responsive care.",
    image: "/images/research/approach.jpg",
    href: "/research",
  },
  {
    id: "workforce",
    journal: "BMC Public Health",
    title: "Muslim Physicians' Experiences in the Healthcare Workforce",
    description: "A national survey on workplace discrimination and inclusivity.",
    image: "/images/research/project-equity.jpg",
    href: "/research",
  },
  {
    id: "eol-prefs",
    journal: "Journal of Palliative Medicine",
    title: "End-of-Life Care Preferences Among American Muslims",
    description: "Understanding values, needs, and practical implications for healthcare delivery.",
    image: "/images/research/project-palliative.jpg",
    href: "/research",
  },
  {
    id: "mammography",
    journal: "JCO Oncology Practice",
    title: "Religiously Tailored Mammography Intervention",
    description: "Impact of faith-informed education on cancer screening among Muslim women.",
    image: "/images/research/project-mammography.jpg",
    href: "/research",
  },
  {
    id: "spiritual-care",
    journal: "Journal of Religion and Health",
    title: "Spiritual Care Needs in US Hospitals",
    description: "Findings from the MAHSN study on Muslim patients' religious and spiritual resource needs.",
    image: "/images/research/resource-pubs.jpg",
    href: "/research",
  },
];

const AUDIENCE_CARDS = [
  {
    id: "patients",
    title: "For Patients & Families",
    description: "Guides, FAQs, and educational materials to help navigate healthcare decisions with confidence.",
    cta: "EXPLORE PATIENT RESOURCES",
    image: "/images/resources/aud-patients.jpg",
  },
  {
    id: "clinicians",
    title: "For Healthcare Professionals",
    description: "Clinical guidance, educational tools, and research to support culturally and religiously responsive care.",
    cta: "EXPLORE CLINICIAN RESOURCES",
    image: "/images/resources/aud-clinicians.jpg",
  },
  {
    id: "leaders",
    title: "For Community & Faith Leaders",
    description: "Workshop materials, toolkits, and resources to support health education in community settings.",
    cta: "EXPLORE COMMUNITY RESOURCES",
    image: "/images/resources/aud-leaders.jpg",
  },
  {
    id: "researchers",
    title: "For Scholars & Researchers",
    description: "Publications, datasets, and research tools to advance knowledge in the field of Islam and medicine.",
    cta: "EXPLORE RESEARCH RESOURCES",
    image: "/images/resources/aud-research.jpg",
  },
];

export default function ResourcesPageClient() {
  const [activeTab, setActiveTab] = useState("guides");
  const scroller = useRef(null);
  const pausedRef = useRef(false);
  const tabItems = RESOURCES.filter((r) => r.tab === activeTab);
  const pubCount = PUBLICATIONS.length;
  const slides = [...PUBLICATIONS, ...PUBLICATIONS];

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const query = window.matchMedia("(max-width: 991px)");
    let frame;
    let timer;
    let anim;

    const wrap = (value) => {
      const half = el.scrollWidth / 2;
      if (half <= 1) return 0;
      return ((value % half) + half) % half;
    };

    const fitCards = () => {
      const mobile = query.matches;
      const size = mobile ? `${el.clientWidth}px` : "";
      el.querySelectorAll(".res-pub-card").forEach((card) => {
        card.style.flex = mobile ? `0 0 ${size}` : "";
        card.style.width = size;
        card.style.maxWidth = size;
      });
    };

    const cardStep = () => {
      fitCards();
      const card = el.querySelector(".res-pub-card");
      return card ? card.getBoundingClientRect().width : el.clientWidth;
    };

    const animateBy = (distance) => {
      const start = el.scrollLeft;
      const began = performance.now();
      cancelAnimationFrame(anim);
      const step = (now) => {
        const progress = Math.min(1, (now - began) / 650);
        const eased = 1 - (1 - progress) ** 3;
        el.scrollLeft = wrap(start + distance * eased);
        if (progress < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(anim);
      clearInterval(timer);
      if (query.matches) {
        const stepWidth = cardStep();
        el.scrollLeft = stepWidth > 1 ? wrap(Math.round(el.scrollLeft / stepWidth) * stepWidth) : 0;
        timer = window.setInterval(() => {
          if (!pausedRef.current) animateBy(cardStep());
        }, 3200);
        return;
      }
      const tick = () => {
        if (!pausedRef.current) {
          const half = el.scrollWidth / 2;
          if (half > 1) {
            const next = el.scrollLeft + 0.65;
            el.scrollLeft = next >= half ? next - half : next;
          }
        }
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    start();
    query.addEventListener("change", start);
    window.addEventListener("resize", start);
    return () => {
      query.removeEventListener("change", start);
      window.removeEventListener("resize", start);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(anim);
      clearInterval(timer);
    };
  }, []);

  function movePublications(direction) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector(".res-pub-card");
    const step = card ? card.getBoundingClientRect().width : el.clientWidth;
    const half = el.scrollWidth / 2;
    if (half <= 1) return;
    el.scrollLeft = ((el.scrollLeft + direction * step) % half + half) % half;
  }

  function onCarouselKey(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      movePublications(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePublications(-1);
    }
  }

  return (
    <div className="resources-page">
      <header className="hero-seamless hero-resources-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/resources/hero.jpg")}
            alt="Muslim physician consulting with a patient and child in a bright clinic"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold res-hero-eyebrow">RESOURCES</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Resources for Knowledge. <em>Tools for Public Impact.</em>
            </h1>
            <p className="hero-seamless-lead">
              Evidence-informed guidance, practical tools, and trusted scholarship at the intersection of Islam and medicine.
            </p>
            <div className="hero-seamless-actions">
              <a href="#find-resources" className="btn-seamless-maroon">
                EXPLORE RESOURCES <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="#publications" className="btn-seamless-outline">
                BROWSE PUBLICATIONS <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="hero-seamless-quote res-hero-quote">
            <p className="quote-text">
              Knowledge today.
              <br />
              Stronger communities tomorrow.
            </p>
          </div>
        </div>
      </header>

      <section className="res-toolkit" id="find-resources">
        <div className="container">
          <h2 className="res-toolkit-heading">Find the resources you need.</h2>

          {/* Tab bar */}
          <div className="res-toolkit-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeTab === tab.id}
                className={`res-toolkit-tab${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Resource cards grid */}
          <div className="res-toolkit-grid">
            {tabItems.map((item) => (
              <article className="res-toolkit-card" key={item.id}>
                <div className="res-toolkit-cover">
                  <img src={asset(item.image)} alt={item.title} loading="lazy" />
                </div>
                <div className="res-toolkit-info">
                  <h3>{item.title}</h3>
                  <a href={item.href} className="res-toolkit-btn">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="res-audience">
        <div className="container">
          <p className="res-eyebrow">RESOURCES BY AUDIENCE</p>
          <h2>Tailored Guidance for Your Needs.</h2>
          <div className="res-audience-grid">
            {AUDIENCE_CARDS.map((item) => (
              <article className="res-audience-card" key={item.id}>
                <div className="res-audience-media">
                  <img src={asset(item.image)} alt="" />
                </div>
                <div className="res-audience-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button type="button" className="res-text-link" onClick={() => { document.getElementById("find-resources")?.scrollIntoView({ behavior: "smooth" }); }}>
                    {item.cta} <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="res-pubs" id="publications">
        <div className="container">
          <div className="res-section-head">
            <div>
              <p className="res-eyebrow">RESEARCH PUBLICATIONS</p>
              <h2>Advancing the Evidence Base.</h2>
            </div>
            <Link href="/books" className="res-text-link">
              VIEW ALL PUBLICATIONS <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div
            className="res-carousel"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Research publications"
            onKeyDown={onCarouselKey}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            onFocus={() => {
              pausedRef.current = true;
            }}
            onBlur={() => {
              pausedRef.current = false;
            }}
          >
            <button
              type="button"
              className="res-carousel-btn res-carousel-btn-prev"
              aria-label="Previous publications"
              onClick={() => movePublications(-1)}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <div className="res-carousel-viewport" ref={scroller}>
              <div className="res-carousel-track">
                {slides.map((item, index) => (
                  <article
                    className="res-pub-card"
                    key={`${item.id}-${index}`}
                    aria-hidden={index >= pubCount ? true : undefined}
                  >
                    <div className="res-pub-media">
                      <img src={asset(item.image)} alt="" />
                      <span>{item.journal}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link href={item.href} tabIndex={index >= pubCount ? -1 : undefined}>
                      READ ARTICLE <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="res-carousel-btn res-carousel-btn-next"
              aria-label="Next publications"
              onClick={() => movePublications(1)}
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      <section className="res-cta container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 res-cta-media">
            <img
              src={asset("/images/resources/cta-workshop.jpg")}
              alt="Educator in a hijab leading a community workshop"
            />
          </div>
          <div className="col-lg-6 res-cta-copy">
            <div className="res-cta-inner">
              <p className="res-eyebrow res-eyebrow-light">SHARE KNOWLEDGE. CREATE IMPACT.</p>
              <h2>
                Bring evidence-informed education to your community.
              </h2>
              <p>
                Interested in hosting a workshop, training, or customized session? We offer materials, expert faculty, and support to help you make a difference.
              </p>
              <div className="res-cta-actions">
                <Link href="/consultation" className="res-cta-fill">
                  REQUEST A TRAINING <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/workshops" className="res-cta-outline">
                  EXPLORE WORKSHOP MATERIALS <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
              <a
                href="https://medicineandislam.org/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="res-external-link"
              >
                More resources on medicineandislam.org <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
