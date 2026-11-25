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
    meta: "Taylor & Francis • AJOB Empirical Bioethics",
    title: "Religious Identity Discrimination in the Physician Workforce: Insights from Two National Studies of Muslim Clinicians in the US",
    authors: "Padela AI, et al.",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://www.tandfonline.com/doi/abs/10.1080/23294515.2015.1111271",
  },
  {
    meta: "Academia.edu • Research Paper",
    title: "Religious Identity Discrimination in the Physician Workforce: Insights from Two National Studies of Muslim Clinicians in the US",
    authors: "Padela AI, et al.",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://www.academia.edu/94461347/Religious_Identity_Discrimination_in_the_Physician_Workforce_Insights_from_Two_National_Studies_of_Muslim_Clinicians_in_the_US",
  },
  {
    meta: "Academia.edu • Research Paper",
    title: "The Impact of Practicing Both Medicine and Religion: Muslim Identity as a Predictor of Discrimination, Accommodation, and Career Outcomes in Academic Medicine",
    authors: "Padela AI, et al.",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://www.academia.edu/89347717/The_Impact_of_Practicing_Both_Medicine_and_Religion_Muslim_Identity_as_a_Predictor_of_Discrimination_Accommodation_and_Career_Outcomes_in_Academic_Medicine",
  },
  {
    meta: "Academia.edu • Research Paper",
    title: "Muslim American Physicians' Experiences with and Views on Religious Discrimination and Accommodation in Academic Medicine",
    authors: "Padela AI, et al.",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://www.academia.edu/98516917/Muslim_American_physicians_experiences_with_and_views_on_religious_discrimination_and_accommodation_in_academic_medicine",
  },
  {
    meta: "Academia.edu • Research Paper",
    title: "A Religious Minority Tax in Healthcare: Insights from Muslim American Physicians",
    authors: "Padela AI, et al.",
    linkText: "VIEW PUBLICATION ↗",
    href: "https://www.academia.edu/105350151/A_religious_minority_tax_in_healthcare_Insights_from_Muslim_American_physicians",
  },
];

// 9. PRESENTATIONS & CONFERENCES (2-Column Cards)
const PRESENTATIONS = [
  {
    event: "Invited Keynote",
    title:
      "Discrimination & Diversity in Healthcare Workforce: Muslim Physician Experiences",
    desc: "Dr. Aasim Padela presents national empirical survey data on religion-directed workplace discrimination, accommodation hurdles, and diversity within the healthcare workforce.",
    date: "Invited Lecture",
    href: "https://www.youtube.com/watch?v=BfXF6wQL40A",
  },
  {
    event: "NIIMS Academic Panel",
    title:
      "Being Muslim in Academic Medicine",
    desc: "Faculty members, physician-scholars, and educators discuss navigating professional identity, mentoring trainees, and advancing equity across academic health systems.",
    date: "Academic Panel",
    href: "https://m.facebook.com/NIIMS.org/videos/being-muslim-in-academic-medicine/1183676399093794/",
  },
  {
    event: "ResearchGate Publication",
    title:
      "Review of Muslim Patient Needs and Its Implications on Healthcare Delivery",
    desc: "Scholarly review examining Muslim patient care needs and how healthcare systems can better respond to religious and cultural considerations.",
    date: "Research Publication",
    href: "https://www.researchgate.net/publication/377695458_wReview_of_Muslim_Patient_Needs_and_Its_Imertplications_on_Healthcare_Delivery",
  },
  {
    event: "Invited Lecture",
    title:
      "Religion and Workplace Discrimination: Muslim Physician Experiences",
    desc: "An academic presentation examining religious identity, minority-faith clinician experiences, and institutional policy recommendations for equitable medical environments.",
    date: "Invited Lecture",
    href: "https://www.youtube.com/watch?v=I-ZBtFsIoEM",
  },
  {
    event: "Wisconsin Public Health Association",
    title:
      "2023 Annual Public Health Conference",
    desc: "Presentation on Muslim American health needs and equity issues at the 2023 Wisconsin Public Health Association Annual Conference.",
    date: "Annual Conference 2023",
    href: "https://www.wpha.org/page/2023AnnualPublicHealthConferenceSchedule",
  },
];

