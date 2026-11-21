import { asset } from "../../lib/asset";
import Link from "next/link";

export const metadata = {
  title: "Workshops & Educational Programs | Initiative on Islam & Medicine",
  description:
    "Evidence-informed workshops, seminars, and educational sessions at the intersection of Islam, healthcare, and bioethics.",
};

const TOPICS = [
  ["Islamic Bioethics", "Explore foundational and contemporary bioethical questions from an Islamic perspective.", "/images/our-mission/vision-mosque.jpg", "/interfaces-and-discourses"],
  ["End-of-Life Care Ethics", "Discuss ethical, spiritual, and practical considerations in end-of-life and palliative care.", "/images/research/project-palliative.jpg", "/dignity-healthcare-end-of-life"],
  ["Organ Donation Ethics", "Examine Islamic perspectives on organ donation, transplantation, and related ethical issues.", "/images/workshops/topic-organ.jpg", "/living-organ-donation"],
  ["Mammography Screening", "Address religious, cultural, and practical considerations for breast cancer screening among Muslim women.", "/images/research/project-mammography.jpg", "/mammography"],
  ["Muslim Health Research", "Understand key findings, methods, and community perspectives in Muslim health research.", "/images/workshops/topic-research.jpg", "/research"],
  ["Muslim Patients’ Religious & Spiritual Needs", "Learn how to support the religious and spiritual needs of Muslim patients in clinical settings.", "/images/workshops/topic-spiritual.jpg", "/mahsn-pro"],
  ["Mosque-Based Health Education", "Explore strategies for community health education and engagement in mosque settings.", "/images/research/project-mheart.jpg", "/mosque-health-education"],
  ["Muslim Physicians and the Healthcare Workforce", "Discuss challenges, opportunities, and support for Muslim physicians and healthcare professionals.", "/images/research/education.jpg", "/advancing-equity"],
];

const CONFERENCES = [
  {
    img: asset("/images/our-impact/conf-1.jpg"),
    title: "Mapping Out an Islamic Bioethics",
    text: "A foundational workshop charting core themes and frameworks in Islamic bioethics.",
    href: "https://medicineandislam.org/in-person-seminars-workshops/mapping-out-an-islamic-bioethics",
  },
  {
    img: asset("/images/our-impact/conf-2.jpg"),
    title: "Annual Islamic Bioethics Workshop",
    text: "Scholars and clinicians examining the intersections of theology, law, and biomedicine.",
    href: "https://medicineandislam.org/in-person-seminars-workshops/2nd-annual-islamic-bioethics-workshop",
  },
  {
    img: asset("/images/our-impact/conf-3.jpg"),
    title: "Islamic Bioethics Spring Conference",
    text: "Advancing research and conversation across medicine, ethics, and Islamic studies.",
    href: "https://medicineandislam.org/conference-april/",
  },
  {
    img: asset("/images/our-impact/conf-4.jpg"),
    title: "Islamic Bioethics: AMMSA Conference",
    text: "Dialogue on Islamic bioethics presented at the AMMSA annual gathering.",
    href: "https://medicineandislam.org/islamic-bioethics-ammsa-conference/",
  },
  {
    img: asset("/images/our-impact/teach-3.jpg"),
    title: "Producing Parenthood in Modernity",
    text: "Exploring reproductive ethics, modern medicine, and Islamic perspectives on parenthood.",
    href: "https://medicineandislam.org/producing-parenthood-in-modernity/",
  },
  {
    img: asset("/images/our-impact/teach-4.jpg"),
    title: "CMR 2026",
    text: "Annual continuing medical education workshop on religion and healthcare.",
    href: "https://medicineandislam.org/cmr-2026",
  },
];

