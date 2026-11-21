"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function DonationModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIframeLoading(true);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="donation-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      <div className="donation-modal-container">
        {/* Modal Header */}
        <div className="donation-modal-header">
          <div className="donation-modal-header-info">
            <div className="donation-modal-badge">
              <i className="fa-solid fa-heart me-1" /> TAX-DEDUCTIBLE DONATION
            </div>
            <h2 id="donation-modal-title" className="donation-modal-title">
              Support Our Work
            </h2>
            <p className="donation-modal-subtitle">
              Initiative on Islam and Medicine &bull; 100% of your gift supports research, education &amp; community care
            </p>
          </div>
          <button
            type="button"
            className="donation-modal-close"
            onClick={onClose}
            aria-label="Close donation dialog"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Modal Body / Iframe */}
        <div className="donation-modal-body">
          {iframeLoading && (
            <div className="donation-modal-loader">
              <div className="donation-modal-spinner" />
              <p>Loading secure donation form...</p>
            </div>
          )}
          <iframe
            title="Donation form powered by Zeffy"
            src="https://www.zeffy.com/embed/donation-form/instilling-hikmah-in-healthcare"
            className={`donation-modal-iframe ${iframeLoading ? "donation-modal-iframe--hidden" : ""}`}
            allow="payment"
            allowtransparency="true"
            onLoad={() => setIframeLoading(false)}
          />
        </div>

        {/* Modal Footer Note */}
        <div className="donation-modal-footer">
          <span>
            <i className="fa-solid fa-lock me-1 text-success" /> Secure 256-bit encryption &bull; 0% platform fee via Zeffy
          </span>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
