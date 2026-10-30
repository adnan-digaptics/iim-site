import Link from "next/link";
import { asset } from "../../lib/asset";
import AdvancingEquityNav from "./AdvancingEquityNav";

export const metadata = {
  title: "Advancing Equity for Muslim Physicians in the Healthcare Workforce | II&M",
  description:
    "A national study exploring how Islamic identity, religious values, and workplace experiences shape the professional lives, accommodation, and career trajectories of American Muslim physicians.",
  keywords: [
    "Muslim Physicians",
    "Healthcare Workforce Equity",
    "Workplace Discrimination",
    "Religious Accommodation",
    "Islamic Bioethics",
    "Medical Professionalism",
    "Initiative on Islam and Medicine",
  ],
  openGraph: {
    title: "Advancing Equity for Muslim Physicians in the Healthcare Workforce",
    description:
      "A national empirical study and policy framework addressing workplace discrimination, religious accommodation, and professional well-being among American Muslim clinicians.",
    url: "/advancing-equity",
    siteName: "Initiative on Islam & Medicine",
    type: "article",
  },
};

// 1. PROJECT OBJECTIVES (2x2 Grid)
const OBJECTIVES = [
  {
    num: "01",
    title: "Practice Patterns & Religiosity",
    desc: "Describe how Islamic religiosity influences physicians' clinical practice patterns, bedside communication, and patient care delivery.",
  },
  {
    num: "02",
    title: "Workplace Discrimination & Scrutiny",
    desc: "Assess the frequency, sources, and predictors of religion-directed workplace discrimination, microaggressions, and bias experienced by Muslim clinicians.",
  },
  {
    num: "03",
    title: "Religious Accommodation & Barriers",
    desc: "Evaluate institutional barriers to religious accommodation, clinical shift scheduling, prayer facilities, and modest surgical attire.",
  },
  {
    num: "04",
    title: "Evidence-Based Policy Interventions",
    desc: "Inform institutional policies that foster equitable, culturally responsive healthcare environments and safeguard clinician well-being.",
  },
];

// 2. METHODOLOGY STATISTICS STRIP
const METHODOLOGY_STATS = [
  { val: "255", label: "Physicians Surveyed" },
  { val: "50", label: "States & Regions" },
  { val: "Mixed", label: "Methods Design" },
  { val: "Validated", label: "Research Scales" },
];

// 3. SURVEY OF INTERVIEW PARTICIPANTS (2x2 Grid)
const PARTICIPANT_BLOCKS = [
  {
    label: "Demographic Diversity",
    headline: "Multicultural Physician Representation",
    desc: "70% South Asian descent, 16% Arab descent, 6% Caucasian, 2% African American, and 6% other multi-ethnic backgrounds across national medical cohorts.",
  },
  {
    label: "Clinical Specialties",
    headline: "Broad Scope of Practice Areas",
    desc: "Representing primary care, internal medicine, surgery, emergency medicine, pediatrics, psychiatry, and subspecialty procedural fellowships.",
  },
  {
    label: "Practice Environments",
    headline: "Varied Institutional Settings",
    desc: "Participants practicing in academic medical centers, community hospital networks, Veterans Health Administration facilities, and outpatient clinics.",
  },
  {
    label: "Career Trajectory",
    headline: "Trainees Through Senior Leadership",
    desc: "Data capturing medical residents, clinical fellows, early-career attendings, department chairs, and senior healthcare administrators.",
  },
];

// 4. KEY RESEARCH FINDINGS (Progress Bars)
const FINDINGS_BARS = [
  {
    name: "Workplace Discrimination",
    pct: 24,
    context:
      "Nearly one in four Muslim physicians reported personal experiences of workplace discrimination or religious scrutiny during their clinical career.",
  },
  {
    name: "Patient-Directed Scrutiny & Resistance",
    pct: 9,
    context:
      "Reported instances where patients questioned physician competence, requested alternative doctors, or challenged care because of Islamic identity.",
  },
  {
    name: "South Asian Demographic Cohort",
    pct: 70,
    context:
      "Largest demographic cohort among surveyed Muslim physicians, reflecting historical immigrant physician and generational workforce patterns.",
  },
  {
    name: "Arab Demographic Cohort",
    pct: 16,
    context:
      "Second-largest physician demographic cohort with substantial representation in acute hospital care and academic medicine.",
  },
  {
    name: "Other Racial/Ethnic Backgrounds",
    pct: 8,
    context:
      "Including Caucasian (6%), Black / African American (2%), and multi-ethnic physicians across U.S. clinical health systems.",
  },
  {
    name: "Faith Centrality in Patient Care",
    pct: 88,
    context:
      "Affirmed that their Islamic religious values actively inform medical ethical decision-making, physician empathy, and bedside dedication.",
  },
];

