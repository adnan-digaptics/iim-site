"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const VISIBLE = 2;
const GAP = 24;
const INTERVAL = 5000;
const DURATION = 550;

export default function MammographyDisseminationSlider({ items }) {
  const total = items.length;
  const cloned = [...items, ...items.slice(0, VISIBLE)];
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const wrapRef = useRef(null);
  const cardWidthRef = useRef(0);
  const timerRef = useRef(null);

  const getCardWidth = () => {
    if (!wrapRef.current) return 0;
    const first = wrapRef.current.querySelector(".mds-card");
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

  const prevSlide = () => {
    clearInterval(timerRef.current);
    setIndex((p) => {
      const next = p <= 0 ? total - 1 : p - 1;
      const cw = cardWidthRef.current || getCardWidth();
      setTransitioning(true);
      setPos(next * (cw + GAP));
      timerRef.current = setInterval(advance, INTERVAL);
      return next;
    });
  };

  const activeIndex = index % total;

  return (
    <div className="mds-root">
      {/* Header bar */}
      <div className="mds-header">
        <span className="mds-counter">
          <span className="mds-counter-cur">{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="mds-counter-sep"> / </span>
          <span className="mds-counter-tot">{String(total).padStart(2, "0")}</span>
        </span>
        <div className="mds-header-nav">
          <button className="mds-arrow" onClick={prevSlide} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="mds-arrow" onClick={advance} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="mds-viewport" ref={wrapRef}>
        <div
          className="mds-track"
          style={{
            transform: `translateX(-${pos}px)`,
            transition: transitioning ? `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)` : "none",
          }}
        >
          {cloned.map((item, i) => (
            <a
              key={`${item.title}-${i}`}
              href={item.href || "#"}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
              className="mds-card"
              onClick={!item.href ? (e) => e.preventDefault() : undefined}
            >
              <div className="mds-img-wrap">
                <img src={item.image} alt={item.title} className="mds-img" loading="lazy" />
                <div className="mds-overlay" />
                {item.type && <span className="mds-type-badge">{item.type}</span>}
                <div className="mds-card-footer">
                  <p className="mds-card-title">{item.title}</p>
                  {item.href && (
                    <span className="mds-view-btn">
                      View
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{marginLeft:5}}><path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="mds-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`mds-dot${i === activeIndex ? " mds-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
