"use client";

import { asset } from "../../lib/asset";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const RESEARCH = [
  {
    name: "Laila Azam, PhD, MBA",
    role: "Research Scientist",
    img: asset("/images/our-team/laila.jpg"),
    text: "Contributes research that informs education, practice, and policy at the intersection of Islam and medicine.",
  },
  {
    name: "Raudah Yunus",
    role: "Researcher / Public Health Scholar",
    img: asset("/images/our-team/raudah.jpg"),
    text: "Advances community-engaged inquiry to strengthen culturally responsive healthcare and public health.",
  },
];

const COUNT = RESEARCH.length;

export default function TeamResearch() {
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
      const card = trackRef.current?.querySelector(".tm-research-card");
      if (!card) return;
      const gap = 16;
      setStep(card.getBoundingClientRect().width + gap);
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
      <div className="tm-section-head tm-section-head--row">
        <div>
          <p className="tm-eyebrow">RESEARCH &amp; EDUCATION TEAM</p>
          <p className="tm-lead">Advancing knowledge. Training the next generation.</p>
        </div>
        <div className="tm-carousel-nav" role="group" aria-label="Research team carousel">
          <button type="button" className="tm-carousel-btn" aria-label="Previous researcher" onClick={goPrev}>
            <i className="fa-solid fa-angle-left" aria-hidden="true" />
          </button>
          <button type="button" className="tm-carousel-btn" aria-label="Next researcher" onClick={goNext}>
            <i className="fa-solid fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="tm-research-viewport">
        <div
          className={`tm-research-track${instant ? " is-instant" : ""}`}
          ref={trackRef}
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {[0, 1].map((copy) =>
            RESEARCH.map((person) => (
              <article
                className="tm-research-card"
                key={`${person.name}-${copy}`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                <div className="tm-research-media">
                  <img src={person.img} alt={copy === 0 ? person.name : ""} />
                </div>
                <div className="tm-research-body">
                  <h3>{person.name}</h3>
                  <p className="tm-role">{person.role}</p>
                  <p>{person.text}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </>
  );
}
