"use client";

import { useState, useEffect } from "react";
import { asset } from "../../lib/asset";

/* ── HELPER: EXTRACT YOUTUBE ID ────────────────────────────── */

export function extractYouTubeId(urlOrId) {
  if (!urlOrId || typeof urlOrId !== "string") return "";
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = trimmed.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  return "";
}

/* ── HELPER: NORMALIZE VIDEO OBJECT ────────────────────────── */

export function normalizeVideo(item, index = 0) {
  const url = item.youtubeUrl || item.url || (typeof item === "string" ? item : "");
  const videoId = item.videoId || extractYouTubeId(url) || "";
  const title = item.title || (videoId ? `Session Presentation ${index + 1}` : "Conference Presentation");
  const speakers = item.speakers || item.speaker || "Conference Faculty";
  const thumbnail = item.thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : asset("/images/symposium/video-welcome-padela.jpg"));
  const youtubeUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : (url && url !== "#" ? url : "#");
  const id = item.id || `video-${videoId || index}`;

  return {
    ...item,
    id,
    title,
    speakers,
    affiliation: item.affiliation || "",
    category: item.category || "General",
    tag: item.tag || "SESSION",
    thumbnail,
    videoId,
    youtubeUrl,
  };
}

/* ── ALL 25 CONFERENCE PRESENTATIONS DATA ──────────────────── */

