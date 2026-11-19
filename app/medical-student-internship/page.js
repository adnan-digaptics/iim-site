import { asset } from "../../lib/asset";
import Link from "next/link";
import PastInternsSlider from "./PastInternsSlider";

export const metadata = {
  title: "Medical Student Internship | Initiative on Islam & Medicine",
  description:
    "A formative internship program for Muslim medical students to explore the ethical, spiritual, and social dimensions of medicine, and to develop as principled, compassionate healthcare leaders.",
};

const currentInterns = [
  {
    img: asset("/images/interns/intern-nasar-qureshi.jpg"),
    name: "Nasar Qureshi",
    role: "Summer Intern 2026",
    school: "Medical Student",
    objectPosition: "center 25%",
    isPlaceholder: false,
  },
  {
    img: asset("/images/interns/intern-sajid-fahumy.jpg"),
    name: "Sajid H. Fahumy",
    role: "Summer Intern 2026",
    school: "Rowan-Virtua School of Osteopathic Medicine",
    objectPosition: "center 20%",
    isPlaceholder: false,
  },
];

const pastInterns = [
  {
    img: asset("/images/our-team/nabeel.jpg"),
    name: "Muhammad Yusuf Khan",
    role: "Past Intern",
    objectPosition: "center 20%",
  },
  {
    img: asset("/images/educate/testimonial-intern.jpg"),
    name: "Salma Saifuddin",
    role: "Past Intern",
    objectPosition: "center 48%",
  },
  {
    img: asset("/images/our-team/laila.jpg"),
    name: "Benish Baqai",
    role: "Past Intern",
    objectPosition: "center 20%",
  },
];

const publications = [
  {
    img: asset("/images/work-islam-biomedicine.png"),
    title: "Islamic Dimensions of End-of-Life Healthcare",
    href: "/research",
  },
  {
    img: asset("/images/work-maqasid.png"),
    title: "The Unbreakable Relationship: Bioethical Perspectives on Human Breast Milk",
    href: "/research",
  },
  {
    img: asset("/images/work-organ-donation.png"),
    title: "Homeopathy and Muslim Patients: Islamic Ethics – Legal Perspectives",
    href: "/research",
  },
  {
    img: asset("/images/work-medicine-shariah.png"),
    title: "Predictors of Perceived Discrimination in Medical Settings among Muslim Women in the USA",
    href: "/research",
  },
  {
    img: asset("/images/work-covid.png"),
    title: "Islamic Bioethical Perspectives on Gender Identity for Intersex Patients",
    href: "/research",
  },
  {
    img: asset("/images/book-bridging-cover.jpg"),
    title: "Faculty of Responsibility: Ethical Challenges for Muslim Students in Healthcare",
    href: "/research",
  },
  {
    img: asset("/images/book-faith-health.jpg"),
    title: "Medicine, Morals and Female Genital Cutting",
    href: "/research",
  },
];

const galleryPhotos = [
  {
    img: asset("/images/bio-way-seminar.jpg"),
    alt: "Internship seminar presentation",
  },
  {
    img: asset("/images/bio-student-group.jpg"),
    alt: "Intern group discussion",
  },
  {
    img: asset("/images/bio-student-speak.jpg"),
    alt: "Intern research presentation",
  },
];

