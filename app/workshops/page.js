import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Workshops & Educational Programs | Initiative on Islam & Medicine",
  description:
    "Evidence-informed workshops, seminars, and educational sessions at the intersection of Islam, healthcare, and bioethics.",
};

const WHY = [
  ["fa-book-open", "Research-grounded", "Built on rigorous research and real-world experience in Islamic ethics, healthcare, and bioethics."],
  ["fa-users", "Audience-tailored", "Customized for the needs of your institution, profession, and community."],
  ["fa-comments", "Interactive formats", "Engaging, participatory sessions that encourage dialogue and practical application."],
  ["fa-chart-column", "Practical impact", "Equips participants with knowledge and tools to inform practice, policy, and community engagement."],
];

const TOPICS = [
  ["Islamic Bioethics", "Explore foundational and contemporary bioethical questions from an Islamic perspective.", "/images/our-mission/vision-mosque.jpg", "/research"],
  ["End-of-Life Care Ethics", "Discuss ethical, spiritual, and practical considerations in end-of-life and palliative care.", "/images/research/project-palliative.jpg", "/research"],
  ["Organ Donation Ethics", "Examine Islamic perspectives on organ donation, transplantation, and related ethical issues.", "/images/workshops/topic-organ.jpg", "/research"],
  ["Mammography Screening", "Address religious, cultural, and practical considerations for breast cancer screening among Muslim women.", "/images/research/project-mammography.jpg", "/research"],
  ["Muslim Health Research", "Understand key findings, methods, and community perspectives in Muslim health research.", "/images/workshops/topic-research.jpg", "/research"],
  ["Muslim Patients’ Religious & Spiritual Needs", "Learn how to support the religious and spiritual needs of Muslim patients in clinical settings.", "/images/workshops/topic-spiritual.jpg", "/research"],
  ["Mosque-Based Health Education", "Explore strategies for community health education and engagement in mosque settings.", "/images/research/project-mheart.jpg", "/research"],
  ["Muslim Physicians and the Healthcare Workforce", "Discuss challenges, opportunities, and support for Muslim physicians and healthcare professionals.", "/images/research/education.jpg", "/research"],
];

const PROJECTS = [
  ["Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN)", "In-depth exploration of palliative and hospice care needs of American Muslims.", "/images/research/project-palliative.jpg"],
  ["Mosque-Based Health Education and Research Tools (M-HEaRT)", "Developing faith-aligned health education tools for mosques and communities.", "/images/research/project-mheart.jpg"],
  ["Muslim American Healthcare & Spiritual Needs (MAHSN)", "Exploring the healthcare and spiritual needs of Muslim Americans.", "/images/research/project-mahsn.jpg"],
  ["Fostering Connections Between Science and Theology for Medical Track Students", "Building bridges between scientific knowledge and Islamic theology.", "/images/research/project-empart.jpg"],
  ["Religiously-Tailored Mammography Intervention for American Muslims", "Culturally and religiously tailored approaches to breast cancer screening.", "/images/research/project-mammography.jpg"],
  ["American Muslim Cultural Challenges with U.S. Healthcare", "Cultural and religious challenges faced by American Muslims in healthcare settings.", "/images/research/project-equity.jpg"],
];

const LENGTHS = [
  ["fa-clock", "1–2 Hour Lecture", "Focused session on key topics"],
  ["fa-sun", "Half-Day Seminar", "In-depth exploration with discussion"],
  ["fa-calendar-day", "1-Day Intensive", "Comprehensive learning experience"],
];

const STYLES = [
  ["fa-chalkboard-user", "Didactic Session", "Expert-led presentations with Q&A"],
  ["fa-comments", "Round Table Discussion", "Facilitated dialogue and shared perspectives"],
  ["fa-briefcase-medical", "Case-Based Discussion", "Real-world scenarios and practical application"],
  ["fa-users", "Scholarly Panel", "Diverse experts and multidisciplinary insights"],
];

