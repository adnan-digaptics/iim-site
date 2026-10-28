import { asset } from "../../lib/asset";
import Link from "next/link";
import LivingOrganDonationNav from "./LivingOrganDonationNav";
import styles from "./living-organ-donation.module.css";

export const metadata = {
  title:
    "Informing American Muslims About Living Organ Donation | Initiative on Islam & Medicine",
  description:
    "Faith-sensitive, evidence-informed education that helps Muslim communities navigate the biomedical and Islamic ethical dimensions of living organ donation.",
  keywords: [
    "Living Organ Donation",
    "American Muslims",
    "Islamic Bioethics",
    "Mosque Health Education",
    "End-of-Life Care",
    "Transplant Ethics",
    "Health Equity",
  ],
};

const HERO_TAGS = [
  "Organ donation",
  "Islamic bioethics",
  "Community education",
];

const PROJECT_AIMS = [
  {
    num: "01",
    title: "Explore Islamic perspectives",
    text: "Understand diverse scholarly views relating to organ donation.",
  },
  {
    num: "02",
    title: "Identify community challenges",
    text: "Recognize beliefs, concerns and knowledge gaps around donation.",
  },
  {
    num: "03",
    title: "Develop tailored education",
    text: "Create accessible, mosque-based, peer-led educational programs.",
  },
];

const ATTITUDES = [
  {
    num: "01",
    title: "Community perspectives",
    text: "Surveying attitudes and concerns in Muslim communities.",
  },
  {
    num: "02",
    title: "Religious and biomedical knowledge",
    text: "Recognizing areas in which accessible, balanced information is needed.",
  },
  {
    num: "03",
    title: "Ethically balanced education",
    text: "Supporting informed decisions without assuming that every participant will reach the same conclusion.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Explore community knowledge and concerns",
  },
  {
    num: "02",
    title: "Design",
    desc: "Develop balanced, faith-sensitive resources",
  },
  {
    num: "03",
    title: "Engage",
    desc: "Host peer-led education in mosques",
  },
  {
    num: "04",
    title: "Evaluate",
    desc: "Assess learning and intervention effectiveness",
  },
];

const ACADEMIC_PAPERS = [
  {
    num: "01",
    title:
      "A Randomized Controlled Cross-Over Trial Evaluating the Effect of Religiously-Tailored Health Education",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "02",
    title:
      "The Ethics of Organ Donation After Circulatory Determination of Death and Xenotransplantation from an Islamic Perspective",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "03",
    title:
      "Factors Associated with Positive Attitudes Towards Organ Donation in Arab Americans",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "04",
    title:
      "Relationships between Islamic religiosity and attitude toward deceased organ donation among American Muslims: a pilot study",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "05",
    title: "American Muslim Physician Attitudes Toward Organ Donation",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "06",
    title:
      "A Mosque-Based Qualitative Study on American Muslim Women's Organ Donation Beliefs",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "07",
    title:
      "Informing American Muslims about living donation through tailored health education: A randomized controlled crossover trial evaluating increase in biomedical and religious knowledge",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "08",
    title:
      "The Development and Validation of the Islamic Knowledge of Living Organ Donation Knowledge Scale for Measuring Organ Donation Knowledge Among Muslim Communities",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "09",
    title:
      "The Impact of Religiously-Tailored and Ethically-Balanced Education on Intention for Living Organ Donation among Muslim Americans",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "10",
    title:
      "Muslims, Islam, and Organ Donation: Righting Social Narratives and Designing Ethically Balanced Educational Interventions",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "11",
    title:
      "Increasing Solid Organ Donation: A Role for Emergency Physicians",
    link: "https://www.islamandmedicine.org/",
  },
];

const OP_EDS = [
  {
    num: "01",
    title:
      "Perspectives on Organ Donation and Transplantation: Practical steps to moving forward in light of the latest legal opinion — Islamic Horizons, October 2019",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "02",
    title:
      "Helping Those You Know: The possibilities of deceased directed donation — Islamic Horizons, December 2019",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "03",
    title: "Muslim American Views on Organ Donation — October 2020",
    link: "https://www.islamandmedicine.org/",
  },
];

