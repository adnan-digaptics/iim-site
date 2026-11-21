import { asset } from "../../lib/asset";
import Link from "next/link";
import MammographyNav from "./MammographyNav";

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
    href: "https://www.academia.edu/6983361/Associations_Between_Religion_Related_Factors_and_Breast_Cancer_Screening_Among_American_Muslims",
  },
  {
    num: "02",
    title:
      'Developing religiously-tailored health messages for behavioral change: Introducing the reframe, reprioritize, and reform ("3R") model',
    href: "https://www.academia.edu/76591873/Developing_religiously_tailored_health_messages_for_behavioral_change_Introducing_the_reframe_reprioritize_and_reform_3R_model",
  },
  {
    num: "03",
    title:
      "Changing Mammography-Related Beliefs Among American Muslim Women: Findings from a Religiously-Tailored Mosque-Based Intervention",
    href: "https://www.academia.edu/45141136/Changing_Mammography_Related_Beliefs_Among_American_Muslim_Women_Findings_from_a_Religiously_Tailored_Mosque_Based_Intervention",
  },
  {
    num: "04",
    title:
      "Reducing Muslim Mammography Disparities: Outcomes From a Religiously Tailored Mosque-Based Intervention",
    href: "https://www.academia.edu/36507539/Reducing_Muslim_Mammography_Disparities_Outcomes_From_a_Religiously_Tailored_Mosque_Based_Interv",
  },
  {
    num: "05",
    title:
      "Religious beliefs and mammography intention: findings from a qualitative study of a diverse group of American Muslim women",
    href: "https://www.academia.edu/27569477/Religious_Beliefs_and_Mammography_Intention_Findings_from_a_Qualitative_Study_of_a_Diverse_Group_of_American_Muslim_Women",
  },
  {
    num: "06",
    title:
      "Muslim women's perspectives on designing mosque-based women's health intervention—An exploratory qualitative study",
    href: "https://www.academia.edu/33380405/Muslim_Womens_Perspectives_on_Designing_Mosque_Based_Womens_Health_Interventions_An_Exploratory_Qualitative_Study",
  },
  {
    num: "07",
    title:
      "Acceptability of Friday Sermons as a Modality for Health Promotion and Education",
    href: "https://www.academia.edu/34294305/Acceptability_of_Friday_Sermons_as_a_Modality_for_Health_Promotion_and_Education",
  },
  {
    num: "08",
    title:
      "Adapting a religious health fatalism measure for use in Muslim populations",
    href: "https://www.academia.edu/55389047/Adapting_a_religious_health_fatalism_measure_for_use_in_Muslim_populations",
  },
  {
    num: "09",
    title:
      "The Development and Validation of a Modesty Measure for Diverse Muslim Populations",
    href: "https://www.academia.edu/45142996/The_Development_and_Validation_of_a_Modesty_Measure_for_Diverse_Muslim_Populations",
  },
  {
    num: "10",
    title:
      "Predictors of Delayed Healthcare Seeking Among American Muslim Women",
    href: "https://www.academia.edu/88187244/Predictors_of_Delayed_Healthcare_Seeking_Among_American_Muslim_Women",
  },
  {
    num: "11",
    title:
      "Associations between religion-related factors and cervical cancer screening among Muslims in greater Chicago",
    href: "https://www.academia.edu/7734915/Associations_Between_Religion_Related_Factors_and_Cervical_Cancer_Screening_Among_Muslims_in_Greater_Chicago",
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
  { title: "Reducing Muslim mammography disparities: Outcomes from a religiously tailored mosque-based intervention", href: "https://medicineandislam.org/wp-content/uploads/2024/11/AACR-2017-Outcomes.pdf" },
  { title: "Outcomes from a Religiously Tailored Intervention to Enhance Mammography Uptake among American Muslims", href: "https://medicineandislam.org/wp-content/uploads/2024/11/AACR-2018.pdf" },
  { title: "A Religiously Tailored Intervention to Enhance Mammography Uptake among American Muslims—Design Elements, Feasibility & Outcomes", href: "https://medicineandislam.org/wp-content/uploads/2024/11/Modesty-Poster-Final.pdf" },
];

