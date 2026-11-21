import Image from "next/image";
import Link from "next/link";
import { asset } from "../../lib/asset";
import EmarchGalleryClient from "./EmarchGalleryClient";

export const metadata = {
  title:
    "Engaging Muslim Americans for Research on Community Health (E-MARCH) | II&M",
  description:
    "E-MARCH builds community-engaged capacity among Muslim American leaders, clinicians, and faith-based institutions for Patient-Centered Outcomes Research (PCOR).",
  keywords: [
    "E-MARCH",
    "Engaging Muslim Americans for Research on Community Health",
    "PCOR",
    "Mosque-Based PCOR Toolkit",
    "Muslim American Health",
    "Initiative on Islam and Medicine",
    "PCORI EAIN-5990",
  ],
  openGraph: {
    title:
      "Engaging Muslim Americans for Research on Community Health (E-MARCH)",
    description:
      "A PCORI-funded capacity-building initiative engaging Muslim American communities in patient-centered outcomes research and mosque-based health initiatives.",
    url: "/community-health-research",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

const PROJECT_ACTIVITIES = [
  {
    num: "1",
    text: "Build research literacy and capacity among a diverse U.S. cohort of Muslim community leaders through tailored learning institutes and webinars.",
  },
  {
    num: "2",
    text: "Deliver community-engaged training on Islamic health frameworks, comparative effectiveness methods, and mosque-based engagement strategies.",
  },
  {
    num: "3",
    text: "Empower patients, families, and stakeholders through consensus-building around community-valued health research priorities.",
  },
  {
    num: "4",
    text: "Collaborate across institutions and national convenings (AMHP Conference) to co-create culturally responsive materials and PCOR toolkits.",
  },
];

const PCOR_STAGES = [
  {
    variant: "green",
    title: "Focuses on Patient-Centered Outcomes",
    text: "Helps patients and caregivers assess options, symptoms, values, and clinical concerns across diverse settings to address priorities that matter most.",
  },
  {
    variant: "burgundy",
    title: "Research Methods",
    text: "Applies rigorous comparative and community-engaged study designs that answer meaningful patient questions and improve clinical decision-making.",
  },
  {
    variant: "navy",
    title: "Outcome-Based Information",
    text: "Translates research findings into clear, timely, and usable evidence for patients, caregivers, clinicians, policymakers, and community groups.",
  },
];

const EMPOWERMENT_ISSUES = [
  "Health outcomes are largely understudied in the Muslim American community",
  "There are few opportunities for community leaders to voice the needs for community-valued PCOR",
  "The mosque community remains an under-utilized setting for health research and intervention",
  "There are few programs or resources tailored to the religious and cultural needs of the Muslim American community",
];

// Authentic II&M team, faculty, & advisor portraits arranged in 2-5-5-2 diamond mosaic
const OUTPUT_COLLAGE_ROWS = [
  [
    { src: "/images/our-team/mheart-padela-hd.jpg", alt: "Dr. Aasim I. Padela" },
    { src: "/images/our-team/mheart-fatema-hd.jpg", alt: "Fatema Mirza" },
  ],
  [
    { src: "/images/our-team/mheart-ayman-hd.jpg", alt: "Imam Ayman Soliman" },
    { src: "/images/our-team/amb-ingrid.jpg", alt: "Dr. Ingrid Mattson" },
    { src: "/images/our-team/mheart-adel-hd.jpg", alt: "Adel Sirek" },
    { src: "/images/our-team/hiba.jpg", alt: "II&M Research Contributor" },
    { src: "/images/our-team/amb-hatem.jpg", alt: "II&M Advisory Scholar" },
  ],
  [
    { src: "/images/our-team/laila.jpg", alt: "II&M Research Contributor" },
    { src: "/images/our-team/nabeel.jpg", alt: "II&M Research Fellow" },
    { src: "/images/our-team/amb-yasir.jpg", alt: "II&M Community Partner" },
    { src: "/images/our-team/raudah.jpg", alt: "II&M Project Coordinator" },
    { src: "/images/empart-study/hd_team-anna.png", alt: "Anna Khan" },
  ],
  [
    { src: "/images/our-team/amb-ermin.jpg", alt: "II&M Advisory Scholar" },
    { src: "/images/our-team/sarah.jpg", alt: "II&M Research Fellow" },
  ],
];

const GALLERY_PHOTOS = [
  {
    src: "/images/mheart-gallery/01_group_photo.png",
    alt: "Community health cohort and project leadership group gathering",
  },
  {
    src: "/images/mheart-gallery/02_group_discussion.png",
    alt: "Small-group collaborative workshop discussion table",
  },
  {
    src: "/images/mheart-gallery/03_classroom_discussion.png",
    alt: "Educational breakout session with community participants",
  },
  {
    src: "/images/mheart-gallery/04_screen_presentation.png",
    alt: "Interactive project presentation on community-centered research methods",
  },
  {
    src: "/images/mheart-gallery/05_speaker_presentation.png",
    alt: "Faculty speaker addressing healthcare and community partners",
  },
  {
    src: "/images/mheart-gallery/06_lecture_hall.png",
    alt: "Plenary hall convenings during research priority workshops",
  },
  {
    src: "/images/mheart-gallery/07_audience_view.png",
    alt: "Attendees engaging in community health training plenary",
  },
  {
    src: "/images/mheart-gallery/08_sticky_notes.png",
    alt: "Consensus-building priority mapping exercise",
  },
  {
    src: "/images/mheart-gallery/09_presenter_at_screen.png",
    alt: "Researcher leading discussion on mosque-based health engagement",
  },
];

const ArrowRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M3 8h10" />
    <path d="M9 4l4 4-4 4" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M3.2 8.5l3.2 3.2L12.8 4.5" />
  </svg>
);

const YoutubeSmallIcon = () => (
  <svg
    width="15"
    height="11"
    viewBox="0 0 24 17"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <rect width="24" height="17" rx="4" fill="#FF0000" />
    <path d="M10 5L16 8.5L10 12V5Z" fill="#FFFFFF" />
  </svg>
);

export default function EmarchPage() {
  return (
    <div className="emarch-page">
      {/* ====================================================================
          1. HERO SECTION (Editorial Left Heading + Pointed Islamic Arch Right)
          ==================================================================== */}
      <section className="emarch-hero">
        <div className="emarch-heroBgCircles" aria-hidden="true">
          <div className="emarch-heroCircleOuter" />
          <div className="emarch-heroCircleInner" />
        </div>

        <div className="container emarch-heroContainer">
          <div className="row align-items-end">
            <div className="col-lg-8 emarch-heroTextCol">
              <nav aria-label="breadcrumb" className="emarch-breadcrumbWrap">
                <ol className="emarch-breadcrumbList">
                  <li className="emarch-breadcrumbItem">
                    <Link href="/" className="emarch-breadcrumbLink">
                      Home
                    </Link>
                  </li>
                  <li className="emarch-breadcrumbSeparator" aria-hidden="true">
                    ›
                  </li>
                  <li className="emarch-breadcrumbItem">
                    <Link href="/research" className="emarch-breadcrumbLink">
                      Research
                    </Link>
                  </li>
                  <li className="emarch-breadcrumbSeparator" aria-hidden="true">
                    ›
                  </li>
                  <li className="emarch-breadcrumbItem active" aria-current="page">
                    Engaging Muslim Americans for Research on Community Health (E-MARCH)
                  </li>
                </ol>
              </nav>

              <h1 className="emarch-heroTitle">
                Engaging Muslim Americans for Research on Community Health (E-MARCH)
              </h1>

              <div className="emarch-heroUnderline" aria-hidden="true" />
            </div>

            <div className="col-lg-4 emarch-heroArchCol">
              <div className="emarch-heroArchWrap">
                <Image
                  src={asset("/images/e-march/hero-mosque-arch.jpg")}
                  alt="Warm architectural view of mosque dome and minarets framed inside an Islamic arch"
                  width={740}
                  height={520}
                  priority
                  className="emarch-heroArchImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN EDITORIAL (~70%) + PROJECT ACTIVITIES SIDEBAR (~30%)
          ==================================================================== */}
      <section className="emarch-mainTwoCol">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* LEFT 70% MAIN COLUMN */}
            <div className="col-lg-8">
              {/* BLOCK A: PROJECT OVERVIEW */}
              <article className="emarch-overviewBlock">
                <div className="emarch-sectionHeader">
                  <span className="emarch-accentBar" aria-hidden="true" />
                  <h2 className="emarch-sectionHeading">Project Overview</h2>
                </div>

                <p className="emarch-paragraph">
                  Patients, caregivers, and other healthcare stakeholders face a number of challenges when it comes to figuring out what the right decision is for them in a healthcare setting. While health and healthcare researchers have made incredible progress in improving health outcomes, current research methodology doesn&apos;t always provide patients with the information they want to make an informed health decision. Patient-centered outcomes research (PCOR) is designed to help close that gap.
                </p>

                <p className="emarch-paragraph">
                  The Initiative on Islam and Medicine at the University of Chicago,{" "}
                  <strong>UMMA Community Clinic</strong>,{" "}
                  <strong>Whitestone Foundation</strong>, and{" "}
                  <strong>Worry Free Community</strong> partnered on{" "}
                  <em>Engaging Muslim Americans for Research on Community Health (E-MARCH)</em>{" "}
                  to build capacity and address healthcare disparities within American Muslim communities.
                </p>

                <div className="emarch-awardBannerWrap">
                  <a
                    href="https://www.pcori.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emarch-awardBannerBtn"
                  >
                    <span>
                      This project was funded through a Patient-Centered Outcomes Research Institute (PCORI) Eugene Washington PCORI Engagement Award (EAIN-5990).
                    </span>
                    <span className="ms-2 d-inline-flex align-items-center">
                      <ArrowRightIcon />
                    </span>
                  </a>
                </div>
              </article>

              <div className="emarch-blockDivider" aria-hidden="true" />

              {/* BLOCK B: MOSQUE-BASED PCOR TOOLKIT + ACCESSIBLE SVG DIAGRAM */}
              <article className="emarch-toolkitBlock">
                <div className="row g-4 align-items-center">
                  <div className="col-md-6">
                    <div className="emarch-sectionHeader">
                      <span className="emarch-accentBar" aria-hidden="true" />
                      <h2 className="emarch-sectionHeading">
                        Mosque-Based PCOR Toolkits Now Available!
                      </h2>
                    </div>

                    <h3 className="emarch-subHeading">
                      Interested in conducting mosque-based research?
                    </h3>

                    <p className="emarch-paragraph">
                      The growing complexity of the American healthcare system and continued existence of health and healthcare inequities has spurred leading institutes and funders to develop novel methods and enhanced strategies by which to conduct, implement, and disseminate health outcomes research. Central to these efforts has been the focus on bringing value to patients by measuring outcomes of import to them, and on partnering with stakeholders across multiple sectors including the healthcare industry, community-based organizations, policy makers, and the academy so that health research and programming is better situated to the broader contexts of healthcare delivery within the US. This toolkit leverages these resources in bringing PCORI methods and tools to bear upon Muslim American community health through the venue of mosque communities.
                    </p>

                    <div className="mt-3">
                      <Link href="#research-resources" className="emarch-inlineLink">
                        <span>Explore Toolkit &amp; Whitepaper</span>
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6 text-center">
                    <figure className="emarch-toolkitFigure">
                      <svg
                        viewBox="0 0 360 360"
                        className="emarch-toolkitSvg"
                        role="img"
                        aria-labelledby="toolkit-diagram-title toolkit-diagram-desc"
                      >
                        <title id="toolkit-diagram-title">
                          Mosque-Based Patient-Centered Outcomes Research Toolkit Model
                        </title>
                        <desc id="toolkit-diagram-desc">
                          Four-part circular framework highlighting Community Engagement, PCOR Research Methods, Religious and Cultural Factors, and Priority Health Agenda around a central mosque research guide emblem.
                        </desc>

                        {/* Subtle outer ambient ring */}
                        <circle cx="180" cy="180" r="168" fill="#fdfaf6" stroke="#ede4d7" strokeWidth="1.5" />

                        {/* TOP QUADRANT ARCH (Warm Peach #eea479) */}
                        <path
                          d="M 88 88 A 130 130 0 0 1 272 88 L 226 134 A 65 65 0 0 0 134 134 Z"
                          fill="#efa77c"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <text x="180" y="72" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          COMMUNITY
                        </text>
                        <text x="180" y="86" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          ENGAGEMENT
                        </text>

                        {/* RIGHT QUADRANT ARCH (Muted Sky Blue #6f9dc4) */}
                        <path
                          d="M 272 88 A 130 130 0 0 1 272 272 L 226 226 A 65 65 0 0 0 226 134 Z"
                          fill="#6f9dc4"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <text x="278" y="176" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          PCOR
                        </text>
                        <text x="278" y="190" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          METHODS
                        </text>

                        {/* BOTTOM QUADRANT ARCH (Sage Teal #99bcb6) */}
                        <path
                          d="M 272 272 A 130 130 0 0 1 88 272 L 134 226 A 65 65 0 0 0 226 226 Z"
                          fill="#9abcb6"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <text x="180" y="278" textAnchor="middle" fill="#10243a" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          PRIORITY
                        </text>
                        <text x="180" y="292" textAnchor="middle" fill="#10243a" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          AGENDA
                        </text>

                        {/* LEFT QUADRANT ARCH (Muted Slate #939ba2) */}
                        <path
                          d="M 88 272 A 130 130 0 0 1 88 88 L 134 134 A 65 65 0 0 0 134 226 Z"
                          fill="#939ca3"
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <text x="82" y="176" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          ISLAMIC
                        </text>
                        <text x="82" y="190" textAnchor="middle" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="'DM Sans', sans-serif">
                          CONTEXT
                        </text>

                        {/* CENTER MEDALLION */}
                        <circle cx="180" cy="180" r="62" fill="#ffffff" stroke="#e8dfd2" strokeWidth="2.5" />
                        {/* Stylized Open Book & Research Dome Emblem */}
                        <g transform="translate(148, 146)">
                          {/* Dome / Arch silhouette */}
                          <path
                            d="M32 4 C24 10 21 16 21 24 L43 24 C43 16 40 10 32 4 Z"
                            fill="#800000"
                            opacity="0.14"
                          />
                          <path
                            d="M32 7 C26 12 24 17 24 23 L40 23 C40 17 38 12 32 7 Z"
                            fill="none"
                            stroke="#800000"
                            strokeWidth="2"
                          />
                          <line x1="32" y1="3" x2="32" y2="7" stroke="#800000" strokeWidth="2" strokeLinecap="round" />
                          {/* Open Book Pages */}
                          <path
                            d="M8 29 C16 26 26 27 32 31 C38 27 48 26 56 29 L56 54 C48 51 38 52 32 56 C26 52 16 51 8 54 Z"
                            fill="#800000"
                          />
                          <path
                            d="M11 32 C17 30 25 31 30 34 L30 51 C25 49 17 48 11 50 Z"
                            fill="#ffffff"
                          />
                          <path
                            d="M53 32 C47 30 39 31 34 34 L34 51 C39 49 47 48 53 50 Z"
                            fill="#ffffff"
                          />
                          {/* Community dots on pages */}
                          <circle cx="20" cy="40" r="2.2" fill="#10243a" />
                          <circle cx="44" cy="40" r="2.2" fill="#10243a" />
                          <line x1="15" y1="45" x2="26" y2="45" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="38" y1="45" x2="49" y2="45" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                      </svg>

                      <figcaption className="emarch-toolkitCaption">
                        <span className="emarch-toolkitCaptionTitle">
                          A TOOL-KIT FOR MOSQUE-BASED PATIENT-CENTERED OUTCOMES RESEARCH
                        </span>
                        <span className="emarch-toolkitCaptionSub">
                          A resource guide for conducting PCOR in Muslim communities
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </article>
            </div>

            {/* RIGHT 30% SIDEBAR COLUMN — PROJECT ACTIVITIES */}
            <aside className="col-lg-4">
              <div className="emarch-sidebarCard">
                <h2 className="emarch-sidebarTitle">Project Activities</h2>

                <ol className="emarch-activitiesList">
                  {PROJECT_ACTIVITIES.map((item) => (
                    <li key={item.num} className="emarch-activityRow">
                      <span className="emarch-activityBadge" aria-hidden="true">
                        {item.num}
                      </span>
                      <span className="emarch-activityText">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. E-MARCH GOALS (3-Stage Horizontal Flow + Aims Card)
          ==================================================================== */}
      <section className="emarch-goalsSection">
        <div className="container">
          <div className="emarch-sectionHeader mb-4">
            <span className="emarch-accentBar" aria-hidden="true" />
            <h2 className="emarch-sectionHeading">E-MARCH Goals</h2>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT CARD: What is Patient-Centered Outcomes Research (PCOR)? */}
            <div className="col-lg-6">
              <div className="emarch-goalsPanel h-100">
                <h3 className="emarch-goalsSubheading">
                  What is Patient-Centered Outcomes Research (PCOR)?
                </h3>

                <div className="emarch-processFlow">
                  {PCOR_STAGES.map((stage, idx) => (
                    <div
                      key={stage.title}
                      className={`emarch-stageCol emarch-stage--${stage.variant}`}
                    >
                      <div className="emarch-stageArrowWrap">
                        <div className="emarch-stageArrow">
                          <span>{stage.title}</span>
                        </div>
                        {idx < PCOR_STAGES.length - 1 && (
                          <div className="emarch-stageConnector" aria-hidden="true" />
                        )}
                      </div>
                      <div className="emarch-stageCard">
                        <p className="emarch-stageText">{stage.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Issues Targeted + Summary */}
            <div className="col-lg-6">
              <div className="emarch-goalsPanel h-100">
                <p className="emarch-goalsLead">
                  E-MARCH aims to empower the Muslim American community by targeting the following issues:
                </p>

                <ul className="emarch-checkList">
                  {EMPOWERMENT_ISSUES.map((issue, idx) => (
                    <li key={idx} className="emarch-checkItem">
                      <span className="emarch-checkIcon">
                        <CheckIcon />
                      </span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>

                <p className="emarch-goalsClosing">
                  PCOR is a research method that focuses on providing patients with evidence-based information that allows them and caretakers with clinicians to make informed healthcare decisions. Involving Muslim American community members helps make the healthcare system attentive to holistic needs and improves health outcomes for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. FEATURED VIDEO + E-MARCH PROJECT UPDATES
          ==================================================================== */}
      <section className="emarch-videoUpdatesSection">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* Left Column: How to Conduct Patient Centered Muslim Health Research */}
            <div className="col-lg-6">
              <div className="emarch-sectionHeader mb-3">
                <span className="emarch-accentBar" aria-hidden="true" />
                <h2 className="emarch-sectionHeading">
                  How to Conduct Patient Centered Muslim Health Research
                </h2>
              </div>

              <a
                href="https://www.youtube.com/watch?v=iAdoZl2l9Ds"
                target="_blank"
                rel="noopener noreferrer"
                className="emarch-videoCard"
                aria-label="Watch video on YouTube: Conducting Patient-Centered Muslim Health Research (E-MARCH)"
              >
                <div className="emarch-videoThumbWrap">
                  <Image
                    src={asset("/images/workshops/hero.jpg")}
                    alt="Community research webinar presentation scene for E-MARCH"
                    width={1280}
                    height={720}
                    className="emarch-videoThumb"
                    loading="lazy"
                  />
                  <div className="emarch-videoCrimsonTint" aria-hidden="true" />

                  <div className="emarch-videoTopBar">
                    <span className="emarch-videoAvatar" aria-hidden="true">
                      I&amp;M
                    </span>
                    <span className="emarch-videoTopTitle">
                      PCORI E-MARCH — How to Conduct Patient-Centered Muslim Health Research
                    </span>
                  </div>

                  <div className="emarch-videoPlayBtn" aria-hidden="true">
                    <svg viewBox="0 0 68 48" width="60" height="42">
                      <path
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#FF0000"
                      />
                      <path d="M 45,24 27,14 27,34" fill="#FFFFFF" />
                    </svg>
                  </div>

                  <div className="emarch-videoWatchBadge" aria-hidden="true">
                    <span>Watch on</span>
                    <YoutubeSmallIcon />
                    <strong>YouTube</strong>
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column: E-MARCH Project Updates */}
            <div className="col-lg-6">
              <div className="emarch-sectionHeader mb-3">
                <span className="emarch-accentBar" aria-hidden="true" />
                <h2 className="emarch-sectionHeading">E-MARCH Project Updates</h2>
              </div>

              <div className="emarch-updatesCard">
                <h3 className="emarch-updatesTitle">
                  Advancing Muslim American Health Priorities Conference
                </h3>

                <p className="emarch-paragraph">
                  AMHP (Advancing Muslim American Health Priorities) was the culmination of E-MARCH&apos;s multi-stakeholder convening of religious leaders, scholars, educators, community health workers, social workers, caretakers, clinicians, healthcare leaders, and researchers united around key community health research priorities for Muslim Americans.
                </p>

                <p className="emarch-paragraph">
                  The conference provided a national venue to disseminate patient-centered approaches to addressing disparities, advance faith-informed models of care, and strengthen collaboration between mosques and academic medicine to promote health equity.
                </p>

                <div className="emarch-updatesActionWrap">
                  <Link href="/workshops" className="emarch-inlineLink">
                    <span>Explore Workshops &amp; Conference Programs</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. RESEARCH RESOURCES (Public Press | Whitepaper | Poster & Presentations)
          ==================================================================== */}
      <section id="research-resources" className="emarch-resourcesSection">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Public Press */}
            <div className="col-md-6 col-lg-4">
              <div className="emarch-resourceCard h-100">
                <div className="emarch-resourceHead">
                  <span className="emarch-resourceIcon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                  </span>
                  <h3 className="emarch-resourceTitle">Public Press</h3>
                </div>

                <ul className="emarch-resourceLinks">
                  <li>
                    <Link href="/resources" className="emarch-resourceLink">
                      Islamic Horizons A-MAP Conference Report
                    </Link>
                  </li>
                  <li>
                    <a href={asset("/documents/Project-Findings-Public-Piece.pdf")} target="_blank" rel="noopener noreferrer" className="emarch-resourceLink">
                      Project Activities &amp; Findings ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=iAdoZl2l9Ds" target="_blank" rel="noopener noreferrer" className="emarch-resourceLink">
                      E-MARCH Project Video ↗
                    </a>
                  </li>
                </ul>

                <p className="emarch-resourceNote">
                  Downloadable project briefs, posters, and research summaries from the E-MARCH initiative.
                </p>
              </div>
            </div>

            {/* Whitepaper */}
            <div className="col-md-6 col-lg-5">
              <div className="emarch-resourceCard h-100">
                <div className="emarch-resourceHead">
                  <span className="emarch-resourceIcon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="8" y1="13" x2="16" y2="13" />
                      <line x1="8" y1="17" x2="16" y2="17" />
                    </svg>
                  </span>
                  <h3 className="emarch-resourceTitle">Whitepaper</h3>
                </div>

                <p className="emarch-resourceDesc">
                  The growing complexity of the American healthcare system and healthcare outcomes creates a vital need for culturally responsive and community-engaged research frameworks. This whitepaper provides an overview of the project, key findings, and recommendations for future work.
                </p>

                <a href={asset("/documents/EMARCH-White-Paper-Final-1.pdf")} target="_blank" rel="noopener noreferrer" className="emarch-resourceHighlightLink">
                  <span>
                    A Tool-kit for Mosque-Based Patient-Centered Outcomes Research: A resource guide for conducting PCOR in Muslim communities
                  </span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            {/* Poster & Presentations Stack */}
            <div className="col-lg-3">
              <div className="emarch-resourceStack h-100">
                <div className="emarch-resourceCard emarch-resourceCard--compact">
                  <div className="emarch-resourceHead">
                    <span className="emarch-resourceIcon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="3" width="16" height="18" rx="2" />
                        <line x1="8" y1="8" x2="16" y2="8" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                        <line x1="8" y1="16" x2="12" y2="16" />
                      </svg>
                    </span>
                    <h3 className="emarch-resourceTitle">Poster</h3>
                  </div>

                  <a href={asset("/documents/MCWCE2021-E-MARCH_Poster.pdf")} target="_blank" rel="noopener noreferrer" className="emarch-btnSlate">
                    <span>View Poster</span>
                    <ArrowRightIcon />
                  </a>
                </div>

                <div className="emarch-resourceCard emarch-resourceCard--compact">
                  <div className="emarch-resourceHead">
                    <span className="emarch-resourceIcon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h20" />
                        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                        <path d="m7 21 5-5 5 5" />
                      </svg>
                    </span>
                    <h3 className="emarch-resourceTitle">Presentations</h3>
                  </div>

                  <a href="https://www.youtube.com/watch?v=8ntZ4qdge0g" target="_blank" rel="noopener noreferrer" className="emarch-btnSlate">
                    <span>View Presentations</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. PROJECT OUTPUTS (Text Left + Diamond Collage Center + Caption Right)
          ==================================================================== */}
      <section className="emarch-outputsSection">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Copy */}
            <div className="col-lg-4">
              <div className="emarch-sectionHeader mb-3">
                <span className="emarch-accentBar" aria-hidden="true" />
                <h2 className="emarch-sectionHeading">Project Outputs</h2>
              </div>

              <p className="emarch-paragraph">
                Since August 2018, our E-MARCH cohort has diligently worked to recruit, engage, and assess the needs of Muslim communities through community-centered research. Through engagement in a learning and collaborative process, participants and their communities have produced valuable insights and outcomes research.
              </p>
            </div>

            {/* Center 2-5-5-2 Portrait Collage */}
            <div className="col-lg-5">
              <div
                className="emarch-collageWrap"
                aria-label="Collage of community advisory and II&M research contributors"
              >
                {OUTPUT_COLLAGE_ROWS.map((row, rowIdx) => (
                  <div key={rowIdx} className="emarch-collageRow">
                    {row.map((person, colIdx) => (
                      <div key={`${rowIdx}-${colIdx}`} className="emarch-collageTile">
                        <Image
                          src={asset(person.src)}
                          alt={person.alt}
                          width={160}
                          height={160}
                          className="emarch-collageImg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Caption */}
            <div className="col-lg-3">
              <p className="emarch-outputsCaption">
                Pictured here are II&amp;M Research &amp; Community Advisory contributors supporting faith-engaged community health initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. GALLERY (Interactive 3-Column Desktop / Lightbox)
          ==================================================================== */}
      <section className="emarch-gallerySection">
        <div className="container">
          <div className="emarch-sectionHeader mb-4">
            <span className="emarch-accentBar" aria-hidden="true" />
            <h2 className="emarch-sectionHeading">Gallery</h2>
          </div>

          <EmarchGalleryClient photos={GALLERY_PHOTOS} />
        </div>
      </section>

      {/* ====================================================================
          8. FULL-WIDTH DEEP GREEN CTA BANNER
          ==================================================================== */}
      <section className="emarch-finalCtaSection">
        <div className="container emarch-finalCtaContainer">
          <div className="emarch-finalCtaContent">
            <div className="emarch-finalCtaEyebrow">
              BUILDING PARTNERSHIPS FOR HEALTH EQUITY
            </div>

            <h2 className="emarch-finalCtaHeading">
              Building more inclusive healthcare environments.
            </h2>

            <p className="emarch-finalCtaDesc">
              Support community-driven, patient-centered research and culturally responsive healthcare partnerships that improve health outcomes for Muslim families and institutions.
            </p>

            <div className="emarch-finalCtaActions">
              <Link href="/contact" className="emarch-btnCtaSolid">
                <span>GET IN TOUCH</span>
                <ArrowRightIcon />
              </Link>
              <Link href="/research" className="emarch-btnCtaOutline">
                <span>EXPLORE RESEARCH</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