const PPT_PRESENTATIONS = [
  {
    num: "01",
    title: "Biomedical Aspects of Living Donation",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "02",
    title: "Organ Procurement Process",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "03",
    title: "Islamic Perspectives on Living Organ Donation",
    link: "https://www.islamandmedicine.org/",
  },
];

const CONF_PRESENTATIONS = [
  {
    num: "01",
    title:
      "Developing Religiously-Tailored Health Education to Inform American Muslims about Organ Donation — September 17, 2019",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "02",
    title:
      "American Muslim Attitudes Towards Common Fertility Treatment Options: A Mosque-Based Cross Sectional Study — October 18–20, 2019",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "03",
    title: "Working with Muslim Patients — Fall 2023",
    link: "https://www.islamandmedicine.org/",
  },
  {
    num: "04",
    title:
      "Bringing Theory to Community Education: Faith, Muslims, and Living Organ Donation — September 17, 2020",
    link: "https://www.islamandmedicine.org/",
  },
];

const DISSEMINATION_PRODUCTS = [
  {
    idx: "II&M / RESOURCE 01",
    heading: "An Organ Donation Decisional Guide for Muslim Americans",
    title: "An Organ Donation Decisional Guide for Muslim Americans",
    link: "https://www.islamandmedicine.org/",
  },
  {
    idx: "II&M / RESOURCE 02",
    heading: "Sample Peer Educator Training Manual",
    title: "Sample Peer Educator Training Manual",
    link: "https://www.islamandmedicine.org/",
  },
  {
    idx: "II&M / RESOURCE 03",
    heading: "Replication Guide",
    title: "Replication Guide",
    link: "https://www.islamandmedicine.org/",
  },
  {
    idx: "II&M / RESOURCE 04",
    heading: "Sample Participant Course Booklet",
    title: "Sample Participant Course Booklet",
    link: "https://www.islamandmedicine.org/",
  },
];

const DISCOURSE_COL1 = [
  "1. Living Organ Donation — Dr. Milda Saunders (University of Chicago)",
  "2. Muslim Debates — Dr. Elham Mireshghi (University of Chicago)",
  "3. Deceased Organ Donation — Dr. Rafaqat Rashid (AlBalagh Academy)",
  "4. Deceased Organ Donation — Dr. Talia Baker (University of Chicago)",
  "5. Deceased Organ Donation — Dr. Rosie Duivenbode (University of Chicago)",
];

const DISCOURSE_COL2 = [
  "6. Living Organ Donation — Dr. Aasim I. Padela (AlBalagh Academy)",
  "7. Living Organ Donation — Dr. Aasim I. Padela (University of Chicago)",
  "8. Discussion — Shaykh Amin Kholwadia and Shaykh Zulfiqar Ali Shah",
  "9. Discussion — Shaykh Amin Kholwadia and Dr. Rafaqat Rashid",
];

const GALLERY_CARDS = [
  {
    location: "ADAMS–Sulley, DC",
    speaker: "Dr. Aasim Padela",
  },
  {
    location: "ADAMS–Sterling, DC",
    speaker: "Dr. Milda Saunders",
  },
  {
    location: "ADAMS–Sterling, DC",
    speaker: "Dr. Ermin Sinanovic",
  },
];

const SUPPORTERS = [
  ["Mahsin Habib", "Muhammad Nabeel Hasan", "Kamran Husain"],
  ["Mohammad Khalid", "Sabih Uddin", "Fauzia Lodhib"],
  ["Saulat Pervez", "Tareq Abedin", "Mohammad Yahya Alvi"],
  ["Abdul Rahman Wajid", "Jaseem Anwer", "Naeem Baig"],
  ["Fawzia Fazily", "Irfan Galaria", "Rafiq Rakhangi"],
  ["Latif A. Rasheed", "Irfan Shaikh", "Neima Surur"],
];

const SIDEBAR_OBJECTIVES = [
  "Explore Islamic perspectives on living organ donation.",
  "Identify concerns, experiences and knowledge gaps.",
  "Develop and evaluate balanced community education.",
];

