import Link from "next/link";

export const metadata = {
  title: "Our Impact | Initiative on Islam & Medicine",
  description:
    "II&M advances understanding and improves healthcare through research, educational programs, conferences, workshops, lectures, and strategic partnerships.",
};

const snapshot = [
  ["fa-people-group", "Workshops & Seminars", "Interactive learning experiences for healthcare professionals, students, and communities."],
  ["fa-chalkboard-user", "Conferences & Symposia", "Bringing together diverse voices to advance knowledge and elevate important conversations."],
  ["fa-magnifying-glass", "Research Projects", "Generating evidence and insights to inform practice, policy, and education."],
  ["fa-book-open", "Courses & Lectures", "Educational programs that build knowledge and practical skills."],
  ["fa-handshake", "Strategic Partnerships", "Collaborating with healthcare, academic, faith-based, and community organizations to expand reach and impact."],
];

const creates = [
  ["fa-flask", "Research", "Evidence that informs practice, education, and policy."],
  ["fa-graduation-cap", "Education & Training", "Programs that build knowledge and strengthen care."],
  ["fa-users", "Workshops", "Interactive learning for clinicians and communities."],
  ["fa-microphone", "Conferences", "Convenings that elevate critical conversations."],
  ["fa-book", "Lectures & Courses", "Teaching that shapes ethical judgment and practice."],
  ["fa-handshake", "Partnerships", "Collaborations that expand reach and lasting impact."],
];

const examples = [
  {
    title: "Islamic Bioethics and End-of-Life Care",
    place: "Herndon, Virginia",
    text: "Exploring ethical, clinical, and spiritual dimensions of end-of-life care in Islam.",
  },
  {
    title: "Islamic Bioethics: What is it? What is it not?",
    place: "Rosemont, Illinois",
    text: "Clarifying the scope, principles, and misconceptions about Islamic bioethics.",
  },
  {
    title: "Gifting Life? Accepting Death?",
    place: null,
    text: "Community-based program examining organ donation, end-of-life care, and ethical decision-making.",
  },
  {
    title: "Organ Donation in Islam",
    place: null,
    text: "Educational program advancing understanding of Islamic perspectives on organ donation and transplantation.",
  },
];

const conferences = [
  {
    img: "/images/our-impact/conf-1.jpg",
    title: "Dignity and Healthcare at End-of-Life: Abrahamic Faiths in a Bioethics Conversation",
    text: "A multidisciplinary dialogue on dignity, care, and faith traditions at the end of life.",
  },
  {
    img: "/images/our-impact/conf-2.jpg",
    title: "Interfaces and Discourses: A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine",
    text: "Scholars and clinicians examining the intersections of theology, law, and biomedicine.",
  },
  {
    img: "/images/our-impact/conf-3.jpg",
    title: "Multidisciplinary Symposium on Islam and Biomedicine",
    text: "Advancing research and conversation across medicine, ethics, and Islamic studies.",
  },
  {
    img: "/images/our-impact/conf-4.jpg",
    title: "Religious Dimensions of Healthcare Delivery: A Multidisciplinary Workshop",
    text: "Practical workshop exploring faith, values, and healthcare delivery.",
  },
];

const discourse = [
  {
    img: "/images/our-impact/disc-research.jpg",
    icon: "fa-file-lines",
    title: "Research Projects",
    text: "Evidence-informed inquiry that strengthens understanding of Islam, ethics, and healthcare.",
    href: "/research",
    cta: "EXPLORE OUR RESEARCH",
  },
  {
    img: "/images/our-impact/disc-pubs.jpg",
    icon: "fa-book",
    title: "Publications",
    text: "Books, articles, and resources that translate scholarship into practical guidance.",
    href: "/books",
    cta: "VIEW PUBLICATIONS",
  },
  {
    img: "/images/our-impact/disc-media.jpg",
    icon: "fa-comments",
    title: "Public Discourse",
    text: "Commentary and media engagement that elevate informed public conversations.",
    href: "/resources",
    cta: "EXPLORE OUR MEDIA & COMMENTARY",
  },
];

