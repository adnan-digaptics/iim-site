import Link from "next/link";
import TeamAmbassadors from "./TeamAmbassadors";

export const metadata = {
  title: "Our Team | Initiative on Islam & Medicine",
  description:
    "Meet the scholars, clinicians, educators, researchers, and community leaders behind the Initiative on Islam & Medicine.",
};

const operations = [
  {
    name: "Sarah Ahmed",
    role: "Director of Strategic Partnerships",
    img: "/images/our-team/sarah.jpg",
    text: "Supports partnerships that expand II&M’s reach across healthcare, academic, and community settings.",
  },
  {
    name: "Nabeel Palla",
    role: "Operations / Technology & Growth Support",
    img: "/images/our-team/nabeel.jpg",
    text: "Helps strengthen II&M’s operational systems, technology, and growth infrastructure.",
  },
  {
    name: "Hiba Bawa",
    role: "Project Manager",
    img: "/images/our-team/hiba.jpg",
    text: "Coordinates programs and projects that advance II&M’s research, education, and engagement goals.",
  },
];

const research = [
  {
    name: "Laila Azam, PhD, MBA",
    role: "Research Scientist",
    img: "/images/our-team/laila.jpg",
    text: "Contributes research that informs education, practice, and policy at the intersection of Islam and medicine.",
  },
  {
    name: "Raudah Yunus",
    role: "Researcher / Public Health Scholar",
    img: "/images/our-team/raudah.jpg",
    text: "Advances community-engaged inquiry to strengthen culturally responsive healthcare and public health.",
  },
];

const advisors = [
  { name: "Adel Syed, MPPA", detail: "Advisor", img: "/images/our-team/advisor-adel.jpg" },
  { name: "Faisal Qazi, DO", detail: "Advisor", img: "/images/our-team/advisor-faisal.jpg" },
  { name: "Najam Fasiuddin, DO", detail: "Advisor", img: "/images/our-team/advisor-najam.jpg" },
  { name: "Dr. Waqas Haque", detail: "Advisor", img: "/images/our-team/advisor-waqas.jpg" },
  { name: "Imam Ayman Soliman", detail: "Advisor", img: "/images/our-team/advisor-ayman.jpg" },
  { name: "Dr. Nasir Malim, DO, MPH", detail: "Advisor", img: "/images/our-team/advisor-nasir.jpg" },
];

const advances = [
  ["fa-chart-line", "Research & Impact", "Our team generates and translates evidence to inform clinical practice, policy, and education."],
  ["fa-book-open", "Education & Training", "We develop courses, workshops, and educational resources for healthcare professionals, students, and community members."],
  ["fa-people-group", "Consultation & Advisory", "We provide expert guidance for institutions, healthcare organizations, and policymakers on Islam-related healthcare needs, policies, and practices."],
  ["fa-microphone", "Speaking & Dialogue", "We elevate trusted voices on Islam, medicine, and bioethics through speaking engagements, panels, and community conversations."],
];

