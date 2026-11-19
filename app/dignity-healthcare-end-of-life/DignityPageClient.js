"use client";

import { useState, useEffect } from "react";
import { asset } from "../../lib/asset";

/* ── DATA ──────────────────────────────────────────────────── */

const OPENING_REMARKS = {
  eyebrow: "OPENING REMARKS & ACKNOWLEDGEMENTS",
  title: "President Jihad Turk (Bayan Claremont) – Opening Remarks and Acknowledgements",
  speaker: "President Jihad Turk",
  affiliation: "Bayan Claremont",
  thumbnail: asset("/images/dignity/video-opening-turk.jpg"),
  videoId: "j5o827Fw16U",
  youtubeUrl: "https://www.youtube.com/watch?v=j5o827Fw16U",
};

const PANEL_1 = {
  label: "Panel 1: Defining Dignity: Theological Roots of the Concept within the Abrahamic Traditions",
  videos: [
    {
      title: "Dignity in Christian Thought",
      speaker: "Dr. Dan Sulmasy",
      affiliation: "University of Chicago School of Medicine",
      thumbnail: asset("/images/dignity/video-christian-sulmasy.jpg"),
      videoId: "eN7GmEd0s3c",
      youtubeUrl: "https://www.youtube.com/watch?v=eN7GmEd0s3c",
      sessionTitle: "Panel 1: Defining Dignity",
    },
    {
      title: "Dignity in Jewish Tradition: Its Role in End-of-Life Care",
      speaker: "Rabbi Dr. Barry Kinzbrunner",
      affiliation: "VITAS Healthcare",
      thumbnail: asset("/images/dignity/video-jewish-kinzbrunner.jpg"),
      videoId: "P-bQJcum530",
      youtubeUrl: "https://www.youtube.com/watch?v=P-bQJcum530",
      sessionTitle: "Panel 1: Defining Dignity",
    },
    {
      title: "Dignity in the Islamic Tradition",
      speaker: "Shaykh Yassir Fazaga",
      affiliation: "Orange County Islamic Foundation",
      thumbnail: asset("/images/dignity/video-islamic-fazaga.jpg"),
      videoId: "-UFIVJ4FA7s",
      youtubeUrl: "https://www.youtube.com/watch?v=-UFIVJ4FA7s",
      sessionTitle: "Panel 1: Defining Dignity",
    },
  ],
};

const PANEL_2 = {
  label: "Panel 2: Moral and Medical Tensions in an Age of “Medicalized” Care for the Dying",
  videos: [
    {
      title: "Ars moriendi, the Art of Dying Well",
      speaker: "Dr. Lydia Dugdale",
      affiliation: "Yale School of Medicine",
      thumbnail: asset("/images/dignity/video-dying-dugdale.jpg"),
      videoId: "VJIPJj-1TRY",
      youtubeUrl: "https://www.youtube.com/watch?v=VJIPJj-1TRY",
      sessionTitle: "Panel 2: Moral and Medical Tensions",
    },
    {
      title: 'Lessons from “a Goses”',
      speaker: "Dr. Kenneth Prager",
      affiliation: "Columbia University Medical Center",
      thumbnail: asset("/images/dignity/video-goses-prager.jpg"),
      videoId: "RRB65SKYY9E",
      youtubeUrl: "https://www.youtube.com/watch?v=RRB65SKYY9E",
      sessionTitle: "Panel 2: Moral and Medical Tensions",
    },
    {
      title: "Islamic Perspectives on Clinical Intervention at the End-of-Life: We Can, but Must We?",
      speaker: "Dr. Aasim I. Padela",
      affiliation: "University of Chicago School of Medicine",
      thumbnail: asset("/images/dignity/video-clinical-padela.jpg"),
      videoId: "Y2zv6yLOdfk",
      youtubeUrl: "https://www.youtube.com/watch?v=Y2zv6yLOdfk",
      sessionTitle: "Panel 2: Moral and Medical Tensions",
    },
  ],
};

