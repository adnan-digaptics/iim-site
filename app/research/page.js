import Link from "next/link";

export const metadata = {
  title: "Research & Impact | Initiative on Islam & Medicine",
  description:
    "We listen to Muslim patients and healthcare professionals, generate rigorous evidence, and turn insights into education, tools, and better healthcare practice.",
};

const principles = [
  ["fa-headphones", "Listen", "Center the voices of Muslim patients and healthcare professionals."],
  ["fa-magnifying-glass", "Investigate", "Use rigorous, community-engaged methods to generate credible evidence."],
  ["fa-gear", "Equip", "Translate findings into practical tools, education, and guidance."],
  ["fa-people-group", "Transform", "Support more inclusive, ethical, and responsive healthcare systems."],
];

const findings = [
  [
    "38%",
    "22 of 58 participants received mammograms within one year of a religiously tailored education intervention.",
  ],
  ["24%", "Surveyed Muslim physicians reporting religion-based discrimination at work."],
  ["2024", "National publications exploring Muslim patients' religious and spiritual needs."],
];

const projects = [
  {
    img: "/images/research/project-mahsn.jpg",
    title: "Muslim American Healthcare & Spiritual Needs (MAHSN)",
    text: "A national survey examining the healthcare experiences, spiritual needs, and cultural considerations of Muslim patients in the United States.",
  },
  {
    img: "/images/research/project-mheart.jpg",
    title: "Mosque-Based Health Education and Research Tools (M-HEaRT)",
    text: "Development and testing of replicable tools and workshops to assess and address health needs within mosque communities, working with imams and community leaders.",
  },
  {
    img: "/images/research/project-palliative.jpg",
    title: "Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN)",
    text: "Exploring the needs of Muslim patients and families in end-of-life care, with practical resources and replication guides for healthcare teams.",
  },
  {
    img: "/images/research/project-equity.jpg",
    title: "Advancing Equity for Muslim Physicians",
    text: "Examining experiences of discrimination, accommodation, and professional well-being among Muslim physicians and healthcare trainees to inform supportive workplace policies and interventions.",
  },
  {
    img: "/images/research/project-mammography.jpg",
    title: "Religiously Tailored Mammography Intervention",
    text: "A community-designed educational intervention to increase breast cancer screening among Muslim women, with culturally and religiously tailored materials.",
  },
  {
    img: "/images/research/project-empart.jpg",
    title: "EMPART & E-MARCH",
    text: "Community-centered outcomes research and training programs to build research capacity, promote health equity, and engage Muslim communities in meaningful research partnerships.",
  },
];

const resources = [
  {
    img: "/images/research/resource-eol.jpg",
    title: "End-of-Life Healthcare Guide",
    text: "Practical guidance for Muslim patients, families, and healthcare teams.",
    cta: "ACCESS RESOURCE",
    href: "/resources",
  },
  {
    img: "/images/research/resource-workshop.jpg",
    title: "Mosque-Based Workshop Guides",
    text: "Step-by-step guides to replicate health education programs in your community.",
    cta: "ACCESS RESOURCE",
    href: "/resources",
  },
  {
    img: "/images/research/resource-pubs.jpg",
    title: "Policy Reports & Publications",
    text: "Evidence, recommendations, and scholarly publications to inform practice and policy.",
    cta: "BROWSE PUBLICATIONS",
    href: "/books",
  },
];

const process = [
  ["fa-people-group", "Community Voices", "Begin with lived experience and community needs."],
  ["fa-clipboard-list", "Rigorous Research", "Generate credible, community-engaged evidence."],
  ["fa-gear", "Practical Tools", "Translate findings into usable resources."],
  ["fa-graduation-cap", "Education & Advisory", "Equip professionals and institutions."],
  ["fa-chart-line", "More Responsive Care", "Strengthen equitable, compassionate practice."],
];

