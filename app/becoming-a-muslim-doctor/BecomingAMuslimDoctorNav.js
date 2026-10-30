"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "instructor", label: "Instructor" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
];

export default function BecomingAMuslimDoctorNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  const getDynamicOffset = () => {
    if (typeof window === "undefined") return 110;
    const isMobile = window.innerWidth <= 991;
    const headerHeight = isMobile ? 65 : 83;
    const navEl = document.querySelector(".bmd-stickyNav");
    const navHeight = navEl ? navEl.offsetHeight : 52;
    return headerHeight + navHeight + 16;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = getDynamicOffset();

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= sectionTop - offset) {
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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const offset = getDynamicOffset();
    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset + 4;
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
    setActiveId(id);
  };

  return (
    <nav className="bmd-stickyNav" aria-label="Course section navigation">
      <div className="container">
        <ul className="bmd-navList" ref={navListRef} role="tablist">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="bmd-navItem" role="presentation">
                <a
                  href={`#${item.id}`}
                  data-nav-id={item.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`bmd-navLink ${isActive ? "bmd-navLinkActive" : ""}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                  {isActive && <span className="bmd-activeIndicator" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