const PANEL_3 = {
  label: "Panel 3: Religious and Professional Narratives on Being Present and Witnessing the End of Life",
  videos: [
    {
      title: "Walking the Path through the Wilderness of Grief: A Spiritual Journey",
      speaker: "Rabbi Anne Brener",
      affiliation: "Academy for Jewish Religion California",
      thumbnail: asset("/images/dignity/video-grief-brener.jpg"),
      videoId: "wh9wrFVZt34",
      youtubeUrl: "https://www.youtube.com/watch?v=wh9wrFVZt34",
      sessionTitle: "Panel 3: Religious and Professional Narratives",
    },
    {
      title: "Neural Substrates of Consciousness and Metaphysics of the Soul",
      speaker: "Dr. Faisal Qazi",
      affiliation: "Shrikar Center, San Antonio Community Hospital",
      thumbnail: asset("/images/dignity/video-neural-qazi.jpg"),
      videoId: "4KPga5HQp34",
      youtubeUrl: "https://www.youtube.com/watch?v=4KPga5HQp34",
      sessionTitle: "Panel 3: Religious and Professional Narratives",
    },
    {
      title: "Accompanying the Dying: Muslim and Christian Perspectives",
      speaker: "Rev. Dr. Patrick J. Ryan",
      affiliation: "Fordham University",
      thumbnail: asset("/images/dignity/video-accompanying-ryan.jpg"),
      videoId: "GBNbV0mY-70",
      youtubeUrl: "https://www.youtube.com/watch?v=GBNbV0mY-70",
      sessionTitle: "Panel 3: Religious and Professional Narratives",
    },
  ],
};

const KEYNOTE = {
  eyebrow: "DINNER BANQUET KEYNOTE ADDRESS",
  title: "Dying with Dignity",
  speaker: "Dr. Eba Hathout",
  affiliation: "Hassan Hathout Legacy Foundation",
  thumbnail: asset("/images/dignity/video-keynote-hathout.jpg"),
  videoId: "gTALo_qp5ho",
  youtubeUrl: "https://www.youtube.com/watch?v=gTALo_qp5ho",
};

/* ── VIDEO CARD COMPONENTS ─────────────────────────────────── */

function VideoCard({ video, onPlay }) {
  return (
    <div className="deol-video-card">
      <button
        type="button"
        className="deol-video-thumb-link"
        onClick={() => onPlay(video)}
        aria-label={`Watch: ${video.title}`}
      >
        <div className="deol-video-thumb">
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="lazy"
          />
          <div className="deol-play-overlay">
            <div className="deol-play-btn">
              <i className="fa-solid fa-play" />
            </div>
          </div>
        </div>
      </button>
      <div className="deol-video-info">
        <p
          className="deol-video-title"
          onClick={() => onPlay(video)}
          style={{ cursor: "pointer" }}
        >
          {video.title}
        </p>
        <p className="deol-video-speaker">{video.speaker}</p>
        <p className="deol-video-affil">{video.affiliation}</p>
        <button
          type="button"
          onClick={() => onPlay(video)}
          className="deol-card-yt-link"
          aria-label={`Watch ${video.title}`}
        >
          <i className="fa-brands fa-youtube" /> Watch Video
        </button>
      </div>
    </div>
  );
}

function FeaturedVideoRow({ item, onPlay }) {
  return (
    <div className="deol-featured-row">
      <div className="deol-featured-thumb-wrap">
        <button
          type="button"
          className="deol-featured-thumb-link"
          onClick={() => onPlay(item)}
          aria-label={`Watch: ${item.title}`}
        >
          <div className="deol-featured-thumb">
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
            />
            <div className="deol-play-overlay">
              <div className="deol-play-btn deol-play-btn--lg">
                <i className="fa-solid fa-play" />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="deol-featured-info">
        <p className="deol-featured-eyebrow">{item.eyebrow || item.label}</p>
        <h3
          className="deol-featured-title"
          onClick={() => onPlay(item)}
          style={{ cursor: "pointer" }}
        >
          {item.title}
        </h3>
        <p className="deol-featured-speaker">{item.speaker}</p>
        {item.affiliation && (
          <p className="deol-featured-affil">{item.affiliation}</p>
        )}
        <button
          type="button"
          onClick={() => onPlay(item)}
          className="deol-watch-btn"
        >
          <i className="fa-brands fa-youtube me-2" />
          WATCH VIDEO &rarr;
        </button>
      </div>
    </div>
  );
}

