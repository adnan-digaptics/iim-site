import { asset } from "../../lib/asset";
import Link from "next/link";
import ConsultationBtn from "../../components/ConsultationBtn";
import SpeakingBtn from "../../components/SpeakingBtn";

export const metadata = {
  title: "Our Impact | Initiative on Islam & Medicine",
  description:
    "II&M advances understanding and improves healthcare through research, educational programs, conferences, workshops, lectures, and strategic partnerships.",
};

const snapshot = [
  [
    "fa-people-group",
    "Workshops & Seminars",
    "Interactive learning experiences for healthcare professionals, students, and communities.",
  ],
  [
    "fa-chalkboard-user",
    "Conferences & Symposia",
    "Bringing together diverse voices to advance dialogue, learning, and collaboration.",
  ],
  [
    "fa-magnifying-glass",
    "Consultation & Advisory",
    "Providing guidance to organizations and professionals on faith-informed, culturally responsive care.",
  ],
  [
    "fa-book-open",
    "Courses & Lectures",
    "Educational programs that build knowledge, practical skills, and deeper understanding.",
  ],
  [
    "fa-handshake",
    "Strategic Partnerships",
    "Collaborating with healthcare, academic, faith-based, and community organizations to expand reach and impact.",
  ],
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
    img: asset("/images/our-impact/conf-1.jpg"),
    title: "Dignity and Healthcare at End-of-Life: Abrahamic Faiths in a Bioethics Conversation",
    text: "A multidisciplinary dialogue on dignity, care, and faith traditions at the end of life.",
    href: "/dignity-and-healthcare-at-end-of-life/",
  },
  {
    img: asset("/images/our-impact/conf-2.jpg"),
    title: "Interfaces and Discourses: A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine",
    text: "Scholars and clinicians examining the intersections of theology, law, and biomedicine.",
    href: "/interfaces-and-discourses/",
  },
  {
    img: asset("/images/our-impact/conf-3.jpg"),
    title: "Multidisciplinary Symposium on Islam and Biomedicine",
    text: "Advancing research and conversation across medicine, ethics, and Islamic studies.",
    href: "/multidisciplinary-symposium-on-islam-and-biomedicine/",
  },
  {
    img: asset("/images/our-impact/conf-4.jpg"),
    title: "Religious Dimensions of Healthcare Delivery: A Multidisciplinary Workshop",
    text: "Practical workshop exploring faith, values, and healthcare delivery.",
    href: "/religious-dimensions-of-healthcare-delivery/",
  },
];

const discourse = [
  {
    img: asset("/images/our-impact/disc-research.jpg"),
    icon: "fa-file-lines",
    title: "Research Projects",
    text: "Evidence-informed inquiry that strengthens understanding of Islam, ethics, and healthcare.",
    href: "/research",
    cta: "EXPLORE OUR RESEARCH",
  },
  {
    img: asset("/images/our-impact/disc-pubs.jpg"),
    icon: "fa-book",
    title: "Publications",
    text: "Books, articles, and resources that translate scholarship into practical guidance.",
    href: "/books",
    cta: "VIEW PUBLICATIONS",
  },
  {
    img: asset("/images/our-impact/disc-media.jpg"),
    icon: "fa-comments",
    title: "Public Discourse",
    text: "Commentary and media engagement that elevate informed public conversations.",
    href: "/resources",
    cta: "EXPLORE OUR MEDIA & COMMENTARY",
  },
];

const teaching = [
  {
    img: asset("/images/our-impact/teach-1.jpg"),
    title: "Constructing the Field of Islamic Bioethics",
    text: "Foundational teaching that maps the questions, methods, and stakes of the field.",
  },
  {
    img: asset("/images/our-impact/teach-2.jpg"),
    title: "A Mentored Introduction to Islam and Bioethics",
    text: "Guided learning for students and early-career professionals entering the conversation.",
  },
  {
    img: asset("/images/our-impact/teach-3.jpg"),
    title: "Islam, Medical Ethics, and Spiritual Care",
    text: "Education connecting clinical ethics with spiritual care and community contexts.",
  },
  {
    img: asset("/images/our-impact/teach-4.jpg"),
    title: "Introduction to the Field of Islamic Bioethics",
    text: "An accessible entry point for clinicians, educators, and community leaders.",
  },
];

const partners = [
  { src: asset("/images/our-impact/partners/isla.png"), name: "Islamic Schools League of America (ISLA)" },
  { src: asset("/images/our-impact/partners/amc.png"), name: "Association of Muslim Chaplains (AMC)" },
  { src: asset("/images/our-impact/partners/imana.png"), name: "Islamic Medical Association of North America (IMANA)" },
  { src: asset("/images/our-impact/partners/amhp.png"), name: "American Muslim Health Professionals (AMHP)" },
  { src: asset("/images/our-impact/partners/fyi.png"), name: "The Family & Youth Institute (FYI)" },
  { src: asset("/images/our-impact/partners/khalil-center.png"), name: "Khalil Center" },
  { src: asset("/images/our-impact/partners/iman-network.png"), name: "Inner-City Muslim Action Network (IMAN)" },
  { src: asset("/images/our-impact/partners/stanford-mmhl.png"), name: "Stanford Muslim Mental Health & Islamic Psychology Lab" },
];

