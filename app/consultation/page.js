import Link from "next/link";
import "./consultation.css";

export const metadata = {
  title: "Consultation & Advisory Services | Initiative on Islam & Medicine",
  description: "Consultation and advisory services that bring Islamic ethical perspectives, cultural understanding, and evidence-informed guidance into healthcare practice.",
};

const values = [
  ["fa-hospital", "Institutional Expertise", "Providing informed, faith-conscious guidance for real-world settings."],
  ["fa-people-group", "Collaborative Approach", "Working with diverse stakeholders to create practical solutions."],
  ["fa-book-open", "Grounded in Scholarship", "Drawing from Islamic tradition, bioethics, and contemporary medicine."],
  ["fa-globe", "Real-World Impact", "Guidance that leads to more inclusive, ethical, and responsive care."],
];

const partners = [
  ["fa-hospital", "Hospitals & Health Systems"],
  ["fa-graduation-cap", "Medical Schools & Academic Centers"],
  ["fa-user-doctor", "Healthcare Teams & Departments"],
  ["fa-landmark", "Policymakers & Healthcare Organizations"],
  ["fa-people-roof", "Community Organizations"],
  ["fa-flask", "Research Institutions"],
];

const areas = [
  ["/images/story-consultation.jpg", "Islamic Bioethics", "Guidance on ethical decision-making in clinical care."],
  ["/images/bio-faculty-talk.jpg", "Cultural & Religious Competency", "Strategies for more inclusive, culturally responsive care."],
  ["/images/expertise-consultation.jpg", "Institutional Policy & Guidance", "Review and development of policies, protocols, and systems of care."],
  ["/images/learning-lecture.jpg", "Program Development & Training", "Custom educational programs for healthcare professionals."],
  ["/images/audience-community.jpg", "Community Engagement", "Building bridges between healthcare institutions and Muslim communities."],
];

const steps = [
  ["1", "fa-comments", "Initial Conversation", "Understand your goals"],
  ["2", "fa-clipboard-list", "Assessment & Proposal", "Develop a tailored plan"],
  ["3", "fa-handshake", "Engagement & Support", "Provide guidance and resources"],
  ["4", "fa-seedling", "Ongoing Impact", "Evaluate outcomes and sustain progress"],
];

const trusted = [
  ["fa-building-columns", "Academic Medical Centers"],
  ["fa-hospital", "Hospitals & Health Systems"],
  ["fa-graduation-cap", "Universities"],
  ["fa-people-group", "Community Organizations"],
  ["fa-briefcase-medical", "Healthcare Associations"],
  ["fa-flask", "Research Institutions"],
];

export default function ConsultationPage() {
  return (
    <div className="consult-page">
      <header className="consult-hero">
        <div className="consult-hero-copy">
          <p className="consult-hero-eyebrow">
            CONSULTATION &amp; ADVISORY SERVICES
            <span className="consult-hero-line" />
          </p>
          <h1>
            Guidance for Today&apos;s
            <em>Complex Healthcare</em>
            Challenges.
          </h1>
          <p>
            We partner with healthcare institutions, academic centers, policymakers, and community organizations to bring Islamic ethical perspectives, cultural understanding, and evidence-informed guidance into practice.
          </p>
          <div className="consult-actions">
            <Link href="#request" className="consult-btn consult-btn-fill">REQUEST A CONSULTATION <i className="fa-solid fa-arrow-right" /></Link>
            <Link href="#areas" className="consult-btn consult-btn-outline">EXPLORE OUR SERVICES <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>
        <div className="consult-hero-media">
          <img src="/images/consult-hero-team.jpg" alt="Healthcare professionals collaborating around a consultation table" />
          <div className="consult-hero-quote">
            <p>Bridging perspectives. Building solutions.</p>
          </div>
        </div>
      </header>

      <section className="consult-values">
        <div className="container">
          <div className="consult-values-grid">
            {values.map(([icon, title, text]) => (
              <article className="consult-value" key={title}>
                <div className="consult-icon"><i className={`fa-solid ${icon}`} /></div>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-approach" id="approach">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <img className="consult-approach-img" src="/images/bio-hero-discussion.jpg" alt="Academic and healthcare professionals discussing ethical questions" />
            </div>
            <div className="col-lg-6">
              <p className="consult-eyebrow">OUR APPROACH</p>
              <h2 className="consult-h2">From Insight to <em>Meaningful Change.</em></h2>
              <p className="consult-body">
                Our consultation services are grounded in rigorous research, Islamic ethical frameworks, and a deep understanding of healthcare systems. We work with you to address complex questions, develop practical strategies, and support implementation that respects both medical excellence and the needs of Muslim patients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="consult-ecosystem">
        <div className="container">
          <p className="consult-eyebrow">WHO WE WORK WITH</p>
          <h2 className="consult-h2">Partnering Across the Healthcare Ecosystem</h2>
          <div className="consult-eco-grid">
            {partners.map(([icon, label]) => (
              <article className="consult-eco" key={label}>
                <i className={`fa-solid ${icon}`} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-areas" id="areas">
        <div className="container">
          <p className="consult-eyebrow consult-eyebrow-gold">KEY AREAS OF CONSULTATION</p>
          <h2 className="consult-h2 consult-h2-light">Expertise for Your Most Important Questions</h2>
          <div className="consult-areas-grid">
            {areas.map(([src, title, text]) => (
              <article className="consult-area" key={title}>
                <img src={src} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consult-process">
        <div className="container">
          <div className="consult-process-grid">
            <div className="consult-process-intro">
              <p className="consult-eyebrow">OUR CONSULTATION PROCESS</p>
              <h2 className="consult-h2">A Collaborative and Structured Approach</h2>
            </div>
            <div className="consult-steps">
              {steps.map(([num, icon, title, text]) => (
                <article className="consult-step" key={num}>
                  <div className="consult-step-mark">
                    <span>{num}</span>
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="consult-cta" id="request">
        <div className="consult-cta-media">
          <img src="/images/distinct-building.jpg" alt="Academic medical institution" />
          <div className="consult-cta-quote">
            <p>Let&apos;s work together to create more inclusive, ethical, and compassionate care.</p>
            <span />
          </div>
        </div>
        <div className="consult-cta-copy">
          <p className="consult-eyebrow">REQUEST A CONSULTATION</p>
          <h2 className="consult-h2">Start a Conversation</h2>
          <p className="consult-body">
            We welcome the opportunity to learn more about your needs and explore how II&amp;M can support your institution or organization.
          </p>
          <div className="consult-actions">
            <a href="mailto:info@initiativeonislamandmedicine.org" className="consult-btn consult-btn-fill">SUBMIT A CONSULTATION REQUEST</a>
            <a href="mailto:info@initiativeonislamandmedicine.org" className="consult-btn consult-btn-outline">OR EMAIL US</a>
          </div>
        </div>
      </section>

      <section className="consult-trusted">
        <div className="container">
          <p className="consult-eyebrow">TRUSTED BY A DIVERSE RANGE OF INSTITUTIONS</p>
          <div className="consult-trusted-grid">
            {trusted.map(([icon, label]) => (
              <article className="consult-trust" key={label}>
                <div className="consult-icon"><i className={`fa-solid ${icon}`} /></div>
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
