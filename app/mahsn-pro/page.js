import { asset } from "../../lib/asset";
import Link from "next/link";
import MahsnNav from "./MahsnNav";
import MahsnVideoSection from "./MahsnVideoSection";
import styles from "./mahsn.module.css";

export const metadata = {
  title:
    "Muslim American Healthcare & Spiritual Needs (MAHSN) | Initiative on Islam & Medicine",
  description:
    "A national survey exploring the experiences, religious needs, and spiritual resources of Muslim American patients in healthcare settings.",
  keywords: [
    "MAHSN",
    "Muslim American Patients",
    "Spiritual Care Needs",
    "Healthcare Discrimination",
    "Islamic Bioethics",
    "Patient-Centered Care",
    "Hospital Chaplaincy",
  ],
};

const HERO_TAGS = [
  "National survey",
  "Patient-centered care",
  "Faith & healthcare",
];

const SIGNIFICANCE_CARDS = [
  {
    num: "01",
    title: "Identify gaps in care",
    text: "Understand the challenges Muslim Americans encounter in the U.S. healthcare system.",
  },
  {
    num: "02",
    title: "Understand experiences",
    text: "Examine how demographic and religious factors shape Muslim patients' experiences.",
  },
  {
    num: "03",
    title: "Inform policy",
    text: "Develop recommendations for hospitals and policymakers to improve care.",
  },
];

const RECRUITMENT_CHANNELS = [
  {
    num: "01",
    title: "Clinics",
    text: "Reach healthcare settings serving Muslim patients",
  },
  {
    num: "02",
    title: "Mosques",
    text: "Engage congregations and community organizations",
  },
  {
    num: "03",
    title: "Conferences",
    text: "Reach major Muslim gatherings and events",
  },
  {
    num: "04",
    title: "Social media",
    text: "Broaden participation through digital outreach",
  },
];

const STATS = [
  { num: "2020–21", label: "Study period" },
  { num: "74", label: "Survey items" },
  { num: "4", label: "Original recruitment channels" },
];

