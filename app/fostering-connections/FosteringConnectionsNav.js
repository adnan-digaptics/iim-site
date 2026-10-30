"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "seminar-topics", label: "Seminar Topics" },
  { id: "materials", label: "Project Materials" },
  { id: "events", label: "Events" },
  { id: "publications", label: "Publications" },
  { id: "gallery", label: "Gallery" },
  { id: "team", label: "Project Team" },
];

export default function FosteringConnectionsNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  const getDynamicOffset = () => {
    if (typeof window === "undefined") return 130;
    const isMobile = window.innerWidth <= 991;
    const headerHeight = isMobile ? 72 : 83;
    const subnavEl = document.querySelector(".fc-stickySubnav");
    const subnavHeight = subnavEl ? subnavEl.offsetHeight : 48;
    return headerHeight + subnavHeight + 16;
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
    <nav className="fc-stickySubnav" aria-label="Page navigation">
      <div className="container">
        <div className="fc-subnavContainer" ref={navListRef}>
          <ul className="fc-subnavList">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-nav-id={item.id}
                    className={`fc-subnavLink ${isActive ? "fc-subnavLinkActive" : ""}`}
                    onClick={(e) => scrollToSection(e, item.id)}
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
