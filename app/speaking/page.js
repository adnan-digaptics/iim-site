import { asset } from "../../lib/asset";
import Link from "next/link";
import SpeakingQuotes from "./SpeakingQuotes";

export const metadata = {
  title: "Speaking & Engagements | Initiative on Islam & Medicine",
  description:
    "II&M brings together medical professionals, Islamic scholars, and thought leaders for keynotes, grand rounds, workshops, and community conversations.",
};

const BENEFITS = [
  ["fa-users", "Expert Perspective", "Bringing scholarly depth and real-world experience."],
  ["fa-lightbulb", "Relevant Topics", "Addressing today's most important questions."],
  ["fa-globe", "Diverse Audiences", "From medical institutions to community settings."],
  ["fa-comments", "Meaningful Impact", "Equipping people to create more inclusive, ethical care."],
];

const TOPICS = [
  ["Islamic Bioethics in Modern Medicine", "Cultural and Religious Competency"],
  ["Muslim Patient Experiences and Needs", "Ethics, Policy, and Healthcare Equity"],
  ["Faith and Professional Identity", "Women's Health and Islamic Perspectives"],
  ["End-of-Life Care and Advance Directives", "Islam and Contemporary Medical Challenges"],
  ["Mental Health, Faith, and Wellness", "Building More Inclusive Healthcare Systems"],
];

const FORMATS = [
  ["fa-microphone", "Keynote Addresses", "Inspiring, high-impact presentations"],
  ["fa-person-chalkboard", "Conference Presentations", "Plenary or breakout sessions"],
  ["fa-hospital", "Hospital Grand Rounds", "Clinical and ethical insights"],
  ["fa-people-group", "Workshops and Training Sessions", "Interactive, skills-based learning"],
  ["fa-comments", "Panel Discussions", "Diverse perspectives on complex topics"],
  ["fa-people-roof", "Community Educational Events", "Accessible, engaging conversations"],
];

const AUDIENCES = [
  ["fa-hospital", "Hospitals & Health Systems"],
  ["fa-graduation-cap", "Medical Schools & Universities"],
  ["fa-stethoscope", "Healthcare Professionals"],
  ["fa-users", "Community Organizations"],
  ["fa-file-lines", "Policymakers & Government"],
  ["fa-mosque", "Faith Leaders & Islamic Centers"],
  ["fa-globe", "Conferences & Professional Societies"],
];

const SPEAKERS = [
  {
    name: "Aasim I. Padela, MD, MSc, FACEP",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/padela-portrait.jpg",
  },
  {
    name: "Faisal Qazi, DO",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/advisor-faisal-portrait.jpg",
  },
  {
    name: "Najam Fasiuddin, DO",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/advisor-najam-portrait.png",
  },
  {
    name: "Fatema Mirza",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/fatema-portrait.jpg",
  },
  {
    name: "Imam Ayman Soliman",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/advisor-ayman-portrait.jpg",
  },
  {
    name: "Dr. Nasir Malim, DO, MPH",
    lines: ["Advisor", "Initiative on Islam & Medicine"],
    image: "/images/our-team/advisor-nasir-portrait.jpg",
  },
];

const QUOTES = [
  {
    id: "institution",
    quote: "Informative, balanced, and deeply relevant. This was exactly what our institution needed.",
    attribution: "HOSPITAL EDUCATION DIRECTOR",
  },
  {
    id: "resident",
    quote:
      "II&M's education programs gave me the language, confidence, and practical tools to serve my patients with greater compassion and understanding.",
    attribution: "MEDICAL RESIDENT, UNITED STATES",
  },
];

