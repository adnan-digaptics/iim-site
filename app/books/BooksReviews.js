"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    quote: "Organ Donation in Islam makes an important and timely contribution by offering a careful, nuanced, and deeply informed analysis of a complex and consequential topic.",
    name: "Mark Siegler",
    detail: "The University of Chicago",
  },
  {
    quote: "Islam and Biomedicine is an insightful and timely work that deepens our understanding of how Islamic thought engages with modern biomedicine.",
    name: "Mohammed Ghaly",
    detail: "Research Center for Islamic Legislation and Ethics",
  },
];

const COUNT = REVIEWS.length;
const GAP = 24;

export default function BooksReviews() {
  const trackRef = useRef(null);
  const jumpTarget = useRef(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useLayoutEffect(() => {
    function measure() {
      const card = trackRef.current?.querySelector(".books-quote");
      if (!card) return;
      setStep(card.getBoundingClientRect().width + GAP);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setInstant(false);
      setIndex((current) => (current >= COUNT ? current : current + 1));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index < COUNT || jumpTarget.current != null) return undefined;
    const timer = setTimeout(() => {
      setInstant(true);
      setIndex(0);
    }, 520);
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (!instant) return undefined;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        setInstant(false);
        if (jumpTarget.current != null) {
          const next = jumpTarget.current;
          jumpTarget.current = null;
          setIndex(next);
        }
      });
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [instant]);

  function goNext() {
    setInstant(false);
    setIndex((current) => Math.min(current + 1, COUNT));
  }

  function goPrev() {
    if (indexRef.current <= 0) {
      jumpTarget.current = COUNT - 1;
      setInstant(true);
      setIndex(COUNT);
      return;
    }
    setInstant(false);
    setIndex((current) => current - 1);
  }

  return (
    <>
      <div className="books-reviews-head">
        <div>
          <p className="books-eyebrow">REVIEWS &amp; SCHOLARLY RECEPTION</p>
          <h2 className="books-h2">Reviews &amp; Scholarly Reception</h2>
        </div>
        <div className="books-reviews-nav" role="group" aria-label="Reviews carousel">
          <button type="button" className="books-reviews-btn" aria-label="Previous review" onClick={goPrev}>
            <i className="fa-solid fa-angle-left" aria-hidden="true" />
          </button>
          <button type="button" className="books-reviews-btn" aria-label="Next review" onClick={goNext}>
            <i className="fa-solid fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="books-reviews-viewport">
        <div
          className={`books-reviews-track${instant ? " is-instant" : ""}`}
          ref={trackRef}
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {[0, 1].map((copy) =>
            REVIEWS.map((item) => (
              <blockquote
                className="books-quote"
                key={`${item.name}-${copy}`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                <span className="books-quote-mark" aria-hidden="true">&ldquo;</span>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <cite>
                  <strong>{item.name}</strong>
                  <span>{item.detail}</span>
                </cite>
              </blockquote>
            ))
          )}
        </div>
      </div>
    </>
  );
}