const POSTERS_COL2 = [
  { title: "Development and Validation of a Modesty Measure for Diverse Muslim Populations", href: "https://medicineandislam.org/wp-content/uploads/2024/11/Modesty-Poster-Final.pdf" },
  { title: "Reducing Disparities in Mammography Screening among American Muslim Women through a religiously-tailored mosque-based intervention", href: "https://medicineandislam.org/wp-content/uploads/2024/11/SAA-CUGH-Poster-draft-.pdf" },
  { title: "Religion-Related Factors and Breast Cancer Screening among American Muslims", href: "https://medicineandislam.org/wp-content/uploads/2024/11/SABCS-2014-Poster.pdf" },
];

const CONFERENCES_COL1 = [
  { title: "Muslim Clinicians in the Medical Academy — Medical College of Wisconsin, 2022", href: "https://www.youtube.com/watch?v=BfXF6wQL40A" },
  { title: "Being Muslim in Academic Medicine — NIIMS, 2022", href: "https://m.facebook.com/NIIMS.org/videos/being-muslim-in-academic-medicine/1183676399093794/" },
];

const CONFERENCES_COL2 = [
  { title: "Accommodating Muslim Values in Healthcare — Medical College of Wisconsin, 2022", href: "https://muslimadvocates.org/files/2018.05.24-Ramadan-Workplace-KYR.pdf" },
];

