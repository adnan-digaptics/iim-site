"use client";

import { useEffect, useRef } from "react";
import { asset } from "../lib/asset";

const PAST_PARTNERS = [
  {
    name: "The University of Chicago",
    logo: "/images/partners/collaborations/uchicago.png",
  },
  {
    name: "Medical College of Wisconsin",
    logo: "/images/partners/collaborations/mcw.png",
  },
  {
    name: "John Templeton Foundation",
    logo: "/images/partners/collaborations/templeton.jpg",
  },
  {
    name: "International Islamic University Malaysia",
    logo: "/images/partners/collaborations/iium.png",
  },
  {
    name: "IMANA",
    logo: "/images/partners/collaborations/imana.png",
  },
  {
    name: "Darul Qasim",
    logo: "/images/partners/collaborations/darul-qasim.png",
  },
  {
    name: "Muslim Community Center (MCC)",
    logo: "/images/partners/collaborations/mcc.jpg",
  },
  {
    name: "Universal School",
    logo: "/images/partners/collaborations/universal-school.png",
  },
  {
    name: "Basira Education",
    logo: "/images/partners/collaborations/basira-education.png",
  },
  {
    name: "ISLA",
    logo: "/images/partners/collaborations/isla.png",
  },
  {
    name: "Salaam School",
    logo: "/images/partners/collaborations/salaam-school.jpg",
  },
  {
    name: "CPSA",
    logo: "/images/partners/collaborations/cpsa.png",
  },
];

export default function PastPartners() {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const animFrameRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 45; // pixels per second

    function step(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isPausedRef.current && !isDraggingRef.current && trackRef.current && groupRef.current) {
        const groupWidth = groupRef.current.offsetWidth;
        if (groupWidth > 0) {
          offsetRef.current += speed * dt;
          if (offsetRef.current >= groupWidth) {
            offsetRef.current -= groupWidth;
          }
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    }

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Slide left / right manually
  const slideBy = (amount) => {
    if (!groupRef.current || !trackRef.current) return;
    const groupWidth = groupRef.current.offsetWidth;
    offsetRef.current += amount;
    while (offsetRef.current < 0) {
      offsetRef.current += groupWidth;
    }
    while (offsetRef.current >= groupWidth) {
      offsetRef.current -= groupWidth;
    }
    trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !groupRef.current || !trackRef.current) return;
    const delta = dragStartXRef.current - e.clientX;
    const groupWidth = groupRef.current.offsetWidth;
    let newOffset = dragStartOffsetRef.current + delta;
    while (newOffset < 0) newOffset += groupWidth;
    while (newOffset >= groupWidth) newOffset -= groupWidth;
    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch drag handlers
  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      isDraggingRef.current = true;
      dragStartXRef.current = e.touches[0].clientX;
      dragStartOffsetRef.current = offsetRef.current;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !groupRef.current || !trackRef.current || !e.touches || !e.touches[0]) return;
    const delta = dragStartXRef.current - e.touches[0].clientX;
    const groupWidth = groupRef.current.offsetWidth;
    let newOffset = dragStartOffsetRef.current + delta;
    while (newOffset < 0) newOffset += groupWidth;
    while (newOffset >= groupWidth) newOffset -= groupWidth;
    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="about-partners-section" id="partners" style={{ scrollMarginTop: "100px" }}>
      <div className="container">
        <div className="about-partners-head">
          <div className="expertise-eyebrow-wrap mb-1 justify-content-center">
            <span className="expertise-eyebrow-text">OUR NETWORK &amp; COLLABORATIONS</span>
          </div>
          <h2 className="expertise-heading mb-2">Past Collaboration Partners</h2>
          <p className="text-muted m-0" style={{ fontSize: "14px", maxWidth: "680px", margin: "0 auto" }}>
            Over the years, II&amp;M has collaborated with universities, medical colleges, academic institutions, and community organizations to advance healthcare, education, and ethical practice.
          </p>
        </div>
      </div>

      <div
        className="about-partners-marquee"
        aria-label="Past Collaboration Partners scrollable list"
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; isDraggingRef.current = false; }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: "grab", userSelect: "none" }}
      >
        <div className="about-partners-track" ref={trackRef} style={{ animation: "none" }}>
          <div className="about-partners-group" ref={groupRef}>
            {PAST_PARTNERS.map((partner, idx) => (
              <div
                key={`p1-${partner.name}-${idx}`}
                className="about-partner-item"
                title={partner.name}
              >
                <img
                  src={asset(partner.logo)}
                  alt={partner.name}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="about-partners-group" aria-hidden="true">
            {PAST_PARTNERS.map((partner, idx) => (
              <div
                key={`p2-${partner.name}-${idx}`}
                className="about-partner-item"
                title={partner.name}
              >
                <img
                  src={asset(partner.logo)}
                  alt=""
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-partners-controls" style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "18px" }}>
        <button
          type="button"
          className="about-partner-arrow-btn"
          onClick={() => slideBy(-240)}
          aria-label="Previous partners"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid #d5cbbe",
            background: "#ffffff",
            color: "#800000",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(16, 36, 58, 0.06)"
          }}
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: "13px" }} />
        </button>
        <button
          type="button"
          className="about-partner-arrow-btn"
          onClick={() => slideBy(240)}
          aria-label="Next partners"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid #d5cbbe",
            background: "#ffffff",
            color: "#800000",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px rgba(16, 36, 58, 0.06)"
          }}
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: "13px" }} />
        </button>
      </div>
    </section>
  );
}
