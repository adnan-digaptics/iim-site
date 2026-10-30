import { asset } from "../../lib/asset";
import Link from "next/link";
import MahsnNav from "./MahsnNav";
import MahsnVideoSection from "./MahsnVideoSection";

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
    <div className="mahsn-pro-page mahsn-pageWrapper">
      {/* 01 HERO SECTION */}
      <header className="mahsn-hero">
        <div className="mahsn-heroBgWrapper">
          <img
            src={asset("/images/mahsn-pro/mahsn-hero.jpg")}
            alt="Medical professional in white coat holding smartphone"
            className="mahsn-heroBgImg"
            loading="eager"
          />
          <div className="mahsn-heroGradientOverlay" />
        </div>

        <div className={`container mahsn-heroContainer`}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <p className="mahsn-heroEyebrow">
                RESEARCH PROJECT / COMMUNITY HEALTH
              </p>
              <h1 className="mahsn-heroTitle">
                Muslim American <br />
                <em>Healthcare &amp;</em> <br />
                Spiritual Needs
              </h1>
              <p className="mahsn-heroLead">
                MAHSN — A national survey exploring the experiences, religious
                needs, and spiritual resources of Muslim American patients in
                healthcare settings.
              </p>

              <div className="mahsn-heroActions">
                <a href="#publications" className="mahsn-btnMaroon">
                  EXPLORE PUBLICATIONS <span className="ms-1">↓</span>
                </a>
                <a href="#methodology" className="mahsn-btnOutline">
                  OUR METHODOLOGY <span className="ms-1">↗</span>
                </a>
              </div>

              <div className="mahsn-heroTags">
                {HERO_TAGS.map((tag) => (
                  <span key={tag} className="mahsn-heroTag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-5 col-xl-6 position-relative">
              <aside
                className="mahsn-heroQuotePanel"
                aria-label="Project quote"
              >
                <p className="mahsn-heroQuoteEyebrow">
                  AT THE HEART OF THE STUDY
                </p>
                <p className="mahsn-heroQuoteText">
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
      <section className="mahsn-mainSection">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* MAIN CONTENT COLUMN (~70%) */}
            <main className="col-lg-8">
              {/* SECTION 01 — OVERVIEW */}
              <article id="overview" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Overview</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>
                <div className="row align-items-center g-3 g-md-4">
                  <div className="col-md-7">
                    <p className="mahsn-text">
                      With more discussions around culturally competent and
                      patient-centered care, it is imperative to discuss Muslim
                      American patients and their needs. This group, representing
                      a variety of backgrounds and ethnicities, comes with a
                      unique set of needs for their care brought by their faith.
                    </p>
                    <p className={`mahsn-text mb-0`}>
                      We are conducting a study to explore such needs of Muslim
                      American patients in healthcare and hospital settings. This
                      allows us to identify gaps Muslims face and make
                      recommendations for how to resolve them.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="mahsn-mediaWrapper">
                      <img
                        src={asset("/images/mahsn-pro/mahsn-overview.jpg")}
                        alt="Clinician in white coat holding smartphone"
                        className="mahsn-editorialImg"
                        loading="lazy"
                      />
                      <span className="mahsn-mediaBadge">
                        FAITH-INFORMED · PATIENT-CENTERED
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 02 — PROJECT SIGNIFICANCE */}
              <article id="significance" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Project Significance</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-text">
                  Through this study, we aim to identify gaps in healthcare
                  experiences, explore the role of demographic and religious
                  factors, and develop policy-based recommendations to better
                  serve Muslim American patients. These findings can help
                  hospitals and medical policymakers improve the equity and
                  quality of Muslim patient care.
                </p>

                {/* Quotation Panel */}
                <div className="mahsn-quoteBanner">
                  <span className="mahsn-quoteMark" aria-hidden="true">
                    “
                  </span>
                  <p className="mahsn-quoteBannerText">
                    Building a stronger evidence base for healthcare that
                    understands and respects the religious and spiritual needs of
                    Muslim Americans.
                  </p>
                </div>

                {/* 3 Feature Cards */}
                <div className="row g-3">
                  {SIGNIFICANCE_CARDS.map((card) => (
                    <div key={card.num} className="col-md-4">
                      <div className="mahsn-pillarCard">
                        <div className="mahsn-circleBadge">{card.num}</div>
                        <h4 className="mahsn-pillarTitle">{card.title}</h4>
                        <p className="mahsn-pillarText">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 03 — METHODOLOGY */}
              <article id="methodology" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Methodology</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <div className="row align-items-center g-3 g-md-4 mb-4">
                  <div className="col-md-7">
                    <p className="mahsn-text">
                      This IRB-approved study was conducted between{" "}
                      <strong>2020 and 2021</strong>. It included a{" "}
                      <strong>74-item survey</strong> asking participants about
                      their hospital experiences, religiosity, coping,
                      discrimination, and demographic factors.
                    </p>
                    <p className={`mahsn-text mb-0`}>
                      Before COVID-19, recruitment was designed around four
                      channels: clinics, mosques, conferences, and social media.
                      Regional teams met monthly to coordinate recruitment, then
                      shifted their focus to virtual and social-media outreach
                      when in-person activities became restricted.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="mahsn-mediaWrapper">
                      <img
                        src={asset("/images/mahsn-pro/mahsn-brain.jpg")}
                        alt="Anatomical human brain model in medical laboratory"
                        className="mahsn-editorialImg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mahsn-subheading">Four recruitment channels</h3>

                {/* 4 Recruitment Cards */}
                <div className="row g-2 g-md-3 mb-4">
                  {RECRUITMENT_CHANNELS.map((channel) => (
                    <div key={channel.num} className="col-6 col-md-3">
                      <div className="mahsn-channelCard">
                        <div className="mahsn-circleBadge">{channel.num}</div>
                        <h4 className="mahsn-channelTitle">{channel.title}</h4>
                        <p className="mahsn-channelText">{channel.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mahsn-text">
                  Alongside regional teams, a National Steering Committee of
                  Muslim health organizations contributed to recruitment and
                  data-analysis planning. Members included the Association of
                  Muslim Chaplains, Khalil Center, IMAN Network, Stanford Muslim
                  Mental Health Lab, and the Islamic Medical Association of
                  North America (IMANA).
                </p>
                <p className={`mahsn-text mb-0`}>
                  After recruitment, project teams and committee representatives
                  collaborated on research papers covering Muslim patient
                  needs, religious coping, chaplaincy, and discrimination. The
                  project also identified a policy report as an intended output.
                </p>
              </article>

              {/* SECTION 04 — RESULTS & RESEARCH INSIGHTS */}
              <article id="results" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">
                      Results &amp; Research Insights
                    </h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-leadText">
                  The project website describes data collection as complete and
                  publications are now available. The research includes
                  findings on patients&apos; religious and spiritual resource
                  needs as well as discrimination in healthcare settings.
                </p>

                {/* 3 Stat Cards */}
                <div className={`row g-2 g-md-3 mahsn-statsRow`}>
                  {STATS.map((stat) => (
                    <div key={stat.label} className="col-sm-4">
                      <div className="mahsn-statCard">
                        <span className="mahsn-statNum">{stat.num}</span>
                        <p className="mahsn-statLabel">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlighted Insight Panel */}
                <div className="mahsn-insightPanel">
                  <span className="mahsn-insightDiamond" aria-hidden="true">
                    ◆
                  </span>
                  <div>
                    <h4 className="mahsn-insightTitle">
                      From research to better care
                    </h4>
                    <p className="mahsn-insightText">
                      MAHSN aims to support more culturally responsive hospital
                      practices, patient experiences, and evidence-informed
                      policymaking.
                    </p>
                  </div>
                </div>
              </article>

              {/* SECTION 05 — PUBLICATIONS */}
              <article id="publications" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Publications</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                  <span className="mahsn-counterTag">
                    PEER-REVIEWED RESEARCH
                  </span>
                </div>

                <div className="mahsn-papersList">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.num} className="mahsn-paperItem">
                      <span className="mahsn-paperNum">{pub.num}</span>
                      <div className="mahsn-paperContent">
                        <div className="mahsn-paperTag">{pub.kicker}</div>
                        <h4 className="mahsn-paperTitle">{pub.title}</h4>
                        <p className="mahsn-paperDesc">{pub.desc}</p>
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mahsn-paperLink"
                        >
                          READ PUBLICATION <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 06 — DISSEMINATION PRODUCTS */}
              <article id="dissemination" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">
                      Dissemination Products
                    </h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-leadText">
                  Explore research outputs and scholarship emerging from the
                  MAHSN project.
                </p>

                <div className="row g-3">
                  {/* Product 1 */}
                  <div className="col-md-6">
                    <div className="mahsn-productCard">
                      <div className="mahsn-productMockupWrap1">
                        <div className="mahsn-mockupPaper">
                          <p className="mahsn-mockupKicker">RESEARCH PAPER</p>
                          <h4 className="mahsn-mockupHeading">
                            Religious &amp; Spiritual Resource Needs
                          </h4>
                          <p className="mahsn-mockupSub">
                            National Survey Findings
                          </p>
                        </div>
                      </div>
                      <div className="mahsn-productBody">
                        <h4 className="mahsn-productTitle">
                          Religious &amp; Spiritual Needs
                        </h4>
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mahsn-productLink"
                        >
                          READ ARTICLE <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="col-md-6">
                    <div className="mahsn-productCard">
                      <div className="mahsn-productMockupWrap2">
                        <div className="mahsn-mockupPaper">
                          <p className="mahsn-mockupKicker">RESEARCH PAPER</p>
                          <h4 className="mahsn-mockupHeading">
                            Discrimination &amp; Healthcare Experience
                          </h4>
                          <p className="mahsn-mockupSub">
                            National Survey Findings
                          </p>
                        </div>
                      </div>
                      <div className="mahsn-productBody">
                        <h4 className="mahsn-productTitle">
                          Discrimination &amp; Healthcare
                        </h4>
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mahsn-productLink"
                        >
                          READ ARTICLE <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 07 — VIDEOS & MEDIA HIGHLIGHTS */}
              <article id="media" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">
                      Videos &amp; Media Highlights
                    </h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-leadText">
                  The original MAHSN page includes a project-survey video and an
                  &ldquo;I&amp;M—Here for the Muslim Community&rdquo; video.
                  Click on either video to launch the high-definition video player.
                </p>

                <MahsnVideoSection />
              </article>

              {/* SECTION 08 — PROJECT GALLERY */}
              <article id="gallery" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Project Gallery</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-leadText">
                  Gallery images from the original project page are marked as
                  forthcoming. The gallery component below is ready for
                  approved project photographs without changing this template.
                </p>

                <div className="row g-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="col-md-4">
                      <div className="mahsn-galleryCard">
                        <p className="mahsn-galleryText1">PROJECT PHOTO</p>
                        <p className="mahsn-galleryText2">COMING SOON</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 09 — PARTNER ORGANIZATIONS */}
              <article id="partners" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">
                      Partner Organizations
                    </h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <p className="mahsn-leadText">
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
                      <div className="mahsn-partnerCard">
                        {partner.subtext && partner.isPrefix && (
                          <span className="mahsn-partnerSubtext">
                            {partner.subtext}
                          </span>
                        )}
                        <span className="mahsn-partnerNameBold">
                          {partner.bold}
                        </span>
                        {partner.subtext && !partner.isPrefix && (
                          <span className="mahsn-partnerSubtext">
                            {partner.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mahsn-partnerFootnote">
                  Organization names are presented as text until approved logo
                  assets are added.
                </p>
              </article>

              {/* SECTION 10 — FUNDING */}
              <article id="funding" className="mahsn-sectionBlock">
                <div className="mahsn-sectionHead">
                  <div className="mahsn-sectionHeadLeft">
                    <h2 className="mahsn-sectionTitle">Funding</h2>
                    <div className="mahsn-accentBar" />
                  </div>
                </div>

                <div className="mahsn-fundingBox">
                  <div className="mahsn-fundingBadge" aria-hidden="true">
                    I&amp;M
                  </div>
                  <p className="mahsn-fundingText">
                    This project is funded by the{" "}
                    <strong>Initiative on Islam &amp; Medicine (II&amp;M)</strong>
                    .
                  </p>
                </div>
              </article>
            </main>

            {/* RIGHT SIDEBAR COLUMN (~30%) */}
            <aside className={`col-lg-4 mahsn-sidebarColumn`}>
              {/* SIDEBAR CARD 01: Project Objectives */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Project Objectives</h3>
                <div className="mahsn-accentBar" />
                <ul className="mahsn-objectivesList">
                  {OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className="mahsn-objectiveItem">
                      <span className="mahsn-objectiveNum">0{idx + 1}</span>
                      <p className="mahsn-objectiveText">{obj}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDEBAR CARD 02: Project at a Glance */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Project at a Glance</h3>
                <div className="mahsn-accentBar" />
                <dl className="mahsn-glanceList">
                  <div className="mahsn-glanceItem">
                    <dt className="mahsn-glanceDt">
                      <span className="mahsn-bullet" aria-hidden="true" />
                      Focus
                    </dt>
                    <dd className="mahsn-glanceDd">
                      Muslim American patient needs and spiritual care
                    </dd>
                  </div>
                  <div className="mahsn-glanceItem">
                    <dt className="mahsn-glanceDt">
                      <span className="mahsn-bullet" aria-hidden="true" />
                      Audience
                    </dt>
                    <dd className="mahsn-glanceDd">
                      Patients, hospitals and policymakers
                    </dd>
                  </div>
                  <div className="mahsn-glanceItem">
                    <dt className="mahsn-glanceDt">
                      <span className="mahsn-bullet" aria-hidden="true" />
                      Location
                    </dt>
                    <dd className="mahsn-glanceDd">
                      United States — national study
                    </dd>
                  </div>
                  <div className="mahsn-glanceItem">
                    <dt className="mahsn-glanceDt">
                      <span className="mahsn-bullet" aria-hidden="true" />
                      Approach
                    </dt>
                    <dd className="mahsn-glanceDd">
                      IRB-approved national survey
                    </dd>
                  </div>
                  <div className="mahsn-glanceItem">
                    <dt className="mahsn-glanceDt">
                      <span className="mahsn-bullet" aria-hidden="true" />
                      Study period
                    </dt>
                    <dd className="mahsn-glanceDd">2020–2021</dd>
                  </div>
                </dl>
              </div>

              {/* SIDEBAR CARD 03: Publications */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Publications</h3>
                <div className="mahsn-accentBar" />
                <ul className="mahsn-sidebarPubList">
                  <li className="mahsn-sidebarPubItem">
                    <span>1.</span>
                    <span>Religious &amp; spiritual needs in US hospitals</span>
                  </li>
                  <li className="mahsn-sidebarPubItem">
                    <span>2.</span>
                    <span>
                      Discrimination and sociodemographic characteristics
                    </span>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 04: Presentations */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Presentations</h3>
                <div className="mahsn-accentBar" />
                <p className="mahsn-forthcomingText">
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 05: Policy Reports */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Policy Reports</h3>
                <div className="mahsn-accentBar" />
                <p className="mahsn-forthcomingText">
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 06: Tool Kits */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Tool Kits</h3>
                <div className="mahsn-accentBar" />
                <p className="mahsn-forthcomingText">
                  Listed on the original project page as forthcoming.
                </p>
              </div>

              {/* SIDEBAR CARD 07: Quick Navigation */}
              <div className="mahsn-sidebarCard">
                <h3 className="mahsn-sidebarTitle">Quick Navigation</h3>
                <div className="mahsn-accentBar" />
                <ul className="mahsn-quickNavList">
                  <li>
                    <a href="#overview" className="mahsn-quickNavLink">
                      <span>Project Overview</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#methodology" className="mahsn-quickNavLink">
                      <span>Methodology</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className="mahsn-quickNavLink">
                      <span>Research Papers</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#media" className="mahsn-quickNavLink">
                      <span>Media &amp; Gallery</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#funding" className="mahsn-quickNavLink">
                      <span>Funding</span>
                      <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 08: Stay Connected with II&M (Solid Burgundy) */}
              <div className={`mahsn-sidebarCard mahsn-cardBurgundy`}>
                <p className="mahsn-heroQuoteEyebrow">
                  ADVANCING EVIDENCE-BASED CARE
                </p>
                <h3 className="text-white fs-5 fw-bold mb-2">
                  Stay connected with II&amp;M
                </h3>
                <div
                  className="bg-white opacity-75 mb-3"
                  style={{ height: 2, width: 28 }}
                />
                <p className={`mahsn-textLight small mb-0`}>
                  Explore ongoing research, educational resources, and ways to
                  support better care
                </p>
              </div>

              {/* SIDEBAR CARD 09: Support Our Communities (Solid Burgundy) */}
              <div className={`mahsn-sidebarCard mahsn-cardBurgundy`}>
                <p className={`mahsn-textLight small mb-3`}>
                  for Muslim communities.
                </p>
                <Link href="/consultation" className="mahsn-btnWhiteOutline">
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
