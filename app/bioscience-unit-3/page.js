import Link from "next/link";
import CurriculumSidebar from "./CurriculumSidebar";

export const metadata = {
  title: "Unit 3: What Does It Mean to Be a Human Being? | Exploring Bioscience & Islam",
  description:
    "Unit 3 explores neuroscience, consciousness, artificial intelligence, personhood, and the soul through scientific perspectives and Islamic thought.",
  keywords: [
    "Exploring Bioscience and Islam",
    "Unit 3 Curriculum",
    "What Does It Mean to Be a Human Being",
    "Neuroscience and Soul",
    "Islamic Bioethics",
    "Physicalism and Consciousness",
    "Mary's Room Thought Experiment",
    "Nafs and Ruh",
  ],
};

export default function BioscienceUnit3Page() {
  return (
    <div className="bu3-pageWrapper">
      {/* ====================================================================
          1. PAGE HEADER / HERO INTRODUCTION
          ==================================================================== */}
      <section className="bu3-heroIntroSection" aria-label="Unit Introduction">
        <div className="container">
          <div className="bu3-heroIntroRow">
            <div className="bu3-heroIntroContent">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="bu3-breadcrumb">
                <Link href="/">Home</Link>
                <span className="bu3-breadcrumbSep" aria-hidden="true">/</span>
                <Link href="/education">Education</Link>
                <span className="bu3-breadcrumbSep" aria-hidden="true">/</span>
                <Link href="/exploring-bioscience">Exploring Bioscience &amp; Islam</Link>
                <span className="bu3-breadcrumbSep" aria-hidden="true">/</span>
                <span className="bu3-breadcrumbCurrent">Unit 3</span>
              </nav>

              <span className="bu3-heroEyebrow">
                EXPLORING BIOSCIENCE &amp; ISLAM • CURRICULUM RESOURCES
              </span>
              <h1 className="bu3-heroHeading">
                What Does It Mean to Be a <br className="d-none d-md-inline" />Human Being?
              </h1>
              <p className="bu3-heroLead">
                Unit 3 explores neuroscience, consciousness, artificial intelligence, personhood,
                and the soul through scientific perspectives and Islamic thought.
              </p>
            </div>

            {/* Geometric Decorative Star Accent */}
            <div className="bu3-heroDecorStar" aria-hidden="true">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50 0 L53 35 L85 15 L65 47 L100 50 L65 53 L85 85 L53 65 L50 100 L47 65 L15 85 L35 53 L0 50 L35 47 L15 15 L47 35 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN DASHBOARD CONTENT (Two-Column Layout)
          ==================================================================== */}
      <div className="container">
        <div className="bu3-mainDashboardSection">
          <div className="bu3-dashboardGrid">
            {/* Left Column: Curriculum Sidebar */}
            <CurriculumSidebar />

            {/* Right Column: Main Unit Content */}
            <main className="bu3-mainContentCol" id="unit-content">
              {/* -------------------------------------------------------------
                  A. Unit Overview Banner Card
                  ------------------------------------------------------------- */}
              <div className="bu3-unitBannerCard">
                <div className="bu3-unitBanner">
                  <div className="bu3-unitBannerEyebrow">
                    UNIT 3 • INTERDISCIPLINARY BIOETHICS
                  </div>
                  <h2 className="bu3-unitBannerTitle">
                    What Does It Mean to Be a Human Being?
                  </h2>
                  <div className="bu3-unitBannerSubtitle">
                    Neuroscience, Artificial Intelligence, and the Soul (Nafs &amp; Ruh)
                  </div>

                  <div className="bu3-essentialInquiryBox">
                    <div className="bu3-essentialInquiryLabel">
                      ESSENTIAL INQUIRY QUESTION
                    </div>
                    <blockquote className="bu3-essentialInquiryQuote">
                      &ldquo;Does advancing understanding of the human brain, emergence, or deep learning disprove
                      belief in an irreducibly spiritual dimension to human consciousness?&rdquo;
                    </blockquote>
                  </div>
                </div>

                {/* Unit Metrics Strip */}
                <div className="bu3-metricsStrip">
                  <div className="bu3-metricCol">
                    <div className="bu3-metricNumber">03</div>
                    <div className="bu3-metricLabel">CORE LESSONS</div>
                  </div>
                  <div className="bu3-metricCol">
                    <div className="bu3-metricNumber">08</div>
                    <div className="bu3-metricLabel">MEDIA RESOURCES</div>
                  </div>
                  <div className="bu3-metricCol">
                    <div className="bu3-metricNumber">04</div>
                    <div className="bu3-metricLabel">ASSESSMENTS</div>
                  </div>
                  <div className="bu3-metricCol">
                    <div className="bu3-metricNumber">Dual-Key</div>
                    <div className="bu3-metricLabel">INSTRUCTOR • STUDENT</div>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  B. Start Here — Introduction & Foundation Lecture
                  ------------------------------------------------------------- */}
              <section id="start-here" className="bu3-sectionBlock" aria-label="Start Here">
                <div className="bu3-sectionHeaderRow">
                  <div className="bu3-sectionHeaderLeft">
                    <span className="bu3-sectionEyebrow">START HERE</span>
                    <h3 className="bu3-sectionHeading">
                      Introduction &amp; Foundation Lecture
                    </h3>
                    <p className="bu3-sectionSubtitle">
                      Core presentation slides and foundational lecture materials.
                    </p>
                  </div>
                  <div className="bu3-sectionHeaderRight">
                    <span className="bu3-tagPill">MASTERCLASS SECTION</span>
                  </div>
                </div>

                <div className="bu3-twoCardsGrid">
                  {/* Card 1: Presentation */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerCreamNumber`}>
                      <span className="bu3-cardBadgePill">SLIDE DECK</span>
                      <span className="bu3-largeNumber">03</span>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">PRESENTATION</span>
                      <h4 className="bu3-cardTitle">Essence of Human Nature</h4>
                      <p className="bu3-cardDesc">
                        Unit 3 introductory slide deck exploring the central questions of the unit.
                      </p>
                      <Link href="/courses" className="bu3-cardBtnBurgundy">
                        FIND SLIDES ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Recorded Lecture */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerDarkVideo`}>
                      <span className="bu3-playCircleBtn" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">RECORDED LECTURE</span>
                      <h4 className="bu3-cardTitle">
                        Instructional Video: Live Expert Session
                      </h4>
                      <p className="bu3-cardDesc">
                        Expert-led foundational discussion on the human being and consciousness.
                      </p>
                      <Link href="/podcast" className="bu3-cardBtnBurgundy">
                        VIEW VIDEO RESOURCES ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* -------------------------------------------------------------
                  C. Lesson 3.1 — Islamic Concept of the Soul
                  ------------------------------------------------------------- */}
              <section id="lesson-3-1" className="bu3-sectionBlock" aria-label="Lesson 3.1">
                <div className="bu3-sectionHeaderRow">
                  <div className="bu3-sectionHeaderLeft">
                    <span className="bu3-sectionEyebrow">LESSON 3.1</span>
                    <h3 className="bu3-sectionHeading">
                      Islamic Concept of the Soul and Neuroscience Reductionism
                    </h3>
                    <p className="bu3-sectionSubtitle">
                      Contrasting modern physicalist reductionism with classical Islamic conceptions
                      of Nafs, Ruh, and emergent mental states.
                    </p>
                    <Link href="/exploring-bioscience#curriculum-units" className="bu3-btnLessonMaterials">
                      LESSON MATERIALS ↗
                    </Link>
                  </div>
                </div>

                {/* Core Learning Objectives Panel */}
                <div className="bu3-objectivesPanel">
                  <div className="bu3-objectivesLabel">CORE LEARNING OBJECTIVES</div>
                  <ul className="bu3-objectivesGrid">
                    <li className="bu3-objectivePoint">
                      Distinguish between substance dualism and materialist approaches to the soul and body.
                    </li>
                    <li className="bu3-objectivePoint">
                      Evaluate whether empirical data can conclusively settle claims about immaterial existence.
                    </li>
                  </ul>
                </div>

                {/* Subheader: Curriculum Materials & Assessments */}
                <div className="bu3-subSectionHeading">
                  <span className="bu3-subSectionIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </span>
                  <span>Curriculum Materials &amp; Assessments</span>
                </div>

                {/* 3 Resource Cards */}
                <div className="bu3-threeCardsGrid">
                  {/* Card 1: Reading */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerCreamIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <polygon points="12 2 22 12 12 22 2 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">READING</span>
                      <h4 className="bu3-cardTitle">Science and Epistemology</h4>
                      <p className="bu3-cardDesc">
                        Seminal paper examining epistemological frameworks in classical and modern thought.
                      </p>
                      <Link href="/resources" className="bu3-cardBtnBurgundy">
                        VIEW READING ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Teacher Key */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerBeigeIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">TEACHER KEY</span>
                      <h4 className="bu3-cardTitle">Unit 3: Lesson 1 Assessment</h4>
                      <p className="bu3-cardDesc">
                        Instructor answer key for grading and structured seminar discussion.
                      </p>
                      <Link href="/educate" className="bu3-cardBtnBurgundy">
                        INSTRUCTOR RESOURCES ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Student Sheet */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerSlateIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="8" y1="6" x2="21" y2="6" />
                          <line x1="8" y1="12" x2="21" y2="12" />
                          <line x1="8" y1="18" x2="21" y2="18" />
                          <line x1="3" y1="6" x2="3.01" y2="6" />
                          <line x1="3" y1="12" x2="3.01" y2="12" />
                          <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">STUDENT SHEET</span>
                      <h4 className="bu3-cardTitle">Unit 3: Lesson 1 Assessment</h4>
                      <p className="bu3-cardDesc">
                        Classroom worksheet with analytical prompts and student reflection exercises.
                      </p>
                      <Link href="/courses" className="bu3-cardBtnBurgundy">
                        STUDENT RESOURCES ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* -------------------------------------------------------------
                  D. Lesson 3.2 — Physicalism, Modern Science, and Consciousness
                  ------------------------------------------------------------- */}
              <section id="lesson-3-2" className="bu3-sectionBlock" aria-label="Lesson 3.2">
                <div className="bu3-sectionHeaderRow">
                  <div className="bu3-sectionHeaderLeft">
                    <span className="bu3-sectionEyebrow">LESSON 3.2</span>
                    <h3 className="bu3-sectionHeading">
                      Physicalism, Modern Science, and Consciousness
                    </h3>
                    <p className="bu3-sectionSubtitle">
                      Investigating the &ldquo;Hard Problem of Consciousness,&rdquo; qualitative experience,
                      and the boundaries of physical measurement.
                    </p>
                    <Link href="/exploring-bioscience#curriculum-units" className="bu3-btnLessonMaterials">
                      LESSON MATERIALS ↗
                    </Link>
                  </div>
                </div>

                {/* Core Learning Objectives Panel */}
                <div className="bu3-objectivesPanel">
                  <div className="bu3-objectivesLabel">CORE LEARNING OBJECTIVES</div>
                  <ul className="bu3-objectivesGrid">
                    <li className="bu3-objectivePoint">
                      Examine Frank Jackson&apos;s Knowledge Argument (Mary&apos;s Room) through Islamic epistemology.
                    </li>
                    <li className="bu3-objectivePoint">
                      Evaluate clinical and emerging consciousness studies in contemporary and theological contexts.
                    </li>
                  </ul>
                </div>

                {/* Subheader: Curriculum Materials & Media Activities */}
                <div className="bu3-subSectionHeading">
                  <span className="bu3-subSectionIcon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </span>
                  <span>Curriculum Materials &amp; Media Activities</span>
                </div>

                {/* 4 Clean Balanced Resource Cards (Bug/Duplication Fixed) */}
                <div className="bu3-fourCardsGrid">
                  {/* Card 1: Video Activity */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerBurgundyPlay`}>
                      <span className="bu3-playCircleBtn" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">VIDEO ACTIVITY</span>
                      <h4 className="bu3-cardTitle">Mary&apos;s Room Thought Experiment</h4>
                      <p className="bu3-cardDesc">
                        Philosophical inquiry into qualia and non-physical knowledge.
                      </p>
                      <Link href="/podcast" className="bu3-cardBtnBurgundy">
                        WATCH ACTIVITY ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Supplemental */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerBeigeIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">SUPPLEMENTAL</span>
                      <h4 className="bu3-cardTitle">Neuroimaging &amp; Consciousness</h4>
                      <p className="bu3-cardDesc">
                        Clinical implications for philosophy of the mind.
                      </p>
                      <Link href="/resources" className="bu3-cardBtnBurgundy">
                        VIEW RESOURCE ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Instructor Key */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerCreamIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">INSTRUCTOR</span>
                      <h4 className="bu3-cardTitle">Lesson 2 Assessment Key</h4>
                      <p className="bu3-cardDesc">
                        Structured debate rubric and comprehensive model answers.
                      </p>
                      <Link href="/educate" className="bu3-cardBtnBurgundy">
                        FIND KEY ↗
                      </Link>
                    </div>
                  </div>

                  {/* Card 4: Student Sheet */}
                  <div className="bu3-resourceCard">
                    <div className={`bu3-cardHeaderVisual bu3-headerSlateIcon`}>
                      <div className="bu3-cardHeaderIcon" aria-hidden="true">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="bu3-cardContent">
                      <span className="bu3-cardLabel">STUDENT</span>
                      <h4 className="bu3-cardTitle">Lesson 2 Exercise Sheet</h4>
                      <p className="bu3-cardDesc">
                        Case study dilemmas and dualism response questions.
                      </p>
                      <Link href="/courses" className="bu3-cardBtnBurgundy">
                        FIND SHEET ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* -------------------------------------------------------------
                  E. Unit Completion & Navigation Footer
                  ------------------------------------------------------------- */}
              <nav aria-label="Unit Navigation" className="bu3-unitFooterNav">
                <Link href="/exploring-bioscience#curriculum-units" className="bu3-unitFooterLinkPrev">
                  ← Unit 2: What Do We Know &amp; How Do We Know It?
                </Link>
                <Link href="/exploring-bioscience" className="bu3-unitFooterAllLink">
                  Explore Full Curriculum Index ↗
                </Link>
                <Link href="/exploring-bioscience#curriculum-units" className="bu3-unitFooterLinkNext">
                  Unit 4: Human Enhancement &amp; Transhumanism →
                </Link>
              </nav>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
