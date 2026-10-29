"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./bioscience-unit-3.module.css";

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
    <aside className={styles.sidebarWrapper} aria-label="Curriculum Navigation">
      {/* Mobile Toggle Button */}
      <div className={styles.mobileNavToggleWrapper}>
        <button
          type="button"
          className={styles.mobileNavToggleBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="curriculum-index-list"
        >
          <span className={styles.mobileNavToggleText}>
            Curriculum Index · <strong>Unit 3 of 7 Active</strong>
          </span>
          <span className={`${styles.mobileChevron} ${mobileOpen ? styles.mobileChevronOpen : ""}`} aria-hidden="true">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      {/* Curriculum Index Card */}
      <div
        id="curriculum-index-list"
        className={`${styles.sidebarCard} ${styles.curriculumIndexCard} ${
          mobileOpen ? styles.mobileNavExpanded : ""
        }`}
      >
        <div className={styles.sidebarCardHeader}>
          <h2 className={styles.sidebarHeading}>Curriculum Index</h2>
          <span className={styles.unitBadge}>Unit 3 of 7</span>
        </div>

        <nav aria-label="Units list">
          <ul className={styles.unitList}>
            {CURRICULUM_UNITS.map((item) => (
              <li key={item.num} className={styles.unitListItem}>
                <Link
                  href={item.href}
                  className={`${styles.unitNavLink} ${item.active ? styles.unitNavLinkActive : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  <span className={`${styles.unitNumCircle} ${item.active ? styles.unitNumCircleActive : ""}`}>
                    {item.num}
                  </span>
                  <span className={styles.unitNavTitle}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sidebarBtnGroup}>
          <button type="button" onClick={scrollToResources} className={styles.sidebarBtnNavy}>
            View Unit Resources ↓
          </button>
          <Link href="/exploring-bioscience" className={styles.sidebarBtnOutline}>
            Full Curriculum ↗
          </Link>
        </div>
      </div>

      {/* Faculty & Instructor Portal Card */}
      <div className={`${styles.sidebarCard} ${styles.facultyPortalCard}`}>
        <h3 className={styles.facultyPortalTitle}>Faculty &amp; Instructor Portal</h3>
        <p className={styles.facultyPortalText}>
          For customized syllabi, lecture resources, and curriculum implementation guidance.
        </p>
        <Link href="/consultation" className={styles.facultyPortalBtn}>
          Request Consultation →
        </Link>
      </div>
    </aside>
  );
}
