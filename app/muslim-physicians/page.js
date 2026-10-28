import { asset } from "../../lib/asset";
import Link from "next/link";
import MuslimPhysiciansNav from "./MuslimPhysiciansNav";

export const metadata = {
  title: "Muslim Physicians in U.S. Healthcare | Initiative on Islam & Medicine",
  description:
    "A national study exploring how Islamic identity, religious values, and workplace experiences shape the professional lives and clinical practices of American Muslim physicians.",
  keywords: [
    "Muslim Physicians",
    "Islamic Bioethics",
    "U.S. Healthcare",
    "Physician Survey",
    "Workplace Discrimination",
    "Medicine and Religion",
  ],
};

const AIMS = [
  {
    num: "01",
    text: "Describe how Islamic religiosity influences physicians' medical practice patterns.",
  },
  {
    num: "02",
    text: "Assess the frequency and predictors of religion-directed workplace discrimination experienced by American Muslim physicians.",
  },
  {
    num: "03",
    text: "Examine relationships between religiosity and ethical decision-making among American Muslim physicians.",
  },
];

const FINDINGS_STATS = [
  {
    number: "255",
    label: "Survey respondents",
  },
  {
    number: "24%",
    label: "Reported workplace discrimination because of religion",
  },
  {
    number: "9%",
    label: "Reported patient-related challenges because of religious identity",
  },
];

const DEMOGRAPHICS = [
  { label: "South Asian descent", percent: 70 },
  { label: "Arab descent", percent: 16 },
  { label: "White / Caucasian descent", percent: 6 },
  { label: "Black / African American descent", percent: 2 },
];

const PAPERS = [
  {
    num: "01",
    title:
      "Empathy and Attending to Patient Religion/Spirituality: Findings from a National Survey of Muslim Physicians",
    subtext: "External publication link",
    href: "https://pubmed.ncbi.nlm.nih.gov/30627918/",
  },
  {
    num: "02",
    title:
      "Religious Identity and Workplace Discrimination: A National Survey of American Muslim Physicians",
    subtext: "External publication link",
    href: "https://pubmed.ncbi.nlm.nih.gov/25547434/",
  },
  {
    num: "03",
    title:
      "Attitudes Towards the Resuscitation of Nonviable Infants: A National Survey of American Muslim Physicians",
    subtext: "Publication accessible from the original project page",
    href: "#data",
  },
  {
    num: "04",
    title:
      "Predictors of Physician Recommendation for Ethically Controversial Medical Procedures: Findings from an Exploratory National Survey of American Muslim Physicians",
    subtext: "Publication accessible from the original project page",
    href: "#data",
  },
  {
    num: "05",
    title:
      "Assessing Relationships Between Muslim Physicians' Religiosity and End-of-Life Health Care Attitudes and Treatment Recommendations: An Exploratory National Survey",
    subtext: "Publication accessible from the original project page",
    href: "#data",
  },
  {
    num: "06",
    title: "American Muslim Physician Attitudes Toward Organ Donation",
    subtext: "Publication accessible from the original project page",
    href: "#data",
  },
  {
    num: "07",
    title: "Career Satisfaction and Burnout among American Muslim Physicians",
    subtext: "Publication accessible from the original project page",
    href: "#data",
  },
];

const POSTERS = [
  {
    title: "Ethical Dilemmas/Interventions",
    text: "Research examining how Muslim physician/patient characteristics inform their perceptions of medical interventions in religiously complex clinical cases involving Muslim patients.",
  },
  {
    title: "Community Engagement & Civility",
    text: "Research exploring whether religiosity and a sense of professional calling predict physicians' practices of community engagement, including care for underserved populations.",
  },
];

const MEDIA_ITEMS = [
  { name: "The Washington Post", href: "https://www.washingtonpost.com/" },
  { name: "Muslim Matters", href: "https://muslimmatters.org/" },
  { name: "USA Today", href: "https://www.usatoday.com/" },
  { name: "University of Michigan Health System", href: "https://www.uofmhealth.org/" },
  { name: "Michigan Radio / NPR News", href: "https://www.michiganpublic.org/" },
  { name: "Arab American News", href: "https://www.arabamericannews.com/" },
];