const teaching = [
  {
    img: "/images/our-impact/teach-1.jpg",
    title: "Constructing the Field of Islamic Bioethics",
    text: "Foundational teaching that maps the questions, methods, and stakes of the field.",
  },
  {
    img: "/images/our-impact/teach-2.jpg",
    title: "A Mentored Introduction to Islam and Bioethics",
    text: "Guided learning for students and early-career professionals entering the conversation.",
  },
  {
    img: "/images/our-impact/teach-3.jpg",
    title: "Islam, Medical Ethics, and Spiritual Care",
    text: "Education connecting clinical ethics with spiritual care and community contexts.",
  },
  {
    img: "/images/our-impact/teach-4.jpg",
    title: "Introduction to the Field of Islamic Bioethics",
    text: "An accessible entry point for clinicians, educators, and community leaders.",
  },
];

const partners = [
  { src: "/images/our-impact/partners/imana.svg", name: "IMANA" },
  { src: "/images/our-impact/partners/georgetown.svg", name: "Georgetown University" },
  { src: "/images/our-impact/partners/jhu.svg", name: "Johns Hopkins University" },
  { src: "/images/our-impact/partners/michigan.svg", name: "University of Michigan" },
  { src: "/images/our-impact/partners/rush.svg", name: "Rush University" },
  { src: "/images/our-impact/partners/kaiser.svg", name: "The Kaiser Permanente School of Medicine" },
  { src: "/images/our-impact/partners/community.svg", name: "Community & Faith-Based Organizations" },
];

const journey = [
  ["fa-headphones", "Listen", "Begin with community needs and lived experience."],
  ["fa-magnifying-glass", "Research", "Generate evidence that informs care and policy."],
  ["fa-book-open", "Educate", "Translate knowledge into practical learning."],
  ["fa-people-group", "Convene", "Bring diverse voices into shared dialogue."],
  ["fa-handshake", "Collaborate", "Partner across institutions and communities."],
  ["fa-heart", "Improve Care", "Strengthen compassionate, equitable healthcare."],
];

