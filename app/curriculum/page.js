import { asset } from "../../lib/asset";
import Link from "next/link";
import CurriculumStats from "./CurriculumStats";

export const metadata = {
  title: "Educational Curriculum | Initiative on Islam & Medicine",
  description:
    "Evidence-informed, Islamically grounded educational programs for healthcare professionals, students, and community members.",
};

const PILLARS = [
  ["fa-book-open", "Evidence-Informed", "Built on rigorous research and current scholarship in Islamic bioethics and healthcare."],
  ["fa-users", "Multidisciplinary", "Integrating medicine, ethics, theology, and social sciences."],
  ["fa-gear", "Practical Application", "Designed for real-world ethical, educational, and community settings."],
  ["fa-chart-line", "Measurable Impact", "Equipping learners to make more compassionate, ethical, and informed decisions."],
];

const TRACKS = [
  ["Healthcare Professionals", "Curriculum for physicians, nurses, allied health professionals, and healthcare teams.", "/images/curriculum/cu-track-professionals.jpg", "/education"],
  ["Students & Trainees", "Courses for medical, nursing, and graduate students to build foundational and advanced knowledge.", "/images/curriculum/cu-track-students.jpg", "/courses"],
  ["Community & Faith Leaders", "Educational programs for imams, religious leaders, and community members.", "/images/curriculum/cu-track-leaders.jpg", "/workshops"],
  ["Institutions & Organizations", "Customized curriculum for hospitals, medical schools, universities, and community organizations.", "/images/our-mission/serve-institutions.jpg", "/consultation"],
];

const MODULES = [
  ["Foundations of Islamic Bioethics", "Key principles and frameworks for contemporary healthcare challenges.", "/images/research/findings-mosque.jpg", "/bioscience"],
  ["Medical Ethics in Practice", "Applying Islamic ethics to clinical decision-making and patient care.", "/images/curriculum/cu-mod-stethoscope.jpg", "/courses"],
  ["End-of-Life Care and Palliative Ethics", "Ethical, spiritual, and practical considerations for serious illness and end-of-life care.", "/images/curriculum/cu-mod-hands.jpg", "/research"],
  ["Research Ethics and Methodology", "Guidance for conducting research with integrity and cultural sensitivity.", "/images/curriculum/cu-mod-microscope.jpg", "/research"],
  ["Health Equity and Social Justice", "Addressing disparities and promoting more equitable healthcare systems.", "/images/curriculum/cu-mod-equity.jpg", "/research"],
  ["Reproductive and Family Health", "Ethical discussions on reproductive technologies, family planning, and women's health.", "/images/curriculum/cu-mod-family.jpg", "/courses"],
];

const FORMATS = [
  ["fa-book-open", "Full Courses", "Structured multi-session learning experiences."],
  ["fa-users", "Workshops", "Interactive, skills-based sessions."],
  ["fa-desktop", "Online Learning", "Accessible, flexible digital courses."],
  ["fa-comments", "Seminars", "Focused discussions on key topics."],
  ["fa-gear", "Customized Programs", "Tailored to your institution or community."],
];

const AUDIENCES = [
  ["fa-hospital", "Hospitals & Health Systems"],
  ["fa-graduation-cap", "Medical Schools & Universities"],
  ["fa-stethoscope", "Healthcare Professionals"],
  ["fa-user-graduate", "Students & Trainees"],
  ["fa-mosque", "Faith Leaders & Community Organizations"],
  ["fa-landmark", "Policy Makers & Institutions"],
];

const RESOURCES = [
  ["Course Syllabi", "Ready-to-use syllabi for core and elective courses.", "ACCESS SYLLABI", "/images/curriculum/cu-res-syllabi.jpg", "/resources"],
  ["Teaching Guides", "Discussion questions, case studies, and facilitation tips.", "ACCESS GUIDES", "/images/curriculum/cu-res-guides.jpg", "/resources"],
  ["Presentation Materials", "Slides and resources for classroom and workshop use.", "ACCESS MATERIALS", "/images/curriculum/cu-res-slides.jpg", "/resources"],
  ["Recommended Readings", "Key articles, books, and multimedia resources.", "VIEW READINGS", "/images/curriculum/cu-res-readings.jpg", "/resources"],
];

const STATS = [
  { end: 50, decimals: 0, suffix: "+", label: "Courses & Workshops Developed" },
  { end: 1000, decimals: 0, suffix: "+", label: "Learners Trained Worldwide" },
  { end: 100, decimals: 0, suffix: "+", label: "Institutions & Communities Engaged" },
  { end: 4.8, decimals: 1, suffix: "/5", label: "Participant Satisfaction Rating" },
];

function ArrowLink({ href, children }) {
  return (
    <Link href={href} className="cu-link">
      {children} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
    </Link>
  );
}

