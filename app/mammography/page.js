import { asset } from "../../lib/asset";
import Link from "next/link";
import MammographyNav from "./MammographyNav";
import styles from "./mammography.module.css";

export const metadata = {
  title:
    "A Religiously-Tailored Mammography Intervention for American Muslims | Initiative on Islam & Medicine",
  description:
    "A faith-informed community health initiative designed to reduce breast cancer disparities and increase mammography screening rates among American Muslim women.",
  keywords: [
    "Mammography Screening",
    "Breast Cancer",
    "Muslim Women",
    "Health Equity",
    "Mosque Health Promotion",
    "Faith-Based Intervention",
    "Islamic Bioethics",
  ],
};

const HERO_TAGS = [
  "Breast cancer screening",
  "Muslim women",
  "Community-led education",
];

const BACKGROUND_FACTORS = [
  {
    num: "01",
    title: "Modesty concerns",
    text: "Religious norms of modesty can influence women's decisions about undergoing screening.",
  },
  {
    num: "02",
    title: "Health fatalism",
    text: "Beliefs about health outcomes and divine control may shape screening intentions.",
  },
  {
    num: "03",
    title: "Religious coping",
    text: "Religious coping practices were studied in relation to preventive screening behavior.",
  },
  {
    num: "04",
    title: "Stewardship of the body",
    text: "A sense of responsibility toward caring for one's body can support mammography intentions.",
  },
  {
    num: "05",
    title: "Religious discrimination",
    text: "Perceived discrimination in clinical environments can be a barrier to care.",
  },
];

const APPROACH_PILLARS = [
  {
    badge: "01",
    title: "Understand faith-related factors",
    text: "Identify how Islam and religious beliefs influence screening behaviors.",
  },
  {
    badge: "02",
    title: "Partner with mosques",
    text: "Build a model for community-based, culturally tailored health promotion.",
  },
  {
    badge: "03",
    title: "Improve screening",
    text: "Strengthen knowledge, attitudes, intention, and uptake of mammograms.",
  },
];

const METHODOLOGY_STEPS = [
  {
    badge: "01",
    title: "Explore beliefs",
    text: "Study screening practices and religious factors",
  },
  {
    badge: "02",
    title: "Develop messages",
    text: "Design tailored, evidence-based education",
  },
  {
    badge: "03",
    title: "Deliver workshops",
    text: "Peer-led education within mosque communities",
  },
  {
    badge: "04",
    title: "Evaluate",
    text: "Assess changes in knowledge and uptake",
  },
];

const KEY_OUTCOMES = [
  { num: "58", label: "Women completed workshops" },
  { num: "22", label: "Received a mammogram after one year" },
  { num: "38%", label: "One-year mammography uptake among participants" },
];

const PUBLICATIONS = [
  {
    num: "01",
    title:
      "Associations between religion-related factors and breast cancer screening among American Muslims",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "02",
    title:
      'Developing religiously-tailored health messages for behavioral change: Introducing the reframe, reprioritize, and reform ("3R") model',
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "03",
    title:
      "Changing Mammography-Related Beliefs Among American Muslim Women: Findings from a Religiously-Tailored Mosque-Based Intervention",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "04",
    title:
      "Reducing Muslim Mammography Disparities: Outcomes From a Religiously Tailored Mosque-Based Intervention",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "05",
    title:
      "Religious beliefs and mammography intention: findings from a qualitative study of a diverse group of American Muslim women",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "06",
    title:
      "Muslim women's perspectives on designing mosque-based women's health intervention—An exploratory qualitative study",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "07",
    title:
      "Acceptability of Friday Sermons as a Modality for Health Promotion and Education",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "08",
    title:
      "Adapting a religious health fatalism measure for use in Muslim populations",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "09",
    title:
      "The Development and Validation of a Modesty Measure for Diverse Muslim Populations",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "10",
    title:
      "Predictors of Delayed Healthcare Seeking Among American Muslim Women",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    num: "11",
    title:
      "Associations between religion-related factors and cervical cancer screening among Muslims in greater Chicago",
    href: "https://pubmed.ncbi.nlm.nih.gov/",
  },
];