const ALL_VIDEOS = [
  {
    id: "overview-padela",
    category: "Keynotes",
    tag: "CONFERENCE OVERVIEW",
    title: "Conference Overview: Islamic Theology, Law, and Biomedicine",
    speakers: "Aasim Padela, MD, MSc",
    affiliation: "Initiative on Islam and Medicine, University of Chicago",
    thumbnail: asset("/images/interfaces/video-overview-padela.jpg"),
    videoId: "9SDRgM7_zhY",
    youtubeUrl: "https://www.youtube.com/watch?v=9SDRgM7_zhY",
  },
  {
    id: "keynote-kholwadia",
    category: "Keynotes",
    tag: "KEYNOTE ADDRESS",
    title: "The Role of the Ulama in Expounding an Islamic Theosophy",
    speakers: "Shaykh Mohammad Amin Kholwadia",
    affiliation: "Darul Qasim",
    thumbnail: asset("/images/interfaces/video-keynote-kholwadia.jpg"),
    videoId: "Nw4jChaAmLk",
    youtubeUrl: "https://www.youtube.com/watch?v=Nw4jChaAmLk",
  },
  {
    id: "keynote-moosa",
    category: "Keynotes",
    tag: "KEYNOTE ADDRESS",
    title: "Relationship between 'Islamic' Ontology & Epistemology in Modern Age",
    speakers: "Ebrahim Moosa, Ph.D.",
    affiliation: "University of Notre Dame",
    thumbnail: asset("/images/interfaces/video-keynote-moosa.jpg"),
    videoId: "yRFoKru4VkA",
    youtubeUrl: "https://www.youtube.com/watch?v=yRFoKru4VkA",
  },
  {
    id: "keynote-mattson",
    category: "Keynotes",
    tag: "KEYNOTE ADDRESS",
    title: "Rejuvenating Islamic Theological Ethics for the Muslim Polity",
    speakers: "Ingrid Mattson, Ph.D.",
    affiliation: "Huron University College",
    thumbnail: asset("/images/interfaces/video-keynote-mattson.jpg"),
    videoId: "pLF6YBayzds",
    youtubeUrl: "https://www.youtube.com/watch?v=pLF6YBayzds",
  },
  {
    id: "plenary-padela-sulmasy",
    category: "Keynotes",
    tag: "OPENING PLENARY",
    title: "Opening Plenary: Welcome & Framing the Discourses",
    speakers: "Aasim Padela, MD, MSc & Daniel Sulmasy, MD, PhD, MACP",
    affiliation: "University of Chicago School of Medicine",
    thumbnail: asset("/images/interfaces/video-plenary-padela-sulmasy.jpg"),
    videoId: "HjRdgFH0eGo",
    youtubeUrl: "https://www.youtube.com/watch?v=HjRdgFH0eGo",
  },
  {
    id: "actors-padela",
    category: "Theology & Ethics",
    tag: "FOUNDATIONS",
    title: "The Actors and Materials of Islamic Bioethics",
    speakers: "Aasim Padela, MD, MSc",
    affiliation: "University of Chicago",
    thumbnail: asset("/images/interfaces/video-actors-padela.jpg"),
    videoId: "glgHDLixyDc",
    youtubeUrl: "https://www.youtube.com/watch?v=glgHDLixyDc",
  },
  {
    id: "tools-qureshi",
    category: "Theology & Ethics",
    tag: "ETHICO-LEGAL TOOLS",
    title: "The Tools of the Islamic Ethico-Legal Tradition",
    speakers: "Jawad Qureshi, Ph.D(c)",
    affiliation: "University of Chicago",
    thumbnail: asset("/images/interfaces/video-tools-qureshi.jpg"),
    videoId: "6AXnHLBc3io",
    youtubeUrl: "https://www.youtube.com/watch?v=6AXnHLBc3io",
  },
  {
    id: "ethics-kholwadia",
    category: "Theology & Ethics",
    tag: "THEOLOGY & ONTOLOGY",
    title: "Theological and Ontological Considerations for an Islamic Ethics of Medicine",
    speakers: "Shaykh Mohammad Amin Kholwadia",
    affiliation: "Darul Qasim",
    thumbnail: asset("/images/interfaces/video-ethics-kholwadia.jpg"),
    videoId: "AJ4iCB8SeOM",
    youtubeUrl: "https://www.youtube.com/watch?v=AJ4iCB8SeOM",
  },
  {
    id: "inquiries-jafri",
    category: "Theology & Ethics",
    tag: "MORAL THEOLOGY",
    title: "Medical Inquiries, Replies from the Revelation",
    speakers: "Syed Hasan Raza Jafri, MBBS",
    affiliation: "Islamic Seminarian & Physician",
    thumbnail: asset("/images/interfaces/video-inquiries-jafri.jpg"),
    videoId: "f0vMdyF3EXg",
    youtubeUrl: "https://www.youtube.com/watch?v=f0vMdyF3EXg",
  },
  {
    id: "darurah-ebrahim",
    category: "Theology & Ethics",
    tag: "LEGAL PRINCIPLES",
    title: "Al-Darurah & its Application in Field of Biomedical Interventions",
    speakers: "Abul Fadl Mohsin Ebrahim, Ph.D.",
    affiliation: "University of KwaZulu-Natal",
    thumbnail: asset("/images/interfaces/video-darurah-ebrahim.jpg"),
    videoId: "sOBGdXIAkC8",
    youtubeUrl: "https://www.youtube.com/watch?v=sOBGdXIAkC8",
  },
  {
    id: "principles-widigdo",
    category: "Theology & Ethics",
    tag: "BIOETHICAL PRINCIPLES",
    title: "Principles of Nonmaleficence & Beneficence in Islamic Context",
    speakers: "Mohammad Syifa Amin Widigdo, PhD(c)",
    affiliation: "McGill University",
    thumbnail: asset("/images/interfaces/video-principles-widigdo.jpg"),
    videoId: "lWoSOto2G-4",
    youtubeUrl: "https://www.youtube.com/watch?v=lWoSOto2G-4",
  },
  {
    id: "healing-arozullah",
    category: "Theology & Ethics",
    tag: "ONTOLOGY & HEALING",
    title: "Islamic Ontology-Based Causes and Means of Healing",
    speakers: "Ahsan Arozullah, MD, MPH",
    affiliation: "Astellas Pharma & Northwestern University",
    thumbnail: asset("/images/interfaces/video-healing-arozullah.jpg"),
    videoId: "Lku-zmEVflE",
    youtubeUrl: "https://www.youtube.com/watch?v=Lku-zmEVflE",
  },
  {
    id: "jurisprudence-ahmed",
    category: "Theology & Ethics",
    tag: "JURISPRUDENCE",
    title: "Negotiating With the Ghosts of Islamic Jurisprudence",
    speakers: "Khurram Khadim Ahmed, MDiv",
    affiliation: "University of Chicago",
    thumbnail: asset("/images/interfaces/video-jurisprudence-ahmed.jpg"),
    videoId: "MUHJwwz8yYI",
    youtubeUrl: "https://www.youtube.com/watch?v=MUHJwwz8yYI",
  },
  {
    id: "soul-stadlan",
    category: "Soul & Neuroscience",
    tag: "NEUROSCIENCE & SOUL",
    title: "Correlating Presence of Soul with Specific Human Anatomy & Physiology",
    speakers: "Noam Stadlan, MD & Raed Abusuwwa, DO",
    affiliation: "NorthShore University HealthSystem",
    thumbnail: asset("/images/interfaces/video-soul-stadlan.jpg"),
    videoId: "QK4wxcoyPnc",
    youtubeUrl: "https://www.youtube.com/watch?v=QK4wxcoyPnc",
  },
  {
    id: "consciousness-qazi",
    category: "Soul & Neuroscience",
    tag: "CONSCIOUSNESS",
    title: "Neuroscientific Theory of Consciousness",
    speakers: "Faisal Qazi, DO",
    affiliation: "San Antonio Community Hospital",
    thumbnail: asset("/images/interfaces/video-consciousness-qazi.jpg"),
    videoId: "c64tujqQ7gQ",
    youtubeUrl: "https://www.youtube.com/watch?v=c64tujqQ7gQ",
  },
  {
    id: "spirit-husain",
    category: "Soul & Neuroscience",
    tag: "METAPHYSICS",
    title: "From Spirit to Soul and Beyond",
    speakers: "Sirajul Husain, PhD",
    affiliation: "Scholastic Researcher",
    thumbnail: asset("/images/interfaces/video-spirit-husain.jpg"),
    videoId: "t_NChfG0G5I",
    youtubeUrl: "https://www.youtube.com/watch?v=t_NChfG0G5I",
  },
  {
    id: "neuroimaging-sajid",
    category: "Soul & Neuroscience",
    tag: "NEUROIMAGING",
    title: "Clinical Use of NeuroImaging on Discourse Concerning the Soul",
    speakers: "Macksood Aftab, DO & Aamna Sajid",
    affiliation: "Michigan State University / Central Michigan",
    thumbnail: asset("/images/interfaces/video-neuroimaging-sajid.jpg"),
    videoId: "Wp88M2A7AVs",
    youtubeUrl: "https://www.youtube.com/watch?v=Wp88M2A7AVs",
  },
  {
    id: "conceptions-brown",
    category: "Soul & Neuroscience",
    tag: "ISLAMIC PHILOSOPHY",
    title: "Classical Muslim Conceptions of the Conscious Soul",
    speakers: "Shaykh Jihad Brown",
    affiliation: "Tabah Foundation",
    thumbnail: asset("/images/interfaces/video-conceptions-brown.jpg"),
    videoId: "yckFWDDQF4Q",
    youtubeUrl: "https://www.youtube.com/watch?v=yckFWDDQF4Q",
  },
  {
    id: "framework-stodolsky",
    category: "Law & Practice",
    tag: "JURISTS & PHYSICIANS",
    title: "Jurisprudential Framework for Cooperation between Muslim Jurists & Physicians",
    speakers: "Muhammed Volkan Yildiran Stodolsky, PhD",
    affiliation: "Al-Azhar University / Istanbul Foundation",
    thumbnail: asset("/images/interfaces/video-framework-stodolsky.jpg"),
    videoId: "WnAU_wfVw04",
    youtubeUrl: "https://www.youtube.com/watch?v=WnAU_wfVw04",
  },
  {
    id: "biomed-saleem",
    category: "Law & Practice",
    tag: "ISLAMICIZATION OF BIOMED",
    title: "Towards an Islamicization of Modern Biomedicine",
    speakers: "Rizwan Saleem, MBBS & Jawad Qureshi, Ph.D(c)",
    affiliation: "University of Chicago",
    thumbnail: asset("/images/interfaces/video-biomed-saleem.jpg"),
    videoId: "X5H8CiOje74",
    youtubeUrl: "https://www.youtube.com/watch?v=X5H8CiOje74",
  },
  {
    id: "seeking-qureshi",
    category: "Law & Practice",
    tag: "CLINICAL DECISION",
    title: "When Must a Patient Seek Healthcare?",
    speakers: "Omar Qureshi, PhD(c) & Aasim Padela, MD, MSc",
    affiliation: "Zaytuna College & University of Chicago",
    thumbnail: asset("/images/interfaces/video-seeking-qureshi.jpg"),
    videoId: "nlYlwX9vRk8",
    youtubeUrl: "https://www.youtube.com/watch?v=nlYlwX9vRk8",
  },
  {
    id: "mind-oueslati",
    category: "Law & Practice",
    tag: "END OF LIFE",
    title: "Dying with a Clear Mind",
    speakers: "Roukayya Oueslati, MSc, MA",
    affiliation: "University of Oxford",
    thumbnail: asset("/images/interfaces/video-mind-oueslati.jpg"),
    videoId: "LKI6nqYxiQE",
    youtubeUrl: "https://www.youtube.com/watch?v=LKI6nqYxiQE",
  },
  {
    id: "moral-suleman",
    category: "Law & Practice",
    tag: "RESEARCH ETHICS",
    title: "What is the Moral Universe & the Muslim Researcher?",
    speakers: "Mehrunisha Suleman, BMBCh, MA, BA, MSc",
    affiliation: "University of Cambridge / Oxford",
    thumbnail: asset("/images/interfaces/video-moral-suleman.jpg"),
    videoId: "A2NZdUEqWxA",
    youtubeUrl: "https://www.youtube.com/watch?v=A2NZdUEqWxA",
  },
  {
    id: "psychology-keshavarzi",
    category: "Law & Practice",
    tag: "FORENSIC PSYCHOLOGY",
    title: "Role of Forensic Psychology in Islamic Law",
    speakers: "Hooman Keshavarzi, MA, PsyD",
    affiliation: "Khalil Center",
    thumbnail: asset("/images/interfaces/video-psychology-keshavarzi.jpg"),
    videoId: "CU8TcUqQgH8",
    youtubeUrl: "https://www.youtube.com/watch?v=CU8TcUqQgH8",
  },
  {
    id: "indonesia-purvis",
    category: "Law & Practice",
    tag: "GLOBAL HEALTH",
    title: "Promoting Creation in Indonesia",
    speakers: "Taylor Purvis, MS1",
    affiliation: "Johns Hopkins School of Medicine",
    thumbnail: asset("/images/interfaces/video-indonesia-purvis.jpg"),
    videoId: "9HpXMAlCVNQ",
    youtubeUrl: "https://www.youtube.com/watch?v=9HpXMAlCVNQ",
  },
];

