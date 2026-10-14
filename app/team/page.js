import Link from "next/link";

export const metadata = {
  title: "Our Team | Initiative on Islam & Medicine",
  description: "Initiative on Islam and Medicine — Our Team",
};

export default function TeamPage() {
  return (
    <>
    <header className="hero" style={{ "--hero-image": "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85')" }}>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="section-eyebrow">
            OUR TEAM
          </div>
          <h1>
Meet the People            <br />
            <em>Behind II&amp;M.</em>
          </h1>
          <p>II&amp;M brings together scholars, clinicians, educators, researchers, and community leaders working toward compassionate, equitable, evidence-informed healthcare.</p>
          <div className="hero-actions">
            <Link className="btn btn-burgundy" href="/resources">
EXPLORE OUR WORK{' '}              <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
            <Link className="btn btn-outline-burgundy" href="/consultation">
PARTNER WITH II&M{' '}              <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
        <div className="hero-quote">
          Knowledge shared.
          <br />
          Compassion inspired.
          <br />
          Healthcare transformed.
        </div>
      </div>
    </header>
    <section className="values-strip">
      <div className="container">
        <div className="row g-0">
          <div className="col-6 col-lg-3">
            <Link href="/research" className="value-item">
              <i className="fa-solid fa-book-open" />
              <h3>Research & Insight</h3>
              <p>Evidence to inform care</p>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link href="/education" className="value-item">
              <i className="fa-solid fa-graduation-cap" />
              <h3>Education & Training</h3>
              <p>Knowledge in practice</p>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link href="/consultation" className="value-item">
              <i className="fa-solid fa-people-group" />
              <h3>Consultation</h3>
              <p>Expert collaboration</p>
            </Link>
          </div>
          <div className="col-6 col-lg-3">
            <Link href="/speaking" className="value-item">
              <i className="fa-solid fa-microphone" />
              <h3>Speaking</h3>
              <p>Meaningful conversations</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="feature-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1300&q=85" alt="Research and educational collaboration" loading="lazy" />
              <span className="image-caption">Knowledge that empowers care.</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-eyebrow">
              OUR APPROACH
            </div>
            <h2>
Knowledge.              <br />
              <em>Better Care.</em>
            </h2>
            <p>II&M combines rigorous research, practical education, expert consultation, and community partnerships to support more compassionate, responsive, and evidence-informed healthcare.</p>
            <Link className="btn btn-outline-burgundy" href="/about">
DISCOVER OUR APPROACH{' '}              <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="section-pad ">
      <div className="container">
        <div className="section-eyebrow">
          OUR TEAM
        </div>
        <div className="section-head">
          <h2>Leadership &amp; Strategic Team</h2>
          <Link href="/resources" className="text-link d-none d-md-inline">
EXPLORE MORE{' '}            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/about">
                <img className="card-photo" src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1300&q=85" alt="Dr. Aasim I. Padela" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-book-open" />
                </span>
                <h3>Dr. Aasim I. Padela</h3>
                <p>Founder, Chairperson and Director</p>
                <Link className="text-link" href="/about">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/about">
                <img className="card-photo" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1300&q=85" alt="Fatema Mirza" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-user" />
                </span>
                <h3>Fatema Mirza</h3>
                <p>Treasurer, Initiative on Islam &amp; Medicine</p>
                <Link className="text-link" href="/about">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/impact">
                <img className="card-photo" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=85" alt="Operations &amp; Strategic Team" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-book-open" />
                </span>
                <h3>Operations &amp; Strategic Team</h3>
                <p>Supporting II&amp;M’s initiatives and programs</p>
                <Link className="text-link" href="/impact">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="cta-band">
      <div className="container">
        <div>
          <div className="section-eyebrow gold">
            LET’S CREATE MEANINGFUL IMPACT TOGETHER
          </div>
          <h2>
Better understanding is the beginning            <br />
of better healthcare.          </h2>
          <p>Connect with II&M to bring evidence-informed learning, institutional guidance, and expert perspectives to your community.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-burgundy" href="/consultation">
REQUEST A CONSULTATION{' '}            <i className="fa-solid fa-arrow-right ms-2" />
          </Link>
          <Link className="btn btn-outline-light" href="/speaking">
INVITE A SPEAKER{' '}            <i className="fa-solid fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
