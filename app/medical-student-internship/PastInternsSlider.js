"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { asset } from "../../lib/asset";

export const PAST_INTERNS_DATA = [
  {
    name: "Muhammad Yusuf Khan",
    role: "Summer Intern 2025",
    school: "Al Faisal University, Riyadh, KSA",
    img: asset("/images/interns/intern-muhammad-yusuf-khan.jpg"),
  },
  {
    name: "Salma Saifuddin",
    role: "Summer Intern 2025",
    school: "Rowan-Virtua Community Health Center",
    img: asset("/images/interns/intern-salma-saifuddin.jpg"),
  },
  {
    name: "Benish Baqai",
    role: "Past Intern",
    school: "MS II · Medical College of Wisconsin Milwaukee, WI",
    img: asset("/images/interns/intern-benish-baqai.jpg"),
  },
  {
    name: "Fahad Abbasi",
    role: "Past Intern",
    school: "MS4 · St. James School of Medicine Anguilla",
    img: asset("/images/interns/intern-fahad-abbasi.jpg"),
  },
  {
    name: "Abdul Hakim Aghil",
    role: "Past Intern",
    school: "MS1 · University of Kentucky Lexington, KY",
    img: asset("/images/interns/intern-abdul-hakim-aghil.jpg"),
  },
  {
    name: "Zayd Ahmed",
    role: "Past Intern",
    school: "MS1 · University of Illinois at Chicago",
    img: asset("/images/interns/intern-zayd-ahmed.jpg"),
  },
  {
    name: "Imadul Chowdry",
    role: "Past Intern",
    school: "University of Sussex, UK",
    img: asset("/images/interns/intern-imadul-chowdry.jpg"),
  },
  {
    name: "Orhan Onder",
    role: "Past Intern",
    school: "MS4 · Marmara University Istanbul, Turkey",
    img: asset("/images/interns/intern-orhan-onder.jpg"),
  },
  {
    name: "Anas Qatanani",
    role: "Past Intern",
    school: "MS1 · Drexel University College of Medicine",
    img: asset("/images/interns/intern-anas-qatanani.jpg"),
  },
  {
    name: "Rosie Duivenbode",
    role: "Past Intern",
    school: "MS4 · University Medical Center Utrecht, Netherlands",
    img: asset("/images/interns/intern-rosie-duivenbode.jpg"),
  },
  {
    name: "Nasir Malim",
    role: "Past Intern",
    school: "PGY 3 · Montefiore Medical Center New York",
    img: asset("/images/interns/intern-nasir-malim.jpg"),
  },
  {
    name: "Usman Baqai",
    role: "Past Intern",
    school: "BS · Ursinus College",
    img: asset("/images/interns/intern-usman-baqai.jpg"),
  },
  {
    name: "Sajid H. Fahumy",
    role: "Summer Intern 2026",
    school: "Rowan-Virtua School of Osteopathic Medicine",
    img: asset("/images/interns/intern-sajid-fahumy.jpg"),
  },
  {
    name: "Nasar Qureshi",
    role: "Summer Intern 2026",
    school: "Medical Student",
    img: asset("/images/interns/intern-nasar-qureshi.jpg"),
  },
];

const CLONES_COUNT = 4;

export default function PastInternsSlider({ interns = PAST_INTERNS_DATA }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [virtualIndex, setVirtualIndex] = useState(CLONES_COUNT);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isTransitioningRef = useRef(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const timerRef = useRef(null);

  const n = interns.length;

  // Responsive itemsPerView
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute clones array for seamless circular loop
  const slides = [
    ...interns.slice(-CLONES_COUNT).map((item, i) => ({ ...item, _key: `pre-${i}` })),
    ...interns.map((item, i) => ({ ...item, _key: `real-${i}` })),
    ...interns.slice(0, CLONES_COUNT).map((item, i) => ({ ...item, _key: `post-${i}` })),
  ];

  // Active real index for counter & dots (0 to n - 1)
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
      // Slid past the end -> snap back to corresponding start clone without transition
      setEnableTransition(false);
      setVirtualIndex(CLONES_COUNT + (virtualIndex - (CLONES_COUNT + n)));
      setTimeout(() => {
        setEnableTransition(true);
        isTransitioningRef.current = false;
      }, 40);
    } else if (virtualIndex < CLONES_COUNT) {
      // Slid before the start -> snap to corresponding end clone without transition
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

  // Safety fallback in case transitionend is canceled/skipped by browser
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

  // Pause autoplay when browser tab is inactive
  useEffect(() => {
    function handleVisibility() {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Touch swipe support
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <div
      className="intern-slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="intern-past-grid">
        {/* LEFT COLUMN: Section Copy & Carousel Controls */}
        <div className="intern-past-copy">
          <h2 className="intern-section-h2">Past Interns</h2>
          <p className="intern-section-body">
            Our alumni have gone on to make meaningful contributions in medicine, research, and
            service.
          </p>

          <div className="intern-slider-controls">
            <button
              type="button"
              onClick={prevSlide}
              className="intern-slider-btn prev"
              aria-label="Previous intern"
              title="Previous"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            <span className="intern-slider-counter">
              {String(realIndex + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              className="intern-slider-btn next"
              aria-label="Next intern"
              title="Next"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>

          <div className="intern-slider-dots">
            {interns.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`intern-slider-dot ${realIndex === idx ? "active" : ""}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Viewport & Slides Track */}
        <div
          className="intern-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="intern-slider-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${virtualIndex * (100 / itemsPerView)}%)`,
              transition: enableTransition
                ? "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {slides.map((intern) => (
              <div
                key={intern._key}
                className="intern-slider-card-wrap"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <article className="intern-past-card">
                  <div className="intern-past-photo-wrap">
                    <img
                      src={intern.img}
                      alt={intern.name}
                      className="intern-past-photo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="intern-past-name">{intern.name}</h3>
                  <p className="intern-past-role">{intern.role}</p>
                  {intern.school && (
                    <p className="intern-past-school">{intern.school}</p>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
