import Image from "next/image";
import Link from "next/link";
import { asset } from "../../lib/asset";
import ExploringBioscienceNav from "./ExploringBioscienceNav";
import { PartnersTabs, FaqAccordion } from "./ExploringBioscienceInteractive";

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

export default function ExploringBiosciencePage() {
  return (
    <div className="eb-pageWrapper">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="eb-heroSection" aria-label="Hero">
        <div className="container">
          <div className="eb-heroRow">
            {/* Left Content */}
            <div className="eb-heroContentCol">
              <div className="eb-heroEyebrow">
                <span>II&amp;M CURRICULUM PROJECT</span>
                <span aria-hidden="true">—</span>
              </div>
              <h1 className="eb-heroTitle">
                Exploring <br />
                <span className="eb-burgundyItalic">Bioscience</span> <br />
                and Islam
              </h1>
              <h2 className="eb-heroSubtitle">
                A Curriculum on Fundamental Questions About the Human Being
              </h2>
              <p className="eb-heroLead">
                Explore the intersection of modern bioscience and Islamic tradition through
                a thoughtfully designed curriculum fostering critical engagement between scientific
                inquiry and human purpose.
              </p>
              <div className="eb-heroBtnGroup">
                <a href="https://muslimedex.org/courses/exploring-bioscience-and-islam" target="_blank" rel="noopener noreferrer" className="eb-btnBurgundy">
                  EXPLORE ENROLLMENT ↗
                </a>
                <a href="#what-youll-learn" className="eb-btnOutline">
                  What You&apos;ll Learn ↗
                </a>
              </div>
              <div className="eb-heroTagline">
                Science · Faith · Understanding
              </div>
            </div>

            {/* Right Photograph */}
            <div className="eb-heroImageCol">
              <div className="eb-heroImageWrapper">
                <Image
                  src={asset("/images/exploring-bioscience/hero-lab.jpg")}
                  alt="Laboratory glassware with clear liquid and scientific pipettes"
                  fill
                  priority
                  className="eb-heroImage"
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
      <section id="overview" className="eb-overviewSection" aria-label="Project Overview">
        <div className="container">
          <div className="eb-overviewGrid">
            {/* Left Column */}
            <div>
              <span className="eb-eyebrow">Project Overview</span>
              <h2 className="eb-overviewHeading">
                Exploring Fundamental Questions at the Intersection of{" "}
                <span className="eb-burgundyItalic">Bioscience</span> and Theology
              </h2>
              <p className="eb-overviewBody">
                The Exploring Bioscience and Islam curriculum was developed to promote critical reflection
                on the intersection of bioscience and Islamic theology. Students examine real-world issues
                and evaluate how scientific discoveries intersect with Islamic perspectives on human dignity and morality.
              </p>
              <p className="eb-overviewBody">
                Designed for diverse and international audiences, this curriculum provides an intellectual
                framework that bridges empirical science and contemporary theological inquiry, addressing
                fundamental questions about the human being. This curriculum is designed to help students foster
                an appreciation of how the biosciences and Islamic thought can inform one another.
              </p>
              <p className="eb-overviewCitation">
                A project of the Initiative on Islam and Medicine, supported by funding from the John Templeton Foundation.
              </p>
            </div>

            {/* Right Cream Feature Card */}
            <div>
              <div className="eb-overviewCard">
                <span className="eb-overviewCardEyebrow">Designed to Help Students</span>
                <h3 className="eb-overviewCardTitle">Learn to ask better questions.</h3>
                <ul className="eb-objectivesList">
                  {LEARNING_OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className="eb-objectiveItem">
                      <span className="eb-objectiveIcon" aria-hidden="true">
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
          4. MUSLIM STUDENTS & BIOSCIENCE
          ==================================================================== */}
      <section id="five-questions" className="eb-studentContextSection" aria-label="Muslim Students and Bioscience">
        <div className="container">
          <div className="eb-studentContextInner">
            <p className="eb-studentContextText">
              As Muslim students explore the biosciences, they may encounter difficult questions and wonder how their religious identity intersects with scientific discoveries: Does affirming scientific facts compromise religious beliefs? Does religion explain scientific findings? How can they navigate these domains constructively? We believe that conflicts are not inevitable, and that knowledge integration is possible and can shape stable professional identities in the future.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. LEARNING TO UNDERSTAND KNOWLEDGE (FRAMEWORK)
          ==================================================================== */}
      <section id="framework" className="eb-frameworkSection" aria-label="Epistemological Framework">
        <div className="container">
          <div className="eb-sectionHeaderCenter">
            <span className="eb-eyebrow">Epistemological Framework</span>
            <h2 className="eb-sectionTitle">
              Learning to Understand <span className="eb-burgundyItalic">Knowledge</span>
            </h2>
            <p className="eb-sectionSubtitle">
              To evaluate bioscience and religion, know where ideas come from and how different traditions consider truth.
            </p>
          </div>

          {/* 4 Feature Columns */}
          <div className="eb-frameworkColumnsGrid">
            <div className="eb-frameworkCol">
              <div className="eb-frameworkTag">01 / Foundations</div>
              <h3 className="eb-frameworkHeading">Sources of Knowledge</h3>
              <p className="eb-frameworkDesc">
                Differentiate empirical, rational, and revelatory knowledge—and examine how certainty is established.
              </p>
            </div>
            <div className="eb-frameworkCol">
              <div className="eb-frameworkTag">02 / Certainty</div>
              <h3 className="eb-frameworkHeading">Evaluating Certainty</h3>
              <p className="eb-frameworkDesc">
                Distinguish between interpretations and fundamental tenets, and evaluate the weight of evidence.
              </p>
            </div>
            <div className="eb-frameworkCol">
              <div className="eb-frameworkTag">03 / Inquiry</div>
              <h3 className="eb-frameworkHeading">Critical Evaluation</h3>
              <p className="eb-frameworkDesc">
                Develop critical thinking skills to analyze claims without prejudice while honoring core convictions.
              </p>
            </div>
            <div className="eb-frameworkCol">
              <div className="eb-frameworkTag">04 / Integration</div>
              <h3 className="eb-frameworkHeading">Human Knowledge &amp; Revelation</h3>
              <p className="eb-frameworkDesc">
                How revelation and reasoned human inquiry can be brought together constructively.
              </p>
            </div>
          </div>

          {/* Dark Navy Panel with Responsive Connected SVG Diagram */}
          <div className="eb-navyFrameworkPanel">
            <div className="eb-navyContent">
              <span className="eb-navyEyebrow">Integrated Learning</span>
              <h3 className="eb-navyTitle">
                How the Curriculum{" "}
                <span className="eb-navyTitleItalic">Fits Together</span>
              </h3>
              <p className="eb-navyText">
                Seven connected instructional stages build on each other through a shared epistemological framework.
              </p>
            </div>

            <div className="eb-navyDiagramWrapper">
              <svg
                viewBox="0 0 460 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="eb-navySvgDiagram"
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
          6. WHAT YOU'LL LEARN (Replaces Curriculum Units)
          ==================================================================== */}
      <section id="what-youll-learn" className="eb-learnSection" aria-label="What You'll Learn">
        <span id="curriculum-units" style={{ position: "relative", top: "-120px" }} />
        <span id="for-educators" style={{ position: "relative", top: "-120px" }} />
        <div className="container">
          <div className="eb-learnCard">
            {/* Architectural minaret/dome watermark matching reference */}
            <div className="eb-learnWatermark" aria-hidden="true">
              <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 240V130C40 105 60 75 85 55C110 75 130 105 130 130V240H40Z" fill="currentColor" />
                <circle cx="85" cy="45" r="4" fill="currentColor" />
                <path d="M140 240V90C140 60 170 25 200 5C230 25 260 60 260 90V240H140Z" fill="currentColor" />
                <circle cx="200" cy="-2" r="5" fill="currentColor" />
                <path d="M250 240V140C250 115 270 85 295 65C320 85 340 115 340 140V240H250Z" fill="currentColor" />
                <circle cx="295" cy="55" r="4" fill="currentColor" />
              </svg>
            </div>

            <div className="eb-learnHeader">
              <span className="eb-learnIcon" aria-hidden="true">
                <i className="fa-solid fa-graduation-cap" />
              </span>
              <h2 className="eb-learnTitle">What You&apos;ll Learn</h2>
            </div>

            <div className="eb-learnGrid">
              <div className="eb-learnItem">
                <span className="eb-learnCheck" aria-hidden="true">
                  <i className="fa-solid fa-check" />
                </span>
                <span className="eb-learnText">
                  Explain the relationship between bioscience and Islamic thought.
                </span>
              </div>

              <div className="eb-learnItem">
                <span className="eb-learnCheck" aria-hidden="true">
                  <i className="fa-solid fa-check" />
                </span>
                <span className="eb-learnText">
                  Examine fundamental questions about the human being from scientific and ethical perspectives.
                </span>
              </div>

              <div className="eb-learnItem">
                <span className="eb-learnCheck" aria-hidden="true">
                  <i className="fa-solid fa-check" />
                </span>
                <span className="eb-learnText">
                  Describe how Islamic scholarship has engaged with medicine and the life sciences.
                </span>
              </div>

              <div className="eb-learnItem">
                <span className="eb-learnCheck" aria-hidden="true">
                  <i className="fa-solid fa-check" />
                </span>
                <span className="eb-learnText">
                  Analyze contemporary bioethical issues using interdisciplinary approaches.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. BUILT FOR THOUGHTFUL LEARNING
          ==================================================================== */}
      <section id="thoughtful-learning" className="eb-thoughtfulSection" aria-label="Built for Thoughtful Learning">
        <div className="container">
          <div className="eb-sectionHeaderCenter">
            <span className="eb-eyebrow">Teaching &amp; Learning</span>
            <h2 className="eb-sectionTitle">
              Built for <span className="eb-burgundyItalic">Thoughtful Learning</span>
            </h2>
          </div>

          <div className="eb-thoughtfulGrid">
            <div className="eb-thoughtfulCard">
              <div className="eb-thoughtfulIcon" aria-hidden="true">
                ◇
              </div>
              <h3 className="eb-thoughtfulTitle">Sources of Knowledge</h3>
              <p className="eb-thoughtfulDesc">
                Differentiate empirical, rational, and revelatory knowledge—and consider how certainty is established.
              </p>
            </div>

            <div className="eb-thoughtfulCard">
              <div className="eb-thoughtfulIcon" aria-hidden="true">
                ✧
              </div>
              <h3 className="eb-thoughtfulTitle">Thought-Provoking Questions</h3>
              <p className="eb-thoughtfulDesc">
                Stimulate meaningful inquiry into the intersection of scientific reasoning, ethics, and Islamic theology.
              </p>
            </div>

            <div className="eb-thoughtfulCard">
              <div className="eb-thoughtfulIcon" aria-hidden="true">
                ⚙
              </div>
              <h3 className="eb-thoughtfulTitle">Practical Teaching Features</h3>
              <p className="eb-thoughtfulDesc">
                Vocabulary journals, guided activities, presentations, supporting materials, and assessment resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. ACROSS EVERY LEARNING ENVIRONMENT
          ==================================================================== */}
      <section className="eb-environmentsSection" aria-label="Learning Environments">
        <div className="container">
          <div className="eb-sectionHeaderCenter">
            <span className="eb-eyebrow">Flexible Settings</span>
            <h2 className="eb-sectionTitle">
              Across Every <span className="eb-burgundyItalic">Learning Environment</span>
            </h2>
          </div>

          <div className="eb-environmentsGrid">
            {/* Classroom */}
            <div className="eb-envCard">
              <div className="eb-envImageWrapper">
                <Image
                  src={asset("/images/exploring-bioscience/env-classroom-hq.jpg")}
                  alt="Students in university library"
                  fill
                  className="eb-envImage"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="eb-envContent">
                <h3 className="eb-envTitle">In the Classroom</h3>
                <p className="eb-envDesc">
                  Classroom instruction, flipped learning, biology enrichment, and Islamic studies integration.
                </p>
              </div>
            </div>

            {/* Beyond the Classroom */}
            <div className="eb-envCard">
              <div className="eb-envImageWrapper">
                <Image
                  src={asset("/images/exploring-bioscience/env-beyond-hq.jpg")}
                  alt="Study desk with textbooks and learning materials"
                  fill
                  className="eb-envImage"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="eb-envContent">
                <h3 className="eb-envTitle">Beyond the Classroom</h3>
                <p className="eb-envDesc">
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
      <section id="testimonials" className="eb-reflectionsSection" aria-label="Learner Reflections">
        <div className="container">
          <div className="eb-sectionHeaderCenter">
            <span className="eb-eyebrow">Voices from Our Community</span>
            <h2 className="eb-sectionTitle">
              Learner <span className="eb-burgundyItalic">Reflections</span>
            </h2>
            <p className="eb-sectionSubtitle">
              Experiences from learners engaging with questions at the intersection of faith and science.
            </p>
          </div>

          <div className="eb-reflectionsGrid">
            {/* Left Burgundy Banner */}
            <div className="eb-reflectionLeftPanel">
              <div>
                <span className="eb-reflectionLeftEyebrow">Exploring Bioscience &amp; Islam</span>
                <h3 className="eb-reflectionLeftTitle">
                  Bringing scientific inquiry and faith into conversation.
                </h3>
              </div>
              <Link href="/research" className="eb-reflectionLeftLink">
                Explore project reflections ↗
              </Link>
            </div>

            {/* Right Testimonial Card */}
            <div className="eb-reflectionRightCard">
              <div className="eb-quoteMark" aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className="eb-reflectionQuote">
                The seminars largely changed my stance on the bioscience–Islam relationship, from two opposing realms to one that complements each other.
              </blockquote>
              <div className="eb-reflectionAuthor">Student reflection</div>
              <div className="eb-reflectionSource">
                Exploring Bioscience and Islam seminar series
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. PARTNERS & SUPPORT
          ==================================================================== */}
      <section className="eb-partnersSection" aria-label="Partners and Support">
        <div className="container">
          <div className="eb-sectionHeaderCenter">
            <span className="eb-eyebrow">In Collaboration for a Brighter Tomorrow</span>
            <h2 className="eb-sectionTitle">
              Partners &amp; <span className="eb-burgundyItalic">Support</span>
            </h2>
            <p className="eb-sectionSubtitle">
              Exploring Bioscience and Islam is part of II&amp;M&apos;s broader work connecting scholarship, education, and communities.
            </p>
          </div>

          <PartnersTabs />
        </div>
      </section>

      {/* ====================================================================
          11. FREQUENTLY ASKED QUESTIONS
          ==================================================================== */}
      <section id="faqs" className="eb-faqSection" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="eb-faqGrid">
            <div>
              <span className="eb-eyebrow">Have Questions?</span>
              <h2 className="eb-faqTitle">
                Frequently Asked <br />
                <span className="eb-burgundyItalic">Questions</span>
              </h2>
              <p className="eb-faqDesc">
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