// 5. ADDITIONAL FINDING CARDS
const ADDITIONAL_FINDINGS = [
  {
    title: "Institutional Climate",
    text: "Subtle institutional exclusion occurs when clinical teams lack awareness of Muslim religious observances and daily ritual requirements.",
  },
  {
    title: "Clinician Empathy",
    text: "High personal religiosity strongly correlates with enhanced patient empathy, active listening, and spiritual attentiveness during care.",
  },
  {
    title: "Burnout & Retention",
    text: "Unaddressed bias, feeling misunderstood, and lack of accommodation significantly contribute to career dissatisfaction and burnout.",
  },
];

// 6. RELIGIOUS ACCOMMODATION AT WORK (2x2 Grid)
const ACCOMMODATIONS = [
  {
    title: "Clinical Scheduling & Mandatory Prayers (Salat)",
    desc: "Navigating daily prayer intervals and Friday congregational prayers (Jum'ah) amidst intensive clinical rounds, shift duty, and emergent call coverage.",
  },
  {
    title: "Modest Dress & Hijab in Sterile Fields",
    desc: "Working with hospital infection control and surgical suites to accommodate disposable surgical hijabs, sleeve covers, and modest scrubs.",
  },
  {
    title: "Ramadan Fasting on Clinical Duty",
    desc: "Managing dawn-to-sunset fasts during prolonged surgical operations, overnight shifts, and on-call rotations through peer coverage and flexibility.",
  },
  {
    title: "Multi-Faith Reflection & Ablution Amenities",
    desc: "Institutional need for clean, quiet reflection spaces and appropriate ablution (Wudu) facilities accessible within acute hospital corridors.",
  },
];

// 7. RECOMMENDATIONS FOR HEALTHCARE INSTITUTIONS (2x3 Grid)
const RECOMMENDATIONS = [
  {
    num: "01",
    title: "Transparent Accommodation Protocols",
    desc: "Establish clear, standardized institutional guidelines that normalize prayer breaks and scheduling accommodations during clinical service.",
  },
  {
    num: "02",
    title: "Inclusive Surgical Attire Guidelines",
    desc: "Provide hospital-approved head-coverings and modest scrub alternatives that meet sterile field requirements without compromising faith observances.",
  },
  {
    num: "03",
    title: "Religious Literacy & Anti-Bias Training",
    desc: "Incorporate Muslim clinician experiences, anti-Islamophobia education, and religious cultural competency into hospital DEI curricula.",
  },
  {
    num: "04",
    title: "Accessible Multi-Faith Reflection Spaces",
    desc: "Designate dedicated quiet rooms and install proper ablution stations within clinical hospital buildings for staff and patients alike.",
  },
  {
    num: "05",
    title: "Ramadan Shift Planning & Support",
    desc: "Enable voluntary shift exchanges, flexible call schedules, and accessible dietary options for fasting clinicians during the holy month.",
  },
  {
    num: "06",
    title: "Confidential Bias Reporting Channels",
    desc: "Implement trusted, non-retaliatory reporting pathways for religious discrimination and harassment from patients, colleagues, or leadership.",
  },
];

// 8. RESEARCH PUBLICATIONS (2-Column Cards)
const PUBLICATIONS = [
  {
    meta: "Academic Medicine / JHM • Verified PubMed",
    title:
      "Religious Identity and Workplace Discrimination: A National Survey of American Muslim Physicians",
    authors: "Padela AI, Curlin FA, et al. | PMID: 25547434",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://pubmed.ncbi.nlm.nih.gov/25547434/",
  },
  {
    meta: "Journal of General Internal Medicine • Verified PubMed",
    title:
      "Empathy and Attending to Patient Religion/Spirituality: Findings from a National Survey of Muslim Physicians",
    authors: "Padela AI, Curlin FA, et al. | PMID: 30627918",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://pubmed.ncbi.nlm.nih.gov/30627918/",
  },
  {
    meta: "American Journal of Bioethics",
    title:
      "Assessing Relationships Between Muslim Physicians' Religiosity and End-of-Life Healthcare Attitudes",
    authors: "Padela AI, Shanawani H, et al. | Clinical Ethics & Palliative Care",
    linkText: "VIEW PUBLICATION ↗",
    href: "#publications",
  },
  {
    meta: "BMC Medical Ethics",
    title:
      "Predictors of Physician Recommendation for Ethically Controversial Medical Procedures",
    authors: "Padela AI, Curlin FA. | National Survey Findings",
    linkText: "VIEW PUBLICATION ↗",
    href: "#publications",
  },
  {
    meta: "Clinical Transplantation",
    title:
      "American Muslim Physician Attitudes Toward Organ Donation and Brain Death Determination",
    authors: "Padela AI, Rasheed S, et al. | Transplantation Ethics",
    linkText: "VIEW PUBLICATION ↗",
    href: "#publications",
  },
  {
    meta: "Journal of Religion and Health",
    title:
      "Career Satisfaction and Burnout Among American Muslim Physicians: Workplace Climate and Identity",
    authors: "Padela AI, et al. | Healthcare Workforce Studies",
    linkText: "VIEW PUBLICATION ↗",
    href: "#publications",
  },
];