const SIDEBAR_NEWS = [
  { name: "The Washington Post", href: "https://www.washingtonpost.com/" },
  { name: "Muslim Matters", href: "https://muslimmatters.org/" },
  { name: "USA Today", href: "https://www.usatoday.com/" },
  { name: "University of Michigan Health System", href: "https://www.uofmhealth.org/" },
];

export default function MuslimPhysiciansPage() {
  return (
    <div className="muslim-physicians-page">
      {/* 01 HERO SECTION */}
      <header className="mp-hero">
        <div className="mp-hero-bg-wrapper">
          <img
            src={asset("/images/research/muslim-physicians-hero.jpg")}
            alt="American Muslim female physician in white coat and light hijab"
            className="mp-hero-bg-img"
            loading="eager"
          />
          <div className="mp-hero-gradient-overlay" />
        </div>

        <div className="container mp-hero-container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6 mp-hero-col-left">
              <p className="mp-hero-eyebrow">
                RESEARCH PROJECT / NATIONAL PHYSICIAN SURVEY
              </p>
              <h1 className="mp-hero-title">
                Muslim Physicians in <br />
                <em>U.S. Healthcare</em>
              </h1>
              <p className="mp-hero-lead">
                A national study exploring how Islamic identity, religious values,
                and workplace experiences shape the professional lives and clinical
                practices of American Muslim physicians.
              </p>
              <div className="mp-hero-actions">
                <a href="#findings" className="mp-btn-maroon">
                  EXPLORE FINDINGS <i className="fa-solid fa-angle-right ms-1" />
                </a>
                <a href="#publications" className="mp-btn-outline">
                  VIEW PUBLICATIONS <i className="fa-solid fa-angle-right ms-1" />
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-xl-6 mp-hero-col-right position-relative">
              {/* Burgundy Quotation Panel anchored to bottom right of hero */}
              <aside className="mp-hero-quote-panel" aria-label="Project quote">
                <p className="mp-hero-quote-text">
                  Faith. Professional identity. Ethical healthcare.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* 02 HORIZONTAL SECTION NAVIGATION */}
      <MuslimPhysiciansNav />

      {/* 03 MAIN CONTENT + RIGHT SIDEBAR */}
      <section className="mp-main-section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* LEFT / MAIN COLUMN (~70%) */}
            <main className="col-lg-8 mp-main-column">
              {/* SECTION 01 — PROJECT OVERVIEW */}
              <article id="overview" className="mp-section">
                <div className="mp-section-head">
                  <h2 className="mp-section-title">Project Overview</h2>
                  <div className="mp-accent-bar" />
                </div>
                <div className="row align-items-center g-3 g-md-4">
                  <div className="col-md-7">
                    <p className="mp-text">
                      This project examines how American Muslim physicians navigate
                      their identities as Muslims and medical professionals within a
                      secular, plural society. It explored the influence of Islam on
                      clinical practice, professional identity, ethical decision
                      making, and experiences of religious-based workplace
                      discrimination.
                    </p>
                    <p className="mp-text mb-0">
                      Using empirical research, this project engaged with Islamic
                      perspectives on clinical medicine, shared schooling and the
                      moral formation of physicians.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="mp-media-wrapper">
                      <img
                        src={asset("/images/research/muslim-physicians-overview.jpg")}
                        alt="Physician wearing a white coat and holding a smartphone"
                        className="mp-editorial-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 02 — PROJECT AIMS */}
              <article id="project-aims" className="mp-section">
                <div className="mp-section-head">
                  <h2 className="mp-section-title">Project Aims</h2>
                  <div className="mp-accent-bar" />
                </div>
                <p className="mp-lead-text">
                  This national survey was developed around three core collection
                  research questions:
                </p>
                <div className="mp-aims-list">
                  {AIMS.map((aim, idx) => (
                    <div
                      key={aim.num}
                      className={`mp-aim-item ${idx !== AIMS.length - 1 ? "mp-aim-divider" : ""}`}
                    >
                      <div className="mp-aim-badge" aria-hidden="true">
                        {aim.num}
                      </div>
                      <p className="mp-aim-text">{aim.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 03 — PROJECT SIGNIFICANCE */}
              <article id="significance" className="mp-section">
                <div className="mp-section-head">
                  <h2 className="mp-section-title">Project Significance</h2>
                  <div className="mp-accent-bar" />
                </div>
                <p className="mp-text">
                  In the post-9/11 social environment, Muslim Americans
                  experienced increased scrutiny and discrimination. This study
                  explores what religious identity and belonging mean in the
                  professional lives of Muslim physicians and how minority-faith
                  healthcare professionals navigate these challenges.
                </p>

                {/* Highlight callout panel */}
                <div className="mp-callout-panel">
                  <h3 className="mp-callout-title">
                    Religion, ethics &amp; clinical practice
                  </h3>
                  <p className="mp-callout-text mb-0">
                    The project investigated how Islamic values can inform
                    professional behavior, physician-patient relationships, and the
                    ethical foundations of clinical care.
                  </p>
                </div>

                {/* Subsection: Muslim Physicians in the Healthcare Workforce */}
                <div className="mp-subsection mt-4 pt-2">
                  <h3 className="mp-subsection-title">
                    Muslim Physicians in the Healthcare Workforce
                  </h3>
                  <div className="row align-items-center g-3 g-md-4 mt-1">
                    <div className="col-md-7">
                      <p className="mp-text">
                        This project acknowledges Muslim physicians as a sizable,
                        ethnically diverse community in U.S. healthcare,
                        including physicians with roots in South Asia, the Middle
                        East, and African American communities.
                      </p>
                      <p className="mp-text mb-0">
                        Understanding their experiences offers insights into both
                        professional religious identity and equitable working
                        environments.
                      </p>
                    </div>
                    <div className="col-md-5">
                      <div className="mp-media-wrapper">
                        <img
                          src={asset("/images/research/muslim-physicians-workforce.jpg")}
                          alt="Surgeons in scrubs operating in surgical theater"
                          className="mp-editorial-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 04 — KEY RESEARCH FINDINGS */}
              <article id="findings" className="mp-section">
                <div className="mp-section-head">
                  <h2 className="mp-section-title">Key Research Findings</h2>
                  <div className="mp-accent-bar" />
                </div>
                <p className="mp-lead-text">
                  Findings from the national survey of American Muslim physicians
                  as reported by the project:
                </p>

                {/* 3 Stat Cards */}
                <div className="row g-2 g-md-3 mp-stats-row">
                  {FINDINGS_STATS.map((stat) => (
                    <div key={stat.number} className="col-sm-4">
                      <div className="mp-stat-card">
                        <span className="mp-stat-number">{stat.number}</span>
                        <p className="mp-stat-label">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subsection: Participant Demographics */}
                <div className="mp-demographics-block">
                  <h3 className="mp-subsection-title">Participant Demographics</h3>
                  <p className="mp-demographics-caption">
                    Self-reported descent among survey respondents:
                  </p>
                  <div className="mp-demographics-bars">
                    {DEMOGRAPHICS.map((item) => (
                      <div key={item.label} className="mp-demo-item">
                        <div className="d-flex justify-content-between align-items-baseline mb-1">
                          <span className="mp-demo-label">{item.label}</span>
                          <span className="mp-demo-val">{item.percent}%</span>
                        </div>
                        <div
                          className="mp-demo-track"
                          role="progressbar"
                          aria-valuenow={item.percent}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="mp-demo-fill"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mp-demographics-footnote">
                    Percentages represent reported percentages from project
                    demographics (total 94%).
                  </p>
                </div>
              </article>

              {/* SECTION 05 — ACADEMIC PAPERS */}
              <article id="publications" className="mp-section">
                <div className="mp-section-head">
                  <h2 className="mp-section-title">Academic Papers</h2>
                  <div className="mp-accent-bar" />
                </div>
                <p className="mp-lead-text">
                  Seven publications featured on the project&apos;s original page.
                  The links below point to the several publication pages.
                </p>

                <div className="mp-papers-list">
                  {PAPERS.map((paper) => (
                    <div key={paper.num} className="mp-paper-item">
                      <span className="mp-paper-num">{paper.num}</span>
                      <div className="mp-paper-content">
                        <h4 className="mp-paper-title">
                          <a
                            href={paper.href}
                            target={paper.href.startsWith("http") ? "_blank" : undefined}
                            rel={paper.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mp-paper-link"
                          >
                            {paper.title}{" "}
                            <i
                              className="fa-solid fa-arrow-up-right-from-square mp-paper-icon"
                              aria-hidden="true"
                            />
                          </a>
                        </h4>
                        <p className="mp-paper-subtext">{paper.subtext}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 06 — POSTER PRESENTATIONS */}
              <article className="mp-section">
                <div className="mp-section-head">
                  <h3 className="mp-section-title">Poster Presentations</h3>
                  <div className="mp-accent-bar" />
                </div>
                <div className="row g-3 g-md-4">
                  {POSTERS.map((poster) => (
                    <div key={poster.title} className="col-md-6">
                      <div className="mp-poster-card">
                        <h4 className="mp-poster-title">{poster.title}</h4>
                        <p className="mp-poster-text mb-0">{poster.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 07 — MEDIA HIGHLIGHTS */}
              <article className="mp-section">
                <div className="mp-section-head">
                  <h3 className="mp-section-title">Media Highlights</h3>
                  <div className="mp-accent-bar" />
                </div>
                <p className="mp-lead-text">
                  Media outlets listed by the original project:
                </p>
                <div className="row g-2 g-md-3">
                  {MEDIA_ITEMS.map((item) => (
                    <div key={item.name} className="col-md-6">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mp-media-card"
                      >
                        <span className="mp-media-name">
                          <i
                            className="fa-regular fa-newspaper me-2 mp-media-red-icon"
                            aria-hidden="true"
                          />
                          {item.name}
                        </span>
                        <i
                          className="fa-solid fa-arrow-up-right-from-square mp-media-arrow"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 08 — DATA REPOSITORY */}
              <article id="data" className="mp-section mp-data-section">
                <div className="mp-section-head">
                  <h3 className="mp-section-title">Data Repository</h3>
                  <div className="mp-accent-bar" />
                </div>
                <div className="mp-data-box">
                  <div className="mp-data-icon-col" aria-hidden="true">
                    <i className="fa-regular fa-file-lines mp-data-icon" />
                  </div>
                  <div className="mp-data-body">
                    <h4 className="mp-data-title">
                      Survey Questions, Datasets &amp; Data Use Agreements
                    </h4>
                    <p className="mp-data-desc">
                      Access this research data repository hosted by The
                      University of Chicago
                    </p>
                    <a
                      href="mailto:info@islamandmedicine.org?subject=Muslim%20Physicians%20Data%20Repository%20Access%20Request"
                      className="mp-btn-maroon mp-btn-data"
                    >
                      ACCESS REPOSITORY{" "}
                      <i className="fa-solid fa-angle-right ms-1" />
                    </a>
                  </div>
                </div>
              </article>
            </main>

            {/* RIGHT SIDEBAR COLUMN (~30%) */}
            <aside className="col-lg-4 mp-sidebar-column">
              {/* SIDEBAR CARD 01: Project at a Glance */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">Project at a Glance</h3>
                <div className="mp-accent-bar" />
                <dl className="mp-glance-list">
                  <div className="mp-glance-item">
                    <dt className="mp-glance-dt">
                      <span className="mp-bullet" aria-hidden="true" /> Focus
                    </dt>
                    <dd className="mp-glance-dd">
                      Religion, medicine and professional identity
                    </dd>
                  </div>
                  <div className="mp-glance-item">
                    <dt className="mp-glance-dt">
                      <span className="mp-bullet" aria-hidden="true" /> Participants
                    </dt>
                    <dd className="mp-glance-dd">255 physicians surveyed</dd>
                  </div>
                  <div className="mp-glance-item">
                    <dt className="mp-glance-dt">
                      <span className="mp-bullet" aria-hidden="true" /> Geographic
                    </dt>
                    <dd className="mp-glance-dd">United States</dd>
                  </div>
                  <div className="mp-glance-item">
                    <dt className="mp-glance-dt">
                      <span className="mp-bullet" aria-hidden="true" /> Method
                    </dt>
                    <dd className="mp-glance-dd">National survey</dd>
                  </div>
                  <div className="mp-glance-item">
                    <dt className="mp-glance-dt">
                      <span className="mp-bullet" aria-hidden="true" /> Related Institute
                    </dt>
                    <dd className="mp-glance-dd">
                      Initiative on Islam and Medicine
                    </dd>
                  </div>
                </dl>
              </div>

              {/* SIDEBAR CARD 02: Research Themes */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">Research Themes</h3>
                <div className="mp-accent-bar" />
                <ul className="mp-theme-list">
                  <li>
                    <span className="mp-bullet" aria-hidden="true" />
                    <span>Religious identity &amp; clinical practice</span>
                  </li>
                  <li>
                    <span className="mp-bullet" aria-hidden="true" />
                    <span>Workplace discrimination</span>
                  </li>
                  <li>
                    <span className="mp-bullet" aria-hidden="true" />
                    <span>End-of-life care &amp; decision-making</span>
                  </li>
                  <li>
                    <span className="mp-bullet" aria-hidden="true" />
                    <span>Spirituality in patient care</span>
                  </li>
                  <li>
                    <span className="mp-bullet" aria-hidden="true" />
                    <span>Professional isolation &amp; empathy</span>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 03: Project Funding */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">Project Funding</h3>
                <div className="mp-accent-bar" />
                <p className="mp-sidebar-text">
                  Funded by the University of Chicago&apos;s Program on Medicine and
                  Religion Faculty Scholars Program through the John Templeton
                  Foundation.
                </p>
                <a
                  href="https://www.templeton.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mp-funding-link"
                >
                  JOHN TEMPLETON FOUNDATION{" "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square ms-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* SIDEBAR CARD 04: In Collaboration With */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">In Collaboration With</h3>
                <div className="mp-accent-bar" />
                <p className="mp-sidebar-text">
                  This project includes collaborating organizations/rigs. Please
                  replace this area with the approved partner logos/assets in the
                  production website.
                </p>
              </div>

              {/* SIDEBAR CARD 05: In the News */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">In the News</h3>
                <div className="mp-accent-bar" />
                <ul className="mp-news-list">
                  {SIDEBAR_NEWS.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mp-sidebar-news-link"
                      >
                        <span className="mp-bullet" aria-hidden="true" />
                        <span className="mp-news-name">{item.name}</span>
                        <i
                          className="fa-solid fa-arrow-up-right-from-square mp-news-icon"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDEBAR CARD 06: Explore the Evidence (Solid Burgundy) */}
              <div className="mp-sidebar-card mp-card-burgundy">
                <h3 className="mp-sidebar-title text-white">
                  Explore the Evidence
                </h3>
                <div className="mp-accent-bar bg-white opacity-75" />
                <p className="mp-sidebar-text mp-text-light">
                  Review the academic research and survey results following this
                  project.
                </p>
                <a href="#publications" className="mp-btn-white-outline">
                  VIEW ALL PAPERS <i className="fa-solid fa-arrow-right ms-1" />
                </a>
              </div>

              {/* SIDEBAR CARD 07: Interested in This Work? */}
              <div className="mp-sidebar-card">
                <h3 className="mp-sidebar-title">Interested in This Work?</h3>
                <div className="mp-accent-bar" />
                <p className="mp-sidebar-text">
                  Connect with II&amp;M to discuss the project, research
                  collaboration, or resources.
                </p>
                <Link href="/consultation" className="mp-btn-cream-outline">
                  GET IN TOUCH <i className="fa-solid fa-arrow-right ms-1" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 03 BOTTOM CALL TO ACTION BANNER */}
      <section className="mp-bottom-cta">
        <div className="mp-bottom-cta-bg">
          <img
            src={asset("/images/our-impact/cta-mosque.jpg")}
            alt="Mosque dome and minarets against twilight sky"
            className="mp-bottom-cta-img"
            loading="lazy"
          />
          <div className="mp-bottom-cta-overlay" />
        </div>
        <div className="container mp-bottom-cta-container">
          <div className="mp-bottom-cta-content">
            <p className="mp-cta-eyebrow">ADVANCING HEALTHCARE TOGETHER</p>
            <h2 className="mp-cta-heading">
              Research for More Inclusive, <br className="d-none d-md-inline" />
              Compassionate Healthcare
            </h2>
            <p className="mp-cta-subtext">
              Partner with II&amp;M to advance understanding, support healthcare
              professionals, and strengthen evidence-informed practice.
            </p>
            <div className="mp-cta-actions">
              <Link href="/consultation" className="mp-btn-maroon mp-btn-cta">
                GET IN TOUCH <i className="fa-solid fa-arrow-right ms-1" />
              </Link>
              <Link href="/consultation" className="mp-btn-white-outline mp-btn-cta">
                EXPLORE RESEARCH <i className="fa-solid fa-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
