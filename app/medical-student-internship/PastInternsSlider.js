"use client";

import { useState, useEffect, useRef } from "react";
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

export default function PastInternsSlider({ interns = PAST_INTERNS_DATA }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Update visible items count based on window width
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

  const maxIndex = Math.max(0, interns.length - itemsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (idx) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Autoplay every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
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
              {String(currentIndex + 1).padStart(2, "0")} / {String(interns.length).padStart(2, "0")}
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
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`intern-slider-dot ${currentIndex === idx ? "active" : ""}`}
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
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {interns.map((intern, idx) => (
              <div
                key={intern.name || idx}
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