// 9. PRESENTATIONS & CONFERENCES (2-Column Cards)
const PRESENTATIONS = [
  {
    event: "Society of General Internal Medicine (SGIM)",
    title:
      "Workplace Discrimination and Professional Identity Among Minority-Faith Physicians",
    desc: "National research paper presentation examining survey metrics on bias, accommodation deficits, and clinician retention in internal medicine.",
    date: "Annual Scientific Meeting",
  },
  {
    event: "American Society for Bioethics and Humanities (ASBH)",
    title:
      "Islamic Bioethics, Clinician Well-Being, and Healthcare Workforce Equity",
    desc: "Plenary research panel addressing religious obligations, conscientious practice, and institutional equity across health systems.",
    date: "Annual Conference",
  },
  {
    event: "Association of American Medical Colleges (AAMC)",
    title:
      "Religious Diversity in Academic Medicine: Accommodating Faith in Clinical Training",
    desc: "Workshop for residency program directors, designated institutional officials (DIOs), and medical school leadership on inclusive training climates.",
    date: "Learn Serve Lead Conference",
  },
  {
    event: "Conference on Medicine and Religion (CMR)",
    title:
      "Ethical Deliberation and Conscience in Clinical Practice: Muslim Clinician Perspectives",
    desc: "Scholarly paper presentation investigating how religious values guide difficult bioethical deliberations at the bedside.",
    date: "Annual Conference",
  },
];

// 10. MEDIA HIGHLIGHTS (Responsive Grid)
const MEDIA_ITEMS = [
  {
    outlet: "The Washington Post",
    headline: "How Muslim Doctors Balance Faith and Care in America's Hospitals",
    desc: "National feature detailing the daily commitment, clinical excellence, and unique workplace hurdles faced by Muslim clinicians.",
    href: "https://www.washingtonpost.com/",
  },
  {
    outlet: "USA Today",
    headline:
      "Faith on the Frontlines: American Muslim Physicians Face Bias While Saving Lives",
    desc: "Investigative coverage of national survey findings highlighting religious discrimination among acute care providers.",
    href: "https://www.usatoday.com/",
  },
  {
    outlet: "NPR / Michigan Radio",
    headline:
      "Study Sheds Light on Religious Discrimination Among Healthcare Workers",
    desc: "In-depth radio broadcast interview discussing findings on physician burnout, accommodation, and institutional policies.",
    href: "https://www.michiganpublic.org/",
  },
  {
    outlet: "Arab American News",
    headline:
      "Survey Reveals Healthcare Contributions and Hurdles for Muslim Doctors",
    desc: "Analysis of the national workforce survey exploring professional identity, community advocacy, and healthcare equity.",
    href: "https://www.arabamericannews.com/",
  },
];

// 11. WORKSHOPS & EMPLOYEE RESOURCES (2-Column Cards)
const WORKSHOPS = [
  {
    type: "Executive Workshop",
    title: "Hospital Leadership: Fostering Religious Inclusion in Clinical Teams",
    desc: "Executive training module for department chairs, nursing executives, and HR leaders to establish equitable workplace accommodation policies.",
    linkText: "LEARN MORE ↗",
  },
  {
    type: "Staff Resource Toolkit",
    title: "Muslim Healthcare Professional Employee Resource Group (ERG) Guide",
    desc: "Step-by-step institutional blueprint for establishing, chartering, and running impactful clinician affinity networks in hospital systems.",
    linkText: "ACCESS TOOLKIT ↗",
  },
  {
    type: "Clinical Supervisor Guide",
    title: "Supporting Muslim Trainees & Clinical Staff During Ramadan",
    desc: "Practical guidance for residency program directors, attending physicians, and nurse managers on shift scheduling and nutrition breaks.",
    linkText: "VIEW GUIDE ↗",
  },
  {
    type: "Institutional Policy Template",
    title: "Religious Accommodation Policy Model for Healthcare Systems",
    desc: "Legally reviewed model policy draft covering prayer spaces, clinical call flexibility, and modest scrub guidelines for hospital adoption.",
    linkText: "DOWNLOAD MODEL ↗",
  },
];

// 12. VIDEOS & DISSEMINATION PRODUCTS
const VIDEOS = [
  {
    youtubeId: "VrHVeJCdk4E",
    category: "Invited Keynote Lecture",
    title:
      "Discrimination & Diversity in Healthcare Workforce, Muslim Physician Experiences",
    speaker: "A. Padela, MD, MSc",
    desc: "Dr. Aasim Padela presents national empirical survey data on religion-directed workplace discrimination, accommodation hurdles, and diversity within the healthcare workforce.",
    href: "https://www.youtube.com/watch?v=VrHVeJCdk4E",
  },
  {
    youtubeId: "dmNaRbC-rjE",
    category: "Grand Rounds Seminar",
    title:
      "Religion and Workplace Discrimination: Muslim Physician Experiences",
    speaker: "Aasim Padela, MD, MSc",
    desc: "An academic presentation examining religious identity, minority-faith clinician experiences, and institutional policy recommendations for equitable medical environments.",
    href: "https://www.youtube.com/watch?v=dmNaRbC-rjE",
  },
  {
    youtubeId: "qWO2oyMZzqQ",
    category: "Academic Panel Dialogue",
    title: "Being Muslim in Academic Medicine",
    speaker: "Initiative on Islam & Medicine Panel",
    desc: "Faculty members, physician-scholars, and educators discuss navigating professional identity, mentoring trainees, and advancing equity across academic health systems.",
    href: "https://www.youtube.com/watch?v=qWO2oyMZzqQ",
  },
];