// 10. MEDIA HIGHLIGHTS (Responsive Grid)
const MEDIA_ITEMS = [
  {
    outlet: "Washington Post",
    headline: "Washington Post.",
    desc: "National feature detailing workplace challenges and scrutiny faced by Muslim physicians in America's hospitals.",
    href: "https://www.washingtonpost.com/news/to-your-health/wp/2015/12/11/american-muslim-doctors-feel-greater-scrutiny-even-patients-suspicions/",
  },
  {
    outlet: "Wisconsin Muslim Journal",
    headline: "Discrimination Against Muslim Physicians on the Rise, Advancing Equity for Muslim Physicians in the Healthcare Workforce.",
    desc: "Coverage of research findings on increasing discrimination faced by Muslim physicians in healthcare settings.",
    href: "https://wisconsinmuslimjournal.org/discrimination-against-muslim-physicians-on-the-rise/",
  },
  {
    outlet: "ACP Hospitalist",
    headline: "Muslim physicians report significant discrimination, March,1/ 2023.",
    desc: "Report on national survey findings showing significant rates of religious discrimination among Muslim physicians.",
    href: "https://acphospitalist.acponline.org/archives/2023/03/01/free/muslim-physicians-report-significant-discrimination.htm",
  },
  {
    outlet: "Detroit News",
    headline: "The Detroit News.",
    desc: "Print media coverage of research on Muslim physician experiences in the American healthcare workforce.",
    href: "https://medicineandislam.org/wp-content/uploads/2024/11/Detroit-News-article-1.pdf",
  },
  {
    outlet: "MCW Newsroom",
    headline: "Medical College of Wisconsin Research Shows Increasing Religious Discrimination Against Muslim Physician In U.S, Jan,4/ 2022.",
    desc: "Medical College of Wisconsin newsroom coverage on research examining Muslim American healthcare experiences.",
    href: "https://medicineandislam.org/wp-content/uploads/2023/04/MCW-Newsroom.pdf",
  },
  {
    outlet: "MCW News",
    headline: "Corewell Health Clinic Accused of Religious Discrimination, Overprescribing Opioids, March,26/2023.",
    desc: "Expert commentary on a religious discrimination lawsuit involving a Muslim physician in the U.S. healthcare system.",
    href: "https://www.mcw.edu/news/dr-aasim-padela-comments-on-former-corewell-health-physicians-religious-discrimination-lawsuit",
  },
  {
    outlet: "Islamic Horizons / ISNA",
    headline: "Whitehead, S. (2023). Muslim Physicians Face Rising Discrimination, Islamic Horizons Journal, March,01/2023.",
    desc: "ISNA's Islamic Horizons magazine feature on Muslim physician experiences, identity, and healthcare equity.",
    href: "https://issuu.com/isnacreative/docs/ih_march-april_23/s/19954468",
  },
];

// 11. WORKSHOPS & EMPLOYEE RESOURCES (2-Column Cards)
const WORKSHOPS = [
  {
    type: "Executive Workshop",
    title: "Hospital Leadership: Fostering Religious Inclusion in Clinical Teams",
    desc: "Executive training module for department chairs, nursing executives, and HR leaders to establish equitable workplace accommodation policies.",
    linkText: "LEARN MORE ↗",
    href: "https://www.cairma.org/wp-content/uploads/2017/05/Employer-Handbook-12-page-CAIR-MA.pdf",
  },
  {
    type: "Staff Resource Toolkit",
    title: "Muslim Healthcare Professional Employee Resource Group (ERG) Guide",
    desc: "Step-by-step institutional blueprint for establishing, chartering, and running impactful clinician affinity networks in hospital systems.",
    linkText: "ACCESS TOOLKIT ↗",
    href: "https://mediacentral.princeton.edu/media/TanenbaumA+Religious+Diversity+Manager+Supervisor+Training/1_yxoghepi",
  },
  {
    type: "Clinical Supervisor Guide",
    title: "Supporting Muslim Trainees & Clinical Staff During Ramadan",
    desc: "Practical guidance for residency program directors, attending physicians, and nurse managers on shift scheduling and nutrition breaks.",
    linkText: "VIEW GUIDE ↗",
    href: "https://tahsn.ca/documents-resources",
  },
  {
    type: "Institutional Policy Template",
    title: "Religious Accommodation Policy Model for Healthcare Systems",
    desc: "Legally reviewed model policy draft covering prayer spaces, clinical call flexibility, and modest scrub guidelines for hospital adoption.",
    linkText: "DOWNLOAD MODEL ↗",
    href: "https://link.springer.com/book/10.1007/978-3-319-92762-6",
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
    affiliation: "Professor of Emergency Medicine and Bioethics | Director, Initiative on Islam & Medicine",
    photo: "/images/advancing-equity/team-4.jpg",
  },
  {
    name: "Farr A. Curlin, MD",
    role: "Co-Investigator & Senior Collaborator",
    affiliation: "Professor of Medicine and Medical Ethics | Duke University School of Medicine",
    photo: "/images/advancing-equity/team-2.jpg",
  },
  {
    name: "Laila Azam, PhD, MBA",
    role: "Research Scientist & Qualitative Lead",
    affiliation: "Health Services Researcher | Initiative on Islam & Medicine",
    photo: "/images/advancing-equity/team-3.jpg",
  },
  {
    name: "Hasan Shanawani, MD",
    role: "Co-Investigator & Clinical Ethics Specialist",
    affiliation: "Pulmonary & Critical Care Medicine | Clinical Ethics Consultant",
    photo: "/images/advancing-equity/team-1.jpg",
  },
];

