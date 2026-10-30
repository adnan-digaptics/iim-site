import Image from "next/image";
import Link from "next/link";
import { asset } from "../../lib/asset";
import BecomingAMuslimDoctorNav from "./BecomingAMuslimDoctorNav";
import {
  FaqAccordion,
  TestimonialVideoPlayer,
  EnrollmentButtons,
  FinalCtaButtons,
} from "./BecomingAMuslimDoctorInteractive";

export const metadata = {
  title: "Becoming a Muslim Doctor: Foundations of Identity, Ethics, and Practice | II&M",
  description:
    "A reflective and formative program for Muslim and non-Muslim medical students and healthcare professionals exploring Islamic bioethics, vocation, character (adab), and clinical practice.",
  keywords: [
    "Becoming a Muslim Doctor",
    "Islamic Bioethics",
    "Muslim Physicians",
    "Medical Ethics",
    "Dr. Aasim Padela",
    "Muslim EdEx",
    "Medical Professionalism",
    "Initiative on Islam and Medicine",
  ],
  openGraph: {
    title: "Becoming a Muslim Doctor: Foundations of Identity, Ethics, and Practice",
    description:
      "A reflective and formative program for medical students and healthcare professionals exploring identity, faith, ethics, and professional practice.",
    images: [
      {
        url: asset("/images/becoming-a-muslim-doctor/hero-books-stethoscope.jpg"),
        width: 1200,
        height: 630,
        alt: "Becoming a Muslim Doctor Course Still Life",
      },
    ],
  },
};

// 10 Numbered Course Modules (Verified Curriculum)
const CURRICULUM_MODULES = [
  { num: "01", title: "Health and Illness" },
  { num: "02", title: "Medicine & Physicianship" },
  { num: "03", title: "Professional Journey and Destination" },
  { num: "04", title: "Who/What is my Patient?" },
  { num: "05", title: "Act, Agent, and Outcome-based Ethics in Healthcare Practice" },
  { num: "06", title: "The TIIV and Classical Moral Psychology" },
  { num: "07", title: "Adab: Cultivating the Self and Habituating Virtue" },
  { num: "08", title: "Reflections with Exemplary Muslim Doctors (Part I)" },
  { num: "09", title: "Reflections with Exemplary Muslim Doctors (Part II)" },
  { num: "10", title: "Reflections with Exemplary Muslim Doctors (Part III)" },
];

const FAQS = [
  {
    question: "Who is this course designed for?",
    answer:
      "The course is designed primarily for medical students (MS1 and MS2), but is also highly beneficial for clinical students (MS3 and MS4), resident physicians, fellows, and early-career healthcare practitioners who wish to examine clinical practice through the lens of Islamic theology, bioethics, and personal identity.",
    note: "Non-Muslim healthcare professionals seeking culturally grounded insights into Islamic bioethics and Muslim physician perspectives are also warmly welcome.",
  },
  {
    question: "Is the course live or self-paced?",
    answer:
      "Becoming a Muslim Doctor is structured as a live, cohort-based program. Monthly virtual seminar sessions feature interactive lectures by Dr. Aasim Padela and guest faculty, guided small-group case discussions, reflective exercises, and direct mentorship.",
    note: "Sessions are recorded for enrolled cohort participants who encounter unavoidable on-call clinical conflicts.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Participants who attend the required cohort sessions, participate actively in discussions, and complete the guided reflection milestones will be awarded a verified Digital Certificate of Completion from the Initiative on Islam & Medicine.",
  },
  {
    question: "What is the course fee?",
    answer:
      "Tuition fees are structured to be accessible to medical trainees. Subsidies, student scholarships, and institutional sponsorships are regularly provided through our educational partners and donors. Please reach out to the II&M team for current cohort fee structures.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Prospective students can submit an enrollment inquiry using the 'Explore Enrollment' or 'Request Information' buttons on this page. Our admissions coordinator will provide upcoming cohort dates, syllabus materials, and instructions for submitting an application.",
  },
];

export default function BecomingAMuslimDoctorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Becoming a Muslim Doctor: Foundations of Identity, Ethics, and Practice",
    description:
      "A reflective and formative program for medical students and healthcare professionals exploring identity, faith, ethics, character, and professional practice.",
    provider: {
      "@type": "Organization",
      name: "Initiative on Islam & Medicine",
      url: "https://medicineandislam.org",
    },
    instructor: {
      "@type": "Person",
      name: "Dr. Aasim I. Padela, MD, MSc, FACEP",
      jobTitle: "Founder & Director, Initiative on Islam & Medicine",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "10 Modules",
    },
  };

  return (
    <div className="becoming-a-muslim-doctor-page bmd-pageWrapper">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="bmd-heroSection" aria-label="Course Overview Hero">
        <div className="container">
          <div className="bmd-heroRow">
            {/* Left Content Column */}
            <div className="bmd-heroContentCol">
              <div className="bmd-heroEyebrow">
                <span className="bmd-heroEyebrowLine" aria-hidden="true" />
                <span>II&amp;M COURSE | FAITH, MEDICINE &amp; VOCATION</span>
              </div>

              <h1 className="bmd-heroHeading">
                Becoming a Muslim<br className="d-none d-md-inline" />{" "}
                Doctor: Foundations<br className="d-none d-md-inline" />{" "}
                of Identity, Ethics,<br className="d-none d-md-inline" />{" "}
                and Practice
              </h1>

              <p className="bmd-heroDescription">
                A reflective and formative program for Muslim and non-Muslim medical students
                and healthcare professionals who seek to integrate faith, ethics, and professional
                practice. Explore classical Islamic texts, contemporary perspectives, and real-world
                applications within a supportive and multidisciplinary learning community.
              </p>

              {/* Course Metadata (3 compact badges) */}
              <div className="bmd-heroMetadataRow" aria-label="Course Metadata">
                <div className="bmd-metaItem">
                  <span className="bmd-metaNumber">10</span>
                  <span>Course Modules</span>
                </div>
                <div className="bmd-metaItem">
                  <span className="bmd-metaIcon" aria-hidden="true">
                    <i className="fa-solid fa-users" />
                  </span>
                  <span>Live Cohort / Online Learning</span>
                </div>
                <div className="bmd-metaItem">
                  <span className="bmd-metaIcon" aria-hidden="true">
                    <i className="fa-solid fa-certificate" />
                  </span>
                  <span>Digital Certificate</span>
                </div>
              </div>

              {/* Action Buttons */}
              <EnrollmentButtons />

              {/* Additional Confirmation Note */}
              <p className="bmd-heroSubNote">
                Course dates, availability, and fees: confirm with II&amp;M.
              </p>
            </div>

            {/* Right Still Life Photographic Framing */}
            <div className="bmd-heroMediaCol">
              <div className="bmd-heroImageFrame">
                <Image
                  src={asset("/images/becoming-a-muslim-doctor/hero-books-stethoscope.jpg")}
                  alt="Scholarly Islamic books, Quran, and medical stethoscope composition"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  priority
                  className="bmd-heroStillImg"
                />

                {/* Floating Quranic Quote Card */}
                <div className="bmd-heroQuoteOverlay" aria-label="Qur'an 5:32 Quote">
                  <p className="bmd-heroQuoteText">
                    &ldquo;...Whoever saves one life, it is as if he had saved mankind entirely.&rdquo;
                  </p>
                  <span className="bmd-heroQuoteSource">— Qur&apos;an 5:32</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. STICKY COURSE NAVIGATION
          ==================================================================== */}
      <BecomingAMuslimDoctorNav />

      {/* ====================================================================
          3. ABOUT THIS COURSE SECTION
          ==================================================================== */}
      <section id="overview" className="bmd-aboutSection" aria-label="About This Course">
        <div className="container">
          <div className="bmd-aboutGrid">
            {/* Left Content Column */}
            <div className="bmd-aboutLeadCol">
              <div className="bmd-eyebrow">THE COURSE</div>
              <h2 className="bmd-sectionTitle">About This Course</h2>

              <p className="bmd-aboutText">
                <strong>Becoming a Muslim Doctor: Foundations of Identity, Ethics, and Practice</strong> is a
                reflective and formative program designed to help you connect your medical studies and
                professional training with Islamic values, ethical principles, and higher purpose. Through
                interactive sessions, classical texts, guided reflection, contemporary discussions, and
                mentorship, students explore what it means to be a Muslim in medicine today.
              </p>

              <p className="bmd-aboutText">
                The course encourages learners to think beyond academic achievement and clinical skill by
                grounding their future practice in mercy, ethical service, and accountability. Students engage
                Islamic texts, explore contemporary bioethical dilemmas, reflect on personal calling, and
                cultivate a stronger sense of professional identity rooted in Muslim healthcare.
              </p>

              <h3 className="bmd-objectivesHeading">Learning Objectives</h3>
              <ul className="bmd-objectivesList">
                <li className="bmd-objectiveItem">
                  <span className="bmd-checkCircle" aria-hidden="true">✓</span>
                  <span>Reflect on your vocational calling and purpose in contemporary healthcare</span>
                </li>
                <li className="bmd-objectiveItem">
                  <span className="bmd-checkCircle" aria-hidden="true">✓</span>
                  <span>Explore Islamic concepts related to mercy, character, service, and professional responsibility</span>
                </li>
                <li className="bmd-objectiveItem">
                  <span className="bmd-checkCircle" aria-hidden="true">✓</span>
                  <span>Understand the dilemmas that arise in modern clinical practice</span>
                </li>
                <li className="bmd-objectiveItem">
                  <span className="bmd-checkCircle" aria-hidden="true">✓</span>
                  <span>Build fellowship with peers and mentors pursuing medicine with shared values</span>
                </li>
              </ul>
            </div>

            {/* Right Feature Cards Column */}
            <div className="bmd-featureCardsStack">
              {/* Card 1 */}
              <div className="bmd-featureCard">
                <div className="bmd-featureCardIconWrap" aria-hidden="true">
                  <i className="fa-solid fa-users" />
                </div>
                <div className="bmd-featureCardContent">
                  <h4 className="bmd-featureCardTitle">Live-Cohort Based Program</h4>
                  <p className="bmd-featureCardText">
                    Interactive learning with guided sessions and peer discussions.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bmd-featureCard">
                <div className="bmd-featureCardIconWrap" aria-hidden="true">
                  <i className="fa-solid fa-certificate" />
                </div>
                <div className="bmd-featureCardContent">
                  <h4 className="bmd-featureCardTitle">Shareable Certificate</h4>
                  <p className="bmd-featureCardText">
                    Completion certificate according to approved course requirements.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bmd-featureCard">
                <div className="bmd-featureCardIconWrap" aria-hidden="true">
                  <i className="fa-solid fa-laptop" />
                </div>
                <div className="bmd-featureCardContent">
                  <h4 className="bmd-featureCardTitle">100% Online</h4>
                  <p className="bmd-featureCardText">
                    Online learning, where confirmed by actual course information.
                  </p>
                </div>
              </div>

              {/* Card 4 (Partner Logo) */}
              <div className="bmd-featureCard">
                <div className="bmd-featureCardLogoWrap" aria-hidden="true">
                  <Image
                    src={asset("/images/partners/muslim-edex.png")}
                    alt="Muslim EdEx Logo"
                    width={48}
                    height={36}
                    className="bmd-partnerLogoImg"
                  />
                </div>
                <div className="bmd-featureCardContent">
                  <h4 className="bmd-featureCardTitle">In Collaboration with Muslim EdEx</h4>
                  <p className="bmd-featureCardText">
                    Higher learning education partner bringing online webinars and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. COURSE CURRICULUM SECTION
          ==================================================================== */}
      <section id="curriculum" className="bmd-curriculumSection" aria-label="Course Curriculum">
        <div className="container">
          <div className="bmd-sectionHeader">
            <div className="bmd-eyebrow">CURRICULUM</div>
            <h2 className="bmd-sectionTitle">Course Curriculum</h2>
            <p className="bmd-sectionIntro">
              Sessions connect classical sources, contemporary issues, and real-world applications.
            </p>
          </div>

          <div className="bmd-curriculumGrid">
            {/* Left: 10 Numbered Modules Grid */}
            <div className="bmd-modulesContainer" role="list" aria-label="Curriculum Modules">
              {CURRICULUM_MODULES.map((module) => (
                <div key={module.num} className="bmd-moduleCard" role="listitem">
                  <span className="bmd-moduleNumberBadge" aria-hidden="true">
                    {module.num}
                  </span>
                  <span className="bmd-moduleTitleText">{module.title}</span>
                </div>
              ))}
            </div>

            {/* Right: What's Included Card */}
            <div className="bmd-whatsIncludedCard">
              <h3 className="bmd-whatsIncludedTitle">What&apos;s Included</h3>
              <ul className="bmd-includedList">
                <li className="bmd-includedItem">
                  <span className="bmd-includedIconWrap" aria-hidden="true">
                    <i className="fa-solid fa-users" />
                  </span>
                  <span>Live cohort discussions</span>
                </li>
                <li className="bmd-includedItem">
                  <span className="bmd-includedIconWrap" aria-hidden="true">
                    <i className="fa-solid fa-book-open" />
                  </span>
                  <span>Curated reading materials</span>
                </li>
                <li className="bmd-includedItem">
                  <span className="bmd-includedIconWrap" aria-hidden="true">
                    <i className="fa-solid fa-pen-to-square" />
                  </span>
                  <span>Guided reflection exercises</span>
                </li>
                <li className="bmd-includedItem">
                  <span className="bmd-includedIconWrap" aria-hidden="true">
                    <i className="fa-solid fa-award" />
                  </span>
                  <span>Certificate upon completion</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="bmd-curriculumFootnote">
            *Course dates, schedules, and materials are subject to change. For current cohort information
            and availability, please reach out directly.
          </p>
        </div>
      </section>

      {/* ====================================================================
          5. MEET YOUR INSTRUCTOR SECTION
          ==================================================================== */}
      <section id="instructor" className="bmd-instructorSection" aria-label="Meet Your Instructor">
        <div className="container">
          <div className="bmd-sectionHeader">
            <div className="bmd-eyebrow">YOUR INSTRUCTOR</div>
            <h2 className="bmd-sectionTitle">Meet Your Instructor</h2>
          </div>

          <div className="bmd-instructorCard">
            {/* Left Portrait */}
            <div className="bmd-instructorPhotoFrame">
              <Image
                src={asset("/images/our-team/padela-portrait.jpg")}
                alt="Dr. Aasim I. Padela, MD, MSc, FACEP"
                fill
                sizes="(max-width: 768px) 150px, 170px"
                className="bmd-instructorImg"
              />
            </div>

            {/* Center Bio Details */}
            <div className="bmd-instructorBioCol">
              <h3 className="bmd-instructorName">Aasim I. Padela, MD, MSc, FACEP</h3>
              <div className="bmd-instructorRoleTitle">
                Founder &amp; Director, Initiative on Islam &amp; Medicine
              </div>
              <div className="bmd-instructorAffiliation">
                Professor of Emergency Medicine, Bioethics, and Medical Humanities
              </div>
              <p className="bmd-instructorBioText">
                Dr. Aasim Padela is a physician, scholar, and educator specializing in Islamic bioethics,
                clinical ethics, and medical humanities. His work focuses on integrating faith and healthcare
                decision-making, and he has extensive experience mentoring medical trainees in cultivating
                clinical compassion and authentic moral identity.
              </p>
            </div>

            {/* Right Areas of Expertise */}
            <div className="bmd-expertiseCol">
              <div className="bmd-expertiseHeading">Areas of Expertise</div>
              <ul className="bmd-expertiseTagsList">
                <li className="bmd-expertiseTag">Islamic Bioethics</li>
                <li className="bmd-expertiseTag">Medicine</li>
                <li className="bmd-expertiseTag">Clinical Ethics</li>
                <li className="bmd-expertiseTag">Medical Education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. WHAT LEARNERS SAY SECTION
          ==================================================================== */}
      <section id="reviews" className="bmd-testimonialsSection" aria-label="What Learners Say">
        <div className="container">
          <div className="bmd-sectionHeader">
            <div className="bmd-eyebrow">LEARNER PERSPECTIVES</div>
            <h2 className="bmd-sectionTitle">What Learners Say</h2>
          </div>

          <div className="bmd-testimonialsGrid">
            {/* Column 1: Testimonial Card */}
            <div className="bmd-testimonialCard">
              <div className="bmd-quoteIcon" aria-hidden="true">&ldquo;</div>
              <p className="bmd-quoteText">
                This course provided a framework for navigating clinical practice as a person of faith.
                The discussions, readings, and community were truly transformative.
              </p>
              <div className="bmd-quoteAuthorInfo">
                <div className="bmd-quoteAuthor">Aimen K.</div>
                <span className="bmd-quoteRole">Medical Student</span>
              </div>
            </div>

            {/* Column 2: Video Testimonial Preview */}
            <TestimonialVideoPlayer
              thumbSrc={asset("/images/becoming-a-muslim-doctor/student-video-thumb.jpg")}
              caption="Cohort Reflection: Integrating Faith in Medical School"
            />

            {/* Column 3: Stacked Testimonial Cards */}
            <div className="bmd-stackedQuotesCol">
              <div className="bmd-testimonialCardCompact">
                <p className="bmd-quoteTextCompact">
                  &ldquo;Thoughtful, rigorous, and deeply relevant. Every session challenged and enriched
                  my perspective.&rdquo;
                </p>
                <div className="bmd-quoteAuthorInfo">
                  <div className="bmd-quoteAuthor">Omar Q.</div>
                  <span className="bmd-quoteRole">Resident Physician</span>
                </div>
              </div>

              <div className="bmd-testimonialCardCompact">
                <p className="bmd-quoteTextCompact">
                  &ldquo;An inspiring and much-needed program. It helped me reconnect my faith with my
                  professional aspirations.&rdquo;
                </p>
                <div className="bmd-quoteAuthorInfo">
                  <div className="bmd-quoteAuthor">Khadija A.</div>
                  <span className="bmd-quoteRole">First-Year Resident</span>
                </div>
              </div>
            </div>
          </div>

          <p className="bmd-testimonialsFootnote">
            *Learner feedback gathered from related II&amp;M education offerings and Muslim EdEx learning initiatives.
          </p>
        </div>
      </section>

      {/* ====================================================================
          7. FREQUENTLY ASKED QUESTIONS SECTION
          ==================================================================== */}
      <section id="faqs" className="bmd-faqSection" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="bmd-faqGrid">
            {/* Left Column: Heading and Action */}
            <div className="bmd-faqLeftCol">
              <div className="bmd-eyebrow">HAVE QUESTIONS?</div>
              <h2 className="bmd-faqTitle">Frequently Asked Questions</h2>
              <p className="bmd-faqDescription">
                Answers to common questions about the program. For enrollment and pricing, contact the II&amp;M team.
              </p>
              <Link href="/contact" className="bmd-btnContactTeam">
                CONTACT THE TEAM <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>

            {/* Right Column: Accordion */}
            <div className="bmd-faqRightCol">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. READY TO BEGIN? FINAL CTA SECTION
          ==================================================================== */}
      <section className="bmd-ctaSection" aria-label="Ready to Begin Call to Action">
        <div className="container">
          <div className="bmd-ctaContent">
            <span className="bmd-ctaEyebrow">
              BECOME PART OF A PURPOSEFUL LEARNING COMMUNITY
            </span>
            <h2 className="bmd-ctaHeading">Ready to Begin?</h2>
            <p className="bmd-ctaDescription">
              Build a more ethical, compassionate, and faith-connected approach to medicine.
            </p>

            <FinalCtaButtons />
          </div>
        </div>
      </section>
    </div>
  );
}