const SPONSORS = [
  {
    name: "UMMA Community Clinic",
    src: asset("/images/interfaces/sponsor-umma.png"),
    alt: "UMMA Community Clinic Logo",
    className: "idc-sponsor-umma",
  },
  {
    name: "American Islamic College",
    src: asset("/images/interfaces/sponsor-aic.png"),
    alt: "American Islamic College Logo",
    className: "idc-sponsor-aic",
  },
  {
    name: "John Templeton Foundation",
    src: asset("/images/interfaces/sponsor-templeton.png"),
    alt: "John Templeton Foundation Logo",
    className: "idc-sponsor-templeton",
  },
];

/* ── VIDEO CARD COMPONENT ──────────────────────────────────── */

function SessionVideoCard({ video, onPlay }) {
  const norm = normalizeVideo(video);

  return (
    <div className="idc-session-card">
      <button
        type="button"
        className="idc-session-thumb-link"
        onClick={() => onPlay(norm)}
        aria-label={`Watch: ${norm.title}`}
      >
        <div className="idc-session-thumb">
          <img
            src={norm.thumbnail}
            alt={norm.title}
            loading="lazy"
          />
          <div className="idc-play-overlay">
            <div className="idc-play-btn">
              <i className="fa-solid fa-play" />
            </div>
          </div>
        </div>
      </button>

      <div className="idc-session-info">
        <span className="idc-card-tag">{norm.tag}</span>
        <h3
          className="idc-session-title"
          onClick={() => onPlay(norm)}
          style={{ cursor: "pointer" }}
        >
          {norm.title}
        </h3>
        <p className="idc-session-speaker">{norm.speakers}</p>
        {norm.affiliation && (
          <p className="idc-session-affil">{norm.affiliation}</p>
        )}
        <button
          type="button"
          onClick={() => onPlay(norm)}
          className="idc-card-yt-link"
          aria-label={`Watch ${norm.title}`}
        >
          <i className="fa-brands fa-youtube" /> Watch Video
        </button>
      </div>
    </div>
  );
}

