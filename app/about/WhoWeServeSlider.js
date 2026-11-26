"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { asset } from "../../lib/asset";

export const AUDIENCES_DATA = [
  {
    title: "Healthcare Institutions",
    text: "Hospitals, health systems, and academic medical centers",
    icon: "fa-solid fa-hospital",
    img: "/images/audience-hospital.jpg",
    link: null,
  },
  {
    title: "Clinicians",
    text: "Physicians, nurses, and allied health professionals",
    icon: "fa-solid fa-stethoscope",
    img: "/images/audience-clinician.jpg",
    link: null,
  },
  {
    title: "Medical Students and Fellows",
    text: "The next generation of healthcare leaders",
    icon: "fa-solid fa-graduation-cap",
    img: "/images/audience-students.jpg",
    link: null,
  },
  {
    title: "Muslim Patients and Families",
    text: "Individuals and communities seeking respectful, informed care",
    icon: "fa-solid fa-people-roof",
    img: "/images/audience-family.jpg",
    link: null,
  },
  {
    title: "Researchers",
    text: "Scholars and practitioners advancing knowledge",
    icon: "fa-solid fa-clipboard-user",
    img: "/images/audience-researcher.jpg",
    link: null,
  },
  {
    title: "Community Organizations",
    text: "Faith-based and community groups working for healthier communities",
    icon: "fa-solid fa-handshake-angle",
    img: "/images/audience-community.jpg",
    link: null,
  },
  {
    title: "Muslim Physicians & Healthcare Workers",
    text: "Advancing equity and inclusion for Muslim healthcare professionals",
    icon: "fa-solid fa-user-doctor",
    img: "/images/research/project-equity.jpg",
    link: "/advancing-equity",
  },
];

const CLONES_COUNT = 5;

export default function WhoWeServeSlider({ audiences = AUDIENCES_DATA }) {
  const [itemsPerView, setItemsPerView] = useState(5);
  const [virtualIndex, setVirtualIndex] = useState(CLONES_COUNT);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isTransitioningRef = useRef(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const timerRef = useRef(null);

  const n = audiences.length;

  // Responsive itemsPerView
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 576) {
        setItemsPerView(1);
      } else if (w < 768) {
        setItemsPerView(2);
      } else if (w < 992) {
        setItemsPerView(3);
      } else if (w < 1200) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute clones array for seamless circular loop
  const slides = [
    ...audiences.slice(-CLONES_COUNT).map((item, i) => ({ ...item, _key: `pre-${i}` })),
    ...audiences.map((item, i) => ({ ...item, _key: `real-${i}` })),
    ...audiences.slice(0, CLONES_COUNT).map((item, i) => ({ ...item, _key: `post-${i}` })),
  ];

  // Active real index for dots (0 to n - 1)
  const realIndex = ((virtualIndex - CLONES_COUNT) % n + n) % n;

  const nextSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setVirtualIndex((prev) => prev - 1);
  }, []);

  const goToSlide = (idx) => {
    if (isTransitioningRef.current || idx === realIndex) return;
    isTransitioningRef.current = true;
    setEnableTransition(true);
    setVirtualIndex(CLONES_COUNT + idx);
  };

  const handleTransitionEnd = () => {
    if (virtualIndex >= CLONES_COUNT + n) {
      setEnableTransition(false);
      setVirtualIndex(CLONES_COUNT + (virtualIndex - (CLONES_COUNT + n)));
      setTimeout(() => {
        setEnableTransition(true);
        isTransitioningRef.current = false;
      }, 40);
    } else if (virtualIndex < CLONES_COUNT) {
      setEnableTransition(false);
      setVirtualIndex(CLONES_COUNT + n - (CLONES_COUNT - virtualIndex));
      setTimeout(() => {
        setEnableTransition(true);
        isTransitioningRef.current = false;
      }, 40);
    } else {
      isTransitioningRef.current = false;
    }
  };

  // Safety fallback in case transitionend is canceled/skipped
  useEffect(() => {
    if (isTransitioningRef.current) {
      const fallback = setTimeout(() => {
        isTransitioningRef.current = false;
      }, 550);
      return () => clearTimeout(fallback);
    }
  }, [virtualIndex]);

  // Autoplay loop every 3.5s when not hovered
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  const renderCardContent = (item) => (
    <div className="audience-card">
      <img
        src={asset(item.img)}
        alt={item.title}
        className="audience-card-img"
        loading="lazy"
        draggable={false}
      />
      <div className="audience-card-body">
        <i className={`${item.icon} audience-icon`} />
        <h3 className="audience-title">{item.title}</h3>
        <p className="audience-text">{item.text}</p>
      </div>
    </div>
  );

  return (
    <div
      className="audience-slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="row align-items-end mb-4">
        <div className="col-lg-6">
          <div className="expertise-eyebrow-wrap mb-1">
            <span className="expertise-eyebrow-text">OUR AUDIENCES</span>
          </div>
          <h2 className="expertise-heading m-0">Who We Serve</h2>
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-lg-end justify-content-between mt-2 mt-lg-0">
          <p className="text-muted lead-aside text-lg-end mb-3">
            We work with a wide range of individuals and organizations to advance understanding and improve care at the intersection of Islam and medicine.
          </p>
          <div className="audience-slider-controls">
            <button
              type="button"
              onClick={prevSlide}
              className="audience-slider-btn prev"
              aria-label="Previous audience"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="audience-slider-btn next"
              aria-label="Next audience"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="audience-slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`audience-slider-track${enableTransition ? " is-animating" : ""}`}
          style={{
            transform: `translate3d(-${(virtualIndex * 100) / itemsPerView}%, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, idx) => (
            <div
              key={`${item._key}-${idx}`}
              className="audience-slider-card-wrap"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  className="audience-card audience-card-link text-decoration-none"
                >
                  <img
                    src={asset(item.img)}
                    alt={item.title}
                    className="audience-card-img"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="audience-card-body">
                    <i className={`${item.icon} audience-icon`} />
                    <h3 className="audience-title">{item.title}</h3>
                    <p className="audience-text">{item.text}</p>
                  </div>
                </Link>
              ) : (
                renderCardContent(item)
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="audience-slider-dots">
        {audiences.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`audience-slider-dot ${idx === realIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to audience slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