export default function MedicalStudentInternshipPage() {
  return (
    <div className="internship-page">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <header className="hero-seamless intern-hero">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/hero-doctor-team.jpg")}
            alt="Medical students engaged in an educational mentoring discussion"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay intern-hero-gradient" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner intern-hero-content">
            <p className="intern-hero-eyebrow">
              EDUCATION
              <span className="intern-eyebrow-sep" aria-hidden="true"> · </span>
              MENTORSHIP
              <span className="intern-eyebrow-sep" aria-hidden="true"> · </span>
              SERVICE
            </p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Medical Student
              <br />
              Internship
            </h1>
            <p className="hero-seamless-lead">
              A formative internship program for Muslim medical students to explore the ethical,
              spiritual, and social dimensions of medicine, and to develop as principled, compassionate
              healthcare leaders.
            </p>
            <div className="hero-seamless-actions">
              <a href="#apply" className="btn-seamless-maroon">
                FILL APPLICATION FORM <i className="fa-solid fa-arrow-right ms-1" />
              </a>
            </div>
          </div>
          <aside className="intern-hero-quote-panel">
            <p className="intern-hero-quote-text">
              Developing principled, compassionate healthcare leaders.
            </p>
            <div className="intern-hero-quote-bar" />
          </aside>
        </div>
      </header>

      {/* ── PROGRAM OVERVIEW ───────────────────────────────────── */}
      <section className="intern-overview">
        <div className="container">
          <div className="intern-overview-grid">
            <div className="intern-overview-copy">
              <div className="intern-eyebrow-row">
                <span className="intern-eyebrow-line" />
                <span className="intern-eyebrow-label">PROGRAM OVERVIEW</span>
              </div>
              <h2 className="intern-section-h2">
                Cultivating Knowledge, Character and Service in Medicine
              </h2>
              <p className="intern-section-body">
                The Initiative on Islam and Medicine's Medical Student Internship is a competitive
                enrichment program that provides directed learning experiences and tailored support for
                Muslim medical students. Interns undertake a variety of academic, research, and service
                activities to explore the convergence of Islamic thought and contemporary healthcare.
              </p>
              <p className="intern-section-body">
                In addition to structured projects, interns engage with faculty, participate in
                discussions and workshops, contribute to II&amp;M's research and educational initiatives,
                and develop practical skills in writing, research, and outreach. The program aims to
                inspire interns to integrate clinical excellence with ethical reflection and a commitment
                to serving their communities.
              </p>
            </div>
            <div className="intern-overview-media">
              <img
                src={asset("/images/interns/internship-program-overview.jpg")}
                alt="II&M Medical Student Interns and Faculty with Community Workshop Banner"
                className="intern-overview-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SUMMER 2026 INTERNS ────────────────────────────────── */}
      <section className="intern-current">
        <div className="container">
          <div className="intern-current-grid">
            <div className="intern-current-copy">
              <h2 className="intern-section-h2">Summer 2026 Interns</h2>
              <p className="intern-section-body">
                Meet our current interns who are contributing to research, education, and outreach at
                the intersection of Islam and medicine.
              </p>
            </div>
            <div className="intern-cards-row">
              {currentInterns.map((intern) => (
                <article className="intern-profile-card" key={intern.name}>
                  <img
                    src={intern.img}
                    alt={intern.name}
                    className={`intern-profile-photo ${intern.isPlaceholder ? "intern-profile-photo-placeholder" : ""}`}
                    style={intern.objectPosition ? { objectPosition: intern.objectPosition } : undefined}
                    loading="lazy"
                  />
                  <div className="intern-profile-body">
                    <h3 className="intern-profile-name">{intern.name}</h3>
                    <div className="intern-profile-bar" />
                    <p className="intern-profile-role">{intern.role}</p>
                    {intern.school && (
                      <p className="intern-profile-school">{intern.school}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERN REFLECTIONS ─────────────────────────────────── */}
      <section className="intern-reflections">
        <div className="container">
          <div className="intern-reflections-heading">
            <span className="intern-eyebrow-line" />
            <h2 className="intern-reflections-title">Intern Reflections</h2>
          </div>
          <div className="intern-testimonial-grid">
            <article className="intern-testimonial-card">
              <span className="intern-quote-icon" aria-hidden="true">&ldquo;</span>
              <p className="intern-testimonial-text">
                My Summer 2023 internship with II&amp;M was a highly enriching experience. I had the
                opportunity to understand the profound interface between Islamic ethics and modern
                medicine. I contributed to active research projects, participated in educational
                initiatives, and developed practical skills that will benefit my future career. Most
                importantly, the program connected me with a community of like-minded peers and mentors
                who are committed to ethical and compassionate healthcare.
              </p>
              <div className="intern-testimonial-attr">
                <span className="intern-testimonial-attr-bar" />
                <div>
                  <p className="intern-testimonial-name">Muhammad Yusuf Khan</p>
                  <p className="intern-testimonial-role">Medical Student, Year 4</p>
                </div>
              </div>
            </article>
            <article className="intern-testimonial-card">
              <span className="intern-quote-icon" aria-hidden="true">&ldquo;</span>
              <p className="intern-testimonial-text">
                My Summer 2025 internship with II&amp;M allowed me to formally study Islamic bioethics
                in a way that deepened both my medical education and my faith. The program provided a
                space for meaningful discussion, research, and service, and introduced me to mentors who
                are truly invested in developing the next generation of Muslim healthcare leaders.
              </p>
              <div className="intern-testimonial-attr">
                <span className="intern-testimonial-attr-bar" />
                <div>
                  <p className="intern-testimonial-name">Salma Saifuddin</p>
                  <p className="intern-testimonial-role">Medical Student at Year 4</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── PAST INTERNS ───────────────────────────────────────── */}
      <section className="intern-past">
        <div className="container">
          <PastInternsSlider />
        </div>
      </section>

      {/* ── INTERNSHIP OUTPUTS ─────────────────────────────────── */}
      <section className="intern-outputs">
        <div className="container">
          <div className="intern-outputs-header">
            <div>
              <div className="intern-eyebrow-row">
                <span className="intern-eyebrow-line" />
                <span className="intern-eyebrow-label">INTERNSHIP OUTPUTS</span>
              </div>
              <h2 className="intern-section-h2 mb-1">Internship Outputs</h2>
              <p className="intern-outputs-desc">
                Research, writing, and educational resources produced by our interns contribute to
                II&amp;M's mission and serve the wider community.
              </p>
            </div>
            <Link href="/research" className="intern-view-all-link">
              VIEW ALL PUBLICATIONS <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="intern-pub-grid">
            {publications.map((pub) => (
              <article className="intern-pub-card" key={pub.title}>
                <div className="intern-pub-img-wrap">
                  <img
                    src={pub.img}
                    alt={pub.title}
                    className="intern-pub-img"
                    loading="lazy"
                  />
                </div>
                <p className="intern-pub-title">{pub.title}</p>
                <Link href={pub.href} className="intern-pub-btn">
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTOS & HIGHLIGHTS ────────────────────────────────── */}
      <section className="intern-gallery">
        <div className="container">
          <div className="intern-gallery-grid">
            <div className="intern-gallery-copy">
              <h2 className="intern-gallery-heading">Photos &amp; Highlights</h2>
              <p className="intern-gallery-desc">
                Moments from our internship program, including presentations, discussions, and community
                engagement.
              </p>
            </div>
            <div className="intern-gallery-photos">
              {galleryPhotos.map((photo) => (
                <img
                  key={photo.alt}
                  src={photo.img}
                  alt={photo.alt}
                  className="intern-gallery-photo"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT CTA ────────────────────────────────────────── */}
      <section className="intern-support-cta" id="apply">
        <div className="container">
          <div className="intern-support-eyebrow">
            <span className="intern-eyebrow-line" />
            <span className="intern-eyebrow-label">BE PART OF WHAT'S NEXT</span>
          </div>
          <div className="intern-support-grid">
            <div className="intern-support-media">
              <img
                src={asset("/images/cta-archway.jpg")}
                alt="Islamic architectural archway"
                className="intern-support-img"
                loading="lazy"
              />
            </div>
            <div className="intern-support-body">
              <h2 className="intern-support-h2">Support Future Muslim Healthcare Leaders</h2>
              <p className="intern-support-desc">
                Help us continue to provide transformative learning experiences for Muslim medical
                students through mentorship, research, and service.
              </p>
            </div>
            <div className="intern-support-action">
              <Link href="/donate" className="intern-support-btn">
                SUPPORT OUR WORK <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