const journey = [
  ["fa-people-group", "Workshops & Seminars"],
  ["fa-chalkboard-user", "Conferences & Symposia"],
  ["fa-magnifying-glass", "Consultation & Advisory"],
  ["fa-book-open", "Courses & Lectures"],
  ["fa-handshake", "Strategic Partnerships"],
];

export default function ImpactPage() {
  return (
    <div className="impact-page">
      <header className="hero-seamless hero-impact-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/our-impact/hero.jpg")}
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
              From Research to <em>Real-World Change.</em>
            </h1>
            <p className="hero-seamless-lead">
              We advance understanding at the intersection of Islam and healthcare through expert consultation, educational programs, professional training, courses, and speaking engagements. Building on our foundation of research and scholarship, we equip healthcare professionals, organizations, and communities with the knowledge and insights needed to provide culturally responsive, compassionate care.
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
            <p className="imp-eyebrow-accent">IMPACT SNAPSHOT</p>
            <h2 className="imp-h2">Broad Impact Across a Shared Mission</h2>
            <p className="imp-lead">
              Through consultation, education, workshops, lectures, courses, and partnerships, II&amp;M advances meaningful understanding at the intersection of Islam and healthcare.
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

      <section className="imp-national">
        <div className="container">
          <div className="imp-national-grid">
            <div className="imp-national-copy">
              <h2 className="imp-h2">
                Research with National Reach
              </h2>
              <p className="imp-body">
                Through workshops, conferences, research, and lectures, II&amp;M contributes to national conversations on Islam and medicine, engaging diverse communities across the United States.
              </p>
              <Link href="/research" className="imp-btn imp-btn-fill">
                EXPLORE OUR RESEARCH <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="imp-national-map">
              <img src={asset("/images/our-impact/us-map.svg")} alt="Map of II&M research and program locations across the United States" />
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
          <div className="imp-section-intro imp-section-intro--left imp-section-intro--withlink">
            <div>
              <h2 className="imp-h2">Featured Conferences &amp; Public Programs</h2>
              <p className="imp-lead">
                II&amp;M convenes thought leaders, healthcare professionals, scholars, and community members to explore pressing issues at the intersection of Islam and medicine.
              </p>
            </div>
            <Link href="/conferences" className="imp-view-all-link">
              View all <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="imp-card-grid-4">
            {conferences.map((item) => (
              <article className="imp-media-card" key={item.title}>
                <div className="imp-media-card-img">
                  <Link href={item.href} aria-label={item.title}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                </div>
                <div className="imp-media-card-body">
                  <h3>
                    <Link href={item.href} className="imp-card-title-link">
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="imp-card-arrow" aria-label={`Learn more about ${item.title}`}>
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
          <div className="imp-section-intro imp-section-intro--left imp-section-intro--withlink">
            <div>
              <h2 className="imp-h2">Research, Publications &amp; Public Discourse</h2>
              <p className="imp-lead">
                II&amp;M&apos;s work informs scholarly research, shapes professional practice, and contributes to broader public conversations.
              </p>
            </div>
            <Link href="/books" className="imp-view-all-link">
              View all <i className="fa-solid fa-arrow-right" />
            </Link>
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
          <div className="imp-section-intro imp-section-intro--left imp-section-intro--withlink">
            <div>
              <h2 className="imp-h2">Courses, Lectures &amp; Teaching Impact</h2>
              <p className="imp-lead">
                Educational programs that build knowledge, inspire dialogue, and develop future leaders in Islamic bioethics and healthcare.
              </p>
            </div>
            <Link href="/courses" className="imp-view-all-link">
              View all <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="imp-card-grid-4">
            {teaching.map((item) => (
              <article className="imp-course" key={item.title}>
                <div className="imp-course-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="imp-course-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="imp-course-foot">
                    <Link href="/courses" className="crs-btn crs-btn-fill crs-btn-sm">
                      LEARN MORE <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
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
          </div>
          <div className="imp-journey-track">
            {journey.map(([icon, title], index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="imp-cta container-fluid p-0">
        <div className="imp-cta-inner">
          <div className="imp-cta-content">
            <h2>
              Let&apos;s Build More Meaningful Impact Together.
            </h2>
            <div className="imp-cta-divider" aria-hidden="true" />
            <div className="imp-cta-right">
              <p>
                We invite healthcare systems, universities, community organizations, and institutions to collaborate with II&amp;M to advance research, education, and compassionate care.
              </p>
              <div className="imp-cta-actions">
                <ConsultationBtn className="imp-btn imp-btn-fill">
                  REQUEST A CONSULTATION <i className="fa-solid fa-arrow-right" />
                </ConsultationBtn>
                <SpeakingBtn className="imp-btn imp-btn-light">
                  INVITE A SPEAKER <i className="fa-solid fa-arrow-right" />
                </SpeakingBtn>
              </div>
            </div>
          </div>
          <div className="imp-cta-media">
            <img
              src={asset("/images/our-impact/cta-mosque.jpg")}
              alt="Mosque viewed through ornate Islamic arches at sunset"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
