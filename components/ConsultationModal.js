"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const FORM_URL = "https://links.360growthlab.com/widget/form/CstJIHikubJG75Zv16TR";

export default function ConsultationModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const autoCount = useRef(0);
  const secondTimer = useRef(null);
  const firstTimer = useRef(null);

  function close() {
    setOpen(false);
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
    return () => window.removeEventListener("open-consultation-modal", onOpen);
  }, []);

  useEffect(() => {
    // Reset and close when navigating away
    setOpen(false);
    autoCount.current = 0;
    if (firstTimer.current) clearTimeout(firstTimer.current);
    if (secondTimer.current) clearTimeout(secondTimer.current);

    const isOwnPage = pathname.startsWith("/consultation");
    if (isOwnPage) {
      firstTimer.current = setTimeout(() => {
        autoCount.current = 1;
        setOpen(true);
      }, 5000);
    }

    return () => {
      if (firstTimer.current) clearTimeout(firstTimer.current);
      if (secondTimer.current) clearTimeout(secondTimer.current);
    };
  }, [pathname]);

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
          loading="eager"
        />
      </div>
    </div>
  );
}
