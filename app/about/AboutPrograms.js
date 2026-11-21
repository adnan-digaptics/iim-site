"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const COMMUNITY_PAGES = [
  {
    title: "Living Organ Donation",
    desc: "Addressing Islamic bioethical considerations and community guidance on organ donation.",
    href: "/living-organ-donation",
    icon: "fa-heart-pulse",
  },
  {
    title: "End of Life Care",
    desc: "Ethical and spiritual frameworks for palliative and end-of-life healthcare.",
    href: "/dignity-healthcare-end-of-life",
    icon: "fa-hands-holding-circle",
  },
  {
    title: "Mammography Intervention",
    desc: "Religiously tailored approaches to breast cancer education and screening.",
    href: "/mammography",
    icon: "fa-ribbon",
  },
  {
    title: "Cancer Screening",
    desc: "Faith-informed education promoting early detection and preventive health.",
    href: "/mammography",
    icon: "fa-notes-medical",
  },
  {
    title: "PCOR Project",
    desc: "Equipping Muslim communities with patient-centered outcomes research tools.",
    href: "/empart-research",
    icon: "fa-clipboard-check",
  },
];

export default function AboutPrograms() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="section-program-initiatives">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <div className="expertise-eyebrow-wrap mb-1">
              <span className="expertise-eyebrow-text">OUR PORTFOLIO</span>
              <span className="expertise-eyebrow-bar" />
            </div>
            <h2 className="expertise-heading m-0">Explore Our Programs &amp; Initiatives</h2>
          </div>
          <div className="col-lg-4 text-lg-end mt-2 mt-lg-0">
            <p className="text-muted lead-aside m-0">
              Dedicated educational pathways, clinical training, and community-centered health research.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Box 1: Courses */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link href="/courses" className="prog-card">
              <div className="prog-icon-badge">
                <i className="fa-solid fa-book-open" aria-hidden="true" />
              </div>
              <h3 className="prog-card-title">Courses</h3>
              <p className="prog-card-desc">
                Academic and professional courses in Islamic bioethics, Muslim patient care, and clinical ethics.
              </p>
              <span className="prog-card-action">
                EXPLORE COURSES <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Box 2: Medical Students */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link href="/medical-student-internship" className="prog-card">
              <div className="prog-icon-badge">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              </div>
              <h3 className="prog-card-title">Medical Students</h3>
              <p className="prog-card-desc">
                Specialized clinical rotation and summer research internships for trainees and future healthcare leaders.
              </p>
              <span className="prog-card-action">
                EXPLORE ROTATION <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Box 3: High School Students */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link href="/fostering-connections" className="prog-card">
              <div className="prog-icon-badge">
                <i className="fa-solid fa-school" aria-hidden="true" />
              </div>
              <h3 className="prog-card-title">High School Students</h3>
              <p className="prog-card-desc">
                The Fostering Connections study exploring bioscience, Islamic theology, and ethical inquiry for youth.
              </p>
              <span className="prog-card-action">
                EXPLORE STUDY <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Box 4: Muslim Community */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className={`prog-card prog-card--dropdown ${dropdownOpen ? "is-open" : ""}`}
              ref={dropdownRef}
            >
              <div className="prog-icon-badge">
                <i className="fa-solid fa-users" aria-hidden="true" />
              </div>
              <h3 className="prog-card-title">Muslim Community</h3>
              <p className="prog-card-desc">
                Community-engaged research initiatives and tailored health education addressing critical wellness needs.
              </p>

              <button
                type="button"
                className="prog-dropdown-toggle"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>5 INITIATIVES</span>
                <i className={`fa-solid fa-chevron-${dropdownOpen ? "up" : "down"}`} aria-hidden="true" />
              </button>

              {dropdownOpen && (
                <div className="prog-dropdown-menu" role="menu">
                  <div className="prog-dropdown-header">
                    <span>COMMUNITY HEALTH INITIATIVES</span>
                  </div>
                  {COMMUNITY_PAGES.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="prog-dropdown-item"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <i className={`fa-solid ${item.icon} prog-dropdown-icon`} aria-hidden="true" />
                      <div className="prog-dropdown-text">
                        <span className="prog-dropdown-title">{item.title}</span>
                        <span className="prog-dropdown-sub">{item.desc}</span>
                      </div>
                      <i className="fa-solid fa-arrow-right prog-dropdown-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
