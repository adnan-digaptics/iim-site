"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "../../lib/asset";

const SESSIONS_DATA = [
  {
    id: "welcome",
    type: "single",
    eyebrow: "WELCOME",
    title: "Welcoming Remarks",
    speaker: "Dr. Asim I. Padela",
    affiliation: "University of Chicago",
    thumbnail: asset("/images/symposium/video-welcome-padela.jpg"),
    videoId: "h1pCcY8RSsg",
    duration: "18:42",
  },
  {
    id: "medical-knowledge",
    type: "multi",
    columns: 2,
    eyebrow: "SESSION",
    title: "Medical Knowledge and Concepts of Health in Medieval Islamic History",
    speakers: [
      {
        name: "Prof. Peter E. Pormann",
        affiliation: "University of Manchester",
        thumbnail: asset("/images/symposium/video-medical-pormann.jpg"),
        videoId: "xOKur52YafI",
        duration: "32:15",
      },
      {
        name: "Prof. Ahmed Ragab",
        affiliation: "Harvard University",
        thumbnail: asset("/images/symposium/video-medical-ragab.jpg"),
        videoId: "Lx3y9NQHbbw",
        duration: "29:40",
      },
    ],
  },
  {
    id: "biomedical-knowledge",
    type: "multi",
    columns: 3,
    eyebrow: "SESSION",
    title: "Interfaces Between Biomedical Knowledge and Islamic Epistemology",
    speakers: [
      {
        name: "Prof. Ayman Shabana",
        affiliation: "Georgetown University",
        thumbnail: asset("/images/symposium/video-biomed-shabana.jpg"),
        videoId: "mh_DaIA0E1Y",
        duration: "27:10",
      },
      {
        name: "Shaykh Kamaluddin Ahmed",
        affiliation: "University of Oxford",
        thumbnail: asset("/images/symposium/video-biomed-kamaluddin.jpg"),
        videoId: "JAwBx3WjAuA",
        duration: "34:55",
      },
      {
        name: "Dr. Asim I. Padela",
        affiliation: "University of Chicago",
        thumbnail: asset("/images/symposium/video-biomed-padela.jpg"),
        videoId: "mh_DaIA0E1Y",
        duration: "31:20",
      },
    ],
  },
  {
    id: "ghazalian-keynote",
    type: "single",
    eyebrow: "KEYNOTE ADDRESS",
    title: "A Ghazalian Approach to Integrating Science and Theology",
    speaker: "Prof. Muhammad Afifi al-Akiti",
    affiliation: "University of Oxford",
    thumbnail: asset("/images/symposium/video-keynote-akiti.jpg"),
    videoId: "vH81tweNTOg",
    duration: "46:18",
  },
  {
    id: "soul-psyche",
    type: "multi",
    columns: 3,
    eyebrow: "SESSION",
    title: "The Soul, The Psyche, and The Reality of Death",
    speakers: [
      {
        name: "Dr. Mehrunisha Suleman",
        affiliation: "University of Cambridge",
        thumbnail: asset("/images/symposium/video-soul-suleman.jpg"),
        videoId: "mh_DaIA0E1Y",
        duration: "28:50",
      },
      {
        name: "Shaykh Dr. Asim Yusuf",
        affiliation: "Royal College of Psychiatrists",
        thumbnail: asset("/images/symposium/video-soul-yusuf.jpg"),
        videoId: "JAwBx3WjAuA",
        duration: "33:14",
      },
      {
        name: "Dr. Rafaqat Rashid",
        affiliation: "AlBalagh Academy",
        thumbnail: asset("/images/symposium/video-soul-rashid.jpg"),
        videoId: "mh_DaIA0E1Y",
        duration: "30:05",
      },
    ],
  },
  {
    id: "religion-science-keynote",
    type: "single",
    eyebrow: "KEYNOTE ADDRESS",
    title: "Reconsidering Religion vs Science Debate",
    speaker: "Prof. Omar Qureshi",
    affiliation: "Zaytuna College",
    thumbnail: asset("/images/symposium/video-keynote-qureshi.jpg"),
    videoId: "NG9LODLEPGQ",
    duration: "41:30",
  },
];

