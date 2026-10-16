"use client";

import { useState } from "react";

export default function SpeakingQuotes({ quotes }) {
  const [index, setIndex] = useState(0);
  const count = quotes.length;

  function go(delta) {
    setIndex((current) => (current + delta + count) % count);
  }

  function onKey(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  return (
    <div
      className="spk-quotes"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="What audiences say"
      onKeyDown={onKey}
    >
      <p className="spk-eyebrow spk-eyebrow-light">WHAT AUDIENCES SAY</p>
      <div className="spk-quote-viewport">
        <div
          className="spk-quote-track"
          style={{ width: `${count * 100}%`, transform: `translateX(-${index * (100 / count)}%)` }}
        >
          {quotes.map((item) => (
            <blockquote className="spk-quote-slide" key={item.id} style={{ flex: `0 0 ${100 / count}%` }}>
              <span className="spk-quote-mark" aria-hidden="true">“</span>
              <p>{item.quote}</p>
              <cite>{item.attribution}</cite>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="spk-quote-controls">
        <button type="button" className="spk-quote-btn" aria-label="Previous testimonial" onClick={() => go(-1)}>
          <i className="fa-solid fa-chevron-left" />
        </button>
        <div className="spk-quote-dots" role="tablist" aria-label="Testimonial slides">
          {quotes.map((item, dot) => (
            <button
              key={item.id}
              type="button"
              className={dot === index ? "is-active" : ""}
              aria-label={`Show testimonial ${dot + 1}`}
              aria-current={dot === index ? "true" : undefined}
              onClick={() => setIndex(dot)}
            />
          ))}
        </div>
        <button type="button" className="spk-quote-btn" aria-label="Next testimonial" onClick={() => go(1)}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