export default function TeamPage() {
  return (
    <div className="team-page">
      <header className="hero-seamless hero-team-seamless">
        <div className="hero-bg-wrapper">
          <img
            src="/images/our-team/hero.jpg"
            alt="Healthcare professionals collaborating"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold tm-hero-eyebrow">OUR TEAM</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Meet the People
              <br />
              <em>Behind II&amp;M.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M brings together scholars, clinicians, educators, researchers, and community leaders at the intersection of Islam and medicine — working toward more compassionate, equitable, and evidence-informed healthcare for all.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/consultation" className="btn-seamless-maroon">
                WORK WITH OUR TEAM <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/education" className="btn-seamless-outline">
                EXPLORE OUR EXPERTISE <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="hero-seamless-quote tm-hero-quote">
            <p className="quote-text">
              Scholarship.
              <br />
              Compassion.
              <br />
              Collaboration.
              <br />
              Leadership.
            </p>
          </div>
        </div>
      </header>

      <section className="tm-leadership">
        <div className="container">
          <div className="tm-section-head tm-section-head--split">
            <p className="tm-eyebrow">LEADERSHIP SPOTLIGHT</p>
            <p className="tm-aside">Guiding vision. Advancing impact.</p>
          </div>
          <div className="tm-leadership-grid">
            <article className="tm-lead-card">
              <div className="tm-lead-media">
                <img src="/images/our-team/padela.jpg" alt="Aasim I. Padela, MD, MSc, FACEP" />
              </div>
              <div className="tm-lead-body">
                <h3>Aasim I. Padela, MD, MSc, FACEP</h3>
                <p className="tm-role">Founder / Chairperson / Director</p>
                <p>
                  Dr. Padela leads II&amp;M’s work at the intersection of Islam, medicine, and bioethics — advancing research, education, and consultation that strengthen compassionate, evidence-informed care.
                </p>
                <p>
                  Through scholarly leadership and institutional partnerships, he helps clinicians, educators, and communities engage faith, ethics, and healthcare with greater clarity and care.
                </p>
                <div className="tm-lead-actions">
                  <Link href="/about" className="tm-btn-outline">
                    VIEW PROFILE <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <Link href="/consultation" className="tm-btn-outline">
                    SPEAKING REQUEST <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>

            <article className="tm-lead-card">
              <div className="tm-lead-media">
                <img src="/images/our-team/fatema.jpg" alt="Fatema Mirza" />
              </div>
              <div className="tm-lead-body">
                <h3>Fatema Mirza</h3>
                <p className="tm-role">Treasurer, Initiative on Islam and Medicine</p>
                <p>
                  Fatema Mirza supports II&amp;M’s stewardship and organizational sustainability, helping strengthen the foundation that enables research, education, and community partnerships to grow.
                </p>
                <div className="tm-lead-actions">
                  <Link href="/about" className="tm-btn-outline">
                    VIEW PROFILE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="tm-ops">
        <div className="container">
          <div className="tm-section-head">
            <p className="tm-eyebrow">OPERATIONS &amp; STRATEGIC TEAM</p>
            <p className="tm-lead">Building the foundation for greater impact.</p>
          </div>
          <div className="tm-ops-grid">
            {operations.map((person) => (
              <article className="tm-ops-card" key={person.name}>
                <div className="tm-ops-media">
                  <img src={person.img} alt={person.name} />
                </div>
                <div className="tm-ops-body">
                  <h3>{person.name}</h3>
                  <p className="tm-role">{person.role}</p>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-research">
        <div className="container">
          <div className="tm-section-head">
            <p className="tm-eyebrow">RESEARCH &amp; EDUCATION TEAM</p>
            <p className="tm-lead">Advancing knowledge. Training the next generation.</p>
          </div>
          <div className="tm-research-grid">
            {research.map((person) => (
              <article className="tm-research-card" key={person.name}>
                <div className="tm-research-media">
                  <img src={person.img} alt={person.name} />
                </div>
                <div className="tm-research-body">
                  <h3>{person.name}</h3>
                  <p className="tm-role">{person.role}</p>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
            <article className="tm-research-feature">
              <div className="tm-research-feature-media">
                <img
                  src="/images/our-team/research-feature.jpg"
                  alt="Islamic architecture and scholarly books"
                />
              </div>
              <div className="tm-research-feature-body">
                <p>
                  Our interdisciplinary team conducts rigorous research and develops educational programs that translate knowledge into real-world impact.
                </p>
                <p>
                  From community-engaged studies to clinician training and curriculum design, we connect Islamic thought, ethics, and lived experience with practical tools for healthcare.
                </p>
                <p>
                  Explore how our research, courses, and partnerships strengthen compassionate, culturally responsive care across institutions and communities.
                </p>
                <Link href="/impact" className="tm-text-link">
                  EXPLORE RESEARCH &amp; IMPACT <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="tm-advisors">
        <div className="container">
          <div className="tm-section-head">
            <p className="tm-eyebrow">BOARD, ADVISORS &amp; EXPERT NETWORK</p>
            <p className="tm-lead">
              A diverse network of scholars, clinicians, and community leaders.
            </p>
          </div>
          <div className="tm-advisors-grid">
            {advisors.map((person) => (
              <article className="tm-advisor-card" key={person.name}>
                <img src={person.img} alt={person.name} />
                <h3>{person.name}</h3>
                <p>{person.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-advances">
        <div className="container">
          <div className="tm-section-head">
            <p className="tm-eyebrow">HOW OUR TEAM ADVANCES THE MISSION</p>
            <p className="tm-lead">
              Translating scholarship into practical programs and partnerships.
            </p>
          </div>
          <div className="tm-advances-grid">
            {advances.map(([icon, title, text]) => (
              <article className="tm-advance-card" key={title}>
                <span className="tm-icon-circle">
                  <i className={`fa-solid ${icon}`} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamAmbassadors />

      <section className="tm-cta container-fluid p-0">
        <div className="tm-cta-inner">
          <div className="tm-cta-body">
            <div className="tm-cta-copy">
              <p className="tm-cta-eyebrow">LET&apos;S WORK TOGETHER</p>
              <h2>Connect With the II&amp;M Team</h2>
              <p>
                We welcome inquiries from healthcare institutions, academic organizations, media, and community partners. Let&apos;s build a healthier, more compassionate world together.
              </p>
            </div>
            <div className="tm-cta-actions">
              <Link href="/consultation" className="tm-btn-fill">
                REQUEST CONSULTATION <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/consultation" className="tm-btn-light">
                INVITE A SPEAKER <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/consultation" className="tm-btn-light">
                PARTNER WITH US <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="tm-cta-media">
            <img
              src="/images/our-team/cta-mosque.jpg"
              alt="Mosque architecture viewed through an Islamic archway"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
