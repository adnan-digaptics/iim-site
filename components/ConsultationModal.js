"use client";
import { useState, useEffect, useRef } from "react";

const FORM_URL = "https://links.360growthlab.com/widget/form/CstJIHikubJG75Zv16TR";

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const autoCount = useRef(0); // tracks how many times auto-opened (max 2)
  const secondTimer = useRef(null);

  function close() {
    setOpen(false);
    // After first auto-close, schedule second auto-open once
    if (autoCount.current === 1) {
      secondTimer.current = setTimeout(() => {
        autoCount.current = 2;
        setOpen(true);
      }, 25000);
    }
  }

  useEffect(() => {
    function onOpen() { setOpen(true); }
    window.addEventListener("open-consultation-modal", onOpen);

    let firstTimer = null;
    const isOwnPage = window.location.pathname.startsWith("/consultation");
    if (isOwnPage) {
      firstTimer = setTimeout(() => {
        autoCount.current = 1;
        setOpen(true);
      }, 5000);
    }

    return () => {
      window.removeEventListener("open-consultation-modal", onOpen);
      if (firstTimer) clearTimeout(firstTimer);
      if (secondTimer.current) clearTimeout(secondTimer.current);
    };
  }, []);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") close(); }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="consult-modal-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Request a Consultation"
    >
      <div
        className="consult-modal-inner"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="consult-modal-header">
          <span className="consult-modal-title">Request a Consultation</span>
          <button
            className="consult-modal-close"
            onClick={close}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <iframe
          src={FORM_URL}
          title="Request a Consultation"
          className="consult-modal-iframe"
          loading="lazy"
        />
      </div>
    </div>
  );
}