/* ── MAIN CLIENT COMPONENT ─────────────────────────────────── */

export default function InterfacesPageClient() {
  const [sessions, setSessions] = useState(ALL_VIDEOS);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  // Quick Add Video Input States
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newSpeaker, setNewSpeaker] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [addFeedback, setAddFeedback] = useState("");

  const categories = ["All", "Keynotes", "Theology & Ethics", "Soul & Neuroscience", "Law & Practice"];

  const filteredSessions = activeFilter === "All"
    ? sessions
    : sessions.filter((s) => s.category === activeFilter);

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

  // Handle adding new video dynamically
  const handleAddVideo = (e) => {
    e.preventDefault();
    if (!newUrl.trim()) {
      setAddFeedback("Please enter a YouTube video URL or ID.");
      return;
    }

    const videoId = extractYouTubeId(newUrl);
    if (!videoId) {
      setAddFeedback("Invalid YouTube URL. Please enter a valid YouTube video link.");
      return;
    }

    const newVideo = normalizeVideo({
      id: `custom-${videoId}-${Date.now()}`,
      title: newTitle.trim() || `Conference Presentation (${videoId})`,
      speakers: newSpeaker.trim() || "Conference Faculty",
      category: activeFilter !== "All" ? activeFilter : "General",
      tag: "NEW SESSION",
      videoId,
      youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    }, sessions.length);

    // Automatically append to the sessions list
    setSessions((prev) => [...prev, newVideo]);
    setNewUrl("");
    setNewTitle("");
    setNewSpeaker("");
    setAddFeedback("Video card automatically created below!");
    setTimeout(() => setAddFeedback(""), 4000);
  };

  const featuredKeynote = sessions[0] || ALL_VIDEOS[0];

  return (
    <div className="interfaces-conference-page">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="idc-hero">
        <div className="idc-hero-bg">
          <img
            src={asset("/images/symposium/hero-uchicago-hd.jpg")}
            alt="University of Chicago campus building"
            className="idc-hero-bg-img"
            loading="eager"
          />
          <div className="idc-hero-gradient" />
        </div>
        <div className="idc-hero-inner container">
          <div className="idc-hero-content">
            <p className="idc-hero-eyebrow">CONFERENCE · UNIVERSITY OF CHICAGO</p>
            <h1 className="idc-hero-title">
              Interfaces and<br />Discourses
            </h1>
            <p className="idc-hero-subtitle">
              A Multidisciplinary Conference on Islamic Theology, Law, and Biomedicine
            </p>
            <div className="idc-hero-meta">
              <span className="idc-hero-meta-item">
                <i className="fa-regular fa-calendar-days" />
                April 15–17, 2016
              </span>
              <span className="idc-hero-meta-divider" />
              <span className="idc-hero-meta-item">
                <i className="fa-solid fa-location-dot" />
                Gordon Center, University of Chicago
              </span>
            </div>
            <a href="#sessions" className="idc-hero-cta">
              EXPLORE ALL 25 SESSIONS &amp; VIDEOS &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <main className="idc-main container">
        {/* ── EVENT OVERVIEW ───────────────────────────────── */}
        <section className="idc-section idc-overview-section" id="overview">
          <div className="idc-overview-grid">
            <div className="idc-overview-label-col">
              <h2 className="idc-overview-heading">
                Event<br />Overview
              </h2>
            </div>
            <div className="idc-overview-divider" aria-hidden="true" />
            <div className="idc-overview-body-col">
              <p>
                Hosted by the Initiative on Islam and Medicine, the Center of Middle Eastern Studies, and the
                Department of Near Eastern Languages and Civilizations at the University of Chicago, this conference
                convened a range of international scholars, clinicians, and religious leaders to examine the theological,
                scientific, and legal dimensions of human dignity, healthcare delivery, and biomedical ethics.
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED OVERVIEW / KEYNOTE ──────────────────── */}
        <section className="idc-section idc-keynote-section" id="keynote">
          <div className="idc-keynote-row">
            <div className="idc-keynote-thumb-col">
              <button
                type="button"
                className="idc-keynote-thumb-link"
                onClick={() => setActiveVideo(normalizeVideo(featuredKeynote))}
                aria-label={`Watch: ${featuredKeynote.title}`}
              >
                <div className="idc-keynote-thumb">
                  <img
                    src={featuredKeynote.thumbnail}
                    alt={featuredKeynote.title}
                    loading="lazy"
                  />
                  <div className="idc-play-overlay">
                    <div className="idc-play-btn idc-play-btn--lg">
                      <i className="fa-solid fa-play" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="idc-keynote-info-col">
              <p className="idc-keynote-eyebrow">
                <span className="idc-keynote-rule" />
                CONFERENCE OVERVIEW
                <span className="idc-keynote-rule" />
              </p>
              <h2
                className="idc-keynote-title"
                onClick={() => setActiveVideo(normalizeVideo(featuredKeynote))}
                style={{ cursor: "pointer" }}
              >
                {featuredKeynote.title}
              </h2>
              <p className="idc-keynote-speaker">
                <strong>{featuredKeynote.speakers}</strong>
                {featuredKeynote.affiliation && ` · ${featuredKeynote.affiliation}`}
              </p>
              <button
                type="button"
                onClick={() => setActiveVideo(normalizeVideo(featuredKeynote))}
                className="idc-watch-btn"
              >
                <i className="fa-brands fa-youtube me-2" />
                Watch Video &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* ── CONFERENCE SESSIONS (ALL 25 VIDEOS WITH LIGHTBOX) ── */}
        <section className="idc-section idc-sessions-section" id="sessions">
          <div className="idc-sessions-header">
            <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-3">
              <div className="d-flex align-items-center gap-3 flex-grow-1">
                <h2 className="idc-sessions-heading">Conference Presentations ({sessions.length})</h2>
                <div className="idc-sessions-rule" />
              </div>
              <button
                type="button"
                onClick={() => setShowAddForm(!showAddForm)}
                className="idc-toggle-add-btn"
                title="Add a YouTube video to automatically generate a card below"
              >
                <i className={`fa-solid ${showAddForm ? "fa-minus" : "fa-plus"} me-1`} />
                {showAddForm ? "Close Form" : "Add Video Card"}
              </button>
            </div>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="idc-filter-bar">
            {categories.map((cat) => {
              const count = cat === "All" ? sessions.length : sessions.filter((s) => s.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`idc-filter-pill ${activeFilter === cat ? "active" : ""}`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* DYNAMIC ADD VIDEO BAR */}
          {showAddForm && (
            <form onSubmit={handleAddVideo} className="idc-add-video-bar">
              <div className="w-100 mb-2">
                <strong style={{ fontSize: "13px", color: "#800000" }}>
                  <i className="fa-brands fa-youtube me-1" /> Add Video URL:
                </strong>
                <span style={{ fontSize: "12px", color: "#666", marginLeft: "8px" }}>
                  Paste any YouTube link and the card will automatically be created below.
                </span>
              </div>
              <input
                type="text"
                placeholder="YouTube Link (e.g. https://www.youtube.com/watch?v=...)"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className="idc-add-video-input"
                required
              />
              <input
                type="text"
                placeholder="Presentation Title (Optional)"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="idc-add-video-input"
              />
              <input
                type="text"
                placeholder="Speaker Name (Optional)"
                value={newSpeaker}
                onChange={(e) => setNewSpeaker(e.target.value)}
                className="idc-add-video-input"
              />
              <button type="submit" className="idc-add-video-btn">
                <i className="fa-solid fa-plus me-1" /> Add Card
              </button>
              {addFeedback && (
                <div className="w-100 mt-2" style={{ fontSize: "13px", fontWeight: "600", color: addFeedback.includes("Invalid") ? "#dc2626" : "#15803d" }}>
                  {addFeedback}
                </div>
              )}
            </form>
          )}

          {/* DYNAMICALLY GENERATED VIDEO CARDS GRID */}
          <div className="idc-sessions-grid">
            {filteredSessions.map((s, idx) => (
              <SessionVideoCard
                key={s.id || idx}
                video={s}
                onPlay={setActiveVideo}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ── SPONSORS ─────────────────────────────────────────── */}
      <section className="idc-sponsors-section" id="sponsors">
        <div className="container idc-sponsors-inner">
          <div className="idc-sponsors-label">
            <h2 className="idc-sponsors-heading">Our Sponsors</h2>
            <div className="idc-sponsors-rule" />
          </div>
          <div className="idc-sponsors-logos">
            {SPONSORS.map((s) => (
              <div key={s.name} className={`idc-sponsor-item ${s.className}`}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
            ))}
          </div>
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
                title={`${activeVideo.speaker || activeVideo.speakers} - ${activeVideo.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="symp-modalIframe"
              />
            </div>

            <div className="symp-modalInfo">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-start gap-3">
                <div>
                  <span className="symp-modalEyebrow">
                    {activeVideo.tag || activeVideo.category || "CONFERENCE PRESENTATION"}
                  </span>
                  <h3 className="symp-modalTitle">{activeVideo.title}</h3>
                  <p className="symp-modalSpeaker">
                    <strong>{activeVideo.speaker || activeVideo.speakers}</strong>
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
