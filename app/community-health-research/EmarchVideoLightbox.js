"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "../../lib/asset";

function YoutubeSmallIcon() {
  return (
    <svg viewBox="0 0 90 20" width="38" height="9" aria-hidden="true">
      <path
        d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
        fill="#FF0000"
      />
      <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
      <path
        d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8056 9.07727 35.9336 10.0255H36.0268C36.1115 9.33308 36.3128 8.22592 36.5951 6.67637L37.7193 1.41846H40.5181L37.3102 13.0036V18.561H34.6024V13.0036Z"
        fill="#282828"
      />
      <path
        d="M41.4697 18.1937C40.9018 17.8127 40.5074 17.1795 40.2862 16.2982C40.0623 15.4169 39.9531 14.2443 39.9531 12.7703V11.0479C39.9531 9.5924 40.0786 8.41111 40.3323 7.51261C40.586 6.61678 41.0051 5.97235 41.5891 5.59982C42.1757 5.22729 42.9553 5.03894 43.9342 5.03894C44.9104 5.03894 45.6901 5.22463 46.2740 5.59982C46.8580 5.97235 47.2744 6.61678 47.5254 7.51261C47.779 8.41111 47.9045 9.5924 47.9045 11.0479V12.7703C47.9045 14.2443 47.7817 15.4169 47.5334 16.2982C47.2878 17.1795 46.8847 17.8127 46.3167 18.1937C45.7488 18.5747 44.9638 18.7604 43.9476 18.7604C42.9289 18.7604 42.1437 18.5747 41.4697 18.1937Z"
        fill="#282828"
      />
    </svg>
  );
}

export default function EmarchVideoLightbox() {
  const [open, setOpen] = useState(false);
  const VIDEO_ID = "iAdoZl2l9Ds";

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="emarch-videoCard emarch-videoCard--btn"
        onClick={() => setOpen(true)}
        aria-label="Watch video: Conducting Patient-Centered Muslim Health Research (E-MARCH)"
      >
        <div className="emarch-videoThumbWrap">
          <Image
            src={asset("/images/workshops/hero.jpg")}
            alt="Community research webinar presentation scene for E-MARCH"
            width={1280}
            height={720}
            className="emarch-videoThumb"
            loading="lazy"
          />
          <div className="emarch-videoCrimsonTint" aria-hidden="true" />
          <div className="emarch-videoTopBar">
            <span className="emarch-videoAvatar" aria-hidden="true">I&amp;M</span>
            <span className="emarch-videoTopTitle">
              PCORI E-MARCH — How to Conduct Patient-Centered Muslim Health Research
            </span>
          </div>
          <div className="emarch-videoPlayBtn" aria-hidden="true">
            <svg viewBox="0 0 68 48" width="60" height="42">
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#FF0000"
              />
              <path d="M 45,24 27,14 27,34" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="emarch-videoWatchBadge" aria-hidden="true">
            <span>Watch on</span>
            <YoutubeSmallIcon />
            <strong>YouTube</strong>
          </div>
        </div>
      </button>

      {open && (
        <div
          className="emarch-lightbox-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div
            className="emarch-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="emarch-lightbox-close"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="emarch-lightbox-ratio">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="PCORI E-MARCH — How to Conduct Patient-Centered Muslim Health Research"
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
