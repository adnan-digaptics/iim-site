"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { asset } from "../../lib/asset";

const EVENT_PHOTOS = [
  {
    id: 1,
    src: "/images/fostering-connections/gallery/event-1.jpg",
    title: "Chicagoland Student Seminars",
    location: "USA · Jan–Feb 2023",
  },
  {
    id: 2,
    src: "/images/fostering-connections/gallery/event-2.jpg",
    title: "International Islamic University Malaysia",
    location: "Malaysia · July 2023",
  },
  {
    id: 3,
    src: "/images/fostering-connections/gallery/event-3.jpg",
    title: "Workshop Seminar Discussions",
    location: "Interactive Group Learning",
  },
  {
    id: 4,
    src: "/images/fostering-connections/gallery/event-4.jpg",
    title: "Classroom Instruction & Deliberation",
    location: "Interactive Exercises",
  },
  {
    id: 5,
    src: "/images/fostering-connections/gallery/event-5.jpg",
    title: "Riphah International University",
    location: "Pakistan · July 2025",
  },
  {
    id: 6,
    src: "/images/fostering-connections/gallery/event-6.jpg",
    title: "Aga Khan University — IED",
    location: "Pakistan · July 2025",
  },
  {
    id: 7,
    src: "/images/fostering-connections/gallery/event-7.jpg",
    title: "IIIT Intensive Seminar Series",
    location: "USA · September 2025",
  },
  {
    id: 8,
    src: "/images/fostering-connections/gallery/event-8.jpg",
    title: "FIMA Scientific Convention, Syiah Kuala University",
    location: "Indonesia · September 2025",
  },
];

export default function EventsPhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : EVENT_PHOTOS.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev < EVENT_PHOTOS.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentPhoto = isOpen ? EVENT_PHOTOS[activeIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : EVENT_PHOTOS.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev < EVENT_PHOTOS.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div className="fc-eventsPhotoGrid">
        {EVENT_PHOTOS.map((photo, idx) => (
          <div
            key={photo.id}
            className="fc-eventPhotoCard"
            onClick={() => setActiveIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(idx);
              }
            }}
            aria-label={`View ${photo.title} in full size`}
          >
            <div className="fc-eventPhotoWrap">
              <img
                src={asset(photo.src)}
                alt={photo.title}
                className="fc-eventPhotoImg"
                loading="lazy"
              />
              <div className="fc-eventPhotoOverlay">
                <span className="fc-eventPhotoLocation">{photo.location}</span>
                <h4 className="fc-eventPhotoTitle">{photo.title}</h4>
              </div>
              <div className="fc-eventPhotoZoomBadge">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {mounted && isOpen && currentPhoto &&
        createPortal(
          <div
            className="fc-lightbox-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveIndex(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Top Toolbar */}
            <div className="fc-lightbox-toolbar">
              <div className="fc-lightbox-counter">
                {activeIndex + 1} / {EVENT_PHOTOS.length}
              </div>
              <button
                type="button"
                className="fc-lightbox-close-btn"
                onClick={() => setActiveIndex(null)}
                aria-label="Close Lightbox (Esc)"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* Navigation Previous */}
            <button
              type="button"
              className="fc-lightbox-arrow fc-lightbox-arrow-prev"
              onClick={handlePrev}
              aria-label="Previous Image (Left Arrow)"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            {/* Main Image Stage */}
            <div
              className="fc-lightbox-stage"
              onClick={(e) => {
                if (e.target === e.currentTarget) setActiveIndex(null);
              }}
            >
              <div className="fc-lightbox-img-wrapper">
                <img
                  src={asset(currentPhoto.src)}
                  alt={currentPhoto.title}
                  className="fc-lightbox-img"
                />
              </div>

              {/* Caption Bar */}
              <div className="fc-lightbox-caption">
                <span className="fc-lightbox-caption-loc">{currentPhoto.location}</span>
                <h3 className="fc-lightbox-caption-title">{currentPhoto.title}</h3>
              </div>
            </div>

            {/* Navigation Next */}
            <button
              type="button"
              className="fc-lightbox-arrow fc-lightbox-arrow-next"
              onClick={handleNext}
              aria-label="Next Image (Right Arrow)"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
