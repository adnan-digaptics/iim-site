import Link from "next/link";
import { asset } from "../../lib/asset";
import EmpartDownloadsSlider from "./EmpartDownloadsSlider";
import EmpartTeamSlider from "./EmpartTeamSlider";
import PastPartners from "../../components/PastPartners";

export const metadata = {
  title:
    "What Is Empart Study — Equipping Muslims with PCOR-Based Research Tools | II&M",
  description:
    "Equipping Muslims with PCOR-Based, Action-Oriented Research Tools (EMPART) trains and empowers Muslim communities with Patient-Centered Outcomes Research frameworks.",
  keywords: [
    "EMPART Study",
    "PCOR Muslim Health",
    "Patient-Centered Outcomes Research",
    "Worry Free Community",
    "Islamic Community Health",
    "Health Disparities Chicago",
    "II&M Research",
  ],
  openGraph: {
    title:
      "EMPART Study — Equipping Muslims with PCOR-Based, Action-Oriented Research Tools",
    description:
      "A community-based research initiative empowering Muslim communities with Patient-Centered Outcomes Research (PCOR) to address health disparities.",
    url: "/empart-research",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

// 1. What / How / Why Cards Data
const EDUCATIONAL_CARDS = [
  {
    title: "What",
    text: "This is a community-based, patient-centered, action-oriented research project using patient-centered outcomes research (PCOR) to address key Muslim community health needs and disparities.",
  },
  {
    title: "How",
    text: "We have trained community health mentors (CHMs) in basic and empowered PCOR principles to engage and navigate participants through the process to improve patient safety, comfort, and healthcare access alongside Muslim communities.",
  },
  {
    title: "Why",
    text: "The Muslim communities of Greater Chicago have historically been underserved, underrepresented, and disenfranchised within the healthcare research landscape. Through community partnership, we aim to find solutions that will address health disparities and foster trusted healthcare partnerships leading to improved health outcomes.",
  },
];

// 2. Core Team Members
const CORE_TEAM = [
  {
    name: "Nebil Khur",
    title: "Project Lead",
    image: "/images/empart-study/hd_team-nebil.jpg",
  },
  {
    name: "Anna Khan",
    title: "Research Coordinator",
    image: "/images/empart-study/hd_team-anna.png",
  },
  {
    name: "Fatema Mirza RDA, MPA, PMP",
    title: "Program Manager",
    image: "/images/empart-study/hd_team-fatema.jpg",
  },
];

// 3. Meet the EMPART Team (Circular Portraits)
const EMPART_TEAM_CIRCLES = [
  { id: 1,  name: "EMPART Team Member 1",  image: "/images/empart-team/team-1.jpg" },
  { id: 2,  name: "EMPART Team Member 2",  image: "/images/empart-team/team-2.jpg" },
  { id: 3,  name: "EMPART Team Member 3",  image: "/images/empart-team/team-3.jpg" },
  { id: 4,  name: "EMPART Team Member 4",  image: "/images/empart-team/team-4.jpg" },
  { id: 5,  name: "EMPART Team Member 5",  image: "/images/empart-team/team-5.jpg" },
  { id: 6,  name: "EMPART Team Member 6",  image: "/images/empart-team/team-6.jpg" },
  { id: 7,  name: "EMPART Team Member 7",  image: "/images/empart-team/team-7.jpg" },
  { id: 8,  name: "EMPART Team Member 8",  image: "/images/empart-team/team-8.jpg" },
  { id: 9,  name: "EMPART Team Member 9",  image: "/images/empart-team/team-9.jpg" },
  { id: 10, name: "EMPART Team Member 10", image: "/images/empart-team/team-10.jpg" },
];

// 4. Videos (2x2 Grid — crisp HD still photography + native YouTube UI overlay)
const VIDEOS = [
  {
    title: "Aasim Padela, MD, MSc — The Actors and Materials of EOL Care",
    thumb: "/images/empart-study/video-actors-materials-eol.jpg",
    thumbPos: "center center",
    url: "https://www.youtube.com/watch?v=JAwBx3WjAuA",
  },
  {
    title: "Aasim Padela on the Relevance of the Dimensions of EOL Healthcare",
    thumb: "/images/empart-study/video-dimensions-eol.jpg",
    thumbPos: "center center",
    url: "https://www.youtube.com/watch?v=OM2K83uF4Es",
  },
  {
    title: "Aasim Padela, MD, MSc — Muslim Community Response & Healthcare",
    thumb: "/images/empart-study/video-community-response.jpg",
    thumbPos: "center center",
    url: "https://www.youtube.com/watch?v=5KJ3GMIGy4I",
  },
  {
    title: "Framing Palliative Care: Sharing Ethical Decisions & Practical Healthcare",
    thumb: "/images/empart-study/video-framing-palliative-care.jpg",
    thumbPos: "center center",
    url: "https://www.youtube.com/watch?v=dF_jCwoyU04",
  },
];

// 5. Downloadable Materials (5 Native Burgundy Slider Cards)
const DOWNLOADABLE_MATERIALS = [
  {
    id: 1,
    org: "Initiative on Islam & Medicine",
    subtitle: "EMPART Project Brief",
    href: "/resources",
  },
  {
    id: 2,
    org: "Initiative on Islam & Medicine",
    subtitle: "CHM Training Curriculum",
    href: "/resources",
  },
  {
    id: 3,
    org: "Initiative on Islam & Medicine",
    subtitle: "PCOR Mosque Guide",
    href: "/resources",
  },
  {
    id: 4,
    org: "Initiative on Islam & Medicine",
    subtitle: "Capacity Assessment Report",
    href: "/resources",
  },
  {
    id: 5,
    org: "Initiative on Islam & Medicine",
    subtitle: "Community Engagement Framework",
    href: "/resources",
  },
];

const ArrowRightIcon = () => (
  <svg
    width="15"
    height="15"
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

export default function EmpartStudyPage() {
  return (
    <div className="empart-page">
      {/* ====================================================================
          1. HERO SECTION WITH ARCHITECTURAL ARCH & GEOMETRIC RINGS
          ==================================================================== */}
      <section className="empart-hero">
        <div className="empart-heroBgCircles" aria-hidden="true">
          <div className="empart-heroCircleOuter" />
          <div className="empart-heroCircleInner" />
        </div>

        <div className="container empart-heroContainer">
          <div className="row align-items-end">
            {/* Left Hero Content */}
            <div className="col-lg-7 empart-heroTextCol">
              <nav aria-label="breadcrumb" className="empart-breadcrumbWrap">
                <ol className="empart-breadcrumbList">
                  <li className="empart-breadcrumbItem">
                    <Link href="/" className="empart-breadcrumbLink">
                      Home
                    </Link>
                  </li>
                  <li className="empart-breadcrumbSeparator" aria-hidden="true">
                    ›
                  </li>
                  <li
                    className="empart-breadcrumbItem active"
                    aria-current="page"
                  >
                    What Is Empart Study
                  </li>
                </ol>
              </nav>

              <h1 className="empart-heroTitle">What Is Empart Study</h1>

              {/* Thin burgundy decorative underline */}
              <div className="empart-heroUnderline" aria-hidden="true" />
            </div>

            {/* Right Islamic Mosque Arch Image */}
            <div className="col-lg-5 text-center text-lg-end empart-heroArchCol">
              <div className="empart-heroArchWrap">
                <img
                  src={asset("/images/empart-study/hero-arch.png")}
                  alt="Islamic Architectural Mosque Arch"
                  className="empart-heroArchImg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN INTRODUCTION SECTION
          ==================================================================== */}
      <section className="empart-introSection">
        <div className="container">
          <div className="empart-introInner">
            <div className="empart-sectionHeader">
              <span className="empart-accentBar" aria-hidden="true" />
              <h2 className="empart-sectionHeading">
                Equipping Muslims with PCOR-Based, Action-Oriented Research Tools [EMPART]
              </h2>
            </div>

            <div className="empart-introBody">
              <p className="empart-paragraph">
                Equipping Muslims with PCOR-Based, Action-Oriented Research Tools (EMPART) is an initiative to equip Muslim communities with an evidence-based Patient-Centered Outcomes Research (PCOR) framework.
              </p>
              <p className="empart-paragraph">
                This study is being done in collaboration with <strong>Worry Free Community</strong>, the approved clinical and research partner, to address patient-centered outcomes in the community.
              </p>
              <p className="empart-paragraph">
                The study is funded and supported by the <strong>Patient-Centered Outcomes Research Institute (PCORI)</strong>, the nation&apos;s premier funder of patient-centered healthcare research, as an accelerated adaptation and utilization of PCOR/PCOR frameworks for community health improvement of Chicago-area residents.
              </p>

              {/* Featured Burgundy Button */}
              <div className="empart-introCtaWrap">
                <a
                  href="https://www.pcori.org/research-results/2023/equipping-muslims-pcor-based-action-oriented-research-tools-empart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="empart-btnBurgundyFull"
                >
                  <span>Equipping Muslims with PCOR-Based, Action-Oriented Research Tools [EMPART]</span>
                  <span className="ms-2 d-inline-flex align-items-center"><ArrowRightIcon /></span>
                </a>
              </div>

              {/* Additional Verified Link */}
              <div className="empart-noticeLinkWrap">
                <span className="empart-noticeLabel">Source: </span>
                <a
                  href="https://www.pcori.org/research-results/2023/equipping-muslims-pcor-based-action-oriented-research-tools-empart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="empart-noticeUrl"
                >
                  https://www.pcori.org/research-results/2023/equipping-muslims-pcor-based-action-oriented-research-tools-empart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHAT / HOW / WHY EDUCATIONAL CARDS
          ==================================================================== */}
      <section className="empart-cardsSection">
        <div className="container">
          <div className="row g-4">
            {EDUCATIONAL_CARDS.map((card, idx) => (
              <div key={idx} className="col-md-4">
                <div className="empart-eduCard h-100">
                  {/* Curved Burgundy Header with Overlapping Question Icon */}
                  <div className="empart-eduCardHeader">
                    <div className="empart-questionIconWrap" aria-hidden="true">
                      <span>?</span>
                    </div>
                    <h3 className="empart-eduCardTitle">{card.title}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="empart-eduCardBody">
                    <p className="empart-eduCardText">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PROJECT BENEFITS (Image Left, Content Right)
          ==================================================================== */}
      <section className="empart-benefitsSection">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Image: Medical Consultation Scene */}
            <div className="col-lg-6">
              <div className="empart-splitImgWrap">
                <img
                  src={asset("/images/empart-study/benefits-consultation.png")}
                  alt="Clinical consultation scene with Muslim mother, young daughter, and physician"
                  className="empart-splitImg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="empart-splitContentCol">
                <div className="empart-sectionHeader mb-3">
                  <span className="empart-accentBar" aria-hidden="true" />
                  <h2 className="empart-sectionHeading">Project Benefits</h2>
                </div>

                <div className="empart-splitContent">
                  <p className="empart-paragraph">
                    The project directly impacts our community partners because healthcare needs affect us all. Patient-centered research builds capacity within the action community while fostering respectful and inclusive discourse on the unique needs and perspectives of all levels of community members.
                  </p>
                  <p className="empart-paragraph">
                    This input helps to improve the design of all healthcare resources and health outcomes, benefiting not only patients and their caregivers, but also healthcare and social service providers and non-profits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. HOW TO GET INVOLVED (Content Left, Image Right)
          ==================================================================== */}
      <section className="empart-involvedSection">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="empart-splitContentCol">
                <div className="empart-sectionHeader mb-3">
                  <span className="empart-accentBar" aria-hidden="true" />
                  <h2 className="empart-sectionHeading">How To Get Involved</h2>
                </div>

                <div className="empart-splitContent">
                  <p className="empart-paragraph">
                    Anyone who is invested in community health and well-being (which is all of us!) has many ways to get involved. Become an advocate, participate in community events, engage in collaborative workshops, or help us spread the word about community health initiatives. Choose from webinars, local forums, or workshops to learn more.
                  </p>
                  <p className="empart-paragraph">
                    You can be a part of this important effort as a patient, caregiver, or community member. Reach out to us anytime if you or your organization would like to know how you can take action alongside Muslims in your communities.
                  </p>

                  <div className="mt-4">
                    <Link href="/contact" className="empart-btnBurgundy">
                      Learn More <span className="ms-2 d-inline-flex align-items-center"><ArrowRightIcon /></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image: Collaborative Workshop Table */}
            <div className="col-lg-6">
              <div className="empart-splitImgWrap">
                <img
                  src={asset("/images/empart-study/get-involved-workshop.png")}
                  alt="Overhead view of collaborative community workshop table with notes"
                  className="empart-splitImg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. CORE TEAM
          ==================================================================== */}
      <section className="empart-coreTeamSection">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="empart-centeredHeading">CORE TEAM</h2>
            <div className="empart-centeredDivider" aria-hidden="true" />
          </div>

          <div className="empart-coreTeamGridWrap">
            <div className="row g-4 justify-content-center">
              {CORE_TEAM.map((member, idx) => (
                <div key={idx} className="col-sm-6 col-md-4">
                  <div className="empart-coreTeamCard">
                    <img
                      src={asset(member.image)}
                      alt={member.name}
                      className="empart-coreTeamPhoto"
                      loading="lazy"
                    />
                    <div className="empart-coreTeamLabel">
                      <span className="empart-memberName">{member.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. MEET THE EMPART TEAM (Circular Portraits)
          ==================================================================== */}
      <section className="empart-circlesSection">
        <div className="container text-center">
          <h2 className="empart-centeredHeading">Meet the EMPART Team</h2>
          <div className="empart-centeredDivider" aria-hidden="true" />

          <EmpartTeamSlider members={EMPART_TEAM_CIRCLES.map(c => ({ ...c, image: asset(c.image) }))} />
        </div>
      </section>

      {/* ====================================================================
          8. VIDEOS (2x2 Grid — Razor-Sharp Native YouTube UI Cards)
          ==================================================================== */}
      <section className="empart-videosSection">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="empart-centeredHeading">Videos</h2>
            <div className="empart-centeredDivider" aria-hidden="true" />
          </div>

          <div className="empart-videosGridWrap">
            <div className="row g-4">
              {VIDEOS.map((v, idx) => (
                <div key={idx} className="col-md-6">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="empart-videoCard"
                    aria-label={`Watch video: ${v.title}`}
                  >
                    <div
                      className={`empart-videoThumbWrap${
                        v.isPortraitStage ? " is-portraitStage" : ""
                      }`}
                    >
                      <img
                        src={asset(v.thumb)}
                        alt={v.title}
                        className="empart-videoThumb"
                        style={{ objectPosition: v.thumbPos || "center center" }}
                        loading="lazy"
                      />

                      {v.isPortraitStage && (
                        <div className="empart-videoSlideCaption" aria-hidden="true">
                          <span className="empart-videoSlideEyebrow">II&amp;M LECTURE SERIES</span>
                          <span className="empart-videoSlideHeading">Dimensions of Islamic Bioethics &amp; EOL Care</span>
                        </div>
                      )}

                      {/* Dark Vignette + Native Crisp Top Header */}
                      <div className="empart-videoTopBar">
                        <span className="empart-videoChannelAvatar" aria-hidden="true">
                          I&amp;M
                        </span>
                        <span className="empart-videoTitleText">{v.title}</span>
                      </div>

                      {/* Center YouTube Play Icon */}
                      <div className="empart-videoPlayBtn" aria-hidden="true">
                        <svg viewBox="0 0 68 48" width="58" height="40">
                          <path
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                            fill="#FF0000"
                          />
                          <path d="M 45,24 27,14 27,34" fill="#FFFFFF" />
                        </svg>
                      </div>

                      {/* Bottom Right Watch on YouTube Badge */}
                      <div className="empart-videoWatchBadge" aria-hidden="true">
                        <span>Watch on</span>
                        <YoutubeSmallIcon />
                        <strong>YouTube</strong>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. DOWNLOADABLE MATERIALS (Interactive Burgundy Card Slider)
          ==================================================================== */}
      <section className="empart-downloadsSection">
        <div className="container text-center">
          <h2 className="empart-centeredHeading">Downloadable Materials</h2>
          <div className="empart-centeredDivider" aria-hidden="true" />

          <EmpartDownloadsSlider items={DOWNLOADABLE_MATERIALS} />
        </div>
      </section>

      {/* ====================================================================
          10. PARTNER ORGANIZATIONS
          ==================================================================== */}
      <PastPartners />

      {/* ====================================================================
          11. FULL-BLEED GREEN CTA BANNER
          ==================================================================== */}
      <section className="empart-finalCtaSection">
        <div className="container empart-finalCtaContainer">
          <div className="empart-finalCtaContent">
            <div className="empart-finalCtaEyebrow">
              INSTITUTIONAL PARTNERSHIP &amp; ENGAGEMENT
            </div>

            <h2 className="empart-finalCtaHeading">
              Building more inclusive healthcare environments.
            </h2>

            <p className="empart-finalCtaDesc">
              Support our activities to promote engaged research, PCOR-actionable institutional policies, supervisory training programs, and the expansion of better and equitable patient care.
            </p>

            <div className="empart-finalCtaActions">
              <Link href="/contact" className="empart-btnCtaSolid">
                GET IN TOUCH <span className="ms-2 d-inline-flex align-items-center"><ArrowRightIcon /></span>
              </Link>
              <Link href="/research" className="empart-btnCtaOutline">
                EXPLORE RESEARCH <span className="ms-2 d-inline-flex align-items-center"><ArrowRightIcon /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