const SPONSORS_DATA = [
  {
    name: "Chicago Muslim Medical Alliance",
    src: asset("/images/symposium/sponsor-cmma.png"),
    alt: "Chicago Muslim Medical Alliance (CMMA) Seal",
    className: "symp-sponsor-logo-cmma",
  },
  {
    name: "Oxford Centre for Islamic Studies",
    src: asset("/images/symposium/sponsor-oxford.png"),
    alt: "Oxford Centre for Islamic Studies Logo",
    className: "symp-sponsor-logo-oxford",
  },
  {
    name: "Templeton Religion Trust",
    src: asset("/images/symposium/sponsor-templeton.png"),
    alt: "Templeton Religion Trust Logo",
    className: "symp-sponsor-logo-templeton",
  },
];

export default function SymposiumPageClient() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showBrochure, setShowBrochure] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);


  // Modal keyboard handling (Escape to close) and body scroll lock
  useEffect(() => {
    if (activeVideo || showBrochure) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveVideo(null);
          setShowBrochure(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeVideo, showBrochure]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="symp-root">
      {/* 1. SYMPOSIUM HERO */}
      <section className="symp-hero" aria-label="Symposium Hero">
        <div className="container symp-hero-container">
          <div className="row align-items-center g-0">
            <div className="col-lg-7 symp-hero-copyCol">
              <div className="symp-hero-eyebrow">
                <span className="symp-hero-eyebrow-text">SYMPOSIUM</span>
                <span className="symp-hero-eyebrow-line" aria-hidden="true" />
              </div>

              <h1 className="symp-hero-title">
                Multidisciplinary<br />
                Symposium on Islam<br />
                and Biomedicine
              </h1>

              <div className="symp-hero-meta">
                <div className="symp-hero-meta-item">
                  <span className="symp-hero-meta-icon" aria-hidden="true">
                    <i className="fa-regular fa-calendar-days" />
                  </span>
                  <span className="symp-hero-meta-text">Sept 8–9, 2018</span>
                </div>

                <div className="symp-hero-meta-divider" aria-hidden="true" />

                <div className="symp-hero-meta-item">
                  <span className="symp-hero-meta-icon" aria-hidden="true">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <span className="symp-hero-meta-text">
                    <strong>Gordon Center,</strong>
                    <br />
                    University of Chicago
                  </span>
                </div>
              </div>

              <div className="symp-hero-action">
                <button
                  type="button"
                  className="symp-hero-btn"
                  onClick={() => setShowBrochure(true)}
                >
                  View Conference Brochure <i className="fa-solid fa-arrow-right ms-2" />
                </button>
              </div>
            </div>

            <div className="col-lg-5 symp-hero-mediaCol">
              <div className="symp-hero-imageWrap">
                <img
                  src={asset("/images/symposium/hero-uchicago.jpg")}
                  alt="University of Chicago historic Gothic campus tower with green trees"
                  className="symp-hero-img"
                  loading="eager"
                />
                <div className="symp-hero-gradientOverlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYMPOSIUM OVERVIEW */}
      <section className="symp-overview" id="overview" aria-label="Symposium Overview">
        <div className="container">
          <div className="symp-overview-card">
            <div className="symp-overview-titleCol">
              <h2 className="symp-overview-heading">
                Symposium<br />
                Overview
              </h2>
              <div className="symp-overview-underline" aria-hidden="true" />
            </div>

            <div className="symp-overview-divider" aria-hidden="true" />

            <div className="symp-overview-bodyCol">
              <p className="symp-overview-lead">
                By bringing together an international cohort of academicians, clinicians, and Islamic seminarians, this symposium and workshop aims to fill a major lacuna within academic discourse on the scholastic traditions of Islam and the human sciences. The symposium focuses on the relationships between Islamic theology and metaphysics in addition to how theological and metaphysical constructs within Islam interface with the science and practice of medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SESSIONS & KEYNOTES */}
      <section className="symp-sessions" aria-label="Symposium Sessions and Keynotes">
        <div className="container">
          <div className="symp-cards-stack">
            {SESSIONS_DATA.map((item) => (
              <article key={item.id} className="symp-sessionCard">
                {/* Single Speaker Card Format (Welcome, Ghazalian Keynote, Religion vs Science) */}
                {item.type === "single" && (
                  <div className="row align-items-center g-3 symp-singleRow">
                    <div className="col-lg-4 symp-cardTitleCol">
                      <div className="symp-cardEyebrow">
                        <span className="symp-cardEyebrowDash" aria-hidden="true">—</span> {item.eyebrow}
                      </div>
                      <h3 className="symp-cardTitle">{item.title}</h3>
                    </div>

                    <div className="col-lg-5 symp-cardVideoCol">
                      <div
                        className="symp-videoThumbWrap"
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          setActiveVideo({
                            title: item.title,
                            speaker: item.speaker,
                            affiliation: item.affiliation,
                            videoId: item.videoId,
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveVideo({
                              title: item.title,
                              speaker: item.speaker,
                              affiliation: item.affiliation,
                              videoId: item.videoId,
                            });
                          }
                        }}
                        aria-label={`Play presentation: ${item.title} by ${item.speaker}`}
                      >
                        <img
                          src={item.thumbnail}
                          alt={`${item.speaker} - ${item.title}`}
                          className="symp-videoThumbImg"
                          loading="eager"
                        />
                        <div className="symp-playOverlay" aria-hidden="true">
                          <span className="symp-playCircle">
                            <i className="fa-solid fa-play" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 symp-cardSpeakerCol">
                      <div className="symp-speakerDetails">
                        <h4 className="symp-speakerName">{item.speaker}</h4>
                        <p className="symp-speakerAffil">{item.affiliation}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Multi Speaker Card Format (Medical Knowledge: 2 cols, Biomedical: 3 cols, Soul: 3 cols) */}
                {item.type === "multi" && (
                  <div className="row g-3 symp-multiRow">
                    <div className="col-lg-4 symp-cardTitleCol">
                      <div className="symp-cardEyebrow">
                        <span className="symp-cardEyebrowDash" aria-hidden="true">—</span> {item.eyebrow}
                      </div>
                      <h3 className="symp-cardTitle">{item.title}</h3>
                    </div>

                    <div className="col-lg-8 symp-cardMultiSpeakersCol">
                      <div
                        className={`symp-speakersGrid symp-speakersGrid--${item.columns}`}
                      >
                        {item.speakers.map((spk, idx) => (
                          <div key={idx} className="symp-speakerGridItem">
                            <div
                              className="symp-videoThumbWrap"
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                setActiveVideo({
                                  title: item.title,
                                  speaker: spk.name,
                                  affiliation: spk.affiliation,
                                  videoId: spk.videoId,
                                })
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setActiveVideo({
                                    title: item.title,
                                    speaker: spk.name,
                                    affiliation: spk.affiliation,
                                    videoId: spk.videoId,
                                  });
                                }
                              }}
                              aria-label={`Play presentation by ${spk.name}`}
                            >
                              <img
                                src={spk.thumbnail}
                                alt={`${spk.name} - ${spk.affiliation}`}
                                className="symp-videoThumbImg"
                                loading="eager"
                              />
                              <div className="symp-playOverlay" aria-hidden="true">
                                <span className="symp-playCircle">
                                  <i className="fa-solid fa-play" />
                                </span>
                              </div>
                            </div>
                            <div className="symp-speakerDetailsUnder">
                              <h4 className="symp-speakerName">{spk.name}</h4>
                              <p className="symp-speakerAffil">{spk.affiliation}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SPONSORS */}
      <section className="symp-sponsors" aria-label="Our Sponsors">
        <div className="container">
          <div className="symp-sponsors-inner">
            <div className="symp-sponsors-titleWrap">
              <h2 className="symp-sponsors-title">
                Our Sponsors <span className="symp-sponsors-dash" aria-hidden="true">—</span>
              </h2>
            </div>

            <div className="symp-sponsors-list">
              {SPONSORS_DATA.map((sp, idx) => (
                <div key={idx} className="symp-sponsor-group">
                  <div className="symp-sponsor-item" title={sp.name}>
                    <img
                      src={sp.src}
                      alt={sp.alt}
                      className={`symp-sponsor-img ${sp.className}`}
                      loading="eager"
                    />
                  </div>
                  {idx < SPONSORS_DATA.length - 1 && (
                    <div className="symp-sponsor-divider" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STAY INFORMED NEWSLETTER */}
      <section className="symp-newsletter" aria-label="Newsletter Subscription">
        <div className="container">
          <div className="symp-newsletter-box">
            <div className="symp-newsletter-left">
              <div className="symp-newsletter-iconBox" aria-hidden="true">
                <i className="fa-regular fa-envelope" />
              </div>
              <div className="symp-newsletter-divider" aria-hidden="true" />
              <div className="symp-newsletter-text">
                <h3 className="symp-newsletter-title">Stay Informed</h3>
                <p className="symp-newsletter-subtitle">
                  Subscribe to our newsletter for updates on future events and resources.
                </p>
              </div>
            </div>

            <div className="symp-newsletter-right">
              {subscribed ? (
                <div className="symp-newsletter-success">
                  <i className="fa-solid fa-circle-check me-2" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form className="symp-newsletter-form" onSubmit={handleSubscribe}>
                  <div className="symp-newsletter-inputWrap">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="symp-newsletter-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Email address for symposium newsletter"
                    />
                  </div>
                  <button type="submit" className="symp-newsletter-btn">
                    Subscribe <i className="fa-solid fa-arrow-right ms-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL LIGHTBOX */}
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
              <span className="symp-modalEyebrow">SYMPOSIUM PRESENTATION</span>
              <h3 className="symp-modalTitle">{activeVideo.title}</h3>
              <p className="symp-modalSpeaker">
                <strong>{activeVideo.speaker}</strong> · {activeVideo.affiliation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONFERENCE BROCHURE MODAL */}
      {showBrochure && (
        <div
          className="symp-modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Conference Brochure"
          onClick={() => setShowBrochure(false)}
        >
          <div
            className="symp-modalDialog symp-brochureDialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="symp-modalClose"
              onClick={() => setShowBrochure(false)}
              aria-label="Close brochure modal"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="symp-brochureContent">
              <div className="symp-brochureHeader">
                <span className="symp-hero-eyebrow-text">OFFICIAL PROGRAM BROCHURE</span>
                <h2 className="symp-brochureTitle">
                  Multidisciplinary Symposium on Islam and Biomedicine
                </h2>
                <p className="symp-brochureMeta">
                  <i className="fa-regular fa-calendar-days me-2" />
                  September 8–9, 2018 &nbsp;|&nbsp;
                  <i className="fa-solid fa-location-dot ms-2 me-2" />
                  Gordon Center for Integrative Science, University of Chicago
                </p>
              </div>

              <div className="symp-brochureBody">
                <div className="symp-brochureSection">
                  <h4>Symposium Organizers</h4>
                  <p>
                    <strong>Initiative on Islam and Medicine (II&amp;M)</strong> &amp; the{" "}
                    <strong>Program on Medicine and Religion</strong> at the University of Chicago, with generous support from the{" "}
                    <strong>Templeton Religion Trust</strong>, the{" "}
                    <strong>Oxford Centre for Islamic Studies</strong>, and the{" "}
                    <strong>Chicago Muslim Medical Alliance</strong>.
                  </p>
                </div>

                <div className="symp-brochureSection">
                  <h4>Program Schedule</h4>
                  <ul className="symp-brochureSchedule">
                    <li>
                      <strong>Saturday, Sept 8, 2018 — 9:00 AM</strong>: Welcoming Remarks by Dr. Asim I. Padela
                    </li>
                    <li>
                      <strong>Saturday, Sept 8, 2018 — 10:15 AM</strong>: Medical Knowledge and Concepts of Health in Medieval Islamic History (Prof. Peter E. Pormann &amp; Prof. Ahmed Ragab)
                    </li>
                    <li>
                      <strong>Saturday, Sept 8, 2018 — 2:00 PM</strong>: Interfaces Between Biomedical Knowledge and Islamic Epistemology (Prof. Ayman Shabana, Shaykh Kamaluddin Ahmed &amp; Dr. Asim I. Padela)
                    </li>
                    <li>
                      <strong>Saturday, Sept 8, 2018 — 4:30 PM</strong>: Keynote: A Ghazalian Approach to Integrating Science and Theology (Prof. Muhammad Afifi al-Akiti)
                    </li>
                    <li>
                      <strong>Sunday, Sept 9, 2018 — 9:30 AM</strong>: The Soul, The Psyche, and The Reality of Death (Dr. Mehrunisha Suleman, Shaykh Dr. Asim Yusuf &amp; Dr. Rafaqat Rashid)
                    </li>
                    <li>
                      <strong>Sunday, Sept 9, 2018 — 1:30 PM</strong>: Keynote: Reconsidering Religion vs Science Debate (Prof. Omar Qureshi)
                    </li>
                  </ul>
                </div>

                <div className="symp-brochureActions">
                  <button
                    type="button"
                    className="symp-hero-btn"
                    onClick={() => window.print()}
                  >
                    <i className="fa-solid fa-print me-2" /> Print Program
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                    onClick={() => setShowBrochure(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