/* ── CLIENT COMPONENT ───────────────────────────────────────── */

export default function DignityPageClient() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Modal keyboard handling (Escape to close) and body scroll lock
  useEffect(() => {
    if (activeVideo) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveVideo(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeVideo]);

  return (
    <div className="dignity-event-page">
      {/* ── HERO (EXACT USER SPECIFICATION) ───────────── */}
      <header className="hero-seamless hero-deol-seamless">
        <div className="hero-bg-wrapper">
          <img
            src={asset("/images/cta-archway.jpg")}
            alt="Collegiate architectural archway, Claremont School of Theology"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-watermark-overlay" />
        </div>
        <div className="container hero-container-relative">
          <div className="hero-content-inner deol-hero-content-exact">
            {/* 1. EYEBROW: EVENT — */}
            <div className="deol-hero-eyebrow-wrap">
              <span className="deol-hero-eyebrow-badge">EVENT</span>
              <span className="deol-hero-eyebrow-rule" />
            </div>

            {/* 2. LIBRE BASKERVILLE TITLE */}
            <h1 className="deol-hero-title-exact">
              Dignity and Healthcare<br />at End-of-Life
            </h1>

            {/* 3. SUBTITLE */}
            <p className="deol-hero-subtitle-exact">
              Abrahamic Faiths in a Bioethics Conversation
            </p>

            {/* 4. METADATA ROW WITH ICONS */}
            <div className="deol-hero-meta-row">
              <div className="deol-meta-item">
                <div className="deol-meta-icon deol-meta-icon-cal">
                  <i className="fa-solid fa-calendar-days" />
                </div>
                <div className="deol-meta-text">
                  <span className="deol-meta-bold">October 24, 2015</span>
                </div>
              </div>

              <div className="deol-meta-divider" aria-hidden="true" />

              <div className="deol-meta-item">
                <div className="deol-meta-icon deol-meta-icon-pin">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="deol-meta-text">
                  <span className="deol-meta-bold">Claremont School of Theology</span>
                  <span className="deol-meta-sub">Claremont, California</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── HIGHLIGHTS STRIP (FOUR EVENT THEMES) ── */}
      <section className="strip-four-values-exact fullwidth-strip">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-handshake value-exact-icon" />
                <h3 className="value-exact-title">Interfaith Dialogue</h3>
                <p className="value-exact-text">Abrahamic Traditions in Bioethics</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-person-praying value-exact-icon" />
                <h3 className="value-exact-title">Human Dignity</h3>
                <p className="value-exact-text">Theological Roots &amp; Meanings</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-heart-pulse value-exact-icon" />
                <h3 className="value-exact-title">End-of-Life Care</h3>
                <p className="value-exact-text">Medicalized Care for the Dying</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 four-values-col">
              <div className="value-exact-item">
                <i className="fa-solid fa-scale-balanced value-exact-icon" />
                <h3 className="value-exact-title">Faith, Ethics &amp; Medicine</h3>
                <p className="value-exact-text">Being Present &amp; Witnessing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <main className="deol-main container">
        {/* ── EVENT OVERVIEW ───────────────────────────────── */}
        <section className="deol-section deol-overview-section" id="overview">
          <div className="deol-overview-grid">
            <div className="deol-overview-heading-col">
              <h2 className="deol-section-heading">Event Overview</h2>
            </div>
            <div className="deol-overview-body-col">
              <p>
                This one-day event was hosted by Bayan Claremont and co-organized by the Initiative on Islam &amp;
                Medicine, and sponsored by the Doha International Center for Interfaith Dialogue (DICID). A range of
                experts, including medical practitioners, academics, and religious leaders from Muslim, Jewish, and
                Christian backgrounds, examined the theological, scientific, and legal dimensions of human dignity
                and end-of-life care, with the aim of fostering better understanding and collaboration across traditions.
              </p>
            </div>
          </div>
        </section>

        {/* ── OPENING REMARKS ──────────────────────────────── */}
        <section className="deol-section" id="opening-remarks">
          <h2 className="deol-panel-heading">Opening Remarks</h2>
          <FeaturedVideoRow item={OPENING_REMARKS} onPlay={setActiveVideo} />
        </section>

        {/* ── PANEL 1 ──────────────────────────────────────── */}
        <section className="deol-section" id="panel-1">
          <h2 className="deol-panel-heading">{PANEL_1.label}</h2>
          <div className="deol-video-grid">
            {PANEL_1.videos.map((v) => (
              <VideoCard key={v.title} video={v} onPlay={setActiveVideo} />
            ))}
          </div>
        </section>

        {/* ── PANEL 2 ──────────────────────────────────────── */}
        <section className="deol-section" id="panel-2">
          <h2 className="deol-panel-heading">{PANEL_2.label}</h2>
          <div className="deol-video-grid">
            {PANEL_2.videos.map((v) => (
              <VideoCard key={v.title} video={v} onPlay={setActiveVideo} />
            ))}
          </div>
        </section>

        {/* ── PANEL 3 ──────────────────────────────────────── */}
        <section className="deol-section" id="panel-3">
          <h2 className="deol-panel-heading">{PANEL_3.label}</h2>
          <div className="deol-video-grid">
            {PANEL_3.videos.map((v) => (
              <VideoCard key={v.title} video={v} onPlay={setActiveVideo} />
            ))}
          </div>
        </section>

        {/* ── KEYNOTE ──────────────────────────────────────── */}
        <section className="deol-section" id="keynote">
          <h2 className="deol-panel-heading">Dinner Banquet Keynote Address</h2>
          <FeaturedVideoRow item={KEYNOTE} onPlay={setActiveVideo} />
        </section>
      </main>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="deol-cta-banner">
        <div className="deol-cta-bg">
          <img
            src={asset("/images/books-banner-wide.jpg")}
            alt="Books and lantern"
            className="deol-cta-bg-img"
            loading="lazy"
          />
          <div className="deol-cta-overlay" />
        </div>
        <div className="deol-cta-inner container">
          <div className="deol-cta-text">
            <p className="deol-cta-eyebrow">EVENT RESOURCES</p>
            <h2 className="deol-cta-title">Explore Related Materials</h2>
            <p className="deol-cta-desc">
              Access presentations, program materials, and other resources from the event.
            </p>
          </div>
          <a href="/resources" className="deol-cta-btn">
            VIEW EVENT RESOURCES &rarr;
          </a>
        </div>
      </section>

      {/* ── VIDEO LIGHTBOX MODAL ─────────────────────────────── */}
      {activeVideo && (
        <div
          className="symp-modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div className="symp-modalDialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="symp-modalClose"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video dialog"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="symp-modalVideoWrap">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={`${activeVideo.speaker} - ${activeVideo.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="symp-modalIframe"
              />
            </div>

            <div className="symp-modalInfo">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-start gap-3">
                <div>
                  <span className="symp-modalEyebrow">
                    {activeVideo.eyebrow || activeVideo.sessionTitle || "EVENT PRESENTATION"}
                  </span>
                  <h3 className="symp-modalTitle">{activeVideo.title}</h3>
                  <p className="symp-modalSpeaker">
                    <strong>{activeVideo.speaker}</strong>
                    {activeVideo.affiliation && ` · ${activeVideo.affiliation}`}
                  </p>
                </div>
                <a
                  href={activeVideo.youtubeUrl || `https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="symp-modalYtBtn"
                  title="Watch on YouTube (opens in new tab)"
                >
                  <i className="fa-brands fa-youtube me-2" /> Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
