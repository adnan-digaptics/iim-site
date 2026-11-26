"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const VISIBLE = 4;
const GAP = 16;
const INTERVAL = 3000;
const DURATION = 600;

export default function PalliativeTeamSlider({ members }) {
  const total = members.length;
  const cloned = [...members, ...members.slice(0, VISIBLE)];
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const wrapRef = useRef(null);
  const cardWidthRef = useRef(0);
  const timerRef = useRef(null);

  const getCardWidth = () => {
    if (!wrapRef.current) return 0;
    const first = wrapRef.current.querySelector(".pcn-team-card");
    if (first) return first.offsetWidth;
    return (wrapRef.current.offsetWidth - GAP * (VISIBLE - 1)) / VISIBLE;
  };

  const advance = useCallback(() => {
    setIndex((prev) => {
      const next = prev + 1;
      const cw = cardWidthRef.current || getCardWidth();
      setTransitioning(true);
      setPos(next * (cw + GAP));
      return next;
    });
  }, []);

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
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  useEffect(() => {
    const update = () => { cardWidthRef.current = getCardWidth(); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    const cw = cardWidthRef.current || getCardWidth();
    setTransitioning(true);
    setPos(i * (cw + GAP));
    setIndex(i);
    timerRef.current = setInterval(advance, INTERVAL);
  };

  return (
    <div className="pcn-team-slider-wrap" ref={wrapRef}>
      <div
        className="pcn-team-slider-track"
        style={{
          transform: `translateX(-${pos}px)`,
          transition: transitioning ? `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)` : "none",
        }}
      >
        {cloned.map((m, i) => (
          <div className="pcn-team-card" key={`${m.name}-${i}`}>
            <div className="pcn-team-photo-wrap">
              <img src={m.image} alt={m.name} className="pcn-team-photo" loading="lazy" />
            </div>
            <p className="pcn-team-name">{m.name}</p>
            {m.role && <p className="pcn-team-role">{m.role}</p>}
          </div>
        ))}
      </div>
      <div className="pcn-team-dots">
        {members.map((_, i) => (
          <button
            key={i}
            className={`pcn-team-dot${i === index % total ? " pcn-team-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to member ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