const SIDEBAR_GLANCE = [
  {
    icon: "fa-shield-halved",
    label: "Focus",
    value: "Living organ donation and end-of-life care",
  },
  {
    icon: "fa-users",
    label: "Audience",
    value: "American Muslim communities",
  },
  {
    icon: "fa-mosque",
    label: "Setting",
    value: "Mosque-based community workshops",
  },
  {
    icon: "fa-book-open",
    label: "Approach",
    value: "Religiously tailored, peer-led education",
  },
];

const SIDEBAR_LIBRARY = [
  { label: "11 academic papers", href: "#publications" },
  { label: "3 op-eds", href: "#publications" },
  { label: "3 PowerPoint presentations", href: "#publications" },
  { label: "4 conference presentations", href: "#publications" },
  { label: "4 dissemination resources", href: "#resources" },
  { label: "Video and speaker library", href: "#media" },
];

const SIDEBAR_RESOURCES = [
  "1. Organ Donation Decisional Guide",
  "2. Peer Educator Training Manual",
  "3. Replication Guide",
  "4. Participant Course Booklet",
];

export default function LivingOrganDonationPage() {
  return (
    <div className={styles.pageWrap}>
      {/* 01 HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.heroBgWrapper}>
          <img
            src={asset("/images/living-organ-donation/organ-hero-brain.jpg")}
            alt="Anatomical model illustrating living organ donation and bioethics"
            className={styles.heroBgImg}
            loading="eager"
          />
          <div className={styles.heroGradientOverlay} />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <p className={styles.heroEyebrow}>
                RESEARCH PROJECT / ISLAMIC BIOETHICS
              </p>
              <h1 className={styles.heroTitle}>
                Informing American <br />
                Muslims <br />
                <em>
                  About Living <br />
                  Organ Donation
                </em>
              </h1>
              <p className={styles.heroLead}>
                Faith-sensitive, evidence-informed education that helps Muslim
                communities navigate the biomedical and Islamic ethical
                dimensions of living organ donation.
              </p>

              <div className={styles.heroActions}>
                <a href="#overview" className={styles.btnMaroon}>
                  EXPLORE RESEARCH <span className="ms-1">↓</span>
                </a>
                <a href="#resources" className={styles.btnOutline}>
                  EDUCATIONAL RESOURCES <span className="ms-1">↗</span>
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
                  FAITH • ETHICS • COMMUNITY
                </p>
                <p className={styles.heroQuoteText}>
                  Informed choices. <br />
                  Balanced education. <br />
                  Meaningful dialogue.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY SUBNAV */}
      <LivingOrganDonationNav />

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className={`container ${styles.mainContainer}`}>
        <div className="row g-5">
          {/* LEFT COLUMN: MAIN RESEARCH CONTENT (col-lg-8) */}
          <main className="col-lg-8">
            {/* SECTION 01 — OVERVIEW */}
            <article id="overview" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Overview</h2>
                <div className={styles.accentBar} />
              </div>

              <div className="row g-4 align-items-start">
                <div className="col-md-7">
                  <p className={styles.leadText}>
                    Muslims share beliefs, values and experiences that can
                    influence healthcare decisions across ethnic and racial
                    backgrounds. Some turn to Islamic ethico-legal guidance when
                    considering whether medical procedures are permissible.
                  </p>
                  <p className={styles.leadText}>
                    Differences of opinion among Muslim scholars regarding
                    organ donation can contribute to knowledge gaps. This
                    project sought to understand those gaps and develop
                    religiously tailored, peer-led group workshops delivered in
                    mosques.
                  </p>
                  <p className={styles.leadText}>
                    The workshops addressed both biomedical and religious
                    dimensions of living organ donation and end-of-life care,
                    supporting informed, ethically considered decisions.
                  </p>
                </div>

                <div className="col-md-5">
                  <div className={styles.overviewMediaWrap}>
                    <img
                      src={asset(
                        "/images/living-organ-donation/organ-overview-doctor.jpg"
                      )}
                      alt="Doctor holding phone and reviewing clinical materials"
                      className={styles.overviewImage}
                      loading="lazy"
                    />
                    <span className={styles.overviewCaptionBar}>
                      COMMUNITY-ENGAGED HEALTH EDUCATION
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 02 — PROJECT AIMS */}
            <article id="aims" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Project Aims</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The project developed educational workshops intended to help
                Muslim communities make informed decisions through balanced
                religious and biomedical education.
              </p>

              <div className="row g-3">
                {PROJECT_AIMS.map((aim) => (
                  <div key={aim.num} className="col-md-4">
                    <div className={styles.aimCard}>
                      <div className={styles.aimBadge}>{aim.num}</div>
                      <h3 className={styles.aimTitle}>{aim.title}</h3>
                      <p className={styles.aimText}>{aim.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 03 — WHY ORGAN DONATION? (CONTEXT) */}
            <article id="context" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Why Organ Donation?</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The shortage of life-saving organs has important consequences
                for people waiting for transplants. Matching needs can be
                especially challenging for ethnic and racial minority populations
                that have lower rates of donation.
              </p>
              <p className={styles.leadText}>
                The original project presents a 2017 ethnic breakdown of organ
                donors and waiting-list recipients, alongside a caution:
                available organ-donation datasets did not identify Muslims as a
                distinct group, and South Asians and Arabs were not separately
                reported in the cited analysis.
              </p>

              <div className={styles.quoteBox}>
                <span className={styles.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                <p className={styles.quoteText}>
                  Addressing religious and biomedical questions together can
                  help communities engage in informed decision-making.
                </p>
              </div>

              <a
                href="https://www.islamandmedicine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                VIEW NATIONAL TRANSPLANT DATA{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </article>

            {/* SECTION 04 — AMERICAN MUSLIM ATTITUDES */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>American Muslim Attitudes</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                Community surveys in Michigan and Chicago explored Muslim
                perspectives on donation. The original study highlights less
                positive attitudes toward donation than those observed in the
                general U.S. population, and identifies religious and
                biomedical knowledge gaps as possible contributors.
              </p>

              <div className="row g-3">
                {ATTITUDES.map((att) => (
                  <div key={att.num} className="col-12">
                    <div className={styles.attitudeCard}>
                      <div className={styles.attitudeHeader}>
                        <span className={styles.attitudeNum}>{att.num}</span>
                        <h3 className={styles.attitudeTitle}>{att.title}</h3>
                      </div>
                      <p className={styles.attitudeText}>{att.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.islamandmedicine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineTextLink}
              >
                View original community survey charts and findings{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </article>

            {/* SECTION 05 — THE MOSQUE-BASED EDUCATION MODEL */}
            <article id="approach" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>
                  The Mosque-Based Education Model
                </h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The project designed and evaluated religiously tailored,
                peer-led group education workshops conducted in mosque settings.
                Participants could engage both biomedical information and
                differing Islamic legal-ethical opinions about living organ
                donation.
              </p>

              <div className={styles.processBox}>
                <div className="row g-0">
                  {PROCESS_STEPS.map((step) => (
                    <div key={step.num} className="col-md-3">
                      <div className={styles.processStep}>
                        <div className={styles.processCircle}>{step.num}</div>
                        <h4 className={styles.processTitle}>{step.title}</h4>
                        <p className={styles.processDesc}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* SECTION 06 — WHY END-OF-LIFE CARE? */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Why End-of-Life Care?</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                Views on living organ donation and end-of-life care are shaped
                by interconnected medical and religious questions. The project
                therefore addressed both topics in its educational intervention,
                rather than treating donation decisions as solely clinical or
                solely theological.
              </p>
            </article>

            {/* SECTION 07 — ACADEMIC PAPERS */}
            <article id="publications" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Academic Papers</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                All eleven academic papers listed on the original project page
                are retained below. Open the source project page to access each
                publication&apos;s original external link.
              </p>

              <div>
                {ACADEMIC_PAPERS.map((paper) => (
                  <div key={paper.num} className={styles.numberedRow}>
                    <div className={styles.rowNumber}>{paper.num}</div>
                    <div className={styles.rowBody}>
                      <span className={styles.rowBadge}>RESEARCH PAPER</span>
                      <h3 className={styles.rowTitle}>{paper.title}</h3>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        VIEW ON ORIGINAL PROJECT PAGE{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 08 — OP-EDS */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Op-Eds</h2>
                <div className={styles.accentBar} />
              </div>

              <div>
                {OP_EDS.map((item) => (
                  <div key={item.num} className={styles.numberedRow}>
                    <div className={styles.rowNumber}>{item.num}</div>
                    <div className={styles.rowBody}>
                      <span className={styles.rowBadge}>
                        COMMENTARY / OP-ED
                      </span>
                      <h3 className={styles.rowTitle}>{item.title}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        VIEW ON ORIGINAL PROJECT PAGE{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 09 — POWERPOINT PRESENTATIONS */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>
                  PowerPoint Presentations
                </h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                Three PowerPoint resources are listed by II&amp;M for public
                use. Download them from the original page using their individual
                resource links.
              </p>

              <div>
                {PPT_PRESENTATIONS.map((item) => (
                  <div key={item.num} className={styles.numberedRow}>
                    <div className={styles.rowNumber}>{item.num}</div>
                    <div className={styles.rowBody}>
                      <span className={styles.rowBadge}>
                        POWERPOINT / PUBLIC RESOURCE
                      </span>
                      <h3 className={styles.rowTitle}>{item.title}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        VIEW ON ORIGINAL PROJECT PAGE{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 10 — CONFERENCE PRESENTATIONS */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>
                  Conference Presentations
                </h2>
                <div className={styles.accentBar} />
              </div>

              <div>
                {CONF_PRESENTATIONS.map((item) => (
                  <div key={item.num} className={styles.numberedRow}>
                    <div className={styles.rowNumber}>{item.num}</div>
                    <div className={styles.rowBody}>
                      <span className={styles.rowBadge}>
                        CONFERENCE / PRESENTATION
                      </span>
                      <h3 className={styles.rowTitle}>{item.title}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        VIEW ON ORIGINAL PROJECT PAGE{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 11 — DISSEMINATION PRODUCTS */}
            <article id="resources" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Dissemination Products</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The following downloadable educational materials are provided
                on the original II&amp;M project page. Their original assets and
                links should be connected during site integration.
              </p>

              <div className="row g-3">
                {DISSEMINATION_PRODUCTS.map((prod) => (
                  <div key={prod.idx} className="col-md-6">
                    <div className={styles.disseminationCard}>
                      <div className={styles.bookletWrap}>
                        <div className={styles.bookletMockup}>
                          <div>
                            <span className={styles.bookletIndex}>
                              {prod.idx}
                            </span>
                            <h4 className={styles.bookletHeading}>
                              {prod.heading}
                            </h4>
                          </div>
                          <span className={styles.bookletTag}>
                            EDUCATIONAL MATERIAL
                          </span>
                        </div>
                      </div>
                      <div className={styles.disseminationBody}>
                        <h4 className={styles.disseminationTitle}>
                          {prod.title}
                        </h4>
                        <a
                          href={prod.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.disseminationLink}
                        >
                          VIEW RESOURCE ON ORIGINAL PAGE{" "}
                          <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* SECTION 12 — ISLAMIC BIOETHICAL DISCOURSE */}
            <article id="media" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>
                  Introduction to Islamic Bioethical Discourse
                </h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The original project page includes the following speakers and
                discussion topics. Access embedded media through the original
                project page.
              </p>

              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <ul className={styles.discourseList}>
                    {DISCOURSE_COL1.map((item, i) => (
                      <li key={i} className={styles.discourseItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className={styles.discourseList}>
                    {DISCOURSE_COL2.map((item, i) => (
                      <li key={i} className={styles.discourseItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://www.islamandmedicine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                EXPLORE ORIGINAL MEDIA{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </article>

            {/* SECTION 13 — COMMUNITY GALLERY */}
            <article className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Community Gallery</h2>
                <div className={styles.accentBar} />
              </div>

              <div className="row g-3">
                {GALLERY_CARDS.map((card, i) => (
                  <div key={i} className="col-md-4">
                    <div className={styles.galleryCard}>
                      <h4 className={styles.galleryLocation}>{card.location}</h4>
                      <p className={styles.gallerySpeaker}>{card.speaker}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className={styles.galleryCaption}>
                Photo captions reflect original project gallery. Image thumbnails
                should be replaced with the project&apos;s approved photographs.
              </p>

              <a
                href="https://www.islamandmedicine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                OPEN FULL GALLERY{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </article>

            {/* SECTION 14 — PROJECT TEAM & SUPPORT */}
            <article id="support" className={styles.sectionBlock}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Project Team &amp; Support</h2>
                <div className={styles.accentBar} />
              </div>

              <p className={styles.leadText}>
                The original page includes a project team section and
                acknowledges the following supporters. No unverified positions
                or affiliations have been assigned.
              </p>

              <h3 className={styles.supportSubtitle}>Acknowledged Supporters</h3>

              <div className={styles.supportTable}>
                {SUPPORTERS.map((row, rIdx) => (
                  <div key={rIdx} className={styles.supportRow}>
                    {row.map((name, cIdx) => (
                      <div key={cIdx} className={styles.supportCell}>
                        {name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </main>

          {/* RIGHT COLUMN: SIDEBAR (col-lg-4) */}
          <aside className="col-lg-4">
            <div className={styles.sidebarSticky}>
              {/* Card 1: Project Objectives */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardHead}>Project Objectives</h3>
                <div className={styles.sidebarObjList}>
                  {SIDEBAR_OBJECTIVES.map((obj, i) => (
                    <div key={i} className={styles.sidebarObjItem}>
                      <span className={styles.sidebarObjNum}>0{i + 1}</span>
                      <p className={styles.sidebarObjText}>{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Project at a Glance */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardHead}>Project at a Glance</h3>
                <div className={styles.glanceList}>
                  {SIDEBAR_GLANCE.map((item, i) => (
                    <div key={i} className={styles.glanceItem}>
                      <span className={styles.glanceIcon}>
                        <i className={`fa-solid ${item.icon}`} />
                      </span>
                      <div>
                        <p className={styles.glanceLabel}>{item.label}</p>
                        <p className={styles.glanceValue}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Research Library */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardHead}>Research Library</h3>
                <ul className={styles.libraryList}>
                  {SIDEBAR_LIBRARY.map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className={styles.libraryLink}>
                        {item.label}{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4: Featured Resources */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarCardHead}>Featured Resources</h3>
                <ul className={styles.resourceList}>
                  {SIDEBAR_RESOURCES.map((res, i) => (
                    <li key={i} className={styles.resourceItem}>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 5: Collaborate with II&M */}
              <div className={styles.collaborateCard}>
                <span className={styles.collabEyebrow}>
                  COMMUNITY-ENGAGED RESEARCH
                </span>
                <h3 className={styles.collabTitle}>Collaborate with II&amp;M</h3>
                <p className={styles.collabText}>
                  Connect with our team to support scholarship and
                  faith-sensitive healthcare education.
                </p>
                <Link href="/contact" className={styles.btnCollab}>
                  GET IN TOUCH{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FINAL CALL TO ACTION (CTA) BANNER */}
      <section className={styles.ctaSection} aria-label="Call to action">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-5">
              <div className={styles.ctaMosqueWrap}>
                <img
                  src={asset("/images/donation/cta-mosque.jpg")}
                  alt="Historic mosque dome and minarets against golden sunset"
                  className={styles.ctaMosqueImg}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className={styles.ctaContentWrap}>
                <span className={styles.ctaEyebrow}>
                  ADVANCING KNOWLEDGE TOGETHER
                </span>
                <h2 className={styles.ctaHeading}>
                  Building understanding for better healthcare decisions.
                </h2>
                <p className={styles.ctaDesc}>
                  Explore the research, use educational resources, and connect
                  with II&amp;M to support community-informed health education.
                </p>
                <div className={styles.ctaBtnGroup}>
                  <Link href="/contact" className={styles.ctaBtnCrimson}>
                    GET IN TOUCH{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </Link>
                  <a href="#overview" className={styles.ctaBtnOutline}>
                    EXPLORE RESEARCH{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