export default function ResearchPage() {
  return (
    <div className="research-page">
      {/* 01 HERO */}
      <header className="hero-seamless hero-research-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/research/hero.jpg"
            alt="Healthcare professionals collaborating on research and care"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold rs-hero-eyebrow">RESEARCH &amp; IMPACT</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Research that
              <br />
              reveals needs.
              <br />
              <em>Impact that</em>
              <br />
              <em>changes care.</em>
            </h1>
            <p className="hero-seamless-lead">
              We listen to Muslim patients and healthcare professionals, generate rigorous evidence, and turn insights into education, tools, and better healthcare practice.
            </p>
            <div className="hero-seamless-actions">
              <a href="#projects" className="btn-seamless-maroon">
                EXPLORE OUR RESEARCH <i className="fa-solid fa-arrow-right" />
              </a>
              <Link href="/consultation" className="btn-seamless-outline">
                COLLABORATE WITH II&amp;M
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote rs-hero-quote">
            <p className="quote-text">
              Evidence.
              <br />
              Education.
              <br />
              Equity.
              <br />
              Real-World
              <br />
              Impact.
            </p>
          </div>
        </div>
      </header>

      {/* 02 PRINCIPLES */}
      <section className="rs-principles">
        <div className="container">
          <div className="rs-principles-grid">
            {principles.map(([icon, title, text]) => (
              <article className="rs-principle" key={title}>
                <span className="rs-principle-icon" aria-hidden="true">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 KEY FINDINGS */}
      <section className="rs-findings">
        <div className="rs-findings-inner">
          <div className="rs-findings-copy">
            <p className="rs-eyebrow rs-eyebrow-light">KEY FINDINGS</p>
            <div className="rs-findings-stats">
              {findings.map(([num, text]) => (
                <article className="rs-stat" key={num}>
                  <h3>{num}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rs-findings-media">
            <img src="/images/research/findings-mosque.jpg" alt="Mosque architecture" />
          </div>
        </div>
      </section>

      {/* 04 OUR APPROACH */}
      <section className="rs-approach">
        <div className="container">
          <div className="rs-approach-grid">
            <div className="rs-approach-copy">
              <p className="rs-eyebrow">OUR APPROACH</p>
              <h2>
                From Community Voices
                <br />
                to Measurable Change.
              </h2>
              <p>
                II&amp;M conducts research that highlights the lived experiences of Muslim patients and healthcare professionals, identifies gaps in knowledge and practice, and informs practical solutions.
              </p>
              <p>
                Our work bridges scholarship and real-world application — ensuring that evidence leads to education, resources, and more equitable care.
              </p>
              <a href="#process" className="rs-btn rs-btn-outline">
                LEARN MORE ABOUT OUR APPROACH <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
            <div className="rs-approach-media">
              <img
                src="/images/research/approach.jpg"
                alt="Community research discussion with Muslim participants"
              />
              <div className="rs-approach-quote">
                <p>
                  Communities
                  <br />
                  inform our research.
                  <br />
                  People inspire
                  <br />
                  our solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 FEATURED PROJECTS */}
      <section className="rs-projects" id="projects">
        <div className="container">
          <div className="rs-projects-head">
            <p className="rs-eyebrow">FEATURED RESEARCH PROJECTS</p>
            <a href="#projects" className="rs-text-link">
              VIEW ALL RESEARCH PROJECTS <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          <div className="rs-projects-grid">
            {projects.map((item) => (
              <article className="rs-project-card" key={item.title}>
                <div className="rs-project-media">
                  <img src={item.img} alt="" />
                </div>
                <div className="rs-project-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href="/impact" className="rs-text-link">
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 EDUCATION BANNER */}
      <section className="rs-edu-banner container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-5 rs-edu-media">
            <img
              src="/images/research/education.jpg"
              alt="Educator presenting research-informed learning"
            />
          </div>
          <div className="col-lg-7 rs-edu-copy">
            <div className="rs-edu-inner">
              <p className="rs-eyebrow rs-eyebrow-light">FROM RESEARCH TO REAL-WORLD SOLUTIONS</p>
              <h2>
                Research is the foundation.
                <br />
                Education is how we multiply the impact.
              </h2>
              <p>
                Our research informs our educational programs, consultation services, and advocacy efforts — creating a continuous cycle of knowledge, application, and community benefit.
              </p>
              <Link href="/education" className="rs-btn rs-btn-fill">
                EXPLORE EDUCATION PROGRAMS <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 RESOURCES */}
      <section className="rs-resources">
        <div className="container">
          <div className="rs-resources-grid">
            <div className="rs-resources-intro">
              <p className="rs-eyebrow">RESEARCH INTO RESOURCES</p>
              <h2>
                Tools that put
                <br />
                knowledge into practice.
              </h2>
              <p>
                We create and curate practical, evidence-informed resources to support healthcare professionals, community leaders, and institutions.
              </p>
              <Link href="/resources" className="rs-btn rs-btn-outline">
                VIEW ALL RESOURCES <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="rs-resources-cards">
              {resources.map((item) => (
                <article className="rs-resource-card" key={item.title}>
                  <div className="rs-resource-media">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="rs-resource-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link href={item.href} className="rs-text-link">
                      {item.cta} <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 IMPACT PROCESS */}
      <section className="rs-process" id="process">
        <div className="container">
          <p className="rs-eyebrow rs-process-eyebrow">OUR IMPACT PROCESS</p>
          <div className="rs-process-track">
            {process.map(([icon, title, text], index) => (
              <article className="rs-process-step" key={title}>
                {index > 0 ? <span className="rs-process-arrow" aria-hidden="true" /> : null}
                <span className="rs-process-icon" aria-hidden="true">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 CTA */}
      <section className="rs-cta container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 rs-cta-media">
            <img
              src="/images/research/cta-conference.jpg"
              alt="Conference audience collaborating on research and care"
            />
          </div>
          <div className="col-lg-6 rs-cta-copy">
            <div className="rs-cta-inner">
              <p className="rs-eyebrow rs-eyebrow-light">COLLABORATE WITH II&amp;M</p>
              <h2>
                Partner with us to
                <br />
                turn evidence into action.
              </h2>
              <p>
                We welcome opportunities to collaborate with healthcare institutions, academic centers, community organizations, and funders to advance research, education, and meaningful impact in Muslim health.
              </p>
              <div className="rs-cta-actions">
                <a href="#projects" className="rs-btn rs-btn-light">
                  EXPLORE RESEARCH PROJECTS <i className="fa-solid fa-arrow-right" />
                </a>
                <Link href="/consultation" className="rs-btn rs-btn-light">
                  DISCUSS A COLLABORATION <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
