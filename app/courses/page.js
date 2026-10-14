import Link from "next/link";
import "./courses.css";

export const metadata = {
  title: "Courses & Certifications | Initiative on Islam & Medicine",
  description: "Evidence-informed education at the intersection of Islam, biomedicine, and ethics for healthcare professionals, students, educators, and institutions.",
};

const partners = [
  {
    logo: "/images/partners/icons/muslim-edex.png",
    name: "Muslim EdEx",
    sub: null,
    text: "Professional learning platform",
  },
  {
    logo: "/images/partners/icons/imana.png",
    name: "IMANA",
    sub: null,
    text: "Medical education & professional development",
  },
  {
    logo: "/images/partners/icons/albalagh.png",
    name: "ALBALAGH ACADEMY",
    sub: null,
    text: "Islamic scholarship and education",
  },
  {
    logo: "/images/partners/icons/umma-health.png",
    name: "UMMA HEALTH",
    sub: null,
    text: "Community health and healthcare initiatives",
  },
  {
    logo: "/images/partners/icons/workspace-junction.png",
    name: "Workspace Junction",
    sub: null,
    text: "Community space and events",
  },
  {
    logo: "/images/partners/icons/360-growth-lab.png",
    name: "360 Growth Lab",
    sub: null,
    text: "Technology and digital innovation",
  },
];

const pathways = [
  ["/images/bio-topic-book.jpg", "fa-book-open", "Islamic Bioethics", "Foundational and advanced study of ethical questions in contemporary medicine."],
  ["/images/hero-doctor-team.jpg", "fa-stethoscope", "Muslim Patient Care", "Practical guidance for culturally responsive, faith-sensitive clinical care."],
  ["/images/bio-faculty-talk.jpg", "fa-user-doctor", "Professional Development", "Courses that strengthen ethical judgment and leadership in healthcare."],
  ["/images/distinct-building.jpg", "fa-building-columns", "Institutional Programs", "Curriculum and training designed for schools, hospitals, and organizations."],
];

const upcoming = [
  {
    img: "/images/course-primer.jpg",
    badge: "32 CME CREDITS LISTED BY IMANA",
    title: "Islamic Bioethics — A Primer for Muslim Physicians",
    meta: [
      ["fa-handshake", "Offered with IMANA"],
      ["fa-laptop", "Online (Self-Paced)"],
      ["fa-user", "Dr. Aasim I. Padela"],
      ["fa-calendar", "September – December 2026"],
    ],
    price: "$320",
    href: "/education",
    cta: "LEARN MORE",
  },
  {
    img: "/images/bio-topic-mosque.jpg",
    badge: null,
    title: "An Intensive Introduction to the Field of Islamic Bioethics",
    meta: [
      ["fa-handshake", "Offered with Muslim EdEx"],
      ["fa-laptop", "Online (Self-Paced)"],
      ["fa-user", "Dr. Aasim I. Padela"],
      ["fa-calendar", "September – December 2026"],
    ],
    price: "$150",
    href: "/education",
    cta: "LEARN MORE",
  },
  {
    img: "/images/course-eol.jpg",
    badge: "PREVIOUSLY OFFERED",
    badgeSoft: true,
    title: "End-of-Life Healthcare for Muslims: Islamic Guidance for Care, Planning, and Decision-Making",
    meta: [
      ["fa-laptop", "Self-Paced (Previously offered in 2024)"],
      ["fa-user", "Dr. Aasim I. Padela and Dr. Renee Foutz"],
    ],
    note: "This course was previously offered. Check back for future offerings.",
    price: null,
    href: "/education",
    cta: "VIEW DETAILS",
  },
];

const additional = [
  {
    img: "/images/course-muslim-doctor.jpg",
    title: "Becoming a Muslim Doctor",
    subtitle: "Foundations of Identity, Ethics, and Practice",
    meta: [
      ["fa-handshake", "Offered with Muslim EdEx"],
      ["fa-users", "Live Cohort"],
      ["fa-user", "Dr. Aasim I. Padela & Sami Ahmed"],
    ],
    href: "/education",
    cta: "LEARN MORE",
  },
  {
    img: "/images/bio-campus.jpg",
    title: "Exploring Bioscience and Islam",
    subtitle: "A Curriculum on Fundamental Questions about the Human Being",
    meta: [
      ["fa-puzzle-piece", "Institution-integrable modules"],
      ["fa-chalkboard-user", "Interdisciplinary faculty"],
      ["fa-building-columns", "For universities, colleges, and schools"],
    ],
    href: "/curriculum",
    cta: "REQUEST CURRICULUM INTEGRATION",
  },
  {
    img: "/images/about-cta-arch.jpg",
    title: "Islam, Medical Ethics, and Spiritual Care",
    subtitle: null,
    meta: [
      ["fa-handshake", "Offered with Bayan Islamic Graduate School"],
      ["fa-laptop", "Online / Hybrid"],
      ["fa-user", "Dr. Aasim I. Padela"],
    ],
    href: "/education",
    cta: "LEARN MORE",
  },
];