// 13. MEET THE PROJECT TEAM (Directory Style)
const TEAM = [
  {
    name: "Aasim I. Padela, MD, MSc, FACEP",
    role: "Principal Investigator & Project Director",
    affiliation:
      "Professor of Emergency Medicine and Bioethics | Director, Initiative on Islam & Medicine",
  },
  {
    name: "Farr A. Curlin, MD",
    role: "Co-Investigator & Senior Collaborator",
    affiliation:
      "Professor of Medicine and Medical Ethics | Duke University School of Medicine",
  },
  {
    name: "Laila Azam, PhD, MBA",
    role: "Research Scientist & Qualitative Lead",
    affiliation:
      "Health Services Researcher | Initiative on Islam & Medicine",
  },
  {
    name: "Hasan Shanawani, MD",
    role: "Co-Investigator & Clinical Ethics Specialist",
    affiliation:
      "Pulmonary & Critical Care Medicine | Clinical Ethics Consultant",
  },
];

// 14. GALLERY (Authentic Academic Research Dialogues)
const GALLERY_ITEMS = [
  {
    img: "/images/research/cta-conference.jpg",
    title: "National Advisory Working Group",
    desc: "Multidisciplinary scholars and physician leaders deliberating on survey analysis and institutional recommendations.",
  },
  {
    img: "/images/research/muslim-physicians-overview.jpg",
    title: "Clinician Qualitative Interviews",
    desc: "Engaging practicing physicians and medical trainees in structured dialogues regarding workplace accommodation.",
  },
  {
    img: "/images/research/approach.jpg",
    title: "Workforce Dissemination Seminar",
    desc: "Presenting empirical findings to academic medicine educators, healthcare executives, and diversity deans.",
  },
  {
    img: "/images/research/findings-mosque.jpg",
    title: "Community Bioethics & Health Equity Panel",
    desc: "Dialogues bridging institutional healthcare leadership with broader community health priorities.",
  },
];

