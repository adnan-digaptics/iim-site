"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  {
    label: "About",
    href: "/about",
    items: [
      ["About Us", "/about"],
      ["Mission & Vision", "/mission"],
      ["Our Team", "/team"],
      ["Our Impact", "/impact"],
    ],
  },
  {
    label: "Education",
    href: "/education",
    items: [
      ["Education Overview", "/education"],
      ["Courses", "/courses"],
      ["Workshops", "/workshops"],
      ["Bioscience & Islam", "/bioscience"],
      ["Institutional Curriculum", "/curriculum"],
    ],
  },
  {
    label: "Consultation",
    href: "/consultation",
    items: [["Consultation", "/consultation"]],
  },
  {
    label: "Speaking",
    href: "/speaking",
    items: [["Speaking", "/speaking"]],
  },
  {
    label: "Research & Impact",
    href: "/research",
    items: [
      ["Research Projects", "/research"],
      ["Our Impact", "/impact"],
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      ["Resource Library", "/resources"],
      ["Books", "/books"],
      ["Podcast", "/podcast"],
    ],
  },
];

function isActive(path, href) {
  return path === href;
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [path]);

  function hoverOpen(label) {
    if (window.matchMedia("(min-width: 992px)").matches) setMenu(label);
  }

  return (
    <>
      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <span>INSTILLING HIKMAH IN HEALTHCARE</span>
          <span>
            <Link href="/consultation">CONTACT</Link>
            <span className="mx-2">|</span>
            <Link href="/donate">DONATE</Link>
            <Link href="/resources" aria-label="Search">
              <i className="fa-solid fa-magnifying-glass topbar-search-icon" />
            </Link>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top main-nav">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-type">
              Initiative on<br />
              <b>Islam &amp; Medicine</b>
              <small>INSTILLING HIKMAH IN HEALTHCARE</small>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${open ? " show" : ""}`} id="siteNav">
            <ul className="navbar-nav mx-auto">
              {NAV.map((item) => {
                const active = isActive(path, item.href) || item.items.some(([, href]) => isActive(path, href));
                const shown = menu === item.label;
                return (
                  <li
                    className={`nav-item dropdown${shown ? " show" : ""}`}
                    key={item.label}
                    onMouseEnter={() => hoverOpen(item.label)}
                    onMouseLeave={() => setMenu((current) => (current === item.label ? null : current))}
                  >
                    <button
                      className={`nav-link dropdown-toggle${active ? " active" : ""}`}
                      type="button"
                      aria-expanded={shown ? "true" : "false"}
                      onClick={() => {
                        const desktop = window.matchMedia("(min-width: 992px)").matches;
                        setMenu((current) => (desktop || current !== item.label ? item.label : null));
                      }}
                    >
                      {item.label}
                    </button>
                    <ul className={`dropdown-menu${shown ? " show" : ""}`}>
                      {item.items.map(([label, href]) => (
                        <li key={`${item.label}-${href}`}>
                          <Link
                            className={`dropdown-item${isActive(path, href) ? " active" : ""}`}
                            href={href}
                            onClick={() => {
                              setMenu(null);
                              setOpen(false);
                            }}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <Link href="/consultation" className="btn-solid-maroon">
              WORK WITH US <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