export default function ImpactPage() {
  return (
    <div className="impact-page">
      <header className="hero-seamless hero-impact-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/our-impact/hero.jpg"
            alt="Healthcare professionals collaborating around a laptop"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold imp-hero-eyebrow">OUR IMPACT</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              From Research to
              <br />
              <em>Real-World Change.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M advances understanding and improves healthcare through research, educational programs, conferences, workshops, lectures, and strategic partnerships at the intersection of Islam and medicine.
            </p>
            <div className="hero-seamless-actions">
              <a href="#snapshot" className="btn-seamless-maroon">
                EXPLORE OUR WORK <i className="fa-solid fa-arrow-right" />
              </a>
              <Link href="/consultation" className="btn-seamless-outline">
                PARTNER WITH II&amp;M <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote imp-hero-quote">
            <p className="quote-text">
              Knowledge shared.
              <br />
              Communities served.
              <br />
              Healthcare transformed.
            </p>
          </div>
        </div>
      </header>

      <section className="imp-snapshot" id="snapshot">
        <div className="container">
          <div className="imp-section-intro">
            <p className="imp-eyebrow">IMPACT SNAPSHOT</p>
            <h2 className="imp-h2">Broad Impact Across a Shared Mission</h2>
            <p className="imp-lead">
              Through research, education, workshops, lectures, conferences, and partnerships, II&amp;M creates meaningful change at the intersection of Islam and medicine.
            </p>
          </div>
          <div className="imp-snapshot-grid">
            {snapshot.map(([icon, title, text]) => (
              <article className="imp-snapshot-card" key={title}>
                <span className="imp-icon-circle">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-creates">
        <div className="container">
          <div className="imp-section-intro">
            <h2 className="imp-h2">How II&amp;M Creates Impact</h2>
            <p className="imp-lead">
              Six interconnected areas of work that drive understanding, build capacity, and improve care.
            </p>
          </div>
          <div className="imp-creates-grid">
            {creates.map(([icon, title, text]) => (
              <article className="imp-creates-card" key={title}>
                <span className="imp-icon-circle imp-icon-circle--sm">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-national">
        <div className="container">
          <div className="imp-national-grid">
            <div className="imp-national-copy">
              <h2 className="imp-h2">
                Research with
                <br />
                National Reach
              </h2>
              <p className="imp-body">
                Through workshops, conferences, research, and lectures, II&amp;M contributes to national conversations on Islam and medicine, engaging diverse communities across the United States.
              </p>
              <Link href="/research" className="imp-btn imp-btn-fill">
                EXPLORE OUR RESEARCH <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="imp-national-map">
              <img src="/images/our-impact/us-map.svg" alt="Map of II&M research and program locations across the United States" />
            </div>
            <div className="imp-national-examples">
              <p className="imp-eyebrow">SELECTED EXAMPLES</p>
              <div className="imp-examples-grid">
                {examples.map((item) => (
                  <article className="imp-example-card" key={item.title}>
                    <span className="imp-example-pin" aria-hidden="true">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <h3>{item.title}</h3>
                    {item.place ? <p className="imp-example-place">{item.place}</p> : null}
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="imp-conferences">
        <div className="container">
          <div className="imp-section-intro imp-section-intro--left">
            <h2 className="imp-h2">Featured Conferences &amp; Public Programs</h2>
            <p className="imp-lead">
              II&amp;M convenes thought leaders, healthcare professionals, scholars, and community members to explore pressing issues at the intersection of Islam and medicine.
            </p>
          </div>
          <div className="imp-card-grid-4">
            {conferences.map((item) => (
              <article className="imp-media-card" key={item.title}>
                <div className="imp-media-card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="imp-media-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href="/speaking" className="imp-card-arrow" aria-label={`Learn more about ${item.title}`}>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-discourse">
        <div className="container">
          <div className="imp-section-intro imp-section-intro--left">
            <h2 className="imp-h2">Research, Publications &amp; Public Discourse</h2>
            <p className="imp-lead">
              II&amp;M&apos;s work informs scholarly research, shapes professional practice, and contributes to broader public conversations.
            </p>
          </div>
          <div className="imp-discourse-grid">
            {discourse.map((item) => (
              <article className="imp-discourse-card" key={item.title}>
                <div className="imp-discourse-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="imp-discourse-body">
                  <span className="imp-icon-circle imp-icon-circle--sm">
                    <i className={`fa-solid ${item.icon}`} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="imp-text-link">
                    {item.cta} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-teaching">
        <div className="container">
          <div className="imp-section-intro imp-section-intro--left">
            <h2 className="imp-h2">Courses, Lectures &amp; Teaching Impact</h2>
            <p className="imp-lead">
              Educational programs that build knowledge, inspire dialogue, and develop future leaders in Islamic bioethics and healthcare.
            </p>
          </div>
          <div className="imp-card-grid-4">
            {teaching.map((item) => (
              <article className="imp-media-card" key={item.title}>
                <div className="imp-media-card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="imp-media-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href="/courses" className="imp-card-arrow" aria-label={`Learn more about ${item.title}`}>
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-partners">
        <div className="container">
          <div className="imp-section-intro imp-section-intro--left">
            <h2 className="imp-h2">Partners in Impact</h2>
            <p className="imp-lead">
              II&amp;M works with healthcare, academic, faith-based, and community organizations to advance understanding and improve care.
            </p>
          </div>
          <div className="imp-partners-grid">
            {partners.map((partner) => (
              <article className="imp-partner" key={partner.name}>
                <img src={partner.src} alt={partner.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-journey">
        <div className="container">
          <div className="imp-section-intro">
            <h2 className="imp-h2">The Impact Journey</h2>
            <p className="imp-lead">A collaborative process that turns dialogue into meaningful change.</p>
          </div>
          <div className="imp-journey-track">
            {journey.map(([icon, title, text], index) => (
              <div className="imp-journey-item" key={title}>
                <div className="imp-journey-node">
                  <span className="imp-icon-circle">
                    <i className={`fa-solid ${icon}`} />
                  </span>
                  {index < journey.length - 1 ? (
                    <span className="imp-journey-arrow" aria-hidden="true">
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  ) : null}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-cta container-fluid p-0">
        <div className="imp-cta-inner">
          <div className="imp-cta-content">
            <h2>
              Let&apos;s Build More Meaningful
              <br />
              Impact Together.
            </h2>
            <div className="imp-cta-divider" aria-hidden="true" />
            <div className="imp-cta-right">
              <p>
                We invite healthcare systems, universities, community organizations, and institutions to collaborate with II&amp;M to advance research, education, and compassionate care.
              </p>
              <div className="imp-cta-actions">
                <Link href="/consultation" className="imp-btn imp-btn-fill">
                  REQUEST A CONSULTATION <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/speaking" className="imp-btn imp-btn-light">
                  INVITE A SPEAKER <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="imp-cta-media">
            <img
              src="/images/our-impact/cta-mosque.jpg"
              alt="Mosque viewed through ornate Islamic arches at sunset"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
