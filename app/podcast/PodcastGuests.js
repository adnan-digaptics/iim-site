"use client";

import { useEffect, useRef } from "react";

export default function PodcastGuests({ guests }) {
  const scroller = useRef(null);
  const loop = [...guests, ...guests];

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let frame;

    const tick = () => {
      const half = el.scrollWidth / 2;
      if (half > 1) {
        const next = el.scrollLeft + 0.9;
        el.scrollLeft = next >= half ? next - half : next;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function move(direction) {
    const el = scroller.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const next = el.scrollLeft + direction * Math.max(220, el.clientWidth * 0.45);
    el.scrollLeft = ((next % half) + half) % half;
  }

  return (
    <div className="pod-guest-wrap">
      <button type="button" className="pod-guest-arrow" onClick={() => move(-1)} aria-label="Previous guests">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <div className="pod-guest-row" ref={scroller}>
        {loop.map((guest, index) => (
          <article className="pod-guest" key={`${guest.name}-${index}`} aria-hidden={index >= guests.length || undefined}>
            {guest.image ? (
              <img src={guest.image} alt={index >= guests.length ? "" : guest.name} />
            ) : (
              <span className="pod-guest-initial" aria-hidden="true">{guest.initials}</span>
            )}
            <h3>{guest.name}</h3>
            <p>{guest.role}</p>
          </article>
        ))}
      </div>
      <button type="button" className="pod-guest-arrow" onClick={() => move(1)} aria-label="Next guests">
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}
