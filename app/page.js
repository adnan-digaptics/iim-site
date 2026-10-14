import Link from "next/link";

export const metadata = {
  title: "Home | Initiative on Islam & Medicine",
  description: "Initiative on Islam and Medicine — Advancing knowledge, transforming healthcare at the intersection of Islam and medicine.",
};

export default function HomePage() {
  return (
    <>
    <header className="hero-seamless">
      <div className="hero-bg-wrapper">
        <img src="/images/hero-doctor.jpg" alt="Advancing knowledge, transforming healthcare" className="hero-bg-img" loading="eager" />
        <div className="hero-gradient-overlay" />
        <div className="hero-watermark-overlay" />
      </div>
      <div className="container hero-container-relative">
        <div className="hero-content-inner">
          <p className="hero-eyebrow-text-gold">BRIDGING FAITH, ETHICS, AND MEDICINE</p>
          <div className="hero-eyebrow-bar-maroon" />
          <h1 className="hero-seamless-title">
Advancing            <br />
{' '}knowledge.            <br />
{' '}            <em>
Transforming              <br />
{' '}healthcare.            </em>
{' '}          </h1>
          <p className="hero-seamless-lead">
We educate, consult, and convene to better serve the needs of{' '}            <em>Muslim</em>
{' '}patients and healthcare professionals at the intersection of Islam and medicine.          </p>
          <div className="hero-seamless-actions">
            <Link href="/education" className="btn-seamless-maroon">EXPLORE OUR PROGRAMS &gt;</Link>
            <Link href="/consultation" className="btn-seamless-outline">REQUEST A CONSULTATION</Link>
          </div>
        </div>
        <div className="hero-seamless-quote">
          <p className="quote-text">
People.            <br />
{' '}Principles.            <br />
{' '}Better Care.          </p>
          <div className="quote-gold-bar" />
        </div>
      </div>
    </header>
    <section className="strip-four-values-exact fullwidth-strip">
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center">
          <div className="col-6 col-lg-3 four-values-col">
            <div className="value-exact-item">
              <i className="fa-solid fa-book-open value-exact-icon" />
              <h3 className="value-exact-title">Islamic Bioethics</h3>
              <p className="value-exact-text">Grounded guidance for complex questions</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 four-values-col">
            <div className="value-exact-item">
              <i className="fa-solid fa-graduation-cap value-exact-icon" />
              <h3 className="value-exact-title">Education &amp; Training</h3>
              <p className="value-exact-text">Building knowledge and professional capacity</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 four-values-col">
            <div className="value-exact-item">
              <i className="fa-solid fa-people-group value-exact-icon" />
              <h3 className="value-exact-title">Consultation &amp; Advisory</h3>
              <p className="value-exact-text">Supporting institutions and communities</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 four-values-col">
            <div className="value-exact-item">
              <i className="fa-solid fa-chart-column value-exact-icon" />
              <h3 className="value-exact-title">Community Impact</h3>
              <p className="value-exact-text">From evidence to practice and policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-our-story-fullwidth">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-6 p-0">
            <div className="story-fullwidth-image-wrap">
              <img src="/images/story-meeting.jpg" alt="Where research meets responsibility" className="story-fullwidth-photo" loading="lazy" />
              <div className="story-exact-overlay">
                <p className="story-exact-quote">
Where research                  <br />
meets responsibility.                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center bg-white">
            <div className="story-fullwidth-content-wrap">
              <div className="story-exact-eyebrow-wrap">
                <span className="story-exact-eyebrow-text">OUR STORY</span>
                <span className="story-exact-eyebrow-bar" />
              </div>
              <h2 className="story-exact-title">
Listening. Learning.                <br />
{' '}Creating Solutions.              </h2>
              <p className="story-exact-desc">II&amp;M began with a simple but urgent question: Where is the voice of Muslim patients and healthcare professionals? We started with research to understand their needs, developed reliable tools to measure them, and identified critical gaps in care and knowledge.</p>
              <p className="story-exact-desc">Today, we build on that foundation through education, consultation, and scholarly engagement — helping close the gaps and equipping healthcare professionals and institutions to provide culturally informed, ethically grounded, and compassionate care.</p>
              <Link href="/about" className="btn-story-mission">
OUR HISTORY &amp; MISSION{' '}                <i className="fa-solid fa-arrow-right ms-2" />
{' '}              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-our-expertise">
      <div className="container-fluid p-20">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4 pe-lg-4">
            <div className="expertise-eyebrow-wrap">
              <span className="expertise-eyebrow-text">OUR EXPERTISE</span>
              <span className="expertise-eyebrow-bar" />
            </div>
            <h2 className="expertise-heading">
Education, Consultation              <br />
{' '}and Thought Leadership            </h2>
            <p className="expertise-desc">We partner with individuals, institutions, and communities to advance understanding and improve healthcare experiences for Muslim patients and healthcare professionals.</p>
          </div>
          <div className="col-lg-8">
            <div className="row g-3 g-xl-4">
              <div className="col-md-4">
                <div className="expertise-card">
                  <img src="/images/expertise-education.jpg" alt="Education &amp; Training" className="expertise-card-img" loading="lazy" />
                  <h3 className="expertise-card-title">Education &amp; Training</h3>
                  <p className="expertise-card-text">Courses, workshops, and professional development for students, healthcare professionals, and communities.</p>
                  <Link href="/education" className="card-maroon-link">
LEARN MORE{' '}                    <i className="fa-solid fa-arrow-right ms-1" />
{' '}                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expertise-card">
                  <img src="/images/expertise-consultation.jpg" alt="Consultation &amp; Advisory" className="expertise-card-img" loading="lazy" />
                  <h3 className="expertise-card-title">Consultation &amp; Advisory</h3>
                  <p className="expertise-card-text">Expert guidance for hospitals, universities, policymakers, and healthcare teams.</p>
                  <Link href="/consultation" className="card-maroon-link">
LEARN MORE{' '}                    <i className="fa-solid fa-arrow-right ms-1" />
{' '}                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="expertise-card">
                  <img src="/images/expertise-speaking.jpg" alt="Speaking &amp; Engagements" className="expertise-card-img" loading="lazy" />
                  <h3 className="expertise-card-title">Speaking &amp; Engagements</h3>
                  <p className="expertise-card-text">Keynotes, grand rounds, panels, and community events.</p>
                  <Link href="/speaking" className="card-maroon-link">
REQUEST A SPEAKER{' '}                    <i className="fa-solid fa-arrow-right ms-1" />
{' '}                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-featured-learning">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5 p-0">
            <div className="learning-image-wrap">
              <img src="/images/learning-lecture.jpg" alt="Knowledge that empowers care" className="learning-photo-tall" loading="lazy" />
              <div className="learning-overlay-banner">
                <p className="learning-overlay-text">
Knowledge that                  <br />
empowers care.                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex">
            <div className="learning-content-wrap">
              <div>
                <div className="eyebrow-container">
                  <span className="eyebrow-text">FEATURED LEARNING OPPORTUNITIES</span>
                  <span className="eyebrow-line" />
                </div>
                <h2 className="learning-main-heading">Courses for Real-World Impact</h2>
                <p className="learning-subhead">Evidence-informed, practical, and rooted in Islamic ethics.</p>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="learning-card">
                      <img src="/images/course-bioethics.jpg" alt="Islamic Bioethics: A Primer for Muslim Physicians" className="learning-card-img" loading="lazy" />
                      <h3 className="learning-card-title">
Islamic Bioethics:                        <br />
A Primer for Muslim Physicians                      </h3>
                      <p className="learning-card-text">Foundational frameworks for ethical decision-making.</p>
                      <Link href="/courses" className="card-maroon-link">
VIEW COURSE{' '}                        <i className="fa-solid fa-arrow-right ms-1" />
{' '}                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="learning-card">
                      <img src="/images/course-muslim-doctor.jpg" alt="Becoming a Muslim Doctor" className="learning-card-img" loading="lazy" />
                      <h3 className="learning-card-title">Becoming a Muslim Doctor</h3>
                      <p className="learning-card-text">Identity, vocation, ethics, and professional development for medical students.</p>
                      <Link href="/courses" className="card-maroon-link">
LEARN MORE{' '}                        <i className="fa-solid fa-arrow-right ms-1" />
{' '}                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="learning-card">
                      <img src="/images/course-workshops.jpg" alt="Custom Workshops &amp; Training" className="learning-card-img" loading="lazy" />
                      <h3 className="learning-card-title">Custom Workshops &amp; Training</h3>
                      <p className="learning-card-text">Tailored learning experiences for healthcare teams and institutions.</p>
                      <Link href="/workshops" className="card-maroon-link">
REQUEST TRAINING{' '}                        <i className="fa-solid fa-arrow-right ms-1" />
{' '}                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/courses" className="all-courses-link">
VIEW ALL COURSES &amp; PROGRAMS{' '}                <i className="fa-solid fa-arrow-right ms-1" />
{' '}              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-research-education">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-5 pe-lg-4">
            <div className="eyebrow-container">
              <span className="eyebrow-text">THE RESEARCH BEHIND THE EDUCATION</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="research-heading">Evidence. Insight. Action.</h2>
            <p className="research-desc">Our research uncovers the needs of Muslim patients and healthcare professionals, develops verifiable tools to assess them, and informs our educational and advisory work.</p>
            <Link href="/research" className="btn-outline-bordered">
EXPLORE RESEARCH &amp; IMPACT{' '}              <i className="fa-solid fa-arrow-right ms-2" />
{' '}            </Link>
          </div>
          <div className="col-lg-7 research-watermark-wrap">
            <div className="research-bg-watermark" />
            <div className="row g-3">
              <div className="col-md-4">
                <div className="process-step-card">
                  <div className="step-number">
                    01
                  </div>
                  <h3 className="step-title">Listen</h3>
                  <p className="step-desc">Community voices and lived experiences</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="process-step-card">
                  <div className="step-number">
                    02
                  </div>
                  <h3 className="step-title">Discover</h3>
                  <p className="step-desc">Evidence and assessment tools</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="process-step-card">
                  <div className="step-number">
                    03
                  </div>
                  <h3 className="step-title">Act</h3>
                  <p className="step-desc">Education, practice and policy change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-podcast-strip">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-8">
            <div className="podcast-copy-wrap">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div className="podcast-brand-col">
                    <i className="fa-solid fa-microphone-lines podcast-mic-icon" />
                    <div>
                      <div className="podcast-subtag">
                        II&amp;M PRESENTS
                      </div>
                      <h3 className="podcast-main-name">
The Medic                        <br />
&amp; The Mufti                      </h3>
                      <div className="podcast-categories">
                        ISLAM · ETHICS · BIOMEDICINE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <h3 className="podcast-center-title">Meaningful Conversations at the Intersection of Faith and Medicine</h3>
                  <p className="podcast-center-text">Join medical experts and Islamic scholars as we explore today's most important questions in healthcare, ethics, and society.</p>
                  <Link href="/podcast" className="btn-white-pill">
LISTEN TO THE PODCAST{' '}                    <i className="fa-solid fa-arrow-right ms-2" />
{' '}                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="podcast-photo-wrap">
              <img src="/images/podcast-medic-mufti.jpg" alt="The Medic &amp; The Mufti Podcast" className="podcast-photo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-emerald-cta">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5 p-0">
            <div className="cta-arch-wrap">
              <img src="/images/cta-archway.jpg" alt="Islamic architecture at dusk" className="cta-arch-img" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="cta-emerald-content">
              <div className="eyebrow-container mb-2">
                <span className="eyebrow-text eyebrow-gold">LET'S CREATE MEANINGFUL IMPACT TOGETHER</span>
              </div>
              <h2 className="cta-emerald-title">
Better understanding                <br />
{' '}is the beginning of                <br />
{' '}better healthcare.              </h2>
              <p className="cta-emerald-desc">Connect with II&amp;M to bring evidence-informed learning, institutional guidance, and expert perspectives to your community.</p>
              <div className="cta-emerald-actions">
                <Link href="/consultation" className="btn-solid-maroon">
REQUEST A CONSULTATION{' '}                  <i className="fa-solid fa-arrow-right ms-2" />
{' '}                </Link>
                <Link href="/speaking" className="btn-outline-trans-white">
INVITE A SPEAKER{' '}                  <i className="fa-solid fa-arrow-right ms-2" />
{' '}                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
