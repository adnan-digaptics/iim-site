import Link from "next/link";

export const metadata = {
  title: "Bioscience & Islam | Initiative on Islam & Medicine",
  description: "Bring Bioscience & Islam into your curriculum — an interdisciplinary program for educators at the intersection of science, faith, and humanity.",
};

export default function BiosciencePage() {
  return (
    <>
    <header className="hero-seamless hero-bio-seamless">
      <div className="hero-bg-wrapper">
        <img src="/images/bio-hero-discussion.jpg" alt="Educators in academic discussion" className="hero-bg-img" loading="eager" />
        <div className="hero-gradient-overlay" />
        <div className="hero-watermark-overlay" />
      </div>
      <div className="container hero-container-relative">
        <div className="hero-content-inner">
          <p className="hero-eyebrow-text-gold">EXPLORING BIOSCIENCE &amp; ISLAM</p>
          <div className="hero-eyebrow-bar-maroon" />
          <h1 className="hero-seamless-title">
Bring Bioscience &amp; Islam            <br />
{' '}Into Your Curriculum          </h1>
          <p className="hero-seamless-lead">An interdisciplinary, adaptable educational program helping students explore the big questions at the intersection of bioscience and Islamic theology.</p>
          <div className="hero-seamless-actions">
            <Link href="/consultation" className="btn-seamless-maroon">REQUEST CURRICULUM INTEGRATION</Link>
            <a href="#modules" className="btn-seamless-outline">EXPLORE THE 7 MODULES</a>
          </div>
          <div className="bio-hero-feats">
            <div className="bio-feat">
              <span className="bio-feat-icon">
                <i className="fa-solid fa-book-open" />
              </span>
              <span>
Evidence-Informed                <br />
Teaching Modules              </span>
            </div>
            <div className="bio-feat">
              <span className="bio-feat-icon">
                <i className="fa-solid fa-chalkboard-user" />
              </span>
              <span>
Faculty Support                <br />
&amp; Training              </span>
            </div>
            <div className="bio-feat">
              <span className="bio-feat-icon">
                <i className="fa-solid fa-building-columns" />
              </span>
              <span>
Flexible Implementation                <br />
for Your Institution              </span>
            </div>
          </div>
        </div>
        <div className="hero-bio-mark" aria-hidden="true">
          Science
          <br />
          Faith
          <br />
          Humanity
        </div>
        <aside className="hero-bio-quote">
          <p>
Cultivating curious minds.            <br />
Thoughtful dialogue.            <br />
A more compassionate future.          </p>
        </aside>
      </div>
    </header>
    <section className="bio-sec">
      <div className="container">
        <p className="bio-eyebrow">DESIGNED FOR YOUR INSTITUTION</p>
        <h2 className="bio-h2">Flexible Ways to Bring This Program to Your Students</h2>
        <p className="bio-lead">Exploring Bioscience &amp; Islam can be integrated into a variety of academic settings. We provide the content, teaching resources, and support to help you adopt the program to your institutional goals.</p>
        <div className="row g-3">
          <div className="col-md-4">
            <article className="bio-card">
              <img src="/images/bio-way-students.jpg" alt="Students studying" className="bio-card-img" />
              <span className="bio-card-icon">
                <i className="fa-solid fa-layer-group" />
              </span>
              <div className="bio-card-body">
                <h3>Integrate Into Existing Courses</h3>
                <p>Select modules to complement courses in bioscience, pre-med, health sciences, ethics, or Islamic studies.</p>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="bio-card">
              <img src="/images/bio-way-seminar.jpg" alt="Dedicated seminar" className="bio-card-img" />
              <span className="bio-card-icon">
                <i className="fa-solid fa-users" />
              </span>
              <div className="bio-card-body">
                <h3>Offer a Dedicated Seminar</h3>
                <p>Create a structured learning sequence using our seven modules, designed for semester or short-course formats.</p>
              </div>
            </article>
          </div>
          <div className="col-md-4">
            <article className="bio-card">
              <img src="/images/bio-way-faculty.jpg" alt="Faculty training" className="bio-card-img" />
              <span className="bio-card-icon">
                <i className="fa-solid fa-user-group" />
              </span>
              <div className="bio-card-body">
                <h3>Train &amp; Equip Faculty</h3>
                <p>We provide teaching guides, facilitator training, and ongoing support to help your faculty confidently implement the material.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="bio-sec bio-sec-cream">
      <div className="container">
        <p className="bio-eyebrow text-center">OUR INSTITUTIONAL PARTNERS</p>
        <h2 className="bio-h2 text-center">Designed for a Range of Educational Settings</h2>
        <div className="row g-3 text-center mt-2">
          <div className="col-6 col-lg-3">
            <div className="bio-set">
              <span className="bio-set-icon">
                <i className="fa-solid fa-building-columns" />
              </span>
              <h3>
Universities &amp;                <br />
Medical Schools              </h3>
              <p>Enrich biomedical, pre-med and interdisciplinary programs.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="bio-set">
              <span className="bio-set-icon">
                <i className="fa-solid fa-school" />
              </span>
              <h3>
Islamic Schools                <br />
&amp; Colleges              </h3>
              <p>Integrate science and Islamic thought in faith-based education.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="bio-set">
              <span className="bio-set-icon">
                <i className="fa-solid fa-stethoscope" />
              </span>
              <h3>
Pre-Health                <br />
Programs              </h3>
              <p>Equip future healthcare professionals with a holistic perspective.</p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="bio-set">
              <span className="bio-set-icon">
                <i className="fa-solid fa-mosque" />
              </span>
              <h3>
Faith-Based Educational                <br />
Institutions              </h3>
              <p>Create spaces for rigorous, values-based dialogue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bio-sec">
      <div className="container">
        <div className="row align-items-end mb-3">
          <div className="col-lg-8">
            <p className="bio-eyebrow">HOW IT WORKS</p>
            <h2 className="bio-h2 mb-0">A Simple Pathway for Implementation</h2>
          </div>
          <div className="col-lg-4">
            <p className="bio-aside">Define and support institutions with II&amp;M to meet your curricular needs.</p>
          </div>
        </div>
        <div className="bio-path">
          <div className="bio-path-item">
            <span className="bio-path-num">1</span>
            <span className="bio-set-icon">
              <i className="fa-solid fa-comments" />
            </span>
            <h3>Discovery Call</h3>
            <p>Discuss your goals, program fit, and student audience.</p>
          </div>
          <span className="bio-path-arrow">
            <i className="fa-solid fa-arrow-right" />
          </span>
          <div className="bio-path-item">
            <span className="bio-path-num">2</span>
            <span className="bio-set-icon">
              <i className="fa-solid fa-map" />
            </span>
            <h3>Curriculum Mapping</h3>
            <p>Select modules and place them in your existing or new program.</p>
          </div>
          <span className="bio-path-arrow">
            <i className="fa-solid fa-arrow-right" />
          </span>
          <div className="bio-path-item">
            <span className="bio-path-num">3</span>
            <span className="bio-set-icon">
              <i className="fa-solid fa-chalkboard-user" />
            </span>
            <h3>Faculty Preparation</h3>
            <p>Provide teaching materials, training, and facilitation support.</p>
          </div>
          <span className="bio-path-arrow">
            <i className="fa-solid fa-arrow-right" />
          </span>
          <div className="bio-path-item">
            <span className="bio-path-num">4</span>
            <span className="bio-set-icon">
              <i className="fa-solid fa-seedling" />
            </span>
            <h3>Implement &amp; Evaluate</h3>
            <p>Run the program and gather feedback for continuous improvement.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="modules" className="bio-topics">
      <div className="container">
        <div className="row align-items-end g-3 mb-3">
          <div className="col-lg-8">
            <p className="bio-eyebrow bio-eyebrow-gold">SEVEN SEMINAR TOPICS</p>
            <h2 className="bio-h2 bio-h2-white mb-0">Exploring Key Questions at the Intersection of Bioscience and Islam</h2>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link href="/curriculum" className="bio-btn-outline-light">EXPLORE ALL MODULES</Link>
          </div>
        </div>
        <div className="bio-topic-row">
          <article className="bio-topic-card">
            <img src="/images/bio-topic-book.jpg" alt="Islam, science, and ways of knowing" />
            <span className="bio-topic-num">1</span>
            <h3>Islam, Science &amp; Ways of Knowing</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-dna.jpg" alt="Evolution and human origins" />
            <span className="bio-topic-num">2</span>
            <h3>Evolution &amp; Human Origins</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-hero-mind.jpg" alt="Neuroscience, AI, and the soul" />
            <span className="bio-topic-num">3</span>
            <h3>Neuroscience, AI &amp; the Soul</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-topic-robot.jpg" alt="Human enhancement and transhumanism" />
            <span className="bio-topic-num">4</span>
            <h3>Human Enhancement &amp; Transhumanism</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-topic-genes.jpg" alt="Free will and genetic determinism" />
            <span className="bio-topic-num">5</span>
            <h3>Free Will &amp; Genetic Determinism</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-planet.jpg" alt="Life beyond Earth" />
            <span className="bio-topic-num">6</span>
            <h3>Life Beyond Earth</h3>
          </article>
          <article className="bio-topic-card">
            <img src="/images/bio-topic-mosque.jpg" alt="Synthesis, ethics, and reflection" />
            <span className="bio-topic-num">7</span>
            <h3>Synthesis, Ethics &amp; Reflection</h3>
          </article>
        </div>
      </div>
    </section>
    <section className="bio-sec">
      <div className="container">
        <p className="bio-eyebrow">TEACHING RESOURCES</p>
        <h2 className="bio-h2">Comprehensive Resources for Faculty and Students</h2>
        <div className="row g-3">
          <div className="col-6 col-lg-3">
            <article className="bio-res">
              <img src="/images/bio-book-cover.jpg" alt="Key readings textbook" />
              <h3>Key Readings</h3>
              <p>Bridging Bioscience and Islam and other foundational texts.</p>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article className="bio-res">
              <img src="/images/bio-modules-print.jpg" alt="Teaching modules" />
              <h3>Teaching Modules</h3>
              <p>Structured materials for each of the seven topics.</p>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article className="bio-res">
              <img src="/images/bio-companion.jpg" alt="Teacher's Companion" />
              <h3>Teacher's Companion</h3>
              <p>Guidance, discussion questions, and facilitation tips.</p>
            </article>
          </div>
          <div className="col-6 col-lg-3">
            <article className="bio-res">
              <img src="/images/bio-resource-laptop.jpg" alt="Additional resources" />
              <h3>Additional Resources</h3>
              <p>Videos, case studies, and activities for classroom use.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="bio-sec bio-sec-cream">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <p className="bio-eyebrow">STUDENT LEARNING EXPERIENCE</p>
            <h2 className="bio-h2">Engaging Students in Meaningful Dialogue</h2>
            <p className="bio-body">Our seminars bring together Muslim students from a range of academic backgrounds to explore complex questions with leading scholars, clinicians, and theologians.</p>
            <Link href="/education" className="bio-btn-maroon">VIEW PAST STUDENT SEMINARS</Link>
          </div>
          <div className="col-lg-4">
            <img src="/images/bio-student-main.jpg" alt="Student in academic discussion" className="bio-tall-photo" />
          </div>
          <div className="col-lg-4">
            <img src="/images/bio-student-group.jpg" alt="Group discussion" className="bio-stack-photo mb-3" />
            <img src="/images/bio-student-study.jpg" alt="Students collaborating" className="bio-stack-photo" />
          </div>
        </div>
      </div>
    </section>
    <section className="bio-sec">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <article className="bio-ed">
              <div className="bio-ed-copy">
                <p className="bio-eyebrow">RESEARCH &amp; EDUCATIONAL INSIGHTS</p>
                <h2 className="bio-h2">Contributing to Scholarship on Science, Faith &amp; Education</h2>
                <p>Our work informs peer-reviewed research, curriculum development, and scholarly publications at the intersection of bioscience and Islamic thought.</p>
                <Link href="/research" className="bio-text-link">
VIEW PUBLICATIONS{' '}                  <i className="fa-solid fa-arrow-right ms-1" />
                </Link>
              </div>
              <img src="/images/bio-journal.jpg" alt="Academic research papers" className="bio-ed-img" />
            </article>
          </div>
          <div className="col-lg-6">
            <article className="bio-ed">
              <div className="bio-ed-copy">
                <p className="bio-eyebrow">RECENT EVENTS</p>
                <h2 className="bio-h2">A Growing International Conversation</h2>
                <p>Seminars and instructor workshops have been held in collaboration with institutions in the United States, United Kingdom, and Malaysia.</p>
                <Link href="/resources" className="bio-text-link">
VIEW ALL EVENTS{' '}                  <i className="fa-solid fa-arrow-right ms-1" />
                </Link>
              </div>
              <img src="/images/bio-campus.jpg" alt="University campus" className="bio-ed-img" />
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="bio-cta">
      <div className="container text-center">
        <h2 className="bio-cta-title">Let’s Explore How This Fits Your Curriculum</h2>
        <p className="bio-cta-lead">Connect with our team to discuss how Exploring Bioscience &amp; Islam can support your academic program, faculty development, or student initiatives.</p>
        <div className="bio-cta-actions">
          <Link href="/consultation" className="bio-btn-maroon">SCHEDULE AN INSTITUTIONAL CONSULTATION</Link>
          <Link href="/curriculum" className="bio-btn-ghost">REQUEST PROGRAM OVERVIEW</Link>
        </div>
      </div>
    </section>
    <section className="bio-sec">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4">
            <p className="bio-eyebrow">PROJECT TEAM</p>
            <h2 className="bio-h2">Bioscientists. Theologians. Educators.</h2>
            <p className="bio-body">A multidisciplinary team committed to creating educational spaces where science and faith can inform and enrich one another.</p>
          </div>
          <div className="col-lg-8">
            <div className="bio-team">
              <figure className="bio-member">
                <img src="/images/bio-team-1.jpg" alt="Dr. Aasim I. Padela" />
                <figcaption>
                  <strong>Dr. Aasim I. Padela</strong>
                  <span>Founder, II&amp;M</span>
                </figcaption>
              </figure>
              <figure className="bio-member">
                <img src="/images/bio-team-2.jpg" alt="Dr. Shoaib Ahmed Malik" />
                <figcaption>
                  <strong>Dr. Shoaib A. Malik</strong>
                  <span>University of Edinburgh</span>
                </figcaption>
              </figure>
              <figure className="bio-member">
                <img src="/images/bio-team-3.jpg" alt="Faculty scholar" />
                <figcaption>
                  <strong>Faculty Scholar</strong>
                  <span>Curriculum &amp; Pedagogy</span>
                </figcaption>
              </figure>
              <figure className="bio-member">
                <img src="/images/bio-team-4.jpg" alt="Dr. Macksood Aftab" />
                <figcaption>
                  <strong>Dr. Macksood Aftab</strong>
                  <span>Michigan State University</span>
                </figcaption>
              </figure>
              <figure className="bio-member">
                <img src="/images/bio-team-5.jpg" alt="Faculty scholar" />
                <figcaption>
                  <strong>Faculty Scholar</strong>
                  <span>Islamic Studies</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
