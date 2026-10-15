"use client";

import { useEffect, useRef, useState } from "react";

const AMBASSADORS = [
  {
    name: "Mufti Mohammed Zubair Butt",
    img: "/images/our-team/amb-zubair.jpg",
    note: "Ambassador & Community of Support",
  },
  {
    name: "Ermin Sinanovic",
    img: "/images/our-team/amb-ermin.jpg",
    note: "Ambassador & Community of Support",
  },
  {
    name: "Hatem al-Haj",
    img: "/images/our-team/amb-hatem.jpg",
    note: "Ambassador & Community of Support",
  },
  {
    name: "Yasir Qadhi",
    img: "/images/our-team/amb-yasir.jpg",
    note: "Ambassador & Community of Support",
  },
  {
    name: "Ingrid Mattson",
    img: "/images/our-team/amb-ingrid.jpg",
    note: "Ambassador & Community of Support",
  },
];

export default function TeamAmbassadors() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateArrows() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  function scrollByCard(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".tm-ambassador-card");
    const amount = card ? card.offsetWidth + 14 : 280;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
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
            <button
              type="button"
              className="tm-carousel-btn"
              aria-label="Previous ambassadors"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              <i className="fa-solid fa-angle-left" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="tm-carousel-btn"
              aria-label="Next ambassadors"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              <i className="fa-solid fa-angle-right" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="tm-ambassador-track" ref={trackRef} tabIndex={0}>
          {AMBASSADORS.map((person) => (
            <article className="tm-ambassador-card" key={person.name}>
              <img src={person.img} alt={person.name} className="tm-ambassador-photo" />
              <div className="tm-ambassador-body">
                <p className="tm-ambassador-note">{person.note}</p>
                <h3>{person.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