export default function CurriculumPage() {
  return (
    <div className="curriculum-page">
      <header className="hero-seamless hero-curriculum-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/curriculum/cu-hero.jpg")}
            alt="A clinician and a physician in a beige hijab reviewing a laptop together"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">EDUCATIONAL CURRICULUM</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Knowledge for a <br />
              More Compassionate <br />
              <em>and Ethical Healthcare.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M&apos;s curriculum provides evidence-informed, Islamically grounded educational programs for healthcare professionals, students, and community members at the intersection of Islam, medicine, and bioethics.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/education" className="btn-seamless-maroon">
                EXPLORE OUR PROGRAMS <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/consultation" className="btn-seamless-outline">
                REQUEST A CURRICULUM <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="cu-hero-notes">
            <aside className="cu-hero-quote">
              <p>
                Grounded in evidence.
                <br />
                Rooted in Islamic ethics.
                <br />
                Built for real-world impact.
              </p>
            </aside>
          </div>
        </div>
      </header>

      <section className="cu-glance">
        <div className="container cu-glance-grid">
          <div className="cu-intro">
            <p className="cu-eyebrow">OUR CURRICULUM AT A GLANCE</p>
            <h2>Bridging Knowledge and Practice.</h2>
            <p>
              Our curriculum integrates Islamic ethical principles, contemporary biomedical knowledge, and real-world applications to prepare learners to address today&apos;s most important healthcare challenges.
            </p>
          </div>
          {PILLARS.map(([icon, title, text]) => (
            <article key={title}>
              <span className="cu-icon" aria-hidden="true">
                <i className={`fa-solid ${icon}`} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cu-tracks" id="programs">
        <div className="container">
          <div className="cu-head">
            <div>
              <p className="cu-eyebrow">CURRICULUM TRACKS</p>
              <h2>Programs for Diverse Learners.</h2>
            </div>
            <ArrowLink href="/education">VIEW ALL PROGRAMS</ArrowLink>
          </div>
          <div className="cu-track-grid">
            {TRACKS.map(([title, text, image, href]) => (
              <article className="cu-card" key={title}>
                <img src={asset(image)} alt="" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowLink href={href}>EXPLORE THIS TRACK</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cu-modules" id="modules">
        <div className="container">
          <div className="cu-head">
            <div>
              <p className="cu-eyebrow">KEY COURSE MODULES</p>
              <h2>Core Topics for Real-World Impact.</h2>
            </div>
            <ArrowLink href="/courses">VIEW ALL MODULES</ArrowLink>
          </div>
          <div className="cu-module-grid">
            {MODULES.map(([title, text, image, href]) => (
              <article className="cu-card" key={title}>
                <img src={asset(image)} alt="" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowLink href={href}>LEARN MORE</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cu-formats">
        <div className="container cu-formats-grid">
          <div className="cu-intro">
            <p className="cu-eyebrow">LEARNING FORMATS</p>
            <h2>
              Flexible Options for <br />
              Every Setting.
            </h2>
          </div>
          <div className="cu-format-list">
            {FORMATS.map(([icon, title, text]) => (
              <article key={title}>
                <span className="cu-icon" aria-hidden="true">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cu-who">
        <div className="container cu-who-grid">
          <div className="cu-intro">
            <p className="cu-eyebrow">WHO IT&apos;S FOR</p>
            <h2>
              Building Knowledge <br />
              Across Communities.
            </h2>
          </div>
          <div className="cu-who-list">
            {AUDIENCES.map(([icon, title]) => (
              <article key={title}>
                <span className="cu-icon" aria-hidden="true">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cu-resources">
        <div className="container cu-resources-grid">
          <div className="cu-intro">
            <p className="cu-eyebrow">RESOURCES FOR EDUCATORS</p>
            <h2>
              Tools to Teach. <br />
              Materials to Inspire.
            </h2>
            <p>
              We provide curated teaching materials, syllabi, case studies, and discussion guides to support effective and engaging education.
            </p>
            <Link href="/resources" className="btn-seamless-maroon">
              BROWSE EDUCATOR RESOURCES <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          {RESOURCES.map(([title, text, label, image, href]) => (
            <article className="cu-card" key={title}>
              <img src={asset(image)} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowLink href={href}>{label}</ArrowLink>
            </article>
          ))}
        </div>
      </section>

      <section className="cu-impact">
        <div className="container cu-impact-grid">
          <div className="cu-intro">
            <p className="cu-eyebrow">OUR IMPACT</p>
            <h2>
              Educating for a More <br />
              Compassionate Tomorrow.
            </h2>
          </div>
          <CurriculumStats stats={STATS} />
        </div>
      </section>

      <section className="cu-cta">
        <img
          src={asset("/images/research/education.jpg")}
          alt="An educator in a beige hijab speaking with a classroom of learners"
          className="cu-cta-img"
        />
        <div className="container cu-cta-inner">
          <div className="cu-cta-copy">
            <p className="cu-eyebrow cu-eyebrow-gold">PARTNERED WITH</p>
            <h2>Bring Our Curriculum to Your Institution.</h2>
            <p>
              We offer customized educational programs to meet the unique needs of your learners, organization, or community.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/consultation" className="btn-seamless-maroon">
                REQUEST A CURRICULUM <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/consultation" className="cu-btn-light">
                DISCUSS A PROGRAM <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
