"use client";
import { useState, useEffect, useRef } from "react";

const VISIBLE = 3;
const GAP = 16;
const INTERVAL = 3200;
const DURATION = 650;

export default function ConsultationAreasSlider({ areas }) {
  const total = areas.length;
  // Clone enough cards for seamless loop: original + cloned prefix
  const cloned = [...areas, ...areas.slice(0, VISIBLE)];
  const [pos, setPos] = useState(0);       // current translateX offset in px
  const [transitioning, setTransitioning] = useState(true);
  const [index, setIndex] = useState(0);  // logical card index
  const wrapRef = useRef(null);
  const timerRef = useRef(null);
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

  // After a full loop, snap back instantly
  useEffect(() => {
    if (index >= total) {
      const timer = setTimeout(() => {
        setTransitioning(false);
        setIndex(0);
        const cw = cardWidthRef.current || getCardWidth();
        setPos(0);
      }, DURATION);
      return () => clearTimeout(timer);
    }
  }, [index, total]);

  // Start interval
  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  // Track card width on resize
  useEffect(() => {
    const update = () => {
      cardWidthRef.current = getCardWidth();
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="consult-slider-wrap" ref={wrapRef}>
      <div
        className="consult-slider-track"
        style={{
          transform: `translateX(-${pos}px)`,
          transition: transitioning ? `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
        }}
      >
        {cloned.map(([src, title, text], i) => (
          <article className="consult-area consult-area--slide" key={`${title}-${i}`}>
            <img src={src} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="consult-slider-dots">
        {areas.map((_, i) => (
          <span
            key={i}
            className={`consult-slider-dot${i === index % total ? " consult-slider-dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