const AUDIENCES = [
  ["fa-hospital", "Hospitals & Health Systems", "Healthcare institutions and clinical teams"],
  ["fa-graduation-cap", "Medical Schools & Universities", "Academic institutions, faculty, and students"],
  ["fa-user-doctor", "Healthcare Professionals", "Physicians, nurses, allied health, and more"],
  ["fa-people-group", "Community Organizations", "Local organizations and community groups"],
  ["fa-mosque", "Mosques & Faith Leaders", "Imams, religious leaders, and mosque communities"],
  ["fa-user-graduate", "Students & Trainees", "Medical, graduate, and pre-health students"],
];

const PAPERS = [
  ["Hospice care in the American Muslim community", "/images/research/resource-eol.jpg", "/resources"],
  ["Religious identity-based discrimination in the physician workforce", "/images/research/project-equity.jpg", "/resources"],
  ["Muslim patients’ religious and spiritual needs", "/images/research/project-mahsn.jpg", "/resources"],
  ["Organ donation and Islamic ethics", "/images/workshops/topic-organ.jpg", "/resources"],
];

const STEPS = [
  ["1", "fa-lightbulb", "Pick a Topic", "Choose from our core topics or suggest a custom theme."],
  ["2", "fa-sliders", "Choose Format and Audience", "Select the program length, teaching style, and target audience."],
  ["3", "fa-pen-nib", "Tailor the Content", "We work with you to customize the content to your goals and context."],
  ["4", "fa-person-chalkboard", "Deliver the Workshop", "Our team facilitates an engaging, evidence-informed session at your location or virtually."],
];

