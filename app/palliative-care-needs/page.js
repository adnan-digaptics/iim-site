import Link from "next/link";
import { asset } from "../../lib/asset";

export const metadata = {
  title:
    "Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN) | II&M",
  description:
    "Advancing culturally and religiously responsive end-of-life, palliative, and hospice care for Muslim Americans through research, education, and community engagement.",
  keywords: [
    "I AM PCN",
    "Palliative Care Muslim Americans",
    "Islamic Bioethics End of Life",
    "Hospice Care Islam",
    "Muslim Healthcare Disparities",
    "Advance Care Planning",
    "II&M Research",
  ],
  openGraph: {
    title:
      "Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN)",
    description:
      "A pioneering research initiative exploring the palliative and hospice care needs of American Muslims to inform culturally and religiously responsive care models.",
    url: "/palliative-care-needs",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

// 1. Project Goals (Sidebar Card 1)
const PROJECT_GOALS = [
  {
    num: "1",
    text: "Explore the needs, experiences, and barriers Muslim Americans face at the end of life",
  },
  {
    num: "2",
    text: "Educate the community through accessible, Islamically informed resources and workshops",
  },
  {
    num: "3",
    text: "Empower families to make informed, religiously aligned decisions",
  },
  {
    num: "4",
    text: "Collaborate with imams, clinicians, ethicists, and researchers to co-create culturally and religiously responsive patient care models",
  },
];

// 2. Core Activities (Sidebar Card 2)
const CORE_ACTIVITIES = [
  {
    num: "1",
    text: "Multidisciplinary planning sessions to adapt EOL education to Muslim religious and cultural considerations",
  },
  {
    num: "2",
    text: "Community Educational Workshops: Held in mosques, these workshops offer information on hospice, palliative care, advance care planning (ACP), and Islamic perspectives",
  },
  {
    num: "3",
    text: "Surveys & Interviews (Research Component): Surveys capture participants' knowledge, attitudes, and readiness for EOL planning, with interviews to follow with select participants to deepen insight into barriers and preferences. Recruitment is supported by trusted community leaders and clinicians.",
  },
];

// 3. Sidebar Resource Links / Quick Links
const SIDEBAR_LINKS = [
  {
    title: "Workshops",
    href: "https://www.youtube.com/playlist?list=PLKPFd4mBCvIhv6oOBA1MJDvAd0uFY0Xqb",
    external: true,
  },
  {
    title: "Academic Publications",
    external: true,
    children: [
      { label: "Publication 1", href: "https://journals.sagepub.com/doi/10.1177/10499091251315140" },
      { label: "Publication 2", href: "https://www.sciencedirect.com/science/article/abs/pii/S088539242400006X" },
      { label: "Publication 3", href: "https://journals.sagepub.com/doi/10.1177/10499091231198216" },
      { label: "Publication 4", href: "https://link.springer.com/article/10.1007/s10903-023-01541-x" },
    ],
  },
  {
    title: "Community Impact",
    external: true,
    children: [
      { label: "Wisconsin Muslim Journal", href: "https://wisconsinmuslimjournal.org/medical-college-of-wisconsin-research-highlights-muslim-americans-end-of-life-care-needs/" },
    ],
  },
  {
    title: "Presentations & Talks",
    children: [
      { label: "MCW Community Engagement Poster", href: "/pdfs/resources/mcw-community-engagement-poster.pdf" },
      { label: "I AM PCN Poster – OCE 2025", href: "/pdfs/resources/i-am-pcn-poster-oce-2025.pdf" },
    ],
  },
];

// 4. Team Members
const TEAM_MEMBERS = [
  {
    name: "Sameeia Khalid",
    image: "/images/i-am-pcn/hd_team-sameeia.png",
  },
  {
    name: "Dr. Ramy Sedan",
    image: "/images/i-am-pcn/hd_team-ramy.png",
  },
  {
    name: "Gwenn McClendon",
    image: "/images/i-am-pcn/hd_team-gwenn.png",
  },
  {
    name: "Dr. Aasim I. Padela",
    image: "/images/i-am-pcn/hd_team-padela.png",
  },
];

export default function IAmPcnPage() {
  return (
    <div className="iampcn-page">
      {/* ====================================================================
          1. HERO HEADER WITH ACCENT MARK & BREADCRUMB
          ==================================================================== */}
      <section className="iampcn-hero">
        <div className="container">
          {/* Decorative Diamond Accent Bar */}
          <div className="iampcn-diamondAccent" aria-hidden="true">
            <span className="iampcn-diamondLine" />
            <span className="iampcn-diamondShape">◆</span>
            <span className="iampcn-diamondLine" />
          </div>

          <h1 className="iampcn-heroTitle">
            Investigating American Muslim
            <br />
            Palliative &amp; Hospice Care Needs
            <br />
            (I AM PCN)
          </h1>

          <nav aria-label="breadcrumb" className="iampcn-breadcrumbWrap">
            <ol className="iampcn-breadcrumbList">
              <li className="iampcn-breadcrumbItem">
                <Link href="/" className="iampcn-breadcrumbLink">
                  Home
                </Link>
              </li>
              <li className="iampcn-breadcrumbSeparator" aria-hidden="true">
                /
              </li>
              <li
                className="iampcn-breadcrumbItem active"
                aria-current="page"
              >
                Investigating American Muslim Palliative &amp; Hospice Care Needs
                (I AM PCN)
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN CONTENT TWO-COLUMN GRID (~68% Main, ~32% Sidebar)
          ==================================================================== */}
      <section className="iampcn-mainSection">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* LEFT MAIN COLUMN */}
            <div className="col-lg-8">
              {/* SECTION: Why This Work Matters */}
              <article className="iampcn-contentBlock">
                <div className="iampcn-sectionHeader">
                  <h2 className="iampcn-sectionHeading">Why This Work Matters</h2>
                  <div className="iampcn-headerUnderline" aria-hidden="true">
                    <span className="iampcn-diamondLineShort" />
                    <span className="iampcn-diamondShapeSmall">◆</span>
                    <span className="iampcn-diamondLineShort" />
                  </div>
                </div>

                <p className="iampcn-paragraph">
                  End-of-Life (EOL) healthcare poses unique challenges for Muslim Americans. Families often face the difficult task of navigating complex U.S. healthcare and legal systems while remaining true to deeply held Islamic values and principles. Yet many remain in the &ldquo;pre-contemplation&rdquo; phase—not actively engaging in advance care planning. As a result, when crises arise, families often experience stress, conflict, and emotional distress.
                </p>

                <p className="iampcn-paragraph"><strong>Barriers include:</strong></p>
                <ul className="iampcn-bulletList">
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span><strong>Cultural and Religious Sensitivities</strong> – discomfort discussing death or fear that planning undermines trust in Allah&rsquo;s decree.</span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span><strong>Limited Knowledge</strong> – lack of familiarity with terms and tools such as advance directives, living wills, and Do-Not-Resuscitate (DNR) orders.</span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span><strong>Concerns About Accommodation</strong> – worries about prayer, modesty, gender-concordant care, and dietary needs in hospice and palliative settings.</span>
                  </li>
                </ul>

                <p className="iampcn-paragraph">
                  At the same time, Muslim Americans—3–5 million people and one of the fastest-growing and most diverse U.S. faith communities—remain underrepresented in health data and in hospice/palliative care utilization. No Muslim-run hospice currently exists in the U.S., and families often encounter discrimination or care that is not religiously aligned.
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: Our Journey: A Decade of Iterative Workshop Development */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeading">
                  Our Journey: A Decade of Iterative Workshop Development
                  (2014–2023)
                </h2>

                <p className="iampcn-paragraph">
                  The work that eventually became I AM PCN began nearly a decade earlier with <strong>grassroots workshops, community engagement, and Islamic bioethics scholarship</strong>. Between <strong>2014 and 2023</strong>, we organized <strong>nine mosque- and community-based workshops</strong> across the country, partnering with scholars, clinicians, chaplains, and imams to start much-needed conversations about EOL care.
                </p>
                <p className="iampcn-paragraph">
                  <strong>Workshops Conducted</strong>
                </p>
                <p className="iampcn-paragraph">
                  Through a series of workshops over time, we gathered feedback and continuously refined the content and delivery.
                </p>
                <p className="iampcn-paragraph">
                  <strong>What We Learned:</strong> Through a series of workshops over time, we gathered feedback and continuously refined the content and delivery. Each iteration deepened community partnerships, filled in knowledge gaps, and strengthened attendee&rsquo;s preparedness for real-life decisions. This plan-do-study-revise process helped to clarify the content and methods of educational programs to empower decision-making about end-of-life healthcare.
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: Narrowing the Focus: The I AM PCN Project */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeading">
                  Narrowing the Focus: The I AM PCN Project
                </h2>

                <p className="iampcn-paragraph">
                  Launched in 2022, the Investigating American Muslim Palliative and Hospice Care Needs (I AM PCN) project formalized this decade of work into a national, multi-institutional initiative.
                </p>
                <p className="iampcn-paragraph">
                  Led by the <strong>Medical College of Wisconsin (MCW)</strong>, in partnership with the <strong>Muslim Community and Health Center (MCHC)</strong> and the <strong>Initiative on Islam and Medicine (II&amp;M)</strong>, I AM PCN brought together scholars, clinicians, chaplains, imams, and community leaders to develop solutions that are both culturally responsive and religiously aligned.
                </p>

                <div className="iampcn-sectionDivider" />
              </article>

              {/* SECTION: What Makes I AM PCN Unique */}
              <article className="iampcn-contentBlock">
                <h2 className="iampcn-sectionHeadingDark">
                  What Makes I AM PCN Unique
                </h2>

                <ul className="iampcn-bulletList">
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>First-of-its-kind national initiative grounded in Islamic bioethics.</span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>Co-created with Muslim families, scholars, and caregivers.</span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>Religiously aligned-centered tools for serious illness and advance care planning.</span>
                  </li>
                  <li className="iampcn-bulletItem">
                    <span className="iampcn-bulletMarker">■</span>
                    <span>Bridges Islamic values with U.S. medical and legal systems.</span>
                  </li>
                </ul>

                <p className="iampcn-paragraph">
                  As a centerpiece of this work, I AM PCN developed{" "}
                  <a href="/pdfs/resources/islamic-bioethical-considerations-guide.pdf" className="iampcn-inlineLink">
                    <em>Islamic Ethical Considerations for End-of-Life Healthcare: A Guide for Muslim Americans.</em>
                  </a>{" "}
                  This first-of-its-kind resource equips families and providers to understand U.S. legal tools, explore Islamic rulings on pain relief, withdrawing care, and hospice, and prepare religiously and practically for end-of-life decisions. The guide has become a cornerstone for workshops, clinician trainings, and community engagement efforts nationwide. A completed, practical resource guide for patients, families, imams, and healthcare providers.
                </p>
                <p className="iampcn-paragraph">
                  In addition, the{" "}
                  <a href="/pdfs/resources/eol-community-workshop-replication-guide.pdf" className="iampcn-inlineLink">
                    <em>Islamic Dimensions of End-of-Life Healthcare: A Community Education Workshop Replication Guide</em>
                  </a>
                  , a step-by-step manual that supports community leaders, imams, and educators in hosting their own workshops, expanding the project&rsquo;s reach and impact. (See Replication Materials.) Together, these resources ensure that the lessons from the past decade can be scaled and shared widely across Muslim communities nationwide.
                </p>

                {/* PUBLICATION / GUIDEBOOK COVERS */}
                <div className="iampcn-booksGrid">
                  <div className="row g-3 g-md-4">
                    <div className="col-sm-6">
                      <div className="iampcn-bookCard">
                        <div className="iampcn-bookImgWrap">
                          <img
                            src={asset(
                              "/images/i-am-pcn/hd_book-palliative-perspectives.png"
                            )}
                            alt="Islamic Perspectives on Palliative & End-of-Life Care"
                            className="iampcn-bookImg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="iampcn-bookCard">
                        <div className="iampcn-bookImgWrap">
                          <img
                            src={asset(
                              "/images/i-am-pcn/hd_book-end-of-life-decisions.png"
                            )}
                            alt="Islamic Bioethics of End-of-Life Healthcare Decisions: A Guide for Patients, Families and Healthcare Professionals"
                            className="iampcn-bookImg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* RIGHT SIDEBAR COLUMN */}
            <aside className="col-lg-4">
              <div className="iampcn-sidebarWrapper">
                {/* SIDEBAR CARD 1: Project Goals */}
                <div className="iampcn-sidebarCard">
                  <h3 className="iampcn-sidebarCardTitle">Project Goals:</h3>
                  <div className="iampcn-badgeList">
                    {PROJECT_GOALS.map((goal, idx) => (
                      <div key={idx} className="iampcn-badgeRow">
                        <div className="iampcn-badgeNum" aria-hidden="true">
                          {goal.num}
                        </div>
                        <div className="iampcn-badgeText">{goal.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIDEBAR CARD 2: Core Activities */}
                <div className="iampcn-sidebarCard">
                  <h3 className="iampcn-sidebarCardTitle">Core Activities:</h3>
                  <div className="iampcn-badgeList">
                    {CORE_ACTIVITIES.map((act, idx) => (
                      <div key={idx} className="iampcn-badgeRow">
                        <div className="iampcn-badgeNum" aria-hidden="true">
                          {act.num}
                        </div>
                        <div className="iampcn-badgeText">{act.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIDEBAR NAVIGATION PILLS */}
                <div className="iampcn-navPillsList">
                  {SIDEBAR_LINKS.map((link, idx) =>
                    link.children ? (
                      <div key={idx} className="iampcn-navPillGroup">
                        <div className="iampcn-navPillGroupTitle">
                          <span className="iampcn-navPillTitle">{link.title}</span>
                        </div>
                        <div className="iampcn-navPillChildren">
                          {link.children.map((child, ci) => (
                            <a
                              key={ci}
                              href={child.href}
                              className="iampcn-navPillChild"
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                            >
                              <span>{child.label}</span>
                              <span aria-hidden="true">→</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={idx}
                        href={link.href}
                        className="iampcn-navPillItem"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        <span className="iampcn-navPillTitle">{link.title}</span>
                        <span className="iampcn-navPillArrow" aria-hidden="true">→</span>
                      </a>
                    )
                  )}
                </div>

                {/* SIDEBAR CARD 3: Get Involved */}
                <div className="iampcn-sidebarCard iampcn-getInvolvedCard">
                  <h3 className="iampcn-sidebarCardTitle">Get Involved</h3>
                  <p className="iampcn-getInvolvedDesc">
                    Want to learn more or support this work?
                  </p>
                  <Link href="/contact" className="iampcn-btnGetInvolved">
                    Get in touch with us{" "}
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. PROJECT DISSEMINATION SECTION
          ==================================================================== */}
      <section className="iampcn-disseminationSection">
        <div className="container">
          <div className="iampcn-sectionHeader mb-4">
            <h2 className="iampcn-sectionHeading">Project Dissemination</h2>
          </div>

          <div className="iampcn-disseminationCard">
            <div className="row g-4">
              {/* Workshop */}
              <div className="col-12">
                <h3 className="iampcn-disseminationTitle">Workshop</h3>
                <a
                  href="https://www.youtube.com/playlist?list=PLKPFd4mBCvIhv6oOBA1MJDvAd0uFY0Xqb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iampcn-dissemLink"
                >
                  I AM PCN Workshop Recordings Playlist <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                </a>
              </div>

              {/* Publications */}
              <div className="col-12">
                <h3 className="iampcn-disseminationTitle">Publications</h3>
                <ol className="iampcn-dissemList">
                  <li>
                    <a href="https://journals.sagepub.com/doi/10.1177/10499091251315140" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      Journal of Palliative Medicine — SAGE Journals <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S088539242400006X" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      ScienceDirect Publication <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://journals.sagepub.com/doi/10.1177/10499091231198216" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      Journal of Palliative Medicine — SAGE Journals <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://link.springer.com/article/10.1007/s10903-023-01541-x" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      Springer — Journal of Immigrant and Minority Health <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                </ol>
              </div>

              {/* Community */}
              <div className="col-12">
                <h3 className="iampcn-disseminationTitle">Community</h3>
                <a
                  href="https://wisconsinmuslimjournal.org/medical-college-of-wisconsin-research-highlights-muslim-americans-end-of-life-care-needs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iampcn-dissemLink"
                >
                  Wisconsin Muslim Journal — MCW Research Highlights Muslim Americans&rsquo; End-of-Life Care Needs <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                </a>
              </div>

              {/* Presentations */}
              <div className="col-12">
                <h3 className="iampcn-disseminationTitle">Presentations</h3>
                <ol className="iampcn-dissemList">
                  <li>
                    <a href="https://medicineandislam.org/wp-content/uploads/2025/12/MCW-Community-Engagement-Poster-1.pdf" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      MCW Community Engagement Poster <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medicineandislam.org/wp-content/uploads/2025/12/I-AM-A-PCN-Poster-OCE-conference-25.pdf" target="_blank" rel="noopener noreferrer" className="iampcn-dissemLink">
                      I AM PCN Poster — OCE Conference 2025 <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-4">
              <a href="#meet-the-team" className="iampcn-btnMeetTeam">
                Meet The Project Team{" "}
                <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. MEET THE PROJECT TEAM
          ==================================================================== */}
      <section id="meet-the-team" className="iampcn-teamSection">
        <div className="container">
          <div className="iampcn-sectionHeader mb-4">
            <h2 className="iampcn-sectionHeading">Meet The Project Team</h2>
          </div>

          <div className="row g-3 g-md-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="iampcn-teamTile">
                  <div className="iampcn-teamPhotoWrap">
                    <img
                      src={asset(member.image)}
                      alt={member.name}
                      className="iampcn-teamPhoto"
                      loading="lazy"
                    />
                  </div>
                  <div className="iampcn-teamContent">
                    <h3 className="iampcn-teamMemberName">{member.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. SUPPORTED BY (CANCER RESEARCH UK)
          ==================================================================== */}
      <section className="iampcn-funderSection">
        <div className="container">
          <h2 className="iampcn-funderHeading">Supported by</h2>
          <div className="iampcn-funderLogoWrap">
            <img
              src={asset("/images/i-am-pcn/cancer-research-uk.svg")}
              alt="Cancer Research UK"
              className="iampcn-funderLogo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. FULL-WIDTH CRIMSON CALLOUT BANNER
          ==================================================================== */}
      <section className="iampcn-bannerSection">
        <div className="container">
          <div className="iampcn-bannerCard">
            <div className="row g-4 align-items-center">
              {/* Left Column Heading */}
              <div className="col-lg-5">
                <h3 className="iampcn-bannerTitle">
                  Advancing
                  <br />
                  Culturally Responsive
                  <br />
                  End-of-Life Care
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="col-lg-1 d-none d-lg-flex justify-content-center">
                <div className="iampcn-bannerDivider" />
              </div>

              {/* Right Column Text & Action */}
              <div className="col-lg-6">
                <p className="iampcn-bannerDesc">
                  Support research, education, and community engagement to
                  improve palliative and hospice care for Muslim Americans.
                </p>
                <Link href="/donate" className="iampcn-bannerBtn">
                  Support This Work{" "}
                  <i className="fa-solid fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