const MEDIA_HIGHLIGHTS = [
  {
    outlet: "Newsweek",
    headline:
      "Muslim Women More Likely to Skip Breast Cancer Screening, But Mosques Can Help",
    href: "https://www.newsweek.com/breast-cancer-screening-mammography-muslim-women-670881",
  },
  {
    outlet: "American Association for Cancer Research",
    headline: "Encouraging Muslim Women to Get Mammograms",
    href: "https://www.aacr.org/patients-caregivers/progress-against-cancer/encouraging-muslim-women-get-mammograms-breast-cancer/",
  },
  {
    outlet: "ScienceDirect",
    headline: "Research Article — Journal of Immigrant and Minority Health",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0027968423000366?dgcid=coauthor",
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
    <div className="mammography-page mm-pageWrapper">
      {/* 01 HERO SECTION */}
      <header className="mm-hero">
        <div className="mm-heroBgWrapper">
          <img
            src={asset("/images/research/mammography-hero.jpg")}
            alt="Female healthcare provider and patient hands resting in consultation"
            className="mm-heroBgImg"
            loading="eager"
          />
          <div className="mm-heroGradientOverlay" />
        </div>

        <div className={`container mm-heroContainer`}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <p className="mm-heroEyebrow">
                RESEARCH PROJECT / WOMEN&apos;S HEALTH
              </p>
              <h1 className="mm-heroTitle">
                A Religiously-Tailored <br />
                <em>Mammography Intervention</em> <br />
                for American Muslims
              </h1>
              <p className="mm-heroLead">
                Understanding the influence of religion on breast cancer
                screening—and developing a community-engaged, mosque-based
                educational intervention for Muslim women in the United States.
              </p>

              <div className="mm-heroActions">
                <a href="#outcomes" className="mm-btnMaroon">
                  EXPLORE OUTCOMES <span className="ms-1">↓</span>
                </a>
                <a href="#publications" className="mm-btnOutline">
                  RESEARCH PUBLICATIONS <span className="ms-1">↗</span>
                </a>
              </div>

              <div className="mm-heroTags">
                {HERO_TAGS.map((tag) => (
                  <span key={tag} className="mm-heroTag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-5 col-xl-6 position-relative">
              <aside
                className="mm-heroQuotePanel"
                aria-label="Project quote"
              >
                <p className="mm-heroQuoteEyebrow">FAITH &amp; HEALTH EQUITY</p>
                <p className="mm-heroQuoteText">
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
      <section className="mm-mainSection">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* MAIN CONTENT COLUMN (~70%) */}
            <main className="col-lg-8">
              {/* SECTION 01 — OVERVIEW */}
              <article id="overview" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Overview</h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>
                <div className="row align-items-center g-3 g-md-4">
                  <div className="col-md-7">
                    <p className="mm-text">
                      Generally mistaken for a small homogenous group, American Muslims are many and diverse. Because of this diversity, and because national health care surveys and databases typically do not collect religious affiliation data, there is limited data on aggregate female American Muslim breast cancer incidence and outcomes. Despite this, there are reasons to believe disparities may exist. First, earlier work suggests that American Muslim women have lower mammography adherence than the national average. Second, there is evidence to suggest that religious beliefs and health care experiences related to Muslim identity may adversely impact screening behaviors among American Muslim women.
                    </p>
                    <p className={`mm-text mb-0`}>
                      To address this disparity, the Initiative on Islam and Medicine conducted a series of studies to understand the influence of religion-related factors on mammography adherence among American Muslim women, and to develop and test a mosque-based educational intervention to increase screening rates.
                    </p>
                  </div>
                  <div className="col-md-5">
                    <div className="mm-mediaWrapper">
                      <img
                        src={asset(
                          "/images/research/muslim-physicians-overview.jpg"
                        )}
                        alt="Physician in white coat with stethoscope holding a smartphone"
                        className="mm-editorialImg"
                        loading="lazy"
                      />
                      <span className="mm-mediaBadge">
                        COMMUNITY HEALTH RESEARCH
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 02 — BACKGROUND */}
              <article id="background" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Background</h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>

                <p className="mm-text">
                  Breast cancer screening can reduce breast cancer mortality.
                  The project&apos;s formative research identified how
                  faith-related beliefs and care experiences can influence
                  decisions about obtaining mammograms.
                </p>

                {/* Highlight Callout Stat Box */}
                <div className="mm-highlightStatBox">
                  <span className="mm-highlightStatNum">37%</span>
                  <p className="mm-highlightStatText">
                    of surveyed women in the Chicago-area sample (n=254) had not
                    received a mammogram during the preceding two years.
                  </p>
                </div>

                <h3 className="mm-subheading">
                  Factors explored in the research
                </h3>

                {/* Factors 2-column Grid */}
                <div className="row g-2 g-md-3 mb-4">
                  {BACKGROUND_FACTORS.map((factor) => (
                    <div
                      key={factor.num}
                      className={factor.num === "05" ? "col-md-6" : "col-md-6"}
                    >
                      <div className="mm-factorCard">
                        <div className="mm-factorHeader">
                          <span className="mm-factorNum">{factor.num}</span>
                          <h4 className="mm-factorTitle">{factor.title}</h4>
                        </div>
                        <p className="mm-factorText">{factor.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sub-section: A Religiously-Tailored Approach */}
                <div className="mt-4 pt-2">
                  <div className="mm-sectionHead">
                    <div className="mm-sectionHeadLeft">
                      <h3 className="mm-sectionTitle">
                        A Religiously-Tailored Approach
                      </h3>
                      <div className="mm-accentBar" />
                    </div>
                  </div>

                  <p className="mm-leadText">
                    Findings from formative research informed faith-sensitive,
                    culturally responsive breast cancer education delivered
                    through peer-led group workshops in mosque communities.
                  </p>

                  <div className="row g-3">
                    {APPROACH_PILLARS.map((pillar) => (
                      <div key={pillar.badge} className="col-md-4">
                        <div className="mm-pillarCard">
                          <div className="mm-circleBadge">
                            {pillar.badge}
                          </div>
                          <h4 className="mm-pillarTitle">{pillar.title}</h4>
                          <p className="mm-pillarText">{pillar.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* SECTION 03 — METHODOLOGY */}
              <article id="methodology" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Methodology</h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>

                <p className="mm-leadText">
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
                      <div className="mm-stepCard">
                        <div className="mm-circleBadge">{step.badge}</div>
                        <h4 className="mm-stepTitle">{step.title}</h4>
                        <p className="mm-stepText">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Callout Banner */}
                <div className="mm-quoteBanner">
                  <span className="mm-quoteMark" aria-hidden="true">
                    “
                  </span>
                  <p className="mm-quoteBannerText">
                    Research and community partnerships informing faith-consistent
                    preventive healthcare.
                  </p>
                </div>
              </article>

              {/* SECTION 04 — KEY OUTCOMES */}
              <article id="outcomes" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Key Outcomes</h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>

                <p className="mm-leadText">
                  The published project summary reports increased breast cancer
                  and mammography knowledge and improved stated likelihood of
                  screening following the intervention.
                </p>

                <div className={`row g-2 g-md-3 mm-outcomesRow`}>
                  {KEY_OUTCOMES.map((stat) => (
                    <div key={stat.num} className="col-sm-4">
                      <div className="mm-outcomeCard">
                        <span className="mm-outcomeNum">{stat.num}</span>
                        <p className="mm-outcomeLabel">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mm-outcomesFootnote">
                  Of the 58 participants, 29 had never obtained a mammogram and
                  29 had not received one within the previous two years. These
                  figures refer to the study cohort, not to all American Muslim
                  women.
                </p>
              </article>

              {/* SECTION 05 — PUBLICATIONS & PRESENTATIONS */}
              <article id="publications" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Publications</h2>
                    <div className="mm-accentBar" />
                  </div>
                  <span className="mm-counterTag">11 RESEARCH PAPERS</span>
                </div>

                <div className="mm-papersList">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.num} className={pub.num === "11" ? "mm-paperItem" : "mm-paperItem"}>
                      <span className="mm-paperNum">{pub.num}</span>
                      <div className="mm-paperContent">
                        <div className="mm-paperTag">
                          RESEARCH PUBLICATION
                        </div>
                        <h4 className="mm-paperTitle">{pub.title}</h4>
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mm-paperLink"
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
                  <div className="mm-sectionHead">
                    <div className="mm-sectionHeadLeft">
                      <h3 className="mm-sectionTitle">Presentations</h3>
                      <div className="mm-accentBar" />
                    </div>
                  </div>

                  <p className="mm-leadText">
                    Full list of presentations documented on the original project
                    page.
                  </p>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <ul className="mm-presentationList">
                        {PRESENTATIONS_COL1.map((item, idx) => (
                          <li key={idx} className="mm-presentationItem">
                            <span className="mm-presentationNum">
                              {idx + 1}.
                            </span>
                            <a href="https://www.medicineandislam.org/mammography" target="_blank" rel="noopener noreferrer" className="mm-presentationLink">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="mm-presentationList">
                        {PRESENTATIONS_COL2.map((item, idx) => (
                          <li key={idx} className="mm-presentationItem">
                            <span className="mm-presentationNum">
                              {idx + 10}.
                            </span>
                            <a href="https://www.medicineandislam.org/mammography" target="_blank" rel="noopener noreferrer" className="mm-presentationLink">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Posters */}
                <div className="mt-5 pt-2">
                  <div className="mm-sectionHead">
                    <div className="mm-sectionHeadLeft">
                      <h3 className="mm-sectionTitle">Posters</h3>
                      <div className="mm-accentBar" />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {POSTERS_COL1.map((item, idx) => (
                          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="mm-posterCard d-block text-decoration-none">
                            <div className="mm-posterHeader">
                              <span className="mm-posterNum">{idx + 1}.</span>
                              <p className="mm-posterText">{item.title}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {POSTERS_COL2.map((item, idx) => (
                          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="mm-posterCard d-block text-decoration-none">
                            <div className="mm-posterHeader">
                              <span className="mm-posterNum">{idx + 4}.</span>
                              <p className="mm-posterText">{item.title}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Community Conferences */}
                <div className="mt-5 pt-2">
                  <div className="mm-sectionHead">
                    <div className="mm-sectionHeadLeft">
                      <h3 className="mm-sectionTitle">
                        Community Conferences
                      </h3>
                      <div className="mm-accentBar" />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {CONFERENCES_COL1.map((item, idx) => (
                          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="mm-conferenceCard d-block text-decoration-none">
                            <p className="mm-conferenceText">
                              <strong>{idx + 1}.</strong> {item.title}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        {CONFERENCES_COL2.map((item, idx) => (
                          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="mm-conferenceCard d-block text-decoration-none">
                            <p className="mm-conferenceText">
                              <strong>{idx + 3}.</strong> {item.title}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-section: Media Highlights */}
                <div className="mt-5 pt-2">
                  <div className="mm-sectionHead">
                    <div className="mm-sectionHeadLeft">
                      <h3 className="mm-sectionTitle">Media Highlights</h3>
                      <div className="mm-accentBar" />
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
                          className="mm-mediaCard"
                        >
                          <h4 className="mm-mediaOutlet">{item.outlet}</h4>
                          <p className="mm-mediaHeadline">
                            {item.headline} <span className="ms-1">↗</span>
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* SECTION 06 — DISSEMINATION PRODUCTS & TOOLKITS */}
              <article id="resources" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">
                      Dissemination Products &amp; Toolkits
                    </h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>

                <p className="mm-leadText">
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
                        className={`mm-toolkitCard d-block text-decoration-none`}
                      >
                        <h4 className="mm-toolkitTitle">{item.title}</h4>
                        <p className="mm-toolkitDesc">
                          {item.desc} <span className="ms-1">↗</span>
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </article>

              {/* SECTION 07 — MEET THE PROJECT TEAM */}
              <article id="team" className="mm-sectionBlock">
                <div className="mm-sectionHead">
                  <div className="mm-sectionHeadLeft">
                    <h2 className="mm-sectionTitle">Meet the Project Team</h2>
                    <div className="mm-accentBar" />
                  </div>
                </div>

                <div className="row g-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="col-md-6">
                      <div className="mm-teamCard">
                        <div className="mm-teamBadge" aria-hidden="true">
                          {member.initials}
                        </div>
                        <div>
                          <h4 className="mm-teamName">{member.name}</h4>
                          <p className="mm-teamRole">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </main>

            {/* RIGHT SIDEBAR COLUMN (~30%) */}
            <aside className={`col-lg-4 mm-sidebarColumn`}>
              {/* SIDEBAR CARD 01: Project Objectives */}
              <div className="mm-sidebarCard">
                <h3 className="mm-sidebarTitle">Project Objectives</h3>
                <div className="mm-accentBar" />
                <ul className="mm-objectivesList">
                  {OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className="mm-objectiveItem">
                      <span className="mm-objectiveNum">
                        0{idx + 1}
                      </span>
                      <p className="mm-objectiveText">{obj}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SIDEBAR CARD 02: Project at a Glance */}
              <div className="mm-sidebarCard">
                <h3 className="mm-sidebarTitle">Project at a Glance</h3>
                <div className="mm-accentBar" />
                <dl className="mm-glanceList">
                  <div className="mm-glanceItem">
                    <dt className="mm-glanceDt">
                      <span className="mm-bullet" aria-hidden="true" />
                      Focus
                    </dt>
                    <dd className="mm-glanceDd">
                      Breast cancer and mammography
                    </dd>
                  </div>
                  <div className="mm-glanceItem">
                    <dt className="mm-glanceDt">
                      <span className="mm-bullet" aria-hidden="true" />
                      Audience
                    </dt>
                    <dd className="mm-glanceDd">
                      American Muslim women
                    </dd>
                  </div>
                  <div className="mm-glanceItem">
                    <dt className="mm-glanceDt">
                      <span className="mm-bullet" aria-hidden="true" />
                      Research setting
                    </dt>
                    <dd className="mm-glanceDd">
                      Chicago-area formative research and mosque communities
                    </dd>
                  </div>
                  <div className="mm-glanceItem">
                    <dt className="mm-glanceDt">
                      <span className="mm-bullet" aria-hidden="true" />
                      Approach
                    </dt>
                    <dd className="mm-glanceDd">
                      Religiously tailored peer education
                    </dd>
                  </div>
                </dl>
              </div>

              {/* SIDEBAR CARD 03: Research Findings */}
              <div className="mm-sidebarCard">
                <h3 className="mm-sidebarTitle">Research Findings</h3>
                <div className="mm-accentBar" />
                <div className="mm-sidebarStatItem">
                  <span className="mm-sidebarStatNum">37%</span>
                  <p className="mm-sidebarStatLabel">
                    No mammogram in previous two years in surveyed Chicago sample
                  </p>
                </div>
                <div className="mm-sidebarStatItem">
                  <span className="mm-sidebarStatNum">58</span>
                  <p className="mm-sidebarStatLabel">
                    Workshop participants
                  </p>
                </div>
                <div className="mm-sidebarStatItem">
                  <span className="mm-sidebarStatNum">38%</span>
                  <p className="mm-sidebarStatLabel">
                    Obtained mammography within one year
                  </p>
                </div>
              </div>

              {/* SIDEBAR CARD 04: Explore Research */}
              <div className="mm-sidebarCard">
                <h3 className="mm-sidebarTitle">Explore Research</h3>
                <div className="mm-accentBar" />
                <ul className="mm-exploreList">
                  <li>
                    <a href="#publications" className="mm-exploreLink">
                      <span>11 publications</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className="mm-exploreLink">
                      <span>18 presentations</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className="mm-exploreLink">
                      <span>6 posters</span>
                      <span>↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="mm-exploreLink">
                      <span>Project team</span>
                      <span>↗</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR CARD 05: Support Meaningful Research (Solid Burgundy) */}
              <div className={`mm-sidebarCard mm-cardBurgundy`}>
                <p className="mm-heroQuoteEyebrow">STAY CONNECTED</p>
                <h3 className="text-white fs-5 fw-bold mb-2">
                  Support meaningful research
                </h3>
                <div className="bg-white opacity-75 mb-3" style={{ height: 2, width: 28 }} />
                <p className={`mm-textLight small mb-3`}>
                  Partner with II&amp;M to advance culturally informed, equitable
                  care.
                </p>
                <Link href="/consultation" className="mm-btnWhiteOutline">
                  GET IN TOUCH <span className="ms-1">↗</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 04 BOTTOM CALL TO ACTION BANNER */}
      <section className="mm-bottomCta">
        <div className="mm-bottomCtaBg">
          <img
            src={asset("/images/our-impact/cta-mosque.jpg")}
            alt="Mosque dome and minarets against twilight sky"
            className="mm-bottomCtaImg"
            loading="lazy"
          />
          <div className="mm-bottomCtaOverlay" />
        </div>
        <div className={`container mm-bottomCtaContainer`}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <p className="mm-ctaEyebrow">ADVANCING KNOWLEDGE TOGETHER</p>
              <h2 className="mm-ctaHeading">
                Research that connects faith, <br className="d-none d-md-inline" />
                community and better healthcare.
              </h2>
              <p className="mm-ctaSubtext">
                Explore more II&amp;M projects and work with us to translate
                evidence into education, clinical care, and community impact.
              </p>
              <div className="mm-ctaActions">
                <Link href="/consultation" className={`mm-btnMaroon mm-btnCta`}>
                  GET IN TOUCH <span className="ms-1">↗</span>
                </Link>
                <Link href="/consultation" className={`mm-btnWhiteOutline mm-btnCta`}>
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
