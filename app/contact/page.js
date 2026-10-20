import Link from "next/link";
import { asset } from "../../lib/asset";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata = {
  title: "Contact | Initiative on Islam & Medicine",
  description: "Contact the Initiative on Islam and Medicine about research, education, consultation, speaking, partnerships, and media.",
};

const EMAIL = "contact@medicineandislam.org";
const SITE = "https://medicineandislam.org/";

const LANES = [
  ["fa-regular fa-envelope", "General Inquiries", "Questions about our work, programs, or organization.", "general"],
  ["fa-regular fa-handshake", "Partnership Opportunities", "Collaborate on research, education, or community initiatives.", "partnership"],
  ["fa-solid fa-microphone", "Speaking & Workshops", "Invite our team to speak or host a customized program.", "speaking"],
  ["fa-regular fa-newspaper", "Media & Press", "Interview requests and media-related inquiries.", "media"],
];

const FAQS = [
  ["fa-regular fa-handshake", "How can we partner with II&M?", "Learn about collaboration opportunities for institutions and organizations.", "/consultation"],
  ["fa-solid fa-microphone", "Can II&M provide a speaker for our event?", "Invite our team to speak at your conference, institution, or community program.", "/speaking"],
  ["fa-solid fa-book-open", "How can we access educational materials?", "Explore our curriculum, teaching guides, and other resources for educators.", "/resources"],
  ["fa-regular fa-newspaper", "Media and interview requests.", "Information for journalists and media professionals.", "#message"],
];

const SOCIAL = [
  ["fa-brands fa-linkedin-in", "LinkedIn"],
  ["fa-brands fa-youtube", "YouTube"],
  ["fa-brands fa-x-twitter", "X"],
  ["fa-brands fa-instagram", "Instagram"],
  ["fa-brands fa-facebook-f", "Facebook"],
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="hero-seamless hero-contact-seamless">
        <div className="hero-bg-wrapper">
          <img src={asset("/images/contact/hero.jpg")} alt="Professionals in conversation in a warm Islamic architectural interior" className="hero-bg-img" />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold ct-hero-eyebrow">CONTACT US</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Let&apos;s Work Together
              <br />
              for a Healthier,
              <br />
              <em>
                More Compassionate
                <br />
                Tomorrow.
              </em>
            </h1>
            <p className="hero-seamless-lead">
              We welcome your questions, inquiries, and ideas. Whether you&apos;re interested in our research, educational programs, consultation services, or partnership opportunities, our team is here to help.
            </p>
            <div className="hero-seamless-actions">
              <a href="#message" className="btn-seamless-maroon">SEND US A MESSAGE <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
              <a href="#collaborate" className="btn-seamless-outline">EXPLORE WAYS TO COLLABORATE <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-seamless-quote ct-hero-quote">
            <p className="quote-text">
              Meaningful
              <br />
              conversations.
              <br />
              Stronger
              <br />
              communities.
              <br />
              Lasting impact.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      <section className="ct-lanes" id="collaborate" aria-label="Ways to get in touch">
        <div className="container">
          <div className="ct-lane-grid">
            {LANES.map(([icon, title, text]) => (
              <a key={title} href="#message" className="ct-lane">
                <i className={icon} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-connect" id="message">
        <div className="container">
          <div className="ct-main">
            <ContactForm />
            <article className="ct-office">
              <div className="ct-office-photo">
                <img src={asset("/images/contact/office.jpg")} alt="Design photograph of a beige institutional building with arched windows" />
              </div>
              <div className="ct-office-body">
                <h2>Our Office</h2>
                <span className="ct-gold-line" />
                <p className="ct-org">Initiative on Islam &amp; Medicine</p>
                <p>
                  <i className="fa-regular fa-envelope" aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p className="ct-office-note">
                  A public street address, phone number, and office hours are not listed on II&amp;M&apos;s published materials. Write to the team and they will share the right next step.
                </p>
              </div>
            </article>
            <aside className="ct-side">
              <div className="ct-map">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <p>A public map pin is not available, because II&amp;M has not published an office address.</p>
                <a className="btn-seamless-maroon" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Request for directions")}`}>
                  GET DIRECTIONS <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </a>
              </div>
              <div className="ct-social">
                <h2>Other Ways to Connect</h2>
                <div className="ct-social-row">
                  {SOCIAL.map(([icon, label]) => (
                    <a key={label} href={SITE} target="_blank" rel="noopener noreferrer" aria-label={`${label} is not published separately. Visit the II&M website.`}>
                      <i className={icon} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="ct-faq" id="faqs">
        <div className="container">
          <div className="ct-faq-head">
            <div>
              <p className="ct-eyebrow">FREQUENTLY ASKED QUESTIONS</p>
              <h2>Quick Answers to Common Inquiries.</h2>
            </div>
            <a href="#faqs" className="ct-more">VIEW ALL FAQS <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
          </div>
          <div className="ct-faq-grid">
            {FAQS.map(([icon, title, text, href]) => (
              <article key={title}>
                <i className={icon} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href}>READ MORE <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-cta container-fluid p-0">
        <div className="ct-cta-grid">
          <img src={asset("/images/contact/cta.jpg")} alt="A woman in a burgundy hijab looks through an Islamic arch toward a mosque at sunset" />
          <div className="ct-cta-copy">
            <p className="ct-eyebrow">PARTNER WITH US</p>
            <h2>Together for a More Compassionate, Equitable, and Inclusive Healthcare Future.</h2>
            <p>Whether you have a question, an idea, or a collaboration in mind, we&apos;d love to hear from you.</p>
            <div className="hero-seamless-actions">
              <a href="#message" className="btn-seamless-outline ct-cta-light">CONTACT OUR TEAM <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
              <Link href="/impact" className="btn-seamless-outline ct-cta-light">EXPLORE OUR WORK <i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
