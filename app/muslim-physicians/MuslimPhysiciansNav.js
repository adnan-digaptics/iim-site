"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "OVERVIEW" },
  { id: "project-aims", label: "PROJECT AIMS" },
  { id: "significance", label: "SIGNIFICANCE" },
  { id: "findings", label: "FINDINGS" },
  { id: "publications", label: "PUBLICATIONS" },
  { id: "data", label: "DATA" },
];

export default function MuslimPhysiciansNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  const getDynamicOffset = () => {
    if (typeof window === "undefined") return 120;
    const isMobile = window.innerWidth <= 991;
    const headerHeight = isMobile ? 72 : 83;
    const subnavEl = document.querySelector(".mp-sticky-subnav");
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
    <nav className="mp-sticky-subnav" aria-label="Project section navigation">
      <div className="container mp-subnav-container">
        <div className="mp-subnav-wrapper">
          <ul className="mp-subnav-list" ref={navListRef}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="mp-subnav-item">
                <a
                  href={`#${item.id}`}
                  data-nav-id={item.id}
                  className={`mp-subnav-link ${activeId === item.id ? "active" : ""}`}
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
