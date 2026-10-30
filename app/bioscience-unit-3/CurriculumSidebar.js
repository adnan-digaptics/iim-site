"use client";

import { useState } from "react";
import Link from "next/link";

const CURRICULUM_UNITS = [
  { num: "1", title: "Epistemic Framework Exercise", href: "/exploring-bioscience#curriculum-units" },
  { num: "2", title: "What Do We Know & How Do We Know It?", href: "/exploring-bioscience#curriculum-units" },
  { num: "3", title: "What is the Origin of Mankind?", href: "/exploring-bioscience#curriculum-units" },
  { num: "4", title: "What Does It Mean to Be a Human Being?", href: "/bioscience-unit-3", active: true },
  { num: "5", title: "Human Enhancement & Transhumanism", href: "/exploring-bioscience#curriculum-units" },
  { num: "6", title: "Are We Programmed or Do We Have Free Will?", href: "/exploring-bioscience#curriculum-units" },
  { num: "7", title: "Are Human Beings Unique in This Universe?", href: "/exploring-bioscience#curriculum-units" },
];

export default function CurriculumSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToResources = (e) => {
    e.preventDefault();
    const el = document.getElementById("start-here");
    if (el) {
      const topOffset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="bu3-sidebarWrapper" aria-label="Curriculum Navigation">
      {/* Mobile Toggle Button */}
      <div className="bu3-mobileNavToggleWrapper">
        <button
          type="button"
          className="bu3-mobileNavToggleBtn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="curriculum-index-list"
        >
          <span className="bu3-mobileNavToggleText">
            Curriculum Index · <strong>Unit 3 of 7 Active</strong>
          </span>
          <span className={`bu3-mobileChevron ${mobileOpen ? "bu3-mobileChevronOpen" : ""}`} aria-hidden="true">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      {/* Curriculum Index Card */}
      <div
        id="curriculum-index-list"
        className={`bu3-sidebarCard bu3-curriculumIndexCard ${
          mobileOpen ? "bu3-mobileNavExpanded" : ""
        }`}
      >
        <div className="bu3-sidebarCardHeader">
          <h2 className="bu3-sidebarHeading">Curriculum Index</h2>
          <span className="bu3-unitBadge">Unit 3 of 7</span>
        </div>

        <nav aria-label="Units list">
          <ul className="bu3-unitList">
            {CURRICULUM_UNITS.map((item) => (
              <li key={item.num} className="bu3-unitListItem">
                <Link
                  href={item.href}
                  className={`bu3-unitNavLink ${item.active ? "bu3-unitNavLinkActive" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  <span className={`bu3-unitNumCircle ${item.active ? "bu3-unitNumCircleActive" : ""}`}>
                    {item.num}
                  </span>
                  <span className="bu3-unitNavTitle">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bu3-sidebarBtnGroup">
          <button type="button" onClick={scrollToResources} className="bu3-sidebarBtnNavy">
            View Unit Resources ↓
          </button>
          <Link href="/exploring-bioscience" className="bu3-sidebarBtnOutline">
            Full Curriculum ↗
          </Link>
        </div>
      </div>

      {/* Faculty & Instructor Portal Card */}
      <div className={`bu3-sidebarCard bu3-facultyPortalCard`}>
        <h3 className="bu3-facultyPortalTitle">Faculty &amp; Instructor Portal</h3>
        <p className="bu3-facultyPortalText">
          For customized syllabi, lecture resources, and curriculum implementation guidance.
        </p>
        <Link href="/consultation" className="bu3-facultyPortalBtn">
          Request Consultation →
        </Link>
      </div>
    </aside>
  );
}