const instituteFeatures = [
  ["fa-layer-group", "Integrate into Existing Courses"],
  ["fa-chalkboard", "Dedicated Seminars"],
  ["fa-people-group", "Faculty Preparation & Support"],
  ["fa-screwdriver-wrench", "Custom Workshops & Training"],
];

const howLearning = [
  ["fa-laptop", "Self-Paced Online", "Flexible modules you can complete on your schedule."],
  ["fa-users", "Live Cohorts", "Guided learning with peers and expert facilitation."],
  ["fa-person-chalkboard", "Workshops & Trainings", "Focused sessions for teams and institutional groups."],
  ["fa-building-columns", "Academic Integration", "Curriculum support for schools and universities."],
];

const legacy = [
  ["/images/partners/icons/imana.png", "IMANA", "CME-oriented physician education and clinical ethics partnerships."],
  ["/images/partners/icons/albalagh.png", "AlBalagh Academy", "Structured online programs connecting Islamic sciences and medicine."],
  [null, "The University of Chicago Medicine", "Academic collaboration hosting past teaching and research offerings."],
];

export default function CoursesPage() {
  return (
    <div className="courses-page">
      <header className="hero-seamless hero-courses-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/courses-hero.jpg"
            alt="Healthcare learners in discussion"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">COURSES &amp; CERTIFICATIONS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Courses That Deepen<br />
              Understanding.<br />
              <em>Shape Practice.</em>
            </h1>
            <p className="hero-seamless-lead">
              Evidence-informed education at the intersection of Islam, biomedicine, and ethics for healthcare professionals, students, educators, and institutions.
            </p>
            <div className="hero-seamless-actions">
              <a href="#upcoming" className="btn-seamless-maroon">EXPLORE COURSES &gt;</a>
              <Link href="/consultation" className="btn-seamless-outline">REQUEST INSTITUTIONAL TRAINING</Link>
            </div>
          </div>
          <div className="hero-seamless-quote">
            <p className="quote-text">
              Faith and knowledge<br />
              together lead to more<br />
              compassionate care.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      <section className="crs-partners">
        <div className="container">
          <div className="crs-section-head">
            <p className="crs-eyebrow">EDUCATIONAL PARTNERS &amp; COLLABORATORS</p>
            <Link href="/education" className="crs-text-link">VIEW ALL PARTNERS <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div className="crs-partners-grid">
            {partners.map((partner) => (
              <article className={`crs-partner${partner.name === "360 Growth Lab" ? " crs-partner-360" : ""}`} key={partner.name}>
                <div className="crs-partner-logo">
                  <img src={partner.logo} alt="" />
                </div>
                <div className="crs-partner-copy">
                  <h3>{partner.name}</h3>
                  {partner.sub ? <span className="crs-partner-sub">{partner.sub}</span> : null}
                  <p>{partner.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-pathways">
        <div className="container">
          <p className="crs-eyebrow">EXPLORE LEARNING PATHWAYS</p>
          <p className="crs-lead">
            Choose a learning pathway that fits your goals, whether you are a clinician, student, educator, or institution.
          </p>
          <div className="crs-path-grid">
            {pathways.map(([img, icon, title, text]) => (
              <article className="crs-path" key={title}>
                <img src={img} alt={title} />
                <div className="crs-path-icon"><i className={`fa-solid ${icon}`} /></div>
                <div className="crs-path-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href="/education" className="crs-path-arrow" aria-label={`Explore ${title}`}>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-upcoming" id="upcoming">
        <div className="container">
          <div className="crs-section-head">
            <p className="crs-eyebrow">EXPLORE &amp; UPCOMING COURSES</p>
            <Link href="/education" className="crs-text-link">VIEW ALL COURSES <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div className="crs-course-grid">
            {upcoming.map((course) => (
              <article className="crs-course" key={course.title}>
                <div className="crs-course-media">
                  <img src={course.img} alt={course.title} />
                  {course.badge ? (
                    <span className={`crs-badge${course.badgeSoft ? " crs-badge-soft" : ""}`}>{course.badge}</span>
                  ) : null}
                </div>
                <div className="crs-course-body">
                  <h3>{course.title}</h3>
                  <ul>
                    {course.meta.map(([icon, label]) => (
                      <li key={label}><i className={`fa-solid ${icon}`} />{label}</li>
                    ))}
                  </ul>
                  {course.note ? <p className="crs-note">{course.note}</p> : null}
                  <div className="crs-course-foot">
                    {course.price ? <strong>{course.price}</strong> : <span />}
                    <Link href={course.href} className="crs-btn crs-btn-fill crs-btn-sm">
                      {course.cta} <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-additional">
        <div className="container">
          <div className="crs-section-head">
            <p className="crs-eyebrow">ADDITIONAL PROGRAMS &amp; INSTITUTIONAL COURSES</p>
            <Link href="/education" className="crs-text-link">VIEW ALL COURSES <i className="fa-solid fa-arrow-right" /></Link>
          </div>
          <div className="crs-course-grid">
            {additional.map((course) => (
              <article className="crs-course" key={course.title}>
                <div className="crs-course-media">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="crs-course-body">
                  <h3>{course.title}</h3>
                  {course.subtitle ? <p className="crs-subtitle">{course.subtitle}</p> : null}
                  <ul>
                    {course.meta.map(([icon, label]) => (
                      <li key={label}><i className={`fa-solid ${icon}`} />{label}</li>
                    ))}
                  </ul>
                  <div className="crs-course-foot">
                    <span />
                    <Link href={course.href} className="crs-btn crs-btn-fill crs-btn-sm">
                      {course.cta} <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-institute">
        <div className="crs-institute-media">
          <img src="/images/courses-institutional.jpg" alt="Instructor leading an institutional training session" />
        </div>
        <div className="crs-institute-copy">
          <p className="crs-eyebrow">FOR INSTITUTIONS &amp; ORGANIZATIONS</p>
          <h2 className="crs-h2">Bring II&amp;M Education to Your Institution</h2>
          <p className="crs-body">
            We partner with hospitals, medical schools, and community organizations to deliver customized courses, workshops, and curriculum integration that advance ethical, culturally responsive care.
          </p>
          <div className="crs-inst-features">
            {instituteFeatures.map(([icon, label]) => (
              <article key={label}>
                <i className={`fa-solid ${icon}`} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
          <Link href="/consultation" className="crs-btn crs-btn-fill">
            REQUEST A COURSE OR CONSULTATION <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </section>

      <section className="crs-how">
        <div className="container">
          <p className="crs-eyebrow">HOW LEARNING WORKS</p>
          <div className="crs-how-grid">
            {howLearning.map(([icon, title, text]) => (
              <article key={title}>
                <div className="crs-icon"><i className={`fa-solid ${icon}`} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-legacy">
        <div className="container">
          <p className="crs-eyebrow">OUR TEACHING LEGACY</p>
          <p className="crs-lead">Past offerings have been hosted in collaboration with:</p>
          <div className="crs-legacy-grid">
            {legacy.map(([logo, name, text]) => (
              <article key={name}>
                {logo ? (
                  <div className="crs-legacy-logo">
                    <img src={logo} alt={name} />
                  </div>
                ) : (
                  <div className="crs-logo-mark" aria-hidden="true">UC</div>
                )}
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crs-research">
        <div className="crs-research-media">
          <img src="/images/books-hero-still.jpg" alt="Scholarly books informing II&M education" />
        </div>
        <div className="crs-research-copy">
          <p className="crs-eyebrow">FROM RESEARCH TO EDUCATION</p>
          <h2 className="crs-h2">Grounded in Research. Designed for Real-World Impact.</h2>
          <p className="crs-body">
            Our courses draw on original research, publications, and community engagement to address real needs in healthcare, education, and policy.
          </p>
          <Link href="/research" className="crs-btn crs-btn-fill">
            EXPLORE RESEARCH &amp; IMPACT <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </section>

      <section className="crs-cta">
        <div className="crs-cta-media">
          <img src="/images/cta-archway.jpg" alt="Islamic architectural archway" />
        </div>
        <div className="crs-cta-copy">
          <p className="crs-eyebrow crs-eyebrow-gold">LET&apos;S LEARN TOGETHER</p>
          <h2>Create a Learning Experience for Your Community</h2>
          <p>
            Partner with II&amp;M to bring faith-informed, evidence-based education to your learners.
          </p>
          <div className="crs-actions">
            <Link href="/consultation" className="crs-btn crs-btn-fill">REQUEST INSTITUTIONAL TRAINING <i className="fa-solid fa-arrow-right" /></Link>
            <a href="#upcoming" className="crs-btn crs-btn-light">EXPLORE ALL COURSES <i className="fa-solid fa-arrow-right" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
