import Link from "next/link";

export const metadata = {
  title: "Our Mission | Initiative on Islam & Medicine",
  description:
    "The Initiative on Islam & Medicine advances knowledge, education, and compassionate care at the intersection of Islam, medicine, and the communities we serve.",
};

const values = [
  ["fa-book-open", "burgundy", "Scholarship", "A commitment to rigorous research, critical inquiry, and lifelong learning."],
  ["fa-heart", "green", "Compassion", "Centering human dignity, care, and empathy in all we do."],
  ["fa-shield-halved", "burgundy", "Integrity", "Upholding honesty, ethical practice, and trust in our work and relationships."],
  ["fa-people-group", "green", "Collaboration", "Working across disciplines and communities to achieve greater impact."],
  ["fa-globe", "burgundy", "Community Impact", "Advancing real-world change that strengthens individuals, families, and communities."],
];

const pillars = [
  {
    img: "/images/our-mission/pillar-research.jpg",
    icon: "fa-chart-line",
    title: "Research & Impact",
    text: "We generate evidence that informs clinical practice, policy, and education on issues at the intersection of Islam and healthcare.",
    href: "/impact",
    cta: "EXPLORE RESEARCH",
  },
  {
    img: "/images/our-mission/pillar-education.jpg",
    icon: "fa-book-open",
    title: "Education & Training",
    text: "We develop courses, workshops, and professional development programs for healthcare professionals, students, and community members.",
    href: "/education",
    cta: "EXPLORE EDUCATION",
  },
  {
    img: "/images/our-mission/pillar-consultation.jpg",
    icon: "fa-people-group",
    title: "Consultation & Advisory",
    text: "We provide expert guidance for institutions, healthcare organizations, and policymakers on Islam-related healthcare needs, policies, and practices.",
    href: "/consultation",
    cta: "EXPLORE CONSULTATION",
  },
  {
    img: "/images/our-mission/pillar-speaking.jpg",
    icon: "fa-microphone",
    title: "Speaking & Dialogue",
    text: "We elevate trusted voices on Islam, medicine, and bioethics through speaking engagements, panels, and community conversations.",
    href: "/consultation",
    cta: "BOOK A SPEAKER",
  },
];

const serve = [
  {
    img: "/images/our-mission/serve-patients.jpg",
    icon: "fa-hand-holding-heart",
    title: "Patients & Families",
    text: "Individuals and families seeking respectful, informed, and compassionate care.",
  },
  {
    img: "/images/our-mission/serve-professionals.jpg",
    icon: "fa-user-doctor",
    title: "Healthcare Professionals",
    text: "Physicians, nurses, and allied health professionals seeking knowledge and practical guidance.",
  },
  {
    img: "/images/our-mission/serve-students.jpg",
    icon: "fa-graduation-cap",
    title: "Students & Trainees",
    text: "Medical, nursing, and public health students building skills for culturally responsive care.",
  },
  {
    img: "/images/our-mission/serve-institutions.jpg",
    icon: "fa-building-columns",
    title: "Institutions",
    text: "Hospitals, health systems, academic centers, and professional organizations.",
  },
  {
    img: "/images/our-mission/serve-communities.jpg",
    icon: "fa-people-roof",
    title: "Communities",
    text: "Faith-based and community organizations working for healthier, more equitable communities.",
  },
];

const journey = [
  ["fa-headphones", "LISTEN", "We listen to the lived experiences and needs of Muslim patients, families, and healthcare professionals."],
  ["fa-file-lines", "GENERATE EVIDENCE", "We conduct rigorous, community-engaged research to understand challenges and opportunities."],
  ["fa-book-open", "BUILD EDUCATION", "We develop practical, evidence-informed educational resources and training programs."],
  ["fa-hand-holding-heart", "IMPROVE CARE", "We partner with institutions and communities to translate knowledge into more inclusive, compassionate, and equitable healthcare."],
];

