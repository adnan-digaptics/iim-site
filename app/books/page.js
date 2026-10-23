import { asset } from "../../lib/asset";
import Link from "next/link";
import BooksReviews from "./BooksReviews";

export const metadata = {
  title: "Books & Scholarly Works | Initiative on Islam & Medicine",
  description: "Books and scholarly works at the intersection of Islam, medicine, ethics, and the human experience — Initiative on Islam & Medicine.",
};

const works = [
  [asset("/images/work-islam-biomedicine.png"), "Islam and Biomedicine", "Explores the dynamic relationship between Islamic thought and modern biomedicine."],
  [asset("/images/work-maqasid.png"), "Maqasid al-Shariah and Biomedicine", "Bridging moral, ethical, and policy discourses."],
  [asset("/images/work-medicine-shariah.png"), "Medicine and Shariah", "A dialogue in Islamic bioethics."],
  [asset("/images/work-organ-donation.png"), "Organ Donation in Islam", "The interplay of jurisprudence, ethics, and society."],
  [asset("/images/work-covid.png"), "Islam, Muslims, and COVID-19", "The intersection of ethics, health, and social life in the diaspora."],
];

const reasons = [
  ["fa-flask", "Research", "Peer-reviewed scholarship that advances evidence-informed conversations at the interface of Islam and medicine."],
  ["fa-graduation-cap", "Education", "Classroom-ready resources that help students and faculty engage big questions with rigor and care."],
  ["fa-scale-balanced", "Ethics", "Guidance that supports morally serious decision-making in clinical, institutional, and community settings."],
  ["fa-people-group", "Community Impact", "Ideas that travel beyond the academy to inform education, ethics, and more compassionate care."],
];

export default function BooksPage() {
  return (
    <div className="books-page">
      <header className="hero-seamless hero-books-seamless">
        <div className="hero-bg-wrapper">
          <img src={asset("/images/books-banner-wide.jpg")} alt="Medicine and Shariah, Organ Donation in Islam, Maqasid al-Shariah and Biomedicine, and Bridging Bioscience and Islam" className="hero-bg-img" loading="eager" />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">BOOKS &amp; SCHOLARLY WORKS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Books that deepen <em>understanding.</em>
            </h1>
            <p className="hero-seamless-lead">
              Explore books and scholarly works at the intersection of Islam, medicine, ethics, and the human experience.
            </p>
            <div className="hero-seamless-actions">
              <a href="#works" className="btn-seamless-maroon">BROWSE ALL BOOKS</a>
              <a href="#modules" className="btn-seamless-outline">EXPLORE TEACHING RESOURCES</a>
            </div>
          </div>
          <div className="hero-seamless-quote">
            <p className="quote-text">
              Scholarship that
              <br />
              informs education,
              <br />
              ethics, and care.
            </p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      <section className="books-featured" id="featured">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <img src={asset("/images/book-bridging-cover.jpg")} alt="Bridging Bioscience and Islam book cover" className="books-featured-cover" />
            </div>
            <div className="col-lg-6">
              <p className="books-eyebrow">FEATURED BOOK</p>
              <h2 className="books-h2">Bridging Bioscience and Islam</h2>
              <p className="books-featured-kicker">Engaging Big Questions about the Human Being</p>
              <p className="books-featured-by">Edited by Dr. Aasim I. Padela</p>
              <p className="books-body">
                Bridging Bioscience and Islam advances discourse at the interface of Islam, biomedicine, and the human being, bringing together diverse scholarly perspectives. It explores foundational questions about what it means to be human in a rapidly changing biomedical age.
              </p>
              <div className="books-featured-actions">
                <Link href="/education" className="books-btn-outline">LEARN MORE</Link>
                <Link href="/education" className="books-btn-maroon">BUY NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="books-works" id="works">
        <div className="container">
          <div className="books-works-head">
            <div>
              <p className="books-eyebrow">ADDITIONAL WORKS BY DR. AASIM PADELA</p>
              <h2 className="books-h2">Additional Works by Dr. Aasim Padela</h2>
            </div>
            <Link href="/resources" className="books-text-link">
              VIEW ALL BOOKS <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="books-grid">
            {works.map(([src, title, text]) => (
              <article className="books-work" key={title}>
                <img src={src} alt={title} className="books-work-cover" />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/resources" className="books-text-link">LEARN MORE</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="books-modules" id="modules">
        <div className="container">
          <p className="books-eyebrow">RESOURCES FOR EDUCATORS &amp; CLINICIANS</p>
          <h2 className="books-h2">Teaching Modules &amp; Toolkits</h2>
          <p className="books-lead">
            Our educational materials help students, educators, and professionals explore key questions at the intersection of faith, medicine, and ethics.
          </p>
          <div className="books-modules-grid">
            <article className="books-mod books-mod-split">
              <img src={asset("/images/mod-bioscience.png")} alt="Exploring Bioscience and Islam curriculum cover" className="books-mod-img" />
              <div className="books-mod-body">
                <h3>Exploring Bioscience and Islam</h3>
                <p>A Curriculum on Fundamental Questions about the Human Being.</p>
                <Link href="/education" className="books-text-link">LEARN MORE</Link>
              </div>
            </article>
            <article className="books-mod books-mod-split">
              <img src={asset("/images/mod-organ-guide.png")} alt="An Organ Donation Decisional Guide for Muslim Americans" className="books-mod-img" />
              <div className="books-mod-body">
                <h3>An Organ Donation Decisional Guide for Muslim Americans</h3>
                <p>An educational tool to support informed discussion among Muslim communities.</p>
                <Link href="/resources" className="books-text-link">LEARN MORE</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="books-reviews">
        <div className="container">
          <BooksReviews />
        </div>
      </section>

      <section className="books-why">
        <div className="container">
          <div className="books-why-head">
            <p className="books-eyebrow">WHY THESE WORKS MATTER</p>
            <h2 className="books-h2">Scholarship for a More Compassionate World</h2>
          </div>
          <div className="books-why-grid">
            {reasons.map(([icon, title, text]) => (
              <article className="books-why-item" key={title}>
                <div className="books-why-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="books-cta">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5 p-0 books-cta-media">
            <img src={asset("/images/books-cta-hq.jpg")} alt="Medicine and Shariah, Maqasid al-Shariah and Biomedicine, and Bridging Bioscience and Islam" className="books-cta-img" />
          </div>
          <div className="col-lg-7 books-cta-panel">
            <div className="books-cta-copy">
              <h2 className="books-cta-title">Bring these ideas into your classroom, institution, or community.</h2>
              <p className="books-cta-lead">
                Connect with II&amp;M to discuss how these books, modules, and toolkits can support your teaching, research, or institutional programs.
              </p>
              <div className="books-cta-actions">
                <Link href="/consultation" className="books-btn-maroon">REQUEST INSTITUTIONAL SUPPORT</Link>
                <Link href="/consultation" className="books-btn-outline-light">CONTACT IIM</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
