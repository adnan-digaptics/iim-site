import Image from "next/image";
import Link from "next/link";
import ExploringBioscienceNav from "./ExploringBioscienceNav";
import { PartnersTabs, FaqAccordion } from "./ExploringBioscienceInteractive";
import styles from "./exploring-bioscience.module.css";

export const metadata = {
  title: "Exploring Bioscience and Islam | II&M Curriculum Project",
  description:
    "A curriculum on fundamental questions about the human being, bridging modern bioscience and Islamic theological inquiry.",
  keywords: [
    "Exploring Bioscience and Islam",
    "II&M Curriculum",
    "Bioscience and Theology",
    "Islamic Bioethics",
    "John Templeton Foundation",
    "Evolution and Islam",
    "Neuroscience and Soul",
    "Human Enhancement",
  ],
};

const LEARNING_OBJECTIVES = [
  "Build intellectual bridges across disciplines",
  "Engage modern science through Islamic thought",
  "Deepen understanding of human dignity",
  "Explore what it means to be human",
  "Apply ethics to rapidly changing fields",
];

const FIVE_QUESTIONS = [
  {
    num: "01",
    question: "What is the origin of human persons?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" />
        <path d="M9 13a3 3 0 0 1 6 0" />
        <path d="M12 7a4 4 0 0 1 4 4" />
        <path d="M12 7a4 4 0 0 0-4 4" />
        <circle cx="12" cy="4" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    question: "What is the human's essential nature?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
  },
  {
    num: "03",
    question: "What is the human's future?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "04",
    question: "And whose will has power in the universe?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    num: "05",
    question: "Are humans unique in the universe?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

const CURRICULUM_UNITS = [
  {
    unit: "UNIT 01",
    title: "Epistemic Framework",
    desc: "Core concepts, sources of knowledge, and application exercises.",
    image: "/images/exploring-bioscience/unit-01.jpg",
  },
  {
    unit: "UNIT 02",
    title: "What Do We Know and How Do We Know It?",
    desc: "Reasoning exercises in Islam and science.",
    image: "/images/exploring-bioscience/unit-02.jpg",
  },
  {
    unit: "UNIT 03",
    title: "What is the Origin of Mankind?",
    desc: "Evolution and God's special creation.",
    image: "/images/exploring-bioscience/unit-03.jpg",
  },
  {
    unit: "UNIT 04",
    title: "What Does It Mean to Be a Human Being?",
    desc: "Neuroscience, artificial intelligence, and the soul.",
    image: "/images/exploring-bioscience/unit-04.jpg",
  },
  {
    unit: "UNIT 05",
    title: "Human Enhancement and Transhumanism",
    desc: "Are we changing—and should we change—our being?",
    image: "/images/exploring-bioscience/unit-05.jpg",
  },
  {
    unit: "UNIT 06",
    title: "Are We Programmed or Do We Have Free Will?",
    desc: "Fate and genetic determinism.",
    image: "/images/exploring-bioscience/unit-06.jpg",
  },
  {
    unit: "UNIT 07",
    title: "Are Human Beings Unique in This Universe?",
    desc: "Extraterrestrial life and theological inquiry.",
    image: "/images/exploring-bioscience/unit-07.jpg",
  },
];

export default function ExploringBiosciencePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="Hero">
        <div className="container">
          <div className={styles.heroRow}>
            {/* Left Content */}
            <div className={styles.heroContentCol}>
              <div className={styles.heroEyebrow}>
                <span>II&amp;M CURRICULUM PROJECT</span>
                <span aria-hidden="true">—</span>
              </div>
              <h1 className={styles.heroTitle}>
                Exploring <br />
                <span className={styles.burgundyItalic}>Bioscience</span> <br />
                and Islam
              </h1>
              <h2 className={styles.heroSubtitle}>
                A Curriculum on Fundamental Questions About the Human Being
              </h2>
              <p className={styles.heroLead}>
                Explore the intersection of modern bioscience and Islamic tradition through
                a thoughtfully designed curriculum fostering critical engagement between scientific
                inquiry and human purpose.
              </p>
              <div className={styles.heroBtnGroup}>
                <a href="#curriculum-units" className={styles.btnBurgundy}>
                  Access the Curriculum ↗
                </a>
                <a href="#five-questions" className={styles.btnOutline}>
                  Explore the Units ↗
                </a>
              </div>
              <div className={styles.heroTagline}>
                Science · Faith · Understanding
              </div>
            </div>

            {/* Right Photograph */}
            <div className={styles.heroImageCol}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/exploring-bioscience/hero-lab.jpg"
                  alt="Laboratory glassware with clear liquid and scientific pipettes"
                  fill
                  priority
                  className={styles.heroImage}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. STICKY SUBNAV
          ==================================================================== */}
      <ExploringBioscienceNav />

      {/* ====================================================================
          3. PROJECT OVERVIEW
          ==================================================================== */}
      <section id="overview" className={styles.overviewSection} aria-label="Project Overview">
        <div className="container">
          <div className={styles.overviewGrid}>
            {/* Left Column */}
            <div>
              <span className={styles.eyebrow}>Project Overview</span>
              <h2 className={styles.overviewHeading}>
                Exploring Fundamental Questions at the Intersection of{" "}
                <span className={styles.burgundyItalic}>Bioscience</span> and Theology
              </h2>
              <p className={styles.overviewBody}>
                The Exploring Bioscience and Islam curriculum was developed to promote critical reflection
                on the intersection of bioscience and Islamic theology. Students examine real-world issues
                and evaluate how scientific discoveries intersect with Islamic perspectives on human dignity and morality.
              </p>
              <p className={styles.overviewBody}>
                Designed for diverse and international audiences, this curriculum provides an intellectual
                framework that bridges empirical science and contemporary theological inquiry, addressing
                fundamental questions about the human being. This curriculum is designed to help students foster
                an appreciation of how the biosciences and Islamic thought can inform one another.
              </p>
              <p className={styles.overviewCitation}>
                A project of the Initiative on Islam and Medicine, supported by funding from the John Templeton Foundation.
              </p>
            </div>

            {/* Right Cream Feature Card */}
            <div>
              <div className={styles.overviewCard}>
                <span className={styles.overviewCardEyebrow}>Designed to Help Students</span>
                <h3 className={styles.overviewCardTitle}>Learn to ask better questions.</h3>
                <ul className={styles.objectivesList}>
                  {LEARNING_OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className={styles.objectiveItem}>
                      <span className={styles.objectiveIcon} aria-hidden="true">
                        ✓
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. FIVE FUNDAMENTAL QUESTIONS
          ==================================================================== */}
      <section id="five-questions" className={styles.fiveQuestionsSection} aria-label="Five Fundamental Questions">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>The Foundational Inquiries</span>
            <h2 className={styles.sectionTitle}>
              Five Questions About the <span className={styles.burgundyItalic}>Human Being</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Guiding explorations into scientific inquiry and theological reflection
            </p>
          </div>

          <div className={styles.fiveQuestionsRow}>
            {FIVE_QUESTIONS.map((q) => (
              <div key={q.num} className={styles.questionCard}>
                <span className={styles.questionNumber}>{q.num}</span>
                <div className={styles.questionIconCircle} aria-hidden="true">
                  {q.icon}
                </div>
                <p className={styles.questionText}>{q.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. LEARNING TO UNDERSTAND KNOWLEDGE (FRAMEWORK)
          ==================================================================== */}
      <section id="framework" className={styles.frameworkSection} aria-label="Epistemological Framework">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>Epistemological Framework</span>
            <h2 className={styles.sectionTitle}>
              Learning to Understand <span className={styles.burgundyItalic}>Knowledge</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              To evaluate bioscience and religion, know where ideas come from and how different traditions consider truth.
            </p>
          </div>

          {/* 4 Feature Columns */}
          <div className={styles.frameworkColumnsGrid}>
            <div className={styles.frameworkCol}>
              <div className={styles.frameworkTag}>01 / Foundations</div>
              <h3 className={styles.frameworkHeading}>Sources of Knowledge</h3>
              <p className={styles.frameworkDesc}>
                Differentiate empirical, rational, and revelatory knowledge—and examine how certainty is established.
              </p>
            </div>
            <div className={styles.frameworkCol}>
              <div className={styles.frameworkTag}>02 / Certainty</div>
              <h3 className={styles.frameworkHeading}>Evaluating Certainty</h3>
              <p className={styles.frameworkDesc}>
                Distinguish between interpretations and fundamental tenets, and evaluate the weight of evidence.
              </p>
            </div>
            <div className={styles.frameworkCol}>
              <div className={styles.frameworkTag}>03 / Inquiry</div>
              <h3 className={styles.frameworkHeading}>Critical Evaluation</h3>
              <p className={styles.frameworkDesc}>
                Develop critical thinking skills to analyze claims without prejudice while honoring core convictions.
              </p>
            </div>
            <div className={styles.frameworkCol}>
              <div className={styles.frameworkTag}>04 / Integration</div>
              <h3 className={styles.frameworkHeading}>Human Knowledge &amp; Revelation</h3>
              <p className={styles.frameworkDesc}>
                How revelation and reasoned human inquiry can be brought together constructively.
              </p>
            </div>
          </div>

          {/* Dark Navy Panel with Responsive Connected SVG Diagram */}
          <div className={styles.navyFrameworkPanel}>
            <div className={styles.navyContent}>
              <span className={styles.navyEyebrow}>Integrated Learning</span>
              <h3 className={styles.navyTitle}>
                How the Curriculum{" "}
                <span className={styles.navyTitleItalic}>Fits Together</span>
              </h3>
              <p className={styles.navyText}>
                Seven connected instructional stages build on each other through a shared epistemological framework.
              </p>
            </div>

            <div className={styles.navyDiagramWrapper}>
              <svg
                viewBox="0 0 460 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.navySvgDiagram}
                aria-label="Connected Epistemological Diagram: Reason, The Human Being, Revelation, Empirical Inquiry"
              >
                {/* Connectors */}
                <line x1="85" y1="55" x2="230" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="230" y1="55" x2="375" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="85" y1="55" x2="85" y2="155" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="85" y1="155" x2="230" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Node: Reason */}
                <g>
                  <circle cx="85" cy="55" r="38" fill="#14263b" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  <text x="85" y="59" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
                    REASON
                  </text>
                </g>

                {/* Central Node: The Human Being */}
                <g>
                  <circle cx="230" cy="55" r="44" fill="#800000" stroke="#ddb47a" strokeWidth="2" />
                  <text x="230" y="51" fill="#ffffff" fontSize="10.5" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
                    THE HUMAN
                  </text>
                  <text x="230" y="65" fill="#ffffff" fontSize="10.5" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
                    BEING
                  </text>
                </g>

                {/* Node: Revelation */}
                <g>
                  <circle cx="375" cy="55" r="38" fill="#14263b" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  <text x="375" y="59" fill="#ffffff" fontSize="10.5" fontWeight="700" textAnchor="middle" letterSpacing="0.08em">
                    REVELATION
                  </text>
                </g>

                {/* Node: Empirical Inquiry */}
                <g>
                  <circle cx="85" cy="155" r="38" fill="#14263b" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  <text x="85" y="151" fill="#ffffff" fontSize="9.5" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
                    EMPIRICAL
                  </text>
                  <text x="85" y="164" fill="#ffffff" fontSize="9.5" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
                    INQUIRY
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. EXPLORE THE CURRICULUM (3x3 Grid)
          ==================================================================== */}
      <section id="curriculum-units" className={styles.curriculumSection} aria-label="Curriculum Units">
        <div className="container">
          <div className={styles.curriculumHeaderRow}>
            <div className={styles.curriculumHeaderLeft}>
              <span className={styles.eyebrow}>Curriculum Units</span>
              <h2 className={styles.sectionTitle}>
                Explore the <span className={styles.burgundyItalic}>Curriculum</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Six thematic units plus an introductory framework and application activities.
              </p>
            </div>
            <Link href="/research" className={styles.curriculumLinkRight}>
              Explore original curriculum ↗
            </Link>
          </div>

          <div className={styles.curriculumGrid}>
            {/* 7 Curriculum Units */}
            {CURRICULUM_UNITS.map((u) => (
              <div key={u.unit} className={styles.unitCard}>
                <div className={styles.unitImageContainer}>
                  <Image
                    src={u.image}
                    alt={u.title}
                    fill
                    className={styles.unitImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.unitContent}>
                  <h3 className={styles.unitTitle}>{u.title}</h3>
                  <p className={styles.unitDesc}>{u.desc}</p>
                  <div className={styles.unitFooter}>
                    <span className={styles.unitArrowBtn} aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Card 08: For Educators */}
            <div id="for-educators" className={styles.audienceCard}>
              <div className={styles.audienceIconCircle} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              </div>
              <h3 className={styles.audienceTitle}>For Educators</h3>
              <p className={styles.audienceDesc}>
                Lesson plans, presentations, worksheets, and teaching resources for schools and learning communities.
              </p>
              <Link href="/educate" className={styles.audienceBtn}>
                Access Educator Curriculum ↗
              </Link>
            </div>

            {/* Card 09: For Individual Learners */}
            <div className={styles.audienceCard}>
              <div className={styles.audienceIconCircle} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.audienceTitle}>For Individual Learners</h3>
              <p className={styles.audienceDesc}>
                Learn at your own pace through the Exploring Bioscience &amp; Islam online course.
              </p>
              <Link href="/courses" className={styles.audienceBtn}>
                Explore Online Course ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. BUILT FOR THOUGHTFUL LEARNING
          ==================================================================== */}
      <section className={styles.thoughtfulSection} aria-label="Built for Thoughtful Learning">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>Teaching &amp; Learning</span>
            <h2 className={styles.sectionTitle}>
              Built for <span className={styles.burgundyItalic}>Thoughtful Learning</span>
            </h2>
          </div>

          <div className={styles.thoughtfulGrid}>
            <div className={styles.thoughtfulCard}>
              <div className={styles.thoughtfulIcon} aria-hidden="true">
                ◇
              </div>
              <h3 className={styles.thoughtfulTitle}>Sources of Knowledge</h3>
              <p className={styles.thoughtfulDesc}>
                Differentiate empirical, rational, and revelatory knowledge—and consider how certainty is established.
              </p>
            </div>

            <div className={styles.thoughtfulCard}>
              <div className={styles.thoughtfulIcon} aria-hidden="true">
                ✧
              </div>
              <h3 className={styles.thoughtfulTitle}>Thought-Provoking Questions</h3>
              <p className={styles.thoughtfulDesc}>
                Stimulate meaningful inquiry into the intersection of scientific reasoning, ethics, and Islamic theology.
              </p>
            </div>

            <div className={styles.thoughtfulCard}>
              <div className={styles.thoughtfulIcon} aria-hidden="true">
                ⚙
              </div>
              <h3 className={styles.thoughtfulTitle}>Practical Teaching Features</h3>
              <p className={styles.thoughtfulDesc}>
                Vocabulary journals, guided activities, presentations, supporting materials, and assessment resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. ACROSS EVERY LEARNING ENVIRONMENT
          ==================================================================== */}
      <section className={styles.environmentsSection} aria-label="Learning Environments">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>Flexible Settings</span>
            <h2 className={styles.sectionTitle}>
              Across Every <span className={styles.burgundyItalic}>Learning Environment</span>
            </h2>
          </div>

          <div className={styles.environmentsGrid}>
            {/* Classroom */}
            <div className={styles.envCard}>
              <div className={styles.envImageWrapper}>
                <Image
                  src="/images/exploring-bioscience/env-classroom-hq.jpg"
                  alt="Students in university library"
                  fill
                  className={styles.envImage}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className={styles.envContent}>
                <h3 className={styles.envTitle}>In the Classroom</h3>
                <p className={styles.envDesc}>
                  Classroom instruction, flipped learning, biology enrichment, and Islamic studies integration.
                </p>
              </div>
            </div>

            {/* Beyond the Classroom */}
            <div className={styles.envCard}>
              <div className={styles.envImageWrapper}>
                <Image
                  src="/images/exploring-bioscience/env-beyond-hq.jpg"
                  alt="Study desk with textbooks and learning materials"
                  fill
                  className={styles.envImage}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className={styles.envContent}>
                <h3 className={styles.envTitle}>Beyond the Classroom</h3>
                <p className={styles.envDesc}>
                  Weekend schools, youth groups, Islamic circles, independent study, and community learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. LEARNER REFLECTIONS
          ==================================================================== */}
      <section id="testimonials" className={styles.reflectionsSection} aria-label="Learner Reflections">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>Voices from Our Community</span>
            <h2 className={styles.sectionTitle}>
              Learner <span className={styles.burgundyItalic}>Reflections</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Experiences from learners engaging with questions at the intersection of faith and science.
            </p>
          </div>

          <div className={styles.reflectionsGrid}>
            {/* Left Burgundy Banner */}
            <div className={styles.reflectionLeftPanel}>
              <div>
                <span className={styles.reflectionLeftEyebrow}>Exploring Bioscience &amp; Islam</span>
                <h3 className={styles.reflectionLeftTitle}>
                  Bringing scientific inquiry and faith into conversation.
                </h3>
              </div>
              <Link href="/research" className={styles.reflectionLeftLink}>
                Explore project reflections ↗
              </Link>
            </div>

            {/* Right Testimonial Card */}
            <div className={styles.reflectionRightCard}>
              <div className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className={styles.reflectionQuote}>
                The seminars largely changed my stance on the bioscience–Islam relationship, from two opposing realms to one that complements each other.
              </blockquote>
              <div className={styles.reflectionAuthor}>Student reflection</div>
              <div className={styles.reflectionSource}>
                Exploring Bioscience and Islam seminar series
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. PARTNERS & SUPPORT
          ==================================================================== */}
      <section className={styles.partnersSection} aria-label="Partners and Support">
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.eyebrow}>In Collaboration for a Brighter Tomorrow</span>
            <h2 className={styles.sectionTitle}>
              Partners &amp; <span className={styles.burgundyItalic}>Support</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Exploring Bioscience and Islam is part of II&amp;M&apos;s broader work connecting scholarship, education, and communities.
            </p>
          </div>

          <PartnersTabs />
        </div>
      </section>

      {/* ====================================================================
          11. FREQUENTLY ASKED QUESTIONS
          ==================================================================== */}
      <section id="faqs" className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className="container">
          <div className={styles.faqGrid}>
            <div>
              <span className={styles.eyebrow}>Have Questions?</span>
              <h2 className={styles.faqTitle}>
                Frequently <br />
                Asked <br />
                <span className={styles.burgundyItalic}>Questions</span>
              </h2>
              <p className={styles.faqDesc}>
                Everything you need to know about accessing and using this curriculum.
              </p>
            </div>

            <div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