const PROJECTS = [
  ["Investigating American Muslim Palliative & Hospice Care Needs (I AM PCN)", "In-depth exploration of palliative and hospice care needs of American Muslims.", "/images/research/project-palliative.jpg", "/palliative-care-needs"],
  ["Mosque-Based Health Education and Research Tools (M-HEaRT)", "Developing faith-aligned health education tools for mosques and communities.", "/images/research/project-mheart.jpg", "/mosque-health-education"],
  ["Muslim American Healthcare & Spiritual Needs (MAHSN)", "Exploring the healthcare and spiritual needs of Muslim Americans.", "/images/research/project-mahsn.jpg", "/mahsn-pro"],
  ["Fostering Connections Between Science and Theology for Medical Track Students", "Building bridges between scientific knowledge and Islamic theology.", "/images/research/project-empart.jpg", "/fostering-connections"],
  ["Religiously-Tailored Mammography Intervention for American Muslims", "Culturally and religiously tailored approaches to breast cancer screening.", "/images/research/project-mammography.jpg", "/mammography"],
  ["American Muslim Cultural Challenges with U.S. Healthcare", "Cultural and religious challenges faced by American Muslims in healthcare settings.", "/images/research/project-equity.jpg", "/advancing-equity"],
];

const AUDIENCES = [
  {
    img: "/images/audience-hospital.jpg",
    icon: "fa-hospital",
    title: "Healthcare Institutions",
    text: "Hospitals, health systems, and academic medical centers",
  },
  {
    img: "/images/audience-clinician.jpg",
    icon: "fa-stethoscope",
    title: "Clinicians",
    text: "Physicians, nurses, and allied health professionals",
  },
  {
    img: "/images/audience-students.jpg",
    icon: "fa-graduation-cap",
    title: "Medical Students and Fellows",
    text: "The next generation of healthcare leaders",
  },
  {
    img: "/images/audience-family.jpg",
    icon: "fa-people-roof",
    title: "Muslim Patients and Families",
    text: "Individuals and communities seeking respectful, informed care",
  },
  {
    img: "/images/audience-researcher.jpg",
    icon: "fa-clipboard-user",
    title: "Researchers",
    text: "Scholars and practitioners advancing knowledge",
  },
  {
    img: "/images/audience-community.jpg",
    icon: "fa-handshake-angle",
    title: "Community Organizations",
    text: "Faith-based and community groups working for healthier communities",
  },
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

      <section className="imp-conferences ws-featured-conferences">
        <div className="container">
          <div className="imp-section-intro imp-section-intro--left">
            <p className="ws-eyebrow">SIGNATURE SYMPOSIA &amp; CONFERENCES</p>
            <h2 className="imp-h2">Featured Conferences &amp; Public Programs</h2>
            <p className="imp-lead">
              II&amp;M convenes thought leaders, healthcare professionals, scholars, and community members to explore pressing issues at the intersection of Islam and medicine.
            </p>
          </div>
          <div className="imp-card-grid-4">
            {CONFERENCES.map((item) => (
              <article className="imp-media-card" key={item.title}>
                <div className="imp-media-card-img">
                  <Link href={item.href} aria-label={item.title}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                </div>
                <div className="imp-media-card-body">
                  <h3>
                    <Link href={item.href} className="imp-card-title-link">
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="imp-card-arrow" aria-label={`Learn more about ${item.title}`}>
                    <i className="fa-solid fa-arrow-right" />
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
              {PROJECTS.map(([title, text, image, href]) => (
                <article className="ws-project" key={title}>
                  <img src={asset(image)} alt="" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href={href || "/research"}>
                    LEARN MORE <i className="fa-solid fa-arrow-right" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ws-who">
        <div className="container">
          <p className="ws-eyebrow">WHO WE WORK WITH</p>
          <h2>Trusted by a Wide Range of Institutions and Communities.</h2>
          <div className="row g-3 mt-3 text-start">
            {AUDIENCES.map((item) => (
              <div className="col-6 col-md-4 col-lg-2" key={item.title}>
                <div className="audience-card">
                  <img
                    src={asset(item.img)}
                    alt={item.title}
                    className="audience-card-img"
                    loading="lazy"
                  />
                  <div className="audience-card-body">
                    <i className={`fa-solid ${item.icon} audience-icon`} />
                    <h3 className="audience-title">{item.title}</h3>
                    <p className="audience-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
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
                  <div className="ws-step-badge">
                    <span className="ws-step-num">{num}</span>
                    <span className="ws-step-divider-line" />
                    <i className={`fa-solid ${icon}`} aria-hidden="true" />
                  </div>
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