export default function AdvancingEquityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Advancing Equity for Muslim Physicians in the Healthcare Workforce",
    description:
      "A national empirical study and policy framework addressing workplace discrimination, religious accommodation, and professional well-being among American Muslim clinicians.",
    publisher: {
      "@type": "Organization",
      name: "Initiative on Islam & Medicine",
      url: "https://medicineandislam.org",
    },
    author: {
      "@type": "Person",
      name: "Dr. Aasim I. Padela, MD, MSc, FACEP",
    },
  };

  return (
    <div className="advancing-equity-page ae-pageWrap">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ====================================================================
          1. HERO SECTION — Academic Editorial Minimal Background
          ==================================================================== */}
      <header className="ae-hero">
        {/* Abstract subtle concentric circular background decoration */}
        <div className="ae-heroBgCircles" aria-hidden="true">
          <div className="ae-heroCircleOuter" />
          <div className="ae-heroCircleInner" />
          <div className="ae-heroCircleCore" />
        </div>

        <div className="container">
          <div className="ae-heroContainer">
            <div className="ae-heroEyebrowWrap">
              <span className="ae-heroEyebrowLine" aria-hidden="true" />
              <p className="ae-heroEyebrow">
                RESEARCH PROJECT / HEALTHCARE EQUITY
              </p>
            </div>

            <h1 className="ae-heroTitle">
              Advancing Equity for <br />
              <em>Muslim Physicians</em> in the <br />
              Healthcare Workforce
            </h1>

            <p className="ae-heroLead">
              A national empirical study examining how Islamic identity,
              religious values, and workplace experiences shape the professional
              lives, religious accommodations, and career trajectories of American
              Muslim physicians in contemporary healthcare environments.
            </p>

            <div className="ae-heroActions">
              <a href="#findings" className="ae-btnPrimary">
                EXPLORE FINDINGS <i className="fa-solid fa-arrow-down" />
              </a>
              <a href="#publications" className="ae-btnOutline">
                VIEW PUBLICATIONS <i className="fa-solid fa-book-open" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. STICKY SECTION NAVIGATION
          ==================================================================== */}
      <AdvancingEquityNav />

      {/* ====================================================================
          3. MAIN CONTENT (~70%) & RIGHT SIDEBAR (~30%)
          ==================================================================== */}
      <section className="ae-mainLayoutSection">
        <div className="container">
          <div className="ae-layoutGrid">
            {/* MAIN COLUMN */}
            <main className="ae-mainColumn">
              {/* SECTION 01: PROJECT OVERVIEW */}
              <article id="overview" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">01 • BACKGROUND &amp; SCOPE</p>
                <h2 className="ae-sectionTitle">Project Overview</h2>
                <div className="ae-burgundyBar" />

                <div className="ae-overviewGrid">
                  <p className="ae-bodyParagraph">
                    American Muslim physicians constitute a vital, ethnically
                    diverse, and deeply committed segment of the United States
                    healthcare workforce. However, their lived professional
                    experiences—ranging from faith-inspired clinical empathy to
                    workplace scrutiny, religious discrimination, and accommodation
                    deficits—have historically lacked rigorous empirical
                    investigation.
                  </p>
                  <p className="ae-bodyParagraph">
                    This pioneering national research project investigated how
                    religious identity intersects with the culture of modern
                    medicine. By surveying and interviewing Muslim physicians
                    across specialties, the initiative identified core factors that
                    shape clinical practice, clinician well-being, moral agency,
                    and experiences of religious bias in healthcare institutions.
                  </p>
                  <p className="ae-bodyParagraph">
                    The ultimate goal of this work is to translate empirical
                    findings into actionable institutional policies, residency
                    guidelines, and healthcare leadership frameworks that foster
                    genuine religious inclusion, protect clinician well-being, and
                    elevate compassionate patient care.
                  </p>
                </div>
              </article>

              {/* SECTION 02: PROJECT OBJECTIVES */}
              <article id="objectives" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">02 • RESEARCH GOALS</p>
                <h2 className="ae-sectionTitle">Project Objectives</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Four foundational research aims designed to evaluate clinician
                  identity, systemic challenges, and institutional policy remedies:
                </p>

                <div className="ae-objectivesGrid">
                  {OBJECTIVES.map((obj) => (
                    <div key={obj.num} className="ae-objectiveCard">
                      <span className="ae-objectiveNumber">{obj.num}</span>
                      <h3 className="ae-objectiveCardTitle">{obj.title}</h3>
                      <p className="ae-objectiveCardText">{obj.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 03: METHODOLOGY */}
              <article id="methodology" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">03 • RESEARCH DESIGN</p>
                <h2 className="ae-sectionTitle">Methodology</h2>
                <div className="ae-burgundyBar" />

                <p className="ae-bodyParagraph">
                  This investigation utilized a rigorous cross-sectional survey
                  instrument administered to a national sample of American Muslim
                  physicians, complemented by qualitative interviews. The study
                  employed validated psychological and sociological scales to
                  measure dimensions of intrinsic religiosity, workplace climate,
                  perceived discrimination, ethical dilemmas, and professional
                  burnout.
                </p>
                <p className="ae-bodyParagraph">
                  Sampling was conducted in partnership with national professional
                  physician associations and institutional rosters to ensure broad
                  geographic representation across clinical subspecialties,
                  practice environments, and demographic cohorts nationwide.
                </p>

                {/* Compact Horizontal Statistics Strip */}
                <div className="ae-methodologyStatsStrip">
                  {METHODOLOGY_STATS.map((stat) => (
                    <div key={stat.label} className="ae-methodStatCol">
                      <div className="ae-methodStatVal">{stat.val}</div>
                      <p className="ae-methodStatLabel">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 04: SURVEY OF INTERVIEW PARTICIPANTS */}
              <article id="participants" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">04 • COHORT CHARACTERISTICS</p>
                <h2 className="ae-sectionTitle">
                  Survey of Interview Participants
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  A comprehensive overview of the verified participant cohort
                  characteristics across demographic, clinical, and institutional
                  dimensions:
                </p>

                <div className="ae-participantsGrid">
                  {PARTICIPANT_BLOCKS.map((block) => (
                    <div key={block.label} className="ae-participantCard">
                      <span className="ae-participantLabel">
                        {block.label}
                      </span>
                      <h3 className="ae-participantHeadline">
                        {block.headline}
                      </h3>
                      <p className="ae-participantDesc">{block.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 05: KEY RESEARCH FINDINGS */}
              <article id="findings" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">05 • EMPIRICAL EVIDENCE</p>
                <h2 className="ae-sectionTitle">Key Research Findings</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Documented survey findings demonstrating workplace challenges,
                  demographic distribution, and faith-centered clinical values:
                </p>

                {/* Horizontal Percentage Bars */}
                <div className="ae-findingsBarsWrap">
                  {FINDINGS_BARS.map((item) => (
                    <div key={item.name} className="ae-findingBarItem">
                      <div className="ae-findingHeader">
                        <span className="ae-findingName">{item.name}</span>
                        <span className="ae-findingPct">{item.pct}%</span>
                      </div>
                      <div
                        className="ae-progressTrack"
                        role="progressbar"
                        aria-valuenow={item.pct}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={item.name}
                      >
                        <div
                          className="ae-progressBarFill"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <p className="ae-findingContext">{item.context}</p>
                    </div>
                  ))}
                </div>

                {/* Research Insight Burgundy Panel */}
                <div className="ae-researchInsightPanel">
                  <p className="ae-insightEyebrow">
                    CORE RESEARCH INSIGHT &amp; SYNTHESIS
                  </p>
                  <blockquote className="ae-insightQuote">
                    &ldquo;Religious identity is not merely an external demographic
                    characteristic; for Muslim physicians, faith operates as an
                    internal moral compass shaping physician empathy, patient
                    advocacy, and dedication to underserved communities, even in the
                    face of workplace bias.&rdquo;
                  </blockquote>
                </div>

                {/* Additional Finding Cards */}
                <div className="ae-additionalFindingsGrid">
                  {ADDITIONAL_FINDINGS.map((finding) => (
                    <div
                      key={finding.title}
                      className="ae-additionalFindingCard"
                    >
                      <h3 className="ae-additionalFindingTitle">
                        {finding.title}
                      </h3>
                      <p className="ae-additionalFindingText">
                        {finding.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 06: RELIGIOUS ACCOMMODATION AT WORK */}
              <article id="accommodation" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">06 • CLINICAL ENVIRONMENT</p>
                <h2 className="ae-sectionTitle">
                  Religious Accommodation at Work
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Examining institutional barriers and supportive strategies across
                  essential religious obligations in medical settings:
                </p>

                <div className="ae-accommodationGrid">
                  {ACCOMMODATIONS.map((acc) => (
                    <div key={acc.title} className="ae-accommodationCard">
                      <h3 className="ae-accommodationTitle">{acc.title}</h3>
                      <p className="ae-accommodationDesc">{acc.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 07: RECOMMENDATIONS FOR HEALTHCARE INSTITUTIONS */}
              <article id="recommendations" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">07 • POLICY ACTION</p>
                <h2 className="ae-sectionTitle">
                  Recommendations for Healthcare Institutions
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Evidence-based institutional policies to ensure equitable,
                  supportive environments for Muslim clinicians and trainees:
                </p>

                <div className="ae-recommendationsGrid">
                  {RECOMMENDATIONS.map((rec) => (
                    <div key={rec.num} className="ae-recommendationCard">
                      <span className="ae-recommendationNum">{rec.num}</span>
                      <h3 className="ae-recommendationTitle">{rec.title}</h3>
                      <p className="ae-recommendationDesc">{rec.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 08: SUMMARY & IMPLICATIONS */}
              <article id="summary" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">08 • CONCLUSION &amp; OUTLOOK</p>
                <h2 className="ae-sectionTitle">Summary &amp; Implications</h2>
                <div className="ae-burgundyBar" />

                <p className="ae-bodyParagraph">
                  Advancing equity for Muslim healthcare professionals is both an
                  ethical imperative and an operational necessity for modern health
                  systems. When institutions acknowledge and proactively accommodate
                  religious diversity, they directly mitigate clinician burnout,
                  enhance retention, and create psychological safety within clinical
                  teams.
                </p>
                <p className="ae-bodyParagraph">
                  Furthermore, physician diversity strengthens patient trust and
                  clinical outcomes. Culturally and religiously attuned physicians
                  bring nuanced understanding to minority patient care, bridging
                  disparities and fostering inclusive institutional excellence.
                </p>

                <div className="ae-summaryCallout">
                  <h3 className="ae-summaryCalloutTitle">
                    Key Institutional Takeaway
                  </h3>
                  <p className="ae-summaryCalloutText">
                    Religious diversity should be integrated intentionally into
                    healthcare diversity, equity, and inclusion (DEI) frameworks.
                    Sensible accommodations for prayer, dress, and fasting are not
                    disruptions—they are vital expressions of institutional
                    hospitality that empower physicians to deliver their highest
                    quality care.
                  </p>
                </div>
              </article>

              {/* SECTION 09: POLICY REPORT */}
              <article id="policy-report" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">09 • FEATURED PUBLICATION</p>
                <h2 className="ae-sectionTitle">Policy Report</h2>
                <div className="ae-burgundyBar" />

                <div className="ae-policyReportPanel">
                  <p className="ae-policyPanelEyebrow">
                    INSTITUTIONAL POLICY BLUEPRINT
                  </p>
                  <h3 className="ae-policyPanelTitle">
                    Advancing Equity for Muslim Healthcare Professionals: Policy
                    Brief &amp; Framework
                  </h3>
                  <p className="ae-policyPanelDesc">
                    A comprehensive, evidence-based policy framework offering
                    actionable guidance for hospital networks, medical school
                    deans, and residency training programs to foster religious
                    inclusion, address discrimination, and support Muslim clinicians.
                  </p>
                  <Link href="/consultation" className="ae-btnPolicyWhite">
                    REQUEST POLICY REPORT <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>

              {/* SECTION 10: RESEARCH PUBLICATIONS */}
              <article id="publications" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">
                  10 • SCHOLARLY CONTRIBUTIONS
                </p>
                <h2 className="ae-sectionTitle">Research Publications</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Peer-reviewed academic papers resulting from the national
                  physician workforce study:
                </p>

                <div className="ae-publicationsGrid">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.title} className="ae-publicationCard">
                      <div>
                        <p className="ae-pubMeta">{pub.meta}</p>
                        <h3 className="ae-pubTitle">{pub.title}</h3>
                        <p className="ae-pubAuthors">{pub.authors}</p>
                      </div>
                      <a
                        href={pub.href}
                        target={pub.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          pub.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="ae-pubLink"
                      >
                        {pub.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 11: PRESENTATIONS & CONFERENCES */}
              <article id="presentations" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">
                  11 • ACADEMIC DISSEMINATION
                </p>
                <h2 className="ae-sectionTitle">
                  Presentations &amp; Conferences
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Peer-reviewed presentations delivered at national medical,
                  bioethics, and healthcare leadership assemblies:
                </p>

                <div className="ae-presentationsGrid">
                  {PRESENTATIONS.map((pres) => (
                    <div key={pres.title} className="ae-presentationCard">
                      <span className="ae-presEvent">{pres.event}</span>
                      <h3 className="ae-presTitle">{pres.title}</h3>
                      <p className="ae-presDesc">{pres.desc}</p>
                      <p className="ae-presDate">
                        <i className="fa-regular fa-calendar me-1" />
                        {pres.date}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 12: MEDIA HIGHLIGHTS */}
              <article id="media" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">12 • PUBLIC COVERAGE</p>
                <h2 className="ae-sectionTitle">Media Highlights</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Selected news features and broadcast coverage highlighting the
                  national physician workforce findings:
                </p>

                <div className="ae-mediaGrid">
                  {MEDIA_ITEMS.map((item) => (
                    <a
                      key={item.outlet}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ae-mediaCard"
                    >
                      <span className="ae-mediaOutlet">
                        <i className="fa-regular fa-newspaper" />
                        {item.outlet}
                      </span>
                      <h3 className="ae-mediaHeadline">{item.headline}</h3>
                      <p className="ae-mediaSnippet">{item.desc}</p>
                      <span className="ae-mediaAction">
                        READ ARTICLE <i className="fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </a>
                  ))}
                </div>
              </article>

              {/* SECTION 13: WORKSHOPS & EMPLOYEE RESOURCES */}
              <article id="resources" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">
                  13 • PROFESSIONAL DEVELOPMENT
                </p>
                <h2 className="ae-sectionTitle">
                  Workshops &amp; Employee Resources
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Practical toolkits and educational workshops designed to support
                  healthcare supervisors and clinician affinity groups:
                </p>

                <div className="ae-workshopsGrid">
                  {WORKSHOPS.map((ws) => (
                    <div key={ws.title} className="ae-workshopCard">
                      <span className="ae-workshopType">{ws.type}</span>
                      <h3 className="ae-workshopTitle">{ws.title}</h3>
                      <p className="ae-workshopDesc">{ws.desc}</p>
                      <Link href="/consultation" className="ae-workshopLink">
                        {ws.linkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 14: VIDEOS & DISSEMINATION PRODUCTS */}
              <article id="videos" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">
                  14 • MULTIMEDIA EDUCATION
                </p>
                <h2 className="ae-sectionTitle">
                  Videos &amp; Dissemination Products
                </h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Educational lectures and recorded webinars translating workforce
                  research into clinical practice:
                </p>

                <div className="ae-videosGrid">
                  {VIDEOS.map((vid) => (
                    <div key={vid.youtubeId} className="ae-videoCard">
                      <div className="ae-videoFrameWrap">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?rel=0&modestbranding=1`}
                          title={vid.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="ae-videoIframe"
                          loading="lazy"
                        />
                      </div>
                      <div className="ae-videoContent">
                        <span className="ae-videoCategory">
                          {vid.category}
                        </span>
                        <h3 className="ae-videoTitle">{vid.title}</h3>
                        <p className="ae-videoDesc">{vid.desc}</p>
                        <a
                          href={vid.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ae-videoActionBtn"
                        >
                          <i className="fa-brands fa-youtube me-1" style={{ color: "#e02424" }} />
                          WATCH ON YOUTUBE{" "}
                          <i className="fa-solid fa-arrow-up-right-from-square ms-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 15: MEET THE PROJECT TEAM */}
              <article id="team" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">15 • INVESTIGATORS</p>
                <h2 className="ae-sectionTitle">Meet the Project Team</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  The scholars, physician-ethicists, and health services
                  researchers directing the project:
                </p>

                <div className="ae-teamGrid">
                  {TEAM.map((member) => (
                    <div key={member.name} className="ae-teamCard">
                      <h3 className="ae-teamName">{member.name}</h3>
                      <p className="ae-teamRole">{member.role}</p>
                      <p className="ae-teamAffiliation">
                        {member.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 16: GALLERY */}
              <article id="gallery" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">16 • RESEARCH IN ACTION</p>
                <h2 className="ae-sectionTitle">Gallery</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Visual documentation from working group consultations, advisory
                  panels, and academic symposia:
                </p>

                <div className="ae-galleryGrid">
                  {GALLERY_ITEMS.map((item) => (
                    <div key={item.title} className="ae-galleryCard">
                      <div className="ae-galleryImgWrap">
                        <img
                          src={asset(item.img)}
                          alt={item.title}
                          className="ae-galleryImg"
                          loading="lazy"
                        />
                      </div>
                      <div className="ae-galleryCaption">
                        <h3 className="ae-galleryCaptionTitle">
                          {item.title}
                        </h3>
                        <p className="ae-galleryCaptionText">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </main>

            {/* RIGHT SIDEBAR (~30%) */}
            <aside className="ae-sidebarColumn">
              <div className="ae-sidebarStickyWrap">
                {/* SIDEBAR CARD 01: Project at a Glance */}
                <div className="ae-sidebarCard">
                  <h3 className="ae-sidebarTitle">Project at a Glance</h3>
                  <div className="ae-sidebarBar" />
                  <dl className="ae-glanceList">
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Focus Area</dt>
                      <dd className="ae-glanceValue">
                        Workforce Equity, Religious Discrimination &amp; Accommodations
                      </dd>
                    </div>
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Participants</dt>
                      <dd className="ae-glanceValue">
                        255 American Muslim physicians surveyed nationally
                      </dd>
                    </div>
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Research Design</dt>
                      <dd className="ae-glanceValue">
                        National cross-sectional survey &amp; qualitative inquiry
                      </dd>
                    </div>
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Geography</dt>
                      <dd className="ae-glanceValue">
                        United States (all 50 states &amp; regions)
                      </dd>
                    </div>
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Primary Outputs</dt>
                      <dd className="ae-glanceValue">
                        6+ peer-reviewed papers, policy briefs &amp; toolkits
                      </dd>
                    </div>
                    <div className="ae-glanceItem">
                      <dt className="ae-glanceLabel">Sponsoring Initiative</dt>
                      <dd className="ae-glanceValue">
                        Initiative on Islam &amp; Medicine (II&amp;M)
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* SIDEBAR CARD 02: Explore Research */}
                <div className="ae-sidebarCard">
                  <h3 className="ae-sidebarTitle">Explore Research</h3>
                  <div className="ae-sidebarBar" />
                  <ul className="ae-researchLinksList">
                    <li className="ae-researchLinkItem">
                      <Link href="/muslim-physicians">
                        <span className="ae-sidebarBullet" aria-hidden="true" />
                        Muslim Physicians in U.S. Healthcare
                      </Link>
                    </li>
                    <li className="ae-researchLinkItem">
                      <Link href="/becoming-a-muslim-doctor">
                        <span className="ae-sidebarBullet" aria-hidden="true" />
                        Becoming a Muslim Doctor Program
                      </Link>
                    </li>
                    <li className="ae-researchLinkItem">
                      <Link href="/fostering-connections">
                        <span className="ae-sidebarBullet" aria-hidden="true" />
                        Bioscience &amp; Theology Initiative
                      </Link>
                    </li>
                    <li className="ae-researchLinkItem">
                      <Link href="/books">
                        <span className="ae-sidebarBullet" aria-hidden="true" />
                        Books &amp; Scholarly Works
                      </Link>
                    </li>
                    <li className="ae-researchLinkItem">
                      <Link href="/impact">
                        <span className="ae-sidebarBullet" aria-hidden="true" />
                        Research Impact &amp; Advisory
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* SIDEBAR CARD 03: Solid Burgundy Collaboration CTA */}
                <div className="ae-sidebarCardBurgundy">
                  <h3 className="ae-sidebarTitleWhite">
                    Collaborate with II&amp;M
                  </h3>
                  <div className="ae-sidebarBarWhite" />
                  <p className="ae-sidebarBurgundyText">
                    Partner with our research team to advance evidence-based
                    policies, educational workshops, and institutional equity
                    within your healthcare system.
                  </p>
                  <Link href="/consultation" className="ae-sidebarOutlineBtn">
                    GET IN TOUCH <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. FINAL DARK GREEN FULL-WIDTH COLLABORATION BANNER
          ==================================================================== */}
      <section className="ae-finalCtaSection">
        <div className="container">
          <div className="ae-finalCtaInner">
            <p className="ae-finalCtaEyebrow">
              INSTITUTIONAL PARTNERSHIP &amp; ENGAGEMENT
            </p>
            <h2 className="ae-finalCtaTitle">
              Building more inclusive healthcare environments.
            </h2>
            <p className="ae-finalCtaDesc">
              Partner with II&amp;M to translate empirical research into actionable
              institutional policies, supervisory training programs, and
              compassionate clinical workplaces that respect religious diversity.
            </p>
            <div className="ae-finalCtaActions">
              <Link href="/consultation" className="ae-btnCtaPrimary">
                GET IN TOUCH <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/research" className="ae-btnCtaOutline">
                EXPLORE RESEARCH <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

