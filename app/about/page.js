import Link from "next/link";

export const metadata = {
  title: "About II&M | Initiative on Islam & Medicine",
  description: "Initiative on Islam & Medicine (II&M) — About Us. Rooted in research. Advancing education. Transforming care.",
};

export default function AboutPage() {
  return (
    <>
    <header className="hero-seamless hero-about-seamless">
      <div className="hero-bg-wrapper">
        <img src="/images/hero-doctor-team.jpg" alt="About II&amp;M — healthcare team" className="hero-bg-img" loading="eager" />
        <div className="hero-gradient-overlay" />
        <div className="hero-watermark-overlay" />
      </div>
      <div className="container hero-container-relative">
        <div className="hero-content-inner">
          <p className="hero-eyebrow-text-gold">PEOPLE | KNOWLEDGE | MORE COMPASSIONATE CARE</p>
          <div className="hero-eyebrow-bar-maroon" />
          <h1 className="hero-seamless-title">
About II&amp;M            <br />
{' '}Rooted in            <br />
{' '}research.            <br />
{' '}            <em>
Transforming              <br />
{' '}care.            </em>
{' '}          </h1>
          <p className="hero-seamless-lead">The Initiative on Islam &amp; Medicine (II&amp;M) works at the intersection of Islam and healthcare to build a more informed, equitable, and compassionate healthcare system for all.</p>
          <div className="hero-seamless-actions">
            <a href="#story" className="btn-seamless-maroon">
OUR STORY{' '}              <i className="fa-solid fa-arrow-down ms-2" />
{' '}            </a>
            <Link href="/research" className="btn-seamless-outline">OUR RESEARCH FOUNDATION</Link>
          </div>
        </div>
        <div className="hero-seamless-quote">
          <p className="quote-text">
Knowledge.            <br />
{' '}People.            <br />
{' '}Better Care.          </p>
          <div className="quote-gold-bar" />
        </div>
      </div>
    </header>
    <section id="story" className="section-foundations">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4 d-flex flex-column justify-content-between pe-lg-2">
            <div>
              <div className="expertise-eyebrow-wrap">
                <span className="expertise-eyebrow-text">OUR FOUNDATIONS</span>
                <span className="expertise-eyebrow-bar" />
              </div>
              <h2 className="expertise-heading">Our Story</h2>
              <p className="expertise-desc">II&amp;M began by researching the needs of Muslim patients, communities, and healthcare professionals because their voices were often missing from funding and policy conversations. We developed replicable, verifiable, and vetted tools to identify gaps and generate evidence.</p>
              <p className="expertise-desc">Through this work, we recognized that many clinicians and healthcare workers lacked the knowledge and confidence to address Muslim patients' concerns. This insight led II&amp;M to expand into education, training, consultation, and scholarly engagement — turning evidence into practical solutions for better care.</p>
            </div>
            <div className="mt-3">
              <Link href="/research" className="btn-outline-bordered">
OUR RESEARCH FOUNDATION{' '}                <i className="fa-solid fa-arrow-right ms-2" />
{' '}              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <img src="/images/story-consultation.jpg" alt="Our Foundation Story - Patient Consultation" className="foundations-image" loading="lazy" />
          </div>
          <div className="col-lg-3">
            <div className="foundations-quote-card">
              <div className="quote-icon-large">
                “
              </div>
              <p className="quote-card-text">We started by listening because the voices of Muslim patients and communities were too often missing. Today, we translate that understanding into education, tools, and partnerships for more equitable and compassionate care.</p>
              <div className="quote-card-bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-journey">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <div className="expertise-eyebrow-wrap mb-1">
              <span className="expertise-eyebrow-text">OUR JOURNEY</span>
            </div>
            <h2 className="expertise-heading m-0">From Listening to Lasting Impact</h2>
          </div>
          <div className="col-lg-6 text-lg-end mt-2 mt-lg-0">
            <p className="text-muted m-0" style={{ fontSize: "13.5px", maxWidth: "460px", marginLeft: "auto" }}>A growing body of work, shaped by community needs, evidence, and a commitment to real-world change.</p>
          </div>
        </div>
        <div className="journey-timeline-track">
          <div className="journey-timeline-line" />
          <div className="row g-2">
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-users journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Listening</h3>
              <p className="journey-step-text">Engaging Muslim patients, communities, and healthcare professionals.</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-file-lines journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Research &amp; Tools</h3>
              <p className="journey-step-text">Developing replicable, verifiable, and vetted tools to understand needs and experiences.</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-magnifying-glass journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Identifying Gaps</h3>
              <p className="journey-step-text">Generating evidence to highlight unmet needs in healthcare practice, policy, and education.</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-book-open journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Education &amp; Training</h3>
              <p className="journey-step-text">Creating practical, evidence-informed learning opportunities for clinicians and students.</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-comments journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Consultation &amp; Speaking</h3>
              <p className="journey-step-text">Advising institutions and sharing expertise through speaking engagements.</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 journey-step-col">
              <i className="fa-solid fa-chart-line journey-step-icon" />
              <div className="journey-step-dot" />
              <h3 className="journey-step-title">Ongoing Impact</h3>
              <p className="journey-step-text">Expanding reach, strengthening partnerships, and contributing to a more equitable healthcare future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-purpose">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <div className="expertise-eyebrow-wrap mb-1">
              <span className="expertise-eyebrow-text">OUR PURPOSE</span>
            </div>
            <h2 className="expertise-heading m-0">Mission, Vision, and Approach</h2>
          </div>
          <div className="col-lg-6 text-lg-end mt-2 mt-lg-0">
            <p className="text-muted m-0" style={{ fontSize: "13.5px", maxWidth: "480px", marginLeft: "auto" }}>Guided by our commitment to knowledge, people, and better care, II&amp;M works to bridge understanding and practice at the intersection of Islam and healthcare.</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="purpose-card purpose-card-pink">
              <div className="purpose-icon-badge purpose-icon-maroon">
                <i className="fa-solid fa-bullseye" />
              </div>
              <h3 className="purpose-card-title">Our Mission</h3>
              <p className="purpose-card-text">To improve healthcare understanding and responsiveness at the intersection of Islam and medicine through research, education, consultation, and collaboration.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="purpose-card purpose-card-green">
              <div className="purpose-icon-badge purpose-icon-green">
                <i className="fa-solid fa-eye" />
              </div>
              <h3 className="purpose-card-title">Our Vision</h3>
              <p className="purpose-card-text">A more informed, equitable, and compassionate healthcare future where the needs and values of Muslim patients and communities are understood, respected, and integrated into practice.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="purpose-card purpose-card-cream">
              <div className="purpose-icon-badge purpose-icon-maroon">
                <i className="fa-solid fa-gear" />
              </div>
              <h3 className="purpose-card-title">Our Approach</h3>
              <p className="purpose-card-text">Evidence-informed, faith-conscious, and community-engaged work that translates research into practical tools, education, and institutional change.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-distinct">
      <div className="container">
        <div className="mb-4">
          <div className="expertise-eyebrow-wrap mb-1">
            <span className="expertise-eyebrow-text">WHAT SETS US APART</span>
          </div>
          <h2 className="expertise-heading">What Makes II&amp;M Distinct</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="distinct-card">
              <img src="/images/distinct-research.jpg" alt="Community-Engaged Research" className="distinct-card-img" loading="lazy" />
              <div className="distinct-card-body">
                <i className="fa-solid fa-users distinct-icon" />
                <h3 className="distinct-card-title">Community-Engaged Research</h3>
                <p className="distinct-card-text">We center the voices and experiences of Muslim patients, communities, and healthcare professionals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="distinct-card">
              <img src="/images/distinct-bioethics.jpg" alt="Islamic Bioethics Insight" className="distinct-card-img" loading="lazy" />
              <div className="distinct-card-body">
                <i className="fa-solid fa-book-open distinct-icon" />
                <h3 className="distinct-card-title">Islamic Bioethics Insight</h3>
                <p className="distinct-card-text">We bring deep understanding of Islamic ethical perspectives to contemporary healthcare challenges.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="distinct-card">
              <img src="/images/distinct-education.jpg" alt="Practical Healthcare Education" className="distinct-card-img" loading="lazy" />
              <div className="distinct-card-body">
                <i className="fa-solid fa-graduation-cap distinct-icon" />
                <h3 className="distinct-card-title">Practical Healthcare Education</h3>
                <p className="distinct-card-text">We develop accessible, evidence-informed training and resources for real-world clinical settings.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="distinct-card">
              <img src="/images/distinct-building.jpg" alt="Trusted Institutional Advisory" className="distinct-card-img" loading="lazy" />
              <div className="distinct-card-body">
                <i className="fa-solid fa-building-columns distinct-icon" />
                <h3 className="distinct-card-title">Trusted Institutional Advisory</h3>
                <p className="distinct-card-text">We partner with healthcare institutions, academic centers, and organizations to inform policy, practice, and culture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-audiences">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <div className="expertise-eyebrow-wrap mb-1">
              <span className="expertise-eyebrow-text">OUR AUDIENCES</span>
            </div>
            <h2 className="expertise-heading m-0">Who We Serve</h2>
          </div>
          <div className="col-lg-6 text-lg-end mt-2 mt-lg-0">
            <p className="text-muted m-0" style={{ fontSize: "13.5px", maxWidth: "480px", marginLeft: "auto" }}>We work with a wide range of individuals and organizations to advance understanding and improve care at the intersection of Islam and medicine.</p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-hospital.jpg" alt="Healthcare Institutions" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-hospital audience-icon" />
                <h3 className="audience-title">Healthcare Institutions</h3>
                <p className="audience-text">Hospitals, health systems, and academic medical centers</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-clinician.jpg" alt="Clinicians" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-stethoscope audience-icon" />
                <h3 className="audience-title">Clinicians</h3>
                <p className="audience-text">Physicians, nurses, and allied health professionals</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-students.jpg" alt="Medical Students and Fellows" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-graduation-cap audience-icon" />
                <h3 className="audience-title">Medical Students and Fellows</h3>
                <p className="audience-text">The next generation of healthcare leaders</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-family.jpg" alt="Muslim Patients and Families" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-people-roof audience-icon" />
                <h3 className="audience-title">Muslim Patients and Families</h3>
                <p className="audience-text">Individuals and communities seeking respectful, informed care</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-researcher.jpg" alt="Researchers" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-clipboard-user audience-icon" />
                <h3 className="audience-title">Researchers</h3>
                <p className="audience-text">Scholars and practitioners advancing knowledge</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="audience-card">
              <img src="/images/audience-community.jpg" alt="Community Organizations" className="audience-card-img" loading="lazy" />
              <div className="audience-card-body">
                <i className="fa-solid fa-handshake-angle audience-icon" />
                <h3 className="audience-title">Community Organizations</h3>
                <p className="audience-text">Faith-based and community groups working for healthier communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-leadership-split">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-4 d-flex align-items-center bg-white">
            <div className="leadership-text-col">
              <div className="expertise-eyebrow-wrap mb-1">
                <span className="expertise-eyebrow-text">A STRONGER ECOSYSTEM</span>
              </div>
              <h2 className="expertise-heading mb-3">Leadership &amp; Collaboration</h2>
              <p className="expertise-desc mb-4">II&amp;M brings together scholars, clinicians, educators, researchers, and community voices to create meaningful change. Our work is strengthened by interdisciplinary collaboration and a shared commitment to better care.</p>
              <Link href="/team" className="btn-outline-bordered">
OUR NETWORK{' '}                <i className="fa-solid fa-arrow-right ms-2" />
{' '}              </Link>
            </div>
          </div>
          <div className="col-lg-5 leadership-img-col">
            <img src="/images/leadership-meeting.jpg" alt="Leadership and Collaboration Meeting" className="leadership-photo" loading="lazy" />
          </div>
          <div className="col-lg-3 leadership-green-col">
            <p className="leadership-green-quote">
Different              <br />
{' '}perspectives.              <br />
{' '}A shared purpose.              <br />
{' '}Healthier communities.            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section-values-cards">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-3">
            <div className="expertise-eyebrow-wrap mb-1">
              <span className="expertise-eyebrow-text">OUR GUIDING PRINCIPLES</span>
            </div>
            <h2 className="expertise-heading mb-2">Our Values</h2>
            <p className="text-muted m-0" style={{ fontSize: "13px" }}>Our work is grounded in enduring values that shape how we listen, learn, and serve.</p>
          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              <div className="col-6 col-lg-3">
                <div className="value-feature-card">
                  <div className="value-feature-icon">
                    <i className="fa-solid fa-book-open" />
                  </div>
                  <div>
                    <h3 className="value-feature-title">Scholarship</h3>
                    <p className="value-feature-text">A commitment to rigorous research and lifelong learning.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-feature-card">
                  <div className="value-feature-icon">
                    <i className="fa-solid fa-heart" />
                  </div>
                  <div>
                    <h3 className="value-feature-title">Compassion</h3>
                    <p className="value-feature-text">Centering human dignity, care, and empathy.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-feature-card">
                  <div className="value-feature-icon">
                    <i className="fa-solid fa-shield-halved" />
                  </div>
                  <div>
                    <h3 className="value-feature-title">Integrity</h3>
                    <p className="value-feature-text">Upholding honesty, rigor, and trust in all we do.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-feature-card">
                  <div className="value-feature-icon">
                    <i className="fa-solid fa-hands-holding-child" />
                  </div>
                  <div>
                    <h3 className="value-feature-title">Service</h3>
                    <p className="value-feature-text">Working for the well-being of patients, communities, and the common good.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-about-cta">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          <div className="col-lg-5 p-0">
            <div className="about-cta-arch-wrap">
              <img src="/images/about-cta-arch.jpg" alt="Islamic architecture through a stone arch" className="about-cta-arch-img" loading="lazy" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="about-cta-content">
              <div className="eyebrow-container mb-2">
                <span className="eyebrow-text eyebrow-gold">JOIN OUR WORK</span>
              </div>
              <h2 className="cta-emerald-title">Explore. Collaborate. Make an Impact.</h2>
              <p className="cta-emerald-desc">Learn more about our education programs, request a consultation, or invite a speaker to your institution or community.</p>
              <div className="cta-emerald-actions">
                <Link href="/education" className="btn-solid-maroon">
EXPLORE EDUCATION{' '}                  <i className="fa-solid fa-arrow-right ms-2" />
{' '}                </Link>
                <Link href="/consultation" className="btn-outline-trans-white">
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
