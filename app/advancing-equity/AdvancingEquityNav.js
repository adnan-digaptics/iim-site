"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "objectives", label: "Objectives" },
  { id: "methodology", label: "Methodology" },
  { id: "findings", label: "Findings" },
  { id: "recommendations", label: "Recommendations" },
  { id: "publications", label: "Publications" },
  { id: "media", label: "Media" },
  { id: "team", label: "Team" },
];

export default function AdvancingEquityNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  const getDynamicOffset = () => {
    if (typeof window === "undefined") return 130;
    const isMobile = window.innerWidth <= 991;
    const headerHeight = isMobile ? 72 : 83;
    const subnavEl = document.querySelector(".ae-stickySubnav");
    const subnavHeight = subnavEl ? subnavEl.offsetHeight : 48;
    return headerHeight + subnavHeight + 16;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = getDynamicOffset() + 24;

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
        activeLink.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeId]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = getDynamicOffset();
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementPosition - offset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    setActiveId(id);
  };

  return (
    <nav className="ae-stickySubnav" aria-label="Page section navigation">
      <div className="container">
        <div className="ae-subnavContainer" ref={navListRef}>
          <ul className="ae-subnavList" role="menubar">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} role="none">
                  <a
                    href={`#${item.id}`}
                    data-nav-id={item.id}
                    className={`ae-subnavLink ${isActive ? "ae-subnavLinkActive" : ""}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

