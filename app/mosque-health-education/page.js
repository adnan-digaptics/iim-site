import Link from "next/link";
import { asset } from "../../lib/asset";
import PastPartners from "../../components/PastPartners";

export const metadata = {
  title: "Mosque-Based Health Education and Research Tools (M-HEaRT) | II&M",
  description:
    "A community-engaged research and education initiative empowering imams, chaplains, and Muslim community leaders with evidence-based health education tools in mosque spaces.",
  keywords: [
    "M-HEaRT",
    "Mosque-Based Health Education",
    "Muslim American Health Disparities",
    "Community Health Tools",
    "Patient-Centered Outcomes Research",
    "Islamic Bioethics",
    "II&M Research",
  ],
  openGraph: {
    title: "Mosque-Based Health Education and Research Tools (M-HEaRT)",
    description:
      "A community-partnered initiative equipping Muslim faith leaders, clinicians, and community workers with evidence-based health education tools.",
    url: "/mosque-health-education",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

// 1. Core Feature Items (Centering Health Equity)
const CENTERING_FEATURES = [
  {
    icon: "fa-solid fa-users",
    title: "Tackling religion-related barriers to health equity.",
  },
  {
    icon: "fa-solid fa-mosque",
    title:
      "Hosting workshops in mosques—where identity, community, and trust converge.",
  },
  {
    icon: "fa-solid fa-book-open",
    title:
      "Teaching the 3M Model (Perceptions, Patterns, Reasons) for designing religiously informed, ethical health messages.",
  },
];

// 2. Program Significance Checklist
const SIGNIFICANCE_CHECKS = [
  "Hosting a 2.5-day in-person/remote institute.",
  "Providing toolkits and replication guides for mosque-based health workshops.",
  "Facilitating an Online Professional Learning Community involving 6-8 leading imams and volunteer pharmacists, 1 hour each.",
];

// 3. Goals and Core Activities (Sidebar)
const GOALS_ACTIVITIES = [
  {
    icon: "fa-solid fa-calendar-check",
    text: "Hosting a 2.5-day in-person learning institute.",
  },
  {
    icon: "fa-solid fa-book-medical",
    text: "Providing toolkits and replication guides for mosque-based health workshops.",
  },
  {
    icon: "fa-solid fa-users-gear",
    text: "Facilitating an Online Professional Learning Community involving 6-8 leading imams and volunteer pharmacists, 1 hour each.",
  },
];

// 4. Partner Organizations Cards
const PARTNER_ORGANIZATIONS = [
  {
    name: "UMMA Community Clinic",
    logoImg: "/images/partners/logos/umma-health.png",
    alt: "UMMA Community Clinic Logo",
    badge: "UMMA Community Clinic",
  },
  {
    name: "Bayan Islamic Graduate School",
    logoImg: "/images/partners/logos/bayan.svg",
    alt: "Bayan Islamic Graduate School Logo",
    badge: "Bayan Islamic Graduate School",
  },
  {
    name: "The Health Equity Collective",
    logoImg: "/images/partners/logos/health-equity-collective.svg",
    alt: "The Health Equity Collective Logo",
    badge: "The Health Equity Collective",
  },
];

// 5. Team Members
const TEAM_MEMBERS = [
  {
    name: "Dr. Aasim I. Padela",
    credentials: "MD, MSc",
    image: "/images/our-team/mheart-padela-hd.jpg",
  },
  {
    name: "Fatema Mirza",
    credentials: "MBA",
    image: "/images/our-team/mheart-fatema-hd.jpg",
  },
  {
    name: "Imam Ayman Soliman",
    credentials: "MDiv",
    image: "/images/our-team/mheart-ayman-hd.jpg",
  },
  {
    name: "Adel Sirek",
    credentials: "MPH",
    image: "/images/our-team/mheart-adel-hd.jpg",
  },
];

// 6. Gallery Items (9 High-Definition Event Photos from Archive)
const GALLERY_ITEMS = [
  {
    src: "/images/mheart-gallery/01_group_photo.png",
    alt: "M-HEaRT Cohort Group Photo",
  },
  {
    src: "/images/mheart-gallery/02_group_discussion.png",
    alt: "Table Discussion and Collaborative Deliberation",
  },
  {
    src: "/images/mheart-gallery/03_classroom_discussion.png",
    alt: "Classroom Workshop Session",
  },
  {
    src: "/images/mheart-gallery/04_screen_presentation.png",
    alt: "AI for Workforce Development Presentation",
  },
  {
    src: "/images/mheart-gallery/05_speaker_presentation.png",
    alt: "Workshop Overview Facilitator at Projector",
  },
  {
    src: "/images/mheart-gallery/06_lecture_hall.png",
    alt: "Research & Engagement Seminar Cohort",
  },
  {
    src: "/images/mheart-gallery/07_audience_view.png",
    alt: "Research Capacity Workshop Audience",
  },
  {
    src: "/images/mheart-gallery/08_sticky_notes.png",
    alt: "Ideas and Action Planning Brainstorming Board",
  },
  {
    src: "/images/mheart-gallery/09_presenter_at_screen.png",
    alt: "Faculty Presenter Addressing Participants",
  },
];

export default function MHeartPage() {
  return (
    <div className="mheart-page">
      {/* ====================================================================
          1. HERO HEADER WITH BREADCRUMB & CONTOUR WATERMARK
          ==================================================================== */}
      <section className="mheart-hero">
        <div className="container">
          <nav aria-label="breadcrumb" className="mheart-breadcrumbWrap">
            <ol className="mheart-breadcrumbList">
              <li className="mheart-breadcrumbItem">
                <Link href="/" className="mheart-breadcrumbLink">
                  Home
                </Link>
              </li>
              <li className="mheart-breadcrumbSeparator" aria-hidden="true">
                •
              </li>
              <li
                className="mheart-breadcrumbItem active"
                aria-current="page"
              >
                Mosque-Based Health Education and Research Tools (M-HEaRT)
              </li>
            </ol>
          </nav>

          <h1 className="mheart-heroTitle">
            Mosque-Based Health Education and Research Tools (M-HEaRT)
          </h1>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN CONTENT TWO-COLUMN GRID (~70% Main, ~30% Sidebar)
          ==================================================================== */}
      <section className="mheart-mainSection">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* LEFT MAIN COLUMN */}
            <div className="col-lg-8">
              {/* SECTION: Centering Health Equity for Muslim Americans */}
              <article className="mheart-contentBlock">
                <div className="mheart-sectionHeader">
                  <span className="mheart-accentBar" aria-hidden="true" />
                  <h2 className="mheart-sectionHeading">
                    Centering Health Equity for Muslim Americans
                  </h2>
                </div>

                <p className="mheart-paragraph">
                  Despite increasing evidence that Muslim Americans face health
                  disparities, national health equity strategies often overlook
                  them. This is due in part to the lack of religious data in
                  public health systems.
                </p>

                <p className="mheart-subLead">
                  <strong>M-HEaRT addresses this invisibility by:</strong>
                </p>

                <div className="mheart-featureList">
                  {CENTERING_FEATURES.map((item, idx) => (
                    <div key={idx} className="mheart-featureCard">
                      <div className="mheart-featureIconWrap">
                        <i className={item.icon} aria-hidden="true" />
                      </div>
                      <div className="mheart-featureText">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION: Overview */}
              <article className="mheart-contentBlock">
                <div className="mheart-sectionHeader">
                  <span className="mheart-accentBar" aria-hidden="true" />
                  <h2 className="mheart-sectionHeading">Overview</h2>
                </div>

                <p className="mheart-paragraph">
                  M-HEaRT (Mosque-Based Health Education and Research Tools) is a
                  community-engaged initiative developed by the{" "}
                  <strong>Institute on Islam and Medicine (II&amp;M)</strong>, in
                  partnership with{" "}
                  <span className="mheart-textCrimson">UMMA Community Clinic</span>,{" "}
                  <span className="mheart-textCrimson">Bayan Islamic Graduate School</span>,
                  and{" "}
                  <span className="mheart-textCrimson">UMMA Health</span>, with
                  community collaboration from the{" "}
                  <span className="mheart-textCrimson">
                    Association of Muslim Chaplains (AMC)
                  </span>{" "}
                  and{" "}
                  <span className="mheart-textCrimson">
                    The Health Equity Collective
                  </span>
                  .
                </p>

                <p className="mheart-paragraph">
                  The program empowers imams, chaplains, and Muslim community
                  leaders with the knowledge, tools, and support to implement
                  evidence-based health education within mosque spaces.
                </p>

                <p className="mheart-paragraph">
                  Participants will engage in a 2.5-day intensive training, where
                  they&apos;ll participate in workshops, experiential diagnostics,
                  case studies, and group exercises. They learn religiously-tailored
                  health communication and community-engaged research methods
                  grounded in patient-centered outcomes research and mosque-based
                  health education approaches.
                </p>
              </article>

              {/* SECTION: Program Significance */}
              <article className="mheart-contentBlock">
                <div className="mheart-sectionHeader">
                  <span className="mheart-accentBar" aria-hidden="true" />
                  <h2 className="mheart-sectionHeading">Program Significance</h2>
                </div>

                <p className="mheart-paragraph">
                  By training Muslim religious, community health workers, and
                  mosque leaders, the M-HEaRT initiative equips trusted messengers
                  with the tools to deliver research-informed health education.
                  Through immersive experiences, engaging professional learning,
                  and mosque-based workshops, participants are prepared to lead
                  interventions that address real-world disparities in a
                  culturally-grounded, community-centered way.
                </p>

                <p className="mheart-featuresLead">
                  <strong>Key features of the initiative include:</strong>
                </p>

                <ul className="mheart-checkList">
                  {SIGNIFICANCE_CHECKS.map((text, idx) => (
                    <li key={idx} className="mheart-checkItem">
                      <span className="mheart-checkIcon" aria-hidden="true">
                        <i className="fa-solid fa-check" />
                      </span>
                      <span className="mheart-checkText">{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mheart-paragraph mt-4">
                  These workshops are flexible in format, training organizing,
                  customized religious identity, social trust, and community
                  engagement coverage, amplifying the impact of health messaging.
                </p>
              </article>
            </div>

            {/* RIGHT SIDEBAR COLUMN */}
            <aside className="col-lg-4">
              <div className="mheart-sidebarWrapper">
                {/* SIDEBAR CARD 1: Crimson Call to Action */}
                <div className="mheart-ctaCard">
                  <h3 className="mheart-ctaTitle">
                    JOIN US AT THE M-HEaRT LEARNING INSTITUTE IN CHICAGO
                  </h3>
                  <Link href="/consultation" className="mheart-ctaButton">
                    Apply Now <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>

                {/* SIDEBAR CARD 2: Institute Details */}
                <div className="mheart-detailsCard">
                  <h3 className="mheart-detailsTitle">
                    M-HEaRT Learning Institute
                  </h3>
                  <div className="mheart-detailsDivider" />

                  <div className="mheart-detailRow">
                    <div className="mheart-detailIconWrap">
                      <i className="fa-regular fa-calendar-days" aria-hidden="true" />
                    </div>
                    <div className="mheart-detailContent">
                      <strong>Dates:</strong> August 8–10, 2025
                    </div>
                  </div>

                  <div className="mheart-detailRow">
                    <div className="mheart-detailIconWrap">
                      <i className="fa-solid fa-location-dot" aria-hidden="true" />
                    </div>
                    <div className="mheart-detailContent">
                      <strong>Location:</strong> Bayan Islamic Graduate School,
                      Chicago, IL, USA
                    </div>
                  </div>

                  <div className="mheart-detailRow">
                    <div className="mheart-detailIconWrap">
                      <i className="fa-solid fa-handshake" aria-hidden="true" />
                    </div>
                    <div className="mheart-detailContent">
                      <strong>Hosted by:</strong> Institute on Islam and Medicine
                      (II&amp;M) in collaboration with Bayan Chicago
                    </div>
                  </div>
                </div>

                {/* SIDEBAR CARD 3: Goals and Core Activities */}
                <div className="mheart-goalsCard">
                  <h3 className="mheart-sidebarCardTitle">
                    Goals and Core Activities
                  </h3>
                  <p className="mheart-goalsSubtext">
                    The M-HEaRT learning institute includes:
                  </p>

                  <div className="mheart-goalsList">
                    {GOALS_ACTIVITIES.map((item, idx) => (
                      <div key={idx} className="mheart-goalRow">
                        <div className="mheart-goalIconWrap">
                          <i className={item.icon} aria-hidden="true" />
                        </div>
                        <div className="mheart-goalText">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SIDEBAR CARD 4: Related Projects & Resources */}
                <div className="mheart-relatedCard">
                  {/* Subsection: Related Projects */}
                  <div className="mheart-relatedSection">
                    <h3 className="mheart-sidebarCardTitle">Related Projects</h3>
                    <p className="mheart-relatedSubtext">
                      The project builds upon:
                    </p>
                    <ul className="mheart-bulletList">
                      <li>
                        <a href="https://adnan-digaptics.github.io/iim-site/community-health-research/" target="_blank" rel="noopener noreferrer" className="mheart-textLink">
                          The Engaging Muslim Americans for Research on
                          Community Health Project
                        </a>
                      </li>
                      <li>
                        <span className="mheart-sublistTitle">
                          Somali &amp; International site:
                        </span>
                        <ul className="mheart-nestedList">
                          <li>
                            <Link href="/mammography" className="mheart-textLink">
                              Imam empathy ratings among Muslim women
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/living-organ-donation"
                              className="mheart-textLink"
                            >
                              Living organ donation education
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Subsection: Webinars */}
                  <div className="mheart-relatedSection">
                    <h4 className="mheart-subheading">Webinars &amp; Videos</h4>
                    <ul className="mheart-bulletList">
                      <li>
                        <a href="https://youtu.be/l56KQSsDYbk?feature=shared" target="_blank" rel="noopener noreferrer" className="mheart-textLink">
                          Islam, Community Organizations &amp; Muslim Health Equity
                        </a>, M-HEaRT Learning Institute, 8/25
                      </li>
                    </ul>
                  </div>

                  {/* Subsection: Tool Kits and Replication Guides */}
                  <div className="mheart-relatedSection">
                    <h4 className="mheart-subheading">
                      Tool Kits and Replication Guides
                    </h4>
                    <ul className="mheart-bulletList">
                      <li>
                        <a href="https://medicineandislam.org/wp-content/uploads/2026/04/Toolkit-for-PCOR-in-Islamic-Schools-Submit-to-PCORI-2.pdf" target="_blank" rel="noopener noreferrer" className="mheart-textLink">
                          Toolkit for Patient-Centered Outcomes Research in Islamic
                          Spaces: A Beginner&apos;s Resource Guide for Health
                          Researchers
                        </a>
                      </li>
                      <li>
                        <a href="https://go.fliplink.me/view/059A3FB8-0738-4DAE-ADC6-84FA79329749" target="_blank" rel="noopener noreferrer" className="mheart-textLink">
                          Islamic Dimensions of End-of-Life Healthcare: A Community
                          Education Workshop Replication Guide
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Subsection: Additional Resources */}
                  <div className="mheart-relatedSection mb-0 pb-0 border-0">
                    <h4 className="mheart-subheading">Additional Resources</h4>
                    <ul className="mheart-bulletList mb-0">
                      <li>
                        <a href="https://www.academia.edu/36269570/Developing_religiously_tailored_health_messages_for_behavioral_change_Introducing_the_reframe_reprioritize_and_reform_3R_model" target="_blank" rel="noopener noreferrer" className="mheart-textLink">
                          Translating religiously-rooted health messages for
                          behavioral change: introducing the anchors,
                          aspirations, and action (3A2) model.
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. FUNDER / PARTNER ORGANIZATION SHOWCASE (PCORI & ACS)
          ==================================================================== */}
      <section className="mheart-funderSection">
        <div className="container">
          <div className="mheart-funderHeader text-center">
            <h2 className="mheart-funderTitle">Partner Organization</h2>
            <div className="mheart-centerLine" />
          </div>

          <div className="mheart-funderLogosWrap">
            <div className="mheart-funderLogoCol">
              <img
                src={asset("/images/partners/logos/pcori.svg")}
                alt="PCORI - Patient-Centered Outcomes Research Institute"
                className="mheart-funderLogo"
                loading="lazy"
              />
            </div>
            <div className="mheart-funderDivider" aria-hidden="true" />
            <div className="mheart-funderLogoCol">
              <img
                src={asset("/images/partners/logos/american-cancer-society.svg")}
                alt="American Cancer Society"
                className="mheart-funderLogo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PARTNER ORGANIZATIONS
          ==================================================================== */}
      <PastPartners />

      {/* ====================================================================
          5. MEET THE PROJECT TEAM
          ==================================================================== */}
      <section className="mheart-teamSection">
        <div className="container">
          <div className="mheart-sectionHeader mb-4">
            <span className="mheart-accentBar" aria-hidden="true" />
            <h2 className="mheart-sectionHeading">Meet The Project Team</h2>
          </div>

          <div className="row g-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="col-sm-6 col-lg-3">
                <div className="mheart-teamTile">
                  <div className="mheart-teamPhotoWrap">
                    <img
                      src={asset(member.image)}
                      alt={`${member.name}, ${member.credentials}`}
                      className="mheart-teamPhoto"
                      loading="lazy"
                    />
                  </div>
                  <div className="mheart-teamContent">
                    <h3 className="mheart-teamMemberName">{member.name}</h3>
                    <p className="mheart-teamCredentials">
                      {member.credentials}
                    </p>
                    {member.role && (
                      <p className="mheart-teamMemberRole">{member.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. GALLERY (3x3 Workshop & Research Photo Grid)
          ==================================================================== */}
      <section className="mheart-gallerySection">
        <div className="container">
          <div className="mheart-sectionHeader mb-4">
            <span className="mheart-accentBar" aria-hidden="true" />
            <h2 className="mheart-sectionHeading">Gallery</h2>
          </div>

          <div className="row g-3 g-md-4">
            {GALLERY_ITEMS.map((item, idx) => (
              <div key={idx} className="col-sm-6 col-md-4">
                <div className="mheart-galleryTile">
                  <div className="mheart-galleryImgWrap">
                    <img
                      src={asset(item.src)}
                      alt={item.alt}
                      className="mheart-galleryImg"
                      loading="lazy"
                    />
                    <div className="mheart-galleryOverlay">
                      <span className="mheart-galleryOverlayIcon" aria-hidden="true">
                        <i className="fa-solid fa-magnifying-glass-plus" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FULL-WIDTH DEEP GREEN COLLABORATION CTA BANNER
          ==================================================================== */}
      <section className="mheart-finalCtaSection">
        <div className="container">
          <div className="mheart-finalCtaInner">
            <h2 className="mheart-finalCtaTitle">
              Building more inclusive healthcare environments.
            </h2>
            <p className="mheart-finalCtaDesc">
              Support the M-HEaRT project and help advance culturally and
              spiritually responsive healthcare for Muslim Americans.
            </p>
            <div className="mheart-finalCtaActions">
              <Link href="/donate" className="mheart-btnCtaSolid">
                Support II&amp;M <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
              <Link href="/research" className="mheart-btnCtaOutline">
                Learn More <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

