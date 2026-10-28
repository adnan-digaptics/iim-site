"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./mammography.module.css";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "background", label: "Background" },
  { id: "methodology", label: "Methodology" },
  { id: "outcomes", label: "Outcomes" },
  { id: "publications", label: "Publications" },
  { id: "resources", label: "Resources" },
  { id: "team", label: "Team" },
];

export default function MammographyNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  const getDynamicOffset = () => {
    if (typeof window === "undefined") return 120;
    const isMobile = window.innerWidth <= 991;
    const headerHeight = isMobile ? 72 : 83;
    const subnavEl = document.querySelector(`.${styles.stickySubnav}`);
    const subnavHeight = subnavEl ? subnavEl.offsetHeight : 44;
    return headerHeight + subnavHeight + 12;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = getDynamicOffset() + 20;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const sectionEl = document.getElementById(item.id);
        if (sectionEl) {
          const sectionTop = sectionEl.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= sectionTop - headerOffset) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll active tab into view in horizontal menu on small screens
  useEffect(() => {
    if (!navListRef.current) return;
    const activeLink = navListRef.current.querySelector(`[data-nav-id="${activeId}"]`);
    if (activeLink) {
      const container = navListRef.current;
      const linkRect = activeLink.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      if (linkRect.left < contRect.left || linkRect.right > contRect.right) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeId]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      const navOffset = getDynamicOffset();
      const elementPosition = sectionEl.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className={styles.stickySubnav} aria-label="Mammography section navigation">
      <div className="container">
        <div className={styles.subnavWrapper}>
          <ul className={styles.subnavList} ref={navListRef}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={styles.subnavItem}>
                <a
                  href={`#${item.id}`}
                  data-nav-id={item.id}
                  className={`${styles.subnavLink} ${activeId === item.id ? styles.subnavLinkActive : ""}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
