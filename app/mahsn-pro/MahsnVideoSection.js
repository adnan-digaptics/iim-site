"use client";

import { useState, useEffect } from "react";
import { asset } from "../../lib/asset";
import styles from "./mahsn.module.css";

const VIDEO_LIST = [
  {
    id: "survey-video",
    title: "Muslim American Healthcare & Spiritual Needs Survey",
    label: "PROJECT VIDEO",
    thumbnail: asset("/images/mahsn-pro/mahsn-video-survey.jpg"),
    alt: "Doctor and clinical interaction scene",
    videoId: "JAwBx3WjAuA",
    subtitle:
      "Dr. Aasim Padela presents national survey findings examining religious and spiritual resource needs among Muslim American patients and healthcare providers.",
  },
  {
    id: "community-video",
    title: "I&M — Here for the Muslim Community",
    label: "COMMUNITY VIDEO",
    thumbnail: asset("/images/mahsn-pro/mahsn-video-community.jpg"),
    alt: "Community members hands placed together in a circle",
    videoId: "mh_DaIA0E1Y",
    subtitle:
      "Initiative on Islam and Medicine's community health advocacy, exploring Islamic bioethics and religious tailoring in modern clinical practice.",
  },
];

export default function MahsnVideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Lock body scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    if (activeVideo) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveVideo(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeVideo]);

  return (
    <>
      <div className="row g-3">
        {VIDEO_LIST.map((video) => (
          <div key={video.id} className="col-md-6">
            <div
              className={styles.videoCard}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${video.title}`}
              onClick={() => setActiveVideo(video)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveVideo(video);
                }
              }}
            >
              <div className={styles.videoThumbWrap}>
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className={styles.videoThumb}
                  loading="lazy"
                />
                <div className={styles.playOverlay}>
                  <div className={styles.playCircle} aria-hidden="true">
                    <i className="fa-solid fa-play" />
                  </div>
                </div>
              </div>
              <div className={styles.videoBody}>
                <h4 className={styles.videoTitle}>{video.title}</h4>
                <p className={styles.videoLabel}>{video.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          className={styles.videoModalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveVideo(null);
            }
          }}
        >
          <div className={styles.videoModalDialog}>
            {/* Modal Header */}
            <div className={styles.videoModalHeader}>
              <div className={styles.videoModalHeaderInfo}>
                <span className={styles.videoModalBadge}>
                  {activeVideo.label}
                </span>
                <h3 className={styles.videoModalTitle}>{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                className={styles.videoModalCloseBtn}
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            {/* Responsive 16:9 Video Frame */}
            <div className={styles.videoModalFrameWrap}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.videoModalIframe}
              />
            </div>

            {/* Modal Footer with Video Caption & YouTube Link */}
            <div className={styles.videoModalFooter}>
              <p className={styles.videoModalCaption}>
                {activeVideo.subtitle}
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.videoModalYoutubeLink}
              >
                <i className="fa-brands fa-youtube" /> Watch on YouTube{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