const PRESENTATIONS_COL1 = [
  "Addressing Muslim Mammography Disparities Through A Religiously Tailored Intervention",
  "Identifying And Intervening Upon American Muslim Health Disparities",
  "Imams & Health Promotion: An Ethical Approach In The Context Of Cancer Screening",
  "Incorporating Religious Authorities And Scripture In Health Interventions",
  "ISNA: Women's Health Matters",
  "Leveraging Religious Networks To Promote Breast Cancer Screening Amongst American Muslim Women",
  "Leveraging Mosques To Promote Breast Cancer Screening Amongst American Muslim Women",
  "Developing A Religiously Tailored Intervention To Enhance Mammography In Mosque Communities",
  "Reducing Muslim Mammography Disparities: Outcomes From A Religiously Tailored Mosque-Based Group Education Intervention",
];

const PRESENTATIONS_COL2 = [
  "Religious Concepts & Breast Cancer Screening Practices In The Greater Chicago Muslim Community",
  "Religious Influences On Health Care Practices Among American Muslim Women",
  "Religiously Tailoring Messages To Enhance Mammography Intention Among Muslims",
  "Exploring Associations Between Breast Cancer Screening Practices & Religious Concepts Among American Muslims",
  "Muslim Women's Perspectives On Designing Mosque-Based Women's Health Interventions: An Exploratory Qualitative Study",
  "A Religiously-Tailored Intervention To Enhance Mammography Uptake Among Muslims",
  "The Influence Of Religion Upon American Muslim Mammography Beliefs And Practices",
  "The Influence Of Modesty Concerns And Fatalistic Beliefs Upon Breast Cancer Screening Practices Amongst American Muslims",
  "Understand American Muslim Communities",
];

const POSTERS_COL1 = [
  "Reducing Muslim mammography disparities: Outcomes from a religiously tailored mosque-based intervention",
  "Outcomes from a Religiously Tailored Intervention to Enhance Mammography Uptake among American Muslims",
  "A Religiously Tailored Intervention to Enhance Mammography Uptake among American Muslims—Design Elements, Feasibility & Outcomes",
];

const POSTERS_COL2 = [
  "Development and Validation of a Modesty Measure for Diverse Muslim Populations",
  "Reducing Disparities in Mammography Screening among American Muslim Women through a religiously-tailored mosque-based intervention",
  "Religion-Related Factors and Breast Cancer Screening among American Muslims",
];

const CONFERENCES_COL1 = [
  "Muslim Clinicians in the Medical Academy — Medical College of Wisconsin, 2022",
  "Being Muslim in Academic Medicine — NIIMS, 2022",
];

const CONFERENCES_COL2 = [
  "Accommodating Muslim Values in Healthcare — Medical College of Wisconsin, 2022",
];

const MEDIA_HIGHLIGHTS = [
  {
    outlet: "Newsweek",
    headline:
      "Muslim Women More Likely to Skip Breast Cancer Screening, But Mosques Can Help",
    href: "https://www.newsweek.com/",
  },
  {
    outlet: "American Association for Cancer Research",
    headline: "Encouraging Muslim Women to Get Mammograms",
    href: "https://www.aacr.org/",
  },
  {
    outlet: "Additional coverage",
    headline: "Access all original media highlights",
    href: "https://www.islamandmedicine.org/",
  },
];

const DISSEMINATION_ITEMS = [
  {
    title: "Dissemination Products",
    desc: "Open the project's existing materials",
    href: "https://www.islamandmedicine.org/",
  },
  {
    title: "Toolkits",
    desc: "Marked as coming soon on the source page",
    href: "https://www.islamandmedicine.org/",
  },
];

const TEAM_MEMBERS = [
  {
    initials: "AP",
    name: "Aasim I. Padela, MD, MSc, FACEP",
    role: "Medical College of Wisconsin & Initiative on Islam and Medicine",
  },
  {
    initials: "SA",
    name: "Dr. Sarah Alkhaifi",
    role: "Assistant Professor, King Abdulaziz University",
  },
];

