import Link from "next/link";
import "./education.css";

export const metadata = {
  title: "Education | Initiative on Islam & Medicine",
  description:
    "Evidence-informed learning at the intersection of Islam, ethics, and healthcare for students, clinicians, institutions, and communities.",
};

const pathways = [
  {
    img: "/images/educate/path-students.jpg",
    icon: "fa-graduation-cap",
    title: "Medical Students & Trainees",
    text: "Foundational learning that builds ethical awareness and culturally informed clinical judgment early in training.",
    href: "/courses",
  },
  {
    img: "/images/educate/path-clinicians.jpg",
    icon: "fa-stethoscope",
    title: "Clinicians & Healthcare Teams",
    text: "Practical education that strengthens ethical reasoning and improves care for Muslim patients and families.",
    href: "/courses",
  },
  {
    img: "/images/educate/path-institutions.jpg",
    icon: "fa-building-columns",
    title: "Institutions & Hospitals",
    text: "Custom training and curriculum support for schools, hospitals, and healthcare organizations.",
    href: "/consultation",
  },
  {
    img: "/images/educate/path-community.jpg",
    icon: "fa-people-group",
    title: "Community Education",
    text: "Accessible learning that helps communities navigate healthcare with clarity, dignity, and confidence.",
    href: "/workshops",
  },
  {
    img: "/images/educate/path-bioethics.jpg",
    icon: "fa-book-open",
    title: "Islamic Bioethics Learning",
    text: "Rigorous study of ethical questions at the intersection of Islam, biomedicine, and contemporary practice.",
    href: "/courses",
  },
];

const featured = [
  {
    img: "/images/educate/course-bioethics.jpg",
    title: "Islamic Bioethics: A Primer for Muslim Physicians",
    text: "Core ethical principles, real-world cases, and practical guidance for contemporary healthcare.",
    href: "/courses",
  },
  {
    img: "/images/educate/course-muslim-doctor.jpg",
    title: "Becoming a Muslim Doctor",
    text: "Identity, purpose, and practical guidance for navigating medical training and professional life as a Muslim.",
    href: "/courses",
  },
  {
    img: "/images/educate/course-patients.jpg",
    title: "Muslim Patients & Healthcare Needs",
    text: "Culturally informed, evidence-based approaches to common clinical, ethical, and communication issues.",
    href: "/courses",
  },
  {
    img: "/images/educate/course-workshops.jpg",
    title: "Custom Workshops & Faculty Development",
    text: "Tailored training for institutions, departments, and professional organizations.",
    href: "/consultation",
  },
];

const formats = [
  {
    icon: "fa-book-open",
    title: "Courses",
    text: "Structured programs for deeper study and lasting skill development.",
  },
  {
    icon: "fa-chalkboard-user",
    title: "Workshops",
    text: "Interactive sessions designed for teams, departments, and communities.",
  },
  {
    icon: "fa-laptop",
    title: "Webinars",
    text: "Accessible online learning for busy professionals and learners.",
  },
  {
    icon: "fa-certificate",
    title: "Certificates",
    text: "Recognized pathways that document growth and professional learning.",
  },
  {
    icon: "fa-handshake",
    title: "Custom Training",
    text: "Institution-specific education shaped around your goals and context.",
  },
];

const audiences = [
  ["/images/educate/aud-students.jpg", "Medical Students"],
  ["/images/educate/aud-residents.jpg", "Residents & Fellows"],
  ["/images/educate/aud-physicians.jpg", "Physicians"],
  ["/images/educate/aud-nurses.jpg", "Nurses & Allied Health"],
  ["/images/educate/aud-chaplains.jpg", "Chaplains & Spiritual Care Providers"],
  ["/images/educate/aud-institutions.jpg", "Institutions & Academic Centers"],
  ["/images/educate/aud-leaders.jpg", "Community Leaders"],
];

