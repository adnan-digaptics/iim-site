"use client";
import { useEffect, useRef, useState } from "react";

const VISIBLE = 5;
const GAP = 32;
const INTERVAL = 3000;
const DURATION = 600;

export default function EmpartTeamSlider({ members }) {
  const total = members.length;
  const cloned = [...members, ...members.slice(0, VISIBLE)];
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const wrapRef = useRef(null);
  const cardWidthRef = useRef(0);

  const getCardWidth = () => {
    if (!wrapRef.current) return 0;
    return (wrapRef.current.offsetWidth - GAP * (VISIBLE - 1)) / VISIBLE;
  };

  const advance = () => {
    setIndex((prev) => {
      const next = prev + 1;
      const cw = cardWidthRef.current || getCardWidth();
      setTransitioning(true);
      setPos(next * (cw + GAP));
      return next;
    });
  };

  useEffect(() => {
    if (index >= total) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setIndex(0);
        setPos(0);
      }, DURATION);
      return () => clearTimeout(t);
    }
  }, [index, total]);

  useEffect(() => {
    const updateWidth = () => {
      cardWidthRef.current = getCardWidth();
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const activeIndex = index % total;

  return (
    <div className="empart-team-slider">
      <div className="empart-team-track-wrap" ref={wrapRef}>
        <div
          className="empart-team-track"
          style={{
            transform: `translateX(-${pos}px)`,
            transition: transitioning ? `transform ${DURATION}ms ease` : "none",
            willChange: "transform",
          }}
        >
          {cloned.map((m, i) => (
            <div key={i} className="empart-team-slide">
              <div className="empart-team-circle">
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="empart-paginationDots" aria-hidden="true">
        {members.map((_, i) => (
          <span
            key={i}
            className={`empart-dot${i === activeIndex ? " active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
