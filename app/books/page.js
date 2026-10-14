import Link from "next/link";

export const metadata = {
  title: "Books & Scholarly Works | Initiative on Islam & Medicine",
  description: "Books and scholarly works at the intersection of Islam, medicine, ethics, and the human experience — Initiative on Islam & Medicine.",
};

const works = [
  ["/images/book-medicine-shariah.jpg", "Medicine & Shariah", "Explores contemporary biomedical questions through Islamic ethics."],
  ["/images/book-islam-biomedicine.jpg", "Islam and Biomedicine", "Explores the dynamic relationship between Islamic thought and modern biomedicine."],
  ["/images/book-organ-donation.jpg", "Organ Donation in Islam", "A comprehensive exploration of organ transplantation in Islam."],
  ["/images/book-muslim-patient.jpg", "The Muslim Patient", "Practical guidance for providing culturally responsive care to Muslim patients."],
  ["/images/book-faith-health.jpg", "Faith, Health and Humanity", "Essays on moral formation, spiritual care, and compassionate healthcare."],
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
          <img src="/images/books-hero-still.jpg" alt="Scholarly books on Islam, medicine, and ethics" className="hero-bg-img" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner">
            <p className="hero-eyebrow-text-gold">BOOKS &amp; SCHOLARLY WORKS</p>
            <div className="hero-eyebrow-bar-maroon" />
            <h1 className="hero-seamless-title">
              Books that deepen<br />
              <em>understanding.</em>
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
            <p className="quote-text">Scholarship that informs education, ethics, and care.</p>
            <div className="quote-gold-bar" />
          </div>
        </div>
      </header>

      <section className="books-featured" id="featured">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <img src="/images/book-bridging.jpg" alt="Bridging Bioscience and Islam book cover" className="books-featured-cover" />
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
                <Link href="/bioscience" className="books-btn-outline">LEARN MORE</Link>
                <Link href="/bioscience" className="books-btn-maroon">BUY NOW</Link>
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
              <img src="/images/book-curriculum.jpg" alt="Exploring Bioscience and Islam curriculum workbook" className="books-mod-img" />
              <div className="books-mod-body">
                <h3>Exploring Bioscience and Islam</h3>
                <p>A Curriculum on Fundamental Questions about the Human Being.</p>
                <Link href="/curriculum" className="books-text-link">LEARN MORE</Link>
              </div>
            </article>
            <article className="books-mod books-mod-split">
              <img src="/images/book-decision-guide.jpg" alt="An Organ Donation Decisional Guide for Muslim Americans" className="books-mod-img" />
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
          <p className="books-eyebrow">REVIEWS &amp; SCHOLARLY RECEPTION</p>
          <h2 className="books-h2">Reviews &amp; Scholarly Reception</h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <blockquote className="books-quote">
                <span className="books-quote-mark" aria-hidden="true">&ldquo;</span>
                <p>&ldquo;Organ Donation in Islam makes an important and timely contribution by offering a careful, nuanced, and deeply informed analysis of a complex and consequential topic.&rdquo;</p>
                <cite>
                  <strong>Mark Siegler</strong>
                  <span>The University of Chicago</span>
                </cite>
              </blockquote>
            </div>
            <div className="col-lg-6">
              <blockquote className="books-quote">
                <span className="books-quote-mark" aria-hidden="true">&ldquo;</span>
                <p>&ldquo;Islam and Biomedicine is an insightful and timely work that deepens our understanding of how Islamic thought engages with modern biomedicine.&rdquo;</p>
                <cite>
                  <strong>Mohammed Ghaly</strong>
                  <span>Research Center for Islamic Legislation and Ethics</span>
                </cite>
              </blockquote>
            </div>
          </div>
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
            <img src="/images/books-hero-still.jpg" alt="Books in a scholarly library" className="books-cta-img" />
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
