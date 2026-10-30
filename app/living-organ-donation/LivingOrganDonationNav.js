"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "aims", label: "Project Aims" },
  { id: "context", label: "Context" },
  { id: "approach", label: "Approach" },
  { id: "publications", label: "Publications" },
  { id: "resources", label: "Resources" },
  { id: "media", label: "Media" },
  { id: "support", label: "Support" },
];

export default function LivingOrganDonationNav() {
  const [activeId, setActiveId] = useState("overview");
  const navListRef = useRef(null);

  // Dynamic header offset
  const getDynamicOffset = () => {
    let offset = 80;
    const headerEl = document.querySelector("header.header, header.site-header, header");
    if (headerEl) {
      const rect = headerEl.getBoundingClientRect();
      const style = window.getComputedStyle(headerEl);
      if (style.position === "fixed" || style.position === "sticky") {
        offset = Math.max(offset, rect.height + 20);
      }
    }
    const subnavEl = document.querySelector(".lod-stickySubnav");
    if (subnavEl) {
      const subnavRect = subnavEl.getBoundingClientRect();
      offset += subnavRect.height;
    }
    return offset;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      let currentActive = "overview";

      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            currentActive = item.id;
          }
        }
      });

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Center active link in horizontal container on mobile
  useEffect(() => {
    if (!navListRef.current) return;
    const activeLink = navListRef.current.querySelector(
      `a[data-id="${activeId}"]`
    );
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
    <nav
      className="lod-stickySubnav"
      aria-label="Living organ donation section navigation"
    >
      <div className="container">
        <div className="lod-subnavWrapper" ref={navListRef}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-id={item.id}
              className={`lod-subnavLink ${
                activeId === item.id ? "lod-activeNavLink" : ""
              }`}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
