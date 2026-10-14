import Link from "next/link";

export const metadata = {
  title: "Podcast | Initiative on Islam & Medicine",
  description: "Initiative on Islam and Medicine — Podcast",
};

export default function PodcastPage() {
  return (
    <>
    <header className="hero" style={{ "--hero-image": "url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1300&q=85')" }}>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="section-eyebrow">
            PODCAST
          </div>
          <h1>
The Medic &amp;            <br />
            <em>The Mufti Podcast.</em>
          </h1>
          <p>Big questions about the human being. Islam and biomedicine in dialogue through thoughtful conversations on science, spirituality, and healthcare.</p>
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
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1300&q=85" alt="Research and educational collaboration" loading="lazy" />
              <span className="image-caption">Knowledge that empowers care.</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-eyebrow">
              OUR APPROACH
            </div>
            <h2>
Dialogue for a              <br />
              <em>More Human Future.</em>
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
          PODCAST
        </div>
        <div className="section-head">
          <h2>Featured Episodes</h2>
          <Link href="/resources" className="text-link d-none d-md-inline">
EXPLORE MORE{' '}            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/podcast">
                <img className="card-photo" src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1300&q=85" alt="Science and Religion: How Can We Know Anything at All?" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-book-open" />
                </span>
                <h3>Science and Religion: How Can We Know Anything at All?</h3>
                <p>A conversation on knowledge and belief</p>
                <Link className="text-link" href="/podcast">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/podcast">
                <img className="card-photo" src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1300&q=85" alt="How Did We Come About?" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-book-open" />
                </span>
                <h3>How Did We Come About?</h3>
                <p>Questions of human origin</p>
                <Link className="text-link" href="/podcast">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/podcast">
                <img className="card-photo" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=85" alt="Neuroscience, Artificial Intelligence and the Soul" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-brain" />
                </span>
                <h3>Neuroscience, Artificial Intelligence and the Soul</h3>
                <p>Human consciousness and intelligence</p>
                <Link className="text-link" href="/podcast">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-3">
            <article className="content-card h-100">
              <Link href="/podcast">
                <img className="card-photo" src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=85" alt="What is the Future of Humankind?" loading="lazy" />
              </Link>
              <div className="card-content">
                <span className="round-icon">
                  <i className="fa-solid fa-book-open" />
                </span>
                <h3>What is the Future of Humankind?</h3>
                <p>Bodies, brains, and technology</p>
                <Link className="text-link" href="/podcast">
LEARN MORE{' '}                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="section-pad soft">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h2>The Medic & The Mufti</h2>
            <p>Listen and watch conversations on medicine, Islamic wisdom, ethics, healing, and the human experience.</p>
          </div>
          <div className="col-lg-5">
            <div className="platforms">
              <a href="https://youtube.com" target="_blank" rel="noopener">
                <i className="fa-brands fa-youtube" />
{' '}YouTube              </a>
              <a href="https://open.spotify.com" target="_blank" rel="noopener">
                <i className="fa-brands fa-spotify" />
{' '}Spotify              </a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener">
                <i className="fa-solid fa-podcast" />
{' '}Apple Podcasts              </a>
            </div>
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