export default function WorkshopsPage() {
  return (
    <div className="workshops-page">
      <header className="hero-seamless hero-workshops-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/workshops/hero.jpg")}
            alt="Muslim educator in a beige hijab leading a workshop, with a presentation screen and audience"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">WORKSHOPS &amp; EDUCATIONAL PROGRAMS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Workshops That Turn Research Into <em>Meaningful Learning.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M offers evidence-informed workshops, seminars, and educational sessions at the intersection of Islam, healthcare, and bioethics for institutions, professionals, and communities.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/consultation" className="btn-seamless-maroon">
                REQUEST A WORKSHOP <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/research" className="btn-seamless-outline">
                EXPLORE RESEARCH PROJECTS <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/resources" className="btn-seamless-outline">
                BROWSE PUBLICATIONS <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
          <aside className="ws-hero-quote">
            <p>
              “Evidence-informed.
              <br />
              Audience-centered.
              <br />
              Rooted in lived realities.”
            </p>
          </aside>
        </div>
      </header>

      <section className="ws-why">
        <div className="container">
          <div className="ws-why-grid">
            <div className="ws-why-intro">
              <p className="ws-eyebrow">WHY II&amp;M WORKSHOPS</p>
              <h2>
                Distinctive Learning Grounded in Research.
              </h2>
            </div>
            <div className="ws-why-cols">
              {WHY.map(([icon, title, text]) => (
                <article key={title}>
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ws-topics" id="topics">
        <div className="container">
          <div className="ws-head">
            <div>
              <p className="ws-eyebrow">OUR WORKSHOP TOPICS</p>
              <h2>Workshop Topics Informed by Research and Practice.</h2>
            </div>
            <Link href="#topics" className="ws-text-link">
              VIEW ALL WORKSHOP TOPICS <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="ws-topic-grid">
            {TOPICS.map(([title, text, image, href]) => (
              <article className="ws-topic" key={title}>
                <img src={asset(image)} alt="" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href={href}>
                    RELATED RESEARCH <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ws-practice">
        <div className="container">
          <div className="ws-practice-grid">
            <div className="ws-practice-intro">
              <p className="ws-eyebrow ws-eyebrow-light">FROM RESEARCH TO PRACTICE</p>
              <h2>
                Our Research Informs Real-World Learning.
              </h2>
              <p>
                Our workshops are built on II&amp;M’s ongoing research programs, ensuring that educational content is evidence-informed, relevant, and responsive to community needs.
              </p>
              <Link href="/research" className="btn-seamless-maroon">
                VIEW ALL RESEARCH PROJECTS <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="ws-project-row">
              {PROJECTS.map(([title, text, image]) => (
                <article className="ws-project" key={title}>
                  <img src={asset(image)} alt="" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href="/research">
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ws-formats">
        <div className="container">
          <p className="ws-eyebrow">WORKSHOP FORMATS &amp; DELIVERY</p>
          <h2>Flexible Formats for Different Audiences.</h2>
          <div className="ws-format-board">
            <div className="ws-format-group ws-format-group-lengths">
              <p>Program Lengths</p>
              <div>
                {LENGTHS.map(([icon, title, text]) => (
                  <article key={title}>
                    <i className={`fa-solid ${icon}`} aria-hidden="true" />
                    <h3>{title}</h3>
                    <span>{text}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="ws-format-group ws-format-group-styles">
              <p>Teaching Styles</p>
              <div>
                {STYLES.map(([icon, title, text]) => (
                  <article key={title}>
                    <i className={`fa-solid ${icon}`} aria-hidden="true" />
                    <h3>{title}</h3>
                    <span>{text}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ws-who">
        <div className="container">
          <p className="ws-eyebrow">WHO WE WORK WITH</p>
          <h2>Trusted by a Wide Range of Institutions and Communities.</h2>
          <div className="ws-who-row">
            {AUDIENCES.map(([icon, title, text]) => (
              <article key={title}>
                <i className={`fa-solid ${icon}`} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ws-scholar">
        <div className="container">
          <div className="ws-scholar-grid">
            <div className="ws-scholar-intro">
              <p className="ws-eyebrow">GROUNDED IN SCHOLARSHIP</p>
              <h2>
                Workshops Backed by Rigorous Research.
              </h2>
              <p>
                Our educational programs draw on peer-reviewed publications and scholarly work at the intersection of Islam, medicine, and bioethics.
              </p>
              <Link href="/resources" className="btn-seamless-maroon">
                BROWSE PUBLICATIONS <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="ws-paper-row">
              {PAPERS.map(([title, image, href]) => (
                <article className="ws-paper" key={title}>
                  <img src={asset(image)} alt="" />
                  <h3>{title}</h3>
                  <Link href={href}>
                    READ PUBLICATION <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
              ))}
              <article className="ws-paper-cta">
                <h3>
                  Connect Research to Your Event.
                </h3>
                <p>We can tailor workshop content using our latest research and publications.</p>
                <Link href="/consultation" className="btn-seamless-outline">
                  DISCUSS A PROGRAM <i className="fa-solid fa-arrow-right" />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="ws-process">
        <div className="container">
          <p className="ws-eyebrow">A SIMPLE PROCESS</p>
          <h2>From Idea to Impact.</h2>
          <p className="ws-process-lead">We make it easy to bring an II&amp;M workshop to your institution or community.</p>
          <div className="ws-steps">
            {STEPS.map(([num, icon, title, text], index) => (
              <div className="ws-step-wrap" key={num}>
                <article>
                  <span>{num}</span>
                  <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
                {index < STEPS.length - 1 ? <i className="fa-solid fa-arrow-right ws-step-arrow" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ws-final container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6">
            <img
              src={asset("/images/workshops/cta.jpg")}
              alt="Workshop facilitator seen from behind, addressing a seated audience"
            />
          </div>
          <div className="col-lg-6 ws-final-copy">
            <p className="ws-eyebrow ws-eyebrow-light">WORKSHOPS FOR STRONGER COMMUNITIES</p>
            <h2>Bring an II&amp;M Workshop to Your Institution or Community.</h2>
            <p>
              Customized, research-informed education that equips healthcare professionals, strengthens communities, and advances compassionate, ethical healthcare.
            </p>
            <div className="ws-final-actions">
              <Link href="/consultation" className="btn-seamless-outline">
                REQUEST A WORKSHOP <i className="fa-solid fa-arrow-right" />
              </Link>
              <Link href="/consultation" className="btn-seamless-outline">
                DISCUSS A CUSTOM PROGRAM <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
