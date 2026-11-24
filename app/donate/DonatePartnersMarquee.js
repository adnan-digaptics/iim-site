"use client";
import { useEffect, useRef, useState } from "react";

const SPEED = 0.5; // px per frame

export default function DonatePartnersMarquee({ partners }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function step() {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="donate-partners-marquee"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        className="donate-partners-track"
        ref={trackRef}
        style={{ animation: "none", willChange: "transform" }}
      >
        {[0, 1].map((copy) =>
          partners.map(([logo, name, text, href]) => (
            <article
              className={`donate-partner${name === "Muslim EdEx" ? " donate-partner-edex" : ""}`}
              key={`${name}-${copy}`}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              <div className="donate-partner-logo">
                {href && copy === 0 ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website`}>
                    <img src={logo} alt={name} />
                  </a>
                ) : (
                  <img src={logo} alt={copy === 0 ? name : ""} />
                )}
              </div>
              <h3>
                {href && copy === 0 ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
                ) : name}
              </h3>
              <p>{text}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