const gains = [
  {
    icon: "fa-people-group",
    tone: "burgundy",
    title: "Culturally Informed Care",
    text: "Learn to recognize and respond to the values, needs, and lived experiences of Muslim patients and families.",
  },
  {
    icon: "fa-scale-balanced",
    tone: "green",
    title: "Stronger Ethical Reasoning",
    text: "Build clearer frameworks for navigating complex clinical and ethical decisions with confidence.",
  },
  {
    icon: "fa-lightbulb",
    tone: "burgundy",
    title: "Practical Understanding",
    text: "Translate research and scholarship into tools you can apply in clinics, classrooms, and communities.",
  },
  {
    icon: "fa-chart-line",
    tone: "green",
    title: "Confidence & Impact",
    text: "Leave with language, judgment, and practices that strengthen care and professional leadership.",
  },
];

export default function EducationPage() {
  return (
    <div className="educate-page">
      <header className="hero-seamless hero-educate-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/educate/hero.jpg"
            alt="Muslim healthcare educator speaking to learners in a classroom"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="edu-hero-eyebrow">
              EDUCATION <span aria-hidden="true">|</span> LEARNING FOR A MORE COMPASSIONATE CARE
            </p>
            <h1 className="hero-seamless-title">
              Education
              <br />
              <em>that informs care.</em>
            </h1>
            <p className="hero-seamless-lead">
              Evidence-informed learning at the intersection of Islam, ethics, and healthcare.
            </p>
            <div className="hero-seamless-actions">
              <a href="#featured" className="btn-seamless-maroon">
                EXPLORE PROGRAMS <i className="fa-solid fa-arrow-right" />
              </a>
              <Link href="/consultation" className="btn-seamless-outline">
                REQUEST TRAINING
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote edu-hero-stack">
            <p className="quote-text">
              Faith
              <br />
              Ethics
              <br />
              Patient Care
              <br />
              Better Outcomes
            </p>
          </div>
        </div>
      </header>

      <section className="edu-mission">
        <div className="container">
          <div className="edu-mission-grid">
            <div className="edu-mission-copy">
              <p className="edu-eyebrow">OUR EDUCATIONAL MISSION</p>
              <h2 className="edu-h2">Why We Teach</h2>
              <p className="edu-body">
                II&amp;M translates rigorous research and lived experience into practical learning for students, clinicians, institutions, and communities. Our education programs build knowledge, strengthen ethical reasoning, and support more equitable, compassionate, and culturally informed healthcare for Muslim patients and all communities.
              </p>
              <Link href="/about" className="edu-btn edu-btn-fill">
                OUR APPROACH TO EDUCATION <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="edu-mission-media">
              <img
                src="/images/educate/edu-mission.jpg"
                alt="Diverse healthcare professionals collaborating in an educational discussion"
              />
            </div>
            <aside className="edu-mission-quote">
              <span className="edu-quote-mark" aria-hidden="true">“</span>
              <p>
                Education is how we turn knowledge into better care — for individuals, communities, and a more just and compassionate healthcare system.
              </p>
              <div className="edu-quote-line" />
            </aside>
          </div>
        </div>
      </section>

      <section className="edu-pathways" id="pathways">
        <div className="container">
          <div className="edu-section-head">
            <div>
              <p className="edu-eyebrow">LEARNING PATHWAYS</p>
              <h2 className="edu-h2">Education for Every Stage, Setting, and Community</h2>
            </div>
            <p className="edu-section-aside">
              Choose the pathway that fits your role, goals, and the communities you serve.
            </p>
          </div>
          <div className="edu-path-grid">
            {pathways.map((item) => (
              <article className="edu-path-card" key={item.title}>
                <div className="edu-path-media">
                  <img src={item.img} alt={item.title} />
                  <span className="edu-path-icon">
                    <i className={`fa-solid ${item.icon}`} />
                  </span>
                </div>
                <div className="edu-path-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="edu-path-arrow" aria-label={`Explore ${item.title}`}>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-featured" id="featured">
        <div className="container">
          <div className="edu-section-head">
            <div>
              <p className="edu-eyebrow">FEATURED COURSES &amp; PROGRAMS</p>
              <h2 className="edu-h2">Our Signature Learning Experiences</h2>
            </div>
            <p className="edu-section-aside">
              Evidence-based. Expert-led. Designed for real-world impact.
            </p>
          </div>
          <div className="edu-featured-grid">
            {featured.map((course) => (
              <article className="edu-featured-card" key={course.title}>
                <div className="edu-featured-media">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="edu-featured-body">
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                  <Link href={course.href} className="edu-text-link">
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-formats">
        <div className="container">
          <div className="edu-section-head">
            <div>
              <p className="edu-eyebrow">HOW WE TEACH</p>
              <h2 className="edu-h2">Flexible Formats. Lasting Impact.</h2>
            </div>
            <p className="edu-section-aside">
              We offer a range of learning formats to meet the needs of learners and institutions, in-person and online.
            </p>
          </div>
          <div className="edu-formats-track">
            {formats.map((item) => (
              <article className="edu-format-item" key={item.title}>
                <div className="edu-format-node">
                  <span className="edu-format-icon">
                    <i className={`fa-solid ${item.icon}`} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-audience">
        <div className="container">
          <div className="edu-section-head">
            <div>
              <p className="edu-eyebrow">WHO LEARNS WITH US</p>
              <h2 className="edu-h2">A Diverse Learning Community</h2>
            </div>
            <p className="edu-section-aside">
              Healthcare professionals, learners, and leaders across roles and settings.
            </p>
          </div>
          <div className="edu-audience-grid">
            {audiences.map(([img, label]) => (
              <figure className="edu-audience-item" key={label}>
                <img src={img} alt={label} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-gains">
        <div className="container">
          <div className="edu-section-head">
            <div>
              <p className="edu-eyebrow">WHAT PARTICIPANTS GAIN</p>
              <h2 className="edu-h2">Knowledge. Skills. Greater Impact.</h2>
            </div>
            <p className="edu-section-aside">
              Education designed to strengthen judgment, care, and professional confidence.
            </p>
          </div>
          <div className="edu-gains-grid">
            {gains.map((item) => (
              <article className="edu-gain-item" key={item.title}>
                <span className={`edu-gain-icon edu-gain-icon--${item.tone}`}>
                  <i className={`fa-solid ${item.icon}`} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-testimonial container-fluid p-0">
        <div className="row g-0 edu-testimonial-row">
          <div className="col-lg-5 edu-testimonial-media">
            <img
              src="/images/educate/testimonial.jpg"
              alt="Muslim healthcare professional in a white coat"
            />
          </div>
          <div className="col-lg-7 edu-testimonial-copy">
            <span className="edu-quote-mark" aria-hidden="true">“</span>
            <p>
              II&amp;M&apos;s education programs gave me the language, confidence, and practical tools to serve my patients with greater compassion and understanding. It&apos;s knowledge that truly makes a difference in daily practice.
            </p>
            <div className="edu-testimonial-attr">
              <span className="edu-quote-line" />
              <cite>MEDICAL RESIDENT, UNITED STATES</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="edu-cta container-fluid p-0">
        <div className="row g-0 edu-cta-row">
          <div className="col-lg-5 edu-cta-media">
            <img
              src="/images/educate/cta-mosque.jpg"
              alt="Mosque and cityscape viewed through an ornate Islamic arch at sunset"
            />
          </div>
          <div className="col-lg-7 edu-cta-copy">
            <div className="edu-cta-inner">
              <h2>Education for a Healthier, More Compassionate Tomorrow.</h2>
              <p>
                Explore our programs, request training for your institution, or get in touch to learn how II&amp;M education can support your goals.
              </p>
              <div className="edu-cta-actions">
                <a href="#featured" className="edu-btn edu-btn-fill">
                  EXPLORE PROGRAMS <i className="fa-solid fa-arrow-right" />
                </a>
                <Link href="/consultation" className="edu-btn edu-btn-light">
                  REQUEST INSTITUTIONAL TRAINING
                </Link>
                <Link href="/consultation" className="edu-btn edu-btn-light">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