export default function SpeakingPage() {
  return (
    <div className="speaking-page">
      <header className="hero-seamless hero-speaking-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/speaking/hero.jpg")}
            alt="Muslim physician in a burgundy hijab delivering a keynote at a wooden lectern"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold spk-hero-eyebrow">SPEAKING &amp; ENGAGEMENTS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Meaningful Conversations <em>for a Healthier Tomorrow.</em>
            </h1>
            <p className="hero-seamless-lead">
              II&amp;M brings together medical professionals, Islamic scholars, and thought leaders to educate, inspire, and equip diverse audiences with practical insights at the intersection of Islam, medicine, ethics, and society.
            </p>
            <div className="hero-seamless-actions">
              <Link href="/consultation" className="btn-seamless-maroon">
                INVITE A SPEAKER <i className="fa-solid fa-arrow-right" />
              </Link>
              <a href="#speaking-topics" className="btn-seamless-outline">
                VIEW SPEAKING TOPICS <i className="fa-solid fa-arrow-down" />
              </a>
            </div>
          </div>
          <div className="hero-seamless-quote spk-hero-quote">
            <p className="quote-text">
              Ideas.
              <br />
              Dialogue.
              <br />
              Practical
              <br />
              Solutions.
            </p>
            <span className="spk-gold-line" />
          </div>
        </div>
      </header>

      <section className="spk-benefits" aria-label="Speaking benefits">
        <div className="container">
          <div className="spk-benefit-row">
            {BENEFITS.map(([icon, title, text]) => (
              <article className="spk-benefit" key={title}>
                <i className={`fa-solid ${icon}`} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spk-topics" id="speaking-topics">
        <div className="container">
          <div className="spk-topics-grid">
            <div>
              <p className="spk-eyebrow">SPEAKING TOPICS</p>
              <h2>
                Timely Topics at the Intersection of Faith and Medicine
              </h2>
              <p className="spk-lead">
                We offer a range of engaging and evidence-informed presentations tailored to the needs of your audience.
              </p>
              <div className="spk-topic-table">
                {TOPICS.map(([left, right]) => (
                  <div className="spk-topic-row" key={left}>
                    <span>
                      {left} <i className="fa-solid fa-arrow-right" />
                    </span>
                    <span>
                      {right} <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                ))}
              </div>
              <figure className="spk-audience-photo">
                <img
                  src={asset("/images/speaking/audience.jpg")}
                  alt="Healthcare professionals and scholars seated at a conference"
                />
                <figcaption>
                  Engaging minds.
                  <br />
                  Empowering communities.
                  <br />
                  Advancing care.
                </figcaption>
              </figure>
            </div>
            <aside className="spk-formats">
              <p className="spk-eyebrow">ENGAGEMENT FORMATS</p>
              <h2>
                Flexible Formats for Every Audience
              </h2>
              <ul>
                {FORMATS.map(([icon, title, text]) => (
                  <li key={title}>
                    <span>
                      <span className="spk-format-icon" aria-hidden="true">
                        <i className={`fa-solid ${icon}`} />
                      </span>
                      <span>
                        <strong>{title}</strong>
                        <em>{text}</em>
                      </span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="spk-audiences" aria-label="Audience types">
        <div className="container">
          <p className="spk-eyebrow">AUDIENCE TYPES</p>
          <div className="spk-audience-row">
            {AUDIENCES.map(([icon, label]) => (
              <article key={label}>
                <i className={`fa-solid ${icon}`} aria-hidden="true" />
                <h2>{label}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spk-speakers">
        <div className="container">
          <div className="spk-speakers-head">
            <div>
              <p className="spk-eyebrow">FEATURED SPEAKERS</p>
              <h2>Scholars. Clinicians. Thought Leaders.</h2>
              <p className="spk-lead">
                Our speakers bring multidisciplinary expertise and real-world experience to today&apos;s most important conversations.
              </p>
            </div>
            <Link href="/team" className="spk-text-link">
              MEET OUR TEAM <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="spk-speaker-grid">
            {SPEAKERS.map((person) => (
              <article key={person.name}>
                <img src={asset(person.image)} alt={person.name} />
                <h3>{person.name}</h3>
                {person.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spk-close container-fluid p-0" id="speaker-request">
        <div className="spk-close-grid">
          <SpeakingQuotes quotes={QUOTES} />
          <div className="spk-arch">
            <img
              src={asset("/images/educate/cta-mosque.jpg")}
              alt="Blue mosque domes framed by an ornate Islamic arch at sunset"
            />
          </div>
          <div className="spk-request">
            <p className="spk-eyebrow">LET&apos;S WORK TOGETHER</p>
            <h2>Invite an II&amp;M Speaker</h2>
            <p>We&apos;d be honored to be part of your next event. Share a few details and our team will be in touch.</p>
            <Link href="/consultation" className="btn-seamless-maroon">
              SUBMIT A SPEAKER REQUEST <i className="fa-solid fa-arrow-right" />
            </Link>
            <a className="spk-email" href="mailto:info@initiativeonislamandmedicine.org">
              OR EMAIL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