const OBJECTIVES = [
  "Close knowledge gaps in religion-related cancer screening behavior.",
  "Develop a partnership model with mosques for tailored interventions.",
  "Improve screening knowledge, intention and behavior.",
];

export default function MammographyPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 01 HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.heroBgWrapper}>
          <img
            src={asset("/images/research/mammography-hero.jpg")}
            alt="Female healthcare provider and patient hands resting in consultation"
            className={styles.heroBgImg}
            loading="eager"
          />
          <div className={styles.heroGradientOverlay} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <p className={styles.heroEyebrow}>
                RESEARCH PROJECT / WOMEN&apos;S HEALTH
              </p>
              <h1 className={styles.heroTitle}>
                A Religiously-Tailored <br />
                <em>Mammography Intervention</em> <br />
                for American Muslims
              </h1>
              <p className={styles.heroLead}>
                Understanding the influence of religion on breast cancer
                screening—and developing a community-engaged, mosque-based
                educational intervention for Muslim women in the United States.
              </p>

              <div className={styles.heroActions}>
                <a href="#outcomes" className={styles.btnMaroon}>
                  EXPLORE OUTCOMES <span className="ms-1">↓</span>
                </a>
                <a href="#publications" className={styles.btnOutline}>
                  RESEARCH PUBLICATIONS <span className="ms-1">↗</span>
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
                <p className={styles.heroQuoteEyebrow}>FAITH &amp; HEALTH EQUITY</p>
                <p className={styles.heroQuoteText}>
                  Community-informed. <br />
                  Evidence-based. <br />
                  Real-world impact.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* 02 STICKY SECTION NAVIGATION */}
      <MammographyNav />

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
                      American Muslims form a diverse population, yet the absence
                      of religious affiliation data in many national health
                      surveys limits the evidence available about breast cancer
                      outcomes for Muslim women.
                    </p>
                    <p className={`${styles.text} mb-0`}>
                      Earlier research suggested low mammography adherence among
                      Muslim women in the United States. The project explored how
                      religious beliefs and healthcare experiences shape
                      screening decisions and translated the findings into
                      peer-led educational workshops in mosques.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className={styles.mediaWrapper}>
                      <img
                        src={asset(
                          "/images/research/muslim-physicians-overview.jpg"
                        )}
                        alt="Physician in white coat with stethoscope holding a smartphone"
                        className={styles.editorialImg}
                        loading="lazy"
                      />
                      <span className={styles.mediaBadge}>
                        COMMUNITY HEALTH RESEARCH
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 02 — BACKGROUND */}
              <article id="background" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Background</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.text}>
                  Breast cancer screening can reduce breast cancer mortality.
                  The project&apos;s formative research identified how
                  faith-related beliefs and care experiences can influence
                  decisions about obtaining mammograms.
                </p>

                {/* Highlight Callout Stat Box */}
                <div className={styles.highlightStatBox}>
                  <span className={styles.highlightStatNum}>37%</span>
                  <p className={styles.highlightStatText}>
                    of surveyed women in the Chicago-area sample (n=254) had not
                    received a mammogram during the preceding two years.
                  </p>
                </div>

                <h3 className={styles.subheading}>
                  Factors explored in the research
                </h3>

                {/* Factors 2-column Grid */}
                <div className="row g-2 g-md-3 mb-4">
                  {BACKGROUND_FACTORS.map((factor) => (
                    <div
                      key={factor.num}
                      className={factor.num === "05" ? "col-md-6" : "col-md-6"}
                    >
                      <div className={styles.factorCard}>
                        <div className={styles.factorHeader}>
                          <span className={styles.factorNum}>{factor.num}</span>
                          <h4 className={styles.factorTitle}>{factor.title}</h4>
                        </div>
                        <p className={styles.factorText}>{factor.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-section: A Religiously-Tailored Approach */}
                <div className="mt-4 pt-2">
                  <div className={styles.sectionHead}>
                    <div className={styles.sectionHeadLeft}>
                      <h3 className={styles.sectionTitle}>
                        A Religiously-Tailored Approach
                      </h3>
                      <div className={styles.accentBar} />
                    </div>
                  </div>

                  <p className={styles.leadText}>
                    Findings from formative research informed faith-sensitive,
                    culturally responsive breast cancer education delivered
                    through peer-led group workshops in mosque communities.
                  </p>

                  <div className="row g-3">
                    {APPROACH_PILLARS.map((pillar) => (
                      <div key={pillar.badge} className="col-md-4">
                        <div className={styles.pillarCard}>
                          <div className={styles.circleBadge}>
                            {pillar.badge}
                          </div>
                          <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                          <p className={styles.pillarText}>{pillar.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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

                <p className={styles.leadText}>
                  The program began with community research into screening
                  beliefs and barriers among ethnically and racially diverse
                  Muslim women. Findings were used to design religiously tailored
                  messages and educational materials, followed by a mosque-based,
                  peer-led workshop intervention and outcome assessment.
                </p>

                {/* 4 Steps in a row */}
                <div className="row g-2 g-md-3">
                  {METHODOLOGY_STEPS.map((step) => (
                    <div key={step.badge} className="col-6 col-md-3">
                      <div className={styles.stepCard}>
                        <div className={styles.circleBadge}>{step.badge}</div>
                        <h4 className={styles.stepTitle}>{step.title}</h4>
                        <p className={styles.stepText}>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Callout Banner */}
                <div className={styles.quoteBanner}>
                  <span className={styles.quoteMark} aria-hidden="true">
                    “
                  </span>
                  <p className={styles.quoteBannerText}>
                    Research and community partnerships informing faith-consistent
                    preventive healthcare.
                  </p>
                </div>
              </article>

              {/* SECTION 04 — KEY OUTCOMES */}
              <article id="outcomes" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Key Outcomes</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  The published project summary reports increased breast cancer
                  and mammography knowledge and improved stated likelihood of
                  screening following the intervention.
                </p>

                <div className={`row g-2 g-md-3 ${styles.outcomesRow}`}>
                  {KEY_OUTCOMES.map((stat) => (
                    <div key={stat.num} className="col-sm-4">
                      <div className={styles.outcomeCard}>
                        <span className={styles.outcomeNum}>{stat.num}</span>
                        <p className={styles.outcomeLabel}>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={styles.outcomesFootnote}>
                  Of the 58 participants, 29 had never obtained a mammogram and
                  29 had not received one within the previous two years. These
                  figures refer to the study cohort, not to all American Muslim
                  women.
                </p>
              </article>

              {/* SECTION 05 — PUBLICATIONS & PRESENTATIONS */}
              <article id="publications" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Publications</h2>
                    <div className={styles.accentBar} />
                  </div>
                  <span className={styles.counterTag}>11 RESEARCH PAPERS</span>
                </div>

                <div className={styles.papersList}>
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.num} className={pub.num === "11" ? styles.paperItem : styles.paperItem}>
                      <span className={styles.paperNum}>{pub.num}</span>
                      <div className={styles.paperContent}>
                        <div className={styles.paperTag}>
                          RESEARCH PUBLICATION
                        </div>
                        <h4 className={styles.paperTitle}>{pub.title}</h4>
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.paperLink}
                        >
                          VIEW ON ORIGINAL PROJECT PAGE{" "}
                          <span className="ms-1">↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-section: Presentations */}
                <div className="mt-5 pt-2">
                  <div className={styles.sectionHead}>
                    <div className={styles.sectionHeadLeft}>
                      <h3 className={styles.sectionTitle}>Presentations</h3>
                      <div className={styles.accentBar} />
                    </div>
                  </div>

                  <p className={styles.leadText}>
                    Full list of presentations documented on the original project
                    page.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <ul className={styles.presentationList}>
                        {PRESENTATIONS_COL1.map((item, idx) => (
                          <li key={idx} className={styles.presentationItem}>
                            <span className={styles.presentationNum}>
                              {idx + 1}.
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className={styles.presentationList}>
                        {PRESENTATIONS_COL2.map((item, idx) => (
                          <li key={idx} className={styles.presentationItem}>
                            <span className={styles.presentationNum}>
                              {idx + 10}.
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Posters */}
                <div className="mt-5 pt-2">
                  <div className={styles.sectionHead}>
                    <div className={styles.sectionHeadLeft}>
                      <h3 className={styles.sectionTitle}>Posters</h3>
                      <div className={styles.accentBar} />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {POSTERS_COL1.map((item, idx) => (
                          <div key={idx} className={styles.posterCard}>
                            <div className={styles.posterHeader}>
                              <span className={styles.posterNum}>{idx + 1}.</span>
                              <p className={styles.posterText}>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {POSTERS_COL2.map((item, idx) => (
                          <div key={idx} className={styles.posterCard}>
                            <div className={styles.posterHeader}>
                              <span className={styles.posterNum}>{idx + 4}.</span>
                              <p className={styles.posterText}>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Community Conferences */}
                <div className="mt-5 pt-2">
                  <div className={styles.sectionHead}>
                    <div className={styles.sectionHeadLeft}>
                      <h3 className={styles.sectionTitle}>
                        Community Conferences
                      </h3>
                      <div className={styles.accentBar} />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {CONFERENCES_COL1.map((item, idx) => (
                          <div key={idx} className={styles.conferenceCard}>
                            <p className={styles.conferenceText}>
                              <strong>{idx + 1}.</strong> {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {CONFERENCES_COL2.map((item, idx) => (
                          <div key={idx} className={styles.conferenceCard}>
                            <p className={styles.conferenceText}>
                              <strong>{idx + 3}.</strong> {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Media Highlights */}
                <div className="mt-5 pt-2">
                  <div className={styles.sectionHead}>
                    <div className={styles.sectionHeadLeft}>
                      <h3 className={styles.sectionTitle}>Media Highlights</h3>
                      <div className={styles.accentBar} />
                    </div>
                  </div>

                  <div className="row g-3">
                    {MEDIA_HIGHLIGHTS.map((item) => (
                      <div
                        key={item.outlet}
                        className={
                          item.outlet === "Additional coverage"
                            ? "col-md-6"
                            : "col-md-6"
                        }
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mediaCard}
                        >
                          <h4 className={styles.mediaOutlet}>{item.outlet}</h4>
                          <p className={styles.mediaHeadline}>
                            {item.headline} <span className="ms-1">↗</span>
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* SECTION 06 — DISSEMINATION PRODUCTS & TOOLKITS */}
              <article id="resources" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>
                      Dissemination Products &amp; Toolkits
                    </h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <p className={styles.leadText}>
                  The original project includes a dissemination products area.
                  Its toolkit section is listed as forthcoming; no downloadable
                  toolkit has been invented for this design.
                </p>

                <div className="row g-3">
                  {DISSEMINATION_ITEMS.map((item) => (
                    <div key={item.title} className="col-md-6">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.toolkitCard} d-block text-decoration-none`}
                      >
                        <h4 className={styles.toolkitTitle}>{item.title}</h4>
                        <p className={styles.toolkitDesc}>
                          {item.desc} <span className="ms-1">↗</span>
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 07 — MEET THE PROJECT TEAM */}
              <article id="team" className={styles.sectionBlock}>
                <div className={styles.sectionHead}>
                  <div className={styles.sectionHeadLeft}>
                    <h2 className={styles.sectionTitle}>Meet the Project Team</h2>
                    <div className={styles.accentBar} />
                  </div>
                </div>

                <div className="row g-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="col-md-6">
                      <div className={styles.teamCard}>
                        <div className={styles.teamBadge} aria-hidden="true">
                          {member.initials}
                        </div>
                        <div>
                          <h4 className={styles.teamName}>{member.name}</h4>
                          <p className={styles.teamRole}>{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <span className={styles.objectiveNum}>
                        0{idx + 1}
                      </span>
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
                      Breast cancer and mammography
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Audience
                    </dt>
                    <dd className={styles.glanceDd}>
                      American Muslim women
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Research setting
                    </dt>
                    <dd className={styles.glanceDd}>
                      Chicago-area formative research and mosque communities
                    </dd>
                  </div>
                  <div className={styles.glanceItem}>
                    <dt className={styles.glanceDt}>
                      <span className={styles.bullet} aria-hidden="true" />
                      Approach
                    </dt>
                    <dd className={styles.glanceDd}>
                      Religiously tailored peer education
                    </dd>
                  </div>
                </dl>
              </div>

              {/* SIDEBAR CARD 03: Research Findings */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Research Findings</h3>
                <div className={styles.accentBar} />
                <div className={styles.sidebarStatItem}>
                  <span className={styles.sidebarStatNum}>37%</span>
                  <p className={styles.sidebarStatLabel}>
                    No mammogram in previous two years in surveyed Chicago sample
                  </p>
                </div>
                <div className={styles.sidebarStatItem}>
                  <span className={styles.sidebarStatNum}>58</span>
                  <p className={styles.sidebarStatLabel}>
                    Workshop participants
                  </p>
                </div>
                <div className={styles.sidebarStatItem}>
                  <span className={styles.sidebarStatNum}>38%</span>
                  <p className={styles.sidebarStatLabel}>
                    Obtained mammography within one year
                  </p>
                </div>
              </div>

              {/* SIDEBAR CARD 04: Explore Research */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Explore Research</h3>
                <div className={styles.accentBar} />
                <ul className={styles.exploreList}>
                  <li>
                    <a href="#publications" className={styles.exploreLink}>
                      <span>11 publications</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className={styles.exploreLink}>
                      <span>18 presentations</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className={styles.exploreLink}>
                      <span>6 posters</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#team" className={styles.exploreLink}>
                      <span>Project team</span>
                      <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 05: Support Meaningful Research (Solid Burgundy) */}
              <div className={`${styles.sidebarCard} ${styles.cardBurgundy}`}>
                <p className={styles.heroQuoteEyebrow}>STAY CONNECTED</p>
                <h3 className="text-white fs-5 fw-bold mb-2">
                  Support meaningful research
                </h3>
                <div className="bg-white opacity-75 mb-3" style={{ height: 2, width: 28 }} />
                <p className={`${styles.textLight} small mb-3`}>
                  Partner with II&amp;M to advance culturally informed, equitable
                  care.
                </p>
                <Link href="/consultation" className={styles.btnWhiteOutline}>
                  GET IN TOUCH <span className="ms-1">↗</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 04 BOTTOM CALL TO ACTION BANNER */}
      <section className={styles.bottomCta}>
        <div className={styles.bottomCtaBg}>
          <img
            src={asset("/images/our-impact/cta-mosque.jpg")}
            alt="Mosque dome and minarets against twilight sky"
            className={styles.bottomCtaImg}
            loading="lazy"
          />
          <div className={styles.bottomCtaOverlay} />
        </div>
        <div className={`container ${styles.bottomCtaContainer}`}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <p className={styles.ctaEyebrow}>ADVANCING KNOWLEDGE TOGETHER</p>
              <h2 className={styles.ctaHeading}>
                Research that connects faith, <br className="d-none d-md-inline" />
                community and better healthcare.
              </h2>
              <p className={styles.ctaSubtext}>
                Explore more II&amp;M projects and work with us to translate
                evidence into education, clinical care, and community impact.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/consultation" className={`${styles.btnMaroon} ${styles.btnCta}`}>
                  GET IN TOUCH <span className="ms-1">↗</span>
                </Link>
                <Link href="/consultation" className={`${styles.btnWhiteOutline} ${styles.btnCta}`}>
                  EXPLORE RESEARCH <span className="ms-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
