import Link from "next/link";
import FosteringConnectionsNav from "./FosteringConnectionsNav";

export const metadata = {
  title: "Fostering Connections Between Bioscience & Theology | Initiative on Islam & Medicine",
  description:
    "Exploring Bioscience and Islam — an educational initiative helping Muslim students and teachers engage life's big questions through scientific inquiry and Islamic theological perspectives.",
  keywords: [
    "Bioscience and Theology",
    "Exploring Bioscience and Islam",
    "Islamic Bioethics",
    "Science and Religion",
    "John Templeton Foundation",
    "Muslim High School Curriculum",
    "Evolution and Islam",
    "Neuroscience and Soul",
  ],
};

const OBJECTIVES = [
  {
    num: "01",
    text: "Build conceptual literacy at the intersection of bioscience and theology.",
  },
  {
    num: "02",
    text: "Strengthen students' ability to navigate areas of overlap and tension between science and religion.",
  },
  {
    num: "03",
    text: "Encourage students to pursue further inquiry into these questions.",
  },
  {
    num: "04",
    text: "Develop practical teaching modules for Islamic high schools and colleges.",
  },
];

const SEMINAR_TOPICS = [
  {
    num: "01",
    title: "What Do We Know and How Do We Know It? Reasoning Exercises in Islam and Science",
  },
  {
    num: "02",
    title: "How did Human Beings Come About? Evolution and God's Special Creation",
  },
  {
    num: "03",
    title: "What does it mean to be a Human Being? Neuroscience, Artificial Intelligence and the Soul",
  },
  {
    num: "04",
    title: "Human Enhancement and Transhumanism: Are we changing and should we change our being?",
  },
  {
    num: "05",
    title: "Are We Programmed or Do We Have Free Will? Discussions on Fate and Genetic Determinism",
  },
  {
    num: "06",
    title: "Are Human Beings Unique in this Universe? Science and Theological Inquiry about Extraterrestrial Intelligent Life",
  },
  {
    num: "07",
    title: "Curriculum Review: Knowledge Cafés and Harvest",
  },
];