const PUBLICATIONS = [
  {
    num: "01",
    kicker: "JOURNAL OF GENERAL INTERNAL MEDICINE · PUBLISHED 2024",
    title:
      "Muslim Patients' Religious & Spiritual Resource Needs in US Hospitals: Findings from a National Survey",
    desc: "National survey findings concerning the importance and availability of religious and spiritual resources for Muslim patients.",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "02",
    kicker: "JOURNAL OF IMMIGRANT AND MINORITY HEALTH · 2024",
    title:
      "Associations Between Every-day and Medical Setting-Based Discrimination on Religion and Sociodemographic Characteristics of Muslim Americans: Findings from a National Survey",
    desc: "Research examining experiences of everyday and healthcare-related discrimination among Muslim Americans.",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
];

const PARTNERS = [
  {
    bold: "Muslim Chaplains",
    subtext: "Association of",
    isPrefix: true,
  },
  {
    bold: "IMANA",
    subtext: "Islamic Medical Association of North America",
    isPrefix: false,
  },
  {
    bold: "Khalil Center",
    subtext: "",
    isPrefix: false,
  },
  {
    bold: "IMAN Network",
    subtext: "",
    isPrefix: false,
  },
  {
    bold: "Stanford",
    subtext: "Muslim Mental Health Lab",
    isPrefix: false,
  },
];

const OBJECTIVES = [
  "Identify gaps in the healthcare experiences of Muslim Americans.",
  "Explore the impact of demographic and religious factors.",
  "Develop policy recommendations to improve equitable care.",
];

export default function MahsnPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 01 HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.heroBgWrapper}>
          <img
            src={asset("/images/mahsn-pro/mahsn-hero.jpg")}
            alt="Medical professional in white coat holding smartphone"
            className={styles.heroBgImg}
            loading="eager"
          />
          <div className={styles.heroGradientOverlay} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <p className={styles.heroEyebrow}>
                RESEARCH PROJECT / COMMUNITY HEALTH
              </p>
              <h1 className={styles.heroTitle}>
                Muslim American <br />
                <em>Healthcare &amp;</em> <br />
                Spiritual Needs
              </h1>
              <p className={styles.heroLead}>
                MAHSN — A national survey exploring the experiences, religious
                needs, and spiritual resources of Muslim American patients in
                healthcare settings.
              </p>

              <div className={styles.heroActions}>
                <a href="#publications" className={styles.btnMaroon}>
                  EXPLORE PUBLICATIONS <span className="ms-1">↓</span>
                </a>
                <a href="#methodology" className={styles.btnOutline}>
                  OUR METHODOLOGY <span className="ms-1">↗</span>
                </a>
              </div>

              <div className={styles.heroTags}>
                {HERO_TAGS.map((tag) => (
                  <span key={tag} className={styles.heroTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-5 col-xl-6 position-relative">
              <aside
                className={styles.heroQuotePanel}
                aria-label="Project quote"
              >
                <p className={styles.heroQuoteEyebrow}>
                  AT THE HEART OF THE STUDY
                </p>
                <p className={styles.heroQuoteText}>
                  Listening to patients. <br />
                  Improving the care they <br />
                  receive.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* 02 STICKY SECTION NAVIGATION */}
      <MahsnNav />

      {/* 03 MAIN CONTENT + RIGHT SIDEBAR */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* MAIN CONTENT COLUMN (~70%) */}
            <main className="col-lg-8">
              {/* SECTION 01 — OVERVIEW */}
              <article id="overview" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Overview</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>
                <div className="row align-items-center g-3 g-md-4">
                  <div className="col-md-7">
                    <p className={styles.text}>
                      With more discussions around culturally competent and
                      patient-centered care, it is imperative to discuss Muslim
                      American patients and their needs. This group, representing
                      a variety of backgrounds and ethnicities, comes with a
                      unique set of needs for their care brought by their faith.
                    </p>
                    <p className={`${styles.text} mb-0`}>
                      We are conducting a study to explore such needs of Muslim
                      American patients in healthcare and hospital settings. This
                      allows us to identify gaps Muslims face and make
                      recommendations for how to resolve them.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className={styles.mediaWrapper}>
                      <img
                        src={asset("/images/mahsn-pro/mahsn-overview.jpg")}
                        alt="Clinician in white coat holding smartphone"
                        className={styles.editorialImg}
                        loading="lazy"
                      />
                      <span className={styles.mediaBadge}>
                        FAITH-INFORMED · PATIENT-CENTERED
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 02 — PROJECT SIGNIFICANCE */}
              <article id="significance" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Project Significance</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.text}>
                  Through this study, we aim to identify gaps in healthcare
                  experiences, explore the role of demographic and religious
                  factors, and develop policy-based recommendations to better
                  serve Muslim American patients. These findings can help
                  hospitals and medical policymakers improve the equity and
                  quality of Muslim patient care.
                </p>

                {/* Quotation Panel */}
                <div className={styles.quoteBanner}>
                  <span className={styles.quoteMark} aria-hidden="true">
                    “
                  </span>
                  <p className={styles.quoteBannerText}>
                    Building a stronger evidence base for healthcare that
                    understands and respects the religious and spiritual needs of
                    Muslim Americans.
                  </p>
                </div>

                {/* 3 Feature Cards */}
                <div className="row g-3">
                  {SIGNIFICANCE_CARDS.map((card) => (
                    <div key={card.num} className="col-md-4">
                      <div className={styles.pillarCard}>
                        <div className={styles.circleBadge}>{card.num}</div>
                        <h4 className={styles.pillarTitle}>{card.title}</h4>
                        <p className={styles.pillarText}>{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 03 — METHODOLOGY */}
              <article id="methodology" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Methodology</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <div className="row align-items-center g-3 g-md-4 mb-4">
                  <div className="col-md-7">
                    <p className={styles.text}>
                      This IRB-approved study was conducted between{" "}
                      <strong>2020 and 2021</strong>. It included a{" "}
                      <strong>74-item survey</strong> asking participants about
                      their hospital experiences, religiosity, coping,
                      discrimination, and demographic factors.
                    </p>
                    <p className={`${styles.text} mb-0`}>
                      Before COVID-19, recruitment was designed around four
                      channels: clinics, mosques, conferences, and social media.
                      Regional teams met monthly to coordinate recruitment, then
                      shifted their focus to virtual and social-media outreach
                      when in-person activities became restricted.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className={styles.mediaWrapper}>
                      <img
                        src={asset("/images/mahsn-pro/mahsn-brain.jpg")}
                        alt="Anatomical human brain model in medical laboratory"
                        className={styles.editorialImg}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <h3 className={styles.subheading}>Four recruitment channels</h3>

                {/* 4 Recruitment Cards */}
                <div className="row g-2 g-md-3 mb-4">
                  {RECRUITMENT_CHANNELS.map((channel) => (
                    <div key={channel.num} className="col-6 col-md-3">
                      <div className={styles.channelCard}>
                        <div className={styles.circleBadge}>{channel.num}</div>
                        <h4 className={styles.channelTitle}>{channel.title}</h4>
                        <p className={styles.channelText}>{channel.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={styles.text}>
                  Alongside regional teams, a National Steering Committee of
                  Muslim health organizations contributed to recruitment and
                  data-analysis planning. Members included the Association of
                  Muslim Chaplains, Khalil Center, IMAN Network, Stanford Muslim
                  Mental Health Lab, and the Islamic Medical Association of
                  North America (IMANA).
                </p>
                <p className={`${styles.text} mb-0`}>
                  After recruitment, project teams and committee representatives
                  collaborated on research papers covering Muslim patient
                  needs, religious coping, chaplaincy, and discrimination. The
                  project also identified a policy report as an intended output.
                </p>
              </article>

              {/* SECTION 04 — RESULTS & RESEARCH INSIGHTS */}
              <article id="results" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>
                      Results &amp; Research Insights
                    </h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  The project website describes data collection as complete and
                  publications are now available. The research includes
                  findings on patients&apos; religious and spiritual resource
                  needs as well as discrimination in healthcare settings.
                </p>

                {/* 3 Stat Cards */}
                <div className={`row g-2 g-md-3 ${styles.statsRow}`}>
                  {STATS.map((stat) => (
                    <div key={stat.label} className="col-sm-4">
                      <div className={styles.statCard}>
                        <span className={styles.statNum}>{stat.num}</span>
                        <p className={styles.statLabel}>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlighted Insight Panel */}
                <div className={styles.insightPanel}>
                  <span className={styles.insightDiamond} aria-hidden="true">
                    ◆
                  </span>
                  <div>
                    <h4 className={styles.insightTitle}>
                      From research to better care
                    </h4>
                    <p className={styles.insightText}>
                      MAHSN aims to support more culturally responsive hospital
                      practices, patient experiences, and evidence-informed
                      policymaking.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 05 — PUBLICATIONS */}
              <article id="publications" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Publications</h2>
                    <div className={styles.accentBar} />
                  </div>
                  <span className={styles.counterTag}>
                    PEER-REVIEWED RESEARCH
                  </span>
                </div>

                <div className={styles.papersList}>
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.num} className={styles.paperItem}>
                      <span className={styles.paperNum}>{pub.num}</span>
                      <div className={styles.paperContent}>
                        <div className={styles.paperTag}>{pub.kicker}</div>
                        <h4 className={styles.paperTitle}>{pub.title}</h4>
                        <p className={styles.paperDesc}>{pub.desc}</p>
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.paperLink}
                        >
                          READ PUBLICATION <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 06 — DISSEMINATION PRODUCTS */}
              <article id="dissemination" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>
                      Dissemination Products
                    </h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  Explore research outputs and scholarship emerging from the
                  MAHSN project.
                </p>

                <div className="row g-3">
                  {/* Product 1 */}
                  <div className="col-md-6">
                    <div className={styles.productCard}>
                      <div className={styles.productMockupWrap1}>
                        <div className={styles.mockupPaper}>
                          <p className={styles.mockupKicker}>RESEARCH PAPER</p>
                          <h4 className={styles.mockupHeading}>
                            Religious &amp; Spiritual Resource Needs
                          </h4>
                          <p className={styles.mockupSub}>
                            National Survey Findings
                          </p>
                        </div>
                      </div>
                      <div className={styles.productBody}>
                        <h4 className={styles.productTitle}>
                          Religious &amp; Spiritual Needs
                        </h4>
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.productLink}
                        >
                          READ ARTICLE <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="col-md-6">
                    <div className={styles.productCard}>
                      <div className={styles.productMockupWrap2}>
                        <div className={styles.mockupPaper}>
                          <p className={styles.mockupKicker}>RESEARCH PAPER</p>
                          <h4 className={styles.mockupHeading}>
                            Discrimination &amp; Healthcare Experience
                          </h4>
                          <p className={styles.mockupSub}>
                            National Survey Findings
                          </p>
                        </div>
                      </div>
                      <div className={styles.productBody}>
                        <h4 className={styles.productTitle}>
                          Discrimination &amp; Healthcare
                        </h4>
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.productLink}
                        >
                          READ ARTICLE <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 07 — VIDEOS & MEDIA HIGHLIGHTS */}
              <article id="media" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>
                      Videos &amp; Media Highlights
                    </h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  The original MAHSN page includes a project-survey video and an
                  &ldquo;I&amp;M—Here for the Muslim Community&rdquo; video.
                  Click on either video to launch the high-definition video player.
                </p>

                <MahsnVideoSection />
              </article>

              {/* SECTION 08 — PROJECT GALLERY */}
              <article id="gallery" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Project Gallery</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  Gallery images from the original project page are marked as
                  forthcoming. The gallery component below is ready for
                  approved project photographs without changing this template.
                </p>

                <div className="row g-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="col-md-4">
                      <div className={styles.galleryCard}>
                        <p className={styles.galleryText1}>PROJECT PHOTO</p>
                        <p className={styles.galleryText2}>COMING SOON</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 09 — PARTNER ORGANIZATIONS */}
              <article id="partners" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>
                      Partner Organizations
                    </h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  The project engaged a network of Muslim health and community
                  organizations, including members of its National Steering
                  Committee.
                </p>

                <div className="row g-3">
                  {PARTNERS.map((partner, idx) => (
                    <div
                      key={idx}
                      className={idx < 3 ? "col-md-4" : "col-md-6"}
                    >
                      <div className={styles.partnerCard}>
                        {partner.subtext && partner.isPrefix && (
                          <span className={styles.partnerSubtext}>
                            {partner.subtext}
                          </span>
                        )}
                        <span className={styles.partnerNameBold}>
                          {partner.bold}
                        </span>
                        {partner.subtext && !partner.isPrefix && (
                          <span className={styles.partnerSubtext}>
                            {partner.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className={styles.partnerFootnote}>
                  Organization names are presented as text until approved logo
                  assets are added.
                </p>
              </article>

              {/* SECTION 10 — FUNDING */}
              <article id="funding" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Funding</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <div className={styles.fundingBox}>
                  <div className={styles.fundingBadge} aria-hidden="true">
                    I&amp;M
                  </div>
                  <p className={styles.fundingText}>
                    This project is funded by the{" "}
                    <strong>Initiative on Islam &amp; Medicine (II&amp;M)</strong>
                    .
                  </p>
                </div>
              </article>
            </main>

            {/* RIGHT SIDEBAR COLUMN (~30%) */}
            <aside className={`col-lg-4 ${styles.sidebarColumn}`}>
              {/* SIDEBAR CARD 01: Project Objectives */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Project Objectives</h3>
                <div className={styles.accentBar} />
                <ul className={styles.objectivesList}>
                  {OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className={styles.objectiveItem}>
                      <span className={styles.objectiveNum}>0{idx + 1}</span>
                      <p className={styles.objectiveText}>{obj}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDEBAR CARD 02: Project at a Glance */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Project at a Glance</h3>
                <div className={styles.accentBar} />
                <dl className={styles.glanceList}>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Focus
                    </dt>
                    <dd className={styles.glanceDd}>
                      Muslim American patient needs and spiritual care
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Audience
                    </dt>
                    <dd className={styles.glanceDd}>
                      Patients, hospitals and policymakers
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Location
                    </dt>
                    <dd className={styles.glanceDd}>
                      United States — national study
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Approach
                    </dt>
                    <dd className={styles.glanceDd}>
                      IRB-approved national survey
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Study period
                    </dt>
                    <dd className={styles.glanceDd}>2020–2021</dd>
                  </div>
                </dl>
              </div>

              {/* SIDEBAR CARD 03: Publications */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Publications</h3>
                <div className={styles.accentBar} />
                <ul className={styles.sidebarPubList}>
                  <li className={styles.sidebarPubItem}>
                    <span>1.</span>
                    <span>Religious &amp; spiritual needs in US hospitals</span>
                  </li>
                  <li className={styles.sidebarPubItem}>
                    <span>2.</span>
                    <span>
                      Discrimination and sociodemographic characteristics
                    </span>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 04: Presentations */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Presentations</h3>
                <div className={styles.accentBar} />
                <p className={styles.forthcomingText}>
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 05: Policy Reports */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Policy Reports</h3>
                <div className={styles.accentBar} />
                <p className={styles.forthcomingText}>
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 06: Tool Kits */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Tool Kits</h3>
                <div className={styles.accentBar} />
                <p className={styles.forthcomingText}>
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 07: Quick Navigation */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Quick Navigation</h3>
                <div className={styles.accentBar} />
                <ul className={styles.quickNavList}>
                  <li>
                    <a href="#overview" className={styles.quickNavLink}>
                      <span>Project Overview</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#methodology" className={styles.quickNavLink}>
                      <span>Methodology</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className={styles.quickNavLink}>
                      <span>Research Papers</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#media" className={styles.quickNavLink}>
                      <span>Media &amp; Gallery</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#funding" className={styles.quickNavLink}>
                      <span>Funding</span>
                      <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 08: Stay Connected with II&M (Solid Burgundy) */}
              <div className={`${styles.sidebarCard} ${styles.cardBurgundy}`}>
                <p className={styles.heroQuoteEyebrow}>
                  ADVANCING EVIDENCE-BASED CARE
                </p>
                <h3 className="text-white fs-5 fw-bold mb-2">
                  Stay connected with II&amp;M
                </h3>
                <div
                  className="bg-white opacity-75 mb-3"
                  style={{ height: 2, width: 28 }}
                />
                <p className={`${styles.textLight} small mb-0`}>
                  Explore ongoing research, educational resources, and ways to
                  support better care
                </p>
              </div>

              {/* SIDEBAR CARD 09: Support Our Communities (Solid Burgundy) */}
              <div className={`${styles.sidebarCard} ${styles.cardBurgundy}`}>
                <p className={`${styles.textLight} small mb-3`}>
                  for Muslim communities.
                </p>
                <Link href="/consultation" className={styles.btnWhiteOutline}>
                  GET IN TOUCH <span className="ms-1">↗</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
