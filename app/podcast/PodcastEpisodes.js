"use client";
import { useState, useEffect, useCallback } from "react";

function getYouTubeId(url) {
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? m[1] : null;
}

export default function PodcastEpisodes({ episodes }) {
  const [activeId, setActiveId] = useState(null);

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeId, close]);

  return (
    <>
      <div className="pod-episode-row">
        {episodes.map(([num, title, date, , ytUrl]) => {
          const vid = getYouTubeId(ytUrl);
          const thumb = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
          return (
            <article key={num}>
              <img src={thumb} alt={title} />
              <p className="pod-ep-num">EPISODE {num}</p>
              <h3>{title}</h3>
              <p className="pod-date">{date}</p>
              <div className="pod-ep-actions">
                <button onClick={() => setActiveId(vid)} className="pod-ep-btn">
                  <i className="fa-solid fa-play" /> Watch
                </button>
                <button onClick={() => setActiveId(vid)} className="pod-ep-btn">
                  <i className="fa-solid fa-headphones" /> Listen
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {activeId && (
        <div className="pod-lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="pod-lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="pod-lightbox-close" onClick={close} aria-label="Close">
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="pod-lightbox-frame">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
                title="Episode Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
