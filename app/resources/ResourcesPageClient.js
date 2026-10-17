"use client";

import { asset } from "../../lib/asset";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const AUDIENCES = [
  { id: "all", label: "ALL" },
  { id: "patients", label: "Patients & Families" },
  { id: "clinicians", label: "Clinicians" },
  { id: "leaders", label: "Community Leaders" },
  { id: "educators", label: "Educators & Students" },
  { id: "researchers", label: "Researchers" },
];

const TYPES = [
  { id: "guides", label: "Guides & Toolkits", icon: "fa-book-open" },
  { id: "research", label: "Research & Publications", icon: "fa-book" },
  { id: "workshops", label: "Workshop Materials", icon: "fa-chalkboard-user" },
  { id: "courses", label: "Courses & Webinars", icon: "fa-circle-play" },
];

const RESOURCES = [
  {
    id: "eol-guide",
    title: "Islamic Bioethical Considerations for End-of-Life Healthcare: A Guide for Muslim Americans",
    description: "A practical guide for patients, families, and healthcare professionals on navigating end-of-life care through an Islamic framework.",
    type: "guides",
    audiences: ["patients", "clinicians", "leaders"],
    image: "/images/course-eol.jpg",
    href: "/books",
    keywords: "end of life bioethics guide muslim americans",
  },
  {
    id: "eol-workshop",
    title: "Islamic Dimensions of End-of-Life Healthcare: Community Education Workshop Replication Guide",
    description: "Step-by-step materials to conduct community workshops on end-of-life care, designed for mosques and community organizations.",
    type: "workshops",
    audiences: ["leaders", "patients", "educators"],
    image: "/images/research/resource-workshop.jpg",
    href: "/workshops",
    keywords: "mosque workshop replication end of life community",
  },
  {
    id: "mheart",
    title: "M-HEaRT: Mosque-Based Health Education & Research Tools",
    description: "Evidence-based tools to support mosque communities in identifying health priorities and delivering culturally and religiously relevant education.",
    type: "research",
    audiences: ["leaders", "researchers", "clinicians"],
    image: "/images/research/project-mheart.jpg",
    href: "/research",
    keywords: "mheart mosque health education research tools",
  },
  {
    id: "pcor-toolkit",
    title: "Toolkit for Patient-Centered Outcomes Research in Islamic Schools",
    description: "A comprehensive toolkit to build research capacity and engage Muslim communities in patient-centered outcomes research.",
    type: "research",
    audiences: ["researchers", "educators", "leaders"],
    image: "/images/research/project-empart.jpg",
    href: "/research",
    keywords: "pcor islamic schools outcomes research toolkit empart",
  },
  {
    id: "spiritual-needs",
    title: "Muslim Patients' Religious & Spiritual Resource Needs in US Hospitals",
    description: "Findings from a national study examining the religious and spiritual needs of Muslim patients in inpatient settings.",
    type: "research",
    audiences: ["clinicians", "researchers"],
    image: "/images/research/project-mahsn.jpg",
    href: "/research",
    keywords: "mahsn spiritual religious needs hospitals inpatient",
  },
  {
    id: "bioethics-primer",
    title: "Islamic Bioethics — A Primer for Muslim Physicians",
    description: "An educational course exploring foundational bioethical frameworks for clinical practice.",
    type: "courses",
    audiences: ["clinicians", "educators"],
    image: "/images/course-bioethics.jpg",
    href: "/courses",
    keywords: "islamic bioethics primer physicians course",
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
  const [draft, setDraft] = useState("");
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState("all");
  const [type, setType] = useState("");
  const scroller = useRef(null);
  const pausedRef = useRef(false);
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

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return RESOURCES.filter((item) => {
      if (audience !== "all" && !item.audiences.includes(audience)) return false;
      if (type && item.type !== type) return false;
      if (!needle) return true;
      const haystack = `${item.title} ${item.description} ${item.keywords} ${item.type} ${item.audiences.join(" ")}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [audience, query, type]);

  const filtersActive = Boolean(query || type || audience !== "all");

  function submitSearch(event) {
    event.preventDefault();
    setQuery(draft.trim());
  }

  function clearFilters() {
    setDraft("");
    setQuery("");
    setAudience("all");
    setType("");
  }

  function chooseAudience(id) {
    setAudience(id);
    document.getElementById("featured-resources")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
              Resources for <br />
              Knowledge. <br />
              <em>Tools for Better Care.</em>
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
              Knowledge
              <br />
              today.
              <br />
              Stronger
              <br />
              communities
              <br />
              tomorrow.
            </p>
          </div>
        </div>
      </header>

      <section className="res-find" id="find-resources">
        <div className="container">
          <div className="res-find-panel">
            <form className="res-search-row" onSubmit={submitSearch}>
              <h2>Find the resources you need.</h2>
              <div className="res-search">
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                <label className="visually-hidden" htmlFor="resource-search">
                  Search resources
                </label>
                <input
                  id="resource-search"
                  type="search"
                  value={draft}
                  placeholder="Search guides, publications, tools, and more..."
                  onChange={(event) => setDraft(event.target.value)}
                />
                <button type="submit">SEARCH</button>
              </div>
            </form>

            <div className="res-filter-row">
              <span className="res-filter-label">Browse by Audience:</span>
              <div className="res-pills" role="group" aria-label="Browse by audience">
                {AUDIENCES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={audience === item.id ? "is-active" : ""}
                    aria-pressed={audience === item.id}
                    onClick={() => setAudience(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="res-filter-row">
              <span className="res-filter-label">Browse by Resource Type:</span>
              <div className="res-types" role="group" aria-label="Browse by resource type">
                {TYPES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={type === item.id ? "is-active" : ""}
                    aria-pressed={type === item.id}
                    onClick={() => setType((current) => (current === item.id ? "" : item.id))}
                  >
                    <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {filtersActive ? (
              <button type="button" className="res-clear" onClick={clearFilters}>
                Clear all filters
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="res-featured" id="featured-resources">
        <div className="container">
          <div className="res-section-head">
            <div>
              <p className="res-eyebrow">FEATURED RESOURCES</p>
              <h2>Practical Tools. Lasting Impact.</h2>
            </div>
            <button type="button" className="res-text-link" onClick={clearFilters}>
              VIEW ALL RESOURCES <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
          {results.length === 0 ? (
            <p className="res-empty" role="status">
              No resources match this search. Try another word, or clear the filters to see the full collection.
            </p>
          ) : (
            <div className="res-featured-grid">
              {results.map((item) => (
                <article className="res-card" key={item.id}>
                  <div className="res-card-media">
                    <img src={asset(item.image)} alt="" />
                  </div>
                  <div className="res-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link href={item.href} className="res-card-btn">
                      VIEW RESOURCE
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
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
                  <button type="button" className="res-text-link" onClick={() => chooseAudience(item.id)}>
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
                Bring evidence-informed education <br />
                to your community.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
