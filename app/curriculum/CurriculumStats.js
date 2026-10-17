"use client";

import { useEffect, useRef, useState } from "react";

function formatValue(value, decimals) {
  if (decimals > 0) return value.toFixed(decimals);
  return Math.round(value).toLocaleString("en-US");
}

export default function CurriculumStats({ stats }) {
  const root = useRef(null);
  const played = useRef(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let frame;
    let start;

    const tick = (now) => {
      if (!start) start = now;
      const progress = Math.min(1, (now - start) / 1700);
      const eased = 1 - (1 - progress) ** 3;
      setValues(stats.map((stat) => stat.end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [stats]);

  return (
    <div className="cu-stat-list" ref={root}>
      {stats.map((stat, index) => (
        <article key={stat.label}>
          <strong aria-label={`${formatValue(stat.end, stat.decimals)}${stat.suffix}`}>
            {formatValue(values[index], stat.decimals)}
            {stat.suffix}
          </strong>
          <p>{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