export default function MissionPage() {
  return (
    <div className="mission-page">
      <header className="hero-seamless hero-mission-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/our-mission/hero.jpg"
            alt="Healthcare professionals in discussion"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold msn-hero-eyebrow">OUR MISSION</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Advancing
              <br />
              understanding.
              <br />
              <em>Transforming care.</em>
            </h1>
            <p className="hero-seamless-lead">
              The Initiative on Islam &amp; Medicine (II&amp;M) advances knowledge, education, and compassionate care at the intersection of Islam, medicine, and the diverse communities we serve.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/education" className="btn-seamless-maroon">
                EXPLORE OUR WORK <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/consultation" className="btn-seamless-outline">
                PARTNER WITH II&amp;M <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote msn-hero-quote">
            <p className="quote-text">
              Knowledge.
              <br />
              People.
              <br />
              Better Care.
              <br />
              Stronger Communities.
            </p>
          </div>
        </div>
      </header>

      <section className="msn-statement">
        <div className="container">
          <div className="msn-statement-inner">
            <p className="msn-eyebrow msn-eyebrow--center">OUR MISSION</p>
            <span className="msn-bar msn-bar--center" />
            <p className="msn-statement-text">
              To advance understanding at the intersection of Islam and medicine
              <br className="d-none d-md-inline" />
              {" "}through rigorous research,{" "}
              <em>
                transformative education, expert consultation,
                <br className="d-none d-md-inline" />
                {" "}and collaborative partnerships
              </em>{" "}
              — working toward more compassionate,
              <br className="d-none d-md-inline" />
              {" "}equitable, and evidence-informed healthcare for all.
            </p>
          </div>
        </div>
      </section>

      <section className="msn-vision container-fluid p-0">
        <div className="row g-0 msn-vision-row">
          <div className="col-lg-4 msn-vision-media">
            <img
              src="/images/our-mission/vision-mosque.jpg"
              alt="Mosque viewed through an ornate Islamic archway"
            />
          </div>
          <div className="col-lg-5 msn-vision-copy">
            <p className="msn-eyebrow">OUR VISION</p>
            <h2 className="msn-h2">
              A more compassionate,
              <br />
              inclusive, and just healthcare future.
            </h2>
            <p className="msn-body">
              We envision healthcare systems and communities where Islamic thought, ethical reflection, and lived experiences inform practices that are compassionate, culturally responsive, and evidence-based — improving health and well-being for individuals and communities everywhere.
            </p>
          </div>
          <div className="col-lg-3 msn-vision-quote">
            <p>
              Faith.
              <br />
              Knowledge.
              <br />
              Compassion.
              <br />
              A Healthier
              <br />
              World Together.
            </p>
          </div>
        </div>
      </section>

      <section className="msn-values">
        <div className="container">
          <div className="msn-section-intro msn-section-intro--left">
            <p className="msn-eyebrow">OUR VALUES</p>
            <p className="msn-lead">
              Guided by enduring principles, we strive to bring knowledge, integrity, and compassion to everything we do.
            </p>
          </div>
          <div className="msn-values-grid">
            {values.map(([icon, tone, title, text]) => (
              <article className="msn-value-card" key={title}>
                <span className={`msn-icon-circle msn-icon-circle--${tone}`}>
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msn-pillars">
        <div className="container">
          <div className="msn-section-intro msn-section-intro--left">
            <p className="msn-eyebrow">HOW WE LIVE OUR MISSION</p>
            <p className="msn-lead">
              From knowledge to practice, we translate our mission into real-world impact through four interconnected pillars.
            </p>
          </div>
          <div className="msn-pillars-grid">
            {pillars.map((item) => (
              <article className="msn-pillar-card" key={item.title}>
                <div className="msn-pillar-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="msn-pillar-body">
                  <div className="msn-pillar-label">
                    <span className="msn-pillar-icon">
                      <i className={`fa-solid ${item.icon}`} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                  <Link href={item.href} className="msn-text-link">
                    {item.cta} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msn-serve">
        <div className="container">
          <div className="msn-section-intro msn-section-intro--left">
            <p className="msn-eyebrow">WHO WE SERVE</p>
            <p className="msn-lead">
              We work with a diverse range of individuals and organizations to advance understanding and improve care at the intersection of Islam and medicine.
            </p>
          </div>
          <div className="msn-serve-grid">
            {serve.map((item) => (
              <article className="msn-serve-card" key={item.title}>
                <div className="msn-serve-media">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="msn-serve-body">
                  <div className="msn-serve-label">
                    <span className="msn-serve-icon">
                      <i className={`fa-solid ${item.icon}`} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msn-journey">
        <div className="container">
          <div className="msn-journey-head">
            <div>
              <p className="msn-eyebrow">OUR JOURNEY</p>
              <h2 className="msn-h2">From Listening to Lasting Impact</h2>
            </div>
            <p className="msn-journey-aside">
              Our mission grows from a simple but powerful belief: that listening to the needs of Muslim patients and communities can lead to knowledge, better education, and real change in healthcare.
            </p>
          </div>
          <div className="msn-journey-track">
            {journey.map(([icon, title, text], index) => (
              <article className="msn-journey-item" key={title}>
                <div className="msn-journey-node">
                  <span className="msn-icon-circle">
                    <i className={`fa-solid ${icon}`} />
                  </span>
                  {index < journey.length - 1 ? (
                    <span className="msn-journey-arrow" aria-hidden="true">
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  ) : null}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="msn-cta container-fluid p-0">
        <div className="msn-cta-inner">
          <div className="msn-cta-body">
            <div className="msn-cta-copy">
              <p className="msn-cta-eyebrow">PARTNER WITH US</p>
              <h2>Let&apos;s Create a Healthier World Together.</h2>
              <p>
                Collaborate with II&amp;M to advance research, education, and compassionate care in your institution or community.
              </p>
            </div>
            <div className="msn-cta-actions">
              <Link href="/consultation" className="msn-btn msn-btn-fill">
                REQUEST A CONSULTATION <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/consultation" className="msn-btn msn-btn-light">
                INVITE A SPEAKER <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="msn-cta-media">
            <img
              src="/images/our-mission/cta-mosque.jpg"
              alt="Mosque architecture viewed through an Islamic archway"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
