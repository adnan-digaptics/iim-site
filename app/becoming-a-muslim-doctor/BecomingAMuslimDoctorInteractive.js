"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "../../lib/asset";

// ============================================================================
// 1. FAQ ACCORDION COMPONENT
// ============================================================================
export function FaqAccordion({ items }) {
  // In the reference screenshot, the first item is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="bmd-faqAccordion" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `faq-heading-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={idx}
            className={`bmd-faqItem ${isOpen ? "bmd-faqItemActive" : ""}`}
          >
            <button
              id={headingId}
              type="button"
              className="bmd-faqQuestionButton"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(idx)}
            >
              <span className="bmd-faqQuestionText">{item.question}</span>
              <span className="bmd-faqToggleIcon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`bmd-faqAnswerWrapper ${isOpen ? "bmd-faqAnswerOpen" : ""}`}
            >
              <div className="bmd-faqAnswerContent">
                <p>{item.answer}</p>
                {item.note && <p className="bmd-faqAnswerNote">{item.note}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// 2. VIDEO TESTIMONIAL PREVIEW & MODAL
// ============================================================================
export function TestimonialVideoPlayer({ thumbSrc, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="bmd-videoCardWrapper"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label="Play learner reflection video"
      >
        <div className="bmd-videoThumbnailContainer">
          <Image
            src={thumbSrc}
            alt="Learner testimonial reflection preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 360px"
            className="bmd-videoThumbnailImg"
            priority={false}
          />
          <div className="bmd-videoOverlayGradient" />
          <button
            type="button"
            className="bmd-playButtonCircle"
            aria-label="Play video"
            tabIndex={-1}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="bmd-playTriangleIcon"
              aria-hidden="true"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </button>
        </div>
        {caption && (
          <div className="bmd-videoCardCaption">
            <span>{caption}</span>
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="bmd-modalBackdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Learner Perspective Video"
        >
          <div
            className="bmd-modalDialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bmd-modalHeader">
              <h3 className="bmd-modalTitle">Learner Perspective</h3>
              <button
                type="button"
                className="bmd-modalCloseBtn"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="bmd-modalBody">
              <div className="bmd-modalVideoAspect">
                <Image
                  src={thumbSrc}
                  alt="Student video reflection"
                  fill
                  className="bmd-modalVideoStill"
                />
                <div className="bmd-modalVideoBanner">
                  <p className="bmd-modalQuoteText">
                    &ldquo;Engaging Islamic bioethics and classical virtues through this cohort completely shifted how I view patient care, clinical responsibility, and my purpose as a physician.&rdquo;
                  </p>
                  <span className="bmd-modalSpeakerTag">
                    — Muslim Medical Student Reflection (II&amp;M &amp; Muslim EdEx Cohort)
                  </span>
                </div>
              </div>
              <div className="bmd-modalFooterNote">
                <p>
                  Video excerpts and discussions are part of our live cohort sessions. For complete educational recordings and upcoming cohort access, explore enrollment or contact our academic coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============================================================================
// 3. INQUIRY / ENROLLMENT ACTION BUTTONS & MODAL
// ============================================================================
export function EnrollmentButtons() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Medical Student (MS1/MS2)",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToCurriculum = (e) => {
    e.preventDefault();
    const section = document.getElementById("curriculum");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bmd-heroCtaRow">
        <button
          type="button"
          onClick={scrollToCurriculum}
          className="bmd-btnPrimaryBurgundy"
        >
          EXPLORE ENROLLMENT
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bmd-btnArrowIcon"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setModalOpen(true);
          }}
          className="bmd-btnSecondaryOutline"
        >
          REQUEST INFORMATION
        </button>
      </div>

      {modalOpen && (
        <div
          className="bmd-modalBackdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Request Course Information"
        >
          <div
            className="bmd-modalDialogSmall"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bmd-modalHeader">
              <div>
                <span className="bmd-modalEyebrow">II&amp;M COURSE INQUIRY</span>
                <h3 className="bmd-modalTitle">Becoming a Muslim Doctor</h3>
              </div>
              <button
                type="button"
                className="bmd-modalCloseBtn"
                onClick={() => setModalOpen(false)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="bmd-modalBody">
              {submitted ? (
                <div className="bmd-modalSuccessBox">
                  <div className="bmd-modalSuccessCheck">✓</div>
                  <h4>Inquiry Received</h4>
                  <p>
                    Thank you for your interest in <strong>Becoming a Muslim Doctor</strong>. Our education coordinator will reach out shortly with syllabus details, cohort dates, and enrollment guidelines.
                  </p>
                  <button
                    type="button"
                    className="bmd-btnPrimaryBurgundy"
                    onClick={() => setModalOpen(false)}
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bmd-modalForm">
                  <p className="bmd-modalFormLead">
                    Please submit your information to receive current cohort schedules, syllabus details, and tuition guidance.
                  </p>
                  <div className="bmd-formGroup">
                    <label htmlFor="inquiry-name" className="bmd-formLabel">
                      Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Amina Rahman"
                      className="bmd-formInput"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="bmd-formGroup">
                    <label htmlFor="inquiry-email" className="bmd-formLabel">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="name@institution.edu"
                      className="bmd-formInput"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="bmd-formGroup">
                    <label htmlFor="inquiry-role" className="bmd-formLabel">
                      Current Role / Trainee Level
                    </label>
                    <select
                      id="inquiry-role"
                      className="bmd-formSelect"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="Medical Student (MS1/MS2)">Medical Student (MS1 / MS2)</option>
                      <option value="Medical Student (MS3/MS4)">Medical Student (MS3 / MS4)</option>
                      <option value="Resident Physician">Resident Physician</option>
                      <option value="Fellow">Clinical Fellow</option>
                      <option value="Practicing Physician">Practicing Physician</option>
                      <option value="Other Healthcare Professional">Other Healthcare Professional</option>
                    </select>
                  </div>
                  <div className="bmd-formGroup">
                    <label htmlFor="inquiry-message" className="bmd-formLabel">
                      Questions or Notes (Optional)
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      placeholder="Tell us about your background or specific questions..."
                      className="bmd-formTextarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <div className="bmd-modalActions">
                    <button type="submit" className="bmd-btnPrimaryBurgundy">
                      SUBMIT INQUIRY
                    </button>
                    <Link href="/contact" className="bmd-modalContactLink">
                      Or visit full contact page →
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============================================================================
// 4. CTA SECTION BUTTONS (Ready to Begin?)
// ============================================================================
export function FinalCtaButtons() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="bmd-ctaButtonRow">
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setModalOpen(true);
          }}
          className="bmd-ctaBtnBurgundy"
        >
          REQUEST ENROLLMENT INFO
        </button>
        <Link href="/contact" className="bmd-ctaBtnOutlineLight">
          ASK A QUESTION
        </Link>
      </div>

      {modalOpen && (
        <div
          className="bmd-modalBackdrop"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Request Course Enrollment"
        >
          <div
            className="bmd-modalDialogSmall"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bmd-modalHeader">
              <div>
                <span className="bmd-modalEyebrow">ENROLLMENT INQUIRY</span>
                <h3 className="bmd-modalTitle">Becoming a Muslim Doctor</h3>
              </div>
              <button
                type="button"
                className="bmd-modalCloseBtn"
                onClick={() => setModalOpen(false)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="bmd-modalBody">
              {submitted ? (
                <div className="bmd-modalSuccessBox">
                  <div className="bmd-modalSuccessCheck">✓</div>
                  <h4>Inquiry Received</h4>
                  <p>
                    Thank you! An II&amp;M coordinator will email you enrollment dates and application materials.
                  </p>
                  <button
                    type="button"
                    className="bmd-btnPrimaryBurgundy"
                    onClick={() => setModalOpen(false)}
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="bmd-modalForm"
                >
                  <p className="bmd-modalFormLead">
                    Join the next cohort of medical trainees exploring Islamic ethics and clinical excellence.
                  </p>
                  <div className="bmd-formGroup">
                    <label className="bmd-formLabel">Your Name *</label>
                    <input type="text" required placeholder="Full Name" className="bmd-formInput" />
                  </div>
                  <div className="bmd-formGroup">
                    <label className="bmd-formLabel">Email *</label>
                    <input type="email" required placeholder="name@domain.edu" className="bmd-formInput" />
                  </div>
                  <div className="bmd-formGroup">
                    <label className="bmd-formLabel">Institution / School</label>
                    <input type="text" placeholder="Medical School or Hospital" className="bmd-formInput" />
                  </div>
                  <div className="bmd-modalActions">
                    <button type="submit" className="bmd-btnPrimaryBurgundy">
                      SUBMIT REQUEST
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