const PROJECT_MATERIALS = [
  {
    num: "01",
    title: "Bridging Bioscience and Islam — Engaging Big Questions about the Human Being",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
  {
    num: "02",
    title: "Teaching Modules",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
  {
    num: "03",
    title: "Teacher's Companion",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
  {
    num: "04",
    title: "Symposium Proceedings & Policy Recommendations — Biomedicine, Religion & Education",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
  {
    num: "05",
    title: "Student Reflection Booklet",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
  {
    num: "06",
    title: "Promotional Brochure",
    desc: "Resource available from the II&M project page",
    linkText: "VIEW ORIGINAL RESOURCE ↗",
    href: "#original-project",
  },
];

const PROJECT_EVENTS = [
  {
    num: "01",
    title: "Scientific Inquiry, Evolution, and the Human Experience",
    meta: "ISNA Education Forum · April 2025",
    linkText: "EVENT DETAILS ↗",
    href: "#events",
  },
  {
    num: "02",
    title: "Intensive Seminar Series for Medical, Dental and Health-Allied Students",
    meta: "IIIT, Virginia · Aug–Sep 2025",
    linkText: "EVENT DETAILS ↗",
    href: "#events",
  },
  {
    num: "03",
    title: "Islam, Science & the Human Being",
    meta: "Riphah University, Lahore · July 2025",
    linkText: "EVENT DETAILS ↗",
    href: "#events",
  },
  {
    num: "04",
    title: "Biomedicine, Religion, and Education",
    meta: "Aga Khan University, Karachi · July 2025",
    linkText: "EVENT DETAILS ↗",
    href: "#events",
  },
];

const STUDENT_SEMINARS = [
  {
    num: "01",
    title: "International Institute of Islamic Thought",
    meta: "Herndon, VA · Aug 29–Sep 1, 2025 · Medical, dental, nursing and allied-health students",
    linkText: "VIEW PROGRAM ↗",
    href: "#student-seminars",
  },
  {
    num: "02",
    title: "International Islamic University Malaysia",
    meta: "IIUM Gambang Campus · Jul 17–20, 2023 · Pre-university foundation students",
    linkText: "VIEW PROGRAM ↗",
    href: "#student-seminars",
  },
  {
    num: "03",
    title: "Chicago, Illinois",
    meta: "Jan 14–15 and Feb 18–19, 2023 · Islamic high-school students, Grades 11–12",
    linkText: "VIEW PROGRAM ↗",
    href: "#student-seminars",
  },
];

const TEACHER_TRAINING = [
  {
    num: "01",
    title: "Teaching Bioscience Through an Islamic Lens",
    meta: "II&M + ISLA · May 20, 2024",
    linkText: "WATCH / LEARN MORE ↗",
    href: "#teacher-training",
  },
  {
    num: "02",
    title: "Reimagining Bioscience for Muslim Students",
    meta: "II&M + ISLA · Jan 31 & Feb 3, 2025",
    linkText: "WATCH / LEARN MORE ↗",
    href: "#teacher-training",
  },
  {
    num: "03",
    title: "Special Symposium on Islam & Bioscience",
    meta: "II&M + IIUM · Feb 24, 2025",
    linkText: "WATCH / LEARN MORE ↗",
    href: "#teacher-training",
  },
];

const PUBLICATIONS = [
  {
    num: "01",
    title: "Exploring Muslim Student Learning Experiences at the Bioscience–Islam Interface: Insights from Two Cultural Contexts",
    meta: "Journal of Education in Muslim Societies · Apr 2026",
    linkText: "READ PUBLICATION ↗",
    href: "/research",
  },
  {
    num: "02",
    title: "Reimagining Bioscience Curriculum for Muslim High School Students",
    meta: "Islamic Horizons · May/June 2025",
    linkText: "READ PUBLICATION ↗",
    href: "/research",
  },
  {
    num: "03",
    title: 'Tackling "Big" Questions at the Bioscience–Islam Interface: Reporting on the Efficacy of an Educational Programme Designed for Muslim High School Students',
    meta: "International Journal of Science Education · 2024",
    linkText: "READ PUBLICATION ↗",
    href: "/research",
  },
  {
    num: "04",
    title: "Can We Live Longer and Should We? Radical Life Extension, Biomedicine, and Islamic Bioethics",
    meta: "Journal of Ethics and Emerging Technologies · 2024",
    linkText: "READ PUBLICATION ↗",
    href: "/research",
  },
];

const REPORTS = [
  {
    num: "01",
    title: "Symposium Proceedings & Policy Recommendations — Biomedicine, Religion & Education",
    meta: "Symposium on Biomedicine, Religion, and Education · July 2025",
    linkText: "READ REPORT ↗",
    href: "/research",
  },
];

const PRESENTATIONS = [
  {
    num: "01",
    title: "Addressing Fundamental Questions about the Human Being through Bioscientific and Theological Discussions",
    meta: "MCW IHER · Milwaukee · Sep 2023",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
  {
    num: "02",
    title: "Exploring Fundamental Questions about the Human Being through Bioscience and Islam",
    meta: "World Congress of Bioethics · Doha · Jun 2024",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
  {
    num: "03",
    title: 'Addressing "Big" Questions About the Human Being',
    meta: "ASBH · St. Louis · Sep 2024",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
  {
    num: "04",
    title: "Where Bioscience, Islam, and Education Intersect",
    meta: "ISLA Research Symposium · Dec 2024 · Recording",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
  {
    num: "05",
    title: "Where Bioscience, Islam, and Education Intersect",
    meta: "ISLA Research Symposium · Dec 2024 · Slides",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
  {
    num: "06",
    title: "Scientific Inquiry, Evolution, and the Human Experience",
    meta: "ISNA Education Forum · Apr 2025",
    linkText: "VIEW PRESENTATION ↗",
    href: "#presentations",
  },
];

const GALLERY_ITEMS = [
  {
    num: "01",
    title: "Chicagoland student seminars",
    meta: "USA · Jan–Feb 2023",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
  {
    num: "02",
    title: "International Islamic University Malaysia",
    meta: "Malaysia · July 2023",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
  {
    num: "03",
    title: "Riphah International University",
    meta: "Pakistan · July 2025",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
  {
    num: "04",
    title: "Aga Khan University — IED",
    meta: "Pakistan · July 2025",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
  {
    num: "05",
    title: "IIIT Intensive Seminar Series",
    meta: "USA · September 2025",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
  {
    num: "06",
    title: "FIMA Scientific Convention, Syiah Kuala University",
    meta: "Indonesia · September 2025",
    linkText: "VIEW GALLERY ↗",
    href: "#gallery",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Dr. Aasim I. Padela, MD, MSc",
    affiliation: "Medical College of Wisconsin",
  },
  {
    name: "Dr. Shoaib Ahmed Malik, PhD",
    affiliation: "University of Edinburgh",
  },
  {
    name: "Dr. Macksood Aftab, DO",
    affiliation: "Michigan State University",
  },
  {
    name: "Prof. Abdurezak Hashi, PhD",
    affiliation: "International Islamic University Malaysia",
  },
  {
    name: "Dr. Mohd Yusof, PhD",
    affiliation: "International Islamic University Malaysia",
  },
  {
    name: "Shaykh Hamza Karamali, MASc",
    affiliation: "Basira Education",
  },
  {
    name: "Dr. Omar Qureshi, PhD",
    affiliation: "Cambridge Muslim College",
  },
  {
    name: "Dr. Ahsan M. Arozullah, MD, MPH",
    affiliation: "Darul Qasim College",
  },
  {
    name: "Shaykh Bilal Ansari",
    affiliation: "Darul Qasim College",
  },
  {
    name: "Habeeb Quadri",
    affiliation: "High Quality Educational Consulting",
  },
  {
    name: "Dr. Shaza Khan, PhD",
    affiliation: "Islamic Schools League of America",
  },
  {
    name: "Dr. Raudah Yunus, MBBCh, DrPH",
    affiliation: "Medical College of Wisconsin",
  },
];

export default function FosteringConnectionsPage() {
  return (
    <div className="fostering-connections-page fc-pageWrap">
      {/* ===================================================================
          01 HERO SECTION
          =================================================================== */}
      <section className="fc-hero">
        <div className="fc-heroBgCircles" aria-hidden="true">
          <div className="fc-heroCircleOuter" />
          <div className="fc-heroCircleInner" />
          <div className="fc-heroCircleCore" />
        </div>

        <div className="container">
          <div className="fc-heroContainer">
            <div className="fc-heroEyebrowWrap">
              <span className="fc-heroEyebrowLine" />
              <p className="fc-heroEyebrow">EDUCATION &amp; RESEARCH PROJECT · EST. 2022</p>
            </div>

            <h1 className="fc-heroTitle">
              Fostering Connections<br />
              Between <em>Bioscience &amp;</em><br />
              <em>Theology</em>
            </h1>

            <p className="fc-heroLead">
              Exploring Bioscience and Islam — an educational initiative helping Muslim students and
              teachers engage life&apos;s big questions through scientific inquiry and Islamic theological
              perspectives.
            </p>

            <div className="fc-heroActions">
              <a href="#materials" className="fc-btnPrimary">
                EXPLORE PROJECT MATERIALS ↗
              </a>
              <a href="#events" className="fc-btnOutline">
                VIEW SEMINARS &amp; EVENTS ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 STICKY SUB-NAVIGATION
          =================================================================== */}
      <FosteringConnectionsNav />

      {/* ===================================================================
          03 MAIN EDITORIAL SECTION (TWO-COLUMN WITH RIGHT SIDEBAR)
          =================================================================== */}
      <section className="fc-mainLayoutSection">
        <div className="container">
          <div className="fc-layoutGrid">
            {/* ----------------- LEFT MAIN CONTENT COLUMN ----------------- */}
            <div className="fc-mainColumn">
              {/* SECTION 01: OVERVIEW */}
              <div id="overview" className="fc-sectionBlock">
                {/* Heading hidden per user request */}
                {/* <div className="fc-sectionEyebrow">THE PROJECT</div>
                <h2 className="fc-sectionTitle">Overview</h2>
                <div className="fc-burgundyBar" /> */}
                <p className="fc-bodyParagraph">
                  The project &ldquo;Fostering Connections between Bioscience and Theology for Medical Track Muslim
                  Students,&rdquo; also known as the &ldquo;Exploring Bioscience and Islam&rdquo; Seminar Series, launched in 2022 with
                  support from the John Templeton Foundation.
                </p>
                <p className="fc-bodyParagraph">
                  As Muslim students explore bioscience, they encounter questions about religious identity, scientific discovery,
                  human origins, consciousness and moral agency. This initiative creates opportunities to examine these
                  questions constructively through dialogue between bioscientists, Islamic scholars and educators.
                </p>
                <p className="fc-bodyParagraph">
                  The project aims to build conceptual literacy about key questions concerning the human being, and to equip
                  educators with classroom-ready teaching resources.
                </p>

                {/* OVERVIEW VIDEO */}
                <div className="fc-overviewVideoWrap">
                  <div className="fc-videoFrameWrap">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/WkqPDZHKljQ?rel=0&modestbranding=1"
                      title="Fostering Connections Between Science And Theology For Medical Track Muslim Students"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="fc-videoIframe"
                    />
                  </div>
                  <div className="fc-videoCaptionBar">
                    <div className="fc-videoCaptionInfo">
                      <span className="fc-videoTag">Featured Project Video</span>
                      <p className="fc-videoCaptionTitle">
                        Fostering Connections Between Science and Theology for Medical Track Muslim Students
                      </p>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=WkqPDZHKljQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fc-videoYoutubeLink"
                    >
                      <i className="fa-brands fa-youtube" aria-hidden="true" />
                      <span>Watch on YouTube</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* SECTION 02: PROJECT OBJECTIVES */}
              <div id="objectives" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">PURPOSE &amp; IMPACT</div>
                <h2 className="fc-sectionTitle">Project Objectives</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-objectivesGrid">
                  {OBJECTIVES.map((obj) => (
                    <div key={obj.num} className="fc-objectiveCard">
                      <div className="fc-objectiveNum">{obj.num}</div>
                      <p className="fc-objectiveText">{obj.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 03: PROGRAM DESIGN & SEVEN SEMINAR TOPICS */}
              <div id="seminar-topics" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">A MULTIMODAL APPROACH</div>
                <h2 className="fc-sectionTitle">Program Design &amp; Seven Seminar Topics</h2>
                <div className="fc-burgundyBar" />
                <p className="fc-sectionSubtext">
                  The multidisciplinary team developed seminars for Muslim high-school and university students,
                  followed by instructional resources for educators.
                </p>
                <div className="fc-topicsList">
                  {SEMINAR_TOPICS.map((topic) => (
                    <div key={topic.num} className="fc-topicRow">
                      <span className="fc-topicNum">{topic.num}</span>
                      <h3 className="fc-topicTitle">{topic.title}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 04: PROJECT MATERIALS */}
              <div id="materials" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">OPEN EDUCATIONAL MATERIALS</div>
                <h2 className="fc-sectionTitle">Project Materials</h2>
                <div className="fc-burgundyBar" />
                <p className="fc-sectionSubtext">
                  Teaching modules, companion resources, symposium proceedings and student-facing material
                  developed through the project.
                </p>
                <div className="fc-materialsGrid">
                  {PROJECT_MATERIALS.map((mat) => (
                    <div key={mat.num} className="fc-cardItem">
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{mat.title}</h3>
                          <span className="fc-cardTopNum">{mat.num}</span>
                        </div>
                        <p className="fc-cardMeta">{mat.desc}</p>
                      </div>
                      <a href={mat.href} className="fc-cardLink">
                        {mat.linkText}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="fc-noticeBox">
                  Individual files are accessed via the official project page. This template does not invent download URLs.
                </div>
              </div>

              {/* SECTION 05: PROJECT EVENTS */}
              <div id="events" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">LEARNING IN COMMUNITY</div>
                <h2 className="fc-sectionTitle">Project Events</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {PROJECT_EVENTS.map((evt) => (
                    <div key={evt.num} className="fc-cardItem">
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{evt.title}</h3>
                          <span className="fc-cardTopNum">{evt.num}</span>
                        </div>
                        <p className="fc-cardMeta">{evt.meta}</p>
                      </div>
                      <a href={evt.href} className="fc-cardLink">
                        {evt.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 06: STUDENT SEMINARS */}
              <div id="student-seminars" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">EDUCATIONAL REACH</div>
                <h2 className="fc-sectionTitle">Student Seminars</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {STUDENT_SEMINARS.map((sem) => (
                    <div key={sem.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{sem.title}</h3>
                          <span className="fc-cardTopNum">{sem.num}</span>
                        </div>
                        <p className="fc-cardMeta">{sem.meta}</p>
                      </div>
                      <a href={sem.href} className="fc-cardLink">
                        {sem.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 07: TEACHER TRAINING & SYMPOSIA */}
              <div id="teacher-training" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">SUPPORTING EDUCATORS</div>
                <h2 className="fc-sectionTitle">Teacher Training &amp; Symposia</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {TEACHER_TRAINING.map((trn) => (
                    <div key={trn.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{trn.title}</h3>
                          <span className="fc-cardTopNum">{trn.num}</span>
                        </div>
                        <p className="fc-cardMeta">{trn.meta}</p>
                      </div>
                      <a href={trn.href} className="fc-cardLink">
                        {trn.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 08: PUBLICATIONS */}
              <div id="publications" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">KNOWLEDGE &amp; EVIDENCE</div>
                <h2 className="fc-sectionTitle">Publications</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{pub.title}</h3>
                          <span className="fc-cardTopNum">{pub.num}</span>
                        </div>
                        <p className="fc-cardMeta">{pub.meta}</p>
                      </div>
                      <Link href={pub.href} className="fc-cardLink">
                        {pub.linkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 09: REPORTS */}
              <div id="reports" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">SYMPOSIUM OUTPUTS</div>
                <h2 className="fc-sectionTitle">Reports</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {REPORTS.map((rep) => (
                    <div key={rep.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{rep.title}</h3>
                          <span className="fc-cardTopNum">{rep.num}</span>
                        </div>
                        <p className="fc-cardMeta">{rep.meta}</p>
                      </div>
                      <Link href={rep.href} className="fc-cardLink">
                        {rep.linkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 10: CONFERENCE PRESENTATIONS */}
              <div id="presentations" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">SHARING THE WORK</div>
                <h2 className="fc-sectionTitle">Conference Presentations</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-materialsGrid">
                  {PRESENTATIONS.map((pres) => (
                    <div key={pres.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{pres.title}</h3>
                          <span className="fc-cardTopNum">{pres.num}</span>
                        </div>
                        <p className="fc-cardMeta">{pres.meta}</p>
                      </div>
                      <a href={pres.href} className="fc-cardLink">
                        {pres.linkText}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 11: PODCAST */}
              <div id="podcast" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">LISTEN &amp; LEARN</div>
                <h2 className="fc-sectionTitle">Podcast</h2>
                <div className="fc-burgundyBar" />
                <div className="fc-podcastPanel">
                  <h3 className="fc-podcastPanelTitle">
                    Big Questions About the Human Being — Islam and Biomedicine in Dialogue
                  </h3>
                  <p className="fc-podcastPanelDesc">
                    The Medic &amp; The Mufti podcast · Listen via the II&amp;M project page.
                  </p>
                  <Link href="/podcast" className="fc-podcastBtn">
                    LISTEN NOW ↗
                  </Link>
                </div>
              </div>

              {/* SECTION 12: EVENTS GALLERY & TESTIMONIALS */}
              <div id="gallery" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">A GLOBAL CONVERSATION</div>
                <h2 className="fc-sectionTitle">Events Gallery &amp; Testimonials</h2>
                <div className="fc-burgundyBar" />
                <p className="fc-sectionSubtext">
                  Six documented event groups across the United States, Malaysia, Pakistan and Indonesia, along with
                  recorded student testimonials.
                </p>
                <div className="fc-materialsGrid">
                  {GALLERY_ITEMS.map((gal) => (
                    <div key={gal.num} className={`fc-cardItem fc-cardWhite`}>
                      <div>
                        <div className="fc-cardTopRow">
                          <h3 className="fc-cardTitle">{gal.title}</h3>
                          <span className="fc-cardTopNum">{gal.num}</span>
                        </div>
                        <p className="fc-cardMeta">{gal.meta}</p>
                      </div>
                      <a href={gal.href} className="fc-cardLink">
                        {gal.linkText}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="fc-noticeBox">
                  Original event photographs and testimonial videos remain on the source project page.
                </div>
              </div>

              {/* SECTION 13: MEET THE PROJECT TEAM */}
              <div id="team" className="fc-sectionBlock">
                <div className="fc-sectionEyebrow">MULTIDISCIPLINARY EXPERTISE</div>
                <h2 className="fc-sectionTitle">Meet the Project Team</h2>
                <div className="fc-burgundyBar" />
                <p className="fc-sectionSubtext">
                  Bioscientists, theologians and educators from institutions around the world.
                </p>
                <div className="fc-teamGrid">
                  {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="fc-teamCard">
                      <h3 className="fc-teamName">{member.name}</h3>
                      <p className="fc-teamAffiliation">{member.affiliation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ----------------- RIGHT SIDEBAR COLUMN ----------------- */}
            <aside className="fc-sidebarColumn">
              <div className="fc-sidebarStickyWrap">
                {/* CARD 01: PROJECT AT A GLANCE */}
                <div className="fc-sidebarCard">
                  <h3 className="fc-sidebarCardTitle">Project at a Glance</h3>
                  <div className="fc-sidebarBar" />
                  <dl className="fc-glanceList">
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Project</dt>
                      <dd className="fc-glanceValue">Exploring Bioscience and Islam</dd>
                    </div>
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Launched</dt>
                      <dd className="fc-glanceValue">2022</dd>
                    </div>
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Audience</dt>
                      <dd className="fc-glanceValue">Muslim students &amp; educators</dd>
                    </div>
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Disciplines</dt>
                      <dd className="fc-glanceValue">Bioscience, theology &amp; education</dd>
                    </div>
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Approach</dt>
                      <dd className="fc-glanceValue">Seminars, curriculum &amp; teacher training</dd>
                    </div>
                    <div className="fc-glanceItem">
                      <dt className="fc-glanceLabel">Support</dt>
                      <dd className="fc-glanceValue">John Templeton Foundation</dd>
                    </div>
                  </dl>
                </div>

                {/* CARD 02: PROJECT ACTIVITIES */}
                <div className="fc-sidebarCard">
                  <h3 className="fc-sidebarCardTitle">Project Activities</h3>
                  <div className="fc-sidebarBar" />
                  <ul className="fc-activitiesList">
                    <li className="fc-activityItem">Student seminar series</li>
                    <li className="fc-activityItem">Curriculum &amp; teaching modules</li>
                    <li className="fc-activityItem">Teacher training workshops</li>
                    <li className="fc-activityItem">Student reflections &amp; podcast</li>
                  </ul>
                </div>

                {/* CARD 03: QUICK LINKS */}
                <div className="fc-sidebarCard">
                  <h3 className="fc-sidebarCardTitle">Quick Links</h3>
                  <div className="fc-sidebarBar" />
                  <ul className="fc-quickLinksList">
                    <li className="fc-quickLinkItem">
                      <a href="#materials" className="fc-quickLink">
                        Teaching resources ↗
                      </a>
                    </li>
                    <li className="fc-quickLinkItem">
                      <a href="#events" className="fc-quickLink">
                        Events &amp; seminars ↗
                      </a>
                    </li>
                    <li className="fc-quickLinkItem">
                      <a href="#publications" className="fc-quickLink">
                        Academic publications ↗
                      </a>
                    </li>
                    <li className="fc-quickLinkItem">
                      <a href="#gallery" className="fc-quickLink">
                        Gallery &amp; testimonials ↗
                      </a>
                    </li>
                  </ul>
                </div>

                {/* CARD 04: EXPLORE THE ORIGINAL PROJECT */}
                <div id="original-project" className="fc-sidebarCardBurgundy">
                  <h3 className="fc-sidebarCardTitle">Explore the Original Project</h3>
                  <div className="fc-sidebarBarWhite" />
                  <p className="fc-sidebarBurgundyText">
                    Access the full gallery, downloadable files and video recordings on the official II&amp;M page.
                  </p>
                  <a
                    href="#overview"
                    className="fc-sidebarOutlineBtn"
                  >
                    OPEN ORIGINAL PAGE ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================================================================
          10 FINAL DARK GREEN FULL-WIDTH CTA SECTION
          =================================================================== */}
      <section className="fc-finalCtaSection">
        <div className="container">
          <div className="fc-finalCtaInner">
            <p className="fc-finalCtaEyebrow">ADVANCING KNOWLEDGE TOGETHER</p>
            <h2 className="fc-finalCtaTitle">
              Bridging scientific discovery and faith-informed understanding.
            </h2>
            <p className="fc-finalCtaDesc">
              Connect with II&amp;M to explore educational resources, faculty support, and research initiatives
              at the intersection of bioscience and Islamic thought.
            </p>
            <div className="fc-finalCtaActions">
              <Link href="/education" className="fc-btnCtaPrimary">
                EXPLORE EDUCATION ↗
              </Link>
              <Link href="/contact" className="fc-btnCtaOutline">
                GET IN TOUCH ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
