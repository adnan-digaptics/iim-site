"use client";

import { asset } from "../../lib/asset";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const AMBASSADORS = [
  {
    name: "Mufti Mohammed Zubair Butt",
    img: asset("/images/our-team/amb-zubair-butt.jpg"),
    note: "Ambassador & Community of Support",
  },
  {
    name: "Ermin Sinanovic",
    img: asset("/images/our-team/amb-ermin.jpg"),
    note: "Ambassador & Community of Support",
  },
  {
    name: "Hatem al-Haj",
    img: asset("/images/our-team/amb-hatem.jpg"),
    note: "Ambassador & Community of Support",
  },
  {
    name: "Yasir Qadhi",
    img: asset("/images/our-team/amb-yasir.jpg"),
    note: "Ambassador & Community of Support",
  },
  {
    name: "Ingrid Mattson",
    img: asset("/images/our-team/amb-ingrid.jpg"),
    note: "Ambassador & Community of Support",
  },
];

const COUNT = AMBASSADORS.length;

export default function TeamAmbassadors() {
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
      const card = trackRef.current?.querySelector(".tm-ambassador-card");
      if (!card) return;
      setStep(card.getBoundingClientRect().width + 14);
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
    <section className="tm-ambassadors">
      <div className="container">
        <div className="tm-section-head tm-section-head--row">
          <div>
            <p className="tm-eyebrow">AMBASSADORS &amp; COMMUNITY OF SUPPORT</p>
            <p className="tm-lead">
              Voices that inspire. A community that strengthens our mission.
            </p>
          </div>
          <div className="tm-carousel-nav" role="group" aria-label="Ambassador carousel">
            <button type="button" className="tm-carousel-btn" aria-label="Previous ambassadors" onClick={goPrev}>
              <i className="fa-solid fa-angle-left" aria-hidden="true" />
            </button>
            <button type="button" className="tm-carousel-btn" aria-label="Next ambassadors" onClick={goNext}>
              <i className="fa-solid fa-angle-right" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="tm-ambassador-viewport">
          <div
            className={`tm-ambassador-track${instant ? " is-instant" : ""}`}
            ref={trackRef}
            style={{ transform: `translateX(-${index * step}px)` }}
          >
            {[0, 1].map((copy) =>
              AMBASSADORS.map((person) => (
                <article
                  className="tm-ambassador-card"
                  key={`${person.name}-${copy}`}
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  <img src={person.img} alt={copy === 0 ? person.name : ""} className="tm-ambassador-photo" />
                  <div className="tm-ambassador-body">
                    <p className="tm-ambassador-note">{person.note}</p>
                    <h3>{person.name}</h3>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
