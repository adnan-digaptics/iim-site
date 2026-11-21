"use client";
import { useState, useRef, useEffect } from "react";

const TOOLS = [
  {
    category: "Organ Donation",
    items: [
      { label: "Community Guide", href: "https://medicineandislam.org/wp-content/uploads/2024/11/OrganDonationGuide_Modified.pdf" },
      { label: "Peer Educator Training Manual", href: "https://medicineandislam.org/wp-content/uploads/2024/11/Peer-Educator-Training-Manual-1.pdf" },
      { label: "Institution Guide", href: "https://medicineandislam.org/wp-content/uploads/2024/11/Final-Replication-Guide.pdf" },
    ],
  },
  {
    category: "End of Life Care",
    items: [
      { label: "Replication Manual", href: "https://go.fliplink.me/view/900FB308-2B48-480F-A4D2-D88878F7C8B9" },
    ],
  },
  {
    category: "Mosque-Based Research",
    items: [
      { label: "EMARCH White Paper", href: "https://medicineandislam.org/wp-content/uploads/2024/11/EMARCH-White-Paper-Final-1.pdf" },
      { label: "Islamic Schools Toolkit", href: "https://medicineandislam.org/wp-content/uploads/2026/04/Toolkit-for-PCOR-in-Islamic-Schools-Submit-to-PCORI-2.pdf" },
    ],
  },
];

export default function JourneyToolsDropup() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="journey-tools-dropup" ref={ref}>
      <button
        className="journey-tools-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        RESOURCES <i className={`fa-solid fa-chevron-${open ? "down" : "up"}`} />
      </button>
      {open && (
        <div className="journey-tools-menu">
          {TOOLS.map((group) => (
            <div key={group.category} className="journey-tools-group">
              <span className="journey-tools-category">{group.category}</span>
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="journey-tools-link"
                >
                  <i className="fa-solid fa-file-pdf" />
                  {item.label}
                  <i className="fa-solid fa-arrow-down journey-tools-dl" />
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