// 14. GALLERY (Authentic Academic Research Dialogues)
const GALLERY_ITEMS = [
  {
    img: "/images/advancing-equity/gallery-1.jpg",
    title: "Academic Presentation",
    desc: "Presenting research findings on Muslim physician workforce experiences at a medical education symposium.",
  },
  {
    img: "/images/advancing-equity/gallery-2.jpg",
    title: "Religious Identity Discrimination Conference",
    desc: "Presenting 'Religious Identity Discrimination in the Physician Workforce: Insights from Two National Surveys of Muslim Clinicians in the US' at the 2023 Conference on Medicine & Religion.",
  },
  {
    img: "/images/advancing-equity/gallery-3.jpg",
    title: "National Symposium Presentation",
    desc: "Sharing empirical data and policy recommendations on Muslim physician accommodation at a national healthcare conference.",
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
              <a href="/books" className="ae-btnOutline">
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
                  <p className="ae-policyPanelEyebrow">INSTITUTIONAL POLICY BLUEPRINT</p>
                  <h3 className="ae-policyPanelTitle">
                    Advancing Equity for Muslim Healthcare Professionals: Policy Brief &amp; Framework
                  </h3>
                  <p className="ae-policyPanelDesc">
                    A comprehensive, evidence-based policy framework offering actionable guidance for hospital networks, medical school deans, and residency training programs to foster religious inclusion, address discrimination, and support Muslim clinicians.
                  </p>
                  <a href={asset("/documents/Final-Policy-Report_18-10-2022-1.pdf")} target="_blank" rel="noopener noreferrer" className="ae-btnPolicyWhite">
                    REQUEST POLICY REPORT <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </article>

              {/* SECTION 10: WORKSHOPS & EMPLOYEE RESOURCES */}
              <article id="workshops" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">10 • PROFESSIONAL DEVELOPMENT</p>
                <h2 className="ae-sectionTitle">Workshops &amp; Employee Resources</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Practical toolkits and educational workshops designed to support healthcare supervisors and clinician affinity groups:
                </p>
                <div className="ae-workshopsGrid">
                  {WORKSHOPS.map((item) => (
                    <div key={item.title} className="ae-workshopCard">
                      <div>
                        <p className="ae-workshopType">{item.type}</p>
                        <h3 className="ae-workshopTitle">{item.title}</h3>
                        <p className="ae-workshopDesc">{item.desc}</p>
                      </div>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="ae-workshopLink">{item.linkText}</a>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 11: RESEARCH PUBLICATIONS */}
              <article id="publications" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">
                  11 • SCHOLARLY CONTRIBUTIONS
                </p>
                <h2 className="ae-sectionTitle">Research Publications</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Peer-reviewed academic papers resulting from the national
                  physician workforce study:
                </p>

                <div className="ae-publicationsGrid">
                  {PUBLICATIONS.map((pub, i) => (
                    <div key={i} className="ae-publicationCard">
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
                    <a
                      key={pres.title}
                      href={pres.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ae-presentationCard"
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      <span className="ae-presEvent">{pres.event}</span>
                      <h3 className="ae-presTitle">{pres.title}</h3>
                      <p className="ae-presDesc">{pres.desc}</p>
                      <p className="ae-presDate">
                        <i className="fa-regular fa-calendar me-1" />
                        {pres.date}
                      </p>
                    </a>
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
                      {member.photo && (
                        <div className="ae-teamPhotoWrap">
                          <img src={asset(member.photo)} alt={member.name} className="ae-teamPhoto" />
                        </div>
                      )}
                      <h3 className="ae-teamName">{member.name}</h3>
                      <p className="ae-teamRole">{member.role}</p>
                      <p className="ae-teamAffiliation">{member.affiliation}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 17: PARTNER ORGANIZATIONS */}
              <article id="partners" className="ae-sectionBlock">
                <p className="ae-sectionEyebrow">17 • COMMUNITY PARTNERSHIPS</p>
                <h2 className="ae-sectionTitle">Partner Organizations</h2>
                <div className="ae-burgundyBar" />
                <p className="ae-sectionSubtext">
                  Collaborating with leading Muslim health and community organizations to advance equity in healthcare:
                </p>
                <div className="ae-partnersGrid">
                  {[
                    { src: "/images/advancing-equity/partner-1.jpg", alt: "American Muslim Health Professionals" },
                    { src: "/images/advancing-equity/partner-2.png", alt: "IMANA – Islamic Medical Association of North America" },
                    { src: "/images/advancing-equity/partner-3.png", alt: "IMA Network" },
                    { src: "/images/advancing-equity/partner-4.png", alt: "Khalil Center – A Zakat Foundation Project" },
                    { src: "/images/advancing-equity/partner-5.png", alt: "Stanford Medicine Muslim Mental Health Lab" },
                    { src: "/images/advancing-equity/partner-6.png", alt: "Association of Muslim Chaplains" },
                    { src: "/images/advancing-equity/partner-7.png", alt: "The Family & Youth Institute" },
                  ].map((p) => (
                    <div key={p.alt} className="ae-partnerLogoWrap">
                      <img src={asset(p.src)} alt={p.alt} className="ae-partnerLogo" loading="lazy" />
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

